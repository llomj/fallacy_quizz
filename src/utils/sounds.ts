/**
 * Web Audio API sound effects for quiz feedback and star celebrations.
 * All functions are safe to call when AudioContext is unavailable or suspended.
 * Uses a shared AudioContext so it can be resumed once on user gesture and then play reliably.
 *
 * Quiz correct/wrong: PRIMARY = HTML5 Audio + in-memory WAV (iOS Safari / PWA often will not play
 * oscillator-only SFX even after resume(); WAV + Audio.play() from tap is reliable). Web Audio = fallback.
 */

let sharedContext: AudioContext | null = null;

const SAMPLE_RATE_QUIZ = 22050;

function encodeWavMono16(samples: Float32Array, sampleRate: number): ArrayBuffer {
  const numSamples = samples.length;
  const dataSize = numSamples * 2;
  const buffer = new ArrayBuffer(44 + dataSize);
  const v = new DataView(buffer);
  const w = (off: number, s: string) => {
    for (let i = 0; i < s.length; i++) v.setUint8(off + i, s.charCodeAt(i));
  };
  w(0, 'RIFF');
  v.setUint32(4, 36 + dataSize, true);
  w(8, 'WAVE');
  w(12, 'fmt ');
  v.setUint32(16, 16, true);
  v.setUint16(20, 1, true);
  v.setUint16(22, 1, true);
  v.setUint32(24, sampleRate, true);
  v.setUint32(28, sampleRate * 2, true);
  v.setUint16(32, 2, true);
  v.setUint16(34, 16, true);
  w(36, 'data');
  v.setUint32(40, dataSize, true);
  let o = 44;
  for (let i = 0; i < numSamples; i++) {
    const x = Math.max(-1, Math.min(1, samples[i]));
    v.setInt16(o, x < 0 ? x * 0x8000 : x * 0x7fff, true);
    o += 2;
  }
  return buffer;
}

function buildWrongAnswerSamples(): Float32Array {
  const sr = SAMPLE_RATE_QUIZ;
  const dur = 0.48;
  const n = Math.floor(sr * dur);
  const samples = new Float32Array(n);
  const freqs = [420, 310, 240];
  const segment = dur / 3;
  let phase = 0;
  for (let i = 0; i < n; i++) {
    const t = i / sr;
    const seg = Math.min(2, Math.floor(t / segment));
    const f = freqs[seg];
    phase += (2 * Math.PI * f) / sr;
    const env = Math.min(1, t * 50) * Math.min(1, (dur - t) * 50);
    samples[i] = env * 0.48 * Math.sin(phase);
  }
  return samples;
}

function buildCorrectAnswerSamples(): Float32Array {
  const sr = SAMPLE_RATE_QUIZ;
  const dur = 0.42;
  const n = Math.floor(sr * dur);
  const samples = new Float32Array(n);
  const freqs = [1046.5, 1318.51, 1567.98, 2093.0];
  const starts = [0, 0.07, 0.14, 0.24];
  const lens = [0.06, 0.07, 0.08, 0.12];
  for (let k = 0; k < freqs.length; k++) {
    const t0 = starts[k];
    const L = lens[k];
    const f = freqs[k];
    for (let i = 0; i < n; i++) {
      const t = i / sr;
      if (t < t0 || t > t0 + L) continue;
      const local = t - t0;
      const env = Math.sin((Math.PI * local) / L);
      samples[i] += 0.28 * env * Math.sin(2 * Math.PI * f * t);
    }
  }
  let max = 0.0001;
  for (let i = 0; i < n; i++) max = Math.max(max, Math.abs(samples[i]));
  for (let i = 0; i < n; i++) samples[i] *= 0.48 / max;
  return samples;
}

const quizWavCache: { wrong: string | null; correct: string | null } = { wrong: null, correct: null };

function getQuizWavObjectUrl(kind: 'wrong' | 'correct'): string {
  if (kind === 'wrong') {
    if (!quizWavCache.wrong) {
      const buf = encodeWavMono16(buildWrongAnswerSamples(), SAMPLE_RATE_QUIZ);
      quizWavCache.wrong = URL.createObjectURL(new Blob([buf], { type: 'audio/wav' }));
    }
    return quizWavCache.wrong;
  }
  if (!quizWavCache.correct) {
    const buf = encodeWavMono16(buildCorrectAnswerSamples(), SAMPLE_RATE_QUIZ);
    quizWavCache.correct = URL.createObjectURL(new Blob([buf], { type: 'audio/wav' }));
  }
  return quizWavCache.correct;
}

/** Primary path for quiz taps: decoded WAV via media element (works on iOS when Web Audio does not). */
function playQuizHtml5(kind: 'wrong' | 'correct', fallback: () => void): void {
  if (typeof window === 'undefined') {
    fallback();
    return;
  }
  try {
    const audio = new Audio(getQuizWavObjectUrl(kind));
    audio.volume = 1;
    audio.setAttribute('playsinline', 'true');
    audio.setAttribute('webkit-playsinline', 'true');
    const p = audio.play();
    if (p !== undefined) {
      void p.catch(() => {
        fallback();
      });
    }
  } catch {
    fallback();
  }
}

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (sharedContext?.state === 'closed') sharedContext = null;
  if (sharedContext) return sharedContext;
  const Ctx = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctx) return null;
  sharedContext = new Ctx();
  return sharedContext;
}

/** Call from option pointerdown so iOS unlocks audio before the click fires wrong/correct SFX. */
export function primeAudioContext(): void {
  const ctx = getAudioContext();
  if (!ctx) return;
  void ctx.resume().catch(() => {});
}

function scheduleTone(
  audioContext: AudioContext,
  masterGain: GainNode,
  now: number,
  frequency: number,
  startOffset: number,
  duration: number,
  type: OscillatorType,
  volume = 0.12
) {
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const start = now + startOffset;
  const end = start + duration;

  osc.type = type;
  osc.frequency.setValueAtTime(frequency, start);
  gain.gain.setValueAtTime(0.0001, start);
  // Linear ramps: more reliable than exponential on Safari/iOS for short SFX
  gain.gain.linearRampToValueAtTime(volume, start + 0.018);
  gain.gain.linearRampToValueAtTime(0.0001, end);

  osc.connect(gain);
  gain.connect(masterGain);
  osc.start(start);
  osc.stop(end + 0.02);
}

function scheduleFreqRamp(
  audioContext: AudioContext,
  masterGain: GainNode,
  now: number,
  freqStart: number,
  freqEnd: number,
  startOffset: number,
  duration: number,
  type: OscillatorType,
  volume = 0.12
) {
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const start = now + startOffset;
  const end = start + duration;
  const safeEnd = Math.max(freqEnd, 20);

  osc.type = type;
  osc.frequency.setValueAtTime(freqStart, start);
  osc.frequency.exponentialRampToValueAtTime(safeEnd, end);
  gain.gain.setValueAtTime(0.0001, start);
  gain.gain.linearRampToValueAtTime(volume, start + 0.02);
  gain.gain.linearRampToValueAtTime(0.0001, end);

  osc.connect(gain);
  gain.connect(masterGain);
  osc.start(start);
  osc.stop(end + 0.02);
}

/** Very short click/cut sound for button and panel presses. */
export function playButtonClickSound(): void {
  const ctx = getAudioContext();
  if (!ctx) return;

  const schedule = () => {
    const now = ctx.currentTime;
    const masterGain = ctx.createGain();
    masterGain.connect(ctx.destination);
    masterGain.gain.setValueAtTime(0.0001, now);
    masterGain.gain.exponentialRampToValueAtTime(0.35, now + 0.01);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);

    const osc = ctx.createOscillator();
    osc.type = 'sine';
    // Quick pitch blip for a "tighter" feel
    osc.frequency.setValueAtTime(1200, now);
    osc.frequency.exponentialRampToValueAtTime(800, now + 0.05);
    osc.connect(masterGain);
    osc.start(now);
    osc.stop(now + 0.08);
  };

  if (ctx.state === 'suspended') {
    ctx.resume().then(schedule).catch(() => {});
  } else {
    schedule();
  }
}

function playCorrectAnswerSoundWebAudio(): void {
  const ctx = getAudioContext();
  if (!ctx) return;
  const exec = () => {
    const now = ctx.currentTime;
    const masterGain = ctx.createGain();
    masterGain.connect(ctx.destination);
    masterGain.gain.setValueAtTime(0.0001, now);
    masterGain.gain.linearRampToValueAtTime(0.42, now + 0.012);
    masterGain.gain.linearRampToValueAtTime(0.0001, now + 0.45);

    scheduleTone(ctx, masterGain, now, 1046.5, 0, 0.065, 'sine', 0.22);
    scheduleTone(ctx, masterGain, now, 1318.51, 0.07, 0.065, 'sine', 0.22);
    scheduleTone(ctx, masterGain, now, 1567.98, 0.14, 0.07, 'sine', 0.21);
    scheduleTone(ctx, masterGain, now, 2093.0, 0.22, 0.1, 'sine', 0.2);
    scheduleTone(ctx, masterGain, now, 2637.02, 0.32, 0.06, 'sine', 0.12);
  };
  void ctx.resume().then(exec).catch(() => {});
}

function playWrongAnswerSoundWebAudio(): void {
  const ctx = getAudioContext();
  if (!ctx) return;

  const exec = () => {
    const now = ctx.currentTime;
    const masterGain = ctx.createGain();
    masterGain.connect(ctx.destination);
    masterGain.gain.setValueAtTime(0.0001, now);
    masterGain.gain.linearRampToValueAtTime(0.55, now + 0.01);
    masterGain.gain.linearRampToValueAtTime(0.0001, now + 0.58);

    scheduleTone(ctx, masterGain, now, 392.0, 0, 0.11, 'sine', 0.48);
    scheduleTone(ctx, masterGain, now, 277.18, 0.1, 0.12, 'sine', 0.46);
    scheduleTone(ctx, masterGain, now, 196.0, 0.22, 0.16, 'sine', 0.44);
    scheduleFreqRamp(ctx, masterGain, now, 440, 155, 0.36, 0.2, 'sine', 0.38);
  };

  void ctx.resume().then(exec).catch(() => {});
}

/**
 * Correct answer: HTML5 WAV (primary) + Web Audio fallback.
 */
export function playCorrectAnswerSound(): void {
  playQuizHtml5('correct', playCorrectAnswerSoundWebAudio);
}

/**
 * Wrong answer: HTML5 WAV (primary) + Web Audio fallback.
 * Must be audible when the wrong panel turns purple (iOS often fails Web Audio-only).
 */
export function playWrongAnswerSound(): void {
  playQuizHtml5('wrong', playWrongAnswerSoundWebAudio);
}

/** Mario/Sonic-style congratulatory jingle when user earns 1–4 stars. */
export async function playStarCelebrationSound(): Promise<void> {
  const ctx = getAudioContext();
  if (!ctx) return;

  if (ctx.state === 'suspended') await ctx.resume().catch(() => {});

  const now = ctx.currentTime;
  const masterGain = ctx.createGain();
  masterGain.connect(ctx.destination);
  masterGain.gain.setValueAtTime(0.0001, now);
  masterGain.gain.exponentialRampToValueAtTime(0.25, now + 0.05);
  masterGain.gain.setValueAtTime(0.2, now + 0.8);
  masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.05);

  const schedule = (
    frequency: number,
    startOffset: number,
    duration: number,
    type: OscillatorType,
    volume = 0.14
  ) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const start = now + startOffset;
    const end = start + duration;
    osc.type = type;
    osc.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume, start + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, end);
    osc.connect(gain);
    gain.connect(masterGain);
    osc.start(start);
    osc.stop(end + 0.02);
  };

  // Classic Mario-style arpeggio + short coin sparkle tail
  const melody = [
    { freq: 523.25, at: 0, len: 0.1 },
    { freq: 659.25, at: 0.08, len: 0.1 },
    { freq: 783.99, at: 0.16, len: 0.1 },
    { freq: 1046.5, at: 0.24, len: 0.12 },
    { freq: 1318.51, at: 0.36, len: 0.14 },
    { freq: 1567.98, at: 0.52, len: 0.35 },
    { freq: 1318.51, at: 0.95, len: 0.12 },
    { freq: 1567.98, at: 1.12, len: 0.38 },
    { freq: 2093.0, at: 1.55, len: 0.12 },
    { freq: 1567.98, at: 1.72, len: 0.32 },
  ];
  melody.forEach((n) => {
    schedule(n.freq, n.at, n.len, 'square', 0.12);
    schedule(n.freq * 0.5, n.at, n.len, 'triangle', 0.07);
  });
  // Bass line
  schedule(261.63, 0, 0.45, 'sawtooth', 0.06);
  schedule(392.0, 0.35, 0.75, 'sawtooth', 0.05);
  schedule(523.25, 0.85, 0.95, 'sawtooth', 0.04);
}

/** Full victory fanfare when user completes 5 stars on a level (longer than 1–4★ jingle). */
export async function playFiveStarCelebrationSound(): Promise<void> {
  const ctx = getAudioContext();
  if (!ctx) return;

  if (ctx.state === 'suspended') ctx.resume().catch(() => {});

  const now = ctx.currentTime;
  const masterGain = ctx.createGain();
  masterGain.connect(ctx.destination);
  masterGain.gain.setValueAtTime(0.0001, now);
  masterGain.gain.exponentialRampToValueAtTime(0.25, now + 0.05);
  masterGain.gain.setValueAtTime(0.2, now + 1.2);
  masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 4.8);

  const schedule = (
    frequency: number,
    startOffset: number,
    duration: number,
    type: OscillatorType,
    volume = 0.14
  ) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const start = now + startOffset;
    const end = start + duration;
    osc.type = type;
    osc.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume, start + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, end);
    osc.connect(gain);
    gain.connect(masterGain);
    osc.start(start);
    osc.stop(end + 0.02);
  };

  // Extended level-complete style: two peaks + long cheer (longer than 1–4★ jingle)
  const melody = [
    { freq: 523.25, at: 0, len: 0.2 },
    { freq: 659.25, at: 0.18, len: 0.2 },
    { freq: 783.99, at: 0.36, len: 0.2 },
    { freq: 1046.5, at: 0.55, len: 0.32 },
    { freq: 1318.51, at: 0.85, len: 0.36 },
    { freq: 1567.98, at: 1.18, len: 0.45 },
    { freq: 1318.51, at: 1.62, len: 0.28 },
    { freq: 1046.5, at: 1.9, len: 0.32 },
    { freq: 1318.51, at: 2.22, len: 0.42 },
    { freq: 1567.98, at: 2.62, len: 0.48 },
    { freq: 2093.0, at: 3.08, len: 0.55 },
    { freq: 1567.98, at: 3.62, len: 0.35 },
    { freq: 1318.51, at: 3.95, len: 0.45 },
    { freq: 1567.98, at: 4.35, len: 0.65 },
  ];
  melody.forEach((n) => {
    schedule(n.freq, n.at, n.len, 'square', 0.12);
    schedule(n.freq * 0.5, n.at, n.len, 'triangle', 0.07);
  });
  schedule(261.63, 0, 1.8, 'sawtooth', 0.06);
  schedule(329.63, 0.45, 1.8, 'sawtooth', 0.05);
  schedule(392, 0.95, 2, 'sawtooth', 0.05);
  schedule(523.25, 1.45, 2.2, 'sawtooth', 0.04);
  schedule(261.63, 2.5, 1.8, 'sawtooth', 0.05);
  schedule(392, 3, 1.6, 'sawtooth', 0.05);
}

/** Longer, more joyful victory fanfare for Random mode 5 stars (many questions, hard to achieve). */
export async function playRandomFiveStarCelebrationSound(): Promise<void> {
  const ctx = getAudioContext();
  if (!ctx) return;

  if (ctx.state === 'suspended') ctx.resume().catch(() => {});

  const now = ctx.currentTime;
  const masterGain = ctx.createGain();
  masterGain.connect(ctx.destination);
  masterGain.gain.setValueAtTime(0.0001, now);
  masterGain.gain.exponentialRampToValueAtTime(0.28, now + 0.05);
  masterGain.gain.setValueAtTime(0.22, now + 2.5);
  masterGain.gain.setValueAtTime(0.18, now + 5);
  masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 7.5);

  const schedule = (
    frequency: number,
    startOffset: number,
    duration: number,
    type: OscillatorType,
    volume = 0.14
  ) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const start = now + startOffset;
    const end = start + duration;
    osc.type = type;
    osc.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume, start + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, end);
    osc.connect(gain);
    gain.connect(masterGain);
    osc.start(start);
    osc.stop(end + 0.02);
  };

  // Long, joyful game-style melody: multiple peaks, celebratory
  const melody = [
    { freq: 523.25, at: 0, len: 0.22 },
    { freq: 659.25, at: 0.2, len: 0.22 },
    { freq: 783.99, at: 0.4, len: 0.25 },
    { freq: 1046.5, at: 0.65, len: 0.35 },
    { freq: 1318.51, at: 0.95, len: 0.4 },
    { freq: 1567.98, at: 1.35, len: 0.55 },
    { freq: 1318.51, at: 1.9, len: 0.3 },
    { freq: 1046.5, at: 2.2, len: 0.35 },
    { freq: 1318.51, at: 2.55, len: 0.45 },
    { freq: 1567.98, at: 3, len: 0.5 },
    { freq: 2093, at: 3.5, len: 0.6 },
    { freq: 1567.98, at: 4.1, len: 0.4 },
    { freq: 1318.51, at: 4.5, len: 0.45 },
    { freq: 1046.5, at: 4.95, len: 0.5 },
    { freq: 1318.51, at: 5.45, len: 0.5 },
    { freq: 1567.98, at: 5.95, len: 0.55 },
    { freq: 2093, at: 6.5, len: 0.7 },
    { freq: 1318.51, at: 7.2, len: 0.9 },
  ];
  melody.forEach((n) => {
    schedule(n.freq, n.at, n.len, 'square', 0.13);
    schedule(n.freq * 0.5, n.at, n.len, 'triangle', 0.07);
  });
  schedule(261.63, 0, 3, 'sawtooth', 0.06);
  schedule(329.63, 0.5, 3, 'sawtooth', 0.05);
  schedule(392, 1, 3.5, 'sawtooth', 0.05);
  schedule(523.25, 1.5, 3, 'sawtooth', 0.04);
  schedule(261.63, 4, 2.5, 'sawtooth', 0.05);
  schedule(392, 4.5, 3, 'sawtooth', 0.05);
  schedule(523.25, 5, 2.5, 'sawtooth', 0.05);
}

/** Extended victory fanfare when user achieves 5 stars on ALL levels. Longer, happier congratulatory music. */
export async function playAllLevelsCelebrationSound(): Promise<void> {
  const ctx = getAudioContext();
  if (!ctx) return;

  if (ctx.state === 'suspended') ctx.resume().catch(() => {});

  const now = ctx.currentTime;
  const masterGain = ctx.createGain();
  masterGain.connect(ctx.destination);
  masterGain.gain.setValueAtTime(0.0001, now);
  masterGain.gain.exponentialRampToValueAtTime(0.28, now + 0.05);
  masterGain.gain.setValueAtTime(0.22, now + 2);
  masterGain.gain.setValueAtTime(0.18, now + 4);
  masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 6.5);

  const schedule = (
    frequency: number,
    startOffset: number,
    duration: number,
    type: OscillatorType,
    volume = 0.14
  ) => {
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const start = now + startOffset;
    const end = start + duration;
    osc.type = type;
    osc.frequency.setValueAtTime(frequency, start);
    gain.gain.setValueAtTime(0.0001, start);
    gain.gain.exponentialRampToValueAtTime(volume, start + 0.03);
    gain.gain.exponentialRampToValueAtTime(0.0001, end);
    osc.connect(gain);
    gain.connect(masterGain);
    osc.start(start);
    osc.stop(end + 0.02);
  };

  // Longer triumphant melody: multiple peaks, happy congratulatory feel
  const melody = [
    { freq: 523.25, at: 0, len: 0.22 },      // C5 - start
    { freq: 659.25, at: 0.2, len: 0.22 },   // E5
    { freq: 783.99, at: 0.4, len: 0.25 },   // G5
    { freq: 1046.5, at: 0.65, len: 0.35 },  // C6
    { freq: 1318.51, at: 0.95, len: 0.4 },  // E6
    { freq: 1567.98, at: 1.35, len: 0.55 }, // G6 - first climax
    { freq: 1318.51, at: 1.9, len: 0.3 },   // E6
    { freq: 1046.5, at: 2.2, len: 0.35 },   // C6
    { freq: 1318.51, at: 2.55, len: 0.45 }, // E6
    { freq: 1567.98, at: 3, len: 0.5 },     // G6 - second peak
    { freq: 2093, at: 3.5, len: 0.6 },      // C7 - highest peak!
    { freq: 1567.98, at: 4.1, len: 0.4 },   // G6
    { freq: 1318.51, at: 4.5, len: 0.45 },  // E6
    { freq: 1046.5, at: 4.95, len: 0.5 },   // C6
    { freq: 1318.51, at: 5.45, len: 0.9 },  // E6 - long final cheer
  ];
  melody.forEach((n) => {
    schedule(n.freq, n.at, n.len, 'square', 0.13);
    schedule(n.freq * 0.5, n.at, n.len, 'triangle', 0.07);
  });
  // Extended bass / chords for full game-complete feel
  schedule(261.63, 0, 2.5, 'sawtooth', 0.06);
  schedule(329.63, 0.5, 2.5, 'sawtooth', 0.05);
  schedule(392, 1, 3, 'sawtooth', 0.05);
  schedule(523.25, 1.5, 2.5, 'sawtooth', 0.04);
  schedule(261.63, 3.2, 2, 'sawtooth', 0.05);
  schedule(392, 3.7, 2.5, 'sawtooth', 0.05);
  schedule(523.25, 4.2, 2.3, 'sawtooth', 0.05);
}

/**
 * Web Audio API sound effects for quiz feedback and star celebrations.
 * All functions are safe to call when AudioContext is unavailable or suspended.
 * Uses a shared AudioContext so it can be resumed once on user gesture and then play reliably.
 */

let sharedContext: AudioContext | null = null;

function getAudioContext(): AudioContext | null {
  if (typeof window === 'undefined') return null;
  if (sharedContext?.state === 'closed') sharedContext = null;
  if (sharedContext) return sharedContext;
  const Ctx = window.AudioContext || (window as Window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!Ctx) return null;
  sharedContext = new Ctx();
  return sharedContext;
}

/** Run after AudioContext is running (mobile starts suspended until a user gesture). */
function withAudioContext(run: (ctx: AudioContext) => void): void {
  const ctx = getAudioContext();
  if (!ctx) return;
  const exec = () => run(ctx);
  if (ctx.state === 'suspended') {
    void ctx.resume().then(exec).catch(() => {});
  } else {
    exec();
  }
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
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, end);

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
  gain.gain.exponentialRampToValueAtTime(volume, start + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, end);

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

/**
 * Clear “correct / yes” feedback: bright major arpeggio up + tiny sparkle.
 * Sounds nothing like the wrong-answer buzzer.
 */
export function playCorrectAnswerSound(): void {
  withAudioContext((ctx) => {
    const now = ctx.currentTime;
    const masterGain = ctx.createGain();
    masterGain.connect(ctx.destination);
    masterGain.gain.setValueAtTime(0.0001, now);
    masterGain.gain.exponentialRampToValueAtTime(0.34, now + 0.02);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.48);

    // C5 → E5 → G5 → C6: classic “you got it” rising chime
    scheduleTone(ctx, masterGain, now, 523.25, 0, 0.09, 'sine', 0.2);
    scheduleTone(ctx, masterGain, now, 659.25, 0.07, 0.09, 'sine', 0.19);
    scheduleTone(ctx, masterGain, now, 783.99, 0.14, 0.1, 'sine', 0.18);
    scheduleTone(ctx, masterGain, now, 1046.5, 0.22, 0.16, 'triangle', 0.17);
    scheduleTone(ctx, masterGain, now, 2093.0, 0.3, 0.05, 'sine', 0.08);
    scheduleTone(ctx, masterGain, now, 2637.0, 0.34, 0.04, 'sine', 0.06);
  });
}

/**
 * Clear “wrong / no” feedback: low buzzer + descending “womp” (game-show / quiz wrong).
 * Deliberately different timbre and contour from the correct chime.
 */
export function playWrongAnswerSound(): void {
  withAudioContext((ctx) => {
    const now = ctx.currentTime;
    const masterGain = ctx.createGain();
    masterGain.connect(ctx.destination);
    masterGain.gain.setValueAtTime(0.0001, now);
    masterGain.gain.exponentialRampToValueAtTime(0.28, now + 0.02);
    masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.52);

    // Short harsh buzz (square) — “error”
    scheduleTone(ctx, masterGain, now, 92, 0, 0.11, 'square', 0.11);
    scheduleTone(ctx, masterGain, now, 87, 0.02, 0.1, 'square', 0.08);
    // Descending saw “womp” — unmistakably negative
    scheduleFreqRamp(ctx, masterGain, now, 240, 65, 0.1, 0.22, 'sawtooth', 0.1);
    // Flat second “uh-oh” blip
    scheduleTone(ctx, masterGain, now, 155, 0.28, 0.12, 'triangle', 0.09);
    scheduleTone(ctx, masterGain, now, 118, 0.36, 0.14, 'triangle', 0.08);
  });
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

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

/** Short "cute" positive tone for correct answer. */
export function playCorrectAnswerSound(): void {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const masterGain = ctx.createGain();
  masterGain.connect(ctx.destination);
  masterGain.gain.setValueAtTime(0.0001, now);
  masterGain.gain.exponentialRampToValueAtTime(0.3, now + 0.02);
  masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);

  // Cute upward "ping": E5 -> G5 -> C6
  scheduleTone(ctx, masterGain, now, 659.25, 0, 0.12, 'sine', 0.25);   // E5
  scheduleTone(ctx, masterGain, now, 783.99, 0.04, 0.12, 'sine', 0.22); // G5
  scheduleTone(ctx, masterGain, now, 1046.5, 0.08, 0.25, 'sine', 0.18); // C6
  
  // Adding a tiny high-pitched sparkle
  scheduleTone(ctx, masterGain, now, 2093.0, 0.1, 0.05, 'triangle', 0.1);

  if (ctx.state === 'suspended') {
    ctx.resume().catch(() => {});
  }
}

/** Short "squashy" negative tone for wrong answer. */
export function playWrongAnswerSound(): void {
  const ctx = getAudioContext();
  if (!ctx) return;

  const now = ctx.currentTime;
  const masterGain = ctx.createGain();
  masterGain.connect(ctx.destination);
  masterGain.gain.setValueAtTime(0.0001, now);
  masterGain.gain.exponentialRampToValueAtTime(0.25, now + 0.02);
  masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.45);

  // Dissonant descending "thud"
  scheduleTone(ctx, masterGain, now, 180, 0, 0.25, 'sawtooth', 0.15);
  scheduleTone(ctx, masterGain, now, 130, 0.08, 0.3, 'square', 0.1);
  scheduleTone(ctx, masterGain, now, 90, 0.16, 0.35, 'triangle', 0.2);

  if (ctx.state === 'suspended') {
    ctx.resume().catch(() => {});
  }
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
  masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.8);

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

  // Classic Mario-style arpeggio: C5 E5 G5 C6 E6 G6 (fast)
  const melody = [
    { freq: 523.25, at: 0, len: 0.1 },    // C5
    { freq: 659.25, at: 0.08, len: 0.1 }, // E5
    { freq: 783.99, at: 0.16, len: 0.1 }, // G5
    { freq: 1046.5, at: 0.24, len: 0.12 }, // C6
    { freq: 1318.51, at: 0.36, len: 0.15 }, // E6
    { freq: 1567.98, at: 0.52, len: 0.4 }, // G6 long
    { freq: 1318.51, at: 1.0, len: 0.2 },  // E6 descent
    { freq: 1567.98, at: 1.25, len: 0.5 }, // G6 final
  ];
  melody.forEach((n) => {
    schedule(n.freq, n.at, n.len, 'square', 0.12);
    schedule(n.freq * 0.5, n.at, n.len, 'triangle', 0.07);
  });
  // Bass line
  schedule(261.63, 0, 0.4, 'sawtooth', 0.06);
  schedule(392.00, 0.4, 0.6, 'sawtooth', 0.05);
  schedule(523.25, 1.0, 0.8, 'sawtooth', 0.04);
}

/** Full victory fanfare when user completes 5 stars (Mario/Sonic/Alex Kidd style). */
export async function playFiveStarCelebrationSound(): Promise<void> {
  const ctx = getAudioContext();
  if (!ctx) return;

  if (ctx.state === 'suspended') ctx.resume().catch(() => {});

  const now = ctx.currentTime;
  const masterGain = ctx.createGain();
  masterGain.connect(ctx.destination);
  masterGain.gain.setValueAtTime(0.0001, now);
  masterGain.gain.exponentialRampToValueAtTime(0.25, now + 0.05);
  masterGain.gain.setValueAtTime(0.2, now + 1);
  masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 3);

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

  // Victory melody: ascending triumph, then celebratory descent (Alex Kidd / Sonic level complete style)
  const melody = [
    { freq: 523.25, at: 0, len: 0.22 },     // C5
    { freq: 659.25, at: 0.2, len: 0.22 },  // E5
    { freq: 783.99, at: 0.4, len: 0.22 },  // G5
    { freq: 1046.5, at: 0.6, len: 0.35 },  // C6
    { freq: 1318.51, at: 0.9, len: 0.4 },  // E6
    { freq: 1567.98, at: 1.25, len: 0.5 }, // G6 - climax!
    { freq: 1318.51, at: 1.75, len: 0.3 }, // E6
    { freq: 1046.5, at: 2.05, len: 0.35 }, // C6
    { freq: 1318.51, at: 2.4, len: 0.55 }, // E6 - final cheer
  ];
  melody.forEach((n) => {
    schedule(n.freq, n.at, n.len, 'square', 0.12);
    schedule(n.freq * 0.5, n.at, n.len, 'triangle', 0.07);
  });
  // Bass / chords
  schedule(261.63, 0, 1.2, 'sawtooth', 0.06);
  schedule(329.63, 0.5, 1.2, 'sawtooth', 0.05);
  schedule(392, 1, 1.5, 'sawtooth', 0.05);
  schedule(523.25, 1.5, 1.5, 'sawtooth', 0.04);
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

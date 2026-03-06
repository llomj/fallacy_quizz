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

/** Short positive tone for correct answer. */
export function playCorrectAnswerSound(): void {
  const ctx = getAudioContext();
  if (!ctx) return;

  // Schedule immediately (same tick as user click) so playback works after resume
  const now = ctx.currentTime;
  const masterGain = ctx.createGain();
  masterGain.connect(ctx.destination);
  masterGain.gain.setValueAtTime(0.0001, now);
  masterGain.gain.exponentialRampToValueAtTime(0.35, now + 0.02);
  masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.3);

  scheduleTone(ctx, masterGain, now, 523.25, 0, 0.25, 'sine', 0.35);   // C5
  scheduleTone(ctx, masterGain, now, 659.25, 0.08, 0.2, 'sine', 0.28);  // E5
  scheduleTone(ctx, masterGain, now, 783.99, 0.16, 0.14, 'sine', 0.22); // G5

  if (ctx.state === 'suspended') {
    ctx.resume().catch(() => {});
  }
}

/** Short negative tone for wrong answer. */
export function playWrongAnswerSound(): void {
  const ctx = getAudioContext();
  if (!ctx) return;

  // Schedule immediately (same tick as user click) so playback works after resume
  const now = ctx.currentTime;
  const masterGain = ctx.createGain();
  masterGain.connect(ctx.destination);
  masterGain.gain.setValueAtTime(0.0001, now);
  masterGain.gain.exponentialRampToValueAtTime(0.3, now + 0.02);
  masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);

  scheduleTone(ctx, masterGain, now, 200, 0, 0.3, 'sawtooth', 0.2);
  scheduleTone(ctx, masterGain, now, 150, 0.1, 0.22, 'square', 0.12);

  if (ctx.state === 'suspended') {
    ctx.resume().catch(() => {});
  }
}

/** Mario/Sonic-style congratulatory jingle when user earns 1–4 stars. */
export async function playStarCelebrationSound(): Promise<void> {
  const ctx = getAudioContext();
  if (!ctx) return;

  if (ctx.state === 'suspended') ctx.resume().catch(() => {});

  const now = ctx.currentTime;
  const masterGain = ctx.createGain();
  masterGain.connect(ctx.destination);
  masterGain.gain.setValueAtTime(0.0001, now);
  masterGain.gain.exponentialRampToValueAtTime(0.22, now + 0.02);
  masterGain.gain.setValueAtTime(0.18, now + 0.6);
  masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 1.5);

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

  // Upward arpeggio (Mario coin / level-up style): C5 - E5 - G5 - C6 - E6 - hold
  const melody = [
    { freq: 523.25, at: 0, len: 0.14 },    // C5
    { freq: 659.25, at: 0.12, len: 0.14 }, // E5
    { freq: 783.99, at: 0.24, len: 0.14 }, // G5
    { freq: 1046.5, at: 0.36, len: 0.18 }, // C6
    { freq: 1318.51, at: 0.5, len: 0.35 }, // E6 - peak
    { freq: 1046.5, at: 0.88, len: 0.2 },  // C6 - descent
    { freq: 1318.51, at: 1.08, len: 0.35 }, // E6 - final flourish
  ];
  melody.forEach((n) => {
    schedule(n.freq, n.at, n.len, 'square', 0.12);
    schedule(n.freq * 0.5, n.at, n.len, 'triangle', 0.06);
  });
  // Bass line
  schedule(261.63, 0, 0.5, 'sawtooth', 0.05);
  schedule(329.63, 0.4, 0.6, 'sawtooth', 0.04);
  schedule(392, 0.8, 0.7, 'sawtooth', 0.04);
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

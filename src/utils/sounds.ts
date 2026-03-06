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

/** Game-like fanfare when user earns 1–4 stars (single star or progress). */
export async function playStarCelebrationSound(): Promise<void> {
  const ctx = getAudioContext();
  if (!ctx) return;

  if (ctx.state === 'suspended') await ctx.resume();

  const now = ctx.currentTime;
  const masterGain = ctx.createGain();
  masterGain.connect(ctx.destination);
  masterGain.gain.setValueAtTime(0.0001, now);
  masterGain.gain.exponentialRampToValueAtTime(0.08, now + 0.02);
  masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.72);

  const schedule = (
    frequency: number,
    startOffset: number,
    duration: number,
    type: OscillatorType,
    volume = 0.12
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

  const leadNotes = [
    { freq: 587.33, at: 0.0, len: 0.07 },
    { freq: 739.99, at: 0.08, len: 0.07 },
    { freq: 880.0, at: 0.16, len: 0.08 },
    { freq: 1108.73, at: 0.25, len: 0.1 },
    { freq: 1318.51, at: 0.37, len: 0.24 },
  ];
  leadNotes.forEach((note) => {
    schedule(note.freq, note.at, note.len, 'square', 0.07);
    schedule(note.freq * 0.5, note.at, note.len, 'triangle', 0.035);
    schedule(note.freq * 1.5, note.at + 0.01, note.len * 0.55, 'triangle', 0.015);
  });
  schedule(146.83, 0.0, 0.18, 'sawtooth', 0.028);
  schedule(185.0, 0.18, 0.18, 'sawtooth', 0.028);
  schedule(220.0, 0.36, 0.24, 'sawtooth', 0.028);

  setTimeout(() => void ctx.close(), 900);
}

/** Longer congratulatory fanfare when user completes 5 stars for a level. */
export async function playFiveStarCelebrationSound(): Promise<void> {
  const ctx = getAudioContext();
  if (!ctx) return;

  if (ctx.state === 'suspended') await ctx.resume();

  const now = ctx.currentTime;
  const masterGain = ctx.createGain();
  masterGain.connect(ctx.destination);
  masterGain.gain.setValueAtTime(0.0001, now);
  masterGain.gain.exponentialRampToValueAtTime(0.1, now + 0.05);
  masterGain.gain.setValueAtTime(0.08, now + 0.5);
  masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 2.2);

  const schedule = (
    frequency: number,
    startOffset: number,
    duration: number,
    type: OscillatorType,
    volume = 0.12
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

  // Victory / level-complete melody (game-like congratulation)
  const melody = [
    { freq: 523.25, at: 0, len: 0.2 },    // C5
    { freq: 659.25, at: 0.22, len: 0.2 }, // E5
    { freq: 783.99, at: 0.44, len: 0.2 }, // G5
    { freq: 1046.5, at: 0.66, len: 0.35 }, // C6
    { freq: 783.99, at: 1.05, len: 0.2 },
    { freq: 1046.5, at: 1.28, len: 0.4 },
    { freq: 1318.51, at: 1.72, len: 0.5 }, // E6 - climax
  ];
  melody.forEach((n) => {
    schedule(n.freq, n.at, n.len, 'square', 0.06);
    schedule(n.freq * 0.5, n.at, n.len, 'triangle', 0.04);
  });
  // Bass
  schedule(261.63, 0, 0.9, 'sawtooth', 0.03);
  schedule(329.63, 0.5, 0.9, 'sawtooth', 0.025);
  schedule(392, 1.0, 0.9, 'sawtooth', 0.025);

  setTimeout(() => void ctx.close(), 2500);
}

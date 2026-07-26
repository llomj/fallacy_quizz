export type MutationGradientId = 'sunset' | 'ocean' | 'forest' | 'ember' | 'ice' | 'rose';
export type QuizAccentId = 'yellow' | 'green' | 'blue' | 'cyan' | 'orange' | 'pink';

export interface MutationGradient {
  id: MutationGradientId;
  labelEn: string;
  labelFr: string;
  from: string;
  to: string;
  shadow: string;
}

export interface QuizAccent {
  id: QuizAccentId;
  labelEn: string;
  labelFr: string;
  hex: string;
  rgb: string;
}

export const MUTATION_GRADIENTS: MutationGradient[] = [
  { id: 'sunset', labelEn: 'Original', labelFr: 'Original', from: '#fde047', to: '#ff00ff', shadow: 'rgba(217, 70, 239, 0.38)' },
  { id: 'ocean', labelEn: 'Ocean', labelFr: 'Océan', from: '#38bdf8', to: '#2563eb', shadow: 'rgba(37, 99, 235, 0.38)' },
  { id: 'forest', labelEn: 'Forest', labelFr: 'Forêt', from: '#4ade80', to: '#059669', shadow: 'rgba(5, 150, 105, 0.38)' },
  { id: 'ember', labelEn: 'Ember', labelFr: 'Braise', from: '#fb923c', to: '#ef4444', shadow: 'rgba(239, 68, 68, 0.38)' },
  { id: 'ice', labelEn: 'Ice', labelFr: 'Glace', from: '#67e8f9', to: '#14b8a6', shadow: 'rgba(20, 184, 166, 0.38)' },
  { id: 'rose', labelEn: 'Rose', labelFr: 'Rose', from: '#fb7185', to: '#ec4899', shadow: 'rgba(236, 72, 153, 0.38)' },
];

export const QUIZ_ACCENTS: QuizAccent[] = [
  { id: 'yellow', labelEn: 'Yellow', labelFr: 'Jaune', hex: '#facc15', rgb: '250 204 21' },
  { id: 'green', labelEn: 'Green', labelFr: 'Vert', hex: '#4ade80', rgb: '74 222 128' },
  { id: 'blue', labelEn: 'Blue', labelFr: 'Bleu', hex: '#60a5fa', rgb: '96 165 250' },
  { id: 'cyan', labelEn: 'Cyan', labelFr: 'Cyan', hex: '#22d3ee', rgb: '34 211 238' },
  { id: 'orange', labelEn: 'Orange', labelFr: 'Orange', hex: '#fb923c', rgb: '251 146 60' },
  { id: 'pink', labelEn: 'Pink', labelFr: 'Rose', hex: '#f472b6', rgb: '244 114 182' },
];

export const isMutationGradientId = (value: unknown): value is MutationGradientId =>
  MUTATION_GRADIENTS.some((gradient) => gradient.id === value);

export const isQuizAccentId = (value: unknown): value is QuizAccentId =>
  QUIZ_ACCENTS.some((accent) => accent.id === value);

export const getMutationGradient = (id: MutationGradientId): MutationGradient =>
  MUTATION_GRADIENTS.find((gradient) => gradient.id === id) ?? MUTATION_GRADIENTS[0];

export const getQuizAccent = (id: QuizAccentId): QuizAccent =>
  QUIZ_ACCENTS.find((accent) => accent.id === id) ?? QUIZ_ACCENTS[0];

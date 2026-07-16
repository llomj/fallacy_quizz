import type { Question } from '../../types';
import { PersonaStage, SubLevel } from '../../types';

function makeQuestion(
  id: number,
  concept: string,
  difficulty: number,
  subLevel: SubLevel,
  question: string,
  options: string[],
  correct_option_index: number,
  explanation: string,
  detailedExplanationBeginner: string,
  detailedExplanationIntermediate: string,
  detailedExplanationExpert: string
): Question {
  return {
    id,
    level: 8,
    persona_stage: PersonaStage.SHARK,
    concept,
    difficulty,
    subLevel,
    question,
    options,
    correct_option_index,
    explanation,
    detailedExplanationBeginner,
    detailedExplanationIntermediate,
    detailedExplanationExpert,
    questionFormat: 'standard',
  };
}

const BEGINNER_EN = 'The mistake comes from protecting self-image by claiming ownership of success and exporting the cause of failure.';
const INTERMEDIATE_EN = 'Informal Logic - Level 8 mixed failure: explanations are selectively rewritten so the speaker stays talented, noble, or unfairly blocked.';
const BEGINNER_FR = 'L’erreur vient du fait qu’on protège son image de soi en s’appropriant le succès et en exportant la cause de l’échec.';
const INTERMEDIATE_FR = 'Logique informelle - Échec mixte de niveau 8 : les explications sont réécrites sélectivement pour que le locuteur reste talentueux, noble ou injustement bloqué.';

export const LEVEL_8_MIXED_PART9_OVERRIDES_EN: Question[] = [
  makeQuestion(725, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"When Clara’s article gets shared everywhere, she says readers naturally gravitate toward excellence. When the next article disappears, she says the platform buried it because truth scares advertisers."', ['Self-Serving Bias', 'Appeal to Fear', 'Weak Analogy', 'Middle Ground Fallacy'], 0, 'She treats success as proof of merit and failure as proof of sabotage.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: flattering outcomes are trusted while unflattering ones are reinterpreted as obstruction.'),
  makeQuestion(726, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"After winning the bake-off, Ian says real craftsmanship always rises to the top. After losing the rematch, he says judges these days prefer gimmicks over substance."', ['Appeal to Novelty', 'Self-Serving Bias', 'False Cause', 'Special Pleading'], 1, 'He praises the system when it rewards him and discredits it when it does not.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: evaluation standards move with the speaker’s personal outcome.'),
  makeQuestion(727, 'Cognitive Biases', 1, SubLevel.BEGINNER, 'Identify the logical fallacy in this example:\n\n"Maya says the fundraiser succeeded because people could feel her leadership. When donations slump the next month, she says the town has become numb to vision."', ['Regression Fallacy', 'Appeal to Consequences', 'Association Fallacy', 'Self-Serving Bias'], 3, 'Success is credited to her personal strengths, while failure is blamed on the audience.', BEGINNER_EN, INTERMEDIATE_EN, 'Cognitive Biases - Informal Logic - Level 8 mixed failure: the causal story is edited to keep the self at the center of praise and away from blame.'),
];

export const LEVEL_8_MIXED_PART9_OVERRIDES_FR: Question[] = [
  makeQuestion(725, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Quand l’article de Clara est partagé partout, elle dit que les lecteurs sont naturellement attirés par l’excellence. Quand l’article suivant disparaît, elle dit que la plateforme l’a enterré parce que la vérité fait peur aux annonceurs."', ['Self-Serving Bias', 'Appeal to Fear', 'Weak Analogy', 'Middle Ground Fallacy'], 0, 'Elle traite le succès comme une preuve de mérite et l’échec comme une preuve de sabotage.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : les résultats flatteurs sont jugés fiables tandis que les autres sont réinterprétés comme des blocages.'),
  makeQuestion(726, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Après avoir gagné le concours de pâtisserie, Ian dit que le vrai savoir-faire finit toujours au sommet. Après avoir perdu la revanche, il dit que les juges d’aujourd’hui préfèrent les gadgets au fond."', ['Appeal to Novelty', 'Self-Serving Bias', 'False Cause', 'Special Pleading'], 1, 'Il valorise le système quand il le récompense et le discrédite quand ce n’est pas le cas.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : les critères d’évaluation bougent avec le résultat personnel du locuteur.'),
  makeQuestion(727, 'Biais cognitifs', 1, SubLevel.BEGINNER, 'Identifiez le sophisme dans cet exemple :\n\n"Maya dit que la collecte a réussi parce que les gens ont senti son leadership. Quand les dons baissent le mois suivant, elle dit que la ville est devenue insensible à la vision."', ['Regression Fallacy', 'Appeal to Consequences', 'Association Fallacy', 'Self-Serving Bias'], 3, 'Le succès est attribué à ses forces personnelles, tandis que l’échec est reproché au public.', BEGINNER_FR, INTERMEDIATE_FR, 'Biais cognitifs - Logique informelle - Échec mixte de niveau 8 : le récit causal est modifié pour garder le moi au centre des éloges et loin du blâme.'),
];

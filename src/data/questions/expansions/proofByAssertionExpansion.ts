import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Mia says the policy is fair because it is fair.', 'Mia dit que la règle est juste parce qu elle est juste.'],
  ['Leo claims the app is reliable because it is reliable.', 'Leo affirme que l application est fiable parce qu elle est fiable.'],
  ['Priya says the restaurant is authentic because it feels authentic to her.', 'Priya dit que le restaurant est authentique parce qu il lui semble authentique.'],
  ['Omar says the homework answer is correct because it is correct.', 'Omar dit que la réponse aux devoirs est correcte parce qu elle est correcte.'],
  ['Nina says the budget is balanced because it balances the budget.', 'Nina dit que le budget est équilibré parce qu il équilibre le budget.'],
  ['Eli says the movie is good because it is good.', 'Eli dit que le film est bon parce qu il est bon.'],
  ['Ava says the cake is the best because it is the best.', 'Ava dit que le gâteau est le meilleur parce qu il est le meilleur.'],
  ['Theo says the meeting was useful because it was useful.', 'Théo dit que la réunion était utile parce qu elle était utile.'],
  ['Juno says the route is efficient because it gets you there efficiently.', 'Juno dit que l itinéraire est efficace parce qu il permet d arriver efficacement.'],
  ['Mia says the gift is thoughtful because it feels thoughtful.', 'Mia dit que le cadeau est attentionné parce qu il paraît attentionné.'],
  ['Finn says the room is calm because it is calm.', 'Finn dit que la pièce est calme parce qu elle est calme.'],
  ['Lea says the schedule works because it works.', 'Léa dit que l emploi du temps fonctionne parce qu il fonctionne.'],
  ['Hugo says the podcast is brilliant because it is brilliant.', 'Hugo dit que le podcast est brillant parce qu il est brillant.'],
  ['Riley says the new rule is good because it is good for everyone.', 'Riley dit que la nouvelle règle est bonne parce qu elle est bonne pour tout le monde.'],
  ['Pia says the class is fair because it treats everyone fairly.', 'Pia dit que le cours est juste parce qu il traite tout le monde justement.'],
  ['Ben says the café is excellent because it is excellent.', 'Ben dit que le café est excellent parce qu il est excellent.'],
  ['Nora says the report is true because it tells the truth.', 'Nora dit que le rapport est vrai parce qu il dit la vérité.'],
  ['Cole says the game is fun because it is fun.', 'Cole dit que le jeu est amusant parce qu il est amusant.'],
  ['Jade says the neighbor is kind because they are kind.', 'Jade dit que le voisin est gentil parce qu il est gentil.'],
  ['Omar says the car is safe because it is safe.', 'Omar dit que la voiture est sûre parce qu elle est sûre.'],
  ['Tia says the event is worth it because it is worth it.', 'Tia dit que l événement en vaut la peine parce qu il en vaut la peine.'],
  ['Grant says the phone is good because it is good.', 'Grant dit que le téléphone est bon parce qu il est bon.'],
  ['Iris says the teacher is right because the teacher is right.', 'Iris dit que le professeur a raison parce que le professeur a raison.'],
  ['Sam says the plan is smart because it is smart.', 'Sam dit que le plan est intelligent parce qu il est intelligent.'],
  ['Mina says the store is honest because it is honest.', 'Mina dit que le magasin est honnête parce qu il est honnête.'],
  ['Jules says the trip is safe because it is safe.', 'Jules dit que le voyage est sûr parce qu il est sûr.'],
  ['Lina says the book is important because it is important.', 'Lina dit que le livre est important parce qu il est important.'],
  ['Zoe says the team is the best because it is the best.', 'Zoé dit que l équipe est la meilleure parce qu elle est la meilleure.'],
  ['Kai says the weather report is right because it is right.', 'Kai dit que le bulletin météo a raison parce qu il a raison.'],
  ['Maya says the class project is solid because it is solid.', 'Maya dit que le projet de classe est solide parce qu il est solide.'],
  ['Owen says the apartment is worth renting because it is worth renting.', 'Owen dit que l appartement vaut le coup d être loué parce qu il vaut le coup d être loué.'],
  ['Ava says the school lunch is good because it is good.', 'Ava dit que le repas scolaire est bon parce qu il est bon.'],
  ['Noah says the proposal is better because it is better.', 'Noah dit que la proposition est meilleure parce qu elle est meilleure.'],
  ['Rina says the doctor is correct because the doctor is correct.', 'Rina dit que le médecin a raison parce que le médecin a raison.'],
  ['Eli says the concert is amazing because it is amazing.', 'Eli dit que le concert est incroyable parce qu il est incroyable.'],
  ['Priya says the route is the fastest because it is the fastest.', 'Priya dit que l itinéraire est le plus rapide parce qu il est le plus rapide.'],
  ['Theo says the meeting notes are clear because they are clear.', 'Théo dit que les notes de réunion sont claires parce qu elles sont claires.'],
  ['Juno says the shop is trustworthy because it can be trusted.', 'Juno dit que la boutique est digne de confiance parce qu on peut lui faire confiance.'],
  ['Mia says the answer is obvious because it is obvious.', 'Mia dit que la réponse est évidente parce qu elle est évidente.'],
  ['Finn says the workout is effective because it works effectively.', 'Finn dit que l entraînement est efficace parce qu il fonctionne efficacement.'],
  ['Lea says the dinner is delicious because it tastes delicious.', 'Léa dit que le dîner est délicieux parce qu il a un goût délicieux.'],
  ['Hugo says the policy is necessary because it is necessary.', 'Hugo dit que la règle est nécessaire parce qu elle est nécessaire.'],
  ['Riley says the parking rule is good because it is a good rule.', 'Riley dit que la règle de stationnement est bonne parce que c est une bonne règle.'],
  ['Pia says the charity is helpful because it helps people.', 'Pia dit que l association est utile parce qu elle aide les gens.'],
  ['Ben says the software update is fine because it is fine.', 'Ben dit que la mise à jour logicielle est correcte parce qu elle est correcte.'],
  ['Nora says the lesson matters because it matters.', 'Nora dit que la leçon compte parce qu elle compte.'],
  ['Cole says the presentation is persuasive because it persuades.', 'Cole dit que la présentation est persuasive parce qu elle persuade.'],
  ['Jade says the family plan is best because it is the best family plan.', 'Jade dit que le plan familial est le meilleur parce que c est le meilleur plan familial.'],
  ['Omar says the message is clear because it is clear.', 'Omar dit que le message est clair parce qu il est clair.'],
  ['Tia says the schedule is practical because it is practical.', 'Tia dit que le planning est pratique parce qu il est pratique.'],
  ['Grant says the solution is obvious because it is obviously the solution.', 'Grant dit que la solution est évidente parce que c est évidemment la solution.'],
  ['Iris says the store policy is right because it is right.', 'Iris dit que la politique du magasin est juste parce qu elle est juste.'],
];

const OPTIONS_EN = ['Proof by Assertion', 'Begging the Question', 'Circular Reasoning', 'Shifting the Burden of Proof'];
const OPTIONS_FR = ['Preuve par affirmation', 'Pétition de principe', 'Raisonnement circulaire', 'Déplacement de la charge de la preuve'];

function rotatedOptions(options: string[], correctIndex: number): string[] {
  const distractors = options.slice(1);
  const result = [...distractors];
  result.splice(correctIndex, 0, options[0]);
  return result;
}

function subLevelFor(index: number): SubLevel {
  if (index < 17) return SubLevel.BEGINNER;
  if (index < 34) return SubLevel.INTERMEDIATE;
  return SubLevel.EXPERT;
}

function createQuestions(language: 'en' | 'fr'): Question[] {
  return SCENARIOS.map(([english, french], index) => {
    const isFrench = language === 'fr';
    const correctIndex = index % 4;
    return {
      id: 44351 + index,
      level: 4,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Preuve par affirmation' : 'Proof by Assertion',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel raisonnement fautif est illustré ici ?' : 'Which faulty reasoning is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? "L affirmation est répétée comme si elle constituait une preuve."
        : 'The claim is repeated as if repetition were evidence.',
      detailedExplanationBeginner: isFrench
        ? "Dire quelque chose avec assurance ne le rend pas vrai."
        : 'Saying something confidently does not make it true.',
      detailedExplanationIntermediate: isFrench
        ? "La preuve par affirmation remplace les raisons par une simple répétition ou par un ton assuré."
        : 'Proof by assertion replaces reasons with repetition or a confident tone.',
      detailedExplanationExpert: isFrench
        ? "Cette erreur survient quand une personne traite sa propre affirmation comme une justification suffisante. Elle peut donner une impression de certitude, mais elle ne répond pas aux objections, ne fournit pas de données et ne montre pas pourquoi la conclusion suit réellement des prémisses vérifiables."
        : 'This error happens when a person treats their own assertion as a sufficient justification. It can sound certain, but it does not answer objections, provide data, or show why the conclusion really follows from verifiable premises.',
      questionFormat: 'standard',
    };
  });
}

export const PROOF_BY_ASSERTION_EXPANSION_EN: Question[] = createQuestions('en');
export const PROOF_BY_ASSERTION_EXPANSION_FR: Question[] = createQuestions('fr');

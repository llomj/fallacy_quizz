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
  ['Tara says the new bike is safe because it is safe.', 'Tara dit que le nouveau velo est sur parce qu il est sur.'],
  ['Miles says the soup is delicious because it is delicious.', 'Miles dit que la soupe est delicieuse parce qu elle est delicieuse.'],
  ['Sofia says the neighbor is trustworthy because they are trustworthy.', 'Sofia dit que le voisin est digne de confiance parce qu il est digne de confiance.'],
  ['Caleb says the shortcut is the best because it is the best shortcut.', 'Caleb dit que le raccourci est le meilleur parce que c est le meilleur raccourci.'],
  ['Emi says the schedule is perfect because it is perfect.', 'Emi dit que le planning est parfait parce qu il est parfait.'],
  ['Arun says the school rule is fair because it is fair.', 'Arun dit que la regle de l ecole est juste parce qu elle est juste.'],
  ['Mila says the headphones are worth buying because they are worth buying.', 'Mila dit que les ecouteurs valent le coup parce qu ils valent le coup.'],
  ['Dean says the new game is exciting because it is exciting.', 'Dean dit que le nouveau jeu est passionnant parce qu il est passionnant.'],
  ['Rosa says the bakery bread is fresh because it is fresh.', 'Rosa dit que le pain de la boulangerie est frais parce qu il est frais.'],
  ['Hana says the music playlist is great because it is great.', 'Hana dit que la playlist musicale est geniale parce qu elle est geniale.'],
  ['Evan says the plan works because it works.', 'Evan dit que le plan fonctionne parce qu il fonctionne.'],
  ['Zara says the tutor is helpful because they are helpful.', 'Zara dit que le professeur particulier est utile parce qu il est utile.'],
  ['Noel says the phone case is durable because it is durable.', 'Noel dit que la coque du telephone est resistente parce qu elle est resistente.'],
  ['Poppy says the picnic spot is beautiful because it is beautiful.', 'Poppy dit que le lieu de pique nique est beau parce qu il est beau.'],
  ['Aiden says the taxi route is efficient because it is efficient.', 'Aiden dit que le trajet en taxi est efficace parce qu il est efficace.'],
  ['Lena says the sweater is cozy because it is cozy.', 'Lena dit que le pull est douillet parce qu il est douillet.'],
  ['Marco says the class app is useful because it is useful.', 'Marco dit que l application de classe est utile parce qu elle est utile.'],
  ['Ivy says the hotel is comfortable because it is comfortable.', 'Ivy dit que l hotel est confortable parce qu il est confortable.'],
  ['Jonah says the recipe is easy because it is easy.', 'Jonah dit que la recette est facile parce qu elle est facile.'],
  ['Sana says the team meeting was productive because it was productive.', 'Sana dit que la reunion de equipe a ete productive parce qu elle a ete productive.'],
  ['Felix says the chair is sturdy because it is sturdy.', 'Felix dit que la chaise est solide parce qu elle est solide.'],
  ['Clara says the concert ticket is a good deal because it is a good deal.', 'Clara dit que le billet de concert est une bonne affaire parce que c est une bonne affaire.'],
  ['Omar says the library corner is quiet because it is quiet.', 'Omar dit que le coin de la bibliotheque est calme parce qu il est calme.'],
  ['Nadia says the board game is fun because it is fun.', 'Nadia dit que le jeu de societe est amusant parce qu il est amusant.'],
  ['Peter says the window seat is the best seat because it is the best seat.', 'Peter dit que le siege pres de la fenetre est le meilleur siege parce que c est le meilleur siege.'],
  ['Quinn says the city festival is worth attending because it is worth attending.', 'Quinn dit que le festival de la ville vaut la peine d etre vu parce qu il vaut la peine d etre vu.'],
  ['Ruth says the mentor advice is solid because it is solid.', 'Ruth dit que le conseil du mentor est solide parce qu il est solide.'],
  ['Simon says the road trip is awesome because it is awesome.', 'Simon dit que le road trip est genial parce qu il est genial.'],
  ['Tess says the smoothie is healthy because it is healthy.', 'Tess dit que le smoothie est sain parce qu il est sain.'],
  ['Uma says the art class is inspiring because it is inspiring.', 'Uma dit que le cours dart est inspirant parce qu il est inspirant.'],
  ['Viktor says the jacket is warm because it is warm.', 'Viktor dit que la veste est chaude parce qu elle est chaude.'],
  ['Wren says the office chair is ergonomic because it is ergonomic.', 'Wren dit que la chaise de bureau est ergonomique parce qu elle est ergonomique.'],
  ['Xena says the weekend plan is relaxing because it is relaxing.', 'Xena dit que le programme du week end est relaxant parce qu il est relaxant.'],
  ['Yara says the soup kitchen is kind because it is kind.', 'Yara dit que la soupe populaire est genereuse parce qu elle est genereuse.'],
  ['Zed says the class mascot is cool because it is cool.', 'Zed dit que la mascotte de la classe est cool parce qu elle est cool.'],
  ['Ari says the website design is modern because it is modern.', 'Ari dit que le design du site est moderne parce qu il est moderne.'],
  ['Bea says the train ride is smooth because it is smooth.', 'Bea dit que le trajet en train est fluide parce qu il est fluide.'],
  ['Cody says the volunteer group is amazing because it is amazing.', 'Cody dit que le groupe de benevoles est incroyable parce qu il est incroyable.'],
  ['Dina says the lunch special is tasty because it is tasty.', 'Dina dit que le menu du midi est savoureux parce qu il est savoureux.'],
  ['Eli says the new lamp is bright because it is bright.', 'Eli dit que la nouvelle lampe est lumineuse parce qu elle est lumineuse.'],
  ['Faye says the practice test is helpful because it is helpful.', 'Faye dit que le test d entrainement est utile parce qu il est utile.'],
  ['Gus says the neighborhood park is nice because it is nice.', 'Gus dit que le parc du quartier est agreable parce qu il est agreable.'],
  ['Hila says the meeting agenda is clear because it is clear.', 'Hila dit que l ordre du jour est clair parce qu il est clair.'],
  ['Ivan says the online guide is accurate because it is accurate.', 'Ivan dit que le guide en ligne est exact parce qu il est exact.'],
  ['Jana says the delivery was fast because it was fast.', 'Jana dit que la livraison a ete rapide parce qu elle a ete rapide.'],
  ['Kian says the game strategy is smart because it is smart.', 'Kian dit que la strategie de jeu est intelligente parce qu elle est intelligente.'],
  ['Luz says the field trip is fun because it is fun.', 'Luz dit que la sortie scolaire est amusante parce qu elle est amusante.'],
  ['Moe says the couch is comfortable because it is comfortable.', 'Moe dit que le canape est confortable parce qu il est confortable.'],
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

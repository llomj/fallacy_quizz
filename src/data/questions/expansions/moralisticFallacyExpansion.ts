import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Mia says a food must be healthy because it feels morally right to eat it.', 'Mia dit qu un aliment doit etre sain parce que c est moralement bien de le manger.'],
  ['Leo claims a city should ban all junk food because good people would not want it around.', 'Leo affirme qu une ville devrait interdire toute nourriture grasse parce que les bonnes personnes ne voudraient pas en voir.'],
  ['Nina says a medicine cannot be dangerous because it is meant to help people.', 'Nina dit qu un medicament ne peut pas etre dangereux parce qu il est censé aider les gens.'],
  ['Owen argues that a policy must be true because it would be nicer if it were true.', 'Owen soutient qu une politique doit etre vraie parce que ce serait plus sympa si c etait vrai.'],
  ['Priya says a product has to be natural because natural things are the ones humans should use.', 'Priya dit qu un produit doit etre naturel parce que les choses naturelles sont celles que les humains devraient utiliser.'],
  ['Ben claims a story cannot be real unless the hero behaves morally.', 'Ben affirme qu une histoire ne peut pas etre vraie sauf si le heros agit moralement.'],
  ['Tara says a bad weather forecast must be wrong because it would be unfair for the picnic to fail.', 'Tara dit qu une mauvaise meteo doit etre fausse parce que ce serait injuste que le pique-nique echoue.'],
  ['Kai says a neighbor is probably innocent because decent people do not break rules.', 'Kai dit qu un voisin est probablement innocent parce que les gens decents ne cassent pas les regles.'],
  ['Jules says the app cannot be buggy because a good team would not make buggy software.', 'Jules dit que l application ne peut pas etre buggee parce qu une bonne equipe ne ferait pas de logiciel bugge.'],
  ['Ava says a company should not exist if it does not make the world better.', 'Ava dit qu une entreprise ne devrait pas exister si elle ne rend pas le monde meilleur.'],
  ['Noah says the student cannot have lied because lying is wrong.', 'Noah dit que l eleve ne peut pas avoir menti parce que mentir est mal.'],
  ['Mina says the restaurant review must be false because the owner seems kind.', 'Mina dit que l avis sur le restaurant doit etre faux parce que le proprietaire a l air gentil.'],
  ['Eli says a plan cannot be effective if it feels selfish.', 'Eli dit qu un plan ne peut pas etre efficace s il semble egoiste.'],
  ['Rina says a law should not be supported if it feels harsh.', 'Rina dit qu une loi ne devrait pas etre soutenue si elle semble dure.'],
  ['Hugo says a vaccine cannot work because it would be morally better if it did.', 'Hugo dit qu un vaccin ne peut pas marcher parce que ce serait moralement mieux s il marchait.'],
  ['Lina says a person must be trustworthy because trusting people is a good value.', 'Lina dit qu une personne doit etre digne de confiance parce que faire confiance aux gens est une bonne valeur.'],
  ['Grant says a movie cannot be real art if it has violence in it.', 'Grant dit qu un film ne peut pas etre un vrai art s il contient de la violence.'],
  ['Zoe says a product should not be sold because buying it feels wasteful.', 'Zoe dit qu un produit ne devrait pas etre vendu parce que l acheter lui semble du gaspillage.'],
  ['Milo says the weather app must be honest because honesty is a virtue.', 'Milo dit que l application meteo doit etre honnete parce que l honnetete est une vertu.'],
  ['Theo says a manager must be lying if the answer is unpleasant.', 'Theo dit qu un responsable doit mentir si la reponse est desagreable.'],
  ['Pia says a hard decision cannot be correct if it makes people uncomfortable.', 'Pia dit qu une decision difficile ne peut pas etre correcte si elle rend les gens mal a l aise.'],
  ['Finn says the old rule is better because it feels more respectful.', 'Finn dit que l ancienne regle est meilleure parce qu elle semble plus respectueuse.'],
  ['Maya says a neighborhood must be safe because it would be nice if it were safe.', 'Maya dit qu un quartier doit etre sur parce que ce serait bien s il etait sur.'],
  ['Sam says a teacher should not assign homework if it seems mean.', 'Sam dit qu un professeur ne devrait pas donner de devoirs si cela semble mechant.'],
  ['Juno says a new policy must be false because good policies do not upset anyone.', 'Juno dit qu une nouvelle politique doit etre fausse parce que les bonnes politiques ne facheront personne.'],
  ['Iris says a kind person cannot have made a mistake like that.', 'Iris dit qu une personne gentille ne peut pas avoir fait une erreur comme ca.'],
  ['Cole says the app update should not be true because it would be better if it fixed everything.', 'Cole dit que la mise a jour de l application ne devrait pas etre vraie parce que ce serait mieux si elle resolvait tout.'],
  ['Nora says a family rule is correct because it teaches good manners.', 'Nora dit qu une regle familiale est correcte parce qu elle enseigne de bonnes manières.'],
  ['Ari says a claim about taxes must be wrong because it sounds unfair to poor people.', 'Ari dit qu une affirmation sur les impots doit etre fausse parce qu elle semble injuste pour les pauvres.'],
  ['Rita says a job candidate is a good fit because nice people deserve opportunities.', 'Rita dit qu un candidat est un bon choix parce que les gens gentils meritent des opportunites.'],
  ['Tia says a plan cannot be natural if it was designed in a lab.', 'Tia dit qu un plan ne peut pas etre naturel s il a ete conçu dans un laboratoire.'],
  ['Oli says the coach must be wrong because the advice feels too harsh.', 'Oli dit que l entraineur doit se tromper parce que le conseil semble trop dur.'],
  ['Lara says a rule is true if following it makes people behave better.', 'Lara dit qu une regle est vraie si la suivre pousse les gens a mieux se comporter.'],
  ['Ben says a claim about history must be false because it does not make the heroes look good.', 'Ben dit qu une affirmation sur l histoire doit etre fausse parce qu elle ne fait pas passer les heros pour bons.'],
  ['Mina says the software should not exist if some users misuse it.', 'Mina dit que le logiciel ne devrait pas exister si certains utilisateurs l abusent.'],
  ['Drew says a neighbor is probably lying because honest people do not cause trouble.', 'Drew dit qu un voisin ment probablement parce que les gens honnetes ne causent pas de problemes.'],
  ['Jade says the bakery is better if it treats everyone kindly.', 'Jade dit que la boulangerie est meilleure si elle traite tout le monde avec gentillesse.'],
  ['Owen says a policy has to work because it would be morally satisfying if it did.', 'Owen dit qu une politique doit marcher parce que ce serait moralement satisfaisant si elle marchait.'],
  ['Mila says a bad outcome cannot come from a good intention.', 'Mila dit qu un mauvais resultat ne peut pas venir d une bonne intention.'],
  ['Evan says the doctor is right because caring people are usually right.', 'Evan dit que le medecin a raison parce que les personnes attentionnees ont en general raison.'],
  ['Kira says the bus route should exist because it would help more people.', 'Kira dit que la ligne de bus devrait exister parce qu elle aiderait plus de gens.'],
  ['Grant says a claim about sports is false because sports should bring people together.', 'Grant dit qu une affirmation sur le sport est fausse parce que le sport devrait rassembler les gens.'],
  ['Zara says the phone brand must be good because it avoids waste.', 'Zara dit que la marque de telephone doit etre bonne parce qu elle evite le gaspillage.'],
  ['Parker says a person cannot be guilty if the punishment feels too cruel.', 'Parker dit qu une personne ne peut pas etre coupable si la punition semble trop cruelle.'],
  ['Hana says a theory should be accepted if it matches what good citizens want.', 'Hana dit qu une theorie devrait etre acceptee si elle correspond a ce que veulent les bons citoyens.'],
  ['Leo says a restaurant cannot be dirty because dirty places should not be allowed.', 'Leo dit qu un restaurant ne peut pas etre sale parce que les lieux sales ne devraient pas etre autorises.'],
  ['Maya says the rule must be right because it encourages kindness.', 'Maya dit que la regle doit etre juste parce qu elle encourage la gentillesse.'],
  ['Nina says a claim cannot be true if believing it would feel cruel.', 'Nina dit qu une affirmation ne peut pas etre vraie si y croire semblerait cruel.'],
];

const OPTIONS_EN = ['Moralistic Fallacy', 'Naturalistic Fallacy', 'Begging the Question', 'Appeal to Emotion'];
const OPTIONS_FR = ['Sophisme moraliste', 'Sophisme naturaliste', 'Pétition de principe', "Appel à l'émotion"];

function rotatedOptions(options: string[], correctIndex: number): string[] {
  const distractors = options.slice(1);
  const result = [...distractors];
  result.splice(correctIndex, 0, options[0]);
  return result;
}

function subLevelFor(index: number): SubLevel {
  if (index < 43) return SubLevel.BEGINNER;
  if (index < 50) return SubLevel.INTERMEDIATE;
  return SubLevel.EXPERT;
}

function createQuestions(language: 'en' | 'fr'): Question[] {
  return SCENARIOS.map(([english, french], index) => {
    const correctIndex = index % 4;
    const isFrench = language === 'fr';
    return {
      id: 39001 + index,
      level: 2,
      persona_stage: PersonaStage.SHRIMP,
      concept: isFrench ? 'Sophisme moraliste' : 'Moralistic Fallacy',
      difficulty: index < 43 ? 1 : index < 50 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? "On conclut qu une chose est vraie ou fausse selon ce qu elle devrait etre moralement, au lieu de regarder les faits."
        : 'Something is judged true or false according to what it ought to be morally, rather than by the facts.',
      detailedExplanationBeginner: isFrench
        ? "Le souhait moral remplace la realite."
        : 'A moral wish is replacing reality.',
      detailedExplanationIntermediate: isFrench
        ? "Le sophisme moraliste confond une valeur morale avec une description du monde."
        : 'The moralistic fallacy confuses a moral value with a description of the world.',
      detailedExplanationExpert: isFrench
        ? "Le raisonnement impose un ideal normatif a la place d une analyse descriptive: parce qu on prefere que le monde soit juste, on imagine qu il doit l etre ainsi."
        : 'The reasoning imposes a normative ideal in place of a descriptive analysis: because we prefer the world to be just, we imagine it must be that way.',
      questionFormat: 'standard',
    };
  });
}

export const MORALISTIC_FALLACY_EXPANSION_EN: Question[] = createQuestions('en');
export const MORALISTIC_FALLACY_EXPANSION_FR: Question[] = createQuestions('fr');

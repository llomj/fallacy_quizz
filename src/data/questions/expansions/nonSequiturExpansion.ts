import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya says the new café must be excellent because the barista has a blue bicycle.', 'Maya dit que le nouveau café doit être excellent parce que le barista a un vélo bleu.'],
  ['Leo says the school library is secretly better because the front desk has a potted plant.', 'Leo dit que la bibliothèque scolaire est secrètement meilleure parce que le comptoir a une plante en pot.'],
  ['Priya says the gym membership is a scam because the poster uses bright colors.', 'Priya dit que l abonnement à la salle est une arnaque parce que l affiche utilise des couleurs vives.'],
  ['Omar says the soup must be healthy because the restaurant has wooden chairs.', 'Omar dit que la soupe doit être saine parce que le restaurant a des chaises en bois.'],
  ['Rina says her phone battery will last longer because it came in a smaller box.', 'Rina dit que sa batterie de téléphone durera plus longtemps parce qu elle est arrivée dans une boîte plus petite.'],
  ['Ben says the soccer team will win because the coach wears a lucky watch.', 'Ben dit que l équipe de football va gagner parce que l entraîneur porte une montre porte-bonheur.'],
  ['Zoe says the train is delayed because the station café sells muffins.', 'Zoé dit que le train est en retard parce que le café de la gare vend des muffins.'],
  ['Kai says the concert will be good because the ticket was printed on glossy paper.', 'Kai dit que le concert sera bon parce que le billet a été imprimé sur du papier glacé.'],
  ['Nora says the app is safe because the logo is a circle.', 'Nora dit que l application est sûre parce que le logo est un cercle.'],
  ['Eli says the dog is well trained because its leash is red.', 'Eli dit que le chien est bien dressé parce que sa laisse est rouge.'],
  ['Lina says the pizza must be delicious because the box has a sticker.', 'Lina dit que la pizza doit être délicieuse parce que la boîte a un autocollant.'],
  ['Grant says the rain will stop soon because the clouds look dramatic.', 'Grant dit que la pluie va bientôt s arrêter parce que les nuages ont l air dramatiques.'],
  ['Tia says the new shoes are worth buying because the shop plays upbeat music.', 'Tia dit que les nouvelles chaussures valent l achat parce que la boutique joue de la musique entraînante.'],
  ['Noah says the homework is easier because the pencil is sharper.', 'Noah dit que les devoirs sont plus faciles parce que le crayon est plus pointu.'],
  ['Mia says the movie must have a twist ending because the popcorn is salty.', 'Mia dit que le film doit avoir une fin à rebondissement parce que le popcorn est salé.'],
  ['Jules says the salad is healthy because the bowl is glass.', 'Jules dit que la salade est saine parce que le bol est en verre.'],
  ['Ava says the road trip will be fun because the car radio has good bass.', 'Ava dit que le voyage en voiture sera amusant parce que la radio a de bonnes basses.'],
  ['Finn says the teacher is strict because the classroom clock is old.', 'Finn dit que l enseignante est stricte parce que l horloge de la classe est vieille.'],
  ['Mina says the bakery must be popular because the napkins are folded neatly.', 'Mina dit que la boulangerie doit être populaire parce que les serviettes sont pliées proprement.'],
  ['Theo says the movie review is true because it uses big words.', 'Theo dit que la critique de film est vraie parce qu elle utilise de grands mots.'],
  ['Juno says the water tastes better because the cup is blue.', 'Juno dit que l eau a meilleur goût parce que le verre est bleu.'],
  ['Iris says the new policy will work because the memo has bullet points.', 'Iris dit que la nouvelle politique fonctionnera parce que le mémo a des puces.'],
  ['Cole says the team is more creative because the office has plants.', 'Cole dit que l équipe est plus créative parce que le bureau a des plantes.'],
  ['Riley says the song is a hit because the singer wore sunglasses.', 'Riley dit que la chanson est un succès parce que la chanteuse portait des lunettes de soleil.'],
  ['Pia says the salad bar is cleaner because the menu is laminated.', 'Pia dit que le bar à salade est plus propre parce que le menu est plastifié.'],
  ['Hugo says the class is smarter because the projector is new.', 'Hugo dit que la classe est plus intelligente parce que le projecteur est neuf.'],
  ['Sam says the app update fixed the bug because the icon changed.', 'Sam dit que la mise à jour de l application a corrigé le bug parce que l icône a changé.'],
  ['Jade says the market has better produce because the sign is handwritten.', 'Jade dit que le marché a de meilleurs produits parce que l enseigne est écrite à la main.'],
  ['Owen says the meeting was productive because the chairs were comfortable.', 'Owen dit que la réunion a été productive parce que les chaises étaient confortables.'],
  ['Lea says the smoothie is healthier because the cup has a lid.', 'Lea dit que le smoothie est plus sain parce que le gobelet a un couvercle.'],
  ['Maya says the book is important because the cover is matte.', 'Maya dit que le livre est important parce que la couverture est mate.'],
  ['Ben says the dog understands commands because the owner bought a new collar.', 'Ben dit que le chien comprend les ordres parce que le propriétaire a acheté un nouveau collier.'],
  ['Ava says the museum is educational because the floor is polished.', 'Ava dit que le musée est éducatif parce que le sol est poli.'],
  ['Omar says the coffee tastes stronger because the cup is heavier.', 'Omar dit que le café a un goût plus fort parce que la tasse est plus lourde.'],
  ['Nina says the sandwich is fresher because the wrapper is shiny.', 'Nina dit que le sandwich est plus frais parce que l emballage brille.'],
  ['Eli says the new rule is fair because it was announced on Monday.', 'Eli dit que la nouvelle règle est juste parce qu elle a été annoncée lundi.'],
  ['Lina says the class project will succeed because the marker color is green.', 'Lina dit que le projet de classe réussira parce que la couleur du marqueur est verte.'],
  ['Grant says the neighborhood is friendlier because the doorbells are quiet.', 'Grant dit que le quartier est plus sympa parce que les sonnettes sont silencieuses.'],
  ['Tia says the website is trustworthy because the footer is neat.', 'Tia dit que le site web est fiable parce que le pied de page est soigné.'],
  ['Noah says the theater is amazing because the seats are red.', 'Noah dit que le théâtre est incroyable parce que les sièges sont rouges.'],
  ['Mia says the new recipe is better because the cookbook has glossy pages.', 'Mia dit que la nouvelle recette est meilleure parce que le livre de cuisine a des pages brillantes.'],
  ['Jules says the road sign is accurate because the pole is straight.', 'Jules dit que le panneau routier est exact parce que le poteau est droit.'],
  ['Ari says the team practice worked because the water bottles were cold.', 'Ari dit que l entraînement de l équipe a fonctionné parce que les bouteilles d eau étaient froides.'],
  ['Rita says the laptop is fast because the charger is long.', 'Rita dit que l ordinateur portable est rapide parce que le chargeur est long.'],
  ['Tia says the café is charming because the sugar packets are folded.', 'Tia dit que le café est charmant parce que les sachets de sucre sont pliés.'],
  ['Grant says the school assembly was inspiring because the microphone was wireless.', 'Grant dit que l assemblée scolaire était inspirante parce que le micro était sans fil.'],
  ['Hugo says the soup recipe is authentic because the bowl has a pattern.', 'Hugo dit que la recette de soupe est authentique parce que le bol a un motif.'],
  ['Jules says the quiz is fair because the answer sheet is blue.', 'Jules dit que le quiz est équitable parce que la feuille de réponses est bleue.'],
  ['Mia says the office is efficient because the printer is near the door.', 'Mia dit que le bureau est efficace parce que l imprimante est près de la porte.'],
  ['Sam says the new schedule will reduce stress because it is color-coded.', 'Sam dit que le nouvel horaire réduira le stress parce qu il est codé par couleurs.'],
  ['Zoe says the picnic will be relaxing because the blanket is soft.', 'Zoé dit que le pique-nique sera relaxant parce que la couverture est douce.'],
];

const OPTIONS_EN = ['Non Sequitur', 'False Dilemma', 'Appeal to Authority', 'Correlation Implies Causation'];
const OPTIONS_FR = ['Non sequitur', 'Fausse dichotomie', 'Appel à l autorité', 'La corrélation implique la causalité'];

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
      id: 43501 + index,
      level: 7,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Non sequitur' : 'Non Sequitur',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel raisonnement est illustré ici ?' : 'Which reasoning error is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'La conclusion ne suit pas de la raison donnée.'
        : 'The conclusion does not follow from the reason given.',
      detailedExplanationBeginner: isFrench
        ? 'Le lien entre la phrase et la conclusion est absent.'
        : 'The link between the statement and the conclusion is missing.',
      detailedExplanationIntermediate: isFrench
        ? 'On saute d un detail sans rapport à une conclusion qui n est pas justifiée.'
        : 'The argument jumps from a related-sounding detail to a conclusion that is not justified.',
      detailedExplanationExpert: isFrench
        ? 'Le non sequitur est un saut logique : les prémisses peuvent être vraies, mais la conclusion n est pas soutenue par elles. Le problème n est pas seulement que l idée semble étrange, c est qu il manque un lien inferentiel entre ce qui est dit et ce qui est conclu. Pour être valide, l argument doit montrer pourquoi le détail cité rend la conclusion probable ou nécessaire.'
        : 'A non sequitur is a logical leap: the premises may be true, but the conclusion is not supported by them. The problem is not merely that the idea sounds odd; it is that the inferential bridge between what was said and what was concluded is missing. For the argument to work, it must show why the detail cited makes the conclusion likely or necessary.',
      questionFormat: 'standard',
    };
  });
}

export const NON_SEQUITUR_EXPANSION_EN: Question[] = createQuestions('en');
export const NON_SEQUITUR_EXPANSION_FR: Question[] = createQuestions('fr');

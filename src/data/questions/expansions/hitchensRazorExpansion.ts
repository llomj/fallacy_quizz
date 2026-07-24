import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya says the new cafe has secret celebrity customers, but she offers no proof, so Ben ignores the claim.', 'Maya dit que le nouveau cafe a des clients celebres secrets, mais elle n apporte aucune preuve, donc Ben ignore l affirmation.'],
  ['Leo claims the phone app is stealing data, but he cannot show any evidence, so Nina dismisses it.', 'Leo affirme que l application telephonique vole des donnees, mais il ne peut montrer aucune preuve, donc Nina ecarte l affirmation.'],
  ['Priya says the rental house is haunted, but with no evidence, Owen treats it as a spooky story only.', 'Priya dit que la maison en location est hantee, mais sans preuve, Owen y voit seulement une histoire effrayante.'],
  ['Tara insists the soup recipe is ancient magic, but because she has no support, Jules shrugs it off.', 'Tara insiste pour dire que la recette de soupe est de la magie ancienne, mais comme elle n a aucun soutien, Jules hausse les epaules.'],
  ['Kai claims the gym water makes people stronger, but without evidence, Ava does not take it seriously.', 'Kai affirme que l eau de la salle rend plus fort, mais sans preuve, Ava ne prend pas cela au serieux.'],
  ['Milo says a lucky coin controls exam scores, and since he cannot prove it, Eli ignores the claim.', 'Milo dit qu une piece porte-bonheur controle les notes, et comme il ne peut pas le prouver, Eli ignore l affirmation.'],
  ['Nina says the manager is a robot, but she gives no evidence, so Rina treats it as nonsense.', 'Nina dit que le directeur est un robot, mais elle n apporte aucune preuve, donc Rina traite cela comme du n importe quoi.'],
  ['Owen says the coffee machine listens to complaints, but Grant asks for proof before believing him.', 'Owen dit que la machine a cafe ecoute les plaintes, mais Grant demande une preuve avant de le croire.'],
  ['Ava says the library ghost rearranges books, but because there is no proof, Sam does not buy it.', 'Ava dit que le fantome de la bibliotheque deplace les livres, mais comme il n y a aucune preuve, Sam n y croit pas.'],
  ['Jules says the moon has tiny apartments, and when asked for evidence, he has none, so Mina ignores it.', 'Jules dit que la lune a de petits appartements, et quand on lui demande une preuve, il n en a aucune, donc Mina ignore cela.'],
  ['Theo says the classroom plant can read minds, but no evidence appears, so Hugo dismisses the claim.', 'Theo dit que la plante de la classe peut lire dans les pensees, mais aucune preuve n apparait, donc Hugo ecarte l affirmation.'],
  ['Lina says the parking ticket machine is cursed, but Ben does not need proof to ignore the claim.', 'Lina dit que la borne de stationnement est maudite, mais Ben n a pas besoin de preuve pour ignorer l affirmation.'],
  ['Noah says the sandwich shop adds hidden ingredients, yet he cannot prove it, so Priya does not accept it.', 'Noah dit que le sandwich-shop ajoute des ingredients caches, mais il ne peut pas le prouver, donc Priya ne l accepte pas.'],
  ['Maya says a lucky pen improves handwriting, and since there is no evidence, Cole treats it as a hunch.', 'Maya dit qu un stylo porte-bonheur ameliore l ecriture, et comme il n y a aucune preuve, Cole traite cela comme une intuition.'],
  ['Ben says the bus driver is a time traveler, but with nothing to back it up, Zara ignores the story.', 'Ben dit que le chauffeur de bus est un voyageur du temps, mais sans rien pour l appuyer, Zara ignore l histoire.'],
  ['Rita says the printer predicts bad meetings, but without proof, Evan does not waste time debating it.', 'Rita dit que l imprimante predit les mauvaises reunions, mais sans preuve, Evan ne perd pas de temps a en debattre.'],
  ['Tia says the neighborhood cat is a secret mayor, but there is no evidence, so Nora does not buy the claim.', 'Tia dit que le chat du quartier est un maire secret, mais il n y a aucune preuve, donc Nora n y croit pas.'],
  ['Oli says the vending machine judges people, and since he cannot show proof, Lara ignores the idea.', 'Oli dit que le distributeur automatique juge les gens, et comme il ne peut pas montrer de preuve, Lara ignore l idee.'],
  ['Drew says the bakery croissant is the key to world peace, but without evidence, Finn lets it go.', 'Drew dit que le croissant de la boulangerie est la cle de la paix mondiale, mais sans preuve, Finn laisse tomber.'],
  ['Jade says the air conditioner can hear gossip, but because no evidence exists, Mia treats it as a joke.', 'Jade dit que la climatisation peut entendre les ragots, mais comme aucune preuve n existe, Mia y voit une blague.'],
  ['Grant says the office stapler is lucky, but he cannot prove it, so Tia does not take the claim seriously.', 'Grant dit que l agrafeuse du bureau porte bonheur, mais il ne peut pas le prouver, donc Tia ne prend pas l affirmation au serieux.'],
  ['Lara says the local park has a hidden treasure, but with no evidence, Noah dismisses it.', 'Lara dit que le parc local cache un tresor, mais sans preuve, Noah ecarte cela.'],
  ['Mina says the alarm clock knows when she is late, but because she has no proof, Iris ignores the claim.', 'Mina dit que le reveil sait quand elle est en retard, mais comme elle n a aucune preuve, Iris ignore l affirmation.'],
  ['Evan says the spreadsheet is haunted, and since he cannot support it, Kira moves on.', 'Evan dit que le tableur est hante, et comme il ne peut pas le soutenir, Kira passe a autre chose.'],
  ['Pia says the bus stop sign changes at night, but offers no evidence, so Grant treats it as a rumor.', 'Pia dit que le panneau de l arret de bus change la nuit, mais n apporte aucune preuve, donc Grant traite cela comme une rumeur.'],
  ['Finn says the library book whispers advice, but nobody has proof, so Zoe ignores him.', 'Finn dit que le livre de bibliotheque chuchote des conseils, mais personne n a de preuve, donc Zoe l ignore.'],
  ['Ari says the ice cream van plays mind games, but with no evidence, Omar does not engage.', 'Ari dit que le camion de glaces joue avec les esprits, mais sans preuve, Omar ne rentre pas dans le jeu.'],
  ['Rina says the office chair is a fortune teller, but because she has nothing to show, Sam does not believe it.', 'Rina dit que la chaise de bureau est une voyante, mais comme elle n a rien a montrer, Sam ne la croit pas.'],
  ['Theo says the hallway light is sentient, yet with no proof, Ava shrugs and walks on.', 'Theo dit que la lumiere du couloir est consciente, mais sans preuve, Ava hausse les epaules et continue.'],
  ['Noah says the new sauce cures boredom, but he offers no support, so Eli ignores the pitch.', 'Noah dit que la nouvelle sauce guerit l ennui, mais il n apporte aucun soutien, donc Eli ignore l argument.'],
  ['Priya says the elevator prefers certain people, and because she has no proof, Hana dismisses it.', 'Priya dit que l ascenseur prefere certaines personnes, et comme elle n a aucune preuve, Hana ecarte cela.'],
  ['Milo says the notebook can predict rain, but without evidence, Cole does not take it seriously.', 'Milo dit que le carnet peut predire la pluie, mais sans preuve, Cole ne prend pas cela au serieux.'],
  ['Juno says the school bell is broken on purpose, but offers no evidence, so Nora ignores the claim.', 'Juno dit que la cloche de l ecole est cassee volontairement, mais n apporte aucune preuve, donc Nora ignore l affirmation.'],
  ['Maya says the toaster is a secret spy, but without support, Ben treats it as nonsense.', 'Maya dit que le grille-pain est un espion secret, mais sans soutien, Ben traite cela comme du n importe quoi.'],
  ['Lina says the train window knows jokes, yet she cannot prove it, so Drew moves on.', 'Lina dit que la vitre du train connait les blagues, mais elle ne peut pas le prouver, donc Drew passe a autre chose.'],
  ['Owen says the garden gnome gives financial advice, but no evidence means Rita ignores it.', 'Owen dit que le nain de jardin donne des conseils financiers, mais l absence de preuve fait que Rita ignore cela.'],
  ['Zara says the coffee shop has a secret tunnel, but because she offers nothing solid, Finn lets it pass.', 'Zara dit que le cafe a un tunnel secret, mais comme elle n apporte rien de solide, Finn laisse tomber.'],
  ['Kai says the vending machine decides elections, but without proof, Mia does not bother arguing.', 'Kai dit que le distributeur automatique decide des elections, mais sans preuve, Mia ne prend pas la peine de debattre.'],
  ['Tara says the cereal box is cursed, and since she cannot show evidence, Ben ignores the claim.', 'Tara dit que la boite de cereales est maudite, et comme elle ne peut pas montrer de preuve, Ben ignore l affirmation.'],
  ['Eli says the umbrella predicts moods, but no evidence is provided, so Priya brushes it off.', 'Eli dit que le parapluie predit les humeurs, mais aucune preuve n est fournie, donc Priya balaie cela d un revers de main.'],
  ['Mina says the old poster is speaking to her, but there is no proof, so Owen does not engage.', 'Mina dit que l ancien poster lui parle, mais il n y a aucune preuve, donc Owen ne rentre pas dans le jeu.'],
  ['Jade says the school clock is lying, but with no evidence, Lara ignores the accusation.', 'Jade dit que l horloge de l ecole ment, mais sans preuve, Lara ignore l accusation.'],
  ['Grant says the backyard tree knows secrets, but because he cannot prove it, Noah shrugs it off.', 'Grant dit que l arbre du jardin connait des secrets, mais comme il ne peut pas le prouver, Noah n y prete pas attention.'],
  ['Hugo says the office coffee is a loyalty test, yet he offers no support, so Ava dismisses the claim.', 'Hugo dit que le cafe du bureau est un test de fidelite, mais il n apporte aucun soutien, donc Ava ecarte l affirmation.'],
  ['Mila says the hallway echo is a message, but without proof, Tia treats it as imagination.', 'Mila dit que l echo du couloir est un message, mais sans preuve, Tia y voit de l imagination.'],
  ['Cole says the park bench is cursed, but he has no evidence, so Rina ignores it.', 'Cole dit que le banc du parc est maudit, mais il n a aucune preuve, donc Rina ignore cela.'],
  ['Nora says the water fountain has opinions, and because no proof exists, Owen moves on.', 'Nora dit que la fontaine a des opinions, et comme aucune preuve n existe, Owen passe a autre chose.'],
  ['Ari says the desk lamp can read homework, but without evidence, Juno does not believe him.', 'Ari dit que la lampe de bureau peut lire les devoirs, mais sans preuve, Juno ne le croit pas.'],
  ['Parker says the sidewalk is secretly listening, but since he cannot show proof, Sara ignores it.', 'Parker dit que le trottoir ecoute en secret, mais comme il ne peut pas montrer de preuve, Sara l ignore.'],
  ['Maya says the coffee cup is a tiny weather oracle, but without proof, Ben does not take it seriously.', 'Maya dit que la tasse de cafe est un petit oracle meteorologique, mais sans preuve, Ben ne prend pas cela au serieux.'],
  ['Leo says the school bell predicts homework, but because he cannot back it up, Nina dismisses it.', 'Leo dit que la cloche de l ecole predit les devoirs, mais comme il ne peut pas l appuyer, Nina ecarte cela.'],
  ['Priya says the park bench is sending messages, yet with no evidence, Owen ignores the claim.', 'Priya dit que le banc du parc envoie des messages, mais sans preuve, Owen ignore l affirmation.'],
  ['Noah says the laptop screen can sense feelings, but since he offers no proof, Ava moves on.', 'Noah dit que l ecran de l ordinateur portable peut sentir les emotions, mais comme il n apporte aucune preuve, Ava passe a autre chose.'],
  ['Lina says the bakery sign gives life advice, and without evidence, Omar treats it as a joke.', 'Lina dit que l enseigne de la boulangerie donne des conseils de vie, et sans preuve, Omar y voit une blague.'],
  ['Theo says the bus seat is plotting against him, but no evidence means Priya does not buy it.', 'Theo dit que le siege du bus complote contre lui, mais l absence de preuve fait que Priya n y croit pas.'],
  ['Ava says the water bottle knows secrets, but because she cannot prove it, Cole shrugs.', 'Ava dit que la bouteille d eau connait des secrets, mais comme elle ne peut pas le prouver, Cole hausse les epaules.'],
  ['Omar says the office plant is judging performance, but with no support, Rita ignores the idea.', 'Omar dit que la plante du bureau juge la performance, mais sans soutien, Rita ignore l idee.'],
  ['Jules says the hallway echo is a hidden code, but because he has no proof, Finn lets it go.', 'Jules dit que l echo du couloir est un code cache, mais comme il n a aucune preuve, Finn laisse tomber.'],
  ['Mina says the toaster is forecasting meetings, and since she cannot show evidence, Zoe dismisses it.', 'Mina dit que le grille-pain predit les reunions, et comme elle ne peut pas montrer de preuve, Zoe rejette cela.'],
];

const OPTIONS_EN = ["Hitchens's Razor", 'Appeal to Ignorance', 'Shifting the Burden of Proof', 'False Equivalence'];
const OPTIONS_FR = ['Rasoir de Hitchens', "Appel à l'ignorance", 'Renversement de la charge de la preuve', 'Fausse equivalence'];

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
      id: 38401 + index,
      level: 4,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Rasoir de Hitchens' : "Hitchens's Razor",
      difficulty: index < 43 ? 1 : index < 50 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais ou sophisme est montre ici ?' : 'Which bias or fallacy is shown here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? "Une affirmation sans preuve peut etre ignoree jusqu a ce qu une preuve apparaisse."
        : 'A claim without evidence can be ignored until evidence shows up.',
      detailedExplanationBeginner: isFrench
        ? "Pas de preuve, pas d obligation d y croire."
        : 'No evidence means no obligation to believe it.',
      detailedExplanationIntermediate: isFrench
        ? "Le rasoir de Hitchens dit qu une affirmation gratuite n a pas besoin d etre prise au serieux tant qu elle n est pas soutenue par des preuves."
        : "Hitchens's Razor says a claim made without support does not need to be taken seriously until it is backed by evidence.",
      detailedExplanationExpert: isFrench
        ? "Ce principe met la charge sur la personne qui affirme quelque chose: sans argument positif, le scepticisme est la position par defaut."
        : 'This principle puts the burden on the person making the claim: without positive support, skepticism is the default position.',
      questionFormat: 'standard',
    };
  });
}

export const HITCHENS_RAZOR_EXPANSION_EN: Question[] = createQuestions('en');
export const HITCHENS_RAZOR_EXPANSION_FR: Question[] = createQuestions('fr');

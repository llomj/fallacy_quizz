import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['After changing one phone setting, Maya says she can now handle any tech problem, but after seeing a tax form she decides it is too hard to even start.', "Apres avoir change un seul reglage du telephone, Maya dit qu elle peut maintenant gerer n importe quel probleme technique, mais en voyant un formulaire fiscal elle decide que c est trop difficile pour commencer."],
  ['Leo packs a lunch in five minutes and concludes that cooking for a dinner party must be easy, while a simple photo-editing app makes him say he is not cut out for creative work.', "Leo prepare un dejeuner en cinq minutes et conclut que cuisiner pour un diner doit etre facile, alors qu une application simple de retouche photo le fait dire qu il ne vaut pas pour le travail creatif."],
  ['Nina changes a playlist order and thinks she could produce a whole podcast today, but when a basic budget spreadsheet appears she says finance is beyond her.', "Nina change l ordre d une playlist et pense qu elle pourrait produire tout un podcast aujourd hui, mais quand un tableau budgetaire simple apparait elle dit que les finances la depassent."],
  ['Owen answers one practice question correctly and assumes the full quiz will be effortless, yet he sees a harder puzzle and says he will probably fail it.', "Owen repond correctement a une question d entrainement et suppose que le quiz complet sera sans effort, puis il voit une enigme plus difficile et dit qu il va probablement la rater."],
  ['Priya sets a timer on the microwave and decides she can run the whole kitchen, but after reading a home repair guide she says the project is impossible.', "Priya regle un minuteur sur le micro-ondes et decide qu elle peut gerer toute la cuisine, mais apres avoir lu un guide de bricolage elle dit que le projet est impossible."],
  ['Ben sends a short email and thinks he could manage a customer support team, while a tax return makes him claim he is terrible with paperwork.', "Ben envoie un court courriel et pense qu il pourrait gerer une equipe de support client, alors qu une declaration fiscale le fait dire qu il est nul avec les papiers."],
  ['Tara folds one shirt neatly and decides laundry is easy, but a stain-removal chart makes her say household chores are too technical.', "Tara plie une chemise proprement et decide que la lessive est facile, mais un tableau de detachage la fait dire que les taches menageres sont trop techniques."],
  ['Kai uses a map app once and says he could navigate any city, yet a public transit schedule makes him think travel planning is too complicated.', "Kai utilise une appli de carte une fois et dit qu il pourrait se reperer dans n importe quelle ville, mais un horaire de transport public le fait penser que planifier un trajet est trop complique."],
  ['Jules changes a ringtone and says he can fix any phone, but a battery replacement makes him back away and call the device hopeless.', "Jules change une sonnerie et dit qu il peut reparer n importe quel telephone, mais remplacer une batterie le fait reculer et qualifier l appareil de perdu."],
  ['Ava waters a plant and decides she could run a whole garden, but when she sees orchid care instructions she says gardening is out of reach.', "Ava arrose une plante et decide qu elle pourrait gerer tout un jardin, mais en voyant les consignes pour une orchidee elle dit que le jardinage lui echappe."],
  ['Noah prints one label and thinks he could organize an entire warehouse, yet a shipping manifest makes him say logistics is not for him.', "Noah imprime une etiquette et pense qu il pourrait organiser tout un entrepot, mais un bordereau d expedition le fait dire que la logistique n est pas pour lui."],
  ['Mina takes one nice photo and assumes she can do professional photography, but a lighting setup makes her say the skill is impossibly advanced.', "Mina prend une belle photo et suppose qu elle peut faire de la photo professionnelle, mais un montage d eclairage la fait dire que cette competence est bien trop avancee."],
  ['Eli makes a simple snack and declares that meal prep is trivial, while a more detailed recipe makes him insist that cooking is too hard to learn.', "Eli prepare un en-cas simple et declare que la preparation des repas est triviale, alors qu une recette plus detaillee le fait insister sur le fait que cuisiner est trop difficile a apprendre."],
  ['Rina logs into one website and says she can rebuild an entire app, but a form with many fields makes her decide that coding is not her thing.', "Rina se connecte a un site et dit qu elle peut reconstruire toute une application, mais un formulaire avec beaucoup de champs la fait decider que le code n est pas pour elle."],
  ['Hugo replies to a group chat and says he could handle a company newsletter, yet a simple spreadsheet makes him claim accounting is impossible.', "Hugo repond a un groupe de discussion et dit qu il pourrait gerer une newsletter d entreprise, mais un simple tableur le fait dire que la comptabilite est impossible."],
  ['Lina rearranges her desk and says she could design an office, but a project timeline makes her think long-term planning is beyond her.', "Lina reorganise son bureau et dit qu elle pourrait concevoir un bureau entier, mais un calendrier de projet la fait penser que la planification longue est hors de sa portee."],
  ['Grant fixes a typo and then says proofreading must be easy enough for everyone, while a legal contract makes him think careful reading is too much.', "Grant corrige une faute de frappe puis dit que la relecture doit etre facile pour tout le monde, alors qu un contrat juridique le fait penser que lire avec attention est trop demander."],
  ['Zoe counts a few coins and concludes that budgeting is simple, but an investment comparison makes her say money management is basically impossible.', "Zoe compte quelques pieces et conclut que faire un budget est simple, mais une comparaison d investissements la fait dire que gerer l argent est presque impossible."],
  ['Milo unlocks a bike lock and says he can handle home security, but a home insurance policy makes him decide the whole topic is too hard.', "Milo ouvre un antivol de velo et dit qu il peut gerer la securite de la maison, mais une police d assurance habitation le fait decider que tout le sujet est trop difficile."],
  ['Theo sets one alarm and believes he could manage a whole family schedule, yet a school calendar with many events makes him say planning is hopeless.', "Theo regle un reveil et croit qu il pourrait gerer tout un emploi du temps familial, mais un calendrier scolaire rempli d evenements le fait dire que la planification est sans espoir."],
  ['Pia sends a text and says she could run social media for a company, but a moderation policy makes her say online communication is too complicated.', "Pia envoie un message et dit qu elle pourrait gerer les reseaux sociaux d une entreprise, mais une politique de moderation la fait dire que la communication en ligne est trop compliquee."],
  ['Finn glances at a travel blog and thinks he can plan any trip, while a visa form makes him claim international travel is too hard.', "Finn regarde un blog de voyage et pense pouvoir planifier n importe quel voyage, alors qu un formulaire de visa le fait affirmer que les voyages internationaux sont trop difficiles."],
  ['Maya labels a few folders and says she could organize an archive, but a moving checklist makes her decide moving house is overwhelming.', "Maya classe quelques dossiers et dit qu elle pourrait organiser des archives, mais une liste de demenagement la fait decider qu un demenagement est ecrasant."],
  ['Sam cleans the counter and assumes he can manage a whole restaurant, yet a chef schedule makes him say kitchen work is far too hard.', "Sam nettoie le comptoir et suppose qu il peut gerer tout un restaurant, mais un planning de chef le fait dire que le travail en cuisine est bien trop dur."],
  ['Juno edits one sentence and says writing a newsletter is easy, but a full article outline makes her think publishing is beyond her.', "Juno modifie une phrase et dit que rediger une lettre d information est facile, mais un plan d article complet la fait penser que publier est hors de sa portee."],
  ['Iris unpacks one box and concludes that setting up a whole apartment will be simple, while assembling shelves makes her say home projects are too hard.', "Iris deballe une boite et conclut que meubler tout un appartement sera simple, alors qu assembler des etageres la fait dire que les projets maison sont trop difficiles."],
  ['Cole streams a show and says he could handle video editing, but a color grading panel makes him declare the craft impossible.', "Cole regarde une serie en streaming et dit qu il pourrait faire du montage video, mais un panneau de correction des couleurs le fait declarer que le metier est impossible."],
  ['Nora hits one gym class and says she could train for a marathon, yet a long workout plan makes her decide fitness coaching is too complex.', "Nora fait un seul cours de sport et dit qu elle pourrait s entrainer pour un marathon, mais un plan d entrainement long la fait decider que le coaching sportif est trop complexe."],
  ['Ari hangs a picture and thinks he can remodel a house, but a plumbing diagram makes him say construction is not for ordinary people.', "Ari accroche un tableau et pense qu il peut renover une maison, mais un schema de plomberie le fait dire que la construction n est pas pour les gens ordinaires."],
  ['Rita memorizes one password and says she could manage cybersecurity, while a two-factor setup makes her claim technology is out of control.', "Rita memorise un mot de passe et dit qu elle pourrait gerer la cybersecurite, alors qu une configuration a double verification la fait affirmer que la technologie lui echappe."],
  ['Tia arranges a dinner table and decides event planning is easy, but a seating chart for twenty guests makes her say parties are too stressful.', "Tia dresse une table de diner et decide que l organisation d evenements est facile, mais un plan de table pour vingt invites la fait dire que les fetes sont trop stressantes."],
  ['Oli finishes a simple worksheet and says school projects are no big deal, yet a research poster makes him think academic work is too advanced.', "Oli termine une fiche simple et dit que les projets scolaires ne sont pas grand-chose, mais une affiche de recherche le fait penser que le travail universitaire est trop avance."],
  ['Lara uses one coupon and believes shopping strategy is mastered, while comparing warranty plans makes her say consumer choices are impossible.', "Lara utilise un coupon et croit maitriser la strategie d achat, alors que comparer des garanties la fait dire que les choix de consommation sont impossibles."],
  ['Ben answers one trivia question and says he could host a quiz show, but a harder category makes him conclude that trivia is beyond him.', "Ben repond a une question de quiz et dit qu il pourrait animer une emission, mais une categorie plus dure le fait conclure que les quiz le depassent."],
  ['Mina makes coffee once and says she could run a cafe, yet a cappuccino machine with many buttons makes her think the job is too technical.', "Mina prepare un cafe une fois et dit qu elle pourrait gerer un cafe, mais une machine a cappuccino avec beaucoup de boutons lui fait penser que le travail est trop technique."],
  ['Drew sets up a projector and says he can handle all office equipment, but a network printer makes him say the whole system is too hard.', "Drew installe un projecteur et dit qu il peut gerer tout le materiel de bureau, mais une imprimante reseau le fait dire que tout le systeme est trop difficile."],
  ['Jade writes a short caption and thinks she can produce a whole marketing campaign, while a content calendar makes her say advertising is beyond her.', "Jade ecrit une courte legende et pense qu elle peut produire toute une campagne marketing, alors qu un calendrier de contenu la fait dire que la publicite la depasse."],
  ['Owen changes a battery and says he is basically an appliance expert, but an instruction manual makes him believe repair work is impossible.', "Owen change une pile et dit qu il est presque expert en appareils, mais un manuel d instructions le fait croire que le bricolage est impossible."],
  ['Mila sorts her sock drawer and says she could organize a whole store, yet a warehouse shelf map makes her decide inventory work is too hard.', "Mila range son tiroir a chaussettes et dit qu elle pourrait organiser tout un magasin, mais un plan d entrepot la fait decider que le travail d inventaire est trop difficile."],
  ['Evan copies one formula and says he can master statistics, but a graph with several variables makes him claim math is not for him.', "Evan recopie une formule et dit qu il peut maitriser les statistiques, mais un graphe avec plusieurs variables le fait affirmer que les maths ne sont pas pour lui."],
  ['Kira checks in one guest and says she could run a hotel front desk, while a booking system with many tabs makes her say hospitality software is too hard.', "Kira enregistre un invite et dit qu elle pourrait gerer la reception d un hotel, alors qu un systeme de reservation avec beaucoup d onglets la fait dire que le logiciel hotelier est trop difficile."],
  ['Grant assembles a toy shelf and concludes furniture building is simple, but a flat-pack wardrobe makes him say carpentry is beyond him.', "Grant monte une petite etagere et conclut que monter des meubles est simple, mais une armoire en kit le fait dire que la menuiserie le depasse."],
  ['Zara sends a calendar invite and believes coordination is effortless, yet a multi-team meeting plan makes her say teamwork logistics are hopeless.', "Zara envoie une invitation de calendrier et croit que coordonner est sans effort, mais un plan de reunion inter-equipes la fait dire que la logistique d equipe est sans espoir."],
  ['Parker changes a profile picture and says he could manage a whole brand, but a style guide makes him decide design work is too exacting.', "Parker change une photo de profil et dit qu il pourrait gerer toute une marque, mais un guide de style le fait decider que le travail de design est trop exigeant."],
  ['Hana unlocks a puzzle box and says she is good at anything with instructions, then a logic puzzle makes her claim she will never understand it.', "Hana ouvre une boite casse-tete et dit qu elle est bonne pour tout ce qui a des instructions, puis une enigme logique la fait affirmer qu elle ne la comprendra jamais."],
  ['Leo makes toast and says he can cook anything, but a souffle recipe makes him believe professional cooking is impossible.', "Leo fait du pain grille et dit qu il peut cuisiner n importe quoi, mais une recette de souffle le fait croire que la cuisine professionnelle est impossible."],
  ['Maya posts one friendly comment and says she could moderate an entire forum, while a rules page makes her say online moderation is too hard to learn.', "Maya publie un seul commentaire sympathique et dit qu elle pourrait moderer tout un forum, alors qu une page de regles la fait dire que la moderation en ligne est trop difficile a apprendre."],
  ['Nina pays one bill on time and says personal finance is simple, but a yearly tax packet makes her decide money management is beyond her.', "Nina paie une facture a temps et dit que les finances personnelles sont simples, mais un dossier fiscal annuel la fait decider que gerer l argent la depasse."],
  ['Owen changes a lamp bulb and says he could fix the whole house, yet a wiring diagram makes him think electricity work is too risky to touch.', "Owen change une ampoule et dit qu il pourrait reparer toute la maison, mais un schema de cablage le fait penser que le travail electrique est trop risque pour lui."],
];

const OPTIONS_EN = ['Hard-Easy Effect', 'Dunning-Kruger Effect', 'Optimism Bias', 'Anchoring Bias'];
const OPTIONS_FR = ['Effet difficile-facile', 'Effet Dunning-Kruger', 'Biais d optimisme', 'Biais d ancrage'];

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

export const HARD_EASY_EFFECT_EXPANSION_EN: Question[] = SCENARIOS.map(([english], index) => {
  const correctIndex = index % 4;
  return {
    id: 37901 + index,
    level: 4,
    persona_stage: PersonaStage.CRAB,
    concept: 'Hard-Easy Effect',
    difficulty: index < 43 ? 1 : index < 50 ? 2 : 3,
    subLevel: subLevelFor(index),
    question: `Which bias is shown here?\n\n"${english}"`,
    options: rotatedOptions(OPTIONS_EN, correctIndex),
    correct_option_index: correctIndex,
    explanation: 'People can be too confident about simple tasks and too pessimistic about hard ones.',
    detailedExplanationBeginner: 'Simple jobs feel easier than they are, and hard jobs feel impossible.',
    detailedExplanationIntermediate: 'This bias makes people overestimate themselves on easy tasks and underestimate themselves on hard tasks, so their confidence is badly calibrated at both ends.',
    detailedExplanationExpert: 'This is the hard-easy effect: judgment is distorted by task difficulty, so easy items invite inflated certainty while hard items invite exaggerated doubt.',
    questionFormat: 'standard',
  };
});

export const HARD_EASY_EFFECT_EXPANSION_FR: Question[] = SCENARIOS.map(([, french], index) => {
  const correctIndex = index % 4;
  return {
    id: 37901 + index,
    level: 4,
    persona_stage: PersonaStage.CRAB,
    concept: 'Effet difficile-facile',
    difficulty: index < 43 ? 1 : index < 50 ? 2 : 3,
    subLevel: subLevelFor(index),
    question: `Quel biais est montre ici ?\n\n"${french}"`,
    options: rotatedOptions(OPTIONS_FR, correctIndex),
    correct_option_index: correctIndex,
    explanation: 'Les gens peuvent se croire trop confiants pour les taches simples et trop pessimistes pour les taches difficiles.',
    detailedExplanationBeginner: 'Les taches simples paraissent plus faciles qu elles ne le sont, et les taches difficiles paraissent impossibles.',
    detailedExplanationIntermediate: 'Ce biais pousse a surestimer ses capacites sur les taches faciles et a les sous-estimer sur les taches difficiles, donc la confiance est mal calibree aux deux extremes.',
    detailedExplanationExpert: 'C est l effet difficile-facile : le jugement est deforme par la difficulte de la tache, donc les taches faciles produisent une confiance excessive tandis que les taches difficiles produisent un doute exagere.',
    questionFormat: 'standard',
  };
});

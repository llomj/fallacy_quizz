import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya says you must accept the whole friendship group or reject it entirely because one person in it told a bad joke.', 'Maya dit qu il faut accepter tout le groupe d amis ou le rejeter entièrement parce qu une personne du groupe a fait une mauvaise blague.'],
  ['Leo refuses the club because one member is also in a noisy online fandom.', 'Leo refuse le club parce qu un membre fait aussi partie d un fandom en ligne bruyant.'],
  ['Priya says you cannot like the soup unless you like every ingredient in it.', 'Priya dit que tu ne peux pas aimer la soupe a moins d aimer tous les ingrédients qui la composent.'],
  ['Omar says the school project is worthless because one teammate is a little messy.', 'Omar dit que le projet scolaire ne vaut rien parce qu un coequipier est un peu desordonne.'],
  ['Rina says if you support one part of the policy, you must support every part of it.', 'Rina dit que si tu soutiens une partie de la politique, tu dois soutenir toutes les parties.'],
  ['Ben says the bakery deal is bad because the bundle includes one pastry he dislikes.', 'Ben dit que l offre de la boulangerie est mauvaise parce que le lot comprend une patisserie qu il n aime pas.'],
  ['Zoe says a volunteer team is bad overall because one volunteer likes a rival sports club.', 'Zoé dit qu une équipe de bénévoles est mauvaise dans l ensemble parce qu un bénévole aime un club sportif rival.'],
  ['Kai says the app update should be rejected because one feature is confusing.', 'Kai dit que la mise a jour de l application doit etre rejetee parce qu une fonctionnalite est confuse.'],
  ['Nora says the neighborhood cleanup must be accepted or rejected as one block because the flyers were printed badly.', 'Nora dit que le nettoyage du quartier doit etre accepté ou rejeté en bloc parce que les affiches ont ete mal imprimees.'],
  ['Eli says the whole lunch menu is a scam because one item is overpriced.', 'Eli dit que tout le menu du midi est une arnaque parce qu un article est trop cher.'],
  ['Lina says the event package is useless because one talk in it is boring.', 'Lina dit que le forfait evenementiel est inutile parce qu une conférence qu il contient est ennuyeuse.'],
  ['Grant says you should not trust the committee because one member once argued online.', 'Grant dit que tu ne dois pas faire confiance au comité parce qu un membre s est deja dispute en ligne.'],
  ['Tia says a bundled phone plan is bad because it includes voicemail, and she never uses voicemail.', 'Tia dit qu un forfait telephone groupé est mauvais parce qu il inclut la messagerie vocale, et elle ne l utilise jamais.'],
  ['Noah says the school club is perfect or terrible, nothing in between, because one officer is stubborn.', 'Noah dit que le club scolaire est parfait ou terrible, sans milieu, parce qu un responsable est têtu.'],
  ['Mia says the travel package should be judged only by the weakest hotel it contains.', 'Mia dit que le forfait voyage doit etre juge uniquement d apres l hotel le plus faible qu il contient.'],
  ['Jules says the game bundle is bad because one included game looks childish.', 'Jules dit que le lot de jeux est mauvais parce qu un jeu inclus a l air enfantin.'],
  ['Ava says the whole proposal is unacceptable because one paragraph is too wordy.', 'Ava dit que toute la proposition est inacceptable parce qu un paragraphe est trop verbeux.'],
  ['Finn says the community dinner should be rejected because one dish uses mushrooms.', 'Finn dit que le dîner communautaire doit etre rejete parce qu un plat utilise des champignons.'],
  ['Mina says if the class accepts the trip, they must accept every rule the teacher added.', 'Mina dit que si la classe accepte la sortie, elle doit accepter toutes les regles ajoutees par le professeur.'],
  ['Theo says the laptop bundle is a waste because the mouse is not his favorite shape.', 'Theo dit que le lot d ordinateur portable est une perte parce que la souris n a pas la forme qu il prefere.'],
  ['Juno says the charity kit is bad because it contains one brand he never buys.', 'Juno dit que le kit caritatif est mauvais parce qu il contient une marque qu il n achete jamais.'],
  ['Iris says the team outfit is bad because one sock color looks odd.', 'Iris dit que la tenue d equipe est mauvaise parce qu une couleur de chaussette a l air bizarre.'],
  ['Cole says the whole schedule is useless because one meeting feels unnecessary.', 'Cole dit que tout le planning est inutile parce qu une réunion semble inutile.'],
  ['Riley says the student bundle should be thrown out because one included notebook is plain.', 'Riley dit que le pack étudiant doit etre jete parce qu un cahier inclus est simple.'],
  ['Pia says the city plan is a package deal, so either you accept all of it or all of it is bad.', 'Pia dit que le plan de la ville est un tout-en-un, donc soit tu acceptes tout soit tout est mauvais.'],
  ['Hugo says the party playlist must be loved or hated as a whole because one track is too long.', 'Hugo dit que la playlist de fête doit etre aimee ou detestee dans son ensemble parce qu un morceau est trop long.'],
  ['Sam says the workshop is suspicious because the lunch and the talk were sold together.', 'Sam dit que l atelier est louche parce que le déjeuner et la présentation etaient vendus ensemble.'],
  ['Jade says the parent group cannot be trusted because one parent also belongs to a strict club.', 'Jade dit que le groupe de parents ne peut pas etre digne de confiance parce qu un parent appartient aussi a un club strict.'],
  ['Owen says the club membership should be judged as one block because one benefit does not fit him.', 'Owen dit que l adhesion au club doit etre jugee comme un bloc parce qu un avantage ne lui convient pas.'],
  ['Lea says the newsletter is bad because it includes both event dates and donation asks.', 'Lea dit que la newsletter est mauvaise parce qu elle contient a la fois les dates d évènement et les demandes de dons.'],
  ['Maya says the neighborhood plan is worthless because one part is about bike lanes.', 'Maya dit que le plan du quartier ne vaut rien parce qu une partie concerne les pistes cyclables.'],
  ['Ben says the family reunion should be rejected because one cousin always arrives late.', 'Ben dit que la reunion de famille doit etre rejetee parce qu un cousin arrive toujours en retard.'],
  ['Ava says the tech bundle is bad because it includes a charger and she already owns one.', 'Ava dit que le lot de technologie est mauvais parce qu il comprend un chargeur et qu elle en possede deja un.'],
  ['Omar says the town festival is a total yes or total no because one booth sells things he dislikes.', 'Omar dit que le festival de la ville est un oui total ou un non total parce qu un stand vend des choses qu il n aime pas.'],
  ['Nina says the school policy should be rejected because one line mentions uniforms.', 'Nina dit que la politique scolaire doit etre rejetee parce qu une ligne mentionne les uniformes.'],
  ['Eli says the meal combo is bad because the drink is not his favorite brand.', 'Eli dit que le menu combiné est mauvais parce que la boisson n est pas sa marque preferee.'],
  ['Lina says the rescue plan is either perfect or terrible because one radio is glitchy.', 'Lina dit que le plan de secours est soit parfait soit terrible parce qu une radio bugue.'],
  ['Grant says the app subscription is a scam because it comes with both storage and support.', 'Grant dit que l abonnement a l application est une arnaque parce qu il comprend a la fois le stockage et le support.'],
  ['Tia says the study bundle is useless because one workbook has too many pages.', 'Tia dit que le pack d etude est inutile parce qu un cahier a trop de pages.'],
  ['Noah says the volunteer kit is bad because it includes gloves and a water bottle together.', 'Noah dit que le kit de benevolat est mauvais parce qu il inclut des gants et une bouteille d eau ensemble.'],
  ['Mia says the concert package is terrible because the pre-show talk is optional.', 'Mia dit que le forfait concert est terrible parce que la conference d avant-spectacle est optionnelle.'],
  ['Jules says the garden club is one bundle, so if one member is rude the whole club is rude.', 'Jules dit que le club de jardinage est un seul bloc, donc si un membre est impoli tout le club est impoli.'],
  ['Ava says the vacation deal is bad because one excursion is at dawn.', 'Ava dit que l offre de vacances est mauvaise parce qu une excursion se fait a l aube.'],
  ['Hugo says the teacher pack should be refused because it includes extra worksheets.', 'Hugo dit que le pack enseignant doit etre refuse parce qu il comprend des fiches supplementaires.'],
  ['Sam says the fundraiser table is bad because it bundles tickets and snacks together.', 'Sam dit que la table de collecte est mauvaise parce qu elle regroupe billets et collations ensemble.'],
  ['Juno says the recipe card is worthless because it combines the ingredient list and the steps.', 'Juno dit que la fiche recette ne vaut rien parce qu elle combine la liste des ingredients et les etapes.'],
  ['Iris says the club charter is bad because it contains a rule she would never choose.', 'Iris dit que la charte du club est mauvaise parce qu elle contient une regle qu elle ne choisirait jamais.'],
  ['Cole says the office package is unacceptable because it bundles a mug and a notebook.', 'Cole dit que le pack du bureau est inacceptable parce qu il regroupe une tasse et un carnet.'],
  ['Riley says the school starter kit is bad because one pen writes in blue.', 'Riley dit que le kit de rentrée est mauvais parce qu un stylo ecrit en bleu.'],
  ['Pia says the music collection is bad because it mixes slow songs and fast songs.', 'Pia dit que la collection musicale est mauvaise parce qu elle melange des chansons lentes et rapides.'],
  ['Hugo says the neighborhood signup should be treated as one thing because one family objected.', 'Hugo dit que l inscription du quartier doit etre traitee comme un seul tout parce qu une famille a objecte.'],
  ['Mina says the event pass is useless because it includes both entry and a drink token.', 'Mina dit que le pass evenementiel est inutile parce qu il inclut l entree et un jeton boisson.'],
];

const OPTIONS_EN = ['Package Deal Fallacy', 'Composition Fallacy', 'False Dilemma', 'Guilt by Association'];
const OPTIONS_FR = ['Sophisme du tout-en-un', 'Sophisme de composition', 'Faux dilemme', 'Culpabilité par association'];

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
      id: 44101 + index,
      level: 2,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Sophisme du tout-en-un' : 'Package Deal Fallacy',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'La personne traite un ensemble de choses comme si tout devait être accepté ou rejeté en bloc.'
        : 'The person treats a bundle of things as if they must all be accepted or rejected as one block.',
      detailedExplanationBeginner: isFrench
        ? 'Chaque partie devrait pouvoir être évaluée séparément.'
        : 'Each part should be evaluated separately.',
      detailedExplanationIntermediate: isFrench
        ? 'Le sophisme consiste à imposer un paquet indivisible alors que les elements meritent un examen distinct.'
        : 'The fallacy is insisting on an indivisible package when the parts deserve separate examination.',
      detailedExplanationExpert: isFrench
        ? 'Le sophisme du tout-en-un apparait quand quelqu un fusionne des affirmations distinctes en un seul paquet pour forcer une décision binaire. Cela masque les differences de valeur entre les elements et permet d eviter l analyse piece par piece. La bonne réponse consiste a desempaqueter les revendications et a juger chaque point selon ses propres preuves.'
        : 'The package deal fallacy appears when someone merges distinct claims into one bundle to force a binary decision. That hides differences in value among the parts and avoids piece-by-piece analysis. The right move is to unbundle the claims and judge each point on its own evidence.',
      questionFormat: 'standard',
    };
  });
}

export const PACKAGE_DEAL_FALLACY_EXPANSION_EN: Question[] = createQuestions('en');
export const PACKAGE_DEAL_FALLACY_EXPANSION_FR: Question[] = createQuestions('fr');

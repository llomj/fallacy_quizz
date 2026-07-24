import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["The teacher says the first example in the lecture was the clearest, so students remember that one more than the later ones.", "Le professeur dit que le premier exemple du cours etait le plus clair, donc les eleves s en souviennent plus que des suivants."],
  ["Maya judges the whole workout by the opening stretch and forgets the stronger ending.", "Maya juge toute la séance d entrainement sur l etirement de debut et oublie la fin plus intense."],
  ["Leo thinks the first speaker at the town hall was the smartest, even though the best points came later.", "Leo pense que le premier intervenant a la reunion publique etait le plus intelligent, meme si les meilleurs arguments sont venus plus tard."],
  ["Priya remembers the first menu item she heard and ignores the better options that followed.", "Priya se souvient du premier plat mentionne et ignore les meilleures options qui ont suivi."],
  ["Omar says the first boss he had was the benchmark for every job after that.", "Omar dit que son premier patron est devenu le modele pour tous les emplois qui ont suivi."],
  ["Nina gives the first book in a series more credit because it shaped her opinion early.", "Nina accorde plus de valeur au premier livre d une série parce qu il a forge son avis très tôt."],
  ["Eli remembers the first news headline and treats it like the most important one.", "Eli se souvient du premier titre de presse et le traite comme le plus important."],
  ["Ava says the first trip of the day felt best, so the whole day must be great.", "Ava dit que la première sortie de la journée était la meilleure, donc toute la journée doit être excellente."],
  ["Theo trusts the first review he read and barely notices the better ones below it.", "Théo fait confiance au premier avis qu il a lu et remarque à peine les meilleurs en dessous."],
  ["Juno says the first taste of the soup defined the whole meal.", "Juno dit que la première cuillère de soupe a défini tout le repas."],
  ["Mia picks the first candidate she met and ignores the rest of the interview.", "Mia choisit le premier candidat qu elle a rencontré et ignore le reste de l entretien."],
  ["Finn thinks the first song on the album is the reason the album feels memorable.", "Finn pense que la première chanson de l album explique pourquoi l album reste marquant."],
  ["Lea says the first class of the semester set the tone, so all the later classes seem secondary.", "Léa dit que le premier cours du semestre a donné le ton, donc tous les cours suivants lui paraissent secondaires."],
  ["Hugo rates the movie by its opening scene and forgets the strong final act.", "Hugo note le film surtout à cause de sa scène d ouverture et oublie le dernier acte solide."],
  ["Riley remembers the first neighbor he met and decides the whole street is like that.", "Riley se souvient du premier voisin rencontré et décide que toute la rue est comme lui."],
  ["Pia says the first item in the list must be the most important simply because it came first.", "Pia dit que le premier élément de la liste doit être le plus important simplement parce qu il est arrivé en premier."],
  ["Ben says the first day of school was awkward, so the whole year will be awkward.", "Ben dit que le premier jour d école était gênant, donc toute l année sera gênante."],
  ["Nora uses the first comment on her post as the best summary of the debate.", "Nora utilise le premier commentaire sur sa publication comme meilleur résumé du débat."],
  ["Cole says the first city he visited on vacation is the one that represents the whole country.", "Cole dit que la première ville visitée pendant les vacances est celle qui représente tout le pays."],
  ["Jade remembers the first person who was rude at the store and ignores the helpful staff.", "Jade se souvient de la première personne impolie au magasin et ignore le personnel serviable."],
  ["Omar says the first practice round was the real indicator of the team s skill.", "Omar dit que le premier tour d entrainement était le véritable indicateur du niveau de l équipe."],
  ["Tia says the first paragraph of the report was so good that the rest must be good too.", "Tia dit que le premier paragraphe du rapport était si bon que le reste doit être bon aussi."],
  ["Grant thinks the first teacher he had in middle school explains all his feelings about school.", "Grant pense que le premier professeur qu il a eu au collège explique tous ses sentiments envers l école."],
  ["Iris says the first joke in the set was the funniest, so the whole show must be great.", "Iris dit que la première blague du spectacle était la plus drôle, donc tout le spectacle doit être génial."],
  ["Sam remembers the first customer complaint and acts as if it defines the entire product.", "Sam se souvient de la première plainte client et agit comme si elle définissait tout le produit."],
  ["Mina says the first neighborhood market stall she saw is the only one that matters.", "Mina dit que le premier stand du marché de quartier qu elle a vu est le seul qui compte."],
  ["Jules believes the first minute of a podcast tells you everything about the host.", "Jules croit que la première minute d un podcast dit tout sur l animateur."],
  ["Lina says the first explanation in class stuck, so later corrections feel less important.", "Lina dit que la première explication en classe est restée, donc les corrections ultérieures lui semblent moins importantes."],
  ["Zoe says the first apartment she toured is the one that feels like home.", "Zoé dit que le premier appartement qu elle a visité est celui qui lui donne l impression d être chez elle."],
  ["Kai says the first team member to speak is probably the smartest one.", "Kai dit que le premier membre de l équipe à parler est probablement le plus intelligent."],
  ["Maya judges the whole recipe by the first bite and ignores the final flavor.", "Maya juge toute la recette sur la première bouchée et ignore la saveur finale."],
  ["Owen says the first suggestion in a meeting wins because people remember it first.", "Owen dit que la première suggestion en réunion l emporte parce que les gens s en souviennent en premier."],
  ["Ava thinks the first train announcement is the most trustworthy one.", "Ava pense que la première annonce du train est la plus fiable."],
  ["Noah says the first paragraph in an email is all he needs to know.", "Noah dit que le premier paragraphe d un courriel est tout ce dont il a besoin pour comprendre."],
  ["Rina says the first tip from the mechanic is the one she should follow, no matter what comes next.", "Rina dit que le premier conseil du mécanicien est celui qu elle doit suivre, peu importe la suite."],
  ["Eli says the first playlist song sets the vibe for the whole evening.", "Eli dit que la première chanson de la playlist donne le ton pour toute la soirée."],
  ["Priya says the first draft of the essay sounded best, so later editing was unnecessary.", "Priya dit que la première version de la dissertation sonnait le mieux, donc la réécriture était inutile."],
  ["Theo remembers the first bus driver as the standard for all drivers.", "Théo se souvient du premier chauffeur de bus comme de la référence pour tous les chauffeurs."],
  ["Juno says the first photo in the album is the one that tells the story best.", "Juno dit que la première photo de l album est celle qui raconte le mieux l histoire."],
  ["Mia says the first part of the speech convinced her, so the rest must be persuasive too.", "Mia dit que la première partie du discours l a convaincue, donc le reste doit être persuasif aussi."],
  ["Finn says the first classroom seat he sat in made the subject seem harder than it was.", "Finn dit que la première place de classe où il s est assis a rendu la matière plus difficile qu elle ne l était."],
  ["Lea says the first proposal should guide the final decision because it arrived first.", "Léa dit que la première proposition doit guider la décision finale parce qu elle est arrivée en premier."],
  ["Hugo says the first slice of cake was the best, so he skips comparing the other flavors.", "Hugo dit que la première part de gâteau était la meilleure, donc il ne compare pas les autres parfums."],
  ["Riley says the first headline on the site is the one that matters most.", "Riley dit que le premier titre sur le site est celui qui compte le plus."],
  ["Pia says the first answer in the study guide is the one to memorize.", "Pia dit que la première réponse dans le guide d étude est celle à mémoriser."],
  ["Ben says the first tour guide he heard is the most knowledgeable, even without checking others.", "Ben dit que le premier guide touristique qu il a entendu est le plus compétent, sans vérifier les autres."],
  ["Nora says the first warning in a thread should outweigh the later clarifications.", "Nora dit que le premier avertissement dans un fil de discussion doit compter plus que les précisions ultérieures."],
  ["Cole says the first chef recommendation is the one he trusts for the whole menu.", "Cole dit que la première recommandation du chef est celle en qui il a confiance pour tout le menu."],
  ["Jade says the first example in the lesson is the key one, even when the later example is clearer.", "Jade dit que le premier exemple du cours est le plus important, même lorsque l exemple suivant est plus clair."],
  ["Omar says the first paragraph in a contract feels like the real message, so he barely reads the rest.", "Omar dit que le premier paragraphe d un contrat ressemble au vrai message, donc il lit à peine le reste."],
  ["Tia says the first try at the recipe gives the whole cookbook its reputation.", "Tia dit que la première tentative de la recette donne toute sa réputation au livre de cuisine."],
];

const OPTIONS_EN = ['Primacy Effect', 'Recency Effect', 'Serial Position Effect', 'Confirmation Bias'];
const OPTIONS_FR = ['Effet de primauté', 'Effet de récence', 'Effet de position sérielle', 'Biais de confirmation'];

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
      id: 44251 + index,
      level: 3,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Effet de primauté' : 'Primacy Effect',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel effet cognitif est illustré ici ?' : 'Which cognitive effect is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? "La première information reçue pèse trop lourd dans le jugement."
        : 'The first piece of information gets too much weight in the judgment.',
      detailedExplanationBeginner: isFrench
        ? "Ce qui arrive en premier influence trop la décision."
        : 'What comes first influences the decision too much.',
      detailedExplanationIntermediate: isFrench
        ? "L effet de primauté fait retenir et juger davantage les éléments du début, même si la suite contient des indices meilleurs ou plus précis."
        : 'The primacy effect makes people remember and judge the early items more heavily, even if later information is better or more precise.',
      detailedExplanationExpert: isFrench
        ? "Cet effet apparaît quand l ordre de présentation crée un avantage pour les premières informations. Il peut aider à construire une première impression utile, mais il devient un biais quand il bloque l évaluation des données suivantes et qu on confond le début d une séquence avec sa valeur totale."
        : 'This effect appears when presentation order gives an advantage to the first information. It can help form a useful initial impression, but it becomes a bias when it blocks later evidence and makes people confuse the beginning of a sequence with its total value.',
      questionFormat: 'standard',
    };
  });
}

export const PRIMACY_EFFECT_EXPANSION_EN: Question[] = createQuestions('en');
export const PRIMACY_EFFECT_EXPANSION_FR: Question[] = createQuestions('fr');

import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya says online recipe sites are useless because most of the top results are messy or wrong.', 'Maya dit que les sites de recettes en ligne sont inutiles parce que la plupart des resultats en tete sont brouillons ou faux.'],
  ['Ben claims book review blogs are a waste because many of them rave about terrible books.', 'Ben affirme que les blogs de critiques de livres sont une perte de temps parce que beaucoup encensent de mauvais livres.'],
  ['Priya says every podcast is bad because she only found a few good episodes after scrolling for an hour.', 'Priya dit que tous les podcasts sont mauvais parce qu elle n a trouve que quelques bons episodes apres une heure de recherche.'],
  ['Noah thinks photo-sharing apps are pointless because most random uploads are blurry or boring.', 'Noah pense que les applications de partage de photos sont inutiles parce que la plupart des envois au hasard sont flous ou ennuyeux.'],
  ['Lina says a city art fair must be bad because most booths were selling cheap prints.', 'Lina dit qu une foire d art en ville doit etre mauvaise parce que la plupart des stands vendaient des impressions bon marche.'],
  ['Theo argues streaming catalogs are worthless because many titles are forgettable filler.', 'Theo soutient que les catalogues de streaming sont sans valeur parce que beaucoup de titres sont du remplissage oubliable.'],
  ['Ava says online advice forums are pointless because most replies are shallow or sarcastic.', 'Ava dit que les forums de conseils en ligne sont inutiles parce que la plupart des reponses sont superficielles ou sarcastiques.'],
  ['Omar thinks social media is all garbage because a lot of the posts he sees are low effort.', 'Omar pense que les reseaux sociaux sont tous des ordures parce qu une grande partie des publications qu il voit demandent peu d effort.'],
  ['Rina says local food festivals are unimpressive because many vendors sell the same mediocre snacks.', 'Rina dit que les festivals culinaires locaux sont peu impressionnants parce que beaucoup de vendeurs proposent les memes collations mediocres.'],
  ['Jules argues fan fiction is bad because a lot of it is awkward or repetitive.', 'Jules affirme que les fanfictions sont mauvaises parce qu une grande partie est maladroite ou repetitive.'],
  ['Mina says online courses are mostly trash because she clicked through several boring ones.', 'Mina dit que les cours en ligne sont surtout du mauvais parce qu elle a clique sur plusieurs cours ennuyeux.'],
  ['Eli thinks city street art is overrated because some walls are covered in sloppy tags.', 'Eli pense que l art de rue en ville est surestime parce que certains murs sont couverts de tags mal faits.'],
  ['Hugo says open mic nights must be terrible because a lot of performers are nervous or off key.', 'Hugo dit que les soirees open mic doivent etre terribles parce que beaucoup d artistes sont nerveux ou faux.'],
  ['Lea claims mobile games are all junk because many free ones are stuffed with ads.', 'Lea affirme que les jeux mobiles sont tous nuls parce que beaucoup de gratuits sont remplis de publicites.'],
  ['Grant says a new tech forum is worthless because half the threads are nonsense.', 'Grant dit qu un nouveau forum tech ne vaut rien parce que la moitie des discussions sont absurdes.'],
  ['Tia thinks craft fairs are bad because plenty of stalls sell the same candles and soap.', 'Tia pense que les marches artisanaux sont mauvais parce que beaucoup d etals vendent les memes bougies et savons.'],
  ['Nora says food blogs are useless because lots of posts are just recycled copy and photos.', 'Nora dit que les blogs culinaires sont inutiles parce que beaucoup de publications ne sont que du copier-coller recycle avec des photos.'],
  ['Sam thinks online tutorials are a scam because many are poorly made or incomplete.', 'Sam pense que les tutoriels en ligne sont une arnaque parce que beaucoup sont mal faits ou incomplets.'],
  ['Jade says small indie games are mostly bad because several were buggy and short.', 'Jade dit que les petits jeux independants sont surtout mauvais parce que plusieurs etaient bugges et courts.'],
  ['Owen argues that neighborhood yard sales are a disappointment because most tables have junk.', 'Owen soutient que les vide-greniers du quartier sont decevants parce que la plupart des tables ont des bricoles sans valeur.'],
  ['Ari thinks streaming documentaries are weak because many feel like padded magazine pieces.', 'Ari pense que les documentaires en streaming sont faibles parce que beaucoup ressemblent a des articles de magazine gonfles.'],
  ['Pia says public comment sections are worthless because many people only post jokes or insults.', 'Pia dit que les sections de commentaires publics sont inutiles parce que beaucoup de gens n y publient que des blagues ou des insultes.'],
  ['Ben claims online marketplaces are hopeless because a lot of listings are misleading.', 'Ben affirme que les places de marche en ligne sont desesperantes parce que beaucoup d annonces sont trompeuses.'],
  ['Zoe says music blogs are trash because many reviews sound like copy-pasted hype.', 'Zoe dit que les blogs musicaux sont du mauvais parce que beaucoup de critiques ressemblent a de la pub recopiee.'],
  ['Ravi thinks DIY videos are bad because several projects look cheap or rushed.', 'Ravi pense que les videos de bricolage sont mauvaises parce que plusieurs projets ont l air bon marche ou bacles.'],
  ['Sofia says online discussion boards are hopeless because many threads end in arguments.', 'Sofia dit que les forums de discussion en ligne sont sans espoir parce que beaucoup de fils finissent en disputes.'],
  ['Lara argues that free stock photo sites are all junk because most images look generic.', 'Lara affirme que les banques d images gratuites sont toutes nulles parce que la plupart des images semblent generiques.'],
  ['Cole says lecture clips are boring because many are just someone reading slides slowly.', 'Cole dit que les extraits de cours sont ennuyeux parce que beaucoup ne sont qu une personne lisant lentement des diapositives.'],
  ['Maya thinks online art portfolios are weak because many artists post only their rough sketches.', 'Maya pense que les portfolios d art en ligne sont faibles parce que beaucoup d artistes ne publient que leurs croquis bruts.'],
  ['Ezra says neighborhood apps are useless because the feed is full of complaints.', 'Ezra dit que les applications de quartier sont inutiles parce que le fil est plein de plaintes.'],
  ['Nina argues travel review sites are unreliable because too many comments are written by people who hated everything.', 'Nina soutient que les sites d avis de voyage sont peu fiables parce que trop de commentaires viennent de personnes qui ont deteste tout.'],
  ['Hana says online craft classes are junk because half the examples are badly edited.', 'Hana dit que les cours de loisirs creatifs en ligne sont mauvais parce que la moitie des exemples sont mal montes.'],
  ['Dylan claims most newsletters are garbage because he unsubscribed from several after one issue.', 'Dylan affirme que la plupart des newsletters sont mauvaises parce qu il s est desabonne de plusieurs apres un seul numero.'],
  ['Penny thinks fan conventions are disappointing because some panels are dull or disorganized.', 'Penny pense que les conventions de fans sont decevantes parce que certains panels sont fades ou mal organises.'],
  ['Kira says online recipes cannot be trusted because too many of them skip important steps.', 'Kira dit qu on ne peut pas faire confiance aux recettes en ligne parce que trop d entre elles sautent des etapes importantes.'],
  ['Finn thinks comment sections are hopeless because most people only argue about unrelated details.', 'Finn pense que les sections de commentaires sont sans espoir parce que la plupart des gens se disputent seulement sur des details sans rapport.'],
  ['Juno says many video essays are bad because they go on too long and repeat themselves.', 'Juno dit que beaucoup de video-essais sont mauvais parce qu ils durent trop longtemps et se repetent.'],
  ['Olivia thinks startup blogs are fluff because most articles promise easy success.', 'Olivia pense que les blogs de startups sont du vent parce que la plupart des articles promettent un succes facile.'],
  ['Mila says online writing communities are poor because many posts need heavy editing.', 'Mila dit que les communautes d ecriture en ligne sont faibles parce que beaucoup de textes demandent une lourde relecture.'],
  ['Leo argues town newsletters are not worth reading because lots of issues are just ads and notices.', 'Leo soutient que les bulletins municipaux ne valent pas la peine d etre lus parce que beaucoup de numeros ne contiennent que des pubs et des annonces.'],
  ['Tara says the average mobile puzzle is bad because several of them are copycat clones.', 'Tara dit que le jeu de puzzle mobile moyen est mauvais parce que plusieurs sont des clones copies.'],
  ['Hugo thinks culinary magazines are weak because many features recycle the same five recipes.', 'Hugo pense que les magazines culinaires sont faibles parce que beaucoup de dossiers recyclent les cinq memes recettes.'],
  ['Lea says community forums are not useful because half the answers are guesses.', 'Lea dit que les forums communautaires ne sont pas utiles parce que la moitie des reponses sont des suppositions.'],
  ['Max argues art classes online are poor because a lot of lessons are filmed in bad lighting.', 'Max soutient que les cours d art en ligne sont mauvais parce que beaucoup de lecons sont filmees dans un mauvais eclairage.'],
  ['Yara says local event pages are a mess because the comments are mostly off topic.', 'Yara dit que les pages d evenements locaux sont un fouillis parce que les commentaires sont surtout hors sujet.'],
  ['Dan thinks recipe newsletters are worthless because they repeat the same seasonal desserts.', 'Dan pense que les newsletters de recettes ne valent rien parce qu elles repetent les memes desserts de saison.'],
  ['Rosa says online book clubs are bad because many members only post one-line reactions.', 'Rosa dit que les clubs de lecture en ligne sont mauvais parce que beaucoup de membres ne publient que des reactions en une ligne.'],
  ['Alicia thinks hobby apps are full of junk because most of the suggestions are not personalized.', 'Alicia pense que les applications de loisirs sont remplies de mauvais parce que la plupart des suggestions ne sont pas personnalisees.'],
  ['Owen says documentary channels are poor because a lot of episodes are cheaply produced.', 'Owen dit que les chaines de documentaires sont faibles parce que beaucoup d episodes sont produits a bas cout.'],
  ['Maya argues that most online map reviews are useless because so many are written in a hurry.', 'Maya soutient que la plupart des avis de cartes en ligne sont inutiles parce que beaucoup sont ecrits a la va-vite.'],
];

const OPTIONS_EN = ['Sturgeon\'s Law', 'Hasty Generalization', 'Selection Bias', 'Survivorship Bias'];
const OPTIONS_FR = ['Loi de Sturgeon', 'Généralisation hâtive', 'Biais de sélection', 'Biais de survie'];

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
    const correctIndex = index % 4;
    const isFrench = language === 'fr';
    return {
      id: 41701 + index,
      level: 3,
      persona_stage: PersonaStage.OCTOPUS,
      concept: isFrench ? 'Loi de Sturgeon' : "Sturgeon's Law",
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais est illustré ici ?' : 'Which bias is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'La personne conclut qu un domaine entier est peu utile parce qu une grande partie de ce qu elle a vu etait mediocre.'
        : 'The person concludes an entire domain is not worth it because much of what they saw was mediocre.',
      detailedExplanationBeginner: isFrench
        ? 'Quelques mauvais exemples ne disent pas tout sur un domaine.'
        : 'A few bad examples do not tell you everything about a whole domain.',
      detailedExplanationIntermediate: isFrench
        ? 'La loi de Sturgeon rappelle que beaucoup de productions sont mediocres, mais il faut quand meme evaluer chaque cas au lieu de jeter toute la categorie.'
        : "Sturgeon's Law reminds us that much of what is produced is mediocre, but you still need to judge each case instead of discarding the whole category.",
      detailedExplanationExpert: isFrench
        ? "Cette maxime est souvent vraie descriptivement, mais elle devient trompeuse quand on l utilise pour conclure qu un espace entier est sans valeur. Le fait qu une majorité de contenus soient faibles n autorise pas a ignorer les cas solides, ni à confondre fréquence de médiocrité et absence totale de qualité."
        : 'This maxim is often descriptively true, but it becomes misleading when used to conclude that an entire domain has no value. The fact that a majority of items may be weak does not justify ignoring the strong cases, or confusing frequent mediocrity with total absence of quality.',
      questionFormat: 'standard',
    };
  });
}

export const STURGEONS_LAW_EXPANSION_EN: Question[] = createQuestions('en');
export const STURGEONS_LAW_EXPANSION_FR: Question[] = createQuestions('fr');

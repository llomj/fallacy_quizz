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
  ['Maya says local history blogs are boring because many posts are just quick summaries of old events.', 'Maya dit que les blogs d histoire locale sont ennuyeux parce que beaucoup de publications ne sont que de courts resumes de vieux evenements.'],
  ['Ben claims coding tutorial sites are pointless because a lot of the lessons repeat the same beginner examples.', 'Ben affirme que les sites de tutoriels de code sont inutiles parce que beaucoup de lecons repetent les memes exemples pour debutants.'],
  ['Priya says online bakery reviews are unreliable because most posts are just praise or complaints with no details.', 'Priya dit que les avis en ligne sur les boulangeries ne sont pas fiables parce que la plupart ne sont que des eloges ou des plaintes sans details.'],
  ['Noah thinks community gardening forums are weak because many threads are just people showing one flower picture.', 'Noah pense que les forums de jardinage communautaire sont faibles parce que beaucoup de fils ne montrent qu une photo de fleur.'],
  ['Lina says language learning apps are bad because some lessons feel like flashcard drills.', 'Lina dit que les applications d apprentissage des langues sont mauvaises parce que certaines leçons ressemblent à des exercices de cartes memoires.'],
  ['Theo argues movie discussion podcasts are garbage because several episodes spend too long on plot summaries.', 'Theo soutient que les podcasts de discussion sur les films sont nuls parce que plusieurs episodes passent trop de temps sur les resumes de l intrigue.'],
  ['Ava says neighborhood swap groups are useless because many posts are just "available" or "gone."', 'Ava dit que les groupes d echange de quartier sont inutiles parce que beaucoup de publications disent seulement "disponible" ou "parti".'],
  ['Omar claims parenting blogs are empty because some articles just say "be patient" in different words.', 'Omar affirme que les blogs de parentalite sont creux parce que certains articles se contentent de dire "soyez patient" avec d autres mots.'],
  ['Rina says recipe channels are poor because many videos skip the measurements and only show the final dish.', 'Rina dit que les chaines de recettes sont faibles parce que beaucoup de videos sautent les mesures et montrent seulement le plat fini.'],
  ['Jules thinks concert review sites are worthless because too many reviews are just "great show!"', 'Jules pense que les sites d avis de concerts ne valent rien parce que trop d avis se resumant à "super spectacle !".'],
  ['Mina says online fitness communities are mostly junk because lots of posts are just before-and-after photos.', 'Mina dit que les communautes de fitness en ligne sont surtout mauvaises parce que beaucoup de publications ne sont que des photos avant-apres.'],
  ['Eli claims tech support blogs are hopeless because many articles repeat the same reset instructions.', 'Eli affirme que les blogs d assistance technique sont desesperants parce que beaucoup d articles repetent les memes instructions de reinitialisation.'],
  ['Hugo says travel vlog sites are empty because some videos are just airport clips and hotel check-ins.', 'Hugo dit que les sites de vlogs de voyage sont vides parce que certaines videos ne montrent que des clips d aeroport et des arrivées à l hotel.'],
  ['Lea thinks hobby forums are bad because several threads are only people posting materials lists.', 'Lea pense que les forums de loisirs sont mauvais parce que plusieurs fils ne contiennent que des listes de materiel.'],
  ['Grant says school newsletter archives are boring because a lot of issues are just reminders and photos.', 'Grant dit que les archives des bulletins scolaires sont ennuyeuses parce que beaucoup de numeros ne sont que des rappels et des photos.'],
  ['Tia claims streaming review blogs are useless because many are copied from press releases.', 'Tia affirme que les blogs d avis sur le streaming sont inutiles parce que beaucoup sont copies de communiques de presse.'],
  ['Nora says local restaurant ranking sites are a joke because some entries are only star ratings.', 'Nora dit que les sites de classement des restaurants locaux sont ridicules parce que certaines fiches ne contiennent que des etoiles.'],
  ['Sam thinks craft instruction videos are bad because plenty spend half the time on intro chatter.', 'Sam pense que les videos d instruction artisanale sont mauvaises parce que beaucoup passent la moitie du temps en bavardage d introduction.'],
  ['Jade says free lecture notes websites are poor because many notes are just copied slides.', 'Jade dit que les sites de notes de cours gratuites sont faibles parce que beaucoup de notes ne sont que des diapositives copiees.'],
  ['Owen claims neighborhood forum posts are worthless because half the comments are jokes.', 'Owen affirme que les messages des forums de quartier ne valent rien parce que la moitie des commentaires sont des blagues.'],
  ['Ari says fashion advice newsletters are junk because some issues only list trending colors.', 'Ari dit que les newsletters de conseils mode sont du mauvais parce que certains numeros ne listent que les couleurs tendance.'],
  ['Pia thinks book recommendation channels are bad because many videos are just "read this" lists.', 'Pia pense que les chaines de recommandations de livres sont mauvaises parce que beaucoup de videos ne sont que des listes "lisez ceci".'],
  ['Ben says photo editing blogs are useless because several posts only cover the same crop tool.', 'Ben dit que les blogs de retouche photo sont inutiles parce que plusieurs articles ne parlent que du meme outil de recadrage.'],
  ['Zoe claims meal-prep pages are weak because many tips are obvious or repetitive.', 'Zoé affirme que les pages de preparation des repas sont faibles parce que beaucoup de conseils sont evidents ou repetitifs.'],
  ['Ravi says hiking newsletters are boring because a lot of them only mention boots and water bottles.', 'Ravi dit que les newsletters de randonnee sont ennuyeuses parce que beaucoup ne mentionnent que des bottes et des gourdes.'],
  ['Sofia argues coding Q and A sites are bad because many answers are just "use the docs."', 'Sofia soutient que les sites de questions-reponses sur le code sont mauvais parce que beaucoup de reponses disent simplement "utilisez la documentation".'],
  ['Lara says school club pages are pointless because several are only calendars and contact names.', 'Lara dit que les pages des clubs scolaires sont inutiles parce que plusieurs ne sont que des calendriers et des noms de contact.'],
  ['Cole thinks recipe videos are weak because many spend too long on a slow close-up of the food.', 'Cole pense que les videos de recettes sont faibles parce que beaucoup passent trop de temps sur un gros plan lent de la nourriture.'],
  ['Maya says city service apps are trash because some menus are buried under too many buttons.', 'Maya dit que les applications de services urbains sont nulles parce que certains menus sont enfouis sous trop de boutons.'],
  ['Ezra claims online museum tours are disappointing because a lot of them only show one room.', 'Ezra affirme que les visites virtuelles de musee sont decevantes parce que beaucoup ne montrent qu une seule salle.'],
  ['Nina says customer review sites are poor because too many reviewers only write one sentence.', 'Nina dit que les sites d avis clients sont mauvais parce que trop de personnes n ecrivent qu une seule phrase.'],
  ['Hana argues language blogs are weak because many lessons are just vocabulary lists.', 'Hana soutient que les blogs de langues sont faibles parce que beaucoup de lecons ne sont que des listes de vocabulaire.'],
  ['Dylan says sports highlight pages are useless because they only show the best plays.', 'Dylan dit que les pages de moments forts sportifs sont inutiles parce qu elles ne montrent que les meilleures actions.'],
  ['Penny thinks volunteer listings are bad because many entries are only "need help now."', 'Penny pense que les annonces de benevolat sont mauvaises parce que beaucoup d entrees disent seulement "besoin d aide maintenant".'],
  ['Kira claims parenting podcasts are junk because some episodes are mostly anecdotes and sighing.', 'Kira affirme que les podcasts de parentalite sont du mauvais parce que certains episodes sont surtout des anecdotes et des soupirs.'],
  ['Finn says movie database comments are worthless because too many are one-word reactions.', 'Finn dit que les commentaires des bases de donnees de films ne valent rien parce que trop d entre eux sont des reactions d un mot.'],
  ['Juno argues budgeting apps are poor because some articles just tell you to spend less.', 'Juno soutient que les applications de budget sont faibles parce que certains articles disent simplement de depenser moins.'],
  ['Olivia says food blogs are bad because many posts spend more time on photos than instructions.', 'Olivia dit que les blogs culinaires sont mauvais parce que beaucoup de publications passent plus de temps sur les photos que sur les instructions.'],
  ['Mila thinks travel guides are useless because a lot of them are packed with ads.', 'Mila pense que les guides de voyage sont inutiles parce que beaucoup sont remplis de publicites.'],
  ['Leo claims neighborhood charity pages are weak because most of the posts are just donation asks.', 'Leo affirme que les pages de charite de quartier sont faibles parce que la plupart des publications ne sont que des demandes de dons.'],
  ['Tara says online study groups are a mess because many chats are just "what did we have to read?"', 'Tara dit que les groupes d etude en ligne sont un desastre parce que beaucoup de discussions se reduisent à "qu est-ce qu on devait lire ?".'],
  ['Hugo thinks software changelog sites are boring because lots of updates are one-line fixes.', 'Hugo pense que les sites de journaux de modifications logicielles sont ennuyeux parce que beaucoup de mises à jour ne sont qu une correction en une ligne.'],
  ['Lea says recipe comment sections are unreliable because several are just "looks good."', 'Lea dit que les sections de commentaires des recettes ne sont pas fiables parce que plusieurs se contentent de "ca a l air bon".'],
  ['Max thinks local event pages are bad because many posts only say where and when.', 'Max pense que les pages d evenements locaux sont mauvaises parce que beaucoup de publications disent seulement ou et quand.'],
  ['Yara says online hobby groups are empty because too many posts are just finished-project photos.', 'Yara dit que les groupes de loisirs en ligne sont vides parce que trop de publications ne sont que des photos de projets termines.'],
  ['Dan claims review forums are garbage because some threads spiral into the same argument.', 'Dan affirme que les forums d avis sont du mauvais parce que certains fils degenerent en la meme dispute.'],
  ['Rosa says tutorial sites are poor because many lessons end with "and then you are done."', 'Rosa dit que les sites de tutoriels sont faibles parce que beaucoup de lecons se terminent par "et puis c est fini".'],
  ['Alicia thinks event calendars are useless because some entries are only titles without detail.', 'Alicia pense que les calendriers d evenements sont inutiles parce que certaines entrees ne contiennent que des titres sans detail.'],
  ['Owen says fan forums are bad because many posts are just screenshots and emojis.', 'Owen dit que les forums de fans sont mauvais parce que beaucoup de publications ne sont que des captures d ecran et des emojis.'],
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

import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['After Maya gets praise for a smooth team presentation, she says it happened because she is naturally brilliant; when the next one goes badly, she blames the broken projector.', 'Apres que Maya ait recu des compliments pour une presentation d equipe fluide, elle dit que c etait grace a son genie naturel ; quand la suivante se passe mal, elle accuse le projecteur casse.'],
  ['Ben wins the trivia game and tells everyone it was all his knowledge; after losing the next round, he says the questions were unfair.', 'Ben gagne le jeu de quiz et dit a tout le monde que tout vient de ses connaissances ; apres avoir perdu la manche suivante, il dit que les questions etaient injustes.'],
  ['Priya gets a good review at work and credits her own talent; after a bad review, she says her manager had unrealistic expectations.', 'Priya obtient une bonne evaluation au travail et attribue cela a son propre talent ; apres une mauvaise evaluation, elle dit que son responsable avait des attentes irreelles.'],
  ['Noah aces a driving test and says he is just a natural driver; when he fails a parking test, he blames the tight lot.', 'Noah reussit son examen de conduite et dit qu il est simplement un conducteur ne ; quand il echoue a un test de stationnement, il accuse le parking trop etroit.'],
  ['Lina lands a sales deal and says her persuasion was the reason; when another pitch falls flat, she says the client was already impossible.', 'Lina conclut une vente et dit que c est grace a son pouvoir de persuasion ; quand un autre argumentaire tombe a plat, elle dit que le client etait deja impossible.'],
  ['Theo fixes a bug quickly and tells the team it proves his skill; when a later bug takes hours, he says the codebase is a mess.', 'Theo corrige un bug rapidement et dit a l equipe que cela prouve sa competence ; quand un bug plus tardif prend des heures, il dit que le code est un desastre.'],
  ['Ava cooks a great dinner and says she is a gifted chef; when lunch burns, she says the oven ran too hot.', 'Ava prepare un excellent diner et dit qu elle est une cuisiniere douee ; quand le dejeuner brule, elle dit que le four chauffait trop.'],
  ['Omar gets applause after his speech and says the audience loved his brilliance; when the next talk gets silence, he says the room was cold and distracted.', 'Omar reçoit des applaudissements apres son discours et dit que le public a adore son genie ; quand le discours suivant recoit le silence, il dit que la salle etait froide et distraite.'],
  ['Rina finishes a workout and says her discipline made the difference; after skipping the next session, she says work was exhausting.', 'Rina termine un entrainement et dit que sa discipline a tout change ; apres avoir saute la seance suivante, elle dit que le travail etait epuisant.'],
  ['Jules gets a compliment on his report and says it proves he is very organized; when a later report needs revisions, he says the instructions were unclear.', 'Jules reçoit un compliment pour son rapport et dit que cela prouve qu il est tres organise ; quand un rapport suivant doit etre revise, il dit que les consignes etaient floues.'],
  ['Mina wins at cards and says she played smarter than everyone else; when she loses the next game, she blames bad luck.', 'Mina gagne aux cartes et dit qu elle a joue plus intelligemment que tout le monde ; quand elle perd la partie suivante, elle accuse la malchance.'],
  ['Eli solves a puzzle fast and says he is just better than the others; when a harder puzzle stumps him, he says the app was buggy.', 'Eli resolut un casse-tete vite et dit qu il est simplement meilleur que les autres ; quand un puzzle plus difficile le bloque, il dit que l application bugait.'],
  ['Hugo arrives early to a family event and says it shows his reliability; when he shows up late next time, he says traffic was awful.', 'Hugo arrive en avance a un evenement familial et dit que cela montre sa fiabilite ; quand il arrive en retard la fois suivante, il dit que la circulation etait terrible.'],
  ['Lea gets a scholarship and says it was because she worked harder than anyone; when she misses a smaller award, she says the committee only liked flashy applicants.', 'Lea obtient une bourse et dit que c est parce qu elle a plus travaille que tout le monde ; quand elle rate un prix plus modeste, elle dit que le jury aimait seulement les candidats tape-a-l oeil.'],
  ['Grant fixes the printer and says he is the only competent person in the office; when he cannot set up the scanner, he says the manual was useless.', 'Grant reussit a reparer l imprimante et dit qu il est la seule personne competente au bureau ; quand il n arrive pas a configurer le scanner, il dit que le mode d emploi etait inutile.'],
  ['Tia gets a favorite-seat upgrade and says the staff rewarded her good attitude; when the next upgrade goes to someone else, she says the system is rigged.', 'Tia obtient une place amelioree et dit que le personnel a recompense sa bonne attitude ; quand la prochaine amelioration va a quelqu un d autre, elle dit que le systeme est truque.'],
  ['Nora gives a clear explanation and says she is naturally a great communicator; when a later explanation confuses people, she says they were not listening.', 'Nora donne une explication claire et dit qu elle est naturellement tres bonne communicante ; quand une explication suivante embrouille les gens, elle dit qu ils n ecoutaient pas.'],
  ['Sam posts a funny video and says it went viral because of his creativity; when the next one flops, he says the platform buried it.', 'Sam publie une video drole et dit qu elle est devenue virale grace a sa creativite ; quand la suivante echoue, il dit que la plateforme l a enterree.'],
  ['Jade gets invited back after a tutoring session and says her teaching style is excellent; when a student struggles later, she says the student was distracted.', 'Jade est invitee a revenir apres une seance de tutorat et dit que son style d enseignement est excellent ; quand un eleve lutte plus tard, elle dit que l eleve etait distrait.'],
  ['Owen’s garden blooms and he says it is because he has the best hands for plants; when a pot dies, he says the store sold him a bad seedling.', 'Le jardin d Owen fleurit et il dit que c est parce qu il a les meilleures mains pour les plantes ; quand un pot meurt, il dit que le magasin lui a vendu une mauvaise pousse.'],
  ['Ari gets a good hotel review and says it proves his taste is excellent; when a later trip is disappointing, he says the location was noisy.', 'Ari obtient un bon avis sur un hotel et dit que cela prouve que son gout est excellent ; quand un voyage suivant decçoit, il dit que l emplacement etait bruyant.'],
  ['Pia completes a hard hike and says her grit is exceptional; when she turns back on the next trail, she says the weather was unsafe.', 'Pia termine une randonnee difficile et dit que sa determination est exceptionnelle ; quand elle fait demi-tour sur le sentier suivant, elle dit que le temps etait dangereux.'],
  ['Ben wins a debate and says his logic carried the day; after losing the next one, he says the other side interrupted too much.', 'Ben gagne un debat et dit que sa logique a fait la difference ; apres avoir perdu le suivant, il dit que l autre camp interrompait trop.'],
  ['Zoe gets a neat apartment and says it proves her superior habits; when the next room gets messy, she says she was too busy.', 'Zoe a un appartement rangé et dit que cela prouve ses habitudes superieures ; quand la piece suivante devient en bazar, elle dit qu elle etait trop occupee.'],
  ['Ravi gets a promotion and says it is because he is the most capable person there; when someone else advances, he says office politics won.', 'Ravi obtient une promotion et dit que c est parce qu il est la personne la plus competente la-bas ; quand quelqu un d autre monte en grade, il dit que la politique interne a gagne.'],
  ['Sofia handles one complaint calmly and says she is amazing under pressure; after snapping at the next one, she says the customer was rude.', 'Sofia gere une plainte avec calme et dit qu elle est incroyable sous pression ; apres avoir repondu durement a la suivante, elle dit que le client etait impoli.'],
  ['Lara gets a clean homework score and says she just has discipline; when she misses a few points later, she says the teacher marked harshly.', 'Lara obtient une copie parfaite et dit qu elle a simplement de la discipline ; quand elle perd quelques points plus tard, elle dit que le professeur notait severement.'],
  ['Cole’s joke lands perfectly and he says his humor is sharp; when another joke fails, he says the crowd had no taste.', 'La blague de Cole fait mouche et il dit que son humour est affute ; quand une autre blague echoue, il dit que le public n avait aucun gout.'],
  ['Maya gets a good tennis match and says she won through skill; when she loses the next one, she says the court was slippery.', 'Maya fait un bon match de tennis et dit qu elle a gagne grace a son talent ; quand elle perd le suivant, elle dit que le terrain etait glissant.'],
  ['Ezra receives praise for a slideshow and says he is naturally persuasive; when the next slideshow is ignored, he says people were on their phones.', 'Ezra reçoit des compliments pour un diaporama et dit qu il est naturellement convaincant ; quand le diaporama suivant est ignore, il dit que les gens etaient sur leur telephone.'],
  ['Nina sells out her cookies and says her recipe is unbeatable; when the next batch is left over, she says the timing was wrong.', 'Nina vend toutes ses biscuits et dit que sa recette est imbattable ; quand le lot suivant reste invendu, elle dit que le moment etait mauvais.'],
  ['Hana solves a budgeting issue and says she is great with money; when she overspends later, she says the bills arrived all at once.', 'Hana resout un probleme de budget et dit qu elle est tres bonne avec l argent ; quand elle depense trop plus tard, elle dit que les factures sont arrivees en meme temps.'],
  ['Dylan gets to class on time and says he is becoming very responsible; when he is late next week, he says the bus was delayed.', 'Dylan arrive a l heure en cours et dit qu il devient tres responsable ; quand il est en retard la semaine suivante, il dit que le bus etait en retard.'],
  ['Penny makes a good first impression and says the meeting proves she is a leader; when the next meeting is awkward, she says the group was unprepared.', 'Penny laisse une bonne premiere impression et dit que la reunion prouve qu elle est une leader ; quand la reunion suivante est genante, elle dit que le groupe etait mal prepare.'],
  ['Kira aces a language quiz and says she has a natural gift; when she misses the next quiz, she says the wording was tricky.', 'Kira reussit brillamment un quiz de langue et dit qu elle a un don naturel ; quand elle rate le quiz suivant, elle dit que la formulation etait piégeuse.'],
  ['Finn gets a positive client message and says he is clearly doing great work; when another client complains, he says they wanted free extras.', 'Finn reçoit un message positif d un client et dit qu il fait clairement un excellent travail ; quand un autre client se plaint, il dit qu ils voulaient des extras gratuits.'],
  ['Juno wins a board game and says her strategy is superior; when the next game goes badly, she says the dice were cursed.', 'Juno gagne un jeu de plateau et dit que sa strategie est superieure ; quand la partie suivante se passe mal, elle dit que les des etaient maudits.'],
  ['Olivia gets a smooth haircut result and says she has perfect taste; when the next trim is uneven, she says the salon rushed her.', 'Olivia obtient une coupe de cheveux reussie et dit qu elle a un gout parfait ; quand la coupe suivante est irreguliere, elle dit que le salon l a baclee.'],
  ['Mila runs a clean meeting and says it proves she is the most competent person there; when the next meeting derails, she says everyone else was chaotic.', 'Mila anime une reunion claire et dit que cela prouve qu elle est la personne la plus competente la-bas ; quand la reunion suivante deraille, elle dit que tout le monde etait chaotique.'],
  ['Leo gets a strong interview and says he nailed it because he prepared well; when another interview goes badly, he says the interviewer was cold.', 'Leo reussit un bon entretien et dit qu il a reussi parce qu il s etait bien prepare ; quand un autre entretien se passe mal, il dit que l intervieweur etait froid.'],
  ['Tara helps a friend move and says she is incredibly generous; when she skips the next move day, she says she was exhausted from everything else.', 'Tara aide un ami a demenager et dit qu elle est incroyablement genereuse ; quand elle saute le demenagement suivant, elle dit qu elle etait epuisee par tout le reste.'],
  ['Hugo gets a compliment on his design and says it proves he has great instincts; when the next design gets rejected, he says the brief was bad.', 'Hugo reçoit un compliment sur son design et dit que cela prouve qu il a un excellent instinct ; quand le design suivant est refuse, il dit que le cahier des charges etait mauvais.'],
  ['Lea makes a good sale and says her charm closed the deal; when the next customer walks away, she says they were only browsing.', 'Lea realise une bonne vente et dit que son charme a conclu l affaire ; quand le client suivant s en va, elle dit qu il regardait juste.'],
  ['Max gets a smooth airport check-in and says he is great at planning trips; when the next trip is chaotic, he says the airline changed the gate twice.', 'Max a un enregistrement aeroportuaire fluide et dit qu il est tres bon pour organiser les voyages ; quand le voyage suivant est chaotique, il dit que la compagnie a change la porte deux fois.'],
  ['Yara performs well on a group project and says it is because she carried everyone; when the next project struggles, she says the others did not pull their weight.', 'Yara reussit bien un projet de groupe et dit que c est parce qu elle a porte tout le monde ; quand le projet suivant a des problemes, elle dit que les autres n ont pas fait leur part.'],
  ['Dan gets a neat score on an exam and says he is simply smarter than the average student; when the next score is low, he says the questions were written badly.', 'Dan obtient une bonne note a un examen et dit qu il est simplement plus intelligent que l etudiant moyen ; quand la note suivante est basse, il dit que les questions etaient mal redigees.'],
  ['Rosa wins a photo contest and says she has artistic genius; when her next picture gets ignored, she says the lighting ruined it.', 'Rosa gagne un concours photo et dit qu elle a un genie artistique ; quand sa photo suivante est ignoree, elle dit que l eclairage l a gachee.'],
  ['Alicia lands a great babysitting review and says children just trust her naturally; when the next shift is hard, she says the kids were overtired.', 'Alicia reçoit un excellent avis de garde d enfants et dit que les enfants lui font naturellement confiance ; quand la garde suivante est difficile, elle dit que les enfants etaient trop fatigues.'],
  ['Owen gets one positive app rating and says his product is clearly superior; when the next rating is low, he says the reviewer did not understand the feature.', 'Owen reçoit une note positive pour son application et dit que son produit est clairement superieur ; quand la note suivante est basse, il dit que l evaluateur n avait pas compris la fonctionnalite.'],
  ['Maya opens a successful pop-up booth and says it was her great business sense; when the next booth barely sells, she says the location was terrible.', 'Maya ouvre un stand temporaire qui fonctionne bien et dit que c est grace a son excellent sens des affaires ; quand le stand suivant vend peu, elle dit que l emplacement etait terrible.'],
  ['Ben gives a helpful answer in class and says he is naturally better than the rest; when another answer is wrong, he says the question was too vague.', 'Ben donne une reponse utile en classe et dit qu il est naturellement meilleur que les autres ; quand une autre reponse est fausse, il dit que la question etait trop vague.'],
  ['Priya gets a positive message from her boss and says she is indispensable; when the next week is rough, she says the team kept changing priorities.', 'Priya reçoit un message positif de son chef et dit qu elle est indispensable ; quand la semaine suivante est difficile, elle dit que l equipe changeait sans cesse de priorites.'],
  ['Noah fixes his bike and says he is good with his hands; when the next repair fails, he says the replacement part was defective.', 'Noah reparre son velo et dit qu il est doue de ses mains ; quand la reparations suivante echoue, il dit que la piece de remplacement etait defectueuse.'],
  ['Lina gets a happy customer and says her service is excellent; when another customer complains, she says they expected too much for the price.', 'Lina a un client content et dit que son service est excellent ; quand un autre client se plaint, elle dit qu il en attendait trop pour le prix.'],
];

const OPTIONS_EN = ['Self-Serving Bias', 'Fundamental Attribution Error', 'Egocentric Bias', 'Confirmation Bias'];
const OPTIONS_FR = ['Biais d auto-complaisance', 'Erreur fondamentale d attribution', 'Biais egocentrique', 'Biais de confirmation'];

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
      id: 40701 + index,
      level: 5,
      persona_stage: PersonaStage.OCTOPUS,
      concept: isFrench ? "Biais d'auto-complaisance" : 'Self-Serving Bias',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais est illustré ici ?' : 'Which bias is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? "La personne attribue ses succes a ses qualites et ses echecs a des causes externes."
        : 'The person credits successes to personal qualities and blames failures on outside causes.',
      detailedExplanationBeginner: isFrench
        ? 'Reussite = moi. Echec = circonstances.'
        : 'Success gets credited to me; failure gets blamed on circumstances.',
      detailedExplanationIntermediate: isFrench
        ? "Le meme resultat est interprete de facon selective : les bons resultats prouvent son talent, les mauvais resultats viennent des autres ou du contexte."
        : 'The same person interprets outcomes selectively: good results prove talent, bad results are pushed onto other people or the context.',
      detailedExplanationExpert: isFrench
        ? "Le biais d auto-complaisance protege l estime de soi en separant l attribution interne des succes et l attribution externe des echecs. Il apparait souvent dans le sport, le travail, l ecole ou les projets personnels, surtout quand la personne veut garder une image positive d elle-meme sans avoir a faire face a ses propres limites."
        : 'Self-serving bias protects self-esteem by splitting attribution: internal causes for success, external causes for failure. It appears in sports, work, school, and personal projects when someone wants to preserve a positive self-image without confronting their own limits.',
      questionFormat: 'standard',
    };
  });
}

export const SELF_SERVING_BIAS_EXPANSION_EN: Question[] = createQuestions('en');
export const SELF_SERVING_BIAS_EXPANSION_FR: Question[] = createQuestions('fr');

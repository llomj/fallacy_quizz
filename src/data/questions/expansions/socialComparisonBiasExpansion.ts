import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['After seeing a coworker post a fancy office setup, Maya feels bad about her own perfectly good desk.', 'Apres avoir vu une collegue publier un bureau chic, Maya se sent mal au sujet de son propre bureau pourtant tout a fait correct.'],
  ['Ben compares his weekend hike to a friend’s mountain trip and decides his own trip was boring.', 'Ben compare sa randonnée du week-end au voyage en montagne d un ami et decide que sa propre sortie etait ennuyeuse.'],
  ['Priya sees a neighbor’s new car and suddenly thinks her car is embarrassing.', 'Priya voit la nouvelle voiture d un voisin et pense soudain que sa propre voiture est embarrassante.'],
  ['Noah reads about a classmate’s perfect test score and assumes his own good score is weak.', 'Noah lit le score parfait d un camarade et suppose que sa propre bonne note est faible.'],
  ['Lina notices everyone at the party talking about promotions and feels behind even though she likes her job.', 'Lina remarque que tout le monde à la fete parle de promotions et se sent en retard alors qu elle aime son travail.'],
  ['Theo sees a runner’s faster pace online and decides his own pace is a failure.', 'Theo voit en ligne le rythme plus rapide d un coureur et conclut que son propre rythme est un echec.'],
  ['Ava compares her lunch to a coworker’s trendy salad and suddenly thinks her sandwich is childish.', 'Ava compare son dejeuner à la salade à la mode d une collegue et pense soudain que son sandwich est enfantin.'],
  ['Omar hears that his cousin bought a house and feels like renting means he has fallen behind.', 'Omar apprend que son cousin a achete une maison et a l impression que louer veut dire qu il est en retard sur les autres.'],
  ['Rina sees friends posting vacation photos and forgets that her quiet staycation was exactly what she wanted.', 'Rina voit ses amis publier des photos de vacances et oublie que son sejour tranquille etait exactement ce qu elle voulait.'],
  ['Jules compares his average guitar progress to a friend who has played for ten years and thinks he is hopeless.', 'Jules compare ses progres moyens a un ami qui joue depuis dix ans et pense qu il est desespere.'],
  ['Mina sees a classmate’s polished presentation and assumes hers was bad because it looked simpler.', 'Mina voit la presentation soignee d une camarade et suppose que la sienne etait mauvaise parce qu elle semblait plus simple.'],
  ['Eli notices a sibling’s high gym streak and decides his own three workouts a week are not enough.', 'Eli remarque la longue serie d entrainements de son frere ou de sa soeur et decide que ses trois seances par semaine ne suffisent pas.'],
  ['Hugo sees a friend’s huge apartment and feels small about his own cozy place.', 'Hugo voit le grand appartement d un ami et se sent rabaissé au sujet de son propre logement pourtant chaleureux.'],
  ['Lea compares her hobby drawings to an artist with formal training and calls her work pointless.', 'Lea compare ses dessins de loisir à ceux d un artiste forme et qualifie son travail d inutile.'],
  ['Grant watches a colleague get praised in a meeting and assumes he must be underperforming.', 'Grant voit un collegue recevoir des eloges en reunion et suppose qu il doit sous-performer.'],
  ['Tia sees a parent group talking about perfect schedules and feels like her own family routine is a mess.', 'Tia voit un groupe de parents parler de plannings parfaits et a l impression que la routine de sa famille est un desastre.'],
  ['Nora reads about a friend’s morning workout and decides sleeping in makes her lazy.', 'Nora lit la routine matinale d une amie et decide que faire la grasse matinee la rend paresseuse.'],
  ['Sam compares his small birthday dinner to a huge celebration online and thinks his life is dull.', 'Sam compare son petit diner d anniversaire à une immense fete en ligne et pense que sa vie est fade.'],
  ['Jade sees people sharing travel highlights and concludes her local weekend was not worth anything.', 'Jade voit des gens partager leurs meilleurs moments de voyage et conclut que son week-end local ne valait rien.'],
  ['Owen hears a neighbor brag about perfect grades and starts calling his own solid grades average.', 'Owen entend un voisin se vanter de notes parfaites et commence à qualifier ses propres bonnes notes de moyennes.'],
  ['Ari compares his saved money to a friend’s stock gains and feels poor even though he is fine.', 'Ari compare son epargne aux gains boursiers d un ami et se sent pauvre alors qu il va bien.'],
  ['Pia sees a friend’s designer shoes and suddenly dislikes her own comfortable shoes.', 'Pia voit les chaussures de designer d une amie et se met soudain à detester ses propres chaussures confortables.'],
  ['Ben compares one clean kitchen photo online to his real dinner mess and feels like a failure.', 'Ben compare une photo de cuisine impeccable en ligne à son vrai bazar du diner et se sent nul.'],
  ['Zoe sees a classmate land an internship and decides her own part-time job is unimpressive.', 'Zoe voit une camarade obtenir un stage et decide que son propre travail à temps partiel est peu impressionnant.'],
  ['Ravi hears that a coworker wakes up at 5 a.m. and thinks his own 7 a.m. routine is lazy.', 'Ravi apprend qu un collegue se leve à 5 h et pense que sa propre routine à 7 h est paresseuse.'],
  ['Sofia compares her apartment to an influencer’s rented studio and feels like she has nothing.', 'Sofia compare son appartement à un studio loue par une influenceuse et a l impression de n avoir rien.'],
  ['Lara sees a friend’s wedding photos and starts judging her own quiet relationship as less meaningful.', 'Lara voit les photos de mariage d une amie et commence à juger sa propre relation tranquille comme moins importante.'],
  ['Cole compares his book notes to a friend’s fancy bullet journal and decides he is not organized enough.', 'Cole compare ses notes de lecture au carnet elegant d un ami et decide qu il n est pas assez organise.'],
  ['Maya sees a peer give a polished speech and assumes her nervous but useful talk was a disaster.', 'Maya voit une camarade faire un discours tres soigné et suppose que sa propre intervention nerveuse mais utile etait un desastre.'],
  ['Ezra hears about a cousin’s marathon and treats his 5K as if it counts for nothing.', 'Ezra entend parler du marathon d un cousin et traite son 5 km comme si cela ne valait rien.'],
  ['Nina compares her budget lunch to a work group’s expensive outing and feels cheap.', 'Nina compare son dejeuner budget au restaurant couteux d un groupe de travail et se sent radine.'],
  ['Hana sees a friend’s massive home project and decides her small weekend fix was useless.', 'Hana voit le gros projet maison d une amie et decide que sa petite reparation du week-end ne servait à rien.'],
  ['Dylan reads a post about someone learning a language faster and assumes his slower progress is embarrassing.', 'Dylan lit un message sur quelqu un qui apprend une langue plus vite et suppose que ses progres plus lents sont embarrassants.'],
  ['Penny sees a coworker’s promotion announcement and starts doubting her own career path.', 'Penny voit l annonce de promotion d une collegue et commence à douter de sa propre trajectoire professionnelle.'],
  ['Kira compares her quiet weekend to a packed social calendar online and feels like she is missing out.', 'Kira compare son week-end tranquille à un agenda social charge en ligne et a l impression de rater quelque chose.'],
  ['Finn sees a friend’s gym selfies and concludes his own effort does not count unless it is visible.', 'Finn voit les selfies de salle de sport d un ami et conclut que ses propres efforts ne comptent pas s ils ne sont pas visibles.'],
  ['Juno notices a neighbor’s perfect garden and decides her own plants are hopeless.', 'Juno remarque le jardin parfait d un voisin et decide que ses propres plantes sont sans espoir.'],
  ['Olivia hears that a classmate volunteers every weekend and starts feeling selfish for resting.', 'Olivia entend qu une camarade fait du benevolat tous les week-ends et commence à se sentir egoiste de se reposer.'],
  ['Mila compares her small art sale to an artist’s gallery show and says her effort is tiny.', 'Mila compare sa petite vente d art à l exposition en galerie d un artiste et dit que son effort est minuscule.'],
  ['Leo sees friends taking expensive trips and decides his local day trip does not matter.', 'Leo voit ses amis partir en voyages chers et decide que sa sortie locale ne compte pas.'],
  ['Tara compares her modest home-cooked meal to a restaurant photo and feels ashamed of dinner.', 'Tara compare son repas maison simple à une photo de restaurant et a honte du diner.'],
  ['Hugo sees a teammate’s highlight reel and assumes his own steady performance is worthless.', 'Hugo voit le montage des meilleurs moments d un coequipier et suppose que sa propre performance constante ne vaut rien.'],
  ['Lea reads about a friend’s perfect productivity system and feels bad about her own flexible routine.', 'Lea lit le systeme de productivite parfait d une amie et se sent mal à propos de sa propre routine souple.'],
  ['Max compares his normal salary to a viral salary screenshot and feels behind.', 'Max compare son salaire normal à une capture d ecran virale de salaire et se sent en retard.'],
  ['Yara sees a sibling’s milestone post and assumes her own quiet progress is not enough.', 'Yara voit la publication d etape importante de son frere ou sa soeur et suppose que ses propres progres discrets ne suffisent pas.'],
  ['Dan compares his messy desk to a coworker’s curated workspace and calls himself disorganized.', 'Dan compare son bureau en bazar à l espace de travail soigne d un collegue et se traite de desorganise.'],
  ['Rosa sees a friend’s polished family photo and feels like her own candid photo is inferior.', 'Rosa voit la photo de famille soignee d une amie et pense que sa propre photo spontanee est inferieure.'],
  ['Alicia compares her simple haircut to a salon transformation video and hates what she has.', 'Alicia compare sa coupe simple à une video de transformation de salon et deteste ce qu elle a.'],
  ['Owen hears classmates talk about perfect study routines and assumes his own routine is a joke.', 'Owen entend des camarades parler de routines d etude parfaites et suppose que la sienne est une blague.'],
  ['Maya sees a friend’s new kitchen and forgets that her own kitchen works just fine.', 'Maya voit la nouvelle cuisine d une amie et oublie que la sienne fonctionne tres bien.'],
  ['Ben sees a coworker post a gym selfie and decides his own invisible workouts do not matter.', 'Ben voit une collegue publier un selfie de salle de sport et decide que ses propres entrainements invisibles ne comptent pas.'],
  ['Priya compares her calm evening reading to a friend’s loud party and feels boring for staying home.', 'Priya compare sa soiree calme de lecture à la fete bruyante d une amie et se sent ennuyeuse parce qu elle reste chez elle.'],
  ['Omar reads about a sibling’s new job title and suddenly thinks his stable job is too small.', 'Omar lit le nouveau titre de poste de son frere ou de sa soeur et pense soudain que son emploi stable est trop modeste.'],
  ['Rina sees a classmate’s perfect notes and calls her own handwritten notes messy and useless.', 'Rina voit les notes parfaites d une camarade et qualifie ses propres notes manuscrites de sales et inutiles.'],
  ['Jules looks at a friend’s fancy coffee order and decides his plain coffee means he has no style.', 'Jules regarde la commande de cafe elegante d un ami et decide que son cafe simple veut dire qu il n a aucun style.'],
  ['Mina compares her short walk to work with a neighbor’s expensive commute and feels like she is missing something.', 'Mina compare sa courte marche pour aller au travail au trajet couteux d un voisin et a l impression de rater quelque chose.'],
  ['Eli sees a teammate’s new backpack and starts judging his own old backpack as embarrassing.', 'Eli voit le nouveau sac a dos d un coequipier et commence à juger son propre vieux sac a dos comme embarrassant.'],
  ['Hugo hears a friend talk about a flawless morning routine and decides his messy mornings are a personal failure.', 'Hugo entend un ami parler d une routine matinale parfaite et decide que ses matins desordonnes sont un echec personnel.'],
  ['Lea watches a beauty tutorial and thinks her normal face looks wrong by comparison.', 'Léa regarde un tutoriel de beaute et pense que son visage normal semble faux en comparaison.'],
  ['Grant sees a coworker’s packed social calendar and concludes his quiet weekends are lonely.', 'Grant voit l agenda social charge d un collegue et conclut que ses week-ends tranquilles sont solitaires.'],
  ['Tia compares her average piano practice to a prodigy video and thinks learning music is pointless.', 'Tia compare sa pratique moyenne du piano à une video de prodige et pense que l apprentissage de la musique ne sert a rien.'],
  ['Nora sees a friend’s perfect pantry and feels ashamed of her normal kitchen shelves.', 'Nora voit le garde-manger parfait d une amie et a honte de ses etageres de cuisine normales.'],
  ['Sam reads a post about someone paying off debt quickly and calls his careful progress pathetic.', 'Sam lit une publication sur quelqu un qui rembourse vite ses dettes et appelle son propre progres prudent pathetic.'],
  ['Jade sees a classmate’s polished speech video and ignores how hard her own live presentation was.', 'Jade voit la video de discours tres soignee d une camarade et oublie à quel point sa propre presentation en direct etait difficile.'],
  ['Owen compares his simple birthday cake to a bakery masterpiece online and says his celebration was nothing.', 'Owen compare son gateau d anniversaire simple à une oeuvre de boulangerie en ligne et dit que sa fete ne valait rien.'],
  ['Ari sees a friend’s fast promotion and concludes his own slower path is failure.', 'Ari voit la promotion rapide d un ami et conclut que sa propre progression plus lente est un echec.'],
  ['Pia looks at a neighbor’s perfect lawn and decides her wild garden makes her look bad.', 'Pia regarde la pelouse parfaite d un voisin et decide que son jardin sauvage la fait mal paraitre.'],
  ['Ben compares his small reading stack to a book influencer’s giant haul and feels stupid.', 'Ben compare sa petite pile de lecture au enorme butin d un influenceur livre et se sent stupide.'],
  ['Zoe hears a cousin brag about a big vacation and decides her weekend at home is worthless.', 'Zoé entend un cousin se vanter d un grand voyage et decide que son week-end a la maison ne vaut rien.'],
  ['Ravi sees a coworker’s polished spreadsheet and assumes his own plain spreadsheet is amateurish.', 'Ravi voit la feuille de calcul soignee d un collegue et suppose que sa propre feuille simple est amateur.'],
  ['Sofia compares her quiet birthday lunch to a viral party and calls her day sad.', 'Sofia compare son dejeuner d anniversaire tranquille à une fete virale et appelle sa journee triste.'],
  ['Lara sees a friend’s perfect skin routine and feels her own simple routine is inadequate.', 'Lara voit la routine peau parfaite d une amie et estime que sa propre routine simple est insuffisante.'],
  ['Cole watches a classmate’s polished project and forgets that his rough draft solved the same problem.', 'Cole regarde le projet tres propre d un camarade et oublie que son brouillon resolvait le meme probleme.'],
  ['Maya compares her small volunteer shift to someone’s full-time activism and feels useless.', 'Maya compare sa petite permanence de benevolat à l activisme a temps plein de quelqu un et se sent inutile.'],
  ['Ezra sees a friend’s bigger paycheck and thinks his own paycheck is proof he chose badly.', 'Ezra voit le salaire plus eleve d un ami et pense que son propre salaire prouve qu il a mal choisi.'],
  ['Nina looks at a sibling’s trophy shelf and decides her own hobbies do not count.', 'Nina regarde l etagere à trophees de son frere ou de sa soeur et decide que ses propres loisirs ne comptent pas.'],
  ['Hana sees a coworker’s conference badge and assumes her own local training is less serious.', 'Hana voit le badge de conference d une collegue et suppose que sa propre formation locale est moins serieuse.'],
  ['Dylan compares his homemade lunch to a catered meeting and calls his meal poor.', 'Dylan compare son dejeuner maison à un repas de reunion traiteur et appelle son repas pauvre.'],
  ['Penny sees a friend’s new phone and decides her working phone is outdated trash.', 'Penny voit le nouveau telephone d une amie et decide que son telephone qui marche est de la vieille ferraille.'],
  ['Kira compares her evening walk to an influencer’s luxury gym and feels lazy.', 'Kira compare sa promenade du soir au gym de luxe d une influenceuse et se sent paresseuse.'],
  ['Finn hears about a cousin’s business launch and decides his own steady job is boring.', 'Finn entend parler du lancement d entreprise d un cousin et decide que son emploi stable est ennuyeux.'],
  ['Juno sees a friend’s vacation photos and forgets that her staycation gave her actual rest.', 'Juno voit les photos de vacances d une amie et oublie que son sejour a la maison lui a vraiment permis de se reposer.'],
  ['Olivia compares her quiet study session to a classmate’s all-night grind and feels like a slacker.', 'Olivia compare sa session d etude calme à la nuit blanche d une camarade et se sent tiree au flanc.'],
  ['Mila looks at a neighbor’s renovated bathroom and decides her clean old bathroom is embarrassing.', 'Mila regarde la salle de bain renovee d un voisin et decide que sa vieille salle de bain propre est embarrassante.'],
  ['Leo sees a friend’s perfect hiking selfie and calls his own muddy hike a waste.', 'Leo voit le selfie de randonnee parfait d un ami et qualifie sa propre randonnee boueuse de perte de temps.'],
  ['Tara compares her simple family dinner to a restaurant influencer video and feels underclassed.', 'Tara compare son diner de famille simple à une video de restaurant influenceur et se sent inferieure.'],
  ['Hugo sees a classmate’s award and decides his own progress is not worth celebrating.', 'Hugo voit le prix d un camarade et decide que ses propres progres ne meritent pas d etre celebres.'],
  ['Lea hears a friend talk about daily journaling and thinks her occasional notes are childish.', 'Léa entend une amie parler de journal quotidien et pense que ses notes occasionnelles sont enfantines.'],
  ['Max compares his regular car to a luxury SUV and feels ashamed to drive it.', 'Max compare sa voiture ordinaire à un SUV de luxe et a honte de la conduire.'],
  ['Yara sees a sibling’s perfect home office and forgets that her tiny desk still works.', 'Yara voit le bureau a domicile parfait de son frere ou de sa soeur et oublie que son petit bureau fonctionne toujours.'],
  ['Dan compares his basic haircut to a barber transformation video and thinks he looks bad.', 'Dan compare sa coupe simple à une video de transformation chez le coiffeur et pense qu il a mauvaise allure.'],
  ['Rosa reads about someone who finished a marathon and decides her 10K run is not impressive.', 'Rosa lit le recit de quelqu un qui a termine un marathon et decide que son 10 km n est pas impressionnant.'],
  ['Alicia sees a friend’s vacation rental and stops appreciating her own affordable place.', 'Alicia voit la location de vacances d une amie et cesse d apprecier son propre logement abordable.'],
  ['Owen hears classmates compare internships and begins treating his local experience as worthless.', 'Owen entend des camarades comparer leurs stages et commence à traiter son experience locale comme sans valeur.'],
  ['Maya watches a friend’s expensive skincare haul and thinks her cheap soap is embarrassing.', 'Maya regarde le gros achat de soins de peau d une amie et pense que son savon bon marche est embarrassant.'],
  ['Ben sees a coworker’s art-filled apartment tour and decides his plain room means he has no taste.', 'Ben voit la visite d appartement remplie d art d un collegue et decide que sa chambre simple veut dire qu il n a aucun gout.'],
  ['Priya compares her steady progress in French to a friend’s fluent speech and calls herself hopeless.', 'Priya compare ses progres reguliers en francais au francais courant d une amie et se traite d esperance perdue.'],
  ['Omar sees a neighbor’s brand-new grill and forgets that his old one still cooks dinner just fine.', 'Omar voit le nouveau barbecue d un voisin et oublie que son ancien barbecue cuisine encore tres bien.'],
  ['Rina reads about a classmate’s scholarship and decides her own hard work has not achieved anything.', 'Rina lit la bourse d une camarade et decide que son propre travail n a rien accompli.'],
  ['Maya watches a friend’s perfect home gym online and decides her own small workout space is pathetic.', 'Maya regarde la salle de sport maison parfaite d une amie en ligne et decide que son propre petit espace d entrainement est pathétique.'],
];

const OPTIONS_EN = ['Social Comparison Bias', 'Egocentric Bias', 'Halo Effect', 'Self-Serving Bias'];
const OPTIONS_FR = ['Biais de comparaison sociale', 'Biais égocentrique', 'Effet de halo', 'Biais d auto-complaisance'];

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
      id: 40901 + index,
      level: 5,
      persona_stage: PersonaStage.OCTOPUS,
      concept: isFrench ? 'Biais de comparaison sociale' : 'Social Comparison Bias',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais est illustré ici ?' : 'Which bias is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'La personne evalue sa valeur en se comparant aux autres au lieu de regarder la situation pour elle-meme.'
        : 'The person judges their worth by comparing themselves to others instead of evaluating the situation on its own.',
      detailedExplanationBeginner: isFrench
        ? 'La comparaison avec les autres deforme la perception.'
        : 'Comparing yourself to others distorts perception.',
      detailedExplanationIntermediate: isFrench
        ? "Le biais de comparaison sociale pousse quelqu'un à se mesurer à des repères externes, souvent en ne voyant que les meilleurs moments des autres."
        : 'Social comparison bias pushes someone to measure themselves against external reference points, often by seeing only the other person’s highlight reel.',
      detailedExplanationExpert: isFrench
        ? "Ce biais se produit quand l evaluation d un resultat personnel depend trop d une comparaison relative, par exemple avec des photos soignees, des jalons publies ou des performances visibles, au lieu d une mesure plus objective de ses propres contraintes et progres."
        : 'This bias happens when the evaluation of a personal outcome depends too much on a relative comparison, such as polished photos, posted milestones, or visible performance, instead of a more objective view of one’s own constraints and progress.',
      questionFormat: 'standard',
    };
  });
}

export const SOCIAL_COMPARISON_BIAS_EXPANSION_EN: Question[] = createQuestions('en');
export const SOCIAL_COMPARISON_BIAS_EXPANSION_FR: Question[] = createQuestions('fr');

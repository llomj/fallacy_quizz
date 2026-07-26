import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya assumes every teenager at the cafe will be glued to a phone, even the one reading a novel.', 'Maya suppose que chaque adolescent au cafe sera colle a son telephone, meme celui qui lit un roman.'],
  ['Ben thinks every accountant is boring, even though his neighbor spends weekends building model ships.', 'Ben pense que tous les comptables sont ennuyeux, meme si son voisin passe ses week-ends a construire des maquettes de bateaux.'],
  ['Priya says all athletes are competitive with no exceptions, even the yoga teacher who hates games.', 'Priya dit que tous les sportifs sont competitifs sans exception, meme le professeur de yoga qui deteste les jeux.'],
  ['Noah assumes every grandparent dislikes new apps, even the one sending voice notes all day.', 'Noah suppose que tous les grands-parents detest les nouvelles applis, meme celui qui envoie des messages vocaux toute la journee.'],
  ['Lina says every barista must be artistic, even if the one at the corner cafe just likes steady hours.', 'Lina dit que chaque barista doit etre artistique, meme si celui du cafe du coin aime simplement les horaires stables.'],
  ['Theo thinks every gamer is bad at sports, even the one who coaches little league.', 'Theo pense que tous les joueurs de jeux video sont nuls en sport, meme celui qui entraine une equipe de jeunes.'],
  ['Ava says all librarians are quiet and serious, even the one who laughs at meme jokes.', 'Ava dit que tous les bibliothecaires sont calmes et serieux, meme celui qui rit aux blagues internet.'],
  ['Omar assumes every politician speaks in slogans, even the local council member who writes long emails.', 'Omar suppose que chaque politicien parle en slogans, meme le conseiller municipal qui ecrit de longs courriels.'],
  ['Rina thinks every chef loves spicy food, even the pastry chef who never eats chili.', 'Rina pense que tous les chefs aiment la nourriture epicee, meme la patissiere qui ne mange jamais de piment.'],
  ['Jules says all teachers enjoy grading, even the one who dreads Friday nights of papers.', 'Jules dit que tous les professeurs aiment corriger, meme celui qui redoute les soirs de vendredi passes a noter.'],
  ['Mina assumes every introvert hates parties, even the one who loves board game nights.', 'Mina suppose que chaque introverti deteste les fetes, meme celui qui adore les soirees jeux de societe.'],
  ['Eli thinks all students from the same school dress the same, even the one in neon socks and a tie dye hoodie.', 'Eli pense que tous les eleves de la meme ecole s habillent pareil, meme celui qui porte des chaussettes fluo et un sweat tie dye.'],
  ['Hugo says every cyclist must be obsessed with lycra, even the commuter in jeans and a backpack.', 'Hugo dit que chaque cycliste doit etre obsede par le lycra, meme le trajet de banlieue en jean et sac a dos.'],
  ['Lea assumes every nurse is naturally patient, even the one who is late because the bus broke down.', 'Lea suppose que chaque infirmiere est naturellement patiente, meme celle qui est en retard parce que le bus est tombe en panne.'],
  ['Grant thinks every designer is trendy, even the one who wears the same old boots every day.', 'Grant pense que chaque designer est tendance, meme celui qui porte les memes vieilles bottes tous les jours.'],
  ['Tia says all dads love grilling, even the one who burns toast and fears smoke alarms.', 'Tia dit que tous les papas adorent faire des grillades, meme celui qui brule des toasts et craint les detecteurs de fumee.'],
  ['Nora assumes every teenager is reckless, even the careful one checking both sides before crossing.', 'Nora suppose que chaque adolescent est temeraire, meme celui qui verifie des deux cotes avant de traverser.'],
  ['Sam thinks every gamer lives on energy drinks, even the one who only drinks water.', 'Sam pense que chaque joueur vit de boissons energisantes, meme celui qui ne boit que de l eau.'],
  ['Jade says all nurses must be female, even the male nurse who has worked the night shift for years.', 'Jade dit que tous les infirmiers doivent etre des femmes, meme l infirmier qui travaille de nuit depuis des annees.'],
  ['Owen assumes every lawyer argues about everything, even the one who just wants a peaceful lunch.', 'Owen suppose que chaque avocat se dispute sur tout, meme celui qui veut juste un dejeuner tranquille.'],
  ['Ari thinks every artist is messy, even the sculptor who labels every drawer.', 'Ari pense que chaque artiste est desordonne, meme le sculpteur qui etiquete chaque tiroir.'],
  ['Pia says all salespeople are pushy, even the clerk who simply points to the price tag.', 'Pia dit que tous les vendeurs sont insistants, meme la vendeuse qui se contente de montrer l etiquette du prix.'],
  ['Ben assumes every mechanic loves loud music, even the one who wears earplugs at work.', 'Ben suppose que chaque mecanicien aime la musique forte, meme celui qui porte des bouchons d oreille au travail.'],
  ['Zoe thinks every math person is socially awkward, even the tutor who hosts game nights.', 'Zoe pense que toute personne forte en maths est maladroite socialement, meme la tutrice qui organise des soirees jeux.'],
  ['Ravi says every cat owner is picky, even the one who feeds the neighborhood strays.', 'Ravi dit que chaque proprietaire de chat est difficile, meme celui qui nourrit les chats errants du quartier.'],
  ['Sofia assumes every vegan lectures people, even her friend who quietly brings hummus to picnics.', 'Sofia suppose que chaque vegan fait la morale, meme son amie qui apporte simplement du houmous aux pique-niques.'],
  ['Lara thinks every dog owner wakes up early, even the one who sleeps in on Sundays.', 'Lara pense que chaque proprietaire de chien se leve tot, meme celui qui fait la grasse matinee le dimanche.'],
  ['Cole says all athletes are tall, even the short basketball point guard on the local team.', 'Cole dit que tous les sportifs sont grands, meme le petit meneur de l equipe locale de basket.'],
  ['Maya assumes every person with glasses is smart, even the one who keeps asking for help at the printer.', 'Maya suppose que toute personne avec des lunettes est intelligente, meme celle qui demande sans cesse de l aide a l imprimante.'],
  ['Ezra thinks every teenager is glued to social media, even the one who spends lunch sketching cartoons.', 'Ezra pense que chaque adolescent est colle aux reseaux sociaux, meme celui qui passe le dejeuner a dessiner des dessins animes.'],
  ['Nina says every chef is dramatic, even the calm cook who just wants the soup to simmer.', 'Nina dit que chaque chef est dramatique, meme le cuisinier calme qui veut juste laisser mijoter la soupe.'],
  ['Hana assumes every traveler loves airports, even the one counting the minutes to get home.', 'Hana suppose que chaque voyageur adore les aeroports, meme celui qui compte les minutes avant de rentrer chez lui.'],
  ['Dylan thinks every teenager is messy, even the kid who color codes homework folders.', 'Dylan pense que chaque adolescent est en bazar, meme celui qui classe ses dossiers de devoirs par couleur.'],
  ['Penny says every professor is absent-minded, even the one who remembers every student name.', 'Penny dit que chaque professeur est tete en l air, meme celui qui se souvient du nom de chaque eleve.'],
  ['Kira assumes every shop owner is rude, even the florist who adds extra ribbon for free.', 'Kira suppose que chaque commercant est desagreable, meme la fleuriste qui ajoute un ruban supplementaire gratuitement.'],
  ['Finn thinks every teenager hates reading, even the one finished three books this week.', 'Finn pense que chaque adolescent deteste lire, meme celui qui a termine trois livres cette semaine.'],
  ['Juno says every banker is cold, even the one who remembers his clients birthdays.', 'Juno dit que chaque banquier est froid, meme celui qui se souvient des anniversaires de ses clients.'],
  ['Olivia assumes every mechanic is greasy and loud, even the one who works in a spotless shop.', 'Olivia suppose que chaque mecanicien est graisseux et bruyant, meme celui qui travaille dans un atelier impeccable.'],
  ['Mila thinks every teenager is lazy, even the one who wakes up early to coach soccer.', 'Mila pense que chaque adolescent est paresseux, meme celui qui se leve tot pour entrainer le foot.'],
  ['Leo says every lawyer is sneaky, even the public defender who spends evenings helping at a shelter.', 'Leo dit que chaque avocat est louche, meme l avocat commis d office qui passe ses soirees a aider dans un refuge.'],
  ['Tara assumes every influencer is fake, even the one who posts honest behind-the-scenes clips.', 'Tara suppose que chaque influenceur est faux, meme celui qui publie des extraits honnetes des coulisses.'],
  ['Hugo thinks every student from a private school is snobby, even the one who rides the bus and shares snacks.', 'Hugo pense que chaque eleve d ecole privee est pretentieux, meme celui qui prend le bus et partage des collations.'],
  ['Lea says every gamer is addicted to screens, even the one who only plays once a month.', 'Lea dit que chaque joueur est accro aux ecrans, meme celui qui ne joue qu une fois par mois.'],
  ['Max assumes every landlord is greedy, even the one who fixes leaks the same day.', 'Max suppose que chaque proprietaire est avare, meme celui qui repare les fuites le jour meme.'],
  ['Yara thinks every teenager is dramatic, even the one who quietly takes notes in class.', 'Yara pense que chaque adolescent est dramatique, meme celui qui prend des notes en silence en classe.'],
  ['Dan says every pilot is confident, even the nervous one double-checking the checklist.', 'Dan dit que chaque pilote est sur de lui, meme celui qui verifie nerveusement la liste de controle.'],
  ['Rosa assumes every singer loves attention, even the shy one who sings only in choirs.', 'Rosa suppose que chaque chanteur aime l attention, meme le timide qui ne chante que dans les chorales.'],
  ['Alicia thinks every programmer is nocturnal, even the one who leaves the office at five.', 'Alicia pense que chaque programmeur vit la nuit, meme celui qui quitte le bureau a cinq heures.'],
  ['Owen says every teenager hates authority, even the one who volunteers for student council.', 'Owen dit que chaque adolescent deteste l autorite, meme celui qui se presente au conseil des eleves.'],
  ['Maya assumes every chef swears constantly, even the calm baker who whispers at the oven.', 'Maya suppose que chaque chef jure sans arret, meme le boulanger calme qui murmure devant son four.'],
  ['Maya thinks every mechanic is dirty, even the one who keeps a spotless workbench.', 'Maya pense que chaque mecanicien est sale, meme celui qui garde un etabli impeccable.'],
  ['Ben assumes every teacher loves homework, even the substitute who apologizes for assigning any.', 'Ben suppose que chaque professeur adore les devoirs, meme le remplaçant qui s excuse d en donner.'],
  ['Priya says every nurse is strict, even the one who brings extra blankets and jokes with patients.', 'Priya dit que chaque infirmiere est stricte, meme celle qui apporte des couvertures supplementaires et plaisante avec les patients.'],
  ['Noah thinks every teenager is rude, even the quiet kid who always holds the door open.', 'Noah pense que chaque adolescent est impoli, meme le jeune calme qui tient toujours la porte ouverte.'],
  ['Lina says every accountant hates fun, even the one who plans office trivia nights.', 'Lina dit que chaque comptable deteste s amuser, meme celui qui organise des soirees quiz au bureau.'],
  ['Theo assumes every gamer is unfriendly, even the streamer who thanks every viewer by name.', 'Theo suppose que chaque joueur est peu aimable, meme le streamer qui remercie chaque spectateur par son nom.'],
  ['Ava thinks every librarian is stern, even the one who decorates the desk with stickers.', 'Ava pense que chaque bibliothecaire est severe, meme celle qui decore son bureau avec des autocollants.'],
  ['Omar says every politician is fake, even the council member who answers neighborhood emails late at night.', 'Omar dit que chaque politicien est faux, meme le conseiller qui repond aux courriels du quartier tard le soir.'],
  ['Rina assumes every chef is loud, even the one who quietly tastes soup and nods.', 'Rina suppose que chaque chef est bruyant, meme celui qui goute la soupe en silence et hoche la tete.'],
  ['Jules thinks every student athlete is careless, even the one who color codes every assignment.', 'Jules pense que chaque eleve sportif est negligeant, meme celui qui code toutes ses taches par couleur.'],
  ['Mina says every grandparent dislikes technology, even the one who runs a family group chat.', 'Mina dit que chaque grand-parent deteste la technologie, meme celui qui anime un groupe familial de discussion.'],
  ['Eli assumes every barber is talkative, even the one who works quietly with headphones on.', 'Eli suppose que chaque coiffeur parle beaucoup, meme celui qui travaille en silence avec un casque.'],
  ['Hugo thinks every cyclist is impatient, even the commuter who always stops to help pedestrians.', 'Hugo pense que chaque cycliste est impatient, meme le navetteur qui s arrete toujours pour aider les pietons.'],
  ['Lea says every dentist is scary, even the one who explains each tool patiently.', 'Lea dit que chaque dentiste fait peur, meme celui qui explique chaque outil avec patience.'],
  ['Grant assumes every designer is fashionable, even the one who wears the same plain hoodie daily.', 'Grant suppose que chaque designer est à la mode, meme celui qui porte tous les jours le meme sweat simple.'],
  ['Tia thinks every dad loves bad jokes, even the one who is completely serious at family dinners.', 'Tia pense que chaque papa adore les mauvaises blagues, meme celui qui reste totalement serieux aux repas de famille.'],
  ['Nora says every teenager is glued to TikTok, even the one who spends breaks organizing the class shelf.', 'Nora dit que chaque adolescent est colle à TikTok, meme celui qui passe ses pauses à ranger l etagere de classe.'],
  ['Sam assumes every mechanic swears at everything, even the calm technician who thanks customers politely.', 'Sam suppose que chaque mecanicien jure contre tout, meme le technicien calme qui remercie poliment les clients.'],
  ['Jade thinks every artist is disorganized, even the painter who labels every tube of paint.', 'Jade pense que chaque artiste est desorganise, meme le peintre qui etiquete chaque tube de peinture.'],
  ['Owen says every lawyer is manipulative, even the public defender who spends weekends helping tenants.', 'Owen dit que chaque avocat est manipulateur, meme l avocat commis d office qui aide les locataires le week-end.'],
  ['Ari assumes every cat owner is fussy, even the neighbor who shares food with stray cats.', 'Ari suppose que chaque proprietaire de chat est pointilleux, meme le voisin qui partage sa nourriture avec les chats errants.'],
  ['Pia thinks every nurse is a woman, even the male nurse who trained the new staff.', 'Pia pense que chaque infirmiere est une femme, meme l infirmier qui a forme le nouveau personnel.'],
  ['Ben says every introvert hates parties, even the quiet friend who hosts game nights.', 'Ben dit que chaque introverti deteste les fetes, meme l ami calme qui organise des soirées jeux.'],
  ['Zoe assumes every teacher enjoys grading, even the one who batches it all on Sunday evening.', 'Zoé suppose que chaque professeur aime corriger, meme celui qui regroupe tout le travail le dimanche soir.'],
  ['Ravi thinks every pilot is fearless, even the one who triple-checks every list before takeoff.', 'Ravi pense que chaque pilote est sans peur, meme celui qui verifie trois fois chaque liste avant le decollage.'],
  ['Sofia says every banker is cold, even the teller who remembers customers by their pets.', 'Sofia dit que chaque banquier est froid, meme la guichetiere qui se souvient des animaux de compagnie des clients.'],
  ['Lara assumes every chef likes spicy food, even the pastry chef who avoids pepper entirely.', 'Lara suppose que chaque chef aime la nourriture epicee, meme la patissiere qui evite completement le poivre.'],
  ['Cole thinks every teenager is messy, even the one who keeps a perfect planner and tidy desk.', 'Cole pense que chaque adolescent est en bazar, meme celui qui garde un agenda parfait et un bureau range.'],
  ['Maya says every influencer is shallow, even the creator who posts careful tutorials for free.', 'Maya dit que chaque influenceur est superficiel, meme le createur qui publie gratuitement des tutoriels soigneux.'],
  ['Ezra assumes every gamer is bad at sports, even the coach who plays video games on weekends.', 'Ezra suppose que chaque joueur est nul en sport, meme l entraineur qui joue aux jeux video le week-end.'],
  ['Nina thinks every accountant is dull, even the one who organizes the funniest office lunch quiz.', 'Nina pense que chaque comptable est ennuyeux, meme celui qui organise le quiz de dejeuner le plus amusant du bureau.'],
  ['Hana says every traveler loves airports, even the one counting the minutes until boarding ends.', 'Hana dit que chaque voyageur adore les aeroports, meme celui qui compte les minutes avant la fin de l embarquement.'],
  ['Dylan assumes every salesperson is pushy, even the clerk who only points to the shelf and smiles.', 'Dylan suppose que chaque vendeur est insistant, meme la vendeuse qui se contente de montrer l etagere et de sourire.'],
  ['Penny thinks every student hates reading, even the one who finishes a novel every week.', 'Penny pense que chaque eleve deteste lire, meme celui qui termine un roman chaque semaine.'],
  ['Kira says every landlord is greedy, even the one who fixes problems the same afternoon.', 'Kira dit que chaque proprietaire est avare, meme celui qui regle les problemes le jour meme.'],
  ['Finn assumes every musician is dramatic, even the drummer who just wants to leave early.', 'Finn suppose que chaque musicien est dramatique, meme le batteur qui veut juste partir tot.'],
  ['Juno thinks every mechanic is loud, even the one who works quietly and wears earplugs.', 'Juno pense que chaque mecanicien est bruyant, meme celui qui travaille en silence et porte des bouchons d oreille.'],
  ['Olivia says every programmer works at night, even the one who leaves the office before dinner.', 'Olivia dit que chaque programmeur travaille la nuit, meme celui qui quitte le bureau avant le dîner.'],
  ['Mila assumes every dog owner is outgoing, even the shy neighbor who walks the dog in silence.', 'Mila suppose que chaque proprietaire de chien est extraverti, meme le voisin timide qui promene le chien en silence.'],
  ['Leo thinks every vegan lectures people, even the friend who just brings tofu to barbecues.', 'Leo pense que chaque vegan fait la morale, meme l ami qui apporte simplement du tofu aux barbecues.'],
  ['Tara says every professor is absent-minded, even the one who remembers every assignment detail.', 'Tara dit que chaque professeur est tete en l air, meme celui qui se souvient de chaque detail du devoir.'],
  ['Hugo assumes every shop owner is rude, even the florist who wraps the flowers extra carefully.', 'Hugo suppose que chaque commercant est desagreable, meme la fleuriste qui emballe les fleurs avec soin.'],
  ['Lea thinks every teen hates authority, even the class rep who volunteers to organize rules.', 'Lea pense que chaque ado deteste l autorite, meme le delegue de classe qui se porte volontaire pour organiser les regles.'],
  ['Max says every singer loves attention, even the shy choir member who hides in the back row.', 'Max dit que chaque chanteur aime l attention, meme le membre timide de la chorale qui se cache au fond.'],
  ['Yara assumes every lawyer is sneaky, even the public defender who gives free advice at a shelter.', 'Yara suppose que chaque avocat est louche, meme l avocat commis d office qui donne des conseils gratuits dans un refuge.'],
  ['Dan thinks every chef is loud, even the baker who speaks softly and keeps to herself.', 'Dan pense que chaque chef est bruyant, meme la boulangere qui parle doucement et reste discrete.'],
  ['Rosa says every athlete is obsessed with protein, even the runner who just wants a normal lunch.', 'Rosa dit que chaque sportif est obsede par les proteines, meme le coureur qui veut juste un dejeuner normal.'],
  ['Alicia assumes every grandparent hates change, even the one who keeps trying new phone apps.', 'Alicia suppose que chaque grand-parent deteste le changement, meme celui qui essaie sans cesse de nouvelles applications telephoniques.'],
  ['Owen thinks every student from that school is rich, even the one who works weekends to pay fees.', 'Owen pense que chaque eleve de cette ecole est riche, meme celui qui travaille le week-end pour payer les frais.'],
];

const OPTIONS_EN = ['Stereotyping', 'Confirmation Bias', 'Hasty Generalization', 'Halo Effect'];
const OPTIONS_FR = ['Stéréotypage', 'Biais de confirmation', 'Généralisation hâtive', 'Effet de halo'];

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
      id: 41501 + index,
      level: 5,
      persona_stage: PersonaStage.OCTOPUS,
      concept: isFrench ? 'Stéréotypage' : 'Stereotyping',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais est illustré ici ?' : 'Which bias is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'On attribue a tort une caracteristique a toute une categorie a partir d une idee toute faite.'
        : 'A fixed idea about a group is wrongly applied to every member of that group.',
      detailedExplanationBeginner: isFrench
        ? 'On suppose que tout le monde dans un groupe se ressemble.'
        : 'You assume everyone in a group is the same.',
      detailedExplanationIntermediate: isFrench
        ? 'Le stereotyping transforme une impression rapide en regle generale et oublie les differences individuelles.'
        : 'Stereotyping turns a quick impression into a general rule and ignores individual differences.',
      detailedExplanationExpert: isFrench
        ? "Ce biais simplifie trop la realite sociale. Il peut partir d un detail vrai ou d une experience limitée, puis l etendre a tout un groupe sans verifier les contre-exemples, ce qui conduit a des jugements rigides et souvent injustes."
        : 'This bias oversimplifies social reality. It can start from a true detail or a limited experience, then extend it to an entire group without checking counterexamples, which leads to rigid and often unfair judgments.',
      questionFormat: 'standard',
    };
  });
}

export const STEREOTYPING_EXPANSION_EN: Question[] = createQuestions('en');
export const STEREOTYPING_EXPANSION_FR: Question[] = createQuestions('fr');

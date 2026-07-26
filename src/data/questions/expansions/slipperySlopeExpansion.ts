import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['If Maya lets her kids stay up ten minutes later, they will never sleep on time again.', 'Si Maya laisse ses enfants se coucher dix minutes plus tard, ils ne se coucheront plus jamais a l heure.'],
  ['Ben says that if the office allows one work-from-home day, nobody will ever come in again.', 'Ben dit que si le bureau autorise un jour de teletravail, plus personne ne viendra jamais au bureau.'],
  ['Priya thinks that if she skips one workout, she will lose all her progress and give up completely.', 'Priya pense que si elle saute un seul entrainement, elle perdra tous ses progres et abandonnera completement.'],
  ['Noah says that if the school changes one rule, the whole system will collapse.', 'Noah dit que si l ecole change une seule regle, tout le systeme s effondrera.'],
  ['Lina believes that if she buys one expensive coffee, she will end up spending her whole paycheck on treats.', 'Lina croit que si elle achete un seul cafe cher, elle finira par depenser tout son salaire en petites gourmandises.'],
  ['Theo says that if the city adds one bike lane, all the streets will become clogged with traffic.', 'Theo dit que si la ville ajoute une seule piste cyclable, toutes les rues seront bloquees par la circulation.'],
  ['Ava says that if she lets her friend borrow a charger once, the friend will keep asking for everything forever.', 'Ava dit que si elle prete un chargeur une seule fois a son amie, son amie lui demandera tout pour toujours.'],
  ['Omar says that if the store lowers the price on one item, it will have to slash every price in the building.', 'Omar dit que si le magasin baisse le prix d un seul article, il devra brader tous les prix du magasin.'],
  ['Rina says that if the team accepts one late file, nobody will ever meet a deadline again.', 'Rina dit que si l equipe accepte un seul fichier en retard, plus personne ne respectera jamais les dates limites.'],
  ['Jules says that if the teacher gives one makeup quiz, students will stop studying altogether.', 'Jules dit que si le professeur donne un seul quiz de rattrapage, les eleves arreteront completement d etudier.'],
  ['Mina says that if she eats dessert after lunch today, she will start overeating at every meal.', 'Mina dit que si elle mange un dessert apres le dejeuner aujourd hui, elle se mettra a trop manger a chaque repas.'],
  ['Eli says that if the app adds one notification, it will become impossible to use.', 'Eli dit que si l application ajoute une seule notification, elle deviendra impossible a utiliser.'],
  ['Hugo says that if the family lets the dog on the couch once, the couch will belong to the dog forever.', 'Hugo dit que si la famille laisse le chien monter sur le canape une fois, le canape appartiendra au chien pour toujours.'],
  ['Lea says that if the club changes the meeting time once, every future meeting will be a mess.', 'Lea dit que si le club change l heure de la reunion une fois, toutes les reunions futures seront desordonnees.'],
  ['Grant says that if he accepts one small favor, he will become the office errand runner.', 'Grant dit que s il accepte une petite faveur, il deviendra le coursier du bureau.'],
  ['Tia says that if the restaurant gives one free refill, customers will expect free meals next.', 'Tia dit que si le restaurant offre un seul refill gratuit, les clients s attendront bientot a des repas gratuits.'],
  ['Nora says that if the committee relaxes one dress code rule, nobody will dress professionally again.', 'Nora dit que si le comite assouplit une seule regle de tenue, plus personne ne s habillera jamais de facon professionnelle.'],
  ['Sam says that if he starts checking social media during lunch, he will waste the entire afternoon.', 'Sam dit que s il commence a regarder les reseaux sociaux pendant le dejeuner, il gaspillera tout l apres-midi.'],
  ['Jade says that if the coach changes one drill, the players will become lazy.', 'Jade dit que si l entraineur change un seul exercice, les joueurs deviendront paresseux.'],
  ['Owen says that if the town allows one food truck, the whole park will turn into a carnival.', 'Owen dit que si la ville autorise un seul food truck, tout le parc se transformera en fete foraine.'],
  ['Ari says that if the website adds one pop-up, users will abandon it forever.', 'Ari dit que si le site ajoute une seule fenetre surgissante, les utilisateurs l abandonneront pour toujours.'],
  ['Pia says that if she lets herself sleep in once, her whole week will go off the rails.', 'Pia dit que si elle se laisse dormir tard une seule fois, toute sa semaine deraillera.'],
  ['Ben says that if the neighbor complains once, the whole street will turn into a lawsuit.', 'Ben dit que si le voisin se plaint une fois, toute la rue finira en proces.'],
  ['Zoe says that if the school gives one extra reading assignment, students will never have free time again.', 'Zoe dit que si l ecole ajoute un seul devoir de lecture, les eleves n auront plus jamais de temps libre.'],
  ['Ravi says that if the company changes one logo color, the brand will lose all meaning.', 'Ravi dit que si l entreprise change une seule couleur du logo, la marque perdra tout son sens.'],
  ['Sofia says that if she lets one text sit unanswered, all her friendships will fade.', 'Sofia dit que si elle laisse un seul message sans reponse, toutes ses amities vont disparaitre.'],
  ['Lara says that if the cafe starts using paper straws, it will soon ban every normal cup.', 'Lara dit que si le cafe commence a utiliser des pailles en papier, il interdira bientot toutes les tasses normales.'],
  ['Cole says that if the team skips one meeting, projects will never get finished again.', 'Cole dit que si l equipe saute une seule reunion, les projets ne seront plus jamais termines.'],
  ['Maya says that if the class uses calculators on one test, nobody will learn math anymore.', 'Maya dit que si la classe utilise des calculatrices pour un seul test, plus personne n apprendra les maths.'],
  ['Ezra says that if the city adds one bench, people will start living in the park.', 'Ezra dit que si la ville ajoute un seul banc, les gens vont commencer a vivre dans le parc.'],
  ['Nina says that if the bakery makes one sweet pastry, it will become a dessert-only shop.', 'Nina dit que si la boulangerie prepare une seule patisserie sucree, elle deviendra une boutique de desserts uniquement.'],
  ['Hana says that if she buys one planner, she will become obsessed with organizing every hour.', 'Hana dit que si elle achete un seul agenda, elle deviendra obsedee par l organisation de chaque heure.'],
  ['Dylan says that if the neighborhood gets one camera, privacy will be gone forever.', 'Dylan dit que si le quartier installe une seule camera, la vie privee disparaitra pour toujours.'],
  ['Penny says that if the school allows one phone break, class discipline will disappear.', 'Penny dit que si l ecole autorise une seule pause telephone, la discipline en classe disparaitra.'],
  ['Kira says that if the gym adds one mirror, everyone will become vain and distracted.', 'Kira dit que si la salle de sport ajoute un seul miroir, tout le monde deviendra vaniteux et distrait.'],
  ['Finn says that if the city closes one lane for repairs, traffic will never recover.', 'Finn dit que si la ville ferme une seule voie pour des reparations, la circulation ne se remettra jamais.'],
  ['Juno says that if the podcast uses one dramatic intro, it will turn into clickbait forever.', 'Juno dit que si le podcast utilise une seule introduction dramatique, il deviendra du clickbait pour toujours.'],
  ['Olivia says that if the family buys one game console, nobody will talk at dinner anymore.', 'Olivia dit que si la famille achete une seule console de jeux, plus personne ne parlera au diner.'],
  ['Mila says that if the teacher gives one extension, deadlines will stop mattering.', 'Mila dit que si le professeur accorde une seule prolongation, les dates limites cesseront de compter.'],
  ['Leo says that if the team changes one workflow step, productivity will sink across the company.', 'Leo dit que si l equipe change une seule etape du flux de travail, la productivite chutera dans toute l entreprise.'],
  ['Tara says that if the store offers one coupon, it will have to discount everything next week.', 'Tara dit que si le magasin offre un seul coupon, il devra tout remiser la semaine suivante.'],
  ['Hugo says that if the library plays music once, it will become a loud hangout spot.', 'Hugo dit que si la bibliotheque met de la musique une fois, elle deviendra un lieu de rendez-vous bruyant.'],
  ['Lea says that if the team adds one joke to the presentation, nobody will take it seriously.', 'Lea dit que si l equipe ajoute une seule blague a la presentation, personne ne la prendra au serieux.'],
  ['Max says that if he skips one chapter, he will never finish the book.', 'Max dit que s il saute un seul chapitre, il ne finira jamais le livre.'],
  ['Yara says that if the school allows one late project, every student will start procrastinating.', 'Yara dit que si l ecole accepte un seul projet en retard, tous les eleves commenceront a procrastiner.'],
  ['Dan says that if the neighborhood gets one new cafe, rent will skyrocket immediately.', 'Dan dit que si le quartier ouvre un seul nouveau cafe, les loyers vont grimper immediatement.'],
  ['Rosa says that if the app removes one icon, users will be too confused to continue.', 'Rosa dit que si l application retire une seule icone, les utilisateurs seront trop perdus pour continuer.'],
  ['Alicia says that if the office adopts one flexible rule, nobody will respect any rule again.', 'Alicia dit que si le bureau adopte une seule regle souple, plus personne ne respectera aucune regle.'],
  ['Owen says that if the city hosts one festival, every weekend will become noise and chaos.', 'Owen dit que si la ville organise un seul festival, tous les week-ends deviendront du bruit et du chaos.'],
  ['Maya says that if she buys one snack at the gas station, she will blow her diet for the month.', 'Maya dit que si elle achete une seule collation a la station-service, elle ruinera tout son regime du mois.'],
  ['Ben says that if the coach gives one pep talk, the team will never need practice again.', 'Ben dit que si l entraineur donne un seul discours motivant, l equipe n aura plus jamais besoin de s entrainer.'],
  ['Priya says that if the cafe adds one dessert special, it will stop being a normal lunch place.', 'Priya dit que si le cafe ajoute un seul dessert du jour, il cessera d etre un endroit normal pour le dejeuner.'],
  ['Mira says that if the school starts five-minute study breaks, students will end up taking naps all day.', 'Mira dit que si l ecole commence les pauses etude de cinq minutes, les eleves finiront par faire la sieste toute la journee.'],
  ['Owen says that if the library lets people eat one snack at a table, books will be covered in crumbs forever.', 'Owen dit que si la bibliotheque laisse les gens manger une collation a une table, les livres seront couverts de miettes pour toujours.'],
  ['Sana says that if the office changes one meeting to online, nobody will ever show up in person again.', 'Sana dit que si le bureau transforme une reunion en reunion en ligne, plus personne ne viendra jamais en personne.'],
  ['Eli says that if his roommate buys one gaming chair, the apartment will turn into an arcade.', 'Eli dit que si son coloc achete une seule chaise de jeu, l appartement se transformera en salle darcade.'],
  ['Lina says that if the cafe adds one plant, it will become a jungle and lose all seating.', 'Lina dit que si le cafe ajoute une seule plante, il deviendra une jungle et perdra toutes ses places assises.'],
  ['Theo says that if the team allows one late email, the whole project will become a mess.', 'Theo dit que si l equipe accepte un seul courriel en retard, tout le projet deviendra un desastre.'],
  ['Rina says that if the store gives one birthday discount, shoppers will expect free items every day.', 'Rina dit que si le magasin offre une seule remise d anniversaire, les clients espereront des articles gratuits tous les jours.'],
  ['Ben says that if the family buys one bigger sofa, the living room will be too small to breathe in.', 'Ben dit que si la famille achete un seul canape plus grand, le salon sera trop petit pour respirer.'],
  ['Jade says that if the teacher gives one extra hint, students will never solve anything on their own.', 'Jade dit que si le professeur donne un seul indice supplementaire, les eleves ne resoudront plus rien seuls.'],
  ['Hugo says that if the city adds one bench at the bus stop, people will camp there all night.', 'Hugo dit que si la ville ajoute un seul banc a l arret de bus, les gens y camperont toute la nuit.'],
  ['Priya says that if she buys one dessert on Friday, her whole diet will collapse.', 'Priya dit que si elle achete un seul dessert vendredi, tout son regime s ecroulera.'],
  ['Noah says that if the school lets one group work outside, all classwork will move into the hallway.', 'Noah dit que si l ecole laisse un groupe travailler dehors, tout le travail de classe ira dans le couloir.'],
  ['Ava says that if the app adds one emoji reaction, it will become a silly chatroom.', 'Ava dit que si l application ajoute une seule reaction emoji, elle deviendra une salle de discussion ridicule.'],
  ['Tara says that if the gym plays music once, it will never be a serious place again.', 'Tara dit que si la salle de sport diffuse de la musique une fois, elle ne sera plus jamais un lieu serieux.'],
  ['Milo says that if the office gives one flexible Friday, nobody will want to work Mondays.', 'Milo dit que si le bureau accorde un seul vendredi flexible, personne ne voudra plus travailler le lundi.'],
  ['Nora says that if the class uses one online worksheet, paper homework will disappear forever.', 'Nora dit que si la classe utilise une seule fiche en ligne, les devoirs papier disparaitront pour toujours.'],
  ['Finn says that if the town opens one late-night diner, the whole neighborhood will stay awake.', 'Finn dit que si la ville ouvre un seul diner de nuit, tout le quartier restera reveille.'],
  ['Clara says that if the bookstore starts selling coffee, it will stop being a real bookstore.', 'Clara dit que si la librairie commence a vendre du cafe, elle ne sera plus une vraie librairie.'],
  ['Ravi says that if the company changes one policy, employees will rebel and quit.', 'Ravi dit que si l entreprise change une seule politique, les employes vont se revolter et demissionner.'],
  ['Maya says that if she checks her phone during dinner once, family time is ruined.', 'Maya dit que si elle regarde son telephone pendant le diner une seule fois, le temps en famille est ruine.'],
  ['Leo says that if the team uses one new software tool, nobody will know how to do their job.', 'Leo dit que si l equipe utilise un seul nouvel outil logiciel, personne ne saura faire son travail.'],
  ['Pia says that if the school allows one longer lunch, students will never return to class on time.', 'Pia dit que si l ecole accorde un seul dejeuner plus long, les eleves ne reviendront plus jamais a l heure en classe.'],
  ['Omar says that if the cafe switches one table to standing room, customers will never sit again.', 'Omar dit que si le cafe transforme une seule table en place debout, les clients ne s assiéront plus jamais.'],
  ['Zoe says that if her friend borrows one book, the whole shelf will be gone by next month.', 'Zoé dit que si son amie emprunte un seul livre, toute l etagere aura disparu le mois prochain.'],
  ['Dylan says that if the club adds one group photo, every event will turn into a photoshoot.', 'Dylan dit que si le club ajoute une seule photo de groupe, chaque evenement se transformera en seance photo.'],
  ['Sofia says that if the bakery offers one gluten-free option, everything will become bland.', 'Sofia dit que si la boulangerie propose une seule option sans gluten, tout deviendra fade.'],
  ['Grant says that if the office installs one standing desk, everyone will become health fanatics.', 'Grant dit que si le bureau installe un seul bureau debout, tout le monde deviendra fan de sante.'],
  ['Lea says that if the teacher allows one redo, students will stop caring about accuracy.', 'Lea dit que si le professeur autorise une seule deuxieme tentative, les eleves cesseront de se soucier de la precision.'],
  ['Amir says that if the city paints one bike lane green, drivers will never notice any road rules again.', 'Amir dit que si la ville peint une seule piste cyclable en vert, les conducteurs ne remarqueront plus jamais aucune regle de circulation.'],
  ['Kira says that if the store puts one item on sale, the whole brand will become cheap.', 'Kira dit que si le magasin met un seul article en promotion, toute la marque deviendra bon marche.'],
  ['Jules says that if the team takes one coffee break, they will never finish before evening.', 'Jules dit que si l equipe prend une seule pause cafe, elle ne finira jamais avant le soir.'],
  ['Ari says that if the app adds one shortcut, users will stop understanding anything at all.', 'Ari dit que si l application ajoute un seul raccourci, les utilisateurs ne comprendront plus rien du tout.'],
  ['Mina says that if the school opens one extra club, students will have zero free time.', 'Mina dit que si l ecole ouvre un seul club supplementaire, les eleves n auront plus aucun temps libre.'],
  ['Eli says that if the restaurant changes one ingredient, every loyal customer will leave.', 'Eli dit que si le restaurant change un seul ingredient, tous les clients fideles partiront.'],
  ['Hana says that if the office starts one casual Friday, professionalism is finished.', 'Hana dit que si le bureau commence un seul vendredi decontracte, le professionnalisme est termine.'],
  ['Yara says that if the neighborhood gets one mural, every wall will be painted overnight.', 'Yara dit que si le quartier obtient une seule fresque, tous les murs seront peints du jour au lendemain.'],
  ['Mason says that if he accepts one extra task, he will become the team slave.', 'Mason dit que s il accepte une seule tache en plus, il deviendra l esclave de l equipe.'],
  ['Luna says that if the school uses one video lesson, classroom learning is over.', 'Luna dit que si l ecole utilise une seule lecon en video, l apprentissage en classe est fini.'],
  ['Quinn says that if the company gives one wellness perk, nobody will work seriously again.', 'Quinn dit que si l entreprise accorde un seul avantage bien-etre, plus personne ne travaillera serieusement.'],
  ['Rosa says that if the city closes one street for a festival, traffic will never recover.', 'Rosa dit que si la ville ferme une seule rue pour un festival, la circulation ne se remettra jamais.'],
  ['Seth says that if the class starts one discussion, every lesson will become a debate.', 'Seth dit que si la classe commence une seule discussion, chaque cours deviendra un debat.'],
  ['Talia says that if the office adds one joke to the newsletter, nobody will respect it.', 'Talia dit que si le bureau ajoute une seule blague a la lettre d information, personne ne la respectera.'],
  ['Uma says that if the family buys one big TV, they will never talk together again.', 'Uma dit que si la famille achete une seule grande television, elle ne parlera plus jamais ensemble.'],
  ['Victor says that if the cafe opens one hour earlier, all schedules will be destroyed.', 'Victor dit que si le cafe ouvre une heure plus tot, tous les emplois du temps seront detruits.'],
  ['Wren says that if the team changes one form field, all data will be lost.', 'Wren dit que si l equipe change un seul champ du formulaire, toutes les donnees seront perdues.'],
  ['Xavier says that if the city installs one extra trash can, people will litter everywhere else.', 'Xavier dit que si la ville installe une seule poubelle supplementaire, les gens jetteront des dechets partout ailleurs.'],
  ['Yara says that if the school permits one makeup class, attendance will fall apart.', 'Yara dit que si l ecole autorise un seul cours de rattrapage, l assiduite va s effondrer.'],
  ['Zed says that if the store gives one free sample, customers will expect handouts forever.', 'Zed dit que si le magasin offre un seul echantillon gratuit, les clients espereront des cadeaux pour toujours.'],
];

const OPTIONS_EN = ['Slippery Slope', 'False Dilemma', 'Appeal to Fear', 'Appeal to Tradition'];
const OPTIONS_FR = ['Pente glissante', 'Fausse dichotomie', 'Appel à la peur', 'Appel à la tradition'];

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
      id: 40801 + index,
      level: 6,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Pente glissante' : 'Slippery Slope',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? "On prétend qu'une petite étape déclenchera forcément une suite d'effets de plus en plus extrêmes."
        : 'A small step is claimed to inevitably trigger a chain of ever more extreme consequences.',
      detailedExplanationBeginner: isFrench
        ? 'Une petite action est traitée comme le début certain d une catastrophe.'
        : 'A small action is treated as the certain start of a disaster.',
      detailedExplanationIntermediate: isFrench
        ? "Le raisonnement saute directement d'une étape initiale à une conclusion extrême sans montrer les maillons intermédiaires."
        : 'The reasoning jumps from one initial step straight to an extreme conclusion without showing the intermediate links.',
      detailedExplanationExpert: isFrench
        ? "La pente glissante devient fautive quand elle remplace l'analyse des probabilités par une succession supposée inévitable d'effets. Le lien entre les étapes peut exister, mais il doit être démontré avec des mécanismes concrets, pas seulement suggéré par la peur d'un dérapage progressif."
        : 'Slippery slope becomes faulty when it replaces probability analysis with a supposedly inevitable chain of effects. A link between steps may exist, but it must be shown with concrete mechanisms, not merely suggested by fear of gradual collapse.',
      questionFormat: 'standard',
    };
  });
}

export const SLIPPERY_SLOPE_EXPANSION_EN: Question[] = createQuestions('en');
export const SLIPPERY_SLOPE_EXPANSION_FR: Question[] = createQuestions('fr');

import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya says the office should keep the broken printer because everyone already knows how to use it.', 'Maya dit que le bureau devrait garder l imprimante en panne parce que tout le monde sait deja l utiliser.'],
  ['Ben refuses the new grocery app because the paper list has "always worked fine."', 'Ben refuse la nouvelle application du supermarche parce que la liste papier a « toujours tres bien marche ».'],
  ['Priya wants to keep the tiny, dark meeting room because changing rooms would be annoying.', 'Priya veut garder la petite salle de reunion sombre parce que changer de salle serait penible.'],
  ['Noah says the family should keep the old TV remote even though half the buttons do nothing.', 'Noah dit que la famille devrait garder l ancienne telecommande meme si la moitie des boutons ne servent a rien.'],
  ['Lina thinks the class should never change the seating chart because people are used to it.', 'Lina pense que la classe ne devrait jamais changer le plan des places parce que les gens y sont habitues.'],
  ['Theo insists the team should keep the slow morning report just because it is the routine.', 'Theo insiste pour que l equipe garde le rapport du matin lent simplement parce que c est la routine.'],
  ['Ava refuses the cleaner phone layout because the old one is "good enough."', 'Ava refuse la nouvelle presentation du telephone parce que l ancienne est « assez bien ».'],
  ['Omar says the restaurant should keep the awkward paper menu because digital menus feel different.', 'Omar dit que le restaurant devrait garder le menu papier maladroit parce que les menus numeriques font different.'],
  ['Rina wants the same homework format forever because changing it would mean relearning the rules.', 'Rina veut garder le meme format de devoir pour toujours parce que le changer voudrait dire reapprendre les regles.'],
  ['Jules says the school should keep the leaky water fountain because students know where it is.', 'Jules dit que l ecole devrait garder la fontaine qui fuit parce que les eleves savent ou elle se trouve.'],
  ['Mina argues the old office chairs should stay because replacement would take effort.', 'Mina soutient que les anciennes chaises de bureau devraient rester parce que les remplacer demanderait des efforts.'],
  ['Eli thinks the team should keep the confusing spreadsheet because no one wants to rebuild it.', 'Eli pense que l equipe devrait garder le tableau complexe parce que personne ne veut le reconstruire.'],
  ['Hugo says the family should keep the noisy blender because buying a new one would be a hassle.', 'Hugo dit que la famille devrait garder le mixeur bruyant parce qu en acheter un nouveau serait galere.'],
  ['Lea wants the same weekly schedule even though everyone complains about it.', 'Lea veut garder le meme emploi du temps hebdomadaire meme si tout le monde s en plaint.'],
  ['Grant says the store should keep the cluttered checkout lane because customers know the path.', 'Grant dit que le magasin devrait garder la caisse encombrée parce que les clients connaissent le passage.'],
  ['Tia refuses the new bus route because the old stop is already familiar.', 'Tia refuse le nouvel itineraire de bus parce que l ancien arret lui est déjà familier.'],
  ['Nora says the club should keep the outdated website because changing it might confuse people.', 'Nora dit que le club devrait garder le site depasse parce que le changer pourrait troubler les gens.'],
  ['Sam thinks the team should keep the awkward handshake because "that is how we do things."', 'Sam pense que l equipe devrait garder la poignée de main maladroite parce que « c est comme ca qu on fait ».'],
  ['Jade wants to keep the old coffee machine even though it breaks every other week.', 'Jade veut garder l ancienne machine a cafe meme si elle tombe en panne toutes les deux semaines.'],
  ['Owen says the company should not update the logo because clients already recognize it.', 'Owen dit que l entreprise ne devrait pas moderniser le logo parce que les clients le reconnaissent déjà.'],
  ['Ari thinks the family should keep the same dull holiday tradition just because it is familiar.', 'Ari pense que la famille devrait garder la meme tradition de vacances ennuyeuse simplement parce qu elle est familiere.'],
  ['Pia refuses to try the new route to work because the old route is what she knows.', 'Pia refuse d essayer le nouvel itineraire pour aller au travail parce que l ancien est celui qu elle connait.'],
  ['Ben says the teacher should keep the old grading policy because changing it might upset students.', 'Ben dit que le professeur devrait garder l ancienne methode de notation parce que la changer pourrait contrarier les eleves.'],
  ['Zoe thinks the office should keep the stale snack drawer because everyone expects it.', 'Zoe pense que le bureau devrait garder le tiroir de collations rassis parce que tout le monde s y attend.'],
  ['Ravi argues the team should never change the project tool because learning a new one would take time.', 'Ravi soutient que l equipe ne devrait jamais changer d outil de projet parce qu en apprendre un nouveau prendrait du temps.'],
  ['Sofia says the cafe should keep the cracked mugs because they are the ones people are used to.', 'Sofia dit que le cafe devrait garder les tasses fissurees parce que ce sont celles auxquelles les gens sont habitues.'],
  ['Lara thinks the neighborhood should keep the old streetlight layout because that is how it has always been.', 'Lara pense que le quartier devrait garder l ancien plan des lampadaires parce que c est comme cela depuis toujours.'],
  ['Cole refuses the updated app settings because the old defaults feel safer.', 'Cole refuse les parametres mis a jour de l application parce que les anciens reglages lui semblent plus sûrs.'],
  ['Maya wants the group to keep the same boring icebreaker every week because changing it feels risky.', 'Maya veut que le groupe garde le meme brise-glace ennuyeux chaque semaine parce que le changer semble risqué.'],
  ['Ezra says the family should keep the old couch because replacing it would mean making a decision.', 'Ezra dit que la famille devrait garder l ancien canape parce que le remplacer voudrait dire prendre une decision.'],
  ['Nina insists the library should keep the old computer login screen because users know it by heart.', 'Nina insiste pour que la bibliotheque garde l ancien ecran de connexion de l ordinateur parce que les utilisateurs le connaissent par coeur.'],
  ['Hana argues the team should not switch presentation software because the current one is already familiar.', 'Hana affirme que l equipe ne devrait pas changer de logiciel de presentation parce que l actuel est déjà familier.'],
  ['Dylan says the class should keep the same project groups because starting over would be awkward.', 'Dylan dit que la classe devrait garder les memes groupes de projet parce que recommencer serait genant.'],
  ['Penny refuses the restaurant upgrade because the old booths have "character."', 'Penny refuse la renovation du restaurant parce que les anciens banquettes ont « du caractere ».'],
  ['Kira thinks the office should keep the slow approval process because everyone has survived it so far.', 'Kira pense que le bureau devrait garder le processus d approbation lent parce que tout le monde y a survécu jusqu ici.'],
  ['Finn says the team should keep the same meeting time because a new time would be unfamiliar.', 'Finn dit que l equipe devrait garder la meme heure de reunion parce qu un nouvel horaire serait inhabituel.'],
  ['Juno wants the old classroom projector to stay even though the image is always fuzzy.', 'Juno veut que l ancien projecteur de classe reste en place meme si l image est toujours floue.'],
  ['Olivia says the city should keep the narrow sidewalk plan because changing it could cause complaints.', 'Olivia dit que la ville devrait garder le plan des trottoirs etroits parce que le changer pourrait provoquer des plaintes.'],
  ['Mila believes the club should keep the same annual event format because it is easier than experimenting.', 'Mila croit que le club devrait garder le meme format d evenement annuel parce que c est plus simple que d experimenter.'],
  ['Leo says the team should keep the messy shared drive because everyone knows where the files are hidden.', 'Leo dit que l equipe devrait garder le dossier partage en bazar parce que tout le monde sait ou sont caches les fichiers.'],
  ['Tara argues the school should not replace the old bell sound because students already react to it.', 'Tara soutient que l ecole ne devrait pas remplacer l ancien son de la cloche parce que les eleves y reagissent déjà.'],
  ['Hugo says the town should keep the same festival schedule because changing it would feel strange.', 'Hugo dit que la ville devrait garder le meme calendrier de festival parce que le changer semblerait bizarre.'],
  ['Lea wants to keep the old chat group name because nobody feels like updating it.', 'Lea veut garder l ancien nom du groupe de discussion parce que personne n a envie de le mettre a jour.'],
  ['Max says the school should keep the rigid lunch order because rearranging it might upset the usual flow.', 'Max dit que l ecole devrait garder l ordre rigide du dejeuner parce que le reorganiser pourrait perturber le rythme habituel.'],
  ['Yara thinks the office should keep the old filing cabinet because the new system would be unfamiliar.', 'Yara pense que le bureau devrait garder l ancien classeur parce que le nouveau systeme serait inconnu.'],
  ['Dan says the family should keep the same tired board game because everyone already knows the rules.', 'Dan dit que la famille devrait garder le meme jeu de plateau use parce que tout le monde connait déjà les regles.'],
  ['Rosa refuses a cleaner recipe layout because the old cookbook pages are what she trusts.', 'Rosa refuse une presentation de recette plus claire parce que les vieilles pages du livre de cuisine sont celles en qui elle a confiance.'],
  ['Alicia wants the office calendar to stay the same even though it keeps causing double bookings.', 'Alicia veut que le calendrier du bureau reste identique meme s il cause sans cesse des doubles reservations.'],
  ['Owen says the team should keep the old training drill because changing drills sounds unnecessary.', 'Owen dit que l equipe devrait garder l ancien exercice d entrainement parce que changer d exercice semble inutile.'],
  ['Maya argues the apartment should keep the dim hallway light because everybody knows where to step.', 'Maya affirme que l appartement devrait garder la lumiere faible du couloir parce que tout le monde sait ou marcher.'],
  ['Maya wants the bakery to keep the old cash register because the staff already know the buttons.', 'Maya veut que la boulangerie garde l ancienne caisse parce que le personnel connait déjà les boutons.'],
  ['Ben refuses to change the group chat rules because people are used to the chaos.', 'Ben refuse de changer les regles du groupe de discussion parce que les gens sont habitues au chaos.'],
  ['Priya says the clinic should keep the crowded waiting room because a new layout would feel different.', 'Priya dit que la clinique devrait garder la salle d attente bondée parce qu une nouvelle disposition semblerait differente.'],
  ['Noah wants the school to keep the old bell tone because students already react to it automatically.', 'Noah veut que l ecole garde l ancienne sonnerie parce que les eleves y reagissent déjà automatiquement.'],
  ['Lina argues the office should keep the broken chair because everyone knows how to avoid it.', 'Lina soutient que le bureau devrait garder la chaise cassée parce que tout le monde sait déjà l eviter.'],
  ['Theo says the team should keep the confusing form because switching forms would be annoying.', 'Theo dit que l equipe devrait garder le formulaire confus parce que changer de formulaire serait penible.'],
  ['Ava thinks the restaurant should keep the old booth layout because regulars know where to sit.', 'Ava pense que le restaurant devrait garder l ancien plan des banquettes parce que les habitués savent ou s asseoir.'],
  ['Omar refuses the new software shortcut because the long way is what he has always done.', 'Omar refuse le nouveau raccourci du logiciel parce que la methode longue est celle qu il a toujours utilisee.'],
  ['Rina says the family should keep the same holiday playlist because changing it would cause complaints.', 'Rina dit que la famille devrait garder la meme playlist de fete parce que la changer provoquerait des plaintes.'],
  ['Jules wants to keep the old parking habit because the new lot would require learning a different path.', 'Jules veut garder l ancienne habitude de stationnement parce que le nouveau parking demanderait d apprendre un autre trajet.'],
  ['Mina says the club should keep the tired icebreaker because nobody needs to think of a replacement.', 'Mina dit que le club devrait garder le brise-glace use parce que personne n a besoin d en trouver un autre.'],
  ['Eli argues the store should keep the cluttered shelf arrangement because customers can still find things.', 'Eli soutient que le magasin devrait garder l arrangement encombre des rayons parce que les clients trouvent quand meme les choses.'],
  ['Hugo says the city should keep the same bus transfer point because commuters already know it.', 'Hugo dit que la ville devrait garder le meme point de correspondance de bus parce que les navetteurs le connaissent déjà.'],
  ['Lea thinks the classroom should keep the old projector because replacing it would take effort.', 'Lea pense que la salle de classe devrait garder l ancien projecteur parce que le remplacer demanderait des efforts.'],
  ['Grant refuses the clearer file naming system because the messy one is familiar.', 'Grant refuse le systeme de nommage des fichiers plus clair parce que le systeme en bazar est familier.'],
  ['Tia says the company should keep the same onboarding email because new wording could confuse staff.', 'Tia dit que l entreprise devrait garder le meme courriel d accueil parce qu un nouveau texte pourrait troubler le personnel.'],
  ['Nora wants the apartment to keep the awkward light switch placement because changing it would be a project.', 'Nora veut que l appartement garde l emplacement maladroit de l interrupteur parce que le changer serait un projet.'],
  ['Sam says the team should keep the old meeting timer because it still rings on time.', 'Sam dit que l equipe devrait garder l ancienne minuterie de reunion parce qu elle sonne encore à l heure.'],
  ['Jade refuses the new recipe format because the old one is the one she memorized.', 'Jade refuse le nouveau format de recette parce que l ancien est celui qu elle a memorise.'],
  ['Owen says the school should keep the worn-out sports balls because buying new ones would feel unnecessary.', 'Owen dit que l ecole devrait garder les ballons uses parce qu acheter des neufs semblerait inutile.'],
  ['Ari argues the house should keep the same living-room layout because moving furniture is a pain.', 'Ari soutient que la maison devrait garder le meme agencement du salon parce que deplacer les meubles est penible.'],
  ['Pia says the cafe should keep the old paper receipts because digital receipts feel unfamiliar.', 'Pia dit que le cafe devrait garder les vieux reçus papier parce que les reçus numeriques semblent inhabituels.'],
  ['Ben wants the sports team to keep the same warm-up because everyone already knows the sequence.', 'Ben veut que l equipe sportive garde le meme echauffement parce que tout le monde connait déjà la sequence.'],
  ['Zoe refuses the updated help desk script because the old script has always been used.', 'Zoé refuse le script mis a jour du service d aide parce que l ancien script a toujours ete utilise.'],
  ['Ravi says the office should keep the slow printer because switching printers could cause trouble.', 'Ravi dit que le bureau devrait garder l imprimante lente parce que changer d imprimante pourrait causer des soucis.'],
  ['Sofia thinks the club should keep the same annual photo pose because changing it would feel strange.', 'Sofia pense que le club devrait garder la meme pose photo annuelle parce que la changer semblerait bizarre.'],
  ['Lara says the neighborhood should keep the old sidewalk cracks because people know where to step.', 'Lara dit que le quartier devrait garder les vieilles fissures du trottoir parce que les gens savent ou marcher.'],
  ['Cole refuses the new password manager because writing passwords down is what he knows.', 'Cole refuse le nouveau gestionnaire de mots de passe parce qu ecrire les mots de passe est ce qu il connait.'],
  ['Maya wants the same lunch schedule because changing it would force everyone to adapt.', 'Maya veut garder le meme horaire de dejeuner parce que le changer obligerait tout le monde à s adapter.'],
  ['Ezra says the library should keep the old catalog cards because the digital search is different.', 'Ezra dit que la bibliotheque devrait garder les anciennes fiches de catalogue parce que la recherche numerique est differente.'],
  ['Nina wants the team to keep the same report template because updating it would take time.', 'Nina veut que l equipe garde le meme modele de rapport parce que le mettre a jour prendrait du temps.'],
  ['Hana says the family should keep the same dinner table seats because everyone is used to them.', 'Hana dit que la famille devrait garder les memes places à table parce que tout le monde y est habitue.'],
  ['Dylan refuses the new locker system because the old locks are what students already understand.', 'Dylan refuse le nouveau systeme de casiers parce que les anciennes serrures sont celles que les eleves comprennent déjà.'],
  ['Penny wants the office to keep the same snack brand because changing snacks would lead to complaints.', 'Penny veut que le bureau garde la meme marque de snacks parce que changer de snacks provoquerait des plaintes.'],
  ['Kira says the school should keep the old assembly schedule because no one wants to relearn it.', 'Kira dit que l ecole devrait garder l ancien horaire des assemblees parce que personne ne veut le reapprendre.'],
  ['Finn argues the gym should keep the same music playlist because people know what to expect.', 'Finn soutient que la salle de sport devrait garder la meme playlist parce que les gens savent à quoi s attendre.'],
  ['Juno refuses the cleaner checkout lanes because the old lane ordering is already familiar.', 'Juno refuse les caisses plus claires parce que l ancien ordre des files est déjà familier.'],
  ['Olivia says the company should keep the old vacation request form because changing it could annoy staff.', 'Olivia dit que l entreprise devrait garder l ancien formulaire de demande de vacances parce que le changer pourrait agacer le personnel.'],
  ['Mila wants the club to keep the same mascot costume because replacing it would be a nuisance.', 'Mila veut que le club garde le meme costume de mascotte parce que le remplacer serait penible.'],
  ['Leo says the apartment should keep the old thermostat setting because changing it might upset everyone.', 'Leo dit que l appartement devrait garder l ancien reglage du thermostat parce que le changer pourrait contrarier tout le monde.'],
  ['Tara argues the school should keep the old exam desk layout because students already know the pattern.', 'Tara soutient que l ecole devrait garder l ancien agencement des bureaux d examen parce que les eleves connaissent déjà le schema.'],
  ['Hugo wants the team to keep the stale weekly recap because writing a new one is work.', 'Hugo veut que l equipe garde le recapitualtif hebdomadaire usé parce qu en ecrire un nouveau demande du travail.'],
  ['Lea says the city should keep the same trash pickup day because changing it would be inconvenient.', 'Lea dit que la ville devrait garder le meme jour de ramassage des ordures parce que le changer serait peu pratique.'],
  ['Max refuses the new login page because the old page is the one everybody recognizes.', 'Max refuse la nouvelle page de connexion parce que l ancienne est celle que tout le monde reconnait.'],
  ['Yara says the department should keep the old filing labels because rewriting them would be extra effort.', 'Yara dit que le service devrait garder les anciennes etiquettes de classement parce que les reecrire demanderait un effort supplementaire.'],
  ['Dan thinks the club should keep the same annual slogan because creating a new one would be awkward.', 'Dan pense que le club devrait garder le meme slogan annuel parce qu en creer un nouveau serait genant.'],
  ['Rosa wants the cafe to keep the old table numbers because regulars know the system.', 'Rosa veut que le cafe garde les anciens numeros de table parce que les habitués connaissent le systeme.'],
  ['Alicia says the office should keep the old supply cabinet because a new cabinet would change the routine.', 'Alicia dit que le bureau devrait garder l ancienne armoire à fournitures parce qu une nouvelle armoire changerait la routine.'],
  ['Owen argues the classroom should keep the same project partners because mixing them up would be uncomfortable.', 'Owen soutient que la salle de classe devrait garder les memes partenaires de projet parce que les melanger serait inconfortable.'],
  ['Maya says the team should keep the old attendance sheet because a new one would feel like extra work.', 'Maya dit que l equipe devrait garder l ancienne feuille de presence parce qu une nouvelle donnerait l impression de faire du travail en plus.'],
];

const OPTIONS_EN = ['Status Quo Bias', 'Appeal to Tradition', 'Loss Aversion', 'Familiarity Bias'];
const OPTIONS_FR = ['Biais du statu quo', 'Appel à la tradition', 'Aversion à la perte', 'Biais de familiarité'];

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
      id: 41401 + index,
      level: 5,
      persona_stage: PersonaStage.OCTOPUS,
      concept: isFrench ? 'Biais du statu quo' : 'Status Quo Bias',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais est illustré ici ?' : 'Which bias is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'La personne prefere garder la situation actuelle surtout parce qu elle est familiere ou moins penible a changer.'
        : 'The person prefers the current situation mainly because it is familiar or less painful to change.',
      detailedExplanationBeginner: isFrench
        ? 'Rester sur la version actuelle peut sembler plus simple que changer.'
        : 'Sticking with the current version can feel easier than changing it.',
      detailedExplanationIntermediate: isFrench
        ? 'Le biais du statu quo fait paraitre la solution actuelle comme la plus raisonnable simplement parce qu elle est deja en place.'
        : 'Status quo bias makes the current option seem most reasonable simply because it is already in place.',
      detailedExplanationExpert: isFrench
        ? "Ce biais emerge quand le cout psychologique du changement pese plus lourd que l analyse objective des options. On confond souvent absence de nouveaute, confort et validite, alors que le maintien de l existant peut aussi conserver des problemes, des inefficacites ou des injustices."
        : 'This bias appears when the psychological cost of change weighs more heavily than an objective look at the options. We often confuse lack of novelty, comfort, and validity, even though keeping things as they are can also preserve problems, inefficiencies, or unfairness.',
      questionFormat: 'standard',
    };
  });
}

export const STATUS_QUO_BIAS_EXPANSION_EN: Question[] = createQuestions('en');
export const STATUS_QUO_BIAS_EXPANSION_FR: Question[] = createQuestions('fr');

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

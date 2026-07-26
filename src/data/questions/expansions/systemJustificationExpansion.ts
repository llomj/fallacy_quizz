import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya says the school hierarchy is fair because the top students naturally deserve more resources.', 'Maya dit que la hierarchie de l ecole est juste parce que les meilleurs eleves meritent naturellement plus de ressources.'],
  ['Leo argues that long working hours are good because people who complain probably lack grit.', 'Leo soutient que les longues heures de travail sont bonnes parce que les gens qui se plaignent manquent probablement de courage.'],
  ['Priya says the company pay gap is normal since the managers must be more valuable.', 'Priya dit que l ecart de salaire de l entreprise est normal puisque les cadres doivent etre plus utiles.'],
  ['Omar claims the citys expensive neighborhoods deserve better services because richer residents are more responsible.', 'Omar affirme que les quartiers chers de la ville meritent de meilleurs services parce que les habitants plus riches sont plus responsables.'],
  ['Rina says the new app store rules are fine because the biggest companies know best.', 'Rina dit que les nouvelles regles de la boutique d applications sont correctes parce que les plus grandes entreprises savent mieux que les autres.'],
  ['Ben insists the factory owners should keep all the power because they created the jobs.', 'Ben insiste pour dire que les patrons de l usine doivent garder tout le pouvoir parce qu ils ont cree les emplois.'],
  ['Zoe says the old exam system must be fair because successful people came through it.', 'Zoé dit que l ancien systeme d examen doit etre juste parce que des personnes reussies en sont passees.'],
  ['Kai argues that poor tenants probably deserve worse housing options than wealthy buyers.', 'Kai soutient que les locataires pauvres meritent probablement des logements moins bons que les acheteurs riches.'],
  ['Nora says the strict dress code is good because people who fit in more are simply better professionals.', 'Nora dit que le code vestimentaire strict est bon parce que les personnes qui s adaptent le mieux sont tout simplement de meilleurs professionnels.'],
  ['Eli claims the unpopular team gets fewer chances because the system can tell who is serious.', 'Eli affirme que l equipe impopulaire a moins de chances parce que le systeme sait reconnaitre qui est serieux.'],
  ['Lina says the old club rules are reasonable because only the right people stayed in the club.', 'Lina dit que les anciennes regles du club sont raisonnables parce que seules les bonnes personnes sont restees dans le club.'],
  ['Grant says the tough neighborhood policing must be fine because law-abiding people have nothing to fear.', 'Grant dit que la police severe dans le quartier doit etre correcte parce que les personnes respectueuses de la loi n ont rien a craindre.'],
  ['Tia says the expensive college admissions process is justified because the students who get in must be the best.', 'Tia dit que le processus d admission cher de l universite est justifie parce que les etudiants admis doivent etre les meilleurs.'],
  ['Noah argues that unpaid interns should accept the system because everyone successful once started at the bottom.', 'Noah soutient que les stagiaires non payes doivent accepter le systeme parce que toute personne qui reussit a commence un jour en bas de l echelle.'],
  ['Mia says the companys ranking system is fair because the winners clearly earned their status.', 'Mia dit que le systeme de classement de l entreprise est juste parce que les gagnants ont clairement merite leur statut.'],
  ['Jules claims the old boys club must know what it is doing because it has lasted so long.', 'Jules affirme que le club de vieux amis doit savoir ce qu il fait parce qu il existe depuis si longtemps.'],
  ['Ava says the hard fitness challenge is good because only the strongest people finish it.', 'Ava dit que le defi sportif difficile est bon parce que seules les personnes les plus fortes le terminent.'],
  ['Finn says the landlord system is fine because tenants who cannot keep up probably were not meant to stay.', 'Finn dit que le systeme des proprietaires est correct parce que les locataires qui ne suivent pas n etaient probablement pas faits pour rester.'],
  ['Mina says the school tracking system works because the top track students are obviously the real talent.', 'Mina dit que le systeme de tri scolaire fonctionne parce que les eleves de la meilleure filiere sont clairement les vrais talents.'],
  ['Theo claims the old gatekeeping process is fair because only serious people make it through.', 'Theo affirme que l ancien systeme de filtrage est juste parce que seules les personnes serieuses passent.'],
  ['Juno says the luxury membership model is normal because the people who can afford it are the ones who matter.', 'Juno dit que le modele d abonnement de luxe est normal parce que les personnes qui peuvent se le payer sont celles qui comptent.'],
  ['Iris says the school favoritism is fine because the students chosen for attention must have earned it.', 'Iris dit que le favoritisme a l ecole est acceptable parce que les eleves choisis pour recevoir de l attention doivent l avoir merite.'],
  ['Cole says the elite sports academy is fair because the athletes selected there are the ones worth investing in.', 'Cole dit que l academie sportive elite est juste parce que les athletes selectionnes sont ceux qui meritent l investissement.'],
  ['Riley says the difficult visa process is sensible because people who succeed probably deserve to move.', 'Riley dit que le processus de visa difficile est raisonnable parce que les personnes qui reussissent meritent probablement de demenager.'],
  ['Pia says the old promotion ladder is okay because people at the top must be the best leaders.', 'Pia dit que l ancienne echelle des promotions va bien parce que les personnes au sommet doivent etre les meilleurs leaders.'],
  ['Hugo says the strict workplace ranking is natural because the people at the top are the most capable.', 'Hugo dit que le classement strict au travail est naturel parce que les personnes au sommet sont les plus capables.'],
  ['Sam says the expensive prep school system is fair because the students who survive it are the most disciplined.', 'Sam dit que le systeme des ecoles preparatoires chères est juste parce que les eleves qui y survivent sont les plus disciplines.'],
  ['Jade says the old guest list rule is okay because people invited are the ones that matter most.', 'Jade dit que l ancienne regle de la liste d invites est correcte parce que les personnes invitees sont celles qui comptent le plus.'],
  ['Owen says the harsh probation policy is reasonable because good employees can handle it.', 'Owen dit que la politique de probation dure est raisonnable parce que les bons employes peuvent la supporter.'],
  ['Lea says the system that only rewards visible results is the best one because real talent always shows up.', 'Lea dit que le systeme qui recompense seulement les resultats visibles est le meilleur parce que le vrai talent finit toujours par se voir.'],
  ['Maya says the wealthy always get better outcomes because they must be doing something right.', 'Maya dit que les riches obtiennent toujours de meilleurs resultats parce qu ils doivent faire quelque chose de bien.'],
  ['Ben says the old hierarchy at work is justified because people above you must have earned it.', 'Ben dit que l ancienne hierarchie au travail est justifiee parce que les personnes au dessus de vous doivent l avoir meritee.'],
  ['Ava says the harsh scholarship cutoff is fair because only deserving students pass it.', 'Ava dit que le seuil severe de la bourse est juste parce que seuls les eleves meritants le franchissent.'],
  ['Omar says the city keeps the same leaders because if people were unhappy, they would have left already.', 'Omar dit que la ville garde les memes dirigeants parce que si les gens etaient mecontents, ils seraient deja partis.'],
  ['Nina says the prestigious club is naturally better because the people still inside are the successful ones.', 'Nina dit que le club prestigieux est naturellement meilleur parce que les personnes encore a l interieur sont les reussites.'],
  ['Eli says the manager-only parking spaces are justified because managers are the ones who matter.', 'Eli dit que les places de parking reservees aux cadres sont justifiees parce que les cadres sont ceux qui comptent.'],
  ['Lina says the system that filters out most applicants must be smart because the survivors are excellent.', 'Lina dit que le systeme qui elimine la plupart des candidats doit etre intelligent parce que les survivants sont excellents.'],
  ['Grant says the old neighborhood gatekeeping is fine because the people who stay are the right kind of people.', 'Grant dit que le vieux filtrage du quartier va bien parce que les personnes qui restent sont le bon type de gens.'],
  ['Tia says the unequal bonus structure is fine because top performers deserve to pull ahead.', 'Tia dit que la structure de primes inegale est acceptable parce que les meilleurs performeurs meritent de prendre de l avance.'],
  ['Noah says the customer service queue that favors loyal buyers is reasonable because loyal buyers are the real value.', 'Noah dit que la file du service client qui favorise les acheteurs fideles est raisonnable parce que les acheteurs fideles sont la vraie valeur.'],
  ['Mia says the old publishing gatekeepers were right because only good books got through them.', 'Mia dit que les anciens gardiens de l edition avaient raison parce que seuls les bons livres les franchissaient.'],
  ['Jules says the system that rewards loud confidence is fair because confident people are the leaders.', 'Jules dit que le systeme qui recompense la confiance bruyante est juste parce que les personnes confiantes sont les leaders.'],
  ['Ava says the expensive neighborhood schools deserve their resources because families there care more.', 'Ava dit que les ecoles des quartiers chers meritent leurs ressources parce que les familles la-bas s en soucient davantage.'],
  ['Finn says the old hiring network is fine because successful employees already passed through it.', 'Finn dit que l ancien reseau de recrutement est correct parce que les employes reussis sont deja passes par la.'],
  ['Mina says the system that keeps poor people out is efficient because it preserves quality.', 'Mina dit que le systeme qui tient les pauvres a l ecart est efficace parce qu il preserve la qualite.'],
  ['Theo says the elite conference badge system is good because only important people get invited.', 'Theo dit que le systeme de badges de la conference elite est bon parce que seules les personnes importantes sont invitees.'],
  ['Juno says the old class ranking is sensible because the top ranks obviously contain the best people.', 'Juno dit que l ancien classement de classe est logique parce que les premiers rangs contiennent evidemment les meilleures personnes.'],
  ['Iris says the system is balanced because the people who make it through are the ones who can handle pressure.', 'Iris dit que le systeme est equilibre parce que les personnes qui passent sont celles qui peuvent supporter la pression.'],
  ['Cole says the old access fee is fine because people who cannot pay are not the target audience anyway.', 'Cole dit que l ancien tarif d acces est correct parce que les personnes qui ne peuvent pas payer ne sont de toute facon pas le public vise.'],
  ['Riley says the current structure is natural because those at the top are the ones who deserve to lead.', 'Riley dit que la structure actuelle est naturelle parce que ceux qui sont en haut sont ceux qui meritent de diriger.'],
  ['Pia says the system that favors insiders is fine because insiders have already proven themselves.', 'Pia dit que le systeme qui favorise les initiés est correct parce que les initiés ont deja fait leurs preuves.'],
  ['Hugo says the harsh selection process is good because anyone who fails probably was not serious enough.', 'Hugo dit que le processus de selection dur est bon parce que toute personne qui echoue n etait probablement pas assez serieuse.'],
  ['Sophie says the office rule is fair because the people who already have the best desks must deserve them.', 'Sophie dit que la regle du bureau est juste parce que les personnes qui ont deja les meilleurs bureaux doivent les meriter.'],
  ['Liam says the school ranking is fine because the top students are obviously the ones who matter most.', 'Liam dit que le classement scolaire est correct parce que les meilleurs eleves sont evidemment ceux qui comptent le plus.'],
  ['Emma says the city service gap is normal because wealthy neighborhoods are the ones that know how to manage things.', 'Emma dit que l ecart de services de la ville est normal parce que les quartiers riches sont ceux qui savent gerer les choses.'],
  ['Diego says the manager parking spots are justified because managers are the important people.', 'Diego dit que les places de parking reservees aux cadres sont justifiees parce que les cadres sont les personnes importantes.'],
  ['Lily says the expensive club fees are reasonable because people who can pay are the right kind of members.', 'Lily dit que les frais de club chers sont raisonnables parce que les personnes qui peuvent payer sont le bon type de membres.'],
  ['Hassan says the old promotion ladder works because the people at the top are the ones who earned it.', 'Hassan dit que l ancienne echelle des promotions fonctionne parce que les personnes au sommet sont celles qui l ont meritee.'],
  ['Ruby says the dress code is fine because the people who fit it are the real professionals.', 'Ruby dit que le code vestimentaire est correct parce que les personnes qui le respectent sont les vrais professionnels.'],
  ['Noah says the admissions filter is good because the students who get through are the best ones.', 'Noah dit que le filtre d admission est bon parce que les eleves qui passent sont les meilleurs.'],
  ['Chloe says the old guest list rule is fair because invited people are the people who belong there.', 'Chloe dit que l ancienne regle de la liste d invites est juste parce que les invites sont les personnes qui ont leur place la.'],
  ['Yusuf says the strict probation policy is fine because good employees will survive it.', 'Yusuf dit que la politique de probation stricte est correcte parce que les bons employes y survivront.'],
  ['Maya says the company bonus gap is natural because the top performers are obviously worth more.', 'Maya dit que l ecart de primes de l entreprise est naturel parce que les meilleurs performeurs valent evidemment plus.'],
  ['Lucas says the town council always favors the same families because they must be the responsible ones.', 'Lucas dit que le conseil municipal favorise toujours les memes familles parce qu elles doivent etre les plus responsables.'],
  ['Ari says the school tracking system is sensible because the advanced track students are the smartest.', 'Ari dit que le systeme de filieres scolaires est logique parce que les eleves de la filiere avancee sont les plus intelligents.'],
  ['Mina says the old application fee is fine because people who cannot afford it were not ready anyway.', 'Mina dit que l ancien frais de dossier est correct parce que les personnes qui ne peuvent pas se le permettre n etaient pas pretes de toute facon.'],
  ['Owen says the private club feels fair because the members who stay are the successful ones.', 'Owen dit que le club prive semble juste parce que les membres qui restent sont les reussites.'],
  ['Zara says the tough scholarship cutoff is reasonable because only deserving students pass it.', 'Zara dit que le seuil sever de la bourse est raisonnable parce que seuls les eleves meritants le franchissent.'],
  ['Ben says the office hierarchy is normal because people above you have already proven themselves.', 'Ben dit que la hierarchie du bureau est normale parce que les personnes au-dessus de vous ont deja fait leurs preuves.'],
  ['Nora says the old waiting list is fair because the people who get in are the ones who really wanted it.', 'Nora dit que l ancienne liste d attente est juste parce que les personnes qui entrent sont celles qui le voulaient vraiment.'],
  ['Eli says the neighborhood gatekeeping is acceptable because the people who remain are the right fit.', 'Eli dit que le filtrage du quartier est acceptable parce que les personnes qui restent sont le bon profil.'],
  ['Pia says the elite sports tryout is fine because the athletes selected there are naturally the best.', 'Pia dit que la selection elite sportive est correcte parce que les athletes choisis sont naturellement les meilleurs.'],
  ['Theo says the old school discipline policy is good because the students who survive it must be tougher.', 'Theo dit que l ancienne politique disciplinaire scolaire est bonne parce que les eleves qui y survivent doivent etre plus coriaces.'],
  ['Sara says the expensive apartment screening is justified because good tenants will pass it.', 'Sara dit que le filtrage cher des appartements est justifie parce que les bons locataires le franchiront.'],
  ['Milo says the old hiring network is fine because the successful workers came through it.', 'Milo dit que l ancien reseau de recrutement est correct parce que les travailleurs reussis y sont passes.'],
  ['Iris says the political donor club is sensible because the people inside are the ones who matter.', 'Iris dit que le club des donateurs politiques est logique parce que les personnes a l interieur sont celles qui comptent.'],
  ['Jude says the strict club entrance rule is fair because people who get in must be worthy.', 'Jude dit que la regle d entree stricte du club est juste parce que les personnes qui entrent doivent etre dignes.'],
  ['Layla says the system that gives the richest buyers first pick is natural because they are the most serious customers.', 'Layla dit que le systeme qui donne le premier choix aux acheteurs les plus riches est naturel parce qu ils sont les clients les plus serieux.'],
  ['Finn says the school award system is fine because the winners are the ones who deserve recognition.', 'Finn dit que le systeme de recompenses scolaires est correct parce que les gagnants sont ceux qui meritent la reconnaissance.'],
  ['Hana says the board only listens to executives because executives are the smartest people in the room.', 'Hana dit que le conseil n ecoute que les dirigeants parce que les dirigeants sont les personnes les plus intelligentes de la salle.'],
  ['Ravi says the old neighborhood association is good because the families who stayed are the right kind.', 'Ravi dit que l ancienne association de quartier est bonne parce que les familles qui sont restees sont du bon type.'],
  ['Lena says the promotion process is fair because only real leaders rise to the top.', 'Lena dit que le processus de promotion est juste parce que seuls les vrais leaders montent en haut.'],
  ['Jon says the school club is better when it keeps new people out because the regulars know the culture.', 'Jon dit que le club scolaire est meilleur quand il tient les nouveaux a distance parce que les habitués connaissent la culture.'],
  ['Mara says the business district deserves extra police because rich areas are where responsible people live.', 'Mara dit que le quartier des affaires merite plus de police parce que les zones riches sont celles ou vivent les personnes responsables.'],
  ['Omar says the old exam gate should stay because the people who pass it are the ones who can handle pressure.', 'Omar dit que l ancien filtre d examen doit rester parce que les personnes qui le franchissent sont celles qui peuvent supporter la pression.'],
  ['Clara says the membership tier system is good because premium members are the serious ones.', 'Clara dit que le systeme de niveaux d abonnement est bon parce que les membres premium sont les personnes serieuses.'],
  ['Ezra says the factory shift system is right because the people at the top know what workers need.', 'Ezra dit que le systeme de postes de l usine est correct parce que les personnes au sommet savent ce dont les travailleurs ont besoin.'],
  ['Fiona says the company keeps the same executive circle because they are the proven winners.', 'Fiona dit que l entreprise garde le meme cercle de dirigeants parce qu ils sont les gagnants prouvés.'],
  ['Gabe says the old apartment rules are acceptable because tenants who dislike them can leave.', 'Gabe dit que les anciennes regles de l appartement sont acceptables parce que les locataires qui ne les aiment pas peuvent partir.'],
  ['Helena says the scholarship committee is fair because the students chosen are the best representatives.', 'Helena dit que le comité des bourses est juste parce que les eleves choisis sont les meilleurs representants.'],
  ['Ivo says the hiring test is smart because only capable candidates make it through.', 'Ivo dit que le test de recrutement est intelligent parce que seuls les candidats capables le franchissent.'],
  ['Jenna says the elite art show is justified because the artists featured are the ones worth seeing.', 'Jenna dit que le salon d art elite est justifie parce que les artistes presentes sont ceux qu il vaut la peine de voir.'],
  ['Khalil says the seniority system is good because the people who lasted longest must deserve it.', 'Khalil dit que le systeme d anciennete est bon parce que les personnes qui ont dure le plus longtemps doivent le meriter.'],
  ['Luna says the old house rules are fine because the families who stayed are the loyal ones.', 'Luna dit que les anciennes regles de la maison sont correctes parce que les familles qui sont restees sont les fideles.'],
  ['Mason says the system that keeps out risky applicants protects quality.', 'Mason dit que le systeme qui tient a l ecart les candidats risqués protege la qualite.'],
  ['Nadia says the exclusive internship is fair because only the most serious students survive the process.', 'Nadia dit que le stage exclusif est juste parce que seuls les etudiants les plus serieux survivent au processus.'],
  ['Oli says the old campus club rules are sensible because the members who remain are the good fit.', 'Oli dit que les anciennes regles du club du campus sont sensées parce que les membres qui restent sont le bon choix.'],
  ['Parker says the town always funds the wealthy district because it must be the most important part of town.', 'Parker dit que la ville finance toujours le quartier riche parce que ce doit etre la partie la plus importante de la ville.'],
  ['Quinn says the special access lane is fine because it is reserved for people who are already important.', 'Quinn dit que la voie d acces speciale est correcte parce qu elle est reservee aux personnes deja importantes.'],
  ['Rosa says the system is stable because the people at the top keep proving they belong there.', 'Rosa dit que le systeme est stable parce que les personnes au sommet continuent de prouver qu elles y appartiennent.'],
];

const OPTIONS_EN = ['System Justification', 'Status Quo Bias', 'Just-World Hypothesis', 'Appeal to Tradition'];
const OPTIONS_FR = ['Justification du système', 'Biais du statu quo', 'Hypothèse du monde juste', 'Appel à la tradition'];

function rotate(options: string[], correctIndex: number): string[] {
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
      id: 42201 + index,
      level: 4,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Justification du système' : 'System Justification',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotate(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'On defend un systeme existant comme s il etait naturellement juste ou merite.'
        : 'An existing system is defended as if it were naturally fair or deserved.',
      detailedExplanationBeginner: isFrench
        ? 'Le systeme n est pas correct juste parce qu il existe.'
        : 'A system is not correct just because it exists.',
      detailedExplanationIntermediate: isFrench
        ? "La justification du systeme apparait quand on traite une hierarchie, une regle ou une inegalite comme inevitables ou meritéees simplement parce qu elles sont deja en place. Cela confond la presence d un systeme avec sa legitimite."
        : 'System justification appears when a hierarchy, rule, or inequality is treated as inevitable or deserved simply because it is already in place. It confuses the existence of a system with its legitimacy.',
      detailedExplanationExpert: isFrench
        ? "Le mecanisme psychologique principal est la rationalisation de l ordre existant: on reinterprete les gagnants comme plus meritant, les perdants comme moins dignes, et les inconvenients comme naturels. Cette logique protege le sentiment de stabilite, mais elle masque les rapports de pouvoir et les biais de selection."
        : 'The main psychological mechanism is rationalizing the existing order: winners are recast as more deserving, losers as less worthy, and inconveniences as natural. That logic protects a sense of stability, but it hides power relations and selection effects.',
      questionFormat: 'standard',
    };
  });
}

export const SYSTEM_JUSTIFICATION_EXPANSION_EN: Question[] = createQuestions('en');
export const SYSTEM_JUSTIFICATION_EXPANSION_FR: Question[] = createQuestions('fr');

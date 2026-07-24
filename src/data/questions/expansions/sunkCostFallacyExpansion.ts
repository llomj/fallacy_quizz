import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya keeps watching a boring movie because she already paid for the ticket.', 'Maya continue de regarder un film ennuyeux parce qu elle a deja paye le billet.'],
  ['Ben stays in a miserable queue for a theme park ride because he already waited forty minutes.', 'Ben reste dans une file miserable pour une attraction parce qu il a deja attendu quarante minutes.'],
  ['Priya keeps playing a bad video game level because she already bought the full version.', 'Priya continue a jouer a un mauvais niveau de jeu video parce qu elle a deja achete la version complete.'],
  ['Noah keeps the broken printer alive because he already spent money on ink and paper.', 'Noah fait survivre l imprimante casse parce qu il a deja depense de l argent en encre et en papier.'],
  ['Lina keeps studying from a terrible course because she already paid for the certification.', 'Lina continue a etudier un mauvais cours parce qu elle a deja paye la certification.'],
  ['Theo goes back to a restaurant he dislikes because the meal was expensive and he wants to "get his money worth."', 'Theo retourne dans un restaurant qu il deteste parce que le repas etait cher et qu il veut "rentabiliser son argent".'],
  ['Ava keeps fixing an ugly shelf because she already spent the whole afternoon building it.', 'Ava continue de reparer une etagere laide parce qu elle a deja passe tout l apres-midi a la monter.'],
  ['Omar stays with a bad mobile plan because he already signed the contract.', 'Omar garde un mauvais forfait mobile parce qu il a deja signe le contrat.'],
  ['Rina keeps reading a dull book because she is "almost done" and has already invested the time.', 'Rina continue de lire un livre ennuyeux parce qu elle est "presque au bout" et a deja investi du temps.'],
  ['Jules keeps listening to a terrible podcast because he has already heard half of it.', 'Jules continue d ecouter un mauvais podcast parce qu il en a deja entendu la moitie.'],
  ['Mina stays on the sinking school project because the group already made the slides.', 'Mina reste sur le projet scolaire en train de couler parce que le groupe a deja fait les diapositives.'],
  ['Eli keeps attending a club he dislikes because he already paid the membership fee.', 'Eli continue d aller a un club qu il n aime pas parce qu il a deja paye la cotisation.'],
  ['Hugo keeps using a slow app because he already spent time learning it.', 'Hugo continue d utiliser une application lente parce qu il a deja passe du temps a l apprendre.'],
  ['Lea keeps driving a car with constant repairs because she already put money into it.', 'Lea continue de conduire une voiture qui demande toujours des reparations parce qu elle y a deja mis de l argent.'],
  ['Grant keeps trying to save a failing cake because he already bought the ingredients.', 'Grant continue d essayer de sauver un gateau rate parce qu il a deja achete les ingredients.'],
  ['Tia keeps a bad haircut for weeks because she already paid the stylist.', 'Tia garde une mauvaise coupe de cheveux pendant des semaines parce qu elle a deja paye le coiffeur.'],
  ['Nora keeps subscribing to a useless newsletter because she already paid for the year.', 'Nora continue de s abonner a une newsletter inutile parce qu elle a deja paye pour l annee.'],
  ['Sam keeps assembling a wobbly desk because the parts were expensive and scattered all over the room.', 'Sam continue d assembler un bureau branlant parce que les pieces etaient cheres et eparpillees dans toute la piece.'],
  ['Jade stays in a bad movie theater seat because she already bought the popcorn and drink.', 'Jade reste dans un mauvais siege de cinema parce qu elle a deja achete le popcorn et la boisson.'],
  ['Owen keeps attending piano lessons he hates because he already paid for ten sessions.', 'Owen continue d aller a des cours de piano qu il deteste parce qu il a deja paye dix seances.'],
  ['Ari keeps the broken headphones because he already spent a lot on them last month.', 'Ari garde les ecouteurs casses parce qu il y a deja depense beaucoup le mois dernier.'],
  ['Pia keeps writing a bad essay draft because she already spent all night on it.', 'Pia continue a ecrire un mauvais brouillon parce qu elle y a deja passe toute la nuit.'],
  ['Ben keeps farming a useless game quest because he already invested hours in it.', 'Ben continue une quete inutile dans un jeu parce qu il y a deja investi des heures.'],
  ['Zoe keeps the crowded gym membership because she already paid the registration fee.', 'Zoe garde son abonnement a une salle bondée parce qu elle a deja paye les frais d inscription.'],
  ['Ravi keeps a failing side project because he already built half the website.', 'Ravi garde un projet secondaire en echec parce qu il a deja construit la moitie du site.'],
  ['Sofia keeps going to a bad class because she already bought the textbook.', 'Sofia continue d aller a un mauvais cours parce qu elle a deja acheté le manuel.'],
  ['Lara keeps waiting for a delayed flight because she already got through security and does not want to "waste" the trip.', 'Lara continue d attendre un vol en retard parce qu elle a deja passe la securite et ne veut pas "gaspiller" le trajet.'],
  ['Cole keeps using a terrible mouse because he already customized the settings around it.', 'Cole continue d utiliser une souris terrible parce qu il a deja adapte ses reglages autour d elle.'],
  ['Maya keeps attending an unhelpful workshop because the fee was nonrefundable.', 'Maya continue d assister a un atelier inutile parce que les frais etaient non remboursables.'],
  ['Ezra keeps a dead-end job because he already spent years there and wants to make it count.', 'Ezra garde un emploi sans avenir parce qu il y a deja passe des annees et veut que cela compte.'],
  ['Nina keeps finishing a terrible meal because she already ordered it and paid extra for the sides.', 'Nina continue de finir un repas terrible parce qu elle l a deja commande et a paye un supplement pour les accompagnements.'],
  ['Hana keeps investing in a failing hobby store project because she already stocked the shelves.', 'Hana continue d investir dans un projet de boutique de loisir en echec parce qu elle a deja rempli les etageres.'],
  ['Dylan keeps using a cracked phone case because he already decorated it.', 'Dylan continue d utiliser une coque de telephone fissuree parce qu il l a deja decoree.'],
  ['Penny keeps the bad haircut appointment style because she already told everyone about the salon.', 'Penny garde le style de la mauvaise coupe parce qu elle a deja parle du salon a tout le monde.'],
  ['Kira keeps a failing garden bed because she already bought all the seeds.', 'Kira garde un parterre de jardin en echec parce qu elle a deja achete toutes les graines.'],
  ['Finn keeps watching a long tutorial because he already made it to part six.', 'Finn continue de regarder un long tutoriel parce qu il est deja arrive a la sixieme partie.'],
  ['Juno keeps a broken coffee maker because she already spent money on repairs once.', 'Juno garde une machine a cafe cassee parce qu elle a deja depense de l argent pour des reparations une fois.'],
  ['Olivia keeps helping with a bad group trip because she already took the day off work.', 'Olivia continue d aider pour un mauvais voyage de groupe parce qu elle a deja pris sa journee de congé.'],
  ['Mila keeps a dull tool because she already sharpened it twice.', 'Mila garde un outil emousse parce qu elle l a deja aiguise deux fois.'],
  ['Leo keeps using a weak charger because he already bought two spare cables.', 'Leo continue d utiliser un chargeur faible parce qu il a deja achete deux cables de rechange.'],
  ['Tara keeps going to a disappointing class because she already made the commute three times.', 'Tara continue d aller a un cours decevant parce qu elle a deja fait le trajet trois fois.'],
  ['Hugo keeps a bad office chair because he already tried a cushion for it.', 'Hugo garde une mauvaise chaise de bureau parce qu il lui a deja essaye un coussin.'],
  ['Lea keeps reading a bad sequel because she enjoyed the first book and already bought the second.', 'Lea continue de lire une mauvaise suite parce qu elle a aime le premier livre et a deja achete le second.'],
  ['Max keeps attending a boring lecture because he already sat through the first half.', 'Max continue d assister a une conference ennuyeuse parce qu il a deja supporte la premiere moitie.'],
  ['Yara keeps trying to repair a cheap blender because she already replaced one part.', 'Yara continue d essayer de reparer un blender bon marche parce qu elle a deja remplace une piece.'],
  ['Dan keeps paying for a gym he never visits because cancelling feels like admitting defeat.', 'Dan continue de payer une salle de sport qu il ne frequente jamais parce qu annuler lui donne l impression d admettre un echec.'],
  ['Rosa keeps a bad haircut for the entire month because she already told her friends she liked it.', 'Rosa garde une mauvaise coupe de cheveux tout le mois parce qu elle a deja dit a ses amis qu elle l aimait.'],
  ['Alicia keeps polishing a broken idea for a school project because she already wrote the introduction.', 'Alicia continue de peaufiner une idee casse pour un projet scolaire parce qu elle a deja ecrit l introduction.'],
  ['Owen keeps a useless subscription because he already used the trial and feels committed.', 'Owen garde un abonnement inutile parce qu il a deja utilise l essai gratuit et se sent engage.'],
  ['Maya keeps fixing the old laptop because she already bought a new charger and hard drive for it.', 'Maya continue de reparer l ancien ordinateur portable parce qu elle lui a deja achete un nouveau chargeur et un disque dur.'],
];

const OPTIONS_EN = ['Sunk Cost Fallacy', 'Escalation of Commitment', 'Status Quo Bias', 'Post-Purchase Rationalization'];
const OPTIONS_FR = ['Sophisme du coût irrécupérable', "L'escalade irrationnelle", 'Biais du statu quo', 'Rationalisation après achat'];

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
      id: 41901 + index,
      level: 3,
      persona_stage: PersonaStage.OCTOPUS,
      concept: isFrench ? 'Sophisme du coût irrécupérable' : 'Sunk Cost Fallacy',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'La personne continue parce qu elle a deja investi du temps, de l argent ou des efforts, pas parce que la suite est bonne.'
        : 'The person keeps going because they already invested time, money, or effort, not because the option is still good.',
      detailedExplanationBeginner: isFrench
        ? 'Un achat ou un effort passe ne rend pas un mauvais choix meilleur.'
        : 'Past spending or effort does not make a bad choice better.',
      detailedExplanationIntermediate: isFrench
        ? 'Le sophisme du cout irrecuperable pousse a persister pour ne pas "perdre" ce qui a deja ete depense.'
        : 'The sunk cost fallacy pushes people to continue so they do not feel like they "lost" what they already spent.',
      detailedExplanationExpert: isFrench
        ? "Ce biais confond cout deja perdu et valeur future. Une fois l argent, le temps ou l energie engagés, les gens continuent souvent pour justifier la decision precedente, meme si l option est devenue mauvaise. La bonne question n est pas ce qui a deja ete investi, mais ce qui est le mieux maintenant."
        : 'This bias confuses already-lost costs with future value. Once money, time, or energy has been committed, people often continue to justify the earlier decision even if the option has turned bad. The right question is not what has already been invested, but what is best now.',
      questionFormat: 'standard',
    };
  });
}

export const SUNK_COST_FALLACY_EXPANSION_EN: Question[] = createQuestions('en');
export const SUNK_COST_FALLACY_EXPANSION_FR: Question[] = createQuestions('fr');

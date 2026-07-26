import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya rejects the new bike lane because it is not perfectly safe for every rider, even though it would still reduce injuries.', 'Maya rejette la nouvelle piste cyclable parce qu elle n est pas parfaitement sûre pour tous les cyclistes, même si elle réduirait quand même les blessures.'],
  ['Leo says the town should not add more buses unless the service is flawless from day one.', 'Leo dit que la ville ne devrait pas ajouter plus de bus sauf si le service est impeccable dès le premier jour.'],
  ['Priya dismisses the budget app because it does not solve every money mistake at once.', 'Priya rejette l application de budget parce qu elle ne corrige pas d un coup toutes les erreurs d argent.'],
  ['Omar says the school meal plan is worthless because it is not the healthiest possible menu in the world.', 'Omar dit que le menu scolaire ne vaut rien parce qu il n est pas le menu le plus sain possible au monde.'],
  ['Rina refuses a new safety rule because it will not eliminate every accident forever.', 'Rina refuse une nouvelle règle de sécurité parce qu elle n éliminera pas tous les accidents pour toujours.'],
  ['Ben says the grammar checker is bad because it misses some mistakes and therefore should not be used at all.', 'Ben dit que le correcteur grammatical est mauvais parce qu il manque certaines fautes et qu on ne devrait donc pas l utiliser du tout.'],
  ['Zoe rejects the new clinic because it cannot guarantee perfect treatment for every patient.', 'Zoé rejette la nouvelle clinique parce qu elle ne peut pas garantir un traitement parfait pour chaque patient.'],
  ['Kai says the traffic redesign is not worth it unless it removes every possible delay.', 'Kai dit que la refonte de la circulation ne vaut pas le coup sauf si elle supprime tout retard possible.'],
  ['Nora calls the recycling program useless because some trash will still end up in landfills.', 'Nora dit que le programme de recyclage est inutile parce qu une partie des déchets finira quand même en décharge.'],
  ['Eli says the new homework app is pointless because it does not make every student brilliant.', 'Eli dit que la nouvelle application de devoirs ne sert à rien parce qu elle ne rend pas chaque élève brillant.'],
  ['Lina rejects the garden project because it will not create a perfect community overnight.', 'Lina rejette le projet de jardin parce qu il ne créera pas une communauté parfaite du jour au lendemain.'],
  ['Grant says the cheap train upgrade is not worth it because it is not a luxury experience.', 'Grant dit que la petite amélioration du train ne vaut pas le coup parce qu elle n est pas une experience de luxe.'],
  ['Tia refuses the new password manager because it still needs a little user effort.', 'Tia refuse le nouveau gestionnaire de mots de passe parce qu il demande encore un petit effort a l utilisateur.'],
  ['Noah says the food label system is bad because it does not give a perfect answer about nutrition.', 'Noah dit que le systeme d étiquetage alimentaire est mauvais parce qu il ne donne pas une réponse parfaite sur la nutrition.'],
  ['Mia dismisses the park cleanup because it will not make the whole city spotless forever.', 'Mia rejette le nettoyage du parc parce qu il ne rendra pas toute la ville impeccable pour toujours.'],
  ['Jules says the language course is worthless because it does not make beginners fluent in one month.', 'Jules dit que le cours de langue ne vaut rien parce qu il ne rend pas les débutants courants en un mois.'],
  ['Ava says the new seating policy is bad because some people may still be uncomfortable.', 'Ava dit que la nouvelle politique de sièges est mauvaise parce que certaines personnes pourraient encore être mal a l aise.'],
  ['Finn rejects the software patch because it does not fix every bug in the codebase.', 'Finn rejette le correctif logiciel parce qu il ne corrige pas tous les bugs de la base de code.'],
  ['Mina says the app recommendation is useless because it is not the single best option in existence.', 'Mina dit que la recommandation de l application est inutile parce qu elle n est pas la meilleure option possible.'],
  ['Theo says the child-safety gate is pointless because it is not impossible to climb over.', 'Theo dit que la barriere de sécurité pour enfant ne sert a rien parce qu elle n est pas impossible a escalader.'],
  ['Juno dismisses the new exercise routine because it will not make everyone perfectly fit.', 'Juno rejette la nouvelle routine d exercice parce qu elle ne rendra pas tout le monde parfaitement en forme.'],
  ['Iris says the meal-prep service is useless because it still requires a little planning.', 'Iris dit que le service de repas prepares est inutile parce qu il demande encore un peu de planification.'],
  ['Cole says the budget car is not worth buying because it does not have every premium feature.', 'Cole dit que la voiture économique ne vaut pas l achat parce qu elle n a pas toutes les options premium.'],
  ['Riley says the new meeting rule is bad because it will not eliminate every annoying meeting.', 'Riley dit que la nouvelle règle de réunion est mauvaise parce qu elle n éliminera pas toutes les reunions agaçantes.'],
  ['Pia refuses the city app because it cannot solve parking, transit, and noise all at once.', 'Pia refuse l application de la ville parce qu elle ne peut pas résoudre en meme temps le stationnement, le transport et le bruit.'],
  ['Hugo says the reading program is useless because some children may still need extra help.', 'Hugo dit que le programme de lecture est inutile parce que certains enfants auront peut-etre encore besoin d aide supplémentaire.'],
  ['Sam says the shopping cart filter is not worth using because it does not catch every bad product.', 'Sam dit que le filtre du panier d achat ne vaut pas le coup parce qu il ne bloque pas tous les mauvais produits.'],
  ['Jade says the neighborhood watch is worthless because it cannot prevent every theft.', 'Jade dit que la surveillance de quartier ne vaut rien parce qu elle ne peut pas empêcher tous les vols.'],
  ['Owen rejects the kitchen timer because it will not make every meal perfect.', 'Owen rejette le minuteur de cuisine parce qu il ne rendra pas chaque repas parfait.'],
  ['Lea says the school bus upgrade is bad because the buses are still not luxury coaches.', 'Lea dit que la modernisation du bus scolaire est mauvaise parce que les bus ne sont toujours pas des autocars de luxe.'],
  ['Maya says the allergy filter is useless because it does not remove every speck of dust from the air.', 'Maya dit que le filtre anti-allergies est inutile parce qu il n enlève pas chaque particule de poussière de l air.'],
  ['Ben says the refund policy is unfair because it does not give every customer everything they want.', 'Ben dit que la politique de remboursement est injuste parce qu elle ne donne pas a chaque client tout ce qu il veut.'],
  ['Ava says the new alert system is pointless because false alarms still happen sometimes.', 'Ava dit que le nouveau systeme d alerte est inutile parce que de fausses alertes arrivent encore parfois.'],
  ['Omar says the city map app is bad because it is not a complete cure for being lost.', 'Omar dit que l application de carte de la ville est mauvaise parce qu elle n est pas un remede complet au fait d être perdu.'],
  ['Nina says the cheaper doctor visit is not enough because it will not make health care perfect.', 'Nina dit que la consultation moins chere ne suffit pas parce qu elle ne rendra pas les soins parfaits.'],
  ['Eli says the new bus shelter is worthless because it cannot stop rain from ever existing.', 'Eli dit que le nouvel abri de bus ne vaut rien parce qu il ne peut pas empecher la pluie d exister pour toujours.'],
  ['Lina says the app update is not worth it because it still has one small flaw.', 'Lina dit que la mise a jour de l application ne vaut pas le coup parce qu elle a encore un petit defaut.'],
  ['Grant says the city parking app is useless because it is not as good as having no parking problems at all.', 'Grant dit que l application de stationnement de la ville est inutile parce qu elle n est pas aussi bien que de n avoir aucun probleme de stationnement du tout.'],
  ['Tia says the teacher feedback form is bad because it does not guarantee a perfect class.', 'Tia dit que le formulaire de retour des élèves est mauvais parce qu il ne garantit pas une classe parfaite.'],
  ['Noah says the food delivery service should be rejected because it cannot promise zero mistakes.', 'Noah dit que le service de livraison doit etre rejete parce qu il ne peut pas promettre zéro erreur.'],
  ['Mia says the vaccine reminder app is worthless because it cannot prevent every illness forever.', 'Mia dit que l application de rappel de vaccin ne vaut rien parce qu elle ne peut pas empecher toutes les maladies pour toujours.'],
  ['Jules says the budget spreadsheet is not good because it still takes some effort to use.', 'Jules dit que le tableau budgetaire n est pas bon parce qu il demande encore un peu d effort a utiliser.'],
  ['Iris says the new crossing signal is not enough because it cannot make every road perfectly safe.', 'Iris dit que le nouveau signal de passage n est pas suffisant parce qu il ne peut pas rendre chaque route parfaitement sûre.'],
  ['Cole says the class notes system is bad because it will not make learning effortless.', 'Cole dit que le systeme de notes du cours est mauvais parce qu il ne rendra pas l apprentissage sans effort.'],
  ['Riley says the city noise rule is useless because it does not eliminate all loud sounds.', 'Riley dit que la règle municipale sur le bruit est inutile parce qu elle n élimine pas tous les bruits forts.'],
  ['Pia says the meal delivery app is bad because it is not the ideal solution for every household.', 'Pia dit que l application de livraison de repas est mauvaise parce qu elle n est pas la solution ideale pour chaque foyer.'],
  ['Hugo says the class schedule change is pointless because it does not fix every time conflict.', 'Hugo dit que le changement d emploi du temps ne sert à rien parce qu il ne règle pas tous les conflits d horaires.'],
  ['Sam says the city bench program is not worth it because it does not solve loneliness completely.', 'Sam dit que le programme de bancs municipaux ne vaut pas le coup parce qu il ne règle pas complètement la solitude.'],
  ['Jade says the water-saving showerhead is bad because it does not create a perfect water supply.', 'Jade dit que le pommeau economiseur d eau est mauvais parce qu il ne crée pas un approvisionnement en eau parfait.'],
  ['Owen says the new tutoring app is useless because it cannot guarantee straight A grades.', 'Owen dit que la nouvelle application de tutorat est inutile parce qu elle ne peut pas garantir des notes A partout.'],
  ['Lea says the neighborhood clean-up is not enough because trash could come back later.', 'Lea dit que le nettoyage du quartier ne suffit pas parce que des déchets peuvent revenir plus tard.'],
  ['Maya says the new crosswalk is worthless because it does not make pedestrians invincible.', 'Maya dit que le nouveau passage pieton ne vaut rien parce qu il ne rend pas les pietons invincibles.'],
  ['Ben says the recycling bins are pointless because some trash will still end up mixed in.', 'Ben dit que les bacs de recyclage ne servent à rien parce que certains déchets finiront quand meme mélangés.'],
  ['Priya says the bus lane is bad because cars can still make mistakes nearby.', 'Priya dit que la voie de bus est mauvaise parce que les voitures peuvent encore faire des erreurs a proximité.'],
  ['Noah says the language app should be rejected because it cannot make anyone fluent instantly.', 'Noah dit que l application de langue doit etre rejetee parce qu elle ne peut rendre personne fluent instantanément.'],
  ['Lina says the air filter is useless because it does not remove every dust particle.', 'Lina dit que le filtre à air est inutile parce qu il ne retire pas chaque particule de poussière.'],
  ['Theo says the noise rule is not worth it because it will not silence the whole city.', 'Theo dit que la regle sur le bruit ne vaut pas le coup parce qu elle ne fera pas taire toute la ville.'],
  ['Ava says the school lunch improvement is bad because it does not create the healthiest menu on Earth.', 'Ava dit que l amelioration du dejeuner scolaire est mauvaise parce qu elle ne crée pas le menu le plus sain de la Terre.'],
  ['Omar says the password manager should be rejected because it still leaves a little work for the user.', 'Omar dit que le gestionnaire de mots de passe doit etre rejete parce qu il laisse encore un petit effort a l utilisateur.'],
  ['Rina says the clinic upgrade is useless because it cannot guarantee zero mistakes.', 'Rina dit que l amélioration de la clinique est inutile parce qu elle ne peut pas garantir zéro erreur.'],
  ['Jules says the bike lane is not worth it because some drivers will still be careless.', 'Jules dit que la piste cyclable ne vaut pas le coup parce que certains conducteurs resteront imprudents.'],
  ['Mina says the budget app is bad because it will not solve every money problem at once.', 'Mina dit que l application budget est mauvaise parce qu elle ne reglera pas tous les problemes d argent d un coup.'],
  ['Eli says the new safety gate is pointless because someone could still climb over it.', 'Eli dit que la nouvelle barriere de securite ne sert a rien parce que quelqu un pourrait quand meme l escalader.'],
  ['Hugo says the food label reform is not enough because it will not make nutrition perfectly clear.', 'Hugo dit que la reforme de l etiquette alimentaire ne suffit pas parce qu elle ne rendra pas la nutrition parfaitement claire.'],
  ['Lea says the park cleanup is useless because litter could return next week.', 'Lea dit que le nettoyage du parc est inutile parce que les déchets pourraient revenir la semaine prochaine.'],
  ['Grant says the report template is bad because it does not eliminate every formatting mistake.', 'Grant dit que le modele de rapport est mauvais parce qu il n elimine pas chaque erreur de mise en forme.'],
  ['Tia says the learning app is worthless because it will not make every student a genius.', 'Tia dit que l application d apprentissage ne vaut rien parce qu elle ne fera pas de chaque eleve un genie.'],
  ['Nora says the traffic redesign is not worth it because delays could still happen.', 'Nora dit que la refonte de la circulation ne vaut pas le coup parce que des retards pourraient encore arriver.'],
  ['Sam says the new recycling rule is bad because it does not make people perfect about waste.', 'Sam dit que la nouvelle regle de recyclage est mauvaise parce qu elle ne rend pas les gens parfaits sur les déchets.'],
  ['Jade says the homework helper is useless because it still requires the student to think.', 'Jade dit que l aide aux devoirs est inutile parce qu elle demande quand meme a l eleve de reflechir.'],
  ['Owen says the neighborhood watch is pointless because it cannot prevent every theft.', 'Owen dit que la surveillance de quartier ne sert a rien parce qu elle ne peut pas empecher chaque vol.'],
  ['Ari says the small road repair should be rejected because it does not fix the whole highway.', 'Ari dit que la petite reparation de route doit etre rejetee parce qu elle ne reparation pas toute l autoroute.'],
  ['Pia says the meal delivery service is bad because it cannot make dinner perfect every time.', 'Pia dit que le service de livraison de repas est mauvais parce qu il ne peut pas rendre le dîner parfait à chaque fois.'],
  ['Ben says the school reading program is worthless because some kids still need help.', 'Ben dit que le programme de lecture scolaire ne vaut rien parce que certains enfants ont encore besoin d aide.'],
  ['Zoe says the app update is bad because one bug remains.', 'Zoé dit que la mise a jour de l application est mauvaise parce qu un bogue subsiste.'],
  ['Ravi says the park bench plan is useless because it will not solve loneliness completely.', 'Ravi dit que le projet de banc de parc est inutile parce qu il ne resoudra pas completement la solitude.'],
  ['Sofia says the filter is bad because it is not perfect at catching everything.', 'Sofia dit que le filtre est mauvais parce qu il n est pas parfait pour tout attraper.'],
  ['Lara says the new bus shelter is not worth it because rain can still happen.', 'Lara dit que le nouvel abri de bus ne vaut pas le coup parce qu il peut encore pleuvoir.'],
  ['Cole says the class notes system is useless because it does not replace the teacher.', 'Cole dit que le systeme de notes de cours est inutile parce qu il ne remplace pas le professeur.'],
  ['Maya says the air conditioner upgrade is bad because it will not make the room perfect.', 'Maya dit que la mise à niveau du climatiseur est mauvaise parce qu elle ne rendra pas la pièce parfaite.'],
  ['Ezra says the clinic reminder app is pointless because people can still forget.', 'Ezra dit que l application de rappel de la clinique ne sert a rien parce que les gens peuvent encore oublier.'],
  ['Nina says the school crossing guard is useless because some drivers still ignore rules.', 'Nina dit que le surveillant de passage scolaire est inutile parce que certains conducteurs ignorent encore les regles.'],
  ['Hana says the budget spreadsheet is bad because it cannot solve every spending mistake.', 'Hana dit que le tableau budget est mauvais parce qu il ne peut pas corriger chaque erreur de depense.'],
  ['Dylan says the new hallway lights are not worth it because a bulb could still fail.', 'Dylan dit que les nouvelles lumières du couloir ne valent pas le coup parce qu une ampoule pourrait encore tomber en panne.'],
  ['Penny says the study planner is useless because it does not make homework disappear.', 'Penny dit que le planificateur d etude est inutile parce qu il ne fait pas disparaitre les devoirs.'],
  ['Kira says the city bench plan is bad because it does not eliminate all loneliness.', 'Kira dit que le plan de bancs municipaux est mauvais parce qu il n élimine pas toute la solitude.'],
  ['Finn says the new kitchen fan is pointless because cooking will still make some smell.', 'Finn dit que le nouveau ventilateur de cuisine ne sert a rien parce que la cuisine fera quand meme un peu d odeur.'],
  ['Juno says the job training is bad because it does not guarantee a perfect first week.', 'Juno dit que la formation professionnelle est mauvaise parce qu elle ne garantit pas une premiere semaine parfaite.'],
  ['Olivia says the city app is useless because it cannot solve every public service problem.', 'Olivia dit que l application de la ville est inutile parce qu elle ne peut pas resoudre chaque probleme de service public.'],
  ['Mila says the calendar reminder is bad because it cannot prevent all mistakes.', 'Mila dit que le rappel de calendrier est mauvais parce qu il ne peut pas empecher toutes les erreurs.'],
  ['Leo says the school safety campaign is not enough because accidents might still happen.', 'Leo dit que la campagne de securite scolaire ne suffit pas parce que des accidents pourraient encore arriver.'],
  ['Tara says the office quiet policy is useless because one loud call can still happen.', 'Tara dit que la politique de calme au bureau est inutile parce qu un appel bruyant peut encore arriver.'],
  ['Hugo says the hand sanitizer station is bad because it does not make anyone perfectly clean.', 'Hugo dit que la station de gel hydroalcoolique est mauvaise parce qu elle ne rend personne parfaitement propre.'],
  ['Lea says the school garden is not worth it because weeds can grow back.', 'Lea dit que le jardin scolaire ne vaut pas le coup parce que les mauvaises herbes peuvent repousser.'],
  ['Max says the customer feedback form is useless because it will not fix everything customers dislike.', 'Max dit que le formulaire de retour client est inutile parce qu il ne corrigera pas tout ce que les clients n aiment pas.'],
  ['Yara says the new crossing sign is bad because drivers may still make mistakes.', 'Yara dit que le nouveau panneau de passage est mauvais parce que les conducteurs peuvent encore faire des erreurs.'],
  ['Dan says the homework app is pointless because it cannot make assignments vanish.', 'Dan dit que l application de devoirs est inutile parce qu elle ne peut pas faire disparaitre les devoirs.'],
  ['Tori says the bike share dock is bad because it will not make riding risk free.', 'Tori dit que la borne de vélos en libre service est mauvaise parce qu elle ne rendra pas le vélo sans risque.'],
  ['Emil says the class reminder poster is useless because some students may still forget.', 'Emil dit que l affiche de rappel en classe est inutile parce que certains élèves pourraient encore oublier.'],
  ['Nadia says the city shade tree plan is not worth it because summer heat will still exist.', 'Nadia dit que le plan d arbres d ombre de la ville ne vaut pas le coup parce que la chaleur d été existera toujours.'],
];

const OPTIONS_EN = ['Nirvana Fallacy', 'Perfect Solution Fallacy', 'Moving the Goalposts', 'Appeal to Nature'];
const OPTIONS_FR = ['Sophisme du nirvana', 'Sophisme de la solution parfaite', 'Déplacer les buts', 'Appel à la nature'];

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
    const isFrench = language === 'fr';
    const correctIndex = index % 4;
    return {
      id: 43401 + index,
      level: 7,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Sophisme du nirvana' : 'Nirvana Fallacy',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'La solution est rejetee parce qu elle n est pas parfaite, meme si elle reste meilleure que l alternative.'
        : 'The solution is rejected because it is not perfect, even though it is still better than the alternative.',
      detailedExplanationBeginner: isFrench
        ? 'Imparfait ne veut pas dire inutile.'
        : 'Imperfect does not mean useless.',
      detailedExplanationIntermediate: isFrench
        ? 'Le sophisme du nirvana compare une vraie solution a une version ideale impossible au lieu de la comparer a l etat actuel.'
        : 'The Nirvana Fallacy compares a real solution to an impossible ideal instead of to the current situation.',
      detailedExplanationExpert: isFrench
        ? 'Cette erreur consiste a rejeter une option utile parce qu elle ne supprime pas tout probleme. Le bon test n est pas "est-ce parfait ?", mais "est-ce mieux que ce que nous avons deja ?". En pratique, beaucoup de politiques, d outils et de regles reduisent vraiment le dommage meme sans eliminer tous les risques.'
        : 'This error rejects a useful option because it does not eliminate every problem. The right test is not "is it perfect?", but "is it better than what we already have?" In practice, many policies, tools, and rules do reduce harm even when they do not remove every risk.',
      questionFormat: 'standard',
    };
  });
}

export const NIRVANA_FALLACY_EXPANSION_EN: Question[] = createQuestions('en');
export const NIRVANA_FALLACY_EXPANSION_FR: Question[] = createQuestions('fr');

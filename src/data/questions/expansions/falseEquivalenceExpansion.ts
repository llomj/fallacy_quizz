import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Megan said forgetting one meeting is the same as missing a whole work shift, as if the impact were identical at the office after lunch on Monday in the meeting room with the client.', "Megan a dit qu'oublier une reunion est la meme chose que manquer tout un quart de travail, comme si l'impact etait identique au bureau apres le déjeuner du lundi dans la salle de reunion avec le client."],
  ['Owen compared being late to class with failing every exam, as if the two problems were equal on a report card from school at the end of term in June after finals.', "Owen a compare arriver en retard en cours avec echouer a tous les examens, comme si les deux problemes etaient equivalentes sur un bulletin de l ecole a la fin du trimestre en juin apres les examens finaux."],
  ['Rita said a rude email is the same as a threat, even though one is far less severe.', "Rita a dit qu'un e-mail grossier est la meme chose qu'une menace, meme si l'un est bien moins grave."],
  ['Ben treated a typo in a report as equal to lying in the report.', "Ben a traite une faute de frappe dans un rapport comme l'equivalent de mentir dans le rapport."],
  ['Ava said buying a snack is the same as being irresponsible with money.', "Ava a dit qu'acheter un snack etait la meme chose qu'etre irresponsable avec son argent."],
  ['Leo compared a small delay on the bus to an hour-long traffic jam as if they were identical.', "Leo a compare un petit retard de bus a un embouteillage d'une heure comme si c'etait identique."],
  ['Nina said a bad haircut is the same as being ugly.', "Nina a dit qu'une mauvaise coupe de cheveux etait la meme chose qu'etre laid."],
  ['Priya said disagreeing with a policy is the same as attacking the person who made it.', "Priya a dit qu'etre en desaccord avec une politique etait la meme chose qu'attaquer la personne qui l'a creee."],
  ['Milo treated a messy desk and a failed project as equal evidence of laziness.', "Milo a traite un bureau en desordre et un projet echoue comme des preuves equivalentes de paresse."],
  ['Lina said a awkward first date is the same as a terrible relationship.', "Lina a dit qu'un rendez-vous maladroit est la meme chose qu'une relation terrible."],
  ['Kai compared a low grade on one assignment to failing the whole course.', "Kai a compare une mauvaise note a un seul devoir a echouer tout le cours."],
  ['Zoe said a friend being quiet for one day is the same as being cold-hearted.', "Zoe a dit qu'une amie silencieuse pendant une journee etait la meme chose qu'etre insensible."],
  ['Finn said a minor kitchen accident is the same as being unsafe around food.', "Finn a dit qu'un petit accident de cuisine etait la meme chose qu'etre dangereux avec la nourriture."],
  ['Mina said a cheap phone case is the same as a cheap phone.', "Mina a dit qu'une coque de telephone bon marche etait la meme chose qu'un telephone bon marche."],
  ['Eli said being skeptical of a rumor is the same as never trusting anyone.', "Eli a dit qu'etre sceptique face a une rumeur etait la meme chose que ne jamais faire confiance a personne."],
  ['Tara said arriving without coffee is the same as being unprepared.', "Tara a dit qu'arriver sans cafe etait la meme chose qu'etre mal preparee."],
  ['Noah said a noisy neighbor is the same as an abusive neighbor.', "Noah a dit qu'un voisin bruyant etait la meme chose qu'un voisin violent."],
  ['Rina said a boring lecture is the same as a useless education.', "Rina a dit qu'un cours ennuyeux etait la meme chose qu'une education inutile."],
  ['Jasper said a slight typo in a resume is the same as fake qualifications.', "Jasper a dit qu'une petite faute de frappe sur un CV etait la meme chose que de fausses qualifications."],
  ['Maya said an opinion piece is the same as a scientific paper.', "Maya a dit qu'un article d'opinion etait la meme chose qu'un article scientifique."],
  ['Hugo said a late reply to a text is the same as ignoring someone forever.', "Hugo a dit qu'une reponse tardive a un message etait la meme chose qu'ignorer quelqu'un pour toujours."],
  ['Layla said a messy bedroom is the same as being incapable of responsibility.', "Layla a dit qu'une chambre en désordre etait la meme chose qu'etre incapable de responsabilite."],
  ['Clara said a bad day at work is the same as having a bad career.', "Clara a dit qu'une mauvaise journee au travail etait la meme chose qu'une mauvaise carriere."],
  ['Dylan said a friendly argument is the same as a real fight.', "Dylan a dit qu'une dispute amicale etait la meme chose qu'une vraie bagarre."],
  ['Sofia said a small penalty fee is the same as stealing.', "Sofia a dit qu'une petite penalite etait la meme chose que voler."],
  ['Reed said a buggy app update is the same as the app being useless.', "Reed a dit qu'une mise a jour boguee etait la meme chose que l'application soit inutile."],
  ['Emma said a student asking for help is the same as cheating.', "Emma a dit qu'un etudiant qui demande de l'aide etait la meme chose que tricher."],
  ['Jade said a plain dinner is the same as a bad meal.', "Jade a dit qu'un diner simple etait la meme chose qu'un mauvais repas."],
  ['Drew said a slow website is the same as a broken website.', "Drew a dit qu'un site lent etait la meme chose qu'un site casse."],
  ['Lara said one forgotten birthday is the same as not caring at all.', "Lara a dit qu'un anniversaire oublie etait la meme chose que de ne pas s'en soucier du tout."],
  ['Oli said a strict teacher is the same as a cruel teacher.', "Oli a dit qu'un professeur strict etait la meme chose qu'un professeur cruel."],
  ['Mia said a wet floor sign is the same as a dangerous floor.', "Mia a dit qu'un panneau de sol mouille etait la meme chose qu'un sol dangereux."],
  ['Felix said a rough draft is the same as a final mistake-filled report.', "Felix a dit qu'une premiere version etait la meme chose qu'un rapport final plein d'erreurs."],
  ['Iris said a joke about a topic is the same as making fun of a person.', "Iris a dit qu'une blague sur un sujet etait la meme chose que de se moquer d'une personne."],
  ['Grant said a one-time complaint is the same as a permanent problem.', "Grant a dit qu'une plainte ponctuelle etait la meme chose qu'un probleme permanent."],
  ['Juno said a bad night of sleep is the same as being mentally unwell.', "Juno a dit qu'une mauvaise nuit de sommeil etait la meme chose qu'etre malade mentalement."],
  ['Pia said a short meeting is the same as a useless meeting.', "Pia a dit qu'une reunion courte etait la meme chose qu'une reunion inutile."],
  ['Mason said a supermarket coupon is the same as a scam.', "Mason a dit qu'un coupon de supermarche etait la meme chose qu'une arnaque."],
  ['Tessa said a student being quiet in class is the same as not knowing anything.', "Tessa a dit qu'un etudiant silencieux en classe etait la meme chose que ne rien savoir."],
  ['Ray said a bad restaurant review is the same as a health code violation.', "Ray a dit qu'un mauvais avis de restaurant etait la meme chose qu'une violation du code sanitaire."],
  ['Nora said one missed phone call is the same as abandoning a friendship.', "Nora a dit qu'un appel manque etait la meme chose qu'abandonner une amitie."],
  ['Ari said a company slogan is the same as proof of quality.', "Ari a dit qu'un slogan d'entreprise etait la meme chose qu'une preuve de qualite."],
  ['Stella said a quick apology is the same as fixing the harm.', "Stella a dit qu'une excuse rapide etait la meme chose que reparer le tort."],
  ['Parker said a delayed package is the same as a lost package.', "Parker a dit qu'un colis en retard etait la meme chose qu'un colis perdu."],
  ['Jonah said a calm disagreement is the same as betrayal.', "Jonah a dit qu'un desaccord calme etait la meme chose qu'une trahison."],
  ['Kira said a rough sports game is the same as unsportsmanlike conduct.', "Kira a dit qu'un match sportif rude etait la meme chose qu'une conduite antisportive."],
  ['Evan said a cheap repair is the same as no repair at all.', "Evan a dit qu'une reparation bon marche etait la meme chose qu'aucune reparation du tout."],
  ['Rory said a small mistake in cooking is the same as poisoning someone.', "Rory a dit qu'une petite erreur en cuisine etait la meme chose qu'empoisonner quelqu'un."],
  ['Hugo said an awkward pause is the same as the conversation failing.', "Hugo a dit qu'un silence genant etait la meme chose que l'echec de la conversation."],
  ['Mina said a modest raise is the same as being rich.', "Mina a dit qu'une petite augmentation etait la meme chose qu'etre riche."],
  ['Theo said a temporary inconvenience is the same as a total disaster.', "Theo a dit qu'un derangement temporaire etait la meme chose qu'un desastre total."],
  ['Maya said a scratch on a phone case is the same as a broken phone screen.', "Maya a dit qu'une rayure sur une coque de telephone etait la meme chose qu'un ecran de telephone casse."],
  ['Theo said a five minute delay is the same as missing the whole train.', "Theo a dit qu'un retard de cinq minutes etait la meme chose que rater tout le train."],
  ['Ava said a rude tone in a text is the same as a breakup.', "Ava a dit qu'un ton brusque dans un message etait la meme chose qu'une rupture."],
  ['Ben said a typo in a recipe is the same as ruining dinner.', "Ben a dit qu'une faute de frappe dans une recette etait la meme chose que gacher le diner."],
  ['Nina said a messy backpack is the same as failing school.', "Nina a dit qu'un sac a dos en desordre etait la meme chose qu'echouer a l'ecole."],
  ['Omar said a quiet friend is the same as an unfriendly friend.', "Omar a dit qu'un ami discret etait la meme chose qu'un ami froid."],
  ['Priya said a small fee is the same as being robbed.', "Priya a dit qu'un petit frais etait la meme chose qu'un vol."],
  ['Leo said a boring meeting is the same as a useless team.', "Leo a dit qu'une reunion ennuyeuse etait la meme chose qu'une equipe inutile."],
  ['Rina said a late reply is the same as ignoring someone forever.', "Rina a dit qu'une reponse tardive etait la meme chose qu'ignorer quelqu'un pour toujours."],
  ['Jasper said a bad haircut is the same as a bad personality.', "Jasper a dit qu'une mauvaise coupe de cheveux etait la meme chose qu'une mauvaise personnalite."],
  ["Mason said a teacher's rubric and a student rumor were equally objective grading tools.", "Mason a dit qu'une grille de notation d'enseignant et une rumeur d'etudiant etaient des outils de notation aussi objectifs."],
  ['Iris claimed a physics demo and a random hunch should share the same conclusion.', "Iris a affirme qu'une demonstration de physique et une intuition au hasard devaient partager la meme conclusion."],
  ['Dylan said a city budget audit and a viral post deserved equal confidence about spending.', "Dylan a dit qu'un audit du budget municipal et une publication virale meritaient la meme confiance sur les depenses."],
  ['Sofia treated a professional translator and an auto-generated subtitle as equal sources of meaning.', "Sofia a traite une traductrice professionnelle et un sous-titre genere automatiquement comme des sources de sens equivalentes."],
  ["Reed said a nutrition label and a neighbor's snack opinion were equally informative.", "Reed a dit qu'une etiquette nutritionnelle et l'avis d'un voisin sur un snack etaient egalement informatifs."],
  ['Hugo gave a road safety study and a "feels like" hunch the same voice in the conversation.', "Hugo a donne une etude sur la securite routiere et une intuition du type « j'ai l'impression » la meme place dans la conversation."],
  ['Layla said a crime statistic and a dramatic podcast guess were equally enough to judge the city.', "Layla a dit qu'une statistique sur la criminalite et une supposition dramatique de podcast suffisaient aussi bien pour juger la ville."],
  ['Noah treated a tax form and a napkin calculation as matching evidence.', "Noah a traite un formulaire fiscal et un calcul sur serviette comme des preuves correspondantes."],
  ['Emma said a professional chef and a random cooking thread were equally authoritative about salt.', "Emma a dit qu'un chef professionnel et un fil de cuisine au hasard etaient egalement autorises sur le sel."],
  ['Ari claimed a lab technician and a horoscope column were equally informative about health.', "Ari a affirme qu'un technicien de laboratoire et une colonne d'horoscope etaient egalement informatifs sur la sante."],
  ['Maya said a fire drill and a random hallway complaint were equally good evidence of building safety.', "Maya a dit qu'un exercice d'incendie et une plainte de couloir au hasard etaient des preuves egalement bonnes de la securite du batiment."],
  ['Theo treated a pharmacology textbook and a meme about vitamins as equally reliable on medicine.', "Theo a traite un manuel de pharmacologie et un mème sur les vitamines comme egalement fiables sur la medecine."],
  ['Rina said a city audit and a social media rant had the same value about budgets.', "Rina a dit qu'un audit de ville et une tirade sur les reseaux sociaux avaient la meme valeur sur les budgets."],
  ['Ben gave a bridge engineer and a commuter rumor equal authority on bridge design.', "Ben a donne a une ingenieure de pont et a une rumeur de navetteur la meme autorite sur la conception du pont."],
  ['Nina said a court filing and a coffee-shop guess were equally trustworthy about the case.', "Nina a dit qu'une requete judiciaire et une estimation de cafe etaient egalement dignes de confiance sur l'affaire."],
  ['Omar treated a weather bulletin and a joke from a cousin as equal sources for tomorrow’s rain.', "Omar a traite un bulletin meteo et une blague d'un cousin comme des sources egales pour la pluie de demain."],
  ['Priya said a hospital protocol and a wellness influencer tip were equally safe advice.', "Priya a dit qu'un protocole hospitalier et un conseil d'influenceur bien-etre etaient des conseils egalement surs."],
  ['Leo gave a train timetable and a lunch-line rumor the same confidence for arrival times.', "Leo a donne au tableau horaire d'un train et a une rumeur de file de dejeuner la meme confiance pour les heures d'arrivee."],
  ['Ava said a police report and a gossip clip were equally solid proof of the accident.', "Ava a dit qu'un rapport de police et un extrait de ragots etaient des preuves tout aussi solides de l'accident."],
  ['Mina treated a chemistry lab result and a random guess as matching evidence about acids.', "Mina a traite un resultat de laboratoire de chimie et une supposition au hasard comme des preuves correspondantes sur les acides."],
  ['Jules said a museum label and a tourist theory should count the same on history.', "Jules a dit qu'une etiquette de musee et une theorie de touriste devaient compter pareil sur l'histoire."],
  ['Sofia put a traffic-camera record and a blurry phone clip on the same level in court.', "Sofia a mis un enregistrement de camera de circulation et une video de telephone floue sur le meme niveau au tribunal."],
  ['Hugo said a recipe tested three times and one dinner complaint were equally important.', "Hugo a dit qu'une recette testee trois fois et une seule plainte de diner etaient egalement importantes."],
  ['Clara treated a food inspection report and a snack-ranking meme as equal sources.', "Clara a traite un rapport d'inspection alimentaire et un mème de classement de snack comme des sources egales."],
  ['Dylan said a science textbook and a joke thread were equally trustworthy for biology.', "Dylan a dit qu'un manuel de sciences et un fil de blagues etaient egalement dignes de confiance pour la biologie."],
  ['Eli gave a professional translator and a broken auto-caption the same weight on meaning.', "Eli a donne a une traductrice professionnelle et a un sous-titre automatique defectueux le meme poids sur le sens."],
  ['Tara said a fire marshal and a forum rumor deserved equal trust for evacuation advice.', "Tara a dit qu'un officier de prevention incendie et une rumeur de forum meritaient une confiance egale pour les conseils d'evacuation."],
  ['Noah treated a lab measurement and a lucky guess as the same quality of evidence.', "Noah a traite une mesure de laboratoire et une estimation chanceuse comme des preuves de meme qualite."],
  ['Pia said a science paper and a meme caption were equally solid on diet claims.', "Pia a dit qu'un article scientifique et une legende de mème etaient egalement solides sur les affirmations de regime."],
  ['Grant gave a road engineer and a passenger guess the same authority on bridge safety.', "Grant a donne a une ingenieure des routes et a la supposition d'un passager la meme autorite sur la securite du pont."],
  ['Maya said a school handbook and a hallway whisper were equally authoritative about attendance.', "Maya a dit qu'un guide scolaire et un murmure de couloir etaient egalement autoritaires sur l'assiduite."],
  ['Nora treated a tax notice and a group-chat rumor as matching evidence about money.', "Nora a traite un avis fiscal et une rumeur de groupe comme des preuves correspondantes sur l'argent."],
  ['Sam said a clinical trial and a blog post about vitamins deserved equal trust.', "Sam a dit qu'un essai clinique et un billet de blog sur les vitamines meritaient une confiance egale."],
  ['Lina gave a bridge safety study and a vibe check the same voice in the discussion.', "Lina a donne a une etude sur la securite d'un pont et a un simple ressenti la meme place dans la discussion."],
  ['Kai said a hotel audit and a viral post should count the same on spending.', "Kai a dit qu'un audit d'hotel et une publication virale devaient compter pareil sur les depenses."],
  ['Rosa treated a surgeon and a rumor blogger as equally informed about surgery risks.', "Rosa a traite une chirurgienne et un blogueur de rumeurs comme egalement informes sur les risques chirurgicaux."],
  ['Oli said a census table and a bar debate were equally good on population trends.', "Oli a dit qu'un tableau de recensement et un debat de bar etaient egalement bons sur les tendances de population."],
  ['Milo gave a professional chef and a random recipe comment the same authority on salt.', "Milo a donne a un chef professionnel et a un commentaire de recette au hasard la meme autorite sur le sel."],
  ['Ari said a physics demo and a random hunch should reach the same conclusion.', "Ari a dit qu'une demonstration de physique et une intuition au hasard devaient mener a la meme conclusion."]
];

const OPTIONS_EN = ['False Equivalence', 'False Dilemma', 'Appeal to Popularity', 'Hasty Generalization'];
const OPTIONS_FR = ['Fausse équivalence', 'Fausse dichotomie', 'Appel à la popularité', 'Généralisation hâtive'];

function rotate(a: string[], i: number) {
  const r = a.slice(1);
  r.splice(i, 0, a[0]);
  return r;
}

function sub(i: number) {
  return i < 17 ? SubLevel.BEGINNER : i < 34 ? SubLevel.INTERMEDIATE : SubLevel.EXPERT;
}

function make(fr = false): Question[] {
  return SCENARIOS.map((s, i) => {
    const c = i % 4;
    return {
      id: 34301 + i,
      level: 6,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Fausse équivalence' : 'False Equivalence',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? OPTIONS_FR : OPTIONS_EN, c),
      correct_option_index: c,
      explanation: fr
        ? "Le raisonnement traite comme équivalentes deux choses qui ne le sont pas."
        : 'The reasoning treats two things as equivalent when they are not.',
      detailedExplanationBeginner: fr
        ? "On confond des situations très différentes."
        : 'Very different situations are being confused.',
      detailedExplanationIntermediate: fr
        ? "La fausse équivalence ignore l'ampleur, le contexte ou la nature différente des choses comparées."
        : 'False equivalence ignores magnitude, context, or the different nature of the things compared.',
      detailedExplanationExpert: fr
        ? "Ce sophisme stabilise artificiellement une comparaison en supposant une symétrie de type ou de gravité que les faits ne soutiennent pas."
        : 'This fallacy artificially stabilizes a comparison by assuming a symmetry of type or severity that the facts do not support.',
      questionFormat: 'standard',
    };
  });
}

export const FALSE_EQUIVALENCE_EXPANSION_EN: Question[] = make();
export const FALSE_EQUIVALENCE_EXPANSION_FR: Question[] = make(true);

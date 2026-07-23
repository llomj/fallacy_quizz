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

import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["A cereal ad shows a child crying over a sad puppy, so Jo buys the cereal without checking the sugar.", "Une pub pour des céréales montre un enfant en larmes devant un chiot triste, alors Jo les achète sans regarder le sucre."],
  ["The flyer says, 'If you cared about your family, you would donate tonight,' and Mara feels pressured to give.", "Le prospectus dit : « Si tu aimais ta famille, tu donnerais ce soir », et Mara se sent obligée de donner."],
  ["A politician shares a story about a lonely grandmother, so people accept the tax plan without asking details.", "Un politicien raconte l'histoire d'une grand-mère solitaire, donc les gens acceptent son projet d'impôt sans demander de détails."],
  ["A pet shelter video uses dramatic music, so Eli assumes every claim in it is true.", "Une vidéo de refuge pour animaux utilise une musique dramatique, donc Eli suppose que tout ce qu'elle dit est vrai."],
  ["The ad says, 'Only heartless people ignore this offer,' and Nina feels guilty enough to buy it.", "La pub dit : « Seuls les gens sans cœur ignorent cette offre », et Nina se sent coupable au point d'acheter."],
  ["A school poster shows a scared student and says the rule will save everyone, so Ben stops questioning it.", "Une affiche scolaire montre un élève effrayé et dit que la règle sauvera tout le monde, alors Ben cesse de la remettre en question."],
  ["A fundraiser email says the cause is 'your last chance to be a good person,' so Priya gives immediately.", "Un courriel de collecte dit que la cause est « ta dernière chance d'être une bonne personne », alors Priya donne aussitôt."],
  ["A movie trailer makes the villain look terrifying, so Omar thinks the movie must be a masterpiece.", "Une bande-annonce rend le méchant effrayant, donc Omar pense que le film doit être un chef-d'œuvre."],
  ["A detergent commercial shows a happy reunion, so Clara trusts the detergent more than the label.", "Une pub de lessive montre des retrouvailles heureuses, donc Clara fait plus confiance au produit qu'à l'étiquette."],
  ["A charity post says, 'Imagine your own child in this picture,' and Leah donates without checking the budget.", "Une publication caritative dit : « Imagine ton propre enfant sur cette photo », et Leah donne sans vérifier le budget."],
  ["A warning label uses red flashing text, so Theo thinks the product must be dangerous even though he has not read the facts.", "Une étiquette d'avertissement utilise un texte rouge clignotant, donc Theo pense que le produit doit être dangereux sans avoir lu les faits."],
  ["A campaign video ends with a tearful violin scene, so Rosa assumes the policy is well designed.", "Une vidéo de campagne se termine par une scène de violon larmoyante, donc Rosa suppose que la politique est bien conçue."],
  ["The email says, 'Be brave and click now before you miss out forever,' and Malik reacts on impulse.", "Le courriel dit : « Sois courageux et clique maintenant avant de tout rater », et Malik réagit sur un coup de tête."],
  ["A family member cries during the argument, so Ava drops her objections even though the facts are still weak.", "Un membre de la famille pleure pendant la dispute, donc Ava abandonne ses objections même si les faits sont encore faibles."],
  ["A commercial shows a dog shivering in the rain, so Jun buys the umbrella shown at the end.", "Une pub montre un chien tremblant sous la pluie, donc Jun achète le parapluie montré à la fin."],
  ["A speaker says, 'Don't be the kind of person who disappoints children,' and Sara agrees too quickly.", "L'orateur dit : « Ne sois pas le genre de personne qui déçoit les enfants », et Sara acquiesce trop vite."],
  ["A social post uses a tragic song and close-up tears, so Max accepts the rumor in the caption.", "Une publication utilise une chanson tragique et des gros plans de larmes, donc Max accepte la rumeur dans la légende."],
  ["The ad tells customers they deserve luxury after a hard week, so Zoe buys the expensive mug.", "La pub dit aux clients qu'ils méritent du luxe après une semaine difficile, donc Zoe achète la tasse chère."],
  ["A teacher's petition includes a heartbreaking story, so the committee approves it without checking the numbers.", "La pétition d'un enseignant inclut une histoire bouleversante, donc le comité l'approuve sans vérifier les chiffres."],
  ["A warning about scams shows an angry face and scary music, so Luis believes every word in it.", "Un avertissement sur les arnaques montre un visage en colère et une musique inquiétante, donc Luis croit chaque mot."],
  ["A bakery ad says, 'Your childhood deserves this cake,' and Eva buys three boxes.", "Une pub de boulangerie dit : « Ton enfance mérite ce gâteau », et Eva en achète trois boîtes."],
  ["A sports promo makes the crowd roar and cry, so Ken thinks the team strategy must be brilliant.", "Une promo sportive fait rugir et pleurer la foule, donc Ken pense que la stratégie de l'équipe doit être brillante."],
  ["A petition says the planet is in tears, so Mina signs before reading the proposal.", "Une pétition dit que la planète est en larmes, donc Mina signe avant de lire la proposition."],
  ["An insurance ad shows a happy dog hugging its owner, so Paul believes the policy covers everything.", "Une pub d'assurance montre un chien heureux qui serre son maître, donc Paul croit que le contrat couvre tout."],
  ["A seller says, 'Only cruel people ask for discounts on this,' and Sam pays full price.", "Un vendeur dit : « Seuls les gens cruels demandent une réduction sur ce produit », et Sam paie le plein tarif."],
  ["A rescue video ends with babies being saved, so Fatima trusts the unrelated product shown after it.", "Une vidéo de sauvetage se termine par des bébés sauvés, donc Fatima fait confiance au produit sans rapport montré après."],
  ["A podcast intro uses a sad piano track, so Hugo assumes the host has done deep research.", "L'intro d'un podcast utilise un piano triste, donc Hugo suppose que l'animateur a vraiment fait des recherches."],
  ["A poster says, 'If you walk away, you are choosing harm,' and Jada feels trapped into agreeing.", "Une affiche dit : « Si tu pars, tu choisis le mal », et Jada se sent piégée à accepter."],
  ["A home-renovation ad shows a family laughing, so Iris buys the paint without comparing prices.", "Une pub de rénovation montre une famille qui rit, donc Iris achète la peinture sans comparer les prix."],
  ["The appeal letter says, 'Think of the children who will cry if you say no,' and Noah donates.", "La lettre de soutien dit : « Pense aux enfants qui vont pleurer si tu refuses », et Noah donne."],
  ["A review says the phone case is 'the choice of people with standards,' so Maya orders it.", "Un avis dit que la coque de téléphone est « le choix des personnes exigeantes », donc Maya la commande."],
  ["A public speech uses a trembling voice and long pauses, so Omar takes it as proof.", "Un discours public utilise une voix tremblante et de longues pauses, donc Omar le prend pour une preuve."],
  ["A bakery sign says, 'Treat yourself, you have suffered enough,' and Clara buys the giant pastry.", "Une enseigne de boulangerie dit : « Fais-toi plaisir, tu en as assez subi », et Clara achète la grande pâtisserie."],
  ["A campaign ad shows a lonely puppy while talking about rent policy, so Ben forgets to ask how the policy works.", "Une pub de campagne montre un chiot solitaire en parlant de la politique de logement, donc Ben oublie de demander comment elle fonctionne."],
  ["A warning message says, 'Be scared now or regret it forever,' and Priya clicks the link.", "Un message d'alerte dit : « Aie peur maintenant ou regrette-le pour toujours », et Priya clique sur le lien."],
  ["A perfume ad uses sparkling hearts and soft voices, so Theo assumes the scent is worth the price.", "Une pub de parfum utilise des cœurs scintillants et des voix douces, donc Theo suppose que le parfum vaut son prix."],
  ["A teacher says, 'Only a bad student would question this rule,' so the class stays silent.", "Un enseignant dit : « Seul un mauvais élève remettrait cette règle en question », donc la classe se tait."],
  ["A sad story about a burned-out nurse makes Rosa agree to a bad scheduling change.", "Une histoire triste sur une infirmière épuisée pousse Rosa à accepter un mauvais changement d'horaires."],
  ["A charity video focuses on tears instead of the project plan, so Malik assumes the plan is solid.", "Une vidéo caritative se concentre sur les larmes plutôt que sur le plan, donc Malik suppose que le projet est solide."],
  ["The ad says, 'Your future self will thank you for buying now,' and Leah ignores the missing details.", "La pub dit : « Ton futur te remerciera d'acheter maintenant », et Leah ignore les détails manquants."],
  ["A politician says the crowd's applause proves the policy is compassionate, so Eric stops questioning it.", "Un politicien dit que les applaudissements de la foule prouvent que la politique est compatissante, donc Eric cesse de la remettre en question."],
  ["A heartwarming video of rescued kittens makes Zoe trust the app's privacy policy.", "Une vidéo attendrissante de chatons sauvés fait que Zoe fait confiance à la politique de confidentialité de l'application."],
  ["The flyer says, 'Choose kindness by signing today,' and Jun signs even though he is unsure.", "Le prospectus dit : « Choisis la gentillesse en signant aujourd'hui », et Jun signe même s'il hésite."],
  ["A commercial shows a grandmother smiling, so Nina believes the medicine works.", "Une pub montre une grand-mère souriante, donc Nina croit que le médicament fonctionne."],
  ["A messenger says, 'If you were truly responsible, you would join us,' and Sam joins to avoid feeling guilty.", "Un message dit : « Si tu étais vraiment responsable, tu nous rejoindrais », et Sam rejoint pour ne pas se sentir coupable."],
  ["A documentary uses frightening music during a simple budget chart, so Omar thinks the chart is alarming.", "Un documentaire utilise une musique inquiétante pendant un simple graphique budgétaire, donc Omar trouve le graphique alarmant."],
  ["A donation page says 'one click can break your heart,' so Ava gives before reading the mission statement.", "Une page de dons dit qu'« un seul clic peut vous briser le cœur », donc Ava donne avant de lire la mission."],
  ["A drama-filled ad about road repairs makes Luis believe the contractor is the best choice.", "Une pub pleine de drame sur les réparations routières fait croire à Luis que l'entrepreneur est le meilleur choix."],
  ["The appeal says, 'Good neighbors do this for each other,' and Mara agrees to a bad bargain.", "L'appel dit : « De bons voisins font cela entre eux », et Mara accepte une mauvaise affaire."],
  ["A school notice says, 'Your child will feel left out if they do not join,' so Tia signs the form immediately.", "Un avis scolaire dit : « Ton enfant se sentira exclu s'il ne participe pas », alors Tia signe le formulaire immédiatement."],
];

const EN = ['Appeal to Emotion', 'Appeal to Popularity', 'Straw Man', 'False Dilemma'];
const FR = ["Appel à l'émotion", 'Appel à la popularité', 'Homme de paille', 'Fausse dichotomie'];

const rotate = (a: string[], i: number) => {
  const r = a.slice(1);
  r.splice(i, 0, a[0]);
  return r;
};

const sub = (i: number) => (i < 17 ? SubLevel.BEGINNER : i < 34 ? SubLevel.INTERMEDIATE : SubLevel.EXPERT);

function make(fr = false): Question[] {
  return SCENARIOS.map((s, i) => {
    const c = i % 4;
    return {
      id: 30401 + i,
      level: 1,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? "Appel à l'émotion" : 'Appeal to Emotion',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? FR : EN, c),
      correct_option_index: c,
      explanation: fr
        ? "Le message essaie de provoquer la peur, la honte, la culpabilité ou la compassion pour faire accepter une conclusion sans preuves solides."
        : 'The message tries to trigger fear, guilt, pity, or excitement so the conclusion gets accepted without solid evidence.',
      detailedExplanationBeginner: fr
        ? "L'émotion prend la place des preuves."
        : 'Emotion is being used instead of evidence.',
      detailedExplanationIntermediate: fr
        ? "Le sentiment peut être réel, mais il ne montre pas si la conclusion est vraie, utile ou bien fondée."
        : 'The feeling may be real, but it does not show whether the conclusion is true, useful, or well supported.',
      detailedExplanationExpert: fr
        ? "L'appel à l'émotion devient fallacieux quand l'intensité affective est utilisée comme substitut à l'évaluation des faits, du contexte et des conséquences réelles."
        : 'Appeal to emotion becomes fallacious when emotional intensity is used as a substitute for evaluating facts, context, and real consequences.',
      questionFormat: 'standard',
    };
  });
}

export const APPEAL_TO_EMOTION_EXPANSION_EN: Question[] = make();
export const APPEAL_TO_EMOTION_EXPANSION_FR: Question[] = make(true);

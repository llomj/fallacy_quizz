import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["A poster says your phone will be hacked tonight unless you buy this security app, so Jules installs it immediately.", "Une affiche dit que votre téléphone sera piraté ce soir si vous n'achetez pas cette application de sécurité, alors Jules l'installe immédiatement."],
  ["The email warns that skipping this webinar will ruin your career, and Mia signs up out of panic.", "Le courriel avertit que manquer ce webinaire ruinera votre carrière, et Mia s'inscrit par panique."],
  ["A neighbor says, 'If you do not sign the petition, the whole town will become unsafe,' so Omar signs without checking.", "Un voisin dit : « Si tu ne signes pas la pétition, toute la ville deviendra dangereuse », alors Omar signe sans vérifier."],
  ["A radio ad says one missed payment will destroy your future, so Priya buys the insurance plan.", "Une pub radio dit qu'un seul paiement manqué détruira votre avenir, alors Priya achète le contrat d'assurance."],
  ["The flyer shows a dark alley and says this charity is the only way to stop disaster, so Ben donates.", "Le prospectus montre une ruelle sombre et dit que cette association est le seul moyen d'éviter la catastrophe, alors Ben donne."],
  ["A coach says, 'If you do not join today, you will fall behind forever,' and Theo rushes to enroll.", "Un coach dit : « Si tu ne t'inscris pas aujourd'hui, tu seras à jamais distancé », et Theo se précipite pour s'inscrire."],
  ["A message claims the city will collapse without this policy, so Nora supports it even though she has no evidence.", "Un message affirme que la ville s'effondrera sans cette politique, donc Nora la soutient sans preuve."],
  ["A shopping ad says only fools wait for tomorrow because today's sale protects your family, so Ava buys now.", "Une pub dit que seuls les idiots attendent demain parce que la vente du jour protège votre famille, alors Ava achète maintenant."],
  ["A safety video says your home is one mistake away from tragedy, so Malik agrees to every upgrade.", "Une vidéo de sécurité dit que votre maison n'est qu'à une erreur du drame, alors Malik accepte toutes les améliorations."],
  ["The school notice says, 'Your child will be left behind if you question this rule,' so Lina stays quiet.", "L'avis de l'école dit : « Votre enfant sera laissé de côté si vous questionnez cette règle », alors Lina se tait."],
  ["A seller says the deal expires before fear can leave your body, so Hugo pays without comparing prices.", "Un vendeur dit que l'offre expire avant que la peur quitte votre corps, alors Hugo paie sans comparer les prix."],
  ["A podcast host says the neighborhood will be overrun unless listeners buy his guide, so Salma orders it.", "L'animateur d'un podcast dit que le quartier sera envahi si les auditeurs n'achètent pas son guide, alors Salma le commande."],
  ["A billboard says not choosing this gym will make you weak and invisible, so Ken signs up.", "Un panneau publicitaire dit que ne pas choisir cette salle de sport vous rendra faible et invisible, alors Ken s'inscrit."],
  ["A pop-up warns that closing the page means losing everything, so Emma clicks stay.", "Une fenêtre surgissante avertit que fermer la page signifie tout perdre, alors Emma clique pour rester."],
  ["A flyer says the bridge will fail unless this contractor is hired, so Ravi approves the bid.", "Un prospectus dit que le pont s'effondrera sans cet entrepreneur, alors Ravi approuve l'offre."],
  ["A message says only dangerous people ignore this alert, so Zoe follows it even though it looks suspicious.", "Un message dit que seules les personnes dangereuses ignorent cette alerte, alors Zoe la suit même si elle semble louche."],
  ["A speaker says, 'If you walk away, you will regret it every day,' and Jun buys the product.", "L'orateur dit : « Si tu t'en vas, tu le regretteras chaque jour », et Jun achète le produit."],
  ["An app warning says your photos will vanish forever unless you upgrade, so Maya pays.", "Une alerte d'application dit que vos photos disparaîtront pour toujours si vous ne passez pas à la version payante, alors Maya paie."],
  ["A parent says the family will be embarrassed if you do not agree, so Eric changes his vote.", "Un parent dit que la famille sera humiliée si tu n'es pas d'accord, alors Eric change son vote."],
  ["A campaign flyer says the other side will make everything unsafe, so Clara stops asking questions.", "Un tract de campagne dit que l'autre camp rendra tout dangereux, alors Clara cesse de poser des questions."],
  ["A security guard says the building will be targeted tonight, so Noah buys the expensive alarm.", "Un vigile dit que le bâtiment sera visé ce soir, alors Noah achète l'alarme chère."],
  ["The coach says skipping this plan means guaranteed failure, so Priya sticks with it.", "Le coach dit que sauter ce plan signifie un échec garanti, alors Priya le suit."],
  ["A warning poster says the subway is one step from disaster, so Ben takes a much longer bus route.", "Une affiche d'avertissement dit que le métro est à un pas du désastre, alors Ben prend un trajet en bus beaucoup plus long."],
  ["A text says the fundraiser will collapse unless you act now, so Tara donates without checking the cause.", "Un SMS dit que la collecte s'effondrera si vous n'agissez pas maintenant, alors Tara donne sans vérifier la cause."],
  ["A health blog says failing to buy this supplement is gambling with your family, so Omar orders three bottles.", "Un blog santé dit que ne pas acheter ce complément, c'est jouer avec la vie de votre famille, alors Omar commande trois flacons."],
  ["A commercial says this car is the only shield against disaster, so Leah picks it over the cheaper one.", "Une pub dit que cette voiture est le seul bouclier contre la catastrophe, alors Leah la choisit plutôt que la moins chère."],
  ["The memo says questioning the deadline will endanger everyone's jobs, so Max says nothing.", "La note dit que remettre en question la date limite mettra les emplois de tous en danger, alors Max ne dit rien."],
  ["A poster says bad weather will punish anyone who ignores the alert, so Iris cancels her picnic.", "Une affiche dit que le mauvais temps punira quiconque ignore l'alerte, alors Iris annule son pique-nique."],
  ["A charity pitch says children will suffer tonight unless you pay now, so Sam gives on impulse.", "Une présentation caritative dit que des enfants souffriront ce soir si vous ne payez pas maintenant, alors Sam donne sur un coup de tête."],
  ["A manager says the office will become chaos without his new software, so Nora accepts the rollout.", "Un manager dit que le bureau deviendra chaotique sans son nouveau logiciel, alors Nora accepte le déploiement."],
  ["A social post says refusing this trend means being left alone, so Theo joins the trend.", "Une publication dit que refuser cette tendance signifie rester seul, alors Theo rejoint la tendance."],
  ["A flyer says your savings are one mistake from disappearing, so Mila buys the financial course.", "Un prospectus dit que vos économies ne sont qu'à une erreur de disparaître, alors Mila achète le cours financier."],
  ["A teacher warns that missing this review session will doom the exam, so the class stays late.", "L'enseignant avertit que manquer cette séance de révision condamnera l'examen, alors la classe reste tard."],
  ["A homeowner hears that termites are everywhere unless this spray is used, so he buys the largest bottle.", "Un propriétaire entend que les termites sont partout si ce spray n'est pas utilisé, alors il achète la plus grande bouteille."],
  ["A travel ad says a missed booking will ruin the whole holiday, so Rosa books immediately.", "Une pub de voyage dit qu'une réservation manquée ruinera tout le séjour, alors Rosa réserve immédiatement."],
  ["A support chat says your account is in immediate danger if you do not verify now, so Felix clicks the link.", "Un chat d'assistance dit que votre compte est en danger immédiat si vous ne vérifiez pas maintenant, alors Felix clique sur le lien."],
  ["A friend says the city will become unlivable if the restaurant closes, so Kim signs the protest.", "Un ami dit que la ville deviendra invivable si le restaurant ferme, alors Kim signe la pétition."],
  ["A promo says this app is the last line between you and embarrassment, so Leo downloads it.", "Une promo dit que cette application est la dernière ligne entre vous et le ridicule, alors Leo la télécharge."],
  ["A warning says ignoring this message will make you responsible for the damage, so Ana forwards it.", "Un avertissement dit qu'ignorer ce message vous rendra responsable des dégâts, alors Ana le transfère."],
  ["A politician says, 'Vote yes or your street will be next,' and people vote yes from fear.", "Un politicien dit : « Votez oui ou votre rue sera la prochaine », et les gens votent oui par peur."],
  ["A newsletter says the whole region will panic unless readers buy the guide, so Yara buys it.", "Une lettre d'information dit que toute la région paniquera si les lecteurs n'achètent pas le guide, alors Yara l'achète."],
  ["A safety pitch says your kids could be at risk if you hesitate, so Paul agrees right away.", "Une présentation de sécurité dit que vos enfants pourraient être en danger si vous hésitez, alors Paul accepte immédiatement."],
  ["A merchant says the product is the only thing standing between you and a terrible loss, so Grace pays more.", "Un commerçant dit que le produit est la seule chose entre vous et une grosse perte, alors Grace paie plus cher."],
  ["A warning screen says the wrong choice will make everyone blame you, so Mateo avoids it.", "Un écran d'avertissement dit que le mauvais choix fera que tout le monde vous blâmera, alors Mateo l'évite."],
  ["A banner says the town will suffer without this volunteer club, so Salma signs up even though she is busy.", "Une bannière dit que la ville souffrira sans ce club de bénévoles, alors Salma s'inscrit même si elle est occupée."],
  ["A sales pitch says waiting means letting danger win, so Dan buys the gadget.", "Un argumentaire de vente dit qu'attendre, c'est laisser gagner le danger, alors Dan achète le gadget."],
  ["A warning about a storm says staying home is the only way to protect your loved ones, so Nina stays home.", "Un avertissement de tempête dit que rester à la maison est la seule façon de protéger vos proches, alors Nina reste chez elle."],
  ["An email says the world will be worse by morning unless you respond now, so Omar replies instantly.", "Un courriel dit que le monde sera pire au matin si vous ne répondez pas maintenant, alors Omar répond aussitôt."],
  ["A flyer says 'do not become the person who ignores this danger,' so Tia follows the advice without evidence.", "Un prospectus dit : « Ne deviens pas la personne qui ignore ce danger », alors Tia suit le conseil sans preuve."],
  ["A road sign says the bridge is unsafe unless you take the longer toll route, so Eva pays the toll.", "Un panneau routier dit que le pont est dangereux si vous ne prenez pas la route à péage plus longue, alors Eva paie le péage."],
];

const EN = ['Appeal to Fear', 'Appeal to Emotion', 'False Dilemma', 'Slippery Slope'];
const FR = ["Appel à la peur", "Appel à l'émotion", 'Fausse dichotomie', 'Pente glissante'];

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
      id: 30451 + i,
      level: 1,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Appel à la peur' : 'Appeal to Fear',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? FR : EN, c),
      correct_option_index: c,
      explanation: fr
        ? "On vous pousse à agir par peur d'un désastre, d'une honte ou d'une perte, au lieu de vous donner des preuves solides."
        : 'You are pushed to act through fear of disaster, shame, or loss instead of solid evidence.',
      detailedExplanationBeginner: fr
        ? "La peur remplace l'argument."
        : 'Fear replaces the argument.',
      detailedExplanationIntermediate: fr
        ? "Une menace possible est mise en avant pour obtenir l'accord, même si la conclusion n'est pas démontrée."
        : 'A possible threat is highlighted to get agreement, even though the conclusion is not demonstrated.',
      detailedExplanationExpert: fr
        ? "L'appel à la peur devient fautif lorsque la charge émotionnelle sert de raccourci rhétorique à la place d'une analyse des risques réels, des probabilités et des alternatives."
        : 'Appeal to fear becomes faulty when emotional pressure is used as a rhetorical shortcut instead of analyzing real risk, probabilities, and alternatives.',
      questionFormat: 'standard',
    };
  });
}

export const APPEAL_TO_FEAR_EXPANSION_EN: Question[] = make();
export const APPEAL_TO_FEAR_EXPANSION_FR: Question[] = make(true);

import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['A charity ad says your child will cry in the rain if you do not donate, so Mia gives money right away even before reading the charity name on the screen.', 'Une pub caritative dit que votre enfant pleurera sous la pluie si vous ne donnez pas, alors Mia donne tout de suite sans même lire le nom de l association a l ecran.'],
  ['A sales email says only a cold person would ignore this deal on pet sweaters, so Leo clicks buy without checking the price or size.', 'Un courriel de vente dit que seule une personne froide ignorerait cette offre de pulls pour animaux, alors Leo clique sur acheter sans vérifier le prix ni la taille.'],
  ['A poster shows a sad puppy and says this is your last chance to be kind, so Nina orders the product.', 'Une affiche montre un chiot triste et dit que c est votre dernière chance d être gentil, alors Nina commande le produit.'],
  ['A speaker says the policy will save children, so Omar stops asking for details.', 'Un orateur dit que la politique sauvera les enfants, alors Omar cesse de demander des détails.'],
  ['A message says good people will support this cause, so Priya signs up from guilt.', 'Un message dit que les bonnes personnes soutiendront cette cause, alors Priya s inscrit par culpabilité.'],
  ['A video uses tragic music and tears, so Ben assumes the claim must be true.', 'Une vidéo utilise une musique tragique et des larmes, alors Ben suppose que l affirmation doit être vraie.'],
  ['A flyer says your family deserves luxury after a hard week, so Tara buys the expensive mug.', 'Un prospectus dit que votre famille mérite du luxe après une semaine difficile, alors Tara achète la tasse chère.'],
  ['A warning says be brave and click before you miss out forever, so Kai reacts on impulse.', 'Un avertissement dit d être courageux et de cliquer avant de tout rater pour toujours, alors Kai réagit sur un coup de tête.'],
  ['A petition says the planet is crying, so Jules signs before reading the plan.', 'Une pétition dit que la planète pleure, alors Jules signe avant de lire le plan.'],
  ['A school notice says your child will feel left out, so Ava signs the form immediately.', 'Un avis scolaire dit que votre enfant se sentira exclu, alors Ava signe le formulaire immédiatement.'],
  ['A warning label flashes red text and says people like you will regret ignoring it, so Noah worries.', 'Une étiquette d avertissement affiche un texte rouge clignotant et dit que des personnes comme vous regretteront de l ignorer, alors Noah s inquiète.'],
  ['A campaign video ends with a crying violin scene, so Rina assumes the policy is good.', 'Une vidéo de campagne se termine par une scène de violon et de larmes, alors Rina suppose que la politique est bonne.'],
  ['An ad says you owe it to yourself to buy now, so Hugo spends impulsively.', 'Une pub dit que vous vous devez d acheter maintenant, alors Hugo dépense impulsivement.'],
  ['A family member cries during the pitch, so Lina drops her objections.', 'Un membre de la famille pleure pendant la présentation, alors Lina abandonne ses objections.'],
  ['A commercial shows a shivering dog, so Grant trusts the product.', 'Une pub montre un chien qui tremble, alors Grant fait confiance au produit.'],
  ['A speaker says if you walk away, you are choosing harm, so Zoe agrees too quickly.', 'Un orateur dit que si vous partez, vous choisissez le mal, alors Zoe accepte trop vite.'],
  ['A social post uses sad music and close-up tears, so Milo accepts the rumor.', 'Une publication utilise une musique triste et des gros plans de larmes, alors Milo accepte la rumeur.'],
  ['A seller says only heartless people ask for a discount, so Theo pays full price.', 'Un vendeur dit que seuls les gens sans cœur demandent une réduction, alors Theo paie le plein tarif.'],
  ['A warning says ignoring the alert will haunt you forever, so Pia clicks the link.', 'Un avertissement dit qu ignorer l alerte vous hantera pour toujours, alors Pia clique sur le lien.'],
  ['A charity post says imagine your own child in this picture, so Sam donates without checking the facts.', 'Une publication caritative dit d imaginer votre propre enfant sur cette photo, alors Sam donne sans vérifier les faits.'],
  ['A movie trailer makes the villain look terrifying, so Mia thinks the movie must be amazing.', 'Une bande-annonce rend le méchant terrifiant, alors Mia pense que le film doit être incroyable.'],
  ['A headline says this is your last chance to be a good person, so Eric opens his wallet.', 'Un titre dit que c est votre dernière chance d être une bonne personne, alors Eric ouvre son portefeuille.'],
  ['A fundraiser says children will suffer tonight unless you act, so Salma gives on impulse.', 'Une collecte dit que des enfants souffriront ce soir si vous n agissez pas, alors Salma donne sur un coup de tête.'],
  ['A commercial says this jacket will protect your loved ones from embarrassment, so Dan buys it.', 'Une pub dit que cette veste protégera vos proches du ridicule, alors Dan l achète.'],
  ['A message says your account is in danger unless you verify now, so Iris clicks immediately.', 'Un message dit que votre compte est en danger si vous ne vérifiez pas maintenant, alors Iris clique immédiatement.'],
  ['A flyer says you will regret saying no every day, so Omar says yes.', 'Un prospectus dit que vous regretterez de dire non tous les jours, alors Omar dit oui.'],
  ['A sad story about a burned-out nurse makes Leah accept a bad schedule change.', 'Une histoire triste sur une infirmière épuisée pousse Leah à accepter un mauvais changement d horaires.'],
  ['A sponsor says the team will be embarrassed unless you buy the premium bundle, so Ben does.', 'Un sponsor dit que l équipe sera humiliée si vous n achetez pas le pack premium, alors Ben le fait.'],
  ['A warning poster says the subway is one step from disaster, so Nora takes the bus.', 'Une affiche dit que le métro est à un pas du désastre, alors Nora prend le bus.'],
  ['A pop-up says closing the page means losing everything, so Malik stays on the site.', 'Une fenêtre surgissante dit que fermer la page signifie tout perdre, alors Malik reste sur le site.'],
  ['A podcast host says the neighborhood will be overrun unless you buy his guide, so Eva orders it.', 'Un animateur de podcast dit que le quartier sera envahi si vous n achetez pas son guide, alors Eva le commande.'],
  ['A parent says the family will be ashamed if you question the rule, so Juno keeps quiet.', 'Un parent dit que la famille aura honte si vous remettez la règle en question, alors Juno se tait.'],
  ['A safety video says one mistake away from tragedy, so Cole agrees to every upgrade.', 'Une vidéo de sécurité dit qu il n y a qu une erreur avant le drame, alors Cole accepte toutes les améliorations.'],
  ['A lobby poster says good neighbors do this for each other, so Tara agrees to a bad bargain.', 'Une affiche dit que de bons voisins font cela entre eux, alors Tara accepte une mauvaise affaire.'],
  ['A message says choosing the cheaper option would betray your kids, so Priya pays more.', 'Un message dit que choisir l option moins chère trahirait vos enfants, alors Priya paie plus cher.'],
  ['A commercial uses tears and a lonely violin, so Ben thinks the offer must be fair.', 'Une pub utilise des larmes et un violon solitaire, alors Ben pense que l offre doit être juste.'],
  ['A warning says you are one mistake from ruining everything, so Hana accepts the advice.', 'Un avertissement dit que vous êtes à une erreur de ruiner tout, alors Hana accepte le conseil.'],
  ['A flyer says the cause is your only chance to be brave, so Leo donates.', 'Un prospectus dit que la cause est votre seule chance d être courageux, alors Leo donne.'],
  ['A text says good people support this now, so Mina responds immediately.', 'Un SMS dit que les bonnes personnes soutiennent cela maintenant, alors Mina répond immédiatement.'],
  ['A sales page says your family will thank you forever, so Owen buys fast.', 'Une page de vente dit que votre famille vous remerciera pour toujours, alors Owen achète vite.'],
  ['A warning says the wrong choice will make everyone blame you, so Clara avoids it.', 'Un avertissement dit que le mauvais choix fera que tout le monde vous blâmera, alors Clara l évite.'],
  ['A charity pitch says think of the children crying tonight, so Sam gives without checking.', 'Une présentation caritative dit de penser aux enfants qui pleureront ce soir, alors Sam donne sans vérifier.'],
  ['A message says only cruel people refuse this offer, so Maya buys it.', 'Un message dit que seuls les gens cruels refusent cette offre, alors Maya l achète.'],
  ['A storm alert says staying home is the only way to protect your loved ones, so Liam stays home.', 'Une alerte météo dit que rester à la maison est la seule façon de protéger vos proches, alors Liam reste chez lui.'],
  ['A heartbreaking video of rescued kittens makes Zoe trust the privacy policy.', 'Une vidéo attendrissante de chatons sauvés fait que Zoe fait confiance à la politique de confidentialité.'],
  ['A poster says closing now means losing hope, so Noah keeps reading.', 'Une affiche dit que fermer maintenant signifie perdre espoir, alors Noah continue de lire.'],
  ['A speaker says if you were brave, you would join us, so Rina joins.', 'Un orateur dit que si vous étiez courageux, vous nous rejoindriez, alors Rina rejoint le groupe.'],
  ['A donation page says one click can break your heart, so Hugo gives before reading the mission.', 'Une page de dons dit qu un seul clic peut vous briser le cœur, alors Hugo donne avant de lire la mission.'],
  ['A politician says vote yes or your street will be next, so the crowd votes yes.', 'Un politicien dit de voter oui ou votre rue sera la prochaine, alors la foule vote oui.'],
  ['A brochure says the world will be worse by morning unless you respond, so Nina replies instantly.', 'Une brochure dit que le monde sera pire au matin si vous ne répondez pas, alors Nina répond immédiatement.'],
  ['A fundraiser video shows a lonely child and says only heartless people ignore this cause, so Leo donates.', 'Une vidéo de collecte montre un enfant seul et dit que seuls les cœurs durs ignorent cette cause, alors Leo donne.'],
  ['A poster says your grandmother would be proud if you buy now, so Priya feels pushed to purchase.', 'Une affiche dit que votre grand-mère serait fière si vous achetez maintenant, alors Priya se sent poussée à acheter.'],
  ['A message says this deal will make your family smile forever, so Ben clicks buy.', 'Un message dit que cette offre fera sourire votre famille pour toujours, alors Ben clique sur acheter.'],
  ['A commercial shows a tearful reunion and says the product will heal your life, so Tara trusts it.', 'Une publicité montre des retrouvailles en larmes et dit que le produit guérira votre vie, alors Tara le croit.'],
  ['A flyer says good parents choose this class, so Omar signs up to avoid guilt.', 'Un prospectus dit que les bons parents choisissent ce cours, alors Omar s inscrit par culpabilité.'],
  ['A charity page says imagine your child in this pain, so Ava donates without comparing causes.', 'Une page caritative dit d imaginer votre enfant dans cette douleur, alors Ava donne sans comparer les causes.'],
  ['A post says refusing this event would make you selfish, so Mia accepts the invite.', 'Une publication dit que refuser cet événement vous rendrait égoïste, alors Mia accepte l invitation.'],
  ['A video with sad music says this policy will fix your grief, so Noah agrees too fast.', 'Une vidéo avec musique triste dit que cette politique réparera votre chagrin, alors Noah est d accord trop vite.'],
  ['A banner says every kind person backs this plan, so Rina feels forced to support it.', 'Une bannière dit que toute personne gentille soutient ce plan, alors Rina se sent forcée de le soutenir.'],
  ['A text says think of the children who will cry if you say no, so Jules replies yes.', 'Un texto dit de penser aux enfants qui pleureront si vous dites non, alors Jules répond oui.'],
];

const EN = ['Appeal to Emotion', 'Appeal to Popularity', 'False Dilemma', 'Slippery Slope'];
const FR = ["Appel à l'émotion", 'Appel à la popularité', 'Fausse dichotomie', 'Pente glissante'];

const rotate = (a: string[], i: number) => {
  const r = a.slice(1);
  r.splice(i, 0, a[0]);
  return r;
};

const sub = (i: number) => (i < 17 ? SubLevel.BEGINNER : i < 34 ? SubLevel.INTERMEDIATE : SubLevel.EXPERT);

function make(fr = false): Question[] {
  return SCENARIOS.map(([english, french], i) => {
    const c = i % 4;
    return {
      id: 30401 + i,
      level: 1,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? "Appel à l'émotion" : 'Appeal to Emotion',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${fr ? french : english}"`,
      options: rotate(fr ? FR : EN, c),
      correct_option_index: c,
      explanation: fr
        ? "Le message essaie de provoquer la peur, la culpabilité, la pitié ou l excitation pour faire accepter une conclusion sans preuve solide."
        : 'The message tries to trigger fear, guilt, pity, or excitement so the conclusion is accepted without solid evidence.',
      detailedExplanationBeginner: fr
        ? "L émotion remplace les preuves."
        : 'Emotion is being used instead of evidence.',
      detailedExplanationIntermediate: fr
        ? "Le sentiment peut être réel, mais il ne montre pas si la conclusion est vraie, utile ou bien fondée."
        : 'The feeling may be real, but it does not show whether the conclusion is true, useful, or well supported.',
      detailedExplanationExpert: fr
        ? "L appel à l émotion devient fautif quand l intensité affective sert de substitut à l évaluation des faits, du contexte et des conséquences réelles."
        : 'Appeal to emotion becomes faulty when emotional intensity is used as a substitute for evaluating facts, context, and real consequences.',
      questionFormat: 'standard',
    };
  });
}

export const APPEAL_TO_EMOTION_EXPANSION_EN: Question[] = make();
export const APPEAL_TO_EMOTION_EXPANSION_FR: Question[] = make(true);

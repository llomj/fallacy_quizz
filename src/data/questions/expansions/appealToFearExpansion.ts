import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["A pop-up says your family photos will vanish in ten minutes unless you install this security app, so Jules installs it immediately on his tablet.", "Une fenêtre surgissante dit que vos photos de famille disparaîtront dans dix minutes si vous n'installez pas cette application de sécurité, alors Jules l'installe immédiatement sur sa tablette."],
  ["The email warns that skipping this webinar will ruin your career by Friday, and Mia signs up in a panic before reading the topic.", "Le courriel avertit que manquer ce webinaire ruinera votre carrière d'ici vendredi, et Mia s'inscrit dans la panique avant de lire le sujet."],
  ["A neighbor says, 'If you do not sign the petition, our street will become unsafe,' so Omar signs without checking.", "Un voisin dit : « Si tu ne signes pas la pétition, notre rue deviendra dangereuse », alors Omar signe sans vérifier."],
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
  ["A text says the town will be ruined by sunset unless people buy the alarm kit, so Maya orders it.", "Un texto dit que la ville sera ruinée au coucher du soleil si les gens n'achètent pas le kit d'alarme, alors Maya le commande."],
  ["A banner warns that the park will become a crime zone if you do not fund the fence, so Leo donates.", "Une bannière avertit que le parc deviendra une zone de crime si vous ne financez pas la clôture, alors Leo donne."],
  ["A speaker says the school will be unsafe by Monday unless the fee is paid, so Priya pays it.", "Un orateur dit que l'école sera dangereuse d'ici lundi si les frais ne sont pas payés, alors Priya les paie."],
  ["A message claims your house will be targeted tonight without this upgrade, so Ben buys the upgrade.", "Un message prétend que votre maison sera visée ce soir sans cette amélioration, alors Ben achète l'amélioration."],
  ["A flyer says not joining the patrol will invite disaster, so Nora joins from fear.", "Un prospectus dit que ne pas rejoindre la patrouille invitera le désastre, alors Nora rejoint par peur."],
  ["A pop-up warns that your files will vanish forever unless you pay, so Omar pays immediately.", "Une fenêtre surgissante avertit que vos fichiers disparaîtront pour toujours si vous ne payez pas, alors Omar paie immédiatement."],
  ["A post says ignoring the alert means leaving your children unprotected, so Ava acts fast.", "Une publication dit qu'ignorer l'alerte signifie laisser vos enfants sans protection, alors Ava agit vite."],
  ["A commercial says the neighborhood will be overrun by strangers unless you buy their system, so Sam buys it.", "Une publicité dit que le quartier sera envahi par des inconnus si vous n'achetez pas leur système, alors Sam l'achète."],
  ["A warning says the wrong answer will bring embarrassment for life, so Tia avoids it.", "Un avertissement dit que la mauvaise réponse apportera une honte à vie, alors Tia l'évite."],
  ["A note says the street will be unsafe by morning unless someone calls the guard, so Eva calls.", "Une note dit que la rue sera dangereuse au matin si quelqu'un n'appelle pas le gardien, alors Eva appelle."],
  [`Maya says the app will expose all her photos if she does not pay today.`, `Maya dit que l application exposera toutes ses photos si elle ne paie pas aujourd hui.`],
  [`Leo signs up for the alarm service because the ad says one open window invites catastrophe.`, `Leo s inscrit au service d alarme parce que la pub dit qu une seule fenetre ouverte invite la catastrophe.`],
  [`Nina buys the expensive filter because the brochure says every sip without it is reckless.`, `Nina achete le filtre cher parce que la brochure dit que chaque gorgée sans lui est temeraire.`],
  [`Owen agrees to the policy because the memo says dissent will put the whole team at risk.`, `Owen accepte la politique parce que la note dit que desaccord mettra toute l equipe en danger.`],
  [`Priya orders the panic kit because the flyer says hesitation will cost lives.`, `Priya commande le kit de panique parce que le prospectus dit que l hesitation coutera des vies.`],
  [`Ben rushes to buy the insurance because the salesman says one slip could ruin his family forever.`, `Ben se precipite pour acheter l assurance parce que le vendeur dit qu une seule erreur pourrait ruiner sa famille pour toujours.`],
  [`Tara follows the warning message because it says ignoring it makes her responsible for any loss.`, `Tara suit le message d avertissement parce qu il dit qu ignorer le message la rendra responsable de toute perte.`],
  [`Kai pays for the subscription because the pop-up says his account will be destroyed in minutes.`, `Kai paie l abonnement parce que la fenetre surgissante dit que son compte sera detruit en quelques minutes.`],
  [`Jules cancels the trip because the post says the city will be unsafe by sunset.`, `Jules annule le voyage parce que la publication dit que la ville sera dangereuse au coucher du soleil.`],
  [`Ava switches banks because the email says staying put is gambling with her savings.`, `Ava change de banque parce que le courriel dit que rester ou elle est revient a jouer avec ses economies.`],
  [`Noah signs the petition because it says the neighborhood will collapse otherwise.`, `Noah signe la petition parce qu elle dit que le quartier s effondrera sinon.`],
  [`Mina accepts the upgrade because the alert says without it her phone will be easy prey.`, `Mina accepte la mise a niveau parce que l alerte dit que sans elle son telephone sera une proie facile.`],
  [`Eli gives money because the poster says children will suffer tonight if he waits.`, `Eli donne de l argent parce que l affiche dit que des enfants souffriront ce soir s il attend.`],
  [`Rina buys the gadget because the sales pitch says not buying it means inviting disaster.`, `Rina achete le gadget parce que le discours de vente dit que ne pas l acheter, c est inviter le desastre.`],
  [`Hugo changes his plan because the coach says failure is guaranteed without this exact method.`, `Hugo change son plan parce que l entraineur dit que l echec est garanti sans cette methode exacte.`],
  [`Lina avoids the road because the sign says one wrong turn will lead to ruin.`, `Lina evite la route parce que le panneau dit qu un seul mauvais virage menera a la ruine.`],
  [`Grant joins the course because the ad says anyone who delays will be left behind forever.`, `Grant rejoint le cours parce que la pub dit que quiconque tarde sera laisse pour compte pour toujours.`],
  [`Milo accepts the tool because the warning says using anything else could destroy the project.`, `Milo accepte l outil parce que l avertissement dit que toute autre chose pourrait detruire le projet.`],
  [`Theo takes the longer route because the screen says the bridge could fail at any moment.`, `Theo prend le chemin plus long parce que l ecran dit que le pont pourrait ceder a tout moment.`],
  [`Pia buys the software because the pop-up says her files will vanish forever if she closes it.`, `Pia achete le logiciel parce que la fenetre surgissante dit que ses fichiers disparaitront pour toujours si elle la ferme.`],
  [`Finn obeys the message because it says people who ignore it are the ones who get hurt.`, `Finn obeit au message parce qu il dit que ceux qui l ignorent sont ceux qui se blessent.`],
  [`Maya says the town needs the new fence because the poster says the park will become a crime zone.`, `Maya dit que la ville a besoin de la nouvelle cloture parce que l affiche dit que le parc deviendra une zone de crime.`],
  [`Sam donates because the email says the fundraiser will collapse unless he acts now.`, `Sam donne parce que le courriel dit que la collecte s effondrera s il n agit pas maintenant.`],
  [`Juno signs up because the promotion says doing nothing is the same as choosing danger.`, `Juno s inscrit parce que la promotion dit que ne rien faire, c est choisir le danger.`],
  [`Iris says the class should keep the rule because the notice says questioning it will embarrass the child.`, `Iris dit que la classe devrait garder la regle parce que l avis dit que la questionner humiliera l enfant.`],
  [`Cole agrees to the deadline because the manager says jobs are at risk if anyone delays.`, `Cole accepte la date limite parce que le responsable dit que les emplois sont en danger si quelqu un tarde.`],
  [`Nora follows the alert because the ad says one missed update could cost everything.`, `Nora suit l alerte parce que la pub dit qu une seule mise a jour manquee pourrait tout couter.`],
  [`Ari chooses the expensive plan because the commercial says it is the only shield against disaster.`, `Ari choisit le plan cher parce que la pub dit que c est le seul bouclier contre le desastre.`],
  [`Rita clicks the link because the chat says her account is in immediate danger.`, `Rita clique sur le lien parce que le chat dit que son compte est en danger immediat.`],
  [`Tia agrees with the politician because the flyer says the other side will make everything unsafe.`, `Tia est d accord avec le politicien parce que le tract dit que l autre camp rendra tout dangereux.`],
  [`Oli buys the package because the seller says fear itself is the clock running out.`, `Oli achete le paquet parce que le vendeur dit que la peur elle-meme est le temps qui s ecoule.`],
  [`Lara says the warning is right because no one wants to be the person who ignored it.`, `Lara dit que l avertissement a raison parce que personne ne veut etre la personne qui l a ignore.`],
  [`Ben pays the toll because the sign says the bridge is dangerous without the detour.`, `Ben paie le peage parce que le panneau dit que le pont est dangereux sans le detour.`],
  [`Mina donates because the banner says the city will suffer without the volunteer club.`, `Mina donne parce que la banniere dit que la ville souffrira sans le club de benevoles.`],
  [`Drew installs the app because the warning says he will regret it every day if he does not.`, `Drew installe l application parce que l avertissement dit qu il le regrettera chaque jour s il ne le fait pas.`],
  [`Jade says the school should pay because the notice says the exam will be doomed otherwise.`, `Jade dit que l ecole devrait payer parce que l avis dit que l examen sera condamne sinon.`],
  [`Owen buys the kit because the article says termites are everywhere unless it is used.`, `Owen achete le kit parce que l article dit que les termites sont partout si on ne l utilise pas.`],
  [`Mila joins the patrol because the poster says disaster will come if she refuses.`, `Mila rejoint la patrouille parce que l affiche dit que le desastre arrivera si elle refuse.`],
  [`Evan sends the reply because the email says the world will be worse by morning.`, `Evan envoie la reponse parce que le courriel dit que le monde sera pire au matin.`],
  [`Kira takes the advice because the text says her family could be at risk if she hesitates.`, `Kira suit le conseil parce que le texto dit que sa famille pourrait etre en danger si elle hesite.`],
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

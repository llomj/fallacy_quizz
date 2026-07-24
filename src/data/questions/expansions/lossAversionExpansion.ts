import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Mia keeps a broken phone case because replacing it would feel like losing something, even though a new case would protect the phone better on the bus and at school.', "Mia garde une coque de telephone cassee parce que la remplacer lui donnerait l'impression de perdre quelque chose, alors qu'une nouvelle coque protegerait mieux le telephone dans le bus et a l ecole."],
  ['Leo refuses to switch to a cheaper plan because he does not want to lose his old perks on streaming apps and cloud storage.', "Leo refuse de changer pour une offre moins chere parce qu'il ne veut pas perdre ses anciens avantages sur les applications de streaming et le stockage nuage."],
  ['Nina will not sell an unused game console because parting with it feels worse than the cash would feel good.', "Nina ne veut pas vendre une console de jeu inutilisee parce que s'en separer lui semble pire que l'argent ne lui ferait plaisir."],
  ['Owen stays with a bad streaming bundle because canceling feels like a loss, even though he barely uses it.', "Owen garde un mauvais forfait de streaming parce qu'annuler lui semble etre une perte, meme s'il l'utilise a peine."],
  ['Priya avoids trying the new phone trade-in because she hates the idea of losing her current device.', "Priya evite d'essayer le nouvel echange de telephone parce qu'elle deteste l'idee de perdre son appareil actuel."],
  ['Ben keeps the old chair because giving it away feels like losing money, even though it hurts his back.', "Ben garde l'ancienne chaise parce que la donner lui semble etre une perte d'argent, meme si elle lui fait mal au dos."],
  ['Tara refuses the free upgrade because she fears losing the familiar layout of the app.', "Tara refuse la mise a niveau gratuite parce qu'elle craint de perdre la disposition familiere de l'application."],
  ['Kai sticks with the expensive plan because changing feels risky, even though the new one is better.', "Kai reste sur le forfait cher parce que changer lui semble risqué, meme si le nouveau est meilleur."],
  ['Jules will not donate an old jacket because having it gone feels worse than the storage space it wastes.', "Jules ne veut pas donner une vieille veste parce que ne plus l'avoir lui semble pire que la place qu'elle gaspille."],
  ['Ava keeps a dusty subscription because canceling feels like losing access, even though she never opens it.', "Ava garde un abonnement poussiereux parce qu'annuler lui donne l'impression de perdre l'acces, meme si elle ne l'ouvre jamais."],
  ['Noah refuses to exchange a faulty mug because getting a refund feels less satisfying than keeping it.', "Noah refuse d'echanger une tasse defectueuse parce qu'obtenir un remboursement lui semble moins satisfaisant que de la garder."],
  ['Mina stays in a bad seat on the bus because moving would feel like giving something up.', "Mina reste sur un mauvais siege dans le bus parce que bouger lui donnerait l'impression de renoncer a quelque chose."],
  ['Eli will not change banks because the idea of losing the old app is more upsetting than the better fees.', "Eli ne veut pas changer de banque parce que l'idee de perdre l'ancienne application le derange plus que les meilleurs frais."],
  ['Rina keeps a broken lamp because replacing it would mean losing the original one.', "Rina garde une lampe cassee parce que la remplacer voudrait dire perdre l'originale."],
  ['Hugo accepts a worse schedule because switching would mean losing his usual break time.', "Hugo accepte un horaire moins bon parce que changer signifierait perdre son heure de pause habituelle."],
  ['Lina does not trade her old shoes even though they hurt, because a new pair would feel like a loss of value.', "Lina n'echangerait pas ses vieilles chaussures meme si elles font mal, parce qu'une nouvelle paire lui semblerait etre une perte de valeur."],
  ['Grant keeps paying for a storage unit full of junk because clearing it out feels like losing options.', "Grant continue de payer un box de stockage plein de bric-a-brac parce que le vider lui semble faire perdre des options."],
  ['Zoe refuses the cash refund for the concert because she wants to keep the ticket stub as proof she was there.', "Zoe refuse le remboursement en argent du concert parce qu'elle veut garder le billet comme preuve qu'elle y etait."],
  ['Milo keeps the old laptop charger even though it barely works, because buying a new one feels like a loss.', "Milo garde l'ancien chargeur d'ordinateur portable meme s'il fonctionne mal, parce qu'en acheter un nouveau lui semble etre une perte."],
  ['Theo will not switch to the train because missing the car feels worse than saving money.', "Theo ne veut pas prendre le train parce qu'abandonner la voiture lui semble pire que d'economiser de l'argent."],
  ['Pia avoids the cheaper meal because the larger portion looks like the safer way not to lose out.', "Pia evite le repas moins cher parce que la grande portion lui semble etre la facon la plus sure de ne rien perdre."],
  ['Finn keeps a cluttered desk because throwing anything away feels like losing useful stuff.', "Finn garde un bureau encombre parce que jeter quoi que ce soit lui semble faire perdre des choses utiles."],
  ['Maya declines the game restart because losing the current score feels worse than the chance to improve it.', "Maya refuse de recommencer la partie parce que perdre le score actuel lui semble pire que la chance de l'ameliorer."],
  ['Sam refuses to try the new route because the old one feels safer, even when traffic is bad.', "Sam refuse d'essayer le nouvel itineraire parce que l'ancien lui semble plus sur, meme quand la circulation est mauvaise."],
  ['Juno will not cut the extra subscription because losing the bonus content hurts more than the fee helps.', "Juno ne veut pas supprimer l'abonnement supplementaire parce que perdre le contenu bonus lui fait plus mal que les frais ne l'aident."],
  ['Iris keeps a broken umbrella because replacing it feels like admitting a loss.', "Iris garde un parapluie casse parce que le remplacer lui donne l'impression d'admettre une perte."],
  ['Cole stays in the same seat at the restaurant because moving would mean losing the spot he already claimed.', "Cole reste a la meme place au restaurant parce que bouger voudrait dire perdre la place qu'il a deja prise."],
  ['Nora refuses the sample upgrade because the smaller original package feels less risky to keep.', "Nora refuse l'echantillon amelioré parce que le petit emballage d'origine lui semble moins risqué a garder."],
  ['Ari does not replace the old wallpaper because the new roll would mean throwing away what is left.', "Ari ne remplace pas le vieux papier peint parce que le nouveau rouleau voudrait dire jeter ce qu'il reste."],
  ['Rita keeps a broken toaster because she hates giving up something she already owns.', "Rita garde un grille-pain casse parce qu'elle deteste abandonner quelque chose qu'elle possede deja."],
  ['Tia refuses the slightly better seat because she would lose the seat she already reserved.', "Tia refuse le siege un peu meilleur parce qu'elle perdrait celui qu'elle a deja reserve."],
  ['Oli keeps the expensive gym membership because canceling feels like wasting what he already paid.', "Oli garde l'abonnement couteux a la salle parce qu'annuler lui semble gaspiller ce qu'il a deja paye."],
  ['Lara will not trade the old bike because losing it feels harder than gaining the newer one.', "Lara ne veut pas echanger l'ancien velo parce que le perdre lui semble plus dur que gagner le plus recent."],
  ['Ben stays in the noisy apartment because leaving would mean losing the current deposit.', "Ben reste dans l'appartement bruyant parce que partir voudrait dire perdre la caution actuelle."],
  ['Mina refuses the simpler app because learning a new interface feels like losing mastery.', "Mina refuse l'application plus simple parce qu'apprendre une nouvelle interface lui donne l'impression de perdre sa maitrise."],
  ['Drew keeps a gift he dislikes because returning it feels like throwing away value.', "Drew garde un cadeau qu'il n'aime pas parce que le rendre lui semble jeter de la valeur."],
  ['Jade avoids the family plan change because the old plan feels like a safe possession.', "Jade evite de changer le forfait familial parce que l'ancien plan lui semble etre une possession sure."],
  ['Owen leaves money in a dead savings account because moving it feels like risking a loss.', "Owen laisse de l'argent dans un compte d'epargne mort parce que le deplacer lui semble risquer une perte."],
  ['Mila refuses the room swap because the current room, though worse, is already hers.', "Mila refuse d'echanger la chambre parce que la chambre actuelle, meme pire, est deja a elle."],
  ['Evan keeps using a failing printer because replacing it feels expensive in a personal way.', "Evan continue d'utiliser une imprimante qui tombe en panne parce que la remplacer lui semble couteux sur le plan personnel."],
  ['Kira will not cancel the travel insurance because losing the coverage feels more painful than the low chance of use.', "Kira ne veut pas annuler l'assurance voyage parce que perdre la couverture lui semble plus douloureux que la faible chance de l'utiliser."],
  ['Grant refuses to switch to a paperless bill because he hates giving up the old paper stack.', "Grant refuse de passer a la facture sans papier parce qu'il deteste abandonner l'ancienne pile de papiers."],
  ['Zara keeps a broken phone cable because replacing it feels like losing a backup.', "Zara garde un cable de telephone casse parce que le remplacer lui semble faire perdre une solution de secours."],
  ['Parker stays with the familiar menu item because trying something new could mean losing a safe choice.', "Parker reste sur le plat familier parce qu'essayer quelque chose de nouveau pourrait faire perdre un choix sur."],
  ['Hana rejects the better chair because leaving the old one feels like surrendering territory.', "Hana refuse la meilleure chaise parce que quitter l'ancienne lui semble ceder du terrain."],
  ['Leo keeps a broken water bottle because buying a new one feels like wasting the old one.', "Leo garde une gourde cassee parce qu'en acheter une nouvelle lui semble gaspiller l'ancienne."],
  ['Maya stays with the crowded workshop because a switch would mean losing the familiar instructor.', "Maya reste dans l'atelier bondé parce qu'un changement voudrait dire perdre l'instructeur habituel."],
  ['Nina refuses the free calendar app because syncing would make her lose the old notes layout.', "Nina refuse l'application de calendrier gratuite parce que la synchronisation lui ferait perdre l'ancienne mise en page des notes."],
  [`Owen keeps paying for a storage unit full of junk because clearing it out feels like losing options.`, `Owen continue de payer pour un box de stockage plein de bric-a-brac parce que le vider lui semble faire perdre des options.`],
  [`Priya refuses the cheaper phone plan because giving up the old perks feels worse than saving money.`, `Priya refuse l offre telephone moins chere parce qu abandonner les anciens avantages lui semble pire que d economiser.`],
  [`Ben will not sell an unused game console because the idea of losing it feels more upsetting than the cash would feel good.`, `Ben ne veut pas vendre une console de jeu inutilisee parce que l idee de la perdre lui semble plus derangeante que l argent lui ferait plaisir.`],
  [`Tara keeps a broken lamp because replacing it feels like admitting a loss.`, `Tara garde une lampe cassee parce que la remplacer lui donne l impression d admettre une perte.`],
  [`Kai sticks with the expensive plan because switching feels risky, even though the new one is better.`, `Kai reste sur le forfait cher parce que changer lui semble risqué, meme si le nouveau est meilleur.`],
  [`Jules refuses the cash refund for the concert because he wants to keep the ticket stub.`, `Jules refuse le remboursement en argent du concert parce qu il veut garder le billet.`],
  [`Ava will not trade the old bike because losing it feels harder than gaining the newer one.`, `Ava ne veut pas echanger l ancien velo parce que le perdre lui semble plus dur que gagner le plus recent.`],
  [`Mina avoids the free upgrade because losing the familiar layout feels worse than getting new features.`, `Mina evite la mise a niveau gratuite parce que perdre la mise en page familiere lui semble pire que de gagner de nouvelles fonctions.`],
  [`Theo keeps the broken umbrella because replacing it feels like throwing away what is left.`, `Theo garde le parapluie casse parce que le remplacer lui semble jeter ce qu il reste.`],
  [`Lina stays with the noisy apartment because leaving would mean losing the current deposit.`, `Lina reste dans l appartement bruyant parce que partir voudrait dire perdre la caution actuelle.`],
  [`Nora keeps a bad subscription because canceling feels like losing the months already paid for.`, `Nora garde un mauvais abonnement parce qu annuler lui semble faire perdre les mois deja payes.`],
  [`Maya refuses the cheaper internet plan because changing would mean giving up the old download perks.`, `Maya refuse le forfait internet moins cher parce que changer voudrait dire abandonner les anciens avantages de telechargement.`],
  [`Leo keeps a worn-out backpack because buying a new one feels like losing the old familiar one.`, `Leo garde un sac a dos use parce qu en acheter un nouveau lui semble faire perdre l ancien familier.`],
  [`Priya will not sell the unused concert ticket because letting it go feels worse than getting the money back.`, `Priya ne veut pas vendre le billet de concert inutilise parce que s en separer lui semble pire que de recuperer l argent.`],
  [`Ben sticks with the same chair because replacing it feels like losing the chair he already owns.`, `Ben reste avec la meme chaise parce que la remplacer lui semble faire perdre la chaise qu il possede deja.`],
  [`Tara keeps the old phone case because a new one would mean giving up the one she has used for years.`, `Tara garde l ancienne coque de telephone parce qu une nouvelle voudrait dire abandonner celle qu elle utilise depuis des annees.`],
  [`Kai refuses the better bus pass because the current one still has a few days left on it.`, `Kai refuse le meilleur pass de bus parce que l actuel lui reste encore quelques jours.`],
  [`Jules keeps a broken pair of headphones because throwing them away feels like wasting value.`, `Jules garde une paire d ecouteurs cassees parce que les jeter lui semble gaspiller de la valeur.`],
  [`Ava stays with the old meal plan because changing would mean losing her familiar routine.`, `Ava reste sur l ancien plan repas parce que changer voudrait dire perdre sa routine familiere.`],
  [`Noah will not switch to the easier app because he does not want to lose his progress in the old one.`, `Noah ne veut pas passer a l application plus simple parce qu il ne veut pas perdre sa progression dans l ancienne.`],
  [`Mina keeps a faded jacket because buying another one feels like admitting the first was a mistake.`, `Mina garde une veste decoloree parce qu en acheter une autre lui donne l impression d admettre que la premiere etait une erreur.`],
  [`Eli holds on to a slow laptop because replacing it feels like losing money twice.`, `Eli s accroche a un ordinateur lent parce que le remplacer lui semble faire perdre de l argent deux fois.`],
  [`Rina refuses a free upgrade because the new layout would mean losing the buttons she knows.`, `Rina refuse une mise a niveau gratuite parce que la nouvelle interface voudrait dire perdre les boutons qu elle connait.`],
  [`Hugo keeps paying for a storage locker because clearing it out feels like throwing away backup options.`, `Hugo continue de payer un box de stockage parce que le vider lui semble jeter des options de secours.`],
  [`Lina does not trade the old bike because the newer one would mean losing the frame she is used to.`, `Lina n echange pas l ancien velo parce que le plus recent lui ferait perdre le cadre auquel elle est habituee.`],
  [`Grant keeps a subscription he never uses because canceling feels like surrendering something owned.`, `Grant garde un abonnement qu il n utilise jamais parce qu annuler lui semble abandonner quelque chose de possede.`],
  [`Zoe holds onto a cracked mug because replacing it feels like losing a favorite object.`, `Zoe s accroche a une tasse fissuree parce que la remplacer lui semble faire perdre un objet prefere.`],
  [`Milo refuses a cheaper phone plan because the old perks feel too valuable to give up.`, `Milo refuse un forfait telephone moins cher parce que les anciens avantages lui semblent trop precieux pour etre abandonnes.`],
  [`Theo keeps the same desk chair because changing seats feels like giving up control.`, `Theo garde la meme chaise de bureau parce que changer de place lui semble ceder le controle.`],
  [`Pia does not donate an old coat because it feels safer to keep it than to lose it.`, `Pia ne donne pas un vieux manteau parce qu il lui semble plus sur de le garder que de le perdre.`],
  [`Finn stays with the expensive coffee blend because trying a new one risks losing the familiar taste.`, `Finn reste avec le melange de cafe cher parce qu en essayer un nouveau risque de lui faire perdre le gout familier.`],
  [`Maya refuses the room swap because the current room, though smaller, is already hers.`, `Maya refuse d echanger la chambre parce que la chambre actuelle, meme plus petite, est deja a elle.`],
  [`Sam keeps a broken lamp because replacing it would mean losing the one he already picked out.`, `Sam garde une lampe cassee parce que la remplacer voudrait dire perdre celle qu il a deja choisie.`],
  [`Juno declines a better schedule because it would require giving up her current break pattern.`, `Juno refuse un horaire meilleur parce qu il faudrait abandonner son rythme de pause actuel.`],
  [`Iris leaves money in a bad savings account because moving it feels like risking a loss.`, `Iris laisse de l argent dans un mauvais compte epargne parce que le deplacer lui semble risquer une perte.`],
  [`Cole keeps a weak umbrella because buying another one feels like wasting the old purchase.`, `Cole garde un parapluie fragile parce qu en acheter un autre lui semble gaspiller l ancien achat.`],
  [`Nora avoids the free app update because she might lose the familiar menu she likes.`, `Nora evite la mise a jour gratuite de l application parce qu elle pourrait perdre le menu familier qu elle aime.`],
  [`Ari stays with the crowded workshop because switching would mean losing the teacher he knows.`, `Ari reste dans l atelier bondé parce que changer voudrait dire perdre le professeur qu il connait.`],
  [`Rita keeps a spare cable even though it barely works because throwing it away feels like losing a backup.`, `Rita garde un cable de secours meme s il fonctionne a peine parce que le jeter lui semble faire perdre une solution de secours.`],
  [`Tia will not sell the old game console because the cash does not feel as real as the console does.`, `Tia ne veut pas vendre l ancienne console de jeu parce que l argent ne lui semble pas aussi reel que la console.`],
  [`Oli refuses the new paperless bill because the paper stack feels like something he owns.`, `Oli refuse la nouvelle facture sans papier parce que la pile de papiers lui semble etre quelque chose qu il possede.`],
  [`Lara keeps the broken toaster because swapping it out feels like admitting defeat.`, `Lara garde le grille-pain casse parce que le remplacer lui semble etre admettre une defaite.`],
  [`Ben sticks with the same grocery brand because the familiar box feels safer than a new one.`, `Ben reste avec la meme marque d epicerie parce que la boite familiere lui semble plus sure qu une nouvelle.`],
  [`Mina declines the better phone trade-in because she does not want to part with the old device yet.`, `Mina refuse le meilleur echange de telephone parce qu elle ne veut pas encore se separer de l ancien appareil.`],
  [`Drew keeps an outdated printer because replacing it feels like losing what still sort of works.`, `Drew garde une imprimante depassee parce que la remplacer lui semble faire perdre ce qui fonctionne encore un peu.`],
  [`Jade stays with the bad streaming bundle because canceling feels like losing access to all those channels.`, `Jade reste avec le mauvais forfait de streaming parce qu annuler lui semble faire perdre l acces a toutes ces chaines.`],
  [`Owen keeps the old bike lock because buying a new one feels like wasting the first one.`, `Owen garde l ancien antivol de velo parce qu en acheter un nouveau lui semble gaspiller le premier.`],
  [`Mila refuses to switch banks because she would lose the app she already knows how to use.`, `Mila refuse de changer de banque parce qu elle perdrait l application qu elle sait deja utiliser.`],
  [`Evan hangs on to a worn-out mattress because replacing it feels like losing the money already spent.`, `Evan s accroche a un matelas use parce que le remplacer lui semble faire perdre l argent deja depense.`],
  [`Kira keeps the old water bottle because the new one would mean leaving behind the familiar scratches.`, `Kira garde l ancienne gourde parce que la nouvelle voudrait dire laisser derriere les rayures familières.`],
  [`Grant stays with the old meal subscription because canceling would feel like throwing away the last few credits.`, `Grant reste avec l ancien abonnement repas parce qu annuler lui semblerait jeter les derniers credits.`],
  [`Zara refuses the simpler note app because she might lose the old notes layout.`, `Zara refuse l application de notes plus simple parce qu elle pourrait perdre l ancienne mise en page.`],
];

const OPTIONS_EN = ['Loss Aversion', 'Status Quo Bias', 'Endowment Effect', 'Risk Aversion'];
const OPTIONS_FR = ['Aversion à la perte', 'Biais du statu quo', 'Effet de dotation', 'Aversion au risque'];

function rotatedOptions(options: string[], correctIndex: number): string[] {
  const distractors = options.slice(1);
  const result = [...distractors];
  result.splice(correctIndex, 0, options[0]);
  return result;
}

function subLevelFor(index: number): SubLevel {
  if (index < 43) return SubLevel.BEGINNER;
  if (index < 50) return SubLevel.INTERMEDIATE;
  return SubLevel.EXPERT;
}

function createQuestions(language: 'en' | 'fr'): Question[] {
  return SCENARIOS.map(([english, french], index) => {
    const correctIndex = index % 4;
    const isFrench = language === 'fr';
    return {
      id: 38701 + index,
      level: 3,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Aversion à la perte' : 'Loss Aversion',
      difficulty: index < 43 ? 1 : index < 50 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais est illustré ici ?' : 'Which bias is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? "La personne réagit plus fortement à l'idée de perdre quelque chose qu'à l'idée de gagner l'équivalent."
        : 'The person reacts more strongly to the idea of losing something than to gaining the equivalent.',
      detailedExplanationBeginner: isFrench
        ? "Perdre paraît plus douloureux que gagner ne paraît agréable."
        : 'Losing feels more painful than gaining feels pleasant.',
      detailedExplanationIntermediate: isFrench
        ? "L'aversion à la perte pousse souvent à garder une option moyenne ou mauvaise juste pour éviter une perte ressentie."
        : 'Loss aversion often pushes people to keep a mediocre or bad option just to avoid a felt loss.',
      detailedExplanationExpert: isFrench
        ? "Ce biais surevalue psychologiquement les pertes par rapport aux gains comparables, ce qui fausse l'arbitrage entre changement, sécurité et potentiel de progression."
        : 'This bias psychologically overweights losses relative to comparable gains, distorting tradeoffs between change, safety, and potential improvement.',
      questionFormat: 'standard',
    };
  });
}

export const LOSS_AVERSION_EXPANSION_EN: Question[] = createQuestions('en');
export const LOSS_AVERSION_EXPANSION_FR: Question[] = createQuestions('fr');

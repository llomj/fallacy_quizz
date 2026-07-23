import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Mia keeps a broken phone case because replacing it would feel like losing something, even though a new case would protect the phone better.', "Mia garde une coque de telephone cassee parce que la remplacer lui donnerait l'impression de perdre quelque chose, alors qu'une nouvelle coque protegerait mieux le telephone."],
  ['Leo refuses to switch to a cheaper plan because he does not want to lose his old perks.', "Leo refuse de changer pour une offre moins chere parce qu'il ne veut pas perdre ses anciens avantages."],
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

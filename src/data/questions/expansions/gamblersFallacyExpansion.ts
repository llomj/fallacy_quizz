import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['After three coin flips land heads, Owen is sure tails is due on the next flip at the park table.', "Apres trois lancers de piece sur face, Owen est sur que pile va tomber au prochain lancer a la table du parc."],
  ['Maya loses three roulette rounds and bets bigger because the wheel must "owe" her a win by now.', "Maya perd trois tours de roulette et mise plus gros parce que la roue lui « doit » bien une victoire maintenant."],
  ['Leo sees four red cars in a row and thinks the next car has to be blue.', "Leo voit quatre voitures rouges d'affilee et pense que la prochaine doit etre bleue."],
  ['Nina misses a bus twice and assumes the next bus will be late, so she stops hurrying.', "Nina rate le bus deux fois et suppose que le prochain sera en retard, alors elle arrete de se presser."],
  ['After five rainy days, Ben says tomorrow is almost guaranteed to be sunny.', "Apres cinq jours de pluie, Ben dit que demain sera presque surement ensoleille."],
  ['Sofia thinks the sixth batter will strike out because the first five all got hits.', "Sofia pense que le sixieme frappeur va se faire retirer parce que les cinq premiers ont tous frappe."],
  ['Jules loses four coin toss bets and doubles the next one, convinced the streak must end.', "Jules perd quatre paris sur des lancers de piece et double le suivant, convaincu que la serie doit s'arreter."],
  ['After three missed free throws, Tara believes the next shot is "bound" to go in.', "Apres trois lancers francs rates, Tara croit que le prochain va forcement rentrer."],
  ['Kai sees a slot machine fail twice and assumes the third pull is the lucky one.', "Kai voit une machine a sous echouer deux fois et suppose que le troisieme essai sera le bon."],
  ['Mina says the raffle ticket has to win now because it has already lost so many times.', "Mina dit que le billet de tombola doit gagner maintenant parce qu'il a deja perdu tant de fois."],
  ['After three bad quiz guesses, Eli changes only the last answer because "the pattern has to flip."', "Apres trois mauvaises reponses au quiz, Eli change seulement la derniere car « le motif doit s'inverser »."],
  ['Ava believes the next sock in the dryer will finally match because the last four did not.', "Ava croit que la prochaine chaussette dans le seche-linge ira enfin avec l'autre parce que les quatre precedentes non."],
  ['Noah thinks the next roll of dice must be high after five low rolls.', "Noah pense que le prochain lancer de des doit etre eleve apres cinq lancers bas."],
  ['Rina assumes the store will finally have her size after three sold-out visits.', "Rina suppose que le magasin aura enfin sa taille apres trois visites sans stock."],
  ['Drew thinks a cold streak in basketball makes a made basket almost guaranteed.', "Drew pense qu'une serie froide au basket rend un panier marque presque garanti."],
  ['Priya believes the next traffic light will be green because the last three were red.', "Priya croit que le prochain feu sera vert parce que les trois precedents etaient rouges."],
  ['Omar says the next lottery ticket is the one, because the stack has been unlucky for weeks.', "Omar dit que le prochain ticket de loterie est le bon parce que la pile est malchanceuse depuis des semaines."],
  ['After six failed attempts to open a jar, Kira assumes the seventh try has to work.', "Apres six tentatives ratees pour ouvrir un bocal, Kira suppose que la septieme doit marcher."],
  ['Felix thinks the next restaurant visit will be excellent because the last three were mediocre.', "Felix pense que la prochaine visite au restaurant sera excellente parce que les trois dernieres etaient moyennes."],
  ['Zoe says the next exam question will be easy after a string of hard ones.', "Zoe dit que la prochaine question d'examen sera facile apres une serie de questions dures."],
  ['Milo believes the next train will be on time because the last two were late.', "Milo croit que le prochain train sera a l'heure parce que les deux precedents etaient en retard."],
  ['Hana keeps betting the coin will switch after four straight losses on heads.', "Hana continue de parier que la piece va changer apres quatre pertes d'affilee sur face."],
  ['Theo says his team is "due" a goal because they have missed several chances.', "Theo dit que son equipe est « en retard » pour marquer parce qu'elle a rate plusieurs occasions."],
  ['Lea thinks the next parking space will be open because the last four were full.', "Lea pense que la prochaine place de parking sera libre parce que les quatre dernieres etaient pleines."],
  ['Grant assumes the next call from customer support will go through after three dropped calls.', "Grant suppose que le prochain appel au support passera apres trois appels coupes."],
  ['Iris believes the next bag of candy must have the color she wants after several misses.', "Iris croit que le prochain sachet de bonbons doit contenir la couleur qu'elle veut apres plusieurs echecs."],
  ['Juno expects the next card draw to be an ace because the deck has been "dry" lately.', "Juno s'attend a ce que la prochaine carte soit un as parce que le paquet a ete « sec » recemment."],
  ['Parker says the next coffee refill will be free because the last two were not.', "Parker dit que le prochain remplissage de cafe sera gratuit parce que les deux derniers ne l'etaient pas."],
  ['Maya thinks the next appointment will be short because the last three were long.', "Maya pense que le prochain rendez-vous sera court parce que les trois derniers etaient longs."],
  ['Dylan assumes the next spinner result has to land on the missing color.', "Dylan suppose que le prochain resultat de la roue doit tomber sur la couleur manquante."],
  ['Nora believes the next raffle draw is lucky after a week of bad luck.', "Nora croit que le prochain tirage de tombola sera chanceux apres une semaine de malchance."],
  ['Sam says the next penalty kick is guaranteed after two misses in a row.', "Sam dit que le prochain penalty est garanti apres deux ratés d'affilee."],
  ['Tia assumes the next page in the textbook will finally be the one she needs.', "Tia suppose que la prochaine page du manuel sera enfin celle dont elle a besoin."],
  ['Evan thinks the next package delivery will arrive early because the last two arrived late.', "Evan pense que la prochaine livraison de colis arrivera en avance parce que les deux precedentes etaient en retard."],
  ['Lina predicts the next quiz answer will be correct after four wrong guesses.', "Lina predit que la prochaine reponse au quiz sera juste apres quatre mauvaises reponses."],
  ['Cole says the next marble pulled from the bag has to be green because green has been missing.', "Cole dit que la prochaine bille tiree du sac doit etre verte parce que le vert manque depuis longtemps."],
  ['Mila believes the next bus seat will be empty after standing the last three rides.', "Mila croit que le prochain siege de bus sera libre apres etre restee debout les trois derniers trajets."],
  ['Ari says the next skateboard trick has to land because he has missed the last four.', "Ari dit que la prochaine figure de skateboard doit reussir parce qu'il a rate les quatre dernieres."],
  ['Pia thinks the next song on shuffle will be her favorite because the app has been "saving" it.', "Pia pense que la prochaine chanson en lecture aleatoire sera sa preferee parce que l'application la « garde »."],
  ['Oli believes the next jar of salsa will be mild because the last one was spicy.', "Oli croit que le prochain pot de salsa sera doux parce que le dernier etait fort."],
  ['Rita says the next dice roll will be a six after the previous five were not.', "Rita dit que le prochain lancer de des sera un six apres que les cinq precedents ne l'etaient pas."],
  ['Ben assumes the next email from the boss will be good news after three bad ones.', "Ben suppose que le prochain email du patron apportera une bonne nouvelle apres trois mauvaises."],
  ['Jade thinks the next vending machine try must work after two failures.', "Jade pense que le prochain essai au distributeur doit marcher apres deux echecs."],
  ['Finn says the next weather forecast will reverse because the last three were wrong.', "Finn dit que la prochaine meteo va s'inverser parce que les trois dernieres etaient fausses."],
  ['Mina believes the next penalty in the game will be a miss because hits cannot keep coming.', "Mina croit que la prochaine penalite du jeu sera un echec parce que les reussites ne peuvent pas continuer."],
  ['Grant thinks the next bus will be empty after a crowded week.', "Grant pense que le prochain bus sera vide apres une semaine de foule."],
  ['Sofia assumes the next coin flip is owed to her after a long losing run.', "Sofia suppose que le prochain lancer de piece lui est du apres une longue serie de defaites."],
  ['Hugo says the next paint sample has to be the right shade because the last five were wrong.', "Hugo dit que le prochain echantillon de peinture doit etre la bonne teinte parce que les cinq derniers etaient faux."],
  ['After six heads in a row, Mara is certain the next flip must be tails, even though the coin has no memory.', 'Apres six faces d affilee, Mara est certaine que le prochain lancer doit etre pile, meme si la piece n a pas de memoire.'],
  ['Rory loses three basketball shots and bets the next one is guaranteed to go in.', 'Rory rate trois tirs au basket et parie que le prochain va forcement rentrer.'],
  ['After five empty parking spots, Elise thinks the next one has to be free in front of the store.', "Apres cinq places de parking occupees, Elise pense que la prochaine doit etre libre devant le magasin."],
  ['Kai sees four bad spins on the prize wheel and doubles down because the wheel is "due" to pay out.', "Kai voit quatre mauvais tours sur la roue des prix et mise davantage parce que la roue est « prete » a payer."],
  ['After four failed password guesses, Priya assumes the next guess is somehow more likely to work.', "Apres quatre essais de mot de passe rates, Priya suppose que le prochain essai a plus de chances de marcher."],
  ['Nina loses on three scratch cards and buys another because the next one must be lucky.', 'Nina perd sur trois tickets a gratter et en achete un autre parce que le prochain doit etre chanceux.'],
  ['After the team misses two penalties, Luca says the third penalty is guaranteed to be a goal.', 'Apres que l equipe a rate deux penalties, Luca dit que le troisieme sera garanti but.'],
  ['Tia flips a coin at lunch and thinks the last four tails mean heads is imminent.', 'Tia lance une piece au dejeuner et pense que les quatre dernieres piles signifient que face est imminent.'],
  ['After a week of bad raffle draws, Hugo believes the next ticket cannot possibly be unlucky again.', 'Apres une semaine de mauvais tirages de tombola, Hugo croit que le prochain ticket ne peut pas encore etre malchanceux.'],
  [`Mila keeps choosing "one more try" at the claw machine because the machine must eventually balance out.`, `Mila continue de tenter encore une fois la pince parce que la machine doit finir par se regler.`],
  ['Ben assumes a row of red traffic lights means the next light will definitely be green.', 'Ben suppose qu une serie de feux rouges veut dire que le prochain feu sera forcement vert.'],
  ['After four failed arcade tickets, Sam is sure the next swipe has to pay out.', "Apres quatre tickets d arcade rates, Sam est sur que le prochain passage doit payer."],
  ['Nina sees three missed basketball shots and thinks the next shot is automatically a swish.', "Nina voit trois tirs de basket rates et pense que le prochain tir sera automatiquement parfait."],
  ['After five bad spins on a prize wheel, Jules bets the wheel is now "due" to land on the jackpot.', "Apres cinq mauvais tours sur une roue de lots, Jules parie que la roue est maintenant « prete » a tomber sur le jackpot."],
  ['Maya loses several card hands and believes the next hand cannot also be bad.', "Maya perd plusieurs mains de cartes et croit que la prochaine main ne peut pas etre mauvaise elle aussi."],
  ['After three late buses, Theo stops worrying because the next one must be early.', "Apres trois bus en retard, Theo arrete de s inquieter parce que le prochain doit etre en avance."],
  ['Omar thinks the next dice roll has to be a six after five low rolls in a row.', "Omar pense que le prochain lancer de des doit etre un six apres cinq lancers bas d affilee."],
  ['After a string of wrong answers, Priya changes her last guess because the pattern "has to flip."', "Apres une serie de mauvaises reponses, Priya change sa derniere supposition parce que le motif « doit s inverser »."],
  ['Lina believes the next raffle ticket is guaranteed to win because the box has been unlucky for too long.', "Lina croit que le prochain ticket de tombola est garanti gagnant parce que la boite a ete malchanceuse trop longtemps."],
  ['After four missed putts, Ben says the next one must drop because the streak cannot continue.', "Apres quatre putts rates, Ben dit que le prochain doit rentrer parce que la serie ne peut pas continuer."],
  ['Rosa assumes the next coin flip will be heads simply because tails has shown up too much already.', "Rosa suppose que le prochain lancer de piece sera face simplement parce que pile est deja trop sorti."],
  ['After six failed claw machine grabs, Mina is sure the machine has to "pay out" soon.', "Apres six tentatives ratees a la pince, Mina est sure que la machine doit bientot « payer »."],
  ['Cole loses three rounds of rock-paper-scissors and expects the next round to reverse the streak.', "Cole perd trois manches de pierre-feuille-ciseaux et s attend a ce que la suivante inverse la serie."],
  ['After four missed free throws, Juno believes the next one is almost guaranteed to go in.', "Apres quatre lancers francs rates, Juno croit que le prochain va presque surement rentrer."],
  ['Theo sees five bad spins on a prize wheel and thinks the sixth spin is automatically lucky.', "Theo voit cinq mauvais tours sur une roue de lots et pense que le sixieme tour est automatiquement chanceux."],
  ['After three late buses, Lila says the next bus has to come early to balance things out.', "Apres trois bus en retard, Lila dit que le prochain doit arriver en avance pour equilibrer les choses."],
  ['Nora loses several card hands in a row and assumes the deck is now "due" to be kind.', "Nora perd plusieurs mains de cartes d affilee et suppose que le paquet est maintenant « pret » a etre gentil."],
  ['After four wrong answers in trivia, Evan changes his gut feeling because the pattern has to flip.', "Apres quatre mauvaises reponses au quiz, Evan change son intuition parce que le motif doit s inverser."],
  ['Priya sees three red lights on the drive home and thinks green is guaranteed next.', "Priya voit trois feux rouges sur le trajet du retour et pense que le vert est garanti ensuite."],
  ['After two missed penalty kicks, Omar says the third kick cannot possibly miss too.', "Apres deux penalties rates, Omar dit que le troisieme ne peut pas rater lui aussi."],
  ['Maya loses five scratch cards and buys one more because the next ticket must finally win.', "Maya perd cinq tickets a gratter et en achete un autre parce que le prochain doit enfin gagner."],
  ['After a cold streak at the bowling alley, Ben is certain the next frame will be a strike.', "Apres une mauvaise serie au bowling, Ben est certain que la prochaine manche sera un strike."],
  ['Zoe sees four bad spins on a roulette app and doubles down because the wheel owes her.', "Zoe voit quatre mauvais tours sur une application de roulette et mise plus parce que la roue lui doit bien quelque chose."],
  ['After three failed password guesses, Tara thinks the next guess is the one that has to work.', "Apres trois essais de mot de passe rates, Tara pense que le prochain est celui qui doit marcher."],
  ['Grant misses four shots on the hoop and decides the next basket is inevitable.', "Grant rate quatre tirs au panier et decide que le prochain panier est inevitable."],
  ['After a week of bad weather forecasts, Rosa believes tomorrow has to be the correction.', "Apres une semaine de mauvaises previsions meteo, Rosa croit que demain doit etre la correction."],
  ['Leo loses at dice three times and bets the next throw will finally be high.', "Leo perd aux des trois fois et parie que le prochain lancer sera enfin eleve."],
  ['After five empty parking lots, Pia thinks the next lot cannot possibly be full too.', "Apres cinq parkings vides, Pia pense que le prochain ne peut pas etre plein lui aussi."],
  ['Noah watches four misses in a row at basketball practice and assumes the next shot is due.', "Noah regarde quatre tirs rates d affilee a l entrainement de basket et suppose que le prochain est du."],
  ['After three bad spins on a prize wheel, Lina is convinced the next turn is the lucky one.', "Apres trois mauvais tours sur une roue de prix, Lina est convaincue que le prochain tour sera le bon."],
  ['Jade loses two rounds of cards and says the deck must be warming up for a win.', "Jade perd deux mains de cartes et dit que le paquet doit s echauffer pour une victoire."],
  ['After four failed arcade plays, Felix says the machine has to be generous next.', "Apres quatre parties d arcade ratees, Felix dit que la machine doit etre genereuse ensuite."],
  ['Milo misses three buses and figures the next bus is guaranteed to be on time.', "Milo rate trois bus et conclut que le prochain bus sera garanti a l heure."],
  ['After five tails in a row, Hana thinks heads is "way overdue" on the next toss.', "Apres cinq piles d affilee, Hana pense que face est « largement en retard » au prochain lancer."],
  ['Owen loses at a coin game and insists the next flip has to break the streak.', "Owen perd a un jeu de piece et insiste pour que le prochain lancer casse la serie."],
  ['After three misses at darts, Kira says the board owes her a bullseye.', "Apres trois tirs rates aux flechettes, Kira dit que le plateau lui doit un bullseye."],
  ['Sam sees four red traffic lights and says the next light must be green by now.', "Sam voit quatre feux rouges et dit que le prochain feu doit etre vert maintenant."],
  ['After six failed attempts to unlock the phone, Iris believes the next code has to work.', "Apres six essais rates pour deverrouiller le telephone, Iris croit que le prochain code doit marcher."],
  ['Tia misses four golf putts and thinks the next one is basically guaranteed.', "Tia rate quatre putts de golf et pense que le prochain est pratiquement garanti."],
  ['After a losing streak on the claw machine, Quinn says the machine is "saving" a win for the next try.', "Apres une serie de defaites a la pince, Quinn dit que la machine « garde » une victoire pour le prochain essai."],
  ['Bri loses three rounds in a row and assumes the next round must be his turn to win.', "Bri perd trois manches d affilee et suppose que la prochaine manche doit etre son tour de gagner."],
  ['After four failed spins on a wheel game, Lila is sure the next spin is the one that will land on the jackpot.', "Apres quatre tours rates sur un jeu de roue, Lila est sure que le prochain tour tombera sur le jackpot."]
];

const OPTIONS_EN = ["Gambler's Fallacy", 'Hot Hand Fallacy', 'Availability Heuristic', 'Confirmation Bias'];
const OPTIONS_FR = ['Sophisme du joueur', 'Fausse main chaude', 'Heuristique de disponibilité', 'Biais de confirmation'];

function rotate(a: string[], i: number) {
  const r = a.slice(1);
  r.splice(i, 0, a[0]);
  return r;
}

function sub(i: number) {
  return i < 43 ? SubLevel.BEGINNER : i < 50 ? SubLevel.INTERMEDIATE : SubLevel.EXPERT;
}

function make(fr = false): Question[] {
  return SCENARIOS.map((s, i) => {
    const c = i % 4;
    return {
      id: 35001 + i,
      level: 7,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Sophisme du joueur' : "Gambler's Fallacy",
      difficulty: i < 43 ? 1 : i < 50 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? OPTIONS_FR : OPTIONS_EN, c),
      correct_option_index: c,
      explanation: fr
        ? 'Une suite de resultats passés ne change pas la probabilite du prochain resultat dans un evenement independant.'
        : 'A run of past results does not change the probability of the next result in an independent event.',
      detailedExplanationBeginner: fr
        ? 'Une serie precedente ne rend pas le prochain essai "du".'
        : 'A previous streak does not make the next try "due."',
      detailedExplanationIntermediate: fr
        ? 'Le sophisme du joueur confond l equilibre a long terme avec une correction immediate dans un evenement aleatoire independant.'
        : "The gambler's fallacy confuses long-run balance with an immediate correction in an independent random event.",
      detailedExplanationExpert: fr
        ? "Ce biais nait quand on traite des essais independants comme s ils avaient memoire; chaque tirage garde sa propre probabilite malgre la sequence precedente."
        : 'This bias appears when independent trials are treated as if they had memory; each draw keeps its own probability despite the prior sequence.',
      questionFormat: 'standard',
    };
  });
}

export const GAMBLERS_FALLACY_EXPANSION_EN: Question[] = make();
export const GAMBLERS_FALLACY_EXPANSION_FR: Question[] = make(true);

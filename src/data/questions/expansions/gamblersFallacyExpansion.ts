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

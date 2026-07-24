import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['After three perfect free throws, Jade thinks the next one is "locked in" for the rest of the quarter at practice.', "Apres trois lancers francs parfaits, Jade pense que le prochain est « assure » pour le reste du quart-temps a l entrainement."],
  ['Milo scores twice in a row and starts taking every shot like it cannot miss on the school court during recess.', "Milo marque deux fois d'affilee et commence a tirer comme s'il ne pouvait plus rater sur le terrain de l'ecole pendant la recre."],
  ['Nina wins three online matches and says her team is unstoppable for the rest of the night.', "Nina gagne trois matchs en ligne et dit que son equipe est imbattable pour le reste de la soiree."],
  ['After two good pitches, Evan believes the pitcher is "in the zone" and will stay perfect.', "Apres deux bons lancers, Evan croit que le lanceur est « en feu » et restera parfait."],
  ['Tara hits three tennis winners and assumes her next serve is definitely going in.', "Tara réussit trois coups gagnants au tennis et suppose que son prochain service va forcement rentrer."],
  ['Ben gets a second lucky break at work and says his whole week is now on a streak.', "Ben a une deuxieme bonne surprise au travail et dit que sa semaine est maintenant sur une serie."],
  ['After several hot coin flips in a row, Sofia believes her luck will keep rolling.', "Apres plusieurs lancers gagnants d'affilee, Sofia croit que sa chance va continuer."],
  ['Leo makes two great sales calls and thinks every call he makes today will land.', "Leo fait deux excellents appels de vente et pense que tous ses appels du jour vont aboutir."],
  ['Maya scores on two game shots and decides she should keep shooting no matter what.', "Maya marque sur deux tirs et decide qu'elle doit continuer a tirer quoi qu'il arrive."],
  ['Jules sees a basketball player hit three baskets and starts calling him "automatic."', "Jules voit un joueur de basket mettre trois paniers et commence a l'appeler « automatique »."],
  ['After a lucky parking spot and a free coffee, Priya says the whole morning is magic.', "Apres une place de parking chanceuse et un cafe gratuit, Priya dit que toute la matinee est magique."],
  ['Kai gets three correct answers in a quiz and assumes the last one is easy too.', "Kai a trois bonnes reponses dans un quiz et suppose que la derniere sera facile aussi."],
  ['Hana wins two rounds of cards and tells everyone the table is treating her well.', "Hana gagne deux tours de cartes et dit a tout le monde que la table lui reussit bien."],
  ['Owen is on a run of good coffee pulls and thinks the machine has warmed up for him.', "Owen enchaine les bons cafe et pense que la machine s'est mise en forme pour lui."],
  ['After making one great toast and one good joke, Rina thinks she is impossible to stop.', "Apres un excellent toast et une bonne blague, Rina pense qu'on ne peut plus l'arreter."],
  ['Drew sees a baseball hitter get three hits and expects a fourth hit because the bat is hot.', "Drew voit un frappeur de baseball reussir trois coups et attend un quatrieme parce que la batte est chaude."],
  ['After two successful interviews, Lara says she is "on fire" and will ace the next one.', "Apres deux entretiens reussis, Lara dit qu'elle est « en feu » et qu'elle va reussir le suivant."],
  ['Finn wins a trivia round and then talks like the rest of the night belongs to him.', "Finn gagne une manche de quiz et parle ensuite comme si le reste de la soiree lui appartenait."],
  ['After three strong practice shots, Nora assumes the game shot will also go in.', "Apres trois tirs d'entrainement reussis, Nora suppose que le tir du match rentrera aussi."],
  ['Theo gets two lucky breaks in a row and starts making bigger plans right away.', "Theo a deux coups de chance d'affilee et commence a faire de plus grands projets tout de suite."],
  ['Mila lands a great pitch and thinks the next pitch will work because the rhythm is there.', "Mila reussit un excellent lancer et pense que le suivant marchera parce que le rythme est la."],
  ['Jasper makes three clean putts and believes the next putt is basically guaranteed.', "Jasper reussit trois putts propres et croit que le prochain est presque garanti."],
  ['Zoe wins a prize early in the event and says the rest of the games will stay lucky.', "Zoe gagne un prix tot dans l evenement et dit que le reste des jeux restera chanceux."],
  ['Ava hits two perfect notes in rehearsal and expects the concert to keep going the same way.', "Ava joue deux notes parfaites a la repetition et s attend a ce que le concert continue pareil."],
  ['Cole gets a smooth first day at the new job and thinks the whole month will be easy.', "Cole a une premiere journee facile au nouveau travail et pense que tout le mois sera simple."],
  ['After a streak of good rolls in dice game, Mia feels the dice are "hot" and unstoppable.', "Apres une serie de bons lancers au jeu de des, Mia sent que les des sont « chauds » et imbattables."],
  ['Eli makes one clever trade and then acts like every trade today will be clever.', "Eli fait un echange malin puis agit comme si tous les echanges du jour allaient etre malins."],
  ['Tia gets a fast first mile on a run and believes the rest will be effortless.', "Tia fait un premier mile rapide en course et croit que le reste sera sans effort."],
  ['Noah sees a player hit two clutch shots and tells the crowd the player cannot cool off.', "Noah voit un joueur reussir deux tirs decisifs et dit a la foule que le joueur ne peut pas se refroidir."],
  ['Pia has a lucky first spin and starts acting like the wheel is on her side.', "Pia a un premier tour chanceux et commence a agir comme si la roue etait de son cote."],
  ['Grant gets two compliments in a row and assumes every future client will love the pitch.', "Grant recoit deux compliments d'affilee et suppose que tous les futurs clients aimeront la proposition."],
  ['Lina watches a bowler strike twice and says the next frame is already decided.', "Lina voit un joueur de bowling faire deux strikes et dit que la prochaine manche est deja decidee."],
  ['Sam wins a practice game and says his streak proves he is impossible to beat.', "Sam gagne un jeu d'entrainement et dit que sa serie prouve qu'on ne peut pas le battre."],
  ['After three smooth guitar takes, Iris thinks the album session will stay perfect.', "Apres trois prises de guitare fluides, Iris pense que la session d'album restera parfaite."],
  ['Oli answers two hard questions well and expects the rest of the exam to stay easy.', "Oli repond bien a deux questions difficiles et s attend a ce que le reste de l examen reste facile."],
  ['Maya gets a hot start in a marathon and believes the finish will stay just as strong.', "Maya part tres fort au marathon et croit que l arrivee sera aussi forte."],
  ['After a lucky card draw, Ben says the deck has "turned around" for good.', "Apres une pioche chanceuse, Ben dit que le paquet a « tourne » pour de bon."],
  ['Nora sees her friend nail three piano chords and thinks the whole recital is covered.', "Nora voit son amie reussir trois accords de piano et pense que tout le recital est assure."],
  ['Theo gets one big save in soccer and then keeps charging forward like every save is coming.', "Theo fait un gros arret au football puis continue d'avancer comme si chaque arret allait suivre."],
  ['Rita wins the first two rounds of a board game and says the table is now hers.', "Rita gagne les deux premiers tours d'un jeu de societe et dit que la table lui appartient maintenant."],
  ['After a run of successful emails, Finn assumes every message will get a yes.', "Apres une serie de courriels reussis, Finn suppose que chaque message recevra un oui."],
  ['Mina nails three dance steps and believes the routine can no longer go wrong.', "Mina reussit trois pas de danse et croit que la routine ne peut plus mal tourner."],
  ['Zara scores on two warm-up shots and expects the third to fall automatically.', "Zara marque sur deux tirs d echauffement et s attend a ce que le troisieme rentre automatiquement."],
  ['After a good first bite of soup, Owen says the whole meal is clearly a win.', "Apres une bonne premiere bouchee de soupe, Owen dit que tout le repas est clairement une reussite."],
  ['Juno gets a string of nice replies and thinks the conversation will stay smooth forever.', "Juno recoit une serie de reponses agreables et pense que la conversation restera fluide pour toujours."],
  ['Parker sees a player score twice and starts talking about a "heater" no one can stop.', "Parker voit un joueur marquer deux fois et parle d une « serie chaude » qu on ne peut pas arreter."],
  ['Lara has two easy wins in a row and bets the next one will be easy too.', "Lara enchaine deux victoires faciles et parie que la suivante sera facile aussi."],
  ['Milo opens a jar on the first try after a long run of bad luck and says the luck is back.', "Milo ouvre un bocal du premier coup apres une longue serie de malchance et dit que la chance est revenue."],
  ['After three nice compliments, Ava assumes the whole room is impressed with her.', "Apres trois compliments gentils, Ava suppose que toute la salle est impressionnee par elle."],
  ['Cole makes a few great saves in goal and thinks the next shot cannot beat him.', "Cole fait quelques arrets superbes au but et pense que le prochain tir ne pourra pas le battre."],
  ['Jade makes four perfect free throws and thinks the next one is basically guaranteed.', "Jade reussit quatre lancers francs parfaits et pense que le prochain est presque garanti."],
  ['Milo hits three good tennis serves and starts talking like the next one cannot miss.', "Milo reussit trois bons services de tennis et commence a parler comme si le suivant ne pouvait pas rater."],
  ['Nina wins two card rounds and assumes the next round will stay lucky.', "Nina gagne deux tours de cartes et suppose que le prochain tour restera chanceux."],
  ['After several strong sales calls, Evan says the next call will definitely land too.', "Apres plusieurs appels de vente reussis, Evan dit que le prochain appel aboutira lui aussi forcement."],
  ['Tara scores on three practice shots and believes the game shot will be automatic.', "Tara marque sur trois tirs d entrainement et croit que le tir du match sera automatique."],
  ['Ben makes two great chess moves and says the streak means the whole match is won.', "Ben fait deux excellents coups d echecs et dit que la serie signifie que toute la partie est gagnee."],
  ['Priya lands a lucky first pitch and starts acting like every pitch today will work.', "Priya reussit un premier lancer chanceux et commence a agir comme si tous les lancers du jour allaient marcher."],
  ['Theo gets three clean hits in batting practice and assumes the game will stay hot.', "Theo reussit trois coups nets a l entrainement et suppose que le match restera chaud."],
  ['Ava makes two great presentations in a row and thinks the next one cannot go wrong.', "Ava fait deux excellentes presentations d'affilee et pense que la prochaine ne peut pas mal tourner."],
  ['Omar sees a player score on three shots and starts calling the player unstoppable.', "Omar voit un joueur marquer sur trois tirs et commence a appeler le joueur imbattable."],
  ['Maya wins three trivia answers in a row and says the next question is already hers.', "Maya gagne trois reponses de quiz d'affilee et dit que la prochaine question est deja pour elle."],
  ['Leo hits a lucky free throw and starts telling teammates the rim has opened up for good.', "Leo reussit un lancer franc chanceux et dit a ses coequipiers que l anneau s est ouvert pour de bon."],
  ['Nina gets two perfect pitches at softball and assumes the third will land the same way.', "Nina reussit deux lancers parfaits au softball et suppose que le troisieme arrivera pareil."],
  ['Owen makes a string of good dice rolls and thinks the game board is "on his side".', "Owen enchaine de bons lancers de des et pense que le plateau de jeu est « de son cote »."],
  ['Priya scores twice in warm-up and decides the real game will be easy too.', "Priya marque deux fois a l echauffement et decide que le vrai match sera facile aussi."],
  ['Ben gets three easy wins in a phone game and believes the app is now blessing him.', "Ben obtient trois victoires faciles dans un jeu sur telephone et croit que l appli le benit maintenant."],
  ['Tara sees a bowler make two strikes and says the lane has "turned on".', "Tara voit un joueur de bowling faire deux strikes et dit que la piste s est « allumee »."],
  ['Kai lands a couple of good interviews and starts acting like he cannot miss anymore.', "Kai reussit quelques bons entretiens et commence a agir comme s il ne pouvait plus rater."],
  ['Jules wins a puzzle race and says the rest of the puzzles will be quick work.', "Jules gagne une course de puzzle et dit que le reste des puzzles sera du travail rapide."],
  ['Ava gets a lucky putt and assumes the golf hole has become easier for her.', "Ava reussit un putt chanceux et suppose que le trou de golf est devenu plus facile pour elle."],
  ['Noah makes two clean passes in a game and says the whole team is "in rhythm".', "Noah fait deux passes propres dans un match et dit que toute l equipe est « en rythme »."],
  ['Mina hits three notes cleanly and believes the song is now locked in.', "Mina joue trois notes proprement et croit que la chanson est maintenant lancee."],
  ['Eli gets a pair of lucky guesses and tells everyone the test is going his way.', "Eli fait deux bonnes suppositions chanceuses et dit a tout le monde que le test lui reussit."],
  ['Rina makes several fast deliveries and assumes every delivery after that will be fast.', "Rina fait plusieurs livraisons rapides et suppose que chaque livraison ensuite sera rapide."],
  ['Hugo answers two hard questions correctly and starts acting like the whole exam is safe.', "Hugo repond correctement a deux questions difficiles et commence a agir comme si tout l examen etait sur."],
  ['Lina has one strong round in a card game and decides the deck is hot.', "Lina a un tour fort dans un jeu de cartes et decide que le paquet est chaud."],
  ['Grant hits three practice shots and says the next shot is practically automatic.', "Grant reussit trois tirs d entrainement et dit que le prochain tir est presque automatique."],
  ['Zoe gets a smooth first week at work and thinks the whole month will stay easy.', "Zoe a une premiere semaine fluide au travail et pense que tout le mois restera facile."],
  ['Milo gets a lucky run of correct answers and says his brain is on fire.', "Milo enchaine une serie de bonnes reponses et dit que son cerveau est en feu."],
  ['Theo sees a player hit three baskets and starts betting on the next shot.', "Theo voit un joueur marquer trois paniers et commence a parier sur le prochain tir."],
  ['Pia makes a great first trade and assumes the market will keep rewarding her.', "Pia fait un excellent premier echange et suppose que le marche continuera a la recompenser."],
  ['Finn gets three compliments on his talk and thinks the rest of the talk is guaranteed to land.', "Finn recoit trois compliments sur sa presentation et pense que le reste du discours va forcement marcher."],
  ['Maya wins a race warm-up and says her pace is now locked in for the whole day.', "Maya gagne l echauffement d une course et dit que son rythme est maintenant fixe pour toute la journee."],
  ['Sam sees two clutch shots fall and tells the crowd the shooter cannot miss anymore.', "Sam voit deux tirs decisifs rentrer et dit a la foule que le tireur ne peut plus rater."],
  ['Juno gets a chain of good map guesses and assumes every turn will go her way.', "Juno a une serie de bonnes suppositions sur la carte et suppose que chaque tour ira dans son sens."],
  ['Iris gets a lucky opening move and decides the whole game is already hers.', "Iris obtient un coup d ouverture chanceux et decide que toute la partie lui appartient deja."],
  ['Cole sees three successful sales and expects the next customer to say yes too.', "Cole voit trois ventes reussies et s attend a ce que le prochain client dise oui aussi."],
  ['Nora makes several easy baskets and says the hoop looks bigger now.', "Nora reussit plusieurs paniers faciles et dit que le panier a l air plus grand maintenant."],
  ['Ari gets a winning streak in a rhythm game and assumes the next song is guaranteed.', "Ari a une serie gagnante dans un jeu de rythme et suppose que la prochaine chanson est garantie."],
  ['Rita nails two presentations and says the audience is already on her side.', "Rita reussit deux presentations et dit que le public est deja de son cote."],
  ['Tia scores on three warm-up shots and starts acting like the rest of practice is finished.', "Tia marque sur trois tirs d echauffement et commence a agir comme si le reste de l entrainement etait termine."],
  ['Oli wins a few quick rounds and says the game is in a hot phase.', "Oli gagne quelques manches rapides et dit que le jeu est dans une phase chaude."],
  ['Lara gets a lucky first play and thinks every next play will click too.', "Lara obtient une premiere action chanceuse et pense que chaque action suivante marchera aussi."],
  ['Ben sees three clean saves and believes the goalie is impossible to beat.', "Ben voit trois arrets propres et croit que le gardien est impossible a battre."],
  ['Mina lands back-to-back wins and says the whole evening will keep going her way.', "Mina enchaine deux victoires et dit que toute la soiree continuera a aller dans son sens."],
  ['Drew hits a streak of perfect serves and thinks the match is already decided.', "Drew enchaine des services parfaits et pense que le match est deja decide."],
  ['Maya makes three perfect throws in a row and tells her friends she is untouchable now.', "Maya reussit trois lancers parfaits d'affilee et dit a ses amis qu'elle est intouchable maintenant."],
  ['Leo gets a hot start in checkers and assumes every next move will work too.', "Leo commence fort aux dames et suppose que chaque prochain coup marchera aussi."],
  ['Nina lands a few lucky coin tosses and says the coin is on a winning streak.', "Nina obtient quelques lancers de piece chanceux et dit que la piece est sur une serie gagnante."],
  ['Owen makes two clean serves and believes the third serve is already in the bag.', "Owen reussit deux services propres et croit que le troisieme service est deja acquis."],
];

const OPTIONS_EN = ['Hot Hand Fallacy', "Gambler's Fallacy", 'Confirmation Bias', 'Availability Heuristic'];
const OPTIONS_FR = ['Sophisme de la main chaude', 'Sophisme du joueur', 'Biais de confirmation', 'Heuristique de disponibilité'];

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
      id: 35101 + i,
      level: 4,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Sophisme de la main chaude' : 'Hot Hand Fallacy',
      difficulty: i < 43 ? 1 : i < 50 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? OPTIONS_FR : OPTIONS_EN, c),
      correct_option_index: c,
      explanation: fr
        ? "Une serie de reussites ne prouve pas qu'une performance future restera forcee ou chanceuse."
        : 'A run of successes does not prove that future performance will stay hot or lucky.',
      detailedExplanationBeginner: fr
        ? 'Une bonne serie ne garantit pas la suivante.'
        : 'A good streak does not guarantee the next one.',
      detailedExplanationIntermediate: fr
        ? "Le sophisme de la main chaude consiste a supposer qu'une suite de bons resultats annonce automatiquement un autre bon resultat."
        : 'The hot hand fallacy assumes that a run of good results automatically predicts another good result.',
      detailedExplanationExpert: fr
        ? "Ce raisonnement confond une sequence observee avec une cause stable; en pratique, la serie peut n'etre qu'une variation normale du hasard."
        : 'This reasoning confuses an observed sequence with a stable cause; in practice, the streak may just be a normal fluctuation of chance.',
      questionFormat: 'standard',
    };
  });
}

export const HOT_HAND_FALLACY_EXPANSION_EN: Question[] = make();
export const HOT_HAND_FALLACY_EXPANSION_FR: Question[] = make(true);

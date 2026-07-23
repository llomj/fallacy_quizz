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

import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya taps the elevator button three times and thinks that makes it arrive faster, so she keeps doing it at the mall and at school after class.', "Maya appuie trois fois sur le bouton de l ascenseur et pense que cela le fait arriver plus vite, alors elle continue au centre commercial et a l ecole apres les cours."],
  ['Leo wears his "lucky" socks to the exam and says they will help him control the result of the math quiz at noon in room 4.', "Leo porte ses chaussettes « porte-bonheur » a l examen et dit qu elles vont l aider a controler le resultat du quiz de maths a midi dans la salle 4."],
  ['Nina blows on the dice before each roll because she believes it changes the outcome.', "Nina souffle sur les des avant chaque lancer parce qu elle croit que cela change le resultat."],
  ['Owen keeps shaking the lottery ticket and assumes that gives him better odds.', "Owen secoue sans cesse son billet de loterie et suppose que cela lui donne de meilleures chances."],
  ['Priya chooses the front-row seat and feels sure that placement will make the speaker like her more.', "Priya choisit la place au premier rang et se sent sure que cet emplacement fera davantage apprecier l orateur."],
  ['Ben thinks moving his chair closer to the TV will make the team win.', "Ben pense qu en rapprochant sa chaise de la television son equipe va gagner."],
  ['Tara clicks the save icon five times because she believes it protects the file better.', "Tara clique cinq fois sur l icone d enregistrement parce qu elle croit que cela protege mieux le fichier."],
  ['Kai sets a candle in the window and says it will keep the storm away.', "Kai met une bougie a la fenetre et dit qu elle eloignera l orage."],
  ['Jules wears a lucky bracelet and assumes it controls the interview outcome.', "Jules porte un bracelet porte-bonheur et suppose qu il controle le resultat de l entretien."],
  ['Ava reorders her desk before every call because she thinks the layout controls client mood.', "Ava range son bureau avant chaque appel parce qu elle pense que l amenagement controle l humeur des clients."],
  ['Noah says his coffee order works like a ritual that controls the entire morning.', "Noah dit que sa commande de cafe fonctionne comme un rituel qui controle toute la matinee."],
  ['Mina believes choosing the same parking spot each day keeps her luck stable.', "Mina croit qu en choisissant la meme place de parking chaque jour elle stabilise sa chance."],
  ['Eli draws a symbol on his notebook and thinks it will help the quiz go his way.', "Eli dessine un symbole sur son carnet et pense que cela aidera le quiz a aller dans son sens."],
  ['Rina thinks rearranging her slides right before a presentation gives her control over the audience.', "Rina pense qu en reordonnant ses diapositives juste avant une presentation elle controle le public."],
  ['Hugo spins his pen before each decision and treats it like a steering wheel for fate.', "Hugo fait tourner son stylo avant chaque decision et le traite comme un volant pour le destin."],
  ['Lina believes saying "this is my day" will force the day to go exactly right.', "Lina croit que dire « c est ma journee » forcera la journee a se passer exactement comme il faut."],
  ['Grant feels that changing his playlist order controls how productive he will be.', "Grant pense qu en changeant l ordre de sa playlist il controle son niveau de productivite."],
  ['Zoe says knocking on wood gives her a handle on the situation.', "Zoe dit que toucher du bois lui donne prise sur la situation."],
  ['Milo thinks arranging his books by color will make study luck better.', "Milo pense que ranger ses livres par couleur rendra la chance des etudes meilleure."],
  ['Theo believes the weather app is less important than the coin he flips to "balance" the forecast.', "Theo pense que l application meteo est moins importante que la piece qu il lance pour « equilibrer » la prevision."],
  ['Pia says rubbing a lucky charm before dinner controls the conversation.', "Pia dit qu en frottant son porte-bonheur avant le diner elle controle la conversation."],
  ['Finn believes carrying his favorite notebook makes meetings go the way he wants.', "Finn croit qu emporter son carnet prefere fait aller les reunions comme il le souhaite."],
  ['Maya thinks setting the thermostat in a special pattern controls how well the family sleeps.', "Maya pense qu en reglant le thermostat selon un motif special elle controle la qualite du sommeil de la famille."],
  ['Sam says choosing a blue mug gives him control over the whole workday.', "Sam dit qu en choisissant une tasse bleue il controle toute sa journee de travail."],
  ['Juno feels that doing the same warm-up song every time forces a good performance.', "Juno sent que jouer la meme chanson d echauffement a chaque fois force une bonne prestation."],
  ['Iris believes the order of her morning routine determines what emails she gets.', "Iris croit que l ordre de sa routine matinale determine les courriels qu elle recevra."],
  ['Cole thinks posting a certain emoji will make the meeting friendlier.', "Cole pense qu utiliser un certain emoji rendra la reunion plus amicale."],
  ['Nora says arranging snacks neatly will control how the guests behave.', "Nora dit que disposer les collations proprement controlera le comportement des invites."],
  ['Ari assumes wearing the same jacket as last time controls the outcome of the game.', "Ari suppose qu en portant la meme veste que la derniere fois il controle le resultat du match."],
  ['Rita believes a special pen gives her power over the budget vote.', "Rita croit qu un stylo special lui donne du pouvoir sur le vote du budget."],
  ['Tia says turning her phone face down keeps bad news away.', "Tia dit qu en mettant son telephone face contre la table elle eloigne les mauvaises nouvelles."],
  ['Oli thinks the exact order of chores makes the day obey him.', "Oli pense que l ordre exact des taches fait obeir la journee."],
  ['Lara feels making a "winning" gesture before the match changes the match.', "Lara pense qu un geste « gagnant » avant le match change le match."],
  ['Ben believes a lucky number on the receipt will improve the service.', "Ben croit qu un chiffre porte-bonheur sur le ticket ameliorera le service."],
  ['Mina says placing her bag in one exact corner controls the weather on the trip.', "Mina dit qu en posant son sac dans un coin exact elle controle la meteo du voyage."],
  ['Drew thinks the sequence of app taps can force the system to work faster.', "Drew pense que la sequence de touches dans l application peut forcer le systeme a aller plus vite."],
  ['Jade claims her pregame chant keeps the other team from scoring.', "Jade affirme que son chant d avant-match empeche l autre equipe de marquer."],
  ['Owen believes opening the window at 7:07 gives him control over the luck in the room.', "Owen croit qu ouvrir la fenetre a 7 h 07 lui donne le controle de la chance dans la piece."],
  ['Mila says folding the blanket in a special way controls how calm the night will be.', "Mila dit qu en pliant la couverture d une certaine facon elle controle le calme de la nuit."],
  ['Evan thinks a fixed seat at dinner makes the conversation go his way.', "Evan pense qu une place fixe au diner fait aller la conversation dans son sens."],
  ['Kira believes repeating the same phrase before a test changes the score.', "Kira croit que repeter la meme phrase avant un test change la note."],
  ['Grant says his exact order at lunch controls whether the afternoon feels easy.', "Grant dit que sa commande exacte au dejeuner controle si l apres-midi sera facile."],
  ['Zara thinks one more prayer before the trip will control traffic.', "Zara pense qu une priere de plus avant le trajet controlera la circulation."],
  ['Parker feels that keeping his keys in his left pocket controls whether he is late.', "Parker sent que garder ses cles dans sa poche gauche controle s il sera en retard."],
  ['Hana says the pattern of her notes decides how well she remembers them.', "Hana dit que le motif de ses notes decide a quel point elle les retient."],
  ['Leo thinks touching the lucky poster in the hall will make the announcement better.', "Leo pense qu en touchant l affiche porte-bonheur dans le couloir il ameliorera l annonce."],
  ['Maya says the order of the playlist will control the mood of the whole party.', "Maya dit que l ordre de la playlist controlera l ambiance de toute la fete."],
  ['Nina believes one exact route to school controls how many questions she gets asked.', "Nina croit qu un trajet precis vers l ecole controle le nombre de questions qu on lui pose."],
  ['After tapping her phone screen three times, Selma thinks the app will definitely stop freezing.', "Apres avoir tape trois fois sur l ecran de son telephone, Selma pense que l application arretera forcement de geler."],
  ['Jasper arranges his pens in a straight line and believes it will make his presentation stronger.', "Jasper aligne ses stylos et croit que cela rendra sa presentation plus forte."],
  ['After choosing the same checkout lane, Ella assumes it controls whether the store will be busy.', "Apres avoir choisi la meme caisse, Ella suppose que cela controle si le magasin sera charge."],
  ['Marcus thinks carrying the same lucky coin will control the outcome of every interview.', "Marcus pense qu emporter la meme piece porte-bonheur controle le resultat de chaque entretien."],
  ['After setting his alarm in a certain order, Ben believes he can force a calm commute.', "Apres avoir regle son reveil dans un certain ordre, Ben croit pouvoir forcer un trajet calme."],
  ['Tina rubs a festival wristband before exams because she thinks it influences the grade.', "Tina frotte un bracelet de festival avant les examens parce qu elle pense qu il influence la note."],
  ['Owen thinks reloading the page twice gives him more control over the website load time.', "Owen pense que recharger la page deux fois lui donne plus de controle sur le temps de chargement du site."],
  ['After moving her chair closer to the window, Rina feels she can control the afternoon weather.', "Apres avoir rapproche sa chaise de la fenetre, Rina sent qu elle peut controler le temps de l apres-midi."],
  ['Leo believes the exact order of his morning tasks controls whether traffic will be light.', "Leo croit que l ordre exact de ses taches du matin controle si la circulation sera fluide."],
  ['Mina thinks whispering a phrase to her laptop can control how smoothly the update installs.', "Mina pense que murmurer une phrase a son ordinateur peut controler la fluidite de l installation de la mise a jour."],
  ['Maya thinks wearing her lucky hat can control how crowded the cafe will be.', "Maya pense que porter son chapeau porte-bonheur peut controler le niveau d affluence du cafe."],
  ['Ben believes choosing the exact checkout lane controls whether the line will move fast.', "Ben croit que choisir la file de caisse exacte controle la vitesse de la file."],
  ['Priya taps the screen in a pattern and thinks it will control the app freezing.', "Priya tape sur l ecran selon un motif et pense que cela controlera le gel de l application."],
  ['Leo thinks placing his keys on the same hook each day controls his luck at work.', "Leo pense que poser ses cles sur le meme crochet chaque jour controle sa chance au travail."],
  ['Nina believes a lucky playlist can control the tone of the entire meeting.', "Nina croit qu une playlist porte-bonheur peut controler le ton de toute la reunion."],
  ['Owen thinks standing in the same spot before the bus arrives controls the bus timing.', "Owen pense que rester au meme endroit avant l arrivee du bus controle l horaire du bus."],
  ['Ava believes folding the napkin a certain way controls how kind the waiter will be.', "Ava croit qu en pliant la serviette d une certaine facon elle controle la gentillesse du serveur."],
  ['Rita thinks saying a phrase under her breath controls the result of the quiz.', "Rita pense que dire une phrase a voix basse controle le resultat du quiz."],
  ['Jules believes moving his chair once will control the entire mood of the room.', "Jules croit qu en deplaçant sa chaise une fois il controle toute l ambiance de la piece."],
  ['Mina thinks a special pen can control whether the contract gets approved.', "Mina pense qu un stylo special peut controler si le contrat est approuve."],
  ['Maya thinks tapping the table before class controls how easy the lesson will be.', "Maya pense qu appuyer sur la table avant le cours controle la facilite de la lecon."],
  ['Leo believes wearing his lucky cap can control whether the meeting runs long.', "Leo croit que porter sa casquette porte-bonheur peut controler si la reunion dure longtemps."],
  ['Nina says turning the music down three notches controls her chances on the test.', "Nina dit que baisser la musique de trois crans controle ses chances au test."],
  ['Owen thinks the exact order of his breakfast controls how the bus driver behaves.', "Owen pense que l ordre exact de son petit dejeuner controle le comportement du chauffeur de bus."],
  ['Priya believes holding her notebook in her left hand controls the interview outcome.', "Priya croit que tenir son carnet dans la main gauche controle le resultat de l entretien."],
  ['Ben says clicking the refresh button twice controls whether the page loads cleanly.', "Ben dit que cliquer deux fois sur actualiser controle si la page se charge bien."],
  ['Tara thinks saying good luck to herself in the mirror controls the score.', "Tara pense que se souhaiter bonne chance dans le miroir controle la note."],
  ['Kai believes keeping his phone face down controls whether he gets bad news.', "Kai croit que garder son telephone face contre la table controle s il recevra de mauvaises nouvelles."],
  ['Jules says folding the receipt neatly controls whether the store treats him better next time.', "Jules dit que plier soigneusement le ticket controle si le magasin sera plus gentil la prochaine fois."],
  ['Ava thinks carrying the same umbrella controls the weather during her commute.', "Ava pense qu emporter le meme parapluie controle la meteo pendant son trajet."],
  ['Noah believes a lucky number on his locker controls how hard the homework feels.', "Noah croit qu un chiffre porte-bonheur sur son casier controle la difficulte des devoirs."],
  ['Mina says pressing the elevator button with two fingers controls how crowded the ride will be.', "Mina dit qu appuyer sur le bouton de l ascenseur avec deux doigts controle le niveau de foule dans la cabine."],
  ['Eli thinks placing his keys beside the lamp controls the tone of the phone call.', "Eli pense que poser ses cles pres de la lampe controle le ton de l appel telephonique."],
  ['Rina believes wearing a red scarf controls whether the train arrives on time.', "Rina croit que porter une echarpe rouge controle l arrivee a l heure du train."],
  ['Hugo says writing the date twice controls the success of the presentation.', "Hugo dit qu ecrire la date deux fois controle la reussite de la presentation."],
  ['Lina thinks keeping her desk tidy controls how kind people are to her.', "Lina pense que garder son bureau range controle la gentillesse des gens envers elle."],
  ['Grant believes a special handshake controls whether the interview is friendly.', "Grant croit qu une poignee de main speciale controle si l entretien sera amical."],
  ['Zoe says opening the window at exactly 8:08 controls the traffic outside.', "Zoe dit qu ouvrir la fenetre exactement a 8 h 08 controle la circulation dehors."],
  ['Milo thinks wearing his old shoes controls whether the exam is fair.', "Milo pense que porter ses vieilles chaussures controle si l examen est equitable."],
  ['Theo believes putting his phone on silent controls whether the lecture stays interesting.', "Theo croit que mettre son telephone en silencieux controle si le cours restera interessant."],
  ['Pia says arranging her pencils by size controls her mood all afternoon.', "Pia dit qu aligner ses crayons par taille controle son humeur tout l apres-midi."],
  ['Finn thinks taking the same route home controls whether dinner tastes better.', "Finn pense que prendre le meme trajet pour rentrer controle le gout du diner."],
  ['Maya believes clapping once before the game controls the score.', "Maya croit qu applaudir une fois avant le match controle le score."],
  ['Sam says choosing the blue chair controls whether the meeting becomes shorter.', "Sam dit que choisir la chaise bleue controle si la reunion sera plus courte."],
  ['Juno thinks tapping her badge three times controls how fast the elevator comes.', "Juno pense que taper trois fois sur son badge controle la vitesse d arrivee de l ascenseur."],
  ['Iris believes her lucky bracelet controls how busy the cafe is.', "Iris croit que son bracelet porte-bonheur controle l affluence du cafe."],
  ['Cole says placing his planner under the pillow controls tomorrow’s schedule.', "Cole dit que mettre son agenda sous l oreiller controle le programme de demain."],
  ['Nora thinks writing in red ink controls whether the teacher is cheerful.', "Nora pense qu ecrire en encre rouge controle si l enseignante sera de bonne humeur."],
  ['Ari believes the order of his chores controls whether the afternoon rains.', "Ari croit que l ordre de ses taches controle s il pleuvra l apres-midi."],
  ['Rita says holding a lucky coin in his pocket controls the line at the store.', "Rita dit que garder une piece porte-bonheur dans sa poche controle la file au magasin."],
  ['Tia thinks saying "today will be smooth" controls the traffic report.', "Tia pense que dire « la journee sera calme » controle le bulletin de circulation."],
  ['Oli believes moving his chair closer to the front controls how well he listens.', "Oli croit qu avancer sa chaise vers l avant controle a quel point il ecoute bien."],
];

const OPTIONS_EN = ['Illusion of Control', 'Illusion of Transparency', 'Confirmation Bias', 'Anchoring Bias'];
const OPTIONS_FR = ['Illusion de contrôle', 'Illusion de transparence', 'Biais de confirmation', "Biais d'ancrage"];

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
      id: 35601 + i,
      level: 4,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Illusion de contrôle' : 'Illusion of Control',
      difficulty: i < 43 ? 1 : i < 50 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? OPTIONS_FR : OPTIONS_EN, c),
      correct_option_index: c,
      explanation: fr
        ? 'Le fait de faire une action ne veut pas dire que l on controle vraiment le resultat.'
        : 'Doing an action does not mean you really control the result.',
      detailedExplanationBeginner: fr
        ? 'Un geste ne donne pas automatiquement du controle.'
        : 'A gesture does not automatically create control.',
      detailedExplanationIntermediate: fr
        ? "L illusion de contrôle fait croire qu un geste rituel, un ordre precis ou un objet porte-bonheur peut influencer un hasard qui reste hors de portee."
        : 'The illusion of control makes a ritual, a precise order, or a lucky object seem able to influence chance that remains out of reach.',
      detailedExplanationExpert: fr
        ? "Ce biais de surestimation du pouvoir personnel apparait quand on confond correlation subjective, routine rassurante et causalite reelle."
        : 'This bias of overestimating personal power appears when subjective correlation, reassuring routine, and real causation get mixed up.',
      questionFormat: 'standard',
    };
  });
}

export const ILLUSION_OF_CONTROL_EXPANSION_EN: Question[] = make();
export const ILLUSION_OF_CONTROL_EXPANSION_FR: Question[] = make(true);

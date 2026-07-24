import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["The app is the best because it says in its own banner that it is the best.", "L'application est la meilleure parce qu'elle le dit dans sa propre bannière."],
  ["Marta trusts the rumor because everybody repeats that the rumor is true at lunch.", "Marta fait confiance a la rumeur parce que tout le monde repete qu'elle est vraie au déjeuner."],
  ["The coach is right because the coach always knows the right answer.", "L'entraineur a raison parce que l'entraineur connait toujours la bonne reponse."],
  ["Leo says the class is fair because fair classes are the ones Leo likes.", "Leo dit que le cours est juste parce que les cours justes sont ceux que Leo aime."],
  ["Ava insists the new policy works because working policies are the ones that work.", "Ava insiste pour dire que la nouvelle politique fonctionne parce que les politiques qui fonctionnent sont celles qui fonctionnent."],
  ["The candle is magical because it must be magical to glow that way.", "La bougie est magique parce qu'elle doit etre magique pour briller ainsi."],
  ["Nina argues the bakery is famous because famous bakeries are the ones everyone knows.", "Nina affirme que la boulangerie est celebre parce que les boulangeries celebres sont celles que tout le monde connait."],
  ["Ben believes the rule is useful because useful rules are the rules that are useful.", "Ben croit que la regle est utile parce que les regles utiles sont les regles utiles."],
  ["Omar says the movie is smart because smart movies are the movies smart people like.", "Omar dit que le film est intelligent parce que les films intelligents sont ceux que les gens intelligents aiment."],
  ["Jade says the plan is urgent because anything urgent is what needs to happen now.", "Jade dit que le plan est urgent parce que tout ce qui est urgent est ce qui doit arriver maintenant."],
  ["Finn says the team deserves praise because praise is what good teams deserve.", "Finn dit que l'equipe merite des eloges parce que les eloges sont ce que les bonnes equipes meritent."],
  ["Mina claims the teacher is inspiring because inspiring teachers inspire people.", "Mina affirme que le professeur est inspirant parce que les professeurs inspirants inspirent les gens."],
  ["Theo says the shortcut is safe because safe shortcuts are the shortcuts people trust.", "Theo dit que le raccourci est sur parce que les raccourcis surs sont ceux auxquels les gens font confiance."],
  ["Zoe says the cafe is stylish because stylish cafes are the cafes that look stylish.", "Zoe dit que le cafe est elegant parce que les cafes elegants sont ceux qui ont l'air elegants."],
  ["Kai argues the phone is durable because durable phones are phones that last.", "Kai soutient que le telephone est durable parce que les telephones durables sont ceux qui durent."],
  ["Priya says the guide is accurate because accurate guides are the ones that tell the truth.", "Priya dit que le guide est precis parce que les guides precis sont ceux qui disent la verite."],
  ["Aria claims the policy is fair because fair policies are the policies that feel fair.", "Aria affirme que la politique est juste parce que les politiques justes sont celles qui semblent justes."],
  ["Noah says the shortcut is correct because correct shortcuts are the shortcuts that are correct.", "Noah dit que le raccourci est correct parce que les raccourcis corrects sont ceux qui sont corrects."],
  ["Rina says the snack is healthy because healthy snacks are the snacks that make you healthy.", "Rina dit que le snack est sain parce que les snacks sains sont ceux qui te rendent sain."],
  ["Milo says the rule is wise because wise rules are rules that make wise choices.", "Milo dit que la regle est sage parce que les regles sages sont celles qui permettent des choix sages."],
  ["Lina says the class is advanced because advanced classes are the ones that feel advanced.", "Lina dit que le cours est avance parce que les cours avances sont ceux qui semblent avances."],
  ["Eli says the city is beautiful because beautiful cities are cities people admire.", "Eli dit que la ville est belle parce que les villes belles sont celles que les gens admirent."],
  ["Tara says the training is effective because effective training is training that works.", "Tara dit que la formation est efficace parce que la formation efficace est celle qui marche."],
  ["Maya says the bridge is strong because strong bridges are bridges that stand up.", "Maya dit que le pont est solide parce que les ponts solides sont ceux qui tiennent debout."],
  ["Owen says the dog is obedient because obedient dogs are dogs that obey.", "Owen dit que le chien est obeissant parce que les chiens obeissants sont ceux qui obeissent."],
  ["Nora says the map is reliable because reliable maps are maps you can rely on.", "Nora dit que la carte est fiable parce que les cartes fiables sont celles sur lesquelles on peut compter."],
  ["Jade says the conference is important because important conferences are the conferences that matter.", "Jade dit que la conference est importante parce que les conferences importantes sont celles qui comptent."],
  ["Ben says the shortcut is efficient because efficient shortcuts are shortcuts that save time.", "Ben dit que le raccourci est efficace parce que les raccourcis efficaces sont ceux qui font gagner du temps."],
  ["Ava says the new show is brilliant because brilliant shows are shows that shine.", "Ava dit que la nouvelle serie est brillante parce que les series brillantes sont celles qui brillent."],
  ["Theo says the chef is talented because talented chefs are chefs who cook well.", "Theo dit que le chef est talentueux parce que les chefs talentueux sont ceux qui cuisinent bien."],
  ["Mina says the locker is secure because secure lockers are lockers that stay secure.", "Mina dit que le casier est securise parce que les casiers securises sont ceux qui restent securises."],
  ["Finn says the street is safe because safe streets are the streets that feel safe.", "Finn dit que la rue est sure parce que les rues sures sont celles qui paraissent sures."],
  ["Omar says the rumor is believable because believable rumors are the rumors people believe.", "Omar dit que la rumeur est credible parce que les rumeurs credibles sont celles que les gens croient."],
  ["Priya says the coach is expert because expert coaches are coaches who know what they are doing.", "Priya dit que l'entraineur est expert parce que les entraineurs experts sont ceux qui savent ce qu'ils font."],
  ["Kai says the repair is worth it because worthwhile repairs are repairs worth paying for.", "Kai dit que la reparation vaut le coup parce que les reparations valables sont celles qui meritent qu'on les paie."],
  ["Zoe says the lesson is clear because clear lessons are lessons that leave no confusion.", "Zoe dit que la lecon est claire parce que les lecons claires sont celles qui ne laissent aucune confusion."],
  ["Leo says the decision is final because final decisions are decisions that end the debate.", "Leo dit que la decision est finale parce que les decisions finales sont celles qui mettent fin au debat."],
  ["Rina says the app is honest because honest apps are apps that tell the truth.", "Rina dit que l'application est honnete parce que les applications honnetes sont celles qui disent la verite."],
  ["Noah says the concert is amazing because amazing concerts are concerts that amaze.", "Noah dit que le concert est incroyable parce que les concerts incroyables sont ceux qui eblouissent."],
  ["Lina says the speaker is credible because credible speakers are people who sound credible.", "Lina dit que l'orateur est credible parce que les orateurs credibles sont ceux qui ont l'air credibles."],
  ["Maya says the shortcut is the safest path because the safest path is the one that feels safest.", "Maya dit que le raccourci est le chemin le plus sur parce que le chemin le plus sur est celui qui semble le plus sur."],
  ["Eli says the rulebook is complete because complete rulebooks are books that have everything.", "Eli dit que le reglement est complet parce que les reglements complets sont ceux qui ont tout."],
  ["Aria says the plan is smart because smart plans are plans that make smart sense.", "Aria dit que le plan est intelligent parce que les plans intelligents sont ceux qui ont du sens intelligent."],
  ["Tara says the boutique is classy because classy boutiques are the ones with class.", "Tara dit que la boutique est chic parce que les boutiques chic sont celles qui ont de la classe."],
  ["Milo says the idea is practical because practical ideas are ideas that work in practice.", "Milo dit que l'idee est pratique parce que les idees pratiques sont celles qui marchent en pratique."],
  ["Nina says the gadget is useful because useful gadgets are gadgets that are useful.", "Nina dit que le gadget est utile parce que les gadgets utiles sont des gadgets utiles."],
  ["Ben says the result is obvious because obvious results are the results everyone sees.", "Ben dit que le resultat est evident parce que les resultats evidents sont ceux que tout le monde voit."],
  ["Jade says the theory is true because true theories are theories that are true.", "Jade dit que la theorie est vraie parce que les theories vraies sont celles qui sont vraies."],
  ["Owen says the apartment is desirable because desirable apartments are apartments people want.", "Owen dit que l'appartement est desirable parce que les appartements desirables sont ceux que les gens veulent."],
  ["Nora says the recipe is reliable because reliable recipes are recipes that always work.", "Nora dit que la recette est fiable parce que les recettes fiables sont celles qui marchent toujours."],
  ["Maya says the new chair is comfortable because comfortable chairs are chairs that feel comfortable.", "Maya dit que la nouvelle chaise est confortable parce que les chaises confortables sont des chaises qui sont confortables."],
  ["Theo says the policy is smart because smart policies are the ones that are smart.", "Theo dit que la politique est intelligente parce que les politiques intelligentes sont celles qui sont intelligentes."],
  ["Nina says the plan will work because working plans are plans that work.", "Nina dit que le plan marchera parce que les plans qui marchent sont des plans qui marchent."],
  ["Ben says the game is good because good games are the games that are good.", "Ben dit que le jeu est bon parce que les bons jeux sont les jeux qui sont bons."],
  ["Owen says the cafe is welcoming because welcoming cafes are cafes that welcome people.", "Owen dit que le cafe est accueillant parce que les cafes accueillants sont des cafes qui accueillent les gens."],
  ["Priya says the teacher is wise because wise teachers are teachers who are wise.", "Priya dit que le professeur est sage parce que les professeurs sages sont des professeurs sages."],
  ["Leo says the shortcut is safe because safe shortcuts are shortcuts that are safe.", "Leo dit que le raccourci est sur parce que les raccourcis surs sont des raccourcis surs."],
  ["Rina says the song is meaningful because meaningful songs are songs with meaning.", "Rina dit que la chanson est significative parce que les chansons significatives sont des chansons qui ont du sens."],
  ["Jules says the answer is correct because correct answers are the answers that are correct.", "Jules dit que la reponse est correcte parce que les bonnes reponses sont les reponses qui sont correctes."],
  ["Ava says the route is best because the best routes are the routes that are best.", "Ava dit que l'itineraire est le meilleur parce que les meilleurs itineraires sont les itineraires qui sont les meilleurs."]
  ,
  ["Milo says the podcast is trustworthy because trustworthy podcasts are the ones people trust.", "Milo dit que le podcast est fiable parce que les podcasts fiables sont ceux auxquels les gens font confiance."],
  ["Nora says the club is welcoming because welcoming clubs are clubs that welcome people.", "Nora dit que le club est accueillant parce que les clubs accueillants sont des clubs qui accueillent les gens."],
  ["Theo says the shortcut is useful because useful shortcuts are shortcuts that help.", "Theo dit que le raccourci est utile parce que les raccourcis utiles sont des raccourcis qui aident."],
  ["Priya says the app is honest because honest apps are apps that tell the truth.", "Priya dit que l'application est honnete parce que les applications honnetes sont celles qui disent la verite."],
  ["Ben says the meal plan is healthy because healthy plans are the plans that keep you healthy.", "Ben dit que le plan repas est sain parce que les plans sains sont ceux qui vous gardent en bonne sante."],
  ["Omar says the new chair is good because good chairs are chairs that are good.", "Omar dit que la nouvelle chaise est bonne parce que les bonnes chaises sont des chaises bonnes."],
  ["Maya says the city guide is accurate because accurate guides are guides that are accurate.", "Maya dit que le guide de la ville est precis parce que les guides precis sont des guides precis."],
  ["Lina says the workshop is useful because useful workshops are workshops people can use.", "Lina dit que l'atelier est utile parce que les ateliers utiles sont des ateliers que les gens peuvent utiliser."],
  ["Finn says the coffee is great because great coffee is coffee that tastes great.", "Finn dit que le cafe est excellent parce que le bon cafe est du cafe qui a un bon gout."],
  ["Jade says the movie is clever because clever movies are movies that are clever.", "Jade dit que le film est malin parce que les films malins sont des films malins."],
  ["Rina says the neighborhood is safe because safe neighborhoods are neighborhoods that feel safe.", "Rina dit que le quartier est sur parce que les quartiers surs sont des quartiers qui paraissent surs."],
  ["Eli says the repair shop is reliable because reliable shops are shops you can rely on.", "Eli dit que l'atelier de reparation est fiable parce que les ateliers fiables sont des ateliers sur lesquels on peut compter."],
  ["Noah says the assignment is fair because fair assignments are assignments that feel fair.", "Noah dit que le devoir est juste parce que les devoirs justes sont des devoirs qui semblent justes."],
  ["Aria says the rule is smart because smart rules are rules that make sense smartly.", "Aria dit que la regle est intelligente parce que les regles intelligentes sont des regles qui ont intelligemment du sens."],
  ["Kai says the game is fun because fun games are games that are fun.", "Kai dit que le jeu est amusant parce que les jeux amusants sont des jeux amusants."],
  ["Zoe says the doctor is wise because wise doctors are doctors who are wise.", "Zoe dit que le medecin est sage parce que les medecins sages sont des medecins sages."],
  ["Mina says the notebook is practical because practical notebooks are notebooks that work in practice.", "Mina dit que le carnet est pratique parce que les carnets pratiques sont des carnets qui marchent en pratique."],
  ["Owen says the plan is the right one because right plans are plans that are right.", "Owen dit que le plan est le bon parce que les bons plans sont des plans bons."],
  ["Tara says the jacket is stylish because stylish jackets are jackets that look stylish.", "Tara dit que la veste est elegante parce que les vestes elegantes sont des vestes qui ont l'air elegantes."],
  ["Leo says the family recipe is special because special recipes are recipes that feel special.", "Leo dit que la recette de famille est speciale parce que les recettes speciales sont des recettes qui semblent speciales."],
  ["Priya says the phone is worth buying because worth-buying phones are phones worth buying.", "Priya dit que le telephone vaut l'achat parce que les telephones valant l'achat sont des telephones valant l'achat."],
  ["Maya says the route is best because the best routes are the routes everyone picks.", "Maya dit que l'itineraire est le meilleur parce que les meilleurs itineraires sont ceux que tout le monde choisit."],
  ["Theo says the speaker is credible because credible speakers are speakers that sound credible.", "Theo dit que l'orateur est credible parce que les orateurs credibles sont des orateurs qui ont l'air credibles."],
  ["Nina says the school is excellent because excellent schools are schools that excel.", "Nina dit que l'ecole est excellente parce que les ecoles excellentes sont des ecoles qui excellent."],
  ["Ben says the new mug is nice because nice mugs are mugs that are nice.", "Ben dit que la nouvelle tasse est jolie parce que les tasses jolies sont des tasses jolies."],
  ["Milo says the policy is fair because fair policies are the policies that feel fair.", "Milo dit que la politique est juste parce que les politiques justes sont celles qui semblent justes."],
  ["Lina says the route is safe because safe routes are routes that keep you safe.", "Lina dit que l'itineraire est sur parce que les itineraires surs sont des itineraires qui vous gardent en securite."],
  ["Finn says the presentation is clear because clear presentations are presentations that leave no confusion.", "Finn dit que la presentation est claire parce que les presentations claires sont celles qui ne laissent aucune confusion."],
  ["Jade says the new chair is comfortable because comfortable chairs are chairs that feel comfortable.", "Jade dit que la nouvelle chaise est confortable parce que les chaises confortables sont des chaises qui sont confortables."],
  ["Rina says the app is useful because useful apps are apps that are useful.", "Rina dit que l'application est utile parce que les applications utiles sont des applications utiles."],
  ["Eli says the movie is good because good movies are movies that are good.", "Eli dit que le film est bon parce que les bons films sont des films bons."],
  ["Noah says the concert was amazing because amazing concerts are concerts that amaze.", "Noah dit que le concert etait incroyable parce que les concerts incroyables sont des concerts qui eblouissent."],
  ["Aria says the plan is smart because smart plans are plans that show intelligence.", "Aria dit que le plan est intelligent parce que les plans intelligents sont des plans qui montrent de l'intelligence."],
  ["Kai says the bakery is the best because the best bakeries are bakeries that are best.", "Kai dit que la boulangerie est la meilleure parce que les meilleures boulangeries sont des boulangeries qui sont les meilleures."],
  ["Zoe says the jacket is durable because durable jackets are jackets that last.", "Zoe dit que la veste est durable parce que les vestes durables sont des vestes qui durent."],
  ["Mina says the professor is knowledgeable because knowledgeable professors are professors who know things.", "Mina dit que le professeur est competent parce que les professeurs competents sont des professeurs qui savent des choses."],
  ["Owen says the shortcut is efficient because efficient shortcuts are shortcuts that save time.", "Owen dit que le raccourci est efficace parce que les raccourcis efficaces sont des raccourcis qui font gagner du temps."],
  ["Tara says the playlist is great because great playlists are playlists that people love.", "Tara dit que la playlist est excellente parce que les excellentes playlists sont des playlists que les gens aiment."],
  ["Leo says the system is stable because stable systems are systems that stay stable.", "Leo dit que le systeme est stable parce que les systemes stables sont des systemes qui restent stables."],
  ["Priya says the story is true because true stories are stories that are true.", "Priya dit que l'histoire est vraie parce que les vraies histoires sont des histoires vraies."],
];

const EN = ['Circular Reasoning', 'Begging the Question', 'False Dilemma', 'Appeal to Authority'];
const FR = ['Raisonnement circulaire', 'Petition de principe', 'Fausse dichotomie', 'Appel à l\'autorité'];

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
      id: 32701 + i,
      level: 3,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Raisonnement circulaire' : 'Circular Reasoning',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? FR : EN, c),
      correct_option_index: c,
      explanation: fr
        ? "La conclusion sert de preuve a elle-meme, donc le raisonnement tourne en rond."
        : 'The conclusion is used as its own proof, so the reasoning goes in a circle.',
      detailedExplanationBeginner: fr
        ? "On prouve une idee en utilisant deja cette idee."
        : 'It proves an idea by using that same idea already.',
      detailedExplanationIntermediate: fr
        ? "Le raisonnement circulaire recopie la conclusion dans la preuve au lieu d'apporter une raison independente."
        : 'Circular reasoning copies the conclusion into the proof instead of giving an independent reason.',
      detailedExplanationExpert: fr
        ? "Ce sophisme apparait quand la justification et la conclusion se renvoient mutuellement, ce qui donne l'impression d'une preuve sans ajouter de verification externe."
        : 'This fallacy appears when the justification and the conclusion point to each other, creating the illusion of proof without external verification.',
      questionFormat: 'standard',
    };
  });
}

export const CIRCULAR_REASONING_EXPANSION_EN: Question[] = make();
export const CIRCULAR_REASONING_EXPANSION_FR: Question[] = make(true);

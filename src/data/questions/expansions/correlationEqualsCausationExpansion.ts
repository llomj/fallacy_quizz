import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Sam drank coffee before the meeting and then spoke well, so coffee must make people sharp in every meeting.', 'Sam a bu du cafe avant la reunion puis a bien parle, donc le cafe doit rendre les gens vifs dans chaque reunion.'],
  ['Mia wore her lucky socks and the team won, so the socks caused the win last night.', 'Mia a porte ses chaussettes porte-bonheur et l equipe a gagne, donc les chaussettes ont cause la victoire hier soir.'],
  ['Omar saw more ice cream sold on hot days, so ice cream must be creating the heat.', 'Omar a vu plus de glace vendue les jours chauds, donc la glace doit creer la chaleur.'],
  ['Priya got a good grade after staying up late, so less sleep must improve test scores.', 'Priya a eu une bonne note apres etre restee eveillee tard, donc moins dormir doit ameliorer les notes.'],
  ['Ben noticed umbrellas appear when it rains, so umbrellas must be making the rain start.', 'Ben a remarque que les parapluies apparaissent quand il pleut, donc les parapluies doivent faire commencer la pluie.'],
  ['Ava says the city is richer because more people own phones, as if phones made cash appear.', 'Ava dit que la ville est plus riche parce que plus de gens ont un telephone, comme si les telephones faisaient apparaitre l argent.'],
  ['Leo thinks eating cereal causes good weather because both happen in the morning.', 'Leo pense que manger des cereales cause le beau temps parce que les deux arrivent le matin.'],
  ['Nina saw traffic rise after a new road opened, so the road must have caused the traffic jam.', 'Nina a vu le trafic augmenter apres l ouverture d une nouvelle route, donc la route doit avoir cause l embouteillage.'],
  ['Theo says the cafe is special because people smile there, so smiles must be caused by the cafe.', 'Theo dit que le cafe est special parce que les gens y sourient, donc les sourires doivent etre causes par le cafe.'],
  ['Jade noticed kids who read books also like school, so books must cause liking school.', 'Jade a remarque que les enfants qui lisent aiment aussi l ecole, donc les livres doivent faire aimer l ecole.'],
  ['Finn says the more umbrellas he sees, the worse the weather must be.', 'Finn dit que plus il voit de parapluies, plus le temps doit etre mauvais.'],
  ['Mina thinks loud music caused the party to be fun, even though fun people chose the loud playlist.', 'Mina pense que la musique forte a rendu la fete amusante, meme si des gens amusants ont choisi la playlist forte.'],
  ['Kai sees more plants in bright rooms and concludes the plants create the bright rooms.', 'Kai voit plus de plantes dans les pieces lumineuses et conclut que les plantes creeent les pieces lumineuses.'],
  ['Aria notices that more homework days mean more coffee, so homework must cause coffee.', 'Aria remarque que plus il y a de jours de devoirs, plus il y a de cafe, donc les devoirs doivent causer le cafe.'],
  ['Noah says the game makes people hungry because hungry people play the game.', 'Noah dit que le jeu rend les gens affames parce que les gens affames jouent au jeu.'],
  ['Zoe thinks the new app made everyone late because late people used the app.', 'Zoe pense que la nouvelle application a rendu tout le monde en retard parce que les gens en retard ont utilise l application.'],
  ['Milo says more umbrellas mean a storm is coming, but the storm may have made people grab umbrellas.', 'Milo dit que plus de parapluies signifie qu une tempete arrive, mais la tempete a peut etre fait prendre des parapluies.'],
  ['Lina thinks the noisy classroom caused bad grades because both happened together.', 'Lina pense que la classe bruyante a cause de mauvaises notes parce que les deux sont arrives ensemble.'],
  ['Eli says people who smile in photos are happy because the photo caused the happiness.', 'Eli dit que les gens qui sourient sur les photos sont heureux parce que la photo a cause le bonheur.'],
  ['Tara assumes good weather is caused by more runners outside.', 'Tara suppose que le beau temps est cause par plus de coureurs dehors.'],
  ['Owen thinks the store was successful because more customers came after it got popular.', 'Owen pense que le magasin a reussi parce que plus de clients sont venus apres qu il est devenu populaire.'],
  ['Rina says the class improved because the teacher talked more, ignoring that the class had already improved.', 'Rina dit que la classe s est amelioree parce que le professeur parlait davantage, en ignorant que la classe s etait deja amelioree.'],
  ['Ben claims the bakery caused the good mood on the street.', 'Ben affirme que la boulangerie a cause la bonne humeur dans la rue.'],
  ['Mia says the new sign made the shop busier because busy shops hang signs.', 'Mia dit que la nouvelle enseigne a rendu la boutique plus frequentee parce que les boutiques frequentees ont des enseignes.'],
  ['Theo thinks exercise made him tired because tired people exercise.', 'Theo pense que l exercice l a fatigue parce que les gens fatigues font de l exercice.'],
  ['Ava says more laughing at lunch proves the lunch caused the laughter.', 'Ava dit que plus de rires au dejeuner prouvent que le dejeuner a cause les rires.'],
  ['Leo assumes the longer line made the store famous, not the other way around.', 'Leo suppose que la longue file a rendu le magasin celebre, et non l inverse.'],
  ['Nina says the playlist caused good road trips because good road trips use playlists.', 'Nina dit que la playlist a cause de bons trajets parce que les bons trajets utilisent des playlists.'],
  ['Priya believes the new policy caused fewer complaints because fewer complaints followed it.', 'Priya croit que la nouvelle politique a cause moins de plaintes parce que moins de plaintes l ont suivie.'],
  ['Finn says the smart watch made him walk more because active people buy smart watches.', 'Finn dit que la montre connectee lui a fait marcher plus parce que les gens actifs achetent des montres connectees.'],
  ['Mina argues that the school caused good test scores because high scores appear after school.', 'Mina soutient que l ecole a cause de bonnes notes parce que les bonnes notes apparaissent apres l ecole.'],
  ['Kai thinks the new logo made the company popular because popular companies redesign logos.', 'Kai pense que le nouveau logo a rendu l entreprise populaire parce que les entreprises populaires refont leurs logos.'],
  ['Aria says the quick lunch caused a productive afternoon because productive people eat quickly.', 'Aria dit que le dejeuner rapide a cause un apres-midi productif parce que les personnes productives mangent vite.'],
  ['Noah says the cleaner desk caused better focus because focused people keep clean desks.', 'Noah dit que le bureau range a cause une meilleure concentration parce que les personnes concentrees gardent des bureaux ranges.'],
  ['Zoe thinks the movie caused the popcorn to disappear because popcorn disappears during movies.', 'Zoe pense que le film a fait disparaitre le pop-corn parce que le pop-corn disparait pendant les films.'],
  ['Milo claims the neighborhood festival caused friendly neighbors because friendly neighbors attend festivals.', 'Milo affirme que le festival du quartier a cause des voisins sympathiques parce que les voisins sympathiques vont aux festivals.'],
  ['Lina says the new sneakers made running easier because runners buy new sneakers.', 'Lina dit que les nouvelles chaussures ont rendu la course plus facile parce que les coureurs achetent de nouvelles chaussures.'],
  ['Eli says more sunlight caused more reading because readers prefer sunlight.', 'Eli dit que plus de soleil a cause plus de lecture parce que les lecteurs preferent la lumiere du soleil.'],
  ['Tara thinks the ad made the product trendy because trendy products get ads.', 'Tara pense que la pub a rendu le produit a la mode parce que les produits a la mode ont des pubs.'],
  ['Owen says the earlier bus caused lower stress because less-stressed people catch earlier buses.', 'Owen dit que le bus plus tot a cause moins de stress parce que les personnes moins stressees prennent des bus plus tot.'],
  ['Rina says the tidy room caused better sleep because better sleepers tidy rooms.', 'Rina dit que la chambre rangee a cause un meilleur sommeil parce que les meilleurs dormeurs rangent leurs chambres.'],
  ['Ben says the bright sign caused more customers because more customers make bright signs.', 'Ben dit que l enseigne lumineuse a cause plus de clients parce que plus de clients font des enseignes lumineuses.'],
  ['Mia assumes the school trip caused better friendships because friends go on school trips.', 'Mia suppose que la sortie scolaire a cause de meilleures amities parce que les amis vont en sortie scolaire.'],
  ['Theo says the new recipe caused compliments because compliment-givers like trying new recipes.', 'Theo dit que la nouvelle recette a cause des compliments parce que les gens qui complimentent aiment essayer les nouvelles recettes.'],
  ['Ava thinks the app caused better moods because happy people use the app.', 'Ava pense que l application a cause de meilleurs humeurs parce que les gens heureux utilisent l application.'],
  ['Leo says the longer workout caused more energy because energetic people work out longer.', 'Leo dit que l entrainement plus long a cause plus d energie parce que les gens energetiques s entrainent plus longtemps.'],
  ['Nina says the conference caused better ideas because people with better ideas attend conferences.', 'Nina dit que la conference a cause de meilleures idees parce que les personnes avec de bonnes idees assistent aux conferences.'],
  ['Priya says the bus delay caused everyone to chat because chatty people wait for buses.', 'Priya dit que le retard du bus a fait discuter tout le monde parce que les personnes bavardes attendent les bus.'],
  ['Finn says the garden caused calm evenings because calm people care for gardens.', 'Finn dit que le jardin a cause des soirees calmes parce que les gens calmes s occupent des jardins.'],
  ['Jade says the new schedule caused better focus because focused people like schedules.', 'Jade dit que le nouvel emploi du temps a cause une meilleure concentration parce que les personnes concentrees aiment les emplois du temps.'],
  ['A student sees more library visits on rainy days and says rain makes people love books.', 'Un eleve voit plus de visites a la bibliotheque les jours de pluie et dit que la pluie rend les gens amateurs de livres.'],
  ['Mia notices more tea sales when exams are near and says tea improves exam pressure.', 'Mia remarque plus de ventes de the quand les examens approchent et dit que le the ameliore la pression des examens.'],
  ['Omar sees people wear coats on cold mornings and says coats create cold weather.', 'Omar voit des gens porter des manteaux les matins froids et dit que les manteaux creent le froid.'],
  ['Priya notices more umbrellas after forecasts mention storms and says umbrellas cause storms.', 'Priya remarque plus de parapluies quand les previsions parlent d orages et dit que les parapluies causent les orages.'],
  ['Ben sees more coffee cups in meetings that run long and says cups make meetings longer.', 'Ben voit plus de tasses de cafe dans les reunions qui durent longtemps et dit que les tasses rendent les reunions plus longues.'],
  ['Ava notices smiling customers near a bakery and says the smiles come from the bread alone.', 'Ava remarque des clients souriants pres d une boulangerie et dit que les sourires viennent du pain seul.'],
  ['Leo sees more traffic after the new mall opens and says malls create traffic.', 'Leo voit plus de trafic apres l ouverture du nouveau centre commercial et dit que les centres commerciaux creent le trafic.'],
  ['Nina sees plants grow after she plays music and says music grows plants.', 'Nina voit les plantes pousser apres avoir joue de la musique et dit que la musique fait pousser les plantes.'],
  ['Theo notices more homework on nights when he drinks soda and says soda causes homework.', 'Theo remarque plus de devoirs les soirs ou il boit du soda et dit que le soda cause les devoirs.'],
  ['Jade sees more people outside when the weather is nice and says people make nice weather.', 'Jade voit plus de gens dehors quand il fait beau et dit que les gens fabriquent le beau temps.']
  ['Maya sees more umbrellas on rainy days and says umbrellas create rain.', 'Maya voit plus de parapluies les jours de pluie et dit que les parapluies creent la pluie.'],
  ['Theo notices more ice cream sales during heat waves and says ice cream causes heat waves.', 'Theo remarque plus de ventes de glace pendant les vagues de chaleur et dit que la glace cause les vagues de chaleur.'],
  ['Nina sees people bring jackets when it gets cold and says jackets make it cold.', 'Nina voit les gens apporter des vestes quand il fait froid et dit que les vestes rendent le temps froid.'],
  ['Ben notices more coffee cups at meetings that run long and says cups make meetings drag on.', 'Ben remarque plus de tasses de cafe dans les reunions qui durent longtemps et dit que les tasses font durer les reunions.'],
  ['Omar sees more sales after a billboard goes up and says the billboard alone caused the sales.', 'Omar voit plus de ventes apres la pose d un panneau publicitaire et dit que le panneau a lui seul a cause les ventes.'],
  ['Priya sees more smiles near the bakery and says the bakery creates happiness instantly.', 'Priya voit plus de sourires pres de la boulangerie et dit que la boulangerie cree instantanement le bonheur.'],
  ['Leo notices better grades after a student buys a planner and says the planner causes good grades.', 'Leo remarque de meilleures notes apres qu un eleve a achete un agenda et dit que l agenda cause les bonnes notes.'],
  ['Rina sees traffic after a new mall opens and says the mall makes roads busy by magic.', 'Rina voit du trafic apres l ouverture d un nouveau centre commercial et dit que le centre commercial rend les routes chargees par magie.'],
  ['Jules sees more chatting when the bus is late and says the delay causes conversation.', 'Jules voit plus de bavardage quand le bus est en retard et dit que le retard provoque la conversation.'],
  ['Ava sees calm evenings after a new park opens and says the park causes peace everywhere.', 'Ava voit des soirees calmes apres l ouverture d un nouveau parc et dit que le parc cree la paix partout.']
];

const EN = ['Correlation Equals Causation', 'Post Hoc Ergo Propter Hoc', 'False Cause', 'Coincidence'];
const FR = ['Corrélation égale causalité', 'Post hoc ergo propter hoc', 'Fausse cause', 'Coïncidence'];

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
      id: 33051 + i,
      level: 6,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Corrélation égale causalité' : 'Correlation Equals Causation',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? FR : EN, c),
      correct_option_index: c,
      explanation: fr
        ? "Le fait que deux choses se produisent ensemble ne prouve pas que l'une a provoque l'autre."
        : 'The fact that two things happen together does not prove that one caused the other.',
      detailedExplanationBeginner: fr
        ? "Ensemble ne veut pas dire cause."
        : 'Together does not mean caused.',
      detailedExplanationIntermediate: fr
        ? "Une correlation peut etre due au hasard, a une troisieme cause ou a l'ordre des evenements; il faut une vraie preuve de cause."
        : 'A correlation can be due to chance, a third cause, or the order of events; you need real causal evidence.',
      detailedExplanationExpert: fr
        ? "Le raisonnement confond association et causalite, ce qui devient trompeur quand on ignore les facteurs tiers, la direction du lien et les biais de selection."
        : 'This reasoning confuses association with causation, which becomes misleading when third factors, direction of effect, and selection bias are ignored.',
      questionFormat: 'standard',
    };
  });
}

export const CORRELATION_EQUALS_CAUSATION_EXPANSION_EN: Question[] = make();
export const CORRELATION_EQUALS_CAUSATION_EXPANSION_FR: Question[] = make(true);

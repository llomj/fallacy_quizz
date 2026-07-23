import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya notices two rude customers in blue jackets and concludes blue jackets make people rude.', "Maya remarque deux clients impolis en veste bleue et conclut que les vestes bleues rendent les gens impolis."],
  ['Leo sees one messy kitchen after a rainy day and thinks rain causes clutter at home.', "Leo voit une cuisine en desordre apres une journee pluvieuse et pense que la pluie cause le bazar a la maison."],
  ['Nina spots three loud teenagers at the park and assumes teenagers are always loud.', "Nina remarque trois adolescents bruyants au parc et suppose que les adolescents sont toujours bruyants."],
  ['Owen remembers two bad rides with a taxi driver and decides all taxi drivers are reckless.', "Owen se souvient de deux mauvaises courses avec un chauffeur de taxi et decide que tous les chauffeurs de taxi sont imprudents."],
  ['Priya sees her friend wear glasses on stressful days and thinks glasses cause stress.', "Priya voit son amie porter des lunettes les jours stressants et pense que les lunettes causent le stress."],
  ['Ben meets two chatty people from one city and starts saying everyone from there is chatty.', "Ben rencontre deux personnes bavardes d une meme ville et se met a dire que tout le monde la-bas est bavard."],
  ['Tara notices a lot of dog owners at the dog park and concludes dog owners are a separate clique.', "Tara remarque beaucoup de proprietaires de chiens au parc canin et conclut que les proprietaires de chiens forment un clan a part."],
  ['Kai sees two classmates from the drama club using big gestures and assumes drama club students are all dramatic.', "Kai voit deux camarades du club de theatre utiliser de grands gestes et suppose que tous les membres du club sont dramatiques."],
  ['Jules sees a couple of cold coffees near deadline day and thinks deadlines make coffee cold.', "Jules voit quelques cafes froids un jour de delai et pense que les delais rendent le cafe froid."],
  ['Ava notices people in the same sneakers twice and decides those sneakers attract lazy people.', "Ava remarque deux fois des personnes avec les memes baskets et decide que ces baskets attirent les gens paresseux."],
  ['Noah sees one loud meeting and assumes all finance meetings are chaotic.', "Noah voit une reunion bruyante et suppose que toutes les reunions de finance sont chaotiques."],
  ['Mina spots a few messy desks in the corner office and thinks corner offices make people messy.', "Mina remarque quelques bureaux en desordre dans le bureau du coin et pense que les bureaux d angle rendent les gens desordonnes."],
  ['Eli sees two tired people with headphones and decides headphones make people tired.', "Eli voit deux personnes fatiguees avec des ecouteurs et decide que les ecouteurs fatiguent les gens."],
  ['Rina notices that every time her cousin visits, the dog barks, and assumes the cousin causes the barking.', "Rina remarque que chaque fois que son cousin vient, le chien aboie, et suppose que le cousin provoque les aboiements."],
  ['Hugo sees three students from one school wear the same hoodie and concludes the school enforces the hoodie.', "Hugo voit trois eleves d une meme ecole porter le meme sweat et conclut que l ecole impose ce sweat."],
  ['Lina sees two people in the same gym class arrive late and thinks the class makes people late.', "Lina voit deux personnes du meme cours de gym arriver en retard et pense que ce cours rend les gens en retard."],
  ['Grant observes a few good pancakes on Sundays and decides Sundays improve pancake quality.', "Grant observe quelques bonnes crepes le dimanche et decide que le dimanche ameliore la qualite des crepes."],
  ['Zoe notices that her plants droop when her neighbor visits and assumes the neighbor is bad for plants.', "Zoe remarque que ses plantes se fanent quand sa voisine vient et suppose que la voisine est mauvaise pour les plantes."],
  ['Milo sees two people in rain boots at the airport and thinks rain boots mean a flight problem.', "Milo voit deux personnes en bottes de pluie a l aeroport et pense que les bottes de pluie annoncent un probleme de vol."],
  ['Theo sees several messy receipts after lunch and concludes lunch makes people careless with money.', "Theo voit plusieurs reçus en desordre apres le dejeuner et conclut que le dejeuner rend les gens negligents avec l argent."],
  ['Pia sees a few quiet students in the front row and thinks front-row seats make people quiet.', "Pia voit quelques eleves calmes au premier rang et pense que les places devant rendent les gens calmes."],
  ['Finn sees one burnt cake and assumes the kitchen timer is cursed.', "Finn voit un gateau brule et suppose que le minuteur de la cuisine est maudit."],
  ['Maya sees a pair of teammates in matching socks and decides the socks improve teamwork.', "Maya voit deux coequipiers avec des chaussettes assorties et decide que les chaussettes ameliorent le travail d equipe."],
  ['Sam notices that a few people who love horror movies also like spicy food and thinks the two tastes are linked.', "Sam remarque que quelques personnes qui aiment les films d horreur aiment aussi la nourriture epicee et pense que les deux gouts sont lies."],
  ['Juno sees one class clown and starts describing all students in that class as clowns.', "Juno voit un seul clown de classe et commence a decrire tous les eleves de cette classe comme des clowns."],
  ['Iris notices that every time her phone is on low battery, the bus is late, and assumes the battery affects the bus.', "Iris remarque que chaque fois que son telephone est presque vide, le bus a du retard, et suppose que la batterie agit sur le bus."],
  ['Cole sees two people from the same neighborhood argue and assumes the whole neighborhood argues.', "Cole voit deux personnes du meme quartier se disputer et suppose que tout le quartier se dispute."],
  ['Nora notices that the office snack drawer is empty on stressful days and decides stress empties snack drawers.', "Nora remarque que le tiroir a snacks du bureau est vide les jours stressants et decide que le stress vide les tiroirs a snacks."],
  ['Ari sees a few messy backpacks after sports practice and thinks practice makes backpacks messy.', "Ari voit quelques sacs a dos en desordre apres l entrainement sportif et pense que l entrainement rend les sacs en desordre."],
  ['Rita sees two cheerful people with umbrellas and decides umbrellas make people cheerful.', "Rita voit deux personnes joyeuses avec des parapluies et decide que les parapluies rendent les gens joyeux."],
  ['Tia notices that her friend wears green on lucky days and thinks green causes luck.', "Tia remarque que son amie porte du vert les jours chanceux et pense que le vert cause la chance."],
  ['Oli sees a few loud tourists in hats and concludes hats make tourists loud.', "Oli voit quelques touristes bruyants avec des chapeaux et conclut que les chapeaux rendent les touristes bruyants."],
  ['Lara notices that the same barista works on her best mornings and assumes the barista causes good mornings.', "Lara remarque que la meme barista travaille pendant ses meilleures matinees et suppose que la barista cause les bonnes matinees."],
  ['Ben sees a couple of people leaving early from a workshop and concludes the workshop pushes people away.', "Ben voit quelques personnes quitter tot un atelier et conclut que l atelier pousse les gens dehors."],
  ['Mina sees two students with the same backpack brand and thinks the brand predicts friendship.', "Mina voit deux eleves avec la meme marque de sac a dos et pense que la marque predit l amitie."],
  ['Drew notices that every time the heater is on, someone complains, and thinks the heater creates complaints.', "Drew remarque que chaque fois que le chauffage est allume, quelqu un se plaint, et pense que le chauffage cree les plaintes."],
  ['Jade sees a handful of people smiling at the gym and concludes gyms make people cheerful.', "Jade voit quelques personnes souriantes a la salle de sport et conclut que les salles rendent les gens joyeux."],
  ['Owen sees two people in the same club both forget their folders and thinks club membership causes forgetfulness.', "Owen voit deux personnes du meme club oublier leurs dossiers et pense que l adhesion au club cause l oubli."],
  ['Mila sees a few kids with the same cartoon lunchbox and decides the lunchbox causes similar behavior.', "Mila voit quelques enfants avec la meme boite a lunch dessinee et decide que cette boite cause des comportements similaires."],
  ['Evan notices that when the coffee shop is crowded, his order takes longer, and assumes crowds create slow coffee.', "Evan remarque que lorsque le cafe est plein, sa commande prend plus de temps, et suppose que la foule rend le cafe plus lent."],
  ['Kira sees two people from the same workshop wearing the same badge and concludes the badge makes them think alike.', "Kira voit deux personnes du meme atelier porter le meme badge et conclut que le badge les fait penser de la meme facon."],
  ['Grant sees a few noisy groups near the exit and decides the exit area attracts noise.', "Grant voit quelques groupes bruyants pres de la sortie et decide que la zone de sortie attire le bruit."],
  ['Zara notices her meetings go worse on days she wears a certain scarf and thinks the scarf is the cause.', "Zara remarque que ses reunions se passent moins bien les jours ou elle porte une certaine echarpe et pense que l echarpe en est la cause."],
  ['Parker sees a couple of people from one neighborhood at the same restaurant and concludes the restaurant is for that neighborhood.', "Parker voit quelques personnes d un meme quartier dans le meme restaurant et conclut que le restaurant est reserve a ce quartier."],
  ['Hana sees one bad haircut on Friday and decides Friday haircuts are unlucky.', "Hana voit une mauvaise coupe de cheveux le vendredi et decide que les coupes du vendredi portent malheur."],
  ['Leo sees several people wearing rain jackets in the hallway and assumes the hallway makes people expect storms.', "Leo voit plusieurs personnes avec des vestes de pluie dans le couloir et suppose que le couloir fait attendre des orages."],
  ['Maya sees a few people from one department arrive early and concludes that department is naturally early.', "Maya voit quelques personnes d un departement arriver tot et conclut que ce departement est naturellement ponctuel."],
  ['Nina sees two people use the same planner and thinks the planner causes the same personality.', "Nina voit deux personnes utiliser le meme agenda et pense que l agenda cause la meme personnalite."],
  [`Maya notices one loud customer in a baseball cap and starts linking baseball caps with rude behavior.`, `Maya remarque un client bruyant avec une casquette de baseball et commence a lier les casquettes de baseball au comportement impoli.`],
  [`Leo sees a few people in hoodies at a cafe and assumes hoodies make people secretive.`, `Leo voit quelques personnes en sweat a capuche dans un cafe et suppose que les sweats a capuche rendent les gens secrets.`],
  [`Nina spots two messy desks in the same office and decides that office creates messy workers.`, `Nina repere deux bureaux en desordre dans le meme bureau et decide que ce bureau cree des travailleurs desordonnes.`],
  [`Owen notices the same song playing when he gets bad news and thinks the song causes the bad news.`, `Owen remarque que la meme chanson passe quand il recoit de mauvaises nouvelles et pense que la chanson cause les mauvaises nouvelles.`],
  [`Priya sees three people from the same gym wear matching water bottles and concludes the bottles make them act alike.`, `Priya voit trois personnes de la meme salle de sport avec des gourdes assorties et conclut que les gourdes les font agir pareil.`],
  [`Ben sees a few students from one club all laugh loudly and assumes the club makes people loud.`, `Ben voit quelques eleves d un club rire fort et suppose que le club rend les gens bruyants.`],
  [`Tara notices that every time her cousin visits, someone is late, and blames the cousin for lateness in general.`, `Tara remarque que chaque fois que son cousin vient, quelqu un est en retard, et accuse le cousin de provoquer les retards en general.`],
  [`Jules sees two people at the market with the same tote bag and decides the tote bag attracts the same kind of shopper.`, `Jules voit deux personnes au marche avec le meme sac et decide que ce sac attire le meme type d acheteur.`],
  [`Ava observes a handful of noisy commuters and decides the train station makes people noisy.`, `Ava observe quelques navetteurs bruyants et decide que la gare rend les gens bruyants.`],
  [`Milo sees a few neighbors from one street all own dogs and concludes the street creates dog lovers.`, `Milo voit quelques voisins d une rue posseder des chiens et conclut que la rue cree des amoureux des chiens.`],
];

const OPTIONS_EN = ['Illusory Correlation', 'Clustering Illusion', 'False Cause', 'Faulty Generalization'];
const OPTIONS_FR = ['Corrélation illusoire', 'Illusion de regroupement', 'Fausse cause', 'Généralisation hâtive'];

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
      id: 35901 + i,
      level: 4,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Corrélation illusoire' : 'Illusory Correlation',
      difficulty: i < 43 ? 1 : i < 50 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? OPTIONS_FR : OPTIONS_EN, c),
      correct_option_index: c,
      explanation: fr
        ? 'Voir deux choses ensemble ne prouve pas qu elles sont cause et effet.'
        : 'Seeing two things together does not prove one causes the other.',
      detailedExplanationBeginner: fr
        ? 'Une coincidence peut sembler etre une relation.'
        : 'A coincidence can look like a real relationship.',
      detailedExplanationIntermediate: fr
        ? "La correlation illusoire apparait quand on remarque deux elements qui semblent aller ensemble et qu on invente trop vite un lien de cause a effet, surtout si quelques exemples frappants restent en memoire."
        : 'Illusory correlation appears when two things seem to go together and we too quickly invent a cause-and-effect link, especially when a few striking examples stay in memory.',
      detailedExplanationExpert: fr
        ? "Ce biais de perception et de memoire se nourrit d exemples saillants, de categories stereotypes et de la tendance a surinterpreter des coincidences visibles comme si elles revelaient une regle generale."
        : 'This perception-and-memory bias feeds on salient examples, stereotyped categories, and the tendency to overread visible coincidences as if they revealed a general rule.',
      questionFormat: 'standard',
    };
  });
}

export const ILLUSORY_CORRELATION_EXPANSION_EN: Question[] = make();
export const ILLUSORY_CORRELATION_EXPANSION_FR: Question[] = make(true);

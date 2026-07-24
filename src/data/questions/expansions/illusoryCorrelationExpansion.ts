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
  [`Maya sees two people in red jackets arguing and concludes red jackets cause arguments.`, `Maya voit deux personnes en veste rouge se disputer et conclut que les vestes rouges causent les disputes.`],
  [`Ben notices that his mood is bad whenever the coffee shop is crowded and assumes the crowd creates bad moods.`, `Ben remarque que son humeur est mauvaise chaque fois que le cafe est plein et suppose que la foule cree les mauvaises humeurs.`],
  [`Priya sees a few people from one suburb driving nice cars and thinks the suburb causes luxury cars.`, `Priya voit quelques personnes d une banlieue conduire de belles voitures et pense que la banlieue cause les voitures de luxe.`],
  [`Leo sees one messy classroom after lunch and decides lunch makes classrooms messy.`, `Leo voit une classe en desordre apres le dejeuner et decide que le dejeuner rend les classes en desordre.`],
  [`Nina spots two quiet people in headphones and assumes headphones make people quiet.`, `Nina repere deux personnes calmes avec des ecouteurs et suppose que les ecouteurs rendent les gens calmes.`],
  [`Owen sees three students from one club all wear the same hoodie and thinks the hoodie causes the club behavior.`, `Owen voit trois eleves d un club porter le meme sweat et pense que le sweat cause le comportement du club.`],
  [`Ava notices a few cheerful customers at the bakery and decides bakeries make people cheerful.`, `Ava remarque quelques clients joyeux a la boulangerie et decide que les boulangeries rendent les gens joyeux.`],
  [`Rita sees one bad commute after a rainy day and assumes rain causes every bad commute.`, `Rita voit un mauvais trajet apres une journee pluvieuse et suppose que la pluie cause tous les mauvais trajets.`],
  [`Jules sees several people in the same sneakers acting alike and links the sneakers to personality.`, `Jules voit plusieurs personnes portant les memes baskets agir pareil et lie les baskets a la personnalite.`],
  [`Mina sees two coworkers from one department arrive late and concludes the department makes people late.`, `Mina voit deux collegues d un meme departement arriver en retard et conclut que le departement rend les gens en retard.`],
  ['Maya sees a red car and a bad mood twice and decides red cars cause bad moods.', "Maya voit une voiture rouge et une mauvaise humeur deux fois et decide que les voitures rouges provoquent les mauvaises humeurs."],
  ['Leo notices two rainy lunches and concludes rainy lunches make people grumpy.', "Leo remarque deux dejeuners pluvieux et conclut que les dejeuners pluvieux rendent les gens grognons."],
  ['Nina sees three people in the same jacket act rude and thinks the jacket makes them rude.', "Nina voit trois personnes dans la meme veste agir impoliment et pense que la veste les rend impolis."],
  ['Owen spots a few quiet commuters with headphones and assumes headphones cause quiet behavior.', "Owen repere quelques navetteurs calmes avec des ecouteurs et suppose que les ecouteurs causent le calme."],
  ['Priya notices that her worst days all had messy desks and decides messy desks create bad days.', "Priya remarque que ses pires jours avaient tous des bureaux en desordre et decide que les bureaux en desordre creent les mauvais jours."],
  ['Ben sees two good pancakes on Sundays and concludes Sundays improve pancake quality.', "Ben voit deux bonnes crepes le dimanche et conclut que le dimanche ameliore la qualite des crepes."],
  ['Tara notices that the same song plays when she gets bad news and thinks the song causes the news.', "Tara remarque que la meme chanson passe quand elle recoit de mauvaises nouvelles et pense que la chanson cause les nouvelles."],
  ['Kai sees a few cheerful customers at the bakery and decides bakeries make people cheerful.', "Kai voit quelques clients joyeux a la boulangerie et decide que les boulangeries rendent les gens joyeux."],
  ['Jules notices that whenever his cousin visits, the dog barks, so he blames the cousin for barking dogs.', "Jules remarque que chaque fois que son cousin vient, le chien aboie, alors il accuse le cousin de faire aboyer les chiens."],
  ['Ava sees two tired people with rain jackets and thinks rain jackets make people tired.', "Ava voit deux personnes fatiguees avec des vestes de pluie et pense que les vestes de pluie fatiguent les gens."],
  ['Noah notices a few loud tourists in hats and concludes hats make tourists loud.', "Noah remarque quelques touristes bruyants avec des chapeaux et conclut que les chapeaux rendent les touristes bruyants."],
  ['Mina sees three students from the same club all smile and assumes the club makes people smiley.', "Mina voit trois eleves du meme club sourire et suppose que le club rend les gens souriants."],
  ['Eli spots two messy backpacks after sports practice and thinks practice makes backpacks messy.', "Eli repere deux sacs a dos en desordre apres l entrainement sportif et pense que l entrainement rend les sacs en desordre."],
  ['Rina notices that her plants droop when the neighbor visits and assumes the neighbor harms plants.', "Rina remarque que ses plantes se fanent quand la voisine vient et suppose que la voisine nuit aux plantes."],
  ['Hugo sees one loud meeting after lunch and concludes lunch causes chaotic meetings.', "Hugo voit une reunion bruyante apres le dejeuner et conclut que le dejeuner cause des reunions chaotiques."],
  ['Lina notices that people in the same sneakers often talk together and thinks the sneakers cause friendship.', "Lina remarque que les personnes avec les memes baskets parlent souvent ensemble et pense que les baskets causent l amitie."],
  ['Grant sees a few people from one town all like spicy food and links the town to spicy tastes.', "Grant voit quelques personnes d une meme ville aimer la nourriture epicee et lie la ville aux gouts epices."],
  ['Zoe notices that the office snack drawer is empty on stressful days and decides stress empties drawers.', "Zoe remarque que le tiroir a snacks du bureau est vide les jours stressants et decide que le stress vide les tiroirs."],
  ['Milo sees two neighbors from one street both own dogs and concludes the street creates dog lovers.', "Milo voit deux voisins d une meme rue posseder des chiens et conclut que la rue cree des amoureux des chiens."],
  ['Theo notices that every time the heater is on, someone complains, and thinks the heater creates complaints.', "Theo remarque que chaque fois que le chauffage est allume, quelqu un se plaint, et pense que le chauffage cree des plaintes."],
  ['Pia sees three people from the same gym wear matching water bottles and thinks the bottles make them act alike.', "Pia voit trois personnes de la meme salle de sport avec des gourdes assorties et pense que les gourdes les font agir pareil."],
  ['Finn notices that his mood is bad whenever the cafe is crowded and assumes the crowd causes bad moods.', "Finn remarque que son humeur est mauvaise chaque fois que le cafe est plein et suppose que la foule cause les mauvaises humeurs."],
  ['Maya sees two people in red jackets arguing and concludes red jackets cause arguments.', "Maya voit deux personnes en veste rouge se disputer et conclut que les vestes rouges causent les disputes."],
  ['Sam notices a handful of cheerful shoppers and assumes the mall makes people cheerful.', "Sam remarque quelques acheteurs joyeux et suppose que le centre commercial rend les gens joyeux."],
  ['Juno sees a few quiet students in headphones and decides headphones make people quiet.', "Juno voit quelques eleves calmes avec des ecouteurs et decide que les ecouteurs rendent les gens calmes."],
  ['Iris notices that a certain scarf appears on her worst meeting days and thinks the scarf causes bad meetings.', "Iris remarque qu une certaine echarpe apparait les jours de ses pires reunions et pense que l echarpe cause les mauvaises reunions."],
  ['Cole sees two people from one neighborhood argue and assumes the whole neighborhood argues.', "Cole voit deux personnes d un meme quartier se disputer et suppose que tout le quartier se dispute."],
  ['Nora notices that her best mornings happen when the same barista works and concludes the barista causes good mornings.', "Nora remarque que ses meilleures matinees arrivent quand la meme barista travaille et conclut que la barista cause les bonnes matinees."],
  ['Ari sees a few messy desks in the corner office and thinks the office makes people messy.', "Ari voit quelques bureaux en desordre dans le bureau du coin et pense que le bureau rend les gens desordonnes."],
  ['Rita sees a couple of people at the restaurant from the same suburb and concludes the restaurant is for that suburb.', "Rita voit quelques personnes au restaurant venant de la meme banlieue et conclut que le restaurant est pour cette banlieue."],
  ['Tia notices that a lucky green shirt appears on good days and decides green shirts create luck.', "Tia remarque qu une chemise verte porte-bonheur apparait les bons jours et decide que les chemises vertes creent la chance."],
  ['Oli sees a few students from one school wear the same hoodie and thinks the hoodie causes the school vibe.', "Oli voit quelques eleves d une meme ecole porter le meme sweat et pense que le sweat cause l ambiance de l ecole."],
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

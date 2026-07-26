import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya thinks the city has become unsafe because she saw one dramatic news clip, even though the full report showed the area is mostly calm.', 'Maya pense que la ville est devenue dangereuse parce qu elle a vu un extrait d actualité spectaculaire, alors que le rapport complet montrait que le quartier est plutot calme.'],
  ['Leo believes the restaurant is terrible because the one thing he remembers is a burnt fry on the tray.', 'Leo croit que le restaurant est horrible parce que la seule chose dont il se souvient est une frite brûlée sur le plateau.'],
  ['Priya says the meeting was a disaster because one person interrupted loudly, even though the rest of the discussion was normal.', 'Priya dit que la reunion etait un desastre parce qu une personne a interrompu bruyamment, alors que le reste de la discussion etait normal.'],
  ['Omar decides the neighborhood is noisy because he notices one motorcycle roaring past his window.', 'Omar decide que le quartier est bruyant parce qu il remarque une seule moto qui passe en rugissant devant sa fenetre.'],
  ['Rina thinks the class was confusing because the teacher used one complicated slide.', 'Rina pense que le cours etait confus parce que le professeur a utilise une seule diapositive compliquee.'],
  ['Ben calls the whole vacation awful because the airport delay is the strongest memory.', 'Ben dit que les vacances entieres etaient horribles parce que le retard a l aeroport est le souvenir le plus fort.'],
  ['Zoe assumes the app is broken because the red error banner is the part that grabs her attention.', 'Zoé suppose que l application est cassee parce que la bannière d erreur rouge est la partie qui attire son attention.'],
  ['Kai thinks the movie was brilliant because the explosion scene was the loudest moment.', 'Kai pense que le film etait genial parce que la scene d explosion etait le moment le plus sonore.'],
  ['Nora says the exam was impossible because the first question looked scary.', 'Nora dit que l examen etait impossible parce que la premiere question avait l air effrayante.'],
  ['Eli believes the whole road trip went badly because the flat tire stood out more than the good parts.', 'Eli croit que tout le voyage a mal tourne parce que le pneu creve ressort davantage que les bons moments.'],
  ['Lina thinks the office is a mess because the one cluttered desk is the first thing she sees.', 'Lina pense que le bureau est en pagaille parce que le seul bureau en desordre est la premiere chose qu elle voit.'],
  ['Grant decides the school is dangerous because he heard about one playground injury.', 'Grant decide que l ecole est dangereuse parce qu il a entendu parler d une seule blessure dans la cour de recreation.'],
  ['Tia says the train service is awful because the loudest complaint on social media was about one delay.', 'Tia dit que le service de train est mauvais parce que la plainte la plus bruyante sur les reseaux sociaux concernait un seul retard.'],
  ['Noah thinks the party was awkward because the one silent corner felt memorable.', 'Noah pense que la fete etait genante parce que le seul coin silencieux reste memorisable.'],
  ['Mia says the whole class was rude because one student rolled their eyes.', 'Mia dit que toute la classe etait malpolie parce qu un eleve a roule des yeux.'],
  ['Jules decides the town fair was a failure because the broken ride got all the attention.', 'Jules decide que la foire du village etait un echec parce que l attraction en panne a capte toute l attention.'],
  ['Ava thinks the bakery is bad because the one dry croissant was the most noticeable item.', 'Ava pense que la boulangerie est mauvaise parce que le seul croissant sec etait l element le plus remarquable.'],
  ['Finn says the presentation was boring because the one slide with tiny text stood out.', 'Finn dit que la presentation etait ennuyeuse parce que la seule diapositive avec du petit texte ressortait.'],
  ['Mina assumes the whole neighborhood is wealthy because the fancy house on the corner is easy to notice.', 'Mina suppose que tout le quartier est riche parce que la belle maison au coin est facile à remarquer.'],
  ['Theo says the office policy is unreasonable because the one strict rule is the one people mention most.', 'Theo dit que la politique du bureau est deraisonnable parce que la seule regle stricte est celle que les gens mentionnent le plus.'],
  ['Juno believes the customer service is awful because the one rude caller was unforgettable.', 'Juno croit que le service client est horrible parce que l unique appelant grossier etait inoubliable.'],
  ['Iris thinks the school lunch is terrible because the soup spilled on her tray and that was the loudest moment.', 'Iris pense que le repas scolaire est terrible parce que la soupe a renverse sur son plateau et c etait le moment le plus frappant.'],
  ['Cole says the concert was a mess because the microphone feedback is what he remembers most.', 'Cole dit que le concert etait le bazar parce que le larsen du micro est ce dont il se souvient le plus.'],
  ['Riley decides the plane ride was dangerous because the turbulence warning is the detail that stuck.', 'Riley decide que le vol etait dangereux parce que l avertissement de turbulence est le detail qui est reste.'],
  ['Pia says the day at the beach was ruined because the sunscreen spill became the key memory.', 'Pia dit que la journee à la plage etait gâchee parce que la creme solaire renversee est devenue le souvenir principal.'],
  ['Hugo thinks the new phone is unreliable because the cracked screen is the first thing he notices.', 'Hugo pense que le nouveau telephone est peu fiable parce que l ecran fissure est la premiere chose qu il remarque.'],
  ['Sam says the wedding was awkward because the one speech stumble was so vivid.', 'Sam dit que le mariage etait genant parce que le seul bafouillage du discours etait si vif.'],
  ['Jade believes the whole city is dirty because the overflowing bin near the station stands out.', 'Jade croit que toute la ville est sale parce que la poubelle debordante pres de la gare saute aux yeux.'],
  ['Owen thinks the school is failing because the loudest student complaint was the cafeteria line.', 'Owen pense que l ecole echoue parce que la plainte la plus bruyante des eleves concernait la file de la cantine.'],
  ['Lea says the neighborhood festival was boring because the fire alarm interruption was memorable.', 'Léa dit que le festival du quartier etait ennuyeux parce que l interruption due à l alarme incendie est restée memorables.'],
  ['Maya thinks the project is doomed because the one late email is the part she keeps replaying.', 'Maya pense que le projet est condamne parce que le seul courriel en retard est la partie qu elle repasse sans cesse en tete.'],
  ['Ben says the hotel was awful because the lobby smell was impossible to ignore.', 'Ben dit que l hotel etait affreux parce que l odeur du hall etait impossible à ignorer.'],
  ['Ava assumes the meeting had no progress because the one argument dominated the room.', 'Ava suppose que la reunion n a fait aucun progres parce que le seul argument a domine la salle.'],
  ['Omar thinks the park is unsafe because the one broken swing is what he pictures first.', 'Omar pense que le parc est dangereux parce que la seule balançoire cassee est ce qu il imagine en premier.'],
  ['Nina says the concert ticket was wasted because the encore was cut short.', 'Nina dit que le billet de concert etait gaspille parce que le rappel a ete raccourci.'],
  ['Eli says the work trip was stressful because the hotel check-in line was the most salient part.', 'Eli dit que le voyage de travail etait stressant parce que la file d enregistrement a l hotel etait la partie la plus saillante.'],
  ['Lina believes the whole class disliked her because one person did not smile back.', 'Lina croit que toute la classe ne l aimait pas parce qu une personne ne lui a pas rendu son sourire.'],
  ['Grant says the neighborhood is declining because the one boarded-up shop is the most visible.', 'Grant dit que le quartier declinant parce que la seule boutique condamnee est la plus visible.'],
  ['Tia thinks the breakfast was unhealthy because the greasy tray looked dramatic.', 'Tia pense que le petit-dejeuner etait malsain parce que le plateau graisseux avait un aspect dramatique.'],
  ['Finn says the app review should be negative because the crash notification is what jumps out.', 'Finn dit que l avis sur l application devrait etre negatif parce que la notification de plantage est ce qui saute aux yeux.'],
  ['Mina thinks the class trip was unsafe because the one emergency stop was loud and memorable.', 'Mina pense que la sortie scolaire etait dangereuse parce que le seul arret d urgence etait bruyant et memorable.'],
  ['Theo says the office is falling apart because the one broken printer is the thing everyone mentions.', 'Theo dit que le bureau s effondre parce que la seule imprimante en panne est ce que tout le monde mentionne.'],
  ['Juno says the road network is terrible because the detour sign was the most noticeable thing on her drive.', 'Juno dit que le reseau routier est terrible parce que le panneau de detour etait la chose la plus visible pendant son trajet.'],
  ['Iris thinks the museum was boring because the one dark room stood out more than the rest.', 'Iris pense que le musee etait ennuyeux parce que la seule salle sombre ressortait davantage que le reste.'],
  ['Cole says the neighborhood is unfriendly because one neighbor looked annoyed in passing.', 'Cole dit que le quartier est peu aimable parce qu un voisin avait l air agace en passant.'],
  ['Riley says the grocery store is chaotic because the checkout jam is what he remembers most.', 'Riley dit que l epicerie est chaotique parce que le blocage a la caisse est ce dont il se souvient le plus.'],
  ['Pia says the trip was disappointing because the cancelled tour is the clearest memory.', 'Pia dit que le voyage etait decevant parce que la visite annulee est le souvenir le plus clair.'],
  ['Hugo thinks the movie theater is filthy because the sticky floor is the detail that stuck with him.', 'Hugo pense que le cinema est crasseux parce que le sol collant est le detail qui lui est reste.'],
  ['Sam says the city council is useless because the one shouting match overshadows the rest.', 'Sam dit que le conseil municipal est inutile parce que la seule dispute bruyante eclipce tout le reste.'],
  ['Jade says the class was awful because the one failed quiz became the headline in her head.', 'Jade dit que la classe etait horrible parce que le seul quiz rate est devenu le titre dans sa tete.'],
  ['Maya says the whole mall was overcrowded because the one packed elevator is what she remembers.', 'Maya dit que tout le centre commercial etait surpeuple parce que le seul ascenseur bondé est ce qu elle retient.'],
  ['Leo thinks the lecture was terrible because one joke from the back row was louder than the rest.', 'Leo pense que la conférence etait terrible parce qu une blague du fond de la salle a ete plus forte que le reste.'],
  ['Priya believes the neighborhood is dangerous because the broken mailbox is the first thing she notices.', 'Priya croit que le quartier est dangereux parce que la boite aux lettres cassée est la premiere chose qu elle remarque.'],
  ['Omar says the whole day was ruined because the spilled coffee is the detail that stands out most.', 'Omar dit que toute la journée etait gâchee parce que le café renversé est le detail qui ressort le plus.'],
  ['Rina says the restaurant is bad because the loud plate drop is what stays in her mind.', 'Rina dit que le restaurant est mauvais parce que le bruit de la assiette tombée est ce qui lui reste en tete.'],
  ['Ben thinks the train station is chaotic because one announcement was garbled and memorable.', 'Ben pense que la gare est chaotique parce qu une annonce etait brouillée et memorable.'],
  ['Zoe says the class was unfocused because the one buzzing phone grabbed all the attention.', 'Zoé dit que la classe etait distraite parce que le seul téléphone qui vibrait a tout attire.'],
  ['Kai believes the park is unsafe because the one broken bench is what everyone points at.', 'Kai croit que le parc est dangereux parce que le seul banc cassé est ce que tout le monde montre du doigt.'],
  ['Nora says the movie was awful because the jump scare is the scene she cannot forget.', 'Nora dit que le film etait horrible parce que le sursaut est la scene qu elle ne peut pas oublier.'],
  ['Eli thinks the office is terrible because the one loud printer dominates his memory.', 'Eli pense que le bureau est terrible parce que la seule imprimante bruyante domine sa memoire.'],
  ['Lina says the trip was stressful because the airport queue is the vivid part she replays.', 'Lina dit que le voyage etait stressant parce que la file de l aeroport est la partie vive qu elle repasse.'],
  ['Grant believes the school is failing because the broken clock in the hallway is what he keeps seeing.', 'Grant croit que l ecole echoue parce que l horloge cassée du couloir est ce qu il continue de voir.'],
  ['Tia says the food festival was disappointing because the one overcooked sample was the loudest impression.', 'Tia dit que le festival culinaire etait decevant parce que le seul échantillon trop cuit a fait la plus forte impression.'],
  ['Noah thinks the store is messy because the one aisle with boxes is the part that catches his eye.', 'Noah pense que le magasin est en désordre parce que le seul rayon avec des cartons est la partie qui attire son oeil.'],
  ['Mia says the presentation was bad because the one garbled chart took over her attention.', 'Mia dit que la présentation etait mauvaise parce que le seul graphique brouillé a pris toute son attention.'],
  ['Jules thinks the class trip was unsafe because the one muddy shoe print is the memory that sticks.', 'Jules pense que la sortie scolaire etait dangereuse parce que la seule empreinte de chaussure boueuse est le souvenir qui reste.'],
  ['Ava says the bank branch is unfriendly because the one stern security guard stood out.', 'Ava dit que lagence bancaire est peu aimable parce que le seul agent de sécurité sévère a ressorti.'],
  ['Finn thinks the event was a failure because the one microphone squeal drowned out everything else.', 'Finn pense que l evenement etait un echec parce que le seul grincement du micro a couvert tout le reste.'],
  ['Mina says the neighborhood is ugly because the one graffiti wall is impossible to miss.', 'Mina dit que le quartier est moche parce que le seul mur tagué est impossible à manquer.'],
  ['Theo believes the meeting was useless because the one interruption became the whole story.', 'Théo croit que la réunion etait inutile parce que la seule interruption est devenue toute l histoire.'],
  ['Juno says the café is bad because the one cold latte was the most memorable thing.', 'Juno dit que le café est mauvais parce que le seul latte froid est la chose la plus mémorable.'],
  ['Iris thinks the museum is boring because the dark room is what she keeps describing.', 'Iris pense que le musée est ennuyeux parce que la salle sombre est ce qu elle continue de décrire.'],
  ['Cole says the stadium is chaotic because the one parking jam is what he tells people about.', 'Cole dit que le stade est chaotique parce que le seul bouchon de parking est ce qu il raconte aux gens.'],
  ['Riley believes the app is glitchy because the one banner that froze is what he keeps noticing.', 'Riley croit que l application bugue parce que la seule bannière qui s est figée est ce qu il continue de remarquer.'],
  ['Pia says the road trip was awful because the one detour sign is the image she cannot shake.', 'Pia dit que le road trip etait horrible parce que le seul panneau de détour est l image qu elle ne peut pas chasser.'],
  ['Hugo thinks the classroom is noisy because the one chair scrape is the sound he remembers.', 'Hugo pense que la classe est bruyante parce que le seul grincement de chaise est le son dont il se souvient.'],
  ['Sam says the party was bad because the one awkward silence felt bigger than the fun moments.', 'Sam dit que la fête etait mauvaise parce que le seul silence gênant semblait plus grand que les moments amusants.'],
  ['Jade thinks the airline is terrible because the one baggage delay is the complaint she repeats.', 'Jade pense que la compagnie aérienne est terrible parce que le seul retard de bagages est la plainte qu elle répète.'],
  ['Owen says the campus is dirty because the one overflowing bin is the thing that sticks out.', 'Owen dit que le campus est sale parce que la seule poubelle qui déborde est la chose qui ressort.'],
  ['Lea believes the concert was disappointing because the one bad encore is the detail she can recall.', 'Léa croit que le concert etait décevant parce que le seul mauvais rappel est le détail qu elle peut rappeler.'],
  ['Maya says the city feels unsafe because the one siren on her block is the most vivid sound.', 'Maya dit que la ville semble dangereuse parce que la seule sirène dans sa rue est le son le plus vif.'],
  ['Ben thinks the office is toxic because the one sharp comment still echoes in his head.', 'Ben pense que le bureau est toxique parce que la seule remarque acerbe résonne encore dans sa tete.'],
  ['Nora says the trip was ruined because the one missed turn is the bit she replays.', 'Nora dit que le voyage etait gâché parce que le seul mauvais virage est le passage qu elle repasse.'],
  ['Eli believes the lecture was worthless because the one confusing term grabbed all his focus.', 'Eli croit que la conférence etait inutile parce que le seul terme confus a capté tout son focus.'],
  ['Lina says the restaurant is unhealthy because the greasy aroma is the strongest impression.', 'Lina dit que le restaurant est malsain parce que l odeur grasse est l impression la plus forte.'],
  ['Grant thinks the school club is unfair because the one rejected idea is what he keeps bringing up.', 'Grant pense que le club scolaire est injuste parce que la seule idée rejetée est ce qu il continue de mentionner.'],
  ['Tia says the office party was awkward because the one dance mistake is what everyone remembers.', 'Tia dit que la fête du bureau etait gênante parce que la seule erreur de danse est ce dont tout le monde se souvient.'],
  ['Noah thinks the hotel is horrible because the one noisy heater is the main thing on his mind.', 'Noah pense que l hôtel est horrible parce que le seul chauffage bruyant est la principale chose dans sa tete.'],
  ['Mia says the mall was overwhelming because the one bright ad dominated her senses.', 'Mia dit que le centre commercial etait accablant parce que la seule publicité lumineuse dominait ses sens.'],
  ['Jules thinks the workshop was bad because the one awkward icebreaker is the bit he cannot stop telling.', 'Jules pense que l atelier etait mauvais parce que le seul brise-glace gênant est le passage qu il n arrete pas de raconter.'],
  ['Ava says the neighborhood is dangerous because the one cracked window is the image she notices first.', 'Ava dit que le quartier est dangereux parce que la seule fenêtre fissurée est l image qu elle remarque en premier.'],
  ['Finn believes the event was boring because the one flat joke is the part that survived in memory.', 'Finn croit que l evenement etait ennuyeux parce que la seule blague plate est la partie qui a survécu dans sa mémoire.'],
  ['Mina says the café is rude because the one curt reply outweighed the rest of the visit.', 'Mina dit que le café est impoli parce que la seule reponse sèche a pesé plus que le reste de la visite.'],
  ['Theo thinks the city is broken because the one stalled train is the symbol he keeps using.', 'Théo pense que la ville est cassée parce que le seul train arrêté est le symbole qu il continue d utiliser.'],
  ['Juno says the class was awful because the one coughing fit became the whole memory.', 'Juno dit que la classe etait horrible parce que la seule quinte de toux est devenue tout le souvenir.'],
  ['Iris believes the park is bad because the one muddy path is the thing that stuck with her.', 'Iris croit que le parc est mauvais parce que le seul sentier boueux est la chose qui lui est restée.'],
  ['Maya says the office day was a disaster because one tense meeting became the only thing she can picture.', 'Maya dit que la journée au bureau etait catastrophique parce qu une reunion tendue est devenue la seule chose qu elle peut imaginer.'],
  ['Leo thinks the city festival was boring because one long queue is the detail that dominates his memory.', 'Leo pense que le festival de la ville etait ennuyeux parce qu une longue file d attente est le détail qui domine sa mémoire.'],
  ['Priya says the school event was a mess because one microphone crackle drowned out the rest of the evening in her head.', 'Priya dit que l evenement scolaire etait un bazar parce qu un craquement du micro a noye tout le reste de la soirée dans sa tete.'],
  ['Omar says the whole neighborhood must be unsafe because one broken streetlamp is what he notices first.', 'Omar dit que tout le quartier doit etre dangereux parce qu un lampadaire casse est la premiere chose qu il remarque.'],
];

const OPTIONS_EN = ['Salience Bias', 'Availability Heuristic', 'Negativity Bias', 'Confirmation Bias'];
const OPTIONS_FR = ['Biais de saillance', 'Heuristique de disponibilité', 'Biais de négativité', 'Biais de confirmation'];

function rotatedOptions(options: string[], correctIndex: number): string[] {
  const distractors = options.slice(1);
  const result = [...distractors];
  result.splice(correctIndex, 0, options[0]);
  return result;
}

function subLevelFor(index: number): SubLevel {
  if (index < 17) return SubLevel.BEGINNER;
  if (index < 34) return SubLevel.INTERMEDIATE;
  return SubLevel.EXPERT;
}

function createQuestions(language: 'en' | 'fr'): Question[] {
  return SCENARIOS.map(([english, french], index) => {
    const correctIndex = index % 4;
    const isFrench = language === 'fr';
    return {
      id: 40301 + index,
      level: 5,
      persona_stage: PersonaStage.OCTOPUS,
      concept: isFrench ? 'Biais de saillance' : 'Salience Bias',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais est illustré ici ?' : 'Which bias is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'Un détail frappant prend trop de place et fait oublier le contexte plus large.'
        : 'A striking detail takes up too much attention and hides the broader context.',
      detailedExplanationBeginner: isFrench
        ? 'Ce qui saute aux yeux semble plus important que le reste.'
        : 'What stands out feels more important than everything else.',
      detailedExplanationIntermediate: isFrench
        ? 'Le biais de saillance fait qu un element visible, emotionnel ou inhabituel domine le jugement, meme s il ne represente pas la situation globale.'
        : 'Salience bias makes a visible, emotional, or unusual detail dominate judgment even when it does not represent the whole situation.',
      detailedExplanationExpert: isFrench
        ? "Ce biais provient de l attention selective et de la memoire: les elements saillants sont plus faciles à remarquer, raconter et rappeler. Le probleme est qu ils paraissent alors plus typiques ou plus importants qu ils ne le sont vraiment. Pour le corriger, il faut chercher la base globale, les frequences reelles et les details moins spectaculaires."
        : 'This bias comes from selective attention and memory: salient items are easier to notice, retell, and recall. The problem is that they then feel more typical or more important than they really are. To correct it, look for the full base rate, the actual frequencies, and the less dramatic details.',
      questionFormat: 'standard',
    };
  });
}

export const SALIENCE_BIAS_EXPANSION_EN: Question[] = createQuestions('en');
export const SALIENCE_BIAS_EXPANSION_FR: Question[] = createQuestions('fr');

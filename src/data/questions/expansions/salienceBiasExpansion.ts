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

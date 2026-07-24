import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya thinks everyone at the cafe noticed the tiny coffee stain on her sleeve, but nobody looks up from their phones.', 'Maya pense que tout le monde au cafe a remarque la petite tache de cafe sur sa manche, mais personne ne quitte son telephone des yeux.'],
  ['Ben feels sure the room is judging his haircut, even though everyone is busy picking their own seats.', 'Ben est persuade que la salle juge sa coupe de cheveux, alors que tout le monde cherche surtout sa propre place.'],
  ['Priya assumes her small mistake in the meeting is unforgettable, but the group has already moved on.', 'Priya suppose que sa petite erreur en reunion est inoubliable, mais le groupe est déjà passe a autre chose.'],
  ['Noah thinks the class is staring at his new shoes, but they are mostly waiting for the teacher to start.', 'Noah pense que la classe fixe ses nouvelles chaussures, mais les eleves attendent surtout que le professeur commence.'],
  ['Lina believes everyone noticed her voice crack during the presentation, though the audience was taking notes.', 'Lina croit que tout le monde a remarque sa voix qui a craque pendant la presentation, alors que le public prenait des notes.'],
  ['Theo is convinced the cashier saw him make a wrong turn in line, but the cashier is helping the next customer.', 'Theo est convaincu que la caissiere l a vu se tromper de file, mais elle aide le client suivant.'],
  ['Ava worries the office saw her spill water on the table, even though most people were looking at the slides.', 'Ava s inquiete que le bureau ait vu l eau qu elle a renversee sur la table, alors que la plupart des gens regardaient les diapositives.'],
  ['Omar thinks the whole park noticed him jogging slowly, but everyone is focused on their own workout.', 'Omar pense que tout le parc a remarque qu il faisait son jogging lentement, mais chacun se concentre sur son propre entrainement.'],
  ['Rina assumes her typo in the group chat is the only thing people will talk about, yet the chat has already moved on.', 'Rina suppose que sa faute de frappe dans le groupe de discussion sera la seule chose dont les gens parleront, alors que le groupe est déjà passe à autre chose.'],
  ['Jules feels certain that the whole class heard his chair squeak, though the room is noisy and distracted.', 'Jules est sur que toute la classe a entendu sa chaise grincer, alors que la salle est bruyante et distraite.'],
  ['Mina thinks the neighbors noticed her late arrival, but they are busy unloading groceries.', 'Mina pense que les voisins ont remarque son arrivee tardive, mais ils dechargent leurs courses.'],
  ['Eli believes everyone remembers the joke he told, even though the meeting has already gone back to business.', 'Eli croit que tout le monde se souvient de la blague qu il a faite, alors que la reunion est déjà revenue aux affaires.'],
  ['Hugo worries the whole bus saw him drop his ticket, but most riders are asleep or reading.', 'Hugo craint que tout le bus l ait vu faire tomber son ticket, mais la plupart des passagers dorment ou lisent.'],
  ['Lea assumes her small stumble on the stairs became the main story of the day, but nobody mentions it.', 'Lea suppose que son petit faux pas dans les escaliers est devenu la grande histoire de la journee, mais personne n en parle.'],
  ['Grant thinks the delivery driver is judging his messy porch, while the driver is checking the address.', 'Grant pense que le livreur juge son porche en bazar, alors que le livreur verifie l adresse.'],
  ['Tia feels sure the entire school saw her spill juice, but the hallway was full of people looking elsewhere.', 'Tia est sure que toute l ecole l a vue renverser son jus, mais le couloir etait plein de gens regardant ailleurs.'],
  ['Nora worries everyone noticed she mispronounced one word, though the conversation kept flowing.', 'Nora s inquiete que tout le monde ait remarque qu elle a mal prononce un mot, alors que la conversation a continue normalement.'],
  ['Sam thinks the whole office noticed his wrinkled shirt, but the meeting was about deadlines.', 'Sam pense que tout le bureau a remarque sa chemise froissee, mais la reunion parlait des dates limites.'],
  ['Jade assumes the barista remembers her awkward order forever, even though the cafe is packed every morning.', 'Jade suppose que le barista se souviendra de sa commande maladroite pour toujours, alors que le cafe est bondé chaque matin.'],
  ['Owen is convinced the crowd at the concert saw him miss one lyric, but the lights were down.', 'Owen est convaincu que la foule du concert l a vu rater un seul mot, mais les lumieres etaient baissees.'],
  ['Ari feels like everyone at the gym noticed his bad rep count, but most people are tracking their own workout.', 'Ari a l impression que tout le monde à la salle a remarque son mauvais nombre de repetitions, mais la plupart suivent leur propre entrainement.'],
  ['Pia thinks the teacher will remember her one wrong answer all week, though other students had many more answers to review.', 'Pia pense que le professeur se souviendra de sa seule mauvaise reponse toute la semaine, alors que d autres eleves avaient bien plus de reponses a revoir.'],
  ['Ben assumes the café staff saw him spill sugar, but they are busy clearing another table.', 'Ben suppose que le personnel du cafe l a vu renverser du sucre, mais il est occupe a nettoyer une autre table.'],
  ['Zoe worries that everyone at the party saw her trip, yet the music was loud and people were dancing.', 'Zoe craint que tout le monde à la fete l ait vue trébucher, alors que la musique etait forte et que les gens dansaient.'],
  ['Ravi feels sure the group noticed his shaky handwriting, though everyone is focused on their own papers.', 'Ravi est certain que le groupe a remarque son ecriture tremblante, alors que chacun se concentre sur sa propre feuille.'],
  ['Sofia thinks the school assembly is about her because she got called on once, but the assembly is about the schedule.', 'Sofia pense que l assemblee scolaire parle d elle parce qu on l a interrogee une fois, mais elle parle de l horaire.'],
  ['Lara assumes her new bag is the center of attention on the train, while everyone is staring out the window.', 'Lara suppose que son nouveau sac est au centre de l attention dans le train, alors que tout le monde regarde par la fenetre.'],
  ['Cole believes his blush made the whole room focus on him, though most people are reading the agenda.', 'Cole croit que son rougissement a fait se concentrer toute la salle sur lui, alors que la plupart lisent l ordre du jour.'],
  ['Maya thinks the whole table noticed she forgot a fork, but nobody at dinner seems to care.', 'Maya pense que toute la table a remarque qu elle avait oublie une fourchette, mais personne au diner ne semble s en soucier.'],
  ['Ezra feels like everyone in the shop saw him hesitate at the register, yet the cashier is looking at the screen.', 'Ezra a l impression que tout le monde dans la boutique l a vu hesiter à la caisse, alors que la caissiere regarde l ecran.'],
  ['Nina assumes her tiny laugh drew attention in the movie, though the theater stayed dark and quiet.', 'Nina suppose que son petit rire a attire l attention au cinema, alors que la salle est restee sombre et calme.'],
  ['Hana worries the meeting was derailed by her one question, but the group keeps discussing the main topic.', 'Hana craint que la reunion ait ete deroutee par sa seule question, mais le groupe continue de discuter du sujet principal.'],
  ['Dylan thinks the whole line saw his coffee spill, but the people behind him are just chatting.', 'Dylan pense que toute la file a vu son cafe se renverser, mais les personnes derriere lui discutent simplement.'],
  ['Penny believes her small typo in the email will define her reputation, though the email is one of dozens.', 'Penny croit que sa petite faute de frappe dans le courriel definira sa reputation, alors que ce courriel n est qu un parmi des dizaines.'],
  ['Kira assumes the whole neighborhood noticed her gardening gloves, but most neighbors are inside.', 'Kira suppose que tout le quartier a remarque ses gants de jardinage, mais la plupart des voisins sont à l interieur.'],
  ['Finn thinks the team saw him arrive five minutes late, yet the meeting had already started without him.', 'Finn pense que l equipe l a vu arriver avec cinq minutes de retard, alors que la reunion avait déjà commence sans lui.'],
  ['Juno feels sure the waiter heard her ask for extra ice, but the restaurant is loud and crowded.', 'Juno est sure que le serveur a entendu sa demande de glace supplementaire, mais le restaurant est bruyant et bondé.'],
  ['Olivia worries the class noticed her notebook cover, though everyone is copying the assignment prompt.', 'Olivia s inquiete que la classe ait remarque la couverture de son carnet, alors que tout le monde copie l enonce du devoir.'],
  ['Mila thinks her one awkward wave at the neighbor became a big moment, but the neighbor did not even look over.', 'Mila pense que son seul salut maladroit au voisin est devenu un grand moment, mais le voisin n a meme pas regarde.'],
  ['Leo assumes his sports jersey made him the star of the café, but the café is busy with everyone else.', 'Leo suppose que son maillot de sport a fait de lui la star du cafe, mais le cafe est occupe par tout le monde.'],
  ['Tara feels like everyone on the street noticed her phone call, while most people are walking with headphones on.', 'Tara a l impression que tout le monde dans la rue a remarque son appel telephonique, alors que la plupart marchent avec des ecouteurs.'],
  ['Hugo thinks the whole room noticed his shoelace coming undone, but the speaker is still talking.', 'Hugo pense que toute la salle a remarque que son lacet etait defait, mais l orateur parle toujours.'],
  ['Lea worries the audience saw her pause, though the pause was barely a second.', 'Lea s inquiete que le public ait vu sa pause, alors que la pause n a dure qu une seconde.'],
  ['Max thinks his one sneeze turned heads at the library, but the library is full of rustling pages.', 'Max pense qu un seul eternuement a fait tourner les tetes à la bibliotheque, mais la bibliotheque est pleine de pages qui bruissent.'],
  ['Yara assumes the checkout clerk saw the stain on her sleeve, but the clerk is scanning items quickly.', 'Yara suppose que la caissiere a vu la tache sur sa manche, mais elle scanne les articles rapidement.'],
  ['Dan feels like everyone at work saw his tired face, though everyone looks tired on Monday.', 'Dan a l impression que tout le monde au travail a vu son visage fatigue, alors que tout le monde a l air fatigue le lundi.'],
  ['Rosa thinks her one wrong guess in trivia was memorable to all, but the team is laughing about another question.', 'Rosa pense que sa seule mauvaise reponse au quiz a ete memorable pour tous, mais l equipe rit d une autre question.'],
  ['Alicia believes her new glasses made everyone notice her, though the classmates are focused on the projector.', 'Alicia croit que ses nouvelles lunettes ont fait que tout le monde la remarque, alors que les camarades regardent le projecteur.'],
  ['Owen assumes his one comment in the meeting is replaying in everyone’s mind, but the meeting moved on.', 'Owen suppose que son seul commentaire en reunion repasse dans la tete de tout le monde, mais la reunion est passée à autre chose.'],
  ['Maya feels like everyone saw her drop one fork at lunch, though most people are talking over each other.', 'Maya a l impression que tout le monde l a vue faire tomber une fourchette au dejeuner, alors que la plupart parlent en meme temps.'],
];

const OPTIONS_EN = ['Spotlight Effect', 'Halo Effect', 'Egocentric Bias', 'False Consensus Effect'];
const OPTIONS_FR = ['Effet de projecteur', 'Effet de halo', 'Biais égocentrique', 'Effet de faux consensus'];

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
      id: 41201 + index,
      level: 3,
      persona_stage: PersonaStage.OCTOPUS,
      concept: isFrench ? 'Effet de projecteur' : 'Spotlight Effect',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais est illustré ici ?' : 'Which bias is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'La personne surestime combien les autres remarquent ses propres erreurs, son apparence ou ses petits moments genants.'
        : 'The person overestimates how much others notice their own mistakes, appearance, or awkward moments.',
      detailedExplanationBeginner: isFrench
        ? 'On croit etre beaucoup plus remarque qu on ne l est vraiment.'
        : 'You think you are noticed far more than you really are.',
      detailedExplanationIntermediate: isFrench
        ? 'L effet de projecteur fait croire que l attention des autres est centree sur nous alors qu elle est souvent repartie ailleurs.'
        : 'The spotlight effect makes it seem like other people are focused on us when their attention is usually elsewhere.',
      detailedExplanationExpert: isFrench
        ? "Ce biais vient d une egocentration de l attention perçue: on utilise notre propre conscience vive de nos défauts ou accidents comme si elle reflétait la visibilité pour les autres. En réalité, les observateurs disposent d une attention limitée et oublient vite les petits détails qui nous semblent enormes."
        : 'This bias comes from an egocentric overestimate of perceived attention: we use our own vivid awareness of flaws or slips as if it reflected visibility to others. In reality, observers have limited attention and quickly forget details that feel huge to us.',
      questionFormat: 'standard',
    };
  });
}

export const SPOTLIGHT_EFFECT_EXPANSION_EN: Question[] = createQuestions('en');
export const SPOTLIGHT_EFFECT_EXPANSION_FR: Question[] = createQuestions('fr');

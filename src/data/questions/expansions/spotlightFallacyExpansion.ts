import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya thinks everyone at the bakery noticed the icing on her shirt, but the line is staring at pastries.', 'Maya pense que tout le monde a la boulangerie a remarque le glaçage sur sa chemise, mais la file regarde surtout les viennoiseries.'],
  ['Ben assumes the whole office heard his stomach growl, though people are focused on the spreadsheet.', 'Ben suppose que tout le bureau a entendu son ventre gargouiller, alors que les gens se concentrent sur le tableau.'],
  ['Priya believes the gym noticed her awkward water bottle drop, but most people are counting reps.', 'Priya croit que la salle de sport a remarqué sa gourde tombee de façon maladroite, mais la plupart des gens comptent leurs repetitions.'],
  ['Noah feels like the train car saw him miss his stop announcement, yet everyone is reading or sleeping.', 'Noah a l impression que le wagon du train l a vu rater l annonce de son arrêt, alors que tout le monde lit ou dort.'],
  ['Lina thinks her laugh at the movie was the only thing anyone will remember, but the theater is dark and noisy.', 'Lina pense que son rire au cinema est la seule chose dont quelqu un se souviendra, mais la salle est sombre et bruyante.'],
  ['Theo worries the cashier judged his coupon stack, even though the cashier is just scanning the next item.', 'Theo s inquiete que la caissiere ait juge sa pile de bons de reduction, alors qu elle scanne simplement l article suivant.'],
  ['Ava assumes her slightly messy desk is the topic of the whole meeting, but everyone is talking about deadlines.', 'Ava suppose que son bureau un peu en bazar est le sujet de toute la reunion, mais tout le monde parle des dates limites.'],
  ['Omar thinks the park noticed his slow jog, while everyone else is watching their own phones or watches.', 'Omar pense que le parc a remarque son jogging lent, alors que les autres regardent leurs propres telephones ou montres.'],
  ['Rina is sure her typo in the group chat became a scandal, but the chat has already moved on to dinner plans.', 'Rina est sure que sa faute de frappe dans le groupe a fait scandale, mais la discussion est déjà passee aux plans de dîner.'],
  ['Jules feels the whole class saw him drop one pencil, though several students did not even look up.', 'Jules a l impression que toute la classe l a vu laisser tomber un crayon, alors que plusieurs eleves n ont meme pas leve les yeux.'],
  ['Mina assumes the neighbors noticed her taking out the trash in slippers, but they are watering plants.', 'Mina suppose que les voisins ont remarque qu elle sortait les poubelles en pantoufles, mais ils arrosent leurs plantes.'],
  ['Eli thinks everyone at the conference remembers the one question he asked, but the room had many louder voices.', 'Eli pense que tout le monde a la conference se souvient de la seule question qu il a posee, mais la salle avait beaucoup de voix plus fortes.'],
  ['Hugo worries the bus driver saw his shoelace come undone, though the driver is watching traffic.', 'Hugo craint que le chauffeur du bus ait vu son lacet se defaire, alors que le chauffeur surveille la circulation.'],
  ['Lea believes her sneeze in the library echoed across the whole room, but the library is full of page turns.', 'Lea croit que son eternuement a la bibliotheque a resonne dans toute la salle, mais la bibliotheque est pleine de pages que l on tourne.'],
  ['Grant thinks the barista will remember his complicated order forever, even though the cafe serves hundreds of drinks.', 'Grant pense que la barista se souviendra de sa commande compliquee pour toujours, alors que le cafe sert des centaines de boissons.'],
  ['Tia feels certain the school noticed her new haircut instantly, but the hallway is packed with backpacks and chatter.', 'Tia est certaine que l ecole a remarque sa nouvelle coupe de cheveux tout de suite, mais le couloir est plein de sacs et de bavardages.'],
  ['Nora assumes her one awkward wave at the neighbor became neighborhood news, but the neighbor never looked over.', 'Nora suppose que son unique geste maladroit au voisin est devenu une nouvelle du quartier, mais le voisin n a meme pas regarde.'],
  ['Sam thinks the whole room saw him spill a little water, though most people were staring at the slides.', 'Sam pense que toute la salle l a vu renverser un peu d eau, alors que la plupart regardaient les diapositives.'],
  ['Jade believes her squeaky chair made the entire interview memorable, but the interviewer barely reacted.', 'Jade croit que sa chaise qui grince a rendu tout l entretien memorable, mais l intervieweur a à peine reagit.'],
  ['Owen assumes the crowd noticed his cracked voice during karaoke, yet the song was loud and messy for everyone.', 'Owen suppose que la foule a remarque sa voix cassée pendant le karaoke, alors que la chanson etait bruyante et brouillonne pour tout le monde.'],
  ['Ari thinks the whole coffee shop saw his red face after running upstairs, but people are busy with laptops.', 'Ari pense que tout le cafe a vu son visage rouge apres avoir monte les escaliers en courant, mais les gens sont occupes avec leurs ordinateurs.'],
  ['Pia worries her one wrong answer in trivia changed how everyone sees her, though the team is joking about another question.', 'Pia s inquiete que sa seule mauvaise reponse au quiz ait change la façon dont tout le monde la voit, alors que l equipe plaisante sur une autre question.'],
  ['Ben feels like the delivery rider judged his cluttered porch, but the rider is checking the package label.', 'Ben a l impression que le livreur a juge son porche encombre, mais le livreur verifie l etiquette du colis.'],
  ['Zoe assumes the whole party noticed her broken sandal strap, yet the music is too loud for anyone to care.', 'Zoe suppose que toute la fete a remarque la bride cassée de sa sandale, mais la musique est trop forte pour que quelqu un s en soucie.'],
  ['Ravi thinks everyone at work saw him forget his badge, but the receptionist just handed him a temporary one.', 'Ravi pense que tout le monde au travail l a vu oublier son badge, mais la receptionniste lui a simplement donne un badge provisoire.'],
  ['Sofia believes the school assembly turned into a big moment about her because she was called on once.', 'Sofia croit que l assemblee scolaire est devenue un grand moment à propos d elle parce qu on l a interrogee une fois.'],
  ['Lara assumes her bright raincoat made every commuter stare, while most commuters are watching the sidewalk.', 'Lara suppose que son imperméable brillant a fait regarder tous les voyageurs, alors que la plupart regardent le trottoir.'],
  ['Cole feels like everyone at the gym noticed his missed lift, though most people are focused on their own sets.', 'Cole a l impression que tout le monde à la salle a remarque sa repetition ratee, alors que la plupart se concentrent sur leurs propres series.'],
  ['Maya thinks her one burp at lunch became the story of the table, but nobody else even flinches.', 'Maya pense que son seul rot au dejeuner est devenu l histoire de la table, mais personne d autre ne bronche.'],
  ['Ezra worries the librarian saw him bring in a noisy umbrella, though the librarian is shelving books.', 'Ezra s inquiete que la bibliothecaire l ait vu entrer avec un parapluie bruyant, alors que la bibliothecaire range des livres.'],
  ['Nina assumes her shaky signature at the bank will be remembered, but the teller has already moved to the next client.', 'Nina suppose que sa signature tremblante à la banque sera retenue, mais la guichetiere est déjà passee au client suivant.'],
  ['Hana thinks the meeting paused because of her one comment, even though the group was already drifting off topic.', 'Hana pense que la reunion s est arretee à cause de sa seule remarque, alors que le groupe derivait déjà du sujet.'],
  ['Dylan believes the whole street noticed him miss the curb, but a child on a bike is the only one looking.', 'Dylan croit que toute la rue l a vu rater le trottoir, mais un enfant à velo est le seul à regarder.'],
  ['Penny feels sure the whole team noticed her cracked phone screen, though everyone is comparing schedules.', 'Penny est sure que toute l equipe a remarque l ecran fissure de son telephone, alors que tout le monde compare les emplois du temps.'],
  ['Kira thinks her new glasses made her the center of attention, but the group is watching the projector.', 'Kira pense que ses nouvelles lunettes ont fait d elle le centre de l attention, mais le groupe regarde le projecteur.'],
  ['Finn assumes his late arrival to the workshop became a big issue, yet the organizer barely paused.', 'Finn suppose que son arrivee tardive à l atelier est devenue un gros probleme, mais l organisateur a à peine marque une pause.'],
  ['Juno worries the waiter noticed her awkward request for extra napkins, while the restaurant is loud and crowded.', 'Juno s inquiete que le serveur ait remarque sa demande maladroite de serviettes supplementaires, alors que le restaurant est bruyant et bondé.'],
  ['Olivia thinks everyone in class saw her notebook fall open to the wrong page, but the teacher kept talking.', 'Olivia pense que tout le monde en classe a vu son carnet s ouvrir à la mauvaise page, mais le professeur a continue de parler.'],
  ['Mila assumes her one nervous laugh during the presentation is all anyone remembers, though the slides were the main event.', 'Mila suppose que son seul rire nerveux pendant la presentation est tout ce que quelqu un retient, alors que les diapositives etaient l element principal.'],
  ['Leo feels like the bus stop noticed his coffee stain, but everyone is checking the route signs.', 'Leo a l impression que l arret de bus a remarque sa tache de cafe, mais tout le monde regarde les panneaux d itineraire.'],
  ['Tara thinks the street festival saw her trip over one ribbon, yet the crowd is focused on the music.', 'Tara pense que le festival de rue l a vue trébucher sur un ruban, mais la foule se concentre sur la musique.'],
  ['Hugo believes his messy hair after the helmet came off ruined the whole ride, though his friends barely noticed.', 'Hugo croit que ses cheveux en bataille apres avoir retire le casque ont gâché toute la balade, alors que ses amis l ont à peine remarque.'],
  ['Lea worries the whole office saw her muted microphone icon during the call, but everyone else was juggling notes.', 'Lea s inquiete que tout le bureau ait vu l icone de micro coupe pendant l appel, mais tout le monde jonglait avec ses notes.'],
  ['Max assumes his one stumble in the hallway turned him into the gossip of the school, but the bell had just rung.', 'Max suppose que son seul faux pas dans le couloir l a transforme en sujet de discussion de l ecole, mais la sonnerie venait de retentir.'],
  ['Yara thinks the checkout clerk judged her reusable bag, yet the clerk is only scanning items quickly.', 'Yara pense que la caissiere a juge son sac reutilisable, alors que la caissiere scanne seulement les articles rapidement.'],
  ['Dan feels certain the whole family noticed his bad joke at dinner, though everyone was already talking over each other.', 'Dan est certain que toute la famille a remarque sa mauvaise blague au dîner, alors que tout le monde se parlait déjà dessus.'],
  ['Rosa thinks the museum crowd noticed her map being upside down, but the crowd is staring at the exhibit labels.', 'Rosa pense que la foule du musee a remarque que sa carte etait à l envers, mais la foule regarde les panneaux des œuvres.'],
  ['Alicia believes her one wrong turn in the parking garage is unforgettable, while everyone else is also trying to find their car.', 'Alicia croit que son unique erreur dans le parking est inoubliable, alors que tout le monde essaie aussi de retrouver sa voiture.'],
  ['Owen assumes his cough during the lecture made every student turn around, but the lecture hall is full of shifting seats.', 'Owen suppose que sa toux pendant le cours a fait se retourner tous les eleves, mais l amphitheatre est plein de chaises qui bougent.'],
  ['Maya feels like the entire beach saw her drop an ice cream cone, though most people are looking at the waves.', 'Maya a l impression que toute la plage l a vue faire tomber une glace, alors que la plupart des gens regardent les vagues.'],
];

const OPTIONS_EN = ['Spotlight Fallacy', 'Halo Effect', 'Egocentric Bias', 'False Consensus Effect'];
const OPTIONS_FR = ['Sophisme du projecteur', 'Effet de halo', 'Biais égocentrique', 'Effet de faux consensus'];

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
      id: 41301 + index,
      level: 3,
      persona_stage: PersonaStage.OCTOPUS,
      concept: isFrench ? 'Sophisme du projecteur' : 'Spotlight Fallacy',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais est illustré ici ?' : 'Which bias is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'La personne surestime à quel point les autres remarquent ses petits accidents, ses maladresses ou son apparence.'
        : 'The person overestimates how much others notice their small accidents, awkward moments, or appearance.',
      detailedExplanationBeginner: isFrench
        ? 'On croit que tout le monde nous regarde alors qu en general chacun pense surtout à soi.'
        : 'You think everyone is watching you when most people are mainly thinking about themselves.',
      detailedExplanationIntermediate: isFrench
        ? 'Le sophisme du projecteur fait croire qu un detail personnel saute aux yeux de tous alors que l attention des autres est souvent ailleurs.'
        : 'The spotlight fallacy makes a personal detail seem obvious to everyone when other people are usually paying attention to something else.',
      detailedExplanationExpert: isFrench
        ? "Ce biais vient d une confusion entre notre propre conscience vive d un detail gênant et la visibilité réelle de ce detail pour les autres. Comme nous ressentons fortement nos erreurs, nous leur attribuons une importance publique qu elles n ont presque jamais."
        : 'This bias comes from confusing our own vivid awareness of an embarrassing detail with its actual visibility to other people. Because we feel our mistakes intensely, we assign them a public importance they almost never have.',
      questionFormat: 'standard',
    };
  });
}

export const SPOTLIGHT_FALLACY_EXPANSION_EN: Question[] = createQuestions('en');
export const SPOTLIGHT_FALLACY_EXPANSION_FR: Question[] = createQuestions('fr');

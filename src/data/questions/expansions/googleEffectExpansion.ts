import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['After hearing the answer once, Maya stops memorizing it and says she can just look it up later.', "Apres avoir entendu la reponse une fois, Maya cesse de la memoriser et dit qu elle pourra simplement la rechercher plus tard."],
  ['Ben deletes his notes because he knows the password is only a search away.', "Ben supprime ses notes parce qu il sait que le mot de passe n est qu a une recherche de distance."],
  ['Priya forgets the address after a meeting and feels no need to store it because maps are always online.', "Priya oublie l adresse apres une reunion et ne voit pas l utilite de la memoriser puisque les cartes sont toujours en ligne."],
  ['Noah does not bother learning the capital city because he thinks his phone will always know it.', "Noah ne prend pas la peine d apprendre la capitale parce qu il pense que son telephone la saura toujours."],
  ['Lina remembers where to search for the recipe but not the recipe itself.', "Lina se souvient ou chercher la recette mais pas de la recette elle-meme."],
  ['Theo stops paying attention during the lecture because every fact feels saveable, not memorable.', "Theo cesse de faire attention pendant le cours parce que chaque fait lui semble sauvegardable, pas memorable."],
  ['Ava says she does not need to remember the train schedule because the app has it.', "Ava dit qu elle n a pas besoin de memoriser l horaire des trains parce que l application l a."],
  ['Omar forgets the photo album details because he assumes the cloud will keep everything for him.', "Omar oublie les details de l album photo parce qu il suppose que le cloud gardera tout pour lui."],
  ['Rosa never learns the definitions because she can always search them in ten seconds.', "Rosa n apprend jamais les definitions parce qu elle peut toujours les rechercher en dix secondes."],
  ['Jules stops reviewing the presentation after he realizes the slide deck is searchable by keyword.', "Jules arrete de revoir la presentation apres avoir realise que le diaporama est recherchable par mot-cle."],
  ['Eli does not store the grocery list in his head because the notes app is one tap away.', "Eli ne garde pas la liste de courses en tete parce que l application de notes est a un clic."],
  ['Mina says the trivia night answer does not matter because the search engine will supply it later.', "Mina dit que la reponse de la soiree quiz importe peu parce que le moteur de recherche la fournira plus tard."],
  ['Hugo forgets the directions after one glance at the map and never rehearses them.', "Hugo oublie l itineraire apres un seul coup d oeil a la carte et ne le recite jamais."],
  ['Lea thinks remembering facts is old-fashioned because the internet has become her second brain.', "Lea pense que retenir des faits est depasse parce que l internet est devenu son second cerveau."],
  ['Max ignores the lecture details because he assumes the browser history can replace memory.', "Max ignore les details du cours parce qu il suppose que l historique du navigateur peut remplacer la memoire."],
  ['Tia forgets the meeting agenda after reading it once, trusting she can reopen the email anytime.', "Tia oublie l ordre du jour apres l avoir lu une fois, en comptant sur le fait qu elle pourra rouvrir le courriel a tout moment."],
  ['Paul never rehearses the speech because every line is in the cloud document.', "Paul ne repete jamais le discours parce que chaque ligne se trouve dans le document en ligne."],
  ['Yara writes down the answer key but makes no effort to understand it, since it is searchable later.', "Yara ecrit la reponse mais ne fait aucun effort pour la comprendre, puisqu elle sera recherchable plus tard."],
  ['Dan forgets the names at a networking event and assumes LinkedIn will solve the problem.', "Dan oublie les noms lors d un reseautage et suppose que LinkedIn reglera le probleme."],
  ['Nina does not learn the menu item names because she can always check the app again.', "Nina n apprend pas les noms des plats parce qu elle peut toujours reverifier dans l application."],
  ['Kim relies on autocorrect for every spelling so she never practices the spellings herself.', "Kim s appuie sur la correction automatique pour chaque mot et ne s entraine jamais a les ecrire elle-meme."],
  ['Salma forgets the article title but keeps the search phrase she used to find it.', "Salma oublie le titre de l article mais garde la requete de recherche qui lui a servi a le trouver."],
  ['Grant stops taking notes in class because the slides will be uploaded later.', "Grant arrete de prendre des notes en classe parce que les diapositives seront telechargees plus tard."],
  ['Mila remembers the tab name, not the lesson, because she can reopen the webpage anytime.', "Mila se souvient du nom de l onglet, pas de la lecon, parce qu elle peut rouvrir la page web a tout moment."],
  ['Owen forgets the answer to a simple question because he is sure he can ask his assistant app.', "Owen oublie la reponse a une question simple parce qu il est certain de pouvoir demander a son assistant numerique."],
  ['Jin avoids learning the shortcut because he believes the search bar is faster than memory.', "Jin evite d apprendre le raccourci parce qu il croit que la barre de recherche est plus rapide que la memoire."],
  ['Pia does not study the playlist names because she expects to stream them later without effort.', "Pia n apprend pas les noms des listes de lecture parce qu elle s attend a les ecouter plus tard sans effort."],
  ['Ben forgets the facts from the article and only recalls that he bookmarked it.', "Ben oublie les faits de l article et ne se souvient que de l avoir mis en favori."],
  ['Zoe ignores the instructions because she assumes the FAQ page will answer everything on demand.', "Zoe ignore les instructions parce qu elle suppose que la page FAQ repondra a tout a la demande."],
  ['Ravi stops trying to learn the road names because his phone maps them instantly.', "Ravi cesse d essayer d apprendre les noms des rues parce que son telephone les affiche instantanement."],
  ['Sofia only remembers where the group photo is stored, not who was in it.', "Sofia ne se souvient que de l endroit ou la photo de groupe est stockee, pas des personnes qui y figuraient."],
  ['Lara says school facts are unnecessary because any answer can be searched in class.', "Lara dit que les faits scolaires sont inutiles parce que n importe quelle reponse peut etre recherchee en classe."],
  ['Cole stops studying vocabulary because translation apps feel like a permanent backup.', "Cole cesse d etudier le vocabulaire parce que les applications de traduction lui semblent etre une sauvegarde permanente."],
  ['Maya forgets the event details after reading the flyer once and just searches the venue later.', "Maya oublie les details de l evenement apres avoir lu le prospectus une fois et cherche simplement le lieu plus tard."],
  ['Ezra does not memorize the cooking steps because the tutorial video will always be available.', "Ezra ne memorise pas les etapes de cuisine parce que la video tutorielle sera toujours disponible."],
  ['Nora only recalls the website address, not the article, because the search result is cached in her head.', "Nora ne se souvient que de l adresse du site, pas de l article, parce que le resultat de recherche reste en cache dans sa tete."],
  ['Ari says the class discussion did not matter because the forum post can be reopened later.', "Ari dit que la discussion de classe ne comptait pas parce que le message du forum peut etre rouvert plus tard."],
  ['Mina forgets the new fact after one glance because she assumes she can Google it again.', "Mina oublie le nouveau fait apres un regard parce qu elle suppose qu elle pourra le rechercher a nouveau."],
  ['Leo does not bother learning the song lyrics because the streaming app displays them.', "Leo ne prend pas la peine d apprendre les paroles parce que l application de streaming les affiche."],
  ['Tara stops trying to remember the account numbers because the password manager keeps them.', "Tara cesse d essayer de retenir les numeros de compte parce que le gestionnaire de mots de passe les conserve."],
  ['Hana trusts her notes less than the search engine and therefore never builds recall for the topic.', "Hana fait moins confiance a ses notes qu au moteur de recherche et ne construit donc jamais de rappel pour le sujet."],
  ['Dylan says he only needs to know how to find the answer, not the answer itself.', "Dylan dit qu il a seulement besoin de savoir comment trouver la reponse, pas la reponse elle-meme."],
  ['Penny forgets the history lesson quickly because the textbook PDF is always one search away.', "Penny oublie vite le cours d histoire parce que le PDF du manuel est toujours a une recherche de distance."],
  ['Grant does not commit the phone number to memory because the contact card is saved online.', "Grant ne memorise pas le numero de telephone parce que la fiche contact est enregistree en ligne."],
  ['Bea stops practicing the formula once she knows the calculator app has it.', "Bea cesse de pratiquer la formule une fois qu elle sait que l application calculatrice l a."],
  ['Kira ignores the lecture quote because the transcript can be searched later.', "Kira ignore la citation du cours parce que la transcription pourra etre recherchee plus tard."],
  ['Finn forgets the neighborhood notice after snapping a photo of it for later.', "Finn oublie l avis du quartier apres en avoir pris une photo pour plus tard."],
  ['Juno says it is pointless to memorize museum facts because the audio guide will explain them.', "Juno dit qu il est inutile de memoriser les faits du musee parce que l audioguide les expliquera."],
  ['Olivia only remembers how to retrieve the guide, not what was in it.', "Olivia ne se souvient que de la facon de recuperer le guide, pas de son contenu."],
];

const OPTIONS_EN = ['Google Effect', 'Availability Heuristic', 'Transactive Memory', 'Confirmation Bias'];
const OPTIONS_FR = ['Effet Google', 'Heuristique de disponibilité', 'Mémoire transactive', 'Biais de confirmation'];

function rotatedOptions(options: string[], correctIndex: number): string[] {
  const distractors = options.slice(1);
  const result = [...distractors];
  result.splice(correctIndex, 0, options[0]);
  return result;
}

function subLevelFor(index: number): SubLevel {
  if (index < 43) return SubLevel.BEGINNER;
  if (index < 50) return SubLevel.INTERMEDIATE;
  return SubLevel.EXPERT;
}

export const GOOGLE_EFFECT_EXPANSION_EN: Question[] = SCENARIOS.map(([english], index) => {
  const correctIndex = index % 4;
  return {
    id: 37401 + index,
    level: 4,
    persona_stage: PersonaStage.CRAB,
    concept: 'Google Effect',
    difficulty: index < 43 ? 1 : index < 50 ? 2 : 3,
    subLevel: subLevelFor(index),
    question: `Which bias is illustrated here?\n\n"${english}"`,
    options: rotatedOptions(OPTIONS_EN, correctIndex),
    correct_option_index: correctIndex,
    explanation: 'The person relies on digital access so much that they stop storing or rehearsing information in memory.',
    detailedExplanationBeginner: 'If it is searchable, it feels less worth remembering.',
    detailedExplanationIntermediate: 'The brain offloads information it expects to retrieve online, so the person remembers the path to the answer more than the answer itself.',
    detailedExplanationExpert: 'This is the Google effect, sometimes discussed as digital amnesia or the cognitive offloading effect. People reduce effort spent encoding information when they expect external tools to retrieve it later.',
    questionFormat: 'standard',
  };
});

export const GOOGLE_EFFECT_EXPANSION_FR: Question[] = SCENARIOS.map(([, french], index) => {
  const correctIndex = index % 4;
  return {
    id: 37401 + index,
    level: 4,
    persona_stage: PersonaStage.CRAB,
    concept: 'Effet Google',
    difficulty: index < 43 ? 1 : index < 50 ? 2 : 3,
    subLevel: subLevelFor(index),
    question: `Quel biais est illustré ici ?\n\n"${french}"`,
    options: rotatedOptions(OPTIONS_FR, correctIndex),
    correct_option_index: correctIndex,
    explanation: "La personne s appuie tellement sur l acces numerique qu elle cesse de stocker ou de repeter l information en memoire.",
    detailedExplanationBeginner: "Si c est recherchable, cela semble moins utile a retenir.",
    detailedExplanationIntermediate: "Le cerveau transfere l information vers un outil externe lorsqu il s attend a pouvoir la retrouver en ligne, donc la personne retient davantage le chemin vers la reponse que la reponse elle-meme.",
    detailedExplanationExpert: "C est l effet Google, parfois appele amnesie numerique ou effet de decharge cognitive. Les gens reduisent l effort d encodage quand ils s attendent a recuperer l information plus tard avec un outil externe.",
    questionFormat: 'standard',
  };
});

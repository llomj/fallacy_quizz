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
  ['After saving a recipe link, Maya stops learning the ingredients and just trusts the bookmark.', "Apres avoir enregistre un lien de recette, Maya arrete d apprendre les ingredients et fait juste confiance au favori."],
  ['Ben only memorizes the search term for the club schedule and not the schedule itself.', "Ben ne memorise que le terme de recherche du programme du club et pas le programme lui-meme."],
  ['Priya forgets the phone charger instructions because she knows the manual is online.', "Priya oublie les instructions du chargeur parce qu elle sait que le manuel est en ligne."],
  ['Noah stops practicing the formula after realizing his notes are synced to the cloud.', "Noah cesse de pratiquer la formule apres avoir realise que ses notes sont synchronisees dans le cloud."],
  ['Lina remembers where the answer is stored, not the answer, because the app can fetch it later.', "Lina se souvient de l endroit ou la reponse est stockee, pas de la reponse, parce que l application peut la recuperer plus tard."],
  ['Theo does not try to recall the street names because navigation will always show them.', "Theo n essaie pas de se rappeler les noms des rues parce que la navigation les affichera toujours."],
  ['Ava deletes her study card after scanning it once, trusting the image will be enough.', "Ava supprime sa fiche d etude apres l avoir scannee une fois, en faisant confiance a l image."],
  ['Omar stops learning the recipe steps because the video is only a tap away.', "Omar cesse d apprendre les etapes de la recette parce que la video est a un simple toucher."],
  ['Rosa only memorizes the file name, not the facts, because search will retrieve the document.', "Rosa ne memorise que le nom du fichier, pas les faits, parce que la recherche retrouvera le document."],
  ['Jules says remembering the quote is unnecessary because he can open the page anytime.', "Jules dit qu il est inutile de memoriser la citation parce qu il peut ouvrir la page a tout moment."],
  ['Maya forgets the grocery coupon details because she knows the app can show them again.', "Maya oublie les details du bon de reduction parce qu elle sait que l application peut les afficher a nouveau."],
  ['Ben stops rehearsing the speech after saving it to the cloud and assumes that is enough.', "Ben cesse de repeter le discours apres l avoir enregistre dans le cloud et suppose que cela suffit."],
  ['Priya ignores the workshop notes because the recording will be searchable later.', "Priya ignore les notes de l atelier parce que l enregistrement sera recherchable plus tard."],
  ['Noah only remembers the name of the article file, not the article itself, because the title is in his browser history.', "Noah ne se souvient que du nom du fichier de l article, pas de l article lui-meme, parce que le titre est dans l historique du navigateur."],
  ['Lina does not learn the restaurant dish names because she can always check the menu app.', "Lina n apprend pas les noms des plats du restaurant parce qu elle peut toujours verifier dans l application de menu."],
  ['Theo assumes he can skip memorizing the password hint because the account recovery page exists.', "Theo suppose qu il peut eviter de memoriser l indice du mot de passe parce que la page de recuperation de compte existe."],
  ['Ava keeps no paper copy of the itinerary because the travel site will store it for her.', "Ava ne garde aucune copie papier de l itineraire parce que le site de voyage le stockera pour elle."],
  ['Omar forgets the names from a conference because the attendee app will list everyone again.', "Omar oublie les noms d une conference parce que l application des participants les affichera a nouveau."],
  ['Rosa stops reviewing the lesson because the slides are only one search away in the class portal.', "Rosa cesse de revoir la lecon parce que les diapositives sont a une recherche de distance dans le portail de classe."],
  ['Jules remembers where the answer was found, not the answer itself, after using a search engine once.', "Jules se souvient ou la reponse a ete trouvee, pas de la reponse elle-meme, apres avoir utilise un moteur de recherche une fois."],
  ['Eli does not bother practicing the formula because the calculator app can handle it.', "Eli ne prend pas la peine de pratiquer la formule parce que l application calculatrice peut s en charger."],
  ['Mina says the date of the meeting does not matter because the calendar app will remind her.', "Mina dit que la date de la reunion importe peu parce que l application calendrier lui rappellera."],
  ['Hugo forgets the cookbook step because the video tutorial is easier to reopen than to remember.', "Hugo oublie l etape du livre de cuisine parce que la video tutorielle est plus facile a rouvrir qu a retenir."],
  ['Lea stops studying the vocabulary list because the translation app feels like a permanent crutch.', "Lea cesse d etudier la liste de vocabulaire parce que l application de traduction lui semble etre une bequille permanente."],
  ['Max does not memorize the gate number because the airport app will show it again.', "Max ne memorise pas le numero de porte parce que l application de l aeroport l affichera a nouveau."],
  ['Tia forgets the presentation quote because the transcript search can find it for her.', "Tia oublie la citation de la presentation parce que la recherche dans la transcription peut la retrouver pour elle."],
  ['Paul never practices the poem because the text file can be opened whenever he wants.', "Paul ne pratique jamais le poeme parce que le fichier texte peut etre ouvert quand il veut."],
  ['Yara only remembers the URL, not the article, because the browser bookmark is enough for her.', "Yara ne se souvient que de l URL, pas de l article, parce que le favori du navigateur lui suffit."],
  ['Dan says the office extension number does not need to be memorized because the contact list stores it.', "Dan dit que le numero de poste du bureau n a pas besoin d etre retenu parce que la liste de contacts le conserve."],
  ['Nina forgets the conference topic after one glance because the event page can always refresh it.', "Nina oublie le sujet de la conference apres un coup d oeil parce que la page de l evenement peut toujours le rafraichir."],
  ['Kim stops learning the train platform because the transport app will update it live.', "Kim cesse d apprendre le quai du train parce que l application de transport le mettra a jour en direct."],
  ['Salma says the lecture points do not need memorizing because the recording is searchable.', "Salma dit que les points du cours n ont pas besoin d etre retenus parce que l enregistrement est recherchable."],
  ['Grant forgets the return policy because the store website has a search bar.', "Grant oublie la politique de retour parce que le site du magasin a une barre de recherche."],
  ['Mila does not rehearse the list of names because the messaging app will show them.', "Mila ne repete pas la liste des noms parce que l application de messagerie les affichera."],
  ['Owen assumes the workshop steps are not worth remembering because the PDF can be reopened.', "Owen suppose que les etapes de l atelier ne valent pas la peine d etre memorisees parce que le PDF peut etre rouvert."],
  ['Jin leaves the recipe half-learned because the cooking site keeps it bookmarked.', "Jin laisse la recette a moitie apprise parce que le site de cuisine la garde en favori."],
  ['Pia says the answer to the quiz is disposable knowledge because she can always search for it.', "Pia dit que la reponse au quiz est un savoir jetable parce qu elle peut toujours la rechercher."],
  ['Ben forgets the office extension and says it is fine because the directory can find it.', "Ben oublie le poste du bureau et dit que ce n est pas grave parce que l annuaire peut le trouver."],
  ['Zoe no longer practices the directions because the GPS voice will guide her next time.', "Zoe ne pratique plus les directions parce que la voix du GPS la guidera la prochaine fois."],
  ['Ravi skips memorizing the workshop address because the event email will be there later.', "Ravi saute la memorisation de l adresse de l atelier parce que le courriel de l evenement sera toujours la plus tard."],
  ['Sofia only remembers how to search the recipe forum, not the recipe, after one visit.', "Sofia ne se souvient que de la facon de chercher sur le forum de recettes, pas de la recette, apres une visite."],
  ['Lara does not learn the exam formula because the formula sheet is always provided.', "Lara n apprend pas la formule de l examen parce que la feuille de formules est toujours fournie."],
  ['Cole thinks the note content is optional because the screenshot can be searched by filename.', "Cole pense que le contenu de la note est facultatif parce que la capture d ecran peut etre recherchee par nom de fichier."],
  ['Maya forgets the meeting point after saving the map pin and never rehearses it.', "Maya oublie le point de rendez-vous apres avoir enregistre l epingle de la carte et ne le repete jamais."],
  ['Ezra does not memorize the tutorial steps because the app history keeps them available.', "Ezra ne memorise pas les etapes du tutoriel parce que l historique de l application les garde disponibles."],
  ['Nora says the fact sheet can stay unread because the search box will find it again.', "Nora dit que la fiche d information peut rester non lue parce que la barre de recherche la retrouvera."],
  ['Ari only stores the search terms from the article and not the article itself.', "Ari ne stocke que les termes de recherche de l article et pas l article lui-meme."],
  ['Mina forgets the checklist items because the project portal will re-display them later.', "Mina oublie les elements de la liste de controle parce que le portail du projet les reaffichera plus tard."],
  ['Leo says the instructions are not worth learning because the app can always fetch them again.', "Leo dit que les instructions ne valent pas la peine d etre apprises parce que l application peut toujours les recuperer."],
  ['Tara assumes the answer key can replace understanding, so she never studies the topic.', "Tara suppose que le corrigé peut remplacer la comprehension, donc elle n etudie jamais le sujet."],
  ['Nora stops memorizing the playlist order because the streaming app will sort it for her later.', "Nora cesse de memoriser l ordre de la liste de lecture parce que l application de streaming la classera pour elle plus tard."],
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

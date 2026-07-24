import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['The bank said the river bank was safe, so Maya trusted the financial bank too.', "La banque a dit que la berge de la rivière était sûre, alors Maya a fait confiance à la banque financière aussi."],
  ['The coach said the team needs more draft picks, so the office should open the windows for a draft.', "L'entraîneur a dit que l'équipe a besoin de plus de choix à la draft, alors le bureau devrait ouvrir les fenêtres pour faire un courant d'air."],
  ['The singer said the light was bright, so the lightweight suitcase must shine in the dark.', "La chanteuse a dit que la lumière était vive, alors la valise légère doit briller dans le noir."],
  ['The teacher said the note was clear, so the musical note on the piano must be easy to understand.', "Le professeur a dit que la note était claire, alors la note musicale sur le piano doit être facile à comprendre."],
  ['The sign said "right lane", so Noah assumed every right answer was on the right side.', "Le panneau disait « voie de droite », alors Noah a supposé que toute bonne réponse était du côté droit."],
  ['The article praised the fair tax, so Zoe thought the county fair was about taxes.', "L'article faisait l'éloge d'un impôt juste, alors Zoe a cru que la foire du comté parlait d'impôts."],
  ['The doctor said the patient had a cold, so the color must be cold too.', "Le médecin a dit que le patient avait un rhume, alors la couleur doit aussi être froide."],
  ['The librarian said the volume was high, so the book volume must be loud.', "La bibliothécaire a dit que le volume était élevé, alors le volume du livre doit être bruyant."],
  ['The pilot said the plane was on the air, so the air itself must be on the plane.', "Le pilote a dit que l'avion était en l'air, alors l'air lui-même doit être sur l'avion."],
  ['The manager said the current policy was bad, so the river current must be breaking rules.', "Le responsable a dit que la politique actuelle était mauvaise, alors le courant de la rivière doit enfreindre des règles."],
  ['The sign said "please park here", so Ben thought a park must be nearby.', "L'enseigne disait « garez-vous ici », alors Ben a cru qu'un parc devait être tout près."],
  ['The chef said the dish was light, so the light in the kitchen should be lighter.', "Le chef a dit que le plat était léger, alors la lumière de la cuisine devrait être plus légère."],
  ['The judge said the case was open, so the open door in the hallway must be the case.', "Le juge a dit que l'affaire était ouverte, alors la porte ouverte du couloir doit être l'affaire."],
  ['The student said the paper was due, so the paper on the desk was overdue too.', "L'étudiant a dit que le devoir était à rendre, alors le papier sur le bureau est aussi en retard."],
  ['The coach said the bat was important, so the bat flying at dusk must decide the game.', "L'entraîneur a dit que la batte était importante, alors la chauve-souris qui vole au crépuscule doit décider du match."],
  ['The email said the charge was extra, so the phone charge must be an extra fee.', "L'e-mail disait que la charge était en plus, alors la charge du téléphone doit être un frais supplémentaire."],
  ['The teacher said the class was heavy, so the heavy suitcase was probably the class leader.', "L'enseignant a dit que la classe était lourde, alors la valise lourde est probablement le chef de classe."],
  ['The sign said "watch your step", so Priya thought she should look at her watch and her foot at the same time.', "Le panneau disait « faites attention à votre pas », alors Priya a cru qu'elle devait regarder sa montre et son pied en même temps."],
  ['The article said the seal was broken, so Omar wondered why the animal seal escaped.', "L'article disait que le sceau était brisé, alors Omar s'est demandé pourquoi le phoque avait fui."],
  ['The coach said the match was canceled, so the matchstick in the drawer must be canceled too.', "L'entraîneur a dit que le match était annulé, alors l'allumette dans le tiroir doit être annulée aussi."],
  ['The sign said the code was right, so Mia thought the right turn was coded.', "Le panneau disait que le code était correct, alors Mia a cru que le virage à droite était codé."],
  ['The radio host said the channel was clear, so the river channel should be transparent.', "L'animateur radio a dit que la chaîne était claire, alors le chenal de la rivière devrait être transparent."],
  ['The editor said the story was sound, so the sound in the room must be a story.', "Le rédacteur a dit que l'histoire était solide, alors le son dans la pièce doit être une histoire."],
  ['The baker said the roll was soft, so the roll of paper should be edible.', "Le boulanger a dit que le petit pain était moelleux, alors le rouleau de papier devrait être comestible."],
  ['The driver said the tire was flat, so the flat apartment must need air.', "Le conducteur a dit que le pneu était à plat, alors l'appartement plat doit avoir besoin d'air."],
  ['The guide said the route was blocked, so the block of cheese must stop traffic.', "Le guide a dit que la route était bloquée, alors le bloc de fromage doit arrêter la circulation."],
  ['The reviewer said the movie was right on time, so the right-hand seat must be punctual.', "Le critique a dit que le film arrivait à l'heure, alors le siège de droite doit être ponctuel."],
  ['The clerk said the order was fine, so the fine for parking should be the same thing.', "L'employé a dit que la commande allait bien, alors l'amende de stationnement devrait être la même chose."],
  ['The singer said the pitch was perfect, so the baseball pitch should sound on key.', "La chanteuse a dit que la hauteur de note était parfaite, alors le lancer de baseball devrait être juste."],
  ['The teacher said the address was wrong, so the house address should apologize.', "Le professeur a dit que l'adresse était fausse, alors l'adresse de la maison devrait s'excuser."],
  ['The mechanic said the brake was bad, so the moral brake in the argument is faulty too.', "Le mécanicien a dit que le frein était mauvais, alors le frein moral dans l'argument est aussi défectueux."],
  ['The article said the file was corrupted, so the folder file must be morally corrupt.', "L'article disait que le fichier était corrompu, alors la fiche du dossier doit être moralement corrompue."],
  ['The friend said the bar was high, so the chocolate bar must be elevated.', "L'ami a dit que la barre était haute, alors la barre de chocolat doit être élevée."],
  ['The announcer said the race was close, so the race to the store must be socially close.', "Le commentateur a dit que la course était serrée, alors la course au magasin doit être socialement proche."],
  ['The teacher said the subject was hard, so the hard table in the room is the subject.', "L'enseignant a dit que la matière était difficile, alors la table dure dans la pièce est la matière."],
  ['The article said the ring was stolen, so the telephone ring must have been robbed.', "L'article disait que l'anneau avait été volé, alors la sonnerie du téléphone a dû être cambriolée."],
  ['The nurse said the patient was stable, so the stable in the field should be safe.', "L'infirmière a dit que le patient était stable, alors l'écurie dans le champ devrait être sûre."],
  ['The magazine said the point was sharp, so the pencil point must be rude.', "Le magazine disait que le point était précis, alors la pointe du crayon doit être impolie."],
  ['The guide said the club was exclusive, so the golf club is clearly the same club.', "Le guide a dit que le club était exclusif, alors le club de golf est clairement le même club."],
  ['The sign said the park entrance was open, so the open-minded idea must be at the entrance.', "Le panneau disait que l'entrée du parc était ouverte, alors l'idée d'esprit ouvert doit être à l'entrée."],
  ['The coach said the draft was weak, so the draft of the report should need a trainer.', "L'entraîneur a dit que le brouillon était faible, alors le brouillon du rapport devrait avoir besoin d'un coach."],
  ['The article said the battery was dead, so the dead battery must be a deceased animal.', "L'article disait que la batterie était morte, alors la batterie morte doit être un animal décédé."],
  ['The teacher said the subject was broad, so the broad road must be the subject.', "Le professeur a dit que le sujet était vaste, alors la large route doit être le sujet."],
  ['The sign said the line was long, so the long line in the song is also a queue.', "Le panneau disait que la file était longue, alors la longue ligne dans la chanson est aussi une file d'attente."],
  ['The editor said the title was short, so the short person must be the title.', "Le rédacteur a dit que le titre était court, alors la personne petite doit être le titre."],
  ['The customer said the coupon was invalid, so the invalid singer is just a bad coupon.', "Le client a dit que le coupon était invalide, alors le chanteur invalide n'est qu'un mauvais coupon."],
  ['The guide said the passage was narrow, so the narrow argument is physically small.', "Le guide a dit que le passage était étroit, alors l'argument étroit est physiquement petit."],
  ['The nurse said the chart was clean, so the clean jacket must be a medical chart.', "L'infirmière a dit que le dossier était propre, alors la veste propre doit être un dossier médical."],
  ['The announcer said the club was packed, so the packed suitcase should be a nightclub.', "Le présentateur a dit que le club était plein, alors la valise remplie devrait être une boîte de nuit."],
  ['The teacher said the table was even, so the even number should be a piece of furniture.', "L'enseignant a dit que la table était plane, alors le nombre pair devrait être un meuble."],
  ['The friend said the note was flat, so the flat tire must be a musical note.', "L'ami a dit que la note était fausse, alors le pneu à plat doit être une note de musique."],
  ['The article said the key was missing, so the missing key on the keyboard must unlock the house.', "L'article disait que la clé manquait, alors la touche manquante du clavier doit ouvrir la maison."],
  ['The conductor said the chorus was bright, so the bright future of the choir must be glowing.', "Le chef d'orchestre a dit que le chœur était brillant, alors l'avenir brillant du chœur doit luire."],
  ['The sign said the corner was hard, so the hard corner in the street must be stubborn.', "Le panneau disait que le coin était dur, alors le coin dur dans la rue doit être têtu."],
  ['The teacher says "decimate" once meant to kill one in ten, so using it to mean "destroy heavily" is wrong forever.', "Le professeur dit que « décimer » voulait autrefois dire tuer un sur dix, donc l'utiliser pour dire « détruire fortement » est faux à jamais."],
  ['A friend says "awesome" used to mean awe, so it should never mean really great at all.', "Un ami dit que « awesome » signifiait autrefois la crainte, donc cela ne devrait jamais vouloir dire vraiment génial."],
  ['Mia says "birthday" once meant the day of birth, so no one can celebrate a birthday party.', "Mia dit que « birthday » voulait autrefois dire le jour de la naissance, donc personne ne peut faire de fête d'anniversaire."],
  ['Omar claims a "salary" came from salt money, so salaries today should be paid in salt.', "Omar affirme que « salaire » vient de l'argent du sel, donc les salaires d'aujourd'hui devraient être payés en sel."],
  ['Priya says "candidate" meant white-clothed person, so only people in white can run for office.', "Priya dit que « candidat » voulait dire personne en blanc, donc seules les personnes en blanc peuvent se présenter."],
  ['Ben says "broadcast" once meant scattering seed, so podcasts are not real broadcasts.', "Ben dit que « broadcast » voulait autrefois dire semer des graines, donc les podcasts ne sont pas de vraies diffusions."],
  ['Ava says "holiday" used to mean holy day, so a beach holiday is a misuse of the word.', "Ava dit que « holiday » voulait autrefois dire jour saint, donc des vacances à la plage sont un mauvais usage du mot."],
  ['Leo says "manufacture" once meant made by hand, so factory production cannot count.', "Leo dit que « manufacture » voulait autrefois dire fait à la main, donc la production en usine ne peut pas compter."],
  ['Nina says "mentor" was a character name, so anyone giving advice should be named Mentor.', "Nina dit que « mentor » était un nom de personnage, donc toute personne donnant des conseils devrait s'appeler Mentor."],
  ['Theo says "nice" once meant foolish, so calling a cake nice is historically incorrect.', "Theo dit que « nice » voulait autrefois dire stupide, donc dire qu'un gâteau est sympa est historiquement faux."]
];

const OPTIONS_EN = ['Equivocation', 'False Dilemma', 'Appeal to Popularity', 'Cherry Picking'];
const OPTIONS_FR = ['Équivoque', 'Fausse dichotomie', 'Appel à la popularité', 'Sélection biaisée'];

function rotate(a: string[], i: number) {
  const r = a.slice(1);
  r.splice(i, 0, a[0]);
  return r;
}

function sub(i: number) {
  return i < 17 ? SubLevel.BEGINNER : i < 34 ? SubLevel.INTERMEDIATE : SubLevel.EXPERT;
}

function make(fr = false): Question[] {
  return SCENARIOS.map((s, i) => {
    const c = i % 4;
    return {
      id: 33501 + i,
      level: 4,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Équivoque' : 'Equivocation',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? OPTIONS_FR : OPTIONS_EN, c),
      correct_option_index: c,
      explanation: fr
        ? "Le mot change de sens au cours du raisonnement, donc la conclusion semble correcte alors qu'elle ne l'est pas."
        : 'A key word changes meaning during the argument, so the conclusion looks valid when it is not.',
      detailedExplanationBeginner: fr
        ? "On glisse d'un sens à un autre sans prévenir."
        : 'The argument quietly shifts from one meaning to another.',
      detailedExplanationIntermediate: fr
        ? "L'équivoque utilise un meme mot dans plusieurs sens: la conclusion paraît logique seulement si on confond ces sens."
        : 'Equivocation uses the same word in different senses; the conclusion only looks logical if those senses are blurred together.',
      detailedExplanationExpert: fr
        ? "Ce sophisme exploite la flexibilité du langage ordinaire. Une définition nette doit rester stable du début à la fin de l'argument."
        : 'This fallacy exploits the flexibility of ordinary language. A clear definition has to stay stable from start to finish.',
      questionFormat: 'standard',
    };
  });
}

export const EQUIVOCATION_EXPANSION_EN: Question[] = make();
export const EQUIVOCATION_EXPANSION_FR: Question[] = make(true);

import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['The teacher says "decimate" once meant to kill one in ten, so using it to mean "destroy heavily" is wrong forever.', "Le professeur dit que « décimer » voulait autrefois dire tuer un sur dix, donc l'utiliser pour dire « détruire fortement » est faux à jamais."],
  ['A friend says "awesome" used to mean awe, so it should never mean really great at all.', "Un ami dit que « awesome » signifiait autrefois la crainte, donc cela ne devrait jamais vouloir dire vraiment génial."],
  ['Mia says "birthday" once meant the day of birth, so no one can celebrate a birthday party.', "Mia dit que « birthday » voulait autrefois dire le jour de la naissance, donc personne ne peut faire de fête d'anniversaire."],
  ['Omar claims a "salary" came from salt money, so salaries today should be paid in salt.', "Omar affirme que « salaire » vient de l'argent du sel, donc les salaires d'aujourd'hui devraient être payés en sel."],
  ['Priya says "candidate" meant white-clothed person, so only people in white can run for office.', "Priya dit que « candidat » voulait dire personne en blanc, donc seules les personnes en blanc peuvent se présenter."],
  ['Ben says "broadcast" once meant scattering seed, so podcasts are not real broadcasts.', "Ben dit que « broadcast » voulait autrefois dire semer des graines, donc les podcasts ne sont pas de vraies diffusions."],
  ['Ava says "holiday" used to mean holy day, so a beach holiday is a misuse of the word.', "Ava dit que « holiday » voulait autrefois dire jour saint, donc des vacances à la plage sont un mauvais usage du mot."],
  ['Leo says "manufacture" once meant made by hand, so factory production cannot count.', "Leo dit que « manufacture » voulait autrefois dire fait à la main, donc la production en usine ne peut pas compter."],
  ['Nina says "mentor" was a character name, so anyone giving advice should be named Mentor.', "Nina dit que « mentor » était un nom de personnage, donc toute personne donnant des conseils devrait s'appeler Mentor."],
  ['Theo says "nice" once meant foolish, so calling a cake nice is historically incorrect.', "Theo dit que « nice » voulait autrefois dire stupide, donc dire qu'un gâteau est sympa est historiquement faux."],
  ['Mina says "salary" is linked to salt, so the office should hand out salt packets on payday.', "Mina dit que « salaire » est lié au sel, donc le bureau devrait distribuer des sachets de sel le jour de paie."],
  ['Kai says "robust" once meant oak-like, so a robust phone should be made of wood.', "Kai dit que « robuste » voulait autrefois dire semblable au chêne, donc un téléphone robuste devrait être en bois."],
  ['Aria says "broadcast" was about seed scattering, so a radio show cannot be broadcast.', "Aria dit que « broadcast » parlait de semis, donc une émission de radio ne peut pas être diffusée."],
  ['Noah says "grammar" once meant learning, so a grammar book must be a history book.', "Noah dit que « grammaire » voulait autrefois dire apprentissage, donc un livre de grammaire doit être un livre d'histoire."],
  ['Zoe says "school" came from leisure, so school should be a vacation spot.', "Zoe dit que « school » venait des loisirs, donc l'école devrait être un lieu de vacances."],
  ['Milo says "clinic" once meant bed, so a clinic should only have beds.', "Milo dit que « clinique » voulait autrefois dire lit, donc une clinique ne devrait avoir que des lits."],
  ['Lina says "idiot" once meant private person, so a private person is an idiot by definition.', "Lina dit que « idiot » voulait autrefois dire personne privée, donc une personne privée est un idiot par définition."],
  ['Eli says "muscle" once meant little mouse, so gym training should involve mice.', "Eli dit que « muscle » voulait autrefois dire petite souris, donc l'entraînement en salle devrait impliquer des souris."],
  ['Tara says "quiz" came from a trick word story, so all quizzes are tricks and not learning tools.', "Tara dit que « quiz » venait d'une histoire de mot piégé, donc tous les quiz sont des pièges et non des outils d'apprentissage."],
  ['Owen says "deadline" literally meant the line where you die, so work deadlines are deadly by nature.', "Owen dit que « deadline » voulait littéralement dire la ligne où l'on meurt, donc les délais de travail sont mortels par nature."],
  ['Rina says "internet" once meant something like an inner net, so it should be a fishing net.', "Rina dit que « internet » voulait autrefois dire comme un filet intérieur, donc cela devrait être un filet de pêche."],
  ['Ben says "editor" comes from feeding, so editors should only work in kitchens.', "Ben dit que « editor » vient de nourrir, donc les éditeurs devraient seulement travailler dans les cuisines."],
  ['Mia says "robot" once meant forced labor, so every robot must be a slave.', "Mia dit que « robot » voulait autrefois dire travail forcé, donc chaque robot doit être un esclave."],
  ['Theo says "pandemonium" once meant all demons, so any noisy room is literally demon-filled.', "Theo dit que « pandémonium » voulait autrefois dire tous les démons, donc toute pièce bruyante est littéralement remplie de démons."],
  ['Ava says "comedy" once meant a song of villages, so comedy shows should be about farming.', "Ava dit que « comédie » voulait autrefois dire un chant de villages, donc les spectacles comiques devraient parler d'agriculture."],
  ['Leo says "tragedy" used to mean goat song, so every tragedy must involve goats.', "Leo dit que « tragédie » voulait autrefois dire chant de chèvre, donc toute tragédie doit impliquer des chèvres."],
  ['Nina says "virus" once meant poison, so every app virus should be a chemical poison.', "Nina dit que « virus » voulait autrefois dire poison, donc tout virus informatique devrait être un poison chimique."],
  ['Priya says "hospital" came from hosting guests, so a hospital is just a hotel.', "Priya dit que « hôpital » venait de recevoir des invités, donc un hôpital n'est qu'un hôtel."],
  ['Finn says "education" once meant bringing out, so students should already know everything.', "Finn dit que « éducation » voulait autrefois dire faire sortir, donc les élèves devraient déjà tout savoir."],
  ['Mina says "library" once meant a book place, so a library should only store books and never lend them.', "Mina dit que « bibliothèque » voulait autrefois dire lieu de livres, donc une bibliothèque devrait seulement stocker des livres et ne jamais les prêter."],
  ['Kai says "luxury" was once linked to excess, so any luxury snack is morally wrong.', "Kai dit que « luxe » était autrefois lié à l'excès, donc toute collation de luxe est moralement mauvaise."],
  ['Aria says "restaurant" once meant restoring, so eating there must restore your health.', "Aria dit que « restaurant » voulait autrefois dire restaurer, donc y manger doit restaurer la santé."],
  ['Noah says "deadline" should be a line that kills you because that is the original sense.', "Noah dit que « deadline » devrait être une ligne qui tue parce que c'est le sens original."],
  ['Zoe says "alarm" once meant to arms, so alarms are weapons and should be banned.', "Zoe dit que « alarme » voulait autrefois dire aux armes, donc les alarmes sont des armes et devraient être interdites."],
  ['Milo says "salary" came from salt, so salary negotiations should happen in a pantry.', "Milo dit que « salaire » vient du sel, donc les négociations salariales devraient avoir lieu dans un garde-manger."],
  ['Lina says "nice" once meant ignorant, so a nice person must be uninformed.', "Lina dit que « sympa » voulait autrefois dire ignorant, donc une personne sympa doit être mal informée."],
  ['Eli says "computer" used to mean a person who computes, so modern computers are fake computers.', "Eli dit que « ordinateur » désignait autrefois une personne qui calcule, donc les ordinateurs modernes sont de faux ordinateurs."],
  ['Tara says "planet" once meant wanderer, so planets should walk around the room.', "Tara dit que « planète » voulait autrefois dire vagabond, donc les planètes devraient marcher dans la pièce."],
  ['Owen says "candidate" meant dressed in white, so election ads should require white clothes.', "Owen dit que « candidat » voulait dire habillé en blanc, donc les affiches électorales devraient exiger des vêtements blancs."],
  ['Rina says "policy" once referred to city governance, so every policy must be about a city.', "Rina dit que « politique » désignait autrefois la gestion de la cité, donc toute politique doit parler d'une ville."],
  ['Ben says "error" came from wandering, so making an error means getting lost on the street.', "Ben dit que « erreur » venait de l'errance, donc faire une erreur signifie se perdre dans la rue."],
  ['Mia says "comprehend" once meant grasping together, so understanding a joke should involve your hands.', "Mia dit que « comprendre » voulait autrefois dire saisir ensemble, donc comprendre une blague devrait impliquer les mains."],
  ['Theo says "progress" once meant walking forward, so progress in life must always be literal walking.', "Theo dit que « progrès » voulait autrefois dire avancer à pied, donc le progrès dans la vie doit toujours être une marche littérale."],
  ['Ava says "decide" once meant cut off, so deciding lunch should involve a knife.', "Ava dit que « décider » voulait autrefois dire couper, donc décider du déjeuner devrait impliquer un couteau."],
  ['Leo says "holiday" once meant sacred day, so every vacation should include a ceremony.', "Leo dit que « vacances » voulait autrefois dire jour sacré, donc chaque congé devrait inclure une cérémonie."],
  ['Nina says "salary" and "salt" share a root, so salty food is literally money.', "Nina dit que « salaire » et « sel » partagent une racine, donc la nourriture salée est littéralement de l'argent."],
  ['Priya says "robot" once meant forced labor, so any helpful automation is unethical by language alone.', "Priya dit que « robot » voulait autrefois dire travail forcé, donc toute automatisation utile est immorale rien qu'à cause du mot."],
  ['Finn says "awful" once meant full of awe, so an awful movie must be amazing.', "Finn dit que « awful » voulait autrefois dire plein de crainte, donc un film awful doit être incroyable."],
  ['Mina says "girl" once meant child of either sex, so the word can only mean child.', "Mina dit que « girl » voulait autrefois dire enfant de n'importe quel sexe, donc le mot ne peut vouloir dire qu'enfant."],
  ['Kai says "love" once meant to feel dear toward someone, so love letters are basically legal documents.', "Kai dit que « love » voulait autrefois dire tenir à quelqu'un, donc les lettres d'amour sont essentiellement des documents juridiques."],
  ['Aria says "salary" from salt means every paycheck should taste salty.', "Aria dit que « salaire » vient du sel, donc chaque paie devrait avoir un goût salé."],
  ['Noah says "music" once related to the muses, so all music should be about mythology.', "Noah dit que « musique » était autrefois liée aux muses, donc toute musique devrait parler de mythologie."],
  ['The teacher says "decimate" once meant to kill one in ten, so using it to mean "destroy heavily" is wrong forever.', "Le professeur dit que « décimer » voulait autrefois dire tuer un sur dix, donc l'utiliser pour dire « détruire fortement » est faux à jamais."],
  ['A friend says "awesome" used to mean awe, so it should never mean really great at all.', "Un ami dit que « awesome » signifiait autrefois la crainte, donc cela ne devrait jamais vouloir dire vraiment génial."],
  ['Mia says "birthday" once meant the day of birth, so no one can celebrate a birthday party.', "Mia dit que « birthday » voulait autrefois dire le jour de la naissance, donc personne ne peut faire de fête d'anniversaire."],
  ['Omar claims a "salary" came from salt money, so salaries today should be paid in salt.', "Omar affirme que « salaire » vient de l'argent du sel, donc les salaires d'aujourd'hui devraient être payés en sel."],
  ['Priya says "candidate" meant white-clothed person, so only people in white can run for office.', "Priya dit que « candidat » voulait dire personne en blanc, donc seules les personnes en blanc peuvent se présenter."],
  ['Ben says "broadcast" once meant scattering seed, so podcasts are not real broadcasts.', "Ben dit que « broadcast » voulait autrefois dire semer des graines, donc les podcasts ne sont pas de vraies diffusions."],
  ['Ava says "holiday" used to mean holy day, so a beach holiday is a misuse of the word.', "Ava dit que « holiday » voulait autrefois dire jour saint, donc des vacances à la plage sont un mauvais usage du mot."],
  ['Leo says "manufacture" once meant made by hand, so factory production cannot count.', "Leo dit que « manufacture » voulait autrefois dire fait à la main, donc la production en usine ne peut pas compter."],
  ['Nina says "mentor" was a character name, so anyone giving advice should be named Mentor.', "Nina dit que « mentor » était un nom de personnage, donc toute personne donnant des conseils devrait s'appeler Mentor."],
  ['Theo says "nice" once meant foolish, so calling a cake nice is historically incorrect.', "Theo dit que « nice » voulait autrefois dire stupide, donc dire qu'un gâteau est sympa est historiquement faux."],
  ['Maya says "nice" once meant foolish, so a nice person must be silly.', "Maya dit que « sympa » voulait autrefois dire sot, donc une personne sympa doit être bête."],
  ['Theo says "computer" used to mean a person who computes, so tablets are not real computers.', "Theo dit que « ordinateur » désignait autrefois une personne qui calcule, donc les tablettes ne sont pas de vrais ordinateurs."],
  ['Lina says "holiday" once meant a sacred day, so all vacations must include prayer.', "Lina dit que « vacances » voulait autrefois dire jour sacré, donc toutes les vacances doivent inclure une prière."],
  ['Eli says "deadline" once meant the line where you die, so every deadline is a threat.', "Eli dit que « deadline » voulait autrefois dire la ligne où l'on meurt, donc chaque délai est une menace."],
  ['Tara says "comedy" once meant a village song, so a comedy club should sell farm tools.', "Tara dit que « comédie » voulait autrefois dire chant de village, donc un club de comédie devrait vendre des outils agricoles."],
  ['Owen says "tragedy" once meant goat song, so every tragedy should feature goats.', "Owen dit que « tragédie » voulait autrefois dire chant de chèvre, donc toute tragédie devrait présenter des chèvres."],
  ['Rina says "broadcast" once referred to scattering seed, so radio is just farming.', "Rina dit que « broadcast » désignait autrefois le fait de semer des graines, donc la radio n'est que de l'agriculture."],
  ['Ben says "editor" comes from feeding, so editors should only work in restaurants.', "Ben dit que « editor » vient de nourrir, donc les éditeurs devraient seulement travailler dans des restaurants."],
  ['Mia says "virus" once meant poison, so app viruses should be handled like chemicals.', "Mia dit que « virus » voulait autrefois dire poison, donc les virus d'app devraient être traités comme des produits chimiques."],
  ['Zoe says "robot" once meant forced labor, so robots are always slaves.', "Zoe dit que « robot » voulait autrefois dire travail forcé, donc les robots sont toujours des esclaves."],
  ['Finn says "awful" once meant full of awe, so an awful sandwich should be wonderful.', "Finn dit que « awful » voulait autrefois dire plein de crainte, donc un sandwich awful devrait être merveilleux."],
  ['Mina says "library" once meant a book place, so libraries should never lend books.', "Mina dit que « bibliothèque » voulait autrefois dire lieu de livres, donc les bibliothèques ne devraient jamais prêter de livres."],
  ['Kai says "school" once meant leisure, so school should be fun time only.', "Kai dit que « école » voulait autrefois dire loisir, donc l'école devrait être uniquement un moment amusant."],
  ['Aria says "candidate" once meant a person in white, so elections should require white clothes.', "Aria dit que « candidat » voulait autrefois dire personne en blanc, donc les élections devraient exiger des vêtements blancs."],
  ['Noah says "mentor" was a character name, so advice should only come from someone called Mentor.', "Noah dit que « mentor » était un nom de personnage, donc les conseils devraient venir seulement de quelqu'un qui s'appelle Mentor."],
  ['Priya says "hospital" once meant guest house, so hospitals are just inns.', "Priya dit que « hôpital » voulait autrefois dire maison d'hôtes, donc les hôpitaux ne sont que des auberges."],
  ['Leo says "restaurant" once meant restoring, so every restaurant meal should heal you.', "Leo dit que « restaurant » voulait autrefois dire restaurer, donc chaque repas au restaurant devrait vous guérir."],
  ['Nina says "luxury" once referred to excess, so any luxury item is automatically bad.', "Nina dit que « luxe » désignait autrefois l'excès, donc tout objet de luxe est automatiquement mauvais."],
  ['Theo says "decide" once meant cut off, so making a decision should involve scissors.', "Theo dit que « décider » voulait autrefois dire couper, donc prendre une décision devrait impliquer des ciseaux."],
  ['Ava says "progress" once meant moving forward on foot, so progress can only happen by walking.', "Ava dit que « progrès » voulait autrefois dire avancer à pied, donc le progrès ne peut se faire qu'en marchant."],
  ['Milo says "alarm" once meant to arms, so alarms are weapons.', "Milo dit que « alarme » voulait autrefois dire aux armes, donc les alarmes sont des armes."],
  ['Lina says "education" once meant bringing out, so education should reveal hidden talent instantly.', "Lina dit que « éducation » voulait autrefois dire faire sortir, donc l'éducation devrait révéler le talent caché instantanément."],
  ['Jules says "comprehend" once meant grasp together, so understanding a joke requires your hands.', "Jules dit que « comprendre » voulait autrefois dire saisir ensemble, donc comprendre une blague nécessite les mains."],
  ['Rosa says "salary" came from salt, so paydays should be salty.', "Rosa dit que « salaire » vient du sel, donc les jours de paie devraient être salés."],
  ['Eli says "planet" once meant wanderer, so planets should wander around the house.', "Eli dit que « planète » voulait autrefois dire vagabond, donc les planètes devraient errer dans la maison."],
  ['Maya says "candidate" meant white-clothed person, so campaign signs should show white shirts only.', "Maya dit que « candidat » voulait dire personne en blanc, donc les panneaux de campagne devraient montrer seulement des chemises blanches."],
  ['Omar says "school" once meant free time, so homework is a misuse of the word.', "Omar dit que « école » voulait autrefois dire temps libre, donc les devoirs sont un mauvais usage du mot."],
  ['Nora says "error" came from wandering, so making an error means taking a wrong turn.', "Nora dit que « erreur » venait de l'errance, donc faire une erreur signifie prendre un mauvais virage."],
  ['Ben says "music" was tied to the muses, so a playlist should be about poetry only.', "Ben dit que « musique » était liée aux muses, donc une playlist devrait parler seulement de poésie."],
  ['Ava says "love" once meant to feel dear toward someone, so love songs should be written like letters.', "Ava dit que « amour » voulait autrefois dire tenir à quelqu'un, donc les chansons d'amour devraient être écrites comme des lettres."],
  ['Theo says "holiday" once meant sacred day, so every weekend should be sacred.', "Theo dit que « vacances » voulait autrefois dire jour sacré, donc chaque week-end devrait être sacré."],
  ['Mia says "broadcast" once meant spreading seed, so broadcasts should be done with a shovel.', "Mia dit que « broadcast » voulait autrefois dire répandre des graines, donc les diffusions devraient se faire avec une pelle."],
  ['Maya says "deadline" once meant a line of death, so deadlines should be treated like danger zones.', "Maya dit que « deadline » voulait autrefois dire ligne de mort, donc les délais devraient être traités comme des zones de danger."],
  ['Owen says "salary" came from salt, so his paycheck should be stored in the pantry.', "Owen dit que « salaire » vient du sel, donc sa paie devrait être rangée dans le garde-manger."],
  ['Rina says "planet" once meant wanderer, so planets should wander around the sky on purpose.', "Rina dit que « planète » voulait autrefois dire vagabond, donc les planètes devraient errer dans le ciel exprès."],
  ['Ben says "editor" came from feeding, so editors should only work at breakfast.', "Ben dit que « editor » vient de nourrir, donc les éditeurs devraient seulement travailler au petit déjeuner."],
  ['Lina says "school" once meant leisure, so school should always feel like recess.', "Lina dit que « école » voulait autrefois dire loisir, donc l'école devrait toujours ressembler à la récréation."],
  ['Nina says "computer" once meant a person who computes, so modern laptops are impostors.', "Nina dit que « ordinateur » voulait autrefois dire personne qui calcule, donc les ordinateurs portables modernes sont des imposteurs."]
];

const OPTIONS_EN = ['Etymological Fallacy', 'Equivocation', 'False Cause', 'Appeal to Tradition'];
const OPTIONS_FR = ['Sophisme étymologique', 'Équivoque', 'Fausse cause', "Appel à la tradition"];

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
      id: 33601 + i,
      level: 4,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Sophisme étymologique' : 'Etymological Fallacy',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? OPTIONS_FR : OPTIONS_EN, c),
      correct_option_index: c,
      explanation: fr
        ? "On suppose qu'un sens ancien d'un mot fixe son sens actuel, alors que les mots changent avec l'usage."
        : 'An old meaning of a word is treated as the only valid one, even though word meanings change with use.',
      detailedExplanationBeginner: fr
        ? "L'origine d'un mot ne décide pas de son sens actuel."
        : 'A word’s origin does not lock its current meaning.',
      detailedExplanationIntermediate: fr
        ? "Le sophisme étymologique confond l'histoire d'un mot avec sa définition aujourd'hui."
        : 'The etymological fallacy confuses a word’s history with its definition today.',
      detailedExplanationExpert: fr
        ? "Ce raisonnement ignore l'évolution sémantique: les mots changent, s'élargissent, se spécialisent ou prennent des usages nouveaux sans perdre leur légitimité."
        : 'This reasoning ignores semantic change: words broaden, narrow, shift, or gain new uses without losing legitimacy.',
      questionFormat: 'standard',
    };
  });
}

export const ETYMOLOGICAL_FALLACY_EXPANSION_EN: Question[] = make();
export const ETYMOLOGICAL_FALLACY_EXPANSION_FR: Question[] = make(true);

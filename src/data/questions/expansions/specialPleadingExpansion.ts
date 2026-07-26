import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya says she can be late to the meeting because she is the creative one, so the rule should not apply to her.', 'Maya dit qu elle peut arriver en retard à la reunion parce qu elle est la personne creative, donc la regle ne devrait pas s appliquer à elle.'],
  ['Ben says he does not need to follow the dress code because he is "different from the other employees."', 'Ben dit qu il n a pas besoin de respecter le code vestimentaire parce qu il est "different des autres employes".'],
  ['Priya says her homework should count even though it is late because she was extra busy, while everyone else still had to meet the deadline.', 'Priya dit que son devoir devrait compter meme s il est en retard parce qu elle etait tres occupee, alors que tout le monde devait quand meme respecter la date limite.'],
  ['Noah says he can break the classroom phone rule because he only checks one message, which is "not the same as real phone use."', 'Noah dit qu il peut enfreindre la regle du telephone en classe parce qu il verifie seulement un message, ce qui n est "pas la meme chose qu une vraie utilisation du telephone".'],
  ['Lina says she should get a refund without a receipt because she is a loyal customer and deserves special treatment.', 'Lina dit qu elle devrait obtenir un remboursement sans reçu parce qu elle est une cliente fidele et merite un traitement special.'],
  ['Theo says his parking violation should be ignored because he was only five minutes late and "that is different."', 'Theo dit que son infraction de stationnement devrait etre ignoree parce qu il avait seulement cinq minutes de retard et que "c est different".'],
  ['Ava says she does not need to wear the uniform because her role is "more artistic than everyone else\'s."', 'Ava dit qu elle n a pas besoin de porter l uniforme parce que son rôle est "plus artistique que celui des autres".'],
  ['Omar says his missed quiz should be excused because he studied "in his own way," even though the class rule was the same for everyone.', 'Omar dit que son quiz manqué devrait etre excuse parce qu il a etudie "à sa facon", meme si la regle de la classe etait la meme pour tout le monde.'],
  ['Rina says she can skip the sign-in sheet because she already knows the organizer personally.', 'Rina dit qu elle peut sauter la feuille de presence parce qu elle connait déjà l organisateur personnellement.'],
  ['Jules says the cafeteria line should let him cut because he is in a hurry and his case is "obviously urgent."', 'Jules dit que la file de la cantine devrait le laisser passer parce qu il est presse et que son cas est "evidemment urgent".'],
  ['Mina says her late library return should not count because the book was "for a school project."', 'Mina dit que son retour tardif à la bibliotheque ne devrait pas compter parce que le livre etait "pour un projet scolaire".'],
  ['Eli says he can use the premium software without paying because he only needs it for one small task.', 'Eli dit qu il peut utiliser le logiciel premium sans payer parce qu il en a seulement besoin pour une petite tache.'],
  ['Hugo says his missing permission slip should be forgiven because he brought the note home but forgot to hand it in.', 'Hugo dit que son autorisation manquante devrait etre pardonnée parce qu il a ramené la note à la maison mais a oublié de la remettre.'],
  ['Lea says the no-snacking rule should not apply to her because she is "working on a long art project."', 'Lea dit que l interdiction de grignoter ne devrait pas s appliquer à elle parce qu elle "travaille sur un long projet artistique".'],
  ['Grant says he can park in the loading zone because he is only stopping "for a second."', 'Grant dit qu il peut se garer dans la zone de chargement parce qu il ne s arrete "qu une seconde".'],
  ['Tia says her unfinished report is fine because she already knows what the rest would say.', 'Tia dit que son rapport inacheve est correct parce qu elle sait déjà ce que le reste dirait.'],
  ['Nora says she should get the benefit of the doubt because she is usually right, unlike other people.', 'Nora dit qu on devrait lui accorder le benefice du doute parce qu elle a généralement raison, contrairement aux autres.'],
  ['Sam says he can ignore the checkout limit because he is buying gifts, not ordinary groceries.', 'Sam dit qu il peut ignorer la limite à la caisse parce qu il achete des cadeaux, pas des courses ordinaires.'],
  ['Jade says her broken rule is acceptable because she is the one who usually helps everyone else.', 'Jade dit que sa regle enfreinte est acceptable parce qu elle est celle qui aide d habitude tout le monde.'],
  ['Owen says the refund policy should bend for him because he had a stressful week, even though stress is common.', 'Owen dit que la politique de remboursement devrait se plier à son cas parce qu il a eu une semaine stressante, meme si le stress est courant.'],
  ['Ari says the homework deadline should not count today because the assignment was "basically optional anyway."', 'Ari dit que la date limite du devoir ne devrait pas compter aujourd hui parce que le travail etait "de toute facon pratiquement facultatif".'],
  ['Pia says she can skip the queue because she is just picking up one tiny item and that should not count as line-cutting.', 'Pia dit qu elle peut couper la file parce qu elle ne prend qu un tout petit article et que cela ne devrait pas compter comme du passe-droit.'],
  ['Ben says his loud phone call is fine because it was an emergency, even though nobody else can prove it.', 'Ben dit que son appel telephonique bruyant est acceptable parce que c etait une urgence, meme si personne d autre ne peut le verifier.'],
  ['Zoe says she can ignore the dress rehearsal time because she is the lead, so the schedule is flexible for her.', 'Zoe dit qu elle peut ignorer l heure de repetition parce qu elle est l actrice principale, donc l horaire est souple pour elle.'],
  ['Ravi says the no-pets rule should not apply to his dog because it is "more emotional support than pet."', 'Ravi dit que l interdiction des animaux ne devrait pas s appliquer à son chien parce qu il est "plus soutien emotionnel qu animal de compagnie".'],
  ['Sofia says her late payment is different because the bill was "confusing," while every other customer still had to pay on time.', 'Sofia dit que son paiement en retard est different parce que la facture etait "confuse", alors que tous les autres clients devaient quand meme payer à temps.'],
  ['Lara says the strict homework limit should not apply to her because she is preparing for a recital, so it is special.', 'Lara dit que la limite stricte des devoirs ne devrait pas s appliquer à elle parce qu elle prepare un recital, donc c est special.'],
  ['Cole says he can ignore the quiet-hours rule because he is only playing music for "one tiny celebration."', 'Cole dit qu il peut ignorer la regle du calme parce qu il ne met de la musique que pour "une toute petite celebration".'],
  ['Maya says her parking mistake is not really a mistake because the space looked empty and she was in a rush.', 'Maya dit que son erreur de stationnement n est pas vraiment une erreur parce que la place avait l air vide et qu elle etait presse.'],
  ['Ezra says his missed appointment should be forgiven because he was doing something important, even though everyone else also has important things.', 'Ezra dit que son rendez-vous manque devrait etre pardonne parce qu il faisait quelque chose d important, meme si tout le monde a aussi des choses importantes.'],
  ['Nina says she does not need to bring the required form because she already gave the office "plenty of information."', 'Nina dit qu elle n a pas besoin d apporter le formulaire requis parce qu elle a déjà donne "plein d informations" au bureau.'],
  ['Hana says her extra break is fine because she works harder than the rest of the team.', 'Hana dit que sa pause supplementaire est acceptable parce qu elle travaille plus dur que le reste de l equipe.'],
  ['Dylan says the no-loud-talking rule should not apply to him because he is only making an "important point."', 'Dylan dit que l interdiction de parler fort ne devrait pas s appliquer à lui parce qu il ne fait que "faire un point important".'],
  ['Penny says the late assignment should count because the file name was correct, even though the rule required on-time submission too.', 'Penny dit que le devoir en retard devrait compter parce que le nom du fichier etait correct, meme si la regle exigeait aussi une remise à l heure.'],
  ['Kira says she can keep using the shortcut in the park because she is just passing through and does not count as a regular user.', 'Kira dit qu elle peut continuer à utiliser le raccourci dans le parc parce qu elle ne fait que passer et ne compte pas comme utilisatrice reguliere.'],
  ['Finn says the store should ignore his broken return policy because he spent a lot there last month.', 'Finn dit que le magasin devrait ignorer la politique de retour à son sujet parce qu il y a depense beaucoup le mois dernier.'],
  ['Juno says she can skip the sign because she is "not the kind of person who causes problems."', 'Juno dit qu elle peut ignorer le panneau parce qu elle n est "pas le genre de personne qui cause des problemes".'],
  ['Olivia says her rushed answer should be accepted because she was the only one brave enough to speak up.', 'Olivia dit que sa reponse precipitee devrait etre acceptée parce qu elle etait la seule assez courageuse pour parler.'],
  ['Mila says the hotel rule about quiet hallways should not apply to her because she was only checking on a friend.', 'Mila dit que la regle de l hotel sur les couloirs calmes ne devrait pas s appliquer à elle parce qu elle allait seulement verifier un ami.'],
  ['Leo says he can wear headphones in class because he is listening to an "educational" playlist.', 'Leo dit qu il peut porter des ecouteurs en classe parce qu il ecoute une playlist "educative".'],
  ['Tara says the donation deadline should be extended for her because she was busy helping others.', 'Tara dit que la date limite du don devrait etre prolongee pour elle parce qu elle etait occupee à aider les autres.'],
  ['Hugo says his absence from the group project is okay because he worked hard on a different assignment.', 'Hugo dit que son absence du projet de groupe est acceptable parce qu il a beaucoup travaille sur une autre tache.'],
  ['Lea says the cafe should let her bring outside food because the sandwich is for medical reasons and that makes it special.', 'Lea dit que le cafe devrait la laisser apporter de la nourriture de l exterieur parce que le sandwich est pour des raisons medicales et que cela le rend special.'],
  ['Max says he can ignore the queue rule because he is just checking one item and will not "really" stay in line.', 'Max dit qu il peut ignorer la regle de la file parce qu il ne verifie qu un article et ne restera pas "vraiment" dans la file.'],
  ['Yara says her essay should avoid the word limit because her topic is more complex than everyone else\'s.', 'Yara dit que son essai devrait depasser la limite de mots parce que son sujet est plus complexe que celui de tout le monde.'],
  ['Dan says the store should refund him without proof because he is a long-time customer and that should be enough.', 'Dan dit que le magasin devrait le rembourser sans preuve parce qu il est client depuis longtemps et que cela devrait suffire.'],
  ['Rosa says she does not need to follow the sign-up rules because she already knows the people running the event.', 'Rosa dit qu elle n a pas besoin de suivre les regles d inscription parce qu elle connait déjà les personnes qui organisent l evenement.'],
  ['Alicia says her late homework should count because she was improving it, which makes the delay okay.', 'Alicia dit que son devoir rendu en retard devrait compter parce qu elle l ameliorait, ce qui rend le retard acceptable.'],
  ['Owen says the parking ticket should be waived because his case is "clearly not the same as the others."', 'Owen dit que l amende de stationnement devrait etre annulee parce que son cas est "clairement different des autres".'],
  ['Maya says the class rule about no phones should not apply to her because she is using hers to look up the answer.', 'Maya dit que la regle de classe interdisant les telephones ne devrait pas s appliquer à elle parce qu elle l utilise pour chercher la reponse.'],
  ['Maya says she can leave her bike in the hallway because it is "just for a minute" and that makes it different.', 'Maya dit qu elle peut laisser son velo dans le couloir parce que c est "juste pour une minute" et que cela change tout.'],
  ['Ben says the noise rule should not apply to him because he is only playing music for "the vibe."', 'Ben dit que la regle sur le bruit ne devrait pas s appliquer à lui parce qu il ne diffuse de la musique que pour "l ambiance".'],
  ['Priya says her group can skip the presentation order because their project is more serious than the others.', 'Priya dit que son groupe peut ignorer l ordre des presentations parce que son projet est plus serieux que les autres.'],
  ['Noah says he can ignore the checkout limit because he is buying gifts, so his cart is special.', 'Noah dit qu il peut ignorer la limite à la caisse parce qu il achete des cadeaux, donc son panier est special.'],
  ['Lina says her missed deadline should not count because she was the one helping everyone else.', 'Lina dit que son retard ne devrait pas compter parce qu elle etait celle qui aidait tout le monde.'],
  ['Theo says the dress code should not apply to him because his outfit is "professional art."', 'Theo dit que le code vestimentaire ne devrait pas s appliquer à lui parce que sa tenue est de "l art professionnel".'],
  ['Ava says the return policy should bend for her because the box was opened by accident and that makes it different.', 'Ava dit que la politique de retour devrait se plier à son cas parce que la boite a ete ouverte par accident et que cela rend la situation differente.'],
  ['Omar says he can ignore the parking sign because he is only unloading one bag and is not "really" parking.', 'Omar dit qu il peut ignorer le panneau de stationnement parce qu il ne fait que decharger un sac et ne se gare pas "vraiment".'],
  ['Rina says the homework rule should not apply to her because she already knew most of the answers.', 'Rina dit que la regle des devoirs ne devrait pas s appliquer à elle parce qu elle connaissait déjà la plupart des reponses.'],
  ['Jules says his late arrival should be excused because he was bringing something useful to the meeting.', 'Jules dit que son retard devrait etre pardonné parce qu il apportait quelque chose d utile à la reunion.'],
  ['Mina says the line rule does not apply to her because she is just asking one quick question.', 'Mina dit que la regle de la file ne s applique pas à elle parce qu elle pose juste une petite question.'],
  ['Eli says he can use the staff door because he is helping carry one box and that makes him different.', 'Eli dit qu il peut utiliser la porte du personnel parce qu il aide à porter une boite et que cela le rend different.'],
  ['Hugo says the quiet-hours rule should not apply to his party because it is a birthday party and birthdays are special.', 'Hugo dit que la regle de calme ne devrait pas s appliquer à sa fete parce que c est un anniversaire et que les anniversaires sont speciaux.'],
  ['Lea says she can skip the sign-in sheet because she has been coming for years and should be trusted.', 'Lea dit qu elle peut sauter la feuille de presence parce qu elle vient depuis des années et devrait etre digne de confiance.'],
  ['Grant says the cancellation fee should be waived for him because he had a stressful day, which changes the situation.', 'Grant dit que les frais d annulation devraient lui etre epargnes parce qu il a eu une journee stressante, ce qui change la situation.'],
  ['Tia says the helmet rule should not apply to her short ride because she is only going around the corner.', 'Tia dit que la regle du casque ne devrait pas s appliquer à sa courte balade parce qu elle va juste au coin de la rue.'],
  ['Nora says the deadline should be extended for her because she is working on a more important version of the same assignment.', 'Nora dit que la date limite devrait etre prolongee pour elle parce qu elle travaille sur une version plus importante de la meme tache.'],
  ['Sam says the attendance rule should not count against him because he was present in spirit.', 'Sam dit que la regle de presence ne devrait pas compter contre lui parce qu il etait present en esprit.'],
  ['Jade says she can skip the line because she is only grabbing one item for someone else.', 'Jade dit qu elle peut couper la file parce qu elle prend seulement un article pour quelqu un d autre.'],
  ['Owen says the refund request should be approved because his case is "more understandable" than the others.', 'Owen dit que la demande de remboursement devrait etre acceptee parce que son cas est "plus compréhensible" que les autres.'],
  ['Ari says the no-food rule should not apply to him because his snack is healthy and healthy snacks are different.', 'Ari dit que la regle interdisant la nourriture ne devrait pas s appliquer à lui parce que son casse-croute est sain et que les collations saines sont differentes.'],
  ['Pia says her late form should be accepted because she was trying to do it properly, unlike the other students.', 'Pia dit que son formulaire en retard devrait etre accepté parce qu elle essayait de bien faire, contrairement aux autres eleves.'],
  ['Ben says he can ignore the checkout sign because the store is busy and his situation deserves flexibility.', 'Ben dit qu il peut ignorer le panneau de caisse parce que le magasin est occupe et que sa situation merite de la souplesse.'],
  ['Zoe says the rule against loud calls should not apply because she is talking to her grandmother, so it is not the same.', 'Zoé dit que la regle contre les appels bruyants ne devrait pas s appliquer parce qu elle parle à sa grand-mere, donc ce n est pas pareil.'],
  ['Ravi says the missed quiz should be excused because he had a lot going on and his stress makes the rule unfair.', 'Ravi dit que le quiz manque devrait etre pardonné parce qu il avait beaucoup de choses à gerer et que son stress rend la regle injuste.'],
  ['Sofia says she can keep the extra chair because she was the one who brought guests and that makes the case special.', 'Sofia dit qu elle peut garder la chaise supplementaire parce qu elle etait celle qui a amene des invites et que cela rend le cas special.'],
  ['Lara says the office quiet zone should not apply to her because she is just making one urgent call.', 'Lara dit que la zone de calme du bureau ne devrait pas s appliquer à elle parce qu elle ne passe qu un appel urgent.'],
  ['Cole says the library rule should not apply because he is only reading a section for research and not "using" the space.', 'Cole dit que la regle de la bibliotheque ne devrait pas s appliquer parce qu il ne lit qu une section pour la recherche et n utilise pas vraiment l espace.'],
  ['Maya says her broken form should still count because she is usually careful and this one mistake should be ignored.', 'Maya dit que son formulaire defectueux devrait quand meme compter parce qu elle est d habitude soigneuse et que cette erreur devrait etre ignoree.'],
  ['Ezra says the queue rule does not apply to him because he is late for a good reason and that is clearly different.', 'Ezra dit que la regle de la file ne s applique pas à lui parce qu il est en retard pour une bonne raison et que c est clairement different.'],
  ['Nina says her damaged item return is special because the sticker is still on, so it should be accepted.', 'Nina dit que son retour d article endommage est special parce que l etiquette est encore en place, donc il devrait etre accepté.'],
  ['Hana says the curfew should be relaxed for her because she is almost always home early anyway.', 'Hana dit que le couvre-feu devrait etre assoupli pour elle parce qu elle rentre presque toujours tot de toute facon.'],
  ['Dylan says the no-phone rule should not apply to him because he is using an app for learning, which is different.', 'Dylan dit que la regle sans telephone ne devrait pas s appliquer à lui parce qu il utilise une application pour apprendre, ce qui est different.'],
  ['Penny says her missed appointment should be forgiven because the office reminded everyone else more clearly than her.', 'Penny dit que son rendez-vous manque devrait etre pardonné parce que le bureau a mieux rappelle la consigne aux autres qu à elle.'],
  ['Kira says the parking fee should be waived because she only stayed to drop something off and that is not real parking.', 'Kira dit que les frais de stationnement devraient etre annules parce qu elle est juste restee pour deposer quelque chose et que ce n est pas vraiment du stationnement.'],
  ['Finn says the homework rule should not apply to him because he already turned in extra credit, so he did enough.', 'Finn dit que la regle des devoirs ne devrait pas s appliquer à lui parce qu il a déjà rendu du travail supplementaire et qu il a donc assez fait.'],
  ['Juno says the broken rule should be forgiven because she is the only one who usually helps clean up afterward.', 'Juno dit que la regle enfreinte devrait etre pardonnée parce qu elle est la seule qui aide d habitude à ranger apres.'],
  ['Olivia says the ticket should be void because she was only stopping to ask for directions.', 'Olivia dit que le ticket devrait etre annule parce qu elle s etait seulement arretée pour demander son chemin.'],
  ['Mila says the classroom rule about snacks should not apply because her snack is tiny and therefore exempt.', 'Mila dit que la regle de classe sur les collations ne devrait pas s appliquer parce que sa collation est minuscule et donc exemptee.'],
  ['Leo says his missed step in the project should not count because he handled a harder part of it.', 'Leo dit que son erreur dans le projet ne devrait pas compter parce qu il a geré une partie plus difficile.'],
  ['Tara says the policy should be relaxed for her because she has already suffered enough inconvenience today.', 'Tara dit que la politique devrait etre assouplie pour elle parce qu elle a déjà subi assez de desagrements aujourd hui.'],
  ['Hugo says the quiet-room rule should not apply because he was only there for a quick check-in.', 'Hugo dit que la regle de salle calme ne devrait pas s appliquer parce qu il etait juste là pour une verification rapide.'],
  ['Lea says her late reply should be accepted because she was replying thoughtfully, which makes the delay special.', 'Léa dit que sa reponse tardive devrait etre acceptée parce qu elle repondait avec reflexion, ce qui rend le retard special.'],
  ['Max says the line rule should not apply to him because he came all the way from another city.', 'Max dit que la regle de la file ne devrait pas s appliquer à lui parce qu il vient de tres loin.'],
  ['Yara says her warning should be ignored because she is the one who usually knows better.', 'Yara dit que son avertissement devrait etre ignore parce qu elle est celle qui sait d habitude mieux que les autres.'],
  ['Dan says his missing badge should not matter because he left it at home for a good reason.', 'Dan dit que son badge manquant ne devrait pas compter parce qu il l a laisse à la maison pour une bonne raison.'],
  ['Rosa says the rule about quiet voices should not apply because she is only talking in a calm tone, not a loud one.', 'Rosa dit que la regle sur les voix calmes ne devrait pas s appliquer parce qu elle parle seulement d un ton calme, pas fort.'],
  ['Alicia says her broken deadline is different because the assignment was personal, not ordinary.', 'Alicia dit que son retard de deadline est different parce que le devoir etait personnel, pas ordinaire.'],
  ['Owen says the no-entry sign should not apply because he knows the owner and that makes his entry special.', 'Owen dit que le panneau interdit d entrer ne devrait pas s appliquer parce qu il connait le proprietaire et que cela rend son entree speciale.'],
];

const OPTIONS_EN = ['Special Pleading', 'Double Standard', 'Moving the Goalposts', 'No True Scotsman'];
const OPTIONS_FR = ['Plaidoyer spécial', 'Double standard', 'Déplacer les buts', 'Aucun vrai Ecossais'];

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
      id: 41101 + index,
      level: 2,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Plaidoyer spécial' : 'Special Pleading',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'La personne demande une exception personnelle sans raison pertinente qui justifierait cette exception.'
        : 'The person asks for a personal exception without a relevant reason that would justify it.',
      detailedExplanationBeginner: isFrench
        ? 'La regle change juste pour une personne.'
        : 'The rule changes just for one person.',
      detailedExplanationIntermediate: isFrench
        ? 'Le plaidoyer spécial apparait quand quelqu un dit que sa situation est differente sans montrer un critere general qui ferait vraiment la difference.'
        : 'Special pleading appears when someone claims their case is different without showing a general criterion that would really make a difference.',
      detailedExplanationExpert: isFrench
        ? "Ce sophisme introduit une exception non justifiée pour sauver une conclusion ou éviter une obligation. Le point clé est l asymetrie: on demande aux autres d obéir a la regle, puis on réclame pour soi une dispense ad hoc qui n est pas fondée sur un principe applicable à tous."
        : 'This fallacy introduces an unjustified exception to save a conclusion or dodge an obligation. The key issue is asymmetry: others are asked to obey the rule, then the speaker claims an ad hoc exemption for themselves that is not based on a principle applicable to everyone.',
      questionFormat: 'standard',
    };
  });
}

export const SPECIAL_PLEADING_EXPANSION_EN: Question[] = createQuestions('en');
export const SPECIAL_PLEADING_EXPANSION_FR: Question[] = createQuestions('fr');

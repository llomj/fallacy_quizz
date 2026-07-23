import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['A cashier misread the receipt, and Sam blamed the printer for stealing money from his account at the store.', "Une caissiere a mal lu le ticket, et Sam a accuse l'imprimante d'avoir vole de l'argent sur son compte au magasin."],
  ['Rita heard a quote on a meme and assumed her uncle said it at dinner on Sunday after football.', "Rita a vu une citation sur un mème et a suppose que son oncle l'avait dite au dîner du dimanche apres le foot."],
  ['After the lamp flickered, Ben said the lamp was possessed by the same ghost as the attic.', "Apres que la lampe a clignote, Ben a dit que la lampe etait hantee par le meme fantome que le grenier."],
  ['Nina forgot her password and blamed the keyboard for changing it.', "Nina a oublie son mot de passe et a accuse le clavier de l'avoir change."],
  ['Theo heard a joke online and told everyone his friend invented it.', "Theo a entendu une blague en ligne et a dit a tout le monde que son ami l'avait inventee."],
  ['Mia saw a chart in a blog post and assumed the blog author had collected the data personally.', "Mia a vu un graphique dans un article de blog et a suppose que l'auteur avait recueilli les donnees lui-meme."],
  ['Owen found a broken mug and blamed the dishwasher, even though the cat was nearby.', "Owen a trouve une tasse cassee et a accuse le lave-vaisselle, meme si le chat etait proche."],
  ['Ava heard a rumor about the mayor and treated it as a direct quote from the mayor.', "Ava a entendu une rumeur sur le maire et l'a traitee comme une citation directe du maire."],
  ['Leo saw a typo in a school email and claimed the principal must be careless with every document.', "Leo a vu une faute de frappe dans un courriel scolaire et a affirme que le directeur devait etre negligent avec tous les documents."],
  ['Priya heard a weather joke from a coworker and credited the coworker with creating the forecast itself.', "Priya a entendu une blague meteo d'un collegue et a attribue au collegue la creation du bulletin lui-meme."],
  ['Kai assumed the neighbor who mentioned the noise had caused the noise.', "Kai a suppose que le voisin qui a mentionne le bruit avait provoque le bruit."],
  ['Zoe read a headline and told her friend the newspaper had personally witnessed the event.', "Zoe a lu un titre et a dit a son amie que le journal avait assiste personnellement a l'evenement."],
  ['Finn heard an old saying and believed the store owner said it during the sale.', "Finn a entendu un vieux proverbe et a cru que le proprietaire du magasin l'avait dit pendant la vente."],
  ['Lina saw a cooking tip on a blog and assumed the blogger had tested it in a restaurant kitchen.', "Lina a vu un conseil de cuisine sur un blog et a suppose que le blogueur l'avait teste dans une cuisine de restaurant."],
  ['Noah blamed the router for a power outage that happened downtown.', "Noah a accuse le routeur d'une panne de courant qui s'est produite en ville."],
  ['Rina heard her friend repeat a statistic and thought the friend had produced the survey.', "Rina a entendu son amie repeter une statistique et a pense que son amie avait realise l'enquete."],
  ['Milo saw a funny quote card and believed the designer had said the words on stage.', "Milo a vu une carte de citation amusante et a cru que le designer avait prononce ces mots sur scene."],
  ['Tara blamed the fridge for spoiling the groceries when the power had been out all night.', "Tara a accuse le frigo d'avoir gâte les courses alors qu'il n'y avait plus d'electricite toute la nuit."],
  ['Eli assumed the podcast host personally endorsed every guest opinion they repeated.', "Eli a suppose que l'animateur du podcast approuvait personnellement chaque opinion d'invite qu'il repetait."],
  ['Mina saw a screenshot of a chat and assumed the screenshot creator wrote every message.', "Mina a vu une capture d'ecran d'une discussion et a suppose que la personne qui l'avait prise avait ecrit chaque message."],
  ['Ben heard a child say the joke and credited the daycare teacher as the author.', "Ben a entendu un enfant raconter la blague et a attribue sa creation a l'enseignante de la garderie."],
  ['Ari saw a meme about taxes and thought the meme page had written the tax law.', "Ari a vu un mème sur les impots et a pense que la page avait redige la loi fiscale."],
  ['Emma read a quoted review and assumed the reviewer had also taken the product photos.', "Emma a lu un avis cite et a suppose que l'auteur avait aussi pris les photos du produit."],
  ['Omar blamed the oven for a burnt pizza that was forgotten in the car.', "Omar a accuse le four pour une pizza brulee qui avait ete oubliee dans la voiture."],
  ['Jade heard a friend say "I guess" and concluded the friend was making a formal prediction.', "Jade a entendu son amie dire « je suppose » et a conclu qu'elle faisait une prediction officielle."],
  ['Theo read a quote attributed to a scientist and assumed the scientist wrote the article.', "Theo a lu une citation attribuee a un scientifique et a suppose que le scientifique avait ecrit l'article."],
  ['Lara saw a photo caption and believed the photographer had also been the person in the photo.', "Lara a vu une legende de photo et a cru que le photographe etait aussi la personne sur la photo."],
  ['Dylan blamed the seatbelt alarm for the car not starting.', "Dylan a accuse le bip de la ceinture de sécurité pour la voiture qui ne demarrait pas."],
  ['Nora heard a joke from her brother and claimed he had invented comedy itself.', "Nora a entendu une blague de son frere et a affirme qu'il avait invente la comedie elle-meme."],
  ['Felix saw a chart shared by a friend and assumed the friend had done the survey in person.', "Felix a vu un graphique partage par un ami et a suppose que l'ami avait mene l'enquete en personne."],
  ['Iris read a slogan on a tote bag and thought the bag maker had written the slogan for the city council.', "Iris a lu un slogan sur un sac fourre-tout et a pense que le fabricant du sac l'avait ecrit pour le conseil municipal."],
  ['Cole heard a proverb from his grandmother and assumed she invented it last week.', "Cole a entendu un proverbe de sa grand-mere et a suppose qu'elle l'avait invente la semaine derniere."],
  ['Maya saw a translated post and believed the translator had made the original announcement.', "Maya a vu un message traduit et a cru que le traducteur avait fait l'annonce originale."],
  ['Hugo blamed the monitor for a frozen game that was actually caused by a bad update.', "Hugo a accuse l'ecran pour un jeu bloque alors qu'il etait en realite cause par une mauvaise mise a jour."],
  ['Stella heard a rumor at lunch and thought the lunch table had confirmed it with evidence.', "Stella a entendu une rumeur au dejeuner et a pense que la table du dejeuner l'avait confirmee avec des preuves."],
  ['Ray assumed the person repeating the weather warning was the meteorologist who issued it.', "Ray a suppose que la personne qui repetait l'alerte meteo etait la meteorologue qui l'avait emise."],
  ['Juno saw a viral quote image and believed the image itself was the speaker.', "Juno a vu une image de citation virale et a cru que l'image elle-meme etait la personne qui parlait."],
  ['Pia blamed the microwave for a soup spill that happened while carrying the bowl.', "Pia a accuse le micro-ondes pour une soupe renversee alors qu'elle portait le bol."],
  ['Grant heard his coworker repeat a rule and assumed the coworker wrote the company policy.', "Grant a entendu son collegue repeter une regle et a suppose que ce collegue avait ecrit la politique de l'entreprise."],
  ['Kira saw a note on the fridge and concluded the fridge owner had written every note in the building.', "Kira a vu un mot sur le frigo et a conclu que le proprietaire du frigo avait ecrit tous les mots de l'immeuble."],
  ['Evan blamed the elevator for being late to work even though he left home late.', "Evan a accuse l'ascenseur de l'avoir mis en retard au travail alors qu'il etait parti tard de chez lui."],
  ['Sofia heard a quote on a podcast and assumed the host had spoken with the original author in person.', "Sofia a entendu une citation dans un podcast et a suppose que l'animateur avait parle en personne avec l'auteur original."],
  ['Reed saw a comment under a video and believed the commenter had filmed the entire video.', "Reed a vu un commentaire sous une video et a cru que le commentateur avait filme toute la video."],
  ['Clara blamed the thermostat for a hot apartment that was really caused by closed windows.', "Clara a accuse le thermostat pour un appartement chaud alors que c'etait vraiment cause par les fenetres fermees."],
  ['Jonah heard a phrase in a movie and told everyone the actor personally coined it.', "Jonah a entendu une expression dans un film et a dit a tout le monde que l'acteur l'avait inventee lui-meme."],
  ['Layla saw a meme remix and assumed the remixer had created the original photo.', "Layla a vu un mème remixe et a suppose que la personne qui l'avait remixe avait cree la photo originale."],
  ['Oli read an anonymous tip and treated it as if the tipster had investigated the case alone.', "Oli a lu un tuyau anonyme et l'a traite comme si la personne l'avait enquete seule."],
  ['Tessa heard her cousin repeat a rumor and concluded her cousin was the first source.', "Tessa a entendu sa cousine repeter une rumeur et a conclu que sa cousine en etait la premiere source."],
  ['Mason blamed the GPS for choosing the route, though he had selected it manually.', "Mason a accuse le GPS d'avoir choisi l'itineraire, alors qu'il l'avait selectionne manuellement."],
];

const OPTIONS_EN = ['False Attribution', 'Hasty Generalization', 'False Cause', 'Anecdotal Fallacy'];
const OPTIONS_FR = ['Fausse attribution', 'Généralisation hâtive', 'Fausse cause', 'Sophisme anecdotique'];

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
      id: 33901 + i,
      level: 6,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Fausse attribution' : 'False Attribution',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? OPTIONS_FR : OPTIONS_EN, c),
      correct_option_index: c,
      explanation: fr
        ? "Le raisonnement attribue une cause, une citation ou une action à la mauvaise personne ou à la mauvaise source."
        : 'The reasoning gives a cause, quote, or action to the wrong person or source.',
      detailedExplanationBeginner: fr
        ? "On confond qui a dit, fait ou provoqué quelque chose."
        : 'It mixes up who said, did, or caused something.',
      detailedExplanationIntermediate: fr
        ? "Cette erreur apparaît quand on prend un repost, un bruit ou un rappel comme preuve de l'auteur ou de la source réelle."
        : 'This mistake shows up when a repost, rumor, or reminder is treated as proof of the real author or source.',
      detailedExplanationExpert: fr
        ? "La fausse attribution consiste à projeter une origine, une intention ou une responsabilité sur une source qui ne l'a pas réellement produite."
        : 'False attribution projects origin, intent, or responsibility onto a source that did not actually produce it.',
      questionFormat: 'standard',
    };
  });
}

export const FALSE_ATTRIBUTION_EXPANSION_EN: Question[] = make();
export const FALSE_ATTRIBUTION_EXPANSION_FR: Question[] = make(true);

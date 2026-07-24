import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['If the dog hears the door, it barks. The dog is not barking, so it must not have heard the door.', "Si le chien entend la porte, il aboie. Le chien n'aboie pas, donc il n'a sans doute pas entendu la porte."],
  ['If the app is premium, it has no ads. This app has no ads, so it must be premium.', "Si l'application est premium, elle n'a pas de pub. Cette application n'a pas de pub, donc elle doit etre premium."],
  ['If the cake is baked, the center is warm. The center is not warm, so the cake is not baked.', "Si le gateau est cuit, le milieu est chaud. Le milieu n'est pas chaud, donc le gateau n'est pas cuit."],
  ['If the printer is on, the light is green. The light is not green, so the printer is off.', "Si l'imprimante est allumee, le voyant est vert. Le voyant n'est pas vert, donc l'imprimante est eteinte."],
  ['If the movie is funny, people laugh. People are not laughing, so the movie is not funny.', "Si le film est drole, les gens rient. Les gens ne rient pas, donc le film n'est pas drole."],
  ['If the room is reserved, there is a sign on the door. There is no sign, so the room is not reserved.', "Si la salle est reservee, il y a un panneau sur la porte. Il n'y a pas de panneau, donc la salle n'est pas reservee."],
  ['If the coffee is decaf, it will not keep Sam awake. It did not keep Sam awake, so it must be decaf.', "Si le cafe est decafeine, il ne tiendra pas Sam eveille. Il ne l'a pas tenu eveille, donc il est surement decafeine."],
  ['If the shop is open, the lights are on. The lights are off, so the shop is closed.', "Si la boutique est ouverte, les lumieres sont allumees. Les lumieres sont eteintes, donc la boutique est fermee."],
  ['If the chart is clear, everyone understands it. People do not understand it, so the chart is not clear.', "Si le graphique est clair, tout le monde le comprend. Les gens ne le comprennent pas, donc le graphique n'est pas clair."],
  ['If the package was delivered, it is on the porch. It is not on the porch, so it was never delivered.', "Si le colis a ete livre, il est sur le perron. Il n'est pas sur le perron, donc il n'a jamais ete livre."],
  ['If the playlist is premium, it skips ads. It skips ads, so it must be premium.', "Si la playlist est premium, elle saute les pubs. Elle saute les pubs, donc elle doit etre premium."],
  ['If the plant is healthy, the leaves are green. The leaves are not green, so the plant is not healthy.', "Si la plante est en bonne sante, les feuilles sont vertes. Les feuilles ne sont pas vertes, donc la plante n'est pas en bonne sante."],
  ['If the train is delayed, the platform is crowded. The platform is not crowded, so the train is on time.', "Si le train est en retard, le quai est bondé. Le quai n'est pas bondé, donc le train est a l'heure."],
  ['If the homework is finished, the desk is clean. The desk is messy, so the homework is not finished.', "Si les devoirs sont finis, le bureau est range. Le bureau est en bazar, donc les devoirs ne sont pas finis."],
  ['If the game is online, the server icon is blue. The icon is not blue, so the game is offline.', "Si le jeu est en ligne, l'icone du serveur est bleue. L'icone n'est pas bleue, donc le jeu est hors ligne."],
  ['If the soup is hot, steam rises. No steam is rising, so the soup is not hot.', "Si la soupe est chaude, de la vapeur monte. Il ne monte pas de vapeur, donc la soupe n'est pas chaude."],
  ['If the phone is charged, the battery icon is full. The icon is not full, so the phone is not charged.', "Si le telephone est charge, l'icone de batterie est pleine. L'icone n'est pas pleine, donc le telephone n'est pas charge."],
  ['If the store is busy, the line is long. The line is not long, so the store is not busy.', "Si le magasin est occupe, la file est longue. La file n'est pas longue, donc le magasin n'est pas occupe."],
  ['If the jacket is waterproof, rain rolls off. Rain is not rolling off, so the jacket is not waterproof.', "Si la veste est impermeable, la pluie glisse dessus. La pluie ne glisse pas, donc la veste n'est pas impermeable."],
  ['If the new shoes fit, they feel comfortable. They do not feel comfortable, so they do not fit.', "Si les nouvelles chaussures vont bien, elles sont confortables. Elles ne sont pas confortables, donc elles ne vont pas bien."],
  ['If the calendar is synced, the event appears. The event does not appear, so the calendar is not synced.', "Si le calendrier est synchronise, l'evenement apparait. L'evenement n'apparait pas, donc le calendrier n'est pas synchronise."],
  ['If the room is quiet, the fan is off. The fan is not off, so the room is not quiet.', "Si la piece est calme, le ventilateur est eteint. Le ventilateur n'est pas eteint, donc la piece n'est pas calme."],
  ['If the package is fragile, it has a sticker. There is no sticker, so it is not fragile.', "Si le colis est fragile, il a une etiquette. Il n'y a pas d'etiquette, donc il n'est pas fragile."],
  ['If the bread is fresh, it smells good. It does not smell good, so it is not fresh.', "Si le pain est frais, il sent bon. Il ne sent pas bon, donc il n'est pas frais."],
  ['If the ticket is valid, the scanner beeps green. It does not beep green, so the ticket is invalid.', "Si le billet est valide, le lecteur bippe en vert. Il ne bippe pas en vert, donc le billet n'est pas valide."],
  ['If the spreadsheet is shared, comments appear. No comments appear, so it is not shared.', "Si le tableur est partage, les commentaires apparaissent. Aucun commentaire n'apparait, donc il n'est pas partage."],
  ['If the road is icy, the car slides. The car is not sliding, so the road is not icy.', "Si la route est glacee, la voiture glisse. La voiture ne glisse pas, donc la route n'est pas glacee."],
  ['If the coffee shop is open, music plays. No music is playing, so the coffee shop is closed.', "Si le cafe est ouvert, de la musique joue. Il ne joue pas de musique, donc le cafe est ferme."],
  ['If the battery is low, the alert appears. The alert does not appear, so the battery is not low.', "Si la batterie est faible, l'alerte apparait. L'alerte n'apparait pas, donc la batterie n'est pas faible."],
  ['If the class is canceled, the teacher sends a text. No text was sent, so the class is not canceled.', "Si le cours est annule, le professeur envoie un message. Aucun message n'a ete envoye, donc le cours n'est pas annule."],
  ['If the jar is sealed, the lid is tight. The lid is not tight, so the jar is not sealed.', "Si le bocal est ferme, le couvercle est serre. Le couvercle n'est pas serre, donc le bocal n'est pas ferme."],
  ['If the route is correct, the map icon is blue. The icon is not blue, so the route is wrong.', "Si l'itineraire est correct, l'icone de la carte est bleue. L'icone n'est pas bleue, donc l'itineraire est faux."],
  ['If the concert is sold out, tickets are gone. Tickets are not gone, so the concert is not sold out.', "Si le concert est complet, les billets sont partis. Les billets ne sont pas partis, donc le concert n'est pas complet."],
  ['If the recipe is followed, the batter thickens. The batter did not thicken, so the recipe was not followed.', "Si la recette est suivie, la pate epaissit. La pate n'a pas epaissi, donc la recette n'a pas ete suivie."],
  ['If the alarm is armed, the light blinks red. It is not blinking red, so the alarm is not armed.', "Si l'alarme est activee, la lumiere clignote en rouge. Elle ne clignote pas en rouge, donc l'alarme n'est pas activee."],
  ['If the cereal is sugary, the label says so. The label does not say so, therefore it is not sugary.', "Si les cereales sont sucrees, l'etiquette le dit. L'etiquette ne le dit pas, donc elles ne sont pas sucrees."],
  ['If the app is updated, the version number changes. The version number did not change, so the app is not updated.', "Si l'application est mise a jour, le numero de version change. Le numero de version n'a pas change, donc l'application n'est pas a jour."],
  ['If the gym is crowded, the parking lot fills up. The parking lot is not full, so the gym is not crowded.', "Si la salle de sport est bondee, le parking se remplit. Le parking n'est pas plein, donc la salle de sport n'est pas bondee."],
  ['If the sweater is wool, it feels warm. It does not feel warm, so it is not wool.', "Si le pull est en laine, il est chaud. Il ne semble pas chaud, donc il n'est pas en laine."],
  ['If the parcel is insured, the sticker is visible. The sticker is not visible, so the parcel is not insured.', "Si le colis est assure, l'autocollant est visible. L'autocollant n'est pas visible, donc le colis n'est pas assure."],
  ['If the library is open, the lights are on. The lights are off, so the library is closed.', "Si la bibliotheque est ouverte, les lumieres sont allumees. Les lumieres sont eteintes, donc la bibliotheque est fermee."],
  ['If the kettle is boiling, steam comes out. No steam comes out, so the kettle is not boiling.', "Si la bouilloire bout, de la vapeur sort. Aucune vapeur ne sort, donc la bouilloire ne bout pas."],
  ['If the meeting started, the room is occupied. The room is not occupied, so the meeting did not start.', "Si la reunion a commence, la salle est occupee. La salle n'est pas occupee, donc la reunion n'a pas commence."],
  ['If the charger works, the phone screen lights up. The screen did not light up, so the charger does not work.', "Si le chargeur fonctionne, l'ecran du telephone s'allume. L'ecran ne s'est pas allume, donc le chargeur ne fonctionne pas."],
  ['If the shoes are new, they squeak. They do not squeak, so they are not new.', "Si les chaussures sont neuves, elles couinent. Elles ne couinent pas, donc elles ne sont pas neuves."],
  ['If the drawer is unlocked, it opens easily. It does not open easily, so it is not unlocked.', "Si le tiroir est deverrouille, il s'ouvre facilement. Il ne s'ouvre pas facilement, donc il n'est pas deverrouille."],
  ['If the cake is vegan, it has no eggs. It has eggs, so it is not vegan.', "Si le gateau est vegan, il n'a pas d'oeufs. Il a des oeufs, donc il n'est pas vegan."],
  ['If the message is urgent, the sender uses caps. The sender did not use caps, so the message is not urgent.', "Si le message est urgent, l'expediteur utilise des majuscules. Il n'a pas utilise de majuscules, donc le message n'est pas urgent."],
  ['If the scooter is charged, the display turns on. The display is off, so the scooter is not charged.', "Si la trottinette est chargee, l'ecran s'allume. L'ecran est eteint, donc la trottinette n'est pas chargee."],
  ['If the fish is fresh, it smells clean. It does not smell clean, so it is not fresh.', "Si le poisson est frais, il sent bon. Il ne sent pas bon, donc il n'est pas frais."],
  ['If the meeting is virtual, a link is sent. No link was sent, so the meeting is not virtual.', "Si la reunion est virtuelle, un lien est envoye. Aucun lien n'a ete envoye, donc la reunion n'est pas virtuelle."],
  ['If the note was approved, it gets a stamp. It has no stamp, so it was not approved.', "Si la note est approuvee, elle recoit un tampon. Elle n'a pas de tampon, donc elle n'a pas ete approuvee."],
  ['If the bus is late, the app shows a delay. The app shows a delay, so the bus is late.', "Si le bus est en retard, l'application affiche un retard. L'application affiche un retard, donc le bus est en retard."],
  ['If the lights are on, someone is home. Someone is home, so the lights are on.', "Si les lumieres sont allumees, quelqu'un est a la maison. Quelqu'un est a la maison, donc les lumieres sont allumees."],
  ['If the soup is spicy, your nose runs. Your nose runs, so the soup is spicy.', "Si la soupe est epicee, votre nez coule. Votre nez coule, donc la soupe est epicee."],
  ['If the shop is closed, the sign is flipped. The sign is flipped, so the shop is closed.', "Si la boutique est fermee, l'enseigne est retournee. L'enseigne est retournee, donc la boutique est fermee."],
  ['If the plant is watered, the soil is damp. The soil is damp, so the plant was watered.', "Si la plante est arrosee, la terre est humide. La terre est humide, donc la plante a ete arrosee."],
  ['If the game is online, friends appear in the lobby. Friends are in the lobby, so the game is online.', "Si le jeu est en ligne, des amis apparaissent dans le salon. Des amis sont dans le salon, donc le jeu est en ligne."],
  ['If the cake is frosted, the top looks glossy. The top looks glossy, so the cake is frosted.', "Si le gateau est glace, le dessus brille. Le dessus brille, donc le gateau est glace."],
  ['If the printer is jammed, the queue grows. The queue grows, so the printer is jammed.', "Si l'imprimante est bloquee, la file s'allonge. La file s'allonge, donc l'imprimante est bloquee."],
  ['If the room is reserved, there is a sign. There is a sign, so the room is reserved.', "Si la salle est reservee, il y a un panneau. Il y a un panneau, donc la salle est reservee."],
  ['If the coffee is cold, the mug sits untouched. The mug sits untouched, so the coffee is cold.', "Si le cafe est froid, la tasse reste intacte. La tasse reste intacte, donc le cafe est froid."],
  ['If the app is premium, it has no ads. This app has ads, so it is not premium.', "Si l'application est premium, elle n'a pas de pub. Cette application a de la pub, donc elle n'est pas premium."],
  ['If the soup is hot, steam rises. Steam is rising, so the soup is hot.', 'Si la soupe est chaude, de la vapeur monte. De la vapeur monte, donc la soupe est chaude.'],
  ['If the movie is funny, people laugh. People are laughing, so the movie is funny.', 'Si le film est drole, les gens rient. Les gens rient, donc le film est drole.'],
  ['If the room is reserved, a sign is on the door. A sign is on the door, so the room is reserved.', 'Si la salle est reservee, un panneau est sur la porte. Un panneau est sur la porte, donc la salle est reservee.'],
  ['If the phone is charged, the battery icon is full. The battery icon is full, so the phone is charged.', "Si le telephone est charge, l'icone de batterie est pleine. L'icone de batterie est pleine, donc le telephone est charge."],
  ['If the plan is approved, the manager signs it. The manager signed it, so the plan is approved.', 'Si le plan est approuve, le manager le signe. Le manager l a signe, donc le plan est approuve.'],
  ['If the bus is late, the app shows a delay. The app shows a delay, so the bus is late.', "Si le bus est en retard, l'application affiche un retard. L'application affiche un retard, donc le bus est en retard."],
  ['If the cake is baked, the center is warm. The center is warm, so the cake is baked.', 'Si le gateau est cuit, le milieu est chaud. Le milieu est chaud, donc le gateau est cuit.'],
  ['If the library is open, lights are on. Lights are on, so the library is open.', "Si la bibliotheque est ouverte, les lumieres sont allumees. Les lumieres sont allumees, donc la bibliotheque est ouverte."],
  ['If the store is busy, the line is long. The line is long, so the store is busy.', "Si le magasin est occupe, la file est longue. La file est longue, donc le magasin est occupe."],
  ['If the door is open, the cat wanders in. The cat is not wandering in, so the door is not open.', "Si la porte est ouverte, le chat entre. Le chat n'entre pas, donc la porte n'est pas ouverte."],
  ['If the phone is in airplane mode, messages do not arrive. Messages did not arrive, so the phone is in airplane mode.', "Si le telephone est en mode avion, les messages n'arrivent pas. Les messages ne sont pas arrives, donc le telephone est en mode avion."],
  ['If the oven is on, the kitchen gets warm. The kitchen did not get warm, so the oven is off.', "Si le four est allume, la cuisine devient chaude. La cuisine n'est pas devenue chaude, donc le four est eteint."],
  ['If the printer is working, paper comes out. Paper did not come out, so the printer is broken.', "Si l'imprimante fonctionne, du papier sort. Le papier n'est pas sorti, donc l'imprimante est en panne."],
  ['If the coffee is decaf, Sam sleeps well. Sam slept well, so the coffee was decaf.', "Si le cafe est decafeine, Sam dort bien. Sam a bien dormi, donc le cafe etait decafeine."],
  ['If the app is premium, it has no ads. It has no ads, so it is premium.', "Si l'application est premium, elle n'a pas de pub. Elle n'a pas de pub, donc elle est premium."],
  ['If the room is reserved, a sign is hanging up. A sign is hanging up, so the room is reserved.', "Si la salle est reservee, un panneau est accroche. Un panneau est accroche, donc la salle est reservee."],
  ['If the soup is spicy, the nose runs. The nose is running, so the soup is spicy.', "Si la soupe est epicee, le nez coule. Le nez coule, donc la soupe est epicee."],
  ['If the battery is low, the warning appears. The warning appeared, so the battery is low.', "Si la batterie est faible, l'avertissement apparait. L'avertissement est apparu, donc la batterie est faible."],
  ['If the bus is late, the app shows a delay. The app shows a delay, so the bus must be late.', "Si le bus est en retard, l'application affiche un retard. L'application affiche un retard, donc le bus doit etre en retard."],
  ['If the garden is watered, the soil is damp. The soil is damp, so the garden was watered.', "Si le jardin est arrose, la terre est humide. La terre est humide, donc le jardin a ete arrose."],
  ['If the movie is funny, people laugh. People are laughing, so the movie must be funny.', "Si le film est drole, les gens rient. Les gens rient, donc le film doit etre drole."],
  ['If the charger works, the phone lights up. The phone lights up, so the charger works.', "Si le chargeur fonctionne, le telephone s'allume. Le telephone s'allume, donc le chargeur fonctionne."],
  ['If the class is canceled, the teacher sends a text. A text was sent, so the class is canceled.', "Si le cours est annule, le professeur envoie un message. Un message a ete envoye, donc le cours est annule."],
  ['If the jar is sealed, the lid is tight. The lid is tight, so the jar is sealed.', "Si le bocal est ferme, le couvercle est serre. Le couvercle est serre, donc le bocal est ferme."],
  ['If the road is icy, the car slides. The car slides, so the road is icy.', "Si la route est glacee, la voiture glisse. La voiture glisse, donc la route est glacee."],
  ['If the coffee shop is open, music plays. Music is playing, so the coffee shop is open.', "Si le cafe est ouvert, de la musique joue. De la musique joue, donc le cafe est ouvert."],
  ['If the soccer match is on, fans cheer. Fans are cheering, so the match is on.', "Si le match de foot a lieu, les supporters applaudissent. Les supporters applaudissent, donc le match a lieu."],
  ['If the notebook is new, the pages are blank. The pages are blank, so the notebook is new.', "Si le carnet est neuf, les pages sont vierges. Les pages sont vierges, donc le carnet est neuf."],
  ['If the store is closed, the sign is flipped. The sign is flipped, so the store is closed.', "Si le magasin est ferme, l enseigne est retournee. L enseigne est retournee, donc le magasin est ferme."],
  ['If the raincoat is waterproof, water beads off it. Water beads off it, so the raincoat is waterproof.', "Si l impermeable est etanche, l eau perle dessus. L eau perle dessus, donc l impermeable est etanche."],
  ['If the lamp is on, the room is bright. The room is bright, so the lamp is on.', "Si la lampe est allumee, la piece est lumineuse. La piece est lumineuse, donc la lampe est allumee."],
  ['If the package is delivered, it sits on the porch. It sits on the porch, so the package is delivered.', "Si le colis est livre, il est sur le perron. Il est sur le perron, donc le colis est livre."],
  ['If the train is delayed, the platform is crowded. The platform is crowded, so the train is delayed.', "Si le train est en retard, le quai est bondé. Le quai est bondé, donc le train est en retard."],
  ['If the playlist is premium, it skips ads. It skips ads, so the playlist is premium.', "Si la playlist est premium, elle saute les pubs. Elle saute les pubs, donc la playlist est premium."],
  ['If the oven is preheated, the beep sounds. The beep sounds, so the oven is preheated.', "Si le four est prechauffe, le bip retentit. Le bip retentit, donc le four est prechauffe."],
  ['If the road is wet, puddles appear. Puddles appear, so the road is wet.', "Si la route est mouillee, des flaques apparaissent. Des flaques apparaissent, donc la route est mouillee."],
  ['If the notebook is shared, comments appear. Comments appear, so the notebook is shared.', "Si le carnet est partage, des commentaires apparaissent. Des commentaires apparaissent, donc le carnet est partage."],
];

const OPTIONS_EN = ['Denying the Antecedent', 'Affirming the Consequent', 'False Dilemma', 'Appeal to Authority'];
const OPTIONS_FR = ["Nier l'antécédent", 'Affirmer le conséquent', 'Fausse dichotomie', "Appel à l'autorité"];

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
      id: 33351 + i,
      level: 5,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? "Nier l'antécédent" : 'Denying the Antecedent',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? OPTIONS_FR : OPTIONS_EN, c),
      correct_option_index: c,
      explanation: fr
        ? "On suppose que l'absence d'un effet prouve l'absence de la cause, ce qui n'est pas logique."
        : 'The absence of the expected effect is treated as proof that the cause was absent, which does not follow logically.',
      detailedExplanationBeginner: fr
        ? "Pas d'effet visible ne veut pas dire pas de cause."
        : 'No visible effect does not automatically mean no cause.',
      detailedExplanationIntermediate: fr
        ? "Nier l'antécédent inverse mal un lien conditionnel: si A implique B, l'absence de B ne prouve pas toujours l'absence de A."
        : 'Denying the antecedent wrongly reverses a conditional: if A implies B, the absence of B does not always prove the absence of A.',
      detailedExplanationExpert: fr
        ? "Le raisonnement ignore les autres raisons possibles pour lesquelles l'effet attendu n'apparaît pas, comme une panne, un retard ou une observation incomplète."
        : 'The reasoning ignores other reasons the expected effect may not appear, such as failure, delay, or incomplete observation.',
      questionFormat: 'standard',
    };
  });
}

export const DENYING_THE_ANTECEDENT_EXPANSION_EN: Question[] = make();
export const DENYING_THE_ANTECEDENT_EXPANSION_FR: Question[] = make(true);

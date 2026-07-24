import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['A fundraiser gets more donations after showing a photo of one smiling child than after listing the full stats.', "Une collecte de fonds recueille plus de dons apres avoir montre la photo d'un enfant souriant qu'apres avoir affiche toutes les statistiques."],
  ['Maya is moved to act after hearing the story of one injured dog, even though the shelter has many animals.', "Maya se decide a agir apres l histoire d un seul chien blesse, meme si le refuge compte beaucoup d animaux."],
  ['Leo ignores the big policy report until he sees a video of one family affected by the problem.', "Leo ignore le grand rapport politique jusqu a ce qu il voie une video d une famille touchee par le probleme."],
  ['A charity ad shows one sick grandmother and suddenly the whole room wants to donate.', "Une pub caritative montre une grand-mere malade et toute la salle veut soudain donner."],
  ['Nina skips the spreadsheet and backs the cause after meeting one student who needs help.', "Nina met de cote le tableur et soutient la cause apres avoir rencontre un seul etudiant qui a besoin d aide."],
  ["Owen is more convinced by one firefighter's story than by a page of citywide safety data.", "Owen est plus convaincu par le temoignage d un pompier que par une page de donnees sur la securite de la ville."],
  ['A donation jar with a named photo on it gets more attention than a plain jar with totals.', "Un bocal de dons avec la photo et le nom d une personne attire plus l attention qu un bocal simple avec les montants."],
  ['Priya shares a petition after reading about one struggling mother instead of the full issue.', "Priya partage une petition apres avoir lu l histoire d une seule mere en difficulte plutot que le dossier complet."],
  ['Ben only cares about the problem after a friend points to one specific teen affected by it.', "Ben ne se soucie du probleme qu apres qu un ami lui montre un adolescent precis touche par ce probleme."],
  ["A poster with one puppy in a cage makes the room react more than the shelter's overall numbers.", "Une affiche avec un chiot en cage fait reagir la salle davantage que les chiffres globaux du refuge."],
  ["Tara changes her mind after hearing one tenant's eviction story, despite unchanged housing data.", "Tara change d avis apres avoir entendu l histoire d un locataire expulsé, meme si les donnees sur le logement n ont pas change."],
  ['Kai stops scrolling when he sees the face of one person affected by the drought.', "Kai arrete de faire defiler quand il voit le visage d une personne touchee par la secheresse."],
  ['A school vote swings after one student describes losing the library program.', "Un vote d ecole bascule apres qu un eleve raconte la perte du programme de bibliotheque."],
  ['Hana feels the budget cut is worse after hearing one teacher describe buying supplies herself.', "Hana a l impression que la coupe budgétaire est pire apres avoir entendu un professeur expliquer qu il achetait lui-meme les fournitures."],
  ['The crowd donates more when the host introduces one named patient than when they show the clinic totals.', "La foule donne plus quand l animateur presente un patient nomme que quand il affiche les chiffres de la clinique."],
  ['Milo backs the repair plan once he hears about one family with a broken heater.', "Milo soutient le plan de reparation une fois qu il entend parler d une famille avec un chauffage en panne."],
  ['Jade is upset by one crowded classroom video, even though the district report covers the whole district.', "Jade est bouleversee par une video d une salle de classe bondée, meme si le rapport du district couvre tout le district."],
  ['After hearing one veteran describe the road damage, Evan suddenly supports the road tax.', "Apres avoir entendu un veterant decrire les degats de la route, Evan soutient soudain la taxe routiere."],
  ['Lina ignores a long warning but reacts strongly when the warning is attached to one named child.', "Lina ignore un long avertissement mais reagit fortement quand l avertissement est rattache a un enfant nomme."],
  ['A kitchen campaign gets more clicks after showing one burned apartment than after posting general fire numbers.', "Une campagne sur la cuisine obtient plus de clics apres avoir montre un seul appartement brule qu apres avoir publie des chiffres generaux sur les incendies."],
  ['Theo agrees to volunteer after meeting one elderly neighbor who would benefit.', "Theo accepte de faire du benevolat apres avoir rencontre un seul voisin age qui en beneficierait."],
  ['A disaster update feels urgent only after the anchor interviews one survivor.', "Une mise a jour sur la catastrophe semble urgente seulement apres l interview d un survivant."],
  ['Mina gives money after hearing about one student with no winter coat.', "Mina donne de l argent apres avoir entendu parler d un seul etudiant sans manteau d hiver."],
  ['The principal changes the lunch policy after one child says the food makes him sick.', "La directrice change la politique de cantine apres qu un enfant dit que la nourriture le rend malade."],
  ['A town hall gets emotional when one resident explains losing a home in the flood.', "Une reunion publique devient emotive quand un resident explique avoir perdu sa maison dans l inondation."],
  ['Rita stops seeing the issue as abstract after hearing one nurse describe the shortage.', "Rita ne voit plus le probleme comme abstrait apres avoir entendu une infirmiere decrire la penurie."],
  ['Grant becomes more generous once he sees one named face on the donation page.', "Grant devient plus genereux des qu il voit un visage nomme sur la page de dons."],
  ['The campaign video works better when it centers on one child than when it uses charts.', "La video de campagne marche mieux quand elle se concentre sur un enfant que quand elle utilise des graphiques."],
  ["Pia is persuaded by one cashier's story about low pay even though the labor report is longer.", "Pia est persuadée par le temoignage d une caissiere sur le faible salaire meme si le rapport sur le travail est plus long."],
  ['A neighborhood meeting turns after one tenant describes mold in her apartment.', "Une reunion de quartier change de ton quand une locataire decrit de la moisissure dans son appartement."],
  ['Oli donates after seeing one photo of a tired rescue volunteer.', "Oli fait un don apres avoir vu une photo d une benevole de secours fatiguee."],
  ['Nora cares more about the policy after hearing one father talk about lost childcare.', "Nora se soucie davantage de la politique apres avoir entendu un pere parler d une garde d enfant perdue."],
  ['A petition rises after one teen says the rule ruined her weekend plans.', "Une petition progresse apres qu une adolescente dit que la regle a ruine ses plans du week-end."],
  ["Zara is swayed by one retiree's story of choosing between medicine and rent.", "Zara est influencée par l histoire d un retraite qui doit choisir entre ses medicaments et son loyer."],
  ['The audience claps louder after the speaker names one local family affected.', "Le public applaudit plus fort apres que l orateur nomme une famille locale touchee."],
  ['Cole backs the cleanup after hearing one fisherman describe the oily water.', "Cole soutient le nettoyage apres avoir entendu un pecheur decrire l eau huileuse."],
  ['Maya feels the rule is unfair after one student says it blocked her from class.', "Maya trouve la regle injuste apres qu une eleve dit qu elle l a empechee d aller en cours."],
  ["A donation email gets better results when it tells one child's story first.", "Un courriel de don obtient de meilleurs resultats quand il raconte d abord l histoire d un enfant."],
  ['Finn supports the shelter after meeting one dog that needs surgery.', "Finn soutient le refuge apres avoir rencontre un chien qui a besoin d une chirurgie."],
  ['Iris changes sides after one nurse describes the overtime problem in detail.', "Iris change de camp apres qu une infirmiere decrit en detail le probleme des heures supplémentaires."],
  ['A city council member reacts to one broken elevator instead of the maintenance report.', "Un conseiller municipal reagit a un seul ascenseur en panne plutot qu au rapport d entretien."],
  ['Sam wants action after seeing one flooded basement, not after hearing the full forecast.', "Sam veut agir apres avoir vu un sous-sol inonde, pas apres avoir entendu la prevision complete."],
  ['Juno donates once the campaign shares one named recipient instead of a summary table.', "Juno donne de l argent une fois que la campagne partage un beneficiaire nomme plutot qu un tableau resume."],
  ['A safety alert becomes real to the class only when one student says a helmet saved him.', "Une alerte de securite devient concrete pour la classe seulement quand un eleve dit qu un casque l a sauve."],
  ['Lara supports the fundraiser after hearing about one grandma waiting for surgery.', "Lara soutient la collecte apres avoir entendu parler d une grand-mere qui attend une operation."],
  ['Milo signs up after one volunteer shows him the faces behind the statistics.', "Milo s inscrit apres qu un benevole lui montre les visages derriere les statistiques."],
  ["A benefit dinner gets more tips when the host tells one patient's story.", "Un diner de charite recoit plus de pourboires quand l animateur raconte l histoire d un patient."],
  ['Tia is moved by one photo of a collapsed roof more than by the damage estimate.', "Tia est touchee par une photo d un toit effondre plus que par l estimation des degats."],
  ["Hugo agrees to help after hearing one family's story about losing heat in winter.", "Hugo accepte d aider apres avoir entendu l histoire d une famille qui a perdu le chauffage en hiver."],
  ['Maya donates faster after hearing one child describe sleeping in a cold room.', "Maya donne plus vite apres avoir entendu un enfant decrire qu il dort dans une piece froide."],
  ['Ben skips the charts but responds to one photo of a flooded apartment.', "Ben ignore les graphiques mais reagit a une photo d un appartement inonde."],
  ['Priya backs the shelter after meeting one dog with an injured leg.', "Priya soutient le refuge apres avoir rencontre un chien avec une patte blessee."],
  ['Leo cares more once he hears one tenant describe mold in her kitchen.', "Leo se soucie davantage une fois qu il entend une locataire decrire la moisissure dans sa cuisine."],
  ['Nina changes her vote after one nurse explains buying her own gloves.', "Nina change son vote apres qu une infirmiere explique acheter ses propres gants."],
  ['Owen gives after one veteran describes choosing between medicine and rent.', "Owen donne de l argent apres qu un veterant decrit devoir choisir entre medicaments et loyer."],
  ['Ava reacts to one named patient more than to the whole clinic report.', "Ava reagit davantage a un patient nomme qu au rapport complet de la clinique."],
  ['Rita stops scrolling after one grandparent says the bus stop is too far to reach.', "Rita arrete de faire defiler apres qu un grand-parent dit que l arret de bus est trop loin pour etre atteint."],
  ['Jules is persuaded by one teacher who has to buy school supplies with her own money.', "Jules est persuade par un professeur qui doit acheter les fournitures scolaires avec son propre argent."],
  ['Mina cares more after hearing one family describe losing power during the storm.', "Mina se soucie davantage apres avoir entendu une famille decrire la perte d electricite pendant la tempete."],
];

const OPTIONS_EN = ['Identifiable Victim Effect', 'Appeal to Emotion', 'False Balance', 'Availability Heuristic'];
const OPTIONS_FR = ['Effet de la victime identifiable', "Appel à l'émotion", 'Faux équilibre', 'Heuristique de disponibilité'];

function rotate(a: string[], i: number) {
  const r = a.slice(1);
  r.splice(i, 0, a[0]);
  return r;
}

function sub(i: number) {
  return i < 43 ? SubLevel.BEGINNER : i < 50 ? SubLevel.INTERMEDIATE : SubLevel.EXPERT;
}

function make(fr = false): Question[] {
  return SCENARIOS.map((s, i) => {
    const c = i % 4;
    return {
      id: 35201 + i,
      level: 4,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Effet de la victime identifiable' : 'Identifiable Victim Effect',
      difficulty: i < 43 ? 1 : i < 50 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? OPTIONS_FR : OPTIONS_EN, c),
      correct_option_index: c,
      explanation: fr
        ? 'Un visage ou une histoire precise attire plus d attention qu un grand ensemble de donnees.'
        : 'A single face or story draws more attention than a larger set of data.',
      detailedExplanationBeginner: fr
        ? 'Une personne precise touche plus que des chiffres abstraits.'
        : 'A specific person feels stronger than abstract numbers.',
      detailedExplanationIntermediate: fr
        ? "L'effet de la victime identifiable se produit quand une histoire individuelle ecrase des statistiques plus grandes mais moins visibles."
        : 'The identifiable victim effect happens when one individual story overwhelms larger but less visible statistics.',
      detailedExplanationExpert: fr
        ? "Ce biais d empathie oriente la decision vers ce qui est vivant, concret et narratif, meme si l evaluation correcte devrait peser l ensemble du probleme."
        : 'This empathy bias pushes decisions toward what is vivid, concrete, and narrative, even when the correct evaluation should weigh the whole problem.',
      questionFormat: 'standard',
    };
  });
}

export const IDENTIFIABLE_VICTIM_EFFECT_EXPANSION_EN: Question[] = make();
export const IDENTIFIABLE_VICTIM_EFFECT_EXPANSION_FR: Question[] = make(true);

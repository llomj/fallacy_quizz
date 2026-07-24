import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["After buying a loud blender, Sam keeps talking about the smoothie speed and ignores the noise and cleanup in the morning kitchen.", "Apres avoir achete un blender bruyant, Sam ne parle que de la vitesse pour les smoothies et ignore le bruit et le nettoyage de la cuisine le matin."],
  ["Nina picks the expensive gym membership and then focuses only on the free towels and smoothies at the front desk.", "Nina choisit l'abonnement de salle de sport cher puis ne retient que les serviettes et les smoothies gratuits a l'accueil."],
  ["Omar chooses the new laptop and later brags about the screen while forgetting the battery complaints.", "Omar choisit le nouvel ordinateur portable puis vante l'ecran en oubliant les plaintes sur la batterie."],
  ["Mia buys the apartment and keeps pointing to the sunny window while dismissing the long commute.", "Mia achete l'appartement et ne cesse de parler de la fenetre ensoleillee en minimisant le long trajet."],
  ["Theo orders the fancy coffee machine and only mentions the perfect foam, not the broken settings.", "Theo commande la machine a cafe chic et ne parle que de la mousse parfaite, pas des reglages defectueux."],
  ["Ava adopts the rescue dog and later says the barking is no big deal because it is loving.", "Ava adopte le chien de refuge puis dit que les aboiements ne sont pas graves parce qu'il est affectueux."],
  ["Leo chooses the budget car and keeps highlighting the fuel savings while ignoring the repair visits.", "Leo choisit la voiture economique et insiste sur les economies de carburant en oubliant les passages au garage."],
  ["Jade signs up for the language app and remembers only the fun streak badges, not the buggy lessons.", "Jade s'inscrit a l'application de langue et ne retient que les badges de serie, pas les lecons buguees."],
  ["Finn buys the ergonomic chair and talks about the back support while skipping the squeaky wheel.", "Finn achete la chaise ergonomique et parle du soutien du dos en passant sous silence la roue qui grince."],
  ["Rina chooses the tiny studio and keeps praising the view, even though storage is almost nonexistent.", "Rina choisit le studio minuscule et loue la vue, meme si le rangement manque presque totalement."],
  ["Milo picks the weekend trip and later remembers only the great museum, not the delayed train.", "Milo choisit le week-end de voyage et ne se souvient plus que du super musee, pas du train en retard."],
  ["Nora buys the new phone case and focuses on the pretty color while ignoring the weak drop protection.", "Nora achete la nouvelle coque de telephone et se concentre sur la belle couleur en ignorant la faible protection."],
  ["Kai chooses the meal kit and only talks about the tasty first dinner, not the wasted produce.", "Kai choisit le kit repas et ne parle que du premier diner savoureux, pas des produits gaspillés."],
  ["Priya picks the online course and keeps praising the certificate while overlooking the rushed videos.", "Priya choisit le cours en ligne et loue surtout le certificat en oubliant les videos baclees."],
  ["Ben goes with the cheap stroller and later says it is perfect because the cup holder is handy.", "Ben prend la poussette bon marche puis dit qu'elle est parfaite parce que le porte-gobelet est pratique."],
  ["Zoe chooses the streaming plan and only remembers the ad-free nights, not the missing shows.", "Zoe choisit l'abonnement de streaming et ne garde en tete que les soirees sans pub, pas les series manquantes."],
  ["Eli buys the kitchen knife set and keeps saying the handles feel great, ignoring the dull blade.", "Eli achete le jeu de couteaux de cuisine et dit que les manches sont agreables en ignorant la lame emoussee."],
  ["Mina picks the neighborhood bakery and later remembers only the perfect croissant, not the stale bread.", "Mina choisit la boulangerie du quartier et ne retient plus que le croissant parfait, pas le pain rassis."],
  ["Owen chooses the used bike and keeps talking about the light frame while forgetting the flat tire.", "Owen choisit le velo d'occasion et parle du cadre leger en oubliant le pneu a plat."],
  ["Lina buys the smart watch and only mentions the sleep score, not the app crashes.", "Lina achete la montre connectee et ne mentionne que le score de sommeil, pas les plantages de l'application."],
  ["Maya picks the school program and keeps highlighting the field trip, not the overloaded schedule.", "Maya choisit le programme scolaire et insiste sur la sortie de terrain en oubliant l'emploi du temps surcharge."],
  ["Theo chooses the paint color and only talks about the warm living room look, not the peeling later.", "Theo choisit la couleur de peinture et ne parle que du salon chaleureux, pas des ecaillements plus tard."],
  ["Aria buys the tent and later says it was worth it because the first night stayed dry.", "Aria achete la tente puis dit que cela valait le coup parce que la premiere nuit est restee au sec."],
  ["Noah picks the dog groomer and remembers only the shiny fur, not the long wait and high bill.", "Noah choisit le toiletteur pour chien et ne retient que le pelage brillant, pas l'attente et la facture elevee."],
  ["Tara chooses the dentist and focuses on how kind the staff was while ignoring the extra fillings.", "Tara choisit le dentiste et se concentre sur la gentillesse du personnel en oubliant les plombages supplementaires."],
  ["Jade buys the spice subscription and keeps talking about the one great mix, not the unused jars.", "Jade achete l'abonnement aux epices et ne parle que du seul melange genial, pas des pots inutilises."],
  ["Finn picks the work retreat and only tells friends about the nice hotel, not the awkward agenda.", "Finn choisit la retraite de travail et ne parle a ses amis que du bel hotel, pas du programme genant."],
  ["Nia chooses the public transit pass and later highlights the cheap price, not the crowded rides.", "Nia choisit l'abonnement de transport et souligne ensuite le prix bas, pas les trajets bondes."],
  ["Omar buys the fancy headphones and remembers only the sound quality, not the fragile hinge.", "Omar achete les ecouteurs haut de gamme et ne se souvient que de la qualite sonore, pas de la charniere fragile."],
  ["Ava picks the new mattress and keeps praising the first comfortable nap while ignoring the sagging edge.", "Ava choisit le nouveau matelas et loue surtout la premiere sieste confortable en ignorant le bord qui s'affaisse."],
  ["Leo chooses the car wash membership and later acts like it was genius because one wash looked spotless.", "Leo choisit l'abonnement au lavage auto et agit ensuite comme si c'etait genial parce qu'un lavage etait impeccable."],
  ["Mina buys the plant light and only mentions the healthy leaves, not the electric bill.", "Mina achete la lampe pour plantes et ne mentionne que les feuilles en bonne sante, pas la facture d'electricite."],
  ["Ben picks the online tutor and later says it was smart because one lesson clicked.", "Ben choisit le tuteur en ligne et dit ensuite que c'etait malin parce qu'une lecon a bien marche."],
  ["Rina chooses the insurance plan and only recalls the one claim that got approved quickly.", "Rina choisit la formule d'assurance et ne se rappelle que de la seule demande remboursee vite."],
  ["Theo buys the printer and focuses on the fast first page while ignoring the constant jams.", "Theo achete l'imprimante et se concentre sur la premiere page rapide en ignorant les bourrages constants."],
  ["Milo picks the coffee subscription and later keeps talking about the rich roast, not the late deliveries.", "Milo choisit l'abonnement cafe et ne parle plus que du cafe corsé, pas des livraisons en retard."],
  ["Priya chooses the moving company and only remembers the friendly mover, not the scratched table.", "Priya choisit l'entreprise de demenagement et ne garde en tete que le demenageur aimable, pas la table raye."],
  ["Zoe buys the blender bottle and praises the leak-free lid while ignoring the hard-to-clean seal.", "Zoe achete la bouteille mixeur et loue le couvercle etanche en ignorant le joint difficile a nettoyer."],
  ["Kai chooses the neighborhood barber and only mentions the sharp haircut, not the long wait.", "Kai choisit le coiffeur du quartier et ne mentionne que la coupe nette, pas l'attente longue."],
  ["Nora picks the tablet and keeps showing the bright display while forgetting the weak speakers.", "Nora choisit la tablette et montre sans cesse l'ecran lumineux en oubliant les haut-parleurs faibles."],
  ["Eli buys the reusable bottle and only remembers the nice handle, not the cap that leaks.", "Eli achete la bouteille reutilisable et ne se souvient que de la poignee pratique, pas du bouchon qui fuit."],
  ["Maya chooses the camping stove and keeps talking about the fast boil, not the starter that jams.", "Maya choisit le rechaud de camping et parle de l'ebullition rapide en oubliant l'allumeur qui bloque."],
  ["Aria picks the babysitter and later says it was a perfect choice because bedtime went smoothly once.", "Aria choisit la nounou et dit ensuite que c'etait un choix parfait parce que le coucher s'est bien passe une fois."],
  ["Owen buys the budget vacuum and focuses on the one clean hallway, not the clogs.", "Owen achete l'aspirateur bon marche et se concentre sur le seul couloir propre, pas sur les bouchages."],
  ["Lina chooses the meal delivery service and remembers only the tasty pasta, not the soggy salad.", "Lina choisit le service de repas livres et ne retient que les pates savoureuses, pas la salade molle."],
  ["Finn picks the travel pillow and keeps saying it was worth it because one nap felt better.", "Finn choisit l'oreiller de voyage et dit sans cesse que cela valait le coup parce qu'une sieste etait meilleure."],
  ["Jade buys the art class and only mentions the one painting she liked, not the boring lectures.", "Jade achete le cours d'art et ne mentionne que le seul tableau qu'elle a aime, pas les cours ennuyeux."],
  ["Noah chooses the solar lamp and later talks about the first bright evening while ignoring cloudy days.", "Noah choisit la lampe solaire et parle ensuite de la premiere soiree lumineuse en ignorant les jours nuageux."],
  ["Tara picks the new purse and keeps saying it was smart because the color matches everything.", "Tara choisit le nouveau sac et dit sans cesse que c'etait intelligent parce que la couleur va avec tout."],
  ["Mina chooses the wireless router and later praises the easy setup while forgetting the dead zones.", "Mina choisit le routeur sans fil et loue ensuite l'installation facile en oubliant les zones sans signal."],
  ["Maya says the blue mug was the right buy because it looks nicer now that she owns it.", "Maya dit que la tasse bleue etait le bon achat parce qu'elle parait plus jolie maintenant qu'elle la possede."],
  ["Theo says the expensive backpack was worth it because he is already using it every day.", "Theo dit que le sac a dos cher valait le coup parce qu'il l'utilise deja tous les jours."],
  ["Nina says the noisy blender was a smart choice because she can still make smoothies with it.", "Nina dit que le mixeur bruyant etait un choix intelligent parce qu'elle peut quand meme faire des smoothies avec."],
  ["Ben says the class ring was a great purchase because it reminds him of graduation.", "Ben dit que la bague de classe etait un excellent achat parce qu'elle lui rappelle la remise des diplomes."],
  ["Omar says the garden bench was perfect because it looks charming in the yard.", "Omar dit que le banc de jardin etait parfait parce qu'il a l'air charmant dans la cour."],
  ["Priya says the new planner was a genius choice because the cover matches her desk.", "Priya dit que le nouvel agenda etait un choix genial parce que la couverture va avec son bureau."],
  ["Leo says the guitar was obviously the best option because he has already learned one song on it.", "Leo dit que la guitare etait evidemment la meilleure option parce qu'il a deja appris une chanson dessus."],
  ["Rina says the travel mug was worth every cent because it fits in her bag.", "Rina dit que le gobelet de voyage valait chaque centime parce qu'il rentre dans son sac."],
  ["Jules says the couch was the perfect pick because it looks good in photos.", "Jules dit que le canape etait le choix parfait parce qu'il rend bien en photo."],
  ["Ava says the bright red shoes were the smartest buy because she gets compliments on them.", "Ava dit que les chaussures rouges etaient l'achat le plus intelligent parce qu'elle recoit des compliments dessus."]
];

const EN = ['Choice-Supportive Bias', 'Confirmation Bias', 'Sunk Cost Fallacy', 'Anchoring Bias'];
const FR = ['Biais de soutien au choix', 'Biais de confirmation', 'Sunk cost', 'Biais d\'ancrage'];

const rotate = (a: string[], i: number) => {
  const r = a.slice(1);
  r.splice(i, 0, a[0]);
  return r;
};

const sub = (i: number) => (i < 17 ? SubLevel.BEGINNER : i < 34 ? SubLevel.INTERMEDIATE : SubLevel.EXPERT);

function make(fr = false): Question[] {
  return SCENARIOS.map((s, i) => {
    const c = i % 4;
    return {
      id: 32651 + i,
      level: 4,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Biais de soutien au choix' : 'Choice-Supportive Bias',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? FR : EN, c),
      correct_option_index: c,
      explanation: fr
        ? "La personne defend le choix apres coup et met en avant ce qui le rendait attirant."
        : 'The person defends the choice after the fact and highlights what made it look attractive.',
      detailedExplanationBeginner: fr
        ? "On se persuade qu'un choix etait meilleur en ne gardant que ses bons cotes."
        : 'You persuade yourself a choice was better by keeping only its good sides.',
      detailedExplanationIntermediate: fr
        ? "Ce biais pousse a retenir les avantages du choix qu'on a fait et a minimiser ses inconvenients ou les alternatives."
        : 'This bias makes people keep the advantages of the choice they made and downplay the drawbacks or alternatives.',
      detailedExplanationExpert: fr
        ? "Le biais de soutien au choix apparait quand une decision deja prise est reinterpretee de facon favorable, souvent en filtrant les preuves pour reduire le regret et proteger l'image de soi."
        : 'Choice-supportive bias appears when a decision already made is reinterpreted in a favorable way, often by filtering evidence to reduce regret and protect self-image.',
      questionFormat: 'standard',
    };
  });
}

export const CHOICE_SUPPORTIVE_BIAS_EXPANSION_EN: Question[] = make();
export const CHOICE_SUPPORTIVE_BIAS_EXPANSION_FR: Question[] = make(true);

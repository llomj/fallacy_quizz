import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['A cereal box says "90% fat-free" instead of "10% fat," and Mia feels better about buying it for breakfast.', "Une boite de cereales dit « 90% sans gras » au lieu de « 10% de gras », et Mia se sent mieux en l'achetant pour le petit-dejeuner."],
  ['Theo chooses the surgery described as "98% survival" rather than "2% mortality" at the clinic.', "Theo choisit la chirurgie decrite comme « 98% de survie » plutot que « 2% de mortalite » a la clinique."],
  ['Ava reacts differently to "3 out of 10 fail" than to "7 out of 10 pass," even though it is the same data.', "Ava reagit differemment a « 3 sur 10 echouent » qu'a « 7 sur 10 reussissent », meme si ce sont les memes donnees."],
  ['Ben prefers the app that says "only 1 in 100 errors" over the one that says "1% error rate."', "Ben prefere l'application qui dit « seulement 1 erreur sur 100 » plutot que celle qui dit « 1% de taux d'erreur »."],
  ['Rina thinks a refund of "up to $50" is better than "average refund of $20," without checking details.', "Rina pense qu'un remboursement « jusqu'a 50 $ » est meilleur qu'un « remboursement moyen de 20 $ », sans verifier les details."],
  ['Owen is more excited by "small chance of rain" than by "20% chance of rain," though they match.', "Owen est plus excite par « faible chance de pluie » que par « 20% de chance de pluie », alors que c'est equivalent."],
  ['Priya likes "3 free weeks" more than "75% off the first month" even though the value is similar.', "Priya prefere « 3 semaines gratuites » a « 75% de reduction le premier mois » meme si la valeur est proche."],
  ['Leo trusts the doctor who says "most patients recover" over the one who says "a minority do not."', "Leo fait plus confiance au medecin qui dit « la plupart des patients guerissent » qu'a celui qui dit « une minorite ne guerit pas »."],
  ['Nina feels safer hearing "no deaths reported" than "0.1% fatality rate," despite the same info.', "Nina se sent plus en securite en entendant « aucun deces signale » qu'« un taux de mortalite de 0,1% », malgre la meme information."],
  ['Milo buys the phone described as "more than enough battery for a day" instead of "12-hour battery life."', "Milo achete le telephone decrit comme « largement assez de batterie pour une journee » plutot que « autonomie de 12 heures »."],
  ['Lina favors "one bad review" versus "99 good reviews" depending on the wording that is shown.', "Lina prefere « un mauvais avis » ou « 99 bons avis » selon la formulation affichee."],
  ['Kai responds differently to "one in five" than to "20%" when looking at the same survey.', "Kai reagit differemment a « un sur cinq » qu'a « 20% » en regardant le meme sondage."],
  ['Zoe prefers "saved 10 lives" to "failed to save 90" though the numbers describe the same outcome.', "Zoe prefere « 10 vies sauvées » a « 90 vies non sauvées » meme si les nombres decrivent le meme resultat."],
  ['Finn thinks a meal sounds healthier when it is described as "90 calories" rather than "10 grams of sugar."', "Finn trouve un repas plus sain lorsqu'il est decrit comme « 90 calories » plutot que « 10 grammes de sucre »."],
  ['Mina likes "no fee for the first year" more than "free for 12 months" even though the offer is identical.', "Mina prefere « sans frais la premiere annee » a « gratuit pendant 12 mois » meme si l'offre est identique."],
  ['Eli is more likely to pick "3% chance of delay" than "97% on time," even with equal odds.', "Eli est plus susceptible de choisir « 3% de risque de retard » que « 97% a l'heure », meme avec les memes probabilites."],
  ['Tara prefers "80% success rate" over "1 in 5 failure rate" in the same job pitch.', "Tara prefere « 80% de reussite » a « 1 echec sur 5 » dans la meme proposition de travail."],
  ['Noah buys the "limited edition" bottle because the label hides that it is the same drink.', "Noah achete la bouteille « edition limitee » parce que l'etiquette cache que c'est la meme boisson."],
  ["Rina changes her mind when \"low risk\" becomes \"high chance of survival\" in the doctor's explanation.", "Rina change d'avis quand « faible risque » devient « forte chance de survie » dans l'explication du medecin."],
  ['Jasper thinks "2 slices left" feels scarcer than "one-third of the pie left" even if they match.', "Jasper trouve « 2 parts restantes » plus rare que « un tiers de tarte restant » meme si c'est equivalent."],
  ['Maya prefers the policy called "protecting families" over the one called "restricting options," although they are the same.', "Maya prefere la politique appelee « proteger les familles » a celle appelee « restreindre les options », bien que ce soit la meme."],
  ['Hugo trusts "1 in 1,000" more when it is phrased as "99.9% safe."', "Hugo fait plus confiance a « 1 sur 1000 » quand c'est formule comme « 99,9% sur »."],
  ['Layla sees "4 out of 5 customers happy" as stronger than "20% dissatisfied" in the same review.', "Layla voit « 4 clients sur 5 satisfaits » comme plus fort que « 20% mecontents » dans le meme avis."],
  ['Clara likes "free delivery" more than "delivery included in price" even though they are equal.', "Clara aime plus « livraison gratuite » que « livraison incluse dans le prix » meme si c'est equivalent."],
  ['Dylan is swayed by "half full" rather than "half empty" when buying a drink.', "Dylan est influence par « a moitie plein » plutot que « a moitie vide » quand il achete une boisson."],
  ['Sofia responds better to "only 5 questions left" than "95 questions already answered."', "Sofia reagit mieux a « seulement 5 questions restantes » qu'a « 95 questions deja repondues »."],
  ['Reed thinks "rare" tastes better than "uncommon" when both mean the same thing.', "Reed pense que « rare » a meilleur gout que « peu commun » alors que les deux veulent dire la meme chose."],
  ['Emma is more impressed by "two-star risk" than "80% chance of success" for the same service.', "Emma est plus impressionnee par « risque de deux etoiles » que par « 80% de chance de succes » pour le meme service."],
  ['Ari prefers the ad that says "only 10 seats left" over "90 seats sold" for the same event.', "Ari prefere la pub qui dit « seulement 10 places restantes » a « 90 places vendues » pour le meme evenement."],
  ['Mina picks the insurance described as "protects most people" over "fails some people" without changing the facts.', "Mina choisit l'assurance decrite comme « protege la plupart des gens » plutot que « echoue pour certains » sans changer les faits."],
  ['Cole thinks "won 9 of 10" sounds better than "lost 1 of 10" in the same tournament.', "Cole pense que « gagne 9 sur 10 » sonne mieux que « perdu 1 sur 10 » dans le meme tournoi."],
  ['Tessa favors "safe for kids" over "adult ingredients only" when the product is the same.', "Tessa prefere « sans danger pour les enfants » a « ingredients reserve aux adultes » alors que le produit est le meme."],
  ['Jonah responds more to "save 30 minutes a day" than "waste 2 hours a week," though it is the same benefit.', "Jonah reagit davantage a « gagner 30 minutes par jour » qu'a « perdre 2 heures par semaine », bien que ce soit le meme avantage."],
  ['Kira chooses the shirt called "classic" instead of "old-fashioned" even when the cloth is identical.', "Kira choisit la chemise appelee « classique » au lieu de « vieillotte » meme si le tissu est identique."],
  ['Parker feels better about "extra 20 grams of protein" than "one-fifth more protein" on the same bar.', "Parker se sent mieux avec « 20 grammes de proteines en plus » qu'avec « un cinquieme de proteines en plus » sur la meme barre."],
  ['Nora trusts "approved by experts" more than "not rejected by experts" in the same brochure.', "Nora fait plus confiance a « approuve par des experts » qu'a « non rejete par des experts » dans la meme brochure."],
  ['Evan prefers "trimmed down" to "missing features" when the product is the same size.', "Evan prefere « allege » a « fonctions manquantes » lorsque le produit a la meme taille."],
  ['Stella likes "clean energy" better than "fuel not used" in the same pitch.', "Stella prefere « energie propre » a « carburant non utilise » dans la meme proposition."],
  ['Ray buys the toothpaste that says "protects 9 out of 10 users" instead of "fails only 1 out of 10."', "Ray achete le dentifrice qui dit « protege 9 utilisateurs sur 10 » au lieu de « echoue seulement pour 1 sur 10 »."],
  ['Jade thinks "less than 1% complaints" sounds better than "99% no complaints" for the same service.', "Jade pense que « moins de 1% de plaintes » sonne mieux que « 99% sans plaintes » pour le meme service."],
  ['Drew is drawn to "mostly accurate" rather than "sometimes wrong" even when they describe the same report.', "Drew est attire par « surtout exact » plutot que « parfois faux » meme si cela decrit le meme rapport."],
  ['Lara likes "almost always works" more than "fails rarely" for the same tool.', "Lara prefere « marche presque toujours » a « echoue rarement » pour le meme outil."],
  ['Oli picks the class offered as "just 3 hours" over "full half-day class," though time is equal.', "Oli choisit le cours presente comme « seulement 3 heures » plutot que « cours d'une demi-journee », alors que le temps est egal."],
  ['Mia sees "1 problem" as less alarming than "99% solved" even though both are the same state.', "Mia voit « 1 probleme » comme moins alarmant que « 99% resolu » meme si les deux decrivent le meme etat."],
  ['Felix thinks "good enough for most people" sounds better than "not perfect for some people" in the same review.', "Felix pense que « assez bon pour la plupart des gens » sonne mieux que « pas parfait pour certains » dans le meme avis."],
  ['Iris trusts "almost never late" more than "late only once in a while" for the same bus line.', "Iris fait plus confiance a « presque jamais en retard » qu'a « en retard seulement de temps en temps » pour la meme ligne de bus."],
  ['Grant says "more than enough evidence" feels stronger than "not much doubt left" in the same case.', "Grant dit que « largement assez de preuves » semble plus fort que « il reste peu de doutes » dans la meme affaire."],
  ['Juno prefers "good value" over "not overpriced" when the price is identical.', "Juno prefere « bon rapport qualite-prix » a « pas surestime » lorsque le prix est identique."],
  ['Pia is more comforted by "few side effects" than by "most people feel fine" in the same leaflet.', "Pia est plus rassuree par « peu d'effets secondaires » que par « la plupart des gens vont bien » dans la meme notice."],
  ['Maya says a bigger house would solve everything because she only imagines the extra room and not the cleaning.', "Maya pense qu'une maison plus grande reglerait tout parce qu'elle imagine seulement la piece en plus et pas le nettoyage."],
  ['Theo assumes moving to the city will make life perfect because he focuses on nightlife and forgets the rent.', "Theo suppose que déménager en ville rendrait la vie parfaite parce qu'il se concentre sur la vie nocturne et oublie le loyer."],
  ['Ava says a new phone will make every day better because she is fixated on the camera.', "Ava dit qu'un nouveau telephone rendra chaque jour meilleur parce qu'elle se fixe sur l'appareil photo."],
  ['Ben thinks one vacation spot would solve his stress because he keeps picturing the beach.', "Ben pense qu'un seul endroit de vacances reglerait son stress parce qu'il imagine sans cesse la plage."],
  ['Rina believes a pay raise would fix her whole job because she only focuses on salary.', "Rina croit qu'une augmentation reglerait tout son travail parce qu'elle se concentre seulement sur le salaire."],
  ['Owen says a fancy car would change his life because he is stuck on the parking lot image.', "Owen dit qu'une voiture chic changerait sa vie parce qu'il est bloque sur l'image du parking."],
  ['Nina thinks one new gadget would make her organized because she focuses on the desk setup.', "Nina pense qu'un seul nouveau gadget la rendrait organisee parce qu'elle se concentre sur l'installation du bureau."],
  ['Priya says a bigger TV would make movie nights magical because she only thinks about the screen size.', "Priya dit qu'une plus grande television rendrait les soirees film magiques parce qu'elle ne pense qu'a la taille de l'ecran."],
  ['Leo believes a better apartment would end all conflicts because he focuses on the kitchen.', "Leo croit qu'un meilleur appartement mettrait fin a tous les conflits parce qu'il se focalise sur la cuisine."],
  ['Milo says a longer lunch break would fix the day because he only imagines the extra time.', "Milo dit qu'une pause dejeuner plus longue reglerait la journee parce qu'il imagine seulement le temps en plus."],
  ['Rina prefers "saving 5 dollars" over "spending 25 dollars total" on the same purchase.', 'Rina prefere « economiser 5 dollars » a « depenser 25 dollars au total » pour le meme achat.'],
  ['Mia thinks a lunch menu is better when it is called "chef special" instead of "today\'s leftovers."', 'Mia pense qu un menu de midi est meilleur quand il s appelle « special du chef » plutot que « restes du jour ».'],
  ['Leo feels more optimistic hearing "90% approval" than "10% disapproval" about the same survey.', 'Leo se sent plus optimiste en entendant « 90% d approbation » qu « 10% de desapprobation » au sujet du meme sondage.'],
  ['Ava likes the gym plan more when it is described as "only 30 minutes" instead of "half an hour."', 'Ava aime davantage le programme de gym quand il est decrit comme « seulement 30 minutes » plutot que « une demi-heure ».'],
  ['Ben chooses the snack labeled "100 calories" over the one labeled "little sugar," though both are similar.', 'Ben choisit le snack etiquete « 100 calories » plutot que celui marque « peu sucre », bien que les deux se ressemblent.'],
  ['Nina is calmer hearing "one mild side effect" than "one symptom in ten people" for the same medicine.', 'Nina est plus calme en entendant « un effet secondaire leger » que « un symptome chez une personne sur dix » pour le meme medicament.'],
  ['Theo wants the ticket that says "only 2 seats left" because it sounds more urgent than "98 seats sold."', 'Theo veut le billet qui dit « seulement 2 places restantes » parce que cela semble plus urgent que « 98 places vendues ».'],
  ['Priya trusts the plan more when it is called "family protection" instead of "restriction on choices."', 'Priya fait plus confiance au plan quand il est appele « protection des familles » plutot que « restriction des choix ».'],
  ['Owen is less worried about "rare delays" than "1 in 50 late arrivals," even though those mean the same thing.', 'Owen est moins inquiet par « retards rares » que par « 1 arrivee en retard sur 50 », meme si cela veut dire la meme chose.'],
  ['Lina buys the phone package that promises "free texts" instead of "texts included in the monthly fee."', 'Lina achete le forfait telephone qui promet « messages gratuits » plutot que « messages inclus dans l abonnement mensuel ».'],
  ['Kai reacts more warmly to "3 out of 4 customers happy" than to "1 out of 4 not happy" in the same review.', 'Kai reagit plus chaleureusement a « 3 clients sur 4 satisfaits » qu a « 1 client sur 4 mecontent » dans le meme avis.'],
  ['Zoe thinks the trip sounds cheaper when it is framed as "less than a dollar a day" rather than "365 dollars a year."', 'Zoe trouve le voyage moins cher quand il est presente comme « moins d un dollar par jour » plutot que « 365 dollars par an ».'],
  ['Finn chooses the salad described as "lean and light" instead of "small portion with less dressing."', 'Finn choisit la salade decrite comme « legere et mince » plutot que « petite portion avec moins de sauce ».'],
  ['Mina prefers the report phrased as "success in most cases" over "failure in some cases" for the same result.', 'Mina prefere le rapport formule comme « succes dans la plupart des cas » plutot que « echec dans certains cas » pour le meme resultat.'],
  ['Eli is more interested in the sale that says "buy one, get one free" than "two for the price of one."', 'Eli est plus interesse par la vente qui dit « achetez-en un, recevez-en un gratuit » que par « deux pour le prix d un ».'],
  ['Tara feels better about a bill when it is called "membership" rather than "monthly charge."', 'Tara se sent mieux avec une facture quand elle est appelee « adhesion » plutot que « charge mensuelle ».'],
  ['Noah thinks the app is safer when it says "no personal data shared" instead of "it only keeps one contact list."', 'Noah pense que l application est plus sure quand elle dit « aucune donnee personnelle partagee » plutot que « elle garde seulement une liste de contacts ».'],
  ['Jasper likes "five minutes early" more than "ten minutes before the hour" for the same appointment time.', 'Jasper prefere « cinq minutes en avance » a « dix minutes avant l heure » pour le meme rendez-vous.'],
  ['Maya is more persuaded by "trims waste" than by "cuts unused extras" in the same budget plan.', 'Maya est plus persuadee par « reduit le gaspillage » que par « coupe les extras inutiles » dans le meme budget.'],
  ['Hugo sees the school trip as a bargain when it is framed as "two lunches included" rather than "20 dollars more."', 'Hugo voit la sortie scolaire comme une bonne affaire quand elle est presentee comme « deux dejeuners inclus » plutot que « 20 dollars de plus ».'],
  ['Layla prefers the meeting time described as "just after work" instead of "5:15 PM" because it sounds easier.', 'Layla prefere l heure de reunion decrite comme « juste apres le travail » plutot que « 17 h 15 » parce que cela semble plus simple.'],
  ['Clara feels better about the haircut when it is called "a fresh look" rather than "a short trim."', 'Clara se sent mieux avec la coupe quand elle est appelee « un nouveau look » plutot que « une petite coupe ».'],
  ['Dylan chooses the hotel ad that says "steps from the beach" over the one that says "200 meters away."', 'Dylan choisit la pub de l hotel qui dit « a quelques pas de la plage » plutot que « a 200 metres ».'],
  ['Sofia is more impressed by "guaranteed to help" than "helpful in many cases" for the same product.', 'Sofia est plus impressionnee par « garanti pour aider » que par « utile dans beaucoup de cas » pour le meme produit.'],
  ['Reed is less scared by "one minor issue" than by "99% problem-free" when reading the same software note.', 'Reed est moins effraye par « un petit probleme » que par « 99% sans probleme » en lisant la meme note logicielle.'],
  ['Emma prefers "protects your phone" over "reduces scratches" even if the case does the same thing.', 'Emma prefere « protege votre telephone » a « reduit les rayures » meme si l etui fait la meme chose.'],
  ['Ari trusts "almost perfect" more than "only one mistake" in the same teacher report.', 'Ari fait plus confiance a « presque parfait » qu a « seulement une erreur » dans le meme rapport de professeur.'],
  ['Mina likes "peace of mind" more than "lower chance of trouble" in the same insurance ad.', 'Mina prefere « tranquillite d esprit » a « risque plus faible de probleme » dans la meme pub d assurance.'],
  ['Cole thinks the new policy is friendlier when it says "extra flexibility" instead of "fewer rules."', 'Cole pense que la nouvelle politique est plus sympathique quand elle dit « plus de flexibilite » plutot que « moins de regles ».'],
  ['Tessa prefers the dessert described as "rich and creamy" over "high in fat" although it is the same dessert.', 'Tessa prefere le dessert decrit comme « riche et onctueux » plutot que « riche en gras » bien que ce soit le meme dessert.'],
  ['Jonah feels more positive about the exam when it is called "a chance to show what you know" rather than "a test."', 'Jonah se sent plus positif au sujet de l examen quand il est appele « une chance de montrer ce que vous savez » plutot que « un test ».'],
  ['Kira is more likely to accept the refund when it is framed as "we kept one fee" than when it is framed as "you lost one fee."', 'Kira est plus susceptible d accepter le remboursement quand il est presente comme « nous avons garde un frais » plutot que « vous avez perdu un frais ».'],
  ['Parker thinks the same commute is shorter when it is said to be "15 minutes" instead of "a quarter hour."', 'Parker pense que le meme trajet est plus court quand on dit « 15 minutes » plutot que « un quart d heure ».'],
  ['Nora is happier with "small monthly payments" than with "the same total cost spread out."', 'Nora est plus heureuse avec de « petits paiements mensuels » qu avec « le meme cout total etale ».'],
  ['Evan feels the team did better when the score is presented as "we only lost by 2" instead of "we came second."', 'Evan a l impression que l equipe a mieux joue quand le score est presente comme « nous avons perdu de 2 seulement » plutot que « nous avons fini deuxièmes ».'],
  ['Stella thinks the walk is safer when it is called "well-lit streets" instead of "roads with lamp posts."', 'Stella pense que la promenade est plus sure quand elle est appelee « rues bien eclairees » plutot que « routes avec des lampadaires ».'],
  ['Ray prefers the report that says "no major problems found" over "a few small issues remain" for the same checkup.', 'Ray prefere le rapport qui dit « aucun probleme majeur trouve » plutot que « quelques petits soucis restent » pour le meme controle.'],
  ['Jade is more convinced by "easy to use" than by "not complicated" when the app is unchanged.', 'Jade est plus convaincue par « facile a utiliser » que par « pas complique » quand l application n a pas change.'],
  ['Drew likes the invitation that says "join the fun" better than "attend the event" even though they mean the same.', 'Drew aime mieux l invitation qui dit « venez vous amuser » plutot que « assistez a l evenement » meme si cela veut dire la meme chose.'],
  ['Lara thinks the new thermostat is better when it is called "smart comfort" rather than "automatic temperature control."', 'Lara pense que le nouveau thermostat est meilleur quand il s appelle « confort intelligent » plutot que « commande automatique de la temperature ».'],
  ['Oli buys the drink that says "refreshing" instead of "cold" because the first word sounds better.', 'Oli achete la boisson qui dit « rafraichissante » au lieu de « froide » parce que le premier mot sonne mieux.'],
];

const OPTIONS_EN = ['Framing Effect', 'Anchoring Bias', 'False Balance', 'Appeal to Popularity'];
const OPTIONS_FR = ['Effet de cadrage', "Biais d'ancrage", 'Faux équilibre', 'Appel à la popularité'];

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
      id: 34801 + i,
      level: 6,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Effet de cadrage' : 'Framing Effect',
      difficulty: i < 43 ? 1 : i < 50 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? OPTIONS_FR : OPTIONS_EN, c),
      correct_option_index: c,
      explanation: fr
        ? "La présentation des mêmes faits influence le choix, même si les données de fond ne changent pas."
        : 'The presentation of the same facts changes the choice even though the underlying data do not.',
      detailedExplanationBeginner: fr
        ? "La façon de dire change la réaction."
        : 'The wording changes the reaction.',
      detailedExplanationIntermediate: fr
        ? "L'effet de cadrage survient quand une information identique semble différente selon son emballage verbal."
        : 'The framing effect happens when identical information seems different because of its verbal packaging.',
      detailedExplanationExpert: fr
        ? "Ce biais de décision repose sur des variations de cadre, de valence ou d'accent qui modifient la préférence sans modifier la substance propositionnelle."
        : 'This decision bias depends on shifts in frame, valence, or emphasis that alter preference without changing propositional substance.',
      questionFormat: 'standard',
    };
  });
}

export const FRAMING_EFFECT_EXPANSION_EN: Question[] = make();
export const FRAMING_EFFECT_EXPANSION_FR: Question[] = make(true);

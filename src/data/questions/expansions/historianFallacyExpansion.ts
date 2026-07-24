import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya says people in the 1800s were irresponsible because they did not use smartphones to plan their day.', 'Maya dit que les gens du 19e siecle etaient irresponsables parce qu ils n utilisaient pas de telephone intelligent pour organiser leur journee.'],
  ['Leo thinks an old village was badly managed because it had no traffic lights.', 'Leo pense qu un vieux village etait mal gere parce qu il n avait pas de feux de circulation.'],
  ['Nina says the ancient market was obviously unfair because nobody accepted card payments.', 'Nina dit que l ancien marche etait evidemment injuste parce que personne n acceptait les paiements par carte.'],
  ['Owen says a 1950s school was terrible because it did not have laptop chargers.', 'Owen dit qu une ecole des annees 1950 etait terrible parce qu elle n avait pas de chargeurs d ordinateur portable.'],
  ['Priya calls a medieval doctor useless because they did not follow modern lab procedures.', 'Priya traite un medecin medieval d inutile parce qu il ne suivait pas les procedures modernes de laboratoire.'],
  ['Ben says an old ship captain was reckless because he did not use weather radar.', 'Ben dit qu un vieux capitaine de navire etait temeraire parce qu il n utilisait pas de radar meteo.'],
  ['Tara says a town council from 1700 was incompetent because it did not have a website.', 'Tara dit qu un conseil municipal de 1700 etait incompetent parce qu il n avait pas de site web.'],
  ['Kai says a war general from centuries ago was clueless because he did not know about modern medicine.', 'Kai dit qu un general d il y a des siecles etait perdu parce qu il ne connaissait pas la medecine moderne.'],
  ['Jules says a family farm was badly run because it used no automated sprinklers.', 'Jules dit qu une ferme familiale etait mal geree parce qu elle n utilisait pas d arroseurs automatiques.'],
  ['Ava says a 19th-century teacher was unfair because homework was not submitted through an app.', 'Ava dit qu un professeur du 19e siecle etait injuste parce que les devoirs n etaient pas rendus via une application.'],
  ['Noah says old sailors were careless because they did not have GPS on board.', 'Noah dit que les anciens marins etaient negligents parce qu ils n avaient pas de GPS a bord.'],
  ['Mina says a 1920s shop was bad because customers could not read online reviews.', 'Mina dit qu une boutique des annees 1920 etait mauvaise parce que les clients ne pouvaient pas lire d avis en ligne.'],
  ['Eli says a pioneer settlement was poorly organized because it had no central heating.', 'Eli dit qu une colonie pionniere etait mal organisee parce qu elle n avait pas de chauffage central.'],
  ['Rina says an old train station was embarrassing because it had no digital departure board.', 'Rina dit qu une vieille gare etait embarrassante parce qu elle n avait pas de panneau de depart numerique.'],
  ['Hugo says a 1600s cookbook was ridiculous because it did not mention calorie counts.', 'Hugo dit qu un livre de cuisine du 17e siecle etait ridicule parce qu il ne mentionnait pas les calories.'],
  ['Lina says the first mobile phones were awful because they could not stream video.', 'Lina dit que les premiers telephones portables etaient nuls parce qu ils ne pouvaient pas diffuser de video.'],
  ['Grant says an old school exam was unfair because it was not graded by software.', 'Grant dit qu un ancien examen scolaire etait injuste parce qu il n etait pas corrige par logiciel.'],
  ['Zoe says a handwritten letter from the past was pointless because it was not instant messaging.', 'Zoe dit qu une lettre manuscrite du passe etait inutile parce que ce n etait pas de la messagerie instantanee.'],
  ['Milo says a 1930s hospital was bad because it did not use modern imaging machines.', 'Milo dit qu un hopital des annees 1930 etait mauvais parce qu il n utilisait pas les machines d imagerie modernes.'],
  ['Theo says old maps were misleading because they were not drawn with satellite data.', 'Theo dit que les anciennes cartes etaient trompeuses parce qu elles n etaient pas dessinees avec des donnees satellites.'],
  ['Pia says a vintage cafe was poorly run because it had no app for ordering food.', 'Pia dit qu un cafe ancien etait mal gere parce qu il n avait pas d application pour commander.'],
  ['Finn says a farmer from 1850 was uninformed because he had not read scientific journals online.', 'Finn dit qu un agriculteur de 1850 etait mal informe parce qu il n avait pas lu de revues scientifiques en ligne.'],
  ['Maya says an old town festival was primitive because it did not have sound systems.', 'Maya dit qu une fete de village ancienne etait primitive parce qu elle n avait pas de systeme de son.'],
  ['Sam says ancient builders were careless because they did not use power tools.', 'Sam dit que les anciens constructeurs etaient negligents parce qu ils n utilisaient pas d outils electriques.'],
  ['Juno says a 1900s school bus route was stupid because it was not optimized by software.', 'Juno dit qu une route de bus scolaire de 1900 etait stupide parce qu elle n etait pas optimisee par logiciel.'],
  ['Iris says a medieval village market was bad because it had no plastic packaging.', 'Iris dit qu un marche de village medieval etait mauvais parce qu il n avait pas d emballage plastique.'],
  ['Cole says an old newspaper was useless because it was not searchable online.', 'Cole dit qu un vieux journal etait inutile parce qu il n etait pas consultable en ligne.'],
  ['Nora says a 1700s schoolhouse was miserable because it lacked air conditioning.', 'Nora dit qu une ecole du 18e siecle etait miserable parce qu elle n avait pas de climatisation.'],
  ['Ari says a ship from the age of sail was unsafe because it did not have modern life jackets.', 'Ari dit qu un navire de l age de la voile etait dangereux parce qu il n avait pas de gilets de sauvetage modernes.'],
  ['Rita says an old library was poorly designed because it did not offer e-book downloads.', 'Rita dit qu une vieille bibliotheque etait mal con cue parce qu elle ne proposait pas de telechargement de livres numeriques.'],
  ['Tia says a 1920s bakery was bad because it had no gluten-free section.', 'Tia dit qu une boulangerie des annees 1920 etait mauvaise parce qu elle n avait pas de rayon sans gluten.'],
  ['Oli says old city streets were failures because they were not made for scooters.', 'Oli dit que les anciennes rues de la ville etaient des echecs parce qu elles n etaient pas faites pour les trottinettes.'],
  ['Lara says a village healer was useless because they did not run blood tests.', 'Lara dit qu un guerisseur de village etait inutile parce qu il ne faisait pas d analyses de sang.'],
  ['Ben says an old theater was terrible because it had no subtitles on screen.', 'Ben dit qu un vieux theatre etait terrible parce qu il n y avait pas de sous-titres a l ecran.'],
  ['Mina says the early internet was obviously bad because it was slow by today s standards.', 'Mina dit que les debuts d internet etaient evidemment mauvais parce que c etait lent selon les standards actuels.'],
  ['Drew says a historic inn was unacceptable because the bathrooms were not private.', 'Drew dit qu une auberge historique etait inacceptable parce que les salles de bain n etaient pas privees.'],
  ['Jade says an old farm was disorganized because it did not use spreadsheet software.', 'Jade dit qu une vieille ferme etait desorganisee parce qu elle n utilisait pas de tableur.'],
  ['Owen says an ancient city was unhealthy because it lacked modern disinfectant.', 'Owen dit qu une cite ancienne etait malsaine parce qu elle ne disposait pas de desinfectant moderne.'],
  ['Mila says an old school lesson was pointless because it did not include videos.', 'Mila dit qu une ancienne lecon etait sans interet parce qu elle n incluait pas de videos.'],
  ['Evan says a 1500s market was chaotic because it had no queuing app.', 'Evan dit qu un marche du 16e siecle etait chaotique parce qu il n avait pas d application de file d attente.'],
  ['Kira says a historical letter was unreliable because it was not verified by fact-checkers.', 'Kira dit qu une lettre historique etait peu fiable parce qu elle n etait pas verifiee par des fact-checkers.'],
  ['Grant says an old village council was incompetent because it did not send email reminders.', 'Grant dit qu un vieux conseil de village etait incompetent parce qu il n envoyait pas de rappels par courriel.'],
  ['Zara says a 1800s shop was unfair because it did not have return labels printed for free.', 'Zara dit qu une boutique du 19e siecle etait injuste parce qu elle n avait pas d etiquette de retour imprimee gratuitement.'],
  ['Parker says old sailors were foolish because they could not consult a route app.', 'Parker dit que les anciens marins etaient stupides parce qu ils ne pouvaient pas consulter une application d itineraire.'],
  ['Hana says a medieval classroom was a disaster because it had no interactive whiteboard.', 'Hana dit qu une salle de classe medievale etait un desastre parce qu elle n avait pas de tableau interactif.'],
  ['Leo says a historic inn was poorly run because the pillows were not memory foam.', 'Leo dit qu une auberge historique etait mal geree parce que les oreillers n etaient pas en mousse a memoire de forme.'],
  ['Maya says an old harbor was unsafe because it did not have modern warning sirens.', 'Maya dit qu un vieux port etait dangereux parce qu il n avait pas de sirenes d alerte modernes.'],
  ['Nina says an old newspaper office was inefficient because it did not use cloud storage.', 'Nina dit qu une ancienne redaction etait inefficace parce qu elle n utilisait pas le stockage cloud.'],
  ['Owen says a 1700s classroom was bad because students had no tablets.', 'Owen dit qu une classe du 18e siecle etait mauvaise parce que les eleves n avaient pas de tablettes.'],
  ['Maya says a 1700s town meeting was badly run because it had no livestream chat.', 'Maya dit qu une reunion de ville de 1700 etait mal geree parce qu elle n avait pas de chat en direct.'],
  ['Ben says an old bakery was unfair because it did not accept contactless payment.', 'Ben dit qu une vieille boulangerie etait injuste parce qu elle n acceptait pas le paiement sans contact.'],
  ['Priya says a historic library was useless because it did not have searchable PDFs.', 'Priya dit qu une bibliotheque historique etait inutile parce qu elle n avait pas de PDF consultables.'],
  ['Noah says a medieval market was bad because shoppers could not compare prices on phones.', 'Noah dit qu un marche medieval etait mauvais parce que les acheteurs ne pouvaient pas comparer les prix sur telephone.'],
  ['Lina says an old village school was backward because it had no smartboard.', 'Lina dit qu une ancienne ecole de village etait arrieree parce qu elle n avait pas de tableau interactif.'],
  ['Theo says a historical inn was badly designed because it lacked USB chargers.', 'Theo dit qu une auberge historique etait mal con cue parce qu elle manquait de chargeurs USB.'],
  ['Ava says an old ship was unsafe because it had no weather app alerts.', 'Ava dit qu un vieux navire etait dangereux parce qu il n avait pas d alertes d application meteo.'],
  ['Omar says a 1900s classroom was terrible because students could not submit homework online.', 'Omar dit qu une salle de classe de 1900 etait terrible parce que les eleves ne pouvaient pas rendre leurs devoirs en ligne.'],
  ['Rosa says a vintage cafe was bad because it had no app for reviews.', 'Rosa dit qu un cafe vintage etait mauvais parce qu il n avait pas d application pour les avis.'],
  ['Jules says an old town council was useless because it did not post updates on social media.', 'Jules dit qu un vieux conseil municipal etait inutile parce qu il ne publiait pas de mises a jour sur les reseaux sociaux.'],
  ['Maya says a 1600s tailor was incompetent because they did not use a sewing machine.', 'Maya dit qu un tailleur du 17e siecle etait incompetent parce qu il n utilisait pas de machine a coudre.'],
  ['Leo says a historic inn was a failure because guests could not scan a QR code menu.', 'Leo dit qu une auberge historique etait un echec parce que les clients ne pouvaient pas scanner un menu QR.'],
  ['Nina says an old harbor master was careless because he did not send text alerts.', 'Nina dit qu un vieux capitaine de port etait negligent parce qu il n envoyait pas d alertes par SMS.'],
  ['Owen says a 1800s classroom was useless because students could not search answers online.', 'Owen dit qu une classe du 19e siecle etait inutile parce que les eleves ne pouvaient pas chercher les reponses en ligne.'],
  ['Priya says a medieval mill was badly designed because it had no electric backup.', 'Priya dit qu un moulin medieval etait mal con cu parce qu il n avait pas de secours electrique.'],
  ['Ben says a 1700s town clerk was bad at their job because they did not use templates.', 'Ben dit qu un greffier du 18e siecle faisait mal son travail parce qu il n utilisait pas de modeles.'],
  ['Tara says a vintage cinema was pathetic because it did not have recliner seats.', 'Tara dit qu un cinema ancien etait pathétique parce qu il n avait pas de fauteuils inclinables.'],
  ['Kai says an old school principal was clueless because he never checked an app dashboard.', 'Kai dit qu un directeur d ecole ancien etait perdu parce qu il ne consultait jamais un tableau de bord d application.'],
  ['Jules says a 1900s nurse was irresponsible because she did not follow digital charts.', 'Jules dit qu une infirmiere de 1900 etait irresponsable parce qu elle ne suivait pas de dossiers numeriques.'],
  ['Ava says a historic bakery was disappointing because it did not sell overnight delivery.', 'Ava dit qu une boulangerie historique etait decevante parce qu elle ne proposait pas de livraison de nuit.'],
  ['Noah says a 1500s village council was absurd because it had no email thread.', 'Noah dit qu un conseil de village du 16e siecle etait absurde parce qu il n avait pas de fil de courriels.'],
  ['Mina says an old ship cook was useless because he did not measure ingredients with a smart scale.', 'Mina dit qu un cuisinier de navire ancien etait inutile parce qu il ne mesurait pas les ingredients avec une balance intelligente.'],
  ['Eli says a historic library was poorly planned because there were no self-checkout kiosks.', 'Eli dit qu une bibliotheque historique etait mal planifiee parce qu il n y avait pas de bornes de pret autonome.'],
  ['Rina says an old shopkeeper was unfair because he did not offer same-day shipping.', 'Rina dit qu un vieux marchand etait injuste parce qu il n offrait pas la livraison le jour meme.'],
  ['Hugo says a medieval blacksmith was inefficient because he had no laser cutter.', 'Hugo dit qu un forgeron medieval etait inefficace parce qu il n avait pas de decoupeuse laser.'],
  ['Lina says an ancient road was badly built because cars could not fit three lanes across.', 'Lina dit qu une route ancienne etait mal construite parce que les voitures ne pouvaient pas tenir sur trois voies.'],
  ['Grant says a 19th-century mayor was incompetent because he never posted a weekly update video.', 'Grant dit qu un maire du 19e siecle etait incompetent parce qu il ne publiait jamais de video de mise a jour hebdomadaire.'],
  ['Zoe says a vintage train conductor was unsafe because there were no onboard charging ports.', 'Zoe dit qu un controleur de train ancien etait dangereux parce qu il n y avait pas de ports de recharge a bord.'],
  ['Milo says an old newspaper editor was bad because she could not schedule posts automatically.', 'Milo dit qu une redactrice de journal ancienne etait mauvaise parce qu elle ne pouvait pas programmer les publications automatiquement.'],
  ['Theo says a historic farmhouse was miserable because the kitchen had no smart speaker.', 'Theo dit qu une ferme historique etait miserable parce que la cuisine n avait pas d enceinte connectee.'],
  ['Pia says a 1600s city market was disorganized because vendors did not use barcode scanners.', 'Pia dit qu un marche de ville du 17e siecle etait desorganise parce que les vendeurs n utilisaient pas de lecteurs de codes-barres.'],
  ['Finn says an old sea captain was foolish because he could not check storm alerts on a phone.', 'Finn dit qu un vieux capitaine de mer etait fou parce qu il ne pouvait pas verifier les alertes de tempete sur un telephone.'],
  ['Maya says a 1700s schoolhouse was embarrassing because students did not have individual laptops.', 'Maya dit qu une ecole du 18e siecle etait embarrassante parce que les eleves n avaient pas d ordinateurs portables individuels.'],
  ['Sam says a historic village doctor was bad because he could not book appointments online.', 'Sam dit qu un medecin de village historique etait mauvais parce qu il ne pouvait pas reserver de rendez-vous en ligne.'],
  ['Juno says a 1800s ferry was unsafe because it had no passenger app notifications.', 'Juno dit qu un ferry du 19e siecle etait dangereux parce qu il n avait pas de notifications d application pour les passagers.'],
  ['Iris says an old printing press was useless because it did not output color logos.', 'Iris dit qu une vieille presse a imprimer etait inutile parce qu elle ne sortait pas de logos en couleur.'],
  ['Cole says a medieval castle kitchen was awful because meals were not tracked in software.', 'Cole dit qu une cuisine de chateau medieval etait terrible parce que les repas n etaient pas suivis par logiciel.'],
  ['Nora says a historic school nurse was careless because there was no digital thermometer.', 'Nora dit qu une infirmiere scolaire historique etait negligente parce qu il n y avait pas de thermometre numerique.'],
  ['Ari says an old village market was unacceptable because nobody accepted mobile wallets.', 'Ari dit qu un marche de village ancien etait inacceptable parce que personne n acceptait les portefeuilles mobiles.'],
  ['Rita says a 1900s factory was badly managed because the workers had no productivity app.', 'Rita dit qu une usine de 1900 etait mal geree parce que les ouvriers n avaient pas d application de productivite.'],
  ['Maya says a 1500s apothecary was useless because it did not have pharmacy software.', 'Maya dit qu un apothicaire du 16e siecle etait inutile parce qu il n avait pas de logiciel de pharmacie.'],
  ['Leo says an old village school was unfair because children could not submit homework by email.', 'Leo dit qu une ancienne ecole de village etait injuste parce que les enfants ne pouvaient pas rendre leurs devoirs par courriel.'],
  ['Nina says a historic marketplace was chaotic because sellers did not use digital invoices.', 'Nina dit qu un marche historique etait chaotique parce que les vendeurs n utilisaient pas de factures numeriques.'],
  ['Owen says a medieval kitchen was bad because it had no recipe app.', 'Owen dit qu une cuisine medievale etait mauvaise parce qu elle n avait pas d application de recettes.'],
  ['Priya says a 1700s schoolmaster was incompetent because he could not use presentation slides.', 'Priya dit qu un maitre d ecole du 18e siecle etait incompetent parce qu il ne pouvait pas utiliser de diaporamas.'],
  ['Ben says an old harbor office was disorganized because there was no shared cloud drive.', 'Ben dit qu un bureau de port ancien etait desorganise parce qu il n y avait pas de dossier cloud partage.'],
  ['Tara says a historical inn was terrible because guests had no streaming television.', 'Tara dit qu une auberge historique etait terrible parce que les clients n avaient pas de television en streaming.'],
  ['Kai says a village council from 1800 was clueless because it did not make digital surveys.', 'Kai dit qu un conseil de village de 1800 etait perdu parce qu il ne faisait pas de sondages numeriques.'],
  ['Jules says an old fisherman was reckless because he did not use a GPS watch.', 'Jules dit qu un ancien pecheur etait temeraire parce qu il n utilisait pas de montre GPS.'],
  ['Ava says a 1900s classroom was awful because students could not use online flashcards.', 'Ava dit qu une classe de 1900 etait horrible parce que les eleves ne pouvaient pas utiliser de cartes memoires en ligne.'],
  ['Noah says a historic post office was bad because it did not offer package tracking apps.', 'Noah dit qu un vieux bureau de poste etait mauvais parce qu il n offrait pas d application de suivi des colis.'],
];

const OPTIONS_EN = ["Historian's Fallacy", 'Hindsight Bias', 'False Attribution', 'Appeal to Tradition'];
const OPTIONS_FR = ["Sophisme de l historien", 'Biais retrospectif', 'Fausse attribution', 'Appel a la tradition'];

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

function createQuestions(language: 'en' | 'fr'): Question[] {
  return SCENARIOS.map(([english, french], index) => {
    const correctIndex = index % 4;
    const isFrench = language === 'fr';
    return {
      id: 38301 + index,
      level: 2,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Sophisme de l historien' : "Historian's Fallacy",
      difficulty: index < 43 ? 1 : index < 50 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais ou sophisme est montre ici ?' : 'Which bias or fallacy is shown here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? "On juge le passe avec les attentes, les outils ou les valeurs d aujourd hui au lieu du contexte de l epoque."
        : 'The past is judged with today s expectations, tools, or values instead of the context of the time.',
      detailedExplanationBeginner: isFrench
        ? 'Le passe n etait pas organise comme aujourd hui.'
        : 'The past was not organized like today.',
      detailedExplanationIntermediate: isFrench
        ? "Le sophisme de l historien consiste a reprocher au passe de ne pas fonctionner avec des standards qui n existaient pas encore."
        : 'The historian s fallacy blames the past for not working with standards that did not exist yet.',
      detailedExplanationExpert: isFrench
        ? "Ce biais projette des categories modernes sur des personnes, des institutions ou des problemes anciens, ce qui rend le contexte historique invisible et transforme l histoire en jugement anachronique."
        : 'This bias projects modern categories onto older people, institutions, or problems, making historical context invisible and turning history into an anachronistic judgment.',
      questionFormat: 'standard',
    };
  });
}

export const HISTORIANS_FALLACY_EXPANSION_EN: Question[] = createQuestions('en');
export const HISTORIANS_FALLACY_EXPANSION_FR: Question[] = createQuestions('fr');

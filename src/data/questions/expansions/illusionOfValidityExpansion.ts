import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya trusts the forecast because the graph looks polished, even though it is based on a tiny sample from one neighborhood by the river.', "Maya fait confiance a la prevision parce que le graphique a l air soigné, meme s il repose sur un echantillon minuscule d un seul quartier au bord de la rivière."],
  ['Leo assumes his gut feeling is reliable just because it felt strong in the moment before lunch in the office.', "Leo suppose que son intuition est fiable juste parce qu elle semblait tres forte sur le moment avant le déjeuner au bureau."],
  ['Nina believes the first quiz result must be accurate because the teacher wrote it in red pen.', "Nina croit que le premier resultat du quiz doit etre juste parce que le professeur l a ecrit au stylo rouge."],
  ['Owen thinks a neat spreadsheet automatically means the conclusion is solid.', "Owen pense qu un tableau bien range veut automatiquement dire que la conclusion est solide."],
  ['Priya accepts a confident forecast because the speaker sounded calm and certain.', "Priya accepte une prevision sure simplement parce que l orateur avait l air calme et certain."],
  ['Ben trusts the parking app prediction because it uses a lot of charts, even though the data is old.', "Ben fait confiance a la prediction de l application de stationnement parce qu elle utilise beaucoup de graphiques, meme si les donnees sont anciennes."],
  ['Tara believes the test score prediction is right because the model looks technical.', "Tara croit que la prediction de score est juste parce que le modele a l air technique."],
  ['Kai assumes a long explanation must be correct because it sounds precise.', "Kai suppose qu une longue explication doit etre correcte parce qu elle semble precise."],
  ['Jules trusts a weather forecast because the presenter used fancy terms and a clean map.', "Jules fait confiance a une prevision meteo parce que le presentateur utilise des termes sophistiques et une carte propre."],
  ['Ava thinks a confident investor must be right because he talks like an expert.', "Ava pense qu un investisseur sur de lui doit avoir raison parce qu il parle comme un expert."],
  ['Noah believes a personality quiz is meaningful because the result page looks official.', "Noah croit qu un test de personnalite a du sens parce que la page de resultat a l air officielle."],
  ['Mina trusts a sales forecast because the numbers line up neatly in a slide deck.', "Mina fait confiance a une prevision de ventes parce que les chiffres s alignent proprement dans un diaporama."],
  ['Eli assumes a prediction is valid because it came from a chart with a strong title.', "Eli suppose qu une prediction est valide parce qu elle vient d un graphique avec un titre convaincant."],
  ["Rina thinks the trainer's confidence proves the fitness plan will work.", "Rina pense que la confiance du coach prouve que le programme fitness va marcher."],
  ['Hugo believes a stock tip is safe because the analyst speaks with certainty.', "Hugo croit qu un conseil boursier est fiable parce que l analyste parle avec assurance."],
  ['Lina trusts a school ranking because the table has a lot of decimals.', "Lina fait confiance a un classement scolaire parce que le tableau a beaucoup de decimales."],
  ['Grant thinks the forecast is valid because the app has a premium badge.', "Grant pense que la prevision est valide parce que l application a un badge premium."],
  ['Zoe accepts a nutrition claim because the slide uses the word "evidence" everywhere.', "Zoe accepte une affirmation nutritionnelle parce que la presentation utilise le mot « preuve » partout."],
  ['Milo believes a budget projection is trustworthy because the spreadsheet is color coded.', "Milo croit qu une projection budgetaire est digne de confiance parce que la feuille de calcul est codee par couleur."],
  ['Theo says the hiring recommendation must be correct because the algorithm sounds advanced.', "Theo dit que la recommandation de recrutement doit etre correcte parce que l algorithme a l air avance."],
  ['Pia assumes a diagnostic app is right because it gives a percentage with two decimals.', "Pia suppose qu une application de diagnostic a raison parce qu elle donne un pourcentage avec deux decimales."],
  ['Finn trusts a product review because the reviewer uses polished language.', "Finn fait confiance a un avis produit parce que le redacteur utilise un langage soigne."],
  ['Maya believes a tip is accurate because the speaker sounded like they had insider knowledge.', "Maya croit qu un conseil est exact parce que l orateur avait l air de connaitre le dossier de l interieur."],
  ['Sam thinks a neatly formatted report guarantees the recommendation is sound.', "Sam pense qu un rapport bien mis en forme garantit que la recommandation est solide."],
  ['Juno accepts a claim because it came from a dashboard full of trend lines.', "Juno accepte une affirmation parce qu elle vient d un tableau de bord rempli de courbes de tendance."],
  ['Iris believes a forecast is good because it agrees with her favorite scenario.', "Iris croit qu une prevision est bonne parce qu elle correspond a son scenario prefere."],
  ["Cole trusts the tutor's advice because the tutor sounded very sure of the answer.", "Cole fait confiance au conseil du tuteur parce que le tuteur semblait tres sur de sa reponse."],
  ['Nora thinks a business plan is strong because the executive summary reads smoothly.', "Nora pense qu un plan d entreprise est solide parce que le resume executif se lit bien."],
  ['Ari assumes a medical estimate is right because it comes from a clean interface.', "Ari suppose qu une estimation medicale est juste parce qu elle vient d une interface propre."],
  ['Rita believes a home price prediction is reliable because the agent showed a fancy chart.', "Rita croit qu une prediction de prix immobilier est fiable parce que l agent a montre un graphique elegant."],
  ['Tia says the report must be accurate because it uses impressive jargon.', "Tia dit que le rapport doit etre exact parce qu il utilise un jargon impressionnant."],
  ['Oli trusts the schedule estimate because the planning app looks professional.', "Oli fait confiance a l estimation du planning parce que l application a l air professionnelle."],
  ['Lara accepts the course recommendation because the advisor spoke with authority.', "Lara accepte la recommandation de cours parce que le conseiller parlait avec autorite."],
  ['Ben thinks a risk score is meaningful because it is displayed in a bold badge.', "Ben pense qu un score de risque a du sens parce qu il est affiche dans un badge en gras."],
  ['Mina believes the argument is strong because the slides include many arrows.', "Mina croit que l argument est solide parce que les diapositives contiennent beaucoup de fleches."],
  ['Drew trusts a hiring test because the result looks science-like.', "Drew fait confiance a un test de recrutement parce que le resultat a l air scientifique."],
  ['Jade assumes a leaderboard ranking proves the method is objective.', "Jade suppose qu un classement prouve que la methode est objective."],
  ['Owen believes a stock graph is enough to prove the prediction is valid.', "Owen croit qu un graphique boursier suffit a prouver que la prediction est valide."],
  ['Mila trusts the travel advice because the blog post has polished formatting.', "Mila fait confiance au conseil de voyage parce que l article de blog est bien mis en page."],
  ['Evan thinks a confident tone makes the recommendation correct.', "Evan pense qu un ton assure rend la recommandation correcte."],
  ['Kira believes a prediction is valid because it fits a neat pattern.', "Kira croit qu une prediction est valide parce qu elle correspond a un motif bien net."],
  ['Grant assumes a performance rating is true because the dashboard shows it in green.', "Grant suppose qu une evaluation de performance est vraie parce que le tableau de bord l affiche en vert."],
  ['Zara trusts a ranking because the consultant used a complicated model name.', "Zara fait confiance a un classement parce que le consultant a utilise un nom de modele complique."],
  ['Parker thinks a tidy summary proves the conclusion better than the messy raw data.', "Parker pense qu un resume propre prouve mieux la conclusion que les donnees brutes en desordre."],
  ['Hana believes the plan is validated because it survived one impressive demo.', "Hana croit que le plan est valide parce qu il a tenu pendant une demo impressionnante."],
  ['Leo trusts the prediction because the presenter drew a convincing arrow upward.', "Leo fait confiance a la prediction parce que le presentateur a dessine une fleche ascendante convaincante."],
  ['Maya thinks the recommendation is sound because the report feels polished and final.', "Maya pense que la recommandation est solide parce que le rapport semble propre et definitif."],
  ['Nina assumes a clinical score is correct because the app presents it as a precise number.', "Nina suppose qu un score clinique est correct parce que l application le presente comme un nombre precis."],
  [`Ava believes the forecast is reliable because the dashboard is full of neat icons and calm colors.`, `Ava croit que la prevision est fiable parce que le tableau de bord est rempli d icones nettes et de couleurs calmes.`],
  [`Owen trusts the recommendation because it came from a slide deck with perfect spacing.`, `Owen fait confiance a la recommandation parce qu elle vient d un diaporama avec un espacement parfait.`],
  [`Mina assumes the diagnosis is right because the medical app displays a precise percentage.`, `Mina suppose que le diagnostic est juste parce que l application medicale affiche un pourcentage precis.`],
  [`Theo thinks a forecast must be accurate because the presenter used a serious voice and a sharp chart.`, `Theo pense qu une prevision doit etre exacte parce que le presentateur a utilise une voix serieuse et un graphique net.`],
  [`Jade believes the ranking is valid because the spreadsheet looks technical and official.`, `Jade croit que le classement est valable parce que le tableur a l air technique et officiel.`],
  [`Ben trusts the hiring test because the result page uses polished wording and a confidence bar.`, `Ben fait confiance au test de recrutement parce que la page de resultat utilise un langage soigné et une barre de confiance.`],
  [`Lara assumes the stock tip is solid because it is wrapped in charts and jargon.`, `Lara suppose que le conseil boursier est solide parce qu il est enveloppe de graphiques et de jargon.`],
  [`Pia thinks the weather prediction is right because the app looks premium and expensive.`, `Pia pense que la prevision meteo est juste parce que l application a l air premium et chere.`],
  [`Nora believes the performance score is trustworthy because it appears in a bold badge.`, `Nora croit que le score de performance est digne de confiance parce qu il apparait dans un badge en gras.`],
  [`Finn trusts the advice because the presenter sounded like an expert and used exact numbers.`, `Finn fait confiance au conseil parce que le presentateur avait l air d un expert et utilisait des nombres precis.`],
  [`Maya trusts the forecast because the chart looks expensive, even though the data is old.`, `Maya fait confiance a la prevision parce que le graphique a l air cher, meme si les donnees sont anciennes.`],
  [`Leo believes the diagnosis because the app shows a precise percentage and a clean layout.`, `Leo croit au diagnostic parce que l application affiche un pourcentage precis et une mise en page propre.`],
  [`Nina assumes the stock tip is correct because the dashboard looks sophisticated.`, `Nina suppose que le conseil boursier est juste parce que le tableau de bord a l air sophistique.`],
  [`Owen trusts the ranking because the report uses technical wording and a neat table.`, `Owen fait confiance au classement parce que le rapport utilise un vocabulaire technique et un tableau net.`],
  [`Priya thinks the forecast is valid because the presenter sounded calm and certain.`, `Priya pense que la prevision est valide parce que le presentateur semblait calme et certain.`],
  [`Ben believes the budget projection because the spreadsheet is color coded and tidy.`, `Ben croit a la projection budgetaire parce que le tableur est code en couleur et bien range.`],
  [`Ava accepts the hiring test because the result page looks official and final.`, `Ava accepte le test de recrutement parce que la page de resultat a l air officielle et finale.`],
  [`Rita thinks the risk score must be real because it is shown in a polished badge.`, `Rita pense que le score de risque doit etre reel parce qu il est affiche dans un badge soigné.`],
  [`Jules trusts the recommendation because the slide deck has perfect spacing and a confident tone.`, `Jules fait confiance a la recommandation parce que le diaporama a un espacement parfait et un ton assure.`],
  [`Mina assumes the ranking is accurate because the chart is neat and easy to read.`, `Mina suppose que le classement est exact parce que le graphique est net et facile a lire.`],
];

const OPTIONS_EN = ['Illusion of Validity', 'Availability Heuristic', 'Appeal to Authority', 'Confirmation Bias'];
const OPTIONS_FR = ['Illusion de validite', 'Heuristique de disponibilite', "Appel a l'autorite", 'Biais de confirmation'];

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
      id: 35801 + i,
      level: 4,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Illusion de validite' : 'Illusion of Validity',
      difficulty: i < 43 ? 1 : i < 50 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? OPTIONS_FR : OPTIONS_EN, c),
      correct_option_index: c,
      explanation: fr
        ? 'Une presentation soignee ou un ton sur ne suffisent pas a prouver qu une conclusion est juste.'
        : 'A polished presentation or confident tone does not prove a conclusion is right.',
      detailedExplanationBeginner: fr
        ? 'Une forme elegante peut donner une fausse impression de justesse.'
        : 'A polished format can create a false sense of correctness.',
      detailedExplanationIntermediate: fr
        ? "L illusion de validite fait croire qu un graphique net, un jargon technique ou une assurance calme rendent une prediction fiable, alors que la qualite apparente ne garantit pas la verite."
        : 'The illusion of validity makes a neat chart, technical jargon, or calm confidence seem to make a prediction reliable, even though apparent quality does not guarantee truth.',
      detailedExplanationExpert: fr
        ? "Ce biais apparait quand on remplace l evaluation critique des preuves par des indices de style, de precision affichee ou de familiarite visuelle, puis qu on traite cette impression comme une validation."
        : 'This bias appears when critical evaluation of evidence is replaced by style cues, displayed precision, or visual familiarity, and that impression is then mistaken for validation.',
      questionFormat: 'standard',
    };
  });
}

export const ILLUSION_OF_VALIDITY_EXPANSION_EN: Question[] = make();
export const ILLUSION_OF_VALIDITY_EXPANSION_FR: Question[] = make(true);

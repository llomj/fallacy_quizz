import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["The ad says this smartwatch is better because it is the newest model on the shelf and has a brighter screen for night walks.", "La pub dit que cette montre connectée est meilleure parce que c'est le modèle le plus récent en rayon et qu'elle a un écran plus lumineux pour les sorties de nuit."],
  ["Mia buys a planner only because the cover says '2026 edition' and the old one still works fine at her desk.", "Mia achète un agenda seulement parce que la couverture dit « édition 2026 » alors que l'ancien fonctionne encore bien à son bureau."],
  ["Theo rejects his old recipe because a brand-new version just came out online.", "Theo rejette sa vieille recette parce qu'une toute nouvelle version vient de sortir en ligne."],
  ["A student assumes the latest note-taking app must be superior to every older one.", "Un élève suppose que la dernière application de prise de notes doit être supérieure à toutes les anciennes."],
  ["Nina says the new coffee machine is automatically better because nobody has used it before.", "Nina dit que la nouvelle machine à café est automatiquement meilleure parce que personne ne l'a encore utilisée."],
  ["Ben trades a working chair for a flashy new one because the new design looks modern.", "Ben échange une chaise qui fonctionne contre une nouvelle plus tape-à-l'œil parce que le nouveau design a l'air moderne."],
  ["A friend believes the latest phone case is safest because it came out this week.", "Un ami pense que la dernière coque de téléphone est la plus sûre parce qu'elle est sortie cette semaine."],
  ["Omar says the newest school rule must be smartest because it is newer than the old rule.", "Omar dit que la règle scolaire la plus récente doit être la plus intelligente parce qu'elle est plus récente que l'ancienne."],
  ["The shop claims the newest jeans are best simply because they are new.", "Le magasin prétend que les nouveaux jeans sont les meilleurs simplement parce qu'ils sont nouveaux."],
  ["Priya trusts a fresh blog tip more than a proven one because it was posted today.", "Priya fait plus confiance à une astuce de blog toute fraîche qu'à une astuce éprouvée parce qu'elle a été publiée aujourd'hui."],
  ["A gamer says the beta version of the game must be better than the finished one.", "Un joueur dit que la version bêta du jeu doit être meilleure que la version finale."],
  ["Maya chooses a new detergent over her old one without comparing ingredients.", "Maya choisit une nouvelle lessive plutôt que son ancienne sans comparer les ingrédients."],
  ["The salesman says the newest sneakers are best because the box says 'new arrival'.", "Le vendeur dit que les nouvelles baskets sont les meilleures parce que la boîte indique « nouvelle arrivée »."],
  ["Leo believes the updated map is more accurate solely because it is updated.", "Leo croit que la carte mise à jour est plus exacte uniquement parce qu'elle est à jour."],
  ["A parent buys the latest school backpack because the older model feels out of date.", "Un parent achète le dernier sac d'école parce que l'ancien modèle semble dépassé."],
  ["The flyer says the brand-new diet plan must work because it has not been tried before.", "Le prospectus dit que le tout nouveau plan de régime doit fonctionner parce qu'il n'a jamais été essayé."],
  ["Tara says the fresh haircut style is superior because everyone is talking about it this month.", "Tara dit que la nouvelle coupe est supérieure parce que tout le monde en parle ce mois-ci."],
  ["A neighbor upgrades the grill because the latest model has a shinier panel.", "Un voisin change de barbecue parce que le dernier modèle a une façade plus brillante."],
  ["Zoe trusts the newest cleaning hack because old hacks are boring.", "Zoe fait confiance à la nouvelle astuce de nettoyage parce que les anciennes sont ennuyeuses."],
  ["A team rejects the tested spreadsheet and switches to a newer one just because it is newer.", "Une équipe rejette le tableur testé et passe à un plus récent simplement parce qu'il est plus récent."],
  ["Hugo says the new lamp must save more power because it is from the latest collection.", "Hugo dit que la nouvelle lampe doit économiser plus d'énergie parce qu'elle vient de la dernière collection."],
  ["A student assumes the newest homework tracker is the smartest option.", "Un élève suppose que le nouveau suivi des devoirs est l'option la plus intelligente."],
  ["The ad says the new snack is better because the package says 'just launched'.", "La pub dit que le nouvel en-cas est meilleur parce que l'emballage indique « tout juste lancé »."],
  ["Mila replaces a reliable app with a newer one just because it looks fresher.", "Mila remplace une application fiable par une plus récente simplement parce qu'elle paraît plus fraîche."],
  ["The office believes the newest printer fix must be the best because it was invented this year.", "Le bureau pense que la nouvelle réparation d'imprimante doit être la meilleure parce qu'elle a été inventée cette année."],
  ["A shopper says the latest soap scent is healthier than the old scent.", "Une cliente dit que le dernier parfum de savon est plus sain que l'ancien parfum."],
  ["Noah trusts the new fitness challenge because it is trending right now.", "Noah fait confiance au nouveau défi sportif parce qu'il est tendance en ce moment."],
  ["The bakery claims the new muffin is superior because it has a new name.", "La boulangerie prétend que le nouveau muffin est supérieur parce qu'il porte un nouveau nom."],
  ["A cousin picks the newest laptop model before checking battery life.", "Un cousin choisit le dernier modèle d'ordinateur portable avant de vérifier l'autonomie."],
  ["Ravi says the latest study method is the best because it is the latest.", "Ravi dit que la dernière méthode d'étude est la meilleure parce qu'elle est la dernière."],
  ["A friend swaps a tested phone setting for a new one because new sounds advanced.", "Un ami remplace un réglage téléphonique éprouvé par un nouveau parce que nouveau semble avancé."],
  ["The poster says this is the best ride because it just opened.", "L'affiche dit que c'est la meilleure attraction parce qu'elle vient d'ouvrir."],
  ["A teacher assumes the newest classroom game improves learning more than the old one.", "Un enseignant suppose que le nouveau jeu de classe améliore davantage l'apprentissage que l'ancien."],
  ["Kim buys the latest mug because everyone online calls it the future of coffee.", "Kim achète la dernière tasse parce que tout le monde en ligne l'appelle l'avenir du café."],
  ["A shopper thinks the brand-new shoes must be more comfortable than the pair she already owns.", "Une cliente pense que les chaussures toutes neuves doivent être plus confortables que la paire qu'elle possède déjà."],
  ["The store says the latest mirror is the most stylish because it just arrived.", "Le magasin dit que le dernier miroir est le plus élégant parce qu'il vient d'arriver."],
  ["Lea chooses a new calendar app because old apps feel outdated.", "Lea choisit une nouvelle application de calendrier parce que les anciennes semblent dépassées."],
  ["A manager replaces a working process with a newer one because change feels innovative.", "Un manager remplace un processus qui fonctionne par un plus récent parce que le changement semble innovant."],
  ["Ben believes the latest headphones are best because they were released after the others.", "Ben croit que les derniers écouteurs sont les meilleurs parce qu'ils sont sortis après les autres."],
  ["A parent thinks the new lunchbox is safer because it is the latest design.", "Un parent pense que la nouvelle boîte à lunch est plus sûre parce que c'est le dernier design."],
  ["The ad says the new backpack is better because it was just unveiled.", "La pub dit que le nouveau sac à dos est meilleur parce qu'il vient d'être dévoilé."],
  ["A student trusts the freshest study trend instead of the tried and true method.", "Un élève fait confiance à la tendance d'étude la plus récente plutôt qu'à la méthode éprouvée."],
  ["The seller says the latest chair is smarter because it has a fresh style.", "Le vendeur dit que la dernière chaise est plus intelligente parce qu'elle a un style neuf."],
  ["Nina assumes the newest recipe app must help more because it is newer.", "Nina suppose que la nouvelle application de recettes doit aider davantage parce qu'elle est plus récente."],
  ["A friend says the latest charger is better because old chargers are old.", "Un ami dit que le dernier chargeur est meilleur parce que les vieux chargeurs sont vieux."],
  ["The flyer claims the new water bottle is cleaner because it is the fresh release.", "Le prospectus affirme que la nouvelle bouteille d'eau est plus propre parce que c'est la nouvelle sortie."],
  ["Omar switches to the newest note app just because it is the one people are posting about now.", "Omar passe à la nouvelle application de notes simplement parce que c'est celle dont on parle en ce moment."],
  ["The poster says this course is superior because it was launched last week.", "L'affiche dit que ce cours est supérieur parce qu'il a été lancé la semaine dernière."],
  ["A customer assumes the newest blender is better than her reliable old one.", "Une cliente suppose que le nouveau blender est meilleur que son ancien blender fiable."],
  ["Maya thinks the latest phone wallpaper app must improve her phone.", "Maya pense que la dernière application de fonds d'écran doit améliorer son téléphone."],
  ["Theo says the newest budgeting app must be better because it just launched this morning.", "Theo dit que la nouvelle application de budget doit être meilleure parce qu'elle vient d'être lancée ce matin."],
  ["Nina buys the latest desk organizer without checking whether the old one already works well.", "Nina achète le dernier organiseur de bureau sans vérifier si l'ancien fonctionne déjà bien."],
  ["Ben trusts the newest recipe trend because the video called it the future of cooking.", "Ben fait confiance à la dernière tendance culinaire parce que la vidéo l'a appelée l'avenir de la cuisine."],
  ["Priya says the fresh bus route app must be superior because it is the app everyone just downloaded.", "Priya dit que la nouvelle appli d'itinéraire de bus doit être supérieure parce que c'est celle que tout le monde vient de télécharger."],
  ["Omar believes the latest mop is better because it looks more modern than the one he owns.", "Omar croit que la dernière serpillière est meilleure parce qu'elle paraît plus moderne que celle qu'il possède."],
  ["Maya swaps to a brand-new calendar tool because new feels more efficient.", "Maya passe à un tout nouvel outil de calendrier parce que le nouveau semble plus efficace."],
  ["Leo chooses the newly released lunch app because it is trending in the office chat.", "Leo choisit la nouvelle application de déjeuner parce qu'elle est à la mode dans le chat du bureau."],
  ["Rina assumes the newest note-taking style must help because it came out after the old one.", "Rina suppose que la nouvelle façon de prendre des notes doit aider parce qu'elle est sortie après l'ancienne."],
  ["Jules says the latest lamp design must be best because it is the newest version on the shelf.", "Jules dit que le dernier modèle de lampe doit être le meilleur parce que c'est la version la plus récente en rayon."],
  ["Ava thinks the fresh haircut trend is superior just because it is this season's trend.", "Ava pense que la nouvelle coupe à la mode est supérieure simplement parce que c'est la tendance de la saison."],
];

const EN = ['Appeal to Novelty', 'Appeal to Popularity', 'False Dilemma', 'Bandwagon'];
const FR = ["Appel à la nouveauté", 'Appel à la popularité', 'Fausse dichotomie', 'Effet de mode'];

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
      id: 30651 + i,
      level: 1,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Appel à la nouveauté' : 'Appeal to Novelty',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? FR : EN, c),
      correct_option_index: c,
      explanation: fr
        ? "Quelque chose est jugé meilleur uniquement parce qu'il est récent, nouveau ou à la mode."
        : 'Something is judged better just because it is recent, new, or trendy.',
      detailedExplanationBeginner: fr
        ? "Nouveau ne veut pas dire meilleur."
        : 'New does not automatically mean better.',
      detailedExplanationIntermediate: fr
        ? "Une nouveauté peut être utile, mais sa date de sortie ne prouve pas sa qualité."
        : 'A novelty can be useful, but its release date does not prove its quality.',
      detailedExplanationExpert: fr
        ? "L'appel à la nouveauté confond l'attrait psychologique du changement avec une amélioration réelle fondée sur des preuves."
        : 'Appeal to novelty confuses the psychological appeal of change with a real improvement supported by evidence.',
      questionFormat: 'standard',
    };
  });
}

export const APPEAL_TO_NOVELTY_EXPANSION_EN: Question[] = make();
export const APPEAL_TO_NOVELTY_EXPANSION_FR: Question[] = make(true);

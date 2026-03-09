export const translations = {
  en: {
    // Navigation & App
    app: {
      title: "LOGICAL",
      subtitle: "FALLACIES",
      rank: "Rank",
      glossary: "Glossary",
      methods: "Commands",
      flags: "Flags",
      flow: "Flow",
      learningLog: "Learning Log",
      operations: "Operations & Math",
    },
    
    // Evolution Hub
    hub: {
      evolutionStage: "Evolution Stage",
      class: "Class",
      currentGenome: "Current Genome",
      nextMutation: "Next Mutation",
      batchSize: "Batch Size",
      questions: "Questions",
      lastAccuracy: "Last Accuracy",
      stageProgress: "Stage Progress",
      continueMutation: "CONTINUE MUTATION",
      globalProgress: "Global Progress",
      mastery: "Mastery",
      mutationsRemaining: "{count} mutations remaining for next evolution.",
      absorbText: "Analyze 15 new arguments to strengthen your fallacy detection skills.",
      conceptsText: "unique reasoning patterns across the ocean.",
      // Random mode
      randomModeLabel: "Random Mode",
      totalAnswered: "Total Answered",
      correct: "Correct",
      accuracy: "Accuracy",
      evolutionScore: "Evolution Score",
      pointsToNext: "{points} points to {persona}",
      randomModeAbsorbText: "Analyze 15 random arguments from all levels to earn evolution points.",
      randomModeDescription: "Arguments from all levels. Earn points to evolve through the same 10 personas.",
    },
    
    // Quiz View
    quiz: {
      mutationOf: "MUTATION {current} OF {total}",
      evolutionPoints: "Evolution",
      stabilizingGenome: "Stabilizing Genome...",
      sequencingPatterns: "Sequencing 15 unique reasoning patterns for Stage {level}.",
      sequenceError: "Sequence Error",
      couldNotRetrieve: "Could not retrieve questions for this level.",
      returnToHub: "Return to Hub",
      showExplanation: "Click for detailed explanation",
      hideExplanation: "Click to collapse",
      next: "NEXT",
      finishEvolution: "FINISH EVOLUTION",
      continueMutation: "CONTINUE MUTATION",
      correct: "Correct",
      incorrect: "Incorrect",
      yourAnswer: "Your Answer",
      correctAnswer: "Correct Answer",
      whitespaceHint: "Spaces are shown as · to make padded options distinct.",
    },

    // Code Versatility panel (Level 9+)
    codeVersatility: {
      title: "Code Versatility & Applications",
      patternVersatility: "Pattern Versatility",
      realWorldApplications: "Real-World Applications",
      bestPractices: "Best Practices",
      inheritanceVersatility: "This inheritance pattern is versatile across multiple scenarios: extending base classes, implementing interfaces, creating plugin architectures, and building framework code. The super() pattern allows clean parent method invocation without hardcoding class names, making code more maintainable when inheritance hierarchies change.",
      polymorphismVersatility: "Polymorphism enables code to work with different types through a common interface. This pattern is versatile in API design, plugin systems, factory patterns, and when building extensible frameworks. It allows adding new types without modifying existing code that uses the interface.",
      encapsulationVersatility: "Encapsulation patterns provide controlled access to internal implementation details. This versatility allows protecting invariants, maintaining API stability, enabling refactoring without breaking consumers, and implementing property-based access control with validation or computed values.",
      propertyVersatility: "The property decorator pattern is versatile for computed attributes, validation, lazy evaluation, and maintaining backward compatibility when converting attributes to methods. It's essential in data models, ORMs, and APIs where attribute access needs special handling.",
      abstractVersatility: "Abstract base classes provide versatility in defining interfaces and enforcing method implementations. Useful for plugin architectures, defining contracts in frameworks, ensuring API compliance, and creating clear extension points for library users.",
      defaultVersatility: "This advanced OOP pattern demonstrates versatile application across multiple domains: framework design, library APIs, extensible architectures, and systems requiring clean separation of concerns. Understanding these patterns enables building more maintainable and scalable codebases.",
      inheritanceApps: ["Framework base classes (Django models, Flask views)", "GUI toolkit hierarchies (tkinter, PyQt widget classes)", "ORM model inheritance (SQLAlchemy, Django ORM)", "Exception class hierarchies for error handling", "Plugin systems with base plugin classes"],
      polymorphismApps: ["API design with interface-based contracts", "Strategy pattern implementations", "Dependency injection containers", "Protocol-based type checking (PEP 544)", "Duck typing for cross-type compatibility"],
      encapsulationApps: ["Property-based data validation (Pydantic, attrs)", "ORM field descriptors with validation", "Computed properties in data models", "Lazy-loaded attributes (caching expensive operations)", "API versioning with private implementation details"],
      defaultApps: ["Large-scale application architecture", "Library and framework design", "Extensible plugin systems", "API design and versioning", "Enterprise software patterns"],
      inheritanceBestPractices: ["Use composition over inheritance when possible", "Call super() consistently to maintain MRO chain", "Prefer super() over Parent.method() for flexibility", "Keep inheritance hierarchies shallow (2-3 levels max)", "Document expected method signatures in base classes"],
      polymorphismBestPractices: ["Use isinstance() for type checking, not type()", "Design around interfaces, not concrete classes", "Leverage duck typing for flexibility", "Use ABCs when you need to enforce interfaces", "Favor protocols (PEP 544) for structural typing"],
      encapsulationBestPractices: ["Use leading underscores for internal attributes", "Use @property for computed or validated attributes", "Avoid accessing private attributes from outside", "Provide clear public APIs for necessary access", "Document which attributes are part of the public API"],
      defaultBestPractices: ["Follow SOLID principles in OOP design", "Prefer composition over deep inheritance", "Use type hints for better code clarity", "Write clear docstrings explaining class contracts", "Keep classes focused on a single responsibility"],
    },
    
    // Result Modal
    result: {
      mutationsComplete: "Mutations Complete!",
      geneticsStabilized: "Genetics stabilized for {score} concepts.",
      evolutionGain: "Evolution Gain",
      successRate: "Success Rate",
      evolutionScore: "Evolution Score",
      backToHub: "BACK TO HUB",
    },
    
    // Random Mode Modal
    randomMode: {
      switchToRandom: "Switch to Random Mode?",
      switchToLevel: "Switch to Level Mode?",
      randomModeDesc: "Questions will be randomly selected from all levels. Your progress and XP will still count toward leveling up.",
      levelModeDesc: "Return to level-based questions. You'll continue from your current level and progress normally.",
      cancel: "Cancel",
      randomMode: "Random Mode",
      levelMode: "Level Mode",
    },
    
    // History Log
    history: {
      learningLog: "LEARNING LOG",
      backToHub: "BACK TO HUB",
      emptyLog: "Your learning log is empty. Start evolving to record your journey!",
      level: "Niveau",
      correct: "Correct",
      incorrect: "Incorrect",
    },
    
    // Glossary View
    glossary: {
      title: "LOGICAL FALLACIES GLOSSARY",
      searchPlaceholder: "Search fallacies... ({count} fallacies)",
      levelConcept: "Level {range} Concept",
      levelSection: "Level {level}",
      levelBadge: "Lvl {range}",
      inDepthDescription: "In-Depth Description",
      implementationExample: "Implementation Example",
      exampleLevelBeginner: "Beginner",
      exampleLevelIntermediate: "Intermediate",
      exampleLevelExpert: "Expert",
      noResults: "No terms found matching \"{search}\"",
      showingCount: "{count} of {total} fallacies",
    },
    
    // Operations View
    operations: {
      title: "OPERATIONS & MATH",
      back: "BACK",
      operations: "Operations",
      mathConcepts: "Math Concepts",
      searchPlaceholder: "Search {type}...",
      definition: "Definition",
      examples: "Examples",
      gotIt: "GOT IT",
      noItemsFound: "No items found matching \"{search}\"",
    },
    
    // Footer
    footer: {
      copyright: "© 2024 CLI Exercises Learn. Interactive Learning Platform.",
    },
    
    // Persona Stages (these might stay as is, but we can translate)
    personas: {
      tadpole: "Tadpole",
      plankton: "Plankton",
      shrimp: "Shrimp",
      crab: "Crab",
      smallFish: "Small Fish",
      octopus: "Octopus",
      seal: "Seal",
      dolphin: "Dolphin",
      shark: "Shark",
      whale: "Whale",
      godWhale: "God Whale",
    },
    
    // Settings Menu
    settings: {
      searchById: "Search by ID",
      idLog: "ID Log",
      selectLevel: "Select Level",
      switchToLevelMode: "Switch to Level Mode",
      switchToRandomMode: "Switch to Random Mode",
      settings: "Settings",
      resetApp: "Reset App",
      refreshApp: "Refresh app (get latest)",
      back: "Back",
      rules: "Rules",
      logicalRules: "Logical Rules & Argumentation",
      sound: "Sound",
      soundOn: "Sound: On",
      soundOff: "Sound: Off",
      haptic: "Haptic",
      hapticOn: "Haptic: On",
      hapticOff: "Haptic: Off",
      previewStarSounds: "Preview star sounds",
    },
    
    // Reset App Modal
    resetModal: {
      title: "Reset App?",
      warning: "This will erase all your progress (XP, levels, completed questions, learning log). You will start from zero. This cannot be undone.",
      cancel: "Cancel",
      confirm: "Reset Everything",
    },
    
    // Level Selector
    levelSelector: {
      selectLevel: "Select Level",
      level: "Level {level}",
      currentLevel: "Current Level",
      highestUnlocked: "Highest Unlocked",
      youAreOnLevel: "You are currently on Level {level}. Complete questions to unlock higher levels.",
      randomModeNote: "You're in Random Mode. The level you select will apply when you switch back to Level Mode.",
      currentLevelInfo: "Current Level: {current} • Highest Unlocked: {highest}",
    },
    
    // ID Search & Log
    idSearch: {
      searchById: "Search by ID",
      enterId: "ID (1-{max})",
      search: "Search",
      saveToLog: "Save to Log",
      saved: "Saved!",
      options: "Options",
      explanation: "Explanation",
      explanationLevel: "Explanation depth",
      showDetailedExplanation: "Show Detailed Explanation",
      noSavedQuestions: "No saved questions yet. Search by ID and save questions for reference.",
      idLog: "ID Log",
      invalidId: "Please enter a valid ID between 1 and {max}",
      questionNotFound: "Question with ID {id} not found",
    },
    
    // ID Log
    idLog: {
      clickToViewCodon: "Click to view codon explanation",
      codonExplanation: "Codon Explanation",
    },
    
    // Sub-levels (Beginner, Intermediate, Expert)
    subLevels: {
      beginner: "Beginner",
      intermediate: "Intermediate",
      expert: "Expert",
      beginnerCaps: "BEGINNER",
      intermediateCaps: "INTERMEDIATE",
      expertCaps: "EXPERT",
      subLevelComplete: "SUB-LEVEL COMPLETE!",
      masteryAchieved: "MASTERY ACHIEVED",
      beginnerProgress: "BEGINNER PROGRESS",
      intermediateProgress: "INTERMEDIATE PROGRESS",
      expertProgress: "EXPERT PROGRESS",
      masteryProgress: "MASTERY ACHIEVED",
      youEarnedStar: "You earned the {star} star for this stage.",
      youEarnedStarsCount: "You earned {count} stars for this level!",
      continueEvolution: "CONTINUE EVOLUTION",
    },
    
    // Level Descriptions (Logical fallacies)
    levels: {
      level0: "Complete beginner in reasoning. Learn what arguments, premises and conclusions are, and the basic ideas of validity and soundness.",
      level1: "Common everyday fallacies I. Spot obvious ad hominem attacks, straw men, bad appeals to popularity or authority, and false dilemmas.",
      level2: "Common everyday fallacies II. Recognize red herrings, slippery slopes, hasty generalizations, weak analogies, and emotional manipulation.",
      level3: "Causal fallacies. Distinguish correlation from causation, reversed causality, oversimplified causes, and ignored confounders.",
      level4: "Ambiguity and language. Detect equivocation, amphiboly, loaded questions, vagueness, and moving the goalposts.",
      level5: "Formal fallacies I. Learn classic invalid forms like affirming the consequent, denying the antecedent, and undistributed middle.",
      level6: "Formal fallacies II. Work with quantifiers, scope errors, and contrast invalid patterns with strange but valid arguments.",
      level7: "Probability and evidence. Understand base-rate neglect, gambler’s fallacy, prosecutor’s fallacy, cherry-picking, and survivorship bias.",
      level8: "Rhetorical manipulation. Spot poisoning the well, framing tricks, motte-and-bailey moves, and suggestive innuendo.",
      level9: "Mixed and multi-step fallacies. Analyze complex arguments that combine several fallacies at once.",
      level10: "Meta-logic and expert reasoning. Avoid the fallacy fallacy and learn to separate bad reasoning from mere disagreement.",
    },
  },
  
  fr: {
    // Navigation & App
    app: {
      title: "SOPHISMES",
      subtitle: "LOGIQUES",
      rank: "Rang",
      glossary: "Glossaire",
      methods: "Commandes",
      flags: "Options",
      flow: "Flux",
      learningLog: "Journal d'apprentissage",
      operations: "Opérations et Mathématiques",
    },
    
    // Evolution Hub
    hub: {
      evolutionStage: "Étape d'Évolution",
      class: "Classe",
      currentGenome: "Génome Actuel",
      nextMutation: "Prochaine Mutation",
      batchSize: "Taille du Lot",
      questions: "Questions",
      lastAccuracy: "Précision Dernière",
      stageProgress: "Progression de l'Étape",
      continueMutation: "CONTINUER LA MUTATION",
      globalProgress: "Progression Globale",
      mastery: "Maîtrise",
      mutationsRemaining: "{count} mutations restantes pour la prochaine évolution.",
      absorbText: "Analysez 15 nouveaux arguments pour renforcer vos compétences en détection de sophismes.",
      conceptsText: "schémas de raisonnement uniques à travers l'océan.",
      // Random mode
      randomModeLabel: "Mode Aléatoire",
      totalAnswered: "Total Répondu",
      correct: "Correct",
      accuracy: "Précision",
      evolutionScore: "Score d'Évolution",
      pointsToNext: "{points} points vers {persona}",
      randomModeAbsorbText: "Analysez 15 arguments aléatoires de tous les niveaux pour gagner des points d'évolution.",
      randomModeDescription: "Arguments de tous les niveaux. Gagnez des points pour évoluer à travers les mêmes 10 personas.",
    },

    // Quiz View
    quiz: {
      mutationOf: "MUTATION {current} SUR {total}",
      evolutionPoints: "Evolution",
      stabilizingGenome: "Stabilisation du Génome...",
      sequencingPatterns: "Séquençage de 15 motifs logiques uniques pour l'Étape {level}.",
      sequenceError: "Erreur de Séquence",
      couldNotRetrieve: "Impossible de récupérer les questions pour ce niveau.",
      returnToHub: "Retour au Hub",
      showExplanation: "Cliquez pour l'explication détaillée",
      hideExplanation: "Cliquez pour réduire",
      next: "SUIVANT",
      finishEvolution: "TERMINER L'ÉVOLUTION",
      continueMutation: "CONTINUER LA MUTATION",
      correct: "Correct",
      incorrect: "Incorrect",
      yourAnswer: "Votre Réponse",
      correctAnswer: "Bonne Réponse",
      whitespaceHint: "Les espaces sont affichés en · pour distinguer les options avec padding.",
    },

    // Code Versatility panel (Level 9+)
    codeVersatility: {
      title: "Polyvalence du Code et Applications",
      patternVersatility: "Polyvalence du Modèle",
      realWorldApplications: "Applications Réelles",
      bestPractices: "Bonnes Pratiques",
      inheritanceVersatility: "Ce modèle d'héritage est polyvalent dans plusieurs scénarios : étendre des classes de base, implémenter des interfaces, créer des architectures de plugins et construire du code de framework. Le pattern super() permet une invocation propre des méthodes parentes sans coder en dur les noms de classes, rendant le code plus maintenable lorsque les hiérarchies d'héritage changent.",
      polymorphismVersatility: "Le polymorphisme permet au code de fonctionner avec différents types via une interface commune. Ce modèle est polyvalent dans la conception d'API, les systèmes de plugins, les patterns factory et lors de la construction de frameworks extensibles. Il permet d'ajouter de nouveaux types sans modifier le code existant qui utilise l'interface.",
      encapsulationVersatility: "Les modèles d'encapsulation fournissent un accès contrôlé aux détails d'implémentation internes. Cette polyvalence permet de protéger les invariants, maintenir la stabilité des API, permettre le refactoring sans casser les consommateurs, et implémenter un contrôle d'accès basé sur les propriétés avec validation ou valeurs calculées.",
      propertyVersatility: "Le modèle du décorateur property est polyvalent pour les attributs calculés, la validation, l'évaluation paresseuse et le maintien de la rétrocompatibilité lors de la conversion d'attributs en méthodes. C'est essentiel dans les modèles de données, ORM et API où l'accès aux attributs nécessite un traitement spécial.",
      abstractVersatility: "Les classes de base abstraites offrent une polyvalence pour définir des interfaces et imposer des implémentations de méthodes. Utiles pour les architectures de plugins, définir des contrats dans les frameworks, garantir la conformité des API et créer des points d'extension clairs pour les utilisateurs des bibliothèques.",
      defaultVersatility: "Ce pattern OOP avancé démontre une application polyvalente dans plusieurs domaines : conception de frameworks, API de bibliothèques, architectures extensibles et systèmes nécessitant une séparation claire des préoccupations. Comprendre ces patterns permet de construire des codebases plus maintenables et évolutives.",
      inheritanceApps: ["Classes de base de frameworks (Django models, Flask views)", "Hiérarchies de toolkits GUI (tkinter, classes widgets PyQt)", "Héritage de modèles ORM (SQLAlchemy, Django ORM)", "Hiérarchies de classes d'exceptions pour la gestion d'erreurs", "Systèmes de plugins avec classes de plugins de base"],
      polymorphismApps: ["Conception d'API avec contrats basés sur les interfaces", "Implémentations du pattern Strategy", "Conteneurs d'injection de dépendances", "Vérification de types basée sur les protocoles (PEP 544)", "Duck typing pour la compatibilité entre types"],
      encapsulationApps: ["Validation de données basée sur les propriétés (Pydantic, attrs)", "Descripteurs de champs ORM avec validation", "Propriétés calculées dans les modèles de données", "Attributs chargés paresseusement (cache des opérations coûteuses)", "Versioning d'API avec détails d'implémentation privés"],
      defaultApps: ["Architecture d'applications à grande échelle", "Conception de bibliothèques et frameworks", "Systèmes de plugins extensibles", "Conception et versioning d'API", "Patterns de logiciels d'entreprise"],
      inheritanceBestPractices: ["Privilégiez la composition à l'héritage quand possible", "Appelez super() de manière cohérente pour maintenir la chaîne MRO", "Préférez super() à Parent.method() pour la flexibilité", "Gardez les hiérarchies d'héritage peu profondes (2-3 niveaux max)", "Documentez les signatures de méthodes attendues dans les classes de base"],
      polymorphismBestPractices: ["Utilisez isinstance() pour la vérification de types, pas type()", "Concevez autour des interfaces, pas des classes concrètes", "Exploitez le duck typing pour la flexibilité", "Utilisez les ABC lorsque vous devez imposer des interfaces", "Privilégiez les protocoles (PEP 544) pour le typage structurel"],
      encapsulationBestPractices: ["Utilisez des tirets bas pour les attributs internes", "Utilisez @property pour les attributs calculés ou validés", "Évitez d'accéder aux attributs privés de l'extérieur", "Fournissez des API publiques claires pour les accès nécessaires", "Documentez quels attributs font partie de l'API publique"],
      defaultBestPractices: ["Suivez les principes SOLID en conception OOP", "Privilégiez la composition à l'héritage profond", "Utilisez les indications de type pour plus de clarté", "Écrivez des docstrings clairs expliquant les contrats des classes", "Gardez les classes focalisées sur une seule responsabilité"],
    },
    
    // Result Modal
    result: {
      mutationsComplete: "Mutations Terminées !",
      geneticsStabilized: "Génétique stabilisée pour {score} concepts.",
      evolutionGain: "Gain d'Évolution",
      successRate: "Taux de Réussite",
      evolutionScore: "Score d'Évolution",
      backToHub: "RETOUR AU HUB",
    },
    
    // Random Mode Modal
    randomMode: {
      switchToRandom: "Passer en Mode Aléatoire ?",
      switchToLevel: "Passer en Mode Niveau ?",
      randomModeDesc: "Les questions seront sélectionnées au hasard parmi tous les niveaux. Votre progression et vos XP compteront toujours pour monter de niveau.",
      levelModeDesc: "Revenir aux questions basées sur les niveaux. Vous continuerez à partir de votre niveau actuel et progresserez normalement.",
      cancel: "Annuler",
      randomMode: "Mode Aléatoire",
      levelMode: "Mode Niveau",
    },
    
    // History Log
    history: {
      learningLog: "JOURNAL D'APPRENTISSAGE",
      backToHub: "RETOUR AU HUB",
      emptyLog: "Votre journal d'apprentissage est vide. Commencez à évoluer pour enregistrer votre parcours !",
      level: "Niveau",
      correct: "Correct",
      incorrect: "Incorrect",
    },
    
    // Glossary View
    glossary: {
      title: "GLOSSAIRE DES SOPHISMES LOGIQUES",
      searchPlaceholder: "Rechercher... ({count} sophismes)",
      levelConcept: "Concept Niveau {range}",
      levelSection: "Niveau {level}",
      levelBadge: "Niveau {range}",
      inDepthDescription: "Description Approfondie",
      implementationExample: "Exemple d'Implémentation",
      exampleLevelBeginner: "Débutant",
      exampleLevelIntermediate: "Intermédiaire",
      exampleLevelExpert: "Expert",
      noResults: "Aucun terme trouvé correspondant à \"{search}\"",
      showingCount: "{count} sur {total} sophismes",
    },
    
    // Operations View
    operations: {
      title: "OPÉRATIONS ET MATHÉMATIQUES",
      back: "RETOUR",
      operations: "Opérations",
      mathConcepts: "Concepts Mathématiques",
      searchPlaceholder: "Rechercher {type}...",
      definition: "Définition",
      examples: "Exemples",
      gotIt: "COMPRIS",
      noItemsFound: "Aucun élément trouvé correspondant à \"{search}\"",
    },
    
    // Footer
    footer: {
      copyright: "© 2024 CLI Exercises Learn. Plateforme d'Apprentissage Interactive.",
    },
    
    // Persona Stages
    personas: {
      tadpole: "Têtard",
      plankton: "Plancton",
      shrimp: "Crevette",
      crab: "Crabe",
      smallFish: "Petit Poisson",
      octopus: "Poulpe",
      seal: "Phoque",
      dolphin: "Dauphin",
      shark: "Requin",
      whale: "Baleine",
      godWhale: "Baleine Divine",
    },
    
    // Settings Menu
    settings: {
      searchById: "Rechercher par ID",
      idLog: "Journal ID",
      selectLevel: "Sélectionner le Niveau",
      switchToLevelMode: "Passer en Mode Niveau",
      switchToRandomMode: "Passer en Mode Aléatoire",
      settings: "Paramètres",
      resetApp: "Réinitialiser l'App",
      refreshApp: "Actualiser l'app (dernière version)",
      back: "Retour",
      rules: "Règles",
      logicalRules: "Règles logiques & argumentation",
      sound: "Son",
      soundOn: "Son : Activé",
      soundOff: "Son : Désactivé",
      haptic: "Vibrations",
      hapticOn: "Vibrations : Activées",
      hapticOff: "Vibrations : Désactivées",
      previewStarSounds: "Écouter les sons des étoiles",
    },
    
    // Reset App Modal
    resetModal: {
      title: "Réinitialiser l'App ?",
      warning: "Toute votre progression sera effacée (XP, niveaux, questions complétées, journal). Vous repartirez de zéro. Cette action est irréversible.",
      cancel: "Annuler",
      confirm: "Tout Réinitialiser",
    },
    
    // Level Selector
    levelSelector: {
      selectLevel: "Sélectionner le Niveau",
      level: "Niveau {level}",
      currentLevel: "Niveau Actuel",
      highestUnlocked: "Plus Haut Débloqué",
      youAreOnLevel: "Vous êtes actuellement au Niveau {level}. Complétez des questions pour débloquer des niveaux supérieurs.",
      randomModeNote: "Vous êtes en Mode Aléatoire. Le niveau sélectionné s'appliquera lorsque vous reviendrez au Mode Niveau.",
      currentLevelInfo: "Niveau Actuel: {current} • Plus Haut Débloqué: {highest}",
    },
    
    // ID Search & Log
    idSearch: {
      searchById: "Rechercher par ID",
      enterId: "ID (1-{max})",
      search: "Rechercher",
      saveToLog: "Enregistrer dans le Journal",
      saved: "Enregistré!",
      options: "Options",
      explanation: "Explication",
      explanationLevel: "Niveau d'explication",
      showDetailedExplanation: "Afficher l'Explication Détaillée",
      noSavedQuestions: "Aucune question enregistrée pour le moment. Recherchez par ID et enregistrez des questions pour référence.",
      idLog: "Journal ID",
      invalidId: "Veuillez entrer un ID valide entre 1 et {max}",
      questionNotFound: "Question avec l'ID {id} introuvable",
    },
    
    // ID Log
    idLog: {
      clickToViewCodon: "Cliquez pour voir l'explication du codon",
      codonExplanation: "Explication du Codon",
    },
    
    // Sub-levels (Débutant, Intermédiaire, Expert)
    subLevels: {
      beginner: "Débutant",
      intermediate: "Intermédiaire",
      expert: "Expert",
      beginnerCaps: "DÉBUTANT",
      intermediateCaps: "INTERMÉDIAIRE",
      expertCaps: "EXPERT",
      subLevelComplete: "SOUS-NIVEAU TERMINÉ !",
      masteryAchieved: "MAÎTRISE ACQUISE",
      beginnerProgress: "PROGRESSION DÉBUTANT",
      intermediateProgress: "PROGRESSION INTERMÉDIAIRE",
      expertProgress: "PROGRESSION EXPERT",
      masteryProgress: "MAÎTRISE ACQUISE",
      youEarnedStar: "Vous avez obtenu l'étoile {star} pour cette étape.",
      youEarnedStarsCount: "Vous avez obtenu {count} étoiles pour ce niveau !",
      continueEvolution: "CONTINUER L'ÉVOLUTION",
    },
    
    // Level Descriptions (Sophismes logiques)
    levels: {
      level0: "Débutant complet en raisonnement. Apprenez ce qu’est un argument, des prémisses, une conclusion, ainsi que les notions de validité et de solidité.",
      level1: "Sophismes du quotidien I. Repérez les attaques ad hominem, les hommes de paille, les appels à la popularité ou à l’autorité, et les fausses dichotomies.",
      level2: "Sophismes du quotidien II. Reconnaissez les contre‑feux (red herrings), pentes glissantes, généralisations hâtives, analogies faibles et appels à l’émotion.",
      level3: "Sophismes causaux. Distinguez corrélation et causalité, causalité inversée, causes simplifiées à l’excès et facteurs confondants ignorés.",
      level4: "Ambiguïté et langage. Repérez l’équivoque, l’amphibologie, les questions pièges, le flou et le déplacement des poteaux de but.",
      level5: "Sophismes formels I. Apprenez les schémas invalides classiques comme l’affirmation du conséquent, la négation de l’antécédent et le terme moyen non distribué.",
      level6: "Sophismes formels II. Travaillez avec les quantificateurs, les erreurs de portée et la différence entre arguments étranges mais valides et vrais sophismes.",
      level7: "Probabilités et preuves. Comprenez la négligence de la fréquence de base, le sophisme du joueur, le sophisme du procureur, le biais de survivance et le tri sélectif des données.",
      level8: "Manipulation rhétorique. Repérez l’empoisonnement du puits, les effets de cadrage, le mouvement motte‑et‑bailey et les insinuations suggestives.",
      level9: "Sophismes mixtes et multi‑étapes. Analysez des arguments complexes qui combinent plusieurs sophismes à la fois.",
      level10: "Méta‑logique et raisonnement expert. Évitez le « sophisme du sophisme » et apprenez à distinguer mauvais raisonnement et simple désaccord.",
    },
  },
};

// Helper function to replace placeholders
export const formatTranslation = (text: string, replacements: Record<string, string | number>): string => {
  let result = text;
  for (const [key, value] of Object.entries(replacements)) {
    result = result.replace(new RegExp(`\\{${key}\\}`, 'g'), String(value));
  }
  return result;
};

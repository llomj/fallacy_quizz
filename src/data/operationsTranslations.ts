// French translations for operations data
// This file contains French translations for OPERATIONS_DATA and MATH_CONCEPTS_DATA
// Note: Python code examples remain the same in all languages, but comments/descriptions are translated

export interface OperationItem {
  title: string;
  category: string;
  definition: string;
  examples: string[];
}

export const OPERATIONS_DATA_FR: OperationItem[] = [
  {
    title: "Arithmétique Shell avec $(( ))",
    category: "Opérateurs Shell",
    definition: "Utiliser l'expansion arithmétique pour faire des calculs entiers directement dans le shell sans programme externe.",
    examples: [
      "echo $((2 + 3))        # 5",
      "echo $((10 - 4))       # 6",
      "echo $((3 * 4))        # 12",
      "echo $((15 / 2))       # 7 (division entière)",
      "echo $((15 % 4))       # 3 (reste)",
      "i=0; i=$((i+1))        # incrémenter i de 1"
    ]
  },
  {
    title: "Comparaison avec [ ]",
    category: "Opérateurs Shell",
    definition: "Utiliser les crochets de test avec les opérateurs -eq, -ne, -lt, -gt, -le, -ge pour comparer des entiers.",
    examples: [
      "[ 5 -eq 5 ] && echo \"égal\"",
      "[ 3 -lt 5 ] && echo \"3 est plus petit\"",
      "[ 10 -ge 7 ] && echo \"10 >= 7\"",
      "if [ \"$COUNT\" -ne 0 ]; then echo \"non nul\"; fi",
      "if [ \"$A\" -gt \"$B\" ]; then echo \"A>B\"; fi"
    ]
  },
  {
    title: "Tests de chaînes dans [ ]",
    category: "Opérateurs Shell",
    definition: "Utiliser -z, -n, = et != pour vérifier si des chaînes sont vides, non vides ou égales dans les crochets de test.",
    examples: [
      "[ -z \"$NAME\" ] && echo \"NAME est vide\"",
      "[ -n \"$NAME\" ] && echo \"NAME est défini\"",
      "[ \"$USER\" = \"root\" ] && echo \"exécution en root\"",
      "[ \"$EXT\" != \"txt\" ] && echo \"pas un fichier .txt\""
    ]
  },
  {
    title: "Tests de fichiers",
    category: "Opérateurs Shell",
    definition: "Utiliser les drapeaux -f, -d, -e, -x, -r, -w dans [ ] pour inspecter des fichiers et des répertoires.",
    examples: [
      "[ -f config.sh ] && echo \"fichier régulier\"",
      "[ -d /etc ] && echo \"/etc est un dossier\"",
      "[ -e /usr/bin/ls ] && echo \"ls existe\"",
      "[ -x script.sh ] && echo \"script exécutable\"",
      "if [ ! -r secret.txt ]; then echo \"pas de lecture\"; fi"
    ]
  },
  {
    title: "Opérateurs logiques && et ||",
    category: "Opérateurs Shell",
    definition: "Combiner des commandes avec && et || pour exécuter la suivante seulement en cas de succès ou d'échec de la précédente.",
    examples: [
      "make build && echo \"build ok\"",
      "ping -c1 example.com || echo \"hôte injoignable\"",
      "[ -f file ] && rm file || echo \"fichier absent\"",
      "mkdir logs && cd logs",
      "command_qui_peut_échouer || exit 1"
    ]
  },
  {
    title: "Code de sortie et $?",
    category: "Opérateurs Shell",
    definition: "Chaque commande retourne un entier de sortie ; 0 signifie succès et un non‑zéro indique une erreur. La variable spéciale $? contient le dernier code.",
    examples: [
      "ls fichier_existant",
      "echo \"$?\"    # affiche 0 en cas de succès",
      "ls inexistant",
      "echo \"$?\"    # non‑zéro en cas d'erreur",
      "if ls /root 2>/dev/null; then echo \"ok\"; else echo \"échec\"; fi"
    ]
  },
  {
    title: "Définir et utiliser des variables",
    category: "Opérateurs Shell",
    definition: "Assigner des valeurs sans espaces autour de = et les relire plus tard avec le préfixe $ et des guillemets.",
    examples: [
      "NAME=\"Alice\"",
      "echo \"$NAME\"",
      "COUNT=3",
      "echo \"Vous avez $COUNT éléments\"",
      "PATH=\"/custom/bin:$PATH\"   # préfixer PATH"
    ]
  },
  {
    title: "Commande test et [[ ]]",
    category: "Opérateurs Shell",
    definition: "Les crochets [ ] et la syntaxe moderne [[ ]] évaluent des conditions dans les if pour bash ou zsh.",
    examples: [
      "if [ \"$1\" = \"start\" ]; then echo \"démarrage\"; fi",
      "if [[ \"$FILE\" == *.log ]]; then echo \"fichier log\"; fi",
      "if [[ -n \"$USER\" && \"$USER\" != \"root\" ]]; then echo \"non‑root\"; fi"
    ]
  },
  {
    title: "Arithmétique dans les boucles",
    category: "Opérateurs Shell",
    definition: "Utiliser l'expansion arithmétique ou let pour mettre à jour des compteurs dans les boucles for et while.",
    examples: [
      "i=0; while [ \"$i\" -lt 3 ]; do echo \"$i\"; i=$((i+1)); done",
      "for ((i=10; i>0; i--)); do echo \"$i\"; done",
      "COUNT=0; for f in *.log; do COUNT=$((COUNT+1)); done"
    ]
  },
  {
    title: "Regroupement et sous‑shells",
    category: "Opérateurs Shell",
    definition: "Utiliser les parenthèses ( ) pour un sous‑shell et { } pour regrouper des commandes qui partagent une redirection.",
    examples: [
      "(cd /tmp && ls)      # cd seulement dans le sous‑shell",
      "{ echo \"start\"; date; } > run.log",
      "(echo one; echo two) | sort"
    ]
  }
];

export const MATH_CONCEPTS_DATA_FR: OperationItem[] = [
  {
    title: "Entiers et codes de sortie",
    category: "Math Shell",
    definition: "Dans le shell, l'arithmétique et les codes de sortie sont toujours des entiers ; 0 signifie en général succès et un non‑zéro indique une erreur.",
    examples: [
      "echo $((1 + 2))        # 3",
      "false; echo \"$?\"      # 1 (échec)",
      "true;  echo \"$?\"      # 0 (succès)",
      "if [ \"$?\" -ne 0 ]; then echo \"dernière commande en erreur\"; fi"
    ]
  },
  {
    title: "Zéro et erreurs de division",
    category: "Math Shell",
    definition: "Zéro se comporte normalement dans la plupart des opérations, mais une division par zéro dans $(( )) ou expr provoque une erreur et un code de sortie non‑zéro.",
    examples: [
      "echo $((5 * 0))        # 0",
      "echo $((5 + 0))        # 5",
      "set +e; expr 10 / 0    # affiche une erreur, code non‑zéro",
      "if ! expr 10 / 0 >/dev/null 2>&1; then echo \"division par zéro\"; fi"
    ]
  },
  {
    title: "Compteurs dans les boucles",
    category: "Math Shell",
    definition: "Utiliser l'expansion arithmétique pour incrémenter ou décrémenter des compteurs dans les boucles while et for.",
    examples: [
      "i=0; while [ \"$i\" -lt 3 ]; do echo \"$i\"; i=$((i+1)); done",
      "for ((i=10; i>0; i--)); do echo \"$i\"; done",
      "COUNT=0; for f in *.log; do COUNT=$((COUNT+1)); done"
    ]
  },
  {
    title: "Plages avec expansion d'accolades",
    category: "Math Shell",
    definition: "L'expansion d'accolades {début..fin[..pas]} génère des séquences d'entiers sans écrire de boucle explicite.",
    examples: [
      "echo {1..5}          # 1 2 3 4 5",
      "echo {0..10..2}      # 0 2 4 6 8 10",
      "for i in {3..1}; do echo \"$i\"; done"
    ]
  },
  {
    title: "Modulo pour pair/impair et cycles",
    category: "Math Shell",
    definition: "Utiliser l'opérateur % dans $(( )) pour tester pair/impair ou faire tourner un compteur dans une plage fixe.",
    examples: [
      "n=4; if [ $((n % 2)) -eq 0 ]; then echo \"pair\"; fi",
      "for i in {0..5}; do echo $((i % 3)); done",
      "index=$(((index+1) % 10))   # cycle 0–9"
    ]
  },
  {
    title: "Utiliser bc pour les décimales",
    category: "Math Shell",
    definition: "La commande bc fournit une arithmétique décimale de précision arbitraire quand l'entier‑seul de $(( )) ne suffit pas.",
    examples: [
      "echo \"1/3\" | bc           # 0 (entier par défaut)",
      "echo \"scale=2; 1/3\" | bc  # 0.33",
      "echo \"scale=3; 2.5 * 4\" | bc   # 10.000"
    ]
  },
  {
    title: "Pourcentages et ratios",
    category: "Math Shell",
    definition: "Calculer des pourcentages et ratios simples dans les scripts avec $(( )) pour les entiers ou bc pour les décimales.",
    examples: [
      "USED=30; TOTAL=50; echo $((USED * 100 / TOTAL))\"%\"   # 60%",
      "echo \"scale=1; 7/20*100\" | bc   # 35.0",
      "echo \"scale=2; $USED/$TOTAL\" | bc"
    ]
  },
  {
    title: "Nombres aléatoires dans le shell",
    category: "Math Shell",
    definition: "Beaucoup de shells exposent un entier pseudo‑aléatoire via $RANDOM ou des outils externes comme shuf.",
    examples: [
      "echo \"$RANDOM\"           # 0–32767 dans bash/zsh",
      "echo $((RANDOM % 6 + 1))  # lancer de dé 1–6",
      "shuf -i 1-10 -n 3         # trois nombres uniques 1–10"
    ]
  },
  {
    title: "Agrégations simples avec awk",
    category: "Math Shell",
    definition: "Utiliser awk pour sommer, moyenner et compter des colonnes numériques issues de fichiers ou de commandes.",
    examples: [
      "df -h | awk 'NR>1 {used+=$3} END {print used}'",
      "awk '{sum+=$1} END {print sum}' numbers.txt",
      "awk '{sum+=$1; n++} END {print sum/n}' numbers.txt"
    ]
  },
  {
    title: "Bornes et validation dans les scripts",
    category: "Math Shell",
    definition: "Combiner comparaisons et arithmétique pour imposer des bornes numériques sur les entrées utilisateur ou la configuration.",
    examples: [
      "if [ \"$PORT\" -lt 1 ] || [ \"$PORT\" -gt 65535 ]; then echo \"port invalide\"; exit 1; fi",
      "if [ \"$PERCENT\" -ge 0 ] && [ \"$PERCENT\" -le 100 ]; then echo \"ok\"; fi",
      "LIMIT=10; [ \"$COUNT\" -gt \"$LIMIT\" ] && COUNT=$LIMIT"
    ]
  }
];

import { GlossaryItem } from '../constants';

// French translations for glossary entries
// Note: Python code examples remain the same in all languages
export const GLOSSARY_FR: GlossaryItem[] = [
  {
    term: "Variable",
    definition: "Une référence nommée à un objet en mémoire qui peut stocker différentes valeurs.",
    levelRange: "1",
    detailedDescription: "Les variables en Python sont dynamiques, ce qui signifie qu'elles peuvent référencer des objets de tout type et peuvent être réassignées à différents types. Contrairement aux langages statiquement typés, les variables Python n'ont pas de types fixes - le type est déterminé par l'objet qu'elles référencent. Les noms de variables doivent suivre des règles spécifiques : ils peuvent contenir des lettres, des chiffres et des underscores, mais ne peuvent pas commencer par un chiffre. Ils sont sensibles à la casse.\n\n1. Explication simple : Une variable est comme une boîte avec une étiquette où Python peut ranger une valeur pour vous.\n2. Explication intermédiaire : Le nom de variable pointe vers (référence) un objet en mémoire, et cette référence peut être changée pour pointer vers un autre objet ou même un autre type au cours du programme.\n3. Explication approfondie : Dans CPython, les variables sont des entrées dans un espace de noms (un dictionnaire en interne) qui lient des identifiants à des objets ; l'affectation modifie ces liaisons et plusieurs noms peuvent désigner le même objet, ce qui est crucial à comprendre pour les types mutables.",
    example: "score = 42\nname = 'Alice'\nactive = True"
  },
  {
    term: "Chaîne de caractères",
    definition: "Une séquence immuable de caractères représentant des données texte.",
    levelRange: "1",
    detailedDescription: "Les chaînes de caractères en Python sont des objets immuables qui représentent du texte. Elles peuvent être créées avec des guillemets simples, doubles ou triples pour les chaînes multi-lignes. Python fournit de nombreuses méthodes de chaîne pour la manipulation, incluant le découpage, la concaténation et le formatage. Les chaînes sont des séquences, donc elles supportent l'indexation et l'itération.\n\n1. Explication simple : Une chaîne est la façon dont Python stocke des mots et des phrases, comme le texte que vous taperiez dans un message.\n2. Explication intermédiaire : Une chaîne est une suite ordonnée de caractères que vous pouvez découper, parcourir et combiner, mais vous ne modifiez jamais l'objet d'origine directement.\n3. Explication approfondie : Une chaîne est un type de séquence immuable basé sur une représentation Unicode ; la plupart des opérations créent de nouveaux objets chaîne, et l'indexation ou le découpage travaille sur des points de code, ce qui est important pour les encodages et les performances.",
    example: "message = 'Hello World'\nlong_text = '''This is a\nmulti-line string'''\nfirst_char = message[0]  # 'H'"
  },
  {
    term: "Entier",
    definition: "Nombres entiers sans décimales, avec une précision illimitée.",
    levelRange: "1",
    detailedDescription: "Les entiers Python ont une précision arbitraire, ce qui signifie qu'ils peuvent être arbitrairement grands sans problèmes de débordement qui surviennent avec les types entiers à largeur fixe dans d'autres langages. Cela rend Python adapté aux calculs mathématiques impliquant de très grands nombres. Les littéraux entiers peuvent inclure des underscores pour la lisibilité.\n\n1. Explication simple : Un entier est un nombre entier comme 0, 3 ou -10, sans partie décimale.\n2. Explication intermédiaire : Les entiers servent à compter, à indexer et à faire des calculs de base, et en Python vous n'avez pratiquement jamais à vous soucier d'un dépassement de capacité.\n3. Explication approfondie : Le type int de Python bascule automatiquement entre une représentation de taille machine et un entier à précision arbitraire ; des opérations comme l'addition ou la multiplication peuvent donc allouer de nouveaux objets et leur coût dépend du nombre de chiffres.",
    example: "small = 42\nlarge = 1_000_000_000_000\nnegative = -17"
  },
  {
    term: "Nombre à virgule flottante",
    definition: "Nombres décimaux représentés en format binaire à virgule flottante.",
    levelRange: "1",
    detailedDescription: "Les objets float représentent des nombres réels avec précision décimale. Ils sont implémentés en utilisant le format binaire à double précision IEEE 754, ce qui peut conduire à de petites erreurs de précision dans certains calculs. Pour les applications financières ou autres nécessitant une arithmétique décimale exacte, le module decimal doit être utilisé à la place.\n\n1. Explication simple : Un float est un nombre avec une virgule, comme 3,5 ou -0,25.\n2. Explication intermédiaire : Les floats sont pratiques pour les mesures courantes (prix, distances, moyennes), mais de petits écarts d'arrondi sont normaux à cause du stockage binaire.\n3. Explication approfondie : Le type float de Python encapsule un double IEEE 754, donc les opérations suivent ces règles, ce qui influence les comparaisons, l'accumulation des erreurs d'arrondi et le comportement des valeurs spéciales comme NaN et l'infini.",
    example: "pi = 3.14159\nnegative = -2.5\nscientific = 1.23e-4"
  },
  {
    term: "Booléen",
    definition: "Un type de données binaire représentant les valeurs True ou False.",
    levelRange: "1",
    detailedDescription: "Les valeurs booléennes sont utilisées pour les opérations logiques et les instructions conditionnelles. En Python, chaque objet a une valeur booléenne inhérente (truthiness), où la plupart des objets sont considérés comme True sauf des valeurs falsy spécifiques comme 0, les chaînes vides, les listes vides, None et False lui-même. Les opérations booléennes suivent les règles logiques standard.\n\n1. Explication simple : Un booléen est une valeur oui/non : soit True, soit False.\n2. Explication intermédiaire : Les booléens permettent à votre programme de prendre des décisions dans les if et les boucles, et beaucoup d'expressions (comme les comparaisons) produisent automatiquement True ou False.\n3. Explication approfondie : En Python, bool est une sous-classe de int avec seulement deux instances (True et False, égales à 1 et 0), et chaque type définit sa \"véracité\" via __bool__ ou __len__, ce qui est essentiel quand on écrit des conditions et des classes personnalisées.",
    example: "is_active = True\nhas_permission = False\nresult = (5 > 3) and (10 < 20)  # True"
  },
  {
    term: "Instruction If",
    definition: "Une instruction conditionnelle qui exécute du code uniquement lorsqu'une condition est True.",
    levelRange: "3",
    detailedDescription: "L'instruction if est la construction conditionnelle principale de Python. Elle évalue une expression booléenne et exécute le bloc indenté uniquement si la condition est True. Python utilise l'indentation (pas d'accolades) pour définir les blocs de code. L'instruction if peut être suivie de clauses elif (sinon-si) et else optionnelles pour gérer plusieurs conditions.\n\n1. Explication simple : if permet de dire « fais ceci seulement si la condition est vraie ».\n2. Explication intermédiaire : Les blocs if/elif/else contrôlent quel chemin de code s'exécute en fonction de conditions booléennes.\n3. Explication approfondie : Comme les conditions reposent sur la véracité des objets et l'évaluation court-circuitée, bien structurer ses if est essentiel pour garder un flux de contrôle lisible et éviter les imbrications difficiles à suivre.",
    example: "age = 18\nif age >= 18:\n    print('Adult')\nelif age >= 13:\n    print('Teen')\nelse:\n    print('Child')"
  },
  {
    term: "Opérateur de comparaison",
    definition: "Opérateurs qui comparent deux valeurs et retournent un résultat booléen.",
    levelRange: "3",
    detailedDescription: "Les opérateurs de comparaison évaluent les relations entre valeurs et retournent True ou False. Python supporte : == (égal), != (non égal), < (inférieur à), > (supérieur à), <= (inférieur ou égal), >= (supérieur ou égal), is (identité), in (appartenance). Ces opérateurs sont fondamentaux pour la logique conditionnelle et le flux de contrôle.\n\n1. Explication simple : Les opérateurs de comparaison répondent à des questions comme « est-ce égal ? » ou « est-ce plus grand ? » et renvoient True ou False.\n2. Explication intermédiaire : Ils sont utilisés dans les conditions pour tester des plages de valeurs, l'égalité, l'appartenance à une collection ou le fait que deux noms pointent vers le même objet.\n3. Explication approfondie : Comprendre la différence entre == et is, les comparaisons chaînées comme a < b < c, et la manière dont les méthodes de comparaison riches (__eq__, __lt__, etc.) sont implémentées est crucial pour écrire du code Python correct et idiomatique.",
    example: "x = 10\ny = 5\nprint(x > y)   # True\nprint(x == y)  # False\nprint(x != y)  # True\nprint(5 in [1, 2, 3, 4, 5])  # True"
  },
  {
    term: "Opérateur logique",
    definition: "Opérateurs qui combinent des expressions booléennes : and, or, not.",
    levelRange: "3",
    detailedDescription: "Les opérateurs logiques combinent des valeurs ou expressions booléennes. 'and' retourne True uniquement si les deux opérandes sont True. 'or' retourne True si au moins un opérande est True. 'not' inverse la valeur booléenne. Python utilise l'évaluation court-circuit : 'and' s'arrête au premier False, 'or' s'arrête au premier True, ce qui peut améliorer les performances.\n\n1. Explication simple : Les opérateurs logiques permettent de combiner des conditions True/False avec « et », « ou » et « non ».\n2. Explication intermédiaire : Ils sont essentiels pour exiger plusieurs conditions à la fois, accepter des alternatives ou inverser un test, tout en s'arrêtant tôt lorsque le résultat est déjà déterminé.\n3. Explication approfondie : Comme and/or renvoient l'un de leurs opérandes (et pas seulement True/False), ils sont souvent utilisés de manière idiomatique dans les expressions ; bien comprendre ce comportement évite des bugs subtils.",
    example: "x = 10\ny = 5\nresult1 = (x > 5) and (y < 10)  # True\nresult2 = (x < 5) or (y > 10)   # False\nresult3 = not (x > 5)            # False"
  },
  {
    term: "Boucle For",
    definition: "Une boucle qui itère sur une séquence (liste, chaîne, range, etc.).",
    levelRange: "3",
    detailedDescription: "La boucle for itère sur les éléments d'une séquence ou d'un autre objet itérable. Elle gère automatiquement l'itération, éliminant le besoin de gestion manuelle d'index. La variable de boucle prend chaque valeur de la séquence à tour de rôle. Les boucles for sont préférées lorsque vous savez combien d'itérations vous avez besoin ou lors de l'itération sur une collection.\n\n1. Explication simple : Une boucle for répète du code une fois pour chaque élément d'une liste ou d'une collection.\n2. Explication intermédiaire : La variable de boucle prend successivement chaque valeur d'un itérable, ce qui évite de gérer les indices à la main.\n3. Explication approfondie : La boucle for repose sur le protocole d'itération (appel à iter() puis next()), ce qui permet de parcourir aussi bien des listes finies que des flux paresseux ou potentiellement infinis.",
    example: "fruits = ['apple', 'banana', 'cherry']\nfor fruit in fruits:\n    print(fruit)\n\n# With range\nfor i in range(5):\n    print(i)  # 0, 1, 2, 3, 4"
  },
  {
    term: "Boucle While",
    definition: "Une boucle qui continue à s'exécuter tant qu'une condition reste True.",
    levelRange: "3",
    detailedDescription: "La boucle while exécute de manière répétée un bloc de code tant que la condition évalue à True. Contrairement aux boucles for, les boucles while sont utilisées lorsque le nombre d'itérations est inconnu à l'avance. Il faut faire attention à s'assurer que la condition devient éventuellement False, sinon une boucle infinie se produit. La variable de boucle doit être modifiée dans le corps de la boucle.\n\n1. Explication simple : Une boucle while continue tant qu'une condition reste vraie.\n2. Explication intermédiaire : Elle est idéale quand on ne connaît pas à l'avance le nombre de répétitions, mais qu'on sait quand s'arrêter.\n3. Explication approfondie : Bien concevoir la mise à jour de l'état et la condition d'arrêt est essentiel pour éviter les boucles infinies et écrire une logique de boucle claire et testable.",
    example: "count = 0\nwhile count < 5:\n    print(count)\n    count += 1  # Important: modifier la condition\n\n# Boucle infinie (à éviter!)\n# while True:\n#     print('Forever')"
  },
  {
    term: "Range",
    definition: "Une fonction intégrée qui génère une séquence de nombres.",
    levelRange: "3",
    detailedDescription: "La fonction range() génère une séquence immuable de nombres, couramment utilisée dans les boucles for. Elle peut prendre un argument (stop), deux arguments (start, stop), ou trois arguments (start, stop, step). La valeur stop est exclusive. Range est efficace en mémoire car il génère les nombres à la demande plutôt que de tous les stocker en mémoire.\n\n1. Explication simple : range() fournit une série de nombres pour compter dans les boucles.\n2. Explication intermédiaire : Vous contrôlez le début, la fin (exclusive) et le pas, ce qui est pratique pour les indices et les motifs réguliers.\n3. Explication approfondie : Les objets range sont des séquences immuables et légères ; comprendre la convention « début inclus, fin exclue » aide à éviter les erreurs de décalage d'un.",
    example: "range(5)           # 0, 1, 2, 3, 4\nrange(2, 6)        # 2, 3, 4, 5\nrange(0, 10, 2)    # 0, 2, 4, 6, 8\nrange(10, 0, -1)   # 10, 9, 8, 7, 6, 5, 4, 3, 2, 1"
  },
  {
    term: "Instruction Break",
    definition: "Une instruction qui sort immédiatement de la boucle actuelle.",
    levelRange: "3",
    detailedDescription: "L'instruction break termine la boucle englobante la plus proche (for ou while) et continue l'exécution après la boucle. Elle est couramment utilisée pour sortir d'une boucle tôt lorsqu'une condition est remplie, comme trouver une valeur cible ou rencontrer une condition d'erreur. Break ne sort que d'un niveau d'imbrication.\n\n1. Explication simple : break permet de sortir immédiatement d'une boucle.\n2. Explication intermédiaire : On l'utilise quand on a trouvé ce qu'on cherchait ou qu'il n'est plus logique de continuer la boucle.\n3. Explication approfondie : Combinée avec la clause else des boucles, break permet d'exprimer proprement des motifs de recherche du type « chercher puis faire autre chose seulement si rien n'a été trouvé ».",
    example: "for i in range(10):\n    if i == 5:\n        break  # Sortir de la boucle quand i est 5\n    print(i)  # Affiche 0, 1, 2, 3, 4"
  },
  {
    term: "Instruction Continue",
    definition: "Une instruction qui ignore le reste de l'itération de boucle actuelle.",
    levelRange: "3",
    detailedDescription: "L'instruction continue ignore le code restant dans l'itération de boucle actuelle et passe à l'itération suivante. Contrairement à break, continue ne sort pas de la boucle entièrement - elle passe juste au cycle suivant. C'est utile pour ignorer certaines valeurs ou conditions tout en continuant à traiter les autres.\n\n1. Explication simple : continue saute le reste du corps de la boucle et passe directement au tour suivant.\n2. Explication intermédiaire : C'est pratique pour ignorer certains cas (comme des données invalides) tout en continuant à traiter les autres éléments.\n3. Explication approfondie : Bien utilisée, continue simplifie les conditions complexes dans les boucles, mais un usage excessif peut aussi rendre le flux de contrôle plus difficile à suivre.",
    example: "for i in range(10):\n    if i % 2 == 0:  # Ignorer les nombres pairs\n        continue\n    print(i)  # Affiche uniquement les nombres impairs: 1, 3, 5, 7, 9"
  },
  {
    term: "Fonction",
    definition: "Un bloc de code réutilisable qui effectue une tâche spécifique.",
    levelRange: "5",
    detailedDescription: "Les fonctions sont des objets de première classe en Python qui encapsulent du code pour la réutilisation. Elles peuvent accepter des paramètres et retourner des valeurs. Les fonctions Python supportent les paramètres par défaut, les listes d'arguments de longueur variable (*args, **kwargs), et peuvent être passées comme arguments à d'autres fonctions. Les fonctions peuvent être définies avec ou sans instructions return explicites.\n\n1. Explication simple : Une fonction est une recette nommée pour accomplir une tâche que vous pouvez appeler plusieurs fois.\n2. Explication intermédiaire : Les fonctions regroupent des étapes liées, reçoivent des entrées (paramètres) et renvoient éventuellement un résultat, ce qui rend le code plus organisé et évite les répétitions.\n3. Explication approfondie : Comme Python traite les fonctions comme des objets de première classe, on peut les stocker, les passer en argument et les retourner, ce qui permet de construire des abstractions de plus haut niveau comme les callbacks et les décorateurs.",
    example: "def greet(name, greeting='Hello'):\n    return f'{greeting}, {name}!'\n\nresult = greet('Alice')  # 'Hello, Alice!'\nresult2 = greet('Bob', 'Hi')  # 'Hi, Bob!'"
  },
  {
    term: "Liste",
    definition: "Une séquence mutable et ordonnée d'objets qui peut contenir des types mixtes.",
    levelRange: "5",
    detailedDescription: "Les listes sont le type de séquence mutable principal de Python. Elles peuvent croître et décroître dynamiquement, et peuvent contenir des objets de différents types. Les listes supportent des opérations puissantes comme le découpage, la concaténation et les compréhensions de liste. Elles sont implémentées comme des tableaux dynamiques, fournissant un accès aléatoire efficace mais potentiellement des insertions/suppressions coûteuses au milieu.\n\n1. Explication simple : Une liste est une collection ordonnée d'éléments, comme une liste de tâches en code.\n2. Explication intermédiaire : Vous pouvez ajouter, supprimer et modifier des éléments sur place, les parcourir et en découper des sous-listes pour les traiter.\n3. Explication approfondie : Les listes sont des tableaux dynamiques ; l'ajout en fin est en général O(1) amorti, l'accès par indice est O(1), mais les insertions/suppressions au milieu sont O(n), ce qui compte pour les performances.",
    example: "numbers = [1, 2, 3, 4, 5]\nfruits = ['apple', 'banana', 'cherry']\nmixed = [42, 'hello', True, [1, 2]]\n\n# Compréhension de liste\nsquares = [x**2 for x in numbers]"
  },
  {
    term: "Dictionnaire",
    definition: "Un mapping mutable de clés hashables vers des valeurs arbitraires.",
    levelRange: "5",
    detailedDescription: "Les dictionnaires fournissent des recherches rapides utilisant des clés plutôt qu'un indexage positionnel. Les clés doivent être des objets hashables (immuables), tandis que les valeurs peuvent être de tout type. Les dictionnaires maintiennent l'ordre d'insertion à partir de Python 3.7. Ils sont implémentés en utilisant des tables de hachage, fournissant un temps de recherche moyen O(1). Les compréhensions de dictionnaire permettent de créer des dictionnaires à partir d'itérables.\n\n1. Explication simple : Un dictionnaire est un ensemble de paires clé/valeur, comme un mini carnet d'adresses en code.\n2. Explication intermédiaire : Au lieu d'utiliser des positions, vous accédez aux valeurs avec des clés parlantes (comme \"nom\" ou \"score\"), ce qui rend les données plus faciles à manipuler.\n3. Explication approfondie : Les dicts sont des tables de hachage ; comprendre la notion de clé hashable, les collisions et la comparaison des clés (__hash__, __eq__) est important pour concevoir des mappings fiables et efficaces.",
    example: "person = {'name': 'Alice', 'age': 30, 'city': 'New York'}\n\n# Accéder aux valeurs\nname = person['name']\n\n# Compréhension de dictionnaire\nsquares = {x: x**2 for x in range(5)}  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}"
  },
  {
    term: "Classe",
    definition: "Un modèle pour créer des objets avec un comportement et un état partagés.",
    levelRange: "7",
    detailedDescription: "Les classes définissent la structure et le comportement des objets. Elles contiennent des attributs (données) et des méthodes (fonctions). La méthode __init__ initialise les nouvelles instances. Les classes supportent l'héritage, permettant aux classes enfant d'étendre ou de modifier le comportement de la classe parent. Python utilise un ordre de résolution de méthode (MRO) pour déterminer quelle méthode appeler dans les scénarios d'héritage multiple.",
    example: "class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def greet(self):\n        return f'Hello, I am {self.name}'\n\nperson = Person('Alice', 30)\nprint(person.greet())  # 'Hello, I am Alice'"
  },
  {
    term: "Méthode",
    definition: "Une fonction définie à l'intérieur d'une classe qui opère sur les instances de cette classe.",
    levelRange: "7",
    detailedDescription: "Les méthodes sont des fonctions liées aux instances de classe. Le premier paramètre est conventionnellement nommé 'self' et se réfère à l'instance. Les méthodes peuvent accéder et modifier les attributs d'instance. Les méthodes de classe et les méthodes statiques fournissent des moyens alternatifs de définir des fonctions liées aux classes. Les méthodes supportent les mêmes caractéristiques de paramètres que les fonctions régulières.",
    example: "class Calculator:\n    def add(self, a, b):\n        return a + b\n    \n    def multiply(self, a, b):\n        return a * b\n\ncalc = Calculator()\nresult = calc.add(5, 3)  # 8"
  },
  {
    term: "Méthodes intégrées",
    definition: "Méthodes intégrées aux types Python (str, list, dict, set, etc.) — disponibles sur chaque instance.",
    levelRange: "1-10",
    detailedDescription: "Les types Python disposent de méthodes intégrées : appelez-les avec la notation point (obj.méthode()). Chaînes : capitalize(), lower(), upper(), split(), join(), strip(), find(), replace(), etc. Listes : append(), extend(), insert(), remove(), pop(), sort(), reverse(), etc. Dictionnaires : get(), keys(), values(), items(), pop(), update(), etc. Ensembles : add(), remove(), union(), intersection(), difference(), etc. Tuples : count(), index(). Bytes/bytearray : similaires à str plus méthodes mutables. Chaque type expose des méthodes adaptées à sa structure.",
    example: "# Chaînes\nstr.capitalize()       # Première lettre en majuscule\nstr.lower(), str.upper()\nstr.split(s), str.join(iter)\nstr.strip(), str.find(s), str.replace(a,b)\n\n# Listes\nlist.append(x), list.extend(it)\nlist.insert(i,x), list.remove(x), list.pop(i=-1)\nlist.sort(), list.reverse(), list.copy()\n\n# Dictionnaires\ndict.get(k,default), dict.keys(), dict.values()\ndict.items(), dict.pop(k), dict.update(other)\n\n# Ensembles\nset.add(e), set.remove(e), set.discard(e)\nset.union(*o), set.intersection(*o)\nset.difference(*o)"
  },
  {
    term: "Portée",
    definition: "La région d'un programme où une variable est accessible.",
    levelRange: "7",
    detailedDescription: "La portée détermine où les variables peuvent être accessibles. Python a quatre portées : locale (à l'intérieur des fonctions), englobante (fonctions imbriquées), globale (niveau module), et intégrée (noms intégrés de Python). Les variables dans les portées intérieures peuvent masquer celles des portées extérieures. La règle LEGB (Local, Enclosing, Global, Built-in) détermine la résolution des noms.",
    example: "global_var = 'global'\n\ndef outer():\n    enclosing_var = 'enclosing'\n    \n    def inner():\n        local_var = 'local'\n        print(local_var)  # local\n        print(enclosing_var)  # enclosing\n        print(global_var)  # global\n    \n    return inner\n\ninner_func = outer()\ninner_func()"
  },
  {
    term: "Variable globale",
    definition: "Une variable définie au niveau du module, accessible dans tout le module.",
    levelRange: "7",
    detailedDescription: "Les variables globales sont définies en dehors de toute fonction ou classe. Elles peuvent être accessibles depuis n'importe où dans le module, y compris à l'intérieur des fonctions. Pour modifier une variable globale depuis l'intérieur d'une fonction, vous devez la déclarer avec le mot-clé 'global'. Les variables globales devraient être utilisées avec parcimonie car elles peuvent rendre le code plus difficile à comprendre et à déboguer.",
    example: "counter = 0\n\ndef increment():\n    global counter\n    counter += 1\n\nincrement()\nprint(counter)  # 1"
  },
  {
    term: "Variable locale",
    definition: "Une variable définie à l'intérieur d'une fonction, uniquement accessible dans cette fonction.",
    levelRange: "7",
    detailedDescription: "Les variables locales sont créées lorsqu'une fonction est appelée et détruites lorsque la fonction retourne. Elles ne sont pas accessibles en dehors de la fonction. Les variables locales avec le même nom que les variables globales masquent les globales dans la portée de la fonction. C'est ce qu'on appelle le masquage de variable.",
    example: "def calculate():\n    x = 10  # variable locale\n    y = 20  # variable locale\n    return x + y\n\nresult = calculate()  # 30\n# x et y ne sont pas accessibles ici"
  },
  {
    term: "Fonction imbriquée",
    definition: "Une fonction définie à l'intérieur d'une autre fonction.",
    levelRange: "7",
    detailedDescription: "Les fonctions imbriquées (aussi appelées fonctions internes) sont définies dans le corps d'une autre fonction. Elles peuvent accéder aux variables de leur portée englobante (fermeture). Les fonctions imbriquées sont utiles pour créer des fonctions d'aide ou implémenter des décorateurs. Elles suivent la règle LEGB pour la résolution des noms.",
    example: "def outer_function(x):\n    def inner_function(y):\n        return x + y  # peut accéder à x de la portée extérieure\n    return inner_function\n\nadd_five = outer_function(5)\nprint(add_five(3))  # 8"
  },
  {
    term: "Fermeture",
    definition: "Une fonction qui se souvient de l'environnement dans lequel elle a été créée.",
    levelRange: "9",
    detailedDescription: "Une fermeture se produit lorsqu'une fonction imbriquée référence des variables de sa portée englobante, même après que la fonction extérieure ait terminé son exécution. Cela permet à la fonction interne de 'se souvenir' de l'état de la fonction extérieure. Les fermetures sont fondamentales pour les décorateurs, les fonctions partielles et de nombreux modèles de conception.",
    example: "def make_multiplier(factor):\n    def multiply(number):\n        return number * factor  # factor est 'mémorisé'\n    return multiply\n\ndouble = make_multiplier(2)\nprint(double(5))  # 10\ntriple = make_multiplier(3)\nprint(triple(5))  # 15"
  },
  {
    term: "Fonction d'aide",
    definition: "Une petite fonction utilitaire qui assiste une fonction plus grande.",
    levelRange: "7",
    detailedDescription: "Les fonctions d'aide (aussi appelées fonctions utilitaires) sont de petites fonctions définies pour effectuer des tâches spécifiques qui supportent des fonctions plus grandes. Elles améliorent la lisibilité et la réutilisabilité du code en décomposant des opérations complexes en morceaux gérables. Les fonctions d'aide sont souvent définies dans la portée où elles sont utilisées.",
    example: "def process_data(data):\n    def validate_item(item):\n        return isinstance(item, int) and item > 0\n    \n    def clean_item(item):\n        return max(0, min(100, item))\n    \n    valid_data = [clean_item(item) for item in data if validate_item(item)]\n    return valid_data\n\nresult = process_data([10, -5, 50, 'invalid', 200])  # [10, 50]"
  },
  {
    term: "Récursivité",
    definition: "Une fonction qui s'appelle elle-même pour résoudre un problème.",
    levelRange: "9",
    detailedDescription: "La récursivité se produit lorsqu'une fonction s'appelle elle-même, soit directement soit indirectement à travers d'autres fonctions. Chaque appel récursif crée un nouveau contexte d'exécution avec ses propres variables locales. La récursivité nécessite un cas de base pour empêcher les boucles infinies et un cas récursif qui se dirige vers le cas de base. Python a une limite de récursivité (par défaut 1000) pour empêcher le débordement de pile.",
    example: "def factorial(n):\n    if n <= 1:  # cas de base\n        return 1\n    return n * factorial(n - 1)  # cas récursif\n\nprint(factorial(5))  # 120"
  },
  {
    term: "Décorateur",
    definition: "Une fonction qui modifie le comportement d'une autre fonction.",
    levelRange: "9",
    detailedDescription: "Les décorateurs sont des fonctions qui prennent une autre fonction comme argument et retournent une version modifiée de cette fonction. Ils sont appliqués en utilisant le symbole @. Les décorateurs sont couramment utilisés pour la journalisation, l'authentification, la mise en cache et la validation. Ils utilisent les fermetures et les objets fonction pour envelopper la fonctionnalité.",
    example: "def timer(func):\n    def wrapper(*args, **kwargs):\n        import time\n        start = time.time()\n        result = func(*args, **kwargs)\n        end = time.time()\n        print(f'{func.__name__} took {end - start:.2f} seconds')\n        return result\n    return wrapper\n\n@timer\ndef slow_function():\n    import time\n    time.sleep(1)\n    return 'done'\n\nslow_function()  # affiche les informations de temps"
  },
  {
    term: "Fonction Lambda",
    definition: "Une fonction anonyme et en ligne définie avec le mot-clé lambda.",
    levelRange: "7",
    detailedDescription: "Les fonctions lambda sont de petites fonctions anonymes qui peuvent être définies en ligne. Elles peuvent prendre n'importe quel nombre d'arguments mais ne peuvent avoir qu'une seule expression. Les fonctions lambda sont souvent utilisées avec des fonctions comme map(), filter(), et sorted() où une petite fonction est nécessaire temporairement. Elles ne peuvent pas contenir d'instructions ou de logique complexe.",
    example: "numbers = [1, 2, 3, 4, 5]\n\n# Lambda avec map\neven_numbers = list(map(lambda x: x * 2, numbers))  # [2, 4, 6, 8, 10]\n\n# Lambda avec filter\nevens = list(filter(lambda x: x % 2 == 0, numbers))  # [2, 4]\n\n# Lambda avec sorted\npairs = [(1, 'one'), (2, 'two'), (3, 'three')]\nsorted_pairs = sorted(pairs, key=lambda x: x[1])"
  },
  {
    term: "Générateur",
    definition: "Une fonction qui produit des valeurs une à la fois au lieu de retourner une liste complète.",
    levelRange: "9",
    detailedDescription: "Les générateurs sont des fonctions qui utilisent le mot-clé 'yield' pour produire une séquence de valeurs paresseusement. Au lieu de calculer toutes les valeurs à la fois et de les stocker en mémoire, les générateurs calculent les valeurs à la demande. Cela les rend efficaces en mémoire pour les grands ensembles de données. Les générateurs peuvent être consommés en utilisant next() ou dans des boucles for.",
    example: "def fibonacci_generator():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\n\nfib = fibonacci_generator()\nprint(next(fib))  # 0\nprint(next(fib))  # 1\nprint(next(fib))  # 1\nprint(next(fib))  # 2\n\n# Ou utiliser dans une boucle\nfor num in fib:\n    if num > 100:\n        break\n    print(num)"
  },
  {
    term: "None",
    definition: "Une constante spéciale représentant l'absence de valeur.",
    levelRange: "1",
    detailedDescription: "None est la valeur nulle de Python, représentant l'absence de valeur ou un objet null. C'est un objet singleton (une seule instance existe). None est couramment utilisé comme valeur de retour par défaut pour les fonctions qui ne retournent rien explicitement. Il est évalué à False dans les contextes booléens.\n\n1. Explication simple : None signifie « rien ici » ou « pas encore de valeur » en Python.\n2. Explication intermédiaire : Les fonctions qui ne retournent rien explicitement retournent en réalité None, et vous pouvez aussi utiliser None comme valeur de remplacement quand vous n'avez pas encore décidé d'une valeur réelle.\n3. Explication approfondie : None est un objet sentinelle singleton souvent utilisé pour signaler des données manquantes, des valeurs optionnelles ou des états spéciaux ; les vérifications d'identité (is None) sont préférées à l'égalité, et utiliser None comme argument par défaut a des implications importantes pour les paramètres mutables.",
    example: "value = None\nif value is None:\n    print('No value assigned')\n\ndef find_item(items, target):\n    for item in items:\n        if item == target:\n            return item\n    return None  # Not found"
  },
  {
    term: "Commentaire",
    definition: "Texte dans le code ignoré par l'interpréteur Python, utilisé pour la documentation.",
    levelRange: "1",
    detailedDescription: "Les commentaires commencent par # et continuent jusqu'à la fin de la ligne. Ils sont utilisés pour expliquer le code, documenter les fonctions ou désactiver temporairement du code. Les commentaires multi-lignes peuvent être créés avec plusieurs lignes # ou des chaînes entre triples guillemets (bien que cette dernière crée un objet chaîne). Les commentaires sont essentiels pour la lisibilité et la maintenance du code.\n\n1. Explication simple : Un commentaire est une note pour les humains que Python ignore lors de l'exécution du code.\n2. Explication intermédiaire : Les bons commentaires expliquent pourquoi le code est écrit d'une certaine manière ou ce que fait un bloc non évident, sans répéter ce qui est déjà clair dans le code.\n3. Explication approfondie : La qualité des commentaires affecte fortement la maintenabilité ; les équipes utilisent souvent les commentaires avec les docstrings et les annotations de type pour enregistrer les hypothèses, les cas limites et les décisions de conception qui ne peuvent pas être facilement exprimées dans le code seul.",
    example: "# This is a single-line comment\n\n# Multi-line comments use\n# multiple hash symbols\n\nx = 5  # Inline comment explaining the variable\n\n\"\"\"\nThis is a docstring, not technically a comment,\nbut often used for documentation.\n\"\"\""
  },
  {
    term: "Conversion de type",
    definition: "Convertir une valeur d'un type de données à un autre.",
    levelRange: "1",
    detailedDescription: "La conversion de type (aussi appelée cast) transforme les valeurs d'un type à un autre. Python fournit des fonctions intégrées comme int(), float(), str(), bool() pour les conversions. Certaines conversions sont automatiques (implicites), tandis que d'autres doivent être explicites. Toutes les conversions ne sont pas possibles — tenter des conversions invalides lève TypeError.\n\n1. Explication simple : La conversion de type consiste à demander à Python de transformer une valeur en un autre type, comme transformer la chaîne « 42 » en nombre 42.\n2. Explication intermédiaire : Vous utilisez des fonctions comme int(), float(), str() et bool() pour convertir les valeurs quand vous en avez besoin sous une forme différente pour les calculs, l'affichage ou la logique.\n3. Explication approfondie : Comprendre quelles conversions sont sûres, avec perte ou invalides (par exemple, analyser l'entrée utilisateur ou convertir des floats en int) est essentiel pour éviter les bugs et les exceptions, surtout avec des sources de données externes et des interfaces utilisateur.",
    example: "x = '42'\nnumber = int(x)  # Convert string to integer: 42\n\ndecimal = float(5)  # Convert int to float: 5.0\n\ntext = str(123)  # Convert number to string: '123'\n\nboolean = bool(1)  # Convert to boolean: True\nboolean2 = bool(0)  # False"
  },
  {
    term: "Opérateur arithmétique",
    definition: "Opérateurs qui effectuent des opérations mathématiques : +, -, *, /, //, %, **.",
    levelRange: "1",
    detailedDescription: "Les opérateurs arithmétiques effectuent des opérations mathématiques de base. + (addition), - (soustraction), * (multiplication), / (division, retourne toujours un float), // (division entière), % (modulo/reste), ** (exponentiation). Python suit les règles standard de priorité mathématique. Une division par zéro lève ZeroDivisionError.\n\n1. Explication simple : Les opérateurs arithmétiques sont les symboles que vous connaissez déjà en mathématiques, comme + et -, qui permettent à Python d'additionner, soustraire, multiplier et diviser des nombres.\n2. Explication intermédiaire : Ces opérateurs suivent un ordre d'opérations fixe, et certains (comme // et %) sont particulièrement utiles pour les calculs entiers, les découpages et les motifs.\n3. Explication approfondie : Le comportement des opérateurs interagit avec la tour numérique de Python (int, float, complex, Decimal, Fraction) et les règles de promotion de types, donc comprendre comment les expressions à types mixtes sont évaluées aide à écrire du code numérique précis.",
    example: "a = 10\nb = 3\n\nprint(a + b)   # 13 (addition)\nprint(a - b)   # 7 (subtraction)\nprint(a * b)   # 30 (multiplication)\nprint(a / b)   # 3.333... (division)\nprint(a // b)  # 3 (floor division)\nprint(a % b)   # 1 (modulo)\nprint(a ** b)  # 1000 (exponentiation)"
  },
  {
    term: "Concaténation de chaînes",
    definition: "Combiner plusieurs chaînes en une seule chaîne avec + ou join().",
    levelRange: "1",
    detailedDescription: "La concaténation de chaînes combine les chaînes bout à bout. L'opérateur + concatène deux chaînes. Pour plusieurs chaînes, join() est plus efficace que des opérations + répétées. La concaténation crée de nouveaux objets chaîne car les chaînes sont immuables. L'opérateur += peut être utilisé pour la concaténation en place (bien qu'il crée quand même un nouvel objet).\n\n1. Explication simple : La concaténation consiste à coller des chaînes ensemble pour former un texte plus long.\n2. Explication intermédiaire : Vous pouvez construire rapidement des messages en joignant des éléments comme des noms, des étiquettes et des nombres convertis en chaînes, mais le faire dans une boucle avec + peut être lent.\n3. Explication approfondie : Comme chaque concaténation crée une nouvelle chaîne, les motifs de concaténation intensive devraient utiliser join() ou d'autres techniques de tampon pour les performances, surtout lors de la construction de grandes réponses ou du traitement de flux de données.",
    example: "first = 'Hello'\nlast = 'World'\nresult = first + ' ' + last  # 'Hello World'\n\n# Using join (more efficient for many strings)\nwords = ['Hello', 'World', 'Python']\ncombined = ' '.join(words)  # 'Hello World Python'\n\n# String repetition\nrepeated = 'ha' * 3  # 'hahaha'"
  },
  {
    term: "Découpage de chaîne",
    definition: "Extraire une portion d'une chaîne en utilisant la notation d'index [début:fin:pas].",
    levelRange: "1",
    detailedDescription: "Le découpage de chaîne extrait des sous-chaînes en utilisant la notation entre crochets avec des deux-points. La syntaxe est [début:fin:pas] où début est inclus, fin est exclue, et pas contrôle l'incrément. Les indices négatifs comptent depuis la fin. Omettre début donne 0 par défaut, omettre fin donne la fin par défaut. Le découpage retourne une nouvelle chaîne et ne lève jamais IndexError.\n\n1. Explication simple : Le découpage permet de couper une partie d'une chaîne, comme prendre seulement les trois premières lettres d'un mot.\n2. Explication intermédiaire : Vous choisissez où commencer, où s'arrêter et la taille du pas, ce qui permet d'obtenir des préfixes, des suffixes, un caractère sur deux, ou même inverser le texte.\n3. Explication approfondie : Le découpage est une opération de séquence générale qui fonctionne de la même façon pour les listes, les tuples et de nombreux types personnalisés ; comprendre les objets slice, les indices négatifs et comment les copies sont créées aide à écrire des API propres et du code de traitement de données efficace.",
    example: "text = 'Python'\nprint(text[0:2])    # 'Py'\nprint(text[:3])     # 'Pyt'\nprint(text[3:])     # 'hon'\nprint(text[-3:])    # 'hon'\nprint(text[::2])    # 'Pto' (every 2nd character)\nprint(text[::-1])   # 'nohtyP' (reverse)"
  },
  {
    term: "Opérateur d'assignation",
    definition: "L'opérateur = qui assigne une valeur à une variable.",
    levelRange: "1",
    detailedDescription: "L'opérateur d'assignation = lie une valeur à un nom de variable. Python supporte l'assignation multiple (déballage), l'assignation augmentée (+=, -=, *=, etc.) et l'assignation en chaîne. L'assignation ne copie pas les objets — elle crée une référence. Pour les objets mutables, cela signifie que plusieurs variables peuvent référencer le même objet.\n\n1. Explication simple : Le signe = indique à Python de mémoriser une valeur sous un nom, comme x = 5.\n2. Explication intermédiaire : Quand vous assignez, le nom pointe vers un objet existant au lieu de faire une copie profonde, surtout pour les listes et les dictionnaires.\n3. Explication approfondie : Comprendre que l'assignation ne fait que rebinder les noms (et ne duplique pas les objets) est crucial pour raisonner sur l'aliasage, les mutations, les arguments de fonction et les bugs où modifier une variable semble « mystérieusement » en affecter une autre.",
    example: "x = 10  # Simple assignment\n\na, b = 1, 2  # Multiple assignment\n\nx += 5  # Augmented assignment (same as x = x + 5)\n\n# Chained assignment\nx = y = z = 0  # All three variables equal 0"
  },
  {
    term: "f-string",
    definition: "Un littéral de chaîne formatée qui permet d'intégrer des expressions avec le préfixe f.",
    levelRange: "1",
    detailedDescription: "Les f-chaînes (littéraux de chaîne formatés) sont préfixées avec 'f' ou 'F' et permettent d'intégrer des expressions Python dans des accolades {}. Elles offrent une façon concise et lisible de formater les chaînes. Les f-chaînes sont évaluées à l'exécution et supportent les expressions, les appels de fonction et les spécificateurs de formatage. C'est la méthode préférée pour le formatage de chaînes en Python 3.6+.\n\n1. Explication simple : Une f-chaîne est une chaîne normale avec un f devant qui permet d'insérer des valeurs directement dans le texte avec {accolades}.\n2. Explication intermédiaire : Les f-chaînes facilitent la construction de messages clairs en mélangeant variables et texte en un seul endroit au lieu d'utiliser + ou .format().\n3. Explication approfondie : Comme les f-chaînes évaluent des expressions arbitraires à l'exécution et supportent des mini-langages de formatage riches, elles sont puissantes mais doivent être utilisées avec prudence avec des données non fiables, et comprendre leur ordre d'évaluation aide à éviter des bugs subtils.",
    example: "name = 'Alice'\nage = 30\n\n# F-string with variables\nmessage = f'Hello, {name}!'\n\n# F-string with expressions\ninfo = f'{name} is {age} years old'\n\n# F-string with formatting\nprice = 19.99\nformatted = f'Price: ${price:.2f}'  # 'Price: $19.99'\n\n# F-string with function calls\nresult = f'The length is {len(name)}'"
  },
  {
    term: "Instruction Elif",
    definition: "Une clause conditionnelle qui vérifie des conditions supplémentaires après une instruction if.",
    levelRange: "3",
    detailedDescription: "Elif (sinon-si) permet de vérifier plusieurs conditions séquentiellement. Il combine else et if en un seul mot-clé. Les clauses elif ne sont évaluées que si toutes les conditions précédentes étaient False. Une fois une condition True trouvée, ce bloc s'exécute et les clauses elif/else suivantes sont ignorées. Elif offre une alternative plus propre aux instructions if imbriquées.\n\n1. Explication simple : elif permet de dire « sinon, si cette autre condition est vraie… » au lieu d'écrire un nouveau if.\n2. Explication intermédiaire : Il enchaîne plusieurs tests mutuellement exclusifs pour que seul le premier bloc correspondant s'exécute, en gardant vos décisions organisées.\n3. Explication approfondie : Proper use of elif (instead of nested ifs) clarifies intent and leverages Python’s top‑down evaluation of conditions to keep complex decision trees readable.",
    example: "score = 85\n\nif score >= 90:\n    grade = 'A'\nelif score >= 80:\n    grade = 'B'\nelif score >= 70:\n    grade = 'C'\nelse:\n    grade = 'F'\n\nprint(grade)  # 'B'"
  },
  {
    term: "Clause Else",
    definition: "Une clause optionnelle qui s'exécute lorsque toutes les conditions précédentes sont False.",
    levelRange: "3",
    detailedDescription: "La clause else fournit une action par défaut quand aucune condition dans une chaîne if/elif n'est True. Elle doit venir après toutes les instructions if et elif. Il ne peut y avoir qu'une seule clause else par instruction if. Else peut aussi être utilisée avec les boucles for et while pour exécuter du code quand la boucle se termine normalement (sans break).\n\n1. Explication simple : else est le bloc « sinon » qui s'exécute quand rien avant n'a correspondu.\n2. Explication intermédiaire : Dans if/elif/else, le bloc else gère le cas de repli ; sur les boucles, else s'exécute seulement si la boucle n'a pas quitté tôt avec break.\n3. Explication approfondie : Les clauses else des boucles sont uniques à Python et permettent des idiomes comme « recherche avec for/else », qui séparent proprement le comportement « trouvé » et « non trouvé ».",
    example: "age = 15\n\nif age >= 18:\n    status = 'Adult'\nelse:\n    status = 'Minor'\n\n# Else with loops\nfor i in range(5):\n    if i == 10:\n        break\nelse:\n    print('Loop completed normally')  # This executes"
  },
  {
    term: "Opérateur ternaire",
    definition: "Une expression conditionnelle qui retourne une valeur si True, une autre si False.",
    levelRange: "3",
    detailedDescription: "L'opérateur ternaire de Python (expression conditionnelle) a la syntaxe : valeur_si_vrai if condition else valeur_si_faux. C'est une façon concise d'assigner des valeurs selon des conditions. Contrairement aux instructions if-else, les opérateurs ternaires sont des expressions qui retournent des valeurs. Ils peuvent être imbriqués mais doivent être utilisés avec parcimonie pour la lisibilité.\n\n1. Explication simple : Une expression ternaire permet de choisir entre deux valeurs en une courte ligne.\n2. Explication intermédiaire : C'est utile quand vous voulez assigner l'une de deux options selon une condition simple sans écrire un bloc if complet.\n3. Explication approfondie : Comme les expressions ternaires sont des expressions (et non des instructions), elles peuvent être composées dans des expressions plus grandes, mais un imbrication excessive nuit à la lisibilité et doit être utilisée avec soin.",
    example: "age = 20\nstatus = 'Adult' if age >= 18 else 'Minor'\n\n# Equivalent to:\n# if age >= 18:\n#     status = 'Adult'\n# else:\n#     status = 'Minor'\n\nmax_value = a if a > b else b  # Find maximum"
  },
  {
    term: "Véracité",
    definition: "La valeur booléenne inhérente de tout objet Python.",
    levelRange: "3",
    detailedDescription: "Chaque objet Python a une valeur de véracité — il est considéré soit truthy soit falsy. Les valeurs falsy incluent : None, False, 0, les séquences vides (\"\", [], ()), les mappings vides ({}), et les objets avec __bool__() ou __len__() retournant False/0. Toutes les autres valeurs sont truthy. La véracité est évaluée dans les contextes booléens comme les instructions if.\n\n1. Explication simple : La véracité est la façon dont Python décide si une valeur compte comme True ou False dans les conditions.\n2. Explication intermédiaire : Les choses vides (comme \"\", [], {}) et zéro sont traités comme False, tandis que la plupart des valeurs non vides ou non nulles sont traitées comme True.\n3. Explication approfondie : Les classes peuvent personnaliser leur véracité via __bool__ ou __len__, ce qui est puissant mais doit être conçu avec soin pour que les objets se comportent intuitivement dans les conditions.",
    example: "if 0:  # Falsy\n    print('This won't print')\n\nif 1:  # Truthy\n    print('This will print')\n\nif '':  # Falsy (empty string)\n    print('Won't print')\n\nif 'hello':  # Truthy\n    print('Will print')\n\nif []:  # Falsy (empty list)\n    print('Won't print')"
  },
  {
    term: "Évaluation en court-circuit",
    definition: "Le comportement où les opérateurs logiques s'arrêtent d'évaluer une fois le résultat déterminé.",
    levelRange: "3",
    detailedDescription: "Les opérateurs 'and' et 'or' de Python utilisent l'évaluation en court-circuit. Pour 'and', si l'opérande gauche est False, l'opérande droite n'est pas évaluée. Pour 'or', si l'opérande gauche est True, l'opérande droite n'est pas évaluée. Cela peut améliorer les performances et permettre des opérations sûres comme vérifier si une liste existe avant d'y accéder.\n\n1. Explication simple : L'évaluation en court-circuit signifie que Python s'arrête parfois de vérifier les conditions tôt quand la réponse est déjà connue.\n2. Explication intermédiaire : Avec and/or, Python n'évalue pas la deuxième partie si la première suffit à décider du résultat, ce qui peut éviter des erreurs et gagner du temps.\n3. Explication approfondie : Le comportement en court-circuit permet des idiomes comme l'accès sécurisé aux attributs et l'évaluation paresseuse, mais vous devez vous rappeler que les effets de bord dans le deuxième opérande peuvent ne pas s'exécuter si le premier opérande décide du résultat.",
    example: "x = 0\ny = 5\n\n# Short-circuit with 'and'\nresult = x and y  # Returns 0, doesn't evaluate y\n\n# Short-circuit with 'or'\nresult = x or y  # Returns 5, doesn't need to check further\n\n# Safe list access\nitems = [1, 2, 3]\nif items and items[0] > 0:  # Safe: checks items exists first\n    print('First item is positive')"
  },
  {
    term: "Boucle imbriquée",
    definition: "Une boucle dans une autre boucle, utilisée pour itérer sur des données multidimensionnelles.",
    levelRange: "3",
    detailedDescription: "Les boucles imbriquées placent une boucle dans une autre, créant un motif où la boucle intérieure complète toutes les itérations pour chaque itération de la boucle extérieure. C'est utile pour travailler avec des structures de données 2D, générer des combinaisons ou traiter des grilles. Le nombre total d'itérations est le produit des deux plages de boucle.\n\n1. Explication simple : Une boucle imbriquée est une boucle dans une autre boucle.\n2. Explication intermédiaire : Vous les utilisez pour des choses comme parcourir les lignes et colonnes d'une grille ou comparer chaque paire d'éléments.\n3. Explication approfondie : Comme le travail total croît comme le produit des tailles de boucle (souvent O(n²)), les boucles imbriquées nécessitent une attention particulière avec les performances et sont de bons candidats pour le refactoring ou l'utilisation de bibliothèques vectorisées/optimisées.",
    example: "for i in range(3):\n    for j in range(2):\n        print(f'({i}, {j})')\n# Output:\n# (0, 0) (0, 1)\n# (1, 0) (1, 1)\n# (2, 0) (2, 1)\n\n# Processing a 2D grid\nmatrix = [[1, 2], [3, 4]]\nfor row in matrix:\n    for cell in row:\n        print(cell)"
  },
  {
    term: "Variable de boucle",
    definition: "La variable qui prend chaque valeur de l'itérable dans une boucle for.",
    levelRange: "3",
    detailedDescription: "La variable de boucle est l'identifiant qui reçoit chaque valeur de l'itérable pendant l'itération. Elle est créée dans la portée de la boucle et persiste après le terme de la boucle avec sa valeur finale. La variable de boucle peut être n'importe quel identifiant valide et peut être utilisée dans le corps de la boucle. Modifier la variable de boucle n'affecte pas l'itérable d'origine.\n\n1. Explication simple : La variable de boucle est le nom qui prend la valeur de chaque élément pendant une boucle.\n2. Explication intermédiaire : Changer la variable de boucle ne change que ce nom, pas la collection d'origine sur laquelle vous bouclez.\n3. Explication approfondie : Les variables de boucle peuvent fuiter dans la portée environnante en Python, ce qui peut surprendre les personnes venant d'autres langages et est important à retenir lors de la réutilisation des noms.",
    example: "for number in [1, 2, 3, 4, 5]:\n    print(number * 2)  # number is the loop variable\n\n# Loop variable persists after loop\nfor item in ['a', 'b']:\n    pass\nprint(item)  # 'b' (last value)\n\n# Using loop variable with range\nfor i in range(5):\n    print(f'Index: {i}')"
  },
  {
    term: "Boucle infinie",
    definition: "Une boucle qui continue indéfiniment car sa condition ne devient jamais False.",
    levelRange: "3",
    detailedDescription: "Une boucle infinie se produit quand la condition d'une boucle while est toujours évaluée à True, ou quand la variable de boucle dans une boucle for n'atteint jamais un point de terminaison. Bien que parfois intentionnelle (avec des instructions break), les boucles infinies sont généralement des bugs. Elles peuvent faire planter ou consommer excessivement les ressources. Assurez-vous toujours que les conditions de boucle peuvent devenir False.\n\n1. Explication simple : Une boucle infinie est une boucle qui ne s'arrête jamais.\n2. Explication intermédiaire : Cela arrive quand la condition pour arrêter la boucle n'est jamais remplie, souvent parce qu'une variable n'est pas mise à jour correctement.\n3. Explication approfondie : Les boucles infinies intentionnelles sont courantes dans les serveurs et les boucles d'événements mais doivent inclure des conditions d'arrêt claires ou des signaux externes pour l'arrêt ; les accidentelles sont un bug classique dû à une logique de terminaison mal conçue.",
    example: "# Intentional infinite loop with break\nwhile True:\n    user_input = input('Enter command: ')\n    if user_input == 'quit':\n        break  # Exit the loop\n    print(f'You entered: {user_input}')\n\n# Accidental infinite loop (BUG!)\n# count = 0\n# while count < 5:\n#     print(count)\n#     # Forgot to increment count - infinite loop!"
  },
  {
    term: "Instruction Pass",
    definition: "Une opération nulle qui ne fait rien, utilisée comme espace réservé.",
    levelRange: "3",
    detailedDescription: "L'instruction pass est une opération nulle — quand elle s'exécute, rien ne se passe. Elle est utile comme espace réservé là où la syntaxe exige une instruction mais aucune action n'est nécessaire. Les usages courants incluent : des corps de fonction/classe vides, des blocs conditionnels qui seront implémentés plus tard, ou des gestionnaires d'exceptions qui ne font intentionnellement rien.\n\n1. Explication simple : pass signifie « ne rien faire ici » pour que le code reste valide.\n2. Explication intermédiaire : C'est pratique quand vous esquissez une structure ou quand vous voulez intentionnellement ignorer un cas pour l'instant.\n3. Explication approfondie : Bien que pass n'ait aucun effet à l'exécution, l'utiliser avec soin peut rendre l'intention des blocs de code incomplets ou délibérément vides plus claire pendant le développement et les revues.",
    example: "def function_to_implement_later():\n    pass  # Placeholder - will add code later\n\nif condition:\n    pass  # Do nothing if condition is True\nelse:\n    print('Condition is False')\n\ntry:\n    risky_operation()\nexcept:\n    pass  # Silently ignore errors"
  },
  {
    term: "Indexation de liste",
    definition: "Accessing individual elements of a liste using their position (index).",
    levelRange: "5",
    detailedDescription: "L'indexation de liste utilise des crochets avec un indice entier pour accéder aux éléments. Les indices commencent à 0 pour le premier élément. Les indices négatifs comptent depuis la fin (-1 est le dernier élément). Accéder à un indice invalide lève IndexError. L'indexation retourne une référence à l'objet, donc modifier des éléments mutables affecte la liste d'origine.\n\n1. Explication simple : L'indexation de liste permet de récupérer un élément d'une liste par son numéro de position.\n2. Explication intermédiaire : Les positions commencent à 0, et les index négatifs permettent de compter depuis la fin, ce qui est utile pour atteindre rapidement le(s) dernier(s) élément(s).\n3. Explication approfondie : Comme l'indexation retourne des références aux objets, pas des copies, les modifications d'éléments mutables via un index seront visibles depuis toutes les variables qui partagent la même liste.",
    example: "fruits = ['apple', 'banana', 'cherry']\n\nprint(fruits[0])   # 'apple' (first element)\nprint(fruits[1])   # 'banana'\nprint(fruits[-1])  # 'cherry' (last element)\nprint(fruits[-2])  # 'banana' (second from end)\n\n# Modifying through index\nfruits[0] = 'orange'  # ['orange', 'banana', 'cherry']"
  },
  {
    term: "Méthode de liste",
    definition: "Fonctions intégrées qui opèrent sur les listes : append(), remove(), sort(), etc.",
    levelRange: "5",
    detailedDescription: "Les méthodes de liste sont des fonctions appelées sur les objets liste avec la notation point. Les méthodes courantes incluent : append() (ajouter à la fin), insert() (insérer à une position), remove() (supprimer par valeur), pop() (supprimer et retourner), sort() (tri sur place), reverse() (ordre inverse), count() (compter les occurrences), index() (trouver la position). La plupart des méthodes de liste modifient la liste sur place.\n\n1. Explication simple : Les méthodes de liste sont des outils intégrés attachés aux listes qui aident à ajouter, supprimer et organiser les éléments.\n2. Explication intermédiaire : Utiliser des méthodes comme append, remove et sort permet de modifier une liste sans la recréer de zéro.\n3. Explication approfondie : Beaucoup de méthodes de liste mutent la liste sur place et retournent None, ce qui est un piège courant ; comprendre quelles opérations mutent versus créent de nouvelles listes est important pour éviter les effets de bord accidentels.",
    example: "numbers = [3, 1, 4, 1, 5]\n\nnumbers.append(9)      # [3, 1, 4, 1, 5, 9]\nnumbers.insert(1, 2)   # [3, 2, 1, 4, 1, 5, 9]\nnumbers.remove(1)      # [3, 2, 4, 1, 5, 9] (removes first 1)\nnumbers.sort()         # [1, 2, 3, 4, 5, 9]\nnumbers.reverse()      # [9, 5, 4, 3, 2, 1]\ncount = numbers.count(1)  # 1"
  },
  {
    term: "Compréhension de liste",
    definition: "Une façon concise de créer des listes en une seule ligne de code.",
    levelRange: "5",
    detailedDescription: "Les compréhensions de liste fournissent une syntaxe compacte pour créer des listes. La forme de base est [expression for item in iterable]. Elles peuvent inclure des conditions : [expression for item in iterable if condition]. Les compréhensions de liste sont plus lisibles et souvent plus rapides que les boucles for équivalentes. Elles peuvent être imbriquées pour des listes multidimensionnelles.\n\n1. Explication simple : Une compréhension de liste est un raccourci en une ligne pour construire une nouvelle liste à partir d'une autre séquence.\n2. Explication intermédiaire : Elle combine une boucle for et un filtre if optionnel en une seule expression lisible qui remplace souvent plusieurs lignes de code.\n3. Explication approfondie : Les compréhensions sont évaluées dans leur propre portée et peuvent être imbriquées ; les utiliser judicieusement mène à du code concis et expressif, mais les très complexes sont mieux réécrites en boucles régulières.",
    example: "numbers = [1, 2, 3, 4, 5]\n\n# Square each number\nsquares = [x**2 for x in numbers]  # [1, 4, 9, 16, 25]\n\n# Filter even numbers\n evens = [x for x in numbers if x % 2 == 0]  # [2, 4]\n\n# Nested comprehension\nmatrix = [[i*j for j in range(3)] for i in range(3)]\n# [[0, 0, 0], [0, 1, 2], [0, 2, 4]]"
  },
  {
    term: "Tuple",
    definition: "Une séquence immuable et ordonnée d'objets, définie avec des parenthèses.",
    levelRange: "5",
    detailedDescription: "Les tuples sont des séquences immuables, ce qui signifie qu'ils ne peuvent pas être modifiés après création. Ils sont définis avec des parenthèses (ou juste des virgules). Les tuples sont plus rapides que les listes et peuvent être utilisés comme clés de dictionnaire (car ils sont hashables). Ils sont utiles pour des collections fixes de valeurs liées. Les tuples à un seul élément nécessitent une virgule finale.\n\n1. Explication simple : Un tuple est comme une liste que vous ne pouvez pas modifier.\n2. Explication intermédiaire : Les tuples sont bons pour regrouper un ensemble fixe de valeurs liées, comme un point (x, y) ou les valeurs de retour d'une fonction.\n3. Explication approfondie : Comme les tuples sont immuables et hashables (quand ils ne contiennent que des éléments hashables), ils sont souvent utilisés comme clés de dictionnaire et éléments d'ensembles, et jouent un rôle clé dans l'assignation multiple et le pattern matching.",
    example: "point = (3, 4)  # Coordinates\nperson = ('Alice', 30, 'Engineer')  # Multiple values\n\n# Single element tuple\nsingle = (42,)  # Note the comma\nnot_tuple = (42)  # This is just an integer\n\n# Tuple unpacking\nx, y = point  # x = 3, y = 4\n\n# Tuples as dictionary keys\nlocations = {(0, 0): 'Origin', (1, 1): 'Corner'}"
  },
  {
    term: "Ensemble",
    definition: "Une collection non ordonnée d'objets uniques et hashables.",
    levelRange: "5",
    detailedDescription: "Les ensembles sont des collections mutables qui stockent des éléments uniques. Ils ne maintiennent pas l'ordre (bien que Python 3.7+ préserve l'ordre d'insertion). Les ensembles sont utiles pour les tests d'appartenance, la suppression des doublons et les opérations mathématiques sur les ensembles (union, intersection, différence). Les éléments doivent être hashables (immuables). Les ensembles sont créés avec {} ou set().\n\n1. Explication simple : Un ensemble est un sac d'éléments uniques où l'ordre n'a pas d'importance.\n2. Explication intermédiaire : Les ensembles brillent quand vous devez tester rapidement « est-ce dedans ? » ou supprimer les doublons d'une collection.\n3. Explication approfondie : Soutenus par des tables de hachage comme les dicts, les ensembles permettent des tests d'appartenance rapides et supportent des opérations algébriques riches (union, intersection, différence) qui correspondent directement à la théorie des ensembles classique.",
    example: "numbers = {1, 2, 3, 3, 4}  # {1, 2, 3, 4} (duplicates removed)\n\n# Set operations\nset1 = {1, 2, 3}\nset2 = {3, 4, 5}\n\nunion = set1 | set2        # {1, 2, 3, 4, 5}\nintersection = set1 & set2  # {3}\ndifference = set1 - set2    # {1, 2}\n\n# Membership testing\nprint(2 in set1)  # True"
  },
  {
    term: "Clé de dictionnaire",
    definition: "L'identifiant unique utilisé pour accéder aux valeurs dans un dictionnaire.",
    levelRange: "5",
    detailedDescription: "Les clés de dictionnaire doivent être des objets hashables (immuables) comme des chaînes, des nombres ou des tuples. Les clés sont uniques — assigner à une clé existante écrase la valeur. Les clés sont utilisées pour accéder, ajouter ou modifier les valeurs du dictionnaire. Accéder à une clé inexistante lève KeyError (utilisez get() pour éviter). Les clés peuvent être itérées avec .keys().\n\n1. Explication simple : Une clé de dictionnaire est l'étiquette que vous utilisez pour rechercher une valeur stockée.\n2. Explication intermédiaire : Les clés doivent être uniques dans un dictionnaire, et vous les utilisez pour un accès rapide et lisible au lieu de positions numériques.\n3. Explication approfondie : Seuls les objets hashables peuvent être des clés ; comprendre comment le hachage et l'égalité fonctionnent sur les types personnalisés est vital si vous voulez utiliser vos propres classes comme clés de façon fiable.",
    example: "person = {'name': 'Alice', 'age': 30}\n\n# Accessing values\nname = person['name']  # 'Alice'\nage = person.get('age', 0)  # 30 (with default)\n\n# Adding/modifying\nperson['city'] = 'NYC'  # Add new key\nperson['age'] = 31     # Modify existing\n\n# Iterating keys\nfor key in person.keys():\n    print(key, person[key])"
  },
  {
    term: "Valeur de dictionnaire",
    definition: "Les données associées à une clé dans un dictionnaire.",
    levelRange: "5",
    detailedDescription: "Les valeurs de dictionnaire peuvent être n'importe quel objet Python — chaînes, nombres, listes, autres dictionnaires, fonctions, etc. Les valeurs sont accédées via leurs clés correspondantes. Contrairement aux clés, les valeurs n'ont pas besoin d'être uniques ou hashables. Les valeurs peuvent être modifiées, ajoutées ou supprimées. La méthode .values() retourne toutes les valeurs d'un dictionnaire.\n\n1. Explication simple : Une valeur de dictionnaire est les données réelles que vous stockez sous une clé.\n2. Explication intermédiaire : Les valeurs peuvent être de tout type (même d'autres dictionnaires), ce qui rend les dicts excellents pour les données imbriquées et structurées.\n3. Explication approfondie : Comme les valeurs peuvent être mutables et profondément imbriquées, penser à l'aliasage et à la copie est important quand vous faites circuler des structures de données basées sur des dictionnaires dans votre programme.",
    example: "data = {\n    'name': 'Alice',\n    'scores': [85, 90, 88],\n    'info': {'age': 30, 'city': 'NYC'}\n}\n\n# Accessing values\nname = data['name']           # 'Alice'\nscores = data['scores']        # [85, 90, 88]\ninfo = data['info']            # {'age': 30, 'city': 'NYC'}\n\n# Modifying values\ndata['scores'].append(92)  # Modifies the list\n\n# Iterating values\nfor value in data.values():\n    print(value)"
  },
  {
    term: "Compréhension de dictionnaire",
    definition: "Une façon concise de créer des dictionnaires avec une seule expression.",
    levelRange: "5",
    detailedDescription: "Les compréhensions de dictionnaire créent des dictionnaires avec la syntaxe {clé: valeur for item in iterable}. Elles peuvent inclure des conditions : {clé: valeur for item in iterable if condition}. Les compréhensions de dictionnaire sont plus lisibles et efficaces que la création de dictionnaires avec des boucles. Elles sont utiles pour transformer des structures de données.\n\n1. Explication simple : Une compréhension de dictionnaire est un raccourci pour construire un nouveau dictionnaire à partir d'une autre séquence.\n2. Explication intermédiaire : Elle permet de spécifier comment calculer chaque clé et valeur en une expression compacte, remplaçant souvent plusieurs lignes de code de boucle.\n3. Explication approfondie : Les compréhensions encouragent un style déclaratif pour transformer et filtrer les données ; comme pour les compréhensions de liste, les très complexes doivent être décomposées en étapes plus claires.",
    example: "numbers = [1, 2, 3, 4, 5]\n\n# Create dictionary of squares\nsquares = {x: x**2 for x in numbers}\n# {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}\n\n# With condition\n evens = {x: x*2 for x in numbers if x % 2 == 0}\n# {2: 4, 4: 8}\n\n# From two lists\nkeys = ['a', 'b', 'c']\nvalues = [1, 2, 3]\ndict_from_lists = {k: v for k, v in zip(keys, values)}\n# {'a': 1, 'b': 2, 'c': 3}"
  },
  {
    term: "Paramètre",
    definition: "Une variable dans une définition de fonction qui reçoit une valeur quand la fonction est appelée.",
    levelRange: "7",
    detailedDescription: "Les paramètres sont des espaces réservés dans les définitions de fonction qui spécifient quels arguments la fonction attend. Quand une fonction est appelée, les arguments sont passés et assignés aux paramètres. Les paramètres peuvent avoir des valeurs par défaut, les rendant optionnels. Les fonctions peuvent accepter un nombre variable d'arguments avec *args et **kwargs.\n\n1. Explication simple : Un paramètre est le nom que vous utilisez dans une fonction pour désigner une valeur qui sera passée.\n2. Explication intermédiaire : Les paramètres définissent quelles informations une fonction a besoin, et les arguments remplissent ces emplacements quand vous appelez la fonction.\n3. Explication approfondie : Comprendre les types de paramètres (positionnel uniquement, mot-clé uniquement, var-positionnel, var-mot-clé) et comment Python fait correspondre les arguments est crucial pour concevoir des API flexibles et claires.",
    example: "def greet(name, greeting='Hello'):  # name and greeting are parameters\n    return f'{greeting}, {name}!'\n\nresult = greet('Alice')  # 'Alice' is the argument\nresult2 = greet('Bob', 'Hi')  # 'Bob' and 'Hi' are arguments"
  },
  {
    term: "Argument",
    definition: "Une valeur passée à une fonction quand elle est appelée.",
    levelRange: "7",
    detailedDescription: "Les arguments sont les valeurs réelles passées aux fonctions quand elles sont appelées. Ils correspondent aux paramètres de la fonction. Les arguments peuvent être positionnels (correspondance par position) ou par mot-clé (correspondance par nom). Les fonctions peuvent accepter un nombre variable d'arguments. Les arguments sont évalués avant d'être passés à la fonction.\n\n1. Explication simple : Un argument est la valeur réelle que vous donnez à une fonction quand vous l'appelez.\n2. Explication intermédiaire : Vous pouvez passer des arguments par position ou en nommant le paramètre, ce qui rend les appels plus explicites et flexibles.\n3. Explication approfondie : Les règles de passage d'arguments, incluant le déballage avec * et **, sont centrales pour écrire des fonctions composables et des utilitaires d'ordre supérieur en Python.",
    example: "def add(a, b):  # a and b are parameters\n    return a + b\n\nresult = add(5, 3)  # 5 and 3 are arguments\nresult2 = add(a=5, b=3)  # Keyword arguments\nresult3 = add(b=3, a=5)  # Order doesn't matter with keywords"
  },
  {
    term: "Instruction Return",
    definition: "Une instruction qui quitte une fonction et retourne optionnellement une valeur.",
    levelRange: "7",
    detailedDescription: "L'instruction return quitte une fonction immédiatement et peut retourner une valeur à l'appelant. Les fonctions sans instruction return explicite retournent None. Return peut retourner plusieurs valeurs sous forme de tuple. Une fois que return s'exécute, aucun autre code dans la fonction ne s'exécute. Return est une expression, pas une instruction, donc elle peut être utilisée dans des expressions.\n\n1. Explication simple : return envoie un résultat depuis une fonction et arrête la fonction immédiatement.\n2. Explication intermédiaire : Vous pouvez retourner une valeur, plusieurs valeurs (comme tuple), ou rien (ce qui est vraiment None en interne).\n3. Explication approfondie : Une conception soignée de ce qu'une fonction retourne (et quand) façonne la facilité de composition et de test ; les return précoces simplifient souvent la logique de branchement complexe.",
    example: "def add(a, b):\n    return a + b  # Returns the sum\n\nresult = add(3, 5)  # result = 8\n\ndef get_name_and_age():\n    return 'Alice', 30  # Returns tuple\n\nname, age = get_name_and_age()  # Unpacking"
  },
  {
    term: "Paramètre par défaut",
    definition: "Un paramètre avec une valeur par défaut qui est utilisée si aucun argument n'est fourni.",
    levelRange: "7",
    detailedDescription: "Les paramètres par défaut ont des valeurs assignées dans la définition de fonction. Si aucun argument n'est fourni pour un paramètre par défaut, la valeur par défaut est utilisée. Les paramètres par défaut doivent venir après les paramètres non par défaut. Les valeurs par défaut sont évaluées une fois quand la fonction est définie, ce qui peut causer des problèmes avec les valeurs par défaut mutables (utilisez None à la place).\n\n1. Explication simple : Un paramètre par défaut donne à une fonction une valeur de repli à utiliser quand aucun argument n'est passé.\n2. Explication intermédiaire : Les valeurs par défaut rendent les paramètres optionnels et aident à éviter le passage répétitif d'arguments dans les cas courants.\n3. Explication approfondie : Comme les valeurs par défaut sont évaluées au moment de la définition de la fonction, les valeurs par défaut mutables peuvent accidentellement partager l'état entre les appels ; le pattern courant « None + création dans » évite ce piège.",
    example: "def greet(name, greeting='Hello'):  # greeting has default 'Hello'\n    return f'{greeting}, {name}!'\n\nprint(greet('Alice'))        # 'Hello, Alice!'\nprint(greet('Bob', 'Hi'))    # 'Hi, Bob!'\n\n# Mutable default (problematic)\ndef add_item(item, items=[]):  # BAD!\n    items.append(item)\n    return items\n\n# Better approach\ndef add_item(item, items=None):\n    if items is None:\n        items = []\n    items.append(item)\n    return items"
  },
  {
    term: "Instance",
    definition: "Un objet individuel créé à partir d'une classe.",
    levelRange: "7",
    detailedDescription: "Une instance est un objet spécifique créé à partir d'un modèle de classe. Chaque instance a son propre ensemble d'attributs (variables d'instance) mais partage les méthodes de la classe. Les instances sont créées en appelant la classe comme une fonction, ce qui invoque __init__. Plusieurs instances de la même classe sont des objets indépendants avec un état séparé.\n\n1. Explication simple : Une instance est un objet concret créé à partir d'une classe, comme un utilisateur spécifique dans votre application.\n2. Explication intermédiaire : Différentes instances de la même classe partagent le comportement mais gardent leurs propres données, donc modifier l'une ne modifie pas les autres.\n3. Explication approfondie : Les instances portent leur propre __dict__ d'attributs (sauf si __slots__ est utilisé), et comprendre comment la recherche d'attributs fonctionne entre instance et classe est central pour saisir le modèle OOP de Python.",
    example: "class Person:\n    def __init__(self, name):\n        self.name = name\n\n# Creating instances\nperson1 = Person('Alice')  # person1 is an instance\nperson2 = Person('Bob')    # person2 is another instance\n\nprint(person1.name)  # 'Alice'\nprint(person2.name)  # 'Bob'"
  },
  {
    term: "Variable d'instance",
    definition: "Une variable qui appartient à une instance spécifique d'une classe.",
    levelRange: "7",
    detailedDescription: "Les variables d'instance (aussi appelées attributs) stockent des données uniques à chaque instance. Elles sont créées en assignant à self.nom_attribut. Chaque instance a sa propre copie des variables d'instance. Les variables d'instance peuvent être accédées avec la notation point (instance.attribut) ou via self dans les méthodes.\n\n1. Explication simple : Une variable d'instance est une donnée qui appartient à un objet spécifique.\n2. Explication intermédiaire : Vous les définissez dans __init__ avec self.x = valeur pour que chaque instance puisse stocker son propre état.\n3. Explication approfondie : Les attributs d'instance vivent dans l'espace de noms de l'instance, et l'ajout ou la suppression dynamique d'attributs à l'exécution est possible, ce qui est puissant mais doit être utilisé avec discipline.",
    example: "class Person:\n    def __init__(self, name, age):\n        self.name = name      # Instance variable\n        self.age = age        # Instance variable\n\nperson = Person('Alice', 30)\nprint(person.name)  # 'Alice' (accessing instance variable)\nprint(person.age)   # 30"
  },
  {
    term: "Variable de classe",
    definition: "Une variable partagée par toutes les instances d'une classe.",
    levelRange: "7",
    detailedDescription: "Les variables de classe sont définies au niveau de la classe (à l'extérieur des méthodes) et sont partagées par toutes les instances. Elles sont utiles pour stocker des données communes à toutes les instances. Les variables de classe peuvent être accédées via la classe ou n'importe quelle instance. Modifier une variable de classe via une instance crée une variable d'instance avec le même nom (masquage).\n\n1. Explication simple : Une variable de classe est un paramètre partagé par tous les objets de cette classe.\n2. Explication intermédiaire : Changer la variable de classe sur la classe affecte toutes les instances qui ne l'ont pas surchargée sur elles-mêmes.\n3. Explication approfondie : Le masquage des variables de classe avec des attributs d'instance est une source courante de confusion ; comprendre l'ordre de résolution des attributs aide à prédire quelle valeur vous verrez réellement.",
    example: "class Dog:\n    species = 'Canis familiaris'  # Class variable\n    \n    def __init__(self, name):\n        self.name = name  # Instance variable\n\ndog1 = Dog('Buddy')\ndog2 = Dog('Max')\n\nprint(dog1.species)  # 'Canis familiaris'\nprint(dog2.species)  # 'Canis familiaris'\nprint(Dog.species)   # 'Canis familiaris' (same for all)"
  },
  {
    term: "Self",
    definition: "Une référence à l'instance courante, utilisée pour accéder aux attributs et méthodes d'instance.",
    levelRange: "7",
    detailedDescription: "Self est le nom conventionnel du premier paramètre des méthodes d'instance. Il désigne l'instance sur laquelle la méthode est appelée. Via self, les méthodes peuvent accéder et modifier les variables d'instance et appeler d'autres méthodes. Self est automatiquement passé lors de l'appel de méthodes sur des instances — vous ne le passez pas explicitement.\n\n1. Explication simple : self est la façon dont une méthode désigne « cet objet ».\n2. Explication intermédiaire : Quand vous appelez obj.méthode(), Python passe automatiquement obj comme premier argument, que nous nommons habituellement self.\n3. Explication approfondie : self n'est qu'une convention, mais elle encode l'idée de méthodes liées ; comprendre cela aide à expliquer pourquoi les méthodes se comportent différemment quand on y accède via la classe versus une instance.",
    example: "class Person:\n    def __init__(self, name):\n        self.name = name  # self refers to the instance\n    \n    def greet(self):\n        return f'Hello, I am {self.name}'  # Accessing via self\n\nperson = Person('Alice')\nperson.greet()  # self is automatically person"
  },
  {
    term: "Constructeur",
    definition: "Une méthode spéciale __init__ qui initialise une nouvelle instance d'une classe.",
    levelRange: "7",
    detailedDescription: "Le constructeur (méthode __init__) est automatiquement appelé quand une nouvelle instance est créée. Il sert à initialiser les variables d'instance et effectuer la configuration. __init__ ne crée pas l'objet (c'est fait par __new__), mais c'est l'endroit principal pour l'initialisation. Il peut accepter des paramètres pour personnaliser l'instance.\n\n1. Explication simple : Le constructeur est la méthode spéciale qui s'exécute quand vous créez un nouvel objet à partir d'une classe.\n2. Explication intermédiaire : Vous utilisez __init__ pour configurer l'état initial d'un objet selon les arguments passés à la classe.\n3. Explication approfondie : Séparer la création d'objet (__new__) de l'initialisation (__init__) permet une personnalisation avancée des instances, mais la plupart du code quotidien n'a besoin que d'implémenter __init__.",
    example: "class Person:\n    def __init__(self, name, age):  # Constructor\n        self.name = name\n        self.age = age\n        print(f'{name} created')\n\nperson = Person('Alice', 30)  # Constructor is called automatically\n# Output: 'Alice created'"
  },
  {
    term: "Héritage",
    definition: "Un mécanisme où une classe enfant hérite des attributs et méthodes d'une classe parente.",
    levelRange: "9",
    detailedDescription: "L'héritage permet de créer de nouvelles classes à partir d'existantes. La classe enfant (sous-classe) hérite de tous les attributs et méthodes de la classe parente (superclasse) et peut en ajouter de nouveaux ou surcharger les existants. L'héritage favorise la réutilisation du code et établit une relation « est-un ». Python supporte l'héritage multiple.\n\n1. Explication simple : L'héritage permet à une classe de réutiliser et étendre le comportement d'une autre.\n2. Explication intermédiaire : Une classe enfant obtient automatiquement les méthodes et attributs de son parent, et peut les surcharger ou en ajouter de nouveaux.\n3. Explication approfondie : Concevoir de bonnes hiérarchies d'héritage nécessite de penser aux relations « est-un », à l'ordre de résolution des méthodes (MRO), et quand la composition est un meilleur choix que la sous-classification.",
    example: "class Animal:\n    def __init__(self, name):\n        self.name = name\n    \n    def speak(self):\n        return 'Some sound'\n\nclass Dog(Animal):  # Dog inherits from Animal\n    def speak(self):  # Override parent method\n        return 'Woof!'\n\ndog = Dog('Buddy')\nprint(dog.name)    # Inherited attribute\nprint(dog.speak())  # Overridden method: 'Woof!'"
  },
  {
    term: "Polymorphisme",
    definition: "La capacité de différentes classes à répondre au même appel de méthode de façons différentes.",
    levelRange: "9",
    detailedDescription: "Le polymorphisme permet de traiter uniformément des objets de types différents via une interface commune. En Python, le polymorphisme est atteint via le duck typing — si un objet a la méthode requise, il peut être utilisé. Cela permet d'écrire du code qui fonctionne avec plusieurs types sans vérification de type explicite.\n\n1. Explication simple : Le polymorphisme signifie que différents objets peuvent répondre à la même action à leur façon.\n2. Explication intermédiaire : Si plusieurs classes implémentent le même nom de méthode, vous pouvez écrire un seul morceau de code qui appelle cette méthode et fonctionne pour toutes.\n3. Explication approfondie : Python’s duck typing emphasizes behavior over type hierarchy, so polymorphism is more about shared protocols (like “has a .write() méthode”) than about strict inheritance trees.",
    example: "class Dog:\n    def speak(self):\n        return 'Woof!'\n\nclass Cat:\n    def speak(self):\n        return 'Meow!'\n\n# Polymorphic function\ndef make_sound(animal):\n    return animal.speak()  # Works with any object with speak()\n\ndog = Dog()\ncat = Cat()\nprint(make_sound(dog))  # 'Woof!'\nprint(make_sound(cat))  # 'Meow!'"
  },
  {
    term: "Encapsulation",
    definition: "Le regroupement des données et des méthodes qui opèrent sur ces données dans une seule unité.",
    levelRange: "9",
    detailedDescription: "L'encapsulation est le principe de cacher les détails d'implémentation internes et d'exposer seulement ce qui est nécessaire. En Python, l'encapsulation est atteinte via des conventions de nommage : tiret bas simple (_) pour « protégé » et double tiret bas (__) pour « privé » (name mangling). Python n'impose pas d'encapsulation stricte — c'est une convention.\n\n1. Explication simple : L'encapsulation signifie garder les détails internes d'un objet cachés et n'exposer que ce dont les autres parties du code ont besoin.\n2. Explication intermédiaire : En regroupant données et comportement et en utilisant des conventions de nommage, vous signalez quelles parties d'une classe sont « publiques » et lesquelles sont internes.\n3. Explication approfondie : Bien que Python n'impose pas de restrictions d'accès, l'utilisation cohérente des patterns d'encapsulation mène à des API plus propres et réduit le risque de casser le code des utilisateurs quand les internes changent.",
    example: "class BankAccount:\n    def __init__(self, balance):\n        self.__balance = balance  # 'Private' attribute\n    \n    def deposit(self, amount):\n        self.__balance += amount  # Controlled access\n    \n    def get_balance(self):\n        return self.__balance  # Public interface\n\naccount = BankAccount(100)\n# account.__balance  # Error: name mangling\nprint(account.get_balance())  # 100"
  },
  {
    term: "Super",
    definition: "Une fonction intégrée qui retourne un objet proxy pour accéder aux méthodes de la classe parente.",
    levelRange: "9",
    detailedDescription: "Super() fournit un moyen d'appeler les méthodes des classes parentes. Il est couramment utilisé dans __init__ pour assurer l'initialisation du parent. Super() suit l'ordre de résolution des méthodes (MRO) pour trouver la méthode parente correcte. C'est essentiel dans les scénarios d'héritage multiple pour appeler la bonne méthode parente.\n\n1. Explication simple : super() est la façon dont une classe enfant appelle une méthode de sa classe parente.\n2. Explication intermédiaire : C'est particulièrement important dans __init__ pour s'assurer que la partie parente de l'objet est configurée correctement.\n3. Explication approfondie : Dans les chaînes d'héritage multiple, super() coordonne les appels le long du MRO pour que chaque classe de la hiérarchie ait une chance d'exécuter sa logique exactement une fois.",
    example: "class Animal:\n    def __init__(self, name):\n        self.name = name\n    \n    def speak(self):\n        return 'Some sound'\n\nclass Dog(Animal):\n    def __init__(self, name, breed):\n        super().__init__(name)  # Call parent __init__\n        self.breed = breed\n    \n    def speak(self):\n        return super().speak() + ' Woof!'  # Extend parent method\n\ndog = Dog('Buddy', 'Labrador')\nprint(dog.name)  # 'Buddy' (from parent)\nprint(dog.speak())  # 'Some sound Woof!'"
  },
  {
    term: "Redéfinition de méthode",
    definition: "Définir une méthode dans une classe enfant qui remplace une méthode de la classe parente.",
    levelRange: "9",
    detailedDescription: "La redéfinition de méthode se produit quand une classe enfant définit une méthode avec le même nom qu'une méthode de la classe parente. La méthode de l'enfant prend la priorité quand elle est appelée sur des instances enfant. La redéfinition permet de personnaliser le comportement tout en maintenant la même interface. La méthode parente peut encore être accédée via super().\n\n1. Explication simple : La redéfinition signifie qu'une classe enfant remplace la méthode d'un parent par sa propre version.\n2. Explication intermédiaire : Elle permet de garder le même nom de méthode mais d'adapter ce qu'elle fait pour un type plus spécifique.\n3. Explication approfondie : La redéfinition est centrale au polymorphisme ; savoir quand appeler super() versus remplacer complètement le comportement aide à garder le code hérité prévisible et maintenable.",
    example: "class Shape:\n    def area(self):\n        return 0\n\nclass Rectangle(Shape):\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n    \n    def area(self):  # Override parent method\n        return self.width * self.height\n\nrect = Rectangle(5, 3)\nprint(rect.area())  # 15 (uses overridden method)"
  },
  {
    term: "Méthode abstraite",
    definition: "Une méthode déclarée dans une classe de base qui doit être implémentée par les sous-classes.",
    levelRange: "9",
    detailedDescription: "Les méthodes abstraites définissent une interface que les sous-classes doivent implémenter. En Python, les méthodes abstraites sont créées avec le module abc (Abstract Base Class). Les classes avec des méthodes abstraites ne peuvent pas être instanciées directement. Les méthodes abstraites garantissent que les sous-classes fournissent la fonctionnalité requise, imposant un contrat.\n\n1. Explication simple : An abstract méthode est un méthode that says “subclasses must define this,” but doesn’t provide its own body.\n2. Explication intermédiaire : Les classes de base abstraites utilisent des méthodes abstraites pour garantir que certains comportements existent sur toutes les sous-classes concrètes.\n3. Explication approfondie : Les méthodes abstraites et les ABC permettent de formaliser les protocoles et de détecter les implémentations manquantes tôt, ce qui est particulièrement utile dans les grands systèmes et avec les vérificateurs de types statiques.",
    example: "from abc import ABC, abstractmethod\n\nclass Shape(ABC):  # Abstract base class\n    @abstractmethod\n    def area(self):  # Must be implemented by subclasses\n        pass\n\nclass Rectangle(Shape):\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n    \n    def area(self):  # Required implementation\n        return self.width * self.height\n\n# shape = Shape()  # Error: cannot instantiate abstract class\nrect = Rectangle(5, 3)  # OK"
  },
  {
    term: "Patron de conception",
    definition: "Une solution réutilisable à un problème courant en conception logicielle.",
    levelRange: "9",
    detailedDescription: "Les patrons de conception sont des solutions éprouvées à des problèmes de programmation courants. Ils fournissent des modèles pour structurer le code afin d'atteindre flexibilité, maintenabilité et réutilisabilité. Les patrons courants incluent Singleton, Factory, Observer, Strategy et Decorator. Les patrons sont des concepts indépendants du langage qui peuvent être implémentés en Python.\n\n1. Explication simple : Un patron de conception est une « recette » réutilisable pour résoudre un problème de conception courant en code.\n2. Explication intermédiaire : Les patrons donnent des noms et structures partagés (comme Singleton ou Factory) pour que les développeurs puissent en parler et appliquer des solutions rapidement.\n3. Explication approfondie : En Python, beaucoup de patrons classiques ont un aspect différent à cause des fonctions de première classe et du typage dynamique ; comprendre à la fois l'intention originale et l'implémentation pythonique mène à une architecture plus propre.",
    example: "# Singleton Pattern\nclass Singleton:\n    _instance = None\n    \n    def __new__(cls):\n        if cls._instance is None:\n            cls._instance = super().__new__(cls)\n        return cls._instance\n\n# Factory Pattern\nclass AnimalFactory:\n    @staticmethod\n    def create_animal(animal_type):\n        if animal_type == 'dog':\n            return Dog()\n        elif animal_type == 'cat':\n            return Cat()\n        return None"
  },
  {
    term: "Gestion des exceptions",
    definition: "Un mécanisme pour gérer les erreurs et conditions exceptionnelles avec des blocs try/except.",
    levelRange: "9",
    detailedDescription: "La gestion des exceptions permet aux programmes de gérer les erreurs élégamment sans planter. Le bloc try contient du code qui peut lever des exceptions. Le bloc except attrape et gère des exceptions spécifiques. Le else optionnel s'exécute si aucune exception ne se produit, et finally s'exécute toujours. Une bonne gestion des exceptions améliore la robustesse du programme.\n\n1. Explication simple : La gestion des exceptions est la façon dont Python vous permet d'attraper et répondre aux erreurs au lieu de planter.\n2. Explication intermédiaire : Vous enveloppez le code risqué dans try, gérez les problèmes spécifiques dans except, et optionnellement nettoyez dans finally.\n3. Explication approfondie : Une bonne gestion des exceptions distingue les erreurs attendues et récupérables des bugs vraiment inattendus, et utilise des types d'exception précis plutôt que des captures larges pour garder les échecs compréhensibles.",
    example: "try:\n    result = 10 / 0  # Raises ZeroDivisionError\nexcept ZeroDivisionError:\n    print('Cannot divide by zero')\nexcept Exception as e:\n    print(f'An error occurred: {e}')\nelse:\n    print('No errors occurred')\nfinally:\n    print('This always executes')"
  },
  {
    term: "Gestionnaire de contexte",
    definition: "Un objet qui gère les ressources avec l'instruction 'with'.",
    levelRange: "9",
    detailedDescription: "Les gestionnaires de contexte assurent une gestion correcte des ressources (comme la fermeture de fichiers) avec l'instruction 'with'. Ils implémentent les méthodes __enter__ et __exit__. Les gestionnaires de contexte gèrent automatiquement la configuration et le nettoyage, même si des exceptions se produisent. L'instruction 'with' est préférée à la gestion manuelle des ressources.\n\n1. Explication simple : Un gestionnaire de contexte est ce qui permet à with open(...) de fermer automatiquement le fichier pour vous.\n2. Explication intermédiaire : Il enveloppe du code avec une logique de configuration et de démontage pour que les ressources soient toujours nettoyées, même si des erreurs se produisent.\n3. Explication approfondie : Implémenter __enter__ et __exit__ (ou utiliser contextlib) permet de créer vos propres blocs « with » sûrs pour les verrous, transactions, minuteries et autres ressources nécessitant un contrôle strict de la durée de vie.",
    example: "# Built-in file context manager\nwith open('file.txt', 'r') as f:\n    content = f.read()\n# File is automatically closed here\n\n# Custom context manager\nclass Timer:\n    def __enter__(self):\n        self.start = time.time()\n        return self\n    \n    def __exit__(self, *args):\n        print(f'Elapsed: {time.time() - self.start}')\n\nwith Timer():\n    # Do something\n    pass"
  }
];

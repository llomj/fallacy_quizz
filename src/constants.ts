import { PersonaStage, LevelInfo, RandomModeStats } from './types';

export const XP_PER_QUESTION = 10;
export const QUESTIONS_PER_SUBLEVEL = 100;
export const SUBLEVELS_PER_LEVEL = 3;
export const QUESTIONS_PER_LEVEL = QUESTIONS_PER_SUBLEVEL * SUBLEVELS_PER_LEVEL; // 300
export const TOTAL_QUESTIONS = 3000; // 10 levels × 300 questions

/** Derive number of stars (0–3) from progress for a level. Used for migration and display. */
export const getStarsFromProgress = (progress: number): number => {
  if (progress >= QUESTIONS_PER_SUBLEVEL * 3) return 3;
  if (progress >= QUESTIONS_PER_SUBLEVEL * 2) return 2;
  if (progress >= QUESTIONS_PER_SUBLEVEL) return 1;
  return 0;
};

// Random Mode: score = correct × accuracy (correct/total). Same 10 personas, point-based progression.
export const RANDOM_MODE_THRESHOLDS: { minScore: number; persona: PersonaStage }[] = [
  { minScore: 0, persona: PersonaStage.PLANKTON },
  { minScore: 15, persona: PersonaStage.SHRIMP },
  { minScore: 40, persona: PersonaStage.CRAB },
  { minScore: 80, persona: PersonaStage.SMALL_FISH },
  { minScore: 150, persona: PersonaStage.OCTOPUS },
  { minScore: 250, persona: PersonaStage.SEAL },
  { minScore: 400, persona: PersonaStage.DOLPHIN },
  { minScore: 600, persona: PersonaStage.SHARK },
  { minScore: 900, persona: PersonaStage.WHALE },
  { minScore: 1300, persona: PersonaStage.GOD_WHALE },
];

/** Evolution score: correct × (correct / total). Rewards both volume and accuracy. */
export const getRandomModeScore = (stats: RandomModeStats): number => {
  if (stats.totalAnswered === 0) return 0;
  const accuracy = stats.totalCorrect / stats.totalAnswered;
  return Math.floor(stats.totalCorrect * accuracy);
};

/** Map cumulative Random-mode score to persona. Same 10 personas as Level mode. */
export const getPersonaFromRandomScore = (score: number): PersonaStage => {
  let result = PersonaStage.PLANKTON;
  for (const { minScore, persona } of RANDOM_MODE_THRESHOLDS) {
    if (score >= minScore) result = persona;
  }
  return result;
};

/** Get next persona threshold for progress display. Returns null if at max (God Whale). */
export const getNextRandomModeThreshold = (score: number): { minScore: number; persona: PersonaStage } | null => {
  for (const t of RANDOM_MODE_THRESHOLDS) {
    if (score < t.minScore) return t;
  }
  return null;
};

// Level configurations with personas and concepts
export const LEVELS: LevelInfo[] = [
  {
    level: 1,
    persona: PersonaStage.PLANKTON,
    concepts: ["variables", "types", "strings", "comments"],
    description: "Basic data types and variable assignment. Learn to store and manipulate simple values.",
    color: "#6366f1"
  },
  {
    level: 2,
    persona: PersonaStage.SHRIMP,
    concepts: ["math", "expressions", "order of ops"],
    description: "Mathematical operations and expression evaluation. Master arithmetic and precedence rules.",
    color: "#8b5cf6"
  },
  {
    level: 3,
    persona: PersonaStage.CRAB,
    concepts: ["conditionals", "booleans", "logic"],
    description: "Decision-making with if/elif/else. Understand boolean logic and truth values.",
    color: "#ec4899"
  },
  {
    level: 4,
    persona: PersonaStage.SMALL_FISH,
    concepts: ["loops", "iteration", "ranges"],
    description: "Repetitive execution with for and while loops. Learn to iterate over sequences.",
    color: "#06b6d4"
  },
  {
    level: 5,
    persona: PersonaStage.OCTOPUS,
    concepts: ["lists", "arrays", "indexing"],
    description: "Ordered collections and list operations. Master mutable sequences.",
    color: "#10b981"
  },
  {
    level: 6,
    persona: PersonaStage.SEAL,
    concepts: ["dictionaries", "key-value", "hashing"],
    description: "Associative arrays and fast lookups. Learn unordered key-value mappings.",
    color: "#f59e0b"
  },
  {
    level: 7,
    persona: PersonaStage.DOLPHIN,
    concepts: ["functions", "parameters", "return"],
    description: "Reusable code blocks with parameters and return values. Master function design.",
    color: "#3b82f6"
  },
  {
    level: 8,
    persona: PersonaStage.SHARK,
    concepts: ["classes", "objects", "methods"],
    description: "Object-oriented programming basics. Learn to create and use custom types.",
    color: "#ef4444"
  },
  {
    level: 9,
    persona: PersonaStage.WHALE,
    concepts: ["inheritance", "polymorphism", "encapsulation"],
    description: "Advanced OOP concepts. Understand class hierarchies and behavior inheritance.",
    color: "#8b5cf6"
  },
  {
    level: 10,
    persona: PersonaStage.GOD_WHALE,
    concepts: ["design patterns", "architecture", "best practices"],
    description: "Professional-level patterns and practices. Master scalable code design.",
    color: "#1f2937"
  }
];

// Glossary item type for app use
export interface GlossaryItem {
  term: string;
  definition: string;
  levelRange: string;
  detailedDescription: string;
  example: string;
}

// Glossary data for the app
export const GLOSSARY: GlossaryItem[] = [
  {
    term: "Variable",
    definition: "A named reference to an object in memory that can store different values.",
    levelRange: "1",
    detailedDescription: "Variables in Python are dynamic, meaning they can reference objects of any type and can be reassigned to different types. Unlike statically-typed languages, Python variables don't have fixed types - the type is determined by the object they reference. Variable names must follow specific rules: they can contain letters, numbers, and underscores, but cannot start with a number. They are case-sensitive.\n\n1. Simple explanation: A variable is just a labeled box where Python remembers a value for you, like writing someone’s name on a storage container.\n2. Intermediate explanation: A variable name points to (references) an object in memory, and that reference can be changed to point at a different object or even a different type over time.\n3. In-depth explanation: In CPython, variables are entries in a namespace (a dictionary under the hood) that bind identifiers to objects; assignment changes these bindings, and multiple names can refer to the same underlying object, which matters especially for mutable types.",
    example: "score = 42\nname = 'Alice'\nactive = True"
  },
  {
    term: "String",
    definition: "An immutable sequence of characters representing text data.",
    levelRange: "1",
    detailedDescription: "Strings in Python are immutable objects that represent text. They can be created using single quotes, double quotes, or triple quotes for multi-line strings. Python provides extensive string methods for manipulation, including slicing, concatenation, and formatting. Strings are sequences, so they support indexing and iteration.\n\n1. Simple explanation: A string is Python’s way of storing words and sentences, like text you would type in a message.\n2. Intermediate explanation: A string is an ordered collection of characters that you can slice, loop over, and combine, but you never change the original string in place.\n3. In-depth explanation: A string is an immutable sequence type backed by a specific Unicode representation; most operations create new string objects, and indexing/slicing operates on code points, which is important when dealing with encodings and performance.",
    example: "message = 'Hello World'\nlong_text = '''This is a\nmulti-line string'''\nfirst_char = message[0]  # 'H'"
  },
  {
    term: "Integer",
    definition: "Whole numbers without decimal points, with unlimited precision.",
    levelRange: "1",
    detailedDescription: "Python integers have arbitrary precision, meaning they can be arbitrarily large without overflow issues that occur in fixed-width integer types in other languages. This makes Python suitable for mathematical computations involving very large numbers. Integer literals can include underscores for readability.\n\n1. Simple explanation: An integer is a whole number like 0, 3, or -10, with no decimal part.\n2. Intermediate explanation: Integers are used for counting, indexing, and basic arithmetic, and in Python you do not worry about running out of bits for normal work.\n3. In-depth explanation: Python’s int type automatically switches between a machine-sized representation and an arbitrary-precision big integer, so operations like addition and multiplication may allocate new objects and have complexity that depends on the number of digits.",
    example: "small = 42\nlarge = 1_000_000_000_000\nnegative = -17"
  },
  {
    term: "Float",
    definition: "Decimal numbers represented in binary floating-point format.",
    levelRange: "1",
    detailedDescription: "Float objects represent real numbers with decimal precision. They are implemented using the IEEE 754 double-precision binary floating-point format, which can lead to small precision errors in some calculations. For financial or other applications requiring exact decimal arithmetic, the decimal module should be used instead.\n\n1. Simple explanation: A float is a number with a decimal point, like 3.5 or -0.25.\n2. Intermediate explanation: Floats are good for everyday measurements (prices, distances, averages), but tiny rounding errors are normal because of how they’re stored in binary.\n3. In-depth explanation: Python’s float wraps a C double, so arithmetic follows IEEE 754 rules, which affects equality checks, accumulation of rounding error, and behavior of special values like NaN and infinity.",
    example: "pi = 3.14159\nnegative = -2.5\nscientific = 1.23e-4"
  },
  {
    term: "Boolean",
    definition: "A binary data type representing True or False values.",
    levelRange: "1",
    detailedDescription: "Boolean values are used for logical operations and conditional statements. In Python, every object has an inherent boolean value (truthiness), where most objects are considered True except for specific falsy values like 0, empty strings, empty lists, None, and False itself. Boolean operations follow standard logical rules.\n\n1. Simple explanation: A boolean is a yes/no value: either True or False.\n2. Intermediate explanation: Booleans let your program make decisions in if statements and loops, and many expressions (like comparisons) automatically produce True or False.\n3. In-depth explanation: In Python, bool is a subclass of int with only two instances (True and False, equal to 1 and 0), and the language defines each type’s truthiness via __bool__ or __len__, which is crucial when writing conditionals and custom classes.",
    example: "is_active = True\nhas_permission = False\nresult = (5 > 3) and (10 < 20)  # True"
  },
  {
    term: "If Statement",
    definition: "A conditional statement that executes code only when a condition is True.",
    levelRange: "3",
    detailedDescription: "The if statement is Python's primary conditional construct. It evaluates a boolean expression and executes the indented block only if the condition is True. Python uses indentation (not braces) to define code blocks. The if statement can be followed by optional elif (else-if) and else clauses for handling multiple conditions.\n\n1. Simple explanation: An if statement lets your code choose “do this” only when a condition is true.\n2. Intermediate explanation: If/elif/else blocks control which branch of code runs based on boolean expressions, so you can handle different cases cleanly.\n3. In-depth explanation: Because conditions rely on Python’s truthiness rules and short-circuiting logic, structuring if-chains well is key to readable control flow and avoiding deeply nested, hard-to-follow branches.",
    example: "age = 18\nif age >= 18:\n    print('Adult')\nelif age >= 13:\n    print('Teen')\nelse:\n    print('Child')"
  },
  {
    term: "Comparison Operator",
    definition: "Operators that compare two values and return a boolean result.",
    levelRange: "3",
    detailedDescription: "Comparison operators evaluate relationships between values and return True or False. Python supports: == (equal), != (not equal), < (less than), > (greater than), <= (less than or equal), >= (greater than or equal), is (identity), in (membership). These operators are fundamental to conditional logic and control flow.\n\n1. Simple explanation: Comparison operators answer questions like “are these equal?” or “is this bigger than that?” and give True or False.\n2. Intermediate explanation: They’re used in if statements and loops to check ranges, equality, membership in containers, or whether two names refer to the exact same object.\n3. In-depth explanation: Understanding the difference between == and is, how chained comparisons like a < b < c work, and how rich comparison methods (__eq__, __lt__, etc.) are implemented on classes is important for writing correct, Pythonic code.",
    example: "x = 10\ny = 5\nprint(x > y)   # True\nprint(x == y)  # False\nprint(x != y)  # True\nprint(5 in [1, 2, 3, 4, 5])  # True"
  },
  {
    term: "Logical Operator",
    definition: "Operators that combine boolean expressions: and, or, not.",
    levelRange: "3",
    detailedDescription: "Logical operators combine boolean values or expressions. 'and' returns True only if both operands are True. 'or' returns True if at least one operand is True. 'not' inverts the boolean value. Python uses short-circuit evaluation: 'and' stops at the first False, 'or' stops at the first True, which can improve performance.\n\n1. Simple explanation: Logical operators let you combine True/False checks with “and”, “or”, and “not”.\n2. Intermediate explanation: They’re essential when you need to require several conditions at once, allow alternatives, or flip a condition, and they decide early when the result is already known.\n3. In-depth explanation: Because and/or return one of their operands (not just True/False), they are often used idiomatically in expressions, and understanding this behavior is important for both readability and avoiding subtle bugs.",
    example: "x = 10\ny = 5\nresult1 = (x > 5) and (y < 10)  # True\nresult2 = (x < 5) or (y > 10)   # False\nresult3 = not (x > 5)            # False"
  },
  {
    term: "For Loop",
    definition: "A loop that iterates over a sequence (list, string, range, etc.).",
    levelRange: "3",
    detailedDescription: "The for loop iterates over items in a sequence or other iterable object. It automatically handles iteration, eliminating the need for manual index management. The loop variable takes each value from the sequence in turn. For loops are preferred when you know how many iterations you need or when iterating over a collection.\n\n1. Simple explanation: A for loop repeats some code once for each item in a list or other collection.\n2. Intermediate explanation: The loop variable steps through an iterable so you can process each element without managing indexes yourself.\n3. In-depth explanation: Python’s for loop is built on the iterator protocol (calling iter() and next()), which lets you loop over many kinds of lazy or infinite data sources beyond basic lists and ranges.",
    example: "fruits = ['apple', 'banana', 'cherry']\nfor fruit in fruits:\n    print(fruit)\n\n# With range\nfor i in range(5):\n    print(i)  # 0, 1, 2, 3, 4"
  },
  {
    term: "While Loop",
    definition: "A loop that continues executing while a condition remains True.",
    levelRange: "3",
    detailedDescription: "The while loop repeatedly executes a block of code as long as the condition evaluates to True. Unlike for loops, while loops are used when the number of iterations is unknown beforehand. Care must be taken to ensure the condition eventually becomes False, otherwise an infinite loop occurs. The loop variable must be modified within the loop body.\n\n1. Simple explanation: A while loop keeps running as long as a condition stays true.\n2. Intermediate explanation: It’s ideal when you don’t know in advance how many times you’ll need to repeat something, but you do know when you should stop.\n3. In-depth explanation: Correctly updating state inside the loop and reasoning about termination conditions is critical to avoid infinite loops and to write clear, testable logic.",
    example: "count = 0\nwhile count < 5:\n    print(count)\n    count += 1  # Important: modify the condition\n\n# Infinite loop (avoid!)\n# while True:\n#     print('Forever')"
  },
  {
    term: "Range",
    definition: "A built-in function that generates a sequence of numbers.",
    levelRange: "3",
    detailedDescription: "The range() function generates an immutable sequence of numbers, commonly used in for loops. It can take one argument (stop), two arguments (start, stop), or three arguments (start, stop, step). The stop value is exclusive. Range is memory-efficient as it generates numbers on-demand rather than storing them all in memory.\n\n1. Simple explanation: range() gives you a series of numbers to count with in loops.\n2. Intermediate explanation: You can control where the count starts, where it stops (exclusive), and how big each step is, which is handy for indices and patterns.\n3. In-depth explanation: range objects are lightweight, immutable sequences that compute values on demand, and understanding their half-open interval semantics (start inclusive, stop exclusive) helps avoid off-by-one errors.",
    example: "range(5)           # 0, 1, 2, 3, 4\nrange(2, 6)        # 2, 3, 4, 5\nrange(0, 10, 2)    # 0, 2, 4, 6, 8\nrange(10, 0, -1)   # 10, 9, 8, 7, 6, 5, 4, 3, 2, 1"
  },
  {
    term: "Break Statement",
    definition: "A statement that immediately exits the current loop.",
    levelRange: "3",
    detailedDescription: "The break statement terminates the nearest enclosing loop (for or while) and continues execution after the loop. It's commonly used to exit a loop early when a condition is met, such as finding a target value or encountering an error condition. Break only exits one level of nesting.\n\n1. Simple explanation: break lets you jump out of a loop immediately.\n2. Intermediate explanation: You use break when you’ve found what you were looking for or hit a condition where continuing the loop no longer makes sense.\n3. In-depth explanation: Combined with else clauses on loops, break lets you express patterns like “search, then run alternate code only if nothing was found” in a very Pythonic way.",
    example: "for i in range(10):\n    if i == 5:\n        break  # Exit loop when i is 5\n    print(i)  # Prints 0, 1, 2, 3, 4"
  },
  {
    term: "Continue Statement",
    definition: "A statement that skips the rest of the current loop iteration.",
    levelRange: "3",
    detailedDescription: "The continue statement skips the remaining code in the current loop iteration and jumps to the next iteration. Unlike break, continue doesn't exit the loop entirely - it just moves to the next cycle. This is useful for skipping certain values or conditions while continuing to process others.\n\n1. Simple explanation: continue skips the rest of the loop body and goes straight to the next turn.\n2. Intermediate explanation: It’s handy when you want to ignore certain cases (like invalid data) but keep looping over the rest.\n3. In-depth explanation: Using continue wisely can simplify complex conditionals inside loops, but overuse can also make control flow harder to follow if the loop body becomes too fragmented.",
    example: "for i in range(10):\n    if i % 2 == 0:  # Skip even numbers\n        continue\n    print(i)  # Prints only odd numbers: 1, 3, 5, 7, 9"
  },
  {
    term: "Function",
    definition: "A reusable block of code that performs a specific task.",
    levelRange: "5",
    detailedDescription: "Functions are first-class objects in Python that encapsulate code for reuse. They can accept parameters and return values. Python functions support default parameters, variable-length argument lists (*args, **kwargs), and can be passed as arguments to other functions. Functions can be defined with or without explicit return statements.\n\n1. Simple explanation: A function is a named recipe for doing a task that you can call many times.\n2. Intermediate explanation: Functions bundle related steps, take inputs (parameters), and optionally give back a result, which keeps your code organized and avoids repetition.\n3. In-depth explanation: Because Python treats functions as first-class objects, you can store them in data structures, pass them to other functions, return them, and use them to build higher-level abstractions like callbacks and decorators.",
    example: "def greet(name, greeting='Hello'):\n    return f'{greeting}, {name}!'\n\nresult = greet('Alice')  # 'Hello, Alice!'\nresult2 = greet('Bob', 'Hi')  # 'Hi, Bob!'"
  },
  {
    term: "List",
    definition: "A mutable, ordered sequence of objects that can contain mixed types.",
    levelRange: "5",
    detailedDescription: "Lists are Python's primary mutable sequence type. They can grow and shrink dynamically, and can contain objects of different types. Lists support powerful operations like slicing, concatenation, and list comprehensions. They are implemented as dynamic arrays, providing efficient random access but potentially expensive insertions/deletions in the middle.\n\n1. Simple explanation: A list is an ordered collection of items, like a to-do list in code.\n2. Intermediate explanation: You can add, remove, and change elements in place, loop over them, and slice out sublists for processing.\n3. In-depth explanation: Lists are dynamic arrays under the hood, so appending is usually amortized O(1), random indexing is O(1), but inserting or deleting in the middle can be O(n), which matters for performance-sensitive code.",
    example: "numbers = [1, 2, 3, 4, 5]\nfruits = ['apple', 'banana', 'cherry']\nmixed = [42, 'hello', True, [1, 2]]\n\n# List comprehension\nsquares = [x**2 for x in numbers]"
  },
  {
    term: "Dictionary",
    definition: "A mutable mapping of hashable keys to arbitrary values.",
    levelRange: "5",
    detailedDescription: "Dictionaries provide fast lookups using keys rather than positional indexing. Keys must be hashable (immutable) objects, while values can be any type. Dictionaries maintain insertion order as of Python 3.7. They are implemented using hash tables, providing average O(1) lookup time. Dictionary comprehensions allow creating dictionaries from iterables.\n\n1. Simple explanation: A dictionary is a set of key/value pairs, like a mini phonebook in code.\n2. Intermediate explanation: Instead of using positions, you look up values by meaningful keys (like \"name\" or \"score\"), which makes data easier to work with.\n3. In-depth explanation: Dicts are hash tables, so understanding hashability, collisions, and how keys are compared (via __hash__ and __eq__) is important when designing reliable and efficient mappings.",
    example: "person = {'name': 'Alice', 'age': 30, 'city': 'New York'}\n\n# Accessing values\nname = person['name']\n\n# Dictionary comprehension\nsquares = {x: x**2 for x in range(5)}  # {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}"
  },
  {
    term: "Class",
    definition: "A blueprint for creating objects with shared behavior and state.",
    levelRange: "7",
    detailedDescription: "Classes define the structure and behavior of objects. They contain attributes (data) and methods (functions). The __init__ method initializes new instances. Classes support inheritance, allowing child classes to extend or modify parent class behavior. Python uses a method resolution order (MRO) to determine which method to call in multiple inheritance scenarios.\n\n1. Simple explanation: A class is a template for creating objects that share the same kind of data and behavior.\n2. Intermediate explanation: Classes bundle attributes and methods together so you can model real-world things (like Users or Orders) in your code.\n3. In-depth explanation: Python’s class model is highly dynamic; understanding attribute lookup order, descriptors, and the MRO is key when you rely on inheritance, mixins, or advanced patterns.",
    example: "class Person:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def greet(self):\n        return f'Hello, I am {self.name}'\n\nperson = Person('Alice', 30)\nprint(person.greet())  # 'Hello, I am Alice'"
  },
  {
    term: "Method",
    definition: "A function defined inside a class that operates on instances of that class.",
    levelRange: "7",
    detailedDescription: "Methods are functions bound to class instances. The first parameter is conventionally named 'self' and refers to the instance. Methods can access and modify instance attributes. Class methods and static methods provide alternative ways to define functions related to classes. Methods support the same parameter features as regular functions.\n\n1. Simple explanation: A method is just a function that “belongs to” an object.\n2. Intermediate explanation: Methods use self to read and update the object’s data, and you call them with dot syntax like user.log_in().\n3. In-depth explanation: Different method types (instance, class, static) give you flexible ways to attach behavior to a class, and understanding how binding works explains why self is passed automatically when you call instance methods.",
    example: "class Calculator:\n    def add(self, a, b):\n        return a + b\n    \n    def multiply(self, a, b):\n        return a * b\n\ncalc = Calculator()\nresult = calc.add(5, 3)  # 8"
  },
  {
    term: "Built-in Methods",
    definition: "Methods built into Python types (str, list, dict, set, etc.) — available on every instance.",
    levelRange: "1-10",
    detailedDescription: "Python types come with built-in methods: call them with dot notation (obj.method()). Strings: capitalize(), lower(), upper(), split(), join(), strip(), find(), replace(), etc. Lists: append(), extend(), insert(), remove(), pop(), sort(), reverse(), etc. Dicts: get(), keys(), values(), items(), pop(), update(), etc. Sets: add(), remove(), union(), intersection(), difference(), etc. Tuples: count(), index(). Bytes/bytearray: similar to str plus mutable methods. Each type exposes methods suited to its data shape.",
    example: "# Strings\nstr.capitalize()       # Capitalize first character\nstr.lower(), str.upper()\nstr.split(s), str.join(iter)\nstr.strip(), str.find(s), str.replace(a,b)\n\n# Lists\nlist.append(x), list.extend(it)\nlist.insert(i,x), list.remove(x), list.pop(i=-1)\nlist.sort(), list.reverse(), list.copy()\n\n# Dicts\ndict.get(k,default), dict.keys(), dict.values()\ndict.items(), dict.pop(k), dict.update(other)\n\n# Sets\nset.add(e), set.remove(e), set.discard(e)\nset.union(*o), set.intersection(*o)\nset.difference(*o)"
  },
  {
    term: "Scope",
    definition: "The region of a program where a variable is accessible.",
    levelRange: "7",
    detailedDescription: "Scope determines where variables can be accessed. Python has four scopes: local (inside functions), enclosing (nested functions), global (module level), and built-in (Python's built-in names). Variables in inner scopes can shadow those in outer scopes. The LEGB rule (Local, Enclosing, Global, Built-in) determines name resolution.\n\n1. Simple explanation: Scope answers “where in the program can I use this variable name?”.\n2. Intermediate explanation: Local, enclosing, global, and built-in scopes stack on top of each other so Python knows which value to use when you reference a name.\n3. In-depth explanation: Knowing the LEGB resolution order and how closures capture variables is essential to avoid surprises with shadowing, mutable state, and debugging name-related bugs.",
    example: "global_var = 'global'\n\ndef outer():\n    enclosing_var = 'enclosing'\n    \n    def inner():\n        local_var = 'local'\n        print(local_var)  # local\n        print(enclosing_var)  # enclosing\n        print(global_var)  # global\n    \n    return inner\n\ninner_func = outer()\ninner_func()"
  },
  {
    term: "Global Variable",
    definition: "A variable defined at the module level, accessible throughout the module.",
    levelRange: "7",
    detailedDescription: "Global variables are defined outside any function or class. They can be accessed from anywhere in the module, including inside functions. To modify a global variable from inside a function, you must declare it with the 'global' keyword. Global variables should be used sparingly as they can make code harder to understand and debug.\n\n1. Simple explanation: A global variable is a value defined at the top of a file that many parts of the code can see.\n2. Intermediate explanation: Globals are convenient for truly shared settings, but changing them from many places can make programs harder to reason about.\n3. In-depth explanation: Because globals live in the module namespace and can be mutated, they introduce hidden dependencies; many designs instead prefer dependency injection or configuration objects to keep state explicit.",
    example: "counter = 0\n\ndef increment():\n    global counter\n    counter += 1\n\nincrement()\nprint(counter)  # 1"
  },
  {
    term: "Local Variable",
    definition: "A variable defined inside a function, only accessible within that function.",
    levelRange: "7",
    detailedDescription: "Local variables are created when a function is called and destroyed when the function returns. They are not accessible outside the function. Local variables with the same name as global variables shadow the global ones within the function scope. This is known as variable shadowing.\n\n1. Simple explanation: A local variable only exists inside the function where it is defined.\n2. Intermediate explanation: Locals keep temporary values isolated so they don’t accidentally affect other parts of your code.\n3. In-depth explanation: Understanding local lifetimes, shadowing, and how Python compiles variable access in function frames is important for performance and for avoiding confusing name clashes.",
    example: "def calculate():\n    x = 10  # local variable\n    y = 20  # local variable\n    return x + y\n\nresult = calculate()  # 30\n# x and y are not accessible here"
  },
  {
    term: "Nested Function",
    definition: "A function defined inside another function.",
    levelRange: "7",
    detailedDescription: "Nested functions (also called inner functions) are defined within the body of another function. They can access variables from their enclosing scope (closure). Nested functions are useful for creating helper functions or implementing decorators. They follow the LEGB rule for name resolution.\n\n1. Simple explanation: A nested function is a function written inside another function.\n2. Intermediate explanation: Inner functions can reuse values from the outer function, which is helpful for organizing related logic.\n3. In-depth explanation: Nested functions are the building block of closures and decorators; they capture variables from enclosing scopes, which affects how you structure stateful behaviors without using classes.",
    example: "def outer_function(x):\n    def inner_function(y):\n        return x + y  # can access x from outer scope\n    return inner_function\n\nadd_five = outer_function(5)\nprint(add_five(3))  # 8"
  },
  {
    term: "Closure",
    definition: "A function that remembers the environment in which it was created.",
    levelRange: "9",
    detailedDescription: "A closure occurs when a nested function references variables from its enclosing scope, even after the outer function has finished executing. This allows the inner function to 'remember' the state of the outer function. Closures are fundamental to decorators, partial functions, and many design patterns.\n\n1. Simple explanation: A closure is a function that remembers values from where it was created, even if that code has finished running.\n2. Intermediate explanation: When an inner function uses variables from an outer function, it carries those values along wherever it goes.\n3. In-depth explanation: Closures capture bindings from enclosing scopes, and understanding how cells and free variables work internally is crucial when you build decorators, factories, and functional-style utilities.",
    example: "def make_multiplier(factor):\n    def multiply(number):\n        return number * factor  # factor is 'remembered'\n    return multiply\n\ndouble = make_multiplier(2)\nprint(double(5))  # 10\ntriple = make_multiplier(3)\nprint(triple(5))  # 15"
  },
  {
    term: "Helper Function",
    definition: "A small utility function that assists a larger function.",
    levelRange: "7",
    detailedDescription: "Helper functions (also called utility functions) are small functions defined to perform specific tasks that support larger functions. They improve code readability and reusability by breaking down complex operations into manageable pieces. Helper functions are often defined within the scope where they are used.\n\n1. Simple explanation: A helper function is a small function that does part of a bigger job.\n2. Intermediate explanation: Breaking big tasks into helper functions makes code easier to read, test, and reuse.\n3. In-depth explanation: Good helper functions have clear, narrow responsibilities and stable interfaces, which reduces coupling and makes refactoring safer over time.",
    example: "def process_data(data):\n    def validate_item(item):\n        return isinstance(item, int) and item > 0\n    \n    def clean_item(item):\n        return max(0, min(100, item))\n    \n    valid_data = [clean_item(item) for item in data if validate_item(item)]\n    return valid_data\n\nresult = process_data([10, -5, 50, 'invalid', 200])  # [10, 50]"
  },
  {
    term: "Recursion",
    definition: "A function that calls itself to solve a problem.",
    levelRange: "9",
    detailedDescription: "Recursion occurs when a function calls itself, either directly or indirectly through other functions. Each recursive call creates a new execution context with its own local variables. Recursion requires a base case to prevent infinite loops and a recursive case that moves toward the base case. Python has a recursion limit (default 1000) to prevent stack overflow.\n\n1. Simple explanation: Recursion is when a function solves a problem by calling itself with a smaller piece of the problem.\n2. Intermediate explanation: Each call works on a simpler case until it reaches a base case that is easy to answer, then the results build back up.\n3. In-depth explanation: Recursive algorithms can be elegant but must be designed with careful base cases and progress toward termination; understanding call stacks, stack limits, and when to convert recursion to iteration matters for real-world Python.",
    example: "def factorial(n):\n    if n <= 1:  # base case\n        return 1\n    return n * factorial(n - 1)  # recursive case\n\nprint(factorial(5))  # 120"
  },
  {
    term: "Decorator",
    definition: "A function that modifies the behavior of another function.",
    levelRange: "9",
    detailedDescription: "Decorators are functions that take another function as an argument and return a modified version of that function. They are applied using the @ symbol. Decorators are commonly used for logging, authentication, caching, and validation. They leverage closures and function objects to wrap functionality.\n\n1. Simple explanation: A decorator is a shortcut way to wrap one function with another to add extra behavior.\n2. Intermediate explanation: Using the @ syntax, decorators let you attach cross-cutting concerns like logging or timing without changing the original function’s code.\n3. In-depth explanation: Decorators rely on higher-order functions and closures; understanding how they preserve metadata (via functools.wraps) and interact with arguments and return values is key for writing robust, composable decorators.",
    example: "def timer(func):\n    def wrapper(*args, **kwargs):\n        import time\n        start = time.time()\n        result = func(*args, **kwargs)\n        end = time.time()\n        print(f'{func.__name__} took {end - start:.2f} seconds')\n        return result\n    return wrapper\n\n@timer\ndef slow_function():\n    import time\n    time.sleep(1)\n    return 'done'\n\nslow_function()  # prints timing info"
  },
  {
    term: "Lambda Function",
    definition: "An anonymous, inline function defined with the lambda keyword.",
    levelRange: "7",
    detailedDescription: "Lambda functions are small, anonymous functions that can be defined inline. They can take any number of arguments but can only have one expression. Lambda functions are often used with functions like map(), filter(), and sorted() where a small function is needed temporarily. They cannot contain statements or complex logic.\n\n1. Simple explanation: A lambda is a tiny function you write in one line without giving it a name.\n2. Intermediate explanation: Lambdas are handy for short throwaway functions passed into tools like sorted(), map(), or filter().\n3. In-depth explanation: While syntactic sugar over def, lambdas encourage functional-style patterns; knowing when to use them versus named functions is a style and readability choice in Python codebases.",
    example: "numbers = [1, 2, 3, 4, 5]\n\n# Lambda with map\neven_numbers = list(map(lambda x: x * 2, numbers))  # [2, 4, 6, 8, 10]\n\n# Lambda with filter\nevens = list(filter(lambda x: x % 2 == 0, numbers))  # [2, 4]\n\n# Lambda with sorted\npairs = [(1, 'one'), (2, 'two'), (3, 'three')]\nsorted_pairs = sorted(pairs, key=lambda x: x[1])"
  },
  {
    term: "Generator",
    definition: "A function that yields values one at a time instead of returning a complete list.",
    levelRange: "9",
    detailedDescription: "Generators are functions that use the 'yield' keyword to produce a sequence of values lazily. Instead of computing all values at once and storing them in memory, generators compute values on-demand. This makes them memory-efficient for large datasets. Generators can be consumed using next() or in for loops.\n\n1. Simple explanation: A generator is a function that can give you a series of values one at a time.\n2. Intermediate explanation: Using yield lets you pause the function between values so you don’t have to build a whole list in memory first.\n3. In-depth explanation: Generators implement the iterator protocol and are the foundation of many streaming and async patterns; understanding their state machine behavior, including send(), throw(), and close(), unlocks advanced control over execution.",
    example: "def fibonacci_generator():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b\n\nfib = fibonacci_generator()\nprint(next(fib))  # 0\nprint(next(fib))  # 1\nprint(next(fib))  # 1\nprint(next(fib))  # 2\n\n# Or use in a loop\nfor num in fib:\n    if num > 100:\n        break\n    print(num)"
  },
  // Level 1-2 Additional Terms
  {
    term: "None",
    definition: "A special constant representing the absence of a value.",
    levelRange: "1",
    detailedDescription: "None is Python's null value, representing the absence of a value or a null object. It is a singleton object (only one instance exists). None is commonly used as a default return value for functions that don't explicitly return anything. It is falsy in boolean contexts.\n\n1. Simple explanation: None means “nothing here” or “no value yet” in Python.\n2. Intermediate explanation: Functions that don’t return anything special actually return None, and you can also use None as a placeholder when you haven’t decided on a real value.\n3. In-depth explanation: None is a singleton sentinel object often used to signal missing data, optional values, or special states; identity checks (is None) are preferred over equality, and using None as a default argument has important implications for mutable parameters.",
    example: "value = None\nif value is None:\n    print('No value assigned')\n\ndef find_item(items, target):\n    for item in items:\n        if item == target:\n            return item\n    return None  # Not found"
  },
  {
    term: "Comment",
    definition: "Text in code that is ignored by the Python interpreter, used for documentation.",
    levelRange: "1",
    detailedDescription: "Comments start with # and continue to the end of the line. They are used to explain code, document functions, or temporarily disable code. Multi-line comments can be created using multiple # lines or triple-quoted strings (though the latter creates a string object). Comments are essential for code readability and maintenance.\n\n1. Simple explanation: A comment is a note to humans that Python skips when running the code.\n2. Intermediate explanation: Good comments explain why the code is written a certain way or what a non-obvious block is doing, without repeating things that are already clear from the code itself.\n3. In-depth explanation: Comment quality strongly affects maintainability; teams often use comments alongside docstrings and type hints to record assumptions, edge cases, and design decisions that cannot be easily expressed in code alone.",
    example: "# This is a single-line comment\n\n# Multi-line comments use\n# multiple hash symbols\n\nx = 5  # Inline comment explaining the variable\n\n\"\"\"\nThis is a docstring, not technically a comment,\nbut often used for documentation.\n\"\"\""
  },
  {
    term: "Type Conversion",
    definition: "Converting a value from one data type to another.",
    levelRange: "1",
    detailedDescription: "Type conversion (also called type casting) transforms values from one type to another. Python provides built-in functions like int(), float(), str(), bool() for conversions. Some conversions are automatic (implicit), while others must be explicit. Not all conversions are possible - attempting invalid conversions raises TypeError.\n\n1. Simple explanation: Type conversion is asking Python to turn a value into another kind of value, like turning the string \"42\" into the number 42.\n2. Intermediate explanation: You use functions such as int(), float(), str(), and bool() to convert values when you need them in a different form for calculations, display, or logic.\n3. In-depth explanation: Understanding which conversions are safe, lossy, or invalid (for example, parsing user input or converting floats to ints) is key to avoiding bugs and exceptions, especially when dealing with external data sources and user interfaces.",
    example: "x = '42'\nnumber = int(x)  # Convert string to integer: 42\n\ndecimal = float(5)  # Convert int to float: 5.0\n\ntext = str(123)  # Convert number to string: '123'\n\nboolean = bool(1)  # Convert to boolean: True\nboolean2 = bool(0)  # False"
  },
  {
    term: "Arithmetic Operator",
    definition: "Operators that perform mathematical operations: +, -, *, /, //, %, **.",
    levelRange: "1",
    detailedDescription: "Arithmetic operators perform basic mathematical operations. + (addition), - (subtraction), * (multiplication), / (division, always returns float), // (floor division), % (modulo/remainder), ** (exponentiation). Python follows standard mathematical precedence rules. Division by zero raises ZeroDivisionError.\n\n1. Simple explanation: Arithmetic operators are the symbols you already know from math, like + and -, that let Python add, subtract, multiply, and divide numbers.\n2. Intermediate explanation: These operators follow a fixed order of operations, and some (like // and %) are especially useful for integer math, splits, and patterns.\n3. In-depth explanation: Operator behavior interacts with Python’s numeric tower (int, float, complex, Decimal, Fraction) and type promotion rules, so understanding how mixed-type expressions are evaluated helps you write precise numeric code.",
    example: "a = 10\nb = 3\n\nprint(a + b)   # 13 (addition)\nprint(a - b)   # 7 (subtraction)\nprint(a * b)   # 30 (multiplication)\nprint(a / b)   # 3.333... (division)\nprint(a // b)  # 3 (floor division)\nprint(a % b)   # 1 (modulo)\nprint(a ** b)  # 1000 (exponentiation)"
  },
  {
    term: "String Concatenation",
    definition: "Combining multiple strings into a single string using + or join().",
    levelRange: "1",
    detailedDescription: "String concatenation combines strings end-to-end. The + operator concatenates two strings. For multiple strings, join() is more efficient than repeated + operations. String concatenation creates new string objects since strings are immutable. The += operator can be used for in-place concatenation (though it still creates a new object).\n\n1. Simple explanation: Concatenation is just sticking strings together to make one longer piece of text.\n2. Intermediate explanation: You can quickly build messages by joining pieces like names, labels, and numbers converted to strings, but doing it in a loop with + can be slow.\n3. In-depth explanation: Because each concatenation creates a new string, heavy concatenation patterns should use join() or other buffering techniques for performance, especially when building large responses or processing streams of data.",
    example: "first = 'Hello'\nlast = 'World'\nresult = first + ' ' + last  # 'Hello World'\n\n# Using join (more efficient for many strings)\nwords = ['Hello', 'World', 'Python']\ncombined = ' '.join(words)  # 'Hello World Python'\n\n# String repetition\nrepeated = 'ha' * 3  # 'hahaha'"
  },
  {
    term: "String Slicing",
    definition: "Extracting a portion of a string using index notation [start:end:step].",
    levelRange: "1",
    detailedDescription: "String slicing extracts substrings using bracket notation with colons. The syntax is [start:end:step] where start is inclusive, end is exclusive, and step controls the increment. Negative indices count from the end. Omitting start defaults to 0, omitting end defaults to the end. Slicing returns a new string and never raises IndexError.\n\n1. Simple explanation: Slicing lets you cut out part of a string, like taking just the first three letters of a word.\n2. Intermediate explanation: You choose where to start, where to stop, and how big the step is, so you can grab prefixes, suffixes, every second character, or even reverse the text.\n3. In-depth explanation: Slicing is a general sequence operation that works the same way for lists, tuples, and many custom types; understanding slice objects, negative indices, and how copies are created helps you write both clean APIs and efficient data-processing code.",
    example: "text = 'Python'\nprint(text[0:2])    # 'Py'\nprint(text[:3])     # 'Pyt'\nprint(text[3:])     # 'hon'\nprint(text[-3:])    # 'hon'\nprint(text[::2])    # 'Pto' (every 2nd character)\nprint(text[::-1])   # 'nohtyP' (reverse)"
  },
  {
    term: "Assignment Operator",
    definition: "The = operator that assigns a value to a variable.",
    levelRange: "1",
    detailedDescription: "The assignment operator = binds a value to a variable name. Python supports multiple assignment (unpacking), augmented assignment (+=, -=, *=, etc.), and chained assignment. Assignment doesn't copy objects - it creates a reference. For mutable objects, this means multiple variables can reference the same object.\n\n1. Simple explanation: The = sign tells Python to remember a value under a name, like x = 5.\n2. Intermediate explanation: When you assign, the name points to an existing object instead of making a deep copy, especially for lists and dictionaries.\n3. In-depth explanation: Understanding that assignment only rebinds names (and does not duplicate objects) is critical for reasoning about aliasing, mutations, function arguments, and bugs where changing one variable seems to “mysteriously” affect another.",
    example: "x = 10  # Simple assignment\n\na, b = 1, 2  # Multiple assignment\n\nx += 5  # Augmented assignment (same as x = x + 5)\n\n# Chained assignment\nx = y = z = 0  # All three variables equal 0"
  },
  {
    term: "F-String",
    definition: "A formatted string literal that allows embedded expressions using f prefix.",
    levelRange: "1",
    detailedDescription: "F-strings (formatted string literals) are prefixed with 'f' or 'F' and allow embedding Python expressions inside curly braces {}. They provide a concise and readable way to format strings. F-strings are evaluated at runtime and support expressions, function calls, and formatting specifiers. They are the preferred method for string formatting in Python 3.6+.\n\n1. Simple explanation: An f-string is a normal string with an f in front that lets you plug values directly into the text using {braces}.\n2. Intermediate explanation: F-strings make it easy to build clear messages by mixing variables and text in one place instead of using + or .format().\n3. In-depth explanation: Because f-strings evaluate arbitrary expressions at runtime and support rich formatting mini-languages, they are powerful but should be used carefully with untrusted data, and understanding their evaluation order helps avoid subtle bugs.",
    example: "name = 'Alice'\nage = 30\n\n# F-string with variables\nmessage = f'Hello, {name}!'\n\n# F-string with expressions\ninfo = f'{name} is {age} years old'\n\n# F-string with formatting\nprice = 19.99\nformatted = f'Price: ${price:.2f}'  # 'Price: $19.99'\n\n# F-string with function calls\nresult = f'The length is {len(name)}'"
  },
  // Level 3-4 Additional Terms
  {
    term: "Elif Statement",
    definition: "A conditional clause that checks additional conditions after an if statement.",
    levelRange: "3",
    detailedDescription: "Elif (else-if) allows checking multiple conditions sequentially. It combines else and if into a single keyword. Elif clauses are evaluated only if all previous conditions were False. Once a True condition is found, that block executes and subsequent elif/else clauses are skipped. Elif provides a cleaner alternative to nested if statements.\n\n1. Simple explanation: elif lets you say “otherwise, if this other condition is true…” instead of writing a new if.\n2. Intermediate explanation: It chains several mutually exclusive tests so only the first matching block runs, keeping your decisions organized.\n3. In-depth explanation: Proper use of elif (instead of nested ifs) clarifies intent and leverages Python’s top‑down evaluation of conditions to keep complex decision trees readable.",
    example: "score = 85\n\nif score >= 90:\n    grade = 'A'\nelif score >= 80:\n    grade = 'B'\nelif score >= 70:\n    grade = 'C'\nelse:\n    grade = 'F'\n\nprint(grade)  # 'B'"
  },
  {
    term: "Else Clause",
    definition: "An optional clause that executes when all previous conditions are False.",
    levelRange: "3",
    detailedDescription: "The else clause provides a default action when no conditions in an if/elif chain are True. It must come after all if and elif statements. There can only be one else clause per if statement. Else can also be used with for and while loops to execute code when the loop completes normally (not via break).\n\n1. Simple explanation: else is the “otherwise” block that runs when nothing before it matched.\n2. Intermediate explanation: In if/elif/else, the else block handles the fallback case; on loops, else runs only if the loop didn’t exit early with break.\n3. In-depth explanation: Loop else clauses are unique to Python and enable idioms like “search with for/else,” which separates the “found” and “not found” behavior cleanly.",
    example: "age = 15\n\nif age >= 18:\n    status = 'Adult'\nelse:\n    status = 'Minor'\n\n# Else with loops\nfor i in range(5):\n    if i == 10:\n        break\nelse:\n    print('Loop completed normally')  # This executes"
  },
  {
    term: "Ternary Operator",
    definition: "A conditional expression that returns one value if True, another if False.",
    levelRange: "3",
    detailedDescription: "Python's ternary operator (conditional expression) has the syntax: value_if_true if condition else value_if_false. It's a concise way to assign values based on conditions. Unlike if-else statements, ternary operators are expressions that return values. They can be nested but should be used sparingly for readability.\n\n1. Simple explanation: A ternary expression lets you choose between two values in one short line.\n2. Intermediate explanation: It’s useful when you want to assign one of two options based on a simple condition without writing a full if block.\n3. In-depth explanation: Because ternary expressions are expressions (not statements), they can be composed inside larger expressions, but heavy nesting can hurt readability and should be used with care.",
    example: "age = 20\nstatus = 'Adult' if age >= 18 else 'Minor'\n\n# Equivalent to:\n# if age >= 18:\n#     status = 'Adult'\n# else:\n#     status = 'Minor'\n\nmax_value = a if a > b else b  # Find maximum"
  },
  {
    term: "Truthiness",
    definition: "The inherent boolean value of any Python object.",
    levelRange: "3",
    detailedDescription: "Every Python object has a truthiness value - it's considered either truthy or falsy. Falsy values include: None, False, 0, empty sequences (\"\", [], ()), empty mappings ({}), and objects with __bool__() or __len__() returning False/0. All other values are truthy. Truthiness is evaluated in boolean contexts like if statements.\n\n1. Simple explanation: Truthiness is how Python decides if a value counts as True or False in conditions.\n2. Intermediate explanation: Empty things (like \"\", [], {}) and zero are treated as False, while most non-empty or non-zero values are treated as True.\n3. In-depth explanation: Classes can customize their truthiness via __bool__ or __len__, which is powerful but must be designed carefully so objects behave intuitively in conditions.",
    example: "if 0:  # Falsy\n    print('This won't print')\n\nif 1:  # Truthy\n    print('This will print')\n\nif '':  # Falsy (empty string)\n    print('Won't print')\n\nif 'hello':  # Truthy\n    print('Will print')\n\nif []:  # Falsy (empty list)\n    print('Won't print')"
  },
  {
    term: "Short-Circuit Evaluation",
    definition: "The behavior where logical operators stop evaluating once the result is determined.",
    levelRange: "3",
    detailedDescription: "Python's 'and' and 'or' operators use short-circuit evaluation. For 'and', if the left operand is False, the right operand isn't evaluated. For 'or', if the left operand is True, the right operand isn't evaluated. This can improve performance and allow safe operations like checking if a list exists before accessing it.\n\n1. Simple explanation: Short-circuiting means Python sometimes stops checking conditions early when the answer is already known.\n2. Intermediate explanation: With and/or, Python doesn’t evaluate the second part if the first part is enough to decide the result, which can prevent errors and save time.\n3. In-depth explanation: Short-circuit behavior enables idioms like safe attribute access and lazy evaluation, but you must remember that side effects in the second operand may not run if the first operand decides the outcome.",
    example: "x = 0\ny = 5\n\n# Short-circuit with 'and'\nresult = x and y  # Returns 0, doesn't evaluate y\n\n# Short-circuit with 'or'\nresult = x or y  # Returns 5, doesn't need to check further\n\n# Safe list access\nitems = [1, 2, 3]\nif items and items[0] > 0:  # Safe: checks items exists first\n    print('First item is positive')"
  },
  {
    term: "Nested Loop",
    definition: "A loop inside another loop, used to iterate over multi-dimensional data.",
    levelRange: "3",
    detailedDescription: "Nested loops place one loop inside another, creating a pattern where the inner loop completes all iterations for each iteration of the outer loop. This is useful for working with 2D data structures, generating combinations, or processing grids. The total iterations equals the product of both loop ranges.\n\n1. Simple explanation: A nested loop is a loop inside another loop.\n2. Intermediate explanation: You use them for things like working over rows and columns in a grid or comparing every pair of items.\n3. In-depth explanation: Because total work grows as the product of loop sizes (often O(n²)), nested loops require extra care with performance and are good candidates for refactoring or using vectorized/optimized libraries.",
    example: "for i in range(3):\n    for j in range(2):\n        print(f'({i}, {j})')\n# Output:\n# (0, 0) (0, 1)\n# (1, 0) (1, 1)\n# (2, 0) (2, 1)\n\n# Processing a 2D grid\nmatrix = [[1, 2], [3, 4]]\nfor row in matrix:\n    for cell in row:\n        print(cell)"
  },
  {
    term: "Loop Variable",
    definition: "The variable that takes each value from the iterable in a for loop.",
    levelRange: "3",
    detailedDescription: "The loop variable is the identifier that receives each value from the iterable during iteration. It's created in the loop scope and persists after the loop completes with its final value. The loop variable can be any valid identifier and can be used within the loop body. Modifying the loop variable doesn't affect the original iterable.\n\n1. Simple explanation: The loop variable is the name that takes each item’s value during a loop.\n2. Intermediate explanation: Changing the loop variable only changes that name, not the original collection you’re looping over.\n3. In-depth explanation: Loop variables can leak into the surrounding scope in Python, which can surprise people coming from other languages and is important to remember when reusing names.",
    example: "for number in [1, 2, 3, 4, 5]:\n    print(number * 2)  # number is the loop variable\n\n# Loop variable persists after loop\nfor item in ['a', 'b']:\n    pass\nprint(item)  # 'b' (last value)\n\n# Using loop variable with range\nfor i in range(5):\n    print(f'Index: {i}')"
  },
  {
    term: "Infinite Loop",
    definition: "A loop that continues indefinitely because its condition never becomes False.",
    levelRange: "3",
    detailedDescription: "An infinite loop occurs when a while loop's condition always evaluates to True, or when the loop variable in a for loop never reaches a termination point. While sometimes intentional (with break statements), infinite loops are usually bugs. They can cause programs to hang or consume excessive resources. Always ensure loop conditions can become False.\n\n1. Simple explanation: An infinite loop is a loop that never stops.\n2. Intermediate explanation: It happens when the condition to stop the loop is never met, often because a variable isn’t updated correctly.\n3. In-depth explanation: Intentional infinite loops are common in servers and event loops but must include clear break conditions or external signals for shutdown; accidental ones are a classic bug from misdesigned termination logic.",
    example: "# Intentional infinite loop with break\nwhile True:\n    user_input = input('Enter command: ')\n    if user_input == 'quit':\n        break  # Exit the loop\n    print(f'You entered: {user_input}')\n\n# Accidental infinite loop (BUG!)\n# count = 0\n# while count < 5:\n#     print(count)\n#     # Forgot to increment count - infinite loop!"
  },
  {
    term: "Pass Statement",
    definition: "A null operation that does nothing, used as a placeholder.",
    levelRange: "3",
    detailedDescription: "The pass statement is a null operation - when executed, nothing happens. It's useful as a placeholder where syntax requires a statement but no action is needed. Common uses include: empty function/class bodies, conditional blocks that will be implemented later, or exception handlers that intentionally do nothing.\n\n1. Simple explanation: pass means “do nothing here” so the code still stays valid.\n2. Intermediate explanation: It’s handy when you’re sketching out structure or when you intentionally want to ignore a case for now.\n3. In-depth explanation: Although pass has no runtime effect, using it thoughtfully can make the intent of unfinished or deliberately empty code blocks clearer during development and reviews.",
    example: "def function_to_implement_later():\n    pass  # Placeholder - will add code later\n\nif condition:\n    pass  # Do nothing if condition is True\nelse:\n    print('Condition is False')\n\ntry:\n    risky_operation()\nexcept:\n    pass  # Silently ignore errors"
  },
  // Level 5-6 Additional Terms
  {
    term: "List Indexing",
    definition: "Accessing individual elements of a list using their position (index).",
    levelRange: "5",
    detailedDescription: "List indexing uses square brackets with an integer index to access elements. Indices start at 0 for the first element. Negative indices count from the end (-1 is the last element). Accessing an invalid index raises IndexError. Indexing returns a reference to the object, so modifying mutable elements affects the original list.\n\n1. Simple explanation: List indexing lets you grab an item from a list by its position number.\n2. Intermediate explanation: Positions start at 0, and negative indexes let you count from the end, which is useful for quickly reaching the last element(s).\n3. In-depth explanation: Because indexing returns references to objects, not copies, changes to mutable elements through an index will be visible from all variables that share the same list.",
    example: "fruits = ['apple', 'banana', 'cherry']\n\nprint(fruits[0])   # 'apple' (first element)\nprint(fruits[1])   # 'banana'\nprint(fruits[-1])  # 'cherry' (last element)\nprint(fruits[-2])  # 'banana' (second from end)\n\n# Modifying through index\nfruits[0] = 'orange'  # ['orange', 'banana', 'cherry']"
  },
  {
    term: "List Method",
    definition: "Built-in functions that operate on lists: append(), remove(), sort(), etc.",
    levelRange: "5",
    detailedDescription: "List methods are functions called on list objects using dot notation. Common methods include: append() (add to end), insert() (add at position), remove() (remove by value), pop() (remove and return), sort() (in-place sorting), reverse() (reverse order), count() (count occurrences), index() (find position). Most list methods modify the list in-place.\n\n1. Simple explanation: List methods are built-in tools attached to lists that help you add, remove, and organize items.\n2. Intermediate explanation: Using methods like append, remove, and sort lets you change a list without recreating it from scratch.\n3. In-depth explanation: Many list methods mutate the list in-place and return None, which is a common gotcha; understanding which operations mutate versus create new lists is important for avoiding accidental side effects.",
    example: "numbers = [3, 1, 4, 1, 5]\n\nnumbers.append(9)      # [3, 1, 4, 1, 5, 9]\nnumbers.insert(1, 2)   # [3, 2, 1, 4, 1, 5, 9]\nnumbers.remove(1)      # [3, 2, 4, 1, 5, 9] (removes first 1)\nnumbers.sort()         # [1, 2, 3, 4, 5, 9]\nnumbers.reverse()      # [9, 5, 4, 3, 2, 1]\ncount = numbers.count(1)  # 1"
  },
  {
    term: "List Comprehension",
    definition: "A concise way to create lists using a single line of code.",
    levelRange: "5",
    detailedDescription: "List comprehensions provide a compact syntax for creating lists. The basic form is [expression for item in iterable]. They can include conditions: [expression for item in iterable if condition]. List comprehensions are more readable and often faster than equivalent for loops. They can be nested for multi-dimensional lists.\n\n1. Simple explanation: A list comprehension is a one-line shortcut for building a new list from another sequence.\n2. Intermediate explanation: It combines a for loop and optional if filter into a single, readable expression that often replaces several lines of code.\n3. In-depth explanation: Comprehensions are evaluated in their own scope and can be nested; using them wisely leads to concise, expressive code, but very complex ones are better rewritten as regular loops.",
    example: "numbers = [1, 2, 3, 4, 5]\n\n# Square each number\nsquares = [x**2 for x in numbers]  # [1, 4, 9, 16, 25]\n\n# Filter even numbers\n evens = [x for x in numbers if x % 2 == 0]  # [2, 4]\n\n# Nested comprehension\nmatrix = [[i*j for j in range(3)] for i in range(3)]\n# [[0, 0, 0], [0, 1, 2], [0, 2, 4]]"
  },
  {
    term: "Tuple",
    definition: "An immutable, ordered sequence of objects, defined with parentheses.",
    levelRange: "5",
    detailedDescription: "Tuples are immutable sequences, meaning they cannot be modified after creation. They are defined with parentheses (or just commas). Tuples are faster than lists and can be used as dictionary keys (since they're hashable). They're useful for fixed collections of related values. Single-element tuples require a trailing comma.\n\n1. Simple explanation: A tuple is like a list that you can’t change.\n2. Intermediate explanation: Tuples are good for grouping a fixed set of related values, such as a point (x, y) or function return values.\n3. In-depth explanation: Because tuples are immutable and hashable (when containing only hashable items), they’re often used as dictionary keys and elements of sets, and they play a key role in multiple assignment and pattern matching.",
    example: "point = (3, 4)  # Coordinates\nperson = ('Alice', 30, 'Engineer')  # Multiple values\n\n# Single element tuple\nsingle = (42,)  # Note the comma\nnot_tuple = (42)  # This is just an integer\n\n# Tuple unpacking\nx, y = point  # x = 3, y = 4\n\n# Tuples as dictionary keys\nlocations = {(0, 0): 'Origin', (1, 1): 'Corner'}"
  },
  {
    term: "Set",
    definition: "An unordered collection of unique, hashable objects.",
    levelRange: "5",
    detailedDescription: "Sets are mutable collections that store unique elements. They don't maintain order (though Python 3.7+ preserves insertion order). Sets are useful for membership testing, removing duplicates, and mathematical set operations (union, intersection, difference). Elements must be hashable (immutable). Sets are created with {} or set().\n\n1. Simple explanation: A set is a bag of unique items where order doesn’t matter.\n2. Intermediate explanation: Sets shine when you need to test “is this in there?” quickly or remove duplicates from a collection.\n3. In-depth explanation: Backed by hash tables like dicts, sets enable fast membership tests and support rich algebraic operations (union, intersection, difference) that map directly to classic set theory.",
    example: "numbers = {1, 2, 3, 3, 4}  # {1, 2, 3, 4} (duplicates removed)\n\n# Set operations\nset1 = {1, 2, 3}\nset2 = {3, 4, 5}\n\nunion = set1 | set2        # {1, 2, 3, 4, 5}\nintersection = set1 & set2  # {3}\ndifference = set1 - set2    # {1, 2}\n\n# Membership testing\nprint(2 in set1)  # True"
  },
  {
    term: "Dictionary Key",
    definition: "The unique identifier used to access values in a dictionary.",
    levelRange: "5",
    detailedDescription: "Dictionary keys must be hashable (immutable) objects like strings, numbers, or tuples. Keys are unique - assigning to an existing key overwrites the value. Keys are used to access, add, or modify dictionary values. Accessing a non-existent key raises KeyError (use get() to avoid this). Keys can be iterated over with .keys().\n\n1. Simple explanation: A dictionary key is the label you use to look up a stored value.\n2. Intermediate explanation: Keys must be unique within a dictionary, and you use them for fast, readable access instead of numeric positions.\n3. In-depth explanation: Only hashable objects can be keys; understanding how hashing and equality work on custom types is vital if you want to use your own classes as keys reliably.",
    example: "person = {'name': 'Alice', 'age': 30}\n\n# Accessing values\nname = person['name']  # 'Alice'\nage = person.get('age', 0)  # 30 (with default)\n\n# Adding/modifying\nperson['city'] = 'NYC'  # Add new key\nperson['age'] = 31     # Modify existing\n\n# Iterating keys\nfor key in person.keys():\n    print(key, person[key])"
  },
  {
    term: "Dictionary Value",
    definition: "The data associated with a key in a dictionary.",
    levelRange: "5",
    detailedDescription: "Dictionary values can be any Python object - strings, numbers, lists, other dictionaries, functions, etc. Values are accessed using their corresponding keys. Unlike keys, values don't need to be unique or hashable. Values can be modified, added, or removed. The .values() method returns all values in a dictionary.\n\n1. Simple explanation: A dictionary value is the actual data you’re storing under a key.\n2. Intermediate explanation: Values can be any type (even other dictionaries), which makes dicts great for nested and structured data.\n3. In-depth explanation: Because values can be mutable and deeply nested, thinking about aliasing and copying is important when you pass dictionary-based data structures around your program.",
    example: "data = {\n    'name': 'Alice',\n    'scores': [85, 90, 88],\n    'info': {'age': 30, 'city': 'NYC'}\n}\n\n# Accessing values\nname = data['name']           # 'Alice'\nscores = data['scores']        # [85, 90, 88]\ninfo = data['info']            # {'age': 30, 'city': 'NYC'}\n\n# Modifying values\ndata['scores'].append(92)  # Modifies the list\n\n# Iterating values\nfor value in data.values():\n    print(value)"
  },
  {
    term: "Dictionary Comprehension",
    definition: "A concise way to create dictionaries using a single expression.",
    levelRange: "5",
    detailedDescription: "Dictionary comprehensions create dictionaries using the syntax {key: value for item in iterable}. They can include conditions: {key: value for item in iterable if condition}. Dictionary comprehensions are more readable and efficient than creating dictionaries with loops. They're useful for transforming data structures.\n\n1. Simple explanation: A dictionary comprehension is a shortcut for building a new dictionary from another sequence.\n2. Intermediate explanation: It lets you specify how to compute each key and value in one compact expression, often replacing several lines of loop code.\n3. In-depth explanation: Comprehensions encourage a declarative style for transforming and filtering data; as with list comprehensions, very complex ones should be broken into clearer steps.",
    example: "numbers = [1, 2, 3, 4, 5]\n\n# Create dictionary of squares\nsquares = {x: x**2 for x in numbers}\n# {1: 1, 2: 4, 3: 9, 4: 16, 5: 25}\n\n# With condition\n evens = {x: x*2 for x in numbers if x % 2 == 0}\n# {2: 4, 4: 8}\n\n# From two lists\nkeys = ['a', 'b', 'c']\nvalues = [1, 2, 3]\ndict_from_lists = {k: v for k, v in zip(keys, values)}\n# {'a': 1, 'b': 2, 'c': 3}"
  },
  // Level 7-8 Additional Terms
  {
    term: "Parameter",
    definition: "A variable in a function definition that receives a value when the function is called.",
    levelRange: "7",
    detailedDescription: "Parameters are placeholders in function definitions that specify what arguments the function expects. When a function is called, arguments are passed and assigned to parameters. Parameters can have default values, making them optional. Functions can accept variable numbers of arguments using *args and **kwargs.\n\n1. Simple explanation: A parameter is the name you use inside a function to refer to a value that will be passed in.\n2. Intermediate explanation: Parameters define what information a function needs, and arguments fill those slots when you call the function.\n3. In-depth explanation: Understanding parameter kinds (positional-only, keyword-only, var-positional, var-keyword) and how Python matches arguments to them is crucial for designing flexible, clear APIs.",
    example: "def greet(name, greeting='Hello'):  # name and greeting are parameters\n    return f'{greeting}, {name}!'\n\nresult = greet('Alice')  # 'Alice' is the argument\nresult2 = greet('Bob', 'Hi')  # 'Bob' and 'Hi' are arguments"
  },
  {
    term: "Argument",
    definition: "A value passed to a function when it is called.",
    levelRange: "7",
    detailedDescription: "Arguments are the actual values passed to functions when they're called. They correspond to the function's parameters. Arguments can be positional (matched by position) or keyword (matched by name). Functions can accept variable numbers of arguments. Arguments are evaluated before being passed to the function.\n\n1. Simple explanation: An argument is the real value you give to a function when you call it.\n2. Intermediate explanation: You can pass arguments by position or by naming the parameter, which makes calls more explicit and flexible.\n3. In-depth explanation: Argument passing rules, including unpacking with * and **, are central to writing composable functions and higher-order utilities in Python.",
    example: "def add(a, b):  # a and b are parameters\n    return a + b\n\nresult = add(5, 3)  # 5 and 3 are arguments\nresult2 = add(a=5, b=3)  # Keyword arguments\nresult3 = add(b=3, a=5)  # Order doesn't matter with keywords"
  },
  {
    term: "Return Statement",
    definition: "A statement that exits a function and optionally returns a value.",
    levelRange: "7",
    detailedDescription: "The return statement exits a function immediately and can return a value to the caller. Functions without an explicit return statement return None. Return can return multiple values as a tuple. Once return executes, no further code in the function runs. Return is an expression, not a statement, so it can be used in expressions.\n\n1. Simple explanation: return sends a result back from a function and stops the function right away.\n2. Intermediate explanation: You can return one value, many values (as a tuple), or nothing (which is really None under the hood).\n3. In-depth explanation: Careful design of what a function returns (and when) shapes how easy it is to compose and test; early returns often simplify complex branching logic.",
    example: "def add(a, b):\n    return a + b  # Returns the sum\n\nresult = add(3, 5)  # result = 8\n\ndef get_name_and_age():\n    return 'Alice', 30  # Returns tuple\n\nname, age = get_name_and_age()  # Unpacking"
  },
  {
    term: "Default Parameter",
    definition: "A parameter with a default value that is used if no argument is provided.",
    levelRange: "7",
    detailedDescription: "Default parameters have values assigned in the function definition. If no argument is provided for a default parameter, the default value is used. Default parameters must come after non-default parameters. Default values are evaluated once when the function is defined, which can cause issues with mutable defaults (use None instead).\n\n1. Simple explanation: A default parameter gives a function a backup value to use when no argument is passed.\n2. Intermediate explanation: Defaults make parameters optional and help you avoid repetitive argument passing in common cases.\n3. In-depth explanation: Because default values are evaluated at function definition time, mutable defaults can accidentally share state between calls; the common “None + create inside” pattern avoids this pitfall.",
    example: "def greet(name, greeting='Hello'):  # greeting has default 'Hello'\n    return f'{greeting}, {name}!'\n\nprint(greet('Alice'))        # 'Hello, Alice!'\nprint(greet('Bob', 'Hi'))    # 'Hi, Bob!'\n\n# Mutable default (problematic)\ndef add_item(item, items=[]):  # BAD!\n    items.append(item)\n    return items\n\n# Better approach\ndef add_item(item, items=None):\n    if items is None:\n        items = []\n    items.append(item)\n    return items"
  },
  {
    term: "Instance",
    definition: "An individual object created from a class.",
    levelRange: "7",
    detailedDescription: "An instance is a specific object created from a class blueprint. Each instance has its own set of attributes (instance variables) but shares the class's methods. Instances are created by calling the class like a function, which invokes __init__. Multiple instances of the same class are independent objects with separate state.\n\n1. Simple explanation: An instance is one actual object made from a class, like one specific user in your app.\n2. Intermediate explanation: Different instances of the same class share behavior but keep their own data, so changing one doesn’t change the others.\n3. In-depth explanation: Instances carry their own __dict__ of attributes (unless __slots__ is used), and understanding how attribute lookup works between instance and class is central to grasping Python’s OOP model.",
    example: "class Person:\n    def __init__(self, name):\n        self.name = name\n\n# Creating instances\nperson1 = Person('Alice')  # person1 is an instance\nperson2 = Person('Bob')    # person2 is another instance\n\nprint(person1.name)  # 'Alice'\nprint(person2.name)  # 'Bob'"
  },
  {
    term: "Instance Variable",
    definition: "A variable that belongs to a specific instance of a class.",
    levelRange: "7",
    detailedDescription: "Instance variables (also called attributes) store data unique to each instance. They are created by assigning to self.attribute_name. Each instance has its own copy of instance variables. Instance variables can be accessed using dot notation (instance.attribute) or through self within methods.\n\n1. Simple explanation: An instance variable is a piece of data that belongs to one specific object.\n2. Intermediate explanation: You define them in __init__ using self.x = value so each instance can store its own state.\n3. In-depth explanation: Instance attributes live in the instance’s namespace, and dynamic addition or removal of attributes at runtime is possible, which is powerful but should be used with discipline.",
    example: "class Person:\n    def __init__(self, name, age):\n        self.name = name      # Instance variable\n        self.age = age        # Instance variable\n\nperson = Person('Alice', 30)\nprint(person.name)  # 'Alice' (accessing instance variable)\nprint(person.age)   # 30"
  },
  {
    term: "Class Variable",
    definition: "A variable shared by all instances of a class.",
    levelRange: "7",
    detailedDescription: "Class variables are defined at the class level (outside methods) and are shared by all instances. They are useful for storing data common to all instances. Class variables can be accessed through the class or any instance. Modifying a class variable through an instance creates an instance variable with the same name (shadowing).\n\n1. Simple explanation: A class variable is a setting shared by all objects of that class.\n2. Intermediate explanation: Changing the class variable on the class affects all instances that haven’t overridden it on themselves.\n3. In-depth explanation: Shadowing class variables with instance attributes is a common source of confusion; understanding attribute resolution order helps you predict which value you’ll actually see.",
    example: "class Dog:\n    species = 'Canis familiaris'  # Class variable\n    \n    def __init__(self, name):\n        self.name = name  # Instance variable\n\ndog1 = Dog('Buddy')\ndog2 = Dog('Max')\n\nprint(dog1.species)  # 'Canis familiaris'\nprint(dog2.species)  # 'Canis familiaris'\nprint(Dog.species)   # 'Canis familiaris' (same for all)"
  },
  {
    term: "Self",
    definition: "A reference to the current instance, used to access instance attributes and methods.",
    levelRange: "7",
    detailedDescription: "Self is the conventional name for the first parameter of instance methods. It refers to the instance on which the method is called. Through self, methods can access and modify instance variables and call other methods. Self is automatically passed when calling methods on instances - you don't pass it explicitly.\n\n1. Simple explanation: self is how a method refers to “this object”.\n2. Intermediate explanation: When you call obj.method(), Python automatically passes obj as the first argument, which we usually name self.\n3. In-depth explanation: self is just a convention, but it encodes the idea of bound methods; understanding this helps explain why methods behave differently when accessed via the class versus an instance.",
    example: "class Person:\n    def __init__(self, name):\n        self.name = name  # self refers to the instance\n    \n    def greet(self):\n        return f'Hello, I am {self.name}'  # Accessing via self\n\nperson = Person('Alice')\nperson.greet()  # self is automatically person"
  },
  {
    term: "Constructor",
    definition: "A special method __init__ that initializes a new instance of a class.",
    levelRange: "7",
    detailedDescription: "The constructor (__init__ method) is automatically called when a new instance is created. It's used to initialize instance variables and perform setup. __init__ doesn't create the object (that's done by __new__), but it's the primary place for initialization. It can accept parameters to customize the instance.\n\n1. Simple explanation: The constructor is the special method that runs when you create a new object from a class.\n2. Intermediate explanation: You use __init__ to set up the initial state of an object based on the arguments passed to the class.\n3. In-depth explanation: Separating object creation (__new__) from initialization (__init__) allows advanced customization of instances, but most everyday code only needs to implement __init__.",
    example: "class Person:\n    def __init__(self, name, age):  # Constructor\n        self.name = name\n        self.age = age\n        print(f'{name} created')\n\nperson = Person('Alice', 30)  # Constructor is called automatically\n# Output: 'Alice created'"
  },
  // Level 9-10 Additional Terms
  {
    term: "Inheritance",
    definition: "A mechanism where a child class inherits attributes and methods from a parent class.",
    levelRange: "9",
    detailedDescription: "Inheritance allows creating new classes based on existing ones. The child class (subclass) inherits all attributes and methods from the parent class (superclass) and can add new ones or override existing ones. Inheritance promotes code reuse and establishes an 'is-a' relationship. Python supports multiple inheritance.\n\n1. Simple explanation: Inheritance lets one class reuse and extend the behavior of another.\n2. Intermediate explanation: A child class automatically gets the methods and attributes of its parent, and can override them or add new ones.\n3. In-depth explanation: Designing good inheritance hierarchies requires thinking about “is-a” relationships, the method resolution order (MRO), and when composition is a better fit than subclassing.",
    example: "class Animal:\n    def __init__(self, name):\n        self.name = name\n    \n    def speak(self):\n        return 'Some sound'\n\nclass Dog(Animal):  # Dog inherits from Animal\n    def speak(self):  # Override parent method\n        return 'Woof!'\n\ndog = Dog('Buddy')\nprint(dog.name)    # Inherited attribute\nprint(dog.speak())  # Overridden method: 'Woof!'"
  },
  {
    term: "Polymorphism",
    definition: "The ability of different classes to respond to the same method call in different ways.",
    levelRange: "9",
    detailedDescription: "Polymorphism allows objects of different types to be treated uniformly through a common interface. In Python, polymorphism is achieved through duck typing - if an object has the required method, it can be used. This enables writing code that works with multiple types without explicit type checking.\n\n1. Simple explanation: Polymorphism means different objects can respond to the same action in their own way.\n2. Intermediate explanation: If several classes implement the same method name, you can write one piece of code that calls that method and works for all of them.\n3. In-depth explanation: Python’s duck typing emphasizes behavior over type hierarchy, so polymorphism is more about shared protocols (like “has a .write() method”) than about strict inheritance trees.",
    example: "class Dog:\n    def speak(self):\n        return 'Woof!'\n\nclass Cat:\n    def speak(self):\n        return 'Meow!'\n\n# Polymorphic function\ndef make_sound(animal):\n    return animal.speak()  # Works with any object with speak()\n\ndog = Dog()\ncat = Cat()\nprint(make_sound(dog))  # 'Woof!'\nprint(make_sound(cat))  # 'Meow!'"
  },
  {
    term: "Encapsulation",
    definition: "The bundling of data and methods that operate on that data within a single unit.",
    levelRange: "9",
    detailedDescription: "Encapsulation is the principle of hiding internal implementation details and exposing only what's necessary. In Python, encapsulation is achieved through naming conventions: single underscore (_) for 'protected' and double underscore (__) for 'private' (name mangling). Python doesn't enforce strict encapsulation - it's a convention.\n\n1. Simple explanation: Encapsulation means keeping an object’s internal details hidden and only exposing what other code needs to use.\n2. Intermediate explanation: By grouping data and behavior together and using naming conventions, you signal which parts of a class are “public” and which are internal.\n3. In-depth explanation: While Python doesn’t enforce access restrictions, consistent use of encapsulation patterns leads to cleaner APIs and reduces the risk of breaking users’ code when internals change.",
    example: "class BankAccount:\n    def __init__(self, balance):\n        self.__balance = balance  # 'Private' attribute\n    \n    def deposit(self, amount):\n        self.__balance += amount  # Controlled access\n    \n    def get_balance(self):\n        return self.__balance  # Public interface\n\naccount = BankAccount(100)\n# account.__balance  # Error: name mangling\nprint(account.get_balance())  # 100"
  },
  {
    term: "Super",
    definition: "A built-in function that returns a proxy object to access parent class methods.",
    levelRange: "9",
    detailedDescription: "Super() provides a way to call methods from parent classes. It's commonly used in __init__ to ensure parent initialization. Super() follows the method resolution order (MRO) to find the correct parent method. It's essential in multiple inheritance scenarios to call the right parent method.\n\n1. Simple explanation: super() is how a child class calls a method from its parent class.\n2. Intermediate explanation: It’s especially important in __init__ to make sure the parent part of the object is set up correctly.\n3. In-depth explanation: In multiple inheritance chains, super() coordinates calls along the MRO so that each class in the hierarchy gets a chance to run its logic exactly once.",
    example: "class Animal:\n    def __init__(self, name):\n        self.name = name\n    \n    def speak(self):\n        return 'Some sound'\n\nclass Dog(Animal):\n    def __init__(self, name, breed):\n        super().__init__(name)  # Call parent __init__\n        self.breed = breed\n    \n    def speak(self):\n        return super().speak() + ' Woof!'  # Extend parent method\n\ndog = Dog('Buddy', 'Labrador')\nprint(dog.name)  # 'Buddy' (from parent)\nprint(dog.speak())  # 'Some sound Woof!'"
  },
  {
    term: "Method Overriding",
    definition: "Defining a method in a child class that replaces a method from the parent class.",
    levelRange: "9",
    detailedDescription: "Method overriding occurs when a child class defines a method with the same name as a parent class method. The child's method takes precedence when called on child instances. Overriding allows customizing behavior while maintaining the same interface. The parent method can still be accessed using super().\n\n1. Simple explanation: Overriding means a child class replaces a parent’s method with its own version.\n2. Intermediate explanation: It lets you keep the same method name but adapt what it does for a more specific type.\n3. In-depth explanation: Overriding is central to polymorphism; knowing when to call super() versus fully replace behavior helps keep inherited code predictable and maintainable.",
    example: "class Shape:\n    def area(self):\n        return 0\n\nclass Rectangle(Shape):\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n    \n    def area(self):  # Override parent method\n        return self.width * self.height\n\nrect = Rectangle(5, 3)\nprint(rect.area())  # 15 (uses overridden method)"
  },
  {
    term: "Abstract Method",
    definition: "A method declared in a base class that must be implemented by subclasses.",
    levelRange: "9",
    detailedDescription: "Abstract methods define an interface that subclasses must implement. In Python, abstract methods are created using the abc (Abstract Base Class) module. Classes with abstract methods cannot be instantiated directly. Abstract methods ensure that subclasses provide required functionality, enforcing a contract.\n\n1. Simple explanation: An abstract method is a method that says “subclasses must define this,” but doesn’t provide its own body.\n2. Intermediate explanation: Abstract base classes use abstract methods to guarantee that certain behaviors exist on all concrete subclasses.\n3. In-depth explanation: Abstract methods and ABCs let you formalize protocols and catch missing implementations early, which is especially useful in large systems and with static type checkers.",
    example: "from abc import ABC, abstractmethod\n\nclass Shape(ABC):  # Abstract base class\n    @abstractmethod\n    def area(self):  # Must be implemented by subclasses\n        pass\n\nclass Rectangle(Shape):\n    def __init__(self, width, height):\n        self.width = width\n        self.height = height\n    \n    def area(self):  # Required implementation\n        return self.width * self.height\n\n# shape = Shape()  # Error: cannot instantiate abstract class\nrect = Rectangle(5, 3)  # OK"
  },
  {
    term: "Design Pattern",
    definition: "A reusable solution to a commonly occurring problem in software design.",
    levelRange: "9",
    detailedDescription: "Design patterns are proven solutions to common programming problems. They provide templates for structuring code to achieve flexibility, maintainability, and reusability. Common patterns include Singleton, Factory, Observer, Strategy, and Decorator. Patterns are language-agnostic concepts that can be implemented in Python.\n\n1. Simple explanation: A design pattern is a reusable “recipe” for solving a common design problem in code.\n2. Intermediate explanation: Patterns give shared names and structures (like Singleton or Factory) so developers can talk about and apply solutions quickly.\n3. In-depth explanation: In Python, many classic patterns look different because of first-class functions and dynamic typing; understanding both the original intent and the Pythonic implementation leads to cleaner architecture.",
    example: "# Singleton Pattern\nclass Singleton:\n    _instance = None\n    \n    def __new__(cls):\n        if cls._instance is None:\n            cls._instance = super().__new__(cls)\n        return cls._instance\n\n# Factory Pattern\nclass AnimalFactory:\n    @staticmethod\n    def create_animal(animal_type):\n        if animal_type == 'dog':\n            return Dog()\n        elif animal_type == 'cat':\n            return Cat()\n        return None"
  },
  {
    term: "Exception Handling",
    definition: "A mechanism to handle errors and exceptional conditions using try/except blocks.",
    levelRange: "9",
    detailedDescription: "Exception handling allows programs to gracefully handle errors without crashing. The try block contains code that might raise exceptions. The except block catches and handles specific exceptions. Optional else runs if no exception occurs, and finally always executes. Proper exception handling improves program robustness.\n\n1. Simple explanation: Exception handling is how Python lets you catch and respond to errors instead of crashing.\n2. Intermediate explanation: You wrap risky code in try, handle specific problems in except, and optionally clean up in finally.\n3. In-depth explanation: Good exception handling distinguishes between expected, recoverable errors and truly unexpected bugs, and it uses precise exception types rather than broad catches to keep failures understandable.",
    example: "try:\n    result = 10 / 0  # Raises ZeroDivisionError\nexcept ZeroDivisionError:\n    print('Cannot divide by zero')\nexcept Exception as e:\n    print(f'An error occurred: {e}')\nelse:\n    print('No errors occurred')\nfinally:\n    print('This always executes')"
  },
  {
    term: "Context Manager",
    definition: "An object that manages resources using the 'with' statement.",
    levelRange: "9",
    detailedDescription: "Context managers ensure proper resource management (like file closing) using the 'with' statement. They implement __enter__ and __exit__ methods. Context managers automatically handle setup and cleanup, even if exceptions occur. The 'with' statement is preferred over manual resource management.\n\n1. Simple explanation: A context manager is what lets with open(...) automatically close the file for you.\n2. Intermediate explanation: It wraps some code with setup and teardown logic so resources are always cleaned up, even if errors happen.\n3. In-depth explanation: Implementing __enter__ and __exit__ (or using contextlib) lets you create your own safe “with” blocks for locks, transactions, timers, and other resources that need strict lifetime control.",
    example: "# Built-in file context manager\nwith open('file.txt', 'r') as f:\n    content = f.read()\n# File is automatically closed here\n\n# Custom context manager\nclass Timer:\n    def __enter__(self):\n        self.start = time.time()\n        return self\n    \n    def __exit__(self, *args):\n        print(f'Elapsed: {time.time() - self.start}')\n\nwith Timer():\n    # Do something\n    pass"
  }
];
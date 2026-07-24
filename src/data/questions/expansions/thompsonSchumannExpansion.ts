import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya says the professor quotes the 1987 paper that named the prosecutor\'s fallacy, and asks who wrote it.', 'Maya dit que le professeur cite l article de 1987 qui a nomme le sophisme du procureur, et demande qui l a ecrit.'],
  ['Leo says the legal history class wants the researchers who formally identified P(E|innocent) versus P(innocent|E).', 'Leo dit que le cours d histoire du droit veut les chercheurs qui ont formellement identifie P(E|innocent) par rapport a P(innocent|E).'],
  ['Priya says the courtroom quiz is really asking who gave the prosecutor\'s fallacy its formal name.', 'Priya dit que le quiz de tribunal demande en fait qui a donne son nom formel au sophisme du procureur.'],
  ['Omar says the reading list points to the pair behind "Prosecutors and the Bayesian Evaluation of Evidence."', 'Omar dit que la bibliographie pointe vers le duo derriere « Prosecutors and the Bayesian Evaluation of Evidence ».'],
  ['Rina says the teacher wants the authors who helped people stop confusing evidence strength with guilt probability.', 'Rina dit que le professeur veut les auteurs qui ont aide les gens a cesser de confondre la force de la preuve avec la probabilite de culpabilite.'],
  ['Ben says the answer is the duo who wrote the paper prosecutors still get quoted for in statistics classes.', 'Ben dit que la reponse est le duo qui a ecrit l article encore cite en cours de statistiques pour les procureurs.'],
  ['Zoe says the museum panel about court statistics names two researchers from 1987.', 'Zoé dit que le panneau du musee sur les statistiques judiciaires cite deux chercheurs de 1987.'],
  ['Kai says the debate club clue is about the people who coined the prosecutor\'s fallacy label.', 'Kai dit que l indice du club de debat concerne les personnes qui ont forge l etiquette de sophisme du procureur.'],
  ['Nora says the email mentions the paper that turned a courtroom mistake into a named fallacy.', 'Nora dit que le courriel mentionne l article qui a transforme une erreur de tribunal en sophisme nomme.'],
  ['Eli says the flashcard is asking for the pair behind the Bayesian explanation of evidence in court.', 'Eli dit que la carte memo demande le duo derriere l explication bayesienne de la preuve au tribunal.'],
  ['Lina says the answer is not Bayes himself but the later pair who wrote about prosecutors.', 'Lina dit que la reponse n est pas Bayes lui-meme mais le duo plus tardif qui a ecrit sur les procureurs.'],
  ['Grant says the teacher is testing the authors of the classic article on evidence and innocence.', 'Grant dit que le professeur teste les auteurs de l article classique sur la preuve et l innocence.'],
  ['Tia says the clue points to the researchers who made prosecutors stop swapping conditionals.', 'Tia dit que l indice pointe vers les chercheurs qui ont fait arreter les procureurs de permuter les conditionnelles.'],
  ['Noah says the answer is the pair whose paper is often cited in forensic statistics lectures.', 'Noah dit que la reponse est le duo dont l article est souvent cite en cours de statistique forensique.'],
  ['Mia says the trivia night question asks who described the fallacy in their famous 1987 paper.', 'Mia dit que la question de quiz demande qui a decrit le sophisme dans leur fameux article de 1987.'],
  ['Jules says the student needs the researchers who named the error of treating P(E|H0) like P(H0|E).', 'Jules dit que l eleve doit trouver les chercheurs qui ont nomme l erreur de traiter P(E|H0) comme P(H0|E).'],
  ['Ava says the answer is the pair that legal scholars still quote when they talk about the prosecutor\'s fallacy.', 'Ava dit que la reponse est le duo encore cite par les juristes quand ils parlent du sophisme du procureur.'],
  ['Finn says the courtroom story is just a clue pointing to the original paper authors.', 'Finn dit que l histoire de tribunal n est qu un indice pointant vers les auteurs originaux de l article.'],
  ['Mina says the clue on the slide deck says "who first named this statistical mistake?"', 'Mina dit que l indice sur la presentation dit « qui a d abord nomme cette erreur statistique ? ».'],
  ['Theo says the teacher is not asking about Bayes theorem, but about the authors who explained the misuse of it.', 'Theo dit que le professeur ne demande pas le theoreme de Bayes, mais les auteurs qui ont explique son mauvais usage.'],
  ['Juno says the answer is the pair behind the paper that prosecutors, defense lawyers, and experts all got cited in.', 'Juno dit que la reponse est le duo derriere l article qui a servi de reference aux procureurs, aux avocats de la defense et aux experts.'],
  ['Iris says the notebook clue highlights the people who formalized the difference between evidence and belief.', 'Iris dit que l indice du carnet souligne les personnes qui ont formalise la difference entre preuve et croyance.'],
  ['Cole says the question is a name check, not a logic check: who are Thompson and Schumann?', 'Cole dit que la question est un controle de nom, pas un controle de logique : qui sont Thompson et Schumann ?'],
  ['Riley says the correct pair should be the researchers from the paper about Bayesian evaluation in court.', 'Riley dit que le bon duo doit etre celui des chercheurs de l article sur l evaluation bayesienne en tribunal.'],
  ['Pia says the study guide asks for the authors who named the fallacy people often hear in court dramas.', 'Pia dit que le guide d etude demande les auteurs qui ont nomme le sophisme qu on entend souvent dans les drames judiciaires.'],
  ['Hugo says the history question wants the 1987 authors, not the fallacy label itself.', 'Hugo dit que la question d histoire veut les auteurs de 1987, pas l etiquette du sophisme elle-meme.'],
  ['Sam says the clue points to the pair that made the prosecutor\'s fallacy easy to talk about in class.', 'Sam dit que l indice pointe vers le duo qui a rendu le sophisme du procureur facile a discuter en classe.'],
  ['Jade says the evidence story is a disguise for a bibliography question.', 'Jade dit que l histoire de preuve est un deguisement pour une question de bibliographie.'],
  ['Owen says the answer is the people who wrote the foundational article on Bayesian evidence evaluation.', 'Owen dit que la reponse est les personnes qui ont ecrit l article fondateur sur l evaluation bayesienne de la preuve.'],
  ['Lea says the quiz is asking who coined the term that warns against swapping the conditionals.', 'Lea dit que le quiz demande qui a forge le terme qui avertit contre l inversion des conditionnelles.'],
  ['Maya says the courtroom clue is about the authors whose names are attached to the named fallacy.', 'Maya dit que l indice de tribunal concerne les auteurs dont les noms sont attaches au sophisme nomme.'],
  ['Ben says the correct response should be the duo cited in the paper about prosecutors and Bayesian evidence.', 'Ben dit que la bonne reponse doit etre le duo cite dans l article sur les procureurs et la preuve bayesienne.'],
  ['Ava says the lesson slide asks for the researchers who popularized the formal statistical warning.', 'Ava dit que la diapositive de cours demande les chercheurs qui ont popularise l avertissement statistique formel.'],
  ['Omar says the answer is the 1987 pair, not the modern textbook author.', 'Omar dit que la reponse est le duo de 1987, pas l auteur moderne du manuel.'],
  ['Nina says the point of the prompt is to recognize the landmark legal-statistics authors.', 'Nina dit que le but de l invite est de reconnaitre les auteurs de reference en statistique juridique.'],
  ['Eli says the clue names the researchers who made the evidence-vs-belief distinction memorable.', 'Eli dit que l indice nomme les chercheurs qui ont rendu memorisable la distinction entre preuve et croyance.'],
  ['Lina says the student should remember the paper title and the authors together.', 'Lina dit que l eleve doit retenir ensemble le titre de l article et les auteurs.'],
  ['Grant says the teacher is fishing for the pair who explained the prosecutor\'s fallacy in the legal literature.', 'Grant dit que le professeur cherche le duo qui a explique le sophisme du procureur dans la litterature juridique.'],
  ['Tia says the right names are the ones that show up in the prosecutor\'s fallacy origin story.', 'Tia dit que les bons noms sont ceux qui apparaissent dans l histoire d origine du sophisme du procureur.'],
  ['Noah says the answer should be Thompson and Schumann because the prompt is about authorship.', 'Noah dit que la reponse doit etre Thompson et Schumann parce que l invite concerne la paternite.'],
  ['Mia says the same courtroom example can still be a question about who wrote the key paper.', 'Mia dit que le meme exemple de tribunal peut quand meme etre une question sur l auteur de l article cle.'],
  ['Jules says the flashcard is testing memory of the name attached to the statistical warning.', 'Jules dit que la carte memo teste la memoire du nom associe a l avertissement statistique.'],
  ['Iris says the clue is a citation question dressed up as a fallacy example.', 'Iris dit que l indice est une question de citation deguisée en exemple de sophisme.'],
  ['Cole says the paper about prosecutors and Bayesian evidence is the thing to remember.', 'Cole dit que l article sur les procureurs et la preuve bayesienne est la chose a retenir.'],
  ['Riley says the answer is the pair that made the phrase "prosecutor\'s fallacy" famous.', 'Riley dit que la reponse est le duo qui a rendu celebre l expression « sophisme du procureur ».'],
  ['Pia says the question is asking who wrote the study that every evidence lecture mentions.', 'Pia dit que la question demande qui a ecrit l etude que chaque cours sur la preuve mentionne.'],
  ['Hugo says the clue is the authors behind the classic prosecutor-fallacy paper.', 'Hugo dit que l indice est le duo derriere l article classique sur le sophisme du procureur.'],
  ['Sam says the simplest answer is the two researchers from 1987.', 'Sam dit que la reponse la plus simple est les deux chercheurs de 1987.'],
  ['Jade says the final hint is that the paper was about Bayesian evaluation, not just courtroom drama.', 'Jade dit que le dernier indice est que l article portait sur l evaluation bayesienne, pas seulement sur un drame judiciaire.'],
  ['Owen says the test wants the name pair that appears in the origin story of the fallacy.', 'Owen dit que le test veut le duo de noms qui apparait dans l histoire d origine du sophisme.'],
  ['Lea says the correct researchers are Thompson & Schumann.', 'Lea dit que les bons chercheurs sont Thompson et Schumann.'],
];

const OPTIONS_EN = [
  'Thompson & Schumann',
  'Bayes & Fisher',
  'Pearson & Neyman',
  'Laplace & Bernoulli',
];

const OPTIONS_FR = [
  'Thompson & Schumann',
  'Bayes & Fisher',
  'Pearson & Neyman',
  'Laplace & Bernoulli',
];

function rotatedOptions(options: string[], correctIndex: number): string[] {
  const distractors = options.slice(1);
  const result = [...distractors];
  result.splice(correctIndex, 0, options[0]);
  return result;
}

function subLevelFor(index: number): SubLevel {
  if (index < 17) return SubLevel.BEGINNER;
  if (index < 34) return SubLevel.INTERMEDIATE;
  return SubLevel.EXPERT;
}

function createQuestions(language: 'en' | 'fr'): Question[] {
  return SCENARIOS.map(([english, french], index) => {
    const isFrench = language === 'fr';
    const correctIndex = index % 4;
    return {
      id: 43001 + index,
      level: 7,
      persona_stage: PersonaStage.CRAB,
      concept: 'Thompson & Schumann',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Qui est cite ici ?' : 'Who is being referenced here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'Thompson et Schumann ont formellement nommé et décrit le sophisme du procureur.'
        : 'Thompson and Schumann formally named and described the prosecutor\'s fallacy.',
      detailedExplanationBeginner: isFrench
        ? 'Ils ont écrit l article fondateur sur cette erreur.'
        : 'They wrote the foundational article on this error.',
      detailedExplanationIntermediate: isFrench
        ? 'Leur article de 1987 a rendu le sophisme du procureur facile a citer.'
        : 'Their 1987 paper made the prosecutor\'s fallacy easy to cite.',
      detailedExplanationExpert: isFrench
        ? 'Thompson et Schumann (1987) ont publié "Prosecutors and the Bayesian Evaluation of Evidence", l article qui a formalement identifié le sophisme du procureur. Ils ont clarifié l erreur de confondre P(E|H0) avec P(H0|E), ce qui a donne au domaine juridique et a la statistique forensique un cadre plus precis pour parler de cette confusion.'
        : 'Thompson and Schumann (1987) published "Prosecutors and the Bayesian Evaluation of Evidence," the paper that formally identified the prosecutor\'s fallacy. They clarified the error of confusing P(E|H0) with P(H0|E), giving legal scholarship and forensic statistics a precise framework for discussing the mistake.',
      questionFormat: 'standard',
    };
  });
}

export const THOMPSON_SCHUMANN_EXPANSION_EN: Question[] = createQuestions('en');
export const THOMPSON_SCHUMANN_EXPANSION_FR: Question[] = createQuestions('fr');

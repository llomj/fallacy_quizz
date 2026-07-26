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
  ['Maya says the worksheet is asking for the authors of the landmark article, not the definition of the fallacy itself.', 'Maya dit que la feuille demande les auteurs de l article de reference, pas la definition du sophisme elle-meme.'],
  ['Leo says the class hint points to the 1987 paper because it is the one teachers keep citing.', 'Leo dit que l indice du cours pointe vers l article de 1987 parce que c est celui que les professeurs citent sans cesse.'],
  ['Priya says the question is about the researchers whose names are tied to the prosecutor\'s fallacy.', 'Priya dit que la question porte sur les chercheurs dont les noms sont lies au sophisme du procureur.'],
  ['Omar says the answer should be the pair who made the legal-statistics example famous.', 'Omar dit que la reponse doit etre le duo qui a rendu celebre l exemple de statistique juridique.'],
  ['Rina says the note is really a bibliography clue wearing courtroom clothes.', 'Rina dit que la note est en realite un indice bibliographique deguisé en tenue de tribunal.'],
  ['Ben says the flashcard wants the people behind the classic Bayesian evidence paper.', 'Ben dit que la carte memo veut les personnes derriere l article classique sur la preuve bayesienne.'],
  ['Zoe says the professor is checking whether you remember Thompson and Schumann, not Bayes.', 'Zoé dit que le professeur verifie si tu te souviens de Thompson et Schumann, pas de Bayes.'],
  ['Kai says the prompt is asking who coined the name used for this legal probability mistake.', 'Kai dit que l invite demande qui a forge le nom utilise pour cette erreur de probabilite juridique.'],
  ['Nora says the answer sits in the title "Prosecutors and the Bayesian Evaluation of Evidence."', 'Nora dit que la reponse se trouve dans le titre « Prosecutors and the Bayesian Evaluation of Evidence ».'],
  ['Eli says the question is meant to identify the authors of the article that warns against swapping conditionals.', 'Eli dit que la question sert a identifier les auteurs de l article qui avertit contre l inversion des conditionnelles.'],
  ['Lina says the pair being referenced wrote the paper legal teachers still assign.', 'Lina dit que le duo vise a ecrit l article que les professeurs de droit donnent encore a lire.'],
  ['Grant says the trick is remembering the names attached to the prosecutor-fallacy origin story.', 'Grant dit que l astuce est de se rappeler les noms attaches a l histoire d origine du sophisme du procureur.'],
  ['Tia says the answer is not a theorem but the two authors of the famous 1987 paper.', 'Tia dit que la reponse n est pas un theoreme mais les deux auteurs du fameux article de 1987.'],
  ['Noah says the clue is about who explained the evidence-vs-guilt mix-up in print.', 'Noah dit que l indice concerne ceux qui ont explique par ecrit le melange entre preuve et culpabilite.'],
  ['Mia says the exam question is effectively asking, "Who are Thompson and Schumann?"', 'Mia dit que la question d examen demande en gros: « Qui sont Thompson et Schumann ? »'],
  ['Jules says the answer is the researcher pair most linked to the prosecutor\'s fallacy label.', 'Jules dit que la reponse est le duo de chercheurs le plus associe a l etiquette du sophisme du procureur.'],
  ['Ava says the textbook clue is pointing to the authors of the foundational legal-statistics article.', 'Ava dit que l indice du manuel pointe vers les auteurs de l article fondateur en statistique juridique.'],
  ['Finn says the best match is the pair that wrote about Bayesian evaluation in court.', 'Finn dit que le meilleur choix est le duo qui a ecrit sur l evaluation bayesienne au tribunal.'],
  ['Mina says the card is a memory check for the names Thompson and Schumann.', 'Mina dit que la carte est un test de memoire pour les noms Thompson et Schumann.'],
  ['Theo says the clue is about the paper that made evidence evaluation more precise.', 'Theo dit que l indice concerne l article qui a rendu l evaluation de la preuve plus precise.'],
  ['Juno says the teacher wants the two authors from the original prosecutor-fallacy paper.', 'Juno dit que le professeur veut les deux auteurs de l article original sur le sophisme du procureur.'],
  ['Iris says the question is not about the fallacy definition but about its cited authors.', 'Iris dit que la question ne porte pas sur la definition du sophisme mais sur les auteurs cites.'],
  ['Cole says the answer is the pair that statistics students see in forensic-evidence lectures.', 'Cole dit que la reponse est le duo que les etudiants en statistiques voient dans les cours de preuve forensique.'],
  ['Riley says the reference is the 1987 duo behind the prosecutor\'s fallacy paper.', 'Riley dit que la reference est le duo de 1987 derriere l article sur le sophisme du procureur.'],
  ['Pia says the quiz wants the researchers whose paper linked prosecutors and Bayesian reasoning.', 'Pia dit que le quiz veut les chercheurs dont l article reliait les procureurs et le raisonnement bayesien.'],
  ['Hugo says the answer is Thompson and Schumann because that is the pair named in the classic citation.', 'Hugo dit que la reponse est Thompson et Schumann parce que c est le duo nomme dans la citation classique.'],
  ['Sam says the prompt is really a history-of-statistics question in disguise.', 'Sam dit que l invite est en fait une question d histoire des statistiques deguisée.'],
  ['Jade says the clue is pointing to the article authors, not the courtroom example.', 'Jade dit que l indice pointe vers les auteurs de l article, pas vers l exemple de tribunal.'],
  ['Owen says the right response is the two researchers who formalized the warning about evidence.', 'Owen dit que la bonne reponse est les deux chercheurs qui ont formalise l avertissement sur la preuve.'],
  ['Lea says the answer should be the names on the 1987 Bayesian evidence paper.', 'Lea dit que la reponse doit etre les noms sur l article de 1987 sur la preuve bayesienne.'],
  ['Maya says the wording is a clue to authorship, not to the meaning of the fallacy.', 'Maya dit que la formulation est un indice sur la paternite, pas sur le sens du sophisme.'],
  ['Leo says the prompt is asking for Thompson and Schumann because they are the origin point here.', 'Leo dit que l invite demande Thompson et Schumann parce qu ils sont le point d origine ici.'],
  ['Priya says the study question is testing whether you know who wrote the original article.', 'Priya dit que la question teste si tu sais qui a ecrit l article original.'],
  ['Omar says the names attached to the prosecutor\'s fallacy are the ones you need.', 'Omar dit que les noms attaches au sophisme du procureur sont ceux dont tu as besoin.'],
  ['Rina says the clue is a paper title hiding behind a fallacy prompt.', 'Rina dit que l indice est un titre d article cache derriere une question sur un sophisme.'],
  ['Ben says the pair to remember is Thompson and Schumann from the 1987 article.', 'Ben dit que le duo a retenir est Thompson et Schumann de l article de 1987.'],
  ['Zoe says the answer is the researchers who made the error easy to explain in class.', 'Zoé dit que la reponse est les chercheurs qui ont rendu l erreur facile a expliquer en cours.'],
  ['Kai says the question is a citation hunt, and the citation points to Thompson and Schumann.', 'Kai dit que la question est une chasse a la citation, et la citation pointe vers Thompson et Schumann.'],
  ['Nora says the clue is about the classic paper that named the prosecutor\'s fallacy.', 'Nora dit que l indice concerne l article classique qui a nomme le sophisme du procureur.'],
  ['Eli says the right authors are the ones from the Bayesian evaluation paper.', 'Eli dit que les bons auteurs sont ceux de l article sur l evaluation bayesienne.'],
  ['Lina says the answer is the two researchers whose names are linked to the warning about swapped probabilities.', 'Lina dit que la reponse est les deux chercheurs dont les noms sont lies a l avertissement contre les probabilites permutees.'],
  ['Grant says the flashcard is about the paper citation, not the logic puzzle.', 'Grant dit que la carte memo concerne la citation de l article, pas l enigme logique.'],
  ['Tia says the final clue says to remember Thompson and Schumann.', 'Tia dit que le dernier indice dit de retenir Thompson et Schumann.'],
  ['Noah says the legal-statistics class expects the original 1987 authors.', 'Noah dit que le cours de statistique juridique attend les auteurs originaux de 1987.'],
  ['Mia says the answer is the duo behind the paper on prosecutors and Bayesian evidence.', 'Mia dit que la reponse est le duo derriere l article sur les procureurs et la preuve bayesienne.'],
  ['Jules says the question asks who gave the prosecutor\'s fallacy its famous citation trail.', 'Jules dit que la question demande qui a donne au sophisme du procureur sa fameuse piste de citation.'],
  ['Iris says the clue points directly to Thompson & Schumann.', 'Iris dit que l indice pointe directement vers Thompson et Schumann.'],
  ['Cole says the answer is the 1987 pair whose names keep appearing beside the prosecutor\'s fallacy.', 'Cole dit que la reponse est le duo de 1987 dont les noms reviennent sans cesse a cote du sophisme du procureur.'],
  ['Riley says the quiz is checking whether you can match the fallacy to its original authors.', 'Riley dit que le quiz verifie si tu peux relier le sophisme a ses auteurs originaux.'],
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

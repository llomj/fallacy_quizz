import { Question, PersonaStage, SubLevel } from '../../types';

let nextId = 1;

const makeQuestion = (q: Omit<Question, 'id'>): Question => ({
  ...q,
  id: nextId++,
});

export const FALLACY_QUESTIONS: Question[] = [
  // Level 0 – Foundations (Beginner)
  makeQuestion({
    level: 0,
    persona_stage: PersonaStage.TADPOLE,
    concept: 'argument-basics',
    difficulty: 1,
    subLevel: SubLevel.BEGINNER,
    question:
      'Which of the following is a simple argument (premises supporting a conclusion), not just a statement?',
    options: [
      '"Chocolate ice cream is the best."',
      '"If it rains, the ground gets wet. It is raining, so the ground will get wet."',
      '"Close the window!"',
      '"Ouch!"',
    ],
    correct_option_index: 1,
    explanation:
      'An argument gives reasons (premises) for a conclusion. Only one option clearly presents premises leading to a conclusion.',
    detailedExplanationBeginner:
      'An argument is more than an opinion: it gives reasons. "If it rains, the ground gets wet. It is raining, so the ground will get wet." has two premises and one conclusion.',
    detailedExplanationIntermediate:
      'Arguments contain at least one premise and one conclusion. The conditional plus the fact that it is raining support the conclusion about the ground. The other options express feelings, commands, or bare opinions.',
    detailedExplanationExpert:
      'Formally, we have: (1) If R then W. (2) R. Therefore (3) W. This is an instance of Modus Ponens, a valid argument form. The other options lack the premise–conclusion structure.',
    questionFormat: 'standard',
  }),
  makeQuestion({
    level: 0,
    persona_stage: PersonaStage.TADPOLE,
    concept: 'argument-vs-explanation',
    difficulty: 1,
    subLevel: SubLevel.BEGINNER,
    question:
      'Which option is best described as an explanation rather than an argument?',
    options: [
      '"You should save money because emergencies can happen."',
      '"The glass broke because it fell on the floor."',
      '"If taxes rise, many people will move away."',
      '"Everyone says this brand is the best, so it must be."',
    ],
    correct_option_index: 1,
    explanation:
      'An explanation tries to clarify why something is already accepted as true, not to persuade you that it is true.',
    detailedExplanationBeginner:
      'Saying "The glass broke because it fell on the floor" assumes that the glass did break, and then gives a cause. That is an explanation.',
    detailedExplanationIntermediate:
      'Arguments support a claim that might still be in doubt; explanations presuppose the fact and give its cause. Here, the broken glass is taken for granted and the fall is offered as its cause.',
    detailedExplanationExpert:
      'The broken glass is the explanandum; the fall is the explanans. In contrast, "You should save money because emergencies can happen" uses a reason to support a recommendation—an argument.',
    questionFormat: 'standard',
  }),

  // Level 1 – Common Everyday Fallacies I (Beginner)
  makeQuestion({
    level: 1,
    persona_stage: PersonaStage.PLANKTON,
    concept: 'ad-hominem',
    difficulty: 1,
    subLevel: SubLevel.BEGINNER,
    question:
      'Which option is the best example of an ad hominem fallacy?',
    options: [
      '"Your plan is wrong because the data contradict it."',
      '"We should ignore Clara’s argument about recycling; she failed math in high school."',
      '"If smoking causes cancer, we should reduce smoking."',
      '"Recycling sometimes costs money."',
    ],
    correct_option_index: 1,
    explanation:
      'Ad hominem attacks the person instead of responding to the content of their argument.',
    detailedExplanationBeginner:
      'Saying we should ignore Clara because of her past grades attacks her, not her reasons about recycling.',
    detailedExplanationIntermediate:
      'In an ad hominem, the target’s character or circumstances are used as if they refuted the claim. Clara’s math results do not show that her recycling argument is false.',
    detailedExplanationExpert:
      'Ad hominem abusive shifts attention from the proposition to personal traits. It fails the relevance test: Clara’s reliability about recycling is not logically determined by her school grades.',
    questionFormat: 'standard',
  }),
  makeQuestion({
    level: 1,
    persona_stage: PersonaStage.PLANKTON,
    concept: 'straw-man',
    difficulty: 1,
    subLevel: SubLevel.BEGINNER,
    question:
      'Sam says: "We should regulate the volume of ads aimed at children." Pat replies: "Sam wants to ban all advertising and destroy free speech." What fallacy does Pat commit?',
    options: [
      'Straw man',
      'Ad hominem',
      'Appeal to popularity',
      'No fallacy',
    ],
    correct_option_index: 0,
    explanation:
      'Pat distorts Sam’s moderate proposal into a much more extreme position, then attacks that easier target.',
    detailedExplanationBeginner:
      'Sam talks about regulating volume for children. Pat pretends Sam wants to ban all ads. That is a straw man.',
    detailedExplanationIntermediate:
      'A straw man replaces the original claim with a caricature. The attack then lands on the caricature, not on the real position.',
    detailedExplanationExpert:
      'The move violates the principle of charity. Proper critique requires engaging with the strongest reasonable interpretation of Sam’s claim, not an inflated ban‑everything version.',
    questionFormat: 'standard',
  }),
  makeQuestion({
    level: 1,
    persona_stage: PersonaStage.PLANKTON,
    concept: 'appeal-to-popularity',
    difficulty: 1,
    subLevel: SubLevel.BEGINNER,
    question:
      'Which reasoning is closest to an appeal to popularity (ad populum)?',
    options: [
      '"Most of my friends use this app, so it must be the best way to invest money."',
      '"This app has low fees and transparent rules, so it is a good option."',
      '"The app is regulated by financial authorities."',
      '"The app clearly states the risks involved."',
    ],
    correct_option_index: 0,
    explanation:
      'Appeal to popularity treats the fact that many people do something as if that were strong evidence that it is correct or safe.',
    detailedExplanationBeginner:
      'Saying “most of my friends use it, so it must be best” makes popularity the main reason. That is the appeal to popularity.',
    detailedExplanationIntermediate:
      'Popularity can be some weak evidence (people might have discovered value), but by itself it is not a good reason to believe something is true or safe.',
    detailedExplanationExpert:
      'Ad populum conflates descriptive social facts (what many people do) with normative or epistemic status (what is right or well‑justified). Sound investment decisions require evidence about risk and return, not just user counts.',
    questionFormat: 'standard',
  }),

  // Level 2 – Common Everyday Fallacies II (Beginner)
  makeQuestion({
    level: 2,
    persona_stage: PersonaStage.SHRIMP,
    concept: 'slippery-slope',
    difficulty: 1,
    subLevel: SubLevel.BEGINNER,
    question:
      'Which argument is the clearest example of a slippery slope fallacy?',
    options: [
      '"If we allow one extra day of vacation, soon no one will work anymore and the economy will collapse."',
      '"If we allow one extra day of vacation, people might feel more rested."',
      '"If we allow one extra day of vacation, we must update the HR system."',
      '"If we allow one extra day of vacation, some teams will need better planning."',
    ],
    correct_option_index: 0,
    explanation:
      'A slippery slope asserts that a small step will inevitably lead to extreme negative outcomes, without showing why these steps are unavoidable.',
    detailedExplanationBeginner:
      'Jumping from “one extra day off” to “the whole economy collapses” skips many steps and assumes everything will go wrong automatically.',
    detailedExplanationIntermediate:
      'Reasonable concern would identify specific mechanisms and probabilities between each step. The fallacy simply piles up imagined consequences.',
    detailedExplanationExpert:
      'The argument fails to justify the modal strength of its claim (near‑inevitability). Without a causal or normative necessity chain, the slope remains speculative, not logically compelling.',
    questionFormat: 'standard',
  }),

  // Level 3 – Causal Fallacies (Beginner)
  makeQuestion({
    level: 3,
    persona_stage: PersonaStage.CRAB,
    concept: 'post-hoc',
    difficulty: 1,
    subLevel: SubLevel.BEGINNER,
    question:
      'A cafe changes its logo on Monday. On Tuesday, sales drop. The owner concludes: "Sales fell because of the new logo." What fallacy is most likely here?',
    options: [
      'Post hoc (after this, therefore because of this)',
      'Straw man',
      'Ad hominem',
      'Appeal to emotion',
    ],
    correct_option_index: 0,
    explanation:
      'Post hoc assumes that because one event followed another, the first must have caused the second.',
    detailedExplanationBeginner:
      'Just because the sales drop happened after the logo change does not prove the logo is the cause.',
    detailedExplanationIntermediate:
      'To show causation, we would need to rule out other explanations (weather, holidays, competition, etc.). Mere temporal order is not enough.',
    detailedExplanationExpert:
      'The reasoning mistakes temporal succession for causal dependence. Without controls, counterfactual analysis, or comparative data, attributing the effect to the logo is unwarranted.',
    questionFormat: 'standard',
  }),

  // Level 4 – Ambiguity (Beginner)
  makeQuestion({
    level: 4,
    persona_stage: PersonaStage.SMALL_FISH,
    concept: 'equivocation',
    difficulty: 1,
    subLevel: SubLevel.BEGINNER,
    question:
      'Which argument most clearly uses the same word in two different senses (equivocation)?',
    options: [
      '"Only man is rational. No woman is a man. Therefore, no woman is rational."',
      '"Feathers are light. What is light cannot be dark. So feathers cannot be dark."',
      '"We should turn on the light because it is dark."',
      '"Light travels faster than sound."',
    ],
    correct_option_index: 1,
    explanation:
      'The word "light" shifts meaning: first "not heavy", then "not dark". The argument quietly changes the sense of a key term.',
    detailedExplanationBeginner:
      'In the first sentence, “light” means “not heavy”. In the second, it means “not dark”. That switch makes the reasoning invalid.',
    detailedExplanationIntermediate:
      'Equivocation trades on a single spelling or sound to smuggle in a new meaning. Listeners often do not notice the shift.',
    detailedExplanationExpert:
      'Formally, the predicate LIGHT₁(x) (low weight) is replaced by LIGHT₂(x) (illumination/brightness). This violates the requirement that terms keep a stable intension within a deductive argument.',
    questionFormat: 'standard',
  }),

  // Level 5 – Formal Fallacies I (Beginner)
  makeQuestion({
    level: 5,
    persona_stage: PersonaStage.OCTOPUS,
    concept: 'affirming-the-consequent',
    difficulty: 1,
    subLevel: SubLevel.BEGINNER,
    question:
      'Identify the form of this argument: "If someone is a doctor, they studied medicine. Alex studied medicine, so Alex is a doctor."',
    options: [
      'Affirming the consequent (formal fallacy)',
      'Modus ponens (valid)',
      'Denying the antecedent (formal fallacy)',
      'No fallacy, always valid',
    ],
    correct_option_index: 0,
    explanation:
      'The argument assumes that because the consequence (studied medicine) is true, the antecedent (is a doctor) must be true, which is not guaranteed.',
    detailedExplanationBeginner:
      'Many people study medicine without becoming doctors (researchers, etc.), so the pattern is not safe.',
    detailedExplanationIntermediate:
      'The form is: If D then M. M. Therefore D. This is the classic "affirming the consequent" fallacy, which allows true premises with a false conclusion.',
    detailedExplanationExpert:
      'Affirming the consequent confuses sufficiency with necessity. "D ⇒ M" does not license "M ⇒ D" unless we know M is necessary and sufficient for D, which is rarely the case in everyday contexts.',
    questionFormat: 'standard',
  }),

  // Level 6 – Formal Fallacies II (Beginner)
  makeQuestion({
    level: 6,
    persona_stage: PersonaStage.SEAL,
    concept: 'undistributed-middle',
    difficulty: 1,
    subLevel: SubLevel.BEGINNER,
    question:
      'All dogs are animals. All cats are animals. Therefore, all cats are dogs. What is the main formal problem?',
    options: [
      'Undistributed middle term',
      'Ad hominem',
      'Appeal to emotion',
      'No problem, it is valid',
    ],
    correct_option_index: 0,
    explanation:
      'The middle term "animals" is never used to connect the two groups in a way that justifies the conclusion; it is undistributed.',
    detailedExplanationBeginner:
      'From "All dogs are animals" and "All cats are animals" you cannot conclude that cats are dogs. They just share a bigger category.',
    detailedExplanationIntermediate:
      'In syllogistic terms, the middle term must be distributed at least once. Here, "animals" never picks out all animals, so the sets of dogs and cats might be disjoint.',
    detailedExplanationExpert:
      'The pattern is: All D are A. All C are A. Therefore, all C are D. This is invalid because A, the middle term, is undistributed. Venn diagrams or counter‑models make the failure explicit.',
    questionFormat: 'standard',
  }),

  // Level 7 – Probability & Evidence (Beginner)
  makeQuestion({
    level: 7,
    persona_stage: PersonaStage.DOLPHIN,
    concept: 'base-rate-neglect',
    difficulty: 1,
    subLevel: SubLevel.BEGINNER,
    question:
      'A rare disease affects 1 in 10,000 people. A test is 99% accurate. Someone tests positive once and concludes "I almost certainly have the disease." Which fallacy is most relevant?',
    options: [
      'Base-rate neglect',
      'Ad hominem',
      'Straw man',
      'Slippery slope',
    ],
    correct_option_index: 0,
    explanation:
      'Base-rate neglect ignores how rare the disease is when interpreting the test result.',
    detailedExplanationBeginner:
      'Even with a good test, if the disease is very rare, many positives can still be false alarms.',
    detailedExplanationIntermediate:
      'To reason correctly, you must combine test accuracy with the base rate (1 in 10,000). Many positive results will still be false positives.',
    detailedExplanationExpert:
      'The fallacy arises from treating P(disease | positive) as if it were close to the test’s sensitivity, ignoring P(disease). Proper evaluation requires Bayes’ theorem and the prior probability.',
    questionFormat: 'standard',
  }),

  // Level 8 – Rhetorical Manipulation (Beginner)
  makeQuestion({
    level: 8,
    persona_stage: PersonaStage.SHARK,
    concept: 'poisoning-the-well',
    difficulty: 1,
    subLevel: SubLevel.BEGINNER,
    question:
      'Before Alex speaks, Jordan says: "Remember, Alex always defends big corporations over ordinary people." What fallacy is most likely if this is used to dismiss Alex’s argument without hearing it?',
    options: [
      'Poisoning the well',
      'Appeal to popularity',
      'Hasty generalization',
      'No fallacy',
    ],
    correct_option_index: 0,
    explanation:
      'Poisoning the well attacks someone in advance, trying to make the audience reject anything they say.',
    detailedExplanationBeginner:
      'Jordan wants people to ignore Alex’s points by planting a negative image before Alex even speaks.',
    detailedExplanationIntermediate:
      'The trick is to bias the audience so strongly that any later argument from Alex is seen as suspicious regardless of its quality.',
    detailedExplanationExpert:
      'Poisoning the well pre‑loads the context with a discrediting frame, undermining fair evaluation. It is closely related to ad hominem but occurs before the argument is even presented.',
    questionFormat: 'standard',
  }),

  // Level 9 – Mixed / Multi-step (Beginner)
  makeQuestion({
    level: 9,
    persona_stage: PersonaStage.WHALE,
    concept: 'mixed-fallacies',
    difficulty: 2,
    subLevel: SubLevel.BEGINNER,
    question:
      'Which description best fits an argument that both misrepresents an opponent’s view and claims that “everyone” is against it, without evidence?',
    options: [
      'It combines a straw man with an appeal to popularity.',
      'It is purely a formal fallacy.',
      'It commits only an ad hominem.',
      'It contains no fallacy at all.',
    ],
    correct_option_index: 0,
    explanation:
      'Misrepresenting the view is a straw man; invoking “everyone” as a reason is an appeal to popularity.',
    detailedExplanationBeginner:
      'Two errors happen at once: changing what the other said and then saying “everyone disagrees” as if that proved something.',
    detailedExplanationIntermediate:
      'Complex real arguments often mix several fallacies. Being able to name the main ones helps you untangle the reasoning.',
    detailedExplanationExpert:
      'Multi‑fallacy arguments may exert more psychological pull because different rhetorical levers reinforce each other (identity, belonging, caricature). Diagnosing each component clarifies where the reasoning fails.',
    questionFormat: 'standard',
  }),

  // Level 10 – Meta-logic (Beginner)
  makeQuestion({
    level: 10,
    persona_stage: PersonaStage.GOD_WHALE,
    concept: 'fallacy-fallacy',
    difficulty: 2,
    subLevel: SubLevel.BEGINNER,
    question:
      'Chris points out that Dana used a weak argument for a true claim, then says: "Since your reasoning was fallacious, your conclusion must be false." What fallacy does Chris commit?',
    options: [
      'Fallacy fallacy',
      'Ad hominem',
      'Appeal to ignorance',
      'Slippery slope',
    ],
    correct_option_index: 0,
    explanation:
      'The fallacy fallacy assumes that if an argument is bad, its conclusion must be false.',
    detailedExplanationBeginner:
      'A bad argument for a true claim is still a bad argument, but the claim might still be true for other reasons.',
    detailedExplanationIntermediate:
      'Criticizing reasoning is about the support, not automatically about the truth of the conclusion. Another, better argument could support the same conclusion.',
    detailedExplanationExpert:
      'The inference from “argument A for p is fallacious” to “¬p” is invalid. Evaluating conclusions requires considering all available evidence, not just one flawed inference.',
    questionFormat: 'standard',
  }),
];


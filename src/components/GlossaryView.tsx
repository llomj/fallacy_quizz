import React, { useState, useMemo } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { formatTranslation } from '../translations';

export interface GlossaryTerm {
  term: string;
  definition: string;
  levelRange: string;
  detailedDescription?: string;
  example?: string;
  exampleBeginner?: string;
  exampleIntermediate?: string;
  exampleExpert?: string;
}

export const GLOSSARY_TERMS_EN: GlossaryTerm[] = [
  { term: 'Ad Hominem', definition: 'Attacking the person making the argument rather than addressing the argument itself.', levelRange: '1-10', detailedDescription: 'Category: Logical Fallacies - Relevance failure in premise.' },
  { term: 'Appeal to Authority', definition: 'Using an authority figure\'s opinion as evidence when they are not an expert on the topic.', levelRange: '1-10', detailedDescription: 'Category: Logical Fallacies - Relevance failure in premise.' },
  { term: 'Appeal to Tradition', definition: 'Arguing that something is better or correct simply because it is older or traditional.', levelRange: '1-10', detailedDescription: 'Category: Social & Institutional Behaviors - Relevance failure in premise.' },
  { term: 'Appeal to Novelty', definition: 'Claiming that something is superior or true simply because it is new or modern.', levelRange: '1-10', detailedDescription: 'Category: Rhetorical/Discourse Tactics - Relevance failure in premise.' },
  { term: 'Appeal to Popularity', definition: 'Arguing that a proposition is true because many or most people believe it.', levelRange: '1-10', detailedDescription: 'Category: Social & Institutional Behaviors - Relevance failure in premise.' },
  { term: 'Appeal to Emotion', definition: 'Manipulating an emotional response in place of a valid or compelling argument.', levelRange: '1-10', detailedDescription: 'Category: Rhetorical/Discourse Tactics - Relevance failure in premise.' },
  { term: 'Appeal to Fear', definition: 'Using scare tactics to influence the audience\'s decision-making.', levelRange: '1-10', detailedDescription: 'Category: Cognitive Biases - Relevance failure in premise.' },
  { term: 'Appeal to Ignorance', definition: 'Arguing that a claim is true simply because it has not been proven false.', levelRange: '1-10', detailedDescription: 'Category: Logical Fallacies - Relevance failure in premise.' },
  { term: 'Appeal to Incredulity', definition: 'Asserting that a proposition must be false because it contradicts one\'s personal expectations or is difficult to imagine.', levelRange: '1-10', detailedDescription: 'Category: Cognitive Biases - Relevance failure in premise.' },
  { term: 'Anecdotal Fallacy', definition: 'Using a personal experience or an isolated example instead of effective evidence.', levelRange: '1-10', detailedDescription: 'Category: Logical Fallacies - Argument structure failure.' },
  { term: 'Begging the Question', definition: 'Using a conclusion as a premise of the same argument.', levelRange: '1-10', detailedDescription: 'Category: Logical Fallacies - Structural flaw in reasoning.' },
  { term: 'Biased Sample', definition: 'Drawing conclusions from a non-representative sample.', levelRange: '1-10', detailedDescription: 'Category: Logical Fallacies - Premise validity issue.' },
  { term: 'Black or White Fallacy', definition: 'Presenting only two options when more exist.', levelRange: '1-10', detailedDescription: 'Category: Logical Fallacies - False dilemma.' },
  { term: 'Burden of Proof', definition: 'Placing the obligation to prove something on the wrong side.', levelRange: '1-10', detailedDescription: 'Category: Logical Fallacies - Argument structure issue.' },
  { term: 'Causation Fallacy', definition: 'Assuming that because one event followed another, the first caused the second.', levelRange: '1-10', detailedDescription: 'Category: Logical Fallacies - Causal reasoning error.' },
  { term: 'Composition Fallacy', definition: 'Assuming that what is true of the parts is true of the whole.', levelRange: '1-10', detailedDescription: 'Category: Logical Fallacies - Logical inference error.' },
  { term: 'Conjunction Fallacy', definition: 'Believing that specific conditions are more probable than general ones.', levelRange: '1-10', detailedDescription: 'Category: Cognitive Biases - Probability judgment error.' },
  { term: 'Denying the Antecedent', definition: 'Invalid form of conditional reasoning.', levelRange: '1-10', detailedDescription: 'Category: Formal Fallacies - Conditional logic error.' },
  { term: 'Ecological Fallacy', definition: 'Inferring individual characteristics from group data.', levelRange: '1-10', detailedDescription: 'Category: Logical Fallacies - Statistical reasoning error.' },
  { term: 'Equivocation', definition: 'Using a word with different meanings in different parts of an argument.', levelRange: '1-10', detailedDescription: 'Category: Logical Fallacies - Ambiguity error.' },
  { term: 'Fallacy Fallacy', definition: 'Assuming that because an argument is fallacious, its conclusion is false.', levelRange: '1-10', detailedDescription: 'Category: Logical Fallacies - Meta-reasoning error.' },
  { term: 'False Analogy', definition: 'Comparing things that are not sufficiently alike.', levelRange: '1-10', detailedDescription: 'Category: Logical Fallacies - Analogy reasoning error.' },
  { term: 'False Cause', definition: 'Presuming that a real or perceived relationship between things means one is the cause of the other.', levelRange: '1-10', detailedDescription: 'Category: Logical Fallacies - Causal reasoning error.' },
  { term: 'False Dilemma', definition: 'Presenting only two options when more exist.', levelRange: '1-10', detailedDescription: 'Category: Logical Fallacies - False dichotomy.' },
  { term: 'Gambler\'s Fallacy', definition: 'Believing that past random events affect future random events.', levelRange: '1-10', detailedDescription: 'Category: Cognitive Biases - Probability judgment error.' },
  { term: 'Genetic Fallacy', definition: 'Judging something based on its origin rather than its current meaning or context.', levelRange: '1-10', detailedDescription: 'Category: Logical Fallacies - Relevance failure.' },
  { term: 'Gish Gallop', definition: 'Overwhelming an opponent with as many arguments as possible.', levelRange: '1-10', detailedDescription: 'Category: Rhetorical/Discourse Tactics - Debate strategy.' },
  { term: 'Halo Effect', definition: 'Allowing one positive or negative trait to influence overall judgment.', levelRange: '1-10', detailedDescription: 'Category: Cognitive Biases - Judgment bias.' },
  { term: 'Hasty Generalization', definition: 'Making a rushing conclusion without considering all of the variables.', levelRange: '1-10', detailedDescription: 'Category: Logical Fallacies - Generalization error.' },
  { term: 'Historian\'s Fallacy', definition: 'Using information that was not available to those in the past to judge their decisions.', levelRange: '1-10', detailedDescription: 'Category: Cognitive Biases - Retrospective bias.' },
  { term: 'Illicit Minor', definition: 'A formal syllogism where the minor term is undistributed in the minor premise but distributed in the conclusion.', levelRange: '1-10', detailedDescription: 'Category: Formal Fallacies - Syllogistic error.' },
  { term: 'Illicit Major', definition: 'A formal syllogism where the major term is undistributed in the major premise but distributed in the conclusion.', levelRange: '1-10', detailedDescription: 'Category: Formal Fallacies - Syllogistic error.' },
  { term: 'Iowa Argument', definition: 'Claiming that a statement is false because it is an "Iowa argument" is a type of circular reasoning.', levelRange: '1-10', detailedDescription: 'Category: Formal Fallacies - Circular reasoning.' },
  { term: 'Loaded Question', definition: 'Asking a question that contains an assumption that the other person must accept.', levelRange: '1-10', detailedDescription: 'Category: Logical Fallacies - Question framing error.' },
  { term: 'Middle Ground Fallacy', definition: 'Asserting that a compromise between two positions must be correct.', levelRange: '1-10', detailedDescription: 'Category: Logical Fallacies - False compromise.' },
  { term: 'Missing Node', definition: 'Creating a new node to argue against rather than addressing the original argument.', levelRange: '1-10', detailedDescription: 'Category: Logical Fallacies - Misrepresentation.' },
  { term: 'Moving the Goalposts', definition: 'Changing the criteria for acceptance after an attempt has been made.', levelRange: '1-10', detailedDescription: 'Category: Rhetorical/Discourse Tactics - Standard shifting.' },
  { term: 'Nirvana Fallacy', definition: 'Rejecting a solution because it is not perfect when a better one is not available.', levelRange: '1-10', detailedDescription: 'Category: Logical Fallacies - Comparative reasoning error.' },
  { term: 'No True Scotsman', definition: 'Making an exception when a counterexample is presented.', levelRange: '1-10', detailedDescription: 'Category: Logical Fallacies - Exception handling error.' },
  { term: 'Onus Probandi', definition: 'Placing the burden of proof on the wrong side.', levelRange: '1-10', detailedDescription: 'Category: Logical Fallacies - Argument structure issue.' },
  { term: 'Overconfidence Effect', definition: 'Overestimating one\'s own abilities.', levelRange: '1-10', detailedDescription: 'Category: Cognitive Biases - Self-assessment error.' },
  { term: 'Post Hoc Ergo Propter Hoc', definition: 'Assuming that because one event followed another, the first caused the second.', levelRange: '1-10', detailedDescription: 'Category: Logical Fallacies - Causal reasoning error.' },
  { term: 'Proof by Example', definition: 'Using an example to claim to prove something.', levelRange: '1-10', detailedDescription: 'Category: Logical Fallacies - Evidence handling error.' },
  { term: 'Prosecutor\'s Fallacy', definition: 'Misrepresenting statistical evidence.', levelRange: '1-10', detailedDescription: 'Category: Cognitive Biases - Statistical reasoning error.' },
  { term: 'Red Herring', definition: 'Attempting to redirect the argument to another issue.', levelRange: '1-10', detailedDescription: 'Category: Logical Fallacies - Relevance failure.' },
  { term: 'Regression Fallacy', definition: 'Failing to account for natural fluctuations.', levelRange: '1-10', detailedDescription: 'Category: Cognitive Biases - Statistical reasoning error.' },
  { term: 'Reification', definition: 'Treating an abstraction as if it were a concrete thing.', levelRange: '1-10', detailedDescription: 'Category: Logical Fallacies - Conceptual error.' },
  { term: 'Retrospective Determinism', definition: 'Believing that because an event happened, it was predictable.', levelRange: '1-10', detailedDescription: 'Category: Cognitive Biases - Hindsight bias.' },
  { term: 'Self-Serving Bias', definition: 'Interpreting information in a way that benefits one\'s own interests.', levelRange: '1-10', detailedDescription: 'Category: Cognitive Biases - Judgment bias.' },
  { term: 'Slippery Slope', definition: 'Claiming that one event will lead to extreme consequences without evidence.', levelRange: '1-10', detailedDescription: 'Category: Logical Fallacies - Causal chain error.' },
  { term: 'Special Pleading', definition: 'Applying different standards to different cases without justification.', levelRange: '1-10', detailedDescription: 'Category: Logical Fallacies - Double standard.' },
  { term: 'Spotlight Fallacy', definition: 'Using unrepresentative examples to claim something is true.', levelRange: '1-10', detailedDescription: 'Category: Logical Fallacies - Sampling error.' },
  { term: 'Straw Man', definition: 'Misrepresenting someone\'s argument to make it easier to attack.', levelRange: '1-10', detailedDescription: 'Category: Logical Fallacies - Misrepresentation.' },
  { term: 'Sunk Cost Fallacy', definition: 'Continuing an action because of previously invested resources.', levelRange: '1-10', detailedDescription: 'Category: Cognitive Biases - Decision-making error.' },
  { term: 'Suppressed Evidence', definition: 'Hiding evidence that would support a different conclusion.', levelRange: '1-10', detailedDescription: 'Category: Logical Fallacies - Evidence handling.' },
  { term: 'Texas Sharpshooter Fallacy', definition: 'Making a conclusion after the fact based on limited data.', levelRange: '1-10', detailedDescription: 'Category: Logical Fallacies - Post-hoc reasoning.' },
  { term: 'Two Wrongs Make a Right', definition: 'Justifying an action by pointing to a similar action.', levelRange: '1-10', detailedDescription: 'Category: Logical Fallacies - Moral reasoning error.' },
  { term: 'Undistributed Middle', definition: 'A formal syllogism where the middle term is not distributed in either premise.', levelRange: '1-10', detailedDescription: 'Category: Formal Fallacies - Syllogistic error.' },
  { term: 'Wishful Thinking', definition: 'Believing something is true because one wishes it were true.', levelRange: '1-10', detailedDescription: 'Category: Cognitive Biases - Belief bias.' },
  { term: 'Confirmation Bias', definition: 'Seeking information that confirms existing beliefs.', levelRange: '2-10', detailedDescription: 'Category: Cognitive Biases - Belief perseverance.' },
  { term: 'Anchoring Bias', definition: 'Relying too heavily on the first piece of information encountered.', levelRange: '2-10', detailedDescription: 'Category: Cognitive Biases - Judgment bias.' },
  { term: 'Availability Heuristic', definition: 'Judging probability by how easily examples come to mind.', levelRange: '2-10', detailedDescription: 'Category: Cognitive Biases - Probability judgment.' },
  { term: 'Bandwagon Fallacy', definition: 'Assuming something is true because many people believe it.', levelRange: '2-10', detailedDescription: 'Category: Social & Institutional Behaviors - Social proof error.' },
  { term: 'Base Rate Fallacy', definition: 'Ignoring base rate information when making probability judgments.', levelRange: '2-10', detailedDescription: 'Category: Cognitive Biases - Statistical reasoning error.' },
  { term: 'Bias Blind Spot', definition: 'Failing to recognize one\'s own biases.', levelRange: '2-10', detailedDescription: 'Category: Cognitive Biases - Self-perception.' },
  { term: 'Choice-Supportive Bias', definition: 'Remembering past decisions as better than they actually were.', levelRange: '2-10', detailedDescription: 'Category: Cognitive Biases - Memory bias.' },
  { term: 'Cognitive Dissonance', definition: 'Experiencing discomfort when holding conflicting beliefs.', levelRange: '2-10', detailedDescription: 'Category: Cognitive Biases - Belief adjustment.' },
  { term: 'Dunning-Kruger Effect', definition: 'Overestimating one\'s own competence.', levelRange: '2-10', detailedDescription: 'Category: Cognitive Biases - Self-assessment error.' },
  { term: 'Endowment Effect', definition: 'Valuing things more when we own them.', levelRange: '2-10', detailedDescription: 'Category: Cognitive Biases - Ownership bias.' },
  { term: 'Framing Effect', definition: 'Being influenced by how information is presented.', levelRange: '2-10', detailedDescription: 'Category: Cognitive Biases - Presentation bias.' },
  { term: 'Fundamental Attribution Error', definition: 'Overestimating personality traits and underestimating situations.', levelRange: '2-10', detailedDescription: 'Category: Cognitive Biases - Judgment bias.' },
  { term: 'Halo Effect', definition: 'Allowing one positive trait to influence overall judgment.', levelRange: '2-10', detailedDescription: 'Category: Cognitive Biases - Evaluation bias.' },
  { term: 'Hindsight Bias', definition: 'Believing that past events were predictable.', levelRange: '2-10', detailedDescription: 'Category: Cognitive Biases - Memory distortion.' },
  { term: 'Hot Hand Fallacy', definition: 'Believing that success in one area predicts success in another.', levelRange: '2-10', detailedDescription: 'Category: Cognitive Biases - Performance perception.' },
  { term: 'Hyperbolic Discounting', definition: 'Preferring smaller rewards now over larger rewards later.', levelRange: '2-10', detailedDescription: 'Category: Cognitive Biases - Time preference.' },
  { term: 'Illusory Correlation', definition: 'Perceiving a relationship between unrelated events.', levelRange: '2-10', detailedDescription: 'Category: Cognitive Biases - Pattern recognition error.' },
  { term: 'Information Bias', definition: 'Seeking information even when it cannot affect action.', levelRange: '2-10', detailedDescription: 'Category: Cognitive Biases - Decision-making error.' },
  { term: 'Loss Aversion', definition: 'Fearing losses more than valuing gains.', levelRange: '2-10', detailedDescription: 'Category: Cognitive Biases - Risk perception.' },
  { term: 'Neglect of Probability', definition: 'Not considering probability in risky decisions.', levelRange: '2-10', detailedDescription: 'Category: Cognitive Biases - Risk assessment.' },
  { term: 'Optimism Bias', definition: 'Believing negative events are less likely to happen to oneself.', levelRange: '2-10', detailedDescription: 'Category: Cognitive Biases - Self-assessment.' },
  { term: 'Outcome Bias', definition: 'Judging decisions by their outcome rather than their quality.', levelRange: '2-10', detailedDescription: 'Category: Cognitive Biases - Evaluation error.' },
  { term: 'Oversimplification', definition: 'Reducing complexity to the point of distortion.', levelRange: '2-10', detailedDescription: 'Category: Logical Fallacies - Simplification error.' },
  { term: 'Pareidolia', definition: 'Perceiving patterns in random information.', levelRange: '2-10', detailedDescription: 'Category: Cognitive Biases - Pattern recognition.' },
  { term: 'Primacy Effect', definition: 'Remembering the first item in a list better.', levelRange: '2-10', detailedDescription: 'Category: Cognitive Biases - Memory bias.' },
  { term: 'Projection Bias', definition: 'Projecting current preferences onto future decisions.', levelRange: '2-10', detailedDescription: 'Category: Cognitive Biases - Temporal discounting.' },
  { term: 'Recency Effect', definition: 'Remembering the last item in a list better.', levelRange: '2-10', detailedDescription: 'Category: Cognitive Biases - Memory bias.' },
  { term: 'Salience Bias', definition: 'Focusing on the most noticeable information.', levelRange: '2-10', detailedDescription: 'Category: Cognitive Biases - Attention bias.' },
  { term: 'Self-Fulfilling Prophecy', definition: 'Acting in a way that makes a belief come true.', levelRange: '2-10', detailedDescription: 'Category: Cognitive Biases - Belief-behavior loop.' },
  { term: 'Stereotyping', definition: 'Applying oversimplified generalizations to individuals.', levelRange: '2-10', detailedDescription: 'Category: Cognitive Biases - Group thinking.' },
  { term: 'Survivor Bias', definition: 'Focusing on successful cases while ignoring failures.', levelRange: '2-10', detailedDescription: 'Category: Cognitive Biases - Selection bias.' },
  { term: 'Status Quo Bias', definition: 'Preferring the current state over change.', levelRange: '2-10', detailedDescription: 'Category: Cognitive Biases - Change resistance.' },
  { term: 'Subadditivity Effect', definition: 'Underestimating the probability of disjunction.', levelRange: '2-10', detailedDescription: 'Category: Cognitive Biases - Probability estimation.' },
  { term: 'Whole Number Bias', definition: 'Ignoring fractions when making numerical judgments.', levelRange: '2-10', detailedDescription: 'Category: Cognitive Biases - Numerical reasoning.' },
  { term: 'Zero Sum Bias', definition: 'Believing situations are zero-sum when they are not.', levelRange: '2-10', detailedDescription: 'Category: Cognitive Biases - Competitive mindset.' },
  { term: 'Circular Reasoning', definition: 'Using a conclusion as a premise of the same argument.', levelRange: '3-10', detailedDescription: 'Category: Formal Fallacies - Structural flaw.' },
  { term: 'False Dichotomy', definition: 'Presenting only two options when more exist.', levelRange: '3-10', detailedDescription: 'Category: Logical Fallacies - False dilemma.' },
  { term: 'Ad Populum', definition: 'Appealing to the beliefs of a group as truth.', levelRange: '3-10', detailedDescription: 'Category: Social & Institutional Behaviors - Social proof.' },
  { term: 'Appeal to Consequences', definition: 'Arguing that a conclusion is false because it leads to undesirable consequences.', levelRange: '3-10', detailedDescription: 'Category: Logical Fallacies - Consequence argument.' },
  { term: 'Argument from Authority', definition: 'Using an authority figure\'s opinion as evidence without proper justification.', levelRange: '3-10', detailedDescription: 'Category: Logical Fallacies - Authority argument.' },
  { term: 'Attacking the Evidence', definition: 'Challenging the source of evidence rather than the argument.', levelRange: '3-10', detailedDescription: 'Category: Logical Fallacies - Evidence challenge.' },
  { term: 'Biased Sample', definition: 'Drawing conclusions from a non-representative sample.', levelRange: '3-10', detailedDescription: 'Category: Logical Fallacies - Sampling error.' },
  { term: 'Cherry Picking', definition: 'Selecting evidence that supports a position while ignoring contrary evidence.', levelRange: '3-10', detailedDescription: 'Category: Logical Fallacies - Evidence selection.' },
  { term: 'Confounding Variables', definition: 'Failing to account for factors that influence both variables.', levelRange: '3-10', detailedDescription: 'Category: Logical Fallacies - Variable confusion.' },
  { term: 'Conspiracy Theory Fallacy', definition: 'Assuming complex events are caused by secret plots.', levelRange: '3-10', detailedDescription: 'Category: Logical Fallacies - Explanation error.' },
  { term: 'False Attribution', definition: 'Attributing causation without proper evidence.', levelRange: '3-10', detailedDescription: 'Category: Logical Fallacies - Attribution error.' },
  { term: 'False Balance', definition: 'Presenting opposing views as equally valid when they are not.', levelRange: '3-10', detailedDescription: 'Category: Logical Fallacies - Balance fallacy.' },
  { term: 'Hard-Easy Effect', definition: 'Overestimating easy tasks and underestimating hard ones.', levelRange: '3-10', detailedDescription: 'Category: Cognitive Biases - Task estimation.' },
  { term: 'IKEA Effect', definition: 'Valuing things more because we built them ourselves.', levelRange: '3-10', detailedDescription: 'Category: Cognitive Biases - Ownership effect.' },
  { term: 'Illusory Superiority', definition: 'Overestimating one\'s abilities relative to others.', levelRange: '3-10', detailedDescription: 'Category: Cognitive Biases - Self-assessment.' },
  { term: 'Impact Bias', definition: 'Overestimating the impact of future events on emotional well-being.', levelRange: '3-10', detailedDescription: 'Category: Cognitive Biases - Future thinking.' },
  { term: 'Less-is-better Effect', definition: 'Preferring a smaller set when a larger one is not complete.', levelRange: '3-10', detailedDescription: 'Category: Cognitive Biases - Preference reversal.' },
  { term: 'Naive Realism', definition: 'Believing that one sees reality objectively.', levelRange: '3-10', detailedDescription: 'Category: Cognitive Biases - Perception belief.' },
  { term: 'Omission Bias', definition: 'Judging harmful actions more harshly than harmful inactions.', levelRange: '3-10', detailedDescription: 'Category: Cognitive Biases - Action evaluation.' },
  { term: 'Poisoning the Well', definition: 'Presenting negative information before presenting the main argument.', levelRange: '3-10', detailedDescription: 'Category: Rhetorical/Discourse Tactics - Preemptive discrediting.' },
  { term: 'Present Bias', definition: 'Prioritizing immediate rewards over future benefits.', levelRange: '3-10', detailedDescription: 'Category: Cognitive Biases - Time preference.' },
  { term: 'Pseudo-profundity', definition: 'Presenting simple truths as profound insights.', levelRange: '3-10', detailedDescription: 'Category: Rhetorical/Discourse Tactics - Perception management.' },
  { term: 'Restraint Bias', definition: 'Overestimating one\'s ability to resist impulses.', levelRange: '3-10', detailedDescription: 'Category: Cognitive Biases - Self-control overestimation.' },
  { term: 'Selective Attention', definition: 'Focusing on certain information while ignoring other relevant information.', levelRange: '3-10', detailedDescription: 'Category: Cognitive Biases - Attention focus.' },
  { term: 'Self-Deception', definition: 'Unconsciously distorting information to maintain desired beliefs.', levelRange: '3-10', detailedDescription: 'Category: Cognitive Biases - Belief maintenance.' },
  { term: 'Social Proof', definition: 'Using others\' behavior as a guide for one\'s own decisions.', levelRange: '3-10', detailedDescription: 'Category: Social & Institutional Behaviors - Conformity.' },
  { term: 'System Justification', definition: 'Defending and justifying the status quo.', levelRange: '3-10', detailedDescription: 'Category: Cognitive Biases - Status quo defense.' },
  { term: 'Telescoping Effect', definition: 'Events appearing closer in time than they actually are.', levelRange: '3-10', detailedDescription: 'Category: Cognitive Biases - Time perception.' },
  { term: 'Weber-Fechner Law', definition: 'Underestimating large changes in quantity.', levelRange: '3-10', detailedDescription: 'Category: Cognitive Biases - Perception scaling.' },
  { term: 'Well-Traveled Road Effect', definition: 'Underestimating time for familiar routes and overestimating for unfamiliar ones.', levelRange: '3-10', detailedDescription: 'Category: Cognitive Biases - Route estimation.' },
  { term: 'Frequency Illusion', definition: 'Noticing something more after learning about it.', levelRange: '4-10', detailedDescription: 'Category: Cognitive Biases - Attention bias.' },
  { term: 'Conjunction Error', definition: 'Thinking two events happening together is more likely than one event alone.', levelRange: '4-10', detailedDescription: 'Category: Cognitive Biases - Probability error.' },
  { term: 'Density Fallacy', definition: 'Assuming that more dense areas have more of a characteristic.', levelRange: '4-10', detailedDescription: 'Category: Logical Fallacies - Statistical error.' },
  { term: 'Exaggeration', definition: 'Representing something as larger or more important than it is.', levelRange: '4-10', detailedDescription: 'Category: Rhetorical/Discourse Tactics - Magnification.' },
  { term: 'Hypostatization', definition: 'Treating abstractions as concrete entities.', levelRange: '4-10', detailedDescription: 'Category: Logical Fallacies - Conceptual error.' },
  { term: 'Negative Proof', definition: 'Claiming something is true because it has not been proven false.', levelRange: '4-10', detailedDescription: 'Category: Logical Fallacies - Proof absence.' },
  { term: 'Pluralist Fallacy', definition: 'Treating a group as having uniform characteristics.', levelRange: '4-10', detailedDescription: 'Category: Logical Fallacies - Group generalization.' },
  { term: 'Rosy Retrospection', definition: 'Remembering past events as more positive than they were.', levelRange: '4-10', detailedDescription: 'Category: Cognitive Biases - Memory distortion.' },
  { term: 'Causal Reductionism', definition: 'Oversimplifying cause-and-effect relationships.', levelRange: '5-10', detailedDescription: 'Category: Logical Fallacies - Causation oversimplification.' },
  { term: 'Reversed Causality', definition: 'Assuming the effect is the cause and vice versa.', levelRange: '5-10', detailedDescription: 'Category: Logical Fallacies - Causation reversal.' },
  { term: 'Wrong Direction', definition: 'Reversing the direction of causation.', levelRange: '5-10', detailedDescription: 'Category: Logical Fallacies - Causation error.' },
];

export const GLOSSARY_TERMS_FR: GlossaryTerm[] = [
  { term: 'Ad Hominem', definition: 'Attaquer la personne qui présente l\'argument plutôt que de répondre à l\'argument lui-même.', levelRange: '1-10', detailedDescription: 'Catégorie: Sophismes logiques - Échec de pertinence dans la prémisse.' },
  { term: 'Appel à l\'autorité', definition: 'Utiliser l\'opinion d\'une autorité comme preuve sans justification appropriée.', levelRange: '1-10', detailedDescription: 'Catégorie: Sophismes logiques - Échec de pertinence dans la prémisse.' },
  { term: 'Appel à la tradition', definition: 'Affirmer que quelque chose est meilleur ou correct simplement parce qu\'il est plus ancien ou traditionnel.', levelRange: '1-10', detailedDescription: 'Catégorie: Comportements sociaux et institutionnels - Échec de pertinence.' },
  { term: 'Appel à la nouveauté', definition: 'Affirmer que quelque chose est supérieur ou vrai simplement parce qu\'il est nouveau ou moderne.', levelRange: '1-10', detailedDescription: 'Catégorie: Tactiques rhétoriques - Échec de pertinence.' },
  { term: 'Appel à la popularité', definition: 'Affirmer qu\'une proposition est vraie parce que beaucoup de gens y croient.', levelRange: '1-10', detailedDescription: 'Catégorie: Comportements sociaux - Preuve sociale.' },
  { term: 'Appel à l\'émotion', definition: 'Manipuler une réponse émotionnelle au lieu d\'un argument valide.', levelRange: '1-10', detailedDescription: 'Catégorie: Tactiques rhétoriques - Échec de pertinence.' },
  { term: 'Appel à la peur', definition: 'Utiliser des tactiques de peur pour influencer la prise de décision.', levelRange: '1-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Échec de pertinence.' },
  { term: 'Appel à l\'ignorance', definition: 'Affirmer qu\'une réclamation est vraie simplement parce qu\'elle n\'a pas été prouvée fausse.', levelRange: '1-10', detailedDescription: 'Catégorie: Sophismes logiques - Échec de pertinence.' },
  { term: 'Appel à l\'incrédulité', definition: 'Affirmer qu\'une proposition doit être fausse parce qu\'elle contredit les attentes personnelles.', levelRange: '1-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Échec de pertinence.' },
  { term: 'Sophisme anecdotique', definition: 'Utiliser une expérience personnelle au lieu de preuves efficaces.', levelRange: '1-10', detailedDescription: 'Catégorie: Sophismes logiques - Erreur de structure.' },
  { term: 'Pétition de principe', definition: 'Utiliser une conclusion comme prémisse du même argument.', levelRange: '1-10', detailedDescription: 'Catégorie: Sophismes logiques - Erreur structurelle.' },
  { term: 'Échantillon biaisé', definition: 'Tirer des conclusions d\'un échantillon non représentatif.', levelRange: '1-10', detailedDescription: 'Catégorie: Sophismes logiques - Problème de validité.' },
  { term: 'Faux dilemme', definition: 'Présenter seulement deux options quand il en existe davantage.', levelRange: '1-10', detailedDescription: 'Catégorie: Sophismes logiques - Fausse dichotomie.' },
  { term: 'Charge de la preuve', definition: 'Placer l\'obligation de prouver quelque chose du mauvais côté.', levelRange: '1-10', detailedDescription: 'Catégorie: Sophismes logiques - Structure d\'argument.' },
  { term: 'Sophisme de causalité', definition: 'Supposer qu\'un événement a causé un autre simplement parce qu\'il l\'a précédé.', levelRange: '1-10', detailedDescription: 'Catégorie: Sophismes logiques - Erreur de raisonnement causal.' },
  { term: 'Sophisme de composition', definition: 'Supposer que ce qui est vrai des parties est vrai du tout.', levelRange: '1-10', detailedDescription: 'Catégorie: Sophismes logiques - Erreur d\'inférence.' },
  { term: 'Sophisme de conjonction', definition: 'Croire que des conditions spécifiques sont plus probables que des générales.', levelRange: '1-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Erreur de jugement probabiliste.' },
  { term: 'Négation de l\'antécédent', definition: 'Forme invalide de raisonnement conditionnel.', levelRange: '1-10', detailedDescription: 'Catégorie: Sophismes formels - Erreur de logique conditionnelle.' },
  { term: 'Sophisme écologique', definition: 'Inférer des caractéristiques individuelles à partir de données de groupe.', levelRange: '1-10', detailedDescription: 'Catégorie: Sophismes logiques - Erreur de raisonnement statistique.' },
  { term: 'Équivocation', definition: 'Utiliser un mot avec des significations différentes dans différentes parties d\'un argument.', levelRange: '1-10', detailedDescription: 'Catégorie: Sophismes logiques - Erreur d\'ambiguïté.' },
  { term: 'Sophisme du faux', definition: 'Supposer que parce qu\'un argument est fallacieux, sa conclusion est fausse.', levelRange: '1-10', detailedDescription: 'Catégorie: Sophismes logiques - Erreur méta-raisonnement.' },
  { term: 'Fausse analogie', definition: 'Comparer des choses qui ne sont pas suffisamment similaires.', levelRange: '1-10', detailedDescription: 'Catégorie: Sophismes logiques - Erreur d\'analogie.' },
  { term: 'Fausse cause', definition: 'Présumer qu\'une relation réelle ou perçue entre les choses signifie que l\'une est la cause de l\'autre.', levelRange: '1-10', detailedDescription: 'Catégorie: Sophismes logiques - Erreur de causalité.' },
  { term: 'Sophisme du joueur', definition: 'Croire que des événements aléatoires passés affectent les événements aléatoires futurs.', levelRange: '1-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Erreur probabiliste.' },
  { term: 'Sophisme génétique', definition: 'Juger quelque chose sur son origine plutôt que sur son contexte actuel.', levelRange: '1-10', detailedDescription: 'Catégorie: Sophismes logiques - Échec de pertinence.' },
  { term: 'Effet halo', definition: 'Permettre à un trait positif ou négatif d\'influencer le jugement global.', levelRange: '1-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Biais de jugement.' },
  { term: 'Généralisation hâtive', definition: 'Tirer une conclusion précipitée sans considérer toutes les variables.', levelRange: '1-10', detailedDescription: 'Catégorie: Sophismes logiques - Erreur de généralisation.' },
  { term: 'Biais de l\'historian', definition: 'Utiliser des informations qui n\'étaient pas disponibles pour juger les décisions passées.', levelRange: '1-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Biais rétrospectif.' },
  { term: 'Homme de paille', definition: 'Déformer l\'argument de quelqu\'un pour le rendre plus facile à attaquer.', levelRange: '1-10', detailedDescription: 'Catégorie: Sophismes logiques - Représentation erronée.' },
  { term: 'Pente glissante', definition: 'Affirmer qu\'un événement mènera à des conséquences extrêmes sans preuve.', levelRange: '1-10', detailedDescription: 'Catégorie: Sophismes logiques - Erreur de chaîne causale.' },
  { term: 'Fausse dichotomie', definition: 'Présenter seulement deux options quand il en existe davantage.', levelRange: '1-10', detailedDescription: 'Catégorie: Sophismes logiques - Faux dilemme.' },
  { term: 'Sophisme de la boîte noire', definition: 'Poursuivre une action en raison des ressources déjà investies.', levelRange: '1-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Erreur de prise de décision.' },
  { term: 'Fausses preuves', definition: 'Cacher des informations qui soutiendraient une conclusion différente.', levelRange: '1-10', detailedDescription: 'Catégorie: Sophismes logiques - Manipulation des preuves.' },
  { term: 'Tireur d\'élite du Texas', definition: 'Tirer des conclusions après coup basées sur des données limitées.', levelRange: '1-10', detailedDescription: 'Catégorie: Sophismes logiques - Raisonnement post-hoc.' },
  { term: 'Deux torts ne font pas un bien', definition: 'Justifier une action en pointant une action similaire.', levelRange: '1-10', detailedDescription: 'Catégorie: Sophismes logiques - Erreur de raisonnement moral.' },
  { term: 'Biais de confirmation', definition: 'Rechercher des informations qui confirment les croyances existantes.', levelRange: '2-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Persévérance dans la croyance.' },
  { term: 'Biais d\'ancrage', definition: 'S\'appuyer trop lourdement sur la première information rencontrée.', levelRange: '2-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Biais de jugement.' },
  { term: 'Heuristique de disponibilité', definition: 'Juger la probabilité par la facilité avec laquelle des exemples viennent à l\'esprit.', levelRange: '2-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Jugement probabiliste.' },
  { term: 'Appel à la foule', definition: 'Supposer qu\'une chose est vraie parce que beaucoup de gens le croient.', levelRange: '2-10', detailedDescription: 'Catégorie: Comportements sociaux - Preuve sociale.' },
  { term: 'Sophisme du taux de base', definition: 'Ignorer les informations de taux de base lors des jugements probabilistes.', levelRange: '2-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Erreur statistique.' },
  { term: 'Biais du point aveugle', definition: 'Ne pas reconnaître ses propres biais.', levelRange: '2-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Auto-perception.' },
  { term: 'Biais de choix', definition: 'Se souvenir des décisions passées comme meilleures qu\'elles ne l\'étaient réellement.', levelRange: '2-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Biais de mémoire.' },
  { term: 'Dissonance cognitive', definition: 'Éprouver de l\'inconfort lorsqu\'on holding conflicting beliefs.', levelRange: '2-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Ajustement de croyance.' },
  { term: 'Effet Dunning-Kruger', definition: 'Surestimer sa propre compétence.', levelRange: '2-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Erreur d\'auto-évaluation.' },
  { term: 'Effet de dotation', definition: 'Évaluer les choses plus quand on les possède.', levelRange: '2-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Biais de propriété.' },
  { term: 'Effet de cadrage', definition: 'Être influencé par la façon dont les informations sont présentées.', levelRange: '2-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Biais de présentation.' },
  { term: 'Erreur fondamentale d\'attribution', definition: 'Surestimer les traits de personnalité et sous-estimer les situations.', levelRange: '2-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Biais de jugement.' },
  { term: 'Biais de rétrospection', definition: 'Croire que les événements passés étaient prévisibles.', levelRange: '2-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Distorsion de mémoire.' },
  { term: 'Biais d\'hyperbolic discounting', definition: 'Préférer des récompenses plus petites maintenant plutôt que des récompenses plus grandes plus tard.', levelRange: '2-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Préférence temporelle.' },
  { term: 'Corrélation illusoire', definition: 'Percevoir une relation entre événements sans rapport.', levelRange: '2-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Reconnaissance de motifs.' },
  { term: 'Biais d\'information', definition: 'Rechercher des informations même quand elles ne peuvent pas influencer l\'action.', levelRange: '2-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Erreur de décision.' },
  { term: 'Aversion à la perte', definition: 'Craindre les pertes plus que valoriser les gains.', levelRange: '2-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Perception du risque.' },
  { term: 'Biais d\'optimisme', definition: 'Croire que les événements négatifs sont moins susceptibles de se produire.', levelRange: '2-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Auto-évaluation.' },
  { term: 'Biais de résultat', definition: 'Juger les décisions par leur résultat plutôt que par leur qualité.', levelRange: '2-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Erreur d\'évaluation.' },
  { term: 'Pareidolie', definition: 'Percevoir des motifs dans des informations aléatoires.', levelRange: '2-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Reconnaissance de motifs.' },
  { term: 'Effet de primauté', definition: 'Se souvenir du premier élément d\'une liste mieux.', levelRange: '2-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Biais de mémoire.' },
  { term: 'Biais de projection', definition: 'Projeter les préférences actuelles sur les décisions futures.', levelRange: '2-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Escompte temporel.' },
  { term: 'Effet de récence', definition: 'Se souvenir du dernier élément d\'une liste mieux.', levelRange: '2-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Biais de mémoire.' },
  { term: 'Biais de saillance', definition: 'Se concentrer sur les informations les plus visibles.', levelRange: '2-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Biais d\'attention.' },
  { term: 'Stéréotype', definition: 'Appliquer des généralisations simplifiées aux individus.', levelRange: '2-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Pensée de groupe.' },
  { term: 'Biais de survie', definition: 'Se concentrer sur les cas réussis tout en ignorant les échecs.', levelRange: '2-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Biais de sélection.' },
  { term: 'Biais du statu quo', definition: 'Préférer l\'état actuel au changement.', levelRange: '2-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Résistance au changement.' },
  { term: 'Raisonnement circulaire', definition: 'Utiliser une conclusion comme prémisse du même argument.', levelRange: '3-10', detailedDescription: 'Catégorie: Sophismes formels - Erreur structurelle.' },
  { term: 'Argument populiste', definition: 'Appealing to the beliefs of a group as truth.', levelRange: '3-10', detailedDescription: 'Catégorie: Comportements sociaux - Preuve sociale.' },
  { term: 'Appel aux conséquences', definition: 'Affirmer qu\'une conclusion est fausse parce qu\'elle mène à des conséquences indésirables.', levelRange: '3-10', detailedDescription: 'Catégorie: Sophismes logiques - Argument de conséquence.' },
  { term: 'Argument d\'autorité', definition: 'Utiliser l\'opinion d\'une autorité comme preuve sans justification appropriée.', levelRange: '3-10', detailedDescription: 'Catégorie: Sophismes logiques - Argument d\'autorité.' },
  { term: 'Cueillette de cerises', definition: 'Sélectionner des preuves qui soutiennent une position tout en ignorant les preuves contraires.', levelRange: '3-10', detailedDescription: 'Catégorie: Sophismes logiques - Sélection de preuves.' },
  { term: 'Théorie du complot', definition: 'Supposer que des événements complexes sont causés par des complots secrets.', levelRange: '3-10', detailedDescription: 'Catégorie: Sophismes logiques - Erreur d\'explication.' },
  { term: 'Effet IKEA', definition: 'Évaluer les choses plus parce qu\'on les a construites soi-même.', levelRange: '3-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Effet de propriété.' },
  { term: 'Illusion de supériorité', definition: 'Surestimer ses capacités par rapport aux autres.', levelRange: '3-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Auto-évaluation.' },
  { term: 'Empoisonnement du puits', definition: 'Présenter des informations négatives avant de présenter l\'argument principal.', levelRange: '3-10', detailedDescription: 'Catégorie: Tactiques rhétoriques - Discrédit préventif.' },
  { term: 'Biais du présent', definition: 'Prioriser les récompenses immédiates sur les bénéfices futurs.', levelRange: '3-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Préférence temporelle.' },
  { term: 'Preuve sociale', definition: 'Utiliser le comportement des autres comme guide pour ses propres décisions.', levelRange: '3-10', detailedDescription: 'Catégorie: Comportements sociaux - Conformité.' },
  { term: 'Justification du système', definition: 'Défendre et justifier le statu quo.', levelRange: '3-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Défense du statu quo.' },
  { term: 'Illusion de fréquence', definition: 'Remarquer quelque chose plus après en avoir entendu parler.', levelRange: '4-10', detailedDescription: 'Catégorie: BIAIS cognitifs - Biais d\'attention.' },
  { term: 'Réductionnisme causal', definition: 'Simplifier excessivement les relations de cause à effet.', levelRange: '5-10', detailedDescription: 'Catégorie: Sophismes logiques - Simplification causale.' },
  { term: 'Causalité inversée', definition: 'Supposer que l\'effet est la cause et vice versa.', levelRange: '5-10', detailedDescription: 'Catégorie: Sophismes logiques - Inversion de causalité.' },
  { term: 'Mauvaise direction', definition: 'Inverser la direction de la causalité.', levelRange: '5-10', detailedDescription: 'Catégorie: Sophismes logiques - Erreur de causalité.' },
];

interface GlossaryViewProps {
  onBack: () => void;
  onPlayClickSound?: () => void;
  onSaveToFallacyLog?: (entry: { term: string; definition: string; levelRange: string }) => void;
  savedFallacyTerms?: string[];
}

export const GlossaryView: React.FC<GlossaryViewProps> = ({ onBack, onPlayClickSound, onSaveToFallacyLog, savedFallacyTerms = [] }) => {
  const { t, language } = useLanguage();
  const [search, setSearch] = useState('');
  const [selectedTerm, setSelectedTerm] = useState<GlossaryTerm | null>(null);
  const [exampleTier, setExampleTier] = useState<'beginner' | 'intermediate' | 'expert'>('intermediate');
  
  const glossary = language === 'fr' ? GLOSSARY_TERMS_FR : GLOSSARY_TERMS_EN;
  
  const filteredGlossary = useMemo(() => {
    return glossary
      .filter(item => 
        item.term.toLowerCase().includes(search.toLowerCase()) ||
        item.definition.toLowerCase().includes(search.toLowerCase())
      )
      .sort((a, b) => a.term.localeCompare(b.term));
  }, [glossary, search]);

  const levels = useMemo(() => [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], []);

  const getLevelsFromRange = (range: string): number[] => {
    const parts = range.split('-').map((part) => Number(part.trim()));
    if (parts.length === 1 && !Number.isNaN(parts[0])) return [parts[0]];
    if (parts.length !== 2 || Number.isNaN(parts[0]) || Number.isNaN(parts[1])) return [];
    const [start, end] = parts[0] <= parts[1] ? parts : [parts[1], parts[0]];
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  };

  const itemsByLevel = useMemo(() => {
    const map: Record<number, GlossaryTerm[]> = {};
    for (const level of levels) {
      map[level] = glossary
        .filter((item) => getLevelsFromRange(item.levelRange).includes(level))
        .sort((a, b) => a.term.localeCompare(b.term));
    }
    return map;
  }, [glossary, levels]);

  const renderAsParagraphs = (text: string, className: string) => {
    const paragraphs = text.split(/\n|\\n/).map((s) => s.trim()).filter(Boolean);
    return (
      <div className={className}>
        {paragraphs.map((para, i) => (
          <p key={i} className={i > 0 ? 'mt-3' : ''}>
            {para}
          </p>
        ))}
      </div>
    );
  };

  return (
    <div className="relative min-h-[600px] animate-in slide-in-from-left duration-500 pb-12">
      {selectedTerm && (
        <div className="fixed inset-0 z-[100] overflow-y-auto overflow-x-hidden overscroll-contain flex justify-center items-start sm:items-center p-4">
          <div 
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity" 
            onClick={() => setSelectedTerm(null)}
          ></div>
          <div className="glass w-full max-w-2xl my-4 sm:my-8 rounded-3xl p-6 sm:p-10 shadow-2xl relative z-10 border-yellow-400/40 animate-in fade-in zoom-in duration-300 overflow-x-hidden min-h-0">
            <button 
              onClick={() => { onPlayClickSound?.(); setSelectedTerm(null); }}
              className="absolute top-4 right-4 sm:top-6 sm:right-6 w-10 h-10 flex items-center justify-center rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors border border-white/10"
            >
              <i className="fas fa-times"></i>
            </button>
            <div className="space-y-5 sm:space-y-6">
              <div className="space-y-2 pt-2">
                <span className="inline-block text-[10px] font-black text-yellow-300 uppercase tracking-[0.2em] px-2.5 py-0.5 bg-yellow-400/10 rounded-full border border-yellow-400/40">
                  Level {selectedTerm.levelRange}
                </span>
                <h3 className="text-lg sm:text-xl font-black text-white">{selectedTerm.term}</h3>
              </div>
              <div className="space-y-2">
                <h4 className="text-[10px] sm:text-xs font-black text-slate-500 uppercase tracking-widest flex items-center gap-2">
                  <i className="fas fa-book-open text-yellow-300"></i> {t('glossary.inDepthDescription')}
                </h4>
                <div className="text-slate-300 leading-relaxed font-medium text-xs sm:text-sm">
                  {renderAsParagraphs(selectedTerm.detailedDescription || selectedTerm.definition, '')}
                </div>
              </div>
              <div className="pt-4 pb-2">
                <button 
                  onClick={() => { onPlayClickSound?.(); setSelectedTerm(null); }}
                  className="w-full py-4 bg-yellow-400 hover:bg-yellow-500 text-slate-900 rounded-2xl font-black transition-all shadow-xl shadow-yellow-400/30 active:scale-95"
                >
                  {t('operations.gotIt')}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg sm:text-xl font-black text-white flex items-center gap-2">
          <i className="fas fa-circle-info text-yellow-300"></i> {t('glossary.title')}
        </h2>
        <button 
          onClick={() => { onPlayClickSound?.(); onBack(); }}
          className="px-3 py-1.5 bg-white/5 hover:bg-white/10 rounded-xl text-xs font-bold transition-colors"
        >
          {t('history.backToHub')}
        </button>
      </div>

      <div className="relative mb-6">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-500 text-sm">
          <i className="fas fa-search"></i>
        </div>
        <input 
          type="text"
          placeholder={formatTranslation(t('glossary.searchPlaceholder'), { count: glossary.length })}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-3 py-3 text-sm bg-slate-900 border border-white/5 rounded-2xl text-white placeholder:text-slate-600 focus:outline-none focus:border-yellow-400/60 transition-colors"
        />
        {search !== '' && (
          <p className="mt-2 text-xs text-slate-500">
            {formatTranslation(t('glossary.showingCount'), { count: filteredGlossary.length, total: glossary.length })}
          </p>
        )}
      </div>

      <div className="space-y-8">
        {levels.map(level => {
          const items = itemsByLevel[level] || [];
          if (items.length === 0) return null;
          return (
            <div key={level} className="space-y-4">
              <div className="flex items-center gap-3">
                <h3 className="text-[10px] font-black text-yellow-300 uppercase tracking-[0.2em]">
                  {formatTranslation(t('glossary.levelSection'), { level })}
                </h3>
                <div className="h-[1px] flex-1 bg-white/5"></div>
              </div>
              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {items.map(item => {
                  const isSaved = savedFallacyTerms.includes(item.term);
                  return (
                    <div 
                      key={item.term} 
                      onClick={() => { onPlayClickSound?.(); setSelectedTerm(item); }}
                      className="glass p-4 rounded-xl space-y-1.5 hover:border-yellow-400/60 hover:bg-slate-800/80 transition-all cursor-pointer group active:scale-[0.98] relative"
                    >
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onPlayClickSound?.();
                          if (!isSaved && onSaveToFallacyLog) {
                            onSaveToFallacyLog({ term: item.term, definition: item.definition, levelRange: item.levelRange });
                          }
                        }}
                        className={`absolute top-2 right-2 w-6 h-6 rounded-full flex items-center justify-center transition-all ${
                          isSaved 
                            ? 'bg-yellow-400 text-slate-900' 
                            : 'bg-slate-800 text-slate-500 hover:text-yellow-300 border border-white/10'
                        }`}
                        title={isSaved ? 'Saved to fallacy log' : 'Save to fallacy log'}
                      >
                        <i className={`fas fa-${isSaved ? 'bookmark' : ' bookmark'}`}></i>
                      </button>
                      <h4 className="text-sm font-bold text-yellow-300 group-hover:text-yellow-200 transition-colors pr-8">
                        {item.term}
                      </h4>
                      <p className="text-[10px] leading-relaxed line-clamp-2" style={{ color: '#FF00FF' }}>
                        {item.definition}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

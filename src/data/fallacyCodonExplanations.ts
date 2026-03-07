/**
 * Fallacy codon explanations: beginner, intermediate, and expert in-depth
 * descriptions for each fallacy. Used when the question's detailed explanation
 * is a generic placeholder. Keys match correct-option strings as they appear
 * in the question bank (e.g. "Ad Hominem", "Appeal to Authority").
 * EN and FR must stay in structural parity (same sections, same depth).
 */

export type FallacyCodonLevel = 'beginner' | 'intermediate' | 'expert';

export interface FallacyCodonEntry {
  beginner: string;
  intermediate: string;
  expert: string;
}

/** Placeholder text that indicates we should use the fallacy lookup instead. */
export const FALLACY_PLACEHOLDER_PATTERNS = [
  'Relevance failure in premise',
  'Informal Logic - Relevance failure',
  'Logical Fallacies - Informal Logic',
  'Social & Institutional Behaviors - Informal Logic',
  'Rhetorical/Discourse Tactics - Informal Logic',
  'Cognitive Biases - Informal Logic',
  'Invalid inference',
  'Formal Logic - Invalid inference',
  'Logical Fallacies - Formal Logic',
  'Argument structure failure',
  'Informal Logic - Argument structure failure',
  'Logical Fallacies - Informal Logic - Argument structure failure',
  'Systematic cognitive deviation',
  'Neural Bias - Systematic cognitive deviation',
  'Memory & Perception Effects - Neural Bias',
];

export function isFallacyPlaceholder(text: string | undefined): boolean {
  if (!text || !text.trim()) return false;
  const t = text.trim();
  return FALLACY_PLACEHOLDER_PATTERNS.some((p) => t.includes(p));
}

const FALLACY_CODON_EN: Record<string, FallacyCodonEntry> = {
  'Ad Hominem': {
    beginner:
      'Ad hominem means "against the person." The speaker attacks the person making the argument (their character, job, past, or habits) instead of replying to the argument itself. The argument might be good or bad regardless of who said it.',
    intermediate:
      'Ad hominem is an informal fallacy of relevance: the premise (something about the person) does not support the conclusion (that their claim is false). Criticizing someone\'s character, credentials, or behavior does not logically show that their reasoning is wrong. To evaluate an argument, you must look at the reasons and evidence offered, not at who is speaking.',
    expert:
      'Ad hominem (argumentum ad hominem) is a relevance fallacy. The argument has the form: "Person P has trait T; therefore P\'s claim C is false." The premise is irrelevant to the truth of C—character and circumstances do not entail the falsity of a proposition. Variants include abusive (direct insult), circumstantial (motive/interest), and tu quoque (you too). Proper critique requires engaging with the argument\'s structure and evidence. Distinguish from legitimate appeals to expertise when the person\'s credibility is genuinely relevant (e.g., testimony).',
  },
  'Appeal to Authority': {
    beginner:
      'The speaker uses someone famous or in charge as proof that a claim is true. But being famous or having a title does not make them an expert on that topic. We need real evidence, not just a name.',
    intermediate:
      'Appeal to authority becomes fallacious when the authority is not a relevant expert on the subject, or when we treat their opinion as if it were proof. A psychologist is not an authority on hot tubs; a religious leader is not an authority on physics. Even real experts can be wrong, so authority supports a claim only when the domain and the evidence are appropriate.',
    expert:
      'Argumentum ad verecundiam: using an authority\'s say-so as evidence for a claim. Fallacious when (1) the authority is not an expert in the relevant domain, (2) the claim is outside their expertise, (3) experts in the field disagree and the appeal ignores that, or (4) the authority is treated as infallible. Legitimate use of authority requires relevance of domain, consensus or cited evidence, and absence of conflict of interest. Distinguish from appropriate deference to expertise in testimony and peer-reviewed research.',
  },
  'Appeal to Popularity': {
    beginner:
      'The speaker says something must be true or good because many people believe it or do it. But lots of people can be wrong. Popularity is not the same as evidence.',
    intermediate:
      'Appeal to popularity (ad populum) treats the fact that many people believe or do X as evidence that X is true or right. Beliefs and behavior can be widespread and still false or harmful. To support a claim, we need reasons and evidence, not head counts. This fallacy is common in advertising and social pressure.',
    expert:
      'Argumentum ad populum: inferring the truth or acceptability of a claim from its widespread acceptance. The premise "many people believe P" does not entail P; consensus can be mistaken (e.g., historical false beliefs). Variants include bandwagon (everyone does it), snob appeal (elite do it), and appeal to tradition (we\'ve always done it). Epistemic justification requires evidence and reasoning, not mere social proof. Distinguish from legitimate uses of consensus in practical coordination or when consensus reflects aggregated expertise.',
  },
  'Appeal to Tradition': {
    beginner:
      'The speaker says we should keep doing something because we have always done it that way. But being old or traditional does not make something right or best. We need reasons, not just habit.',
    intermediate:
      'Appeal to tradition treats the age or longevity of a practice as a reason to keep it. Tradition can carry wisdom, but it does not by itself justify a practice; we need to look at the evidence and consequences. Societies have traditionally held many beliefs we now reject. Progress often requires questioning tradition.',
    expert:
      'Argumentum ad antiquitatem: justifying a practice or belief by its historical continuity. The premise "we have always done P" does not entail "P is correct or optimal." Tradition may encode useful norms but can also preserve error, injustice, or inefficiency. Critical evaluation requires assessing the practice on its merits. Distinguish from legitimate appeals to precedent in law or to accumulated practical knowledge when accompanied by reasons.',
  },
  'Appeal to Novelty': {
    beginner:
      'The speaker says something must be better or true just because it is new or modern. New is not always better. We need to look at what actually works, not just what is latest.',
    intermediate:
      'Appeal to novelty (antiquity\'s mirror) treats newness as a reason to prefer a product, idea, or practice. Innovation can be valuable, but novelty alone does not establish superiority. Many new things fail; many old things remain sound. Evaluate claims and options on their merits, not on when they appeared.',
    expert:
      'Argumentum ad novitatem: inferring that something is better or true because it is recent or novel. The premise "X is new" does not entail "X is superior or correct." Chronology is irrelevant to truth or value without further argument. Common in marketing and tech culture. Distinguish from legitimate preference for newer evidence or updated methods when supported by comparative reasoning.',
  },
  'Straw Man': {
    beginner:
      'The speaker changes or exaggerates the other person\'s view to make it easier to attack. They knock down a fake, weaker version instead of the real argument.',
    intermediate:
      'Straw man is a misrepresentation fallacy: you replace the opponent\'s actual position with a distorted, weaker, or extreme version, then refute that. The real argument is left untouched. Good criticism requires engaging with the strongest version of the other view (principle of charity).',
    expert:
      'Straw man: refuting a distorted or exaggerated version of an opponent\'s position instead of their actual claim. Violates the principle of charity (interpret others\' arguments in their strongest form). The refutation is irrelevant to the original argument. Variants include hollow man (inventing a view no one holds), steelman (opposite—strengthening the view). Essential in dialectic: attack the actual premises and structure, not a caricature.',
  },
  'False Dilemma': {
    beginner:
      'The speaker says there are only two choices (e.g. "either X or Y") when there are actually more options. Often one option is made to look bad so you feel forced to pick the other.',
    intermediate:
      'False dilemma (false dichotomy, either-or fallacy) presents a limited set of options as if they were exhaustive. In reality, there may be middle grounds, alternatives, or combined options. The arguer often makes one option unattractive to push you toward the other. Look for excluded middle or hidden alternatives.',
    expert:
      'False dilemma / false dichotomy: restricting the set of options to two (or few) when more exist. Form: "Either A or B; not A; therefore B." Fallacious when A and B are not exhaustive (there are C, D, ...). Related: the perfectionist fallacy (reject X because X is not perfect). Distinguish from genuine dichotomies (e.g., true/false when the law of excluded middle applies). Critical response: identify the missing options or the continuum between the presented poles.',
  },
  'Red Herring': {
    beginner:
      'The speaker brings up a different, often emotional or distracting topic instead of answering the original point. The real issue gets lost.',
    intermediate:
      'Red herring is a relevance fallacy: introducing a side issue that diverts attention from the original claim or argument. The new topic may be interesting or emotionally charged but does not address the question. To stay on track, keep the original issue in focus and ask how the reply supports or refutes it.',
    expert:
      'Red herring: introducing an irrelevant topic that diverts the discussion from the original issue. The premise may be true but is not relevant to the conclusion. Distinct from ignoratio elenchi (missing the point) in that the diversion is deliberate or negligent. Dialectical failure: the burden of proof or the thesis is shifted. Analyze by restating the original claim and checking whether the response bears on it.',
  },
  'Slippery Slope': {
    beginner:
      'The speaker says one small step will lead to a chain of bad results, without showing why each step must happen. They jump from "we do A" to "then disaster" without proof.',
    intermediate:
      'Slippery slope argues that a first step will inevitably lead to extreme consequences. The fallacy is that the links in the chain are not justified: each step needs a reason. Sometimes slopes are real (precedent, norms); often they are speculative. Ask for the mechanism that makes each step necessary.',
    expert:
      'Slippery slope: claiming that allowing A will necessarily lead to B, then C, then unacceptable Z, without adequate justification for the causal or normative links. The argument often relies on vague fear rather than showing that each transition is likely or inevitable. Distinguish from valid sorites-style reasoning when stepwise conditionals are established. Critical response: demand evidence for each link and consider whether the slope is empirical or conceptual.',
  },
  'Hasty Generalization': {
    beginner:
      'The speaker draws a big conclusion from too few examples or from examples that are not typical. One or a few cases do not prove a rule for everyone or everything.',
    intermediate:
      'Hasty generalization (converse accident) infers a general claim from insufficient or unrepresentative samples. The sample may be too small, biased, or not diverse enough. Statistical and scientific reasoning require appropriate sample size and representativeness. Be wary of "I know someone who..." or "this one case shows..." as proof of a general claim.',
    expert:
      'Hasty generalization: inferring a general proposition from a sample that is too small, unrepresentative, or biased. Violates principles of inductive reasoning: sample size, randomness, and diversity matter. Related: selection bias, anecdotal evidence, and the exception that proves the rule (misused). Distinguish from legitimate generalization when the sample is adequate and the inference is appropriately qualified.',
  },
  'Post hoc (after this, therefore because of this)': {
    beginner:
      'The speaker thinks that because one thing happened after another, the first must have caused the second. But order in time does not prove cause. Other factors might be responsible.',
    intermediate:
      'Post hoc ergo propter hoc: inferring that A caused B merely because A preceded B. Temporal sequence is necessary for causation but not sufficient. Confounding variables, coincidence, and reverse causation can explain the correlation. Causal claims require controlled evidence or well-supported causal mechanisms.',
    expert:
      'Post hoc ergo propter hoc: inferring causation from temporal succession alone. The premise "A occurred before B" does not entail "A caused B." Causal reasoning requires controlling for confounds, considering alternative explanations, and (ideally) mechanisms or experiments. Related: cum hoc (correlation conflated with causation), regression fallacy. Distinguish from legitimate causal inference when supported by evidence beyond sequence.',
  },
  'Equivocation': {
    beginner:
      'The speaker uses the same word in two different meanings in one argument. The word sounds like one idea but secretly switches to another, so the argument seems to work when it does not.',
    intermediate:
      'Equivocation occurs when a key term is used in two different senses in the same argument, so that the conclusion appears to follow but the shift in meaning does the work. Clear reasoning requires that terms keep a single, consistent meaning throughout. Identify the ambiguous word and clarify which sense is used in each premise.',
    expert:
      'Equivocation: using a term in two or more senses in an argument while treating it as univocal. Form: "A is F (sense 1). F things are G (sense 2). Therefore A is G." The syllogism is invalid because the middle term is not used in the same sense. Fallacy of ambiguity. Resolution: disambiguate and restate; the argument will either become invalid or require a premise that is false or unjustified.',
  },
  'Cum hoc': {
    beginner:
      'The speaker treats two things that happen together as if one must cause the other. But just because two things go together does not mean one causes the other; there might be a common cause, or it might be coincidence.',
    intermediate:
      'Cum hoc (with this, therefore because of this) confuses correlation with causation. Two events or traits may be associated without one causing the other: third factors, reverse causation, or chance can explain the link. Causal claims need more than co-occurrence—they need a mechanism or controlled evidence.',
    expert:
      'Cum hoc ergo propter hoc: inferring causation from correlation alone. The premise "A and B occur together" does not entail "A causes B" or "B causes A." Confounds (common cause, selection bias), reverse causation, and coincidence can produce spurious correlation. Controlled studies, temporal order, and mechanistic reasoning are needed for causal inference. Related: post hoc (temporal order mistaken for cause), Simpson\'s paradox.',
  },
  'No fallacy': {
    beginner:
      'Sometimes an argument is logically okay even if we disagree with the conclusion. The speaker gave reasons that support their claim. "No fallacy" means the reasoning is acceptable, not that the conclusion is true.',
    intermediate:
      '"No fallacy" indicates that the argument does not commit a clear logical error: the premises are relevant, the structure is valid or inductively reasonable, and there is no obvious rhetorical trick. The conclusion may still be false if the premises are false or the inference is weak. Distinguish "bad argument" from "fallacious argument."',
    expert:
      '"No fallacy" (or "no relevant fallacy") means the argument does not exhibit a recognized fallacy type. The reasoning may be valid (deductive) or cogent (inductive), and premises may be relevant. The conclusion can still be false—soundness and truth require true premises. In multiple-fallacy contexts, "no fallacy" may mean no single dominant fallacy, or that the argument is acceptable. Avoid the fallacy fallacy: rejecting a conclusion solely because the argument is bad.',
  },
  'Affirming the Consequent': {
    beginner:
      'The speaker mixes up "if A then B" with "if B then A." When we know B is true, they wrongly conclude A must be true. Example: "If it rains, the ground is wet. The ground is wet, so it rained." But the sprinkler could have made it wet.',
    intermediate:
      'Affirming the consequent confuses sufficiency with necessity. Form: If P then Q; Q; therefore P. Q being true does not prove P—other causes could give Q. The conditional "P → Q" says P is sufficient for Q, not that Q is sufficient for P. Valid modus ponens requires affirming the antecedent (P); affirming the consequent (Q) is invalid.',
    expert:
      'Affirming the consequent: invalid inference from conditional. Form: P → Q; Q; ∴ P. The consequent Q being true does not entail the antecedent P. The premise P → Q establishes P as sufficient for Q, not necessary; Q may have other causes (e.g. ground wet from sprinkler). Formal fallacy: the logical form is invalid regardless of content. Related: denying the antecedent (invalid ¬P, ¬Q inference). Valid conditional inferences: modus ponens (P, P→Q ∴ Q) and modus tollens (¬Q, P→Q ∴ ¬P).',
  },
  'Denying the Antecedent': {
    beginner:
      'The speaker wrongly says that because the "if" part is false, the "then" part must be false. Example: "If it rains, the ground is wet. It didn\'t rain, so the ground isn\'t wet." But the sprinkler could have made it wet.',
    intermediate:
      'Denying the antecedent: invalid inference. Form: If P then Q; not P; therefore not Q. P being false does not entail Q is false—Q may have other sufficient causes. The conditional only says P is sufficient for Q, not that P is necessary. Valid modus tollens requires denying the consequent (not Q); denying the antecedent (not P) is invalid.',
    expert:
      'Denying the antecedent: invalid conditional inference. Form: P → Q; ¬P; ∴ ¬Q. The antecedent P being false does not entail the consequent Q is false. P → Q states P is sufficient for Q; Q may have other sufficient causes. Formal fallacy. Related: affirming the consequent (invalid Q, ∴ P). Valid: modus tollens (¬Q, P→Q ∴ ¬P) denies the consequent, not the antecedent.',
  },
  'Undistributed Middle': {
    beginner:
      'A syllogism uses a middle term that does not connect the other two terms correctly. The conclusion does not follow because the middle term is not used in a way that links the premises to the conclusion.',
    intermediate:
      'Undistributed middle: invalid syllogism. The middle term (shared in both premises) must be "distributed" (refer to all members of its class) in at least one premise for the inference to be valid. When the middle term is undistributed in both premises, the premises do not establish the required connection for the conclusion. Classic example: All A are B; All C are B; therefore All A are C—invalid because B may have non-overlapping subsets.',
    expert:
      'Undistributed middle: syllogistic fallacy. The middle term appears in both premises but is undistributed (does not refer to its entire class) in both. A term is distributed in universal affirmative (All S are P) as subject, in universal negative (No S are P) in both positions. Invalid form: All A are M; All C are M; ∴ All A are C—M may have disjoint subsets A and C. Distribution rules ensure the middle term connects the extremes. Related formal syllogistic fallacies: illicit major, illicit minor, four terms.',
  },
  'Amphiboly': {
    beginner:
      'The sentence is grammatically ambiguous—it could mean more than one thing. The arguer exploits that ambiguity to support a conclusion. Example: "I saw the man with the telescope" — who had the telescope?',
    intermediate:
      'Amphiboly is ambiguity in grammatical structure rather than word meaning. A sentence admits multiple parses, and the arguer trades on the ambiguity. "Prostitutes appeal to the Pope" could mean prostitutes petition the Pope or something appeals to prostitutes about the Pope. Clear reasoning requires disambiguating the structure before drawing conclusions.',
    expert:
      'Amphiboly: structural ambiguity—a sentence has multiple grammatical interpretations. Distinct from equivocation (word-meaning ambiguity). The fallacy exploits the ambiguity to make an invalid inference appear valid. Resolution: disambiguate by rephrasing or adding punctuation, then evaluate each reading. Related: equivocation, accent (stress-induced ambiguity). In legal and contractual contexts, the rule against drafting ambiguities (contra proferentem) addresses similar exploitation.',
  },
  'Appeal to Emotion': {
    beginner:
      'The speaker uses strong feelings (fear, pity, anger, pride) instead of giving good reasons. Emotions can cloud judgment. We need evidence and logic, not just feelings.',
    intermediate:
      'Appeal to emotion tries to persuade by triggering feelings rather than offering reasons. Fear, pity, guilt, pride, or outrage may be stirred to make a claim seem plausible without argument. Emotions are not evidence; sound reasoning requires premises that support the conclusion. Identify the emotional appeal and ask what reasons support the claim.',
    expert:
      'Argumentum ad passiones: using emotional response as a substitute for argument. Fallacious when feelings (fear, pity, indignation, pride) are invoked instead of evidence or logic. Legitimate appeals to emotion may accompany valid argument (e.g. in rhetoric) but cannot replace it. Critical response: separate the emotional content from the logical structure and evaluate the latter. Related: appeal to pity, appeal to fear, appeal to ridicule.',
  },
  'Appeal to Fear': {
    beginner:
      'The speaker scares you to make you agree. "If you don\'t do X, something bad will happen." Fear is not a reason—we need evidence that the threat is real and that X prevents it.',
    intermediate:
      'Appeal to fear uses scare tactics to pressure acceptance of a claim. The arguer threatens negative consequences rather than providing evidence. The threat may be exaggerated, irrelevant, or unsupported. Evaluate whether the threat is credible and whether the proposed action actually addresses it.',
    expert:
      'Argumentum ad baculum (appeal to force) or appeal to fear: using fear or threat to secure assent. Fallacious when the threat substitutes for argument—the fear may be real but does not logically support the conclusion. Distinguish from legitimate warnings supported by evidence. Critical response: demand evidence for the threat and the causal link between the recommended action and avoiding it.',
  },
  'Appeal to Ignorance': {
    beginner:
      'The speaker says something must be true because no one has proven it false (or false because no one has proven it true). Lack of proof is not proof.',
    intermediate:
      'Appeal to ignorance (argumentum ad ignorantiam): inferring that a claim is true because it has not been proven false, or false because it has not been proven true. Absence of evidence is not evidence of absence. The burden of proof matters: the one making the claim typically must support it. Unfalsifiable claims are especially problematic.',
    expert:
      'Argumentum ad ignorantiam: inferring truth or falsity from the absence of proof. Form: "No one has proven ¬P; therefore P" (or vice versa). The premise does not entail the conclusion—lack of disproof is not proof. Burden of proof: positive claims typically require positive evidence. Unfalsifiable claims (e.g. invisible unicorns) cannot be settled by this appeal. Related: burden of proof, shifting the burden.',
  },
  'Appeal to Incredulity': {
    beginner:
      'The speaker says "I can\'t imagine how that could be true, so it must be false." Personal difficulty understanding something does not make it false.',
    intermediate:
      'Appeal to incredulity rejects a claim because the arguer finds it hard to believe or imagine. Cognitive limits do not establish truth or falsity. Many well-supported claims (quantum mechanics, evolution) are counterintuitive. The proper response is to examine the evidence, not to rely on what feels plausible.',
    expert:
      'Argumentum ad ignorantiam (personal incredulity variant): "I cannot imagine P; therefore ¬P." The arguer\'s failure to conceive of P does not entail P\'s falsity. Cognitive and imaginative limits are irrelevant to truth. Many established scientific claims were once "inconceivable." Critical response: evaluate the evidence for P independently of intuitive plausibility.',
  },
  'Cherry Picking': {
    beginner:
      'The speaker picks only the evidence that supports their view and ignores the rest. Like showing only your best photos. We need to look at all the evidence, not just the convenient bits.',
    intermediate:
      'Cherry picking (suppressed evidence, selection bias) selects only favorable data while ignoring unfavorable data. The sample is biased by design. Valid conclusions require considering all relevant evidence. Ask what evidence might have been omitted and whether it would change the conclusion.',
    expert:
      'Cherry picking: selectively presenting evidence that supports a conclusion while omitting countervailing evidence. Violates principles of inductive reasoning: the sample must be representative. Related: confirmation bias, suppressed evidence, Texas Sharpshooter Fallacy. In scientific and legal contexts, suppression of relevant evidence undermines the argument. Critical response: demand full disclosure and consider what is missing.',
  },
  'Begging the Question': {
    beginner:
      'The argument assumes what it is trying to prove. The conclusion is hidden inside the premises. Example: "The Bible is true because God says so in the Bible."',
    intermediate:
      'Begging the question (petitio principii) uses the conclusion (or something equivalent to it) as a premise. The argument is circular: it does not provide independent support. The conclusion may be restated in different words or assumed implicitly. To evaluate, ask whether the premises could be accepted without already believing the conclusion.',
    expert:
      'Petitio principii: the conclusion (or something tantamount to it) appears as a premise. The argument is circular and provides no independent justification. Form: "P because P" or "P because Q, and Q because P." Distinct from valid deductive arguments where the conclusion follows from distinct premises. Related: circular reasoning, complex question. Resolution: identify the smuggled conclusion and demand independent support.',
  },
  'Loaded Question': {
    beginner:
      'The question already assumes something controversial. "Have you stopped beating your wife?" assumes you used to beat her. You cannot answer yes or no without accepting the assumption.',
    intermediate:
      'Loaded question (complex question, many questions) embeds a presupposition that the respondent may not accept. Any direct answer commits the respondent to the hidden assumption. The question needs to be broken down: first establish whether the presupposition is true, then ask the intended question.',
    expert:
      'Loaded question (plurium interrogationum): a question that presupposes a contested claim. Answering "yes" or "no" implies accepting the presupposition. Example: "Have you stopped beating your wife?" presupposes past abuse. Resolution: refuse to answer the question as asked; challenge the presupposition first. Related: begging the question, complex question. In cross-examination and surveys, loaded questions can bias responses.',
  },
  'Suppressed Evidence': {
    beginner:
      'The speaker leaves out important facts that would weaken their argument. A one-sided picture is not the full truth. We need to consider what might be missing.',
    intermediate:
      'Suppressed evidence (card stacking) omits relevant facts that would undermine the conclusion. The arguer presents only favorable evidence. Critical evaluation requires asking what relevant information might be omitted. In science and law, disclosure of contrary evidence is essential.',
    expert:
      'Suppressed evidence: omitting relevant evidence that would weaken or contradict the conclusion. Violates the requirement of total evidence: all relevant data should be considered. Related: cherry picking, confirmation bias. In formal contexts (peer review, legal discovery), suppression can constitute misconduct. Critical response: identify what evidence would be relevant and whether it has been addressed.',
  },
  'Confirmation Bias': {
    beginner:
      'The tendency to notice and remember things that support what we already believe, and to overlook things that contradict it. We all do this—the key is to look for evidence that might prove us wrong.',
    intermediate:
      'Confirmation bias is the tendency to seek, interpret, and remember information in a way that confirms preexisting beliefs. We give more weight to confirming evidence and discount disconfirming evidence. Overcoming it requires actively seeking counterevidence and considering alternative explanations.',
    expert:
      'Confirmation bias: cognitive tendency to favor information that confirms existing beliefs. Affects hypothesis testing (seeking confirmation rather than falsification), interpretation (ambiguous evidence read as confirming), and memory (recalling confirming instances). Mitigation: consider the opposite, seek disconfirming evidence, use structured evaluation. Related: availability heuristic, motivated reasoning.',
  },
  'Hindsight Bias': {
    beginner:
      'Looking back, we think we "knew it all along." After an event, it seems obvious—but before it happened, we did not know. This can make us overconfident in our judgment.',
    intermediate:
      'Hindsight bias ("I knew it all along") is the tendency to believe, after an outcome is known, that one would have predicted it. We reconstruct the past to fit what we now know. This distorts learning and accountability. Proper evaluation requires assessing what was knowable before the event.',
    expert:
      'Hindsight bias: retrospective distortion in which known outcomes are judged to have been more predictable than they were. Form: "After E, I would have predicted E." Affects legal judgment (negligence), historical analysis, and learning. Mitigation: record predictions in advance; evaluate reasoning at the time of decision. Related: outcome bias, creeping determinism.',
  },
  'Weak Analogy': {
    beginner:
      'The speaker compares two things that are not alike in the ways that matter. A weak analogy treats superficial similarities as if they proved something. Example: "Employees are like nails—you have to hit them on the head to make them work."',
    intermediate:
      'Weak analogy (false analogy, faulty analogy) compares two things that differ in relevant respects. The analogy may be vivid but the relevant similarities are absent or superficial. Analogical arguments require that the compared things share the features that support the inference. Identify the claimed similarity and ask whether it actually holds.',
    expert:
      'Weak analogy: an analogical argument in which the compared items lack relevant similarity. Form: "A is like B; B has property P; therefore A has P." The inference is only as strong as the analogy. Critical questions: Do A and B share the relevant properties? Are there relevant disanalogies? Related: false equivalence, false dichotomy. Legitimate analogies require substantial relevant similarity.',
  },
  'Anecdotal Fallacy': {
    beginner:
      'The speaker uses a single story or personal experience instead of proper evidence. One example does not prove a rule. "My grandfather smoked and lived to 97" does not show smoking is safe.',
    intermediate:
      'Anecdotal fallacy relies on a personal story or isolated case as if it were sufficient evidence for a general claim. Anecdotes can be vivid but are often unrepresentative. Scientific and statistical reasoning require systematic evidence: sample size, representativeness, and controls. Ask what would count as proper evidence.',
    expert:
      'Anecdotal fallacy: using a single case or personal testimony as sufficient evidence for a general conclusion. Violates principles of inductive reasoning: one instance (or few) does not establish a pattern. Related: hasty generalization, confirmation bias, availability heuristic. Legitimate use of testimony requires corroboration and representativeness.',
  },
  'Availability Heuristic': {
    beginner:
      'The speaker or we ourselves judge how likely something is by how easily examples come to mind. Vivid or recent events seem more common than they are. Plane crashes get news; car crashes are more frequent.',
    intermediate:
      'Availability heuristic: estimating probability or frequency by how readily instances come to mind. Salient, recent, or emotionally charged events are over-weighted. Media coverage and personal experience skew availability. Proper assessment requires base rates and systematic data, not ease of recall.',
    expert:
      'Availability heuristic: a cognitive shortcut that substitutes ease of retrieval for frequency or probability. Fallacious when availability is driven by salience, recency, or emotional impact rather than actual prevalence. Mitigation: seek base rates, consider selection effects in what we encounter. Related: representativeness heuristic, anchoring, illusory correlation.',
  },
  'Base Rate Fallacy': {
    beginner:
      'The speaker ignores how common or rare something is in the general population. A positive test for a rare disease may still mean you probably don\'t have it—because the disease is so rare.',
    intermediate:
      'Base rate fallacy (base rate neglect): ignoring prior probability when updating with new evidence. Even a highly accurate test for a rare condition can yield mostly false positives if the base rate is low. Bayesian reasoning requires combining prior and likelihood. Ask: how common is this in the population?',
    expert:
      'Base rate fallacy: neglecting prior (base rate) probability when interpreting diagnostic or conditional evidence. Form: P(H|E) depends on P(H) and P(E|H); ignoring P(H) leads to inflated P(H|E). Classic: rare disease, 99% accurate test—most positives are false positives. Related: prosecutor\'s fallacy, representativeness heuristic. Proper inference: Bayes\' theorem.',
  },
  'Circular Reasoning': {
    beginner:
      'The argument goes in a circle: the conclusion is used to support itself. "The Bible is true because God says so in the Bible." That does not prove anything—it assumes what it claims.',
    intermediate:
      'Circular reasoning (begging the question in one sense) uses the conclusion, or something equivalent to it, as a premise. The argument offers no independent support. Often the circularity is hidden by rephrasing. To detect it, ask: could someone who doubts the conclusion accept the premises?',
    expert:
      'Circular reasoning: the conclusion appears as or is entailed by a premise, so the argument provides no independent justification. Form: P because Q, and Q because P. Distinct from valid deductive arguments where premises are independently supported. Related: begging the question (petitio principii). Resolution: demand a premise that does not presuppose the conclusion.',
  },
  'Composition Fallacy': {
    beginner:
      'The speaker assumes what is true of the parts must be true of the whole. "Each player is excellent, so the team must be unbeatable." But the whole can have emergent properties—or fail to combine well.',
    intermediate:
      'Composition fallacy: inferring that a whole has a property because its parts do. Atoms are invisible; humans are made of atoms; therefore humans are invisible—invalid. Properties of parts do not always transfer to the whole (emergence, interaction effects). The reverse error is the division fallacy.',
    expert:
      'Composition fallacy: invalid inference from parts to whole. Form: Each part of X has P; therefore X has P. Invalid when P does not compose (e.g. visibility, liquidity) or when the whole has emergent properties. Related: division fallacy (whole to parts). Legitimate composition: when the property is additive or otherwise compositional.',
  },
  'Division Fallacy': {
    beginner:
      'The speaker assumes what is true of the whole must be true of each part. "The USA is wealthy, so every American is wealthy." The whole can have properties the parts lack (or vice versa).',
    intermediate:
      'Division fallacy: inferring that a part has a property because the whole does. Water is liquid; H2O molecules are part of water; therefore H2O molecules are liquid—invalid. Emergent properties of the whole do not apply to parts. The reverse error is the composition fallacy.',
    expert:
      'Division fallacy: invalid inference from whole to parts. Form: X has P; part Y of X; therefore Y has P. Invalid when P is an emergent or collective property (e.g. liquidity, wealth distribution). Related: composition fallacy (parts to whole). Legitimate division: when the property distributes over the parts.',
  },
  'Continuum Fallacy': {
    beginner:
      'The speaker says that because there is no sharp line between two things, they must be the same. "You can\'t say when healthy becomes unhealthy, so there\'s no difference." Gradual change does not erase real distinctions.',
    intermediate:
      'Continuum fallacy (sorites fallacy, line-drawing fallacy): arguing that because a boundary is vague or arbitrary, no distinction exists. "Where do you draw the line?" does not show the distinction is meaningless. Many real distinctions have fuzzy borders. Recognize that vagueness does not entail identity.',
    expert:
      'Continuum fallacy: inferring that because there is no precise cutoff between A and B on a continuum, A and B are indistinguishable. The sorites paradox (one grain is not a heap; adding one does not make a heap; therefore no heaps) exploits vagueness. Response: vague predicates can still mark real differences; higher-order vagueness does not collapse distinctions.',
  },
  'False Attribution': {
    beginner:
      'The speaker appeals to a source that is vague, irrelevant, or made up. "I read somewhere that..." or "Experts say..." without naming who or where. We need verifiable, relevant sources.',
    intermediate:
      'False attribution: citing an irrelevant, unqualified, unidentified, biased, or fabricated source. Anonymous experts, hearsay, and vague references do not support a claim. Proper evidence requires identified, relevant, credible sources. Ask: who said it, and are they qualified on this topic?',
    expert:
      'False attribution: appealing to an inappropriate or fabricated source. Fallacious when the source is (1) unidentified, (2) not an expert in the relevant domain, (3) biased, or (4) invented. Legitimate appeal to authority requires cited, qualified, and relevant experts. Related: appeal to authority (proper vs. improper use).',
  },
  'False Balance': {
    beginner:
      'The speaker treats two sides as equally valid when the evidence strongly favors one. Giving equal time to a scientist and a conspiracy theorist does not mean both are equally right.',
    intermediate:
      'False balance: presenting opposing views as more balanced than the evidence warrants. Journalistic "both sides" can mislead when one side has little or no evidence. Legitimate balance requires proportional weighting of evidence. Ask: what does the evidence actually show?',
    expert:
      'False balance: artificially balancing opposing views when the epistemic weight is asymmetric. "Both sides" framing can distort when one position lacks evidence or is fringe. Distinct from legitimate acknowledgment of genuine controversy. In science and law, evidence-based weighting matters. Related: false equivalence, appeal to moderation.',
  },
  'False Equivalence': {
    beginner:
      'The speaker treats two things as equally bad or equally good when they are not. "Both sides do it" may hide that one side does it far more, or in worse ways. Degrees matter.',
    intermediate:
      'False equivalence: treating significantly different things as if they were equivalent. "Politicians on both sides lie" may ignore differences in frequency, severity, or context. Equivalence claims require comparable evidence. Ask: are the cases actually comparable in the relevant respects?',
    expert:
      'False equivalence: asserting that two things are equivalent when they differ in relevant, significant ways. Degree, context, and consequences matter. Related: false balance, moral equivalence. Legitimate equivalence requires comparable evidence across relevant dimensions. Critical response: identify the disanalogies.',
  },
  'Fallacy Fallacy': {
    beginner:
      'The speaker says "Your argument has a fallacy, so your conclusion must be wrong." But a bad argument can still have a true conclusion. We need to evaluate the claim on its own evidence.',
    intermediate:
      'Fallacy fallacy (argumentum ad logicam): rejecting a conclusion solely because the argument for it is fallacious. A conclusion can be true even if the argument is bad—the arguer may have hit the right conclusion for the wrong reason. Evaluate the conclusion on its merits.',
    expert:
      'Fallacy fallacy: inferring that a conclusion is false because the argument for it is fallacious. Form: "The argument for P is bad; therefore ¬P." Invalid: soundness requires valid reasoning plus true premises; invalidity of one argument does not refute the conclusion. The conclusion may be supported by other arguments or evidence. Critical response: assess the conclusion independently.',
  },
  'Genetic Fallacy': {
    beginner:
      'The speaker rejects a claim because of where it came from—its origin, history, or who said it—instead of whether it is true. "That idea came from X, so it must be wrong." The source does not determine the truth.',
    intermediate:
      'Genetic fallacy: judging a claim by its origin or history rather than its content or evidence. "Hitler liked dogs" does not make liking dogs bad. "That idea is old" does not make it false. Evaluate claims on their merits, not their pedigree. The origin can be relevant to credibility but does not settle truth.',
    expert:
      'Genetic fallacy: evaluating a claim by its genesis (source, history, psychological origin) rather than its content or evidence. Form: "P originated from X; X is bad; therefore ¬P." Invalid: origin does not entail truth or falsity. Related: ad hominem (attack on person, not argument). Origin may be relevant to credibility in testimony but not to logical validity.',
  },
  'Guilt by Association': {
    beginner:
      'The speaker discredits someone or something by linking them to people or things that are disliked. "He knows that person, so he must be bad." Association is not proof of guilt.',
    intermediate:
      'Guilt by association: attacking a person, group, or view by linking them to something negative. The association may be real but does not establish guilt, bad character, or falsity. Evaluate the person or claim on its own merits. Related to ad hominem and poisoning the well.',
    expert:
      'Guilt by association: arguing that X is bad or wrong because X is associated with Y, and Y is bad. Form: "X is linked to Y; Y is bad; therefore X is bad." Invalid: association does not transfer guilt or falsity. Variants: "friends with bad people," "supported by group Z." Related: ad hominem circumstantial, poisoning the well.',
  },
  'Halo Effect': {
    beginner:
      'The speaker (or we) assume that because someone is good at one thing, they must be good at others. Or the reverse: one bad trait makes everything about them seem bad. One trait does not determine all traits.',
    intermediate:
      'Halo effect: a cognitive bias in which our overall impression of a person (positive or negative) influences our judgment of their specific traits. We generalize from one salient attribute. "He\'s attractive, so he must be smart." Or: "She made one mistake, so she\'s incompetent." Separate judgments; each trait needs its own evidence.',
    expert:
      'Halo effect: cognitive bias in which global evaluation (e.g. likability, attractiveness) influences ratings of specific attributes. Positive halo: one positive trait inflates others. Negative halo (horn effect): one negative trait deflates others. Mitigation: judge each dimension independently; use structured evaluation. Related: stereotyping, representativeness heuristic.',
  },
  "Historian's Fallacy": {
    beginner:
      'The speaker judges past decisions using knowledge that did not exist back then. "They should have known" — but they could not have. We must evaluate past actions with what was known at the time.',
    intermediate:
      "Historian's fallacy: assessing past decisions or beliefs using present-day knowledge. Historical actors did not have the information we have. \"They should have seen the crash coming\" ignores that they lacked our hindsight. Proper historical evaluation requires epistemic parity: judge with the information available then.",
    expert:
      "Historian's fallacy: anachronistic evaluation of past beliefs or actions using knowledge unavailable at the time. Form: \"Given what we now know, they should have done X.\" Invalid: historical actors were not epistemically positioned as we are. Related: hindsight bias, outcome bias. Legitimate criticism requires that the relevant information was available then.",
  },
  'Hot Hand Fallacy': {
    beginner:
      'The speaker (or we) believe that a streak of success will continue. "He\'s on fire, he\'ll make the next shot." Past success does not guarantee future success—each event can be independent.',
    intermediate:
      'Hot hand fallacy: believing that a run of successes (or failures) predicts the next outcome when the events are independent. In basketball, a streak of made shots may be random variation; the next shot\'s probability may not be elevated. Distinguish from cases where momentum or skill actually affects outcomes.',
    expert:
      'Hot hand fallacy: inferring non-independence from a streak when outcomes are statistically independent. In games of chance or skill with random variation, past results do not change future probabilities. Related: gambler\'s fallacy (opposite error—expecting regression after a streak). The "hot hand" in sports may exist but requires careful statistical testing to separate from randomness.',
  },
  'Post Hoc': {
    beginner:
      'The speaker thinks that because one thing happened after another, the first must have caused the second. "I wore my lucky socks and we won—the socks caused the win." Order in time does not prove cause.',
    intermediate:
      'Post hoc ergo propter hoc: inferring that A caused B merely because A preceded B. Temporal sequence is necessary for causation but not sufficient. Confounding variables, coincidence, and reverse causation can explain the correlation. Causal claims require controlled evidence or well-supported mechanisms.',
    expert:
      'Post hoc ergo propter hoc: inferring causation from temporal succession alone. The premise "A occurred before B" does not entail "A caused B." Causal reasoning requires controlling for confounds, considering alternatives, and (ideally) mechanisms. Related: cum hoc, regression fallacy. Valid causal inference needs evidence beyond sequence.',
  },
  "Prosecutor's Fallacy": {
    beginner:
      'The speaker confuses "the probability of evidence given guilt" with "the probability of guilt given evidence." A match on DNA may be rare, but the chance you are guilty given the match depends on other facts too.',
    intermediate:
      "Prosecutor's fallacy (base rate fallacy in legal context): conflating P(E|G)—probability of evidence if guilty—with P(G|E)—probability of guilt given evidence. A rare DNA match does not by itself mean the defendant is probably guilty; base rates and alternative explanations matter. Bayesian reasoning applies.",
    expert:
      "Prosecutor's fallacy: transposing the conditional—treating P(E|G) as if it were P(G|E). Form: 'The probability of this evidence if the defendant were innocent is 1 in a million; therefore the defendant is guilty.' Invalid: P(G|E) = P(E|G)·P(G)/P(E); the prior P(G) and P(E) matter. Related: defense attorney's fallacy (understating probative value). Proper use: Bayes' theorem.",
  },
  'Texas Sharpshooter Fallacy': {
    beginner:
      'The speaker draws the target after shooting—picking a pattern or cluster after seeing the data, then acting as if they predicted it. "Look how these points cluster!" But they chose where to look after the fact.',
    intermediate:
      'Texas sharpshooter fallacy: selecting a target or pattern after the data are in, then treating it as if it were a prediction. Clusters in random data are inevitable; finding one and highlighting it is not evidence. Avoid data snooping; specify hypotheses in advance.',
    expert:
      'Texas sharpshooter fallacy: retrospective pattern-fitting—choosing boundaries or groupings after observing data to maximize apparent significance. Violates the requirement of pre-registered hypotheses. In epidemiology, clustering illusions; in data mining, overfitting. Related: cherry picking, confirmation bias. Proper inference: test pre-specified hypotheses; correct for multiple comparisons.',
  },
  'Appeal to Pity': {
    beginner:
      'The speaker tries to win the argument by making you feel sorry for them or someone else. "Give me a break; I had a rough childhood." Pity is not evidence—we need reasons.',
    intermediate:
      'Appeal to pity (argumentum ad misericordiam): using sympathy, guilt, or sorrow to secure assent instead of evidence. Emotional appeal may be legitimate in some contexts (e.g. sentencing) but does not establish truth. Evaluate the claim on its merits; pity is irrelevant to truth.',
    expert:
      'Argumentum ad misericordiam: invoking pity, sympathy, or guilt to support a conclusion. Fallacious when emotional response substitutes for argument. Legitimate in normative contexts (e.g. mercy in sentencing) but not for factual claims. Related: appeal to emotion, appeal to consequences. Critical response: separate emotional appeal from logical structure.',
  },
  'Gish Gallop': {
    beginner:
      'The speaker overwhelms you with a rapid fire of weak or false claims. There are too many to refute one by one, so it looks like they are winning. Quantity does not replace quality.',
    intermediate:
      'Gish gallop: flooding the opponent with many weak arguments in rapid succession, making thorough rebuttal impractical. Each claim may be easily refuted, but the volume creates the impression of strength. Response: demand focus on the strongest claim, or systematically address them.',
    expert:
      'Gish gallop: rhetorical tactic of overwhelming with many weak arguments to make rebuttal impractical. Named after creationist Duane Gish. Fallacious: the number of arguments does not substitute for their strength. Dialectical response: isolate the strongest claim, refuse to chase moving targets, or systematically rebut. Related: spreading (debate tactic), firehose of falsehoods.',
  },
  'Appeal to Consequences': {
    beginner:
      'The speaker says a claim must be true (or false) because of its consequences. "We can\'t accept this theory—it would be terrible if it were true." Consequences do not determine truth.',
    intermediate:
      'Appeal to consequences (argumentum ad consequentiam): judging a claim by its desirable or undesirable consequences rather than evidence. "P would have bad consequences; therefore ¬P" is invalid. Wishful thinking and fear can motivate this fallacy. Evaluate claims on evidence, not on what we want to be true.',
    expert:
      'Argumentum ad consequentiam: inferring truth or falsity from the consequences of a claim. Form: "If P then bad; therefore ¬P" (or "If P then good; therefore P"). Invalid: consequences do not determine truth. Related: appeal to fear, wishful thinking, moralistic fallacy. Legitimate: normative arguments about what we should do given consequences—but that does not establish factual truth.',
  },
  'Appeal to Moderation': {
    beginner:
      'The speaker says the middle position must be right just because it is in the middle. "Both sides are extreme; the truth must be in between." Compromise is not always correct.',
    intermediate:
      'Appeal to moderation (false compromise, middle ground fallacy): assuming the middle position between two extremes is correct simply because it is moderate. One side may be right and the other wrong; the middle may be wrong. Evaluate each position on its merits.',
    expert:
      'Argumentum ad temperantiam: inferring that a position is correct because it is a compromise between extremes. Invalid: moderation does not entail truth. Sometimes one extreme is right (e.g. "Earth is flat" vs "Earth is round"—the middle is wrong). Related: false balance, false equivalence. Legitimate compromise: in practical coordination, not in establishing truth.',
  },
  'Naturalistic Fallacy': {
    beginner:
      'The speaker says that because something is natural (or unnatural), it must be good (or bad). "It\'s natural, so it\'s healthy." "It\'s artificial, so it\'s bad." Natural does not mean good.',
    intermediate:
      'Naturalistic fallacy: inferring an "ought" from an "is"—deriving values from facts about nature. "X is natural; therefore X is good" is invalid. Nature includes disease, predation, and suffering. What is natural is a separate question from what is desirable.',
    expert:
      'Naturalistic fallacy (Moore): invalidly deriving "ought" from "is"—inferring normative conclusions from descriptive premises about nature. "X is natural; therefore X is good" conflates descriptive and normative. Related: appeal to nature, moralistic fallacy (reverse: "ought" from "is" in the opposite direction). Hume\'s law: one cannot derive normative conclusions from purely descriptive premises.',
  },
  'No True Scotsman': {
    beginner:
      'The speaker changes the definition to avoid a counterexample. "No Scotsman would do that." "But Angus did." "Well, no true Scotsman would." They are moving the goalposts.',
    intermediate:
      'No true Scotsman: redefining a category to exclude counterexamples, protecting a generalization from refutation. The arguer makes the claim unfalsifiable by adjusting the criteria whenever a counterexample appears. The "true" member test becomes circular.',
    expert:
      'No true Scotsman: an ad hoc redefinition of a category to immunize a generalization from counterexamples. Form: "All F are G." Counterexample: "X is F and not G." Response: "Then X is not a true F." The redefinition is motivated solely to save the claim. Related: special pleading, moving the goalposts. Resolution: demand independent, non-circular criteria for category membership.',
  },
  'Poisoning the Well': {
    beginner:
      'The speaker tries to discredit a person or source before they speak, so you reject what they say in advance. "Don\'t listen to her—she\'s one of them." Prejudicing the audience is not an argument.',
    intermediate:
      'Poisoning the well: attempting to discredit a source in advance so that their arguments are rejected regardless of merit. The arguer pre-loads the audience against the opponent. Related to ad hominem but prospective rather than reactive. Evaluate arguments on their merits, not on prior bias against the speaker.',
    expert:
      'Poisoning the well: undermining a source in advance to predispose the audience to reject their arguments. Fallacious: the argument\'s merit is independent of the speaker\'s prior reputation when that reputation is irrelevant. Related: ad hominem, guilt by association. Legitimate: when the source\'s credibility is genuinely relevant (e.g. known fabricator). Resolution: evaluate the argument independently.',
  },
  'Special Pleading': {
    beginner:
      'The speaker applies a rule to others but makes an exception for themselves (or their side) without a good reason. "Rules are for everyone else, but my case is different." Double standards are unfair.',
    intermediate:
      'Special pleading: applying a standard to others while exempting oneself or one\'s group without justification. The exemption is arbitrary or self-serving. Fair reasoning requires consistent application of principles. Ask: what justifies the exception? Would we accept the same exemption for others?',
    expert:
      'Special pleading: claiming an unwarranted exception to a rule or principle. Form: "Rule R applies to X, but not to me (or us) because [ad hoc reason]." The exemption is motivated by self-interest rather than principled distinction. Related: no true Scotsman, moving the goalposts. Resolution: demand a principled, generalizable justification for the exception.',
  },
  'Moving the Goalposts': {
    beginner:
      'The speaker keeps changing what would count as proof or success, so the other side can never "win." You meet their demand, then they ask for something else. The target keeps shifting.',
    intermediate:
      'Moving the goalposts: changing the criteria for success or proof after they have been met. The arguer shifts the standard so that no evidence can satisfy them. This makes the debate unfalsifiable. Insist on fixed, agreed criteria before evaluating evidence.',
    expert:
      'Moving the goalposts: revising the standards for acceptance or proof after they have been met. Dialectical failure: the burden is never discharged because the target moves. Related: special pleading, no true Scotsman, continuum fallacy. Resolution: establish criteria in advance; refuse to accept ad hoc escalation of demands.',
  },
  'Wishful Thinking': {
    beginner:
      'The speaker (or we) believe something is true because we want it to be true. "It must work—I really need it to." Wanting something does not make it so.',
    intermediate:
      'Wishful thinking: believing a claim because one desires it to be true rather than because of evidence. Desire and truth are independent. Evaluate claims on evidence, not on what we hope. The reverse—believing something false because we fear it—is also fallacious.',
    expert:
      'Wishful thinking: inferring that a claim is true (or false) because one wants it to be. Form: "I want P; therefore P" (or "I fear P; therefore ¬P"). Invalid: desire does not determine truth. Related: appeal to consequences, motivated reasoning, confirmation bias. Critical response: separate epistemic evaluation from practical preference.',
  },
  "Gambler's Fallacy": {
    beginner:
      "The speaker thinks that past results affect future random events. \"Reds have come up five times, so black is due.\" In fair games of chance, each spin or roll is independent—the past does not change the odds.",
    intermediate:
      "Gambler's fallacy: believing that past outcomes in a random process affect future outcomes. After a run of one result, the other is 'due.' In independent trials (coins, dice, roulette), past results do not change probabilities. Each trial has the same odds regardless of history.",
    expert:
      "Gambler's fallacy: inferring non-independence in a random process from a streak. Form: 'A has occurred n times; therefore ¬A is due.' Invalid for independent trials: P(A) is constant. Related: hot hand fallacy (opposite error—believing streaks continue). The Monte Carlo fallacy (1913 roulette) is a classic example. Proper inference: recognize independence in fair random processes.",
  },
  'Appeal to Nature': {
    beginner:
      'The speaker says something is good (or bad) because it is natural (or unnatural). "It\'s natural, so it\'s healthy." Nature is not a guide to value—many natural things are harmful.',
    intermediate:
      'Appeal to nature: inferring that something is good because it is natural, or bad because it is artificial. "Natural" and "good" are not the same; nature includes disease, poison, and predation. Evaluate claims on evidence, not on whether something is natural or synthetic.',
    expert:
      'Appeal to nature: inferring normative conclusions from descriptive claims about naturalness. Form: "X is natural; therefore X is good" (or "X is artificial; therefore X is bad"). Invalid: naturalness does not entail value. Related: naturalistic fallacy. Many natural substances are harmful; many artificial ones are beneficial.',
  },
  'Appeal to Flattery': {
    beginner:
      'The speaker tries to win you over with compliments instead of reasons. "You\'re so smart—surely you agree." Being praised does not make a claim true.',
    intermediate:
      'Appeal to flattery: using praise or flattery to secure assent instead of evidence. The arguer strokes the audience\'s ego to lower resistance. Evaluate the claim on its merits; compliments are irrelevant to truth.',
    expert:
      'Argumentum ad captandum (benevolent): using flattery or ingratiation to persuade. Fallacious when praise substitutes for argument. Related: appeal to vanity, appeal to pride. Legitimate: acknowledging expertise when relevant. Critical response: separate flattery from logical structure.',
  },
  'Appeal to Ridicule': {
    beginner:
      'The speaker mocks an argument or idea to dismiss it. "That\'s ridiculous!" Ridicule is not a refutation—even silly-sounding claims can be true or false based on evidence.',
    intermediate:
      'Appeal to ridicule: dismissing a claim by mocking it rather than addressing its substance. Mockery may be emotionally persuasive but does not establish falsity. Evaluate the argument on its merits; humor is not evidence.',
    expert:
      'Appeal to ridicule (reductio ad ridiculum, misused): rejecting a claim by presenting it in a ridiculous light. Fallacious when ridicule substitutes for argument. Legitimate reductio: showing that a claim entails an absurd consequence. Related: straw man (caricature), appeal to emotion.',
  },
  'Sunk Cost Fallacy': {
    beginner:
      'The speaker (or we) continue investing in something because we have already spent time or money on it. "I\'ve come this far—I can\'t quit now." Past costs cannot be recovered; only future costs and benefits matter.',
    intermediate:
      'Sunk cost fallacy: letting past investments (time, money, effort) influence future decisions. Sunk costs are gone; they should not affect whether to continue. Rational choice considers only marginal future costs and benefits. "Throwing good money after bad" perpetuates the error.',
    expert:
      'Sunk cost fallacy: irrationally continuing a course of action because of resources already invested. Form: "I have invested X in A; therefore I should continue A." Invalid: past costs are sunk; only future costs and benefits are relevant. Related: escalation of commitment, loss aversion. Rational decision: ignore sunk costs; consider only forward-looking alternatives.',
  },
  'Dunning-Kruger Effect': {
    beginner:
      'People who know little about a topic sometimes feel very confident, while experts may doubt themselves. The less you know, the less you see what you don\'t know.',
    intermediate:
      'Dunning-Kruger effect: a cognitive bias in which people with low ability in a domain overestimate their competence, while experts may underestimate theirs. Incompetence includes the inability to recognize incompetence. Humility and calibration improve with genuine expertise.',
    expert:
      'Dunning-Kruger effect: metacognitive failure where low performers overestimate and high performers may underestimate their ability. Unskilled individuals lack the competence to accurately self-assess. Mitigation: seek feedback, calibrate against objective standards. Related: illusory superiority, impostor syndrome.',
  },
  'Planning Fallacy': {
    beginner:
      'The speaker (or we) underestimate how long a task will take or how much it will cost. "This will only take an hour." We are often too optimistic about our own projects.',
    intermediate:
      'Planning fallacy: systematically underestimating the time, cost, or risk of future tasks. We focus on the best-case scenario and neglect past experience. Use reference class forecasting: how long did similar projects take?',
    expert:
      'Planning fallacy: systematic bias toward underestimating task duration, cost, or complexity. Related to optimism bias and neglect of base rates. Mitigation: use outside view (reference class), add buffer, track past accuracy. Classic: students underestimating essay completion time.',
  },
  'Spotlight Fallacy': {
    beginner:
      'The speaker assumes others pay more attention to us than they do. "Everyone will notice my mistake." We overestimate how much we are in the spotlight.',
    intermediate:
      'Spotlight effect: overestimating how much others notice or care about our appearance, behavior, or mistakes. We are the center of our own world but not of others\'. Most people are focused on themselves. Calibration reduces social anxiety.',
    expert:
      'Spotlight effect: cognitive bias in which people overestimate the extent to which others notice and evaluate them. Related to illusion of transparency (overestimating how well others read our mental state). Mitigation: recognize that others are largely self-focused; recalibrate social anxiety.',
  },
  'Non Sequitur': {
    beginner:
      'The conclusion does not follow from the premises. The argument jumps to a conclusion that is not supported. "I like blue, so we should vote for her." The link is missing.',
    intermediate:
      'Non sequitur: an argument in which the conclusion does not follow from the premises. The inference is invalid—there is a logical gap. "It does not follow" captures the flaw. Identify the missing premise or logical connection.',
    expert:
      'Non sequitur: an argument whose conclusion does not follow from its premises. Form: premises P1, P2, ...; therefore C—but C is not entailed or supported by the premises. Broad category; many specific fallacies are non sequiturs. Resolution: demand the missing premise or logical link.',
  },
  'Regression Fallacy': {
    beginner:
      'The speaker attributes a return to normal as an effect of an intervention. "She was sick, took the remedy, and got better—the remedy worked." Improvement might be natural fluctuation; extreme events tend to regress toward the mean.',
    intermediate:
      'Regression fallacy: attributing cause to an intervention when the outcome is natural regression to the mean. After an extreme value, the next measurement is likely closer to average—with or without treatment. Confounds cause and natural variation.',
    expert:
      'Regression fallacy: misattributing regression to the mean as a causal effect. After an extreme outcome, subsequent outcomes tend to be less extreme (regression to the mean). Interpreting this as evidence for an intervention is fallacious. Related: post hoc, placebo effect. Controlled studies separate regression from treatment effect.',
  },
  'Kettle Logic': {
    beginner:
      'The speaker gives several contradictory excuses or reasons for the same thing. "I never borrowed it; it was broken when I got it; and I returned it in perfect condition." The reasons cannot all be true.',
    intermediate:
      'Kettle logic: offering multiple mutually contradictory justifications for the same claim or action. Freud\'s example: the borrower who denies borrowing, says it was broken when received, and claims to have returned it intact. At least two must be false.',
    expert:
      'Kettle logic (Freud\'s Kettle): advancing contradictory defenses for the same claim. Form: "P; Q; R" where P, Q, R are mutually inconsistent. Fallacious: they cannot all support the conclusion. Related: inconsistency, special pleading. Resolution: demand a single, coherent justification.',
  },
  'Nirvana Fallacy': {
    beginner:
      'The speaker rejects a solution because it is not perfect. "This policy won\'t solve everything, so we shouldn\'t do it." Perfection is not required; we compare real options, not ideals.',
    intermediate:
      'Nirvana fallacy (perfect solution fallacy): rejecting a solution because it does not achieve an ideal outcome. "X is imperfect; therefore we should not do X" ignores that alternatives may be worse. Compare options on the margin, not against an unattainable ideal.',
    expert:
      'Nirvana fallacy: rejecting a realistic option because it falls short of a perfect solution. Form: "X does not achieve ideal I; therefore X is wrong." Invalid: comparative evaluation requires comparing feasible alternatives. Related: false dilemma (rejecting X because X is not the only option). Resolution: compare X to its actual alternatives.',
  },
  'Bare Assertion Fallacy': {
    beginner:
      'The speaker states a claim without giving any evidence or reason. "It\'s true because I say so." Assertion is not argument.',
    intermediate:
      'Bare assertion: stating a claim without supporting evidence or argument. The arguer simply declares the conclusion. To evaluate, we need reasons. Ask: what evidence or reasoning supports this?',
    expert:
      'Bare assertion fallacy: presenting a claim as if it were self-evident or established without providing argument or evidence. Form: "P" (with no premises). Fallacious when P is controversial and needs support. Related: proof by assertion, circular reasoning. Resolution: demand premises and evidence.',
  },
  'Incomplete Comparison': {
    beginner:
      'The speaker compares two things without specifying what is being compared or on what basis. "Brand X is better." Better at what? Than what? Comparisons need clear terms.',
    intermediate:
      'Incomplete comparison: claiming one thing is better, faster, or more without specifying the basis of comparison or the alternatives. "X is superior" is meaningless without: superior in what respect? Compared to what? Demand the missing terms.',
    expert:
      'Incomplete comparison: a comparative claim that omits the dimension of comparison or the compared items. Form: "X is better" (no tertium comparationis, no Y). Fallacious: the claim is too vague to evaluate. Resolution: specify the respect and the alternatives.',
  },
  'Moralistic Fallacy': {
    beginner:
      'The speaker says that because something ought to be a certain way, it must be that way. "War ought not to exist, so human nature must be peaceful." Ought does not imply is.',
    intermediate:
      'Moralistic fallacy: inferring that the world is a certain way because it ought to be. "X ought to be; therefore X is" confuses norm and fact. Desirable and actual are different. The reverse of naturalistic fallacy.',
    expert:
      'Moralistic fallacy: invalidly inferring "is" from "ought"—concluding that the world conforms to our values. Form: "X ought to be; therefore X is." Invalid: values do not determine facts. Related: naturalistic fallacy (reverse direction). Hume\'s law: normative premises do not entail descriptive conclusions.',
  },
  'Attacking the Evidence': {
    beginner:
      'The speaker attacks the source or presentation of evidence rather than the evidence itself. "That study is from a biased source—ignore it." Discrediting the messenger does not refute the message.',
    intermediate:
      'Attacking the evidence (or its source): discrediting the bearer or format of evidence instead of addressing its content. The source may be flawed, but the evidence may still be valid. Evaluate the evidence on its merits; ad hominem against the source is not sufficient.',
    expert:
      'Attacking the evidence: diverting criticism from the content of evidence to its source, format, or presentation. Fallacious when the attack on the source substitutes for engagement with the evidence. Related: ad hominem, poisoning the well. Legitimate: when source credibility is genuinely relevant (e.g. known fabricator).',
  },
  'Selection Bias': {
    beginner:
      'The speaker (or study) chooses data in a way that skews the result. Only surveying supporters to gauge support. The sample is not representative.',
    intermediate:
      'Selection bias: selecting data, participants, or cases in a way that systematically distorts the conclusion. Survivorship bias (only successful cases), non-response bias, and cherry picking are forms. Representative sampling is required for valid generalization.',
    expert:
      'Selection bias: systematic error introduced by how data or participants are selected. Non-random selection can produce spurious associations. Forms: survivorship bias, ascertainment bias, Berkson\'s paradox. Related: cherry picking, confirmation bias. Mitigation: random sampling, pre-registered criteria.',
  },
  'Illusory Correlation': {
    beginner:
      'The speaker (or we) perceive a connection between two things when none exists, or overestimate a weak one. "I always get a cold when I\'m stressed." Coincidence and confirmation bias can create false patterns.',
    intermediate:
      'Illusory correlation: perceiving a relationship between variables when none exists, or overestimating a weak relationship. Salient pairings (e.g. minority + negative outcome) are especially prone. Statistical evidence is needed to establish real associations.',
    expert:
      'Illusory correlation: cognitive bias in which people perceive a correlation between variables when none exists or overestimate its strength. Driven by salience, small samples, and confirmation bias. Related: apophenia, Texas sharpshooter. Mitigation: seek statistical evidence, consider base rates.',
  },
  'Burden of Proof': {
    beginner:
      'The speaker shifts the burden of proof unfairly. "Prove that ghosts don\'t exist." The person making the claim usually has to support it—we don\'t have to disprove every possibility.',
    intermediate:
      'Burden of proof (shifting): placing the obligation to prove or disprove on the wrong party. The one who asserts a positive claim typically bears the burden. "Prove me wrong" can be fallacious when the speaker has made the claim. Know who must support what.',
    expert:
      'Burden of proof: the obligation to provide evidence for a claim. Fallacious shifting: demanding that the opponent disprove an assertion the arguer has made. General principle: he who asserts must prove. Related: appeal to ignorance. In legal contexts, presumption of innocence places burden on prosecution.',
  },
  'Proof by Assertion': {
    beginner:
      'The speaker repeats a claim as if repetition makes it true. "It\'s true. It\'s true. I\'m telling you it\'s true." Repeating something does not prove it.',
    intermediate:
      'Proof by assertion: treating repeated assertion as evidence. The arguer states the claim again and again instead of providing support. Repetition creates familiarity but not truth. Demand reasons, not restatements.',
    expert:
      'Proof by assertion: attempting to establish a claim by repeatedly asserting it. Form: "P. P. P." with no premises. Fallacious: assertion does not constitute proof. Related: bare assertion, argumentum ad nauseam. Resolution: demand independent evidence or argument.',
  },
  'Reification': {
    beginner:
      'The speaker treats an abstract idea as if it were a concrete thing. "Society decided" or "The market wants." Society and the market are abstractions, not agents that decide.',
    intermediate:
      'Reification: treating an abstract concept as if it were a concrete object or agent. "History will judge" or "Justice demands"—concepts do not act. Reification can obscure causal explanations and attributions.',
    expert:
      'Reification: fallacy of treating an abstract concept as a concrete entity or agent. Form: "X (abstract) does Y" as if X were an actor. Related: hypostatization, anthropomorphism. Legitimate: personification in rhetoric when understood as metaphor. Resolution: identify the actual agents or mechanisms.',
  },
  'Ecological Fallacy': {
    beginner:
      'The speaker assumes that what is true of a group must be true of individuals in it. "This neighborhood votes Democratic, so this person must be a Democrat." Group-level data does not apply to individuals.',
    intermediate:
      'Ecological fallacy: inferring individual-level relationships from group-level data. A correlation at the aggregate level (e.g. regions, neighborhoods) does not hold for individuals. Simpson\'s paradox and aggregation effects can reverse relationships.',
    expert:
      'Ecological fallacy: inferring from group-level (ecological) data to individuals. Form: "Group G has property P; individual I is in G; therefore I has P." Invalid: aggregate statistics do not distribute to members. Related: Simpson\'s paradox, atomistic fallacy (reverse). Resolution: use individual-level data for individual inference.',
  },
  'Thought-Terminating Cliché': {
    beginner:
      'The speaker uses a catchy phrase to shut down thought or discussion. "It is what it is." "That\'s just the way it is." These phrases stop inquiry instead of answering the question.',
    intermediate:
      'Thought-terminating cliché: a stock phrase used to end reflection or debate without addressing the issue. "Everybody knows that" or "There\'s no point arguing." Such phrases substitute for argument.',
    expert:
      'Thought-terminating cliché: a phrase that serves to halt critical thought or discussion. Often used to enforce conformity or avoid engagement. Related: appeal to tradition, argumentum ad populum. Resolution: refuse to accept the cliché; demand substantive argument.',
  },
  'False Memories': {
    beginner:
      'The speaker (or we) recall something that did not happen or recall it incorrectly. Memory is reconstructive—we can falsely remember events, details, or sources. We need corroboration, not just memory.',
    intermediate:
      'False memory: remembering events or details that did not occur, or recalling them incorrectly. Memory is reconstructive; suggestion, expectation, and repetition can create false memories. Corroboration and documentation matter.',
    expert:
      'False memory: a memory of an event that did not occur or is substantially distorted. Reconstruction, suggestion (especially in questioning), and imagination inflation can produce false memories. Related: confirmation bias, source confusion. Implications for eyewitness testimony and recovered memories.',
  },
  'Package Deal Fallacy': {
    beginner:
      'The speaker treats a bundle of claims as if you must accept or reject all of them together. "If you support X, you must support Y and Z too." You can accept some parts and reject others.',
    intermediate:
      'Package deal fallacy: treating multiple claims as an indivisible unit. The arguer insists you must accept or reject the whole bundle. Separate evaluation: each claim needs its own evidence. Reject the packaging; evaluate each claim independently.',
    expert:
      'Package deal fallacy: bundling claims so that acceptance or rejection is all-or-nothing. Form: "P, Q, R; therefore accept all or reject all." Invalid: claims can be independently true or false. Related: false dilemma, guilt by association. Resolution: unbundle; evaluate each claim separately.',
  },
};

const FALLACY_CODON_FR: Record<string, FallacyCodonEntry> = {
  'Ad Hominem': {
    beginner:
      "L'ad hominem signifie « contre la personne ». L'orateur attaque la personne qui avance l'argument (son caractère, son emploi, son passé ou ses habitudes) au lieu de répondre à l'argument lui-même. L'argument peut être bon ou mauvais indépendamment de qui le dit.",
    intermediate:
      "L'ad hominem est un sophisme informel de pertinence : la prémisse (quelque chose sur la personne) ne soutient pas la conclusion (que son affirmation est fausse). Critiquer le caractère, les diplômes ou le comportement de quelqu'un ne montre pas logiquement que son raisonnement est faux. Pour évaluer un argument, il faut examiner les raisons et les preuves avancées, pas qui parle.",
    expert:
      "L'argumentum ad hominem est un sophisme de pertinence. La forme est : « La personne P a le trait T ; donc la thèse C de P est fausse. » La prémisse est non pertinente pour la vérité de C — le caractère et les circonstances n'impliquent pas la fausseté d'une proposition. Variantes : abusif (insulte directe), circonstanciel (mobile/intérêt), tu quoque (toi aussi). Une critique correcte exige d'engager la structure et les preuves de l'argument. Distinguer des appels légitimes à l'expertise quand la crédibilité est pertinente (témoignage).",
  },
  'Appeal to Authority': {
    beginner:
      "L'orateur invoque une personne célèbre ou en position d'autorité comme preuve qu'une affirmation est vraie. Mais être célèbre ou avoir un titre ne fait pas d'eux un expert sur ce sujet. Il faut des preuves réelles, pas seulement un nom.",
    intermediate:
      "L'appel à l'autorité devient fallacieux quand l'autorité n'est pas une experte pertinente sur le sujet, ou quand on traite son avis comme une preuve. Un psychologue n'est pas une autorité sur les spas ; un leader religieux n'est pas une autorité en physique. Même les vrais experts peuvent se tromper ; l'autorité ne soutient une thèse que lorsque le domaine et les preuves sont appropriés.",
    expert:
      "Argumentum ad verecundiam : utiliser le dire d'une autorité comme preuve d'une affirmation. Fallacieux quand (1) l'autorité n'est pas experte dans le domaine pertinent, (2) l'affirmation sort de son expertise, (3) les experts du domaine divergent et l'appel l'ignore, ou (4) l'autorité est traitée comme infaillible. Un usage légitime de l'autorité exige la pertinence du domaine, le consensus ou des preuves citées, et l'absence de conflit d'intérêt. Distinguer du recours approprié à l'expertise dans le témoignage et la recherche.",
  },
  'Appeal to Popularity': {
    beginner:
      "L'orateur dit qu'une chose doit être vraie ou bonne parce que beaucoup de gens y croient ou la font. Mais beaucoup de gens peuvent se tromper. La popularité n'est pas une preuve.",
    intermediate:
      "L'appel à la popularité (ad populum) traite le fait que beaucoup de gens croient ou font X comme preuve que X est vrai ou juste. Les croyances et les comportements peuvent être répandus et pourtant faux ou nuisibles. Pour soutenir une affirmation, il faut des raisons et des preuves, pas des comptages. Ce sophisme est courant en publicité et dans la pression sociale.",
    expert:
      "Argumentum ad populum : inférer la vérité ou l'acceptabilité d'une affirmation à partir de son acceptation généralisée. La prémisse « beaucoup de gens croient P » n'implique pas P ; le consensus peut être erroné. Variantes : effet de mode, snob, appel à la tradition. La justification épistémique exige des preuves et un raisonnement, pas seulement une preuve sociale. Distinguer des usages légitimes du consensus dans la coordination pratique ou quand le consensus reflète une expertise agrégée.",
  },
  'Appeal to Tradition': {
    beginner:
      "L'orateur dit qu'il faut continuer à faire quelque chose parce qu'on l'a toujours fait ainsi. Mais être ancien ou traditionnel ne rend pas une chose juste ou meilleure. Il faut des raisons, pas seulement l'habitude.",
    intermediate:
      "L'appel à la tradition traite l'ancienneté d'une pratique comme une raison de la conserver. La tradition peut porter une sagesse, mais elle ne justifie pas à elle seule une pratique ; il faut examiner les preuves et les conséquences. Les sociétés ont traditionnellement tenu des croyances que nous rejetons aujourd'hui. Le progrès exige souvent de questionner la tradition.",
    expert:
      "Argumentum ad antiquitatem : justifier une pratique ou une croyance par sa continuité historique. La prémisse « nous avons toujours fait P » n'implique pas « P est correct ou optimal ». La tradition peut encoder des normes utiles mais aussi préserver l'erreur, l'injustice ou l'inefficacité. L'évaluation critique exige d'apprécier la pratique sur ses mérites. Distinguer des appels légitimes au précédent en droit ou au savoir pratique accumulé quand des raisons sont données.",
  },
  'Appeal to Novelty': {
    beginner:
      "L'orateur dit qu'une chose doit être meilleure ou vraie simplement parce qu'elle est nouvelle ou moderne. Nouveau n'est pas toujours mieux. Il faut regarder ce qui fonctionne vraiment, pas seulement ce qui est le plus récent.",
    intermediate:
      "L'appel à la nouveauté (miroir de l'antiquité) traite la nouveauté comme une raison de préférer un produit, une idée ou une pratique. L'innovation peut être précieuse, mais la nouveauté seule n'établit pas la supériorité. Beaucoup de choses nouvelles échouent ; beaucoup d'anciennes restent valables. Évaluez les affirmations et les options sur leurs mérites, pas sur leur date d'apparition.",
    expert:
      "Argumentum ad novitatem : inférer qu'une chose est meilleure ou vraie parce qu'elle est récente ou nouvelle. La prémisse « X est nouveau » n'implique pas « X est supérieur ou correct ». La chronologie est non pertinente pour la vérité ou la valeur sans argument supplémentaire. Courant en marketing et dans la culture tech. Distinguer de la préférence légitime pour des preuves plus récentes ou des méthodes mises à jour quand un raisonnement comparatif les soutient.",
  },
  'Straw Man': {
    beginner:
      "L'orateur modifie ou exagère la position de l'autre pour la rendre plus facile à attaquer. Il renverse une version fausse et affaiblie au lieu du vrai argument.",
    intermediate:
      "L'homme de paille est un sophisme de déformation : on remplace la position réelle de l'adversaire par une version déformée, plus faible ou extrême, puis on réfute celle-ci. L'argument réel reste intact. Une bonne critique exige d'engager la version la plus forte de l'autre position (principe de charité).",
    expert:
      "Homme de paille : réfuter une version déformée ou exagérée de la position de l'adversaire au lieu de sa thèse réelle. Viole le principe de charité (interpréter les arguments d'autrui dans leur forme la plus forte). La réfutation est non pertinente pour l'argument original. Variantes : homme creux (inventer une position que personne ne tient), steelman (renforcer la position). Essentiel en dialectique : attaquer les prémisses et la structure réelles, pas une caricature.",
  },
  'False Dilemma': {
    beginner:
      "L'orateur prétend qu'il n'y a que deux choix (par ex. « soit X soit Y ») alors qu'il en existe d'autres. Souvent une option est présentée comme mauvaise pour forcer le choix de l'autre.",
    intermediate:
      "La fausse dichotomie (dilemme fallacieux) présente un ensemble limité d'options comme si elles étaient exhaustives. En réalité, il peut y avoir des positions intermédiaires, des alternatives ou des combinaisons. L'orateur rend souvent une option peu attrayante pour pousser vers l'autre. Cherchez le tiers exclu ou les alternatives cachées.",
    expert:
      "Fausse dichotomie : restreindre les options à deux (ou peu) alors qu'il en existe davantage. Forme : « Soit A soit B ; pas A ; donc B. » Fallacieux quand A et B ne sont pas exhaustifs (il existe C, D, ...). Lié : le sophisme du perfectionniste (rejeter X parce que X n'est pas parfait). Distinguer des vraies dichotomies (vrai/faux quand le tiers exclu s'applique). Réponse critique : identifier les options manquantes ou le continuum entre les pôles présentés.",
  },
  'Red Herring': {
    beginner:
      "L'orateur introduit un autre sujet, souvent émotionnel ou distracteur, au lieu de répondre au point initial. La vraie question est perdue de vue.",
    intermediate:
      "Le contre-feu (red herring) est un sophisme de pertinence : introduire une question secondaire qui détourne l'attention de la thèse ou de l'argument d'origine. Le nouveau sujet peut être intéressant ou chargé émotionnellement mais ne traite pas la question. Pour rester sur le sujet, gardez la question initiale en tête et demandez comment la réponse la soutient ou la réfute.",
    expert:
      "Red herring : introduire un sujet non pertinent qui détourne la discussion de la question d'origine. La prémisse peut être vraie mais n'est pas pertinente pour la conclusion. Distinct de l'ignoratio elenchi en ce que la diversion est délibérée ou négligente. Échec dialectique : la charge de la preuve ou la thèse est déplacée. Analyser en reformulant la thèse initiale et en vérifiant si la réponse y répond.",
  },
  'Slippery Slope': {
    beginner:
      "L'orateur affirme qu'un petit pas mènera à une chaîne de résultats négatifs, sans montrer pourquoi chaque pas doit arriver. Il saute de « on fait A » à « puis catastrophe » sans preuve.",
    intermediate:
      "La pente glissante soutient qu'une première étape mènera inévitablement à des conséquences extrêmes. Le sophisme est que les maillons de la chaîne ne sont pas justifiés : chaque pas exige une raison. Parfois la pente est réelle (précédent, normes) ; souvent elle est spéculative. Demandez le mécanisme qui rend chaque pas nécessaire.",
    expert:
      "Pente glissante : prétendre qu'autoriser A mènera nécessairement à B, puis C, puis à un Z inacceptable, sans justification adéquate des liens causaux ou normatifs. L'argument s'appuie souvent sur une crainte vague plutôt que sur la démonstration que chaque transition est probable ou inévitable. Distinguer d'un raisonnement sorites valide quand les conditionnels par étapes sont établis. Réponse critique : exiger des preuves pour chaque maillon et considérer si la pente est empirique ou conceptuelle.",
  },
  'Hasty Generalization': {
    beginner:
      "L'orateur tire une conclusion générale à partir de trop peu d'exemples ou d'exemples qui ne sont pas typiques. Un ou quelques cas ne prouvent pas une règle pour tout le monde ou tout.",
    intermediate:
      "La généralisation hâtive (accident inverse) infère une affirmation générale à partir d'un échantillon insuffisant ou non représentatif. L'échantillon peut être trop petit, biaisé ou pas assez divers. Le raisonnement statistique et scientifique exige une taille et une représentativité appropriées. Méfiez-vous du « je connais quelqu'un qui... » ou « ce cas montre... » comme preuve d'une affirmation générale.",
    expert:
      "Généralisation hâtive : inférer une proposition générale à partir d'un échantillon trop petit, non représentatif ou biaisé. Viole les principes du raisonnement inductif : la taille, le hasard et la diversité de l'échantillon comptent. Lié : biais de sélection, preuve anecdotique. Distinguer de la généralisation légitime quand l'échantillon est adéquat et l'inférence correctement qualifiée.",
  },
  'Post hoc (after this, therefore because of this)': {
    beginner:
      "L'orateur pense que parce qu'une chose s'est produite après une autre, la première a dû causer la seconde. Mais l'ordre dans le temps ne prouve pas la cause. D'autres facteurs peuvent être en jeu.",
    intermediate:
      "Post hoc ergo propter hoc : inférer que A a causé B simplement parce que A a précédé B. La succession temporelle est nécessaire pour la causalité mais pas suffisante. Les variables confondantes, la coïncidence et la causalité inversée peuvent expliquer la corrélation. Les affirmations causales exigent des preuves contrôlées ou des mécanismes bien étayés.",
    expert:
      "Post hoc ergo propter hoc : inférer la causalité à partir de la seule succession temporelle. La prémisse « A s'est produit avant B » n'implique pas « A a causé B ». Le raisonnement causal exige de contrôler les facteurs confondants, d'envisager des explications alternatives et (idéalement) des mécanismes ou expériences. Lié : cum hoc, sophisme de régression. Distinguer de l'inférence causale légitime quand elle est soutenue par des preuves au-delà de la séquence.",
  },
  'Equivocation': {
    beginner:
      "L'orateur utilise le même mot dans deux sens différents dans un même argument. Le mot donne l'impression d'une seule idée mais change secrètement de sens, donc l'argument semble tenir alors qu'il ne tient pas.",
    intermediate:
      "L'équivoque survient quand un terme clé est utilisé dans deux sens différents dans le même argument, de sorte que la conclusion semble suivre alors que le glissement de sens fait le travail. Un raisonnement clair exige que les termes gardent un sens unique et cohérent. Identifiez le mot ambigu et précisez quel sens est utilisé dans chaque prémisse.",
    expert:
      "Équivoque : utiliser un terme dans deux sens ou plus dans un argument tout en le traitant comme univoque. Forme : « A est F (sens 1). Les F sont G (sens 2). Donc A est G. » Le syllogisme est invalide car le terme moyen n'est pas utilisé dans le même sens. Sophisme d'ambiguïté. Résolution : désambiguïser et reformuler ; l'argument deviendra invalide ou exigera une prémisse fausse ou non justifiée.",
  },
  'Cum hoc': {
    beginner:
      "L'orateur traite deux choses qui se produisent ensemble comme si l'une devait causer l'autre. Mais le simple fait que deux choses aillent ensemble ne signifie pas que l'une cause l'autre ; il peut y avoir une cause commune, ou une coïncidence.",
    intermediate:
      "Cum hoc (avec ceci, donc à cause de ceci) confond corrélation et causalité. Deux événements ou traits peuvent être associés sans que l'un cause l'autre : des facteurs tiers, une causalité inversée ou le hasard peuvent expliquer le lien. Les affirmations causales exigent plus qu'une co-occurrence — un mécanisme ou des preuves contrôlées.",
    expert:
      "Cum hoc ergo propter hoc : inférer la causalité à partir de la seule corrélation. La prémisse « A et B se produisent ensemble » n'implique pas « A cause B » ou « B cause A ». Les facteurs confondants (cause commune, biais de sélection), la causalité inversée et la coïncidence peuvent produire une corrélation fallacieuse. Les études contrôlées, l'ordre temporel et le raisonnement mécanistique sont nécessaires pour l'inférence causale. Lié : post hoc, paradoxe de Simpson.",
  },
  'No fallacy': {
    beginner:
      "Parfois un argument est logiquement acceptable même si on n'est pas d'accord avec la conclusion. L'orateur a donné des raisons qui soutiennent sa thèse. « Aucun sophisme » signifie que le raisonnement est acceptable, pas que la conclusion est vraie.",
    intermediate:
      "« Aucun sophisme » indique que l'argument ne commet pas d'erreur logique claire : les prémisses sont pertinentes, la structure est valide ou inductivement raisonnable, et il n'y a pas de procédé rhétorique évident. La conclusion peut encore être fausse si les prémisses sont fausses ou l'inférence faible. Distinguer « mauvais argument » et « argument fallacieux ».",
    expert:
      "« Aucun sophisme » (ou « pas de sophisme pertinent ») signifie que l'argument ne présente pas de type de sophisme reconnu. Le raisonnement peut être valide (déductif) ou cogent (inductif), et les prémisses peuvent être pertinentes. La conclusion peut encore être fausse — la solidité et la vérité exigent des prémisses vraies. Dans des contextes multi-sophismes, « aucun sophisme » peut signifier qu'il n'y a pas de sophisme dominant unique, ou que l'argument est acceptable. Éviter le sophisme du sophisme : rejeter une conclusion uniquement parce que l'argument est mauvais.",
  },
  'Affirming the Consequent': {
    beginner:
      "L'orateur confond « si A alors B » avec « si B alors A ». Quand B est vrai, il conclut à tort que A doit être vrai. Exemple : « S'il pleut, le sol est mouillé. Le sol est mouillé, donc il a plu. » Mais l'arroseur aurait pu mouiller le sol.",
    intermediate:
      "L'affirmation du conséquent confond suffisance et nécessité. Forme : Si P alors Q ; Q ; donc P. Q étant vrai ne prouve pas P — d'autres causes peuvent produire Q. Le conditionnel « P → Q » dit que P est suffisant pour Q, pas que Q est suffisant pour P. Le modus ponens valide exige d'affirmer l'antécédent (P) ; affirmer le conséquent (Q) est invalide.",
    expert:
      "Affirmation du conséquent : inférence invalide à partir d'un conditionnel. Forme : P → Q ; Q ; ∴ P. Le conséquent Q étant vrai n'implique pas l'antécédent P. La prémisse P → Q établit P comme suffisant pour Q, pas nécessaire ; Q peut avoir d'autres causes. Sophisme formel : la forme logique est invalide quel que soit le contenu. Lié : déni de l'antécédent. Inférences conditionnelles valides : modus ponens et modus tollens.",
  },
  'Denying the Antecedent': {
    beginner:
      "L'orateur conclut à tort que parce que la partie « si » est fausse, la partie « alors » doit être fausse. Exemple : « S'il pleut, le sol est mouillé. Il n'a pas plu, donc le sol n'est pas mouillé. » Mais l'arroseur aurait pu mouiller le sol.",
    intermediate:
      "Le déni de l'antécédent : inférence invalide. Forme : Si P alors Q ; non P ; donc non Q. P étant faux n'implique pas que Q soit faux — Q peut avoir d'autres causes suffisantes. Le conditionnel dit seulement que P est suffisant pour Q, pas que P est nécessaire. Le modus tollens valide exige de nier le conséquent (non Q) ; nier l'antécédent (non P) est invalide.",
    expert:
      "Déni de l'antécédent : inférence conditionnelle invalide. Forme : P → Q ; ¬P ; ∴ ¬Q. L'antécédent P étant faux n'implique pas que le conséquent Q soit faux. P → Q indique que P est suffisant pour Q ; Q peut avoir d'autres causes suffisantes. Sophisme formel. Lié : affirmation du conséquent. Valide : modus tollens nie le conséquent, pas l'antécédent.",
  },
  'Undistributed Middle': {
    beginner:
      "Un syllogisme utilise un terme moyen qui ne relie pas correctement les deux autres termes. La conclusion ne suit pas parce que le terme moyen n'est pas utilisé de manière à lier les prémisses à la conclusion.",
    intermediate:
      "Terme moyen non distribué : syllogisme invalide. Le terme moyen (partagé dans les deux prémisses) doit être « distribué » (référer à toute sa classe) dans au moins une prémisse pour que l'inférence soit valide. Quand le terme moyen est non distribué dans les deux prémisses, elles n'établissent pas le lien requis. Exemple classique : Tous les A sont B ; tous les C sont B ; donc tous les A sont C — invalide car B peut avoir des sous-ensembles disjoints.",
    expert:
      "Terme moyen non distribué : sophisme syllogistique. Le terme moyen apparaît dans les deux prémisses mais est non distribué dans les deux. Un terme est distribué dans l'affirmative universelle comme sujet, dans la négative universelle aux deux positions. Forme invalide : Tous les A sont M ; tous les C sont M ; ∴ tous les A sont C — M peut avoir des sous-ensembles disjoints A et C. Les règles de distribution assurent que le terme moyen relie les extrêmes. Lié : sophismes syllogistiques (illicite majeure, mineure, quatre termes).",
  },
  'Amphiboly': {
    beginner:
      "La phrase est grammaticalement ambiguë — elle peut avoir plusieurs sens. L'orateur exploite cette ambiguïté pour soutenir une conclusion. Exemple : « J'ai vu l'homme avec la lunette » — qui avait la lunette ?",
    intermediate:
      "L'amphibologie est une ambiguïté de structure grammaticale plutôt que de sens des mots. Une phrase admet plusieurs analyses, et l'orateur joue sur l'ambiguïté. « Les prostituées font appel au pape » peut signifier que les prostituées sollicitent le pape ou qu'il y a un appel au pape concernant les prostituées. Un raisonnement clair exige de désambiguïser la structure avant de tirer des conclusions.",
    expert:
      "Amphibologie : ambiguïté structurelle — une phrase a plusieurs interprétations grammaticales. Distinct de l'équivoque (ambiguïté sémantique). Le sophisme exploite l'ambiguïté pour faire passer une inférence invalide pour valide. Résolution : désambiguïser en reformulant ou en ajoutant la ponctuation, puis évaluer chaque lecture. Lié : équivoque, accent.",
  },
  'Appeal to Emotion': {
    beginner:
      "L'orateur utilise des émotions fortes (peur, pitié, colère, orgueil) au lieu de donner de bonnes raisons. Les émotions peuvent brouiller le jugement. Il faut des preuves et de la logique, pas seulement des sentiments.",
    intermediate:
      "L'appel à l'émotion cherche à convaincre en suscitant des sentiments plutôt qu'en offrant des raisons. Peur, pitié, culpabilité, orgueil ou indignation peuvent être mobilisés pour faire paraître une thèse plausible sans argument. Les émotions ne sont pas des preuves ; un raisonnement solide exige des prémisses qui soutiennent la conclusion.",
    expert:
      "Argumentum ad passiones : utiliser une réaction émotionnelle comme substitut à l'argument. Fallacieux quand des sentiments (peur, pitié, indignation, orgueil) sont invoqués à la place de preuves ou de logique. Les appels légitimes à l'émotion peuvent accompagner un argument valide mais ne peuvent le remplacer.",
  },
  'Appeal to Fear': {
    beginner:
      "L'orateur vous fait peur pour vous faire accepter. « Si vous ne faites pas X, quelque chose de mal arrivera. » La peur n'est pas une raison — il faut des preuves que la menace est réelle et que X l'évite.",
    intermediate:
      "L'appel à la peur utilise des tactiques d'intimidation pour faire accepter une thèse. L'orateur menace de conséquences négatives au lieu de fournir des preuves. La menace peut être exagérée, non pertinente ou non étayée. Évaluez si la menace est crédible et si l'action proposée y répond.",
    expert:
      "Argumentum ad baculum ou appel à la peur : utiliser la peur ou la menace pour obtenir l'adhésion. Fallacieux quand la menace remplace l'argument. La peur peut être réelle mais ne soutient pas logiquement la conclusion. Distinguer des avertissements légitimes soutenus par des preuves.",
  },
  'Appeal to Ignorance': {
    beginner:
      "L'orateur dit qu'une chose doit être vraie parce que personne ne l'a prouvée fausse (ou fausse parce que personne ne l'a prouvée vraie). L'absence de preuve n'est pas une preuve.",
    intermediate:
      "L'appel à l'ignorance (argumentum ad ignorantiam) : inférer qu'une thèse est vraie parce qu'elle n'a pas été prouvée fausse, ou fausse parce qu'elle n'a pas été prouvée vraie. L'absence de preuve n'est pas preuve d'absence. La charge de la preuve incombe généralement à celui qui avance la thèse.",
    expert:
      "Argumentum ad ignorantiam : inférer la vérité ou la fausseté à partir de l'absence de preuve. Forme : « Personne n'a prouvé ¬P ; donc P. » La prémisse n'implique pas la conclusion. La charge de la preuve : les affirmations positives exigent généralement une preuve positive.",
  },
  'Appeal to Incredulity': {
    beginner:
      "L'orateur dit : « Je ne peux pas imaginer que ce soit vrai, donc c'est faux. » Le fait de ne pas comprendre personnellement quelque chose ne le rend pas faux.",
    intermediate:
      "L'appel à l'incrédulité rejette une thèse parce que l'orateur la trouve difficile à croire ou à imaginer. Les limites cognitives n'établissent pas la vérité ou la fausseté. Beaucoup de thèses bien étayées (mécanique quantique, évolution) sont contre-intuitives.",
    expert:
      "Argumentum ad ignorantiam (variante d'incrédulité personnelle) : « Je ne peux pas imaginer P ; donc ¬P. » L'incapacité de l'orateur à concevoir P n'implique pas la fausseté de P. Les limites cognitives sont non pertinentes pour la vérité.",
  },
  'Cherry Picking': {
    beginner:
      "L'orateur ne choisit que les preuves qui soutiennent son point de vue et ignore le reste. Comme ne montrer que ses meilleures photos. Il faut examiner toutes les preuves.",
    intermediate:
      "Le cherry picking (données supprimées, biais de sélection) sélectionne uniquement les données favorables en ignorant les défavorables. L'échantillon est biaisé par construction. Des conclusions valides exigent de considérer toutes les preuves pertinentes.",
    expert:
      "Cherry picking : présenter sélectivement des preuves qui soutiennent une conclusion en omettant celles qui la contredisent. Viole les principes du raisonnement inductif : l'échantillon doit être représentatif. Lié : biais de confirmation, données supprimées.",
  },
  'Begging the Question': {
    beginner:
      "L'argument suppose ce qu'il prétend prouver. La conclusion est cachée dans les prémisses. Exemple : « La Bible est vraie car Dieu le dit dans la Bible. »",
    intermediate:
      "La pétition de principe (petitio principii) utilise la conclusion (ou l'équivalent) comme prémisse. L'argument est circulaire : il ne fournit pas de soutien indépendant. La conclusion peut être reformulée ou assumée implicitement.",
    expert:
      "Petitio principii : la conclusion (ou l'équivalent) apparaît comme prémisse. L'argument est circulaire et ne fournit pas de justification indépendante. Forme : « P parce que P » ou « P parce que Q, et Q parce que P. »",
  },
  'Loaded Question': {
    beginner:
      "La question suppose déjà quelque chose de controversé. « Avez-vous arrêté de battre votre femme ? » suppose que vous la battiez. Vous ne pouvez répondre oui ou non sans accepter la présupposition.",
    intermediate:
      "La question piège (question complexe) intègre une présupposition que le répondant peut ne pas accepter. Toute réponse directe engage le répondant sur l'hypothèse cachée. La question doit être décomposée : d'abord établir si la présupposition est vraie.",
    expert:
      "Question piège (plurium interrogationum) : une question qui présuppose une thèse contestée. Répondre « oui » ou « non » implique d'accepter la présupposition. Exemple : « Avez-vous arrêté de battre votre femme ? » présuppose des violences passées.",
  },
  'Suppressed Evidence': {
    beginner:
      "L'orateur omet des faits importants qui affaibliraient son argument. Une image à sens unique n'est pas la vérité complète. Il faut considérer ce qui pourrait manquer.",
    intermediate:
      "Les données supprimées (card stacking) omettent des faits pertinents qui contrediraient la conclusion. L'orateur ne présente que les preuves favorables. L'évaluation critique exige de demander quelles informations pertinentes pourraient être omises.",
    expert:
      "Données supprimées : omettre des preuves pertinentes qui affaibliraient ou contrediraient la conclusion. Viole l'exigence de preuve totale : toutes les données pertinentes doivent être considérées. Lié : cherry picking, biais de confirmation.",
  },
  'Confirmation Bias': {
    beginner:
      "La tendance à remarquer et retenir ce qui confirme nos croyances existantes, et à négliger ce qui les contredit. Nous le faisons tous — la clé est de chercher des preuves qui pourraient nous contredire.",
    intermediate:
      "Le biais de confirmation est la tendance à chercher, interpréter et retenir l'information de façon à confirmer des croyances préexistantes. Nous accordons plus de poids aux preuves confirmantes et minimisons les preuves contradictoires.",
    expert:
      "Biais de confirmation : tendance cognitive à favoriser l'information qui confirme les croyances existantes. Affecte le test des hypothèses, l'interprétation et la mémoire. Atténuation : considérer l'opposé, chercher des preuves contradictoires.",
  },
  'Hindsight Bias': {
    beginner:
      "En regardant en arrière, on pense « je le savais ». Après un événement, ça semble évident — mais avant, on ne savait pas. Cela peut nous rendre trop confiants.",
    intermediate:
      "Le biais du passé (I knew it all along) : tendance à croire, une fois l'issue connue, qu'on l'aurait prédite. On reconstruit le passé pour qu'il corresponde à ce qu'on sait maintenant. Cela déforme l'apprentissage et la responsabilité.",
    expert:
      "Biais du passé : distorsion rétrospective dans laquelle les issues connues sont jugées avoir été plus prévisibles qu'elles ne l'étaient. Affecte le jugement juridique, l'analyse historique et l'apprentissage. Atténuation : enregistrer les prédictions à l'avance.",
  },
  'Weak Analogy': {
    beginner:
      "L'orateur compare deux choses qui ne sont pas semblables sur les points qui comptent. Une analogie faible traite des similarités superficielles comme si elles prouvaient quelque chose.",
    intermediate:
      "L'analogie faible (fausse analogie) compare deux choses qui diffèrent sur les aspects pertinents. L'analogie peut être vivante mais les similarités pertinentes sont absentes ou superficielles. Les arguments analogiques exigent que les choses comparées partagent les traits qui soutiennent l'inférence.",
    expert:
      "Analogie faible : argument analogique où les items comparés manquent de similarité pertinente. Forme : « A est comme B ; B a la propriété P ; donc A a P. » L'inférence n'est forte que comme l'analogie. Questions critiques : A et B partagent-ils les propriétés pertinentes ? Y a-t-il des désanalogies pertinentes ?",
  },
  'Anecdotal Fallacy': {
    beginner:
      "L'orateur utilise une seule histoire ou une expérience personnelle au lieu de preuves solides. Un exemple ne prouve pas une règle. « Mon grand-père fumait et a vécu jusqu'à 97 ans » ne prouve pas que fumer est sûr.",
    intermediate:
      "Le sophisme anecdotique s'appuie sur une histoire personnelle ou un cas isolé comme s'il suffisait à prouver une affirmation générale. Les anecdotes peuvent être vivantes mais sont souvent non représentatives. Le raisonnement scientifique exige des preuves systématiques : taille d'échantillon, représentativité, contrôles.",
    expert:
      "Sophisme anecdotique : utiliser un cas unique ou un témoignage personnel comme preuve suffisante d'une conclusion générale. Viole les principes du raisonnement inductif. Lié : généralisation hâtive, biais de confirmation, heuristique de disponibilité.",
  },
  'Availability Heuristic': {
    beginner:
      "On juge la probabilité d'un événement par la facilité avec laquelle des exemples viennent à l'esprit. Les événements vifs ou récents semblent plus fréquents qu'ils ne le sont. Les crashs d'avion font la une ; les accidents de voiture sont plus fréquents.",
    intermediate:
      "Heuristique de disponibilité : estimer la probabilité ou la fréquence par la facilité avec laquelle des exemples viennent à l'esprit. Les événements saillants, récents ou chargés émotionnellement sont surpondérés. Les médias et l'expérience personnelle biaisent la disponibilité.",
    expert:
      "Heuristique de disponibilité : raccourci cognitif qui remplace la fréquence ou la probabilité par la facilité de récupération. Fallacieux quand la disponibilité est pilotée par la saillance, la récence ou l'impact émotionnel. Lié : heuristique de représentativité, ancrage, corrélation illusoire.",
  },
  'Base Rate Fallacy': {
    beginner:
      "L'orateur ignore la fréquence réelle de quelque chose dans la population. Un test positif pour une maladie rare peut signifier que vous ne l'avez probablement pas — parce qu'elle est si rare.",
    intermediate:
      "Sophisme de la fréquence de base (négligence de la base rate) : ignorer la probabilité antérieure lors de la mise à jour avec une nouvelle preuve. Un test très précis pour une condition rare peut donner surtout des faux positifs si la fréquence de base est faible.",
    expert:
      "Sophisme de la fréquence de base : négliger la probabilité antérieure lors de l'interprétation d'une preuve diagnostique ou conditionnelle. P(H|E) dépend de P(H) et P(E|H) ; ignorer P(H) conduit à surestimer P(H|E). Lié : sophisme du procureur. Inférence correcte : théorème de Bayes.",
  },
  'Circular Reasoning': {
    beginner:
      "L'argument tourne en rond : la conclusion sert à se soutenir elle-même. « La Bible est vraie car Dieu le dit dans la Bible. » Cela ne prouve rien — cela suppose ce qu'il prétend.",
    intermediate:
      "Le raisonnement circulaire utilise la conclusion (ou l'équivalent) comme prémisse. L'argument n'offre aucun soutien indépendant. Souvent la circularité est masquée par une reformulation. Pour la détecter : quelqu'un qui doute de la conclusion pourrait-il accepter les prémisses ?",
    expert:
      "Raisonnement circulaire : la conclusion apparaît comme prémisse ou en découle, donc l'argument ne fournit aucune justification indépendante. Forme : P parce que Q, et Q parce que P. Lié : pétition de principe. Résolution : exiger une prémisse qui ne présuppose pas la conclusion.",
  },
  'Composition Fallacy': {
    beginner:
      "L'orateur suppose que ce qui est vrai des parties doit être vrai du tout. « Chaque joueur est excellent, donc l'équipe doit être imbattable. » Mais le tout peut avoir des propriétés émergentes ou mal se combiner.",
    intermediate:
      "Sophisme de composition : inférer qu'un tout a une propriété parce que ses parties l'ont. Les atomes sont invisibles ; les humains sont faits d'atomes ; donc les humains sont invisibles — invalide. Les propriétés des parties ne se transfèrent pas toujours au tout.",
    expert:
      "Sophisme de composition : inférence invalide des parties au tout. Forme : Chaque partie de X a P ; donc X a P. Invalide quand P ne compose pas ou quand le tout a des propriétés émergentes. Lié : sophisme de division.",
  },
  'Division Fallacy': {
    beginner:
      "L'orateur suppose que ce qui est vrai du tout doit être vrai de chaque partie. « Les USA sont riches, donc chaque Américain est riche. » Le tout peut avoir des propriétés que les parties n'ont pas.",
    intermediate:
      "Sophisme de division : inférer qu'une partie a une propriété parce que le tout l'a. L'eau est liquide ; les molécules H2O font partie de l'eau ; donc les molécules H2O sont liquides — invalide. Les propriétés émergentes du tout ne s'appliquent pas aux parties.",
    expert:
      "Sophisme de division : inférence invalide du tout aux parties. Forme : X a P ; Y est partie de X ; donc Y a P. Invalide quand P est une propriété émergente ou collective. Lié : sophisme de composition.",
  },
  'Continuum Fallacy': {
    beginner:
      "L'orateur dit que parce qu'il n'y a pas de frontière nette entre deux choses, elles doivent être identiques. « On ne peut pas dire quand le sain devient malsain, donc pas de différence. » Le changement graduel n'efface pas les distinctions réelles.",
    intermediate:
      "Sophisme du continuum (sorite) : argumenter que parce qu'une frontière est vague, aucune distinction n'existe. « Où tracez-vous la ligne ? » ne montre pas que la distinction est sans sens. Beaucoup de distinctions réelles ont des bordures floues.",
    expert:
      "Sophisme du continuum : inférer qu'à défaut de frontière précise entre A et B sur un continuum, A et B sont indiscernables. Le paradoxe du sorite exploite la vagueness. Réponse : les prédicats vagues peuvent marquer des différences réelles.",
  },
  'False Attribution': {
    beginner:
      "L'orateur invoque une source vague, non pertinente ou inventée. « J'ai lu quelque part que... » ou « Les experts disent... » sans nommer qui ou où. Il faut des sources vérifiables et pertinentes.",
    intermediate:
      "Fausse attribution : citer une source non pertinente, non qualifiée, non identifiée, biaisée ou inventée. Des experts anonymes, des ouï-dire et des références vagues ne soutiennent pas une affirmation.",
    expert:
      "Fausse attribution : invoquer une source inappropriée ou inventée. Fallacieux quand la source est non identifiée, non experte dans le domaine, biaisée ou inventée. Lié : appel à l'autorité.",
  },
  'False Balance': {
    beginner:
      "L'orateur traite deux côtés comme également valides quand les preuves favorisent fortement l'un. Donner le même temps à un scientifique et à un complotiste ne signifie pas qu'ils ont également raison.",
    intermediate:
      "Faux équilibre : présenter des vues opposées comme plus équilibrées que les preuves ne le permettent. Le « les deux côtés » journalistique peut tromper quand un côté manque de preuves.",
    expert:
      "Faux équilibre : équilibrer artificiellement des vues opposées quand le poids épistémique est asymétrique. Distinct de la reconnaissance légitime d'une controverse réelle. Lié : fausse équivalence.",
  },
  'False Equivalence': {
    beginner:
      "L'orateur traite deux choses comme également mauvaises ou bonnes quand elles ne le sont pas. « Les deux côtés le font » peut cacher qu'un côté le fait bien plus ou de pires façons. Les degrés comptent.",
    intermediate:
      "Fausse équivalence : traiter des choses significativement différentes comme équivalentes. « Les politiciens des deux côtés mentent » peut ignorer les différences de fréquence, gravité ou contexte.",
    expert:
      "Fausse équivalence : affirmer que deux choses sont équivalentes quand elles diffèrent de façon pertinente et significative. Degré, contexte et conséquences comptent. Lié : faux équilibre. Réponse critique : identifier les désanalogies.",
  },
  'Fallacy Fallacy': {
    beginner:
      "L'orateur dit : « Ton argument contient un sophisme, donc ta conclusion doit être fausse. » Mais un mauvais argument peut avoir une conclusion vraie. Il faut évaluer la thèse sur ses propres preuves.",
    intermediate:
      "Sophisme du sophisme : rejeter une conclusion uniquement parce que l'argument pour elle est fallacieux. Une conclusion peut être vraie même si l'argument est mauvais — l'orateur peut avoir trouvé la bonne conclusion pour la mauvaise raison.",
    expert:
      "Sophisme du sophisme : inférer qu'une conclusion est fausse parce que l'argument pour elle est fallacieux. Invalide : la solidité exige un raisonnement valide et des prémisses vraies ; l'invalidité d'un argument ne réfute pas la conclusion. La conclusion peut être soutenue par d'autres arguments.",
  },
  'Genetic Fallacy': {
    beginner:
      "L'orateur rejette une thèse à cause de son origine — d'où elle vient, son histoire, qui l'a dite — au lieu de vérifier si elle est vraie. « Cette idée vient de X, donc elle doit être fausse. » La source ne détermine pas la vérité.",
    intermediate:
      "Sophisme génétique : juger une thèse par son origine ou son histoire plutôt que par son contenu ou ses preuves. « Hitler aimait les chiens » ne rend pas le fait d'aimer les chiens mauvais. Évaluez les thèses sur leurs mérites.",
    expert:
      "Sophisme génétique : évaluer une thèse par sa genèse (source, histoire) plutôt que par son contenu ou ses preuves. Forme : « P provient de X ; X est mauvais ; donc ¬P. » Invalide : l'origine n'implique pas la vérité ou la fausseté. Lié : ad hominem.",
  },
  'Guilt by Association': {
    beginner:
      "L'orateur discrédite quelqu'un ou quelque chose en le reliant à des personnes ou choses détestées. « Il connaît cette personne, donc il doit être mauvais. » L'association n'est pas une preuve de culpabilité.",
    intermediate:
      "Culpabilité par association : attaquer une personne, un groupe ou une thèse en les reliant à quelque chose de négatif. L'association peut être réelle mais n'établit pas la culpabilité ou la fausseté. Évaluez sur les mérites propres.",
    expert:
      "Culpabilité par association : argumenter que X est mauvais ou faux parce que X est associé à Y, et Y est mauvais. Invalide : l'association ne transfère pas la culpabilité ou la fausseté. Lié : ad hominem circonstanciel, empoisonnement du puits.",
  },
  'Halo Effect': {
    beginner:
      "On suppose que parce que quelqu'un est bon en une chose, il doit être bon en d'autres. Ou l'inverse : un trait négatif rend tout négatif. Un trait ne détermine pas tous les traits.",
    intermediate:
      "Effet de halo : biais cognitif où notre impression globale d'une personne (positive ou négative) influence notre jugement de ses traits spécifiques. On généralise à partir d'un attribut saillant. Jugez chaque trait séparément.",
    expert:
      "Effet de halo : biais cognitif où une évaluation globale influence les évaluations d'attributs spécifiques. Halo positif : un trait positif en amplifie d'autres. Halo négatif (effet de cornes) : un trait négatif en déprécie d'autres. Lié : stéréotypage.",
  },
  "Historian's Fallacy": {
    beginner:
      "L'orateur juge des décisions passées avec des connaissances qui n'existaient pas à l'époque. « Ils auraient dû savoir » — mais ils ne pouvaient pas. Il faut évaluer les actions passées avec ce qui était connu alors.",
    intermediate:
      "Sophisme de l'historien : évaluer des décisions ou croyances passées avec les connaissances d'aujourd'hui. Les acteurs historiques n'avaient pas l'information que nous avons. L'évaluation historique correcte exige la parité épistémique.",
    expert:
      "Sophisme de l'historien : évaluation anachronique des croyances ou actions passées avec des connaissances indisponibles à l'époque. Invalide : les acteurs historiques n'étaient pas positionnés épistémiquement comme nous. Lié : biais du passé.",
  },
  'Hot Hand Fallacy': {
    beginner:
      "On croit qu'une série de succès va continuer. « Il est en feu, il va marquer le prochain. » Le passé ne garantit pas l'avenir — chaque événement peut être indépendant.",
    intermediate:
      "Sophisme de la main chaude : croire qu'une série de succès prédit le prochain résultat quand les événements sont indépendants. Dans le basket, une série de paniers peut être une variation aléatoire.",
    expert:
      "Sophisme de la main chaude : inférer une non-indépendance à partir d'une série quand les résultats sont statistiquement indépendants. Les résultats passés ne changent pas les probabilités futures. Lié : sophisme du joueur (erreur inverse).",
  },
  'Post Hoc': {
    beginner:
      "L'orateur pense que parce qu'une chose s'est produite après une autre, la première a causé la seconde. « J'ai porté mes chaussettes porte-bonheur et on a gagné — les chaussettes ont causé la victoire. » L'ordre dans le temps ne prouve pas la cause.",
    intermediate:
      "Post hoc ergo propter hoc : inférer que A a causé B simplement parce que A a précédé B. La succession temporelle est nécessaire pour la causalité mais pas suffisante. Confondre variables, coïncidence et causalité inversée.",
    expert:
      "Post hoc ergo propter hoc : inférer la causalité à partir de la seule succession temporelle. La prémisse « A s'est produit avant B » n'implique pas « A a causé B ». Lié : cum hoc, sophisme de régression.",
  },
  "Prosecutor's Fallacy": {
    beginner:
      "L'orateur confond « la probabilité des preuves sachant la culpabilité » avec « la probabilité de culpabilité sachant les preuves ». Une correspondance ADN peut être rare, mais la probabilité que vous soyez coupable dépend d'autres faits.",
    intermediate:
      "Sophisme du procureur : confondre P(E|C) — probabilité des preuves si coupable — avec P(C|E) — probabilité de culpabilité sachant les preuves. Une correspondance ADN rare ne signifie pas à elle seule que l'accusé est probablement coupable.",
    expert:
      "Sophisme du procureur : transposition du conditionnel — traiter P(E|C) comme s'il s'agissait de P(C|E). Invalide : P(C|E) = P(E|C)·P(C)/P(E) ; la probabilité antérieure compte. Lié : sophisme de la défense.",
  },
  'Texas Sharpshooter Fallacy': {
    beginner:
      "L'orateur dessine la cible après avoir tiré — choisit un motif ou un groupe après avoir vu les données. « Regardez comme ces points se regroupent ! » Mais il a choisi où regarder après coup.",
    intermediate:
      "Sophisme du tireur texan : sélectionner une cible ou un motif après que les données sont connues, puis le traiter comme une prédiction. Des regroupements dans des données aléatoires sont inévitables.",
    expert:
      "Sophisme du tireur texan : ajustement rétrospectif des frontières ou des regroupements après observation des données. Viole l'exigence d'hypothèses pré-enregistrées. Lié : cherry picking, biais de confirmation.",
  },
  'Appeal to Pity': {
    beginner:
      "L'orateur essaie de gagner l'argument en vous faisant plaindre quelqu'un. « Laissez-moi tranquille ; j'ai eu une enfance difficile. » La pitié n'est pas une preuve.",
    intermediate:
      "Appel à la pitié (argumentum ad misericordiam) : utiliser la sympathie, la culpabilité ou la tristesse pour obtenir l'adhésion au lieu de preuves. L'appel émotionnel peut être légitime dans certains contextes mais n'établit pas la vérité.",
    expert:
      "Argumentum ad misericordiam : invoquer la pitié, la sympathie ou la culpabilité pour soutenir une conclusion. Fallacieux quand la réaction émotionnelle remplace l'argument. Lié : appel à l'émotion.",
  },
  'Gish Gallop': {
    beginner:
      "L'orateur vous submerge d'une pluie rapide d'affirmations faibles ou fausses. Il y en a trop pour les réfuter une par une, donc ça donne l'impression qu'il gagne. La quantité ne remplace pas la qualité.",
    intermediate:
      "Gish Gallop : submerger l'adversaire de nombreux arguments faibles en succession rapide, rendant la réfutation complète impraticable. Chaque affirmation peut être facilement réfutée, mais le volume crée l'impression de force.",
    expert:
      "Gish Gallop : tactique rhétorique consistant à submerger avec de nombreux arguments faibles pour rendre la réfutation impraticable. Nommé d'après le créationniste Duane Gish. Réponse dialectique : isoler l'affirmation la plus forte, refuser de poursuivre des cibles mouvantes.",
  },
  'Appeal to Consequences': {
    beginner:
      "L'orateur dit qu'une thèse doit être vraie (ou fausse) à cause de ses conséquences. « On ne peut pas accepter cette théorie — ce serait terrible si elle était vraie. » Les conséquences ne déterminent pas la vérité.",
    intermediate:
      "Appel aux conséquences (argumentum ad consequentiam) : juger une thèse par ses conséquences désirables ou indésirables plutôt que par des preuves. « P aurait de mauvaises conséquences ; donc ¬P » est invalide.",
    expert:
      "Argumentum ad consequentiam : inférer la vérité ou la fausseté à partir des conséquences d'une thèse. Forme : « Si P alors mauvais ; donc ¬P. » Invalide : les conséquences ne déterminent pas la vérité. Lié : appel à la peur, pensée magique.",
  },
  'Appeal to Moderation': {
    beginner:
      "L'orateur dit que la position du milieu doit être juste parce qu'elle est au milieu. « Les deux côtés sont extrêmes ; la vérité doit être entre les deux. » Le compromis n'est pas toujours correct.",
    intermediate:
      "Appel à la modération (faux compromis) : supposer que la position moyenne entre deux extrêmes est correcte simplement parce qu'elle est modérée. Un côté peut avoir raison et l'autre tort ; le milieu peut être faux.",
    expert:
      "Argumentum ad temperantiam : inférer qu'une position est correcte parce que c'est un compromis entre extrêmes. Invalide : la modération n'implique pas la vérité. Lié : faux équilibre, fausse équivalence.",
  },
  'Naturalistic Fallacy': {
    beginner:
      "L'orateur dit que parce que quelque chose est naturel (ou artificiel), il doit être bon (ou mauvais). « C'est naturel, donc c'est sain. » Naturel ne signifie pas bon.",
    intermediate:
      "Sophisme naturaliste : inférer un « devoir » d'un « est » — dériver des valeurs de faits sur la nature. « X est naturel ; donc X est bon » est invalide. La nature inclut la maladie, la prédation et la souffrance.",
    expert:
      "Sophisme naturaliste (Moore) : inférer invalide un « devoir » d'un « est » — dériver des conclusions normatives de prémisses descriptives sur la nature. Lié : appel à la nature, loi de Hume.",
  },
  'No True Scotsman': {
    beginner:
      "L'orateur modifie la définition pour éviter un contre-exemple. « Aucun Écossais ne ferait ça. » « Mais Angus l'a fait. » « Eh bien, aucun vrai Écossais ne le ferait. » Il déplace les poteaux de but.",
    intermediate:
      "No True Scotsman : redéfinir une catégorie pour exclure les contre-exemples, protégeant une généralisation de la réfutation. L'orateur rend la thèse infalsifiable en ajustant les critères à chaque contre-exemple.",
    expert:
      "No True Scotsman : redéfinition ad hoc d'une catégorie pour immuniser une généralisation contre les contre-exemples. Forme : « Tous les F sont G. » Contre-exemple : « X est F et pas G. » Réponse : « Alors X n'est pas un vrai F. » Lié : plaidoirie spéciale, déplacement des poteaux.",
  },
  'Poisoning the Well': {
    beginner:
      "L'orateur essaie de discréditer une personne ou une source avant qu'elle parle, pour que vous rejetiez ce qu'elle dit à l'avance. « Ne l'écoutez pas — il fait partie d'eux. » Préjuger l'audience n'est pas un argument.",
    intermediate:
      "Empoisonnement du puits : tenter de discréditer une source à l'avance pour que ses arguments soient rejetés quel que soit leur mérite. L'orateur précharge l'audience contre l'adversaire. Lié à l'ad hominem mais prospectif.",
    expert:
      "Empoisonnement du puits : saper une source à l'avance pour prédisposer l'audience à rejeter ses arguments. Fallacieux quand la réputation préalable est non pertinente. Lié : ad hominem, culpabilité par association.",
  },
  'Special Pleading': {
    beginner:
      "L'orateur applique une règle aux autres mais s'accorde une exception (ou à son camp) sans bonne raison. « Les règles sont pour les autres, mais mon cas est différent. » Les doubles standards sont injustes.",
    intermediate:
      "Plaidoirie spéciale : appliquer une norme aux autres tout en s'exemptant ou en exemptant son groupe sans justification. L'exemption est arbitraire ou intéressée.",
    expert:
      "Plaidoirie spéciale : réclamer une exception injustifiée à une règle ou un principe. Forme : « La règle R s'applique à X, mais pas à moi parce que [raison ad hoc]. » Lié : No True Scotsman, déplacement des poteaux.",
  },
  'Moving the Goalposts': {
    beginner:
      "L'orateur change continuellement ce qui compterait comme preuve ou succès, de sorte que l'autre partie ne peut jamais « gagner ». Vous répondez à sa demande, puis il demande autre chose. La cible ne cesse de bouger.",
    intermediate:
      "Déplacement des poteaux : changer les critères de succès ou de preuve une fois qu'ils ont été remplis. L'orateur déplace la norme pour qu'aucune preuve ne puisse le satisfaire.",
    expert:
      "Déplacement des poteaux : réviser les normes d'acceptation ou de preuve après qu'elles ont été remplies. Échec dialectique : la charge n'est jamais levée car la cible bouge. Lié : plaidoirie spéciale, No True Scotsman.",
  },
  'Wishful Thinking': {
    beginner:
      "L'orateur (ou nous) croit que quelque chose est vrai parce qu'on le souhaite. « Ça doit marcher — j'en ai vraiment besoin. » Vouloir quelque chose ne le rend pas réel.",
    intermediate:
      "Pensée magique : croire une thèse parce qu'on désire qu'elle soit vraie plutôt que par des preuves. Le désir et la vérité sont indépendants. La croyance inverse — croire faux ce qu'on craint — est aussi fallacieuse.",
    expert:
      "Pensée magique : inférer qu'une thèse est vraie (ou fausse) parce qu'on le souhaite. Forme : « Je veux P ; donc P. » Invalide : le désir ne détermine pas la vérité. Lié : appel aux conséquences, raisonnement motivé.",
  },
  "Gambler's Fallacy": {
    beginner:
      "L'orateur pense que les résultats passés influencent les événements aléatoires futurs. « Le rouge est sorti cinq fois, donc le noir est dû. » Dans les jeux de hasard équitables, chaque tirage est indépendant.",
    intermediate:
      "Sophisme du joueur : croire que les résultats passés dans un processus aléatoire influencent les résultats futurs. Après une série d'un résultat, l'autre serait « dû ». Dans des épreuves indépendantes, les résultats passés ne changent pas les probabilités.",
    expert:
      "Sophisme du joueur : inférer une non-indépendance dans un processus aléatoire à partir d'une série. Forme : « A s'est produit n fois ; donc ¬A est dû. » Invalide pour des épreuves indépendantes. Lié : sophisme de la main chaude.",
  },
  'Appeal to Nature': {
    beginner:
      "L'orateur dit qu'une chose est bonne (ou mauvaise) parce qu'elle est naturelle (ou artificielle). « C'est naturel, donc c'est sain. » La nature n'est pas un guide de valeur.",
    intermediate:
      "Appel à la nature : inférer qu'une chose est bonne parce qu'elle est naturelle, ou mauvaise parce qu'elle est artificielle. « Naturel » et « bon » ne sont pas synonymes ; la nature inclut la maladie et les prédateurs.",
    expert:
      "Appel à la nature : inférer des conclusions normatives à partir de descriptions sur le caractère naturel. Forme : « X est naturel ; donc X est bon. » Invalide. Lié : sophisme naturaliste.",
  },
  'Appeal to Flattery': {
    beginner:
      "L'orateur essaie de vous gagner avec des compliments au lieu de raisons. « Vous êtes si intelligent — vous êtes sûrement d'accord. » Être complimenté ne rend pas une thèse vraie.",
    intermediate:
      "Appel à la flatterie : utiliser des compliments pour obtenir l'adhésion au lieu de preuves. L'orateur flatte l'audience pour réduire la résistance.",
    expert:
      "Argumentum ad captandum : utiliser la flatterie pour persuader. Fallacieux quand la flatterie remplace l'argument. Lié : appel à la vanité.",
  },
  'Appeal to Ridicule': {
    beginner:
      "L'orateur tourne un argument en ridicule pour le rejeter. « C'est ridicule ! » La moquerie n'est pas une réfutation — même des thèses qui semblent absurdes peuvent être vraies ou fausses selon les preuves.",
    intermediate:
      "Appel au ridicule : rejeter une thèse en la moquant plutôt qu'en traitant son fond. La moquerie peut être persuasive émotionnellement mais n'établit pas la fausseté.",
    expert:
      "Appel au ridicule : rejeter une thèse en la présentant sous un jour ridicule. Fallacieux quand le ridicule remplace l'argument. Lié : homme de paille.",
  },
  'Sunk Cost Fallacy': {
    beginner:
      "On continue à investir dans quelque chose parce qu'on y a déjà consacré du temps ou de l'argent. « Je suis allé si loin — je ne peux pas abandonner. » Les coûts passés ne peuvent être récupérés.",
    intermediate:
      "Sophisme des coûts irrécupérables : laisser les investissements passés influencer les décisions futures. Les coûts irrécupérables sont perdus ; ils ne devraient pas affecter la suite.",
    expert:
      "Sophisme des coûts irrécupérables : continuer irrationnellement une action à cause des ressources déjà investies. Forme : « J'ai investi X dans A ; donc je dois continuer A. » Invalide : seuls les coûts et bénéfices futurs sont pertinents.",
  },
  'Dunning-Kruger Effect': {
    beginner:
      "Les gens qui en savent peu sur un sujet se sentent parfois très confiants, tandis que les experts doutent. Moins on en sait, moins on voit ce qu'on ignore.",
    intermediate:
      "Effet Dunning-Kruger : biais cognitif où les personnes peu compétentes dans un domaine surestiment leur compétence, tandis que les experts peuvent sous-estimer la leur.",
    expert:
      "Effet Dunning-Kruger : échec métacognitif où les faibles performeurs surestiment leur capacité. Les individus peu compétents manquent de la compétence pour s'auto-évaluer correctement. Lié : supériorité illusoire.",
  },
  'Planning Fallacy': {
    beginner:
      "On sous-estime le temps ou le coût qu'une tâche prendra. « Ça ne prendra qu'une heure. » Nous sommes souvent trop optimistes pour nos propres projets.",
    intermediate:
      "Sophisme de planification : sous-estimer systématiquement le temps, le coût ou le risque des tâches futures. Nous nous concentrons sur le meilleur scénario.",
    expert:
      "Sophisme de planification : biais systématique vers la sous-estimation de la durée, du coût ou de la complexité. Lié à l'optimisme et à la négligence des fréquences de base.",
  },
  'Spotlight Fallacy': {
    beginner:
      "On suppose que les autres nous accordent plus d'attention qu'ils ne le font. « Tout le monde remarquera mon erreur. » Nous surestimons le temps que nous passons sous les projecteurs.",
    intermediate:
      "Effet projecteur : surestimer combien les autres remarquent ou se soucient de notre apparence, comportement ou erreurs. La plupart des gens sont concentrés sur eux-mêmes.",
    expert:
      "Effet projecteur : biais cognitif où les gens surestiment la mesure dans laquelle les autres les remarquent et les évaluent. Lié : illusion de transparence.",
  },
  'Non Sequitur': {
    beginner:
      "La conclusion ne suit pas des prémisses. L'argument saute à une conclusion non soutenue. « J'aime le bleu, donc nous devrions voter pour elle. » Le lien manque.",
    intermediate:
      "Non sequitur : argument où la conclusion ne suit pas des prémisses. L'inférence est invalide — il y a un fossé logique. « Ça ne suit pas » capture le défaut.",
    expert:
      "Non sequitur : argument dont la conclusion ne suit pas des prémisses. Forme : prémisses P1, P2, ... ; donc C — mais C n'est pas impliqué ou soutenu par les prémisses. Catégorie large ; de nombreux sophismes spécifiques sont des non sequiturs.",
  },
  'Regression Fallacy': {
    beginner:
      "L'orateur attribue un retour à la normale à l'effet d'une intervention. « Elle était malade, a pris le remède et s'est rétablie — le remède a marché. » L'amélioration peut être une fluctuation naturelle.",
    intermediate:
      "Sophisme de régression : attribuer une cause à une intervention quand le résultat est une régression naturelle vers la moyenne. Après une valeur extrême, la mesure suivante tend à être plus proche de la moyenne.",
    expert:
      "Sophisme de régression : attribuer à tort la régression vers la moyenne à un effet causal. Après un résultat extrême, les résultats suivants tendent à être moins extrêmes. Lié : post hoc, effet placebo.",
  },
  'Kettle Logic': {
    beginner:
      "L'orateur donne plusieurs excuses ou raisons contradictoires pour la même chose.",
    intermediate:
      "Logique de la bouilloire : offrir plusieurs justifications mutuellement contradictoires pour la même affirmation ou action.",
    expert:
      "Logique de la bouilloire (Kettle de Freud) : avancer des défenses contradictoires pour la même thèse. Lié : incohérence, plaidoirie spéciale.",
  },
  'Nirvana Fallacy': {
    beginner:
      "L'orateur rejette une solution parce qu'elle n'est pas parfaite. La perfection n'est pas requise.",
    intermediate:
      "Sophisme du Nirvana : rejeter une solution parce qu'elle n'atteint pas un résultat idéal.",
    expert:
      "Sophisme du Nirvana : rejeter une option réaliste parce qu'elle ne correspond pas à une solution parfaite.",
  },
  'Bare Assertion Fallacy': {
    beginner:
      "L'orateur énonce une thèse sans donner de preuve ni de raison. Une affirmation n'est pas un argument.",
    intermediate:
      "Affirmation nue : énoncer une thèse sans preuve ni argument à l'appui.",
    expert:
      "Sophisme de l'affirmation nue : présenter une thèse comme évidente sans fournir d'argument. Lié : preuve par assertion.",
  },
  'Incomplete Comparison': {
    beginner:
      "L'orateur compare deux choses sans préciser ce qui est comparé ni sur quelle base. Les comparaisons exigent des termes clairs.",
    intermediate:
      "Comparaison incomplète : affirmer qu'une chose est meilleure sans préciser la base ou les alternatives.",
    expert:
      "Comparaison incomplète : affirmation comparative qui omet la dimension de comparaison ou les items comparés.",
  },
  'Moralistic Fallacy': {
    beginner:
      "L'orateur dit que parce que quelque chose devrait être d'une certaine façon, ça doit être ainsi. Le devoir n'implique pas l'être.",
    intermediate:
      "Sophisme moraliste : inférer que le monde est d'une certaine façon parce qu'il devrait l'être.",
    expert:
      "Sophisme moraliste : inférer invalide un « est » d'un « devoir ». Lié : sophisme naturaliste.",
  },
  'Attacking the Evidence': {
    beginner:
      "L'orateur attaque la source des preuves plutôt que les preuves elles-mêmes. Discréditer le messager ne réfute pas le message.",
    intermediate:
      "Attaquer les preuves : discréditer le porteur ou le format des preuves au lieu d'aborder leur contenu.",
    expert:
      "Attaque des preuves : détourner la critique vers la source plutôt que vers le contenu. Lié : ad hominem.",
  },
  'Selection Bias': {
    beginner:
      "L'orateur choisit les données de façon à fausser le résultat. L'échantillon n'est pas représentatif.",
    intermediate:
      "Biais de sélection : sélectionner les données ou participants de façon à fausser systématiquement la conclusion.",
    expert:
      "Biais de sélection : erreur systématique introduite par la façon dont les données sont sélectionnées. Lié : cherry picking.",
  },
  'Illusory Correlation': {
    beginner:
      "On perçoit une connexion entre deux choses quand elle n'existe pas, ou on surestime une faible connexion.",
    intermediate:
      "Corrélation illusoire : percevoir une relation entre variables quand elle n'existe pas, ou surestimer une relation faible.",
    expert:
      "Corrélation illusoire : biais cognitif où les gens perçoivent une corrélation inexistante ou surestiment sa force. Lié : apophénie.",
  },
  'Burden of Proof': {
    beginner:
      "L'orateur déplace injustement la charge de la preuve. Celui qui affirme une thèse doit généralement la soutenir.",
    intermediate:
      "Charge de la preuve (déplacement) : placer l'obligation de prouver sur la mauvaise partie.",
    expert:
      "Charge de la preuve : déplacement fallacieux de l'obligation de fournir des preuves. Celui qui affirme doit prouver.",
  },
  'Proof by Assertion': {
    beginner:
      "L'orateur répète une thèse comme si la répétition la rendait vraie. Répéter quelque chose ne le prouve pas.",
    intermediate:
      "Preuve par assertion : traiter une affirmation répétée comme preuve.",
    expert:
      "Preuve par assertion : tenter d'établir une thèse en l'affirmant répétitivement. Lié : affirmation nue.",
  },
  'Reification': {
    beginner:
      "L'orateur traite une idée abstraite comme si c'était une chose concrète. « La société a décidé » ou « Le marché veut ». La société et le marché sont des abstractions, pas des agents.",
    intermediate:
      "Réification : traiter un concept abstrait comme s'il était un objet ou un agent concret. « L'histoire jugera » — les concepts n'agissent pas.",
    expert:
      "Réification : sophisme consistant à traiter un concept abstrait comme une entité concrète ou un agent. Lié : hypostase, anthropomorphisme.",
  },
  'Ecological Fallacy': {
    beginner:
      "L'orateur suppose que ce qui est vrai d'un groupe doit être vrai des individus qui le composent. Les données agrégées ne s'appliquent pas aux individus.",
    intermediate:
      "Sophisme écologique : inférer des relations au niveau individuel à partir de données au niveau du groupe. Une corrélation agrégée peut ne pas tenir pour les individus.",
    expert:
      "Sophisme écologique : inférer des données de groupe (écologiques) vers les individus. Forme : « Le groupe G a la propriété P ; l'individu I est dans G ; donc I a P. » Invalide.",
  },
  'Thought-Terminating Cliché': {
    beginner:
      "L'orateur utilise une phrase accrocheuse pour couper court à la réflexion. « C'est comme ça. » « Tout le monde sait ça. » Ces phrases arrêtent l'enquête.",
    intermediate:
      "Cliché terminant la pensée : phrase toute faite utilisée pour mettre fin à la réflexion ou au débat sans traiter la question.",
    expert:
      "Cliché terminant la pensée : phrase qui sert à arrêter la pensée critique ou la discussion. Lié : appel à la tradition.",
  },
  'False Memories': {
    beginner:
      "On se souvient de quelque chose qui ne s'est pas produit ou on s'en souvient incorrectement. La mémoire est reconstructive — il faut une corroboration.",
    intermediate:
      "Fausse mémoire : se souvenir d'événements ou de détails qui ne se sont pas produits, ou s'en souvenir incorrectement. La mémoire est reconstructive.",
    expert:
      "Fausse mémoire : souvenir d'un événement qui ne s'est pas produit ou qui est substantiellement déformé. Lié : biais de confirmation, confusion de source.",
  },
  'Package Deal Fallacy': {
    beginner:
      "L'orateur traite un ensemble de thèses comme si on devait toutes les accepter ou rejeter ensemble. On peut accepter certaines parties et rejeter d'autres.",
    intermediate:
      "Sophisme du package : traiter plusieurs thèses comme une unité indivisible. Évaluez chaque thèse séparément.",
    expert:
      "Sophisme du package : regrouper des thèses pour que l'acceptation ou le rejet soit tout ou rien. Invalide : chaque thèse peut être évaluée indépendamment. Lié : faux dilemme.",
  },
};

/** Map alternative option strings to canonical fallacy key for codon lookup. */
const FALLACY_CODON_ALIASES: Record<string, string> = {
  'Bandwagon Fallacy': 'Appeal to Popularity',
  'Ad Populum': 'Appeal to Popularity',
  'Appeal to Antiquity': 'Appeal to Tradition',
  'Appeal to common practice': 'Appeal to Tradition',
  'Appeal to Common Practice': 'Appeal to Tradition',
  'Black or White Fallacy': 'False Dilemma',
  'Black and White Thinking': 'False Dilemma',
  'Correlation Equals Causation': 'Cum hoc',
  'Correlation Implies Causation': 'Cum hoc',
  'Correlation is not causation': 'Cum hoc',
  'Cum Hoc Ergo Propter Hoc': 'Cum hoc',
  'Biased Sample': 'Hasty Generalization',
  'Biased Generalization': 'Hasty Generalization',
  'Faulty Generalization': 'Hasty Generalization',
  'Faulty Analogy': 'Weak Analogy',
  'False Analogy': 'Weak Analogy',
  'Complex Question': 'Loaded Question',
  'Loaded question': 'Loaded Question',
  'Ad Hominem Abusive': 'Ad Hominem',
  'Abusive Ad Hominem': 'Ad Hominem',
  'Ad Hominem Circumstantial': 'Ad Hominem',
  'Ad Hominem Tu Quoque': 'Ad Hominem',
  'Circumstantial Ad Hominem': 'Ad Hominem',
  'Ad hominem circumstantial': 'Ad Hominem',
  'Tu Quoque': 'Ad Hominem',
  'Appeal to Hypocrisy': 'Ad Hominem',
  'Argument from Authority': 'Appeal to Authority',
  'Appeal to False Authority': 'Appeal to Authority',
  'Appeal to Anonymous Authority': 'Appeal to Authority',
  'Authority Fallacy': 'Appeal to Authority',
  'False Dichotomy': 'False Dilemma',
  'Post hoc (after this, therefore because of this)': 'Post Hoc',
  'Post hoc': 'Post Hoc',
  'Argument from Personal Incredulity': 'Appeal to Incredulity',
  'Argument from Incredulity': 'Appeal to Incredulity',
  'Personal Incredulity': 'Appeal to Incredulity',
  "The Gambler's Fallacy": "Gambler's Fallacy",
  "Gambler's fallacy": "Gambler's Fallacy",
  "Prosecutor's Fallacy": "Prosecutor's Fallacy",
  "Base Rate Neglect": "Base Rate Fallacy",
  "Base rate fallacy": "Base Rate Fallacy",
  "The Neglect of Base Rate": "Base Rate Fallacy",
  "The Neglect of Probability": "Base Rate Fallacy",
  'Middle Ground Fallacy': 'Appeal to Moderation',
  'The Regression Fallacy': 'Regression Fallacy',
  'Regression to the Mean': 'Regression Fallacy',
  'Regression to the Mean Fallacy': 'Regression Fallacy',
  'Questionable Cause': 'Cum hoc',
  'False Cause': 'Cum hoc',
  'Hot-Hand Fallacy': 'Hot Hand Fallacy',
  'The Hot Hand Fallacy': 'Hot Hand Fallacy',
  'Four Terms Fallacy': 'Undistributed Middle',
  'Illicit Major': 'Undistributed Middle',
  'Illicit Minor': 'Undistributed Middle',
  'Illicit major': 'Undistributed Middle',
  'Illicit minor': 'Undistributed Middle',
  'Existential Fallacy': 'Undistributed Middle',
  'Existential fallacy': 'Undistributed Middle',
  'Undistributed middle': 'Undistributed Middle',
  'Fallacy of four terms': 'Undistributed Middle',
  'Overgeneralization': 'Hasty Generalization',
  'The Placebo Effect': 'False Memories',
  'Placebo Effect': 'False Memories',
  'False memories': 'False Memories',
  'The Sunk Cost Fallacy': 'Sunk Cost Fallacy',
  'Sunk cost fallacy': 'Sunk Cost Fallacy',
  'Concorde fallacy': 'Sunk Cost Fallacy',
  'The Fallacy Fallacy': 'Fallacy Fallacy',
  'The Halo Effect': 'Halo Effect',
  "Historian's Fallacy": "Historian's Fallacy",
  "Historian's Error": "Historian's Fallacy",
  'Bifurcation': 'False Dilemma',
  'Straw man': 'Straw Man',
  'Slippery slope': 'Slippery Slope',
  'Affirming the consequent': 'Affirming the Consequent',
  'Denying the antecedent': 'Denying the Antecedent',
  'Moving the goalposts': 'Moving the Goalposts',
  'Special pleading': 'Special Pleading',
  'Survivorship bias': 'Survivorship Bias',
  'Survivor Bias': 'Survivorship Bias',
  'Motte and Bailey': 'Poisoning the Well',
  'Thought-Terminating Cliche': 'Thought-Terminating Cliché',
  'Availability bias': 'Availability Heuristic',
  'Dunning-Kruger effect': 'Dunning-Kruger Effect',
  'Planning fallacy': 'Planning Fallacy',
  'Hindsight bias': 'Hindsight Bias',
  'Restraint bias': 'Restraint Bias',
  'Restraint Bias': 'Restraint Bias',
  'Framing effect': 'Framing Effect',
  'Argument from ignorance': 'Appeal to Ignorance',
  'Argument from Ignorance': 'Appeal to Ignorance',
};

function getCanonicalFallacyKey(name: string): string {
  return FALLACY_CODON_ALIASES[name] ?? name;
}

/**
 * Returns the fallacy codon explanation for the given fallacy name and level (EN).
 * Used when the question's detailed explanation is a generic placeholder.
 */
export function getFallacyCodonExplanationEN(
  fallacyName: string,
  level: FallacyCodonLevel
): string | undefined {
  const key = getCanonicalFallacyKey(fallacyName);
  const entry = FALLACY_CODON_EN[key];
  if (!entry) return undefined;
  switch (level) {
    case 'beginner':
      return entry.beginner;
    case 'intermediate':
      return entry.intermediate;
    case 'expert':
      return entry.expert;
    default:
      return entry.intermediate;
  }
}

/**
 * Returns the fallacy codon explanation for the given fallacy name and level (FR).
 */
export function getFallacyCodonExplanationFR(
  fallacyName: string,
  level: FallacyCodonLevel
): string | undefined {
  const key = getCanonicalFallacyKey(fallacyName);
  const entry = FALLACY_CODON_FR[key];
  if (!entry) return undefined;
  switch (level) {
    case 'beginner':
      return entry.beginner;
    case 'intermediate':
      return entry.intermediate;
    case 'expert':
      return entry.expert;
    default:
      return entry.intermediate;
  }
}

/**
 * List of fallacy names that have codon explanations (for batch expansion).
 * Add new keys to FALLACY_CODON_EN and FALLACY_CODON_FR in sync.
 */
export const FALLACY_CODON_KEYS_EN = Object.keys(FALLACY_CODON_EN);
export const FALLACY_CODON_KEYS_FR = Object.keys(FALLACY_CODON_FR);

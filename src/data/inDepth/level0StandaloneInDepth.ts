/**
 * Question-specific in-depth explanations for Level 0 (IDs 1001–1300).
 * Each ID has beginner / intermediate / expert text that applies to THAT question’s scenario only.
 * English and French must stay in structural parity (same sections, same depth).
 * When an ID is listed here, the app uses this text as the full in-depth panel (no extra codon wrapper).
 *
 * Progress: see /task.md at repo root.
 *
 * Note: For some IDs the English and French question banks use different scenarios (same ID).
 * French standalone text always follows `LEVEL_0_GEN_FR` for that ID, not a translation of the English item.
 */

export type StandaloneInDepthLevels = {
  beginner: string;
  intermediate: string;
  expert: string;
};

/** English — completed IDs tracked in task.md */
export const LEVEL_0_STANDALONE_EN: Partial<Record<number, StandaloneInDepthLevels>> = {
  1001: {
    beginner: `In-depth (Beginner) — single-use plastics

What this question asks
You must pick the one statement that is an argument: a main claim plus a reason meant to support it.

Walk through the options in this scenario
1. "Single-use plastics are everywhere." — This only describes a situation. It does not say what we should do or why.
2. "We should ban single-use plastics because they clog oceans." — This gives a recommendation (ban them) and a reason (they harm oceans). That is an argument.
3. "I dislike grocery bags." — This is a personal feeling, not a reasoned case for a policy.
4. "Plastic wrap exists in every store." — Again, just a fact, not a supported ought-claim.

Why the correct line is the argument
Only option 2 connects a conclusion (ban) to evidence (ocean harm). That is exactly what “argument” means in logic class: claim + support.`,
    intermediate: `In-depth (Intermediate) — single-use plastics

Goal
Recognize the difference between (a) describing the world, (b) stating preferences, and (c) offering a conclusion backed by a premise.

Step-by-step on this exact prompt
Step 1 — List what each sentence is doing.
• Options 1 and 4 report ubiquity or existence. They do not move from facts to a “should.”
• Option 3 reports an attitude (“I dislike…”). Attitudes can motivate people, but this sentence does not offer a public reason like environmental damage.
• Option 2 explicitly uses “because”: the ocean-clogging effect is offered as the justification for banning.

Step 2 — Name the parts of the argument in option 2.
• Conclusion / claim to defend: we ought to ban single-use plastics.
• Premise / reason: they clog oceans (negative consequence tied to those plastics).

Step 3 — Check fit with the question wording.
The question said “about single-use plastics.” Option 2 is the only line that both takes a stand on policy and ties it to plastics’ effects.

Takeaway
An argument can be weak or strong; here you only judge whether the structure is “claim + supporting reason,” not whether the ban is politically realistic.`,
    expert: `In-depth (Expert) — single-use plastics

Logical target
Distinguish assertions (declarative sentences) and avowals (reports of mental states) from arguments: sets of propositions where at least one proposition is offered as a reason for another.

Formal sketch (option 2)
• Let B = “We should ban single-use plastics.”
• Let O = “They clog oceans” (or: single-use plastics contribute to harmful ocean pollution).
The surface form is: B, because O. The “because” signals that O is advanced as a non-rhetorical consideration in favor of B.

Why the distractors fail the argument test
• Existential generalizations (“are everywhere,” “exists”) do not by themselves specify a normative transition; they lack an inferential link to a policy without additional premises (which these options do not supply).
• Pure preference (“I dislike…”) may explain behavior but does not structure a policy argument unless linked to a harm or principle; the option does not do that work.

Pedagogical note
Validity and soundness come later; at Level 0 the skill is segmentation: identifying which utterance performs the speech-act of giving reasons for a contested claim. Option 2 is the unique candidate.`,
  },

  1002: {
    beginner: `In-depth (Beginner) — late bus and the transit app

What this question asks
Which line gives a reason connected to a fix? That is an argument linking evidence to a recommendation.

Walk through the options
1. "The bus is late every morning, so the transit app needs real-time updates." — The lateness is the problem; updating the app is the proposed solution. Argument.
2. "Buses should be painted blue." — A suggestion with no reason about lateness or information.
3. "I like taking the bus." — Preference only.
4. "The transit app exists." — A fact, not an argument for changing it.

Why option 1 is correct
It uses a pattern: recurring failure (late bus) supports a concrete remedy (real-time data in the app).`,
    intermediate: `In-depth (Intermediate) — late bus and the transit app

Analysis task
Separate complaints, bare facts, and reasoned recommendations about the same topic (the bus being late).

Step-by-step
Step 1 — Identify the scenario: unreliable morning service and an app that may not show live delays.
Step 2 — For each option, ask: does it offer a premise about the problem and a conclusion about what to do?
• Option 1: Premise = daily lateness; conclusion = the app should show real-time updates. The “so” marks the inferential move.
• Option 2: Color of paint is unrelated to the stated problem; no supporting chain.
• Option 3: Liking the bus does not address lateness or app behavior.
• Option 4: Existence of an app is not an argument for upgrading it.

Step 3 — Map the argument in option 1 in one line
Chronic mismatch between schedule and reality → informational fix (live updates) to reduce uncertainty for riders.

Takeaway
Policy-relevant arguments often pair an observed dysfunction with a targeted intervention; option 1 does exactly that.`,
    expert: `In-depth (Expert) — late bus and the transit app

Conceptual framing
The question tests recognition of practical reasoning: from a recurring negative experience to a proposed change in an information system.

Argument reconstruction (option 1)
• Phenomenon: the bus is late every morning (empirical claim about reliability).
• Prescription: the transit app should provide real-time updates (normative claim about product/service design).
The connector “so” indicates that the phenomenon is taken as a reason for the prescription—i.e., better information is posited as responsive to the reliability gap.

Distractor analysis
• Without premises linking aesthetics or existence to punctuality, options 2 and 4 cannot be arguments for fixing lateness.
• Option 3 is non-cognitive for the public problem: taste does not bear on whether the app’s feature set should change.

Optional critical edge (beyond the MC key)
A full evaluation would ask whether real-time updates alone solve “late every morning” (operations vs. information). The question only asks which text is an argument, not whether the argument is strong.`,
  },

  1003: {
    beginner: `In-depth (Beginner) — campus Wi-Fi

What you are looking for
One sentence that says what is wrong (evidence) and what should be done (conclusion).

The options in plain terms
• "Campus Wi-Fi keeps dropping…" + "…university should add more access points." — Problem + fix = argument.
• "I hate losing Wi-Fi." — Feeling only.
• "Wi-Fi exists on campus." — Not an argument for more hardware.
• "Wireless is better than wired." — A general comparison, not tied to this campus’s drops.

Correct choice
The first option: it links unstable connection to a specific infrastructure response.`,
    intermediate: `In-depth (Intermediate) — campus Wi-Fi

Procedure
1. Underline the claimed problem in each option.
2. See if there is a “therefore” style move to an action.

Applying that to this question
Only the correct option states an ongoing failure mode (connection drops) and ties it to an organizational duty (the university should deploy more access points). That is textbook “problem → remedy” argumentation.

Step-by-step contrast
• Hate (option 2): affective state; no institutional proposal.
• Existence (option 3): ontology; no ought.
• Generic comparison (option 4): no reference to dropout symptoms on campus.

Takeaway
For “which is an argument about X,” the winning line usually names X’s defect and a proportional response.`,
    expert: `In-depth (Expert) — campus Wi-Fi

Logical structure
Let D = “Campus Wi-Fi keeps dropping” (service-quality claim).
Let A = “The university should add more access points” (action claim).
The correct option has the form: D; therefore A (or D as support for A).

Burden of the distractors
They omit either the diagnostic premise specific to this network’s instability or the normative conclusion directed at the institution.

Expert-level caveat (not required to pick the answer)
Adding APs is one possible remedy; others might include backhaul upgrades or spectrum policy. The question does not require comparing remedies—only recognizing which option constitutes an argument.`,
  },

  1004: {
    beginner: `In-depth (Beginner) — vending machines

Find the line with a reason + a should
• Empty machines → restock twice daily: that is an argument (shortage as reason for a schedule).
• "I prefer snacks." — Not about restocking.
• "Vending machines exist." — Not an argument.
• "Snacks are better than salads." — Opinion, unrelated to empty machines.

Correct option
The one that uses emptiness as the reason to change how often someone refills the machines.`,
    intermediate: `In-depth (Intermediate) — vending machines

Steps
1. Situation described: machines run out of stock.
2. Proposed action: restock twice a day instead of less often.
3. Implicit link: current restock frequency is insufficient given observed emptiness.

Only the correct answer makes that link explicit enough to count as an argument in this quiz’s sense.

Contrast
Preferences and bare existence claims do not move from observation to operational policy.`,
    expert: `In-depth (Expert) — vending machines

Reconstruction
Premise: the machines are empty (implies unmet demand or insufficient replenishment).
Conclusion: adopt a twice-daily restocking policy.
This is operational reasoning: a state variable (stock level) triggers a process change.

Why other options fail
They do not instantiate the premise–conclusion support relation required to answer “which is an argument about the vending machines on campus.”`,
  },

  1005: {
    beginner: `In-depth (Beginner) — exam-week library hours

What counts as an argument here
A reason related to library use during finals, plus a policy about hours.

The winning sentence
"Finals week packs the library, so hours should extend to midnight."
Crowding during finals supports longer opening hours.

Why not the others
Loving libraries, books on floors, or “midnight is cool” do not give a finals-related reason for extending hours.`,
    intermediate: `In-depth (Intermediate) — exam-week library hours

Step-by-step
Step 1 — Topic filter: the question asks about exam-week library hours. The answer must speak to demand pressure during that period.
Step 2 — The correct option cites high occupancy (“packs the library”) as the driver for extended hours.
Step 3 — Map: high demand during a defined window → extend service window.

Distractors skip the inferential bridge from observed crowding to a schedule change.`,
    expert: `In-depth (Expert) — exam-week library hours

Analysis
The argument pairs a time-indexed stress on facilities (finals week) with a normative claim about operating hours. Alternatives either ignore exam week or supply no policy consequence.

This is a capacity-and-access pattern common in service arguments.`,
  },

  1006: {
    beginner: `In-depth (Beginner) — bike lanes at intersections

Look for danger + what the city should do
The correct line says the lane disappears at intersections, riders get pushed into traffic, and the city should finish the lane.

Other options: fun, paint, or “intersections exist” — none give that safety + infrastructure argument.`,
    intermediate: `In-depth (Intermediate) — bike lanes at intersections

Structured read
1. Hazard: lane ends → conflict with motor traffic.
2. Remedy: complete the lane through the intersection (continuous protected or marked path).

Step-by-step elimination
• “Bikes are fun” — no hazard.
• “Bike lanes are painted” — descriptive only.
• “Intersections exist” — trivially true; no policy.

Takeaway
Arguments about safety infrastructure cite a failure mode and a design fix.`,
    expert: `In-depth (Expert) — bike lanes at intersections

Expert reconstruction
Premise set: geometric discontinuity of infrastructure forces merging behavior; merging increases risk.
Conclusion: municipal obligation to complete the facility.

This is a standard harm-reduction argument in transport ethics, independent of whether you agree with the engineering details in real life.`,
  },

  1007: {
    beginner: `In-depth (Beginner) — LED streetlights

Argument = energy fact + policy
"LED bulbs use less energy, so the city should retrofit the streetlights" links efficiency to action.

Tall poles, liking bright lights, or “electricity exists” are not that argument.`,
    intermediate: `In-depth (Intermediate) — LED streetlights

Walkthrough
Step 1 — Identify the energy premise: LEDs reduce consumption relative to incumbent technology.
Step 2 — Identify the conclusion: municipal retrofit program.
Step 3 — Confirm the connector “so” signals support.

Other options lack either the efficiency premise or the retrofit conclusion.`,
    expert: `In-depth (Expert) — LED streetlights

Logical pattern
Technological attribute (lower energy intensity) → justified as a reason for capital expenditure (retrofit). Externalities like light pollution are not in the text; the question only asks which line is an argument.`,
  },

  1008: {
    beginner: `In-depth (Beginner) — cafeteria food waste

The correct line
Students throw away untouched food → cafeteria should offer smaller portions. Waste is the reason; portion choice is the fix.

Other lines: existence, dessert preference, or “waste is sad” without a remedy — not the structured argument.`,
    intermediate: `In-depth (Intermediate) — cafeteria food waste

Steps
1. Empirical claim: untouched food is discarded (waste).
2. Procedural response: allow smaller portions so students take only what they will eat.

This matches “problem observation → cafeteria policy.”

Contrast: “Food waste is sad” might motivate action but does not specify the portion-size mechanism the correct option provides.`,
    expert: `In-depth (Expert) — cafeteria food waste

Expert note
The argument is a design-level response to a waste stream. Competing options do not articulate premise–conclusion support about portion sizing; they stop at mood or existence claims.`,
  },

  1009: {
    beginner: `In-depth (Beginner) — hybrids and air quality

Find the causal argument
The correct option: hybrids reduce emissions, therefore local air quality improves.

"Very quiet" and "I prefer driving" are not air-quality arguments. "Technology exists" is not a reasoned link.`,
    intermediate: `In-depth (Intermediate) — hybrids and air quality

Step-by-step
1. Premise: lower tailpipe emissions (relative to conventional vehicles in the intended comparison).
2. Conclusion: improvement in local air quality.
3. The question is specifically about air quality; only the keyed option connects emissions to air.

Takeaway
Causal arguments name a mechanism (fewer pollutants released) and an environmental outcome.`,
    expert: `In-depth (Expert) — hybrids and air quality

Structure
Emissions reduction → fewer airborne pollutants in the locality → better air quality (ceteris paribus). The distractors omit the emissions–air-quality bridge required by the prompt.`,
  },

  1010: {
    beginner: `In-depth (Beginner) — remote work and overhead

The argument to pick
Remote work reduces the need for office space, so it lowers overhead costs. Less square footage → less rent/utilities.

Video calls alone, couch preference, or “offices exist” do not make that economic case.`,
    intermediate: `In-depth (Intermediate) — remote work and overhead

Procedure
1. Economic premise: less demand for physical office capacity.
2. Financial conclusion: lower fixed costs (overhead).
3. Match to the question’s “overhead costs” theme.

Step-by-step vs. distractors
• Video calls: technology mention without the real-estate premise.
• Couch preference: irrelevant to cost structure.
• Offices exist: no comparative cost claim.

Takeaway
This is a classic “asset-light” reasoning pattern in business arguments.`,
    expert: `In-depth (Expert) — remote work and overhead

Expert reconstruction
Premise: distributed work reduces required leasable area.
Conclusion: aggregate overhead falls (holding other variables fixed).
The keyed option is the only one that makes the real-estate–cost inference explicit enough for this assessment.`,
  },

  1011: {
    beginner: `In-depth (Beginner) — organic farming and soil health

What to pick
The line that gives a **reason** (what organic farming does or avoids) for a **conclusion** about soil.

Walk the options
• "Organic farming avoids synthetic pesticides, so it preserves long-term soil health." — Links method (no synthetic pesticides) to outcome (soil health). **Argument.**
• "Organic apples look nice." — Appearance only; no soil reasoning.
• "I prefer organic milk." — Preference.
• "Soil exists in many types." — Geography fact; no organic-practice link.

Why this is the answer
Only the first option uses a premise about farming practice to support a claim about long-term soil condition.`,
    intermediate: `In-depth (Intermediate) — organic farming and soil health

Step-by-step
1. Restate the question: you need an **argument about organic farming and soil health**—not just "organic" in passing.
2. Identify premise and conclusion in the keyed option:
   - Premise: avoiding synthetic pesticides (a defining feature of organic farming in this item).
   - Conclusion: this preserves long-term soil health.
3. Check the connector "so": it signals that the first clause is offered as support for the second.
4. Eliminate distractors:
   - Nice-looking apples: no causal link to soil biology.
   - Milk preference: irrelevant to soil.
   - Types of soil: does not argue that organic methods help soil.

Takeaway
Ecological arguments often pair a **practice** with a **stated environmental effect**; that is the pattern here.`,
    expert: `In-depth (Expert) — organic farming and soil health

Logical reconstruction
Let M = organic farming avoids synthetic pesticides (methodological claim).
Let S = organic farming preserves long-term soil health (outcome claim).
The keyed option asserts M as support for S. The exam does not require empirical proof here—only recognition of argumentative structure.

Distractor analysis
Options that report taste, aesthetics, or bare existence do not instantiate the premise–conclusion relation "practice → soil outcome."

Pedagogical caveat
In real agronomy, soil health depends on many factors; this question isolates **argument structure**, not the truth of the empirical generalization.`,
  },

  1012: {
    beginner: `In-depth (Beginner) — public transport and traffic

Find one causal/policy line
The correct answer: public transport carries more people per vehicle, **so** it reduces traffic congestion.

Why the others fail
• "Trains are often long." — Description, no link to congestion.
• "I enjoy the subway." — Preference.
• "Traffic exists during rush hour." — Fact about traffic, not an argument that transit reduces it.`,
    intermediate: `In-depth (Intermediate) — public transport and traffic

Procedure
1. The question asks for an **argument about public transport and traffic**—you need both concepts connected by reasoning.
2. Map the keyed option:
   - Premise: higher occupancy per vehicle (more people moved per bus/train vs. many single-occupancy cars).
   - Conclusion: less congestion (fewer vehicles per person on the road network).
3. The word "so" marks the inferential step from efficiency to congestion relief.
4. Contrast with distractors: none of them build a bridge from transit mode to traffic reduction.

Takeaway
This is **systems-level reasoning**: vehicle throughput and lane use, not personal enjoyment of transit.`,
    expert: `In-depth (Expert) — public transport and traffic

Expert analysis
The argument’s implicit comparison class is typically “public transit vs. driving alone”: group transport can satisfy travel demand with fewer vehicles, which may reduce congestion **ceteris paribus**. The keyed option compresses that into one sentence.

Why this is not merely correlation
The structure is explicitly argumentative (premise offered for a conclusion), not a statistical report.

Limitation (outside the quiz key)
Congestion also depends on land use, pricing, and scheduling; the item only tests identification of an argument, not transport economics completeness.`,
  },

  1013: {
    beginner: `In-depth (Beginner) — solar panels and energy bills

Note the correct option index
The argument is the **second** option: solar panels generate electricity from sunlight, **so** they lower monthly energy bills.

Why not the others
• "Solar panels are shiny." — Irrelevant to bills.
• "I want solar panels." — Desire, not a bill argument.
• "Electricity is important." — Too vague; no generation-or-cost link.`,
    intermediate: `In-depth (Intermediate) — solar panels and energy bills

Step-by-step
1. Read each option against the prompt: **solar panels and energy bills**.
2. The keyed option has two parts:
   - Physical mechanism: generate electricity from sunlight (on-site production).
   - Economic consequence: lower monthly bills (less energy purchased from the grid, in the intended story).
3. "So" connects mechanism to money saved.
4. Shiny panels / wanting panels / "electricity is important" do not spell out production → cost.

Takeaway
**Bill** arguments need a path from generation or efficiency to expenditure; only one option does that.`,
    expert: `In-depth (Expert) — solar panels and energy bills

Reconstruction
Premise: photovoltaic generation from sunlight.
Conclusion: reduced monthly energy bills.
The warrant is implicit: self-generation offsets retail purchases (ignoring upfront capital cost for this Level 0 skill).

Distractor taxonomy
Aesthetic, volitional, and generic importance claims lack the production–expenditure bridge.`,
  },

  1014: {
    beginner: `In-depth (Beginner) — Scene: History

What “argument” means here
A **claim supported by a reason**—not a favorite subject or empty praise.

Options
• "I prefer History." — Preference.
• "History is definitely better." — Assertion without reasons.
• "Artifacts are fragile, so they need careful handling." — **Premise + conclusion** (fragility → careful handling).
• "History exists." — Bare existence.

Correct choice
The third option: fragility supports the handling prescription.`,
    intermediate: `In-depth (Intermediate) — Scene: History

Method
1. Ignore the word "History" in the scene label for picking favorites—it is there to set a museum/archive vibe, not to justify picking "I prefer."
2. For each line, ask: is one part given as a **reason** for another?
3. Only "Artifacts are fragile, so they need careful handling" does this: the first clause supports the normative second clause (how we ought to treat artifacts).

Step-by-step elimination
• Preferences and "X is better" without criteria are not structured arguments in this exercise.
• "History exists" is not an argument for careful handling.

Takeaway
The **scene** is flavor; the logic task is always premise–conclusion structure.`,
    expert: `In-depth (Expert) — Scene: History

Formal read
Let F = artifacts are fragile.
Let H = they need careful handling.
The keyed option presents F as support for H (often implicitly: fragility raises risk of damage, hence care norms).

Contrast with non-arguments
Pure preference and unqualified comparative praise lack a supporting premise explicitly tied to the conclusion.`,
  },

  1015: {
    beginner: `In-depth (Beginner) — Scene: Art

Pick the real argument
• "Red and blue make purple, so mix them for violet." — Color-mixing fact → instruction; **argument** linking reason to action/result.
• "I prefer Art." / "Art is definitely better." — Not premise–conclusion support.
• "Art exists." — Not an argument.`,
    intermediate: `In-depth (Intermediate) — Scene: Art

Steps
1. The scene label "Art" is thematic; the logical work is in the third option.
2. Premise: red + blue yields purple (color theory claim in the text).
3. Conclusion: mix them for violet (the option ties mixing to achieving a hue—in context, the inferential move is "given this fact, do this to get that").
4. Distractors are preference, bare comparison, or existence without reasoning chain.

Takeaway
Even a short craft tip can be an **argument** if one statement is offered as a reason for another.`,
    expert: `In-depth (Expert) — Scene: Art

Expert note
The item tests whether you see **inferential structure** in a concrete sentence. The comparative and existential distractors are deliberately flat so that only one line performs the speech-act "because P, therefore Q / do Q."

Boundary
In real pedagogy, "violet" vs "purple" nuance is not examined here—only argumentative form.`,
  },

  1016: {
    beginner: `In-depth (Beginner) — Scene: Traffic

The argument about stopping
"The light is red, so drivers must stop." — Traffic rule reasoning: signal state → obligation.

Not arguments here
• Preference for "Traffic" as a topic.
• "Traffic is definitely better."
• "Traffic exists."`,
    intermediate: `In-depth (Intermediate) — Scene: Traffic

Analysis
1. Premise: the light is red (traffic control state).
2. Conclusion: drivers must stop (normative driving requirement).
3. The item uses a familiar **regulative** argument: physical fact about the signal under standard rules supports the action.

Elimination
Preferences and existence claims do not encode rule-based oughts.

Takeaway
Arguments appear in **norms and safety**, not only in debates or essays.`,
    expert: `In-depth (Expert) — Scene: Traffic

Reconstruction
This is a textbook bridge from **is** (light state) to **ought** (required stopping) under implicit legal/regulatory background assumptions. The quiz treats the keyed sentence as having argumentative structure: the red light is cited as the reason for the stopping requirement.

Distractors lack any premise–conclusion support relation.`,
  },

  1017: {
    beginner: `In-depth (Beginner) — Scene: Biology

Sleep and students
"Lack of sleep affects focus, so students should rest." — Harm to cognitive function → prescriptive conclusion about rest.

Not arguments
• Subject preference, "Biology is better," "Biology exists."`,
    intermediate: `In-depth (Intermediate) — Scene: Biology

Step-by-step
1. Premise: sleep deprivation impacts focus (performance claim).
2. Conclusion: students should rest (behavioral recommendation).
3. The "so" signals that the first claim supports the second (well-being / performance reasoning).

Why distractors fail
They do not connect a biological/psychological effect to a **should** about behavior.`,
    expert: `In-depth (Expert) — Scene: Biology

Expert framing
The structure is a **prudential** argument: if lack of sleep undermines focus, then (ceteris paribus) rest is advised. The item does not require citing studies—only recognizing premise-supported prescription.

Contrast with pure preference or existence statements.`,
  },

  1018: {
    beginner: `In-depth (Beginner) — Scene: Economics

Supply and prices
"Supply is low, so prices will rise." — Classic micro story: scarcity pressure → price movement.

Other options: preference, "Economics is better," "Economics exists" — no supply–price link.`,
    intermediate: `In-depth (Intermediate) — Scene: Economics

Walkthrough
1. Premise: low supply (relative to demand, implicitly).
2. Conclusion: prices will rise.
3. This is argumentative **forecasting** with an economic mechanism named in the premise.

Takeaway
You are not asked to evaluate whether the forecast is true in every market—only to see that this line gives a **reason** for the price claim.`,
    expert: `In-depth (Expert) — Scene: Economics

Logical structure
A partial equilibrium–style link: supply restriction → upward pressure on price. Distractors omit any economic mechanism connecting scarcity to price.

Pedagogical boundary
Real markets add elasticity, expectations, and policy; Level 0 only tests argument shape.`,
  },

  1019: {
    beginner: `In-depth (Beginner) — Scene: Zoology

Dogs and company
"Dogs are social, so they need company." — Trait → welfare implication.

Not arguments: preference for Zoology, "Zoology is better," "Zoology exists."`,
    intermediate: `In-depth (Intermediate) — Scene: Zoology

Steps
1. Premise: dogs are social animals (behavioral/biological claim).
2. Conclusion: they need company (care implication).
3. The "so" marks support from species-typical behavior to a prescription about keeping company.

Takeaway
**Ethological** premises can support **care** conclusions; that is still "argument" in our sense.`,
    expert: `In-depth (Expert) — Scene: Zoology

Expert read
The argument moves from a general species characteristic to a welfare-oriented ought. Strength depends on context (pet vs. wild dogs), but the quiz only asks for argumentative structure, not veterinary completeness.`,
  },

  1020: {
    beginner: `In-depth (Beginner) — Scene: Music

Out of tune → bad sound
"The guitar is out of tune, so it will sound bad." — Physical state of the instrument → predicted auditory result.

Other lines: preference, "Music is better," "Music exists."`,
    intermediate: `In-depth (Intermediate) — Scene: Music

Procedure
1. Premise: guitar is out of tune (setup/state).
2. Conclusion: it will sound bad (performance quality).
3. Causal–predictive reasoning about musical performance.

Distractors do not link instrument state to sound quality.

Takeaway
Arguments show up in **craft and performance**, not only in op-eds.`,
    expert: `In-depth (Expert) — Scene: Music

Reconstruction
The keyed option is a simple **instrumental** inference: tuning state is offered as the reason for the aesthetic/auditory evaluation. Distractors lack premise–conclusion structure.`,
  },

  1021: {
    beginner: `In-depth (Beginner) — community bake-off

What counts as an argument
A **claim backed by a reason**—here, baking conditions linked to an outcome.

The options
• "Cupcakes are trendy this year." — Fashion comment, not a heat→texture chain.
• "The oven is too hot, so the sponge will dry out." — **Premise** (excessive heat) supports **conclusion** (dried sponge). Argument.
• "This kitchen smells like vanilla." — Sensory note.
• "Butter is on sale at the store." — Shopping fact, unrelated to the oven.

Correct line
The second option: causal baking reasoning in one sentence.`,
    intermediate: `In-depth (Intermediate) — community bake-off

Step-by-step
1. Read the prompt: at a bake-off, which line is an argument—not just chatter?
2. Decompose the keyed sentence:
   - Observation about equipment state: oven temperature too high for the bake.
   - Predicted baking failure mode: sponge cake dries out.
3. "So" signals that the heat claim is the **reason** for the drying prediction.
4. Trendiness, smell, and butter price do not connect appliance state to product quality.

Takeaway
Cooking items often encode **if cause-like condition, then outcome**—that is argumentative structure even when informal.`,
    expert: `In-depth (Expert) — community bake-off

Logical reconstruction
Let H = the oven is too hot (relative to what the sponge needs). Let D = the sponge will dry out. The text offers H as support for D. Empirical adequacy is not graded; **argument identification** is.

Distractor taxonomy
Non-inferential remarks (trends, aromas, unrelated sale) lack the premise–conclusion relation.`,
  },

  1022: {
    beginner: `In-depth (Beginner) — sprint heat

Argument vs. preference
The question asks for a line that gives a **reason** for an expectation—not just what you enjoy.

Keyed option
"You trained all month, so you should beat your previous heat time." — Past training effort → performance expectation.

Why others fail
Love of the starting gun, track shape, spike colors: none tie **your training** to **your time**.`,
    intermediate: `In-depth (Intermediate) — sprint heat

Analysis
1. Premise: month-long training (evidence of preparation).
2. Conclusion: you should beat your previous heat time (normative expectation about performance).
3. The inferential link is athletic: training is offered as a ground for expecting improvement vs. a past self benchmark.

Step-by-step elimination
• Starting-gun aesthetics: affect, not performance reasoning.
• Oval tracks / spike colors: background facts without a bridge to **your** result.

Takeaway
Sports contexts still use premise→conclusion; the premise must be about preparation or conditions relevant to the outcome.`,
    expert: `In-depth (Expert) — sprint heat

Expert note
The argument is **prudential forecasting**: training as warrant for expecting a better time. Real races add injury, tactics, and variance; the quiz isolates argumentative **form**.`,
  },

  1023: {
    beginner: `In-depth (Beginner) — hiking forecast

Pick the weather argument
"The barometer is falling fast, so expect rain before noon." — Instrument trend → precipitation forecast.

Not arguments
Liking clouds, "forecasts exist on apps," "rain is wet" (the last is a truism without inferential work in this list).`,
    intermediate: `In-depth (Intermediate) — hiking forecast

Procedure
1. Premise: rapid drop in barometric pressure (standard heuristic for approaching weather systems in many regions).
2. Conclusion: rain likely before noon (time-bounded prediction).
3. "So" marks meteorological reasoning—not proof, but **argumentative** support.

Contrast
Preferences and generic facts do not move from a **specific observation** to a **timed forecast**.

Takeaway
Everyday prediction often uses **sign → event** patterns; that is still argument structure.`,
    expert: `In-depth (Expert) — hiking forecast

Reconstruction
Empirical indicator (pressure tendency) offered as support for a precipitation claim. The item does not require meteorology exam depth—only recognition that one clause supports another.

Caveat
Barometer rules are region- and context-sensitive; irrelevant for the key.`,
  },

  1024: {
    beginner: `In-depth (Beginner) — car will not crank

Diagnostic argument
"The battery reads zero volts, so the starter motor will not turn." — Electrical state → mechanical consequence for starting.

Why not the others
Jump starters being heavy, four wheels, disliking the tow truck: no voltage→starter chain.`,
    intermediate: `In-depth (Intermediate) — car will not crank

Step-by-step
1. Symptom context: engine will not crank (from the prompt).
2. Keyed premise: battery at 0 V (no usable electrical potential for the intended circuit).
3. Conclusion: starter will not turn (the motor that cranks the engine needs sufficient electrical power in the standard story).
4. This is **mechanistic** argumentation: state of the power source → expected behavior of the load.

Takeaway
Technical domains use the same logic-surface as everyday policy talk: premise supporting a prediction or diagnosis.`,
    expert: `In-depth (Expert) — roadside diagnosis

Expert framing
The argument compresses automotive electrics: insufficient battery voltage → starter cannot operate as needed. Real garages check grounds, relays, and more; Level 0 only tests **support structure**.

Distractors lack electrical premise linked to starter behavior.`,
  },

  1025: {
    beginner: `In-depth (Beginner) — dim office desk plants

Plant care argument
"These leaves are etiolated, so move the pot closer to the window." — Symptom (stretching/paling from low light) → action.

Watch out
"Succulents never need water" is false as universal advice; "soil is brown" and "windows are glass" are not care arguments.`,
    intermediate: `In-depth (Intermediate) — dim office desk plants

Analysis
1. **Etiolation** in the text: plants stretching toward light, often paler—used here as evidence of insufficient light on the desk.
2. Conclusion: relocate the pot toward the window (intervention).
3. The "so" connects symptom to horticultural remedy.

Elimination path
• Never need water: exaggeration, not symptom→fix.
• Brown soil / glass windows: irrelevant to the etiolation diagnosis.

Takeaway
Practical arguments often move from **observed problem sign** to **recommended intervention**.`,
    expert: `In-depth (Expert) — office plants

Logical read
Diagnostic premise (light-starved growth pattern) supports prescriptive conclusion (move toward light). The quiz does not require botany credentials—only argumentative linkage.`,
  },

  1026: {
    beginner: `In-depth (Beginner) — reading room noise policy

Quiet as a reason
"Quiet is required for concentration, so speak softly at the tables." — Normative goal (concentration) → behavioral rule (soft speech).

Not arguments
Whispering being fashionable, shelves, book spines—no concentration→volume link.`,
    intermediate: `In-depth (Intermediate) — reading room noise policy

Step-by-step
1. Premise: quiet is necessary for concentration (a value/fact hybrid about the function of the space).
2. Conclusion: people should speak softly at the tables (noise level prescription).
3. Pattern: **purpose of the space** justifies **conduct norms**.

Contrast
Fashion and furniture facts do not ground library behavior rules in this exercise.

Takeaway
Institutional rules are often argued from **mission** (here, concentration) to **practice** (soft speech).`,
    expert: `In-depth (Expert) — reading room

Reconstruction
A **regulative** argument: cognitive goal (concentration) warrants low vocal volume. Similar in spirit to traffic-light rules but in a library normative context.`,
  },

  1027: {
    beginner: `In-depth (Beginner) — friend skips walks

Health-based prescription
"Regular movement supports cardiovascular health, so schedule a daily walk." — Benefit premise → planning conclusion.

Other lines
"Boring," sneakers existing, concrete sidewalks: not the health→daily walk argument.`,
    intermediate: `In-depth (Intermediate) — friend skips walks

Procedure
1. Target: a line that **argues for daily walking** when someone has been inactive (prompt).
2. Keyed structure:
   - General premise: regular movement benefits cardiovascular health.
   - Prescriptive conclusion: put a daily walk on the schedule.
3. "So" connects evidence-type claim to a concrete habit recommendation.

Takeaway
**Health promotion** arguments pair mechanism/benefit claims with behavioral oughts.`,
    expert: `In-depth (Expert) — sedentary friend

Expert note
Strength of epidemiological claims is not assessed; the task is recognizing premise-supported prescription. Pure boredom or infrastructure existence does not argue for the habit.`,
  },

  1028: {
    beginner: `In-depth (Beginner) — algebra quiz

Argument, not mere setup
"If x equals 5, then x plus 2 must equal 7." — Assumption about x → derived numerical claim.

Why not the others
"Let x be a number" sets context without inferential punch; primality of 7 and "equations use letters" are not the conditional chain asked for.`,
    intermediate: `In-depth (Intermediate) — algebra quiz

Step-by-step
1. Antecedent: x = 5 (assumed for the inference in this item).
2. Consequent: x + 2 must equal 7 (follows by arithmetic in standard arithmetic).
3. The question highlights **argument** because one claim is offered as sufficient for another—a toy model of **derivation**.

Contrast
Bare stipulation ("let x…") and isolated facts do not exhibit support in the same way.

Takeaway
Mathematical reasoning is argument-like: premises → conclusions, even in tiny steps.`,
    expert: `In-depth (Expert) — algebra item

Logical form
A conditional: if P (x=5), then Q (x+2=7), with Q presented as **forced** by P within the intended arithmetic. This illustrates **inferential support** in a formal domain.`,
  },

  1029: {
    beginner: `In-depth (Beginner) — rising tide at the beach

Coastal argument
"Water is advancing up the beach, so the dry area will shrink." — Observable motion → spatial consequence.

Not arguments
Fun sand, loud gulls, salty ocean—no tide→dry-zone reasoning.`,
    intermediate: `In-depth (Intermediate) — lifeguards / tide

Analysis
1. Premise: water advancing up the beach (flooding the shoreline).
2. Conclusion: the dry sand area will get smaller (less room above the wet line).
3. Physical **geometry + hydrology** in one inferential step—good for safety awareness.

Takeaway
Risk contexts often use **observed process → forecast about space/time** as argument structure.`,
    expert: `In-depth (Expert) — beach tide

Reconstruction
Monotonic advance of water inland reduces the extent of dry beach **ceteris paribus** (ignoring berm dynamics). The item tests whether students see premise→prediction, not full coastal engineering.`,
  },

  1030: {
    beginner: `In-depth (Beginner) — planetarium talk

Light-speed argument
"Light travels at finite speed, so we observe distant stars as they were long ago." — Physical fact → observational consequence.

Other options
Pretty stars, mirrors in telescopes, day/night sequence—no finite c → lookback time link.`,
    intermediate: `In-depth (Intermediate) — planetarium

Step-by-step
1. Premise: light has a finite speed (not infinite).
2. Conclusion: we see distant objects as they were in the past (light-travel time delay).
3. This is the standard **lookback time** story in popular astronomy.

Elimination
Telescope design and celestial aesthetics do not perform the same inferential work.

Takeaway
Science explanations are full of **mechanism → phenomenon** arguments; this is a flagship example.`,
    expert: `In-depth (Expert) — lookback time

Expert framing
The argument links a finiteness premise to an **epistemic/observational** conclusion about historical states of sources. Relativistic nuances and expansion are not required at Level 0; structure is.`,
  },

  1031: {
    beginner: `In-depth (Beginner) — apple demo from a balcony

Gravity as the reason
"Earth pulls masses toward its center, so the apple accelerates downward." — Physical law–style premise → motion conclusion.

Not arguments
Apple colors, railings, Newton’s name as history—none give **why** the apple accelerates downward in this demo.`,
    intermediate: `In-depth (Intermediate) — apple demo

Step-by-step
1. Context: demonstration drop from a balcony (prompt).
2. Keyed premise: Earth attracts masses toward its center (gravitational pull toward Earth).
3. Conclusion: the apple accelerates downward (toward Earth) when released.
4. "So" connects explanatory physics to expected kinematic behavior.

Elimination
• Color facts and balcony architecture do not argue for acceleration.
• Naming Newton does not, by itself, infer the apple’s motion.

Takeaway
Science demos often use **mechanism → prediction** argument shape.`,
    expert: `In-depth (Expert) — falling apple

Reconstruction
A quasi-nomological explanation: universal gravitation (stated minimally) warrants the downward acceleration claim for the released object near Earth’s surface, ignoring air resistance for the exercise.

Pedagogical boundary
The item tests argumentative **linkage**, not full Newtonian derivations.`,
  },

  1032: {
    beginner: `In-depth (Beginner) — language-practice plan

Fluency argument
"Fluency tracks with deliberate practice, so brief daily speaking beats monthly cramming." — Empirical-style premise → study-habit conclusion.

Other lines
Interesting accents, thick dictionaries, languages having grammar—no practice-schedule reasoning.`,
    intermediate: `In-depth (Intermediate) — language practice

Analysis
1. Premise: fluency covaries with deliberate practice (skill-acquisition claim).
2. Conclusion: short daily speaking is better than rare monthly cram sessions (scheduling prescription).
3. The argument compares **two regimes** using the practice–fluency link as the warrant.

Step-by-step
Ask: which option gives a **because** story about *how to practice*? Only the keyed line does.

Takeaway
Pedagogy arguments pair learning science claims with **concrete routines**.`,
    expert: `In-depth (Expert) — spaced vs massed practice

Expert note
The structure mirrors educational psychology themes (distributed practice). The quiz does not require citing studies—only recognizing premise-supported advice.`,
  },

  1033: {
    beginner: `In-depth (Beginner) — Wi-Fi fails on a video call

Network diagnosis
"The router shows offline, so this machine will not reach the internet." — Device state → connectivity outcome.

Why not the others
Video-call ideology, cable color trivia, modem lights—no router-offline→no internet chain.`,
    intermediate: `In-depth (Intermediate) — home office Wi-Fi

Procedure
1. Symptom frame: call drops / Wi-Fi failure during video (prompt).
2. Premise: router status is offline (no upstream path in the standard home setup story).
3. Conclusion: this computer will not reach the internet through that router.
4. This is **diagnostic** argumentation: status of a component → expected service failure.

Takeaway
IT troubleshooting is full of short premise→conclusion arguments.`,
    expert: `In-depth (Expert) — router offline

Logical read
The warrant assumes typical home topology: if the router is offline, end devices lose the usual route to the internet. Alternate paths (phone hotspot) are outside the text.`,
  },

  1034: {
    beginner: `In-depth (Beginner) — fragile museum pieces

Handling norm
"These materials crack under sudden force, so support them from below when moving." — Material vulnerability → handling rule.

Distractors
Old artifacts, admission fees, glass cases—no crack-under-force→support strategy.`,
    intermediate: `In-depth (Intermediate) — museum handling

Steps
1. Premise: sudden force can crack these materials (fragility under impact).
2. Conclusion: support from below while moving (procedural precaution).
3. The "so" connects risk of mechanical failure to a **conservation practice**.

Takeaway
Conservation arguments move from **damage mechanism** to **handling protocol**.`,
    expert: `In-depth (Expert) — museum movement

Reconstruction
Implicit warrant: supporting from below reduces harmful stress modes compared with gripping fragile spans. The item does not teach conservation certification—only argument structure.`,
  },

  1035: {
    beginner: `In-depth (Beginner) — mixing paint for a mural

Color-mix prediction
"Red pigment plus blue pigment yields purple here, so those two tubes will produce that swatch." — Mixing fact → outcome for this pair of tubes.

Not arguments
Trendiness, brush wear, canvas texture—no pigment→swatch inference.`,
    intermediate: `In-depth (Intermediate) — mural paint

Analysis
1. Premise: in this paint system, red + blue yields the mural’s purple.
2. Conclusion: these two tubes will produce **that** color swatch (the intended sample).
3. Connector "so" ties compositional chemistry/finet arts fact to a practical prediction.

Takeaway
Studio craft still uses **if composition, then observable result** reasoning.`,
    expert: `In-depth (Expert) — pigment mixing

Expert caveat
Real pigments are not ideal subtractive primaries; the question treats the premise as authoritative for the item’s world.`,
  },

  1036: {
    beginner: `In-depth (Beginner) — red light as a new driver

Traffic rule argument
"This signal is red, so traffic facing it must stop before the limit line." — Signal state → legal/standard obligation.

Other options
Brightness, intersection corners, brakes—no red→stop inference.`,
    intermediate: `In-depth (Intermediate) — red traffic light

Step-by-step
1. Premise: this signal is red (for your approach).
2. Conclusion: traffic facing it must stop before the stop line / limit line.
3. Background: traffic law and convention supply the warrant (implicit).

Takeaway
**Regulative** arguments abound in driving: state of the control → required action.`,
    expert: `In-depth (Expert) — stop line

Reconstruction
Is (signal color for approach) to ought (required stopping point) under implicit legal rules—same family as earlier library/traffic items, with driving-specific content.`,
  },

  1037: {
    beginner: `In-depth (Beginner) — why the study group takes breaks

Sleep and attention (first option)
"Sleep debt impairs attention, so short rests will help the session stay sharp." — Cognitive harm → break policy.

Note
Correct option index is **0** (first line), not the second.`,
    intermediate: `In-depth (Intermediate) — study breaks

Procedure
1. Premise: sleep debt hurts attention (performance claim).
2. Conclusion: short breaks will help maintain sharpness in the session (intervention claim).
3. "So" links fatigue mechanism to a **session design** choice.

Elimination
Chairs, coffee smell, exam season—irrelevant to break justification.

Takeaway
**Study hygiene** arguments cite cognitive limits to defend breaks.`,
    expert: `In-depth (Expert) — sleep debt

Expert read
A prudential argument: mitigate attentional impairment from fatigue with micro-rest. Empirical strength is not scored—structure is.`,
  },

  1038: {
    beginner: `In-depth (Beginner) — sold-out concert, ticket prices

Resale economics
"Few seats remain, so resale listings will ask more than face value." — Scarcity → price premium on secondary market.

Not about prices
Merch tables, speakers, fans liking music—no scarcity→resale-price claim.`,
    intermediate: `In-depth (Intermediate) — concert tickets

Analysis
1. Premise: very few seats left (high scarcity / excess demand signal).
2. Conclusion: resale prices will exceed face value (secondary-market prediction).
3. Classic **supply–demand story** in informal argument form.

Takeaway
Economics-style forecasting appears as premise→price prediction.`,
    expert: `In-depth (Expert) — resale premium

Caveat
Many jurisdictions regulate scalping; the item is about **argument identification**, not policy approval.`,
  },

  1039: {
    beginner: `In-depth (Beginner) — city noise rules

Policy argument (third option)
"Because late-night traffic keeps residents awake, the city should add a quiet-hours rule." — Harm (lost sleep) → regulatory proposal.

Scan the distractors
• "The city has noise rules." — Reports existence, no new policy argument.
• "I hate how loud my street is." — Complaint without structured remedy.
• "Noise complaints exist in every district." — General fact, not a targeted ought.

Correct index
**2** (third answer choice).`,
    intermediate: `In-depth (Intermediate) — quiet hours

Step-by-step
1. Identify the **because** clause: late-night traffic keeps residents awake (sleep disruption as civic harm).
2. Identify the **should**: add a quiet-hours rule (new norm or ordinance).
3. Map: problem affecting residents → municipal policy response.

Takeaway
Urban policy items often follow **problem evidence → regulatory conclusion**.`,
    expert: `In-depth (Expert) — noise ordinance argument

Reconstruction
A policy argument: empirical/normative premise about resident welfare + institutional capacity to regulate noise windows. Evaluation of legal feasibility is out of scope for the key.`,
  },

  1040: {
    beginner: `In-depth (Beginner) — school jazz band tuning

Intonation argument
"The lead guitar is a quarter-step flat, so that chord will sound sour until it is fixed." — Tuning defect → auditory evaluation + fix imperative.

Other lines
Jazz history, "music uses notes," rehearsal chairs—no intonation→sour chord chain.`,
    intermediate: `In-depth (Intermediate) — jazz rehearsal

Procedure
1. Premise: lead guitar is a quarter-step flat (specific intonation error).
2. Conclusion: the chord will sound sour **until** corrected (conditional sonic prediction).
3. Implicit warrant: ensemble harmony requires matching pitch centers.

Takeaway
Music rehearsal uses **fault diagnosis → sonic consequence** arguments constantly.`,
    expert: `In-depth (Expert) — quarter-step flat

Expert note
A quarter-tone mismatch is musically meaningful; the item uses it to make the flaw vivid. The quiz tests logical support, not ear training.`,
  },

  1041: {
    beginner: `In-depth (Beginner) — cupcakes pulled early

First option (index **0**)
"The crumb still looks wet, so give them five more minutes or they will collapse." — Underbaked sign → bake longer or structural failure.

Other lines
Sweet frosting, pleated papers, bakery hours—no crumb→collapse reasoning.`,
    intermediate: `In-depth (Intermediate) — underbaked cupcakes

Step-by-step
1. Premise: the crumb still looks wet (insufficient set / moisture not driven off).
2. Conclusion: add five more minutes **or** the cupcakes will collapse (conditional prediction + instruction).
3. "So" bundles **diagnosis** with **remedy** and **bad outcome** if ignored.

Takeaway
Baking arguments often pair **visual state of the crumb** with **time adjustment**.`,
    expert: `In-depth (Expert) — structural collapse risk

Reconstruction
A practical conditional: if baking stops now (wet crumb), then collapse is likely unless additional heat-time fixes the set. The item tests argumentative packaging, not pastry certification.`,
  },

  1042: {
    beginner: `In-depth (Beginner) — relay training logs

First option (index **0**)
"Their split times improved all spring, so they are likely to beat last year's record." — Trend in splits → forecast vs. past benchmark.

Not arguments
Batons, lanes, aerobic running—no training-trend→record claim.`,
    intermediate: `In-depth (Intermediate) — relay teams

Analysis
1. Premise: split times improved throughout spring (trajectory of performance).
2. Conclusion: likely to beat last year's record (probabilistic athletic prediction).
3. "So" marks inductive sports reasoning—strength not guaranteed, but **support** is explicit.

Takeaway
**Trend-as-evidence** arguments are common in athletics.`,
    expert: `In-depth (Expert) — performance forecasting

Caveat
Injury, competition conditions, and small-sample noise matter in real life; the quiz only asks for premise→conclusion structure.`,
  },

  1043: {
    beginner: `In-depth (Beginner) — picnic forecast

Second option (index **1**)
"Radar shows a squall line approaching, so pack the rain fly for the pavilion." — Weather feature → shelter gear.

Other options
Wicker baskets, green grass, ants—no storm→rain-fly reasoning.`,
    intermediate: `In-depth (Intermediate) — picnic planning

Procedure
1. Premise: radar indicates an approaching squall line (organized convection hazard).
2. Conclusion: bring the pavilion rain fly (protective equipment).
3. Practical **risk-management** argument: meteorological signal → packing decision.

Takeaway
Outdoor planning items link **observation of threatening weather** to **preparedness**.`,
    expert: `In-depth (Expert) — squall line

Expert note
"Squall line" names a specific radar pattern; the keyed sentence uses it as warrant for shelter prep.`,
  },

  1044: {
    beginner: `In-depth (Beginner) — securing community-garden tools

Policy line (index **0**)
"We should build a lockable shed because tools keep getting stolen." — Recurring theft → secure storage.

Scan distractors
Love of gardening, "gardens are fun," shiny tools—no theft→shed argument.`,
    intermediate: `In-depth (Intermediate) — tool security

Step-by-step
1. Problem evidence: tools keep disappearing (ongoing theft).
2. Proposed action: build a **lockable** shed (security upgrade).
3. "Because" makes theft the explicit warrant for the capital/maintenance proposal.

Takeaway
**Crime / loss** premises often support **physical security** conclusions.`,
    expert: `In-depth (Expert) — community garden security

Reconstruction
A straightforward means–ends argument: reduce theft risk by controlling access to tools. Cost-benefit and governance are outside the key.`,
  },

  1045: {
    beginner: `In-depth (Beginner) — monitoring night sky before storms

First option (index **0**)
"Meteorologists track the night sky so coastal towns can warn fishers early." — Monitoring activity → early-warning capacity for a vulnerable group.

Other lines
Beauty of sky, stars existing, telescope cost—no monitoring→early-warning chain.`,
    intermediate: `In-depth (Intermediate) — storm preparedness

Analysis
1. Activity: meteorologists track the night sky (observation/monitoring practice).
2. Beneficiary outcome: coastal towns can **warn fishers early** (risk reduction).
3. Implicit warrant: night-sky cues feed forecasts that protect marine workers.

Note
French bank uses fishing ports / marins—same argumentative skeleton.`,
    expert: `In-depth (Expert) — early warning

Reconstruction
Instrumental argument: surveillance enables timely alerts; distractors lack the monitoring→alert pathway.`,
  },

  1046: {
    beginner: `In-depth (Beginner) — school water fountain

Lead contamination (index **0**)
"Lead was detected in the fountain, so the school should replace it immediately." — Hazard found → urgent replacement.

Not arguments
Shininess, bottled-water preference, hallways—no lead→replace chain.`,
    intermediate: `In-depth (Intermediate) — drinking water safety

Steps
1. Premise: lead detected in the fountain (potable-water contamination).
2. Conclusion: replace the fountain **immediately** (urgency operator).
3. Public-health style argument: toxic exposure risk → hardware swap.

Takeaway
**Detection → remediation** is a core policy pattern.`,
    expert: `In-depth (Expert) — lead in plumbing

Expert note
Action thresholds and funding are real-world complications; Level 0 isolates **support structure** for immediate replacement.`,
  },

  1047: {
    beginner: `In-depth (Beginner) — counseling waitlists

Capacity argument (index **0**)
"The counseling waitlist is six weeks long, so the university should hire another therapist." — Queue length → staffing fix.

Distractors
Chairs, therapists' education, liking quiet rooms—no waitlist→hire reasoning.`,
    intermediate: `In-depth (Intermediate) — mental health access

Procedure
1. Premise: six-week wait (service delay / access bottleneck).
2. Conclusion: hire an additional therapist (capacity expansion).
3. "So" connects queue evidence to human-resources prescription.

Takeaway
**Service-system** arguments map delays to **resource** recommendations.`,
    expert: `In-depth (Expert) — wait time

Reconstruction
Queue-length rationale for hiring: standard operations-research story at introductory level.`,
  },

  1048: {
    beginner: `In-depth (Beginner) — homework proof review

Second option (index **1**)
"If k is even, then k squared is even—because k equals 2m for some integer m." — Definition of evenness supports the square being even.

Not the proof task
"Proofs use logic" (generic), "even numbers are integers," "homework is printed."`,
    intermediate: `In-depth (Intermediate) — number theory sketch

Walkthrough
1. Claim: if k is even, k² is even.
2. Support: k = 2m for some integer m (standard characterization of even integers).
3. The "because" clause supplies the **reason** connecting parity of k to parity of k² (students may finish the algebra elsewhere).

Takeaway
Math proofs are **arguments**: conclusions backed by definitions and lemmas.`,
    expert: `In-depth (Expert) — even square

Logical form
An argument from definitional instantiation: even → ∃m(k=2m) → (with routine steps) k² is even. The item rewards recognizing explicit **because** support.`,
  },

  1049: {
    beginner: `In-depth (Beginner) — tide table and shoreline survey

First option (index **0**)
"Low tide exposes more tide pools, so schedule the transect for that window." — Ecological access → timing of field work.

Other lines
Printed tide books, granular sand, noisy waves—no tide-window→transect scheduling.`,
    intermediate: `In-depth (Intermediate) — field scheduling

Analysis
1. Premise: low tide exposes more tide pools (greater accessible habitat for sampling).
2. Conclusion: run the transect in that tidal window (optimize data collection).
3. Field-science reasoning: natural state → experimental/survey timing.

French note
FR uses **basse mer** / **flaques**—same logic as EN tide pools.`,
    expert: `In-depth (Expert) — tidal window

Reconstruction
Operational argument linking exposure extent to **when** to sample; safety (rising tide) could be added in real protocols but is not required here.`,
  },

  1050: {
    beginner: `In-depth (Beginner) — explaining starlight to a tour

Second option (index **1**)
"Starlight began its journey years ago, so we see the star as it was in the past." — Light travel time → historical appearance.

Not arguments
Telescope expense, constellation names, cloudy nights—no travel-time→past-state inference.`,
    intermediate: `In-depth (Intermediate) — lookback (tour script)

Step-by-step
1. Premise: starlight has been traveling for years (non-zero light travel time).
2. Conclusion: we observe the star as it was in the past (not instantaneously as it is "now").
3. Same conceptual family as the planetarium item on finite *c*, packaged for a walking tour.

Takeaway
Astronomy education repeatedly uses **travel delay** arguments.`,
    expert: `In-depth (Expert) — light-time

Expert framing
Connects emission-time vs. reception-time; relativistic and cosmological corrections omitted at Level 0.`,
  },

  1051: {
    beginner: `In-depth (Beginner) — identify the premise (gravity / apple)

What the question wants
In "Since Gravity pulls objects down, the apple will fall," pick the **premise**: the reason offered, not the prediction.

Correct choice (index **0**)
**"Gravity pulls objects down"** — this is what "Since" introduces.

Not the premise
• "The apple will fall" — that is the **conclusion** (what follows from the reason).
• "Since" — a cue word, not a content premise.
• "None" — incorrect; there is a premise.`,
    intermediate: `In-depth (Intermediate) — premise vs. conclusion

Step-by-step
1. Copy the argument: Since [first clause], [second clause].
2. Label roles:
   - Premise / evidence: gravity pulls objects down (general physical claim used as a reason).
   - Conclusion: the apple will fall (specific outcome in the demo).
3. The exam uses **Since** as a marker that the **first** content clause is the premise being assumed or cited.

Takeaway
Premises answer "what are we treating as given or as our reason?"—here, gravitational pull.`,
    expert: `In-depth (Expert) — antecedent content

In a loose "since P, Q" layout, P is the **antecedent** in the sense of "what comes first as support." The apple-fall claim is the **consequent** outcome in the narrative. The distractor "the apple will fall" is the target of the inference, not the supporting proposition.`,
  },

  1052: {
    beginner: `In-depth (Beginner) — practice / speak daily

Premise
**"Practice improves fluency"** — the claim about learning that backs the advice.

Conclusion (not what you select)
"You should speak daily" — the prescription follows **from** the premise about practice.`,
    intermediate: `In-depth (Intermediate) — language-learning argument

Procedure
1. Split the sentence after the comma: clause A (after Since), clause B.
2. Clause A states a **relationship** between practice and fluency—your **reason**.
3. Clause B states what you **should do**—the **conclusion** supported by that reason.

Takeaway
Policy advice ("you should…") is usually the conclusion; empirical claims about practice are often premises.`,
    expert: `In-depth (Expert) — prudential structure

The premise is the generalization about practice and fluency; the conclusion is a **prudential ought** about daily speaking. Identifying the premise means identifying the **supporting proposition**, not the imperative.`,
  },

  1053: {
    beginner: `In-depth (Beginner) — router / Wi-Fi

Premise
**"The router is off"** — the factual state of the network.

Conclusion
"The Wi-Fi won't work" — the expected failure follows from that state.`,
    intermediate: `In-depth (Intermediate) — diagnostic split

Steps
1. "Since" introduces the **diagnostic premise**: router off.
2. The second clause is the **predicted consequence** about Wi-Fi—conclusion in the quiz's labeling.
3. Do not confuse the cue word "Since" with a substantive premise.

Takeaway
In tech troubleshooting, **device state** premises support **service** conclusions.`,
    expert: `In-depth (Expert) — causal background

The premise is the **obtained** fact about power/state; the conclusion is the **functional** claim about connectivity. This mirrors standard "if hardware condition, then service outcome" reasoning.`,
  },

  1054: {
    beginner: `In-depth (Beginner) — fragile artifacts

Premise
**"Artifacts are fragile"** — material vulnerability.

Conclusion
"They need careful handling" — handling norms are supported by fragility.`,
    intermediate: `In-depth (Intermediate) — conservation

Analysis
1. First clause: fragile → establishes **risk**.
2. Second clause: careful handling → **normative response** to that risk.
3. The premise is the **descriptive** claim about fragility; the conclusion is the **prescriptive** claim about handling.

Takeaway
**Descriptive → prescriptive** moves make the first clause the premise in this format.`,
    expert: `In-depth (Expert) — support relation

Fragility is offered as the **reason** for the care requirement. Selecting "they need careful handling" mistakes the **supported claim** for the **supporting premise**.`,
  },

  1055: {
    beginner: `In-depth (Beginner) — mixing colors

Premise
**"Red and blue make purple"** — the color-mixing fact.

Conclusion
"Mix them for violet" — the instruction follows from the mixing fact.`,
    intermediate: `In-depth (Intermediate) — craft instruction

Step-by-step
1. The premise states **how pigments combine** to get purple.
2. The conclusion tells you **what to do** to obtain violet.
3. "Since" signals that the first clause is the **reason** for the mixing instruction.

Takeaway
How-to steps often premise **facts about materials** and conclude **actions**.`,
    expert: `In-depth (Expert) — instrumental reasoning

The premise is the **compositional** claim; the conclusion is an **imperative** about mixing. Mixing instructions are not premises when the task is "what is the reason given?"`,
  },

  1056: {
    beginner: `In-depth (Beginner) — red light / stop

Premise
**"The light is red"** — the signal state.

Conclusion
"Drivers must stop" — the **rule-governed** requirement.

Not the premise
Stopping is what you **infer** or **must do** given the red light.`,
    intermediate: `In-depth (Intermediate) — traffic rule

Procedure
1. Identify the **observation** of the signal: red light.
2. Identify the **normative** follow: must stop.
3. In this template, the observation is the **premise**; the obligation is the **conclusion** backed by law/convention.

Takeaway
Regulative arguments separate **state of the world** (premise) from **required action** (conclusion).`,
    expert: `In-depth (Expert) — fact vs. norm

The premise is the **descriptive** traffic signal; the conclusion is the **deontic** claim about stopping. Confusing them is a common beginner error.`,
  },

  1057: {
    beginner: `In-depth (Beginner) — sleep and focus

Premise
**"Lack of sleep affects focus"** — cognitive effect claim.

Conclusion
"Students should rest" — the recommended response.`,
    intermediate: `In-depth (Intermediate) — welfare advice

Steps
1. First clause: sleep deprivation → attention deficit (empirical/psychological premise).
2. Second clause: rest (behavioral conclusion).
3. The premise is the **harm** claim; the conclusion is the **remedy** claim.

Takeaway
Prudential arguments: **problem premise** + **rest prescription** conclusion.`,
    expert: `In-depth (Expert) — means–ends

The premise is the **mechanism** linking sleep loss to performance; the conclusion is the **ought** about resting. The premise is not the imperative itself.`,
  },

  1058: {
    beginner: `In-depth (Beginner) — supply and prices

Premise
**"Supply is low"** — market condition.

Conclusion
"Prices will rise" — forecast **from** scarcity.`,
    intermediate: `In-depth (Intermediate) — economics sketch

Analysis
1. Premise: low supply (relative to demand, implicitly).
2. Conclusion: upward price pressure.
3. "Since" marks the **economic condition** as the reason for the **price** claim.

Takeaway
In "since P, Q" economics one-liners, the **state variable** (supply) is typically the premise.`,
    expert: `In-depth (Expert) — comparative statics

The premise is the **exogenous** condition description; the conclusion is the **endogenous** variable movement (price). The price forecast is not a premise for itself.`,
  },

  1059: {
    beginner: `In-depth (Beginner) — dogs / company

Premise
**"Dogs are social"** — behavioral trait.

Conclusion
"They need company" — care implication.`,
    intermediate: `In-depth (Intermediate) — ethology to care

Step-by-step
1. Trait premise: species-typical sociability.
2. Care conclusion: need for companionship.
3. The premise is the **general fact** about dogs; the conclusion is the **welfare** implication.

Takeaway
**Trait → obligation** structures place the trait in the premise slot.`,
    expert: `In-depth (Expert) — generalization

The premise is a **general** characteristic; the conclusion is a **practical** prescription. The need for company is not the premise—it is what the arguer infers from sociability.`,
  },

  1060: {
    beginner: `In-depth (Beginner) — guitar out of tune

Premise
**"The guitar is out of tune"** — instrument state.

Conclusion
"It will sound bad" — sonic evaluation **from** that state.`,
    intermediate: `In-depth (Intermediate) — performance quality

Procedure
1. State premise: tuning defect.
2. Conclusion: bad sound.
3. **Since** introduces the **diagnostic** premise; the aesthetic prediction is the **conclusion**.

Takeaway
Music QA uses **fault** as premise and **sound quality** as conclusion.`,
    expert: `In-depth (Expert) — conditional evaluation

The premise is the **physical setup** claim; the conclusion is the **auditory** evaluation. The evaluation is supported by the setup, not identical to it.`,
  },

  1061: {
    beginner: `In-depth (Beginner) — oven / cake

Premise
**"The oven is too hot"** — the thermal condition cited as the reason.

Conclusion
"The cake will burn" — the **predicted** baking outcome.`,
    intermediate: `In-depth (Intermediate) — baking control

Steps
1. "Since" introduces the **equipment state** (temperature too high).
2. The second clause is the **forecast** about the cake—what follows from that state.
3. Do not pick "Since" as the content premise.

Takeaway
In kitchen one-liners, **oven state** premises support **doneness / burn** conclusions.`,
    expert: `In-depth (Expert) — causal foregrounding

The premise is the **controllable** condition (heat); the conclusion is the **downstream** event (burning). The burn claim is what the arguer infers, not what they offer as given.`,
  },

  1062: {
    beginner: `In-depth (Beginner) — practice / finish faster

Premise
**"You practiced hard"** — the effort fact used as support.

Conclusion
"You will finish faster" — the **performance** prediction.`,
    intermediate: `In-depth (Intermediate) — training payoff

Analysis
1. First clause: past/ongoing effort—**evidence** style premise.
2. Second clause: future speed—**outcome** claim.
3. Same "Since P, Q" template as other skill items: support → expectation.

Takeaway
**Effort premises** back **speed / quality** conclusions in training talk.`,
    expert: `In-depth (Expert) — performance inference

The premise is the **antecedent** about practice; "finish faster" is the **consequent** performance claim. Confusing them reverses support and target.`,
  },

  1063: {
    beginner: `In-depth (Beginner) — dark clouds / rain

Premise
**"The clouds are dark"** — the observable weather cue.

Conclusion
"It is going to rain" — the **forecast** built on that cue.`,
    intermediate: `In-depth (Intermediate) — sky reading

Procedure
1. Visual premise: cloud appearance.
2. Meteorological conclusion: precipitation expectation.
3. "Since" marks the **observation** as the reason, not the prediction.

Takeaway
Weather chatter often premises **signs** and concludes **events**.`,
    expert: `In-depth (Expert) — inductive shortcut

At Level 0, treat the **sign** as the premise and the **forecast** as the conclusion—even though real forecasting is more complex.`,
  },

  1064: {
    beginner: `In-depth (Beginner) — dead battery / no start

Premise
**"The battery is empty"** — the electrical state.

Conclusion
"The car won't start" — the **functional** failure.`,
    intermediate: `In-depth (Intermediate) — automotive diagnosis

Steps
1. State-of-charge premise: empty battery.
2. Start failure conclusion: no crank / no ignition chain.
3. Parallel to router/Wi-Fi items: **power/storage** premise → **service** conclusion.

Takeaway
Roadside reasoning: **energy source** first, **engine behavior** second.`,
    expert: `In-depth (Expert) — mechanism background

The premise is the **stored energy** claim; starting difficulty is the **inferred** symptom. The symptom is not the premise.`,
  },

  1065: {
    beginner: `In-depth (Beginner) — plants / window

Premise
**"Plants need light"** — biological need as the reason.

Conclusion
"They should be near the window" — **placement** advice.`,
    intermediate: `In-depth (Intermediate) — indoor growing

Analysis
1. Need premise: light requirement.
2. Prescriptive conclusion: location near glass.
3. **Descriptive need** → **horticultural ought** matches the Level 0 pattern.

Takeaway
Care instructions premise **facts about the organism** and conclude **what to do**.`,
    expert: `In-depth (Expert) — welfare placement

The premise is the **general** phototropic need; window placement is the **recommended** response—not the supporting fact.`,
  },

  1066: {
    beginner: `In-depth (Beginner) — silence / speak softly

Premise
**"Silence is required"** — the situational rule or norm.

Conclusion
"We must speak softly" — the **conduct** that follows.`,
    intermediate: `In-depth (Intermediate) — venue norms

Procedure
1. Regulatory / contextual premise: quiet requirement.
2. Behavioral conclusion: lowered voice.
3. Do not treat the imperative as the premise when the task is "what is the reason given?"

Takeaway
**Rule or setting** premises support **manners** conclusions.`,
    expert: `In-depth (Expert) — deontic layering

The premise states **what the context demands** (silence); the conclusion is the **derived** behavior (soft speech).`,
  },

  1067: {
    beginner: `In-depth (Beginner) — exercise / walk daily

Premise
**"Exercise improves health"** — the general benefit claim.

Conclusion
"We should walk daily" — the **lifestyle** prescription.`,
    intermediate: `In-depth (Intermediate) — public-health style

Steps
1. Benefit premise: exercise → health (broad).
2. Action conclusion: daily walking (specific).
3. Same structure as other "general fact → ought" items.

Takeaway
**Evidence about benefits** is typically the premise; **should** is the conclusion.`,
    expert: `In-depth (Expert) — bridging general to specific

The premise is the **wide** proposition; the walk prescription is the **narrow** recommendation. The recommendation is supported—not identical to the premise.`,
  },

  1068: {
    beginner: `In-depth (Beginner) — X = 5 / X + 2 = 7

Premise
**"X equals 5"** — the assigned value (what you start from).

Conclusion
"X plus 2 equals 7" — the **derived** equality.`,
    intermediate: `In-depth (Intermediate) — arithmetic step

Analysis
1. Substitution premise: numerical value of X.
2. Conclusion: result of the operation (here, add 2).
3. In proof-style English, the **given** is premise-like; the **computed** line is conclusion-like.

Takeaway
Algebra drills: **givens** in the premise slot, **consequents** in the conclusion slot.`,
    expert: `In-depth (Expert) — proof scaffolding

The premise is the **assumption** X = 5; X + 2 = 7 is what **follows** under standard arithmetic. Do not label the conclusion as the premise.`,
  },

  1069: {
    beginner: `In-depth (Beginner) — tide / beach

Premise
**"The tide is coming in"** — the coastal process.

Conclusion
"The beach will get smaller" — the **shore** change.`,
    intermediate: `In-depth (Intermediate) — littoral dynamics

Procedure
1. Hydrodynamic premise: rising tide / flood phase.
2. Spatial conclusion: less dry sand visible—**beach** shrinks for the visitor.
3. Matches field-trip talk: **process** premise, **observable** outcome.

Takeaway
Coastal forecasts premise **tidal state** and conclude **usable beach width**.`,
    expert: `In-depth (Expert) — spatial consequence

The premise is the **forcing** (incoming water); beach shrinkage is the **experienced** effect. The effect is the conclusion.`,
  },

  1070: {
    beginner: `In-depth (Beginner) — light travel / stars in the past

Premise
**"Light takes time to travel"** — finite speed / delay.

Conclusion
"We see stars as they were" — **lookback** claim.`,
    intermediate: `In-depth (Intermediate) — astronomy education

Steps
1. Physical premise: non-instantaneous light propagation.
2. Observational conclusion: historical appearance of sources.
3. Same conceptual family as starlight / planetarium items; packaged as a short "Since" line.

Takeaway
**Travel time** premises support **past-state** viewing conclusions.`,
    expert: `In-depth (Expert) — emission vs. reception

The premise is about **propagation**; the conclusion is about **what we see when**. Relativistic detail omitted at Level 0.`,
  },

  1071: {
    beginner: `In-depth (Beginner) — gravity demo (second pass)

Task reminder
The bank text matches the earlier gravity/apple item, but the ID is new—roles are unchanged: **support** vs **outcome**.

Premise
**"Gravity pulls objects down"** — the physical generalization cited before the comma.

Conclusion
"The apple will fall" — the **particular** prediction in the vignette.`,
    intermediate: `In-depth (Intermediate) — force → motion talk

Walkthrough
1. Treat the first clause as the **shared background** about weight-like pulls.
2. Treat the second clause as the **episode** about one apple.
3. "Since" only **flags** where the premise starts; it is not the premise text.

Angle
Same template as other **general law → instance** items—first slot = premise.`,
    expert: `In-depth (Expert) — instance vs. law

Even when the scenario feels like a physics demo, the quiz labels the **law-like** clause as premise and the **token prediction** as conclusion. The prediction is not offered as the reason.`,
  },

  1072: {
    beginner: `In-depth (Beginner) — fluency advice (second pass)

Premise
**"Practice improves fluency"** — the learning claim that does the justifying.

Conclusion
"You should speak daily" — the **frequency** prescription.`,
    intermediate: `In-depth (Intermediate) — habit layer

Steps
1. Map clause 1 → **mechanism** (practice → fluency).
2. Map clause 2 → **schedule** (daily speech).
3. The mechanism statement is the **because**-side; the schedule is the **therefore**-side for this quiz.

Takeaway
Oughts about routine sit in the **conclusion** slot in this format.`,
    expert: `In-depth (Expert) — policy stack

The premise is an **is** about skill acquisition; the conclusion is an **ought** about behavior. Do not treat the ought as the supporting proposition.`,
  },

  1073: {
    beginner: `In-depth (Beginner) — home network (second pass)

Premise
**"The router is off"** — the **power/path** fact.

Conclusion
"The Wi-Fi won't work" — the **LAN radio** outcome.`,
    intermediate: `In-depth (Intermediate) — stack intuition

Analysis
1. Bottom of the stack here: router powered.
2. Upper symptom: wireless service absent.
3. For premise ID, the **hardware fact** is premise; the **service symptom** is conclusion.

Takeaway
Diagnostics often read **cause state** → **service state**—first is premise in this lesson.`,
    expert: `In-depth (Expert) — layered faulting

The premise is the **localized** fault (router off); Wi-Fi failure is the **user-visible** layer. The visible layer is what you infer, not what you premise.`,
  },

  1074: {
    beginner: `In-depth (Beginner) — handling policy (second pass)

Premise
**"Artifacts are fragile"** — risk **classification**.

Conclusion
"They need careful handling" — **procedure** implied by that risk.`,
    intermediate: `In-depth (Intermediate) — risk → protocol

Procedure
1. Register fragility as a **hazard** premise.
2. Derive handling rules as **controls**—conclusion side.
3. "Since" ties hazard to control in one breath.

Takeaway
Museum-style lines: **material fact** first, **care norm** second.`,
    expert: `In-depth (Expert) — normative target

The care requirement is the **policy conclusion** justified by fragility. Fragility is not inferred from the policy; it is **given** as support.`,
  },

  1075: {
    beginner: `In-depth (Beginner) — paint mixing (second pass)

Premise
**"Red and blue make purple"** — the **recipe fact**.

Conclusion
"Mix them for violet" — the **operator instruction**.`,
    intermediate: `In-depth (Intermediate) — recipe vs. step

Steps
1. Clause 1: what the pigments **do together** (compositional premise).
2. Clause 2: what **you** should do (imperative conclusion).
3. Do not select the imperative when asked for the **reason** slot.

Takeaway
Craft one-liners: **composition** premises, **action** conclusions.`,
    expert: `In-depth (Expert) — means selection

The mixing command is chosen **because** of the color fact; the fact is the premise, the command is the **instrumental** conclusion.`,
  },

  1076: {
    beginner: `In-depth (Beginner) — intersection control (second pass)

Premise
**"The light is red"** — **signal** reading.

Conclusion
"Drivers must stop" — **compliance** requirement.`,
    intermediate: `In-depth (Intermediate) — control system view

Analysis
1. Sensor-like input: color state of the lamp.
2. Rule output: mandatory stop for road users.
3. Premise = **state**; conclusion = **obligation** under the code.

Takeaway
Traffic items split **what you see** from **what you must do**.`,
    expert: `In-depth (Expert) — deontic consequence

Stopping is the **deontic** conclusion; redness is the **empirical** premise. Swapping them misreads the support direction.`,
  },

  1077: {
    beginner: `In-depth (Beginner) — attention budget (second pass)

Premise
**"Lack of sleep affects focus"** — **performance** pathology.

Conclusion
"Students should rest" — **recovery** prescription.`,
    intermediate: `In-depth (Intermediate) — harm → remedy

Walkthrough
1. Harm premise: sleep loss hurts attention.
2. Remedy conclusion: rest as response.
3. Same **problem / fix** shape as other welfare snippets.

Takeaway
The **should-rest** line is the advice, not the evidence.`,
    expert: `In-depth (Expert) — advisory closure

Rest is the **closing** recommendation; sleep-focus impairment is the **opening** evidential claim. Premise = opening.`,
  },

  1078: {
    beginner: `In-depth (Beginner) — scarcity pricing (second pass)

Premise
**"Supply is low"** — **market tightness**.

Conclusion
"Prices will rise" — **price** response.`,
    intermediate: `In-depth (Intermediate) — condition → forecast

Steps
1. Economic state premise: scarce supply (ceteris paribus, informal).
2. Price-move conclusion: upward pressure.
3. "Since" anchors the **condition** as the reason for the **forecast**.

Takeaway
The forecast is what you argue **from** the condition—not the premise itself.`,
    expert: `In-depth (Expert) — exogenous tag

Treat supply as **exogenous** in this toy model; price movement is the **endogenous** claim. The latter belongs in the conclusion column.`,
  },

  1079: {
    beginner: `In-depth (Beginner) — companion animals (second pass)

Premise
**"Dogs are social"** — **species-typical** trait.

Conclusion
"They need company" — **welfare** upshot.`,
    intermediate: `In-depth (Intermediate) — trait → need

Analysis
1. Ethology-style premise: sociability.
2. Care conclusion: companionship requirement.
3. The need statement is **inferred** from the trait for this exercise.

Takeaway
**Trait** premises; **care** conclusions—do not flip.`,
    expert: `In-depth (Expert) — inference target

Company is the **target** of the inference; sociability is the **ground**. Ground = premise in the quiz sense.`,
  },

  1080: {
    beginner: `In-depth (Beginner) — intonation check (second pass)

Premise
**"The guitar is out of tune"** — **setup** fault.

Conclusion
"It will sound bad" — **sonic** judgment.`,
    intermediate: `In-depth (Intermediate) — setup → timbre

Procedure
1. Mechanical premise: tuning error.
2. Aesthetic conclusion: poor sound quality.
3. "Since" introduces the **fault**; the **evaluation** is downstream.

Takeaway
Instrument QA: **fault description** = premise; **quality verdict** = conclusion.`,
    expert: `In-depth (Expert) — evaluation dependency

Bad sound is **conditionally** expected **given** bad tuning; the tuning claim is the **independent** premise in the pair.`,
  },

  1081: {
    beginner: `In-depth (Beginner) — oven setpoint (third pass)

Note
Same sentence as other oven/cake IDs—premise/conclusion roles stay fixed.

Premise
**"The oven is too hot"** — **thermal** setting or cavity condition cited as the reason.

Conclusion
"The cake will burn" — **baking** outcome expected from that heat.`,
    intermediate: `In-depth (Intermediate) — overshoot intuition

Walkthrough
1. Premise slot: temperature **too high** for the recipe moment.
2. Conclusion slot: **overcooking** framed as burning.
3. "Since" ties **equipment state** to **food fate**—first clause = support.

Takeaway
Kitchen warnings premise **heat control facts** and conclude **doneness hazards**.`,
    expert: `In-depth (Expert) — control variable

Heat is treated as the **controlled** or observed input; the burn forecast is the **dependent** narrative outcome—not the premise.`,
  },

  1082: {
    beginner: `In-depth (Beginner) — training load (third pass)

Premise
**"You practiced hard"** — **training load** or effort invested.

Conclusion
"You will finish faster" — **throughput** or completion-time expectation.`,
    intermediate: `In-depth (Intermediate) — effort → pace

Steps
1. Evidence-style premise: sustained practice effort.
2. Performance conclusion: improved speed (toy causal link).
3. Do not label the speed claim as the premise—it is what the arguer **projects**.

Takeaway
**Past effort** premises; **future pace** conclusions in this template.`,
    expert: `In-depth (Expert) — projection anchor

The premise **anchors** the story in what already happened; the faster finish is the **forward-looking** claim supported by that anchor.`,
  },

  1083: {
    beginner: `In-depth (Beginner) — sky cue (third pass)

Premise
**"The clouds are dark"** — **visual** cue about the sky.

Conclusion
"It is going to rain" — **precipitation** expectation.`,
    intermediate: `In-depth (Intermediate) — nowcast heuristic

Analysis
1. Observation premise: cloud appearance.
2. Forecast conclusion: rain soon (folk heuristic).
3. At Level 0, accept **sign → event** labeling without meteorology depth.

Takeaway
The **look of the sky** is premise; the **weather call** is conclusion.`,
    expert: `In-depth (Expert) — heuristic boundary

Real forecasting is complex; for this item, the **observed sign** is strictly the premise and the **called event** is the conclusion.`,
  },

  1084: {
    beginner: `In-depth (Beginner) — starter chain (third pass)

Premise
**"The battery is empty"** — **stored energy** state.

Conclusion
"The car won't start" — **cranking / ignition** failure.`,
    intermediate: `In-depth (Intermediate) — electromechanical sketch

Procedure
1. Electrical premise: no usable charge.
2. Mechanical conclusion: starter/ignition chain cannot complete as needed.
3. Same **source fault → symptom** pattern as other power items.

Takeaway
**Battery state** = premise; **start failure** = conclusion.`,
    expert: `In-depth (Expert) — symptom vs. cause statement

"No start" is the **symptom-inference**; "empty battery" is the **posited cause** offered as premise.`,
  },

  1085: {
    beginner: `In-depth (Beginner) — photon budget (third pass)

Premise
**"Plants need light"** — **autotroph** requirement.

Conclusion
"They should be near the window" — **placement** to meet that need.`,
    intermediate: `In-depth (Intermediate) — indoor placement

Steps
1. Biological premise: light dependence.
2. Architectural conclusion: window proximity as solution.
3. The **need** is the reason; the **spot** is the advised response.

Takeaway
**Need** premises; **placement oughts** conclusions.`,
    expert: `In-depth (Expert) — means to an end

Window placement is the **means** justified by the light need; the need itself is the **supporting** proposition.`,
  },

  1086: {
    beginner: `In-depth (Beginner) — quiet venue (third pass)

Premise
**"Silence is required"** — **contextual** rule.

Conclusion
"We must speak softly" — **volume** adjustment.`,
    intermediate: `In-depth (Intermediate) — noise norms

Analysis
1. Rule premise: quiet mandate (library, ceremony, etc.).
2. Conduct conclusion: lowered voices.
3. The **rule** is what you cite; the **behavior** is what you derive.

Takeaway
**Regulative context** first; **manners** second.`,
    expert: `In-depth (Expert) — compliance mapping

Soft speech is the **mapped** behavior to the silence requirement; the requirement is the **explicit** premise text.`,
  },

  1087: {
    beginner: `In-depth (Beginner) — daily walk (third pass)

Premise
**"Exercise improves health"** — **benefit** generalization.

Conclusion
"We should walk daily" — **concrete** exercise habit.`,
    intermediate: `In-depth (Intermediate) — bridge to a habit

Walkthrough
1. Broad premise: exercise–health link.
2. Narrow conclusion: walking frequency.
3. The general link is the **reason** offered; the walk plan is the **application**.

Takeaway
**General benefit** premises; **specific regimen** conclusions.`,
    expert: `In-depth (Expert) — instantiation

Daily walking **instantiates** the exercise idea; the improvement claim is the **abstract** premise being invoked.`,
  },

  1088: {
    beginner: `In-depth (Beginner) — substitution line (third pass)

Premise
**"X equals 5"** — **assignment** or given value.

Conclusion
"X plus 2 equals 7" — **derived** equation after arithmetic.`,
    intermediate: `In-depth (Intermediate) — one-step algebra

Steps
1. Premise fixes X.
2. Conclusion applies +2 in the same formal language.
3. **Givens** occupy the premise role; **derived lines** occupy the conclusion role here.

Takeaway
Do not treat the computed equality as the supporting premise.`,
    expert: `In-depth (Expert) — derivability

The second equality is **derivable** from the first under standard rules; derivability makes the first the **premise-like** member of the pair.`,
  },

  1089: {
    beginner: `In-depth (Beginner) — flood tide (third pass)

Premise
**"The tide is coming in"** — **rising water** phase.

Conclusion
"The beach will get smaller" — **dry sand** footprint shrinks.`,
    intermediate: `In-depth (Intermediate) — intertidal width

Procedure
1. Hydrodynamic premise: flood tide advances.
2. Spatial conclusion: less room on the dry beach for a blanket or transect.
3. **Process** premise; **visitor-visible** shoreline change as conclusion.

Takeaway
Tidal **forcing** vs. beach **usable area**—first is premise.`,
    expert: `In-depth (Expert) — experienced geometry

Shrinkage is the **experienced** layout effect; incoming tide is the **posited** driver—driver = premise in this drill.`,
  },

  1090: {
    beginner: `In-depth (Beginner) — lookback label (third pass)

Premise
**"Light takes time to travel"** — **finite speed** / delay claim.

Conclusion
"We see stars as they were" — **historical** appearance.`,
    intermediate: `In-depth (Intermediate) — astronomy gloss

Analysis
1. Physics premise: propagation takes time.
2. Observation conclusion: lookback / past-state viewing (popular wording).
3. Same conceptual line as other starlight items—**delay** supports **past** framing.

Takeaway
**Propagation** premise; **seeing-then** conclusion.`,
    expert: `In-depth (Expert) — signal path

The premise is about the **signal path timing**; the conclusion is about **what the image represents**. Do not swap.`,
  },

  1091: {
    beginner: `In-depth (Beginner) — weight and drop (fourth pass)

Repeat template
This bank line repeats the gravity/apple pattern—**support** is still the first content clause.

Premise
**"Gravity pulls objects down"** — **directional** pull claim (global).

Conclusion
"The apple will fall" — **token** motion claim in the example.`,
    intermediate: `In-depth (Intermediate) — from field to fruit

Walkthrough
1. Universal-style premise: objects tend downward in ordinary Earth-side talk.
2. Instance conclusion: this apple’s fall.
3. "Since" signals that the **pull story** is the premise, not the apple line.

Takeaway
**Law-like** first clause; **case** second clause—first is premise here.`,
    expert: `In-depth (Expert) — support direction

The fall prediction is what you **take away** from the premise about gravity; it is not the premise you cite as your reason.`,
  },

  1092: {
    beginner: `In-depth (Beginner) — daily speaking (fourth pass)

Premise
**"Practice improves fluency"** — link between **repetition** and **skill**.

Conclusion
"You should speak daily" — **cadence** recommendation.`,
    intermediate: `In-depth (Intermediate) — schedule from mechanism

Steps
1. Mechanism premise: practice → fluency.
2. Policy conclusion: speak every day.
3. The **mechanism** backs the **schedule**; do not confuse the schedule with the premise.

Takeaway
**Why practice matters** = premise; **how often** = conclusion.`,
    expert: `In-depth (Expert) — policy consequent

Daily speaking is the **consequent** prescription; the practice–fluency claim is the **antecedent** support in this quiz labeling.`,
  },

  1093: {
    beginner: `In-depth (Beginner) — AP off (fourth pass)

Premise
**"The router is off"** — **CPE** power state.

Conclusion
"The Wi-Fi won't work" — **WLAN** service expectation.`,
    intermediate: `In-depth (Intermediate) — box-then-air

Analysis
1. Premise: edge device not running.
2. Conclusion: wireless segment unusable.
3. Same labeling as other router items: **box fact** premise; **service** conclusion.

Takeaway
Power/state of the router is **not** the Wi-Fi conclusion.`,
    expert: `In-depth (Expert) — dependency direction

The service claim is **downstream** of the router state; the router state is the **upstream** premise.`,
  },

  1094: {
    beginner: `In-depth (Beginner) — conservation risk (fourth pass)

Premise
**"Artifacts are fragile"** — **material risk** statement.

Conclusion
"They need careful handling" — **handling** standard.`,
    intermediate: `In-depth (Intermediate) — risk register

Procedure
1. Register fragility as a **hazard** premise.
2. Map to handling care as a **control**—conclusion.
3. **Descriptive** first; **prescriptive** second.

Takeaway
Fragility is the **reason**; careful handling is the **required response** (conclusion).`,
    expert: `In-depth (Expert) — obligation not premise

The obligation to handle carefully is **supported by** fragility; fragility is not inferred from the obligation.`,
  },

  1095: {
    beginner: `In-depth (Beginner) — palette fact (fourth pass)

Premise
**"Red and blue make purple"** — **pigment** mixing claim.

Conclusion
"Mix them for violet" — **instruction** to combine paints.`,
    intermediate: `In-depth (Intermediate) — recipe vs. gesture

Steps
1. Compositional premise: color outcome.
2. Imperative conclusion: mixing action.
3. Ask: "What is offered as **reason**?"—the composition fact, not the command.

Takeaway
**Composition** premises; **imperative** conclusions in craft one-liners.`,
    expert: `In-depth (Expert) — imperative as target

The imperative is the **action target** justified by the mixing fact; the fact is the **supporting** proposition.`,
  },

  1096: {
    beginner: `In-depth (Beginner) — STOP mapping (fourth pass)

Premise
**"The light is red"** — **signal aspect** claim.

Conclusion
"Drivers must stop" — **compliance** requirement.`,
    intermediate: `In-depth (Intermediate) — phase indication

Analysis
1. Phase premise: red aspect.
2. Rule conclusion: stop obligation.
3. **Observation** vs. **norm**: first is premise, second is conclusion in this drill.

Takeaway
Redness is **not** the obligation—it **grounds** the obligation.`,
    expert: `In-depth (Expert) — normative consequent

Stopping is the **normative consequent**; the red light is the **empirical antecedent** in the pair.`,
  },

  1097: {
    beginner: `In-depth (Beginner) — sleep debt (fourth pass)

Premise
**"Lack of sleep affects focus"** — **cognitive** deficit claim.

Conclusion
"Students should rest" — **recovery** advice.`,
    intermediate: `In-depth (Intermediate) — deficit → remedy

Walkthrough
1. Harm premise: sleep loss hurts attention.
2. Remedy conclusion: rest.
3. **Problem** slot vs. **fix** slot—premise vs. conclusion.

Takeaway
The harm claim is the **evidence**; the rest advice is the **recommended response**.`,
    expert: `In-depth (Expert) — advisory structure

The rest imperative is **downstream** of the focus deficit claim; the deficit claim is the **stated** premise.`,
  },

  1098: {
    beginner: `In-depth (Beginner) — scarcity bid (fourth pass)

Premise
**"Supply is low"** — **tightness** in the market.

Conclusion
"Prices will rise" — **price** movement.`,
    intermediate: `In-depth (Intermediate) — clearing intuition

Steps
1. Condition premise: scarcity of supply.
2. Forecast conclusion: higher prices (simple story).
3. The **condition** is the premise; the **price** claim is the conclusion argued from it.

Takeaway
**State** of supply first; **movement** of prices second.`,
    expert: `In-depth (Expert) — conditional forecast

The price forecast is **conditional on** the supply condition; the condition is the **explicit** premise text.`,
  },

  1099: {
    beginner: `In-depth (Beginner) — social species (fourth pass)

Premise
**"Dogs are social"** — **behavioral** generalization.

Conclusion
"They need company" — **welfare** claim.`,
    intermediate: `In-depth (Intermediate) — trait → care

Analysis
1. Trait premise: sociability.
2. Care conclusion: companionship need.
3. The premise is the **general** fact; the conclusion is the **practical** upshot.

Takeaway
**Trait** premises; **need** conclusions—keep the slots straight.`,
    expert: `In-depth (Expert) — inferred need

The need for company is **inferred**; sociability is the **ground** for the inference—ground = premise.`,
  },

  1100: {
    beginner: `In-depth (Beginner) — pitch fault (fourth pass)

Premise
**"The guitar is out of tune"** — **tuning** defect.

Conclusion
"It will sound bad" — **sonic** assessment.`,
    intermediate: `In-depth (Intermediate) — setup → judgment

Procedure
1. Setup premise: tuning wrong.
2. Judgment conclusion: bad sound.
3. **Since** introduces the **fault**; the **aesthetic** evaluation follows.

Takeaway
**Fault** description = premise; **quality** verdict = conclusion.`,
    expert: `In-depth (Expert) — conditional aesthetics

Bad sound is judged **given** bad tuning; the tuning statement is the **independent** premise in the labeled pair.`,
  },

  1101: {
    beginner: `In-depth (Beginner) — identify the conclusion (oven / cake)

What changed
Earlier items asked for the **premise** after "Since…"; here the task is the **conclusion** in a **"P, therefore Q"** line.

Correct choice (index **1**)
**"the cake will burn"** — this is what **therefore** introduces as the **supported** claim.

Not the conclusion
• "The oven is too hot" — that is the **premise** (reason).
• "therefore" — a **cue word**, not a content claim.
• "neither" — incorrect; there is a conclusion.`,
    intermediate: `In-depth (Intermediate) — therefore-slot

Procedure
1. Split on **therefore**: [clause before], [clause after].
2. The **after** clause is the **conclusion** in this course’s labeling—the claim the arguer is driving at.
3. The **before** clause states the **reason** (premise).

Takeaway
**Therefore** marks the **inferential target**; pick that content, not the supporting fact.`,
    expert: `In-depth (Expert) — consequent role

In this template, the **consequent** is the cake outcome; the oven heat is the **antecedent** support. Conclusion = consequent content.`,
  },

  1102: {
    beginner: `In-depth (Beginner) — performance prediction

Conclusion (index **1**)
**"you will finish faster"** — the **outcome** you are meant to select.

Premise (distractor)
"You practiced hard" — evidence, not the conclusion.`,
    intermediate: `In-depth (Intermediate) — forecast vs. evidence

Steps
1. Evidence clause: practice effort (premise).
2. Forecast clause: completion speed (conclusion).
3. **Therefore** points to the **forecast** as what follows from the evidence.

Takeaway
When asked for the **conclusion**, choose the **downstream** claim after **therefore**.`,
    expert: `In-depth (Expert) — supported prediction

The speed claim is what the argument **concludes** from the practice fact; it is not the supporting premise.`,
  },

  1103: {
    beginner: `In-depth (Beginner) — weather call

Correct (index **1**)
**"it is going to rain"** — the **meteorological** conclusion.

Premise
"The clouds are dark" — **observation** used as support.`,
    intermediate: `In-depth (Intermediate) — sign → event

Analysis
1. Sign premise: cloud appearance.
2. Event conclusion: impending rain.
3. **Therefore** introduces the **prediction**, not the observation.

Takeaway
**Forecasts** occupy the conclusion slot in "therefore" drills.`,
    expert: `In-depth (Expert) — inferential target

Rain is the **inferred** claim; dark clouds are the **basis**. The inference is the conclusion.`,
  },

  1104: {
    beginner: `In-depth (Beginner) — no-start symptom

Conclusion (index **1**)
**"the car won't start"** — the **functional** failure.

Premise
"The battery is empty" — **diagnostic** state.`,
    intermediate: `In-depth (Intermediate) — symptom conclusion

Procedure
1. State premise: battery charge absent.
2. Conclusion: starting failure.
3. **Therefore** leads to the **symptom/service** claim—pick that for "conclusion."

Takeaway
In roadside logic, the **breakdown behavior** is often the stated conclusion.`,
    expert: `In-depth (Expert) — downstream failure

The no-start claim is **downstream** of the battery state; downstream = conclusion here.`,
  },

  1105: {
    beginner: `In-depth (Beginner) — where to put plants

Correct (index **1**)
**"they should be near the window"** — the **placement** recommendation.

Premise
"Plants need light" — **need** as reason.`,
    intermediate: `In-depth (Intermediate) — ought from need

Steps
1. Need premise: phototropism / light requirement (informal).
2. Conclusion: positional advice.
3. **Therefore** flags the **prescriptive** follow—the **should** near the window.

Takeaway
**Should**-claims after **therefore** are typically the **conclusion**.`,
    expert: `In-depth (Expert) — normative consequent

The window advice is the **normative** conclusion; the light need is the **descriptive** support.`,
  },

  1106: {
    beginner: `In-depth (Beginner) — quiet conduct

Conclusion (index **1**)
**"we must speak softly"** — **behavioral** requirement.

Premise
"Silence is required" — **context/rule**.`,
    intermediate: `In-depth (Intermediate) — rule → conduct

Analysis
1. Premise: quiet mandate.
2. Conclusion: lowered voices.
3. Select the **conduct** clause as the conclusion, not the rule statement.

Takeaway
**Compliance** claims after **therefore** = conclusion in this format.`,
    expert: `In-depth (Expert) — deontic conclusion

Speaking softly is the **deontic** conclusion derived from the silence requirement.`,
  },

  1107: {
    beginner: `In-depth (Beginner) — walk plan

Correct (index **1**)
**"we should walk daily"** — the **habit** conclusion.

Premise
"Exercise improves health" — **benefit** generalization.`,
    intermediate: `In-depth (Intermediate) — general → specific ought

Walkthrough
1. Broad premise: exercise benefits health.
2. Narrow conclusion: daily walking prescription.
3. **Therefore** introduces the **specific** recommendation.

Takeaway
The **action plan** is the conclusion; the **benefit** claim is the premise.`,
    expert: `In-depth (Expert) — instantiated prescription

Daily walking **instantiates** the exercise advice; that instantiation is what the argument **concludes**.`,
  },

  1108: {
    beginner: `In-depth (Beginner) — derived equation

Conclusion (index **1**)
**"X plus 2 equals 7"** — the **computed** line.

Premise
"X equals 5" — the **given**.`,
    intermediate: `In-depth (Intermediate) — proof step

Steps
1. Given premise: value of X.
2. Conclusion: result after +2.
3. For "conclusion," pick the **derived** equality—the one **after** **therefore**.

Takeaway
**Givens** premise; **derived lines** conclude in algebra drills.`,
    expert: `In-depth (Expert) — derivational target

The second equality is the **derivational** target; it is what the argument **concludes** from X = 5.`,
  },

  1109: {
    beginner: `In-depth (Beginner) — shoreline change

Correct (index **1**)
**"the beach will get smaller"** — **spatial** outcome.

Premise
"The tide is coming in" — **process** premise.`,
    intermediate: `In-depth (Intermediate) — forcing → layout

Procedure
1. Premise: rising tide (forcing).
2. Conclusion: less dry beach width.
3. **Therefore** marks the **experienced** layout change as the conclusion.

Takeaway
**Observable** beach shrinkage = conclusion; tide state = premise.`,
    expert: `In-depth (Expert) — experienced effect

The shrinkage claim is the **effect** positioned as the argument’s **conclusion**; tide is the **cause** premise.`,
  },

  1110: {
    beginner: `In-depth (Beginner) — lookback viewing

Conclusion (index **1**)
**"we see stars as they were"** — **observational** claim about the past image.

Premise
"Light takes time to travel" — **physics** premise.`,
    intermediate: `In-depth (Intermediate) — from delay to appearance

Analysis
1. Premise: finite light travel time.
2. Conclusion: historical appearance of stars (popular phrasing).
3. **Therefore** introduces the **seeing** claim—select that for **conclusion**.

Takeaway
**What we see** (after **therefore**) = conclusion; **propagation** fact = premise.`,
    expert: `In-depth (Expert) — phenomenological consequent

The viewing conclusion is the **phenomenological** consequent; travel time is the **physical** antecedent support.`,
  },

  1111: {
    beginner: `In-depth (Beginner) — apple drop (second conclusion pass)

Repeat bank
Same gravity/apple wording as other IDs—here you still select the **conclusion**, not the premise.

Correct (index **1**)
**"the apple will fall"** — the **motion** claim after **therefore**.

Premise (distractor)
"Gravity pulls objects down" — support, not the target claim.`,
    intermediate: `In-depth (Intermediate) — instance outcome

Walkthrough
1. Premise: generic downward pull.
2. Conclusion: specific apple motion.
3. **Therefore** flags the **instance-level** prediction as what the argument **establishes**.

Takeaway
Pick the **token outcome** after **therefore** for "conclusion."`,
    expert: `In-depth (Expert) — token consequent

The fall of the apple is the **token** consequent; universal gravity language is the **supporting** antecedent.`,
  },

  1112: {
    beginner: `In-depth (Beginner) — daily speaking (second pass)

Conclusion (index **1**)
**"you should speak daily"** — the **policy** line.

Premise
"Practice improves fluency" — **learning** claim.`,
    intermediate: `In-depth (Intermediate) — prudential target

Steps
1. Mechanism premise: practice → fluency.
2. Conclusion: daily speaking prescription.
3. The **ought** about schedule is the **conclusion** in this labeling.

Takeaway
**Imperatives / should** after **therefore** are typically conclusions here.`,
    expert: `In-depth (Expert) — schedule consequent

Daily speaking is the **prudential** consequent supported by the practice–fluency premise.`,
  },

  1113: {
    beginner: `In-depth (Beginner) — WLAN down (second pass)

Correct (index **1**)
**"the Wi-Fi won't work"** — **service** failure.

Premise
"The router is off" — **hardware** state.`,
    intermediate: `In-depth (Intermediate) — service-layer claim

Analysis
1. Premise: router power/path.
2. Conclusion: wireless usability.
3. **Therefore** introduces the **user-visible** failure—pick that as **conclusion**.

Takeaway
Symptom/service statements after **therefore** = conclusion in this drill.`,
    expert: `In-depth (Expert) — downstream service

Wi-Fi failure is **downstream** of router state; downstream = conclusion slot.`,
  },

  1114: {
    beginner: `In-depth (Beginner) — handling norm (second pass)

Conclusion (index **1**)
**"they need careful handling"** — **care** requirement.

Premise
"Artifacts are fragile" — **risk** description.`,
    intermediate: `In-depth (Intermediate) — prescriptive follow

Procedure
1. Descriptive premise: fragility.
2. Prescriptive conclusion: careful handling.
3. Select the **norm** clause as **conclusion**.

Takeaway
**Need / must / should** handling claims often conclude **descriptive → prescriptive** moves.`,
    expert: `In-depth (Expert) — control consequent

Careful handling is the **control** consequent justified by fragility.`,
  },

  1115: {
    beginner: `In-depth (Beginner) — mix command (second pass)

Correct (index **1**)
**"mix them for violet"** — **imperative** conclusion.

Premise
"Red and blue make purple" — **compositional** fact.`,
    intermediate: `In-depth (Intermediate) — imperative consequent

Steps
1. Fact premise: mixing outcome.
2. Conclusion: mixing instruction.
3. **Therefore** points to the **command**—the **conclusion** to select.

Takeaway
The **order to mix** is what the argument ** concludes**; the color fact is premise.`,
    expert: `In-depth (Expert) — instrumental consequent

The mixing imperative is the **instrumental** consequent of the compositional premise.`,
  },

  1116: {
    beginner: `In-depth (Beginner) — must stop (second pass)

Conclusion (index **1**)
**"drivers must stop"** — **traffic** obligation.

Premise
"The light is red" — **signal** state.`,
    intermediate: `In-depth (Intermediate) — deontic after descriptive

Analysis
1. Empirical premise: red aspect.
2. Deontic conclusion: stop requirement.
3. **Therefore** introduces the **rule-for-drivers** claim—your **conclusion** choice.

Takeaway
**Must stop** is the conclusion; redness is the **basis**.`,
    expert: `In-depth (Expert) — regulatory consequent

Stopping is the **regulatory** consequent; signal color is the **factual** antecedent.`,
  },

  1117: {
    beginner: `In-depth (Beginner) — rest advice (second pass)

Correct (index **1**)
**"students should rest"** — **remedy** conclusion.

Premise
"Lack of sleep affects focus" — **harm** claim.`,
    intermediate: `In-depth (Intermediate) — remedy slot

Walkthrough
1. Problem premise: sleep loss hurts focus.
2. Conclusion: rest prescription.
3. **Therefore** leads to the **recommended response**—conclusion.

Takeaway
**Should rest** is the **closing advice**; the deficit claim is premise.`,
    expert: `In-depth (Expert) — advisory consequent

Rest is the **advisory** consequent supported by the cognitive-harm premise.`,
  },

  1118: {
    beginner: `In-depth (Beginner) — price move (second pass)

Conclusion (index **1**)
**"prices will rise"** — **forecast** conclusion.

Premise
"Supply is low" — **market** condition.`,
    intermediate: `In-depth (Intermediate) — forecast consequent

Steps
1. Condition premise: scarcity.
2. Conclusion: upward price pressure.
3. Pick the **price** clause as **conclusion**; supply is premise.

Takeaway
**Movement** claims about price conclude **state** premises in this template.`,
    expert: `In-depth (Expert) — price consequent

The price forecast is the **economic** consequent; supply tightness is the **antecedent** condition.`,
  },

  1119: {
    beginner: `In-depth (Beginner) — need company (second pass)

Correct (index **1**)
**"they need company"** — **welfare** conclusion.

Premise
"Dogs are social" — **trait** claim.`,
    intermediate: `In-depth (Intermediate) — welfare inference

Analysis
1. Trait premise: sociability.
2. Conclusion: companionship need.
3. **Therefore** introduces the **need** statement—select it as **conclusion**.

Takeaway
The **need** is inferred; the trait is the **reason** given (premise).`,
    expert: `In-depth (Expert) — welfare consequent

Company need is the **welfare** consequent grounded in the sociability premise.`,
  },

  1120: {
    beginner: `In-depth (Beginner) — bad sound (second pass)

Conclusion (index **1**)
**"it will sound bad"** — **sonic** judgment.

Premise
"The guitar is out of tune" — **setup** fault.`,
    intermediate: `In-depth (Intermediate) — aesthetic prediction

Procedure
1. Fault premise: tuning error.
2. Conclusion: poor sound prediction.
3. **Therefore** marks the **auditory evaluation** as the **conclusion**.

Takeaway
**Quality** verdict after **therefore** = conclusion; **fault** before = premise.`,
    expert: `In-depth (Expert) — aesthetic consequent

Bad sound is the **aesthetic** consequent; tuning defect is the **diagnostic** antecedent.`,
  },

  1121: {
    beginner: `In-depth (Beginner) — burn outcome (third pass)

Cycle note
Same oven/cake line as earlier conclusion IDs—roles are unchanged: pick what follows **therefore**.

Conclusion (index **1**)
**"the cake will burn"** — **baking** harm predicted.

Premise
"The oven is too hot" — **thermal** reason.`,
    intermediate: `In-depth (Intermediate) — overcooking claim

Steps
1. Premise: heat too high for the moment/recipe (informal).
2. Conclusion: scorch/burn outcome.
3. **Therefore** introduces the **downstream food fate**—your **conclusion** selection.

Takeaway
**Damage to the cake** is the argued **consequent**; oven state is **antecedent**.`,
    expert: `In-depth (Expert) — culinary consequent

Burning is the **culinary** consequent; overheating is the **operational** antecedent.`,
  },

  1122: {
    beginner: `In-depth (Beginner) — speed claim (third pass)

Correct (index **1**)
**"you will finish faster"** — **pace** conclusion.

Premise
"You practiced hard" — **effort** premise.`,
    intermediate: `In-depth (Intermediate) — performance consequent

Analysis
1. Evidence premise: training load.
2. Performance conclusion: improved completion time.
3. **Therefore** marks the **speed** claim as what the argument **establishes**.

Takeaway
Select the **performance** clause after **therefore** for "conclusion."`,
    expert: `In-depth (Expert) — timing consequent

Faster completion is the **timing** consequent supported by the practice premise.`,
  },

  1123: {
    beginner: `In-depth (Beginner) — rain now (third pass)

Conclusion (index **1**)
**"it is going to rain"** — **precipitation** conclusion.

Premise
"The clouds are dark" — **visual** cue.`,
    intermediate: `In-depth (Intermediate) — forecast slot

Procedure
1. Observation premise: cloud appearance.
2. Conclusion: imminent rain (short heuristic).
3. **Therefore** points to the **forecast**—not the observation.

Takeaway
**Weather call** = conclusion; **sky look** = premise.`,
    expert: `In-depth (Expert) — meteorological consequent

Rain is the **meteorological** consequent in this compressed argument; cloud darkness is the **antecedent** sign.`,
  },

  1124: {
    beginner: `In-depth (Beginner) — crank failure (third pass)

Correct (index **1**)
**"the car won't start"** — **start** failure.

Premise
"The battery is empty" — **charge** state.`,
    intermediate: `In-depth (Intermediate) — electromechanical consequent

Steps
1. Premise: no usable battery charge.
2. Conclusion: failed start sequence.
3. Pick the **no-start** line as **conclusion**; battery emptiness is premise.

Takeaway
**Symptom** after **therefore** = conclusion in this roadside pattern.`,
    expert: `In-depth (Expert) — starter consequent

No-start is the **starter-chain** consequent; empty battery is the **power** antecedent.`,
  },

  1125: {
    beginner: `In-depth (Beginner) — window placement (third pass)

Conclusion (index **1**)
**"they should be near the window"** — **placement** advice.

Premise
"Plants need light" — **need** claim.`,
    intermediate: `In-depth (Intermediate) — horticultural consequent

Analysis
1. Need premise: light dependence.
2. Conclusion: put plants by glass.
3. **Therefore** introduces the **positional** recommendation—**conclusion**.

Takeaway
**Where to put** the plants is what the argument ** concludes**; the need is premise.`,
    expert: `In-depth (Expert) — layout consequent

Window proximity is the **layout** consequent justified by photon access needs.`,
  },

  1126: {
    beginner: `In-depth (Beginner) — soft speech (third pass)

Correct (index **1**)
**"we must speak softly"** — **volume** rule.

Premise
"Silence is required" — **venue** rule/context.`,
    intermediate: `In-depth (Intermediate) — compliance consequent

Procedure
1. Premise: quiet mandate.
2. Conclusion: lowered voice requirement.
3. **Therefore** flags the **conduct** clause as the **conclusion**.

Takeaway
**How to speak** concludes **what the setting demands** (premise).`,
    expert: `In-depth (Expert) — acoustic compliance

Soft speech is the **acoustic compliance** consequent; silence requirement is the **antecedent** norm.`,
  },

  1127: {
    beginner: `In-depth (Beginner) — daily walk (third pass)

Conclusion (index **1**)
**"we should walk daily"** — **habit** conclusion.

Premise
"Exercise improves health" — **benefit** premise.`,
    intermediate: `In-depth (Intermediate) — regimen consequent

Walkthrough
1. Broad premise: exercise benefits health.
2. Narrow conclusion: daily walking prescription.
3. **Therefore** introduces the **specific** regimen—select it.

Takeaway
The **concrete plan** is the conclusion; the **general benefit** is premise.`,
    expert: `In-depth (Expert) — behavioral instantiation

Daily walking is the **behavioral** consequent instantiated from the health-benefit premise.`,
  },

  1128: {
    beginner: `In-depth (Beginner) — second equality (third pass)

Correct (index **1**)
**"X plus 2 equals 7"** — **derived** line.

Premise
"X equals 5" — **given**.`,
    intermediate: `In-depth (Intermediate) — derivational consequent

Steps
1. Premise fixes X.
2. Conclusion applies +2.
3. **Therefore** precedes the **computed** equality—**conclusion** in this drill.

Takeaway
**Derived** equations conclude **given** equations here.`,
    expert: `In-depth (Expert) — algebraic consequent

The **second** equality is the **algebraic** consequent of the substitution premise.`,
  },

  1129: {
    beginner: `In-depth (Beginner) — beach width (third pass)

Conclusion (index **1**)
**"the beach will get smaller"** — **shore** outcome.

Premise
"The tide is coming in" — **tidal** process.`,
    intermediate: `In-depth (Intermediate) — spatial consequent

Procedure
1. Premise: flood tide / rising water.
2. Conclusion: less dry sand for visitors.
3. **Therefore** introduces the **layout** change—**conclusion**.

Takeaway
**Usable beach** shrinkage is the **spatial** consequent; tide state is premise.`,
    expert: `In-depth (Expert) — littoral consequent

Beach shrinkage is the **littoral** consequent; incoming tide is the **hydrodynamic** antecedent.`,
  },

  1130: {
    beginner: `In-depth (Beginner) — past image (third pass)

Correct (index **1**)
**"we see stars as they were"** — **seeing** claim.

Premise
"Light takes time to travel" — **propagation** premise.`,
    intermediate: `In-depth (Intermediate) — appearance consequent

Analysis
1. Physics premise: propagation delay.
2. Conclusion: historical appearance of sources.
3. **Therefore** introduces the **viewing** thesis—pick as **conclusion**.

Takeaway
**What we see** follows **therefore**; **speed of light** story is premise.`,
    expert: `In-depth (Expert) — observational consequent

The past-state **seeing** claim is the **observational** consequent; finite *c* is the **physical** antecedent (Level 0 gloss).`,
  },

  1131: {
    beginner: `In-depth (Beginner) — fall prediction (fourth conclusion pass)

Bank repeat
Same **Gravity… therefore apple…** line as other IDs—pick the **conclusion** (index **1**).

Conclusion
**"the apple will fall"** — **kinematic** claim.

Premise
"Gravity pulls objects down" — **support**.`,
    intermediate: `In-depth (Intermediate) — consequent after therefore

Procedure
1. Split at **therefore**: support | outcome.
2. Outcome = **conclusion** for this lesson.
3. Do not select the cue word or the first clause when asked for **conclusion**.

Takeaway
**Therefore** → **what follows** = conclusion.`,
    expert: `In-depth (Expert) — motion consequent

The apple’s fall is the **motion** consequent; gravitational pull language is the **antecedent** support.`,
  },

  1132: {
    beginner: `In-depth (Beginner) — speak daily (fourth pass)

Correct (index **1**)
**"you should speak daily"** — **cadence** conclusion.

Premise
"Practice improves fluency" — **mechanism** premise.`,
    intermediate: `In-depth (Intermediate) — prudential conclusion

Steps
1. Premise: practice helps fluency.
2. Conclusion: daily speaking prescription.
3. **Therefore** introduces the **ought** about frequency.

Takeaway
**Policy** after **therefore** = conclusion.`,
    expert: `In-depth (Expert) — schedule consequent

Daily speaking is the **schedule** consequent grounded in the practice premise.`,
  },

  1133: {
    beginner: `In-depth (Beginner) — Wi-Fi outage (fourth pass)

Conclusion (index **1**)
**"the Wi-Fi won't work"** — **service** claim.

Premise
"The router is off" — **power** state.`,
    intermediate: `In-depth (Intermediate) — service conclusion

Analysis
1. Box premise: router off.
2. Conclusion: WLAN failure.
3. Select the **Wi-Fi** line as **conclusion**.

Takeaway
**Symptom/service** downstream = conclusion.`,
    expert: `In-depth (Expert) — connectivity consequent

Wireless failure is the **connectivity** consequent; router power is the **antecedent** fact.`,
  },

  1134: {
    beginner: `In-depth (Beginner) — careful handling (fourth pass)

Correct (index **1**)
**"they need careful handling"** — **care** norm.

Premise
"Artifacts are fragile" — **risk** premise.`,
    intermediate: `In-depth (Intermediate) — prescriptive conclusion

Procedure
1. Fragility premise.
2. Handling requirement conclusion.
3. **Therefore** marks the **norm** as what is argued **for**.

Takeaway
**Prescriptive** follow = conclusion.`,
    expert: `In-depth (Expert) — conservation consequent

Care rules are the **conservation** consequent justified by fragility.`,
  },

  1135: {
    beginner: `In-depth (Beginner) — mix for violet (fourth pass)

Conclusion (index **1**)
**"mix them for violet"** — **imperative**.

Premise
"Red and blue make purple" — **composition** fact.`,
    intermediate: `In-depth (Intermediate) — craft conclusion

Steps
1. Compositional premise.
2. Imperative conclusion.
3. **Therefore** → pick the **command** as conclusion.

Takeaway
**Instruction** after **therefore** = conclusion.`,
    expert: `In-depth (Expert) — instrumental consequent

The mixing command is the **instrumental** consequent of the color-mix premise.`,
  },

  1136: {
    beginner: `In-depth (Beginner) — must stop (fourth pass)

Correct (index **1**)
**"drivers must stop"** — **traffic** obligation.

Premise
"The light is red" — **signal** premise.`,
    intermediate: `In-depth (Intermediate) — deontic conclusion

Analysis
1. Observation: red light.
2. Obligation: stop.
3. **Therefore** introduces the **drivers’ duty**—conclusion.

Takeaway
**Must**-claims about drivers conclude **signal** premises.`,
    expert: `In-depth (Expert) — compliance consequent

Stopping is the **compliance** consequent; red aspect is the **antecedent** observation.`,
  },

  1137: {
    beginner: `In-depth (Beginner) — students rest (fourth pass)

Conclusion (index **1**)
**"students should rest"** — **remedy**.

Premise
"Lack of sleep affects focus" — **harm** premise.`,
    intermediate: `In-depth (Intermediate) — advisory conclusion

Walkthrough
1. Harm premise: sleep loss hurts focus.
2. Conclusion: rest advice.
3. **Therefore** → **should rest** is the **conclusion**.

Takeaway
**Recommended response** = conclusion.`,
    expert: `In-depth (Expert) — recovery consequent

Rest is the **recovery** consequent supported by the focus-deficit premise.`,
  },

  1138: {
    beginner: `In-depth (Beginner) — prices rise (fourth pass)

Correct (index **1**)
**"prices will rise"** — **price** forecast.

Premise
"Supply is low" — **scarcity** premise.`,
    intermediate: `In-depth (Intermediate) — market conclusion

Steps
1. Supply premise.
2. Price conclusion.
3. **Therefore** introduces the **forecast**—select it.

Takeaway
**Price movement** = conclusion in this toy model.`,
    expert: `In-depth (Expert) — price consequent

Rising prices are the **price** consequent; low supply is the **antecedent** condition.`,
  },

  1139: {
    beginner: `In-depth (Beginner) — need company (fourth pass)

Conclusion (index **1**)
**"they need company"** — **welfare** claim.

Premise
"Dogs are social" — **trait** premise.`,
    intermediate: `In-depth (Intermediate) — inferred need

Analysis
1. Trait premise: sociability.
2. Conclusion: companionship need.
3. **Therefore** → pick the **need** statement.

Takeaway
**Need** line = conclusion; **trait** = premise.`,
    expert: `In-depth (Expert) — welfare consequent

Company need is the **welfare** consequent inferred from sociability.`,
  },

  1140: {
    beginner: `In-depth (Beginner) — sound bad (fourth pass)

Correct (index **1**)
**"it will sound bad"** — **sonic** prediction.

Premise
"The guitar is out of tune" — **setup** fault.`,
    intermediate: `In-depth (Intermediate) — aesthetic conclusion

Procedure
1. Tuning premise.
2. Sound-quality conclusion.
3. **Therefore** marks the **auditory** evaluation as **conclusion**.

Takeaway
**Bad sound** is the **consequent**; tuning fault is **antecedent**.`,
    expert: `In-depth (Expert) — timbre consequent

Poor sound is the **timbre** consequent; detuning is the **setup** antecedent.`,
  },

  1141: {
    beginner: `In-depth (Beginner) — cake burns (fifth conclusion pass)

Conclusion (index **1**)
**"the cake will burn"** — **baking** harm.

Premise
"The oven is too hot" — **heat** premise.`,
    intermediate: `In-depth (Intermediate) — thermal consequent

Steps
1. Heat premise.
2. Burn conclusion.
3. **Therefore** → **burn** is what the arguer ** concludes**.

Takeaway
**Food fate** after **therefore** = conclusion.`,
    expert: `In-depth (Expert) — overcook consequent

Burning is the **overcook** consequent; excessive heat is the **antecedent** condition.`,
  },

  1142: {
    beginner: `In-depth (Beginner) — finish faster (fifth pass)

Correct (index **1**)
**"you will finish faster"** — **pace** outcome.

Premise
"You practiced hard" — **effort** premise.`,
    intermediate: `In-depth (Intermediate) — throughput conclusion

Analysis
1. Effort premise.
2. Speed conclusion.
3. Select the **faster** claim as **conclusion**.

Takeaway
**Performance** prediction = conclusion.`,
    expert: `In-depth (Expert) — SLA-style consequent

Faster completion is the **throughput** consequent of the practice premise.`,
  },

  1143: {
    beginner: `In-depth (Beginner) — going to rain (fifth pass)

Conclusion (index **1**)
**"it is going to rain"** — **weather** call.

Premise
"The clouds are dark" — **sky** observation.`,
    intermediate: `In-depth (Intermediate) — forecast conclusion

Procedure
1. Sign premise: clouds.
2. Event conclusion: rain.
3. **Therefore** introduces the **forecast**—pick it.

Takeaway
**Rain claim** = conclusion.`,
    expert: `In-depth (Expert) — precipitation consequent

Rain is the **precipitation** consequent; cloud appearance is the **antecedent** sign.`,
  },

  1144: {
    beginner: `In-depth (Beginner) — won’t start (fifth pass)

Correct (index **1**)
**"the car won't start"** — **failure** mode.

Premise
"The battery is empty" — **charge** premise.`,
    intermediate: `In-depth (Intermediate) — no-crank conclusion

Steps
1. Battery premise.
2. Start failure conclusion.
3. **Therefore** → **no start** is **conclusion**.

Takeaway
**Functional** failure = conclusion.`,
    expert: `In-depth (Expert) — ignition consequent

No-start is the **ignition** consequent; empty battery is the **electrical** antecedent.`,
  },

  1145: {
    beginner: `In-depth (Beginner) — near the window (fifth pass)

Conclusion (index **1**)
**"they should be near the window"** — **placement**.

Premise
"Plants need light" — **need** premise.`,
    intermediate: `In-depth (Intermediate) — placement conclusion

Analysis
1. Need premise: light.
2. Conclusion: window proximity.
3. **Therefore** introduces the **where**—conclusion.

Takeaway
**Placement ought** = conclusion.`,
    expert: `In-depth (Expert) — photon-access consequent

Window placement is the **photon-access** consequent of the light-need premise.`,
  },

  1146: {
    beginner: `In-depth (Beginner) — speak softly (fifth pass)

Correct (index **1**)
**"we must speak softly"** — **conduct**.

Premise
"Silence is required" — **rule** premise.`,
    intermediate: `In-depth (Intermediate) — conduct conclusion

Procedure
1. Quiet rule premise.
2. Soft-speech conclusion.
3. Pick **must speak softly** as **conclusion**.

Takeaway
**Compliance behavior** = conclusion.`,
    expert: `In-depth (Expert) — etiquette consequent

Soft speech is the **etiquette** consequent of the silence requirement.`,
  },

  1147: {
    beginner: `In-depth (Beginner) — walk daily (fifth pass)

Conclusion (index **1**)
**"we should walk daily"** — **habit** prescription.

Premise
"Exercise improves health" — **benefit** premise.`,
    intermediate: `In-depth (Intermediate) — regimen conclusion

Walkthrough
1. Benefit premise.
2. Walking regimen conclusion.
3. **Therefore** → **should walk** = **conclusion**.

Takeaway
**Concrete habit** = conclusion.`,
    expert: `In-depth (Expert) — dose consequent

Daily walking is the **dose** consequent supported by the exercise–health premise.`,
  },

  1148: {
    beginner: `In-depth (Beginner) — X plus 2 equals 7 (fifth pass)

Correct (index **1**)
**"X plus 2 equals 7"** — **derived** equality.

Premise
"X equals 5" — **given**.`,
    intermediate: `In-depth (Intermediate) — algebra conclusion

Steps
1. Given: X = 5.
2. Conclusion: X + 2 = 7.
3. **Therefore** precedes the **derived** line—**conclusion**.

Takeaway
**Computed** line = conclusion.`,
    expert: `In-depth (Expert) — equality consequent

The second equality is the **equality** consequent of the substitution premise.`,
  },

  1149: {
    beginner: `In-depth (Beginner) — beach smaller (fifth pass)

Conclusion (index **1**)
**"the beach will get smaller"** — **shore** change.

Premise
"The tide is coming in" — **tide** premise.`,
    intermediate: `In-depth (Intermediate) — shoreline conclusion

Procedure
1. Tide premise.
2. Beach-width conclusion.
3. **Therefore** marks **shrinkage** as **conclusion**.

Takeaway
**Spatial** effect = conclusion.`,
    expert: `In-depth (Expert) — footprint consequent

Dry-sand loss is the **footprint** consequent; flood tide is the **forcing** antecedent.`,
  },

  1150: {
    beginner: `In-depth (Beginner) — stars as they were (fifth pass)

Correct (index **1**)
**"we see stars as they were"** — **seeing** claim.

Premise
"Light takes time to travel" — **delay** premise.`,
    intermediate: `In-depth (Intermediate) — lookback conclusion

Analysis
1. Propagation premise.
2. Historical-appearance conclusion.
3. **Therefore** → **seeing** thesis = **conclusion**.

Takeaway
**Observation** about the sky = conclusion; **physics** = premise.`,
    expert: `In-depth (Expert) — phenomenology consequent

Past-state appearance is the **phenomenology** consequent; light-travel time is the **physical** antecedent.`,
  },
  1151: {
    beginner: `In-depth (Beginner) — fact vs opinion (Bio / DNA, cycle 1)

Correct (index **0**)
**"DNA stores genetic info."** — checkable **descriptive** claim.

Not the fact here
• "DNA is beautiful." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — bio (cycle 1)

Cycle 1: the **storage** claim is empirical biology; **beauty** is aesthetic and not a checkable property of DNA in this sense.`,
  },

  1152: {
    beginner: `In-depth (Beginner) — fact vs opinion (Space / Jupiter, cycle 1)

Correct (index **0**)
**"Jupiter is the largest planet."** — checkable **descriptive** claim.

Not the fact here
• "Jupiter is scary." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — space (cycle 1)

Cycle 1: **size ranking among planets** is an astronomical fact claim (Level 0 gloss); **scary** is emotional.`,
  },

  1153: {
    beginner: `In-depth (Beginner) — fact vs opinion (Chem / gold, cycle 1)

Correct (index **0**)
**"Gold does not rust."** — checkable **descriptive** claim.

Not the fact here
• "Gold is the best metal." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — chem (cycle 1)

Cycle 1: **corrosion behavior** is a chemistry fact claim; **best** is comparative preference.`,
  },

  1154: {
    beginner: `In-depth (Beginner) — fact vs opinion (Math / dozen, cycle 1)

Correct (index **0**)
**"A dozen is twelve units."** — checkable **definition** claim.

Not the fact here
• "Dozen is a lucky number." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (by definition/convention here).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — math (cycle 1)

Cycle 1: **definition** of dozen is stipulative/conventional and treated here as the **factual** option; **lucky** is superstitious evaluation.`,
  },

  1155: {
    beginner: `In-depth (Beginner) — fact vs opinion (Geo / Nile, cycle 1)

Correct (index **0**)
**"The Nile is in Africa."** — checkable **descriptive** claim.

Not the fact here
• "The Nile is peaceful." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — geo (cycle 1)

Cycle 1: **continent location** is geographic; **peaceful** is a mood judgment about a river.`,
  },

  1156: {
    beginner: `In-depth (Beginner) — fact vs opinion (Bio / DNA, cycle 2)

Correct (index **0**)
**"DNA stores genetic info."** — checkable **descriptive** claim.

Not the fact here
• "DNA is beautiful." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — bio (cycle 2)

Cycle 2: the **storage** claim is empirical biology; **beauty** is aesthetic and not a checkable property of DNA in this sense.`,
  },

  1157: {
    beginner: `In-depth (Beginner) — fact vs opinion (Space / Jupiter, cycle 2)

Correct (index **0**)
**"Jupiter is the largest planet."** — checkable **descriptive** claim.

Not the fact here
• "Jupiter is scary." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — space (cycle 2)

Cycle 2: **size ranking among planets** is an astronomical fact claim (Level 0 gloss); **scary** is emotional.`,
  },

  1158: {
    beginner: `In-depth (Beginner) — fact vs opinion (Chem / gold, cycle 2)

Correct (index **0**)
**"Gold does not rust."** — checkable **descriptive** claim.

Not the fact here
• "Gold is the best metal." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — chem (cycle 2)

Cycle 2: **corrosion behavior** is a chemistry fact claim; **best** is comparative preference.`,
  },

  1159: {
    beginner: `In-depth (Beginner) — fact vs opinion (Math / dozen, cycle 2)

Correct (index **0**)
**"A dozen is twelve units."** — checkable **definition** claim.

Not the fact here
• "Dozen is a lucky number." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (by definition/convention here).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — math (cycle 2)

Cycle 2: **definition** of dozen is stipulative/conventional and treated here as the **factual** option; **lucky** is superstitious evaluation.`,
  },

  1160: {
    beginner: `In-depth (Beginner) — fact vs opinion (Geo / Nile, cycle 2)

Correct (index **0**)
**"The Nile is in Africa."** — checkable **descriptive** claim.

Not the fact here
• "The Nile is peaceful." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — geo (cycle 2)

Cycle 2: **continent location** is geographic; **peaceful** is a mood judgment about a river.`,
  },

  1161: {
    beginner: `In-depth (Beginner) — fact vs opinion (Bio / DNA, cycle 3)

Correct (index **0**)
**"DNA stores genetic info."** — checkable **descriptive** claim.

Not the fact here
• "DNA is beautiful." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — bio (cycle 3)

Cycle 3: the **storage** claim is empirical biology; **beauty** is aesthetic and not a checkable property of DNA in this sense.`,
  },

  1162: {
    beginner: `In-depth (Beginner) — fact vs opinion (Space / Jupiter, cycle 3)

Correct (index **0**)
**"Jupiter is the largest planet."** — checkable **descriptive** claim.

Not the fact here
• "Jupiter is scary." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — space (cycle 3)

Cycle 3: **size ranking among planets** is an astronomical fact claim (Level 0 gloss); **scary** is emotional.`,
  },

  1163: {
    beginner: `In-depth (Beginner) — fact vs opinion (Chem / gold, cycle 3)

Correct (index **0**)
**"Gold does not rust."** — checkable **descriptive** claim.

Not the fact here
• "Gold is the best metal." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — chem (cycle 3)

Cycle 3: **corrosion behavior** is a chemistry fact claim; **best** is comparative preference.`,
  },

  1164: {
    beginner: `In-depth (Beginner) — fact vs opinion (Math / dozen, cycle 3)

Correct (index **0**)
**"A dozen is twelve units."** — checkable **definition** claim.

Not the fact here
• "Dozen is a lucky number." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (by definition/convention here).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — math (cycle 3)

Cycle 3: **definition** of dozen is stipulative/conventional and treated here as the **factual** option; **lucky** is superstitious evaluation.`,
  },

  1165: {
    beginner: `In-depth (Beginner) — fact vs opinion (Geo / Nile, cycle 3)

Correct (index **0**)
**"The Nile is in Africa."** — checkable **descriptive** claim.

Not the fact here
• "The Nile is peaceful." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — geo (cycle 3)

Cycle 3: **continent location** is geographic; **peaceful** is a mood judgment about a river.`,
  },

  1166: {
    beginner: `In-depth (Beginner) — fact vs opinion (Bio / DNA, cycle 4)

Correct (index **0**)
**"DNA stores genetic info."** — checkable **descriptive** claim.

Not the fact here
• "DNA is beautiful." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — bio (cycle 4)

Cycle 4: the **storage** claim is empirical biology; **beauty** is aesthetic and not a checkable property of DNA in this sense.`,
  },

  1167: {
    beginner: `In-depth (Beginner) — fact vs opinion (Space / Jupiter, cycle 4)

Correct (index **0**)
**"Jupiter is the largest planet."** — checkable **descriptive** claim.

Not the fact here
• "Jupiter is scary." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — space (cycle 4)

Cycle 4: **size ranking among planets** is an astronomical fact claim (Level 0 gloss); **scary** is emotional.`,
  },

  1168: {
    beginner: `In-depth (Beginner) — fact vs opinion (Chem / gold, cycle 4)

Correct (index **0**)
**"Gold does not rust."** — checkable **descriptive** claim.

Not the fact here
• "Gold is the best metal." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — chem (cycle 4)

Cycle 4: **corrosion behavior** is a chemistry fact claim; **best** is comparative preference.`,
  },

  1169: {
    beginner: `In-depth (Beginner) — fact vs opinion (Math / dozen, cycle 4)

Correct (index **0**)
**"A dozen is twelve units."** — checkable **definition** claim.

Not the fact here
• "Dozen is a lucky number." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (by definition/convention here).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — math (cycle 4)

Cycle 4: **definition** of dozen is stipulative/conventional and treated here as the **factual** option; **lucky** is superstitious evaluation.`,
  },

  1170: {
    beginner: `In-depth (Beginner) — fact vs opinion (Geo / Nile, cycle 4)

Correct (index **0**)
**"The Nile is in Africa."** — checkable **descriptive** claim.

Not the fact here
• "The Nile is peaceful." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — geo (cycle 4)

Cycle 4: **continent location** is geographic; **peaceful** is a mood judgment about a river.`,
  },

  1171: {
    beginner: `In-depth (Beginner) — fact vs opinion (Bio / DNA, cycle 5)

Correct (index **0**)
**"DNA stores genetic info."** — checkable **descriptive** claim.

Not the fact here
• "DNA is beautiful." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — bio (cycle 5)

Cycle 5: the **storage** claim is empirical biology; **beauty** is aesthetic and not a checkable property of DNA in this sense.`,
  },

  1172: {
    beginner: `In-depth (Beginner) — fact vs opinion (Space / Jupiter, cycle 5)

Correct (index **0**)
**"Jupiter is the largest planet."** — checkable **descriptive** claim.

Not the fact here
• "Jupiter is scary." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — space (cycle 5)

Cycle 5: **size ranking among planets** is an astronomical fact claim (Level 0 gloss); **scary** is emotional.`,
  },

  1173: {
    beginner: `In-depth (Beginner) — fact vs opinion (Chem / gold, cycle 5)

Correct (index **0**)
**"Gold does not rust."** — checkable **descriptive** claim.

Not the fact here
• "Gold is the best metal." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — chem (cycle 5)

Cycle 5: **corrosion behavior** is a chemistry fact claim; **best** is comparative preference.`,
  },

  1174: {
    beginner: `In-depth (Beginner) — fact vs opinion (Math / dozen, cycle 5)

Correct (index **0**)
**"A dozen is twelve units."** — checkable **definition** claim.

Not the fact here
• "Dozen is a lucky number." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (by definition/convention here).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — math (cycle 5)

Cycle 5: **definition** of dozen is stipulative/conventional and treated here as the **factual** option; **lucky** is superstitious evaluation.`,
  },

  1175: {
    beginner: `In-depth (Beginner) — fact vs opinion (Geo / Nile, cycle 5)

Correct (index **0**)
**"The Nile is in Africa."** — checkable **descriptive** claim.

Not the fact here
• "The Nile is peaceful." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — geo (cycle 5)

Cycle 5: **continent location** is geographic; **peaceful** is a mood judgment about a river.`,
  },

  1176: {
    beginner: `In-depth (Beginner) — fact vs opinion (Bio / DNA, cycle 6)

Correct (index **0**)
**"DNA stores genetic info."** — checkable **descriptive** claim.

Not the fact here
• "DNA is beautiful." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — bio (cycle 6)

Cycle 6: the **storage** claim is empirical biology; **beauty** is aesthetic and not a checkable property of DNA in this sense.`,
  },

  1177: {
    beginner: `In-depth (Beginner) — fact vs opinion (Space / Jupiter, cycle 6)

Correct (index **0**)
**"Jupiter is the largest planet."** — checkable **descriptive** claim.

Not the fact here
• "Jupiter is scary." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — space (cycle 6)

Cycle 6: **size ranking among planets** is an astronomical fact claim (Level 0 gloss); **scary** is emotional.`,
  },

  1178: {
    beginner: `In-depth (Beginner) — fact vs opinion (Chem / gold, cycle 6)

Correct (index **0**)
**"Gold does not rust."** — checkable **descriptive** claim.

Not the fact here
• "Gold is the best metal." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — chem (cycle 6)

Cycle 6: **corrosion behavior** is a chemistry fact claim; **best** is comparative preference.`,
  },

  1179: {
    beginner: `In-depth (Beginner) — fact vs opinion (Math / dozen, cycle 6)

Correct (index **0**)
**"A dozen is twelve units."** — checkable **definition** claim.

Not the fact here
• "Dozen is a lucky number." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (by definition/convention here).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — math (cycle 6)

Cycle 6: **definition** of dozen is stipulative/conventional and treated here as the **factual** option; **lucky** is superstitious evaluation.`,
  },

  1180: {
    beginner: `In-depth (Beginner) — fact vs opinion (Geo / Nile, cycle 6)

Correct (index **0**)
**"The Nile is in Africa."** — checkable **descriptive** claim.

Not the fact here
• "The Nile is peaceful." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — geo (cycle 6)

Cycle 6: **continent location** is geographic; **peaceful** is a mood judgment about a river.`,
  },

  1181: {
    beginner: `In-depth (Beginner) — fact vs opinion (Bio / DNA, cycle 7)

Correct (index **0**)
**"DNA stores genetic info."** — checkable **descriptive** claim.

Not the fact here
• "DNA is beautiful." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — bio (cycle 7)

Cycle 7: the **storage** claim is empirical biology; **beauty** is aesthetic and not a checkable property of DNA in this sense.`,
  },

  1182: {
    beginner: `In-depth (Beginner) — fact vs opinion (Space / Jupiter, cycle 7)

Correct (index **0**)
**"Jupiter is the largest planet."** — checkable **descriptive** claim.

Not the fact here
• "Jupiter is scary." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — space (cycle 7)

Cycle 7: **size ranking among planets** is an astronomical fact claim (Level 0 gloss); **scary** is emotional.`,
  },

  1183: {
    beginner: `In-depth (Beginner) — fact vs opinion (Chem / gold, cycle 7)

Correct (index **0**)
**"Gold does not rust."** — checkable **descriptive** claim.

Not the fact here
• "Gold is the best metal." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — chem (cycle 7)

Cycle 7: **corrosion behavior** is a chemistry fact claim; **best** is comparative preference.`,
  },

  1184: {
    beginner: `In-depth (Beginner) — fact vs opinion (Math / dozen, cycle 7)

Correct (index **0**)
**"A dozen is twelve units."** — checkable **definition** claim.

Not the fact here
• "Dozen is a lucky number." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (by definition/convention here).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — math (cycle 7)

Cycle 7: **definition** of dozen is stipulative/conventional and treated here as the **factual** option; **lucky** is superstitious evaluation.`,
  },

  1185: {
    beginner: `In-depth (Beginner) — fact vs opinion (Geo / Nile, cycle 7)

Correct (index **0**)
**"The Nile is in Africa."** — checkable **descriptive** claim.

Not the fact here
• "The Nile is peaceful." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — geo (cycle 7)

Cycle 7: **continent location** is geographic; **peaceful** is a mood judgment about a river.`,
  },

  1186: {
    beginner: `In-depth (Beginner) — fact vs opinion (Bio / DNA, cycle 8)

Correct (index **0**)
**"DNA stores genetic info."** — checkable **descriptive** claim.

Not the fact here
• "DNA is beautiful." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — bio (cycle 8)

Cycle 8: the **storage** claim is empirical biology; **beauty** is aesthetic and not a checkable property of DNA in this sense.`,
  },

  1187: {
    beginner: `In-depth (Beginner) — fact vs opinion (Space / Jupiter, cycle 8)

Correct (index **0**)
**"Jupiter is the largest planet."** — checkable **descriptive** claim.

Not the fact here
• "Jupiter is scary." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — space (cycle 8)

Cycle 8: **size ranking among planets** is an astronomical fact claim (Level 0 gloss); **scary** is emotional.`,
  },

  1188: {
    beginner: `In-depth (Beginner) — fact vs opinion (Chem / gold, cycle 8)

Correct (index **0**)
**"Gold does not rust."** — checkable **descriptive** claim.

Not the fact here
• "Gold is the best metal." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — chem (cycle 8)

Cycle 8: **corrosion behavior** is a chemistry fact claim; **best** is comparative preference.`,
  },

  1189: {
    beginner: `In-depth (Beginner) — fact vs opinion (Math / dozen, cycle 8)

Correct (index **0**)
**"A dozen is twelve units."** — checkable **definition** claim.

Not the fact here
• "Dozen is a lucky number." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (by definition/convention here).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — math (cycle 8)

Cycle 8: **definition** of dozen is stipulative/conventional and treated here as the **factual** option; **lucky** is superstitious evaluation.`,
  },

  1190: {
    beginner: `In-depth (Beginner) — fact vs opinion (Geo / Nile, cycle 8)

Correct (index **0**)
**"The Nile is in Africa."** — checkable **descriptive** claim.

Not the fact here
• "The Nile is peaceful." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — geo (cycle 8)

Cycle 8: **continent location** is geographic; **peaceful** is a mood judgment about a river.`,
  },

  1191: {
    beginner: `In-depth (Beginner) — fact vs opinion (Bio / DNA, cycle 9)

Correct (index **0**)
**"DNA stores genetic info."** — checkable **descriptive** claim.

Not the fact here
• "DNA is beautiful." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — bio (cycle 9)

Cycle 9: the **storage** claim is empirical biology; **beauty** is aesthetic and not a checkable property of DNA in this sense.`,
  },

  1192: {
    beginner: `In-depth (Beginner) — fact vs opinion (Space / Jupiter, cycle 9)

Correct (index **0**)
**"Jupiter is the largest planet."** — checkable **descriptive** claim.

Not the fact here
• "Jupiter is scary." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — space (cycle 9)

Cycle 9: **size ranking among planets** is an astronomical fact claim (Level 0 gloss); **scary** is emotional.`,
  },

  1193: {
    beginner: `In-depth (Beginner) — fact vs opinion (Chem / gold, cycle 9)

Correct (index **0**)
**"Gold does not rust."** — checkable **descriptive** claim.

Not the fact here
• "Gold is the best metal." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — chem (cycle 9)

Cycle 9: **corrosion behavior** is a chemistry fact claim; **best** is comparative preference.`,
  },

  1194: {
    beginner: `In-depth (Beginner) — fact vs opinion (Math / dozen, cycle 9)

Correct (index **0**)
**"A dozen is twelve units."** — checkable **definition** claim.

Not the fact here
• "Dozen is a lucky number." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (by definition/convention here).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — math (cycle 9)

Cycle 9: **definition** of dozen is stipulative/conventional and treated here as the **factual** option; **lucky** is superstitious evaluation.`,
  },

  1195: {
    beginner: `In-depth (Beginner) — fact vs opinion (Geo / Nile, cycle 9)

Correct (index **0**)
**"The Nile is in Africa."** — checkable **descriptive** claim.

Not the fact here
• "The Nile is peaceful." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — geo (cycle 9)

Cycle 9: **continent location** is geographic; **peaceful** is a mood judgment about a river.`,
  },

  1196: {
    beginner: `In-depth (Beginner) — fact vs opinion (Bio / DNA, cycle 10)

Correct (index **0**)
**"DNA stores genetic info."** — checkable **descriptive** claim.

Not the fact here
• "DNA is beautiful." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — bio (cycle 10)

Cycle 10: the **storage** claim is empirical biology; **beauty** is aesthetic and not a checkable property of DNA in this sense.`,
  },

  1197: {
    beginner: `In-depth (Beginner) — fact vs opinion (Space / Jupiter, cycle 10)

Correct (index **0**)
**"Jupiter is the largest planet."** — checkable **descriptive** claim.

Not the fact here
• "Jupiter is scary." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — space (cycle 10)

Cycle 10: **size ranking among planets** is an astronomical fact claim (Level 0 gloss); **scary** is emotional.`,
  },

  1198: {
    beginner: `In-depth (Beginner) — fact vs opinion (Chem / gold, cycle 10)

Correct (index **0**)
**"Gold does not rust."** — checkable **descriptive** claim.

Not the fact here
• "Gold is the best metal." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — chem (cycle 10)

Cycle 10: **corrosion behavior** is a chemistry fact claim; **best** is comparative preference.`,
  },

  1199: {
    beginner: `In-depth (Beginner) — fact vs opinion (Math / dozen, cycle 10)

Correct (index **0**)
**"A dozen is twelve units."** — checkable **definition** claim.

Not the fact here
• "Dozen is a lucky number." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (by definition/convention here).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — math (cycle 10)

Cycle 10: **definition** of dozen is stipulative/conventional and treated here as the **factual** option; **lucky** is superstitious evaluation.`,
  },

  1200: {
    beginner: `In-depth (Beginner) — fact vs opinion (Geo / Nile, cycle 10)

Correct (index **0**)
**"The Nile is in Africa."** — checkable **descriptive** claim.

Not the fact here
• "The Nile is peaceful." — **evaluative** or preference-laden.
• "Opinions are facts." — **false** / category mistake.
• "Depends." — **non-answer**, not a factual statement.`,
    intermediate: `In-depth (Intermediate) — objective vs subjective

Steps
1. Ask: could this be settled **without** personal taste?
2. The **first** option states something **verifiable** (in the usual scientific sense).
3. The **second** option uses **value** or **emotion** language, not the same logical status.

Takeaway
Facts are **independently checkable**; opinions express **evaluation** or **preference**.`,
    expert: `In-depth (Expert) — geo (cycle 10)

Cycle 10: **continent location** is geographic; **peaceful** is a mood judgment about a river.`,
  },
  1201: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1201)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** In deductive logic, an argument is valid when:

Correct option (index **0**)
**"If every premise were true, the conclusion could not be false."**

Why the other options fail
• (A) If every premise were true, the conclusion could not be false. — **Correct:** states the **truth-preserving** link (standard validity).
• (B) Most experts find the argument persuasive. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (C) Every premise is actually true in the real world. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).
• (D) The conclusion is probably true anyway. — This is closer to **inductive strength** or **acceptance**, not **deductive validity**.`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
In deductive logic, an argument is valid when:

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: In deductive logic, an argument is valid when:
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1202: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1202)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** Which option best matches the standard definition of deductive validity?

Correct option (index **1**)
**"The inference form is truth-preserving: true premises cannot yield a false conclusion."**

Why the other options fail
• (A) The reasoning stirs strong emotions. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (B) The inference form is truth-preserving: true premises cannot yield a false conclusion. — **Correct:** states the **truth-preserving** link (standard validity).
• (C) The argument is popular on social media. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (D) The premises are widely believed to be true. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
Which option best matches the standard definition of deductive validity?

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: Which option best matches the standard definition of deductive validity?
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1203: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1203)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** Your instructor says: "Treat the premises as true in a thought experiment—the conclusion still cannot be false." That de…

Correct option (index **2**)
**"The logical structure guarantees the conclusion whenever the premises hold."**

Why the other options fail
• (A) The speaker cites many sources. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (B) The speaker cares deeply about the topic. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (C) The logical structure guarantees the conclusion whenever the premises hold. — **Correct:** states the **truth-preserving** link (standard validity).
• (D) Each premise has been empirically verified. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
Your instructor says: "Treat the premises as true in a thought experiment—the conclusion still cannot be false." That describes:

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: Your instructor says: "Treat the premises as true in a thought experiment—the conclusion still cannot be false." That de…
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1204: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1204)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** Validity is a structural property. It means:

Correct option (index **3**)
**"Assuming the premises in a model, the conclusion must come out true."**

Why the other options fail
• (A) Most experts find the argument persuasive. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (B) The conclusion feels satisfying to accept. — This does not match the textbook definition: **no situation where all premises are true and the conclusion is false**.
• (C) Every premise is actually true in the real world. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).
• (D) Assuming the premises in a model, the conclusion must come out true. — **Correct:** states the **truth-preserving** link (standard validity).`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
Validity is a structural property. It means:

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: Validity is a structural property. It means:
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1205: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1205)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** Which statement captures what logicians mean by a valid argument?

Correct option (index **0**)
**"The argument's pattern makes it impossible for all premises to be true while the conclusion is false."**

Why the other options fail
• (A) The argument's pattern makes it impossible for all premises to be true while the conclusion is false. — **Correct:** states the **truth-preserving** link (standard validity).
• (B) The argument is popular on social media. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (C) The premises are widely believed to be true. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).
• (D) The reasoning stirs strong emotions. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
Which statement captures what logicians mean by a valid argument?

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: Which statement captures what logicians mean by a valid argument?
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1206: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1206)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** A valid deductive argument is one in which:

Correct option (index **1**)
**"If every premise were true, the conclusion could not be false."**

Why the other options fail
• (A) Each premise has been empirically verified. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).
• (B) If every premise were true, the conclusion could not be false. — **Correct:** states the **truth-preserving** link (standard validity).
• (C) The speaker cites many sources. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (D) The speaker cares deeply about the topic. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
A valid deductive argument is one in which:

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: A valid deductive argument is one in which:
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1207: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1207)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** If someone asks only about validity (not soundness), they are asking whether:

Correct option (index **2**)
**"The inference form is truth-preserving: true premises cannot yield a false conclusion."**

Why the other options fail
• (A) Most experts find the argument persuasive. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (B) The conclusion feels satisfying to accept. — This does not match the textbook definition: **no situation where all premises are true and the conclusion is false**.
• (C) The inference form is truth-preserving: true premises cannot yield a false conclusion. — **Correct:** states the **truth-preserving** link (standard validity).
• (D) Every premise is actually true in the real world. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
If someone asks only about validity (not soundness), they are asking whether:

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: If someone asks only about validity (not soundness), they are asking whether:
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1208: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1208)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** The "validity" of an argument concerns:

Correct option (index **3**)
**"The logical structure guarantees the conclusion whenever the premises hold."**

Why the other options fail
• (A) The argument is popular on social media. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (B) The conclusion is likely true given background knowledge. — This is closer to **inductive strength** or **acceptance**, not **deductive validity**.
• (C) The premises are widely believed to be true. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).
• (D) The logical structure guarantees the conclusion whenever the premises hold. — **Correct:** states the **truth-preserving** link (standard validity).`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
The "validity" of an argument concerns:

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: The "validity" of an argument concerns:
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1209: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1209)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** Which characterization fits validity (as opposed to soundness)?

Correct option (index **0**)
**"Assuming the premises in a model, the conclusion must come out true."**

Why the other options fail
• (A) Assuming the premises in a model, the conclusion must come out true. — **Correct:** states the **truth-preserving** link (standard validity).
• (B) The speaker cites many sources. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (C) The speaker cares deeply about the topic. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (D) Each premise has been empirically verified. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
Which characterization fits validity (as opposed to soundness)?

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: Which characterization fits validity (as opposed to soundness)?
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1210: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1210)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** In a proof system, a rule preserves truth. Likewise, an argument is valid when:

Correct option (index **1**)
**"The argument's pattern makes it impossible for all premises to be true while the conclusion is false."**

Why the other options fail
• (A) Most experts find the argument persuasive. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (B) The argument's pattern makes it impossible for all premises to be true while the conclusion is false. — **Correct:** states the **truth-preserving** link (standard validity).
• (C) Every premise is actually true in the real world. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).
• (D) The conclusion feels satisfying to accept. — This does not match the textbook definition: **no situation where all premises are true and the conclusion is false**.`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
In a proof system, a rule preserves truth. Likewise, an argument is valid when:

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: In a proof system, a rule preserves truth. Likewise, an argument is valid when:
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1211: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1211)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** You cannot have true premises and a false conclusion in a valid argument. Equivalently, validity means:

Correct option (index **2**)
**"If every premise were true, the conclusion could not be false."**

Why the other options fail
• (A) The premises are widely believed to be true. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).
• (B) The argument is popular on social media. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (C) If every premise were true, the conclusion could not be false. — **Correct:** states the **truth-preserving** link (standard validity).
• (D) The reasoning stirs strong emotions. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
You cannot have true premises and a false conclusion in a valid argument. Equivalently, validity means:

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: You cannot have true premises and a false conclusion in a valid argument. Equivalently, validity means:
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1212: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1212)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** Which option states the truth-preserving condition for validity?

Correct option (index **3**)
**"The inference form is truth-preserving: true premises cannot yield a false conclusion."**

Why the other options fail
• (A) The speaker cares deeply about the topic. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (B) The speaker cites many sources. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (C) Each premise has been empirically verified. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).
• (D) The inference form is truth-preserving: true premises cannot yield a false conclusion. — **Correct:** states the **truth-preserving** link (standard validity).`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
Which option states the truth-preserving condition for validity?

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: Which option states the truth-preserving condition for validity?
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1213: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1213)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** Validity answers which question?

Correct option (index **0**)
**"The logical structure guarantees the conclusion whenever the premises hold."**

Why the other options fail
• (A) The logical structure guarantees the conclusion whenever the premises hold. — **Correct:** states the **truth-preserving** link (standard validity).
• (B) Every premise is actually true in the real world. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).
• (C) Most experts find the argument persuasive. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (D) The conclusion feels satisfying to accept. — This does not match the textbook definition: **no situation where all premises are true and the conclusion is false**.`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
Validity answers which question?

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: Validity answers which question?
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1214: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1214)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** A student confuses validity with "having true premises." What is validity actually about?

Correct option (index **1**)
**"Assuming the premises in a model, the conclusion must come out true."**

Why the other options fail
• (A) The argument is popular on social media. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (B) Assuming the premises in a model, the conclusion must come out true. — **Correct:** states the **truth-preserving** link (standard validity).
• (C) The reasoning stirs strong emotions. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (D) The premises are widely believed to be true. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
A student confuses validity with "having true premises." What is validity actually about?

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: A student confuses validity with "having true premises." What is validity actually about?
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1215: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1215)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** Pick the option that describes formal validity in deductive logic:

Correct option (index **2**)
**"The argument's pattern makes it impossible for all premises to be true while the conclusion is false."**

Why the other options fail
• (A) Each premise has been empirically verified. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).
• (B) The speaker cites many sources. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (C) The argument's pattern makes it impossible for all premises to be true while the conclusion is false. — **Correct:** states the **truth-preserving** link (standard validity).
• (D) The conclusion is probably true anyway. — This is closer to **inductive strength** or **acceptance**, not **deductive validity**.`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
Pick the option that describes formal validity in deductive logic:

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: Pick the option that describes formal validity in deductive logic:
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1216: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1216)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** When philosophers say an argument is valid, they mean:

Correct option (index **3**)
**"If every premise were true, the conclusion could not be false."**

Why the other options fail
• (A) Every premise is actually true in the real world. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).
• (B) The conclusion feels satisfying to accept. — This does not match the textbook definition: **no situation where all premises are true and the conclusion is false**.
• (C) Most experts find the argument persuasive. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (D) If every premise were true, the conclusion could not be false. — **Correct:** states the **truth-preserving** link (standard validity).`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
When philosophers say an argument is valid, they mean:

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: When philosophers say an argument is valid, they mean:
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1217: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1217)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** The textbook: the conclusion follows necessarily from the premises. That is equivalent to:

Correct option (index **0**)
**"The inference form is truth-preserving: true premises cannot yield a false conclusion."**

Why the other options fail
• (A) The inference form is truth-preserving: true premises cannot yield a false conclusion. — **Correct:** states the **truth-preserving** link (standard validity).
• (B) The argument is popular on social media. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (C) The reasoning stirs strong emotions. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (D) The premises are widely believed to be true. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
The textbook: the conclusion follows necessarily from the premises. That is equivalent to:

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: The textbook: the conclusion follows necessarily from the premises. That is equivalent to:
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1218: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1218)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** Which option is about logical consequence—not popularity or emotion?

Correct option (index **1**)
**"The logical structure guarantees the conclusion whenever the premises hold."**

Why the other options fail
• (A) The speaker cares deeply about the topic. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (B) The logical structure guarantees the conclusion whenever the premises hold. — **Correct:** states the **truth-preserving** link (standard validity).
• (C) Each premise has been empirically verified. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).
• (D) The speaker cites many sources. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
Which option is about logical consequence—not popularity or emotion?

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: Which option is about logical consequence—not popularity or emotion?
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1219: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1219)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** If you know an argument is valid, you know that:

Correct option (index **2**)
**"Assuming the premises in a model, the conclusion must come out true."**

Why the other options fail
• (A) The conclusion feels satisfying to accept. — This does not match the textbook definition: **no situation where all premises are true and the conclusion is false**.
• (B) Most experts find the argument persuasive. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (C) Assuming the premises in a model, the conclusion must come out true. — **Correct:** states the **truth-preserving** link (standard validity).
• (D) Every premise is actually true in the real world. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
If you know an argument is valid, you know that:

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: If you know an argument is valid, you know that:
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1220: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1220)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** Validity is about the link between premises and conclusion, namely:

Correct option (index **3**)
**"The argument's pattern makes it impossible for all premises to be true while the conclusion is false."**

Why the other options fail
• (A) The reasoning stirs strong emotions. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (B) The argument is popular on social media. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (C) The premises are widely believed to be true. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).
• (D) The argument's pattern makes it impossible for all premises to be true while the conclusion is false. — **Correct:** states the **truth-preserving** link (standard validity).`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
Validity is about the link between premises and conclusion, namely:

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: Validity is about the link between premises and conclusion, namely:
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1221: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1221)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** Necessarily: if the premises hold, the conclusion holds. That matches:

Correct option (index **0**)
**"If every premise were true, the conclusion could not be false."**

Why the other options fail
• (A) If every premise were true, the conclusion could not be false. — **Correct:** states the **truth-preserving** link (standard validity).
• (B) Each premise has been empirically verified. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).
• (C) The speaker cares deeply about the topic. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (D) The speaker cites many sources. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
Necessarily: if the premises hold, the conclusion holds. That matches:

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: Necessarily: if the premises hold, the conclusion holds. That matches:
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1222: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1222)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** A counterexample to validity would be all premises true and conclusion false. So validity means:

Correct option (index **1**)
**"The inference form is truth-preserving: true premises cannot yield a false conclusion."**

Why the other options fail
• (A) The conclusion is likely true given background knowledge. — This is closer to **inductive strength** or **acceptance**, not **deductive validity**.
• (B) The inference form is truth-preserving: true premises cannot yield a false conclusion. — **Correct:** states the **truth-preserving** link (standard validity).
• (C) Most experts find the argument persuasive. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (D) Every premise is actually true in the real world. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
A counterexample to validity would be all premises true and conclusion false. So validity means:

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: A counterexample to validity would be all premises true and conclusion false. So validity means:
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1223: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1223)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** Which option correctly contrasts validity with "the premises are true"?

Correct option (index **2**)
**"The logical structure guarantees the conclusion whenever the premises hold."**

Why the other options fail
• (A) The argument is popular on social media. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (B) The premises are widely believed to be true. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).
• (C) The logical structure guarantees the conclusion whenever the premises hold. — **Correct:** states the **truth-preserving** link (standard validity).
• (D) The reasoning stirs strong emotions. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
Which option correctly contrasts validity with "the premises are true"?

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: Which option correctly contrasts validity with "the premises are true"?
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1224: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1224)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** The pattern of the argument works. That means:

Correct option (index **3**)
**"Assuming the premises in a model, the conclusion must come out true."**

Why the other options fail
• (A) The speaker cares deeply about the topic. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (B) Each premise has been empirically verified. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).
• (C) The speaker cites many sources. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (D) Assuming the premises in a model, the conclusion must come out true. — **Correct:** states the **truth-preserving** link (standard validity).`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
The pattern of the argument works. That means:

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: The pattern of the argument works. That means:
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1225: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1225)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** Choose the best paraphrase of: "No interpretation makes all premises true and the conclusion false."

Correct option (index **0**)
**"The argument's pattern makes it impossible for all premises to be true while the conclusion is false."**

Why the other options fail
• (A) The argument's pattern makes it impossible for all premises to be true while the conclusion is false. — **Correct:** states the **truth-preserving** link (standard validity).
• (B) Every premise is actually true in the real world. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).
• (C) Most experts find the argument persuasive. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (D) The conclusion feels satisfying to accept. — This does not match the textbook definition: **no situation where all premises are true and the conclusion is false**.`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
Choose the best paraphrase of: "No interpretation makes all premises true and the conclusion false."

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: Choose the best paraphrase of: "No interpretation makes all premises true and the conclusion false."
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1226: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1226)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** For deductive validity, which condition must hold?

Correct option (index **1**)
**"If every premise were true, the conclusion could not be false."**

Why the other options fail
• (A) The premises are widely believed to be true. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).
• (B) If every premise were true, the conclusion could not be false. — **Correct:** states the **truth-preserving** link (standard validity).
• (C) The argument is popular on social media. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (D) The reasoning stirs strong emotions. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
For deductive validity, which condition must hold?

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: For deductive validity, which condition must hold?
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1227: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1227)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** Which statement would a logic exam mark as the definition of validity?

Correct option (index **2**)
**"The inference form is truth-preserving: true premises cannot yield a false conclusion."**

Why the other options fail
• (A) The speaker cites many sources. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (B) Each premise has been empirically verified. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).
• (C) The inference form is truth-preserving: true premises cannot yield a false conclusion. — **Correct:** states the **truth-preserving** link (standard validity).
• (D) The speaker cares deeply about the topic. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
Which statement would a logic exam mark as the definition of validity?

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: Which statement would a logic exam mark as the definition of validity?
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1228: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1228)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** Validity is structural. Which option reflects that?

Correct option (index **3**)
**"The logical structure guarantees the conclusion whenever the premises hold."**

Why the other options fail
• (A) Most experts find the argument persuasive. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (B) Every premise is actually true in the real world. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).
• (C) The conclusion feels satisfying to accept. — This does not match the textbook definition: **no situation where all premises are true and the conclusion is false**.
• (D) The logical structure guarantees the conclusion whenever the premises hold. — **Correct:** states the **truth-preserving** link (standard validity).`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
Validity is structural. Which option reflects that?

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: Validity is structural. Which option reflects that?
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1229: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1229)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** If the premises were true in some scenario, validity requires that:

Correct option (index **0**)
**"Assuming the premises in a model, the conclusion must come out true."**

Why the other options fail
• (A) Assuming the premises in a model, the conclusion must come out true. — **Correct:** states the **truth-preserving** link (standard validity).
• (B) The argument is popular on social media. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (C) The conclusion is probably true anyway. — This is closer to **inductive strength** or **acceptance**, not **deductive validity**.
• (D) The premises are widely believed to be true. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
If the premises were true in some scenario, validity requires that:

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: If the premises were true in some scenario, validity requires that:
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1230: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1230)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** You are checking only the inference, not factual accuracy. You are checking:

Correct option (index **1**)
**"The argument's pattern makes it impossible for all premises to be true while the conclusion is false."**

Why the other options fail
• (A) The speaker cares deeply about the topic. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (B) The argument's pattern makes it impossible for all premises to be true while the conclusion is false. — **Correct:** states the **truth-preserving** link (standard validity).
• (C) Each premise has been empirically verified. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).
• (D) The speaker cites many sources. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
You are checking only the inference, not factual accuracy. You are checking:

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: You are checking only the inference, not factual accuracy. You are checking:
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1231: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1231)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** Which option mistakes a soundness condition for the definition of validity?

Correct option (index **1**)
**"Every premise is actually true in the real world."**

Why the other options fail
• (A) If every premise were true, the conclusion could not be false. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).
• (B) Every premise is actually true in the real world. — **Correct:** states the **truth-preserving** link (standard validity).
• (C) Most experts find the argument persuasive. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (D) The conclusion feels satisfying to accept. — This does not match the textbook definition: **no situation where all premises are true and the conclusion is false**.`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
Which option mistakes a soundness condition for the definition of validity?

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: Which option mistakes a soundness condition for the definition of validity?
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1232: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1232)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** The conclusion follows from the premises. In formal logic, that means:

Correct option (index **3**)
**"The inference form is truth-preserving: true premises cannot yield a false conclusion."**

Why the other options fail
• (A) The premises are widely believed to be true. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).
• (B) The reasoning stirs strong emotions. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (C) The argument is popular on social media. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (D) The inference form is truth-preserving: true premises cannot yield a false conclusion. — **Correct:** states the **truth-preserving** link (standard validity).`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
The conclusion follows from the premises. In formal logic, that means:

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: The conclusion follows from the premises. In formal logic, that means:
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1233: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1233)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** Pick the option that matches: logical consequence from premises to conclusion.

Correct option (index **0**)
**"The logical structure guarantees the conclusion whenever the premises hold."**

Why the other options fail
• (A) The logical structure guarantees the conclusion whenever the premises hold. — **Correct:** states the **truth-preserving** link (standard validity).
• (B) Each premise has been empirically verified. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).
• (C) The speaker cares deeply about the topic. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (D) The speaker cites many sources. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
Pick the option that matches: logical consequence from premises to conclusion.

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: Pick the option that matches: logical consequence from premises to conclusion.
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1234: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1234)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** A valid argument can have false premises. Validity still means:

Correct option (index **1**)
**"Assuming the premises in a model, the conclusion must come out true."**

Why the other options fail
• (A) The conclusion feels satisfying to accept. — This does not match the textbook definition: **no situation where all premises are true and the conclusion is false**.
• (B) Assuming the premises in a model, the conclusion must come out true. — **Correct:** states the **truth-preserving** link (standard validity).
• (C) Most experts find the argument persuasive. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (D) Every premise is actually true in the real world. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
A valid argument can have false premises. Validity still means:

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: A valid argument can have false premises. Validity still means:
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1235: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1235)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** Soundness adds true premises; validity alone means:

Correct option (index **2**)
**"The argument's pattern makes it impossible for all premises to be true while the conclusion is false."**

Why the other options fail
• (A) The reasoning stirs strong emotions. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (B) The premises are widely believed to be true. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).
• (C) The argument's pattern makes it impossible for all premises to be true while the conclusion is false. — **Correct:** states the **truth-preserving** link (standard validity).
• (D) The argument is popular on social media. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
Soundness adds true premises; validity alone means:

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: Soundness adds true premises; validity alone means:
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1236: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1236)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** Which is the standard textbook gloss for deductive validity?

Correct option (index **3**)
**"If every premise were true, the conclusion could not be false."**

Why the other options fail
• (A) Each premise has been empirically verified. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).
• (B) The speaker cites many sources. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (C) The conclusion is likely true given background knowledge. — This is closer to **inductive strength** or **acceptance**, not **deductive validity**.
• (D) If every premise were true, the conclusion could not be false. — **Correct:** states the **truth-preserving** link (standard validity).`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
Which is the standard textbook gloss for deductive validity?

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: Which is the standard textbook gloss for deductive validity?
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1237: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1237)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** "If all premises are true, the conclusion must be true" is one phrasing. Another equivalent is:

Correct option (index **0**)
**"The inference form is truth-preserving: true premises cannot yield a false conclusion."**

Why the other options fail
• (A) The inference form is truth-preserving: true premises cannot yield a false conclusion. — **Correct:** states the **truth-preserving** link (standard validity).
• (B) Most experts find the argument persuasive. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (C) Every premise is actually true in the real world. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).
• (D) The conclusion feels satisfying to accept. — This does not match the textbook definition: **no situation where all premises are true and the conclusion is false**.`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
"If all premises are true, the conclusion must be true" is one phrasing. Another equivalent is:

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: "If all premises are true, the conclusion must be true" is one phrasing. Another equivalent is:
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1238: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1238)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** Necessity of the conclusion given the premises means:

Correct option (index **1**)
**"The logical structure guarantees the conclusion whenever the premises hold."**

Why the other options fail
• (A) The argument is popular on social media. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (B) The logical structure guarantees the conclusion whenever the premises hold. — **Correct:** states the **truth-preserving** link (standard validity).
• (C) The premises are widely believed to be true. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).
• (D) The reasoning stirs strong emotions. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
Necessity of the conclusion given the premises means:

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: Necessity of the conclusion given the premises means:
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1239: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1239)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** Select the definition of validity without claiming the premises are actually true:

Correct option (index **2**)
**"Assuming the premises in a model, the conclusion must come out true."**

Why the other options fail
• (A) The speaker cites many sources. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (B) Each premise has been empirically verified. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).
• (C) Assuming the premises in a model, the conclusion must come out true. — **Correct:** states the **truth-preserving** link (standard validity).
• (D) The speaker cares deeply about the topic. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
Select the definition of validity without claiming the premises are actually true:

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: Select the definition of validity without claiming the premises are actually true:
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1240: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1240)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** Truth of premises is a separate issue. Validity is the claim that:

Correct option (index **3**)
**"The argument's pattern makes it impossible for all premises to be true while the conclusion is false."**

Why the other options fail
• (A) The conclusion feels satisfying to accept. — This does not match the textbook definition: **no situation where all premises are true and the conclusion is false**.
• (B) Most experts find the argument persuasive. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (C) Every premise is actually true in the real world. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).
• (D) The argument's pattern makes it impossible for all premises to be true while the conclusion is false. — **Correct:** states the **truth-preserving** link (standard validity).`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
Truth of premises is a separate issue. Validity is the claim that:

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: Truth of premises is a separate issue. Validity is the claim that:
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1241: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1241)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** In a valid argument, which situation is ruled out?

Correct option (index **0**)
**"If every premise were true, the conclusion could not be false."**

Why the other options fail
• (A) If every premise were true, the conclusion could not be false. — **Correct:** states the **truth-preserving** link (standard validity).
• (B) The premises are widely believed to be true. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).
• (C) The reasoning stirs strong emotions. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (D) The argument is popular on social media. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
In a valid argument, which situation is ruled out?

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: In a valid argument, which situation is ruled out?
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1242: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1242)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** The form is such that truth flows to the conclusion. That is:

Correct option (index **1**)
**"The inference form is truth-preserving: true premises cannot yield a false conclusion."**

Why the other options fail
• (A) The speaker cites many sources. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (B) The inference form is truth-preserving: true premises cannot yield a false conclusion. — **Correct:** states the **truth-preserving** link (standard validity).
• (C) Each premise has been empirically verified. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).
• (D) The speaker cares deeply about the topic. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
The form is such that truth flows to the conclusion. That is:

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: The form is such that truth flows to the conclusion. That is:
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1243: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1243)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** Which option would a TA accept as the definition of validity on a first quiz?

Correct option (index **2**)
**"The logical structure guarantees the conclusion whenever the premises hold."**

Why the other options fail
• (A) Every premise is actually true in the real world. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).
• (B) Most experts find the argument persuasive. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (C) The logical structure guarantees the conclusion whenever the premises hold. — **Correct:** states the **truth-preserving** link (standard validity).
• (D) The conclusion is probably true anyway. — This is closer to **inductive strength** or **acceptance**, not **deductive validity**.`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
Which option would a TA accept as the definition of validity on a first quiz?

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: Which option would a TA accept as the definition of validity on a first quiz?
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1244: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1244)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** The premises jointly imply the conclusion. So validity means:

Correct option (index **3**)
**"Assuming the premises in a model, the conclusion must come out true."**

Why the other options fail
• (A) The argument is popular on social media. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (B) The reasoning stirs strong emotions. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (C) The premises are widely believed to be true. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).
• (D) Assuming the premises in a model, the conclusion must come out true. — **Correct:** states the **truth-preserving** link (standard validity).`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
The premises jointly imply the conclusion. So validity means:

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: The premises jointly imply the conclusion. So validity means:
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1245: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1245)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** If you grant the premises for the sake of argument, validity forces you to grant:

Correct option (index **0**)
**"The argument's pattern makes it impossible for all premises to be true while the conclusion is false."**

Why the other options fail
• (A) The argument's pattern makes it impossible for all premises to be true while the conclusion is false. — **Correct:** states the **truth-preserving** link (standard validity).
• (B) The speaker cares deeply about the topic. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (C) The speaker cites many sources. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (D) Each premise has been empirically verified. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
If you grant the premises for the sake of argument, validity forces you to grant:

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: If you grant the premises for the sake of argument, validity forces you to grant:
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1246: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1246)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** The conclusion is a logical consequence of the premises. So validity means:

Correct option (index **1**)
**"If every premise were true, the conclusion could not be false."**

Why the other options fail
• (A) Every premise is actually true in the real world. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).
• (B) If every premise were true, the conclusion could not be false. — **Correct:** states the **truth-preserving** link (standard validity).
• (C) The conclusion feels satisfying to accept. — This does not match the textbook definition: **no situation where all premises are true and the conclusion is false**.
• (D) Most experts find the argument persuasive. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
The conclusion is a logical consequence of the premises. So validity means:

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: The conclusion is a logical consequence of the premises. So validity means:
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1247: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1247)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** Choose the definition that matches the usual turnstile (⊨) in introductory logic:

Correct option (index **2**)
**"The inference form is truth-preserving: true premises cannot yield a false conclusion."**

Why the other options fail
• (A) The argument is popular on social media. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (B) The reasoning stirs strong emotions. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (C) The inference form is truth-preserving: true premises cannot yield a false conclusion. — **Correct:** states the **truth-preserving** link (standard validity).
• (D) The premises are widely believed to be true. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
Choose the definition that matches the usual turnstile (⊨) in introductory logic:

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: Choose the definition that matches the usual turnstile (⊨) in introductory logic:
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1248: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1248)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** A valid argument never permits: all premises true and conclusion false. Hence:

Correct option (index **3**)
**"The logical structure guarantees the conclusion whenever the premises hold."**

Why the other options fail
• (A) Each premise has been empirically verified. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).
• (B) The speaker cites many sources. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (C) The speaker cares deeply about the topic. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (D) The logical structure guarantees the conclusion whenever the premises hold. — **Correct:** states the **truth-preserving** link (standard validity).`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
A valid argument never permits: all premises true and conclusion false. Hence:

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: A valid argument never permits: all premises true and conclusion false. Hence:
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1249: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1249)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** Which option is synonymous with "the conclusion follows necessarily from the premises"?

Correct option (index **0**)
**"Assuming the premises in a model, the conclusion must come out true."**

Why the other options fail
• (A) Assuming the premises in a model, the conclusion must come out true. — **Correct:** states the **truth-preserving** link (standard validity).
• (B) The conclusion feels satisfying to accept. — This does not match the textbook definition: **no situation where all premises are true and the conclusion is false**.
• (C) Most experts find the argument persuasive. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.
• (D) Every premise is actually true in the real world. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
Which option is synonymous with "the conclusion follows necessarily from the premises"?

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: Which option is synonymous with "the conclusion follows necessarily from the premises"?
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1250: {
    beginner: `In-depth (Beginner) — deductive validity (ID 1250)

What this question asks
Pick the **definition of deductive validity**: the structural property that **rules out** “all premises true + conclusion false.”

**Prompt focus (this card):** Which option best states that the argument has no counterexample with true premises and a false conclusion?

Correct option (index **1**)
**"The argument's pattern makes it impossible for all premises to be true while the conclusion is false."**

Why the other options fail
• (A) The premises are widely believed to be true. — This is about **whether premises are true** in reality—**soundness** territory—not the definition of **validity** (the inference link).
• (B) The argument's pattern makes it impossible for all premises to be true while the conclusion is false. — **Correct:** states the **truth-preserving** link (standard validity).
• (C) The conclusion is likely true given background knowledge. — This is closer to **inductive strength** or **acceptance**, not **deductive validity**.
• (D) The argument is popular on social media. — This is **rhetorical** or **psychological**, not the formal definition of deductive validity.`,
    intermediate: `In-depth (Intermediate) — deductive validity

Core idea
**Validity** is **not** “true premises,” **not** “true conclusion,” and **not** “persuasive.” It is about **logical consequence**: the conclusion is **forced** in any situation where the premises hold.

**This question’s angle**
Which option best states that the argument has no counterexample with true premises and a false conclusion?

**Steps**
1. Read each option carefully. Ask: does it describe **form** / **truth-preservation** (premises → conclusion), or something else (popularity, belief, emotions, facts)?
2. **Soundness** is a separate grade: **valid + true premises**. Several distractors smuggle **truth of premises** into the definition of validity.
3. The correct line should say something like: **true premises cannot make the conclusion false** (or equivalently: **no counterexample** with true premises and false conclusion).

**Takeaway**
**Validity** = **structural** guarantee; **soundness** adds **material truth** of premises.`,
    expert: `In-depth (Expert) — deductive validity

**Definition (standard)**
An argument is **deductively valid** iff there is **no** interpretation/model where all premises are **true** and the conclusion is **false**. Equivalently: the conclusion is a **logical consequence** of the premises.

**Why this matters for this item**
The question stem is: Which option best states that the argument has no counterexample with true premises and a false conclusion?
The correct option captures **truth-preservation** (sometimes phrased as **necessary consequence**), not **empirical verification** of premises.

**Distractor taxonomy (common in exams)**
• **Rhetoric / psychology** (experts, popularity, emotion): irrelevant to validity.
• **Truth of premises** in the world: **soundness**, not validity alone.
• **Inductive strength** (“probably”): not deductive validity.

**Edge case**
A valid argument can have **false premises**; validity still constrains the **relationship** between premise-truth and conclusion-truth when premises are assumed true.`,
  },
  1251: {
    beginner: `In-depth (Beginner) — soundness (ID 1251)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
A climate memo says the inference is airtight and every factual claim checks out. In logic, that describes:

Correct option (index **0**)
**"A sound argument (valid reasoning with true premises)."**

Why the other options fail
• (A) A sound argument (valid reasoning with true premises). — **Correct:** matches **validity + true premises** (soundness).
• (B) A valid argument whose premises might still be false. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (C) A persuasive speech that moved the audience. — This is **not** part of the logical definition of **soundness** (valid form + true premises).
• (D) An argument with true premises but invalid form. — **True premises** without a **valid** pattern are not enough for soundness.`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
A climate memo says the inference is airtight and every factual claim checks out. In logic, that describes:

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
A climate memo says the inference is airtight and every factual claim checks out. In logic, that describes:

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1252: {
    beginner: `In-depth (Beginner) — soundness (ID 1252)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
You are grading: the form is valid, but one premise is false. The argument is:

Correct option (index **0**)
**"Not sound (soundness needs validity plus true premises)."**

Why the other options fail
• (A) Not sound (soundness needs validity plus true premises). — **Correct:** matches **validity + true premises** (soundness).
• (B) Sound, because validity is enough. — This confuses **validity** with **soundness**; soundness needs **true premises** too.
• (C) Sound, because one false premise does not matter. — This confuses **validity** with **soundness**; soundness needs **true premises** too.
• (D) Sound if the conclusion is true. — This does not match **soundness** = **deductive validity** + **actually true premises**.`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
You are grading: the form is valid, but one premise is false. The argument is:

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
You are grading: the form is valid, but one premise is false. The argument is:

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1253: {
    beginner: `In-depth (Beginner) — soundness (ID 1253)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
Which package matches what logicians call a sound argument?

Correct option (index **0**)
**"Deductive validity plus all premises actually true."**

Why the other options fail
• (A) Deductive validity plus all premises actually true. — **Correct:** matches **validity + true premises** (soundness).
• (B) Validity alone, even with false premises. — This confuses **validity** with **soundness**; soundness needs **true premises** too.
• (C) True premises alone, even if the pattern is invalid. — **True premises** without a **valid** pattern are not enough for soundness.
• (D) Whatever wins a debate round. — This is **not** part of the logical definition of **soundness** (valid form + true premises).`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
Which package matches what logicians call a sound argument?

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
Which package matches what logicians call a sound argument?

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1254: {
    beginner: `In-depth (Beginner) — soundness (ID 1254)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
Soundness is the combination of:

Correct option (index **0**)
**"Valid structure and true premises."**

Why the other options fail
• (A) Valid structure and true premises. — **Correct:** matches **validity + true premises** (soundness).
• (B) True premises only. — **True premises** without a **valid** pattern are not enough for soundness.
• (C) Valid structure only. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (D) Emotional resonance and rhetorical skill. — This does not match **soundness** = **deductive validity** + **actually true premises**.`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
Soundness is the combination of:

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
Soundness is the combination of:

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1255: {
    beginner: `In-depth (Beginner) — soundness (ID 1255)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
If an argument is sound, what follows about its conclusion?

Correct option (index **0**)
**"The conclusion must be true (given soundness implies valid inference from true premises)."**

Why the other options fail
• (A) The conclusion must be true (given soundness implies valid inference from true premises). — **Correct:** matches **validity + true premises** (soundness).
• (B) The conclusion is probably true. — This is **not** part of the logical definition of **soundness** (valid form + true premises).
• (C) The conclusion is false. — This mis-states what soundness requires or what a valid argument can look like.
• (D) Nothing—the conclusion is irrelevant. — This does not match **soundness** = **deductive validity** + **actually true premises**.`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
If an argument is sound, what follows about its conclusion?

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
If an argument is sound, what follows about its conclusion?

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1256: {
    beginner: `In-depth (Beginner) — soundness (ID 1256)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
Pick the best gloss: soundness =

Correct option (index **0**)
**"Truth-preserving form plus true inputs."**

Why the other options fail
• (A) Truth-preserving form plus true inputs. — **Correct:** matches **validity + true premises** (soundness).
• (B) Truth-preserving form only. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (C) True inputs only. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (D) Audience approval. — This is **not** part of the logical definition of **soundness** (valid form + true premises).`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
Pick the best gloss: soundness =

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
Pick the best gloss: soundness =

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1257: {
    beginner: `In-depth (Beginner) — soundness (ID 1257)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
A proof is valid, but a premise cites a retracted study. Then the argument is:

Correct option (index **0**)
**"Not sound, because a premise is not actually true."**

Why the other options fail
• (A) Not sound, because a premise is not actually true. — **Correct:** matches **validity + true premises** (soundness).
• (B) Sound, because the form still works. — This confuses **validity** with **soundness**; soundness needs **true premises** too.
• (C) Sound, because studies change all the time. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (D) Sound if people still believe the premise. — This does not match **soundness** = **deductive validity** + **actually true premises**.`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
A proof is valid, but a premise cites a retracted study. Then the argument is:

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
A proof is valid, but a premise cites a retracted study. Then the argument is:

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1258: {
    beginner: `In-depth (Beginner) — soundness (ID 1258)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
Which statement is NOT enough for soundness?

Correct option (index **0**)
**"The argument is rhetorically powerful."**

Why the other options fail
• (A) The argument is rhetorically powerful. — **Correct:** matches **validity + true premises** (soundness).
• (B) The argument is valid and every premise is true. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (C) The premises are true and the form is valid. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (D) It is deductively valid with no false premises. — This does not match **soundness** = **deductive validity** + **actually true premises**.`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
Which statement is NOT enough for soundness?

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
Which statement is NOT enough for soundness?

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1259: {
    beginner: `In-depth (Beginner) — soundness (ID 1259)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
In a courtroom analogy: the legal rule is applied correctly, and every entered fact is verified. Logically, that mirrors:

Correct option (index **0**)
**"Soundness (correct rule plus true factual premises)."**

Why the other options fail
• (A) Soundness (correct rule plus true factual premises). — **Correct:** matches **validity + true premises** (soundness).
• (B) Validity only. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (C) A strong vibe from the jury. — This is **not** part of the logical definition of **soundness** (valid form + true premises).
• (D) True premises with a fallacious rule. — This does not match **soundness** = **deductive validity** + **actually true premises**.`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
In a courtroom analogy: the legal rule is applied correctly, and every entered fact is verified. Logically, that mirrors:

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
In a courtroom analogy: the legal rule is applied correctly, and every entered fact is verified. Logically, that mirrors:

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1260: {
    beginner: `In-depth (Beginner) — soundness (ID 1260)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
Sound arguments guarantee their conclusions because:

Correct option (index **0**)
**"Validity transmits truth from true premises, and soundness supplies true premises."**

Why the other options fail
• (A) Validity transmits truth from true premises, and soundness supplies true premises. — **Correct:** matches **validity + true premises** (soundness).
• (B) They are usually short. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (C) They use big words. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (D) They avoid emotions. — This does not match **soundness** = **deductive validity** + **actually true premises**.`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
Sound arguments guarantee their conclusions because:

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
Sound arguments guarantee their conclusions because:

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1261: {
    beginner: `In-depth (Beginner) — soundness (ID 1261)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
Which option confuses validity with soundness?

Correct option (index **0**)
**"Calling an argument "sound" just because it is valid."**

Why the other options fail
• (A) Calling an argument "sound" just because it is valid. — **Correct:** matches **validity + true premises** (soundness).
• (B) Saying soundness needs both validity and true premises. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (C) Checking whether the premises are actually true. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (D) Checking whether the conclusion follows necessarily. — This does not match **soundness** = **deductive validity** + **actually true premises**.`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
Which option confuses validity with soundness?

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
Which option confuses validity with soundness?

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1262: {
    beginner: `In-depth (Beginner) — soundness (ID 1262)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
A researcher says: "Our model is sound." In logic class, the charitable reading is:

Correct option (index **0**)
**"The reasoning pattern is valid and the assumptions are true."**

Why the other options fail
• (A) The reasoning pattern is valid and the assumptions are true. — **Correct:** matches **validity + true premises** (soundness).
• (B) The model is long. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (C) The model is popular. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (D) The model is valid but uses false assumptions. — This does not match **soundness** = **deductive validity** + **actually true premises**.`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
A researcher says: "Our model is sound." In logic class, the charitable reading is:

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
A researcher says: "Our model is sound." In logic class, the charitable reading is:

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1263: {
    beginner: `In-depth (Beginner) — soundness (ID 1263)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
To show an argument is NOT sound, you can:

Correct option (index **0**)
**"Show a false premise or show invalid reasoning."**

Why the other options fail
• (A) Show a false premise or show invalid reasoning. — **Correct:** matches **validity + true premises** (soundness).
• (B) Show the conclusion is surprising. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (C) Show people dislike the conclusion. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (D) Show the argument is valid. — This does not match **soundness** = **deductive validity** + **actually true premises**.`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
To show an argument is NOT sound, you can:

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
To show an argument is NOT sound, you can:

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1264: {
    beginner: `In-depth (Beginner) — soundness (ID 1264)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
Soundness is a stricter standard than validity because it also demands:

Correct option (index **0**)
**"That the premises are actually true."**

Why the other options fail
• (A) That the premises are actually true. — **Correct:** matches **validity + true premises** (soundness).
• (B) That the conclusion be surprising. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (C) That the argument be short. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (D) That everyone agrees. — This does not match **soundness** = **deductive validity** + **actually true premises**.`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
Soundness is a stricter standard than validity because it also demands:

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
Soundness is a stricter standard than validity because it also demands:

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1265: {
    beginner: `In-depth (Beginner) — soundness (ID 1265)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
Which scenario describes a valid but unsound argument?

Correct option (index **0**)
**"Modus ponens form, but a premise about the crime is false."**

Why the other options fail
• (A) Modus ponens form, but a premise about the crime is false. — **Correct:** matches **validity + true premises** (soundness).
• (B) Modus ponens with true premises. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (C) A true conclusion drawn at random. — This mis-states what soundness requires or what a valid argument can look like.
• (D) A false conclusion from a typo. — This mis-states what soundness requires or what a valid argument can look like.`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
Which scenario describes a valid but unsound argument?

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
Which scenario describes a valid but unsound argument?

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1266: {
    beginner: `In-depth (Beginner) — soundness (ID 1266)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
If you have established soundness, you have established:

Correct option (index **0**)
**"Both validity and truth of premises."**

Why the other options fail
• (A) Both validity and truth of premises. — **Correct:** matches **validity + true premises** (soundness).
• (B) Validity only. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (C) Truth of premises only. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (D) Statistical significance. — This is **not** part of the logical definition of **soundness** (valid form + true premises).`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
If you have established soundness, you have established:

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
If you have established soundness, you have established:

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1267: {
    beginner: `In-depth (Beginner) — soundness (ID 1267)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
A sound argument cannot have:

Correct option (index **0**)
**"A false premise (by definition of soundness)."**

Why the other options fail
• (A) A false premise (by definition of soundness). — **Correct:** matches **validity + true premises** (soundness).
• (B) A valid form. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (C) A true conclusion. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (D) Multiple premises. — This does not match **soundness** = **deductive validity** + **actually true premises**.`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
A sound argument cannot have:

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
A sound argument cannot have:

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1268: {
    beginner: `In-depth (Beginner) — soundness (ID 1268)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
Philosophy quiz: "Sound" arguments are the gold standard because they combine:

Correct option (index **0**)
**"Good structure with factual accuracy of premises."**

Why the other options fail
• (A) Good structure with factual accuracy of premises. — **Correct:** matches **validity + true premises** (soundness).
• (B) Rhetoric with charisma. — This is **not** part of the logical definition of **soundness** (valid form + true premises).
• (C) Length with footnotes. — This is **not** part of the logical definition of **soundness** (valid form + true premises).
• (D) Probability with luck. — This is **not** part of the logical definition of **soundness** (valid form + true premises).`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
Philosophy quiz: "Sound" arguments are the gold standard because they combine:

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
Philosophy quiz: "Sound" arguments are the gold standard because they combine:

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1269: {
    beginner: `In-depth (Beginner) — soundness (ID 1269)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
Choose the option that completes: Sound = valid + ___

Correct option (index **0**)
**"True premises."**

Why the other options fail
• (A) True premises. — **Correct:** matches **validity + true premises** (soundness).
• (B) Popular premises. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (C) Emotional premises. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (D) Long premises. — This does not match **soundness** = **deductive validity** + **actually true premises**.`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
Choose the option that completes: Sound = valid + ___

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
Choose the option that completes: Sound = valid + ___

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1270: {
    beginner: `In-depth (Beginner) — soundness (ID 1270)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
Which is the odd one out for soundness?

Correct option (index **0**)
**"The argument went viral online."**

Why the other options fail
• (A) The argument went viral online. — **Correct:** matches **validity + true premises** (soundness).
• (B) Every premise is true. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (C) The argument is deductively valid. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (D) The premises jointly entail the conclusion. — This does not match **soundness** = **deductive validity** + **actually true premises**.`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
Which is the odd one out for soundness?

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
Which is the odd one out for soundness?

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1271: {
    beginner: `In-depth (Beginner) — soundness (ID 1271)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
In logic, what does it mean to say an argument is SOUND?

Correct option (index **0**)
**"It is valid and every premise is actually true."**

Why the other options fail
• (A) It is valid and every premise is actually true. — **Correct:** matches **validity + true premises** (soundness).
• (B) It is valid, but its premises might be false. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (C) All its premises are true, but the reasoning can be invalid. — **True premises** without a **valid** pattern are not enough for soundness.
• (D) It simply feels persuasive to most people. — This is **not** part of the logical definition of **soundness** (valid form + true premises).`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
In logic, what does it mean to say an argument is SOUND?

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
In logic, what does it mean to say an argument is SOUND?

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1272: {
    beginner: `In-depth (Beginner) — soundness (ID 1272)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
Software audit: the protocol is implemented correctly and the logged inputs match the real traffic. That parallels:

Correct option (index **0**)
**"Sound reasoning."**

Why the other options fail
• (A) Sound reasoning. — **Correct:** matches **validity + true premises** (soundness).
• (B) Validity without true inputs. — This is **not** sound: soundness needs **true premises** (here: inputs that match reality), not just valid form.
• (C) Persuasion without evidence. — **Rhetorical**; soundness is a **logical** status, not persuasion.
• (D) Invalid form with accurate logs. — **True facts** cannot fix an **invalid** inference pattern; such an argument is **not sound**.`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. The audit pairs a **correctly applied rule** (valid structure) with **inputs that match reality** (true premises about traffic).
2. That is exactly the **logic + facts** package soundness names.
3. **Validity without true inputs** leaves out factual accuracy; **invalid form with accurate logs** still breaks soundness.

**This item’s question**
Software audit: the protocol is implemented correctly and the logged inputs match the real traffic. That parallels:

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
• **Validity without true inputs** mirrors **valid but unsound** reasoning when premises about the world are false or unknown.
• **Persuasion** distractors confuse **belief** with **soundness**.
• **Invalid form with true facts** is the classic “true premises, bad pattern” case: **unsound** even if every line you wrote down happens to be true.

**This item**
Software audit: the protocol is implemented correctly and the logged inputs match the real traffic. That parallels:

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1273: {
    beginner: `In-depth (Beginner) — soundness (ID 1273)

What this question asks
Identify why **true premises alone** do **not** guarantee **soundness**.

**This card’s scenario**
A student says: "The premises are all true, so the argument is sound." This can still fail if:

Correct option (index **0**)
**"The inference pattern is invalid."**

Why the other options fail
• (A) The inference pattern is invalid. — **Correct:** soundness needs **valid form** *and* **true premises**; true premises + **invalid** pattern ⇒ **not sound**.
• (B) The conclusion is unpopular. — **Rhetorical**; popularity does not define soundness.
• (C) The premises are too short. — **Length** is irrelevant; validity and truth are what matter.
• (D) The speech uses jargon. — **Style** is irrelevant to logical soundness.`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true**.

**Work through this prompt**
1. The student’s mistake is treating **truth of premises** as sufficient. Soundness also demands **deductive validity** (the right **inference pattern**).
2. If the pattern is **invalid**, you can have **all true premises** and still **not** be entitled to the conclusion—so the argument is **not sound**.
3. **Unpopular conclusions**, **short premises**, or **jargon** do not change the logical analysis.

**This item’s question**
A student says: "The premises are all true, so the argument is sound." This can still fail if:

**Takeaway**
**Soundness** = **valid + true premises**. Missing either ingredient breaks the student’s shortcut.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Soundness requires both **truth-preserving form** (validity) **and** **truth** of the premises. **Truth of premises** without validity is analogous to **true axioms** plugged into an **invalid rule** of proof: the package is still **unsound**.

**Why distractors appear**
They test whether you confuse **social** or **stylistic** features with **logical** structure.

**This item**
A student says: "The premises are all true, so the argument is sound." This can still fail if:

**Pedagogical caveat**
In real prose, **invalid** form is often hidden; the skill is to **extract** the pattern and check validity **before** claiming soundness.`,
  },
  1274: {
    beginner: `In-depth (Beginner) — soundness (ID 1274)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
Medical triage note: the treatment rule is applied correctly and the patient facts are accurate. That mirrors:

Correct option (index **0**)
**"Sound reasoning."**

Why the other options fail
• (A) Sound reasoning. — **Correct:** matches **validity + true premises** (soundness).
• (B) Validity without truth. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (C) Purely emotional appeal. — This confuses **validity** with **soundness**; soundness needs **true premises** too.
• (D) Invalid pattern with true facts. — This does not match **soundness** = **deductive validity** + **actually true premises**.`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
Medical triage note: the treatment rule is applied correctly and the patient facts are accurate. That mirrors:

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
Medical triage note: the treatment rule is applied correctly and the patient facts are accurate. That mirrors:

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1275: {
    beginner: `In-depth (Beginner) — soundness (ID 1275)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
Soundness excludes which possibility?

Correct option (index **0**)
**"Valid reasoning from false premises treated as if they settle the case."**

Why the other options fail
• (A) Valid reasoning from false premises treated as if they settle the case. — **Correct:** matches **validity + true premises** (soundness).
• (B) Valid reasoning from true premises. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (C) True premises with valid form. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (D) A true conclusion following validly. — This does not match **soundness** = **deductive validity** + **actually true premises**.`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
Soundness excludes which possibility?

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
Soundness excludes which possibility?

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1276: {
    beginner: `In-depth (Beginner) — soundness (ID 1276)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
An argument can be valid yet unsound. The extra ingredient soundness adds is:

Correct option (index **0**)
**"Actual truth of the premises."**

Why the other options fail
• (A) Actual truth of the premises. — **Correct:** matches **validity + true premises** (soundness).
• (B) A louder voice. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (C) More examples. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (D) A clever title. — This does not match **soundness** = **deductive validity** + **actually true premises**.`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
An argument can be valid yet unsound. The extra ingredient soundness adds is:

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
An argument can be valid yet unsound. The extra ingredient soundness adds is:

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1277: {
    beginner: `In-depth (Beginner) — soundness (ID 1277)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
In one line: soundness means you have the right form and:

Correct option (index **0**)
**"The right facts in the premises."**

Why the other options fail
• (A) The right facts in the premises. — **Correct:** matches **validity + true premises** (soundness).
• (B) The right audience. — This is **not** part of the logical definition of **soundness** (valid form + true premises).
• (C) The right font. — This is **not** part of the logical definition of **soundness** (valid form + true premises).
• (D) The right intuition. — This is **not** part of the logical definition of **soundness** (valid form + true premises).`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
In one line: soundness means you have the right form and:

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
In one line: soundness means you have the right form and:

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1278: {
    beginner: `In-depth (Beginner) — soundness (ID 1278)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
Why care about soundness, not just validity?

Correct option (index **0**)
**"Validity alone can still rely on false premises."**

Why the other options fail
• (A) Validity alone can still rely on false premises. — **Correct:** matches **validity + true premises** (soundness).
• (B) Soundness ignores truth. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (C) Validity is easier, so it is enough. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (D) Soundness is only about style. — This is **not** part of the logical definition of **soundness** (valid form + true premises).`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
Why care about soundness, not just validity?

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
Why care about soundness, not just validity?

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1279: {
    beginner: `In-depth (Beginner) — soundness (ID 1279)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
A podcast says an argument is "sound." Careful listeners should hear:

Correct option (index **0**)
**"Valid structure with true premises."**

Why the other options fail
• (A) Valid structure with true premises. — **Correct:** matches **validity + true premises** (soundness).
• (B) Just confidence. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (C) Just emotion. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (D) Just popularity. — This does not match **soundness** = **deductive validity** + **actually true premises**.`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
A podcast says an argument is "sound." Careful listeners should hear:

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
A podcast says an argument is "sound." Careful listeners should hear:

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1280: {
    beginner: `In-depth (Beginner) — soundness (ID 1280)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
Match concepts: "All premises true" + "valid form" =

Correct option (index **0**)
**"Sound argument."**

Why the other options fail
• (A) Sound argument. — **Correct:** matches **validity + true premises** (soundness).
• (B) Invalid argument. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (C) Inductive strength only. — This is **not** part of the logical definition of **soundness** (valid form + true premises).
• (D) Opinion. — This does not match **soundness** = **deductive validity** + **actually true premises**.`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
Match concepts: "All premises true" + "valid form" =

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
Match concepts: "All premises true" + "valid form" =

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1281: {
    beginner: `In-depth (Beginner) — soundness (ID 1281)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
Which undermines soundness instantly?

Correct option (index **0**)
**"Any false premise in the support set."**

Why the other options fail
• (A) Any false premise in the support set. — **Correct:** matches **validity + true premises** (soundness).
• (B) A long conclusion. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (C) A boring tone. — This is **not** part of the logical definition of **soundness** (valid form + true premises).
• (D) A technical vocabulary. — This does not match **soundness** = **deductive validity** + **actually true premises**.`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
Which undermines soundness instantly?

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
Which undermines soundness instantly?

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1282: {
    beginner: `In-depth (Beginner) — soundness (ID 1282)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
Soundness is about:

Correct option (index **0**)
**"Getting both the logic and the facts right."**

Why the other options fail
• (A) Getting both the logic and the facts right. — **Correct:** matches **validity + true premises** (soundness).
• (B) Getting the vibe right. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (C) Getting applause. — This is **not** part of the logical definition of **soundness** (valid form + true premises).
• (D) Getting a short word count. — This is **not** part of the logical definition of **soundness** (valid form + true premises).`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
Soundness is about:

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
Soundness is about:

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1283: {
    beginner: `In-depth (Beginner) — soundness (ID 1283)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
A student says: "It is valid, therefore it is sound." The mistake is:

Correct option (index **0**)
**"Validity does not guarantee true premises."**

Why the other options fail
• (A) Validity does not guarantee true premises. — **Correct:** matches **validity + true premises** (soundness).
• (B) Validity is impossible. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (C) Soundness ignores premises. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (D) Truth does not matter. — This confuses **validity** with **soundness**; soundness needs **true premises** too.`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
A student says: "It is valid, therefore it is sound." The mistake is:

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
A student says: "It is valid, therefore it is sound." The mistake is:

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1284: {
    beginner: `In-depth (Beginner) — soundness (ID 1284)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
Complete the slogan: No false premises + valid pattern ⇒

Correct option (index **0**)
**"Sound argument (and a true conclusion, given validity)."**

Why the other options fail
• (A) Sound argument (and a true conclusion, given validity). — **Correct:** matches **validity + true premises** (soundness).
• (B) Invalid argument. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (C) Pure opinion. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (D) Rhetorical trick. — This does not match **soundness** = **deductive validity** + **actually true premises**.`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
Complete the slogan: No false premises + valid pattern ⇒

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
Complete the slogan: No false premises + valid pattern ⇒

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1285: {
    beginner: `In-depth (Beginner) — soundness (ID 1285)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
Engineering report: calculations follow the right theorem, but a measured value was mistyped. The proof is:

Correct option (index **0**)
**"Valid but not sound."**

Why the other options fail
• (A) Valid but not sound. — **Correct:** matches **validity + true premises** (soundness).
• (B) Sound. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (C) Neither valid nor sound. — This confuses **validity** with **soundness**; soundness needs **true premises** too.
• (D) Sound if the typo is small. — This mis-states what soundness requires or what a valid argument can look like.`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
Engineering report: calculations follow the right theorem, but a measured value was mistyped. The proof is:

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
Engineering report: calculations follow the right theorem, but a measured value was mistyped. The proof is:

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1286: {
    beginner: `In-depth (Beginner) — soundness (ID 1286)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
Soundness is stricter than validity the same way a healthy meal is stricter than:

Correct option (index **0**)
**"A recipe that looks good on paper but uses spoiled ingredients."**

Why the other options fail
• (A) A recipe that looks good on paper but uses spoiled ingredients. — **Correct:** matches **validity + true premises** (soundness).
• (B) A recipe with fresh ingredients only. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (C) A popular restaurant. — This is **not** part of the logical definition of **soundness** (valid form + true premises).
• (D) A fast restaurant. — This is **not** part of the logical definition of **soundness** (valid form + true premises).`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
Soundness is stricter than validity the same way a healthy meal is stricter than:

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
Soundness is stricter than validity the same way a healthy meal is stricter than:

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1287: {
    beginner: `In-depth (Beginner) — soundness (ID 1287)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
Pick the best description of an unsound yet valid argument:

Correct option (index **0**)
**"True logical form with at least one false premise."**

Why the other options fail
• (A) True logical form with at least one false premise. — **Correct:** matches **validity + true premises** (soundness).
• (B) False conclusion necessarily. — This mis-states what soundness requires or what a valid argument can look like.
• (C) No premises. — This mis-states what soundness requires or what a valid argument can look like.
• (D) No conclusion. — This mis-states what soundness requires or what a valid argument can look like.`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
Pick the best description of an unsound yet valid argument:

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
Pick the best description of an unsound yet valid argument:

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1288: {
    beginner: `In-depth (Beginner) — soundness (ID 1288)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
When philosophers praise an argument as sound, they are not merely saying:

Correct option (index **0**)
**"It is persuasive or widely believed."**

Why the other options fail
• (A) It is persuasive or widely believed. — **Correct:** matches **validity + true premises** (soundness).
• (B) It has true premises and valid form. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (C) It is deductively valid. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (D) It leads to a true conclusion. — This does not match **soundness** = **deductive validity** + **actually true premises**.`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
When philosophers praise an argument as sound, they are not merely saying:

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
When philosophers praise an argument as sound, they are not merely saying:

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1289: {
    beginner: `In-depth (Beginner) — soundness (ID 1289)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
A sound argument's premises are:

Correct option (index **0**)
**"Actually true, not just assumed for an exercise."**

Why the other options fail
• (A) Actually true, not just assumed for an exercise. — **Correct:** matches **validity + true premises** (soundness).
• (B) Assumed true for contradiction. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (C) False but plausible. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (D) True in fiction only. — This does not match **soundness** = **deductive validity** + **actually true premises**.`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
A sound argument's premises are:

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
A sound argument's premises are:

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1290: {
    beginner: `In-depth (Beginner) — soundness (ID 1290)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
Validity is the lock; soundness also checks:

Correct option (index **0**)
**"Whether the keys (premises) are real."**

Why the other options fail
• (A) Whether the keys (premises) are real. — **Correct:** matches **validity + true premises** (soundness).
• (B) Whether the lock is shiny. — This is **not** part of the logical definition of **soundness** (valid form + true premises).
• (C) Whether people like the lock. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (D) Whether the lock has a brand name. — This is **not** part of the logical definition of **soundness** (valid form + true premises).`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
Validity is the lock; soundness also checks:

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
Validity is the lock; soundness also checks:

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1291: {
    beginner: `In-depth (Beginner) — soundness (ID 1291)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
If you refute a premise, you show the argument is:

Correct option (index **0**)
**"Not sound (and maybe still valid)."**

Why the other options fail
• (A) Not sound (and maybe still valid). — **Correct:** matches **validity + true premises** (soundness).
• (B) Sound. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (C) Invalid automatically. — This confuses **validity** with **soundness**; soundness needs **true premises** too.
• (D) Emotionally empty. — This does not match **soundness** = **deductive validity** + **actually true premises**.`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
If you refute a premise, you show the argument is:

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
If you refute a premise, you show the argument is:

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1292: {
    beginner: `In-depth (Beginner) — soundness (ID 1292)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
Soundness ≡

Correct option (index **0**)
**"Valid ∧ true premises."**

Why the other options fail
• (A) Valid ∧ true premises. — **Correct:** matches **validity + true premises** (soundness).
• (B) Valid only. — This confuses **validity** with **soundness**; soundness needs **true premises** too.
• (C) True premises only. — **True premises** without a **valid** pattern are not enough for soundness.
• (D) Convincing only. — This does not match **soundness** = **deductive validity** + **actually true premises**.`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
Soundness ≡

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
Soundness ≡

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1293: {
    beginner: `In-depth (Beginner) — soundness (ID 1293)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
A deductively sound argument with a controversial conclusion still requires:

Correct option (index **0**)
**"That the premises be true and the form valid—controversy alone is not enough."**

Why the other options fail
• (A) That the premises be true and the form valid—controversy alone is not enough. — **Correct:** matches **validity + true premises** (soundness).
• (B) That everyone agree. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (C) That no one ask questions. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (D) That the conclusion be popular. — This does not match **soundness** = **deductive validity** + **actually true premises**.`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
A deductively sound argument with a controversial conclusion still requires:

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
A deductively sound argument with a controversial conclusion still requires:

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1294: {
    beginner: `In-depth (Beginner) — soundness (ID 1294)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
Which pair is sufficient for soundness?

Correct option (index **0**)
**"Valid argument + all premises true."**

Why the other options fail
• (A) Valid argument + all premises true. — **Correct:** matches **validity + true premises** (soundness).
• (B) Valid argument + popular premises. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (C) True premises + fallacious pattern. — **True premises** without a **valid** pattern are not enough for soundness.
• (D) Emotion + statistics. — **True premises** without a **valid** pattern are not enough for soundness.`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
Which pair is sufficient for soundness?

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
Which pair is sufficient for soundness?

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1295: {
    beginner: `In-depth (Beginner) — soundness (ID 1295)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
Unlike mere validity, soundness anchors the argument in:

Correct option (index **0**)
**"The real truth of its premises."**

Why the other options fail
• (A) The real truth of its premises. — **Correct:** matches **validity + true premises** (soundness).
• (B) The real length of its premises. — This is **not** part of the logical definition of **soundness** (valid form + true premises).
• (C) The real fame of its author. — This is **not** part of the logical definition of **soundness** (valid form + true premises).
• (D) The real mood of the room. — This is **not** part of the logical definition of **soundness** (valid form + true premises).`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
Unlike mere validity, soundness anchors the argument in:

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
Unlike mere validity, soundness anchors the argument in:

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1296: {
    beginner: `In-depth (Beginner) — soundness (ID 1296)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
A critic says: "Your logic is fine; your facts are not." They attack:

Correct option (index **0**)
**"Soundness (truth of premises), while granting validity."**

Why the other options fail
• (A) Soundness (truth of premises), while granting validity. — **Correct:** matches **validity + true premises** (soundness).
• (B) Validity only. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (C) The font choice. — This is **not** part of the logical definition of **soundness** (valid form + true premises).
• (D) The conclusion tone. — This is **not** part of the logical definition of **soundness** (valid form + true premises).`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
A critic says: "Your logic is fine; your facts are not." They attack:

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
A critic says: "Your logic is fine; your facts are not." They attack:

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1297: {
    beginner: `In-depth (Beginner) — soundness (ID 1297)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
In short: soundness asks both "Does it follow?" and:

Correct option (index **0**)
**""Are the starting claims actually true?""**

Why the other options fail
• (A) "Are the starting claims actually true?" — **Correct:** matches **validity + true premises** (soundness).
• (B) "Is it short?" — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (C) "Is it loud?" — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (D) "Is it new?" — This does not match **soundness** = **deductive validity** + **actually true premises**.`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
In short: soundness asks both "Does it follow?" and:

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
In short: soundness asks both "Does it follow?" and:

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1298: {
    beginner: `In-depth (Beginner) — soundness (ID 1298)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
Which is a recipe for soundness?

Correct option (index **0**)
**"Check validity first, then verify each premise in the world."**

Why the other options fail
• (A) Check validity first, then verify each premise in the world. — **Correct:** matches **validity + true premises** (soundness).
• (B) Check vibes first. — This is **not** part of the logical definition of **soundness** (valid form + true premises).
• (C) Check popularity first. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (D) Check length first. — This is **not** part of the logical definition of **soundness** (valid form + true premises).`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
Which is a recipe for soundness?

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
Which is a recipe for soundness?

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1299: {
    beginner: `In-depth (Beginner) — soundness (ID 1299)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
If premises are true and the argument is valid, the argument is:

Correct option (index **0**)
**"Sound."**

Why the other options fail
• (A) Sound. — **Correct:** matches **validity + true premises** (soundness).
• (B) Invalid. — This does not match **soundness** = **deductive validity** + **actually true premises**.
• (C) Purely emotional. — This confuses **validity** with **soundness**; soundness needs **true premises** too.
• (D) Purely rhetorical. — This confuses **validity** with **soundness**; soundness needs **true premises** too.`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
If premises are true and the argument is valid, the argument is:

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
If premises are true and the argument is valid, the argument is:

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },
  1300: {
    beginner: `In-depth (Beginner) — soundness (ID 1300)

What this question asks
Pick the option that matches **soundness**: **deductive validity** plus **actually true premises** (so the conclusion is true, given validity).

**This card’s scenario**
Soundness closes the gap between "good form" and:

Correct option (index **0**)
**""True content" in the premises."**

Why the other options fail
• (A) "True content" in the premises. — **Correct:** matches **validity + true premises** (soundness).
• (B) "Good marketing". — This is **not** part of the logical definition of **soundness** (valid form + true premises).
• (C) "Good luck". — This is **not** part of the logical definition of **soundness** (valid form + true premises).
• (D) "Good taste". — This is **not** part of the logical definition of **soundness** (valid form + true premises).`,
    intermediate: `In-depth (Intermediate) — soundness

Definition (logic class)
**Sound** = **valid argument** + **all premises true** (in the sense relevant to the argument).

**Work through this prompt**
1. **Validity** alone can still be **unsound** if a premise is false.
2. **True premises** alone can be **unsound** if the pattern is **invalid**.
3. **Soundness** is the “gold standard” package: **good form** + **true facts** in the premises.

**This item’s question**
Soundness closes the gap between "good form" and:

**Takeaway**
If you only remember one slogan: **soundness = valid + true premises**.`,
    expert: `In-depth (Expert) — soundness

**Formal gloss**
Let an argument have premises (P_1..P_n) and conclusion (C). It is **sound** iff it is **deductively valid** and each (P_i) is **true** (under the intended interpretation).

**Why distractors appear**
Many mistakes map to:
• treating **validity** as enough (ignoring false premises),
• treating **truth** as enough (ignoring invalid form),
• importing **rhetorical** success as logical soundness.

**This item**
Soundness closes the gap between "good form" and:

**Pedagogical caveat**
“True premises” is idealized in textbooks; real arguments may involve **uncertain** evidence—still, the **definition** of soundness is the clean joint of **validity** and **truth**.`,
  },};

/** French — même contenu pédagogique que LEVEL_0_STANDALONE_EN (parité) */
export const LEVEL_0_STANDALONE_FR: Partial<Record<number, StandaloneInDepthLevels>> = {
  1001: {
    beginner: `Approfondi (Débutant) — plastiques à usage unique

Ce que demande la question
Repérer l’énoncé qui est un argument : une thèse principale et une raison présentée pour la soutenir.

Passer les options en revue
1. « Les plastiques à usage unique sont partout. » — Simple constat, sans « il faut » ni pourquoi agir.
2. « Nous devrions les interdire parce qu’ils encombrent les océans. » — Recommandation (interdire) + raison (océans). C’est un argument.
3. « Je n’aime pas les sacs de courses. » — Préférence personnelle.
4. « Le film plastique existe dans tous les magasins. » — Fait, pas une prise de position argumentée.

Pourquoi c’est la bonne réponse
Seule l’option 2 relie une conclusion à un préjudice (océans) comme justification.`,
    intermediate: `Approfondi (Intermédiaire) — plastiques à usage unique

Objectif
Distinguer description du monde, préférence, et conclusion appuyée sur une prémisse.

Étapes sur cet énoncé
Étape 1 — Que fait chaque phrase ?
• 1 et 4 : existence / ubiquité, sans passage aux normes.
• 3 : sentiment (« je n’aime pas ») sans raison publique du type dommage environnemental.
• 2 : « parce que » relie interdiction à l’impact océanique.

Étape 2 — Nommer les rôles dans l’option 2
• Conclusion : interdire ces plastiques.
• Prémisse : ils encombrent / polluent les océans.

Étape 3 — Lien avec la consigne
La question porte sur les plastiques à usage unique ; seule l’option 2 combine prise de position et raison liée au sujet.

Synthèse
Un argument peut être critiqué ; ici on ne juge que la présence d’une structure « thèse + raison ».`,
    expert: `Approfondi (Expert) — plastiques à usage unique

Cible logique
Un argument est un ensemble de propositions où au moins l’une est offerte comme raison pour une autre.

Esquisse (option 2)
• B : « Nous devrions interdire… »
• O : « Ils encombrent les océans. »
« Parce que » marque que O est présenté comme appui pour B.

Pourquoi les distracteurs ne sont pas des arguments au sens du cours
• Les généralités sur l’existence ne fournissent pas, telles quelles, une transition normative.
• La seule préférence ne structure pas une politique sans lien à un principe ou un dommage ; l’option 3 ne fait pas ce travail.

Note pédagogique
Validité et solidité viendront plus tard ; ici il s’agit de segmenter l’énoncé qui donne des raisons pour une thèse contestable.`,
  },

  1002: {
    beginner: `Approfondi (Débutant) — bus en retard et appli

Repérer une raison reliée à une solution
• « Le bus est en retard chaque matin, donc l’appli doit afficher les horaires en temps réel. » — Problème récurrent + correctif : argument.
• Peindre les bus en bleu : sans lien avec les retards.
• « J’aime prendre le bus » : préférence.
• « L’application existe » : fait, pas un argument pour la modifier.

Pourquoi l’option 1
Elle enchaîne dysfonctionnement (retards) et mesure (temps réel).`,
    intermediate: `Approfondi (Intermédiaire) — bus en retard et appli

Méthode
1. Scénario : fiabilité du matin et information voyageur.
2. Pour chaque option : y a-t-il prémisses sur le problème et conclusion sur l’action ?

Application
• Option 1 : prémisses = retards quotidiens ; conclusion = temps réel dans l’appli. Le « donc » marque l’inférence.
• Les autres : pas de chaîne problème → remède liée aux retards.

Schéma en une ligne
Décalage chronique horaire ↔ information dynamique pour réduire l’incertitude.

Synthèse
C’est un cas typique « constat d’usage → intervention ciblée ».`,
    expert: `Approfondi (Expert) — bus en retard et appli

Cadrage
Raisonnement pratique : expérience négative récurrente → changement du système d’information.

Reconstruction (option 1)
• Phénomène : retards matinaux.
• Prescription : l’appli doit fournir des mises à jour en temps réel.
Le « donc » indique que le phénomène est pris comme raison de la prescription.

Distracteurs
Sans pont vers la ponctualité, esthétique ou existence d’appli ne constituent pas un argument pour cette mesure.

Note critique (hors QCM)
La force réelle de l’argument dépendrait d’analyses d’exploitation ; la question porte seulement sur la présence d’un argument.`,
  },

  1003: {
    beginner: `Approfondi (Débutant) — Wi-Fi du campus

Repérer problème + mesure
• « Le Wi-Fi coupe… donc l’université devrait ajouter des points d’accès » : argument.
• « Je déteste perdre le Wi-Fi » : émotion.
• « Le Wi-Fi existe » : fait.
• « Le sans-fil est mieux que le câblé » : généralité sans lien avec les coupures ici.

Bonne réponse
La première : instabilité → réponse infrastructurelle.`,
    intermediate: `Approfondi (Intermédiaire) — Wi-Fi du campus

Étapes
1. Sous-ligner le défaut : coupures.
2. Voir si une action institutionnelle suit.

Seule la bonne option lie coupures et déploiement de points d’accès.

Contraste
Haine du réseau, existence, ou comparaison générique ne font pas le lien diagnostic → remède pour ce campus.`,
    expert: `Approfondi (Expert) — Wi-Fi du campus

Structure
D = coupures récurrentes ; A = ajouter des AP. La bonne option présente D comme appui pour A.

Les distracteurs omettent soit le diagnostic spécifique, soit la conclusion normative adressée à l’institution.`,
  },

  1004: {
    beginner: `Approfondi (Débutant) — distributeurs

Ligne avec raison + « il faut »
Distributeurs vides → recharger deux fois par jour : argument (manque → fréquence).

« Je préfère les snacks », « les distributeurs existent », « les snacks mieux que les salades » : pas la chaîne vide → réapprovisionnement.`,
    intermediate: `Approfondi (Intermédiaire) — distributeurs

Étapes
1. Constat : machines vides.
2. Action : recharger deux fois par jour.
3. Lien implicite : la fréquence actuelle est insuffisante.

Seule la bonne réponse explicite assez ce passage observation → politique opérationnelle.`,
    expert: `Approfondi (Expert) — distributeurs

Reconstruction
Prémisse : stocks nuls (demande non satisfaite ou réassort insuffisant). Conclusion : doubler la fréquence de réassort.

Les autres options n’instancient pas le soutien prémisses → conclusion demandé par la question.`,
  },

  1005: {
    beginner: `Approfondi (Débutant) — bibliothèque pendant les examens

Argument = raison liée aux heures d’ouverture
« La semaine des examens remplit la bibliothèque, donc les horaires devraient aller jusqu’à minuit. »

Les autres : amour des bibliothèques, livres, « minuit est cool » : pas la chaîne affluence → prolongation.`,
    intermediate: `Approfondi (Intermédiaire) — bibliothèque pendant les examens

Étapes
1. Filtre : examens + heures.
2. Bonne option : forte affluence pendant une période définie → prolonger les heures.
3. Schéma : tension de capacité → extension de service.

Les distracteurs n’établissent pas le pont vers une décision d’horaires.`,
    expert: `Approfondi (Expert) — bibliothèque pendant les examens

Analyse
L’argument couple une contrainte temporelle (examens) à une prescription sur les horaires. Les autres options ignorent la fenêtre des examens ou n’offrent pas de conséquence politique.

Pattern classique capacité / accès.`,
  },

  1006: {
    beginner: `Approfondi (Débutant) — pistes cyclables aux intersections

Danger + ce que la ville doit faire
La bonne phrase : la piste disparaît, les cyclistes se retrouvent dans la circulation ; la ville doit terminer la piste.

Les autres : plaisir, peinture, « les intersections existent » : pas l’argument sécurité + aménagement.`,
    intermediate: `Approfondi (Intermédiaire) — pistes cyclables aux intersections

Lecture structurée
1. Risque : discontinuité de la piste → conflit avec le trafic motorisé.
2. Remède : continuité de l’aménagement à travers l’intersection.

Élimination
• Plaisir : pas de risque identifié.
• Peinture seule : description.
• « Intersections existent » : trivial.

Synthèse
Les arguments sur la sécurité citent un mode de défaillance et une correction de conception.`,
    expert: `Approfondi (Expert) — pistes cyclables aux intersections

Reconstruction
Discontinuité géométrique → comportement de fusion → risque accru → devoir de compléter l’infrastructure.

Argument type réduction des dommages, indépendamment du détail technique réel hors exercice.`,
  },

  1007: {
    beginner: `Approfondi (Débutant) — lampadaires LED

Argument = fait énergétique + politique
« Les ampoules LED consomment moins… donc la ville devrait rétrofitter » : efficacité → action.

Poteaux, goût pour la lumière, « l’électricité existe » : pas cet argument.`,
    intermediate: `Approfondi (Intermédiaire) — lampadaires LED

Marche à suivre
1. Prémisse : moindre consommation énergétique.
2. Conclusion : programme de rétrofit municipal.
3. « donc » marque le soutien.

Les autres options n’ont pas à la fois la prémisse d’efficacité et la conclusion de rétrofit.`,
    expert: `Approfondi (Expert) — lampadaires LED

Schéma
Attribut technologique (moindre intensité énergétique) → raison pour investissement public (rétrofit). Les externalités (pollution lumineuse) ne sont pas dans le texte ; la question porte sur quel énoncé est un argument.`,
  },

  1008: {
    beginner: `Approfondi (Débutant) — gaspillage à la cafétéria

Bonne ligne
Les étudiants jettent de la nourriture intacte → la cafétéria devrait proposer des portions plus petites.

Les autres : existence, dessert, « c’est triste » sans mécanisme de portions : pas la structure complète.`,
    intermediate: `Approfondi (Intermédiaire) — gaspillage à la cafétéria

Étapes
1. Constat : nourriture non mangée jetée.
2. Réponse : portions modulables pour réduire ce qui est pris sans être mangé.

« C’est triste » peut motiver mais ne spécifie pas le levier des portions comme l’option correcte.`,
    expert: `Approfondi (Expert) — gaspillage à la cafétéria

Note experte
L’argument est une réponse de conception à un flux de déchets. Les distracteurs s’arrêtent à l’humeur ou à l’existence sans enchaînement vers la taille des portions.`,
  },

  1009: {
    beginner: `Approfondi (Débutant) — hybrides et qualité de l’air

Argument causal à trouver
Les hybrides réduisent les émissions, donc la qualité de l’air locale s’améliore.

« Très silencieux », préférence, « la technologie existe » : pas le lien émissions / air.`,
    intermediate: `Approfondi (Intermédiaire) — hybrides et qualité de l’air

Étapes
1. Prémisse : moins d’émissions (comparaison implicite avec véhicules classiques).
2. Conclusion : meilleure qualité de l’air local.
3. Seule l’option attendue relie les deux pour cette consigne.

Synthèse
Les arguments causaux nomment un mécanisme et un effet environnemental.`,
    expert: `Approfondi (Expert) — hybrides et qualité de l’air

Structure
Réduction des émissions → moins de polluants dans l’air local → meilleure qualité (ceteris paribus). Les distracteurs omettent le pont émissions–air exigé par l’énoncé.`,
  },

  1010: {
    beginner: `Approfondi (Débutant) — télétravail et frais généraux

Ligne à choisir
Le télétravail réduit le besoin de surface de bureaux, donc il abaisse les frais généraux. Moins de m² → moins de loyer / charges.

Visioconférence seule, canapé, « les bureaux existent » : pas ce raisonnement économique.`,
    intermediate: `Approfondi (Intermédiaire) — télétravail et frais généraux

Procédure
1. Prémisse économique : moindre besoin d’espace physique.
2. Conclusion financière : frais généraux plus bas.
3. Alignement avec le thème « overhead » du texte.

Les distracteurs n’établissent pas le lien immobilier / coût.

Synthèse
Schéma classique « moins d’actifs physiques → coûts fixes réduits ».`,
    expert: `Approfondi (Expert) — télétravail et frais généraux

Reconstruction experte
Travail distribué → moindre surface louable requise → baisse des coûts fixes (autres choses égales). Seule l’option attendue explicite assez l’inférence immobilière–coût pour cet item.`,
  },

  1011: {
    beginner: `Approfondi (Débutant) — agriculture biologique et santé des sols

Repérer l’argument
Il faut une raison liée aux pratiques bio et une conclusion sur le sol à long terme.

Options
• « L’agriculture bio évite les pesticides de synthèse, donc elle préserve la santé du sol à long terme. » — Méthode → effet sur le sol : **argument**.
• Pommes jolies, préférence pour le lait, « le sol existe sous plusieurs types » : pas cette chaîne.

Bonne réponse
La première option.`,
    intermediate: `Approfondi (Intermédiaire) — agriculture biologique et santé des sols

Étapes
1. Relire la consigne : argument sur **l’agriculture biologique et la santé des sols**.
2. Dans la bonne option : prémisse = éviter les pesticides de synthèse ; conclusion = préserver la santé du sol à long terme.
3. « Donc » marque l’appui de la prémisse à la conclusion.
4. Les distracteurs : apparence, goût, typologie des sols sans lien causal avec la pratique bio.

Synthèse
On attend un enchaînement pratique agricole → conséquence pour le sol.`,
    expert: `Approfondi (Expert) — agriculture biologique et santé des sols

Lecture logique
Soit M = évitement des pesticides de synthèse ; soit S = préservation de la santé du sol. L’option attendue présente M comme soutien à S. La question porte sur la **forme** argumentative, pas sur la validation agronomique complète.

Distracteurs
Ils n’instancient pas la relation prémisse–conclusion « pratique → effet sur le sol ».`,
  },

  1012: {
    beginner: `Approfondi (Débutant) — scène Linguistique (banque FR)

Attention : en français, l’ID 1012 n’est pas le même scénario que l’anglais (transports).

Bonne ligne
« La pratique améliore l’aisance, donc tu devrais parler tous les jours. » — La pratique améliore l’aisance (prémisse) ; donc parler chaque jour (conclusion prescriptive).

Pas des arguments
« Je préfère Linguistique », « Linguistique est définitivement mieux », « Linguistique existe » — préférence, jugement sans raison, ou existence.`,
    intermediate: `Approfondi (Intermédiaire) — scène Linguistique

Méthode
1. Ignorer la préférence de matière : ce n’est pas un argument au sens du cours.
2. Repérer « donc » : il introduit la conclusion recommandée (parler chaque jour).
3. La première partie donne le mécanisme pédagogique (la pratique → plus d’aisance) comme raison de l’habitude proposée.

Élimination systématique
Seule l’option indexée comme correcte relie une prémisse (effet de la pratique) à une injonction (fréquence de parole).`,
    expert: `Approfondi (Expert) — scène Linguistique

Reconstruction
Prémisse : la pratique améliore l’aisance (compétence / fluidité). Conclusion : tu devrais parler tous les jours (conduite à adopter). Structure prudential / pédagogique : moyen–fin.

Note
La parité avec l’anglais est **pédagogique** (même profondeur) ; le **contenu** suit le libellé français de la banque FR.`,
  },

  1013: {
    beginner: `Approfondi (Débutant) — scène Technologie (banque FR)

Bonne phrase
« Le routeur est éteint, donc le Wi-Fi ne fonctionnera pas. » — État du matériel → conséquence sur le service sans fil.

Les autres
Préférence pour Technologie, « Technologie est mieux », « Technologie existe » : pas la chaîne panne / absence de Wi-Fi.`,
    intermediate: `Approfondi (Intermédiaire) — scène Technologie

Étapes
1. Prémisse : le routeur est éteint (pas d’émission / pas de routage actif du réseau local tel qu’attendu).
2. Conclusion : le Wi-Fi ne fonctionnera pas (pas de connectivité sans fil utile).
3. « Donc » lie diagnostic matériel à prédiction de fonctionnement.

Synthèse
Argument **technique** : état du dispositif → conséquence sur le service.

Distracteurs
Aucun ne reproduit prémisse → conclusion sur le Wi-Fi.`,
    expert: `Approfondi (Expert) — scène Technologie

Lecture experte
L’argument suppose un arrière-plan de dépendance fonctionnelle (routeur allumé nécessaire au Wi-Fi domestique usuel). Ce n’est pas une preuve de laboratoire ; l’exercice porte sur la **structure** « parce que l’état du routeur est P, le Wi-Fi ne marchera pas ».

Limite
D’autres pannes pourraient exister ; l’item ne demande pas une liste exhaustive des causes.`,
  },

  1014: {
    beginner: `Approfondi (Débutant) — scène Histoire

Argument à choisir
« Les artéfacts sont fragiles, donc ils nécessitent une manipulation prudente. » — Fragilité → consigne de soin.

Pas des arguments
Préférence, « Histoire est mieux », « Histoire existe ».`,
    intermediate: `Approfondi (Intermédiaire) — scène Histoire

Démarche
1. Repérer une prémisse factuelle ou matérielle (fragilité).
2. Voir la conclusion normative (manipulation prudente).
3. « Donc » marque le soutien.

Les distracteurs ne lient pas une propriété des objets à une norme de manipulation.`,
    expert: `Approfondi (Expert) — scène Histoire

Analyse
Structure P → Q avec Q prescriptif : la fragilité est avancée comme raison du traitement prudent. Même logique que la version anglaise, avec le vocabulaire de la banque FR.`,
  },

  1015: {
    beginner: `Approfondi (Débutant) — scène Art

Bonne option
« Le rouge et le bleu font du violet, donc mélangez-les pour du violet. » — Fait sur les couleurs → consigne de mélange.

Autres lignes
Préférence, jugement sans preuve, existence d’Art.`,
    intermediate: `Approfondi (Intermédiaire) — scène Art

Étapes
1. Prémisse : le mélange rouge + bleu donne du violet.
2. Conclusion : mélanger pour obtenir du violet (instruction dérivée).
3. Éliminer préférence et phrases vides de raisonnement.

Parité pédagogique
Même schéma que l’item anglais « red and blue… », adapté au français.`,
    expert: `Approfondi (Expert) — scène Art

Note
L’item teste la reconnaissance d’un lien inférentiel court dans un conseil de pratique ; les distracteurs sont volontairement non argumentatifs.`,
  },

  1016: {
    beginner: `Approfondi (Débutant) — scène Circulation

Feu rouge
« Le feu est rouge, donc les conducteurs doivent s’arrêter. » — État du feu → obligation de s’arrêter.

Autres
Préférence, « Circulation est mieux », « Circulation existe ».`,
    intermediate: `Approfondi (Intermédiaire) — scène Circulation

Analyse
Argument **réglementaire** implicite : l’état du feu est la raison invoquée pour l’obligation de stopper. Même structure que la version anglaise « The light is red… ».

Élimination
Les distracteurs ne contiennent pas prémisse + conclusion liées au code de la route.`,
    expert: `Approfondi (Expert) — scène Circulation

Lecture
Passage de l’énoncé descriptif (feu rouge) à la norme de conduite ; le fond juridique est sous-entendu, comme dans l’anglais.`,
  },

  1017: {
    beginner: `Approfondi (Débutant) — scène Biologie

Sommeil et concentration
« Le manque de sommeil affecte la concentration, donc les étudiants doivent se reposer. » — Effet cognitif → prescription de repos.

Distracteurs
Préférence, « Biologie est mieux », « Biologie existe ».`,
    intermediate: `Approfondi (Intermédiaire) — scène Biologie

Étapes
1. Prémisse : manque de sommeil nuit à la concentration.
2. Conclusion : les étudiants doivent se reposer.
3. Lien prudential : protéger la performance par le repos.

Même profondeur que l’anglais, libellé FR.`,
    expert: `Approfondi (Expert) — scène Biologie

Reconstruction
Argument de bien-être / performance : état physiologique → conduite recommandée. Pas d’exigence de méta-analyse ici.`,
  },

  1018: {
    beginner: `Approfondi (Débutant) — scène Économie

Offre et prix
« L’offre est faible, donc les prix augmenteront. » — Rareté relative → pression sur les prix.

Autres options
Préférence, « Économie est mieux », « Économie existe ».`,
    intermediate: `Approfondi (Intermédiaire) — scène Économie

Marche à suivre
1. Prémisse : offre faible (par rapport à la demande, implicitement).
2. Conclusion : hausse des prix attendue.
3. « Donc » introduit la prévision argumentée.

Alignement
Même logique pédagogique que la phrase anglaise sur l’offre et les prix.`,
    expert: `Approfondi (Expert) — scène Économie

Note
Modèle partiel d’équilibre ; l’exercice ne demande pas de discuter élasticité ou anticipations.`,
  },

  1019: {
    beginner: `Approfondi (Débutant) — scène Zoologie

Chiens et compagnie
« Les chiens sont sociaux, donc ils ont besoin de compagnie. » — Trait comportemental → besoin de compagnie.

Distracteurs
Préférence, « Zoologie est mieux », « Zoologie existe ».`,
    intermediate: `Approfondi (Intermédiaire) — scène Zoologie

Étapes
1. Prémisse : sociabilité des chiens.
2. Conclusion : besoin de compagnie (implication pour les soins).
3. Structure analogue à l’anglais « Dogs are social… ».

Synthèse
Argument éthologique → prescription de soin.`,
    expert: `Approfondi (Expert) — scène Zoologie

Lecture experte
Généralisation sur l’espèce ; la force réelle dépend du contexte (animal de compagnie vs. autre), mais la question porte sur la forme argumentative.`,
  },

  1020: {
    beginner: `Approfondi (Débutant) — scène Musique

Guitare désaccordée
« La guitare n’est pas accordée, donc elle sonnera mal. » — État de l’instrument → qualité sonore attendue.

Autres
Préférence, « Musique est mieux », « Musique existe ».`,
    intermediate: `Approfondi (Intermédiaire) — scène Musique

Procédure
1. Prémisse : guitare non accordée.
2. Conclusion : son défavorable / « mal ».
3. Inférence causale simple sur la performance musicale.

Parité
Même schéma que « The guitar is out of tune… » en anglais.`,
    expert: `Approfondi (Expert) — scène Musique

Note
Argument instrumental minimal : état → évaluation esthétique attendue ; distracteurs sans structure argumentative.`,
  },

  1021: {
    beginner: `Approfondi (Débutant) — concours de pâtisserie

Repérer l’argument
« Le four est trop chaud, donc le gâteau (génoise) va s’assécher. » — État du four → conséquence sur la pâte.

Pas des arguments
Mode des cupcakes, odeur de vanille, promo sur le beurre : pas de chaîne chaleur → assèchement.`,
    intermediate: `Approfondi (Intermédiaire) — concours de pâtisserie

Étapes
1. Prémisse : surchauffe du four (pour la cuisson envisagée).
2. Conclusion : la génoise risque de s’assécher.
3. « Donc » lie diagnostic matériel à résultat de cuisson.

Alignement
Même logique que l’anglais « oven too hot → sponge dries out » ; ici « génoise » dans la banque FR.

Synthèse
En cuisine, on trouve souvent « condition → effet » : c’est bien une structure argumentative.`,
    expert: `Approfondi (Expert) — concours de pâtisserie

Reconstruction
Soit T = four trop chaud ; soit S = assèchement de la génoise. L’option attendue offre T comme raison de S. On ne juge pas la recette réelle, seulement le lien prémisses → conclusion.`,
  },

  1022: {
    beginner: `Approfondi (Débutant) — manche de sprint

Argument, pas préférence
« Tu t'es entraîné tout le mois, donc tu devrais battre ton temps de la manche précédente. » — Entraînement → attente de performance.

Autres
Coup de cœur pour le pistolet, forme des pistes, couleurs de pointes : pas la chaîne entraînement / chrono.`,
    intermediate: `Approfondi (Intermédiaire) — manche de sprint

Méthode
1. Prémisse : entraînement soutenu sur un mois.
2. Conclusion : tu devrais améliorer ton temps par rapport à la manche d’avant.
3. Schéma prudential : préparation comme garant (imparfait) d’une meilleure performance relative.

Élimination
Les distracteurs ne relient pas l’effort d’entraînement à une prédiction sur **ton** résultat.`,
    expert: `Approfondi (Expert) — sprint

Note experte
Prédiction de performance ; la vie réelle ajoute fatigue et hasard. L’exercice porte sur la **forme** « prémisse sur la préparation → attente sur le temps ».`,
  },

  1023: {
    beginner: `Approfondi (Débutant) — randonnée / météo

Phrase à retenir
« Le baromètre chute vite, donc attendez-vous à de la pluie avant midi. » — Tendance barométrique → pluie dans une fenêtre horaire.

Pas des arguments
Préférence pour les nuages, applis météo, « la pluie est mouillée » sans inférence utile ici.`,
    intermediate: `Approfondi (Intermédiaire) — randonnée

Étapes
1. Prémisse : chute rapide du baromètre (souvent liée à l’approche d’un système).
2. Conclusion : pluie probable avant midi.
3. « Donc » marque une inférence empirique (heuristique populaire).

Synthèse
Même structure que l’anglais ; la validité météo locale n’est pas notée.`,
    expert: `Approfondi (Expert) — baromètre

Lecture
Indicateur pression → prévision pluvie ; les distracteurs n’instancient pas ce lien causal heuristique.`,
  },

  1024: {
    beginner: `Approfondi (Débutant) — voiture qui ne démarre pas

Diagnostic
« La batterie affiche zéro volt, donc le démarreur ne tournera pas. » — Absence de tension utile → pas de cranking attendu.

Autres
Poids des boosters, quatre roues, attente de la dépanneuse : pas le lien batterie → démarreur.`,
    intermediate: `Approfondi (Intermédiaire) — voiture

Marche à suivre
1. Prémisse : batterie à 0 V.
2. Conclusion : le démarreur ne tournera pas (dans le modèle électrique simplifié).
3. Raisonnement mécaniste analogue à l’anglais.

Note
Un garage vérifie aussi câbles et relais ; ici : structure argumentative seulement.`,
    expert: `Approfondi (Expert) — batterie à plat

Reconstruction experte
État de la source électrique comme soutien pour une prédiction sur le moteur de démarrage ; distracteurs sans pont technique pertinent.`,
  },

  1025: {
    beginner: `Approfondi (Débutant) — bureau peu lumineux / plantes

Soin des plantes
« Ces feuilles sont étiolées, donc rapprochez le pot de la fenêtre. » — Symptôme de manque de lumière → remède de placement.

Distracteurs
« Jamais besoin d’eau » (faux en général), terre brune, fenêtres en verre : pas l’argument étiolation → lumière.`,
    intermediate: `Approfondi (Intermédiaire) — plantes de bureau

Étapes
1. Constat : étiolation (allongement / pâlissement lié au faible éclairement).
2. Action : rapprocher le pot de la fenêtre.
3. « Donc » relie signe à intervention — comme en anglais.

Synthèse
Pattern diagnostic → consigne de culture.`,
    expert: `Approfondi (Expert) — étiolation

Note
Même schéma logique que la version anglaise ; pas d’exigence de précision horticole avancée.`,
  },

  1026: {
    beginner: `Approfondi (Débutant) — salle de lecture

Règle argumentée
« Le silence est nécessaire pour se concentrer, donc parlez bas aux tables. » — But (concentration) → conduite (volume de voix).

Autres
Mode du chuchotement, rayonnages, tranches : pas concentration → discrétion.`,
    intermediate: `Approfondi (Intermédiaire) — salle de lecture

Analyse
1. Prémisse : le silence favorise la concentration dans ce lieu.
2. Conclusion : parler bas aux tables.
3. Argument **réglementaire** fondé sur la fonction de l’espace.

Parité
Équivalent français de l’item anglais sur la politique de bruit en bibliothèque.`,
    expert: `Approfondi (Expert) — silence

Reconstruction
Finalité cognitive → norme de comportement ; distracteurs sans ce lien mission → pratique.`,
  },

  1027: {
    beginner: `Approfondi (Débutant) — ami sédentaire

Marche quotidienne
« Un mouvement régulier soutient la santé cardiovasculaire, donc planifiez une marche quotidienne. » — Bienfait → habitude.

Pas des arguments
Ennui de la marche, baskets, béton : pas santé → marche planifiée.`,
    intermediate: `Approfondi (Intermédiaire) — marche quotidienne

Procédure
1. Prémisse générale : mouvement régulier et santé cardiovasculaire.
2. Conclusion : instaurer une marche quotidienne (prescription prudente).
3. « Donc » relie mécanisme/bénéfice attendu à conduite.

Synthèse
Même profondeur que l’anglais « cardiovascular health → schedule daily walk ».`,
    expert: `Approfondi (Expert) — promotion de la marche

Note experte
On n’évalue pas méta-analyses ; seulement la présence d’un soutien présumé pour une recommandation comportementale.`,
  },

  1028: {
    beginner: `Approfondi (Débutant) — interrogation d’algèbre

Argument mathématique
« Si x vaut 5, alors x plus 2 doit valoir 7. » — Condition sur x → conséquence arithmétique.

Autres
« Soit x un nombre », primalité de 7, lettres dans les équations : pas la chaîne conditionnelle demandée.`,
    intermediate: `Approfondi (Intermédiaire) — algèbre

Étapes
1. Antécédent : x = 5.
2. Conséquent : x + 2 = 7 (dans l’arithmétique usuelle).
3. Structure de **dérivation** minimale, comme en anglais.

Synthèse
Le raisonnement mathématique est argumentatif : hypothèses → conclusion.`,
    expert: `Approfondi (Expert) — conditionnel arithmétique

Lecture
Si P alors Q, avec Q présenté comme nécessaire sous P ; les distracteurs ne réalisent pas ce schéma inférentiel.`,
  },

  1029: {
    beginner: `Approfondi (Débutant) — marée montante

Eau qui monte
« L'eau monte sur la plage, donc la zone sèche va rétrécir. » — Avancée de l’eau → moins de sable sec.

Autres
Sable amusant, goélands, océan salé : pas marée → espace sec.`,
    intermediate: `Approfondi (Intermédiaire) — plage / maîtres-nageurs

Étapes
1. Prémisse : l’eau gagne du terrain sur le sable.
2. Conclusion : la zone restée sèche se réduit.
3. Inférence géométrique simple — alignée sur l’anglais.

Synthèse
Contexte sécurité : observation → conséquence sur l’espace utilisable.`,
    expert: `Approfondi (Expert) — marée

Note
Même reconstruction experte que la version anglaise : avancée monotrope de l’eau et réduction du secteur sec, sans modèle côtier complet.`,
  },

  1030: {
    beginner: `Approfondi (Débutant) — planétarium

Vitesse de la lumière
« La lumière a une vitesse finie, donc nous voyons les étoiles lointaines telles qu'elles étaient autrefois. » — Fait physique → conséquence observationnelle.

Distracteurs
Étoiles jolies, miroirs de télescopes, nuit après le jour : pas finitude de c → « pass » des sources.`,
    intermediate: `Approfondi (Intermédiaire) — planétarium

Marche à suivre
1. Prémisse : vitesse finie de la lumière.
2. Conclusion : nous observons l’état passé des objets lointains (délai de propagation).
3. Exemple canonique d’argument « mécanisme → phénomène » en vulgarisation astronomique.

Parité
Même profondeur que l’item anglais sur la lookback time.`,
    expert: `Approfondi (Expert) — temps de regard

Reconstruction
Finitude de c comme soutien pour une thèse sur le **caractère historique** de nos images ; relativité et expansion hors périmètre Level 0 pour la correction de l’item.`,
  },

  1031: {
    beginner: `Approfondi (Débutant) — pomme en démo

Gravité
« La Terre attire les masses vers son centre, donc la pomme accélère vers le bas. » — Principe physique → mouvement attendu.

Pas des arguments
Couleurs de pommes, garde-corps, étymologie de Newton : pas la chaîne attraction → chute.`,
    intermediate: `Approfondi (Intermédiaire) — chute libre (démo)

Étapes
1. Prémisse : attraction terrestre vers le centre (gravité).
2. Conclusion : la pomme accélère vers le bas une fois lâchée.
3. « Donc » relie explication à prédiction cinématique.

Synthèse
Même logique que l’anglais ; vocabulaire adapté à la banque FR.`,
    expert: `Approfondi (Expert) — gravitation (démo)

Note
L’item porte sur la structure « mécanisme → comportement » ; pas de calcul d’intensité de champ requis.`,
  },

  1032: {
    beginner: `Approfondi (Débutant) — plan de pratique linguistique

Aisance et régularité
« L'aisance suit une pratique réfléchie, donc parler un peu chaque jour vaut mieux qu'un bachotage mensuel. » — Lien pratique/aisance → choix d’emploi du temps.

Autres
Accents intéressants, dictionnaires, grammaire en général : pas l’argument sur la répartition dans le temps.`,
    intermediate: `Approfondi (Intermédiaire) — pratique espacée

Analyse
1. Prémisse : l’aisance dépend d’une pratique réfléchie (régularité + qualité).
2. Conclusion : mieux vaut parler un peu chaque jour que de tout compresser en un mois.
3. Comparaison de deux régimes d’entraînement appuyée sur la prémisse.

Alignement
Équivalent pédagogique de l’item anglais sur daily speaking vs cramming.`,
    expert: `Approfondi (Expert) — pédagogie des langues

Reconstruction
Argument de type « science de l’apprentissage » simplifié : prémisse sur la courbe d’aisance → recommandation de calendrier.`,
  },

  1033: {
    beginner: `Approfondi (Débutant) — Wi-Fi qui coupe

Routeur hors ligne
« Le routeur est hors ligne, donc cet ordinateur n'atteindra pas Internet. » — État du routeur → absence de connectivité attendue.

Distracteurs
Obligation de vidéo, couleur de câbles, voyants : pas diagnostic réseau.`,
    intermediate: `Approfondi (Intermédiaire) — bureau / appel vidéo

Marche à suivre
1. Prémisse : routeur hors ligne (pas de passerelle active).
2. Conclusion : la machine ne joindra pas Internet par ce chemin.
3. Schéma identique à l’anglais « router offline ».

Synthèse
Argument de dépannage : composant → service.`,
    expert: `Approfondi (Expert) — topologie domestique

Note
Chemins alternatifs (partage de connexion) hors texte ; l’exercice reste structurel.`,
  },

  1034: {
    beginner: `Approfondi (Débutant) — pièces de musée fragiles

Manipulation
« Ces matériaux se fissurent sous un choc brutal, donc soutenez-les par le dessous en les déplaçant. » — Risque mécanique → consigne.

Autres
Âge des artefacts, prix d’entrée, vitrines : pas choc → soutien par le dessous.`,
    intermediate: `Approfondi (Intermédiaire) — conservation

Étapes
1. Prémisse : choc brutal → fissuration possible.
2. Conclusion : soulever / porter en soutenant par dessous.
3. « Donc » relie mécanique des matériaux à protocole de manutention.

Parité
Même profondeur que l’anglais sur les pièces fragiles.`,
    expert: `Approfondi (Expert) — manutention

Lecture experte
Garant implicite : le soutien par le dessous réduit les contraintes qui mènent à la fissuration ; pas de cours de muséographie complet requis.`,
  },

  1035: {
    beginner: `Approfondi (Débutant) — mélange pour fresque

Nuances
« Le pigment rouge plus le pigment bleu donne ce violet-là, donc ces deux tubes produiront cette nuance. » — Règle de mélange → résultat sur l’échantillon.

Pas des arguments
Mode du violet, usure des pinceaux, grain de toile.`,
    intermediate: `Approfondi (Intermédiaire) — peinture murale

Analyse
1. Prémisse : composition des pigments pour ce violet précis.
2. Conclusion : ces deux tubes suffisent pour obtenir la nuance cible.
3. Structure « composition → swatch » comme en anglais.

Synthèse
Raisonnement d’atelier : fait de palette → prédiction de rendu.`,
    expert: `Approfondi (Expert) — pigments

Note
Les vrais pigments dévient des primaires idéales ; l’énoncé fixe le monde de l’item.`,
  },

  1036: {
    beginner: `Approfondi (Débutant) — feu rouge (jeune conducteur)

Obligation d’arrêt
« Ce feu est rouge, donc la file qui le regarde doit s'arrêter avant la ligne d'arrêt. » — État du feu → règle de circulation.

Distracteurs
Luminosité, coins de carrefour, freins : pas feu rouge → arrêt à la ligne.`,
    intermediate: `Approfondi (Intermédiaire) — code de la route

Étapes
1. Prémisse : ce feu est rouge pour ta voie.
2. Conclusion : arrêt obligatoire avant la ligne d’arrêt.
3. Fond réglementaire implicite — aligné sur l’item anglais.

Synthèse
Argument **normatif** : signal → devoir.`,
    expert: `Approfondi (Expert) — ligne d’arrêt

Reconstruction
Même famille logique que les autres items « feu rouge » ; libellé « file qui le regarde » = file de circulation concernée par ce feu.`,
  },

  1037: {
    beginner: `Approfondi (Débutant) — pauses du groupe d’étude

Bonne réponse : première option
« La dette de sommeil nuit à l'attention, donc de courtes pauses aideront à rester concentré. » — Sommeil / attention → pauses.

Index
**0** en banque FR (comme en anglais).`,
    intermediate: `Approfondi (Intermédiaire) — pauses d’étude

Procédure
1. Prémisse : dette de sommeil → baisse d’attention.
2. Conclusion : des pauses courtes maintiennent la qualité de la séance.
3. « Donc » relie fatigue cognitive à design de session.

Élimination
Chaises, café, calendrier des examens : hors sujet.

Parité
Même schéma que l’anglais « sleep debt → breaks ».`,
    expert: `Approfondi (Expert) — dette de sommeil

Note
Argument prudential ; pas d’exigence de données sur les micro-pauses.`,
  },

  1038: {
    beginner: `Approfondi (Débutant) — concert complet / billets

Revente
« Il reste peu de places, donc la revente demandera plus que le prix d'origine. » — Rareté → prime sur le marché secondaire.

Autres
T-shirts, enceintes, goût des fans : pas rareté → prix de revente.`,
    intermediate: `Approfondi (Intermédiaire) — billetterie

Analyse
1. Prémisse : très peu de places disponibles (offre résiduelle faible).
2. Conclusion : prix de revente au-dessus du prix nominal.
3. Logique d’offre et de demande informalisée — comme l’anglais.

Synthèse
Prédiction économique argumentée.`,
    expert: `Approfondi (Expert) — prix de revente

Note
Réglementation du marché secondaire hors périmètre ; l’item est structurel.`,
  },

  1039: {
    beginner: `Approfondi (Débutant) — bruit en ville

Troisième option (index **2**)
« Parce que la circulation nocturne empêche les habitants de dormir, la ville devrait instaurer des heures calmes. » — Perte de sommeil → règlement sur les heures calmes.

Autres
Règlement existant (seul fait), haine du bruit (sans politique), plaintes générales (sans « il faut »).`,
    intermediate: `Approfondi (Intermédiaire) — heures calmes

Étapes
1. Sous-clause « parce que » : nuisance nocturne → sommeil des habitants.
2. Conclusion : instaurer des heures calmes (mesure municipale).
3. Cartographie problème urbain → réponse institutionnelle.

Alignement
Même structure que l’anglais sur quiet-hours policy.`,
    expert: `Approfondi (Expert) — politique urbaine du bruit

Reconstruction
Argument de politique publique : préjudice sur le sommeil comme justification d’une norme temporelle ; évaluation juridique hors scope.`,
  },

  1040: {
    beginner: `Approfondi (Débutant) — big band scolaire

Accordage
« La guitare solo est un quart de ton bas, donc l'accord sonnera faux tant qu'on ne l'accorde pas. » — Défaut d’accord → son discordant jusqu’à correction.

Autres
Origine du jazz, notes, chaises : pas intonation → qualité de l’accord.`,
    intermediate: `Approfondi (Intermédiaire) — répétition jazz

Analyse
1. Prémisse : guitare solo un quart de ton bas (erreur d’intonation).
2. Conclusion : l’accord restera faux tant que ce n’est pas corrigé.
3. Même logique que l’anglais « lead guitar… quarter-step flat ».

Note
En FR la consigne dit « big band » ; l’argument porte sur la guitare solo et l’accord, comme dans la banque anglaise.

Synthèse
Diagnostic musical → conséquence sonore + nécessité de correction.`,
    expert: `Approfondi (Expert) — quart de ton

Reconstruction experte
L’écart d’intonation rend l’accord perçu comme faux dans un contexte harmonique typique ; l’item ne teste pas l’oreille absolue.`,
  },

  1041: {
    beginner: `Approfondi (Débutant) — cupcakes sortis trop tôt

Première option (index **0**)
« La mie paraît encore humide, donc donnez cinq minutes de plus sinon ils vont s'affaisser. » — Cuisson insuffisante → prolonger ou effondrement.

Autres
Glaçage sucré, caissettes, horaires des boulangeries : pas mie humide → affaissement.`,
    intermediate: `Approfondi (Intermédiaire) — cuisson des cupcakes

Étapes
1. Prémisse : mie encore humide (structure pas assez prise).
2. Conclusion : ajouter du temps de cuisson sous peine d’affaissement.
3. « Donc » lie diagnostic visuel à décision et risque.

Parité
Même schéma que l’anglais sur wet crumb / collapse.`,
    expert: `Approfondi (Expert) — affaissement

Note
Conditionnel pratique ; pas d’examen de pâtisserie avancé.`,
  },

  1042: {
    beginner: `Approfondi (Débutant) — relais à l’entraînement

Première option
« Leurs chronos se sont améliorés tout le printemps, donc ils devraient battre le record de l'an dernier. » — Progression → prédiction sur le record.

Autres
Témoins, couloirs, course aérobie : pas tendance → record.`,
    intermediate: `Approfondi (Intermédiaire) — chronos

Analyse
1. Prémisse : amélioration des chronos sur la saison.
2. Conclusion : devraient battre le record de l’an dernier (prévision).
3. Raisonnement inductif sportif — comme l’anglais.

Synthèse
Tendance comme preuve pour une attente de performance.`,
    expert: `Approfondi (Expert) — record

Caveat
Même que l’EN : hasard et conditions de course non évalués ; structure seulement.`,
  },

  1043: {
    beginner: `Approfondi (Débutant) — pique-nique / météo

Deuxième option (index **1**)
« Le radar montre une ligne d'orages qui approche, donc emportez la bâche pour le kiosque. » — Orages → abri.

Autres
Paniers en osier, herbe, fourmis.`,
    intermediate: `Approfondi (Intermédiaire) — ligne d’orages

Procédure
1. Prémisse : ligne d’orages approchant (signal radar).
2. Conclusion : emporter la bâche pour le kiosque (abri).
3. Planification de plein air : risque → matériel — aligné sur l’anglais « rain fly ».

Synthèse
Argument de préparation météo.`,
    expert: `Approfondi (Expert) — orages

Note
« Bâche » / kiosque = équivalent local du rain fly / pavilion dans l’EN.`,
  },

  1044: {
    beginner: `Approfondi (Débutant) — outils du jardin partagé

Première option (index **0**)
« Il faut construire un abri verrouillable parce que les outils disparaissent. » — Vols récurrents → abri fermé.

Autres
Adoration du jardinage, jardins sympas, outils brillants.`,
    intermediate: `Approfondi (Intermédiaire) — sécurisation

Étapes
1. Raison (parce que) : disparition des outils.
2. Conclusion : construire un abri verrouillable.
3. Ordre des clauses diffère de l’anglais (« we should… because ») mais la structure logique est identique.

Synthèse
Perte répétée → mesure d’accès contrôlé.`,
    expert: `Approfondi (Expert) — abri verrouillable

Reconstruction
Argument moyens–fin : réduire les vols par stockage sécurisé.`,
  },

  1045: {
    beginner: `Approfondi (Débutant) — ciel nocturne avant tempêtes

Première option
« Les météorologues observent le ciel nocturne pour que les ports pêchés puissent alerter tôt les marins. » — Surveillance → alerte précoce (contexte maritime FR).

Autres
Ciel magnifique, étoiles, prix des télescopes.`,
    intermediate: `Approfondi (Intermédiaire) — veille météo

Analyse
1. Activité : observation du ciel de nuit par les météorologues.
2. But : permettre aux ports de pêche d’alerter tôt les marins.
3. Même squelette argumentatif que l’anglais « coastal towns / fishers » avec libellé FR.

Synthèse
Surveillance → réduction du risque pour usagers exposés.`,
    expert: `Approfondi (Expert) — alerte aux marins

Note
Le vocabulaire diffère de l’EN mais la prémisse–conclusion (observation → alerte) est la même.`,
  },

  1046: {
    beginner: `Approfondi (Débutant) — fontaine à l’école

Plomb détecté
« Du plomb a été détecté dans la fontaine, donc l'école doit la remplacer immédiatement. » — Danger → remplacement urgent.

Distracteurs
Brillance, eau en bouteille, couloirs.`,
    intermediate: `Approfondi (Intermédiaire) — eau potable

Marche à suivre
1. Prémisse : présence de plomb.
2. Conclusion : remplacement immédiat.
3. Schéma santé publique : détection → remédiation — comme l’anglais.

Synthèse
Contamination → action corrective pressante.`,
    expert: `Approfondi (Expert) — plomb

Reconstruction
Même logique d’urgence que la version anglaise.`,
  },

  1047: {
    beginner: `Approfondi (Débutant) — file d’attente en soutien psy

Six semaines
« L'attente en consultation est de six semaines, donc l'université devrait embaucher un thérapeute supplémentaire. » — Délai → renfort d’effectif.

Autres
Chaises, formation des thérapeutes, salles calmes.`,
    intermediate: `Approfondi (Intermédiaire) — accès aux soins

Étapes
1. Prémisse : file de six semaines.
2. Conclusion : embaucher un thérapeute de plus.
3. « Donc » relie engorgement à capacité — aligné sur l’anglais.

Synthèse
File d’attente comme justification de ressources humaines.`,
    expert: `Approfondi (Expert) — liste d’attente

Note
Modèle simplifié ; pas d’analyse RH complète requise.`,
  },

  1048: {
    beginner: `Approfondi (Débutant) — relecture de devoir

Deuxième option (index **1**)
« Si k est pair, alors k au carré est pair — car k égale 2m pour un entier m. » — Définition du pair → support pour k² pair.

Autres
Preuves et logique (générique), pairs entiers, devoirs imprimés.`,
    intermediate: `Approfondi (Intermédiaire) — parité

Analyse
1. Conclusion annoncée : k pair ⇒ k² pair.
2. Appui : existence de m entier tel que k = 2m.
3. Structure de preuve mathématique avec « car » explicite.

Parité
Même profondeur que l’anglais sur k = 2m.`,
    expert: `Approfondi (Expert) — entiers pairs

Reconstruction
Argument définitionnel : la clause « car » fournit le pivot vers la suite du raisonnement (non développée dans l’item).`,
  },

  1049: {
    beginner: `Approfondi (Débutant) — calendrier des marées

Première option (index **0**)
« La basse mer découvre plus de flaques, donc planifiez le transect sur ce créneau. » — Fenêtre de basse mer → timing du relevé.

Autres
Livres imprimés, sable, vagues.`,
    intermediate: `Approfondi (Intermédiaire) — littoral

Procédure
1. Prémisse : basse mer expose plus de flaques (zone accessible).
2. Conclusion : placer le transect sur ce créneau.
3. Équivalent français de « low tide exposes tide pools » dans l’EN.

Synthèse
Nature du terrain observable → planification de terrain.`,
    expert: `Approfondi (Expert) — transect

Note
Sécurité marée montante possible en pratique ; hors exigence de l’item.`,
  },

  1050: {
    beginner: `Approfondi (Débutant) — lumière des étoiles (groupe)

Deuxième option (index **1**)
« La lumière étoilée a voyagé des années, donc nous voyons l'étoile telle qu'elle était dans le passé. » — Délai de propagation → passé observé.

Distracteurs
Prix des télescopes, noms de constellations, nuages.`,
    intermediate: `Approfondi (Intermédiaire) — temps de trajet

Marche à suivre
1. Prémisse : trajet lumineux long (années).
2. Conclusion : image « historique » de l’étoile.
3. Même idée que l’anglais « starlight began its journey… »

Parité
Lookback time vulgarisé pour visiteurs.`,
    expert: `Approfondi (Expert) — passé lumineux

Reconstruction
Écart émission / réception ; cosmologie fine hors niveau 0.`,
  },

  1051: {
    beginner: `Approfondi (Débutant) — repérer la prémisse (gravité / pomme)

Consigne
Dans « Comme La gravité tire les objets vers le bas, la pomme tombera », choisir la **prémisse** : la raison, pas la prédiction.

Bonne réponse (index **0**)
**« La gravité tire les objets vers le bas »** — introduit par « Comme ».

Pas la prémisse
• « la pomme tombera » — **conclusion**.
• « Comme » — marqueur, pas un contenu.
• « Aucune » — faux.`,
    intermediate: `Approfondi (Intermédiaire) — prémisse vs conclusion

Étapes
1. Structure : Comme [première proposition], [deuxième proposition].
2. Première proposition : fait physique invoqué comme raison.
3. Deuxième proposition : ce qui s’ensuit pour la pomme — conclusion.

Synthèse
La prémisse répond à « qu’est-ce qu’on donne comme appui ? »`,
    expert: `Approfondi (Expert) — antécédent

Lecture
Dans ce schéma « Comme P, Q », P est le contenu d’appui (prémisse), Q la conséquence affichée. Ne pas confondre avec le marqueur « Comme » seul.`,
  },

  1052: {
    beginner: `Approfondi (Débutant) — pratique / parler chaque jour

Prémisse
**« La pratique améliore l'aisance »** — lien apprentissage / compétence.

Conclusion
« tu devrais parler tous les jours » — prescription dérivée.`,
    intermediate: `Approfondi (Intermédiaire)

Analyse
1. Première partie : généralisation sur la pratique et l’aisance.
2. Deuxième partie : injonction de fréquence.
3. « Comme » introduit la prémisse ; l’impératif est la conclusion soutenue.

Parité
Même logique que l’anglais Practice improves fluency / speak daily.`,
    expert: `Approfondi (Expert)

La prémisse est la proposition **descriptive** sur l’apprentissage ; la conclusion est l’**impératif** prudential.`,
  },

  1053: {
    beginner: `Approfondi (Débutant) — routeur / Wi-Fi

Prémisse
**« Le routeur est éteint »** — état du matériel.

Conclusion
« le Wi-Fi ne fonctionnera pas » — conséquence attendue.`,
    intermediate: `Approfondi (Intermédiaire) — diagnostic

Étapes
1. « Comme » introduit l’état du routeur.
2. La seconde clause est la prédiction de panne de service.
3. Ne pas choisir le marqueur « Comme » comme prémisse de contenu.

Synthèse
Prémisse = fait sur l’équipement ; conclusion = résultat sur le Wi-Fi.`,
    expert: `Approfondi (Expert)

Même schéma causal/diagnostique que la version anglaise.`,
  },

  1054: {
    beginner: `Approfondi (Débutant) — artéfacts fragiles

Prémisse
**« Les artéfacts sont fragiles »** — vulnérabilité.

Conclusion
« ils nécessitent une manipulation prudente » — norme de soin.`,
    intermediate: `Approfondi (Intermédiaire)

Du descriptif au prescriptif
1. Fragilité = prémisse.
2. Manipulation prudente = conclusion.

Parité
Aligné sur « Artifacts are fragile » en anglais.`,
    expert: `Approfondi (Expert)

La prémisse est la proposition **descriptive** ; la conclusion est l’**obligation** de prudence.`,
  },

  1055: {
    beginner: `Approfondi (Débutant) — rouge et bleu / violet

Prémisse
**« Le rouge et le bleu font du violet »** — fait de mélange.

Conclusion
« mélangez-les pour du violet » — consigne.`,
    intermediate: `Approfondi (Intermédiaire) — peinture

Étapes
1. Comme [fait sur les pigments], [instruction].
2. Le fait de composition est la prémisse ; l’impératif de mélange est la conclusion.

Synthèse
Même profondeur que l’item anglais sur red + blue.`,
    expert: `Approfondi (Expert)

La prémisse est la proposition **compositorielle** ; la conclusion est l’**action** recommandée.`,
  },

  1056: {
    beginner: `Approfondi (Débutant) — feu rouge

Prémisse
**« Le feu est rouge »** — état du signal.

Conclusion
« les conducteurs doivent s'arrêter » — obligation.`,
    intermediate: `Approfondi (Intermédiaire) — code de la route

Analyse
1. Observation du feu = prémisse.
2. Devoir d’arrêt = conclusion (fond réglementaire implicite).

Parité
Équivalent de « The light is red / drivers must stop » en anglais.`,
    expert: `Approfondi (Expert)

Ne pas prendre la norme d’arrêt pour la prémisse : c’est la **conséquence** du signal dans l’argument.`,
  },

  1057: {
    beginner: `Approfondi (Débutant) — sommeil / concentration

Prémisse
**« Le manque de sommeil affecte la concentration »** — effet cognitif.

Conclusion
« les étudiants doivent se reposer » — prescription.`,
    intermediate: `Approfondi (Intermédiaire)

Schéma
1. Nuisance (manque de sommeil) → prémisse.
2. Remède (se reposer) → conclusion.

Même structure que l’anglais lack of sleep / rest.`,
    expert: `Approfondi (Expert)

La prémisse est le **problème** ; la conclusion est l’**action** recommandée.`,
  },

  1058: {
    beginner: `Approfondi (Débutant) — offre / prix

Prémisse
**« L'offre est faible »** — condition de marché.

Conclusion
« les prix augmenteront » — prévision.`,
    intermediate: `Approfondi (Intermédiaire) — économie

Étapes
1. « Comme » introduit l’état d’offre.
2. La hausse des prix est la conclusion argumentée.

Synthèse
Parité avec « Supply is low / prices will rise ».`,
    expert: `Approfondi (Expert)

La prémisse décrit la **contrainte** ; la conclusion est le **mouvement de prix** attendu.`,
  },

  1059: {
    beginner: `Approfondi (Débutant) — chiens sociaux

Prémisse
**« Les chiens sont sociaux »** — trait.

Conclusion
« ils ont besoin de compagnie » — implication de soins.`,
    intermediate: `Approfondi (Intermédiaire) — éthologie

Analyse
1. Trait d’espèce = prémisse.
2. Besoin de compagnie = conclusion prudente.

Alignement
Anglais « Dogs are social / need company ».`,
    expert: `Approfondi (Expert)

Le besoin de compagnie est la **thèse soutenue**, pas la prémisse ; la sociabilité est la **raison** invoquée.`,
  },

  1060: {
    beginner: `Approfondi (Débutant) — guitare désaccordée

Prémisse
**« La guitare n'est pas accordée »** — état.

Conclusion
« elle sonnera mal » — jugement sonore.`,
    intermediate: `Approfondi (Intermédiaire) — musique

Procédure
1. Défaut d’accord = prémisse.
2. Mauvais son = conclusion.

Parité
Même logique que « The guitar is out of tune / sound bad » en anglais.`,
    expert: `Approfondi (Expert) — diagnostic instrumental

La prémisse est l’**état mécanique** ; la conclusion est l’**évaluation** du rendu sonore.`,
  },

  1061: {
    beginner: `Approfondi (Débutant) — four / gâteau

Prémisse
**« Le four est trop chaud »** — état thermique invoqué comme raison.

Conclusion
« le gâteau va brûler » — **prévision** de cuisson.`,
    intermediate: `Approfondi (Intermédiaire) — contrôle de cuisson

Étapes
1. « Comme » introduit l’**état du four** (trop chaud).
2. La seconde proposition est la **conséquence** sur le gâteau.
3. Ne pas prendre « Comme » pour une prémisse de contenu.

Synthèse
Parité avec « The oven is too hot / cake will burn » en anglais.`,
    expert: `Approfondi (Expert) — causalité cuisine

La prémisse est la **condition** réglable ; la conclusion est l’**événement** (brûler) inféré.`,
  },

  1062: {
    beginner: `Approfondi (Débutant) — entraînement / vitesse

Prémisse
**« Tu t'es entraîné dur »** — fait d’effort comme appui.

Conclusion
« tu finiras plus vite » — **prédiction** de performance.`,
    intermediate: `Approfondi (Intermédiaire) — rendement

Analyse
1. Première partie : effort passé ou soutenu — prémisse « preuve ».
2. Seconde partie : rapidité future — thèse sur l’issue.
3. Même squelette « Comme P, Q » que les autres items sur la compétence.

Parité
Aligné sur « You practiced hard / finish faster ».`,
    expert: `Approfondi (Expert)

La prémisse porte sur la **pratique** ; « finir plus vite » est la **conséquence** annoncée sur la performance.`,
  },

  1063: {
    beginner: `Approfondi (Débutant) — nuages / pluie

Prémisse
**« Les nuages sont sombres »** — indice visuel.

Conclusion
« il va pleuvoir » — **prévision** météo.`,
    intermediate: `Approfondi (Intermédiaire) — lecture du ciel

Procédure
1. Prémisse d’observation : aspect des nuages.
2. Conclusion : précipitations attendues.
3. « Comme » marque l’**observation**, pas la prédiction.

Synthèse
Signe météo → événement (niveau 0, schéma simplifié).`,
    expert: `Approfondi (Expert) — raccourci

La prémisse est le **signe** ; la conclusion est la **prévision** — même logique que la version anglaise.`,
  },

  1064: {
    beginner: `Approfondi (Débutant) — batterie / démarrage

Prémisse
**« La batterie est vide »** — état électrique.

Conclusion
« la voiture ne démarrera pas » — **défaillance** fonctionnelle.`,
    intermediate: `Approfondi (Intermédiaire) — diagnostic auto

Étapes
1. Prémisse : charge nulle / batterie à plat.
2. Conclusion : absence de démarrage.
3. Parallèle routeur / Wi-Fi : état **source d’énergie** → **service**.

Parité
« The battery is empty / car won't start ».`,
    expert: `Approfondi (Expert)

La prémisse est le **stockage** ; le non-démarrage est le **symptôme** inféré, pas la raison donnée.`,
  },

  1065: {
    beginner: `Approfondi (Débutant) — plantes / fenêtre

Prémisse
**« Les plantes ont besoin de lumière »** — besoin biologique.

Conclusion
« elles devraient être près de la fenêtre » — **placement** recommandé.`,
    intermediate: `Approfondi (Intermédiaire) — culture intérieure

Analyse
1. Besoin (lumière) = prémisse descriptive.
2. Proximité vitrée = conclusion prescriptive.
3. Schéma besoin → conduite, comme l’anglais.

Synthèse
Le fait sur l’organisme est la prémisse ; l’« il faut » est la conclusion.`,
    expert: `Approfondi (Expert) — placement

Le besoin de lumière est la **raison** ; la fenêtre est la **réponse** proposée — pas l’inverse.`,
  },

  1066: {
    beginner: `Approfondi (Débutant) — silence / parler bas

Prémisse
**« Le silence est requis »** — norme ou contexte.

Conclusion
« nous devons parler bas » — **conduite** dérivée.`,
    intermediate: `Approfondi (Intermédiaire) — lieux calmes

Marche à suivre
1. Prémisse : exigence de silence.
2. Conclusion : volume de voix réduit.
3. Ne pas prendre l’impératif de comportement pour la prémisse quand la consigne est « raison donnée ».

Parité
« Silence is required / speak softly » en anglais.`,
    expert: `Approfondi (Expert) — normes

La prémisse est ce que **le lieu ou la règle impose** ; parler bas est la **conséquence** comportementale.`,
  },

  1067: {
    beginner: `Approfondi (Débutant) — exercice / marche

Prémisse
**« L'exercice améliore la santé »** — bénéfice général.

Conclusion
« nous devrions marcher quotidiennement » — **prescription** de style de vie.`,
    intermediate: `Approfondi (Intermédiaire) — santé publique (vulgarisation)

Étapes
1. Prémisse large : lien exercice–santé.
2. Conclusion spécifique : marche quotidienne.
3. Même pont général → « il faut » que dans l’anglais.

Synthèse
Le fait sur les bienfaits est la prémisse ; le « devrions » est la conclusion.`,
    expert: `Approfondi (Expert)

La prémisse est **générale** ; la marche est la **recommandation** dérivée — pas la prémisse.`,
  },

  1068: {
    beginner: `Approfondi (Débutant) — X = 5 / X + 2 = 7

Prémisse
**« X est égal à 5 »** — valeur donnée (point de départ).

Conclusion
« X plus 2 est égal à 7 » — **égalité** dérivée.`,
    intermediate: `Approfondi (Intermédiaire) — calcul

Analyse
1. Prémisse : substitution numérique de X.
2. Conclusion : résultat après opération (+2).
3. En style « preuve », le **donné** joue le rôle de prémisse ; la ligne calculée, celui de conclusion.

Parité
« X equals 5 / X plus 2 equals 7 ».`,
    expert: `Approfondi (Expert) — raisonnement arithmétique

X = 5 est l’**hypothèse** ; X + 2 = 7 est ce qui **s’ensuit** — ne pas inverser les rôles.`,
  },

  1069: {
    beginner: `Approfondi (Débutant) — marée / plage

Prémisse
**« La marée monte »** — processus côtier.

Conclusion
« la plage va rétrécir » — **changement** d’espace sec.`,
    intermediate: `Approfondi (Intermédiaire) — littoral

Procédure
1. Prémisse : phase de marée montante.
2. Conclusion : moins de sable sec visible — plage « plus petite » pour le promeneur.
3. Même logique que l’anglais « tide coming in / beach smaller ».

Synthèse
État de marée → conséquence spatiale.`,
    expert: `Approfondi (Expert)

La prémisse est le **forçage** (eau qui monte) ; le rétrécissement est l’**effet** perçu.`,
  },

  1070: {
    beginner: `Approfondi (Débutant) — lumière / étoiles passées

Prémisse
**« La lumière prend du temps pour voyager »** — délai de propagation.

Conclusion
« nous voyons les étoiles telles qu'elles étaient » — **regard** vers le passé.`,
    intermediate: `Approfondi (Intermédiaire) — vulgarisation astronomique

Étapes
1. Prémisse physique : vitesse finie de la lumière.
2. Conclusion observationnelle : image « historique » des sources.
3. Famille conceptuelle proche des items sur la lumière stellaire ; formulation courte « Comme … ».

Parité
« Light takes time to travel / stars as they were » en anglais.`,
    expert: `Approfondi (Expert) — émission / réception

La prémisse concerne la **propagation** ; la conclusion concerne ce que **nous voyons** — détails relativistes hors niveau 0.`,
  },

  1071: {
    beginner: `Approfondi (Débutant) — démo gravité (2e passage)

Rappel
Le texte du banc reprend le couple gravité / pomme ; les **rôles** restent : appui vs issue.

Prémisse
**« La gravité tire les objets vers le bas »** — généralisation physique avant la virgule.

Conclusion
« la pomme tombera » — prédiction **particulière** dans la vignette.`,
    intermediate: `Approfondi (Intermédiaire) — loi → cas

Déroulé
1. Première proposition : fond commun sur la pesanteur.
2. Seconde proposition : épisode sur une pomme.
3. « Comme » **signale** le début de la prémisse ; ce n’est pas le texte de la prémisse.

Angle
Même gabarit **général → instance** : la première fente = prémisse.`,
    expert: `Approfondi (Expert) — instance vs loi

Même dans une démo « physique », le banc étiquette la clause **loi-like** comme prémisse et la **prédiction sur le cas** comme conclusion.`,
  },

  1072: {
    beginner: `Approfondi (Débutant) — aisance / parole quotidienne (2e passage)

Prémisse
**« La pratique améliore l'aisance »** — mécanisme d’apprentissage invoqué comme raison.

Conclusion
« tu devrais parler tous les jours » — prescription de **rythme**.`,
    intermediate: `Approfondi (Intermédiaire) — couche habitude

Étapes
1. Proposition 1 → mécanisme (pratique → aisance).
2. Proposition 2 → calendrier (parler chaque jour).
3. Le « parce que » implicite porte sur le mécanisme ; le **devoir** de fréquence est la **conséquence** pour l’exercice.

Synthèse
Les injonctions de routine sont en **conclusion** dans ce format.`,
    expert: `Approfondi (Expert) — pile normative

La prémisse est un **constat** sur l’acquisition ; la conclusion est un **devoir** de conduite — ne pas inverser.`,
  },

  1073: {
    beginner: `Approfondi (Débutant) — réseau domestique (2e passage)

Prémisse
**« Le routeur est éteint »** — fait d’**alimentation / chemin**.

Conclusion
« le Wi-Fi ne fonctionnera pas » — symptôme **radio**.`,
    intermediate: `Approfondi (Intermédiaire) — pile technique

Analyse
1. Base : routeur sous tension ou non.
2. Symptôme : absence de service sans fil.
3. Pour l’identification de prémisse, l’**état matériel** est la prémisse ; le **service** est la conclusion.

Parité
« The router is off / Wi-Fi won't work » — aligné sur l’anglais.`,
    expert: `Approfondi (Expert) — faute localisée

La prémisse est la **cause matérielle** ; la panne Wi-Fi est la **couche visible** inférée.`,
  },

  1074: {
    beginner: `Approfondi (Débutant) — manipulation prudente (2e passage)

Prémisse
**« Les artéfacts sont fragiles »** — **risque** matériel.

Conclusion
« ils nécessitent une manipulation prudente » — **protocole** dérivé.`,
    intermediate: `Approfondi (Intermédiaire) — risque → contrôle

Marche à suivre
1. Enregistrer la fragilité comme prémisse de **danger**.
2. Dériver les normes de soin comme **conclusion** de politique.
3. « Comme » lie danger à contrôle en une phrase.

Synthèse
Fait **descriptif** d’abord, norme **prescriptive** ensuite.`,
    expert: `Approfondi (Expert) — cible normative

La prudence requise est la **conclusion politique** ; la fragilité est le **fait donné** comme appui.`,
  },

  1075: {
    beginner: `Approfondi (Débutant) — mélange de couleurs (2e passage)

Prémisse
**« Le rouge et le bleu font du violet »** — **fait** de composition.

Conclusion
« mélangez-les pour du violet » — **consigne** d’action.`,
    intermediate: `Approfondi (Intermédiaire) — recette vs geste

Étapes
1. Première partie : ce que font les pigments **ensemble**.
2. Seconde partie : ce que **vous** devez faire (impératif).
3. Ne pas choisir l’impératif quand on demande la **raison** textuelle.

Parité
Même structure que « Red and blue make purple / mix them ».`,
    expert: `Approfondi (Expert) — choix des moyens

La consigne de mélange est **justifiée par** le fait couleur ; le fait est la prémisse, la consigne est la **conclusion instrumentale**.`,
  },

  1076: {
    beginner: `Approfondi (Débutant) — carrefour (2e passage)

Prémisse
**« Le feu est rouge »** — **lecture** du signal.

Conclusion
« les conducteurs doivent s'arrêter » — **obligation** de conformité.`,
    intermediate: `Approfondi (Intermédiaire) — système de contrôle

Analyse
1. Entrée « capteur » : état colorimétrique du feu.
2. Sortie « règle » : arrêt obligatoire.
3. Prémisse = **état** ; conclusion = **norme** de circulation.

Synthèse
On sépare **ce qu’on voit** de **ce qu’il faut faire**.`,
    expert: `Approfondi (Expert) — conséquence déontique

L’arrêt est la **conséquence déontique** ; le rouge est la **prémisse empirique** — ne pas intervertir.`,
  },

  1077: {
    beginner: `Approfondi (Débutant) — concentration / repos (2e passage)

Prémisse
**« Le manque de sommeil affecte la concentration »** — **atteinte** aux capacités.

Conclusion
« les étudiants doivent se reposer » — **prescription** de récupération.`,
    intermediate: `Approfondi (Intermédiaire) — préjudice → remède

Déroulé
1. Prémisse de tort : privation → attention affaiblie.
2. Conclusion de remède : se reposer.
3. Même schéma **problème / solution** que les autres conseils de bien-être.

Parité
« Lack of sleep affects focus / students should rest ».`,
    expert: `Approfondi (Expert) — clôture conseil

Le repos est la **recommandation finale** ; l’effet sur la concentration est l’**ouverture évidentielle**. La prémisse = ouverture.`,
  },

  1078: {
    beginner: `Approfondi (Débutant) — offre / prix (2e passage)

Prémisse
**« L'offre est faible »** — **tension** sur le marché.

Conclusion
« les prix augmenteront » — **prévision** de prix.`,
    intermediate: `Approfondi (Intermédiaire) — condition → prévision

Étapes
1. État économique : offre restreinte (schéma simplifié).
2. Mouvement de prix annoncé : hausse.
3. « Comme » ancre la **condition** comme raison de la **prévision**.

Synthèse
La prévision est ce qu’on argue **à partir** de la condition — pas la prémisse elle-même.`,
    expert: `Approfondi (Expert) — exogène / endogène

L’offre joue le rôle **exogène** dans ce modèle jouet ; le prix est la variable **endogène** annoncée en conclusion.`,
  },

  1079: {
    beginner: `Approfondi (Débutant) — chiens / compagnie (2e passage)

Prémisse
**« Les chiens sont sociaux »** — trait **d’espèce**.

Conclusion
« ils ont besoin de compagnie » — **besoin** de soins.`,
    intermediate: `Approfondi (Intermédiaire) — trait → besoin

Analyse
1. Prémisse éthologique : sociabilité.
2. Conclusion de bien-être : besoin de compagnie.
3. Le besoin est **inféré** du trait pour cet exercice.

Parité
« Dogs are social / need company » en anglais.`,
    expert: `Approfondi (Expert) — cible d’inférence

La compagnie est la **thèse inférée** ; la sociabilité est le **fondement** — fondement = prémisse au sens du quiz.`,
  },

  1080: {
    beginner: `Approfondi (Débutant) — accord / son (2e passage)

Prémisse
**« La guitare n'est pas accordée »** — **défaut** de réglage.

Conclusion
« elle sonnera mal » — **jugement** sonore.`,
    intermediate: `Approfondi (Intermédiaire) — réglage → timbre

Procédure
1. Prémisse mécanique : désaccord.
2. Conclusion esthétique : mauvais rendu.
3. « Comme » introduit le **défaut** ; l’**évaluation** est en aval.

Synthèse
Défaut **descriptif** = prémisse ; verdict **qualitatif** = conclusion.`,
    expert: `Approfondi (Expert) — dépendance d’évaluation

Le mauvais son est **attendu sous** le mauvais accord ; l’accord est la prémisse **indépendante** de la paire.`,
  },

  1081: {
    beginner: `Approfondi (Débutant) — consigne thermique (3e passage)

Note
Même phrase que d’autres ID four / gâteau — les rôles prémisse / conclusion restent fixes.

Prémisse
**« Le four est trop chaud »** — **état** thermique invoqué comme raison.

Conclusion
« le gâteau va brûler » — **issue** de cuisson attendue.`,
    intermediate: `Approfondi (Intermédiaire) — surchauffe

Déroulé
1. Fente prémisse : température **trop élevée** pour l’instant de la recette.
2. Fente conclusion : **surcuisson** présentée comme brûlage.
3. « Comme » lie **état du four** à **destin du gâteau** — première proposition = appui.

Synthèse
Avertissements cuisine : faits de **réglage thermique** → risques de **cuisson**.`,
    expert: `Approfondi (Expert) — variable de contrôle

La chaleur est l’**entrée** observée ou réglée ; la prédiction de brûlage est l’**issue** narrative — pas la prémisse.`,
  },

  1082: {
    beginner: `Approfondi (Débutant) — charge d’entraînement (3e passage)

Prémisse
**« Tu t'es entraîné dur »** — **charge** ou effort investi.

Conclusion
« tu finiras plus vite » — attente de **rythme** ou de temps de réalisation.`,
    intermediate: `Approfondi (Intermédiaire) — effort → allure

Étapes
1. Prémisse « preuve » : effort d’entraînement.
2. Conclusion : rapidité future (lien causal jouet).
3. Ne pas étiqueter l’allure comme prémisse : c’est ce que l’arguer **projette**.

Parité
« You practiced hard / finish faster ».`,
    expert: `Approfondi (Expert) — ancrage prospectif

La prémisse **ancre** dans le passé ; la finition plus rapide est la **projection** soutenue par cet ancrage.`,
  },

  1083: {
    beginner: `Approfondi (Débutant) — indice céleste (3e passage)

Prémisse
**« Les nuages sont sombres »** — **indice** visuel.

Conclusion
« il va pleuvoir » — attente de **précipitations**.`,
    intermediate: `Approfondi (Intermédiaire) — heuristique « maintenant »

Analyse
1. Prémisse d’observation : aspect des nuages.
2. Conclusion de prévision : pluie imminente (heuristique populaire).
3. Niveau 0 : étiqueter **signe → événement** sans météo complète.

Synthèse
L’**aspect du ciel** est la prémisse ; l’**appel météo** est la conclusion.`,
    expert: `Approfondi (Expert) — limite d’heuristique

La prévision réelle est complexe ; ici l’**observation** est strictement la prémisse et l’**événement annoncé** la conclusion.`,
  },

  1084: {
    beginner: `Approfondi (Débutant) — chaîne de démarrage (3e passage)

Prémisse
**« La batterie est vide »** — état de **charge stockée**.

Conclusion
« la voiture ne démarrera pas » — **défaillance** de démarrage / allumage.`,
    intermediate: `Approfondi (Intermédiaire) — électromécanique (schéma)

Procédure
1. Prémisse électrique : charge inutilisable.
2. Conclusion mécanique : chaîne démarreur / allumage incomplète.
3. Même schéma **faute source → symptôme** que les autres items d’alimentation.

Parité
« The battery is empty / car won't start ».`,
    expert: `Approfondi (Expert) — symptôme vs cause énoncée

« Ne démarre pas » est le **symptôme inféré** ; « batterie vide » est la **cause posée** comme prémisse.`,
  },

  1085: {
    beginner: `Approfondi (Débutant) — budget lumineux (3e passage)

Prémisse
**« Les plantes ont besoin de lumière »** — besoin **biologique**.

Conclusion
« elles devraient être près de la fenêtre » — **placement** pour satisfaire ce besoin.`,
    intermediate: `Approfondi (Intermédiaire) — intérieur

Étapes
1. Prémisse : dépendance à la lumière.
2. Conclusion : proximité de la baie vitrée comme solution.
3. Le **besoin** est la raison ; l’**emplacement** est la réponse conseillée.

Synthèse
Prémisse de **besoin** ; conclusion de **placement**.`,
    expert: `Approfondi (Expert) — moyen / fin

La fenêtre est le **moyen** justifié par le besoin lumineux ; le besoin est la proposition **d’appui**.`,
  },

  1086: {
    beginner: `Approfondi (Débutant) — lieu calme (3e passage)

Prémisse
**« Le silence est requis »** — **règle** contextuelle.

Conclusion
« nous devons parler bas » — **ajustement** de volume.`,
    intermediate: `Approfondi (Intermédiaire) — normes de bruit

Analyse
1. Prémisse réglementaire : exigence de silence.
2. Conclusion de conduite : voix basses.
3. La **règle** est ce qu’on cite ; le **comportement** est ce qu’on déduit.

Parité
« Silence is required / speak softly ».`,
    expert: `Approfondi (Expert) — mise en conformité

Parler bas est le **comportement mappé** sur l’exigence de silence ; l’exigence est le texte de **prémisse explicite**.`,
  },

  1087: {
    beginner: `Approfondi (Débutant) — marche quotidienne (3e passage)

Prémisse
**« L'exercice améliore la santé »** — **généralisation** sur les bienfaits.

Conclusion
« nous devrions marcher quotidiennement » — **habitude** d’exercice concrète.`,
    intermediate: `Approfondi (Intermédiaire) — pont vers l’habitude

Déroulé
1. Prémisse large : lien exercice–santé.
2. Conclusion étroite : fréquence de marche.
3. Le lien général est la **raison** ; le plan de marche est l’**application**.

Synthèse
**Bénéfice général** = prémisse ; **régime spécifique** = conclusion.`,
    expert: `Approfondi (Expert) — instanciation

La marche quotidienne **instancie** l’idée d’exercice ; la thèse sur l’amélioration de la santé est la prémisse **abstraite** invoquée.`,
  },

  1088: {
    beginner: `Approfondi (Débutant) — ligne de substitution (3e passage)

Prémisse
**« X est égal à 5 »** — **affectation** ou donnée.

Conclusion
« X plus 2 est égal à 7 » — égalité **dérivée** après calcul.`,
    intermediate: `Approfondi (Intermédiaire) — algèbre en une étape

Étapes
1. La prémisse fixe X.
2. La conclusion applique +2 dans le même langage formel.
3. Les **données** jouent le rôle de prémisse ; la ligne **dérivée**, celui de conclusion.

Parité
« X equals 5 / X plus 2 equals 7 ».`,
    expert: `Approfondi (Expert) — dérivabilité

La seconde égalité se **déduit** de la première par les règles usuelles ; la déductibilité fait de la première le membre **prémisse-like**.`,
  },

  1089: {
    beginner: `Approfondi (Débutant) — marée de flot (3e passage)

Prémisse
**« La marée monte »** — phase d’**eau montante**.

Conclusion
« la plage va rétrécir » — empreinte de **sable sec** réduite.`,
    intermediate: `Approfondi (Intermédiaire) — largeur intertidale

Procédure
1. Prémisse hydrodynamique : marée montante.
2. Conclusion spatiale : moins de place sur le sable sec pour le promeneur.
3. Prémisse de **processus** ; conclusion de **changement** visible du rivage.

Synthèse
**Forçage** de marée vs **aire utilisable** — le premier est la prémisse.`,
    expert: `Approfondi (Expert) — géométrie vécue

Le rétrécissement est l’**effet de layout** ; la marée montante est le **moteur** posé — moteur = prémisse dans cet exercice.`,
  },

  1090: {
    beginner: `Approfondi (Débutant) — étiquette lookback (3e passage)

Prémisse
**« La lumière prend du temps pour voyager »** — délai / **vitesse finie**.

Conclusion
« nous voyons les étoiles telles qu'elles étaient » — image **historique**.`,
    intermediate: `Approfondi (Intermédiaire) — vulgarisation astro

Analyse
1. Prémisse physique : propagation non instantanée.
2. Conclusion observationnelle : vision « passée » des sources (formulation courante).
3. Même ligne conceptuelle que les autres items sur la lumière stellaire.

Parité
« Light takes time to travel / stars as they were ».`,
    expert: `Approfondi (Expert) — trajet du signal

La prémisse porte sur le **temps de trajet** ; la conclusion sur ce que **représente** l’image — ne pas intervertir.`,
  },

  1091: {
    beginner: `Approfondi (Débutant) — poids et chute (4e passage)

Modèle répété
Le texte du banc reprend gravité / pomme — la **prémisse** reste la première proposition de contenu.

Prémisse
**« La gravité tire les objets vers le bas »** — affirmation de **tirage** (générique).

Conclusion
« la pomme tombera » — mouvement sur **un cas**.`,
    intermediate: `Approfondi (Intermédiaire) — du champ à la pomme

Déroulé
1. Prémisse de type « loi » : tendance vers le bas.
2. Conclusion d’instance : chute de cette pomme.
3. « Comme » indique que l’**histoire de la gravité** est la prémisse, pas la ligne sur la pomme.

Synthèse
Première proposition **loi-like** ; seconde **cas** — ici la première est prémisse.`,
    expert: `Approfondi (Expert) — sens de l’appui

La chute de la pomme est ce qu’on **retire** de la prémisse sur la gravité ; ce n’est pas la prémisse qu’on cite comme raison.`,
  },

  1092: {
    beginner: `Approfondi (Débutant) — parole quotidienne (4e passage)

Prémisse
**« La pratique améliore l'aisance »** — lien **répétition** / **compétence**.

Conclusion
« tu devrais parler tous les jours » — recommandation de **rythme**.`,
    intermediate: `Approfondi (Intermédiaire) — calendrier depuis le mécanisme

Étapes
1. Prémisse de mécanisme : pratique → aisance.
2. Conclusion de politique : parler chaque jour.
3. Le **mécanisme** soutient le **calendrier** ; ne pas prendre le calendrier pour la prémisse.

Synthèse
**Pourquoi la pratique compte** = prémisse ; **à quelle fréquence** = conclusion.`,
    expert: `Approfondi (Expert) — conséquent normatif

La parole quotidienne est la **prescription conséquente** ; la liaison pratique–aisance est l’**antécédent** d’appui.`,
  },

  1093: {
    beginner: `Approfondi (Débutant) — routeur éteint (4e passage)

Prémisse
**« Le routeur est éteint »** — état **matériel** du boîtier.

Conclusion
« le Wi-Fi ne fonctionnera pas » — attente sur le **service** sans fil.`,
    intermediate: `Approfondi (Intermédiaire) — boîtier puis air

Analyse
1. Prémisse : équipement bord non alimenté.
2. Conclusion : segment radio inutilisable.
3. Même étiquetage que les autres items routeur : **fait sur la boîte** = prémisse ; **service** = conclusion.

Parité
« The router is off / Wi-Fi won't work ».`,
    expert: `Approfondi (Expert) — sens de dépendance

La panne de service est **en aval** de l’état du routeur ; l’état du routeur est la **prémisse amont**.`,
  },

  1094: {
    beginner: `Approfondi (Débutant) — risque conservation (4e passage)

Prémisse
**« Les artéfacts sont fragiles »** — **risque** matériel.

Conclusion
« ils nécessitent une manipulation prudente » — **norme** de manipulation.`,
    intermediate: `Approfondi (Intermédiaire) — registre de risques

Procédure
1. Enregistrer la fragilité comme prémisse de **danger**.
2. Dériver la prudence comme **contrôle** — conclusion.
3. **Descriptif** d’abord ; **prescriptif** ensuite.

Synthèse
La fragilité est la **raison** ; la prudence est la **réponse** exigée (conclusion).`,
    expert: `Approfondi (Expert) — obligation non prémisse

La manipulation prudente est **soutenue par** la fragilité ; on n’infère pas la fragilité à partir de l’obligation.`,
  },

  1095: {
    beginner: `Approfondi (Débutant) — fait palette (4e passage)

Prémisse
**« Le rouge et le bleu font du violet »** — fait de **mélange** des pigments.

Conclusion
« mélangez-les pour du violet » — **consigne** de peintre.`,
    intermediate: `Approfondi (Intermédiaire) — recette vs geste

Étapes
1. Prémisse compositionnelle : résultat couleur.
2. Conclusion impérative : action de mélange.
3. Question : « qu’est-ce qui est donné comme **raison** ? » — le fait de composition, pas l’ordre.

Parité
« Red and blue make purple / mix them ».`,
    expert: `Approfondi (Expert) — cible impérative

L’impératif est la **cible d’action** justifiée par le fait couleur ; le fait est la proposition **d’appui**.`,
  },

  1096: {
    beginner: `Approfondi (Débutant) — correspondance STOP (4e passage)

Prémisse
**« Le feu est rouge »** — **aspect** du signal.

Conclusion
« les conducteurs doivent s'arrêter » — **obligation** de conformité.`,
    intermediate: `Approfondi (Intermédiaire) — phase du feu

Analyse
1. Prémisse de phase : rouge allumé.
2. Conclusion de règle : arrêt obligatoire.
3. **Observation** vs **norme** : ici première = prémisse, seconde = conclusion.

Synthèse
Le rouge **fonde** l’obligation ; ce n’est pas l’obligation elle-même.`,
    expert: `Approfondi (Expert) — conséquent déontique

L’arrêt est le **conséquent déontique** ; le feu rouge est l’**antécédent empirique** de la paire.`,
  },

  1097: {
    beginner: `Approfondi (Débutant) — dette de sommeil (4e passage)

Prémisse
**« Le manque de sommeil affecte la concentration »** — **atteinte** cognitive.

Conclusion
« les étudiants doivent se reposer » — conseil de **récupération**.`,
    intermediate: `Approfondi (Intermédiaire) — déficit → remède

Déroulé
1. Prémisse de tort : privation de sommeil.
2. Conclusion de remède : se reposer.
3. Fente **problème** vs fente **remède** — prémisse vs conclusion.

Parité
« Lack of sleep affects focus / students should rest ».`,
    expert: `Approfondi (Expert) — structure de conseil

Le repos est **en aval** du constat sur la concentration ; le constat est la **prémisse énoncée**.`,
  },

  1098: {
    beginner: `Approfondi (Débutant) — tension d’offre (4e passage)

Prémisse
**« L'offre est faible »** — **tension** sur le marché.

Conclusion
« les prix augmenteront » — mouvement des **prix**.`,
    intermediate: `Approfondi (Intermédiaire) — intuition de prix

Étapes
1. Prémisse de condition : rareté d’offre.
2. Conclusion de prévision : hausse des prix (récit court).
3. La **condition** est la prémisse ; la **prévision de prix** est la conclusion.

Synthèse
**État** de l’offre d’abord ; **mouvement** des prix ensuite.`,
    expert: `Approfondi (Expert) — prévision conditionnelle

La hausse est **conditionnée** par l’offre ; l’offre est le texte de **prémisse explicite**.`,
  },

  1099: {
    beginner: `Approfondi (Débutant) — espèce sociale (4e passage)

Prémisse
**« Les chiens sont sociaux »** — **généralisation** comportementale.

Conclusion
« ils ont besoin de compagnie » — thèse de **bien-être**.`,
    intermediate: `Approfondi (Intermédiaire) — trait → soins

Analyse
1. Prémisse de trait : sociabilité.
2. Conclusion de soin : besoin de compagnie.
3. Le **fait général** est la prémisse ; la **conséquence pratique** est la conclusion.

Synthèse
**Trait** = prémisse ; **besoin** = conclusion — ne pas permuter.`,
    expert: `Approfondi (Expert) — besoin inféré

Le besoin de compagnie est **inféré** ; la sociabilité est le **fondement** — fondement = prémisse.`,
  },

  1100: {
    beginner: `Approfondi (Débutant) — défaut de hauteur (4e passage)

Prémisse
**« La guitare n'est pas accordée »** — **défaut** d’accord.

Conclusion
« elle sonnera mal » — **jugement** sonore.`,
    intermediate: `Approfondi (Intermédiaire) — réglage → appréciation

Procédure
1. Prémisse de réglage : accord faux.
2. Conclusion : mauvais son.
3. « Comme » introduit le **défaut** ; l’**évaluation** est en aval.

Parité
« The guitar is out of tune / sound bad ».`,
    expert: `Approfondi (Expert) — esthétique conditionnelle

Le mauvais son est jugé **sous** le mauvais accord ; l’énoncé d’accord est la prémisse **indépendante** de la paire.`,
  },

  1101: {
    beginner: `Approfondi (Débutant) — repérer la conclusion (four / gâteau)

Changement de consigne
Les items précédents demandaient la **prémisse** après « Comme… » ; ici il faut la **conclusion** dans une structure **« P, par conséquent Q »**.

Bonne réponse (index **1**)
**« le gâteau va brûler »** — c’est ce que **par conséquent** introduit comme thèse **soutenue**.

Pas la conclusion
• « Le four est trop chaud » — **prémisse** (raison).
• « par conséquent » — **marqueur**, pas un contenu.
• « ni l'un ni l'autre » — faux ; il y a une conclusion.`,
    intermediate: `Approfondi (Intermédiaire) — fente « par conséquent »

Procédure
1. Couper sur **par conséquent** : [avant], [après].
2. La clause **après** est la **conclusion** dans ce cours — ce que l’arguer veut établir.
3. La clause **avant** donne la **raison**.

Synthèse
**Par conséquent** annonce la **cible inférentielle** ; choisir ce contenu, pas le fait d’appui.`,
    expert: `Approfondi (Expert) — rôle du conséquent

Ici le **conséquent** est l’issue sur le gâteau ; la chaleur du four est l’**antécédent** d’appui. Conclusion = contenu du conséquent.`,
  },

  1102: {
    beginner: `Approfondi (Débutant) — prédiction de performance

Conclusion (index **1**)
**« tu finiras plus vite »** — **issue** à choisir.

Prémisse (distracteur)
« Tu t'es entraîné dur » — preuve, pas la conclusion.`,
    intermediate: `Approfondi (Intermédiaire) — prévision vs preuve

Étapes
1. Clause de preuve : effort d’entraînement (prémisse).
2. Clause de prévision : rapidité (conclusion).
3. **Par conséquent** pointe vers la **prévision** comme suite du raisonnement.

Synthèse
Quand on demande la **conclusion**, prendre la clause **en aval** de **par conséquent**.`,
    expert: `Approfondi (Expert) — prédiction soutenue

L’allure annoncée est ce que l’argument **conclut** à partir de l’effort ; ce n’est pas la prémisse d’appui.`,
  },

  1103: {
    beginner: `Approfondi (Débutant) — appel météo

Correct (index **1**)
**« il va pleuvoir »** — conclusion **météo**.

Prémisse
« Les nuages sont sombres » — **observation** d’appui.`,
    intermediate: `Approfondi (Intermédiaire) — signe → événement

Analyse
1. Prémisse de signe : aspect des nuages.
2. Conclusion d’événement : pluie imminente.
3. **Par conséquent** introduit la **prévision**, pas l’observation.

Parité
« it is going to rain » / structure **therefore** en anglais.`,
    expert: `Approfondi (Expert) — cible inférentielle

La pluie est la thèse **inférée** ; les nuages sont la **base**. L’inférence est la conclusion.`,
  },

  1104: {
    beginner: `Approfondi (Débutant) — symptôme de démarrage

Conclusion (index **1**)
**« la voiture ne démarrera pas »** — **défaillance** fonctionnelle.

Prémisse
« La batterie est vide » — **diagnostic**.`,
    intermediate: `Approfondi (Intermédiaire) — conclusion symptôme

Procédure
1. Prémisse : absence de charge.
2. Conclusion : échec du démarrage.
3. **Par conséquent** mène au **comportement** de panne — à choisir pour « conclusion ».

Synthèse
En logique « bord de route », le **comportement** est souvent la conclusion énoncée.`,
    expert: `Approfondi (Expert) — aval fonctionnel

Le non-démarrage est **en aval** de l’état de batterie ; l’aval = conclusion ici.`,
  },

  1105: {
    beginner: `Approfondi (Débutant) — placement des plantes

Correct (index **1**)
**« elles devraient être près de la fenêtre »** — **recommandation** de placement.

Prémisse
« Les plantes ont besoin de lumière » — **besoin** comme raison.`,
    intermediate: `Approfondi (Intermédiaire) — devoir depuis le besoin

Étapes
1. Prémisse de besoin : lumière.
2. Conclusion prescriptive : proximité de la fenêtre.
3. **Par conséquent** signale le **devoir** de placement — la conclusion.

Synthèse
Les **devoir** après **par conséquent** sont en général la **conclusion**.`,
    expert: `Approfondi (Expert) — conséquent normatif

Le conseil de fenêtre est la **conclusion normative** ; le besoin de lumière est le **soutien** descriptif.`,
  },

  1106: {
    beginner: `Approfondi (Débutant) — conduite silencieuse

Conclusion (index **1**)
**« nous devons parler bas »** — **conduite** exigée.

Prémisse
« Le silence est requis » — **règle** ou contexte.`,
    intermediate: `Approfondi (Intermédiaire) — règle → comportement

Analyse
1. Prémisse : exigence de silence.
2. Conclusion : volume réduit.
3. Choisir la clause de **comportement** comme conclusion, pas l’énoncé de règle seul.

Parité
« we must speak softly » / **therefore** en anglais.`,
    expert: `Approfondi (Expert) — conclusion déontique

Parler bas est la **conclusion déontique** tirée de l’exigence de silence.`,
  },

  1107: {
    beginner: `Approfondi (Débutant) — marche quotidienne

Correct (index **1**)
**« nous devrions marcher quotidiennement »** — **habitude** conclue.

Prémisse
« L'exercice améliore la santé » — **bénéfice** général.`,
    intermediate: `Approfondi (Intermédiaire) — général → devoir spécifique

Déroulé
1. Prémisse large : exercice et santé.
2. Conclusion étroite : marche quotidienne.
3. **Par conséquent** introduit la **recommandation** concrète.

Synthèse
Le **plan d’action** est la conclusion ; la thèse sur les bienfaits est la prémisse.`,
    expert: `Approfondi (Expert) — prescription instanciée

La marche quotidienne **instancie** le conseil d’exercice ; cette instanciation est ce que l’argument **conclut**.`,
  },

  1108: {
    beginner: `Approfondi (Débutant) — égalité dérivée

Conclusion (index **1**)
**« X plus 2 est égal à 7 »** — ligne **calculée**.

Prémisse
« X est égal à 5 » — **donnée**.`,
    intermediate: `Approfondi (Intermédiaire) — étape de preuve

Étapes
1. Donnée : valeur de X.
2. Conclusion : résultat après +2.
3. Pour « conclusion », prendre l’égalité **après** **par conséquent**.

Parité
« X plus 2 equals 7 » / structure anglaise **therefore**.`,
    expert: `Approfondi (Expert) — cible dérivationnelle

La seconde égalité est la **cible dérivationnelle** — ce que l’argument **conclut** à partir de X = 5.`,
  },

  1109: {
    beginner: `Approfondi (Débutant) — rivage qui change

Correct (index **1**)
**« la plage va rétrécir »** — **effet** spatial.

Prémisse
« La marée monte » — **processus** côtier.`,
    intermediate: `Approfondi (Intermédiaire) — forçage → disposition

Procédure
1. Prémisse : marée montante.
2. Conclusion : moins de plage sèche.
3. **Par conséquent** marque le **changement** vécu comme conclusion.

Synthèse
**Rétrécissement** perçu = conclusion ; état de marée = prémisse.`,
    expert: `Approfondi (Expert) — effet vécu

Le rétrécissement est l’**effet** présenté comme **conclusion** ; la marée est la **cause** prémisse.`,
  },

  1110: {
    beginner: `Approfondi (Débutant) — vision « passée »

Conclusion (index **1**)
**« nous voyons les étoiles telles qu'elles étaient »** — thèse **observationnelle** sur l’image.

Prémisse
« La lumière prend du temps pour voyager » — **physique** d’appui.`,
    intermediate: `Approfondi (Intermédiaire) — du délai à l’apparence

Analyse
1. Prémisse : temps de propagation fini.
2. Conclusion : aspect « historique » du ciel (formulation courante).
3. **Par conséquent** introduit la thèse sur **ce que nous voyons** — à choisir comme conclusion.

Parité
« we see stars as they were » / **therefore** en anglais.`,
    expert: `Approfondi (Expert) — conséquent phénoménologique

La conclusion sur la vision est le **conséquent phénoménologique** ; le temps de trajet est l’**antécédent** physique.`,
  },

  1111: {
    beginner: `Approfondi (Débutant) — chute de la pomme (2e passe conclusion)

Texte répété
Même couple gravité / pomme — on cherche toujours la **conclusion**, pas la prémisse.

Correct (index **1**)
**« la pomme tombera »** — thèse de **mouvement** après **par conséquent**.

Prémisse (distracteur)
« La gravité tire les objets vers le bas » — appui, pas la cible.`,
    intermediate: `Approfondi (Intermédiaire) — issue sur un cas

Déroulé
1. Prémisse : tirage général vers le bas.
2. Conclusion : chute de cette pomme.
3. **Par conséquent** signale la **prédiction sur le cas** comme ce que l’argument **établit**.

Synthèse
Choisir l’**issue token** après **par conséquent** pour « conclusion ».`,
    expert: `Approfondi (Expert) — conséquent token

La chute de la pomme est le **conséquent sur le cas** ; le langage gravité universel est l’**antécédent** d’appui.`,
  },

  1112: {
    beginner: `Approfondi (Débutant) — parole quotidienne (2e passe)

Conclusion (index **1**)
**« tu devrais parler tous les jours »** — ligne **normative** de calendrier.

Prémisse
« La pratique améliore l'aisance » — thèse sur l’**apprentissage**.`,
    intermediate: `Approfondi (Intermédiaire) — cible prudente

Étapes
1. Prémisse de mécanisme : pratique → aisance.
2. Conclusion : prescription de fréquence.
3. Le **devoir** de calendrier est la **conclusion** dans cette étiquette.

Synthèse
Les **devoir** après **par conséquent** sont en général les **conclusions**.`,
    expert: `Approfondi (Expert) — conséquent de calendrier

La parole quotidienne est le **conséquent prudentiel** soutenu par la liaison pratique–aisance.`,
  },

  1113: {
    beginner: `Approfondi (Débutant) — Wi-Fi indisponible (2e passe)

Correct (index **1**)
**« le Wi-Fi ne fonctionnera pas »** — **panne** de service.

Prémisse
« Le routeur est éteint » — **état** matériel.`,
    intermediate: `Approfondi (Intermédiaire) — couche service

Analyse
1. Prémisse : alimentation / routeur.
2. Conclusion : utilisation du sans fil.
3. **Par conséquent** introduit l’**échec visible** côté utilisateur — à choisir comme conclusion.

Parité
« the Wi-Fi won't work » / **therefore** en anglais.`,
    expert: `Approfondi (Expert) — aval service

La panne Wi-Fi est **en aval** de l’état du routeur ; l’aval = fente **conclusion**.`,
  },

  1114: {
    beginner: `Approfondi (Débutant) — norme de manipulation (2e passe)

Conclusion (index **1**)
**« ils nécessitent une manipulation prudente »** — **exigence** de soin.

Prémisse
« Les artéfacts sont fragiles » — **risque** descriptif.`,
    intermediate: `Approfondi (Intermédiaire) — suite prescriptive

Procédure
1. Prémisse descriptive : fragilité.
2. Conclusion prescriptive : prudence de manipulation.
3. Choisir la clause **norme** comme **conclusion**.

Synthèse
**Besoin de prudence** conclut souvent un passage **descriptif → prescriptif**.`,
    expert: `Approfondi (Expert) — conséquent de contrôle

La manipulation prudente est le **conséquent de contrôle** justifié par la fragilité.`,
  },

  1115: {
    beginner: `Approfondi (Débutant) — ordre de mélange (2e passe)

Correct (index **1**)
**« mélangez-les pour du violet »** — **impératif** de conclusion.

Prémisse
« Le rouge et le bleu font du violet » — **fait** de composition.`,
    intermediate: `Approfondi (Intermédiaire) — impératif conséquent

Étapes
1. Prémisse : résultat couleur.
2. Conclusion : consigne de mélange.
3. **Par conséquent** pointe vers la **commande** — la **conclusion** à sélectionner.

Parité
« mix them for violet » / **therefore**.`,
    expert: `Approfondi (Expert) — conséquent instrumental

L’impératif de mélange est le **conséquent instrumental** de la prémisse compositionnelle.`,
  },

  1116: {
    beginner: `Approfondi (Débutant) — arrêt obligatoire (2e passe)

Conclusion (index **1**)
**« les conducteurs doivent s'arrêter »** — **obligation** de circulation.

Prémisse
« Le feu est rouge » — **état** du signal.`,
    intermediate: `Approfondi (Intermédiaire) — déontique après empirique

Analyse
1. Prémisse empirique : rouge.
2. Conclusion déontique : arrêt.
3. **Par conséquent** introduit la **règle pour conducteurs** — conclusion.

Synthèse
**Devoir d’arrêt** = conclusion ; couleur = **base**.`,
    expert: `Approfondi (Expert) — conséquent réglementaire

L’arrêt est le **conséquent réglementaire** ; la couleur du feu est l’**antécédent** factuel.`,
  },

  1117: {
    beginner: `Approfondi (Débutant) — conseil de repos (2e passe)

Correct (index **1**)
**« les étudiants doivent se reposer »** — **remède** conclu.

Prémisse
« Le manque de sommeil affecte la concentration » — **préjudice** cognitif.`,
    intermediate: `Approfondi (Intermédiaire) — fente remède

Déroulé
1. Prémisse de problème : manque de sommeil.
2. Conclusion : prescription de repos.
3. **Par conséquent** mène à la **réponse recommandée** — conclusion.

Parité
« students should rest » / **therefore**.`,
    expert: `Approfondi (Expert) — conséquent consultatif

Le repos est le **conséquent consultatif** soutenu par la prémisse de tort cognitif.`,
  },

  1118: {
    beginner: `Approfondi (Débutant) — mouvement des prix (2e passe)

Conclusion (index **1**)
**« les prix augmenteront »** — **prévision** de conclusion.

Prémisse
« L'offre est faible » — **condition** de marché.`,
    intermediate: `Approfondi (Intermédiaire) — conséquent de prévision

Étapes
1. Prémisse : tension d’offre.
2. Conclusion : hausse des prix.
3. Choisir la clause **prix** comme **conclusion** ; l’offre reste prémisse.

Synthèse
Les thèses sur le **mouvement** des prix **concluent** les états d’offre dans ce gabarit.`,
    expert: `Approfondi (Expert) — conséquent prix

La prévision de prix est le **conséquent économique** ; la rareté d’offre est la **condition** antécédente.`,
  },

  1119: {
    beginner: `Approfondi (Débutant) — besoin de compagnie (2e passe)

Correct (index **1**)
**« ils ont besoin de compagnie »** — conclusion de **bien-être**.

Prémisse
« Les chiens sont sociaux » — **trait** d’espèce.`,
    intermediate: `Approfondi (Intermédiaire) — inférence de soins

Analyse
1. Prémisse de trait : sociabilité.
2. Conclusion : besoin de compagnie.
3. **Par conséquent** introduit le **besoin** — à sélectionner comme conclusion.

Parité
« they need company » / **therefore**.`,
    expert: `Approfondi (Expert) — conséquent bien-être

Le besoin de compagnie est le **conséquent de bien-être** fondé sur la sociabilité.`,
  },

  1120: {
    beginner: `Approfondi (Débutant) — mauvais son (2e passe)

Conclusion (index **1**)
**« elle sonnera mal »** — **jugement** sonore.

Prémisse
« La guitare n'est pas accordée » — **défaut** de réglage.`,
    intermediate: `Approfondi (Intermédiaire) — prédiction esthétique

Procédure
1. Prémisse : désaccord.
2. Conclusion : mauvais rendu attendu.
3. **Par conséquent** marque l’**évaluation auditive** comme **conclusion**.

Synthèse
Le **verdict qualitatif** après **par conséquent** = conclusion ; le **défaut** avant = prémisse.`,
    expert: `Approfondi (Expert) — conséquent esthétique

Le mauvais son est le **conséquent esthétique** ; le défaut d’accord est l’**antécédent** diagnostique.`,
  },

  1121: {
    beginner: `Approfondi (Débutant) — brûlage (3e passe)

Note de cycle
Même phrase four / gâteau que d’autres ID — on choisit toujours ce qui suit **par conséquent**.

Conclusion (index **1**)
**« le gâteau va brûler »** — issue **culinaire** prédite.

Prémisse
« Le four est trop chaud » — **chaleur** comme raison.`,
    intermediate: `Approfondi (Intermédiaire) — conséquent de surcuisson

Étapes
1. Prémisse : chaleur excessive pour l’instant (schéma informel).
2. Conclusion : brûlage / surcuisson.
3. **Par conséquent** introduit le **sort du gâteau** — sélection **conclusion**.

Synthèse
Le **dommage au gâteau** est le **conséquent** ; l’état du four est l’**antécédent**.`,
    expert: `Approfondi (Expert) — conséquent culinaire

Le brûlage est le **conséquent culinaire** ; la surchauffe est l’**antécédent** opérationnel.`,
  },

  1122: {
    beginner: `Approfondi (Débutant) — allure (3e passe)

Correct (index **1**)
**« tu finiras plus vite »** — conclusion sur la **vitesse**.

Prémisse
« Tu t'es entraîné dur » — **effort** comme raison.`,
    intermediate: `Approfondi (Intermédiaire) — conséquent de performance

Analyse
1. Prémisse de preuve : charge d’entraînement.
2. Conclusion : rapidité de réalisation.
3. **Par conséquent** marque la thèse **performance** — à choisir.

Parité
« you will finish faster » / **therefore**.`,
    expert: `Approfondi (Expert) — conséquent temporel

Finir plus vite est le **conséquent temporel** soutenu par la prémisse d’effort.`,
  },

  1123: {
    beginner: `Approfondi (Débutant) — pluie imminente (3e passe)

Conclusion (index **1**)
**« il va pleuvoir »** — **précipitations** annoncées.

Prémisse
« Les nuages sont sombres » — **indice** visuel.`,
    intermediate: `Approfondi (Intermédiaire) — fente prévision

Procédure
1. Prémisse d’observation : aspect des nuages.
2. Conclusion : pluie proche (heuristique courte).
3. **Par conséquent** pointe vers la **prévision**, pas l’observation.

Synthèse
**Appel météo** = conclusion ; **ciel** = prémisse.`,
    expert: `Approfondi (Expert) — conséquent météo

La pluie est le **conséquent météo** ; l’aspect des nuages est l’**antécédent** signe.`,
  },

  1124: {
    beginner: `Approfondi (Débutant) — échec de démarrage (3e passe)

Correct (index **1**)
**« la voiture ne démarrera pas »** — **défaillance** de démarrage.

Prémisse
« La batterie est vide » — **charge** nulle.`,
    intermediate: `Approfondi (Intermédiaire) — conséquent électromécanique

Étapes
1. Prémisse : absence de charge utilisable.
2. Conclusion : chaîne de démarrage incomplète.
3. Choisir la ligne **non-démarrage** comme **conclusion**.

Parité
« the car won't start » / **therefore**.`,
    expert: `Approfondi (Expert) — conséquent démarreur

Le non-démarrage est le **conséquent** de la chaîne ; la batterie vide est l’**antécédent** d’énergie.`,
  },

  1125: {
    beginner: `Approfondi (Débutant) — placement fenêtre (3e passe)

Conclusion (index **1**)
**« elles devraient être près de la fenêtre »** — **recommandation** de placement.

Prémisse
« Les plantes ont besoin de lumière » — **besoin** invoqué.`,
    intermediate: `Approfondi (Intermédiaire) — conséquent horticole

Analyse
1. Prémisse : besoin de lumière.
2. Conclusion : proximité vitrée.
3. **Par conséquent** introduit le **où mettre** — conclusion.

Synthèse
**Lieu** des plantes = conclusion ; **besoin** = prémisse.`,
    expert: `Approfondi (Expert) — conséquent de disposition

La fenêtre est le **conséquent de disposition** justifié par l’accès photonique.`,
  },

  1126: {
    beginner: `Approfondi (Débutant) — voix basse (3e passe)

Correct (index **1**)
**« nous devons parler bas »** — **conduite** de volume.

Prémisse
« Le silence est requis » — **règle** de lieu.`,
    intermediate: `Approfondi (Intermédiaire) — conséquent de conformité

Procédure
1. Prémisse : exigence de silence.
2. Conclusion : volume réduit.
3. **Par conséquent** signale la **conduite** — conclusion.

Synthèse
**Comment parler** conclut **ce que le lieu exige** (prémisse).`,
    expert: `Approfondi (Expert) — conséquent acoustique

Parler bas est le **conséquent acoustique** ; l’exigence de silence est la **norme** antécédente.`,
  },

  1127: {
    beginner: `Approfondi (Débutant) — marche quotidienne (3e passe)

Conclusion (index **1**)
**« nous devrions marcher quotidiennement »** — **régime** conclu.

Prémisse
« L'exercice améliore la santé » — **bénéfice** général.`,
    intermediate: `Approfondi (Intermédiaire) — conséquent de prescription

Déroulé
1. Prémisse large : exercice et santé.
2. Conclusion étroite : marche chaque jour.
3. **Par conséquent** introduit le **plan** concret — conclusion.

Parité
« we should walk daily » / **therefore**.`,
    expert: `Approfondi (Expert) — instanciation comportementale

La marche quotidienne est la **prescription instanciée** ; la thèse sur l’amélioration de la santé est la prémisse.`,
  },

  1128: {
    beginner: `Approfondi (Débutant) — deuxième égalité (3e passe)

Correct (index **1**)
**« X plus 2 est égal à 7 »** — ligne **dérivée**.

Prémisse
« X est égal à 5 » — **donnée**.`,
    intermediate: `Approfondi (Intermédiaire) — conséquent dérivationnel

Étapes
1. La prémisse fixe X.
2. La conclusion applique +2.
3. **Par conséquent** précède l’égalité **calculée** — conclusion.

Synthèse
Les égalités **dérivées** **concluent** les **données** ici.`,
    expert: `Approfondi (Expert) — conséquent algébrique

La **seconde** égalité est le **conséquent algébrique** de la substitution.`,
  },

  1129: {
    beginner: `Approfondi (Débutant) — largeur de plage (3e passe)

Conclusion (index **1**)
**« la plage va rétrécir »** — **effet** sur le rivage.

Prémisse
« La marée monte » — **processus** de marée.`,
    intermediate: `Approfondi (Intermédiaire) — conséquent spatial

Procédure
1. Prémisse : phase montante.
2. Conclusion : moins de sable sec.
3. **Par conséquent** introduit le **changement d’espace** — conclusion.

Parité
« the beach will get smaller » / **therefore**.`,
    expert: `Approfondi (Expert) — conséquent littoral

Le rétrécissement est le **conséquent littoral** ; la marée montante est l’**antécédent** hydrodynamique.`,
  },

  1130: {
    beginner: `Approfondi (Débutant) — image du passé (3e passe)

Correct (index **1**)
**« nous voyons les étoiles telles qu'elles étaient »** — thèse sur **ce que nous voyons**.

Prémisse
« La lumière prend du temps pour voyager » — **propagation**.`,
    intermediate: `Approfondi (Intermédiaire) — conséquent d’apparence

Analyse
1. Prémisse physique : délai de propagation.
2. Conclusion : aspect « historique » du ciel.
3. **Par conséquent** introduit la thèse **visuelle** — conclusion.

Synthèse
**Ce que nous voyons** suit **par conséquent** ; le **temps de trajet** est prémisse.`,
    expert: `Approfondi (Expert) — conséquent observationnel

La thèse sur la vision passée est le **conséquent observationnel** ; la vitesse finie est l’**antécédent** physique (niveau 0).`,
  },

  1131: {
    beginner: `Approfondi (Débutant) — chute prédite (4e passe conclusion)

Texte répété
Même ligne **gravité… par conséquent pomme…** — la **conclusion** reste l’option d’index **1**.

Conclusion
**« la pomme tombera »** — thèse sur le **mouvement**.

Prémisse
« La gravité tire les objets vers le bas » — **appui**.`,
    intermediate: `Approfondi (Intermédiaire) — après par conséquent

Procédure
1. Couper sur **par conséquent** : raison | issue.
2. L’**issue** = **conclusion** pour ce cours.
3. Ne pas choisir le marqueur ni la première proposition pour « conclusion ».

Synthèse
**Par conséquent** → **ce qui suit** = conclusion.`,
    expert: `Approfondi (Expert) — conséquent de mouvement

La chute de la pomme est le **conséquent de mouvement** ; la gravité est l’**antécédent** d’appui.`,
  },

  1132: {
    beginner: `Approfondi (Débutant) — parler chaque jour (4e passe)

Correct (index **1**)
**« tu devrais parler tous les jours »** — **cadence** conclue.

Prémisse
« La pratique améliore l'aisance » — **mécanisme**.`,
    intermediate: `Approfondi (Intermédiaire) — conclusion prudente

Étapes
1. Prémisse : pratique → aisance.
2. Conclusion : fréquence de parole.
3. **Par conséquent** introduit le **devoir** — conclusion.

Parité
« you should speak daily » / **therefore**.`,
    expert: `Approfondi (Expert) — conséquent de calendrier

La parole quotidienne est le **conséquent de calendrier** fondé sur la pratique.`,
  },

  1133: {
    beginner: `Approfondi (Débutant) — panne Wi-Fi (4e passe)

Conclusion (index **1**)
**« le Wi-Fi ne fonctionnera pas »** — **service**.

Prémisse
« Le routeur est éteint » — **état** matériel.`,
    intermediate: `Approfondi (Intermédiaire) — conclusion de service

Analyse
1. Prémisse : routeur hors tension.
2. Conclusion : sans fil inutilisable.
3. Choisir la ligne **Wi-Fi** comme **conclusion**.

Synthèse
**Symptôme** en aval = conclusion.`,
    expert: `Approfondi (Expert) — conséquent de connectivité

La panne Wi-Fi est le **conséquent de connectivité** ; l’alimentation du routeur est l’**antécédent**.`,
  },

  1134: {
    beginner: `Approfondi (Débutant) — manipulation prudente (4e passe)

Correct (index **1**)
**« ils nécessitent une manipulation prudente »** — **norme**.

Prémisse
« Les artéfacts sont fragiles » — **risque**.`,
    intermediate: `Approfondi (Intermédiaire) — conclusion prescriptive

Procédure
1. Prémisse descriptive : fragilité.
2. Conclusion prescriptive : prudence.
3. **Par conséquent** mène à l’**exigence** — conclusion.

Parité
« they need careful handling ».`,
    expert: `Approfondi (Expert) — conséquent de conservation

La prudence requise est le **conséquent de conservation** justifié par la fragilité.`,
  },

  1135: {
    beginner: `Approfondi (Débutant) — mélanger pour violet (4e passe)

Conclusion (index **1**)
**« mélangez-les pour du violet »** — **impératif**.

Prémisse
« Le rouge et le bleu font du violet » — **fait** de composition.`,
    intermediate: `Approfondi (Intermédiaire) — conclusion d’atelier

Étapes
1. Prémisse compositionnelle.
2. Conclusion impérative.
3. **Par conséquent** → **commande** = conclusion.

Synthèse
**Consigne** après **par conséquent** = conclusion.`,
    expert: `Approfondi (Expert) — conséquent instrumental

L’ordre de mélange est le **conséquent instrumental** de la prémisse couleur.`,
  },

  1136: {
    beginner: `Approfondi (Débutant) — devoir d’arrêt (4e passe)

Correct (index **1**)
**« les conducteurs doivent s'arrêter »** — **obligation**.

Prémisse
« Le feu est rouge » — **signal**.`,
    intermediate: `Approfondi (Intermédiaire) — conclusion déontique

Analyse
1. Prémisse : feu rouge.
2. Conclusion : arrêt obligatoire.
3. Sélectionner la ligne **conducteurs** comme **conclusion**.

Parité
« drivers must stop » / **therefore**.`,
    expert: `Approfondi (Expert) — conséquent de conformité

L’arrêt est le **conséquent de conformité** ; la couleur est l’**observation** antécédente.`,
  },

  1137: {
    beginner: `Approfondi (Débutant) — étudiants au repos (4e passe)

Conclusion (index **1**)
**« les étudiants doivent se reposer »** — **remède**.

Prémisse
« Le manque de sommeil affecte la concentration » — **tort**.`,
    intermediate: `Approfondi (Intermédiaire) — conclusion consultative

Déroulé
1. Prémisse de préjudice : sommeil.
2. Conclusion : repos.
3. **Par conséquent** introduit la **réponse** — conclusion.

Synthèse
**Conseil** = conclusion ; **tort** = prémisse.`,
    expert: `Approfondi (Expert) — conséquent de récupération

Le repos est le **conséquent de récupération** soutenu par le tort cognitif.`,
  },

  1138: {
    beginner: `Approfondi (Débutant) — hausse des prix (4e passe)

Correct (index **1**)
**« les prix augmenteront »** — **prévision**.

Prémisse
« L'offre est faible » — **marché**.`,
    intermediate: `Approfondi (Intermédiaire) — conclusion de marché

Étapes
1. Prémisse : offre tendue.
2. Conclusion : prix en hausse.
3. Choisir la **prévision de prix** comme **conclusion**.

Parité
« prices will rise ».`,
    expert: `Approfondi (Expert) — conséquent de prix

La hausse annoncée est le **conséquent de prix** ; l’offre faible est la **condition** antécédente.`,
  },

  1139: {
    beginner: `Approfondi (Débutant) — besoin de compagnie (4e passe)

Conclusion (index **1**)
**« ils ont besoin de compagnie »** — **bien-être**.

Prémisse
« Les chiens sont sociaux » — **trait**.`,
    intermediate: `Approfondi (Intermédiaire) — besoin inféré

Analyse
1. Prémisse : sociabilité.
2. Conclusion : besoin de compagnie.
3. **Par conséquent** introduit le **besoin** — conclusion.

Synthèse
**Besoin** = conclusion ; **trait** = prémisse.`,
    expert: `Approfondi (Expert) — conséquent de bien-être

Le besoin de compagnie est le **conséquent de bien-être** fondé sur la sociabilité.`,
  },

  1140: {
    beginner: `Approfondi (Débutant) — sonnera mal (4e passe)

Correct (index **1**)
**« elle sonnera mal »** — **jugement** sonore.

Prémisse
« La guitare n'est pas accordée » — **défaut**.`,
    intermediate: `Approfondi (Intermédiaire) — conclusion esthétique

Procédure
1. Prémisse : désaccord.
2. Conclusion : mauvais son attendu.
3. **Par conséquent** marque l’**évaluation** — conclusion.

Parité
« it will sound bad ».`,
    expert: `Approfondi (Expert) — conséquent de timbre

Le mauvais son est le **conséquent de timbre** ; le défaut d’accord est l’**antécédent** de réglage.`,
  },

  1141: {
    beginner: `Approfondi (Débutant) — gâteau brûlé (5e passe)

Conclusion (index **1**)
**« le gâteau va brûler »** — **issue** de cuisson.

Prémisse
« Le four est trop chaud » — **chaleur**.`,
    intermediate: `Approfondi (Intermédiaire) — conséquent thermique

Étapes
1. Prémisse : surchauffe.
2. Conclusion : brûlage.
3. **Par conséquent** → **brûler** = conclusion.

Synthèse
**Sort du gâteau** = conclusion.`,
    expert: `Approfondi (Expert) — conséquent de surcuisson

Le brûlage est le **conséquent de surcuisson** ; la chaleur excessive est l’**antécédent**.`,
  },

  1142: {
    beginner: `Approfondi (Débutant) — plus vite (5e passe)

Correct (index **1**)
**« tu finiras plus vite »** — **allure**.

Prémisse
« Tu t'es entraîné dur » — **effort**.`,
    intermediate: `Approfondi (Intermédiaire) — conclusion de performance

Analyse
1. Prémisse d’effort.
2. Conclusion de rapidité.
3. Sélectionner la **vitesse** comme **conclusion**.

Parité
« you will finish faster ».`,
    expert: `Approfondi (Expert) — conséquent de débit

Finir plus vite est le **conséquent de débit** soutenu par l’entraînement.`,
  },

  1143: {
    beginner: `Approfondi (Débutant) — va pleuvoir (5e passe)

Conclusion (index **1**)
**« il va pleuvoir »** — **météo**.

Prémisse
« Les nuages sont sombres » — **ciel**.`,
    intermediate: `Approfondi (Intermédiaire) — conclusion de prévision

Procédure
1. Prémisse : signe visuel.
2. Conclusion : pluie.
3. **Par conséquent** introduit la **prévision** — conclusion.

Synthèse
**Pluie** = conclusion.`,
    expert: `Approfondi (Expert) — conséquent de précipitation

La pluie est le **conséquent de précipitation** ; les nuages sont l’**antécédent** signe.`,
  },

  1144: {
    beginner: `Approfondi (Débutant) — ne démarre pas (5e passe)

Correct (index **1**)
**« la voiture ne démarrera pas »** — **panne**.

Prémisse
« La batterie est vide » — **charge**.`,
    intermediate: `Approfondi (Intermédiaire) — conclusion de démarrage

Étapes
1. Prémisse : batterie à plat.
2. Conclusion : échec de démarrage.
3. **Par conséquent** → **non-démarrage** = conclusion.

Parité
« the car won't start ».`,
    expert: `Approfondi (Expert) — conséquent d’allumage

Le non-démarrage est le **conséquent d’allumage** ; la batterie vide est l’**antécédent** électrique.`,
  },

  1145: {
    beginner: `Approfondi (Débutant) — près de la fenêtre (5e passe)

Conclusion (index **1**)
**« elles devraient être près de la fenêtre »** — **placement**.

Prémisse
« Les plantes ont besoin de lumière » — **besoin**.`,
    intermediate: `Approfondi (Intermédiaire) — conclusion de placement

Analyse
1. Prémisse : besoin lumineux.
2. Conclusion : fenêtre.
3. Choisir le **où** comme **conclusion**.

Synthèse
**Placement** = conclusion.`,
    expert: `Approfondi (Expert) — conséquent d’accès lumineux

La fenêtre est le **conséquent d’accès lumineux** à la prémisse de besoin.`,
  },

  1146: {
    beginner: `Approfondi (Débutant) — parler bas (5e passe)

Correct (index **1**)
**« nous devons parler bas »** — **conduite**.

Prémisse
« Le silence est requis » — **règle**.`,
    intermediate: `Approfondi (Intermédiaire) — conclusion de comportement

Procédure
1. Prémisse : silence exigé.
2. Conclusion : voix basses.
3. **Par conséquent** → **parler bas** = conclusion.

Parité
« we must speak softly ».`,
    expert: `Approfondi (Expert) — conséquent d’étiquette

Parler bas est le **conséquent d’étiquette** tiré de l’exigence de silence.`,
  },

  1147: {
    beginner: `Approfondi (Débutant) — marcher quotidiennement (5e passe)

Conclusion (index **1**)
**« nous devrions marcher quotidiennement »** — **habitude**.

Prémisse
« L'exercice améliore la santé » — **bénéfice**.`,
    intermediate: `Approfondi (Intermédiaire) — conclusion de régime

Déroulé
1. Prémisse générale : exercice–santé.
2. Conclusion : marche quotidienne.
3. **Par conséquent** introduit le **plan** — conclusion.

Synthèse
**Régime concret** = conclusion.`,
    expert: `Approfondi (Expert) — conséquent de dose

La marche quotidienne est le **conséquent de dose** de l’avis sur la santé.`,
  },

  1148: {
    beginner: `Approfondi (Débutant) — X plus 2 = 7 (5e passe)

Correct (index **1**)
**« X plus 2 est égal à 7 »** — **dérivé**.

Prémisse
« X est égal à 5 » — **donné**.`,
    intermediate: `Approfondi (Intermédiaire) — conclusion algébrique

Étapes
1. Donné : X = 5.
2. Conclusion : X + 2 = 7.
3. **Par conséquent** précède la ligne **calculée** — conclusion.

Parité
« X plus 2 equals 7 ».`,
    expert: `Approfondi (Expert) — conséquent d’égalité

La seconde égalité est le **conséquent d’égalité** par substitution.`,
  },

  1149: {
    beginner: `Approfondi (Débutant) — plage rétrécit (5e passe)

Conclusion (index **1**)
**« la plage va rétrécir »** — **espace**.

Prémisse
« La marée monte » — **marée**.`,
    intermediate: `Approfondi (Intermédiaire) — conclusion spatiale

Procédure
1. Prémisse : marée montante.
2. Conclusion : moins de plage sèche.
3. **Par conséquent** marque le **rétrécissement** — conclusion.

Synthèse
**Effet au rivage** = conclusion.`,
    expert: `Approfondi (Expert) — conséquent d’emprise

Le rétrécissement est le **conséquent d’emprise** ; la marée est le **forçage** antécédent.`,
  },

  1150: {
    beginner: `Approfondi (Débutant) — étoiles passées (5e passe)

Correct (index **1**)
**« nous voyons les étoiles telles qu'elles étaient »** — **vision**.

Prémisse
« La lumière prend du temps pour voyager » — **délai**.`,
    intermediate: `Approfondi (Intermédiaire) — conclusion lookback

Analyse
1. Prémisse : temps de trajet fini.
2. Conclusion : image « historique ».
3. **Par conséquent** introduit la thèse **visuelle** — conclusion.

Parité
« we see stars as they were ».`,
    expert: `Approfondi (Expert) — conséquent phénoménologique

La vision du passé est le **conséquent phénoménologique** ; le délai lumineux est l’**antécédent** physique.`,
  },
  1151: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Bio / ADN, cycle 1)

Bonne réponse (index **0**)
**« L'ADN stocke l'info génétique. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « L'ADN est magnifique. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — bio (cycle 1)

Cycle 1 : la thèse de **stockage** est biologique vérifiable ; **magnifique** relève du goût.`,
  },

  1152: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Espace / Jupiter, cycle 1)

Bonne réponse (index **0**)
**« Jupiter est la plus grande planète. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « Jupiter fait peur. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — space (cycle 1)

Cycle 1 : le **classement par taille** est un fait astronomique (niveau 0) ; **peur** est émotionnel.`,
  },

  1153: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Chimie / or, cycle 1)

Bonne réponse (index **0**)
**« L'or ne rouille pas. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « L'or est le meilleur métal. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — chem (cycle 1)

Cycle 1 : la **corrosion** se prête à la chimie ; **meilleur** est préférence comparative.`,
  },

  1154: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Math / douzaine, cycle 1)

Bonne réponse (index **0**)
**« Une douzaine c'est douze unités. »** — énoncé **définition** vérifiable.

Pas un fait ici
• « Douze est un chiffre chanceux. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (par définition / convention ici).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — math (cycle 1)

Cycle 1 : **définition** de la douzaine = convention traitée comme **fait** ici ; **chanceux** est évaluatif.`,
  },

  1155: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Géo / Nil, cycle 1)

Bonne réponse (index **0**)
**« Le Nil est en Afrique. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « Le Nil est paisible. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — geo (cycle 1)

Cycle 1 : la **localisation** est géographique ; **paisible** est jugement d’ambiance.`,
  },

  1156: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Bio / ADN, cycle 2)

Bonne réponse (index **0**)
**« L'ADN stocke l'info génétique. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « L'ADN est magnifique. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — bio (cycle 2)

Cycle 2 : la thèse de **stockage** est biologique vérifiable ; **magnifique** relève du goût.`,
  },

  1157: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Espace / Jupiter, cycle 2)

Bonne réponse (index **0**)
**« Jupiter est la plus grande planète. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « Jupiter fait peur. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — space (cycle 2)

Cycle 2 : le **classement par taille** est un fait astronomique (niveau 0) ; **peur** est émotionnel.`,
  },

  1158: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Chimie / or, cycle 2)

Bonne réponse (index **0**)
**« L'or ne rouille pas. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « L'or est le meilleur métal. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — chem (cycle 2)

Cycle 2 : la **corrosion** se prête à la chimie ; **meilleur** est préférence comparative.`,
  },

  1159: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Math / douzaine, cycle 2)

Bonne réponse (index **0**)
**« Une douzaine c'est douze unités. »** — énoncé **définition** vérifiable.

Pas un fait ici
• « Douze est un chiffre chanceux. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (par définition / convention ici).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — math (cycle 2)

Cycle 2 : **définition** de la douzaine = convention traitée comme **fait** ici ; **chanceux** est évaluatif.`,
  },

  1160: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Géo / Nil, cycle 2)

Bonne réponse (index **0**)
**« Le Nil est en Afrique. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « Le Nil est paisible. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — geo (cycle 2)

Cycle 2 : la **localisation** est géographique ; **paisible** est jugement d’ambiance.`,
  },

  1161: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Bio / ADN, cycle 3)

Bonne réponse (index **0**)
**« L'ADN stocke l'info génétique. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « L'ADN est magnifique. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — bio (cycle 3)

Cycle 3 : la thèse de **stockage** est biologique vérifiable ; **magnifique** relève du goût.`,
  },

  1162: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Espace / Jupiter, cycle 3)

Bonne réponse (index **0**)
**« Jupiter est la plus grande planète. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « Jupiter fait peur. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — space (cycle 3)

Cycle 3 : le **classement par taille** est un fait astronomique (niveau 0) ; **peur** est émotionnel.`,
  },

  1163: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Chimie / or, cycle 3)

Bonne réponse (index **0**)
**« L'or ne rouille pas. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « L'or est le meilleur métal. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — chem (cycle 3)

Cycle 3 : la **corrosion** se prête à la chimie ; **meilleur** est préférence comparative.`,
  },

  1164: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Math / douzaine, cycle 3)

Bonne réponse (index **0**)
**« Une douzaine c'est douze unités. »** — énoncé **définition** vérifiable.

Pas un fait ici
• « Douze est un chiffre chanceux. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (par définition / convention ici).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — math (cycle 3)

Cycle 3 : **définition** de la douzaine = convention traitée comme **fait** ici ; **chanceux** est évaluatif.`,
  },

  1165: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Géo / Nil, cycle 3)

Bonne réponse (index **0**)
**« Le Nil est en Afrique. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « Le Nil est paisible. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — geo (cycle 3)

Cycle 3 : la **localisation** est géographique ; **paisible** est jugement d’ambiance.`,
  },

  1166: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Bio / ADN, cycle 4)

Bonne réponse (index **0**)
**« L'ADN stocke l'info génétique. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « L'ADN est magnifique. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — bio (cycle 4)

Cycle 4 : la thèse de **stockage** est biologique vérifiable ; **magnifique** relève du goût.`,
  },

  1167: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Espace / Jupiter, cycle 4)

Bonne réponse (index **0**)
**« Jupiter est la plus grande planète. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « Jupiter fait peur. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — space (cycle 4)

Cycle 4 : le **classement par taille** est un fait astronomique (niveau 0) ; **peur** est émotionnel.`,
  },

  1168: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Chimie / or, cycle 4)

Bonne réponse (index **0**)
**« L'or ne rouille pas. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « L'or est le meilleur métal. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — chem (cycle 4)

Cycle 4 : la **corrosion** se prête à la chimie ; **meilleur** est préférence comparative.`,
  },

  1169: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Math / douzaine, cycle 4)

Bonne réponse (index **0**)
**« Une douzaine c'est douze unités. »** — énoncé **définition** vérifiable.

Pas un fait ici
• « Douze est un chiffre chanceux. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (par définition / convention ici).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — math (cycle 4)

Cycle 4 : **définition** de la douzaine = convention traitée comme **fait** ici ; **chanceux** est évaluatif.`,
  },

  1170: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Géo / Nil, cycle 4)

Bonne réponse (index **0**)
**« Le Nil est en Afrique. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « Le Nil est paisible. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — geo (cycle 4)

Cycle 4 : la **localisation** est géographique ; **paisible** est jugement d’ambiance.`,
  },

  1171: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Bio / ADN, cycle 5)

Bonne réponse (index **0**)
**« L'ADN stocke l'info génétique. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « L'ADN est magnifique. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — bio (cycle 5)

Cycle 5 : la thèse de **stockage** est biologique vérifiable ; **magnifique** relève du goût.`,
  },

  1172: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Espace / Jupiter, cycle 5)

Bonne réponse (index **0**)
**« Jupiter est la plus grande planète. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « Jupiter fait peur. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — space (cycle 5)

Cycle 5 : le **classement par taille** est un fait astronomique (niveau 0) ; **peur** est émotionnel.`,
  },

  1173: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Chimie / or, cycle 5)

Bonne réponse (index **0**)
**« L'or ne rouille pas. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « L'or est le meilleur métal. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — chem (cycle 5)

Cycle 5 : la **corrosion** se prête à la chimie ; **meilleur** est préférence comparative.`,
  },

  1174: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Math / douzaine, cycle 5)

Bonne réponse (index **0**)
**« Une douzaine c'est douze unités. »** — énoncé **définition** vérifiable.

Pas un fait ici
• « Douze est un chiffre chanceux. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (par définition / convention ici).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — math (cycle 5)

Cycle 5 : **définition** de la douzaine = convention traitée comme **fait** ici ; **chanceux** est évaluatif.`,
  },

  1175: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Géo / Nil, cycle 5)

Bonne réponse (index **0**)
**« Le Nil est en Afrique. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « Le Nil est paisible. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — geo (cycle 5)

Cycle 5 : la **localisation** est géographique ; **paisible** est jugement d’ambiance.`,
  },

  1176: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Bio / ADN, cycle 6)

Bonne réponse (index **0**)
**« L'ADN stocke l'info génétique. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « L'ADN est magnifique. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — bio (cycle 6)

Cycle 6 : la thèse de **stockage** est biologique vérifiable ; **magnifique** relève du goût.`,
  },

  1177: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Espace / Jupiter, cycle 6)

Bonne réponse (index **0**)
**« Jupiter est la plus grande planète. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « Jupiter fait peur. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — space (cycle 6)

Cycle 6 : le **classement par taille** est un fait astronomique (niveau 0) ; **peur** est émotionnel.`,
  },

  1178: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Chimie / or, cycle 6)

Bonne réponse (index **0**)
**« L'or ne rouille pas. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « L'or est le meilleur métal. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — chem (cycle 6)

Cycle 6 : la **corrosion** se prête à la chimie ; **meilleur** est préférence comparative.`,
  },

  1179: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Math / douzaine, cycle 6)

Bonne réponse (index **0**)
**« Une douzaine c'est douze unités. »** — énoncé **définition** vérifiable.

Pas un fait ici
• « Douze est un chiffre chanceux. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (par définition / convention ici).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — math (cycle 6)

Cycle 6 : **définition** de la douzaine = convention traitée comme **fait** ici ; **chanceux** est évaluatif.`,
  },

  1180: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Géo / Nil, cycle 6)

Bonne réponse (index **0**)
**« Le Nil est en Afrique. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « Le Nil est paisible. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — geo (cycle 6)

Cycle 6 : la **localisation** est géographique ; **paisible** est jugement d’ambiance.`,
  },

  1181: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Bio / ADN, cycle 7)

Bonne réponse (index **0**)
**« L'ADN stocke l'info génétique. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « L'ADN est magnifique. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — bio (cycle 7)

Cycle 7 : la thèse de **stockage** est biologique vérifiable ; **magnifique** relève du goût.`,
  },

  1182: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Espace / Jupiter, cycle 7)

Bonne réponse (index **0**)
**« Jupiter est la plus grande planète. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « Jupiter fait peur. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — space (cycle 7)

Cycle 7 : le **classement par taille** est un fait astronomique (niveau 0) ; **peur** est émotionnel.`,
  },

  1183: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Chimie / or, cycle 7)

Bonne réponse (index **0**)
**« L'or ne rouille pas. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « L'or est le meilleur métal. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — chem (cycle 7)

Cycle 7 : la **corrosion** se prête à la chimie ; **meilleur** est préférence comparative.`,
  },

  1184: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Math / douzaine, cycle 7)

Bonne réponse (index **0**)
**« Une douzaine c'est douze unités. »** — énoncé **définition** vérifiable.

Pas un fait ici
• « Douze est un chiffre chanceux. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (par définition / convention ici).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — math (cycle 7)

Cycle 7 : **définition** de la douzaine = convention traitée comme **fait** ici ; **chanceux** est évaluatif.`,
  },

  1185: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Géo / Nil, cycle 7)

Bonne réponse (index **0**)
**« Le Nil est en Afrique. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « Le Nil est paisible. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — geo (cycle 7)

Cycle 7 : la **localisation** est géographique ; **paisible** est jugement d’ambiance.`,
  },

  1186: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Bio / ADN, cycle 8)

Bonne réponse (index **0**)
**« L'ADN stocke l'info génétique. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « L'ADN est magnifique. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — bio (cycle 8)

Cycle 8 : la thèse de **stockage** est biologique vérifiable ; **magnifique** relève du goût.`,
  },

  1187: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Espace / Jupiter, cycle 8)

Bonne réponse (index **0**)
**« Jupiter est la plus grande planète. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « Jupiter fait peur. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — space (cycle 8)

Cycle 8 : le **classement par taille** est un fait astronomique (niveau 0) ; **peur** est émotionnel.`,
  },

  1188: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Chimie / or, cycle 8)

Bonne réponse (index **0**)
**« L'or ne rouille pas. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « L'or est le meilleur métal. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — chem (cycle 8)

Cycle 8 : la **corrosion** se prête à la chimie ; **meilleur** est préférence comparative.`,
  },

  1189: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Math / douzaine, cycle 8)

Bonne réponse (index **0**)
**« Une douzaine c'est douze unités. »** — énoncé **définition** vérifiable.

Pas un fait ici
• « Douze est un chiffre chanceux. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (par définition / convention ici).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — math (cycle 8)

Cycle 8 : **définition** de la douzaine = convention traitée comme **fait** ici ; **chanceux** est évaluatif.`,
  },

  1190: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Géo / Nil, cycle 8)

Bonne réponse (index **0**)
**« Le Nil est en Afrique. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « Le Nil est paisible. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — geo (cycle 8)

Cycle 8 : la **localisation** est géographique ; **paisible** est jugement d’ambiance.`,
  },

  1191: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Bio / ADN, cycle 9)

Bonne réponse (index **0**)
**« L'ADN stocke l'info génétique. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « L'ADN est magnifique. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — bio (cycle 9)

Cycle 9 : la thèse de **stockage** est biologique vérifiable ; **magnifique** relève du goût.`,
  },

  1192: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Espace / Jupiter, cycle 9)

Bonne réponse (index **0**)
**« Jupiter est la plus grande planète. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « Jupiter fait peur. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — space (cycle 9)

Cycle 9 : le **classement par taille** est un fait astronomique (niveau 0) ; **peur** est émotionnel.`,
  },

  1193: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Chimie / or, cycle 9)

Bonne réponse (index **0**)
**« L'or ne rouille pas. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « L'or est le meilleur métal. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — chem (cycle 9)

Cycle 9 : la **corrosion** se prête à la chimie ; **meilleur** est préférence comparative.`,
  },

  1194: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Math / douzaine, cycle 9)

Bonne réponse (index **0**)
**« Une douzaine c'est douze unités. »** — énoncé **définition** vérifiable.

Pas un fait ici
• « Douze est un chiffre chanceux. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (par définition / convention ici).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — math (cycle 9)

Cycle 9 : **définition** de la douzaine = convention traitée comme **fait** ici ; **chanceux** est évaluatif.`,
  },

  1195: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Géo / Nil, cycle 9)

Bonne réponse (index **0**)
**« Le Nil est en Afrique. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « Le Nil est paisible. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — geo (cycle 9)

Cycle 9 : la **localisation** est géographique ; **paisible** est jugement d’ambiance.`,
  },

  1196: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Bio / ADN, cycle 10)

Bonne réponse (index **0**)
**« L'ADN stocke l'info génétique. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « L'ADN est magnifique. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — bio (cycle 10)

Cycle 10 : la thèse de **stockage** est biologique vérifiable ; **magnifique** relève du goût.`,
  },

  1197: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Espace / Jupiter, cycle 10)

Bonne réponse (index **0**)
**« Jupiter est la plus grande planète. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « Jupiter fait peur. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — space (cycle 10)

Cycle 10 : le **classement par taille** est un fait astronomique (niveau 0) ; **peur** est émotionnel.`,
  },

  1198: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Chimie / or, cycle 10)

Bonne réponse (index **0**)
**« L'or ne rouille pas. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « L'or est le meilleur métal. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — chem (cycle 10)

Cycle 10 : la **corrosion** se prête à la chimie ; **meilleur** est préférence comparative.`,
  },

  1199: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Math / douzaine, cycle 10)

Bonne réponse (index **0**)
**« Une douzaine c'est douze unités. »** — énoncé **définition** vérifiable.

Pas un fait ici
• « Douze est un chiffre chanceux. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (par définition / convention ici).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — math (cycle 10)

Cycle 10 : **définition** de la douzaine = convention traitée comme **fait** ici ; **chanceux** est évaluatif.`,
  },

  1200: {
    beginner: `Approfondi (Débutant) — fait vs opinion (Géo / Nil, cycle 10)

Bonne réponse (index **0**)
**« Le Nil est en Afrique. »** — énoncé **descriptif** vérifiable.

Pas un fait ici
• « Le Nil est paisible. » — **évaluatif** ou goût.
• « Les opinions sont des faits. » — **faux** / erreur de catégorie.
• « Ça dépend. » — **esquive**, pas un énoncé factuel.`,
    intermediate: `Approfondi (Intermédiaire) — objectif vs subjectif

Étapes
1. Demander : peut-on trancher **sans** goût personnel ?
2. La **première** option est **vérifiable** (au sens scientifique usuel).
3. La **deuxième** utilise **valeur** ou **émotion**, pas le même statut logique.

Synthèse
Les **faits** se contrôlent ; les **opinions** expriment une **évaluation**.`,
    expert: `Approfondi (Expert) — geo (cycle 10)

Cycle 10 : la **localisation** est géographique ; **paisible** est jugement d’ambiance.`,
  },
  1201: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1201)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** En logique déductive, un argument est valide lorsque :

Bonne réponse (index **0**)
**« Si toutes les prémisses étaient vraies, la conclusion ne pourrait pas être fausse. »**

Pourquoi les autres options échouent
• (A) Si toutes les prémisses étaient vraies, la conclusion ne pourrait pas être fausse. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (B) La conclusion est probablement vraie quand même. — Cela se rapproche de la **force inductive** ou de l’**acceptation**, pas de la **validité déductive**.
• (C) La plupart des experts trouvent l'argument convaincant. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (D) Chaque prémisse est vraie dans le monde réel. — Cela parle de la **vérité des prémisses** dans le monde : **solidité**, pas la définition de **validité** (le lien d’inférence).`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
En logique déductive, un argument est valide lorsque :

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : En logique déductive, un argument est valide lorsque :
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1202: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1202)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** Quelle option correspond le mieux à la définition standard de la validité déductive ?

Bonne réponse (index **1**)
**« La forme d'inférence préserve la vérité : des prémisses vraies ne peuvent pas donner une conclusion fausse. »**

Pourquoi les autres options échouent
• (A) L'argument est populaire sur les réseaux sociaux. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (B) La forme d'inférence préserve la vérité : des prémisses vraies ne peuvent pas donner une conclusion fausse. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (C) Le raisonnement suscite de fortes émotions. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (D) Les prémisses sont largement crues vraies. — Cela ne correspond pas à la définition : **aucune situation** où prémisses toutes vraies et conclusion fausse.`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
Quelle option correspond le mieux à la définition standard de la validité déductive ?

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : Quelle option correspond le mieux à la définition standard de la validité déductive ?
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1203: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1203)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** Votre professeur dit : « Supposez les prémisses vraies dans une expérience de pensée — la conclusion ne peut pas rester …

Bonne réponse (index **2**)
**« La structure logique garantit la conclusion dès que les prémisses tiennent. »**

Pourquoi les autres options échouent
• (A) Chaque prémisse a été vérifiée empiriquement. — Cela parle de la **vérité des prémisses** dans le monde : **solidité**, pas la définition de **validité** (le lien d’inférence).
• (B) L'orateur cite de nombreuses sources. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (C) La structure logique garantit la conclusion dès que les prémisses tiennent. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (D) L'orateur tient profondément au sujet. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
Votre professeur dit : « Supposez les prémisses vraies dans une expérience de pensée — la conclusion ne peut pas rester fausse. » Cela décrit :

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : Votre professeur dit : « Supposez les prémisses vraies dans une expérience de pensée — la conclusion ne peut pas rester …
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1204: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1204)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** La validité est une propriété structurelle. Elle signifie :

Bonne réponse (index **3**)
**« En supposant les prémisses dans un modèle, la conclusion doit ressortir vraie. »**

Pourquoi les autres options échouent
• (A) Chaque prémisse est vraie dans le monde réel. — Cela parle de la **vérité des prémisses** dans le monde : **solidité**, pas la définition de **validité** (le lien d’inférence).
• (B) La plupart des experts trouvent l'argument convaincant. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (C) La conclusion est agréable à accepter. — Cela se rapproche de la **force inductive** ou de l’**acceptation**, pas de la **validité déductive**.
• (D) En supposant les prémisses dans un modèle, la conclusion doit ressortir vraie. — **Correct :** formule le lien **préservant la vérité** (validité standard).`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
La validité est une propriété structurelle. Elle signifie :

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : La validité est une propriété structurelle. Elle signifie :
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1205: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1205)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** Quelle formulation capture ce que les logiciens entendent par argument valide ?

Bonne réponse (index **0**)
**« Le schéma de l'argument rend impossible des prémisses toutes vraies avec une conclusion fausse. »**

Pourquoi les autres options échouent
• (A) Le schéma de l'argument rend impossible des prémisses toutes vraies avec une conclusion fausse. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (B) Les prémisses sont largement crues vraies. — Cela ne correspond pas à la définition : **aucune situation** où prémisses toutes vraies et conclusion fausse.
• (C) L'argument est populaire sur les réseaux sociaux. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (D) Le raisonnement suscite de fortes émotions. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
Quelle formulation capture ce que les logiciens entendent par argument valide ?

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : Quelle formulation capture ce que les logiciens entendent par argument valide ?
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1206: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1206)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** Un argument déductif valide est un argument dans lequel :

Bonne réponse (index **1**)
**« Si toutes les prémisses étaient vraies, la conclusion ne pourrait pas être fausse. »**

Pourquoi les autres options échouent
• (A) L'orateur tient profondément au sujet. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (B) Si toutes les prémisses étaient vraies, la conclusion ne pourrait pas être fausse. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (C) Chaque prémisse a été vérifiée empiriquement. — Cela parle de la **vérité des prémisses** dans le monde : **solidité**, pas la définition de **validité** (le lien d’inférence).
• (D) L'orateur cite de nombreuses sources. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
Un argument déductif valide est un argument dans lequel :

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : Un argument déductif valide est un argument dans lequel :
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1207: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1207)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** Si l'on ne demande que la validité (pas la correction), on demande si :

Bonne réponse (index **2**)
**« La forme d'inférence préserve la vérité : des prémisses vraies ne peuvent pas donner une conclusion fausse. »**

Pourquoi les autres options échouent
• (A) La conclusion est agréable à accepter. — Cela se rapproche de la **force inductive** ou de l’**acceptation**, pas de la **validité déductive**.
• (B) La plupart des experts trouvent l'argument convaincant. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (C) La forme d'inférence préserve la vérité : des prémisses vraies ne peuvent pas donner une conclusion fausse. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (D) Chaque prémisse est vraie dans le monde réel. — Cela parle de la **vérité des prémisses** dans le monde : **solidité**, pas la définition de **validité** (le lien d’inférence).`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
Si l'on ne demande que la validité (pas la correction), on demande si :

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : Si l'on ne demande que la validité (pas la correction), on demande si :
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1208: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1208)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** La « validité » d'un argument concerne :

Bonne réponse (index **3**)
**« La structure logique garantit la conclusion dès que les prémisses tiennent. »**

Pourquoi les autres options échouent
• (A) L'argument est populaire sur les réseaux sociaux. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (B) La conclusion est vraisemblablement vraie au vu du contexte. — Cela ne correspond pas à la définition : **aucune situation** où prémisses toutes vraies et conclusion fausse.
• (C) Les prémisses sont largement crues vraies. — Cela ne correspond pas à la définition : **aucune situation** où prémisses toutes vraies et conclusion fausse.
• (D) La structure logique garantit la conclusion dès que les prémisses tiennent. — **Correct :** formule le lien **préservant la vérité** (validité standard).`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
La « validité » d'un argument concerne :

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : La « validité » d'un argument concerne :
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1209: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1209)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** Quelle caractérisation correspond à la validité (par opposition à la correction) ?

Bonne réponse (index **0**)
**« En supposant les prémisses dans un modèle, la conclusion doit ressortir vraie. »**

Pourquoi les autres options échouent
• (A) En supposant les prémisses dans un modèle, la conclusion doit ressortir vraie. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (B) L'orateur cite de nombreuses sources. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (C) L'orateur tient profondément au sujet. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (D) Chaque prémisse a été vérifiée empiriquement. — Cela parle de la **vérité des prémisses** dans le monde : **solidité**, pas la définition de **validité** (le lien d’inférence).`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
Quelle caractérisation correspond à la validité (par opposition à la correction) ?

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : Quelle caractérisation correspond à la validité (par opposition à la correction) ?
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1210: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1210)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** Dans un système de preuve, une règle préserve la vérité. De même, un argument est valide lorsque :

Bonne réponse (index **1**)
**« Le schéma de l'argument rend impossible des prémisses toutes vraies avec une conclusion fausse. »**

Pourquoi les autres options échouent
• (A) La plupart des experts trouvent l'argument convaincant. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (B) Le schéma de l'argument rend impossible des prémisses toutes vraies avec une conclusion fausse. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (C) Chaque prémisse est vraie dans le monde réel. — Cela parle de la **vérité des prémisses** dans le monde : **solidité**, pas la définition de **validité** (le lien d’inférence).
• (D) La conclusion est agréable à accepter. — Cela se rapproche de la **force inductive** ou de l’**acceptation**, pas de la **validité déductive**.`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
Dans un système de preuve, une règle préserve la vérité. De même, un argument est valide lorsque :

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : Dans un système de preuve, une règle préserve la vérité. De même, un argument est valide lorsque :
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1211: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1211)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** On ne peut pas avoir des prémisses vraies et une conclusion fausse dans un argument valide. \\u00c9quivalemment, la valid…

Bonne réponse (index **2**)
**« Si toutes les prémisses étaient vraies, la conclusion ne pourrait pas être fausse. »**

Pourquoi les autres options échouent
• (A) Les prémisses sont largement crues vraies. — Cela ne correspond pas à la définition : **aucune situation** où prémisses toutes vraies et conclusion fausse.
• (B) L'argument est populaire sur les réseaux sociaux. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (C) Si toutes les prémisses étaient vraies, la conclusion ne pourrait pas être fausse. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (D) Le raisonnement suscite de fortes émotions. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
On ne peut pas avoir des prémisses vraies et une conclusion fausse dans un argument valide. \\u00c9quivalemment, la validité signifie :

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : On ne peut pas avoir des prémisses vraies et une conclusion fausse dans un argument valide. \\u00c9quivalemment, la valid…
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1212: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1212)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** Quelle option exprime la condition de préservation de la vérité pour la validité ?

Bonne réponse (index **3**)
**« La forme d'inférence préserve la vérité : des prémisses vraies ne peuvent pas donner une conclusion fausse. »**

Pourquoi les autres options échouent
• (A) L'orateur cite de nombreuses sources. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (B) Chaque prémisse a été vérifiée empiriquement. — Cela parle de la **vérité des prémisses** dans le monde : **solidité**, pas la définition de **validité** (le lien d’inférence).
• (C) L'orateur tient profondément au sujet. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (D) La forme d'inférence préserve la vérité : des prémisses vraies ne peuvent pas donner une conclusion fausse. — **Correct :** formule le lien **préservant la vérité** (validité standard).`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
Quelle option exprime la condition de préservation de la vérité pour la validité ?

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : Quelle option exprime la condition de préservation de la vérité pour la validité ?
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1213: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1213)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** La validité répond à quelle question ?

Bonne réponse (index **0**)
**« La structure logique garantit la conclusion dès que les prémisses tiennent. »**

Pourquoi les autres options échouent
• (A) La structure logique garantit la conclusion dès que les prémisses tiennent. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (B) Chaque prémisse est vraie dans le monde réel. — Cela parle de la **vérité des prémisses** dans le monde : **solidité**, pas la définition de **validité** (le lien d’inférence).
• (C) La conclusion est agréable à accepter. — Cela se rapproche de la **force inductive** ou de l’**acceptation**, pas de la **validité déductive**.
• (D) La plupart des experts trouvent l'argument convaincant. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
La validité répond à quelle question ?

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : La validité répond à quelle question ?
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1214: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1214)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** Un étudiant confond validité et « prémisses vraies ». De quoi parle donc la validité ?

Bonne réponse (index **1**)
**« En supposant les prémisses dans un modèle, la conclusion doit ressortir vraie. »**

Pourquoi les autres options échouent
• (A) Les prémisses sont largement crues vraies. — Cela ne correspond pas à la définition : **aucune situation** où prémisses toutes vraies et conclusion fausse.
• (B) En supposant les prémisses dans un modèle, la conclusion doit ressortir vraie. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (C) L'argument est populaire sur les réseaux sociaux. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (D) Le raisonnement suscite de fortes émotions. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
Un étudiant confond validité et « prémisses vraies ». De quoi parle donc la validité ?

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : Un étudiant confond validité et « prémisses vraies ». De quoi parle donc la validité ?
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1215: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1215)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** Choisissez l'option qui décrit la validité formelle en logique déductive :

Bonne réponse (index **2**)
**« Le schéma de l'argument rend impossible des prémisses toutes vraies avec une conclusion fausse. »**

Pourquoi les autres options échouent
• (A) Chaque prémisse a été vérifiée empiriquement. — Cela parle de la **vérité des prémisses** dans le monde : **solidité**, pas la définition de **validité** (le lien d’inférence).
• (B) L'orateur cite de nombreuses sources. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (C) Le schéma de l'argument rend impossible des prémisses toutes vraies avec une conclusion fausse. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (D) La conclusion est probablement vraie quand même. — Cela se rapproche de la **force inductive** ou de l’**acceptation**, pas de la **validité déductive**.`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
Choisissez l'option qui décrit la validité formelle en logique déductive :

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : Choisissez l'option qui décrit la validité formelle en logique déductive :
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1216: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1216)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** Lorsque les philosophes disent qu'un argument est valide, ils veulent dire :

Bonne réponse (index **3**)
**« Si toutes les prémisses étaient vraies, la conclusion ne pourrait pas être fausse. »**

Pourquoi les autres options échouent
• (A) La plupart des experts trouvent l'argument convaincant. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (B) Chaque prémisse est vraie dans le monde réel. — Cela parle de la **vérité des prémisses** dans le monde : **solidité**, pas la définition de **validité** (le lien d’inférence).
• (C) La conclusion est agréable à accepter. — Cela se rapproche de la **force inductive** ou de l’**acceptation**, pas de la **validité déductive**.
• (D) Si toutes les prémisses étaient vraies, la conclusion ne pourrait pas être fausse. — **Correct :** formule le lien **préservant la vérité** (validité standard).`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
Lorsque les philosophes disent qu'un argument est valide, ils veulent dire :

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : Lorsque les philosophes disent qu'un argument est valide, ils veulent dire :
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1217: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1217)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** Le manuel : la conclusion découle nécessairement des prémisses. Cela équivaut à :

Bonne réponse (index **0**)
**« La forme d'inférence préserve la vérité : des prémisses vraies ne peuvent pas donner une conclusion fausse. »**

Pourquoi les autres options échouent
• (A) La forme d'inférence préserve la vérité : des prémisses vraies ne peuvent pas donner une conclusion fausse. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (B) L'argument est populaire sur les réseaux sociaux. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (C) Les prémisses sont largement crues vraies. — Cela ne correspond pas à la définition : **aucune situation** où prémisses toutes vraies et conclusion fausse.
• (D) Le raisonnement suscite de fortes émotions. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
Le manuel : la conclusion découle nécessairement des prémisses. Cela équivaut à :

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : Le manuel : la conclusion découle nécessairement des prémisses. Cela équivaut à :
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1218: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1218)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** Quelle option parle de conséquence logique — pas de popularité ni d'émotion ?

Bonne réponse (index **1**)
**« La structure logique garantit la conclusion dès que les prémisses tiennent. »**

Pourquoi les autres options échouent
• (A) Chaque prémisse a été vérifiée empiriquement. — Cela parle de la **vérité des prémisses** dans le monde : **solidité**, pas la définition de **validité** (le lien d’inférence).
• (B) La structure logique garantit la conclusion dès que les prémisses tiennent. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (C) L'orateur cite de nombreuses sources. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (D) L'orateur tient profondément au sujet. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
Quelle option parle de conséquence logique — pas de popularité ni d'émotion ?

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : Quelle option parle de conséquence logique — pas de popularité ni d'émotion ?
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1219: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1219)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** Si vous savez qu'un argument est valide, vous savez que :

Bonne réponse (index **2**)
**« En supposant les prémisses dans un modèle, la conclusion doit ressortir vraie. »**

Pourquoi les autres options échouent
• (A) Chaque prémisse est vraie dans le monde réel. — Cela parle de la **vérité des prémisses** dans le monde : **solidité**, pas la définition de **validité** (le lien d’inférence).
• (B) La plupart des experts trouvent l'argument convaincant. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (C) En supposant les prémisses dans un modèle, la conclusion doit ressortir vraie. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (D) La conclusion est agréable à accepter. — Cela se rapproche de la **force inductive** ou de l’**acceptation**, pas de la **validité déductive**.`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
Si vous savez qu'un argument est valide, vous savez que :

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : Si vous savez qu'un argument est valide, vous savez que :
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1220: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1220)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** La validité porte sur le lien entre prémisses et conclusion, à savoir :

Bonne réponse (index **3**)
**« Le schéma de l'argument rend impossible des prémisses toutes vraies avec une conclusion fausse. »**

Pourquoi les autres options échouent
• (A) Le raisonnement suscite de fortes émotions. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (B) L'argument est populaire sur les réseaux sociaux. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (C) Les prémisses sont largement crues vraies. — Cela ne correspond pas à la définition : **aucune situation** où prémisses toutes vraies et conclusion fausse.
• (D) Le schéma de l'argument rend impossible des prémisses toutes vraies avec une conclusion fausse. — **Correct :** formule le lien **préservant la vérité** (validité standard).`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
La validité porte sur le lien entre prémisses et conclusion, à savoir :

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : La validité porte sur le lien entre prémisses et conclusion, à savoir :
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1221: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1221)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** Nécessairement : si les prémisses tiennent, la conclusion tient. Cela correspond à :

Bonne réponse (index **0**)
**« Si toutes les prémisses étaient vraies, la conclusion ne pourrait pas être fausse. »**

Pourquoi les autres options échouent
• (A) Si toutes les prémisses étaient vraies, la conclusion ne pourrait pas être fausse. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (B) L'orateur tient profondément au sujet. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (C) Chaque prémisse a été vérifiée empiriquement. — Cela parle de la **vérité des prémisses** dans le monde : **solidité**, pas la définition de **validité** (le lien d’inférence).
• (D) L'orateur cite de nombreuses sources. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
Nécessairement : si les prémisses tiennent, la conclusion tient. Cela correspond à :

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : Nécessairement : si les prémisses tiennent, la conclusion tient. Cela correspond à :
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1222: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1222)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** Un contre-exemple à la validité serait : prémisses toutes vraies, conclusion fausse. Donc la validité signifie :

Bonne réponse (index **1**)
**« La forme d'inférence préserve la vérité : des prémisses vraies ne peuvent pas donner une conclusion fausse. »**

Pourquoi les autres options échouent
• (A) La conclusion est vraisemblablement vraie au vu du contexte. — Cela ne correspond pas à la définition : **aucune situation** où prémisses toutes vraies et conclusion fausse.
• (B) La forme d'inférence préserve la vérité : des prémisses vraies ne peuvent pas donner une conclusion fausse. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (C) Chaque prémisse est vraie dans le monde réel. — Cela parle de la **vérité des prémisses** dans le monde : **solidité**, pas la définition de **validité** (le lien d’inférence).
• (D) La plupart des experts trouvent l'argument convaincant. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
Un contre-exemple à la validité serait : prémisses toutes vraies, conclusion fausse. Donc la validité signifie :

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : Un contre-exemple à la validité serait : prémisses toutes vraies, conclusion fausse. Donc la validité signifie :
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1223: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1223)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** Quelle option distingue correctement la validité de « les prémisses sont vraies » ?

Bonne réponse (index **2**)
**« La structure logique garantit la conclusion dès que les prémisses tiennent. »**

Pourquoi les autres options échouent
• (A) Les prémisses sont largement crues vraies. — Cela ne correspond pas à la définition : **aucune situation** où prémisses toutes vraies et conclusion fausse.
• (B) L'argument est populaire sur les réseaux sociaux. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (C) La structure logique garantit la conclusion dès que les prémisses tiennent. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (D) Le raisonnement suscite de fortes émotions. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
Quelle option distingue correctement la validité de « les prémisses sont vraies » ?

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : Quelle option distingue correctement la validité de « les prémisses sont vraies » ?
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1224: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1224)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** Le schéma de l'argument fonctionne. Cela signifie :

Bonne réponse (index **3**)
**« En supposant les prémisses dans un modèle, la conclusion doit ressortir vraie. »**

Pourquoi les autres options échouent
• (A) L'orateur cite de nombreuses sources. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (B) Chaque prémisse a été vérifiée empiriquement. — Cela parle de la **vérité des prémisses** dans le monde : **solidité**, pas la définition de **validité** (le lien d’inférence).
• (C) L'orateur tient profondément au sujet. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (D) En supposant les prémisses dans un modèle, la conclusion doit ressortir vraie. — **Correct :** formule le lien **préservant la vérité** (validité standard).`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
Le schéma de l'argument fonctionne. Cela signifie :

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : Le schéma de l'argument fonctionne. Cela signifie :
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1225: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1225)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** Choisissez la meilleure paraphrase de : « Aucune interprétation ne rend toutes les prémisses vraies et la conclusion fau…

Bonne réponse (index **0**)
**« Le schéma de l'argument rend impossible des prémisses toutes vraies avec une conclusion fausse. »**

Pourquoi les autres options échouent
• (A) Le schéma de l'argument rend impossible des prémisses toutes vraies avec une conclusion fausse. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (B) La plupart des experts trouvent l'argument convaincant. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (C) Chaque prémisse est vraie dans le monde réel. — Cela parle de la **vérité des prémisses** dans le monde : **solidité**, pas la définition de **validité** (le lien d’inférence).
• (D) La conclusion est agréable à accepter. — Cela se rapproche de la **force inductive** ou de l’**acceptation**, pas de la **validité déductive**.`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
Choisissez la meilleure paraphrase de : « Aucune interprétation ne rend toutes les prémisses vraies et la conclusion fausse. »

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : Choisissez la meilleure paraphrase de : « Aucune interprétation ne rend toutes les prémisses vraies et la conclusion fau…
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1226: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1226)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** Pour la validité déductive, quelle condition doit être satisfaite ?

Bonne réponse (index **1**)
**« Si toutes les prémisses étaient vraies, la conclusion ne pourrait pas être fausse. »**

Pourquoi les autres options échouent
• (A) Les prémisses sont largement crues vraies. — Cela ne correspond pas à la définition : **aucune situation** où prémisses toutes vraies et conclusion fausse.
• (B) Si toutes les prémisses étaient vraies, la conclusion ne pourrait pas être fausse. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (C) L'argument est populaire sur les réseaux sociaux. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (D) Le raisonnement suscite de fortes émotions. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
Pour la validité déductive, quelle condition doit être satisfaite ?

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : Pour la validité déductive, quelle condition doit être satisfaite ?
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1227: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1227)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** Quelle phrase un examen de logique accepterait-il comme définition de la validité ?

Bonne réponse (index **2**)
**« La forme d'inférence préserve la vérité : des prémisses vraies ne peuvent pas donner une conclusion fausse. »**

Pourquoi les autres options échouent
• (A) L'orateur cite de nombreuses sources. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (B) Chaque prémisse a été vérifiée empiriquement. — Cela parle de la **vérité des prémisses** dans le monde : **solidité**, pas la définition de **validité** (le lien d’inférence).
• (C) La forme d'inférence préserve la vérité : des prémisses vraies ne peuvent pas donner une conclusion fausse. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (D) L'orateur tient profondément au sujet. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
Quelle phrase un examen de logique accepterait-il comme définition de la validité ?

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : Quelle phrase un examen de logique accepterait-il comme définition de la validité ?
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1228: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1228)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** La validité est structurelle. Quelle option le reflète ?

Bonne réponse (index **3**)
**« La structure logique garantit la conclusion dès que les prémisses tiennent. »**

Pourquoi les autres options échouent
• (A) La conclusion est agréable à accepter. — Cela se rapproche de la **force inductive** ou de l’**acceptation**, pas de la **validité déductive**.
• (B) La plupart des experts trouvent l'argument convaincant. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (C) Chaque prémisse est vraie dans le monde réel. — Cela parle de la **vérité des prémisses** dans le monde : **solidité**, pas la définition de **validité** (le lien d’inférence).
• (D) La structure logique garantit la conclusion dès que les prémisses tiennent. — **Correct :** formule le lien **préservant la vérité** (validité standard).`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
La validité est structurelle. Quelle option le reflète ?

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : La validité est structurelle. Quelle option le reflète ?
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1229: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1229)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** Si les prémisses étaient vraies dans un scénario, la validité exige que :

Bonne réponse (index **0**)
**« En supposant les prémisses dans un modèle, la conclusion doit ressortir vraie. »**

Pourquoi les autres options échouent
• (A) En supposant les prémisses dans un modèle, la conclusion doit ressortir vraie. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (B) L'argument est populaire sur les réseaux sociaux. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (C) La conclusion est probablement vraie quand même. — Cela se rapproche de la **force inductive** ou de l’**acceptation**, pas de la **validité déductive**.
• (D) Les prémisses sont largement crues vraies. — Cela ne correspond pas à la définition : **aucune situation** où prémisses toutes vraies et conclusion fausse.`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
Si les prémisses étaient vraies dans un scénario, la validité exige que :

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : Si les prémisses étaient vraies dans un scénario, la validité exige que :
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1230: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1230)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** Vous vérifiez seulement l'inférence, pas le fait empirique. Vous vérifiez :

Bonne réponse (index **1**)
**« Le schéma de l'argument rend impossible des prémisses toutes vraies avec une conclusion fausse. »**

Pourquoi les autres options échouent
• (A) Chaque prémisse a été vérifiée empiriquement. — Cela parle de la **vérité des prémisses** dans le monde : **solidité**, pas la définition de **validité** (le lien d’inférence).
• (B) Le schéma de l'argument rend impossible des prémisses toutes vraies avec une conclusion fausse. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (C) L'orateur cite de nombreuses sources. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (D) L'orateur tient profondément au sujet. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
Vous vérifiez seulement l'inférence, pas le fait empirique. Vous vérifiez :

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : Vous vérifiez seulement l'inférence, pas le fait empirique. Vous vérifiez :
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1231: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1231)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** Quelle option confond une condition de correction avec la définition de la validité ?

Bonne réponse (index **1**)
**« Chaque prémisse est vraie dans le monde réel. »**

Pourquoi les autres options échouent
• (A) Si toutes les prémisses étaient vraies, la conclusion ne pourrait pas être fausse. — Cela ne correspond pas à la définition : **aucune situation** où prémisses toutes vraies et conclusion fausse.
• (B) Chaque prémisse est vraie dans le monde réel. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (C) La plupart des experts trouvent l'argument convaincant. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (D) La conclusion est agréable à accepter. — Cela se rapproche de la **force inductive** ou de l’**acceptation**, pas de la **validité déductive**.`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
Quelle option confond une condition de correction avec la définition de la validité ?

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : Quelle option confond une condition de correction avec la définition de la validité ?
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1232: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1232)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** La conclusion découle des prémisses. En logique formelle, cela signifie :

Bonne réponse (index **3**)
**« La forme d'inférence préserve la vérité : des prémisses vraies ne peuvent pas donner une conclusion fausse. »**

Pourquoi les autres options échouent
• (A) Le raisonnement suscite de fortes émotions. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (B) L'argument est populaire sur les réseaux sociaux. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (C) Les prémisses sont largement crues vraies. — Cela ne correspond pas à la définition : **aucune situation** où prémisses toutes vraies et conclusion fausse.
• (D) La forme d'inférence préserve la vérité : des prémisses vraies ne peuvent pas donner une conclusion fausse. — **Correct :** formule le lien **préservant la vérité** (validité standard).`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
La conclusion découle des prémisses. En logique formelle, cela signifie :

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : La conclusion découle des prémisses. En logique formelle, cela signifie :
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1233: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1233)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** Choisissez l'option qui correspond à la conséquence logique des prémisses à la conclusion.

Bonne réponse (index **0**)
**« La structure logique garantit la conclusion dès que les prémisses tiennent. »**

Pourquoi les autres options échouent
• (A) La structure logique garantit la conclusion dès que les prémisses tiennent. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (B) L'orateur tient profondément au sujet. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (C) Chaque prémisse a été vérifiée empiriquement. — Cela parle de la **vérité des prémisses** dans le monde : **solidité**, pas la définition de **validité** (le lien d’inférence).
• (D) L'orateur cite de nombreuses sources. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
Choisissez l'option qui correspond à la conséquence logique des prémisses à la conclusion.

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : Choisissez l'option qui correspond à la conséquence logique des prémisses à la conclusion.
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1234: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1234)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** Un argument valide peut avoir des prémisses fausses. La validité signifie malgré tout :

Bonne réponse (index **1**)
**« En supposant les prémisses dans un modèle, la conclusion doit ressortir vraie. »**

Pourquoi les autres options échouent
• (A) La plupart des experts trouvent l'argument convaincant. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (B) En supposant les prémisses dans un modèle, la conclusion doit ressortir vraie. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (C) La conclusion est agréable à accepter. — Cela se rapproche de la **force inductive** ou de l’**acceptation**, pas de la **validité déductive**.
• (D) Chaque prémisse est vraie dans le monde réel. — Cela parle de la **vérité des prémisses** dans le monde : **solidité**, pas la définition de **validité** (le lien d’inférence).`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
Un argument valide peut avoir des prémisses fausses. La validité signifie malgré tout :

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : Un argument valide peut avoir des prémisses fausses. La validité signifie malgré tout :
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1235: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1235)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** La correction ajoute des prémisses vraies ; la seule validité signifie :

Bonne réponse (index **2**)
**« Le schéma de l'argument rend impossible des prémisses toutes vraies avec une conclusion fausse. »**

Pourquoi les autres options échouent
• (A) L'argument est populaire sur les réseaux sociaux. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (B) Les prémisses sont largement crues vraies. — Cela ne correspond pas à la définition : **aucune situation** où prémisses toutes vraies et conclusion fausse.
• (C) Le schéma de l'argument rend impossible des prémisses toutes vraies avec une conclusion fausse. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (D) Le raisonnement suscite de fortes émotions. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
La correction ajoute des prémisses vraies ; la seule validité signifie :

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : La correction ajoute des prémisses vraies ; la seule validité signifie :
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1236: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1236)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** Quelle est la formulation type des manuels pour la validité déductive ?

Bonne réponse (index **3**)
**« Si toutes les prémisses étaient vraies, la conclusion ne pourrait pas être fausse. »**

Pourquoi les autres options échouent
• (A) La conclusion est vraisemblablement vraie au vu du contexte. — Cela ne correspond pas à la définition : **aucune situation** où prémisses toutes vraies et conclusion fausse.
• (B) L'orateur cite de nombreuses sources. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (C) Chaque prémisse a été vérifiée empiriquement. — Cela parle de la **vérité des prémisses** dans le monde : **solidité**, pas la définition de **validité** (le lien d’inférence).
• (D) Si toutes les prémisses étaient vraies, la conclusion ne pourrait pas être fausse. — **Correct :** formule le lien **préservant la vérité** (validité standard).`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
Quelle est la formulation type des manuels pour la validité déductive ?

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : Quelle est la formulation type des manuels pour la validité déductive ?
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1237: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1237)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** « Si toutes les prémisses sont vraies, la conclusion doit être vraie » est une formulation. Une autre équivalente est :

Bonne réponse (index **0**)
**« La forme d'inférence préserve la vérité : des prémisses vraies ne peuvent pas donner une conclusion fausse. »**

Pourquoi les autres options échouent
• (A) La forme d'inférence préserve la vérité : des prémisses vraies ne peuvent pas donner une conclusion fausse. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (B) La plupart des experts trouvent l'argument convaincant. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (C) La conclusion est agréable à accepter. — Cela se rapproche de la **force inductive** ou de l’**acceptation**, pas de la **validité déductive**.
• (D) Chaque prémisse est vraie dans le monde réel. — Cela parle de la **vérité des prémisses** dans le monde : **solidité**, pas la définition de **validité** (le lien d’inférence).`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
« Si toutes les prémisses sont vraies, la conclusion doit être vraie » est une formulation. Une autre équivalente est :

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : « Si toutes les prémisses sont vraies, la conclusion doit être vraie » est une formulation. Une autre équivalente est :
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1238: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1238)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** La nécessité de la conclusion étant données les prémisses signifie :

Bonne réponse (index **1**)
**« La structure logique garantit la conclusion dès que les prémisses tiennent. »**

Pourquoi les autres options échouent
• (A) Le raisonnement suscite de fortes émotions. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (B) La structure logique garantit la conclusion dès que les prémisses tiennent. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (C) L'argument est populaire sur les réseaux sociaux. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (D) Les prémisses sont largement crues vraies. — Cela ne correspond pas à la définition : **aucune situation** où prémisses toutes vraies et conclusion fausse.`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
La nécessité de la conclusion étant données les prémisses signifie :

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : La nécessité de la conclusion étant données les prémisses signifie :
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1239: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1239)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** Choisissez la définition de la validité sans affirmer que les prémisses sont vraies dans le monde réel :

Bonne réponse (index **2**)
**« En supposant les prémisses dans un modèle, la conclusion doit ressortir vraie. »**

Pourquoi les autres options échouent
• (A) L'orateur cite de nombreuses sources. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (B) Chaque prémisse a été vérifiée empiriquement. — Cela parle de la **vérité des prémisses** dans le monde : **solidité**, pas la définition de **validité** (le lien d’inférence).
• (C) En supposant les prémisses dans un modèle, la conclusion doit ressortir vraie. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (D) L'orateur tient profondément au sujet. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
Choisissez la définition de la validité sans affirmer que les prémisses sont vraies dans le monde réel :

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : Choisissez la définition de la validité sans affirmer que les prémisses sont vraies dans le monde réel :
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1240: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1240)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** La vérité des prémisses est une autre question. La validité affirme que :

Bonne réponse (index **3**)
**« Le schéma de l'argument rend impossible des prémisses toutes vraies avec une conclusion fausse. »**

Pourquoi les autres options échouent
• (A) Chaque prémisse est vraie dans le monde réel. — Cela parle de la **vérité des prémisses** dans le monde : **solidité**, pas la définition de **validité** (le lien d’inférence).
• (B) La conclusion est agréable à accepter. — Cela se rapproche de la **force inductive** ou de l’**acceptation**, pas de la **validité déductive**.
• (C) La plupart des experts trouvent l'argument convaincant. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (D) Le schéma de l'argument rend impossible des prémisses toutes vraies avec une conclusion fausse. — **Correct :** formule le lien **préservant la vérité** (validité standard).`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
La vérité des prémisses est une autre question. La validité affirme que :

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : La vérité des prémisses est une autre question. La validité affirme que :
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1241: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1241)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** Dans un argument valide, quelle situation est exclue ?

Bonne réponse (index **0**)
**« Si toutes les prémisses étaient vraies, la conclusion ne pourrait pas être fausse. »**

Pourquoi les autres options échouent
• (A) Si toutes les prémisses étaient vraies, la conclusion ne pourrait pas être fausse. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (B) L'argument est populaire sur les réseaux sociaux. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (C) Le raisonnement suscite de fortes émotions. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (D) Les prémisses sont largement crues vraies. — Cela ne correspond pas à la définition : **aucune situation** où prémisses toutes vraies et conclusion fausse.`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
Dans un argument valide, quelle situation est exclue ?

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : Dans un argument valide, quelle situation est exclue ?
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1242: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1242)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** La forme est telle que la vérité se transmet jusqu'à la conclusion. C'est :

Bonne réponse (index **1**)
**« La forme d'inférence préserve la vérité : des prémisses vraies ne peuvent pas donner une conclusion fausse. »**

Pourquoi les autres options échouent
• (A) Chaque prémisse a été vérifiée empiriquement. — Cela parle de la **vérité des prémisses** dans le monde : **solidité**, pas la définition de **validité** (le lien d’inférence).
• (B) La forme d'inférence préserve la vérité : des prémisses vraies ne peuvent pas donner une conclusion fausse. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (C) L'orateur cite de nombreuses sources. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (D) L'orateur tient profondément au sujet. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
La forme est telle que la vérité se transmet jusqu'à la conclusion. C'est :

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : La forme est telle que la vérité se transmet jusqu'à la conclusion. C'est :
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1243: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1243)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** Quelle option un assistant accepterait-il comme définition de la validité au premier quiz ?

Bonne réponse (index **2**)
**« La structure logique garantit la conclusion dès que les prémisses tiennent. »**

Pourquoi les autres options échouent
• (A) Chaque prémisse est vraie dans le monde réel. — Cela parle de la **vérité des prémisses** dans le monde : **solidité**, pas la définition de **validité** (le lien d’inférence).
• (B) La conclusion est probablement vraie quand même. — Cela se rapproche de la **force inductive** ou de l’**acceptation**, pas de la **validité déductive**.
• (C) La structure logique garantit la conclusion dès que les prémisses tiennent. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (D) La plupart des experts trouvent l'argument convaincant. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
Quelle option un assistant accepterait-il comme définition de la validité au premier quiz ?

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : Quelle option un assistant accepterait-il comme définition de la validité au premier quiz ?
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1244: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1244)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** Les prémisses impliquent ensemble la conclusion. Donc la validité signifie :

Bonne réponse (index **3**)
**« En supposant les prémisses dans un modèle, la conclusion doit ressortir vraie. »**

Pourquoi les autres options échouent
• (A) Les prémisses sont largement crues vraies. — Cela ne correspond pas à la définition : **aucune situation** où prémisses toutes vraies et conclusion fausse.
• (B) Le raisonnement suscite de fortes émotions. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (C) L'argument est populaire sur les réseaux sociaux. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (D) En supposant les prémisses dans un modèle, la conclusion doit ressortir vraie. — **Correct :** formule le lien **préservant la vérité** (validité standard).`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
Les prémisses impliquent ensemble la conclusion. Donc la validité signifie :

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : Les prémisses impliquent ensemble la conclusion. Donc la validité signifie :
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1245: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1245)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** Si vous accordez les prémisses pour la discussion, la validité vous oblige à accorder :

Bonne réponse (index **0**)
**« Le schéma de l'argument rend impossible des prémisses toutes vraies avec une conclusion fausse. »**

Pourquoi les autres options échouent
• (A) Le schéma de l'argument rend impossible des prémisses toutes vraies avec une conclusion fausse. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (B) L'orateur cite de nombreuses sources. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (C) L'orateur tient profondément au sujet. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (D) Chaque prémisse a été vérifiée empiriquement. — Cela parle de la **vérité des prémisses** dans le monde : **solidité**, pas la définition de **validité** (le lien d’inférence).`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
Si vous accordez les prémisses pour la discussion, la validité vous oblige à accorder :

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : Si vous accordez les prémisses pour la discussion, la validité vous oblige à accorder :
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1246: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1246)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** La conclusion est une conséquence logique des prémisses. Donc la validité signifie :

Bonne réponse (index **1**)
**« Si toutes les prémisses étaient vraies, la conclusion ne pourrait pas être fausse. »**

Pourquoi les autres options échouent
• (A) La plupart des experts trouvent l'argument convaincant. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (B) Si toutes les prémisses étaient vraies, la conclusion ne pourrait pas être fausse. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (C) La conclusion est agréable à accepter. — Cela se rapproche de la **force inductive** ou de l’**acceptation**, pas de la **validité déductive**.
• (D) Chaque prémisse est vraie dans le monde réel. — Cela parle de la **vérité des prémisses** dans le monde : **solidité**, pas la définition de **validité** (le lien d’inférence).`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
La conclusion est une conséquence logique des prémisses. Donc la validité signifie :

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : La conclusion est une conséquence logique des prémisses. Donc la validité signifie :
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1247: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1247)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** Choisissez la définition qui correspond au symbole (⊨) des cours introductifs :

Bonne réponse (index **2**)
**« La forme d'inférence préserve la vérité : des prémisses vraies ne peuvent pas donner une conclusion fausse. »**

Pourquoi les autres options échouent
• (A) Le raisonnement suscite de fortes émotions. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (B) Les prémisses sont largement crues vraies. — Cela ne correspond pas à la définition : **aucune situation** où prémisses toutes vraies et conclusion fausse.
• (C) La forme d'inférence préserve la vérité : des prémisses vraies ne peuvent pas donner une conclusion fausse. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (D) L'argument est populaire sur les réseaux sociaux. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
Choisissez la définition qui correspond au symbole (⊨) des cours introductifs :

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : Choisissez la définition qui correspond au symbole (⊨) des cours introductifs :
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1248: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1248)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** Un argument valide n'autorise jamais : prémisses toutes vraies et conclusion fausse. Donc :

Bonne réponse (index **3**)
**« La structure logique garantit la conclusion dès que les prémisses tiennent. »**

Pourquoi les autres options échouent
• (A) L'orateur cite de nombreuses sources. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (B) Chaque prémisse a été vérifiée empiriquement. — Cela parle de la **vérité des prémisses** dans le monde : **solidité**, pas la définition de **validité** (le lien d’inférence).
• (C) L'orateur tient profondément au sujet. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (D) La structure logique garantit la conclusion dès que les prémisses tiennent. — **Correct :** formule le lien **préservant la vérité** (validité standard).`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
Un argument valide n'autorise jamais : prémisses toutes vraies et conclusion fausse. Donc :

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : Un argument valide n'autorise jamais : prémisses toutes vraies et conclusion fausse. Donc :
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1249: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1249)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** Quelle option est synonyme de « la conclusion découle nécessairement des prémisses » ?

Bonne réponse (index **0**)
**« En supposant les prémisses dans un modèle, la conclusion doit ressortir vraie. »**

Pourquoi les autres options échouent
• (A) En supposant les prémisses dans un modèle, la conclusion doit ressortir vraie. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (B) La plupart des experts trouvent l'argument convaincant. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (C) Chaque prémisse est vraie dans le monde réel. — Cela parle de la **vérité des prémisses** dans le monde : **solidité**, pas la définition de **validité** (le lien d’inférence).
• (D) La conclusion est agréable à accepter. — Cela se rapproche de la **force inductive** ou de l’**acceptation**, pas de la **validité déductive**.`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
Quelle option est synonyme de « la conclusion découle nécessairement des prémisses » ?

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : Quelle option est synonyme de « la conclusion découle nécessairement des prémisses » ?
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1250: {
    beginner: `Approfondi (Débutant) — validité déductive (ID 1250)

Ce que demande la question
Choisir la **définition de validité déductive** : la propriété structurelle qui **interdit** « toutes les prémisses vraies + conclusion fausse ».

**Angle de l’énoncé :** Quelle option exprime le mieux l'absence de contre-exemple à prémisses vraies et conclusion fausse ?

Bonne réponse (index **1**)
**« Le schéma de l'argument rend impossible des prémisses toutes vraies avec une conclusion fausse. »**

Pourquoi les autres options échouent
• (A) L'argument est populaire sur les réseaux sociaux. — Cela relève de la **rhétorique** ou du **domaine psychologique**, pas de la définition formelle de validité déductive.
• (B) Le schéma de l'argument rend impossible des prémisses toutes vraies avec une conclusion fausse. — **Correct :** formule le lien **préservant la vérité** (validité standard).
• (C) La conclusion est vraisemblablement vraie au vu du contexte. — Cela ne correspond pas à la définition : **aucune situation** où prémisses toutes vraies et conclusion fausse.
• (D) Les prémisses sont largement crues vraies. — Cela ne correspond pas à la définition : **aucune situation** où prémisses toutes vraies et conclusion fausse.`,
    intermediate: `Approfondi (Intermédiaire) — validité déductive

Idée centrale
La **validité** n’est **pas** « prémisses vraies », **pas** « conclusion vraie », **pas** « convaincant ». Il s’agit de **conséquence logique** : la conclusion est **imposée** dès que les prémisses tiennent.

**Énoncé de cette carte**
Quelle option exprime le mieux l'absence de contre-exemple à prémisses vraies et conclusion fausse ?

**Étapes**
1. Pour chaque option : décrit-elle la **forme** / la **préservation de la vérité** (prémisses → conclusion), ou autre chose (popularité, croyance, émotions, faits) ?
2. La **solidité** (*soundness*) est une autre note : **valide + prémisses vraies**. Plusieurs distracteurs glissent la **vérité des prémisses** dans la définition de **validité**.
3. La bonne ligne doit dire l’équivalent de : **des prémisses vraies ne peuvent pas rendre la conclusion fausse** (ou : **aucun contre-exemple**).

**Synthèse**
**Validité** = garantie **structurelle** ; **solidité** ajoute la **vérité des prémisses**.`,
    expert: `Approfondi (Expert) — validité déductive

**Définition (standard)**
Un argument est **valide** ssi il n’existe **aucune** interprétation / modèle où toutes les prémisses sont **vraies** et la conclusion **fausse**. Équivalent : la conclusion est une **conséquence logique** des prémisses.

**Lien avec cet item**
L’énoncé commence par : Quelle option exprime le mieux l'absence de contre-exemple à prémisses vraies et conclusion fausse ?
La bonne option capte la **préservation de la vérité** (parfois dite **conséquence nécessaire**), pas la **vérification empirique** des prémisses.

**Taxonomie des distracteurs**
• **Rhétorique / psychologie** (experts, popularité, émotion) : hors validité.
• **Vérité des prémisses** dans le monde : **solidité**, pas validité seule.
• **Force inductive** (« probablement ») : pas la validité déductive.

**Cas limite**
Un argument peut être **valide** avec des **prémisses fausses** ; la validité contraint **la relation** vérité des prémisses → vérité de la conclusion **si** on les suppose vraies.`,
  },
  1251: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1251)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Une note climatique dit que l'inférence est irréprochable et que chaque fait est vérifié. En logique, cela décrit :

Bonne réponse (index **0**)
**« Un argument sain (raisonnement valide avec prémisses vraies). »**

Pourquoi les autres options échouent
• (A) Un argument sain (raisonnement valide avec prémisses vraies). — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) Un argument valide dont les prémisses peuvent être fausses. — Cela décrit mal ce que la solidité exige ou ce qu’un argument valide peut être.
• (C) Un discours persuasif qui a ému l'auditoire. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (D) Un argument à prémisses vraies mais à forme invalide. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Une note climatique dit que l'inférence est irréprochable et que chaque fait est vérifié. En logique, cela décrit :

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Une note climatique dit que l'inférence est irréprochable et que chaque fait est vérifié. En logique, cela décrit :

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1252: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1252)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Vous corrigez : la forme est valide, mais une prémisse est fausse. L'argument est :

Bonne réponse (index **0**)
**« Non sain (la correction exige validité et prémisses vraies). »**

Pourquoi les autres options échouent
• (A) Non sain (la correction exige validité et prémisses vraies). — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) Sain, car la validité suffit. — On confond **validité** et **solidité** ; la solidité exige aussi des **prémisses vraies**.
• (C) Sain, car une prémisse fausse n'a pas d'importance. — Cela décrit mal ce que la solidité exige ou ce qu’un argument valide peut être.
• (D) Sain si la conclusion est vraie. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Vous corrigez : la forme est valide, mais une prémisse est fausse. L'argument est :

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Vous corrigez : la forme est valide, mais une prémisse est fausse. L'argument est :

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1253: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1253)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Quel ensemble correspond à ce que les logiciens appellent un argument sain ?

Bonne réponse (index **0**)
**« Validité déductive plus prémisses toutes vraies dans le monde réel. »**

Pourquoi les autres options échouent
• (A) Validité déductive plus prémisses toutes vraies dans le monde réel. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) Validité seule, même avec des prémisses fausses. — Cela décrit mal ce que la solidité exige ou ce qu’un argument valide peut être.
• (C) Prémisses vraies seules, même si le schéma est invalide. — Des **prémisses vraies** sans **forme valide** ne suffisent pas à la solidité.
• (D) Ce qui gagne un débat. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Quel ensemble correspond à ce que les logiciens appellent un argument sain ?

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Quel ensemble correspond à ce que les logiciens appellent un argument sain ?

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1254: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1254)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
La correction (soundness) combine :

Bonne réponse (index **0**)
**« Une forme valide et des prémisses vraies. »**

Pourquoi les autres options échouent
• (A) Une forme valide et des prémisses vraies. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) Des prémisses vraies seulement. — Des **prémisses vraies** sans **forme valide** ne suffisent pas à la solidité.
• (C) Une forme valide seulement. — On confond **validité** et **solidité** ; la solidité exige aussi des **prémisses vraies**.
• (D) Une résonance émotionnelle et de la rhétorique. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
La correction (soundness) combine :

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
La correction (soundness) combine :

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1255: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1255)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Si un argument est sain, qu'en est-il de la conclusion ?

Bonne réponse (index **0**)
**« La conclusion doit être vraie (un argument sain infère valablement depuis des prémisses vraies). »**

Pourquoi les autres options échouent
• (A) La conclusion doit être vraie (un argument sain infère valablement depuis des prémisses vraies). — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) La conclusion est probablement vraie. — Ce n’est **pas** dans la définition logique de **solidité** (forme valide + prémisses vraies).
• (C) La conclusion est fausse. — Cela décrit mal ce que la solidité exige ou ce qu’un argument valide peut être.
• (D) Rien — la conclusion est sans importance. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Si un argument est sain, qu'en est-il de la conclusion ?

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Si un argument est sain, qu'en est-il de la conclusion ?

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1256: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1256)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Choisissez la meilleure équivalence : correction =

Bonne réponse (index **0**)
**« Forme préservant la vérité plus entrées vraies. »**

Pourquoi les autres options échouent
• (A) Forme préservant la vérité plus entrées vraies. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) Forme préservant la vérité seulement. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) Entrées vraies seulement. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (D) L'approbation du public. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Choisissez la meilleure équivalence : correction =

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Choisissez la meilleure équivalence : correction =

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1257: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1257)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Une preuve est valide, mais une prémisse cite une étude rétractée. Alors l'argument est :

Bonne réponse (index **0**)
**« Non sain, car une prémisse n'est pas vraie en fait. »**

Pourquoi les autres options échouent
• (A) Non sain, car une prémisse n'est pas vraie en fait. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) Sain, car la forme fonctionne encore. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) Sain, car les études changent souvent. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (D) Sain si les gens croient encore la prémisse. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Une preuve est valide, mais une prémisse cite une étude rétractée. Alors l'argument est :

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Une preuve est valide, mais une prémisse cite une étude rétractée. Alors l'argument est :

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1258: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1258)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Quelle affirmation ne suffit pas pour la correction ?

Bonne réponse (index **0**)
**« L'argument est puissant sur le plan rhétorique. »**

Pourquoi les autres options échouent
• (A) L'argument est puissant sur le plan rhétorique. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) L'argument est valide et chaque prémisse est vraie. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) Les prémisses sont vraies et la forme est valide. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (D) Il est déductivement valide sans prémisse fausse. — Cela décrit mal ce que la solidité exige ou ce qu’un argument valide peut être.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Quelle affirmation ne suffit pas pour la correction ?

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Quelle affirmation ne suffit pas pour la correction ?

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1259: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1259)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Au tribunal : la règle est appliquée correctement et chaque fait est vérifié. Cela illustre :

Bonne réponse (index **0**)
**« La correction (règle correcte plus faits vrais). »**

Pourquoi les autres options échouent
• (A) La correction (règle correcte plus faits vrais). — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) La validité seulement. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) Une forte impression du jury. — Ce n’est **pas** dans la définition logique de **solidité** (forme valide + prémisses vraies).
• (D) Des prémisses vraies avec une règle fallacieuse. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Au tribunal : la règle est appliquée correctement et chaque fait est vérifié. Cela illustre :

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Au tribunal : la règle est appliquée correctement et chaque fait est vérifié. Cela illustre :

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1260: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1260)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Les arguments sains garantissent leur conclusion parce que :

Bonne réponse (index **0**)
**« La validité transmet la vérité depuis des prémisses vraies, et la correction fournit des prémisses vraies. »**

Pourquoi les autres options échouent
• (A) La validité transmet la vérité depuis des prémisses vraies, et la correction fournit des prémisses vraies. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) Ils sont en général courts. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) Ils utilisent des mots compliqués. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (D) Ils évitent les émotions. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Les arguments sains garantissent leur conclusion parce que :

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Les arguments sains garantissent leur conclusion parce que :

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1261: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1261)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Quelle option confond validité et correction ?

Bonne réponse (index **0**)
**« Dire qu'un argument est « sain » seulement parce qu'il est valide. »**

Pourquoi les autres options échouent
• (A) Dire qu'un argument est « sain » seulement parce qu'il est valide. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) Dire que la correction exige validité et prémisses vraies. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) Vérifier si les prémisses sont vraies dans le monde réel. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (D) Vérifier si la conclusion découle nécessairement. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Quelle option confond validité et correction ?

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Quelle option confond validité et correction ?

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1262: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1262)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Un chercheur dit : « Notre modèle est sain. » En cours de logique, la lecture la plus charitable est :

Bonne réponse (index **0**)
**« Le schéma de raisonnement est valide et les hypothèses sont vraies. »**

Pourquoi les autres options échouent
• (A) Le schéma de raisonnement est valide et les hypothèses sont vraies. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) Le modèle est long. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) Le modèle est populaire. — Ce n’est **pas** dans la définition logique de **solidité** (forme valide + prémisses vraies).
• (D) Le modèle est valide mais utilise des hypothèses fausses. — Cela décrit mal ce que la solidité exige ou ce qu’un argument valide peut être.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Un chercheur dit : « Notre modèle est sain. » En cours de logique, la lecture la plus charitable est :

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Un chercheur dit : « Notre modèle est sain. » En cours de logique, la lecture la plus charitable est :

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1263: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1263)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Pour montrer qu'un argument n'est PAS sain, vous pouvez :

Bonne réponse (index **0**)
**« Montrer une prémisse fausse ou un raisonnement invalide. »**

Pourquoi les autres options échouent
• (A) Montrer une prémisse fausse ou un raisonnement invalide. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) Montrer que la conclusion surprend. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) Montrer que les gens n'aiment pas la conclusion. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (D) Montrer que l'argument est valide. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Pour montrer qu'un argument n'est PAS sain, vous pouvez :

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Pour montrer qu'un argument n'est PAS sain, vous pouvez :

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1264: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1264)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
La correction est plus exigeante que la validité car elle exige aussi :

Bonne réponse (index **0**)
**« Que les prémisses soient vraies dans le monde réel. »**

Pourquoi les autres options échouent
• (A) Que les prémisses soient vraies dans le monde réel. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) Que la conclusion surprenne. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) Que l'argument soit court. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (D) Que tout le monde soit d'accord. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
La correction est plus exigeante que la validité car elle exige aussi :

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
La correction est plus exigeante que la validité car elle exige aussi :

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1265: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1265)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Quel cas décrit un argument valide mais non sain ?

Bonne réponse (index **0**)
**« Un modus ponens, mais une prémisse sur le crime est fausse. »**

Pourquoi les autres options échouent
• (A) Un modus ponens, mais une prémisse sur le crime est fausse. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) Un modus ponens avec prémisses vraies. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) Une conclusion vraie tirée au hasard. — Cela décrit mal ce que la solidité exige ou ce qu’un argument valide peut être.
• (D) Une conclusion fausse à cause d'une faute de frappe. — Cela décrit mal ce que la solidité exige ou ce qu’un argument valide peut être.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Quel cas décrit un argument valide mais non sain ?

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Quel cas décrit un argument valide mais non sain ?

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1266: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1266)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Si vous avez établi la correction, vous avez établi :

Bonne réponse (index **0**)
**« \\u00c0 la fois la validité et la vérité des prémisses. »**

Pourquoi les autres options échouent
• (A) \\u00c0 la fois la validité et la vérité des prémisses. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) La validité seulement. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) La vérité des prémisses seulement. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (D) Une signification statistique. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Si vous avez établi la correction, vous avez établi :

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Si vous avez établi la correction, vous avez établi :

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1267: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1267)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Un argument sain ne peut pas avoir :

Bonne réponse (index **0**)
**« Une prémisse fausse (par définition de la correction). »**

Pourquoi les autres options échouent
• (A) Une prémisse fausse (par définition de la correction). — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) Une forme valide. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) Une conclusion vraie. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (D) Plusieurs prémisses. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Un argument sain ne peut pas avoir :

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Un argument sain ne peut pas avoir :

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1268: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1268)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Quiz de philo : les arguments « sains » sont l'étalon car ils combinent :

Bonne réponse (index **0**)
**« Une bonne structure avec l'exactitude factuelle des prémisses. »**

Pourquoi les autres options échouent
• (A) Une bonne structure avec l'exactitude factuelle des prémisses. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) La rhétorique et le charisme. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) La longueur et les notes de bas de page. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (D) La probabilité et la chance. — Ce n’est **pas** dans la définition logique de **solidité** (forme valide + prémisses vraies).`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Quiz de philo : les arguments « sains » sont l'étalon car ils combinent :

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Quiz de philo : les arguments « sains » sont l'étalon car ils combinent :

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1269: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1269)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Complétez : Sain = valide + ___

Bonne réponse (index **0**)
**« Prémisses vraies. »**

Pourquoi les autres options échouent
• (A) Prémisses vraies. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) Prémisses populaires. — Ce n’est **pas** dans la définition logique de **solidité** (forme valide + prémisses vraies).
• (C) Prémisses émotionnelles. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (D) Prémisses longues. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Complétez : Sain = valide + ___

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Complétez : Sain = valide + ___

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1270: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1270)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Laquelle est l'intruse pour la notion de correction ?

Bonne réponse (index **0**)
**« L'argument a fait le buzz en ligne. »**

Pourquoi les autres options échouent
• (A) L'argument a fait le buzz en ligne. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) Chaque prémisse est vraie. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) L'argument est déductivement valide. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (D) Les prémisses impliquent ensemble la conclusion. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Laquelle est l'intruse pour la notion de correction ?

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Laquelle est l'intruse pour la notion de correction ?

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1271: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1271)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Un argument « SAIN » est :

Bonne réponse (index **0**)
**« Valide + Prémisses vraies. »**

Pourquoi les autres options échouent
• (A) Valide + Prémisses vraies. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) Juste valide. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) Juste vrai. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (D) Convaincant. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Un argument « SAIN » est :

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Un argument « SAIN » est :

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1272: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1272)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Audit logiciel : le protocole est correctement implémenté et les journaux reflètent le trafic réel. Cela correspond à :

Bonne réponse (index **0**)
**« Un raisonnement sain. »**

Pourquoi les autres options échouent
• (A) Un raisonnement sain. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) La validité sans vérité des entrées. — Ce n’est **pas** solide : il faut des **prémisses vraies** (ici : entrées qui reflètent la réelle), pas seulement une forme valide.
• (C) La persuasion sans preuve. — **Rhétorique** ; la solidité est un statut **logique**, pas de persuasion.
• (D) Un schéma invalide avec des journaux exacts. — Des **faits** exacts ne compensent pas une **forme invalide** ; l’argument n’est **pas solide**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. L’audit associe une **règle correctement appliquée** (structure valide) à des **entrées qui correspondent au réel** (prémisses vraies sur le trafic).
2. C’est exactement le couple **logique + faits** que nomme la solidité.
3. **Validité sans vérité des entrées** omet la précision factuelle ; une **forme invalide avec journaux exacts** casse encore la solidité.

**Énoncé**
Audit logiciel : le protocole est correctement implémenté et les journaux reflètent le trafic réel. Cela correspond à :

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• **Validité sans vérité des entrées** : analogue à un raisonnement **valide mais non solide** si les prémisses sur le monde sont fausses ou indéterminées.
• La **persuasion** mélange **croyance** et **solidité**.
• **Schéma invalide avec faits vrais** : le cas « prémisses vraies, mauvais schéma » — **non solide** même si chaque ligne est vraie.

**Cette question**
Audit logiciel : le protocole est correctement implémenté et les journaux reflètent le trafic réel. Cela correspond à :

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1273: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1273)

Ce que demande la question
Repérer pourquoi des **prémisses toutes vraies** ne suffisent **pas** à la **solidité**.

**Scénario de cette carte**
Un étudiant dit : « Toutes les prémisses sont vraies, donc l'argument est sain. » Cela peut encore échouer si :

Bonne réponse (index **0**)
**« Le schéma d'inférence est invalide. »**

Pourquoi les autres options échouent
• (A) Le schéma d'inférence est invalide. — **Correct :** la solidité exige **forme valide** **et** **prémisses vraies** ; prémisses vraies + schéma **invalide** ⇒ **non solide**.
• (B) La conclusion est impopulaire. — **Rhétorique** ; la popularité ne définit pas la solidité.
• (C) Les prémisses sont trop courtes. — La **longueur** est sans effet ici ; comptent la **validité** et la **vérité**.
• (D) Le discours utilise du jargon. — Le **style** est sans effet sur la solidité logique.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies**.

**Déroulé**
1. L’erreur de l’étudiant : prendre la **vérité des prémisses** pour suffisante. Il manque la **validité déductive** (le bon **schéma** d’inférence).
2. Si le schéma est **invalide**, on peut avoir des **prémisses vraies** sans droit à la conclusion — donc **pas solide**.
3. **Impopularité**, **longueur** ou **jargon** ne changent pas l’analyse logique.

**Énoncé**
Un étudiant dit : « Toutes les prémisses sont vraies, donc l'argument est sain. » Cela peut encore échouer si :

**Synthèse**
**Solidité = valide + prémisses vraies**. Sans l’un des deux, le raccourci de l’étudiant échoue.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
La solidité exige à la fois une **forme préservant la vérité** (validité) **et** la **vérité** des prémisses. Des **prémisses vraies** sans validité, c’est comme des **axiomes vrais** couplés à une **règle de preuve** invalide : le tout reste **non solide**.

**Distracteurs typiques**
Ils testent si l’on confond traits **sociaux** ou **stylistiques** avec la **structure** logique.

**Cette question**
Un étudiant dit : « Toutes les prémisses sont vraies, donc l'argument est sain. » Cela peut encore échouer si :

**Note**
Dans la prose réelle, la **forme invalide** est souvent masquée ; il faut **extraire** le schéma et vérifier la **validité** avant de revendiquer la solidité.`,
  },
  1274: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1274)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Note de tri : la règle thérapeutique est appliquée correctement et les faits sont exacts. Cela illustre :

Bonne réponse (index **0**)
**« Un raisonnement sain. »**

Pourquoi les autres options échouent
• (A) Un raisonnement sain. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) La validité sans vérité. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) Un pur appel émotionnel. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (D) Un schéma invalide avec des faits vrais. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Note de tri : la règle thérapeutique est appliquée correctement et les faits sont exacts. Cela illustre :

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Note de tri : la règle thérapeutique est appliquée correctement et les faits sont exacts. Cela illustre :

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1275: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1275)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
La correction exclut quelle possibilité ?

Bonne réponse (index **0**)
**« Un raisonnement valide à partir de fausses prémisses présenté comme décisif. »**

Pourquoi les autres options échouent
• (A) Un raisonnement valide à partir de fausses prémisses présenté comme décisif. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) Un raisonnement valide à partir de prémisses vraies. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) Des prémisses vraies avec une forme valide. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (D) Une conclusion vraie par inférence valide. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
La correction exclut quelle possibilité ?

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
La correction exclut quelle possibilité ?

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1276: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1276)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Un argument peut être valide mais non sain. Ce que la correction ajoute :

Bonne réponse (index **0**)
**« La vérité réelle des prémisses. »**

Pourquoi les autres options échouent
• (A) La vérité réelle des prémisses. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) Une voix plus forte. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) Plus d'exemples. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (D) Un titre astucieux. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Un argument peut être valide mais non sain. Ce que la correction ajoute :

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Un argument peut être valide mais non sain. Ce que la correction ajoute :

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1277: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1277)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
En une ligne : la correction exige la bonne forme et :

Bonne réponse (index **0**)
**« Les bons faits dans les prémisses. »**

Pourquoi les autres options échouent
• (A) Les bons faits dans les prémisses. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) Le bon public. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) La bonne police de caractères. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (D) La bonne intuition. — Ce n’est **pas** dans la définition logique de **solidité** (forme valide + prémisses vraies).`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
En une ligne : la correction exige la bonne forme et :

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
En une ligne : la correction exige la bonne forme et :

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1278: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1278)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Pourquoi se soucier de la correction, pas seulement de la validité ?

Bonne réponse (index **0**)
**« La validité seule peut reposer sur de fausses prémisses. »**

Pourquoi les autres options échouent
• (A) La validité seule peut reposer sur de fausses prémisses. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) La correction ignore la vérité. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) La validité est plus facile, donc elle suffit. — On confond **validité** et **solidité** ; la solidité exige aussi des **prémisses vraies**.
• (D) La correction n'est qu'une question de style. — Ce n’est **pas** dans la définition logique de **solidité** (forme valide + prémisses vraies).`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Pourquoi se soucier de la correction, pas seulement de la validité ?

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Pourquoi se soucier de la correction, pas seulement de la validité ?

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1279: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1279)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Un podcast dit qu'un argument est « sain ». Les auditeurs attentifs entendent :

Bonne réponse (index **0**)
**« Une structure valide avec des prémisses vraies. »**

Pourquoi les autres options échouent
• (A) Une structure valide avec des prémisses vraies. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) Seulement de l'assurance. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) Seulement de l'émotion. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (D) Seulement de la popularité. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Un podcast dit qu'un argument est « sain ». Les auditeurs attentifs entendent :

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Un podcast dit qu'un argument est « sain ». Les auditeurs attentifs entendent :

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1280: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1280)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Associez : « toutes les prémisses vraies » + « forme valide » =

Bonne réponse (index **0**)
**« Argument sain. »**

Pourquoi les autres options échouent
• (A) Argument sain. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) Argument invalide. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) Seulement la force inductive. — Ce n’est **pas** dans la définition logique de **solidité** (forme valide + prémisses vraies).
• (D) Une opinion. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Associez : « toutes les prémisses vraies » + « forme valide » =

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Associez : « toutes les prémisses vraies » + « forme valide » =

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1281: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1281)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Qu'est-ce qui ruine la correction immédiatement ?

Bonne réponse (index **0**)
**« Toute prémisse fausse dans l'ensemble de soutien. »**

Pourquoi les autres options échouent
• (A) Toute prémisse fausse dans l'ensemble de soutien. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) Une conclusion longue. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) Un ton ennuyeux. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (D) Un vocabulaire technique. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Qu'est-ce qui ruine la correction immédiatement ?

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Qu'est-ce qui ruine la correction immédiatement ?

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1282: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1282)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
La correction concerne :

Bonne réponse (index **0**)
**« La justesse de la logique et des faits. »**

Pourquoi les autres options échouent
• (A) La justesse de la logique et des faits. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) La bonne ambiance. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) Les applaudissements. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (D) Un texte court. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
La correction concerne :

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
La correction concerne :

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1283: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1283)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Un étudiant dit : « C'est valide, donc c'est sain. » L'erreur :

Bonne réponse (index **0**)
**« La validité ne garantit pas des prémisses vraies. »**

Pourquoi les autres options échouent
• (A) La validité ne garantit pas des prémisses vraies. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) La validité est impossible. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) La correction ignore les prémisses. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (D) La vérité n'a pas d'importance. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Un étudiant dit : « C'est valide, donc c'est sain. » L'erreur :

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Un étudiant dit : « C'est valide, donc c'est sain. » L'erreur :

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1284: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1284)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Complétez : pas de prémisse fausse + schéma valide ⇒

Bonne réponse (index **0**)
**« Argument sain (et conclusion vraie, la validité donnée). »**

Pourquoi les autres options échouent
• (A) Argument sain (et conclusion vraie, la validité donnée). — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) Argument invalide. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) Une opinion pure. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (D) Un tour rhétorique. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Complétez : pas de prémisse fausse + schéma valide ⇒

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Complétez : pas de prémisse fausse + schéma valide ⇒

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1285: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1285)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Rapport d'ingénierie : les calculs suivent le bon théorème, mais une valeur mesurée est mal saisie. La preuve est :

Bonne réponse (index **0**)
**« Valide mais non saine. »**

Pourquoi les autres options échouent
• (A) Valide mais non saine. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) Saine. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) Ni valide ni saine. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (D) Saine si la faute est petite. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Rapport d'ingénierie : les calculs suivent le bon théorème, mais une valeur mesurée est mal saisie. La preuve est :

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Rapport d'ingénierie : les calculs suivent le bon théorème, mais une valeur mesurée est mal saisie. La preuve est :

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1286: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1286)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
La correction est plus stricte que la validité comme un repas sain est plus strict qu'

Bonne réponse (index **0**)
**« Une recette jolie sur le papier mais avec des ingrédients avariés. »**

Pourquoi les autres options échouent
• (A) Une recette jolie sur le papier mais avec des ingrédients avariés. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) Une recette avec seulement des ingrédients frais. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) Un restaurant populaire. — Ce n’est **pas** dans la définition logique de **solidité** (forme valide + prémisses vraies).
• (D) Un restaurant rapide. — Ce n’est **pas** dans la définition logique de **solidité** (forme valide + prémisses vraies).`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
La correction est plus stricte que la validité comme un repas sain est plus strict qu'

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
La correction est plus stricte que la validité comme un repas sain est plus strict qu'

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1287: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1287)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Le meilleur portrait d'un argument valide mais non sain :

Bonne réponse (index **0**)
**« Une forme logique correcte avec au moins une prémisse fausse. »**

Pourquoi les autres options échouent
• (A) Une forme logique correcte avec au moins une prémisse fausse. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) Une conclusion nécessairement fausse. — Cela décrit mal ce que la solidité exige ou ce qu’un argument valide peut être.
• (C) Pas de prémisses. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (D) Pas de conclusion. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Le meilleur portrait d'un argument valide mais non sain :

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Le meilleur portrait d'un argument valide mais non sain :

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1288: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1288)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Quand les philosophes disent qu'un argument est sain, ils ne veulent pas dire seulement :

Bonne réponse (index **0**)
**« Qu'il est persuasif ou largement cru. »**

Pourquoi les autres options échouent
• (A) Qu'il est persuasif ou largement cru. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) Qu'il a des prémisses vraies et une forme valide. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) Qu'il est déductivement valide. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (D) Qu'il mène à une conclusion vraie. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Quand les philosophes disent qu'un argument est sain, ils ne veulent pas dire seulement :

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Quand les philosophes disent qu'un argument est sain, ils ne veulent pas dire seulement :

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1289: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1289)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Les prémisses d'un argument sain sont :

Bonne réponse (index **0**)
**« Vraies dans le monde réel, pas seulement supposées pour un exercice. »**

Pourquoi les autres options échouent
• (A) Vraies dans le monde réel, pas seulement supposées pour un exercice. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) Supposées vraies pour une contradiction. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) Fausses mais plausibles. — Cela décrit mal ce que la solidité exige ou ce qu’un argument valide peut être.
• (D) Vraies seulement dans la fiction. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Les prémisses d'un argument sain sont :

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Les prémisses d'un argument sain sont :

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1290: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1290)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
La validité est la serrure ; la correction vérifie aussi :

Bonne réponse (index **0**)
**« Si les clés (prémisses) sont réelles. »**

Pourquoi les autres options échouent
• (A) Si les clés (prémisses) sont réelles. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) Si la serrure brille. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) Si les gens aiment la serrure. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (D) Si la serrure a une marque. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
La validité est la serrure ; la correction vérifie aussi :

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
La validité est la serrure ; la correction vérifie aussi :

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1291: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1291)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Si vous réfutez une prémisse, vous montrez que l'argument est :

Bonne réponse (index **0**)
**« Non sain (peut-être encore valide). »**

Pourquoi les autres options échouent
• (A) Non sain (peut-être encore valide). — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) Sain. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) Invalide automatiquement. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (D) Vide sur le plan émotionnel. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Si vous réfutez une prémisse, vous montrez que l'argument est :

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Si vous réfutez une prémisse, vous montrez que l'argument est :

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1292: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1292)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Correction ≡

Bonne réponse (index **0**)
**« Valide ∧ prémisses vraies. »**

Pourquoi les autres options échouent
• (A) Valide ∧ prémisses vraies. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) Valide seulement. — On confond **validité** et **solidité** ; la solidité exige aussi des **prémisses vraies**.
• (C) Prémisses vraies seulement. — Des **prémisses vraies** sans **forme valide** ne suffisent pas à la solidité.
• (D) Convaincant seulement. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Correction ≡

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Correction ≡

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1293: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1293)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Un argument sain à conclusion controversée exige encore :

Bonne réponse (index **0**)
**« Des prémisses vraies et une forme valide — la controverse ne suffit pas. »**

Pourquoi les autres options échouent
• (A) Des prémisses vraies et une forme valide — la controverse ne suffit pas. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) Que tout le monde soit d'accord. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) Que personne ne pose de questions. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (D) Que la conclusion soit populaire. — Ce n’est **pas** dans la définition logique de **solidité** (forme valide + prémisses vraies).`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Un argument sain à conclusion controversée exige encore :

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Un argument sain à conclusion controversée exige encore :

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1294: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1294)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Quel couple suffit pour la correction ?

Bonne réponse (index **0**)
**« Argument valide + toutes les prémisses vraies. »**

Pourquoi les autres options échouent
• (A) Argument valide + toutes les prémisses vraies. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) Argument valide + prémisses populaires. — Ce n’est **pas** dans la définition logique de **solidité** (forme valide + prémisses vraies).
• (C) Prémisses vraies + schéma fallacieux. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (D) \\u00c9motion + statistiques. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Quel couple suffit pour la correction ?

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Quel couple suffit pour la correction ?

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1295: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1295)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Contrairement à la seule validité, la correction ancre l'argument dans :

Bonne réponse (index **0**)
**« La vérité réelle de ses prémisses. »**

Pourquoi les autres options échouent
• (A) La vérité réelle de ses prémisses. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) La longueur réelle de ses prémisses. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) La célébrité réelle de son auteur. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (D) L'humeur réelle de la salle. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Contrairement à la seule validité, la correction ancre l'argument dans :

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Contrairement à la seule validité, la correction ancre l'argument dans :

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1296: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1296)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Un critique dit : « Votre logique est bonne ; vos faits ne le sont pas. » Il attaque :

Bonne réponse (index **0**)
**« La correction (vérité des prémisses), tout en accordant la validité. »**

Pourquoi les autres options échouent
• (A) La correction (vérité des prémisses), tout en accordant la validité. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) La validité seulement. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) Le choix de police. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (D) Le ton de la conclusion. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Un critique dit : « Votre logique est bonne ; vos faits ne le sont pas. » Il attaque :

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Un critique dit : « Votre logique est bonne ; vos faits ne le sont pas. » Il attaque :

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1297: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1297)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
En bref : la correction demande « est-ce que ça suit ? » et :

Bonne réponse (index **0**)
**« « Les points de départ sont-ils vrais ? » »**

Pourquoi les autres options échouent
• (A) « Les points de départ sont-ils vrais ? » — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) « Est-ce court ? » — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) « Est-ce fort ? » — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (D) « Est-ce nouveau ? » — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
En bref : la correction demande « est-ce que ça suit ? » et :

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
En bref : la correction demande « est-ce que ça suit ? » et :

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1298: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1298)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Quelle recette mène à la correction ?

Bonne réponse (index **0**)
**« Vérifier d'abord la validité, puis chaque prémisse dans le monde. »**

Pourquoi les autres options échouent
• (A) Vérifier d'abord la validité, puis chaque prémisse dans le monde. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) D'abord l'ambiance. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) D'abord la popularité. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (D) D'abord la longueur. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Quelle recette mène à la correction ?

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Quelle recette mène à la correction ?

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1299: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1299)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
Si les prémisses sont vraies et l'argument valide, l'argument est :

Bonne réponse (index **0**)
**« Sain. »**

Pourquoi les autres options échouent
• (A) Sain. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) Invalide. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (C) Purement émotionnel. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.
• (D) Purement rhétorique. — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
Si les prémisses sont vraies et l'argument valide, l'argument est :

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
Si les prémisses sont vraies et l'argument valide, l'argument est :

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },
  1300: {
    beginner: `Approfondi (Débutant) — solidité (*soundness*) (ID 1300)

Ce que demande la question
Choisir l’option qui correspond à la **solidité** : **validité déductive** + **prémisses vraies** (donc conclusion vraie, si l’argument est valide).

**Scénario de cette carte**
La correction comble l'écart entre « bonne forme » et :

Bonne réponse (index **0**)
**« « contenu vrai » dans les prémisses. »**

Pourquoi les autres options échouent
• (A) « contenu vrai » dans les prémisses. — **Correct :** correspond à **validité + prémisses vraies** (solidité).
• (B) « bon marketing ». — Ce n’est **pas** dans la définition logique de **solidité** (forme valide + prémisses vraies).
• (C) « bonne chance ». — Ce n’est **pas** dans la définition logique de **solidité** (forme valide + prémisses vraies).
• (D) « bon go\\u00fbt ». — Cela ne correspond pas à : **solidité** = **validité déductive** + **prémisses vraies**.`,
    intermediate: `Approfondi (Intermédiaire) — solidité

Définition (cours)
**Solide** = **argument valide** + **toutes les prémisses vraies** (au sens pertinent).

**Déroulé**
1. Seule la **validité** peut encore être **non solide** si une prémisse est fausse.
2. Seules des **prémisses vraies** peuvent encore être **non solides** si la forme est **invalide**.
3. La **solidité** combine **bonne forme** + **faits vrais** dans les prémisses.

**Énoncé**
La correction comble l'écart entre « bonne forme » et :

**Synthèse**
**Solidité = valide + prémisses vraies**.`,
    expert: `Approfondi (Expert) — solidité

**Formulation**
Un argument de prémisses (P_1..P_n) et conclusion (C) est **solide** ssi il est **déductivement valide** et chaque (P_i) est **vraie** (sous l’interprétation visée).

**Distracteurs typiques**
• croire que la **validité** suffit (en oubliant des prémisses fausses),
• croire que la **vérité** suffit (en oubliant une forme invalide),
• confondre **succès rhétorique** et **solidité** logique.

**Cette question**
La correction comble l'écart entre « bonne forme » et :

**Note**
Les prémisses « vraies » sont un idéal de manuel ; dans la vie réelle, l’évidence est souvent **incertaine** — mais la **définition** de la solidité reste le joint **validité + vérité**.`,
  },};

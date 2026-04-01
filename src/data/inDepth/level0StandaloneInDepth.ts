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
    beginner: `Single-use plastics

1. Look for one option that says what we should do and gives a reason someone could debate—not only a fact or a mood.

2. “Plastics are everywhere” or “wrap exists in stores” describes the situation; it does not argue for action.

3. Disliking bags is a personal reaction, not a harm-based reason for policy.

4. The line that bans plastics because they harm oceans gives a consequence as support for a policy. That is an argument here: a “should” plus something offered in its favor.`,
    intermediate: `Single-use plastics

1. An argument links a premise to a conclusion that someone could dispute.

2. On this question, the ban line does that: ocean harm supports a ban. Other options stop at description or taste without a “should.”

3. Example: “Hospital waste spiked last quarter, so the clinic should separate sharps before pickup.” You could debate the fix, but it is still problem plus response. “Hospital waste is high” is data only until someone says what ought to change.

Description and preference are fine; alone they are not the structured support this lesson names.`,
    expert: `Single-use plastics

Facts can support arguments, but a list of facts is not automatically an argument. “Plastics are everywhere” can feed an argument if someone adds what we ought to do; alone it is usually reporting, not a normative argument.

In the correct option, the conclusion is a strong policy on single-use plastics; the premise is harm (e.g. ocean pollution). “Because” signals that harm is a reason for the policy, not mere background.

Distractors skip the step from facts to policy (ubiquity, existence) or use only private dislike without a public reason. The keyed option is the one that actually gives reasons for a policy.`,
  },

  1002: {
    beginner: `Late bus, transit app

1. An argument here has something going wrong and something that should change because of it.

2. The bus being late every day is the problem; real-time updates in the app are the proposed fix. The “so” ties better information to unreliable schedules.

3. Painting buses, liking transit, or saying an app exists does not link lateness to a remedy. Only the line that connects the failure to a concrete change counts.`,
    intermediate: `Late bus, transit app

1. This card pairs a repeated service failure with a concrete change (live data): problem, then intervention.

2. Example: “Wait times in triage doubled, so the clinic should add a nurse at intake.” Same shape; you could debate cost, but it is still an argument. “The clinic has a check-in app” is trivia until someone says what should change because of wait times.

Linking a pattern of failure to a targeted change is what the lesson wants; bare existence or taste is not enough.`,
    expert: `Late bus, transit app

Saying “the bus is always late” can start an argument, but you need a prescription defended. The keyed option gives both: lateness supports offering real-time information.

Premise: schedules are unreliable in practice. Conclusion: the app should show real-time data so riders are not stuck with stale timetables.

Distractors (paint, app exists, loving transit) do not connect to punctuality. The quiz only asks whether the line is structured as reason-giving, not whether the policy is the best one.`,
  },

  1003: {
    beginner: `Campus Wi-Fi

1. Find the line where something is wrong on this network and someone with authority should act.

2. Dropped connections are the failure; adding access points is the fix. “I hate losing Wi-Fi” vents emotion without arguing. “Wi-Fi exists” is not a fix. “Wireless beats wired” ignores this campus’s dropouts.

3. Only the option that goes from bad service here to more hardware matches the lesson.`,
    intermediate: `Campus Wi-Fi

1. Tie a local fault (drops) to an institutional remedy (more access points).

2. Example: “The projector overheats every lecture, so AV should replace the lamp before finals.” Symptom, then responsible action. “I hate blurry slides” is not a maintenance argument.

Generic tech slogans do not speak to the actual problem; the keyed option does.`,
    expert: `Campus Wi-Fi

Preferring wireless in general is not an argument about this campus unless it cites the real failure (here: connections dropping). The keyed option grounds the fix in observed dropout.

Premise: service is unstable. Conclusion: the university should add capacity (e.g. more APs). Distractors offer feeling, bare existence, or abstract comparison without that link.

In real life the fix might be backhaul or config; the question only asks which line is an argument, not the best engineering answer.`,
  },

  1004: {
    beginner: `Vending machines

1. Empty shelves signal a problem; restocking twice a day is what the sentence defends as the response.

2. Preferring snacks, ranking snacks over salads, or saying machines exist does not explain why refill frequency should change.

3. Pick the line that starts from running out and ends on how often to restock.`,
    intermediate: `Vending machines

1. Stockouts support a rule about how often to restock.

2. Example: “The printer is empty every Monday, so refill toner on Friday afternoons.” Recurring empty state, then a schedule change. “I love color printing” does not argue logistics.

Taste or “machines exist” does not replace linking shortage to a process fix.`,
    expert: `Vending machines

Liking certain snacks or noting that vending machines exist does not argue inventory policy by itself. The keyed line is operational: a pattern of emptiness supports a replenishment rule.

Premise: machines run empty. Conclusion: restock more often (e.g. twice daily). Other options skip the link between campus vending conditions and a prescriptive schedule.`,
  },

  1005: {
    beginner: `Library hours during finals

1. The strong line ties exam-week crowding to longer hours: busy stacks during finals support staying open until midnight.

2. Loving libraries, praising books, or liking midnight in general does not give a finals-specific reason to extend hours.

3. Choose the option that moves from pressure during exams to extending service.`,
    intermediate: `Library hours during finals

1. Surge demand during a fixed period supports temporary longer access.

2. Example: “Storm warnings are up, so the shelter stays open past normal closing.” Same pattern. “I like community centers” is not a capacity argument.

Warm feelings do not replace observed overload as a reason to change hours.`,
    expert: `Library hours during finals

Sentiment about libraries or books is not the same as an argument about service capacity. The keyed option uses peak load: unusual pressure during finals, then longer hours.

Premise: unusually heavy use during exams. Conclusion: extend closing (e.g. to midnight). Distractors lack exam-specific pressure or a clear policy move.`,
  },

  1006: {
    beginner: `Bike lanes at intersections

1. The argument names a danger (the lane disappears and riders merge into traffic) and a city-level fix (complete the lane through the intersection).

2. Fun bikes, paint on the ground, or “intersections exist” do not explain why layout should change.

3. Pick the line that connects broken continuity to finishing the facility.`,
    intermediate: `Bike lanes at intersections

1. A design gap (lane ends) is the premise; completing the facility is the conclusion.

2. Example: “The sidewalk ends at the ditch, so the county should add a bridge link.” Same harm-reduction shape. “I enjoy walking” does not argue for construction.

Enthusiasm or bare facts about paint are not a safety argument until hazard plus remedy appear.`,
    expert: `Bike lanes at intersections

Liking cycling or noting painted lanes does not establish risk where the lane stops. The keyed line treats a foreseeable merge conflict as a reason to extend or protect the lane through the intersection.

Premise: riders are exposed where the lane ends. Conclusion: the city should complete the facility. Finer design debates (protected intersection vs. paint) are not what this identification question tests.`,
  },

  1007: {
    beginner: `LED streetlights

1. The strong line says LEDs use less energy, so the city should retrofit streetlights: a public decision backed by efficiency.

2. Tall poles, personal brightness taste, or “electricity exists” do not argue for a retrofit program.

3. Choose the option that chains lower energy use to municipal action.`,
    intermediate: `LED streetlights

1. Energy performance supports spending on new fixtures.

2. Example: “Insulation cuts heat loss, so the district should upgrade windows in the oldest buildings.” Measured gain, then policy. “I like cozy rooms” is not an energy case.

Aesthetics or noting that power exists does not replace efficiency-to-retrofit reasoning.`,
    expert: `LED streetlights

Preferring bright light or saying electricity matters does not make an efficiency case for buying fixtures. The keyed line ties lower consumption to a normative retrofit.

The technology attribute (less energy) is offered as a reason for a public works decision. Light pollution or payback debates are not required to see the line as an argument.`,
  },

  1008: {
    beginner: `Cafeteria food waste

1. The answer ties untouched food on plates to smaller portions: waste is the evidence; portion size is the proposed fix.

2. Wanting dessert, feeling sad about waste, or saying cafeterias exist does not say what should change and why.

3. The keyed line does both.`,
    intermediate: `Cafeteria food waste

1. A waste pattern supports changing portions or menu design.

2. Example: “Attendees leave half-full bottles in every row, so offer refill stations instead of pre-poured jugs.” Observed discard, then an operational change. “Waste makes me sad” is not logistics by itself.

Moral discomfort helps motivation; the lesson still wants problem linked to a specific lever (here, portion size).`,
    expert: `Cafeteria food waste

Disapproving of waste is not the same as naming an instrument. The keyed line ties untouched food to portion sizing as a design response.

Distractors stop at preference, emotion without remedy, or existence; none support portion policy the way the correct option does.`,
  },

  1009: {
    beginner: `Hybrids and air quality

1. Find the line that connects lower emissions to cleaner local air: tailpipe output affects what people breathe nearby.

2. Quiet engines, loving to drive, or “technology exists” skip the pollution-to-air link.

3. Only the option that moves from reduced emissions to air-quality improvement fits.`,
    intermediate: `Hybrids and air quality

1. You need a mechanism (emissions) and an outcome (air people breathe).

2. Example: “Scrubbers cut sulfur, so asthma admissions near the plant should fall.” Source reduction, then breathable air. “I like factories” is not an air-chemistry argument.

Sound or personal taste does not replace the emissions-to-air bridge.`,
    expert: `Hybrids and air quality

Quiet operation is not the same as lower pollution. The keyed line uses emissions to support better local air quality.

Premise: hybrids cut relevant emissions (versus an implied comparison). Conclusion: local air improves, other things equal. Weather and fleet mix are outside this identification exercise.`,
  },

  1010: {
    beginner: `Remote work and overhead

1. The correct line says less office space is needed, so overhead (rent, utilities, similar fixed costs) should fall: fewer desks leased, lower recurring bills.

2. Video tools alone, loving working from home, or “offices exist” do not build the space-to-cost link.

3. Pick the option that ties distributed work to lower fixed spend.`,
    intermediate: `Remote work and overhead

1. Reduced real-estate need supports lower overhead.

2. Example: “The warehouse lease is half empty, so sublet and cut facility spend.” Same asset-light logic. “I like Zoom backgrounds” does not touch the balance sheet.

Tech mentions or comfort do not replace leased footprint to overhead reasoning.`,
    expert: `Remote work and overhead

Collaboration tools can enable remote work, but overhead reasoning needs space and recurring cost. The keyed line makes lease and utilities explicit.

Premise: remote work cuts required office capacity. Conclusion: overhead falls, other things equal. Distractors skip the real-estate-to-fixed-cost bridge.`,
  },

  1011: {
    beginner: `Organic farming and soil health

1. The prompt wants one line that ties what organic farming avoids or does to what happens to the soil over time. The keyed sentence says avoiding synthetic pesticides is the reason long-term soil health is preserved.

2. Pretty apples, a milk preference, or noting that soil comes in types never connects farming practice to soil condition.

3. Only the line that moves from organic practice to a soil outcome fits.`,
    intermediate: `Organic farming and soil health

1. On this item, “so” links method (no synthetic pesticides) to outcome (soil stays healthy in the long run).

2. Example: “Cover crops hold moisture in the field, so this farm should plant rye before corn.” Another practice-to-soil story; you could debate agronomy, but the shape is still premise plus supported claim. “I like walking in cornfields” does not argue soil policy.

Looks and tastes are not soil arguments until they cite a mechanism tied to the ground.`,
    expert: `Organic farming and soil health

Liking organic branding or admiring apples is not an argument about soil. The keyed option connects agronomic practice to soil health.

M = organic methods avoid synthetic pesticides; S = those methods help preserve long-term soil health. The exercise does not grade agronomic truth—only whether M is offered as support for S.

Distractors: aesthetic, dietary preference, and generic geography lack the practice-to-soil-effect relation.`,
  },

  1012: {
    beginner: `Public transport and traffic

1. You need a line that argues transit helps traffic—not only that trains are long or that rush hour is busy.

2. The correct option says moving more people per vehicle so congestion eases: fewer cars per person on the road is the implicit story.

3. Liking the subway or observing that traffic exists does not defend a transit benefit; “trains are long” is description without a traffic claim.`,
    intermediate: `Public transport and traffic

1. Occupancy efficiency is the premise; less congestion is the conclusion.

2. Example: “The ferry carries forty cars per trip, so shifting riders onto it should free lane space on the bridge.” Different mode, same systems logic: bundle demand, fewer vehicles fighting for asphalt. “I love ferries” is not that argument.

Personal enjoyment and bare traffic facts do not substitute for transit attribute to road crowding reasoning.`,
    expert: `Public transport and traffic

Noting that traffic exists or that trains are long does not establish that transit reduces congestion. The keyed line makes a comparative systems claim (people per vehicle, fewer vehicles per capita on the network), other things equal.

Land use, pricing, and induced demand matter in real policy; the quiz only asks which utterance is an argument, not whether it wins an economics seminar.`,
  },

  1013: {
    beginner: `Solar panels and energy bills

1. The answer is the option that says panels make power from sunlight, so your bills should drop—generation on your roof means buying less from the grid.

2. Shiny panels, vague desire, or “electricity is important” never connect production to money.

3. Only that line does.`,
    intermediate: `Solar panels and energy bills

1. This stem needs a path from physics (sunlight to electricity) to household cost (lower monthly bills).

2. Example: “This factory’s heat-recovery unit captures steam, so its fuel line item should shrink.” Same genre: on-site resource to spending, without repeating solar. “I want a fancy boiler” is not a bill argument.

Sparkle and wishlists do not argue generation to expenditure; the keyed option does.`,
    expert: `Solar panels and energy bills

Wanting panels or calling electricity important is not a bill mechanism by itself. The keyed line ties on-site generation to reduced purchases from the utility (capital cost ignored at this level).

Distractor taxonomy: aesthetic, volitional, and generic importance claims skip the production–expenditure bridge.`,
  },

  1014: {
    beginner: `Scene: History

1. The word History in the scene label is scenery. The real argument is the line about artifacts: they are fragile, so they need careful handling—a material fact as the reason for a handling rule.

2. Preferring History, bare boosterism, or History exists never give a because for how to treat objects.

3. The fragility line does.`,
    intermediate: `Scene: History

1. On this card, vulnerability supports a care norm.

2. Example: “Glass negatives warp in dry air, so storage should stay at stable humidity.” Same museum logic, different risk—not repeating fragile artifacts from the stem. “I love archives” is not a preservation argument.

Scene labels set mood; the skill is spotting premise to prescription in the actual sentence.`,
    expert: `Scene: History

Preference for a subject or existence claims do not argue handling protocols. The keyed option uses fragility as the warrant for care norms.

F = artifacts are fragile; H = they require careful handling. Distractors lack explicit support from a premise tied to the conclusion.`,
  },

  1015: {
    beginner: `Scene: Art

1. The line that counts gives a color fact, then a mixing instruction: red and blue make purple, so mix them to get that hue. One part is offered as the reason for the other.

2. Preferring Art, declaring Art better without criteria, or saying Art exists does not structure reason to action or result the way the color-mix line does.`,
    intermediate: `Scene: Art

1. Here a palette rule backs a procedure.

2. Example: “Two parts resin to one part hardener sets hard, so measure in that ratio before pouring.” Workshop chemistry instead of paint—not the red/blue mix from the question. “I love workshops” is not the argument.

Even a one-line studio tip can be an argument when because-style support is present.`,
    expert: `Scene: Art

Taste for a subject or existence statements do not do inferential work. The keyed line is a compact means–end link (mixing facts to instruction).

Violet vs. purple nuance is not tested—only that one clause supports another in the speech-act sense.`,
  },

  1016: {
    beginner: `Scene: Traffic

1. The real argument is regulatory: the light is red, so drivers must stop—the signal’s state is the reason for the obligation.

2. Topic preference, empty “Traffic is better,” or Traffic exists do not move from fact about the light to what drivers must do.`,
    intermediate: `Scene: Traffic

1. This item bridges is (red light) to ought (stop), leaning on the rules of the road everyone is meant to share.

2. Example: “The runway lights are red in this sector, so the plane must hold short.” Aviation instead of cars—not repeating the driving stem. “I love airports” is not a safety argument.

Normative arguments show up wherever signals and rules meet; not only in essays.`,
    expert: `Scene: Traffic

Liking Traffic as a theme does not create a stop obligation. The keyed sentence cites signal state as the reason for required behavior under implicit law or custom.

Distractors offer no premise–conclusion link from light to duty to stop.`,
  },

  1017: {
    beginner: `Scene: Biology

1. The keyed line says lost sleep hurts focus, so students should rest—linking a performance hit to a behavior change.

2. Subject preference, Biology is better, and Biology exists are noise next to that structure.`,
    intermediate: `Scene: Biology

1. Here sleep debt is the premise; rest is the prescription.

2. Example: “Dehydration blunts reaction time, so crews on long shifts should rotate water breaks.” Occupational health, not the classroom—not repeating sleep/focus from the card. “I love biology class” is not prudential reasoning.

Prudential arguments pair a harm or risk with a recommended habit; that is what to recognize.`,
    expert: `Scene: Biology

Enjoyment of the subject is not a health-and-performance argument. The keyed option ties sleep loss to impaired focus and a rest conclusion.

Ceteris paribus prudential inference—no meta-analysis required, only premise-supported ought.`,
  },

  1018: {
    beginner: `Scene: Economics

1. Supply is low, so prices will rise is a compact scarcity-to-price-pressure story: the premise names an economic condition; the conclusion is a directional forecast.

2. Liking Economics or noting that Economics exists does not argue supply relative to demand; Economics is better adds no mechanism.`,
    intermediate: `Scene: Economics

1. On this card, tight supply supports expecting higher prices (demand held in the background).

2. Example: “Warehouse slots are gone for the month, so spot shipping rates should spike.” Logistics flavor, not the exact supply line on the quiz—not recycling “supply is low.” “I love trucks” is not microeconomics.

You are not grading whether the forecast always comes true—only that this line gives a reason for the price claim.`,
    expert: `Scene: Economics

Brand preference for the subject is not the same as an economic mechanism. Only the keyed line connects scarcity on the supply side to upward price movement.

Elasticity, expectations, and policy sit outside the Level 0 identification task.`,
  },

  1019: {
    beginner: `Scene: Zoology

1. Dogs are social, so they need company uses a species-typical trait to defend a care conclusion—social needs to not isolate them recklessly.

2. Preferring Zoology or asserting Zoology’s existence does not argue animal welfare; Zoology is better is empty cheerleading.`,
    intermediate: `Scene: Zoology

1. Here ethology (social behavior) backs a husbandry implication.

2. Example: “Parrots bond strongly with handlers, so solo birds need daily interaction.” Another species, same trait-to-care pattern—not dogs again. “I love parrots” is not the welfare argument.

Biology-flavored oughts still need premise-to-conclusion structure.`,
    expert: `Scene: Zoology

Affection for the course title is not species-appropriate care reasoning. The keyed line moves from social nature of dogs to need for company.

Real welfare is context-rich (working dogs, street dogs); the quiz asks only for argument shape, not a full ethics review.`,
  },

  1020: {
    beginner: `Scene: Music

1. The guitar is out of tune, so it will sound bad—state of the instrument to expected auditory result. That is a straight diagnostic-to-prediction link.

2. Preferring Music or saying Music exists does not tie tuning to sound quality; Music is better adds no mechanism.`,
    intermediate: `Scene: Music

1. This line chains setup state (tuning) to performance quality (how it will sound).

2. Example: “The reed is cracked, so the clarinet will squeak on the entrance.” Different instrument, same hardware state to sonic outcome logic—not the guitar stem. “I love concerts” is not instrument reasoning.

Craft and performance are full of small causal arguments; recognize them even outside op-eds.`,
    expert: `Scene: Music

Enjoyment of the subject is not an acoustic argument. The keyed option cites detuned strings as the reason for a negative sound judgment.

Reconstruction: instrument state to expected auditory quality. Distractors lack premise–conclusion structure entirely.`,
  },

  1021: {
    beginner: `Community bake-off

1. You need chatter that is actually an argument: one part offered to back another. Cupcake trends, vanilla smell, and butter on sale are scene noise—they do not link oven state to how the bake will turn out.

2. The keyed option says the oven is too hot, so the sponge will dry out. Heat is the reason; a dried cake is the predicted failure.`,
    intermediate: `Community bake-off

1. On this card, too much heat is the premise; a dried sponge is the forecast.

2. Example: “The syrup hit 310°F, so the caramel will set hard once it cools.” Candy-making instead of génoise—not repeating oven/sponge. “I love caramel” is not a process argument.

Recipes are full of condition-to-outcome moves; spotting that structure is the skill, not winning Bake Off.`,
    expert: `Community bake-off

Trend or aroma does not predict texture; only the keyed line ties equipment state to baking result.

H = oven hotter than this sponge tolerates; D = sponge will dry out. Truth of H is not graded—only that H is offered as support for D.

Distractors lack the premise–conclusion support relation entirely.`,
  },

  1022: {
    beginner: `Sprint heat

1. The question wants a reason to expect a result, not a love letter to the track. The keyed line says you trained all month, so you should beat your previous heat time—effort is offered as the ground for a performance expectation.

2. Aesthetic opinions about the gun, the oval, or spike colors never connect your preparation to your clock.`,
    intermediate: `Sprint heat

1. Sustained training is the premise; beating your earlier heat time is the prescriptive expectation.

2. Example: “You’ve drilled serves all week, so you should land more first serves today than last match.” Tennis, not the sprint—not recycling monthly training. “I love Wimbledon” is not performance reasoning.

Athletics is still premise to ought or expectation when the premise is about you and the outcome.`,
    expert: `Sprint heat

Enjoyment of equipment or venue is not evidence about your fitness or prep. The keyed line uses training as warrant for expecting a better time versus your past self.

Injury, tactics, and luck exist in real life; the quiz only tests argument form, not betting odds.`,
  },

  1023: {
    beginner: `Hiking forecast

1. The weather argument is the line where the barometer is falling fast, so expect rain before noon—a sign (pressure crashing) supports a timed precipitation call.

2. Liking clouds, noting that apps exist, or saying rain is wet does not argue from this instrument reading to this forecast window.`,
    intermediate: `Hiking forecast

1. This stem uses a pressure trend as premise and a before-noon rain expectation as conclusion.

2. Example: “The river gauge jumped overnight, so the low trail will be underwater by afternoon.” Hydrology instead of barometers—not the same sign as on the card. “I love rivers” is not safety reasoning.

Folk heuristics can still be structured arguments (sign to event), even when meteorologists would add caveats.`,
    expert: `Hiking forecast

Generic weather trivia does not move from this falling pressure to this timed rain claim; the keyed option does.

Barometer rules vary by region and season—outside the identification task.

Structure: empirical indicator to precipitation prediction within a stated window.`,
  },

  1024: {
    beginner: `Car will not crank

1. The diagnostic line ties zero volts at the battery to the starter not turning—no usable electrical push, so the cranking motor should not fire in the simplified story the lesson uses.

2. Jump-starter weight, wheel count, or annoyance at the tow truck do not build voltage to starter behavior.`,
    intermediate: `Car will not crank

1. On this item, dead battery is the premise; no starter spin is the predicted consequence (toy model of the circuit).

2. Example: “The GFCI tripped, so the pump won’t run until someone resets it.” Home electrics, not the car—not repeating 0 V. “I hate basements” is not a diagnosis.

Mechanistic arguments are everywhere—in the garage as much as in op-eds.`,
    expert: `Car will not crank

Weight of tools or number of wheels does not state electrical sufficiency for the starter. The keyed line compresses power source state to load behavior.

Real diagnosis adds grounds, relays, and more; Level 0 only asks for support structure.`,
  },

  1025: {
    beginner: `Dim office desk plants

1. Etiolated leaves (stretched, pale from chasing light) are the symptom; move the pot toward the window is the fix the sentence defends.

2. “Succulents never need water” is bad universal advice; brown soil and “windows are glass” are non-arguments—they do not move from light starvation to what to do.`,
    intermediate: `Dim office desk plants

1. Here etiolation is the diagnostic premise; relocating toward light is the intervention.

2. Example: “The seedlings are leggy under only overhead LEDs, so lower the lights or raise the trays.” Indoor growing, not your office pot—not repeating etiolation wording. “I love LEDs” is not plant care.

Sign to remedy is the same argumentative skeleton as many policy fixes, just with chlorophyll.`,
    expert: `Dim office desk plants

Universal watering slogans or irrelevant soil and window facts do not argue light deficiency to placement change; the keyed option does.

Botany nuance is not scored—only premise-supported prescription.`,
  },

  1026: {
    beginner: `Reading room noise policy

1. The argument ties quiet for concentration to speak softly at the tables—the purpose of the room is the reason for a volume rule.

2. Whether whispering is trendy, or facts about shelves and spines, does not argue why voices should stay low here.`,
    intermediate: `Reading room noise policy

1. Here concentration as the room’s job is the premise; soft speech is the behavioral conclusion.

2. Example: “Sterile fields require aseptic technique, so scrub before entering the suite.” Hospital norms instead of a library—not repeating quiet/concentration. “I love hospitals” is not infection control.

Mission to conduct is a classic regulative pattern—in libraries as in labs.`,
    expert: `Reading room noise policy

Fashion or furniture trivia does not ground noise norms. The keyed line moves from cognitive goal (focus) to how loud people may be.

Same broad idea as traffic lights—fact or goal under rules to ought—but in a study-space context.`,
  },

  1027: {
    beginner: `Friend skips walks

1. The line that matters says regular movement helps cardiovascular health, so schedule a daily walk—a benefit claim backs a concrete habit.

2. Calling walks boring, noting sneakers exist, or praising concrete does not argue health to walking plan.`,
    intermediate: `Friend skips walks

1. On this card, a general health premise supports a daily walk prescription for someone who has been inactive (per the prompt).

2. Example: “Fiber helps digestion, so add one vegetable serving at lunch.” Nutrition, not walking—not repeating cardio. “I hate vegetables” is not a care plan.

Health promotion lives at the intersection of evidence-type premises and behavioral oughts.`,
    expert: `Friend skips walks

Boredom or infrastructure does not argue cardiovascular benefit to walking habit; the keyed line does.

Epidemiological strength is not graded—only support structure for the recommendation.`,
  },

  1028: {
    beginner: `Algebra quiz

1. If x equals 5, then x plus 2 must equal 7 is a mini-proof: an assumption about x is offered as sufficient for a numerical follow-on.

2. “Let x be a number” only sets the stage; primality of 7 and “equations use letters” are math flavor without the if-then punch this item rewards.`,
    intermediate: `Algebra quiz

1. This line is a toy derivation: antecedent x = 5 to consequent x + 2 = 7 in ordinary arithmetic.

2. Example: “If the polygon has six equal sides, then each interior angle must be 120° in the Euclidean story we’re using.” Geometry, not x + 2—not the same numbers. “I love hexagons” is not a proof.

Formal subjects still use premises to conclusions—sometimes in one line.`,
    expert: `Algebra quiz

Stipulating a variable or citing isolated facts is not the same as showing one claim forces another. The keyed option presents Q as necessary given P in the intended arithmetic.

Form: conditional support—inferential structure in a formal domain.`,
  },

  1029: {
    beginner: `Rising tide at the beach

1. Water advancing up the beach is the observation; the dry area will shrink is the spatial consequence. That is a simple process to less safe or dry space for lifeguard thinking.

2. Fun sand, loud gulls, and salty ocean do not link flood motion to room on dry sand.`,
    intermediate: `Rising tide at the beach

1. Here incoming water is the premise; smaller dry zone is the prediction.

2. Example: “The reservoir is releasing more water, so the wading beach downstream will narrow this afternoon.” River management—not the tide line on this card. “I love dams” is not hydrology.

Safety talk often uses observed process to forecast about space or time—same skeleton as many policy arguments.`,
    expert: `Rising tide at the beach

Beach atmosphere does not argue shoreline geometry. The keyed line ties advancing water to shrinking dry area, other things equal.

Berm dynamics and waves sit beyond the Level 0 key; only premise to prediction is tested.`,
  },

  1030: {
    beginner: `Planetarium talk

1. Finite light speed is the physical premise; we see distant stars as they were long ago is the lookback conclusion—how we observe follows from how fast signals travel.

2. Pretty stars, telescope mirrors, and day/night chatter do not connect finite c to historical starlight.`,
    intermediate: `Planetarium talk

1. This stem is the classic lookback time move: propagation delay to we see the past of far sources.

2. Example: “Sound is slow in air, so you hear the thunder after you see the flash.” Acoustics instead of c—not repeating astronomy. “I love storms” is not signal speed.

Mechanism to observation pattern; structure matters more than cosmology finals.`,
    expert: `Planetarium talk

Telescope engineering or aesthetics does not argue finite c to delayed images; the keyed line does.

Finiteness of c supports an epistemic conclusion about historical states of sources; relativity and expansion are optional extras at this level.`,
  },

  1031: {
    beginner: `Apple demo from a balcony

1. Earth pulls masses toward its center, so the apple accelerates downward—a physics-style premise tied to motion when you let go.

2. Apple color, balcony railings, or name-dropping Newton as trivia do not argue why this apple heads down.`,
    intermediate: `Apple demo

1. On this card, gravity toward Earth is the premise; downward acceleration is the prediction for the dropped apple.

2. Example: “The magnet pulls the ball bearing, so it speeds up along the track.” Magnetism lab, not the balcony—not repeating gravity/apple. “I love demos” is not kinematics.

Mechanism to motion is the demo’s argumentative skeleton (air resistance set aside).`,
    expert: `Apple demo

Description of the setup (colors, guardrails) does not substitute for a force-to-acceleration link; the keyed line supplies that link.

Full Newtonian derivation is not required—only recognition that the first clause supports the second.`,
  },

  1032: {
    beginner: `Language-practice plan

1. Fluency tracks with deliberate practice, so brief daily speaking beats monthly cramming—a learning-style premise backs a schedule choice.

2. Accents, dictionaries, or “languages have grammar” do not compare daily versus crammed practice.`,
    intermediate: `Language practice

1. Practice quality and frequency are the premise; distributed speaking wins over massed cramming as the conclusion.

2. Example: “Retention beats when you review flashcards over weeks, so five minutes a day beats one four-hour night.” Memory science flavor—not the speaking line on the card. “I love flashcards” is not the argument.

Pedagogy items pair a learning claim with a concrete routine—same pattern as sports or health advice.`,
    expert: `Language practice

Gear or grammar trivia does not argue spacing of practice; the keyed line does, echoing distributed versus massed practice themes without requiring citations.

Empirical strength of the premise is not graded—only support structure.`,
  },

  1033: {
    beginner: `Wi-Fi fails on a video call

1. The router shows offline, so this machine will not reach the internet—gateway state to expected connectivity in the usual home story.

2. Video-chat slogans, cable colors, or modem LEDs do not build router to path to the net.`,
    intermediate: `Home office Wi-Fi

1. This stem frames a call failing; the argument ties offline router to no internet through that box.

2. Example: “The campus VPN tunnel is down, so this laptop won’t reach the lab server.” Enterprise network—not your living-room router. “I hate IT” is not TCP/IP.

Troubleshooting is diagnostic argument: component status to service prediction.`,
    expert: `Router offline

Aesthetic complaints about video calls do not state topology; the keyed line assumes a typical home path (devices to router to ISP). Hotspots and tethering sit outside the text.`,
  },

  1034: {
    beginner: `Fragile museum pieces

1. These materials crack under sudden force, so support them from below when moving—impact risk to handling rule.

2. Age of artifacts, ticket prices, or display cases do not argue shock to support strategy.`,
    intermediate: `Museum handling

1. On this item, brittle response to impact is the premise; underhand support is the prescribed move.

2. Example: “Thin glass bows under its own weight if held only at the edges, so carry the sheet vertically with two aides.” Glazing shop—not museum crates. “I love glass” is not statics.

Conservation is damage mechanism to protocol.`,
    expert: `Museum handling

Provenance or ticket economics do not ground manipulation norms; the keyed line uses mechanical vulnerability as the warrant.

Supporting from below reduces bending moments that cause cracking—details beyond the key.`,
  },

  1035: {
    beginner: `Mixing paint for a mural

1. Red plus blue yields this purple here, so those two tubes will match that swatch—composition fact to prediction for this pair.

2. Violet fashion, worn brushes, or canvas weave do not argue pigments to color chip.`,
    intermediate: `Mural paint

1. Here a palette rule backs a swatch prediction for two tubes.

2. Example: “This glaze recipe fires to celadon in our kiln, so these two buckets will match the sample tile.” Ceramics—not red/blue mural paint. “I love kilns” is not color proof.

Studio reasoning: given authoritative mix facts in the item’s world, then outcome.`,
    expert: `Pigment mixing

Real-world pigments are messy subtractive systems; the question authorizes the premise—your job is support structure, not paint chemistry certification.`,
  },

  1036: {
    beginner: `Red light (new driver)

1. This signal is red, so traffic facing it must stop before the limit line—signal state to stop obligation under normal rules.

2. Brightness, corner geometry, or brake brands do not argue red to stop at the line.`,
    intermediate: `Red traffic light

1. This line is regulative: red for your approach means must stop before the limit line.

2. Example: “The runway hold-short lights are red, so the aircraft must not cross the marking.” Aviation—not the driving stem. “I love planes” is not ATL.

Same is-or-ought family as other traffic items, with stop-line specificity.`,
    expert: `Stop line

Visual detail (glare, intersection art) does not create a duty to stop; the keyed sentence cites aspect facing you as the reason for where to stop.

Implicit traffic law or custom supplies the warrant.`,
  },

  1037: {
    beginner: `Study-group breaks

1. The correct line is usually the first option (index 0): sleep debt impairs attention, so short rests help the session stay sharp—fatigue to break design.

2. Chairs, coffee, or “exam season exists” do not argue attention loss to breaks.`,
    intermediate: `Study breaks

1. On this card, sleep-related attention loss is the premise; short rests defend session quality.

2. Example: “Screen glare strains eyes after two hours, so the coding team should use the 20-20-20 rule.” Ergonomics—not sleep debt. “I love monitors” is not cognition.

Study hygiene: cognitive limit to intervention (breaks).`,
    expert: `Sleep debt

Ambient details do not support micro-rest; the keyed line ties sleep debt to attention and then to breaks.

Prudential argument—empirical effect sizes are not scored.`,
  },

  1038: {
    beginner: `Sold-out concert, resale prices

1. Few seats remain, so resale listings will ask more than face value—scarcity to secondary-market price story.

2. Merch, speakers, or fandom do not argue remaining supply to resale premium.`,
    intermediate: `Concert tickets

1. Here near sellout is the premise; above-face resale is the forecast.

2. Example: “Only three crates of the vintage are left, so auction bids should clear the list price.” Wine, not concerts—not repeating seats. “I love wine” is not supply and demand.

Informal supply-and-demand arguments appear everywhere—not only in textbooks.`,
    expert: `Resale premium

Merch hype does not state seat scarcity to resale markup; the keyed line does.

Scalping law varies by jurisdiction—the quiz asks argument shape, not legality.`,
  },

  1039: {
    beginner: `City noise rules

1. The policy argument is typically the third option (index 2): late-night traffic keeps residents awake, so the city should add a quiet-hours rule—harm to ordinance.

2. “The city has noise rules” only reports existence. Raw annoyance or “complaints exist everywhere” does not structure sleep loss to new rule like the keyed line.`,
    intermediate: `Quiet hours

1. This item pairs sleep disruption (evidence of harm) with a municipal quiet-hours proposal.

2. Example: “Industrial fumes reach elementary classrooms, so the council should tighten stack-height rules.” Zoning—not noise. “I hate politics” is not welfare economics.

Urban policy often runs resident harm to regulation.`,
    expert: `Noise ordinance

Existence of old rules or generic complaint counts do not argue a new targeted norm; the keyed line uses because-style harm to warrant the should.

Third option in many banks—always match your on-screen order.`,
  },

  1040: {
    beginner: `School jazz band tuning

1. The lead guitar is a quarter-step flat, so that chord sounds sour until it is fixed—intonation fault to sonic judgment and need to correct.

2. Jazz history, “notes exist,” or chair count do not link tuning to sound quality.`,
    intermediate: `Jazz rehearsal

1. On this stem, a specific intonation error is the premise; sour chord until fixed is the conditional prediction.

2. Example: “The oboe’s vent key is sticky, so the entrance will crack until repair.” Woodwinds—not guitar. “I love jazz” is not acoustics.

Rehearsal rooms are full of fault-to-consequence arguments.`,
    expert: `Quarter-step flat

Historical or furniture trivia does not diagnose pitch; the keyed line does.

Ear-training and temperament sit beyond the logic-only key.`,
  },

  1041: {
    beginner: `Cupcakes pulled early

1. Usually the first option (index 0): the crumb still looks wet, so give five more minutes or they will collapse—underbaked cue to time fix and bad outcome if you ignore.

2. Frosting sweetness, paper pleats, or bakery hours do not argue crumb moisture to structure.`,
    intermediate: `Underbaked cupcakes

1. Here wet crumb signals insufficient set; the line bundles extra bake time with collapse risk if you stop now.

2. Example: “The center of the quiche still jiggles like liquid, so leave it in or it will weep when cut.” Savory—not cupcakes. “I love eggs” is not pastry science.

Visual bake state to conditional disaster is classic kitchen argument.`,
    expert: `Structural collapse risk

Decor or shop hours do not diagnose crumb set; the keyed line ties moisture in the crumb to structural failure unless time is added.

Pastry exam not required—only premise–conclusion packaging.`,
  },

  1042: {
    beginner: `Relay training logs

1. Typically first option (index 0): split times improved all spring, so they are likely to beat last year’s record—trend to forecast versus benchmark.

2. Batons, lane paint, or “running is healthy” do not argue training curve to record odds.`,
    intermediate: `Relay teams

1. On this card, spring improvement in splits is the premise; beating last year’s record is the probabilistic conclusion.

2. Example: “Quarterly sales rose each month, so we should clear the annual target.” Business trend—not track splits. “I love sales” is not stats.

Trend-as-evidence is explicit support even when certainty is not.`,
    expert: `Performance forecasting

Equipment trivia does not state trajectory of performance; the keyed line does.

Injury and weather exist in real sport—outside the identification task.`,
  },

  1043: {
    beginner: `Picnic forecast

1. Often the second option (index 1): radar shows a squall line approaching, so pack the rain fly—storm signal to shelter gear.

2. Baskets, grass, ants—no radar feature to storm prep.`,
    intermediate: `Picnic planning

1. Here organized convection on radar is the premise; bring the fly is the risk-management conclusion.

2. Example: “The avalanche forecast is high, so carry probes and avoid lee bowls.” Mountains—not squall lines. “I love snow” is not safety.

Outdoor events chain observation to preparedness.`,
    expert: `Squall line

Picnic aesthetics do not argue severe weather; the keyed line uses squall line as warrant for cover.

Radar literacy details sit beyond the key.`,
  },

  1044: {
    beginner: `Community-garden tools

1. Typically first option (index 0): tools keep getting stolen, so we should build a lockable shed—ongoing loss to secure storage.

2. Garden love, “gardens are fun,” or shiny metal do not argue theft to lockable shed.`,
    intermediate: `Tool security

1. This item uses repeat theft as the premise; a lockable shed is the capital response.

2. Example: “Bike racks are being cut at night, so the campus should install cages with card access.” Transit—not garden tools. “I love bikes” is not security.

Crime or loss to physical control is a standard policy shape.`,
    expert: `Community garden security

Hobby enthusiasm does not create a security argument; the keyed line ties theft pattern to access-controlled storage.

Budget and governance sit outside the key.`,
  },

  1045: {
    beginner: `Night-sky monitoring before storms

1. Usually first option (index 0): meteorologists track the night sky, so coastal towns can warn fishers early—monitoring to early warning for a vulnerable group.

2. Sky beauty, “stars exist,” or telescope cost do not argue watching to alerts. (French banks may say ports or marins—same logic.)`,
    intermediate: `Storm preparedness

1. Here observation practice supports timely warnings to fishers or coastal workers.

2. Example: “Seismometers picked up P-waves, so the train network can halt before the heavy shake.” Earthquake—not weather. “I love trains” is not risk.

Surveillance to protective action is instrumental argument.`,
    expert: `Early warning

Astronomy tourism does not state forecast pipeline; the keyed line links monitoring to early alerts.

French wording may differ; structure matches.`,
  },

  1046: {
    beginner: `School water fountain

1. Typically first option (index 0): lead was detected, so replace the fountain immediately—contaminant found to urgent remediation.

2. Shiny metal, bottled-water taste, or hall layout do not argue lead to replace now.`,
    intermediate: `Drinking water safety

1. On this stem, lead in the fountain is the premise; immediate replacement is the urgent conclusion.

2. Example: “Mold spores exceeded the limit in the HVAC sample, so the district should swap the filters this week.” Indoor air—not lead. “I love HVAC” is not public health.

Detection to remediation shows up in schools and cities alike.`,
    expert: `Lead in plumbing

Aesthetic or bottled-water preference does not state toxic exposure to hardware removal; the keyed line does.

Real thresholds and budgets sit outside Level 0 scoring.`,
  },

  1047: {
    beginner: `Counseling waitlists

1. Usually first option (index 0): waitlist is six weeks, so hire another therapist—queue to capacity fix.

2. Chair style, degrees on the wall, or “quiet rooms are nice” do not argue delay to staffing.`,
    intermediate: `Mental health access

1. Here long wait is the premise; add therapist is the HR conclusion.

2. Example: “The ER average wait hit nine hours, so the hospital should open a fast-track bay.” Medicine—not counseling. “I love ERs” is not ops.

Service bottlenecks to resource adds is classic ops reasoning.`,
    expert: `Wait time

Facility aesthetics do not argue access delay; the keyed line ties queue length to hiring.

Form: queue evidence to staffing prescription.`,
  },

  1048: {
    beginner: `Homework proof review

1. Often the second option (index 1): if k is even, k² is even—because k = 2m for some integer m—definition of even supports the claim about k².

2. Generic “proofs use logic” or “even numbers are integers” does not supply this because-clause.`,
    intermediate: `Number theory sketch

1. This line offers explicit support: even means k = 2m, which is the standard hook for showing k² inherits evenness (algebra finished elsewhere).

2. Example: “n is divisible by 3 because n = 3q for integer q—same definitional style.” Divisibility—not k². “I love 3” is not mathematics.

Proofs are arguments: claims plus because-clauses.`,
    expert: `Even square

Meta remarks about logic do not instantiate parity reasoning; the keyed line uses ∃m(k=2m) as visible support.

Form: definition-led argument—students may complete the algebra in scratch work.`,
  },

  1049: {
    beginner: `Tide table and shoreline survey

1. Typically first option (index 0): low tide exposes more tide pools, so schedule the transect for that window—access to timing of field work.

2. Tide books, sand grain, wave noise do not argue low tide to when to sample. (French: basse mer / flaques—same idea.)`,
    intermediate: `Field scheduling

1. Here more exposed pools at low tide is the premise; run the transect then optimizes data collection.

2. Example: “The canopy opens after dawn, so measure photosynthesis mid-morning.” Ecology—not tides. “I love leaves” is not sampling design.

Natural state to when to measure is operational argument.`,
    expert: `Tidal window

Gear catalogs do not state tidal exposure; the keyed line ties low tide to survey timing.

Rising tide risks are an optional real-world add-on; not required for the key.`,
  },

  1050: {
    beginner: `Explaining starlight (tour)

1. Often the second option (index 1): starlight began its journey years ago, so we see the star as it was in the past—travel time to historical appearance.

2. Telescope price, constellation names, or clouds do not argue light-time to lookback.`,
    intermediate: `Lookback (tour script)

1. This stem packages finite travel time as the premise; past state of the star is the observational conclusion—kin to the planetarium item, but walking-tour wording.

2. Example: “The echo returns seconds later, so we hear the canyon as it sounded after the delay.” Sound—not starlight. “I love echoes” is not relativity.

Astronomy teaching repeats delay to not-simultaneous arguments.`,
    expert: `Light-time

Gear or constellation lore does not state emission versus reception time; the keyed line does.

Relativity and cosmology are omitted at Level 0; structure only.`,
  },

  1051: {
    beginner: `Identify the premise — gravity / apple

1. The stem looks like: Since [first idea], [second idea]. The premise is the reason you treat as true—not the prediction you infer.

2. Here, “Gravity pulls objects down” is what Since introduces: that is the premise. “The apple will fall” is the conclusion. The word Since is only a cue, not a content premise.`,
    intermediate: `Premise vs. conclusion (gravity)

1. On this card, split: Since P, Q. P = gravitational pull downward; Q = this apple falls.

2. Example: “Since the bridge is rated for ten tons, the van should be fine.” Premise = load rating; conclusion = safety judgment—not “the van should be fine” as premise.

Ask what is offered as the reason—that is usually P, not Q.`,
    expert: `Premise identification

The apple-fall line is what you infer; it is not the supporting proposition. In “since P, Q,” P is the antecedent content offered as support; Q is the target of the inference.

Exam skill: pick the content after Since (before the comma), not the outcome clause.`,
  },

  1052: {
    beginner: `Practice / speak daily — premise

1. “Practice improves fluency” is the learning claim used as reason. “You should speak daily” is the advice—the conclusion—that rests on that claim.

2. When the question asks for the premise, choose the supporting statement, not the should.`,
    intermediate: `Language-learning — premise slot

1. Here, practice to fluency is P; speak daily is Q (prescription).

2. Example: “Since sleep consolidates memory, you should avoid all-nighters before exams.” Premise = memory consolidation—not “avoid all-nighters.”

Imperatives (“you should…”) are usually conclusions in this drill.`,
    expert: `Prudential structure

The imperative is the prudential conclusion; the empirical or general claim about practice is the premise. Selecting the should confuses support with supported.`,
  },

  1053: {
    beginner: `Router / Wi-Fi — premise

1. “The router is off” is the fact about the network—the premise. “The Wi‑Fi won’t work” is the prediction—the conclusion.

2. Since introduces the diagnostic bit, not the failure forecast.`,
    intermediate: `Diagnostic split

1. This item: router off = P; Wi‑Fi won’t work = Q.

2. Example: “Since the tank is empty, the mower won’t start.” Premise = empty tank—not “won’t start.”

Troubleshooting lines: hardware state to service outcome; state is usually P.`,
    expert: `Causal background

The functional claim (no Wi‑Fi) is the inferred conclusion; the power or state claim is the premise. Since is not a premise—it only marks where P starts.`,
  },

  1054: {
    beginner: `Fragile artifacts — premise

1. “Artifacts are fragile” is the descriptive premise (risk). “They need careful handling” is the prescriptive conclusion (what to do).

2. If the task is “which is the premise?”, pick fragility, not the handling rule.`,
    intermediate: `Conservation — descriptive to prescriptive

1. Here: fragile = P; careful handling = Q.

2. Example: “Since ice is slippery, walkers should use traction aids.” Premise = slipperiness—not “use traction aids.”

Is-claims often sit in P; ought-claims sit in Q.`,
    expert: `Support relation

“Need careful handling” is what gets supported; fragility is what does the supporting. Picking the norm when asked for premise reverses the roles.`,
  },

  1055: {
    beginner: `Mixing colors — premise

1. “Red and blue make purple” is the compositional fact—the premise. “Mix them for violet” is the instruction—the conclusion about what to do.

2. The reason you mix is because of how the colors combine—not because mixing is fun.`,
    intermediate: `Craft instruction

1. On this stem, pigment behavior = P; mixing instruction = Q.

2. Example: “Since yeast ferments sugar, let the dough rise in a warm spot.” Premise = fermentation fact—not “let the dough rise” as premise.

How-to lines: material truth in P, action in Q.`,
    expert: `Instrumental reasoning

The imperative (“mix…”) is the conclusion; the compositional claim is the premise. Do not label the order to act as the reason when asked for premise.`,
  },

  1056: {
    beginner: `Red light / stop — premise

1. “The light is red” is the observable premise (what is true about the signal). “Drivers must stop” is the normative conclusion (what follows under the rules).

2. The premise slot holds facts about the world; must stop is the inferred duty, not the supporting reason.`,
    intermediate: `Traffic rule

1. Here: red light = P; must stop = Q (under law or custom).

2. Example: “Since the exit is blocked, traffic must divert.” Premise = blocked exit—not “must divert” alone.

Is (signal state) versus ought (required action)—P is usually the is.`,
    expert: `Fact vs. norm

The deontic claim (must stop) is the conclusion; the descriptive signal state is the premise. Swapping them is a frequent beginner slip.`,
  },

  1057: {
    beginner: `Sleep and focus — premise

1. “Lack of sleep affects focus” is the effect claim—the premise. “Students should rest” is the recommended fix—the conclusion.

2. You are asked which clause is the reason given, not which line sounds nicer.`,
    intermediate: `Welfare advice

1. On this stem: sleep loss hurts focus = P; rest = Q.

2. Example: “Since dehydration dulls reaction time, pilots should pre-hydrate.” Premise = dehydration effect—not “should pre-hydrate” as premise.

Harm mechanism to remedy; harm is P.`,
    expert: `Means–ends

The rest imperative is the conclusion; the sleep or focus link is the supporting premise. The premise is not itself the imperative.`,
  },

  1058: {
    beginner: `Supply and prices — premise

1. “Supply is low” is the market condition—the premise. “Prices will rise” is the forecast—the conclusion.

2. You do not list rising prices as the reason prices rise—that would confuse prediction with support.`,
    intermediate: `Economics sketch

1. Here: low supply = P; prices rise = Q.

2. Example: “Since inventories are thin, spot prices should spike.” Premise = thin inventories—not “spike” as premise.

State variables (supply) sit in P; endogenous moves (price) sit in Q.`,
    expert: `Comparative statics

The price movement is what you infer; scarcity condition is what you assert as reason. Do not treat Q as P.`,
  },

  1059: {
    beginner: `Dogs / company — premise

1. “Dogs are social” is the trait claim—the premise. “They need company” is the care implication—the conclusion.

2. The need is what you derive from sociability—not what you cite as the raw reason.`,
    intermediate: `Ethology to care

1. Here: social species = P; need company = Q.

2. Example: “Since corvids cache food, they need cognitive enrichment in captivity.” Premise = caching behavior—not “need enrichment” as premise.

General trait to welfare ought; trait is P.`,
    expert: `Generalization

The welfare prescription is supported by the trait claim; trait is premise, need is conclusion in this labeling.`,
  },

  1060: {
    beginner: `Guitar out of tune — premise

1. “The guitar is out of tune” is the setup fact—the premise. “It will sound bad” is the sonic judgment—the conclusion.

2. Bad sound is what you predict from the tuning state—not the reason the prediction is made.`,
    intermediate: `Performance quality

1. Here: out of tune = P; sounds bad = Q.

2. Example: “Since the reed is chipped, the opening will be sharp and unstable.” Premise = chip—not “unstable” as premise.

Fault to aesthetic or sonic outcome; fault is P.`,
    expert: `Conditional evaluation

The auditory evaluation is the conclusion; the physical state is the premise. They are related but not the same speech act when labeling premise.`,
  },

  1061: {
    beginner: `Oven / cake — premise

1. “The oven is too hot” is the equipment premise—the condition cited as reason. “The cake will burn” is the outcome conclusion—what follows from that heat.

2. Do not pick the word Since as the premise—it only signals where P begins.`,
    intermediate: `Baking control

1. Here: too hot = P; will burn = Q.

2. Example: “Since the pan is still cold, the butter won’t brown yet.” Premise = cold pan—not “won’t brown.”

Oven or pan state to baking result; state is P.`,
    expert: `Causal foregrounding

Burn is predicted from heat; heat level is what is given as support. Q is not P.`,
  },

  1062: {
    beginner: `Practice / finish faster — premise

1. “You practiced hard” is the effort premise. “You will finish faster” is the performance conclusion.

2. The speed claim is what you expect from the practice story—not the reason offered for the expectation.`,
    intermediate: `Training payoff

1. Here: practiced hard = P; finish faster = Q.

2. Example: “Since you drilled scales daily, your sight-reading should ease up.” Premise = drilling—not “sight-reading eases” as premise.

Training facts to performance; facts = P.`,
    expert: `Performance inference

Faster finish is the consequent claim; practice is the antecedent support. Reversing them mislabels premise.`,
  },

  1063: {
    beginner: `Dark clouds / rain — premise

1. “The clouds are dark” is the visible premise (sign). “It is going to rain” is the forecast conclusion.

2. Rain is what you infer—not what you list as the given reason in P.`,
    intermediate: `Sky reading

1. Here: dark clouds = P; going to rain = Q.

2. Example: “Since the wind shifted onshore, fog should roll in.” Premise = wind shift—not “fog rolls in” as premise.

Sign to event; sign is P (Level 0 simplification).`,
    expert: `Inductive shortcut

Real forecasting is messy; for this drill, observation = premise, prediction = conclusion.`,
  },

  1064: {
    beginner: `Dead battery / no start — premise

1. “The battery is empty” is the electrical premise. “The car won’t start” is the functional conclusion.

2. No-start is the symptom you infer from stored energy state—not the supporting fact.`,
    intermediate: `Automotive diagnosis

1. Here: empty battery = P; won’t start = Q (same family as router offline items).

2. Example: “Since the fuel gauge reads empty, the engine won’t fire.” Premise = empty tank—not “won’t fire.”

Energy or storage first, behavior second.`,
    expert: `Mechanism background

Starting failure is Q; battery state is P. The symptom is not the premise.`,
  },

  1065: {
    beginner: `Plants / window — premise

1. “Plants need light” is the biological premise. “They should be near the window” is the placement conclusion.

2. Need light is the reason; window is the fix you derive.`,
    intermediate: `Indoor growing

1. Here: need light = P; near window = Q.

2. Example: “Since succulents rot in wet soil, use gritty mix in the pot.” Premise = rot risk—not “use gritty mix” as premise.

Organism need to care action; need is P.`,
    expert: `Welfare placement

Window advice is supported by phototropism; need is premise, placement is conclusion.`,
  },

  1066: {
    beginner: `Silence / speak softly — premise

1. “Silence is required” is the context rule—the premise. “We must speak softly” is the conduct conclusion.

2. Soft speech is what follows from the quiet requirement—not the reason itself.`,
    intermediate: `Venue norms

1. Here: silence required = P; speak softly = Q.

2. Example: “Since the court is in session, phones must be off.” Premise = session status—not “phones off” as premise.

Setting or rule to manners; rule is P.`,
    expert: `Deontic layering

The derived imperative (soft speech) is Q; the ambient requirement (silence) is P.`,
  },

  1067: {
    beginner: `Exercise / walk daily — premise

1. “Exercise improves health” is the general benefit premise. “We should walk daily” is the specific prescription conclusion.

2. The walk is the plan you infer—not the raw supporting proposition.`,
    intermediate: `Public-health style

1. Here: exercise helps health = P; walk daily = Q.

2. Example: “Since fiber aids digestion, add vegetables at lunch.” Premise = fiber benefit—not “add vegetables” as premise.

Broad evidence to narrow ought; broad = P.`,
    expert: `Bridging general to specific

The specific habit is supported by the general claim; do not treat the habit as premise.`,
  },

  1068: {
    beginner: `X = 5 / X + 2 = 7 — premise

1. “X equals 5” is the given—the premise you start from. “X plus 2 equals 7” is the derived line—the conclusion of the step.

2. In proof-style wording, givens sit in P; computed lines sit in Q.`,
    intermediate: `Arithmetic step

1. Here: X = 5 = P; X + 2 = 7 = Q (under ordinary arithmetic).

2. Example: “Since n = 10, n/2 must be 5.” Premise = n = 10—not “n/2 is 5” as premise.

Assumption to consequent; assumption is P.`,
    expert: `Proof scaffolding

The result of the operation is Q; the assignment X = 5 is P. Do not label Q as premise.`,
  },

  1069: {
    beginner: `Tide / beach — premise

1. “The tide is coming in” is the process premise. “The beach will get smaller” is the spatial conclusion (less dry sand).

2. Shrinking beach is predicted from rising water—not offered as the reason for the water.`,
    intermediate: `Littoral dynamics

1. Here: tide coming in = P; beach smaller = Q.

2. Example: “Since the snowpack is melting fast, the trail will be muddy.” Premise = melt—not “muddy” as premise.

Forcing to experienced layout; forcing = P.`,
    expert: `Spatial consequence

Beach shrinkage is Q; tidal phase is P. The effect is not the premise.`,
  },

  1070: {
    beginner: `Light travel / stars in the past — premise

1. “Light takes time to travel” is the physical premise (finite speed or delay). “We see stars as they were” is the lookback conclusion.

2. Past appearance follows from travel time—it is not the supporting fact in P.`,
    intermediate: `Astronomy education

1. Here: light takes time = P; see stars as they were = Q (same family as planetarium and tour items).

2. Example: “Since sound crosses the stadium slowly, claps arrive out of sync.” Premise = slow sound—not “out of sync” as premise.

Propagation premise to observation conclusion.`,
    expert: `Emission vs. reception

Lookback is Q; finite speed or delay is P. Relativistic nuance is optional at Level 0.`,
  },

  1071: {
    beginner: `Gravity demo — second pass (premise)

1. New ID, same roles as the earlier gravity and apple line: “Gravity pulls objects down” = P (the reason you treat as given). “The apple will fall” = Q (the outcome you infer).

2. The vignette may be worded slightly differently—premise vs conclusion does not move.`,
    intermediate: `Gravity — second pass

1. P = universal pull story; Q = this apple’s fall.

2. Example: “Since acids donate protons, this strip will turn red.” P = acid behavior—not “strip turns red.”

Law-like first clause to instance second clause; first = premise when asked.`,
    expert: `Instance vs. law

The fall is what you derive; gravity is what you cite. Same labeling as IDs 1051 and 1061—only the surface story rotates.`,
  },

  1072: {
    beginner: `Fluency advice — second pass (premise)

1. “Practice improves fluency” = P. “You should speak daily” = Q (schedule ought).

2. Repetition in the bank drills the same P/Q split with a fresh stem—your job is still to tag support vs prescription.`,
    intermediate: `Fluency — second pass

1. Mechanism (practice to skill) supports cadence (daily).

2. Example: “Since spaced repetition beats cramming, you should review weekly.” P = spacing effect—not “review weekly.”

Is about learning to ought about habit; is = P.`,
    expert: `Policy stack

The daily imperative is Q; the practice–fluency link is P—parallel to 1052 and 1062.`,
  },

  1073: {
    beginner: `Home network — second pass (premise)

1. “The router is off” = P (device state). “The Wi‑Fi won’t work” = Q (service prediction).

2. Second pass = same box-to-air logic as 1053 and 1063 with new wrapping.`,
    intermediate: `Router — second pass

1. P = CPE down; Q = WLAN unusable.

2. Example: “Since the DNS resolver is unreachable, name lookup will fail.” P = resolver—not “lookup fails.”

Upstream fault = premise; symptom = conclusion.`,
    expert: `Layered faulting

Wi‑Fi failure is inferred; router off is posited as support—same direction as earlier router items.`,
  },

  1074: {
    beginner: `Handling policy — second pass (premise)

1. Fragility = P. Careful handling = Q.

2. Another pass over risk to protocol—the roles stay: descriptive risk first, prescriptive care second.`,
    intermediate: `Artifacts — second pass

1. P = material hazard; Q = handling norm.

2. Example: “Since nitrile degrades in ketones, use a different glove for that solvent.” P = degradation—not “switch gloves” as premise.

Hazard register to control; hazard = P.`,
    expert: `Normative target

Care rules are justified by fragility; fragility is not inferred from the rules—same as 1054 and 1064.`,
  },

  1075: {
    beginner: `Paint mixing — second pass (premise)

1. “Red and blue make purple” = P (recipe). “Mix them for violet” = Q (instruction).

2. You are still picking premise: the recipe, not the order to mix.`,
    intermediate: `Palette — second pass

1. Composition = P; imperative = Q.

2. Example: “Since epoxy sets in ten minutes, work in small batches.” P = cure time—not “small batches” as premise.

Fact about materials to command; fact = P.`,
    expert: `Means selection

The mix command is Q; the color chemistry claim is P—aligned with 1055 and 1065.`,
  },

  1076: {
    beginner: `Intersection — second pass (premise)

1. Red light = P (observation). Must stop = Q (duty).

2. Same signal-to-obligation split as other traffic cards—second pass only changes scenery.`,
    intermediate: `Traffic — second pass

1. P = aspect; Q = compliance.

2. Example: “Since the runway guard shows red, hold short of the marking.” P = guard state—not “hold short” as premise.

See vs must; see = P.`,
    expert: `Deontic consequence

Stop is Q; red is P—do not reverse empirical vs deontic.`,
  },

  1077: {
    beginner: `Attention budget — second pass (premise)

1. Sleep hurts focus = P. Students should rest = Q.

2. Harm to remedy again—premise is the deficit claim, not the rest advice.`,
    intermediate: `Sleep — second pass

1. P = cognitive harm; Q = recovery ought.

2. Example: “Since dehydration blunts focus, athletes should pre-hydrate.” P = dehydration effect—not “pre-hydrate” as premise.

Problem evidence to fix; evidence = P.`,
    expert: `Advisory closure

Rest is downstream; the sleep and focus link is P—same stack as 1057 and 1067.`,
  },

  1078: {
    beginner: `Scarcity pricing — second pass (premise)

1. Low supply = P. Prices will rise = Q.

2. The price move is what you infer—not what you list as the given reason.`,
    intermediate: `Economics — second pass

1. P = tight market; Q = price forecast.

2. Example: “Since dock space is scarce, freight surcharges will spike.” P = scarcity—not “surcharges” as premise.

Condition first, price second; condition = P.`,
    expert: `Exogenous tag

Price is endogenous in the toy story; supply is the stated premise—as in 1058 and 1068.`,
  },

  1079: {
    beginner: `Companion animals — second pass (premise)

1. Dogs are social = P. Need company = Q.

2. Trait grounds welfare conclusion—trait stays in the premise slot.`,
    intermediate: `Dogs — second pass

1. P = ethology; Q = care implication.

2. Example: “Since corvids cache food, they need cognitive enrichment in captivity.” P = caching—not “enrichment” as premise.

Trait to need; trait = P.`,
    expert: `Inference target

Company need is inferred; sociability is P—mirror 1059 and 1069.`,
  },

  1080: {
    beginner: `Intonation — second pass (premise)

1. Out of tune = P. Will sound bad = Q.

2. Setup fault supports sonic judgment—fault is not the judgment.`,
    intermediate: `Guitar — second pass

1. P = tuning; Q = timbre verdict.

2. Example: “Since the head is dented, the drum will ring oddly.” P = dent—not “ring oddly” as premise.

Mechanics to aesthetics; mechanics = P.`,
    expert: `Evaluation dependency

Bad sound is conditional on tuning; the tuning claim is P—same as 1060.`,
  },

  1081: {
    beginner: `Oven setpoint — third pass (premise)

1. Same oven and cake line as earlier IDs—roles fixed: “The oven is too hot” = P. “The cake will burn” = Q.

2. Third pass = new ID, identical P/Q map.`,
    intermediate: `Baking — third pass

1. P = thermal overshoot; Q = burn risk.

2. Example: “Since the pan is on high, the sauce will scorch.” P = heat setting—not “scorch” as premise.

Equipment state to food fate; state = P.`,
    expert: `Control variable

Burn is dependent on heat in the story; too hot is the cited premise—same as other oven cards.`,
  },

  1082: {
    beginner: `Training load — third pass (premise)

1. “You practiced hard” = P (past effort). “You will finish faster” = Q (projected pace).

2. Third pass repeats effort to forecast with fresh stem.`,
    intermediate: `Practice — third pass

1. P = training load; Q = completion speed claim.

2. Example: “Since you drilled scales daily, this étude will take fewer run-throughs.” P = drill—not “fewer run-throughs” as premise.

Anchor in what happened; projection = Q.`,
    expert: `Projection anchor

Faster finish is forward-looking; the practice line is P.`,
  },

  1083: {
    beginner: `Sky cue — third pass (premise)

1. Dark clouds = P. Going to rain = Q.

2. Level-0 rule: sign to event; sign = premise.`,
    intermediate: `Weather — third pass

1. P = appearance; Q = precipitation call.

2. Example: “Since the barometer is falling fast, squalls are likely.” P = pressure trend—not “squalls” as premise.

Observation first, forecast second.`,
    expert: `Heuristic boundary

Real meteorology is richer; here, clouds = P, rain = Q only.`,
  },

  1084: {
    beginner: `Starter chain — third pass (premise)

1. Battery empty = P. Won’t start = Q (symptom).

2. Cause state vs failure—state is premise when asked.`,
    intermediate: `Automotive — third pass

1. P = stored energy; Q = cranking outcome.

2. Example: “Since the fuse is blown, the pump won’t run.” P = fuse—not “pump won’t run” as premise.

Source fault to symptom; fault = P.`,
    expert: `Symptom vs. cause

No start is inferred; empty battery is posited as support.`,
  },

  1085: {
    beginner: `Photon budget — third pass (premise)

1. Plants need light = P. Near the window = Q (placement ought).

2. Biological need supports spatial fix—need is P.`,
    intermediate: `Indoor plants — third pass

1. P = autotroph requirement; Q = architecture advice.

2. Example: “Since seedlings need warmth, use a heat mat under the tray.” P = warmth need—not “heat mat” as premise.

Need to means; need = P.`,
    expert: `Means to an end

Window is justified by light need; light need is P.`,
  },

  1086: {
    beginner: `Quiet venue — third pass (premise)

1. Silence required = P (rule). Speak softly = Q (conduct).

2. Regulative context first; manners second—rule = P.`,
    intermediate: `Noise norms — third pass

1. P = mandate; Q = volume adjustment.

2. Example: “Since this ward is silent after nine, keep voices down in the corridor.” P = quiet hours—not “voices down” as premise.

Rule to compliance; rule = P.`,
    expert: `Compliance mapping

Soft speech is mapped to the rule; the silence rule text is P.`,
  },

  1087: {
    beginner: `Daily walk — third pass (premise)

1. Exercise improves health = P. Walk daily = Q (specific habit).

2. Abstract benefit supports concrete regimen—abstract = P.`,
    intermediate: `Regimen — third pass

1. P = benefit generalization; Q = instantiated habit.

2. Example: “Since strength training preserves bone density, you should lift twice a week.” P = density link—not “lift twice” as premise.

General link to application; link = P.`,
    expert: `Instantiation

Daily walk instantiates the exercise idea; the health link is P.`,
  },

  1088: {
    beginner: `Substitution line — third pass (premise)

1. X = 5 = P (given). X + 2 = 7 = Q (derived).

2. Givens premise; derived line conclusion—in formal drills.`,
    intermediate: `Algebra — third pass

1. P = assignment; Q = one-step consequence.

2. Example: “Since n = 12, n − 4 = 8.” P = n = 12—not “8” as premise.

Do not call the computed equality P.`,
    expert: `Derivability

Second equality is derivable; first line is premise-like in this pair.`,
  },

  1089: {
    beginner: `Flood tide — third pass (premise)

1. Tide coming in = P. Beach smaller = Q (usable sand).

2. Forcing vs layout—forcing = P.`,
    intermediate: `Intertidal — third pass

1. P = hydrodynamic phase; Q = dry-sand footprint.

2. Example: “Since the river is rising, the towpath will flood.” P = stage—not “towpath floods” as premise.

Process premise; visitor-visible change = Q.`,
    expert: `Experienced geometry

Shrinkage is experienced; incoming tide is posited P.`,
  },

  1090: {
    beginner: `Lookback — third pass (premise)

1. Light takes time = P (finite speed). See stars as they were = Q (lookback).

2. Delay supports historical viewing—physics claim = P.`,
    intermediate: `Starlight — third pass

1. P = propagation delay; Q = what the image “shows.”

2. Example: “Since sound is slow, you hear the thunder after the flash.” P = finite sound speed—not “thunder after” as premise.

Signal-path claim to interpretation; path = P.`,
    expert: `Signal path

Premise = timing of light; conclusion = what we see—do not swap.`,
  },

  1091: {
    beginner: `Weight and drop — fourth pass (premise)

1. Fourth pass on gravity and apple: “Gravity pulls objects down” = P. Apple will fall = Q.

2. Same template as 1071 and first-pass gravity items—first content clause = support.`,
    intermediate: `Gravity — fourth pass

1. P = field story; Q = token fall.

2. Example (same map): “Since masses attract, this brick will drop when released.” P = attraction—not “brick drops” as premise.

Law-like first; case second; first = P.`,
    expert: `Support direction

Fall is takeaway; gravity line is P—aligned with 1071.`,
  },

  1092: {
    beginner: `Daily speaking — fourth pass (premise)

1. Practice to fluency = P. Speak daily = Q.

2. Fourth pass = same mechanism and schedule split as 1072 (fluency line).`,
    intermediate: `Fluency — fourth pass

1. P = mechanism; Q = cadence prescription.

2. Example: “Since retrieval practice beats rereading, quiz yourself every chapter.” P = retrieval effect—not “quiz yourself” as premise.

Why practice matters = P; how often = Q.`,
    expert: `Policy consequent

Daily speaking = consequent; practice–fluency = antecedent P.`,
  },

  1093: {
    beginner: `AP off — fourth pass (premise)

1. Router off = P. Wi‑Fi won’t work = Q.

2. Fourth pass on box to air—power state = P.`,
    intermediate: `Router — fourth pass

1. P = CPE; Q = WLAN expectation.

2. Example: “Since the upstream modem is offline, the LAN won’t reach the internet.” P = modem—not “no internet” as premise.

Edge state premise; service = Q.`,
    expert: `Dependency direction

Service is downstream; router state is upstream P.`,
  },

  1094: {
    beginner: `Conservation risk — fourth pass (premise)

1. Fragile = P. Careful handling = Q.

2. Fourth pass on risk to protocol—hazard register first.`,
    intermediate: `Artifacts — fourth pass

1. P = material risk; Q = handling control.

2. Example: “Since nitrated film is unstable, store it in cold vented cans.” P = instability—not “vented cans” as premise.

Descriptive first; prescriptive second; descriptive = P.`,
    expert: `Obligation not premise

Handling supported by fragility; fragility not inferred from obligation.`,
  },

  1095: {
    beginner: `Palette fact — fourth pass (premise)

1. Red + blue to purple = P. Mix for violet = Q (imperative).

2. Recipe premises; gesture conclusions.`,
    intermediate: `Pigment — fourth pass

1. P = composition; Q = command.

2. Example: “Since linseed oil oxidizes slowly, thin paint in small cups.” P = oxidation—not “small cups” as premise.

What colors do = P; what you do = Q.`,
    expert: `Imperative as target

Mix is target justified by fact; fact = P.`,
  },

  1096: {
    beginner: `STOP mapping — fourth pass (premise)

1. Red light = P. Must stop = Q.

2. Fourth pass on signal to duty—aspect = P.`,
    intermediate: `Traffic — fourth pass

1. P = phase; Q = obligation.

2. Example: “Since the barrier is down, do not enter the crossing.” P = barrier—not “do not enter” as premise.

Observation = P; norm = Q.`,
    expert: `Normative consequent

Stop = normative consequent; red = empirical antecedent P.`,
  },

  1097: {
    beginner: `Sleep debt — fourth pass (premise)

1. Sleep hurts focus = P. Should rest = Q.

2. Fourth pass on deficit to remedy—harm = P.`,
    intermediate: `Cognitive — fourth pass

1. P = deficit claim; Q = recovery advice.

2. Example: “Since noise fragments attention, students should use earplugs for exams.” P = fragmentation—not “earplugs” as premise.

Problem evidence = P; fix = Q.`,
    expert: `Advisory structure

Rest is downstream; focus deficit is stated P.`,
  },

  1098: {
    beginner: `Scarcity bid — fourth pass (premise)

1. Supply low = P. Prices rise = Q.

2. Condition explicit as premise; price = forecast Q.`,
    intermediate: `Market — fourth pass

1. P = tightness; Q = price move.

2. Example: “Since berth queues grew, demurrage fees will climb.” P = queue—not “demurrage” as premise.

State first; price second; state = P.`,
    expert: `Conditional forecast

Price conditional on supply; supply text = P.`,
  },

  1099: {
    beginner: `Social species — fourth pass (premise)

1. Dogs social = P. Need company = Q.

2. Fourth pass on trait to care—keep slots straight.`,
    intermediate: `Welfare — fourth pass

1. P = trait; Q = practical upshot.

2. Example: “Since parrots bond strongly, they need daily interaction.” P = bonding—not “daily interaction” as premise.

General fact = P; need = Q.`,
    expert: `Inferred need

Company need inferred; sociability = ground P.`,
  },

  1100: {
    beginner: `Pitch fault — fourth pass (premise)

1. Out of tune = P. Will sound bad = Q.

2. Fourth pass on setup to judgment—fault = P.`,
    intermediate: `Guitar — fourth pass

1. P = tuning defect; Q = timbre verdict.

2. Example: “Since the reed is chipped, the clarinet will honk.” P = chip—not “honk” as premise.

Fault = P; quality verdict = Q.`,
    expert: `Conditional aesthetics

Bad sound given tuning; tuning = independent P in the pair.`,
  },

  1101: {
    beginner: `**Oven / cake — identify the conclusion**

Task flips from **premise** picks: here you want **Q** in **“P, therefore Q.”**

**Correct (index 1):** **“the cake will burn”** — what **therefore** **establishes**.

**Not the conclusion:** **“The oven is too hot”** = **P** (reason). **“therefore”** = cue word. **“neither”** = wrong when a conclusion exists.`,
    intermediate: `**Therefore-slot**

1. Split on **therefore**: **[before]**, **[after]**.
2. **After** = **conclusion** (inferential target). **Before** = **premise**.

**Different example:** “The ice is thin, **therefore** crossing is unsafe.” **Conclusion** = unsafe crossing—not “ice is thin.”

**Takeaway:** **Therefore** marks **what follows**; pick that **content**, not the **support**.`,
    expert: `**Consequent role**

**Not to be confused with:** **Cake outcome** = **consequent**; **oven heat** = **antecedent** **support**—same labeling as premise drills, **polarity** of the question only changes.`,
  },

  1102: {
    beginner: `**Performance prediction — conclusion**

**Correct (index 1):** **“you will finish faster”** — **Q** (projected pace).

**P (distractor):** **“You practiced hard”** — evidence, **not** what you **conclude**.`,
    intermediate: `**Evidence vs. forecast**

1. **P** = past effort. **Q** = completion speed.
2. **Therefore** points to **Q**.

**Different example:** “She logged many reps, **therefore** her time trial will improve.” **Conclusion** = improvement—not “many reps.”

**Takeaway:** Asked for **conclusion** → take the clause **after** **therefore**.`,
    expert: `**Supported prediction**

**Not to be confused with:** **Speed** is what the line **establishes**; **practice** is what it **rests on**.`,
  },

  1103: {
    beginner: `**Weather call — conclusion**

**Correct (index 1):** **“it is going to rain”** — **Q** (forecast).

**P:** **“The clouds are dark”** — sign, **not** the **conclusion**.`,
    intermediate: `**Sign → event (conclusion side)**

1. **P** = appearance. **Q** = precipitation call.
2. **Therefore** → **prediction**.

**Different example:** “Barometer falling fast, **therefore** squalls likely.” **Conclusion** = squalls—not the barometer reading.

**Takeaway:** In **therefore** drills, **forecasts** = **conclusion** slot.`,
    expert: `**Inferential target**

**Not to be confused with:** **Rain** is **inferred**; **clouds** are **basis**—**basis** = **premise** when the other polarity is asked.`,
  },

  1104: {
    beginner: `**No-start — conclusion**

**Correct (index 1):** **“the car won't start”** — **Q** (symptom / failure mode).

**P:** **“The battery is empty”** — **state** you **reason from**.`,
    intermediate: `**Symptom as conclusion**

1. **P** = stored energy absent. **Q** = cranking outcome.
2. Pick **Q** for **conclusion**.

**Different example:** “The fuse is blown, **therefore** the pump won’t run.” **Conclusion** = won’t run—not “fuse blown.”

**Takeaway:** **Downstream** **failure** claim = **conclusion** here.`,
    expert: `**Downstream failure**

**Not to be confused with:** **No-start** is **downstream** of **battery**; **downstream** = **Q** when identifying **conclusion**.`,
  },

  1105: {
    beginner: `**Plant placement — conclusion**

**Correct (index 1):** **“they should be near the window”** — **Q** (**placement ought**).

**P:** **“Plants need light”** — **need** as **support**.`,
    intermediate: `**Ought from need**

1. **P** = biological need. **Q** = spatial advice.
2. **Therefore** → **should** / placement.

**Different example:** “Seedlings need warmth, **therefore** use a heat mat.” **Conclusion** = use a heat mat—not “need warmth” alone as the **conclusion** choice when both appear.

**Takeaway:** **Prescriptive** clause after **therefore** = **conclusion**.`,
    expert: `**Normative consequent**

**Not to be confused with:** **Window** advice is **normative** **Q**; **light need** is **descriptive** **P**.`,
  },

  1106: {
    beginner: `**Quiet conduct — conclusion**

**Correct (index 1):** **“we must speak softly”** — **Q** (conduct).

**P:** **“Silence is required”** — **rule** context.`,
    intermediate: `**Rule → compliance**

1. **P** = mandate. **Q** = volume / behavior.
2. Select **conduct** as **conclusion**, not the **rule** text.

**Different example:** “Quiet hours after nine, **therefore** keep voices down.” **Conclusion** = keep voices down—not “quiet hours” as the **conclusion** option when both are listed.

**Takeaway:** **Compliance** after **therefore** = **conclusion**.`,
    expert: `**Deontic conclusion**

**Not to be confused with:** **Soft speech** = **deontic** **Q**; **silence rule** = **P**.`,
  },

  1107: {
    beginner: `**Walk plan — conclusion**

**Correct (index 1):** **“we should walk daily”** — **Q** (habit).

**P:** **“Exercise improves health”** — **general** benefit.`,
    intermediate: `**General → specific ought**

1. **P** = benefit link. **Q** = instantiated regimen.
2. **Therefore** → **specific** **should**.

**Different example:** “Strength training preserves bone density, **therefore** lift twice a week.” **Conclusion** = lift twice—not “preserves density” as the **conclusion** pick.

**Takeaway:** **Action plan** = **conclusion**; **abstract benefit** = **premise**.`,
    expert: `**Instantiated prescription**

**Not to be confused with:** **Daily walk** is what the line **closes** with; **health benefit** is what it **opens** from.`,
  },

  1108: {
    beginner: `**Derived equation — conclusion**

**Correct (index 1):** **“X plus 2 equals 7”** (or equivalent) — **Q** (**derived** line).

**P:** **“X equals 5”** — **given**.`,
    intermediate: `**Algebra step**

1. **P** = assignment / given. **Q** = computed equality.
2. **Therefore** → **result** of the step.

**Different example:** “n = 12, **therefore** n − 4 = 8.” **Conclusion** = 8 line—not “n = 12.”

**Takeaway:** **Givens** = **P**; **derived** = **conclusion** when asked.`,
    expert: `**Derivational target**

**Not to be confused with:** Second equality is what the step **establishes**; **X = 5** is what it **starts** from.`,
  },

  1109: {
    beginner: `**Shoreline — conclusion**

**Correct (index 1):** **“the beach will get smaller”** — **Q** (**layout** outcome).

**P:** **“The tide is coming in”** — **forcing**.`,
    intermediate: `**Forcing → layout**

1. **P** = tide phase. **Q** = dry-sand footprint.
2. **Therefore** → **experienced** geometry.

**Different example:** “The river is rising, **therefore** the towpath will flood.” **Conclusion** = towpath floods—not “river rising” as the **conclusion** choice.

**Takeaway:** **Shrinkage** / layout = **conclusion**; **process** = **premise**.`,
    expert: `**Experienced effect**

**Not to be confused with:** **Shrinkage** is **argued as** **consequent**; **incoming tide** is **antecedent** **support**.`,
  },

  1110: {
    beginner: `**Lookback — conclusion**

**Correct (index 1):** **“we see stars as they were”** — **Q** (**what the image shows**).

**P:** **“Light takes time to travel”** — **propagation** **fact**.`,
    intermediate: `**Delay → appearance**

1. **P** = finite speed / delay. **Q** = lookback / past-state viewing.
2. **Therefore** → **seeing** claim.

**Different example:** “Sound is slow, **therefore** thunder follows the flash.” **Conclusion** = thunder follows—not “sound is slow” as the **conclusion** when both are separate options.

**Takeaway:** **Phenomenology** after **therefore** = **conclusion**; **physics** of **signal** = **premise**.`,
    expert: `**Phenomenological consequent**

**Not to be confused with:** **Viewing** claim = **Q**; **travel time** = **P**—do **not** swap when the prompt asks for **conclusion**.`,
  },

  1111: {
    beginner: `**Gravity / apple — conclusion (second pass)**

Same bank line as other gravity items—task is still **conclusion**: **Q** after **therefore**.

**Correct (index 1):** **“the apple will fall”** — **token** motion claim.

**P (distractor):** **“Gravity pulls objects down”** — **support**, not what you **conclude**.`,
    intermediate: `**Instance outcome**

1. **P** = universal pull. **Q** = this apple’s fall.
2. **Therefore** → **instance-level** prediction.

**Different example:** “Masses attract, **therefore** this brick drops when released.” **Conclusion** = drops—not “masses attract.”

**Takeaway:** Pick the **specific outcome** after **therefore** for **conclusion**.`,
    expert: `**Token consequent**

**Not to be confused with:** **Fall** = **token** **Q**; **gravity** wording = **P**—same map as premise IDs **1071** / **1091**, **polarity** flipped.`,
  },

  1112: {
    beginner: `**Daily speaking — conclusion (second pass)**

**Correct (index 1):** **“you should speak daily”** — **Q** (schedule **ought**).

**P:** **“Practice improves fluency”** — mechanism, **not** the **conclusion**.`,
    intermediate: `**Prudential target**

1. **P** = practice → fluency. **Q** = daily cadence.
2. The **should** about **when** = **conclusion**.

**Different example:** “Retrieval beats rereading, **therefore** quiz yourself each chapter.” **Conclusion** = quiz yourself—not “retrieval beats rereading” as the **conclusion** pick.

**Takeaway:** **Policy** after **therefore** = **conclusion**; **mechanism** = **premise**.`,
    expert: `**Schedule consequent**

**Not to be confused with:** **Daily speaking** = **prudential** **Q**; **practice–fluency** = **P**.`,
  },

  1113: {
    beginner: `**WLAN — conclusion (second pass)**

**Correct (index 1):** **“the Wi-Fi won't work”** — **Q** (**service** layer).

**P:** **“The router is off”** — **edge** state.`,
    intermediate: `**Service-layer claim**

1. **P** = CPE down. **Q** = WLAN unusable.
2. **Therefore** → **user-visible** failure.

**Different example:** “Modem offline, **therefore** no LAN internet.” **Conclusion** = no internet—not “modem offline.”

**Takeaway:** **Symptom / service** after **therefore** = **conclusion**.`,
    expert: `**Downstream service**

**Not to be confused with:** **Wi‑Fi failure** = **downstream** **Q**; **router** state = **P**.`,
  },

  1114: {
    beginner: `**Handling norm — conclusion (second pass)**

**Correct (index 1):** **“they need careful handling”** — **Q** (**control**).

**P:** **“Artifacts are fragile”** — **risk** fact.`,
    intermediate: `**Descriptive → prescriptive**

1. **P** = fragility. **Q** = care norm.
2. Select the **norm** as **conclusion**.

**Different example:** “Nitrated film is unstable, **therefore** store it in vented cold cans.” **Conclusion** = storage protocol—not “unstable” as the **conclusion** option when both appear.

**Takeaway:** **Need / must / should** handling = **conclusion** after **therefore**.`,
    expert: `**Control consequent**

**Not to be confused with:** **Careful handling** = **control** **Q**; **fragility** = **P**.`,
  },

  1115: {
    beginner: `**Mix command — conclusion (second pass)**

**Correct (index 1):** **“mix them for violet”** — **Q** (**imperative**).

**P:** **“Red and blue make purple”** — **recipe** fact.`,
    intermediate: `**Imperative consequent**

1. **P** = composition. **Q** = command.
2. **Therefore** → **what to do**.

**Different example:** “Linseed oil oxidizes slowly, **therefore** thin paint in small cups.” **Conclusion** = small cups—not “oxidizes slowly” as the **conclusion** pick.

**Takeaway:** **Order to mix** = what the line **establishes**; **color fact** = **premise**.`,
    expert: `**Instrumental consequent**

**Not to be confused with:** **Mix** imperative = **instrumental** **Q**; **pigment** fact = **P**.`,
  },

  1116: {
    beginner: `**Must stop — conclusion (second pass)**

**Correct (index 1):** **“drivers must stop”** — **Q** (**deontic**).

**P:** **“The light is red”** — **signal**.`,
    intermediate: `**Deontic after descriptive**

1. **P** = red aspect. **Q** = stop obligation.
2. **Therefore** → **rule for drivers**.

**Different example:** “Barrier down, **therefore** don’t enter the crossing.” **Conclusion** = don’t enter—not “barrier down.”

**Takeaway:** **Must stop** = **conclusion**; **red** = **basis** (**premise**).`,
    expert: `**Regulatory consequent**

**Not to be confused with:** **Stopping** = **regulatory** **Q**; **signal** = **factual** **P**.`,
  },

  1117: {
    beginner: `**Rest advice — conclusion (second pass)**

**Correct (index 1):** **“students should rest”** — **Q** (**remedy**).

**P:** **“Lack of sleep affects focus”** — **harm** claim.`,
    intermediate: `**Remedy slot**

1. **P** = cognitive deficit. **Q** = rest prescription.
2. **Therefore** → **recommended response**.

**Different example:** “Noise fragments attention, **therefore** use earplugs for exams.” **Conclusion** = earplugs—not “noise fragments” as the **conclusion** pick.

**Takeaway:** **Closing advice** = **conclusion**; **problem** claim = **premise**.`,
    expert: `**Advisory consequent**

**Not to be confused with:** **Rest** = **advisory** **Q**; **sleep/focus** harm = **P**.`,
  },

  1118: {
    beginner: `**Price move — conclusion (second pass)**

**Correct (index 1):** **“prices will rise”** — **Q** (**forecast**).

**P:** **“Supply is low”** — **market** condition.`,
    intermediate: `**Forecast consequent**

1. **P** = scarcity. **Q** = price pressure.
2. Pick **price** clause as **conclusion**.

**Different example:** “Berth queues grew, **therefore** demurrage will spike.” **Conclusion** = demurrage spike—not “queues grew.”

**Takeaway:** **Price movement** = **conclusion**; **supply state** = **premise**.`,
    expert: `**Price consequent**

**Not to be confused with:** **Price forecast** = **economic** **Q**; **supply tightness** = **antecedent** **P**.`,
  },

  1119: {
    beginner: `**Need company — conclusion (second pass)**

**Correct (index 1):** **“they need company”** — **Q** (**welfare**).

**P:** **“Dogs are social”** — **trait**.`,
    intermediate: `**Welfare inference**

1. **P** = sociability. **Q** = companionship need.
2. **Therefore** → **need** statement.

**Different example:** “Parrots bond strongly, **therefore** they need daily interaction.” **Conclusion** = need interaction—not “bond strongly” as the **conclusion** option when both are listed.

**Takeaway:** **Inferred need** = **conclusion**; **trait** = **premise**.`,
    expert: `**Welfare consequent**

**Not to be confused with:** **Company need** = **welfare** **Q**; **social trait** = **P**.`,
  },

  1120: {
    beginner: `**Bad sound — conclusion (second pass)**

**Correct (index 1):** **“it will sound bad”** — **Q** (**sonic** verdict).

**P:** **“The guitar is out of tune”** — **setup** fault.`,
    intermediate: `**Aesthetic prediction**

1. **P** = tuning defect. **Q** = timbre judgment.
2. **Therefore** → **auditory evaluation**.

**Different example:** “The reed is chipped, **therefore** the clarinet will honk.” **Conclusion** = will honk—not “reed chipped.”

**Takeaway:** **Quality** verdict after **therefore** = **conclusion**; **fault** = **premise**.`,
    expert: `**Aesthetic consequent**

**Not to be confused with:** **Bad sound** = **aesthetic** **Q**; **tuning** = **diagnostic** **P**.`,
  },

  1121: {
    beginner: `**Burn outcome — conclusion (third pass)**

Same **oven / cake** line as **1101** / earlier conclusion IDs—pick **Q** after **therefore**.

**Correct (index 1):** **“the cake will burn”** — **downstream** food fate.

**P:** **“The oven is too hot”** — **thermal** reason (**not** the **conclusion**).`,
    intermediate: `**Overcooking claim**

1. **P** = heat overshoot. **Q** = burn / scorch.
2. **Therefore** → **damage** to the bake.

**Different example:** “The pan is on high, **therefore** the sauce will scorch.” **Conclusion** = scorch—not “pan on high.”

**Takeaway:** **Culinary harm** = **conclusion**; **equipment state** = **premise**.`,
    expert: `**Culinary consequent**

**Not to be confused with:** **Burn** = **culinary** **Q**; **too hot** = **operational** **P**—third pass, same map as **1101**.`,
  },

  1122: {
    beginner: `**Speed claim — conclusion (third pass)**

**Correct (index 1):** **“you will finish faster”** — **Q** (**pace**).

**P:** **“You practiced hard”** — **effort** anchor.`,
    intermediate: `**Performance consequent**

1. **P** = training load. **Q** = completion speed.
2. **Therefore** → **what improves**.

**Different example:** “She logged many reps, **therefore** her time trial will improve.” **Conclusion** = improve—not “many reps.”

**Takeaway:** Pick **performance** after **therefore** for **conclusion**.`,
    expert: `**Timing consequent**

**Not to be confused with:** **Faster finish** = **timing** **Q**; **practice** = **P**.`,
  },

  1123: {
    beginner: `**Rain now — conclusion (third pass)**

**Correct (index 1):** **“it is going to rain”** — **Q** (**forecast**).

**P:** **“The clouds are dark”** — **sign**.`,
    intermediate: `**Forecast slot**

1. **P** = sky look. **Q** = precipitation call.
2. **Therefore** → **heuristic** forecast, not the **observation**.

**Different example:** “Barometer falling, **therefore** squalls likely.” **Conclusion** = squalls—not “barometer.”

**Takeaway:** **Weather call** = **conclusion**; **cue** = **premise**.`,
    expert: `**Meteorological consequent**

**Not to be confused with:** **Rain** = **consequent**; **clouds** = **antecedent** **sign** (**P**).`,
  },

  1124: {
    beginner: `**Crank failure — conclusion (third pass)**

**Correct (index 1):** **“the car won't start”** — **Q** (**no-start**).

**P:** **“The battery is empty”** — **charge** state.`,
    intermediate: `**Electromechanical consequent**

1. **P** = no usable charge. **Q** = starter outcome.
2. Select **symptom** line as **conclusion**.

**Different example:** “Fuse blown, **therefore** pump won’t run.” **Conclusion** = won’t run—not “fuse blown.”

**Takeaway:** **No-start** after **therefore** = **conclusion** in roadside pattern.`,
    expert: `**Starter consequent**

**Not to be confused with:** **No-start** = **starter-chain** **Q**; **empty battery** = **power** **P**.`,
  },

  1125: {
    beginner: `**Window placement — conclusion (third pass)**

**Correct (index 1):** **“they should be near the window”** — **Q** (**layout**).

**P:** **“Plants need light”** — **need**.`,
    intermediate: `**Horticultural consequent**

1. **P** = light dependence. **Q** = by-the-glass placement.
2. **Therefore** → **where** to put them.

**Different example:** “Seedlings need warmth, **therefore** use a heat mat.” **Conclusion** = heat mat—not “need warmth” as the **conclusion** pick.

**Takeaway:** **Where** = **conclusion**; **need** = **premise**.`,
    expert: `**Layout consequent**

**Not to be confused with:** **Window** spot = **layout** **Q**; **photon need** = **P**.`,
  },

  1126: {
    beginner: `**Soft speech — conclusion (third pass)**

**Correct (index 1):** **“we must speak softly”** — **Q** (**conduct**).

**P:** **“Silence is required”** — **venue** rule.`,
    intermediate: `**Compliance consequent**

1. **P** = quiet mandate. **Q** = volume compliance.
2. **Therefore** → **how** to speak.

**Different example:** “Quiet hours after nine, **therefore** keep voices down.” **Conclusion** = voices down—not “quiet hours.”

**Takeaway:** **How to speak** = **conclusion**; **setting rule** = **premise**.`,
    expert: `**Acoustic compliance**

**Not to be confused with:** **Soft speech** = **compliance** **Q**; **silence rule** = **antecedent** **P**.`,
  },

  1127: {
    beginner: `**Daily walk — conclusion (third pass)**

**Correct (index 1):** **“we should walk daily”** — **Q** (**habit**).

**P:** **“Exercise improves health”** — **general** benefit.`,
    intermediate: `**Regimen consequent**

1. **P** = benefit link. **Q** = concrete walk plan.
2. **Therefore** → **specific** regimen.

**Different example:** “Strength preserves bone density, **therefore** lift twice weekly.” **Conclusion** = lift—not “preserves density” as the **conclusion** option.

**Takeaway:** **Concrete plan** = **conclusion**; **abstract benefit** = **premise**.`,
    expert: `**Behavioral instantiation**

**Not to be confused with:** **Daily walk** = **behavioral** **Q**; **health benefit** premise = **P**.`,
  },

  1128: {
    beginner: `**Second equality — conclusion (third pass)**

**Correct (index 1):** **“X plus 2 equals 7”** (or equivalent) — **Q** (**derived**).

**P:** **“X equals 5”** — **given**.`,
    intermediate: `**Derivational consequent**

1. **P** fixes **X**. **Q** = one-step **+2**.
2. **Therefore** → **computed** line.

**Different example:** “n = 12, **therefore** n − 4 = 8.” **Conclusion** = second equality—not “n = 12.”

**Takeaway:** **Derived** row = **conclusion**; **given** = **premise**.`,
    expert: `**Algebraic consequent**

**Not to be confused with:** **Second** equality = **algebraic** **Q**; **substitution** premise = **P**.`,
  },

  1129: {
    beginner: `**Beach width — conclusion (third pass)**

**Correct (index 1):** **“the beach will get smaller”** — **Q** (**shore** layout).

**P:** **“The tide is coming in”** — **forcing**.`,
    intermediate: `**Spatial consequent**

1. **P** = rising water. **Q** = less dry sand.
2. **Therefore** → **usable** beach **geometry**.

**Different example:** “River rising, **therefore** towpath floods.” **Conclusion** = floods—not “river rising.”

**Takeaway:** **Shrinkage** = **conclusion**; **tide** = **premise**.`,
    expert: `**Littoral consequent**

**Not to be confused with:** **Beach shrinkage** = **littoral** **Q**; **incoming tide** = **hydrodynamic** **P**.`,
  },

  1130: {
    beginner: `**Past image — conclusion (third pass)**

**Correct (index 1):** **“we see stars as they were”** — **Q** (**seeing** / lookback).

**P:** **“Light takes time to travel”** — **propagation**.`,
    intermediate: `**Appearance consequent**

1. **P** = finite speed / delay. **Q** = past-state **viewing**.
2. **Therefore** → **what the image** “**shows**.”

**Different example:** “Sound is slow, **therefore** thunder follows the flash.” **Conclusion** = thunder follows—not “sound is slow.”

**Takeaway:** **Viewing** thesis after **therefore** = **conclusion**; **physics** of **signal** = **premise**.`,
    expert: `**Observational consequent**

**Not to be confused with:** **Past-state seeing** = **observational** **Q**; finite-*c* **delay** story = **physical** **P** (Level 0 gloss).`,
  },

  1131: {
    beginner: `**Fall prediction — conclusion (fourth pass)**

Same **gravity → apple** bank line—pick **conclusion** (**Q**), index **1**.

**Correct:** **“the apple will fall”** — **kinematic** **Q**.

**P:** **“Gravity pulls objects down”** — **support**, not the **target**.`,
    intermediate: `**Consequent after therefore**

1. Split on **therefore**: **support** | **outcome**.
2. **Outcome** = **conclusion**; ignore **cue words** as content answers.

**Different example:** “Masses attract, **therefore** this brick drops.” **Conclusion** = drops—not “masses attract.”

**Takeaway:** **Therefore** → **what follows** = **conclusion**.`,
    expert: `**Motion consequent**

**Not to be confused with:** **Fall** = **motion** **Q**; **gravity** wording = **P**—fourth pass, same map as **1111** / **1091**.`,
  },

  1132: {
    beginner: `**Speak daily — conclusion (fourth pass)**

**Correct (index 1):** **“you should speak daily”** — **Q** (**cadence**).

**P:** **“Practice improves fluency”** — **mechanism**.`,
    intermediate: `**Prudential conclusion**

1. **P** = practice → fluency. **Q** = daily **ought**.
2. **Therefore** → **frequency** policy.

**Different example:** “Retrieval beats rereading, **therefore** quiz each chapter.” **Conclusion** = quiz—not “retrieval beats rereading.”

**Takeaway:** **Policy** after **therefore** = **conclusion**.`,
    expert: `**Schedule consequent**

**Not to be confused with:** **Daily speaking** = **schedule** **Q**; **practice premise** = **P**.`,
  },

  1133: {
    beginner: `**Wi‑Fi outage — conclusion (fourth pass)**

**Correct (index 1):** **“the Wi-Fi won't work”** — **Q** (**service**).

**P:** **“The router is off”** — **power** / edge state.`,
    intermediate: `**Service conclusion**

1. **P** = router down. **Q** = WLAN unusable.
2. Select **Wi‑Fi** line as **conclusion**.

**Different example:** “Modem offline, **therefore** no LAN internet.” **Conclusion** = no internet—not “modem offline.”

**Takeaway:** **Symptom / service** **downstream** = **conclusion**.`,
    expert: `**Connectivity consequent**

**Not to be confused with:** **Wireless failure** = **connectivity** **Q**; **router power** = **P**.`,
  },

  1134: {
    beginner: `**Careful handling — conclusion (fourth pass)**

**Correct (index 1):** **“they need careful handling”** — **Q** (**care** norm).

**P:** **“Artifacts are fragile”** — **risk**.`,
    intermediate: `**Prescriptive conclusion**

1. **P** = fragility. **Q** = handling norm.
2. **Therefore** → what is **argued for** (prescriptive).

**Different example:** “Nitrated film is unstable, **therefore** store in vented cold cans.” **Conclusion** = storage protocol—not “unstable” as the **conclusion** pick.

**Takeaway:** **Prescriptive** follow = **conclusion**.`,
    expert: `**Conservation consequent**

**Not to be confused with:** **Care rules** = **conservation** **Q**; **fragility** = **P**.`,
  },

  1135: {
    beginner: `**Mix for violet — conclusion (fourth pass)**

**Correct (index 1):** **“mix them for violet”** — **Q** (**imperative**).

**P:** **“Red and blue make purple”** — **composition**.`,
    intermediate: `**Craft conclusion**

1. **P** = color outcome. **Q** = command.
2. **Therefore** → **instruction**.

**Different example:** “Linseed oxidizes slowly, **therefore** thin paint in small cups.” **Conclusion** = small cups—not “oxidizes slowly.”

**Takeaway:** **Instruction** after **therefore** = **conclusion**.`,
    expert: `**Instrumental consequent**

**Not to be confused with:** **Mix** command = **instrumental** **Q**; **color-mix** fact = **P**.`,
  },

  1136: {
    beginner: `**Must stop — conclusion (fourth pass)**

**Correct (index 1):** **“drivers must stop”** — **Q** (**traffic** duty).

**P:** **“The light is red”** — **signal**.`,
    intermediate: `**Deontic conclusion**

1. **P** = red aspect. **Q** = stop obligation.
2. **Therefore** → **drivers’ duty**.

**Different example:** “Barrier down, **therefore** don’t enter crossing.” **Conclusion** = don’t enter—not “barrier down.”

**Takeaway:** **Must**-claims about drivers = **conclusion**; **signal** = **premise**.`,
    expert: `**Compliance consequent**

**Not to be confused with:** **Stopping** = **compliance** **Q**; **red** aspect = **antecedent** **P**.`,
  },

  1137: {
    beginner: `**Students rest — conclusion (fourth pass)**

**Correct (index 1):** **“students should rest”** — **Q** (**remedy**).

**P:** **“Lack of sleep affects focus”** — **harm**.`,
    intermediate: `**Advisory conclusion**

1. **P** = focus deficit. **Q** = rest advice.
2. **Therefore** → **should rest**.

**Different example:** “Noise fragments attention, **therefore** use earplugs for exams.” **Conclusion** = earplugs—not “noise fragments.”

**Takeaway:** **Recommended response** = **conclusion**.`,
    expert: `**Recovery consequent**

**Not to be confused with:** **Rest** = **recovery** **Q**; **harm** premise = **P**.`,
  },

  1138: {
    beginner: `**Prices rise — conclusion (fourth pass)**

**Correct (index 1):** **“prices will rise”** — **Q** (**forecast**).

**P:** **“Supply is low”** — **scarcity**.`,
    intermediate: `**Market conclusion**

1. **P** = tight supply. **Q** = price move.
2. **Therefore** → **forecast**.

**Different example:** “Berth queues grew, **therefore** demurrage spikes.” **Conclusion** = demurrage—not “queues grew.”

**Takeaway:** **Price movement** = **conclusion** in this toy model.`,
    expert: `**Price consequent**

**Not to be confused with:** **Rising prices** = **price** **Q**; **low supply** = **antecedent** **P**.`,
  },

  1139: {
    beginner: `**Need company — conclusion (fourth pass)**

**Correct (index 1):** **“they need company”** — **Q** (**welfare**).

**P:** **“Dogs are social”** — **trait**.`,
    intermediate: `**Inferred need**

1. **P** = sociability. **Q** = companionship need.
2. **Therefore** → **need** line.

**Different example:** “Parrots bond strongly, **therefore** they need daily interaction.” **Conclusion** = need interaction—not “bond strongly” as the **conclusion** pick.

**Takeaway:** **Need** = **conclusion**; **trait** = **premise**.`,
    expert: `**Welfare consequent**

**Not to be confused with:** **Company need** = **welfare** **Q**; **sociability** = **P**.`,
  },

  1140: {
    beginner: `**Sound bad — conclusion (fourth pass)**

**Correct (index 1):** **“it will sound bad”** — **Q** (**sonic** prediction).

**P:** **“The guitar is out of tune”** — **setup** fault.`,
    intermediate: `**Aesthetic conclusion**

1. **P** = tuning. **Q** = timbre verdict.
2. **Therefore** → **auditory** evaluation.

**Different example:** “Reed chipped, **therefore** clarinet will honk.” **Conclusion** = honk—not “reed chipped.”

**Takeaway:** **Bad sound** = **consequent**; **tuning fault** = **antecedent**.`,
    expert: `**Timbre consequent**

**Not to be confused with:** **Poor sound** = **timbre** **Q**; **detuning** = **setup** **P**.`,
  },

  1141: {
    beginner: `**Cake burns — conclusion (fifth pass)**

Fifth pass on **oven / cake**—pick **Q** after **therefore** (index **1**).

**Correct:** **“the cake will burn”** — **baking** **Q**.

**P:** **“The oven is too hot”** — **heat** (not the **conclusion**).`,
    intermediate: `**Thermal consequent**

1. **P** = excessive heat. **Q** = burn / scorch.
2. **Therefore** → **food fate**.

**Different example:** “Pan on high, **therefore** sauce scorches.” **Conclusion** = scorches—not “pan on high.”

**Takeaway:** **Food fate** after **therefore** = **conclusion**.`,
    expert: `**Overcook consequent**

**Not to be confused with:** **Burn** = **overcook** **Q**; **heat** = **antecedent** **P**—fifth pass, same map as **1121** / **1101**.`,
  },

  1142: {
    beginner: `**Finish faster — conclusion (fifth pass)**

**Correct (index 1):** **“you will finish faster”** — **Q** (**pace**).

**P:** **“You practiced hard”** — **effort**.`,
    intermediate: `**Throughput conclusion**

1. **P** = training load. **Q** = speed gain.
2. Select **faster** claim as **conclusion**.

**Different example:** “Many reps logged, **therefore** time trial improves.” **Conclusion** = improves—not “many reps.”

**Takeaway:** **Performance** prediction = **conclusion**.`,
    expert: `**SLA-style consequent**

**Not to be confused with:** **Faster completion** = **throughput** **Q**; **practice** premise = **P**.`,
  },

  1143: {
    beginner: `**Going to rain — conclusion (fifth pass)**

**Correct (index 1):** **“it is going to rain”** — **Q** (**weather**).

**P:** **“The clouds are dark”** — **sky** sign.`,
    intermediate: `**Forecast conclusion**

1. **P** = clouds. **Q** = rain call.
2. **Therefore** → **forecast**.

**Different example:** “Barometer falling, **therefore** squalls likely.” **Conclusion** = squalls—not “barometer.”

**Takeaway:** **Rain claim** = **conclusion**.`,
    expert: `**Precipitation consequent**

**Not to be confused with:** **Rain** = **precipitation** **Q**; **cloud** appearance = **antecedent** **sign** (**P**).`,
  },

  1144: {
    beginner: `**Won’t start — conclusion (fifth pass)**

**Correct (index 1):** **“the car won't start”** — **Q** (**failure**).

**P:** **“The battery is empty”** — **charge**.`,
    intermediate: `**No-crank conclusion**

1. **P** = battery state. **Q** = no-start.
2. **Therefore** → **functional** outcome.

**Different example:** “Fuse blown, **therefore** pump won’t run.” **Conclusion** = won’t run—not “fuse blown.”

**Takeaway:** **Functional** failure = **conclusion**.`,
    expert: `**Ignition consequent**

**Not to be confused with:** **No-start** = **ignition** **Q**; **empty battery** = **electrical** **P**.`,
  },

  1145: {
    beginner: `**Near the window — conclusion (fifth pass)**

**Correct (index 1):** **“they should be near the window”** — **Q** (**placement**).

**P:** **“Plants need light”** — **need**.`,
    intermediate: `**Placement conclusion**

1. **P** = light need. **Q** = by glass.
2. **Therefore** → **where**.

**Different example:** “Seedlings need warmth, **therefore** use a heat mat.” **Conclusion** = heat mat—not “need warmth” as the **conclusion** pick.

**Takeaway:** **Placement ought** = **conclusion**.`,
    expert: `**Photon-access consequent**

**Not to be confused with:** **Window** spot = **photon-access** **Q**; **light need** = **P**.`,
  },

  1146: {
    beginner: `**Speak softly — conclusion (fifth pass)**

**Correct (index 1):** **“we must speak softly”** — **Q** (**conduct**).

**P:** **“Silence is required”** — **rule**.`,
    intermediate: `**Conduct conclusion**

1. **P** = quiet mandate. **Q** = soft speech.
2. Pick **must speak softly** as **conclusion**.

**Different example:** “Quiet hours after nine, **therefore** keep voices down.” **Conclusion** = voices down—not “quiet hours.”

**Takeaway:** **Compliance behavior** = **conclusion**.`,
    expert: `**Etiquette consequent**

**Not to be confused with:** **Soft speech** = **etiquette** **Q**; **silence requirement** = **P**.`,
  },

  1147: {
    beginner: `**Walk daily — conclusion (fifth pass)**

**Correct (index 1):** **“we should walk daily”** — **Q** (**habit**).

**P:** **“Exercise improves health”** — **benefit**.`,
    intermediate: `**Regimen conclusion**

1. **P** = exercise–health link. **Q** = daily walk.
2. **Therefore** → **should walk**.

**Different example:** “Strength preserves bone density, **therefore** lift twice weekly.” **Conclusion** = lift—not “preserves density” as the **conclusion** option.

**Takeaway:** **Concrete habit** = **conclusion**.`,
    expert: `**Dose consequent**

**Not to be confused with:** **Daily walking** = **dose** **Q**; **exercise–health** premise = **P**.`,
  },

  1148: {
    beginner: `**X plus 2 equals 7 — conclusion (fifth pass)**

**Correct (index 1):** **“X plus 2 equals 7”** (or equivalent) — **Q** (**derived**).

**P:** **“X equals 5”** — **given**.`,
    intermediate: `**Algebra conclusion**

1. **P** = X = 5. **Q** = X + 2 = 7.
2. **Therefore** precedes **derived** line.

**Different example:** “n = 12, **therefore** n − 4 = 8.” **Conclusion** = second equality—not “n = 12.”

**Takeaway:** **Computed** line = **conclusion**.`,
    expert: `**Equality consequent**

**Not to be confused with:** **Second** equality = **equality** **Q**; **substitution** premise = **P**.`,
  },

  1149: {
    beginner: `**Beach smaller — conclusion (fifth pass)**

**Correct (index 1):** **“the beach will get smaller”** — **Q** (**shore**).

**P:** **“The tide is coming in”** — **tide**.`,
    intermediate: `**Shoreline conclusion**

1. **P** = flood / rising water. **Q** = less dry sand.
2. **Therefore** → **shrinkage**.

**Different example:** “River rising, **therefore** towpath floods.” **Conclusion** = floods—not “river rising.”

**Takeaway:** **Spatial** effect = **conclusion**.`,
    expert: `**Footprint consequent**

**Not to be confused with:** **Dry-sand loss** = **footprint** **Q**; **flood tide** = **forcing** **P**.`,
  },

  1150: {
    beginner: `**Stars as they were — conclusion (fifth pass)**

**Correct (index 1):** **“we see stars as they were”** — **Q** (**seeing**).

**P:** **“Light takes time to travel”** — **delay**.`,
    intermediate: `**Lookback conclusion**

1. **P** = propagation delay. **Q** = historical appearance.
2. **Therefore** → **seeing** thesis.

**Different example:** “Sound is slow, **therefore** thunder follows the flash.” **Conclusion** = thunder follows—not “sound is slow.”

**Takeaway:** **Sky observation** claim after **therefore** = **conclusion**; **physics** = **premise**.`,
    expert: `**Phenomenology consequent**

**Not to be confused with:** **Past-state appearance** = **phenomenology** **Q**; **light-travel time** = **physical** **P**.`,
  },
  1151: {
    beginner: `**Fact vs opinion — DNA (cycle 1)**

**Correct (index 0):** **“DNA stores genetic info.”** — **checkable** biology (information storage).

**Not the fact:** **“DNA is beautiful.”** — aesthetic **evaluation**. **“Opinions are facts.”** — category mistake. **“Depends.”** — not a factual answer.`,
    intermediate: `**Objective vs subjective**

1. Could this be settled **without** your **taste** or **feelings**?
2. **Index 0** = **verifiable** claim (here: what DNA **does**).
3. **Index 1** = **value** / **emotion** / **preference**.

**Different example:** “Hemoglobin carries oxygen” vs “Blood is gross”—first is **fact-style** for this lesson’s split.

**Takeaway:** Facts are **independently checkable**; opinions carry **evaluation** or **preference**.`,
    expert: `**Bio — cycle 1**

**Not to be confused with:** **Storage of genetic information** is **empirical** here; **beauty** is **not** a lab readout of DNA.`,
  },

  1152: {
    beginner: `**Fact vs opinion — Jupiter (cycle 1)**

**Correct (index 0):** **“Jupiter is the largest planet.”** — **checkable** astronomy (size ordering).

**Not the fact:** **“Jupiter is scary.”** — emotional **reaction**. **“Opinions are facts.”** — category mistake. **“Depends.”** — not a factual answer.`,
    intermediate: `**Objective vs subjective**

1. **Without** **fear** or **mood**, which line states how things **are** in the solar system?
2. **Index 0** = **verifiable** (here: comparative **size**).
3. **Index 1** = **evaluative** wording.

**Different example:** “Saturn has rings” vs “Saturn looks judgmental”—first tracks **fact-style** labeling in this bank.

**Takeaway:** **Independent** check vs **personal** reaction.`,
    expert: `**Space — cycle 1**

**Not to be confused with:** **Largest planet** is a **Level 0** astronomy **fact** claim; **scary** is **not** an observation in the same sense.`,
  },

  1153: {
    beginner: `**Fact vs opinion — gold (cycle 1)**

**Correct (index 0):** **“Gold does not rust.”** — **checkable** chemistry (corrosion).

**Not the fact:** **“Gold is the best metal.”** — **ranking** by preference. **“Opinions are facts.”** — category mistake. **“Depends.”** — not a factual answer.`,
    intermediate: `**Objective vs subjective**

1. Which line is about **behavior** of the metal **in the world**?
2. **Index 0** = **descriptive** / **testable** (oxidation).
3. **Index 1** = **“best”** = comparative **value**.

**Different example:** “Aluminum forms a passive oxide layer” vs “Aluminum is the most honest metal”—first fits **fact** slot here.

**Takeaway:** **Material facts** vs **taste** or **superlatives**.`,
    expert: `**Chem — cycle 1**

**Not to be confused with:** **Rust resistance** is a **chemistry** claim here; **best metal** is **preference** dressed as ranking.`,
  },

  1154: {
    beginner: `**Fact vs opinion — dozen (cycle 1)**

**Correct (index 0):** **“A dozen is twelve units.”** — **definition** / convention (counting).

**Not the fact:** **“Dozen is a lucky number.”** — **superstition** / attitude. **“Opinions are facts.”** — category mistake. **“Depends.”** — not a factual answer.`,
    intermediate: `**Objective vs subjective**

1. One line fixes **meaning** (how people **use** “dozen”); the other adds **luck**—a **stance**, not a definition.
2. **Index 0** = **stipulative** / **conventional** **fact** for this drill.
3. **Index 1** = **evaluative** color.

**Different example:** “A century is one hundred years” vs “100 is a powerful number”—first is **definition-style** here.

**Takeaway:** **Definitions** and **conventions** can be **facts** in this course; **lucky** is **not**.`,
    expert: `**Math — cycle 1**

**Not to be confused with:** **Twelve units** is the **conventional** **fact** option; **luck** is **not** checkable the same way.`,
  },

  1155: {
    beginner: `**Fact vs opinion — Nile (cycle 1)**

**Correct (index 0):** **“The Nile is in Africa.”** — **checkable** geography (location).

**Not the fact:** **“The Nile is peaceful.”** — **mood** about a river. **“Opinions are facts.”** — category mistake. **“Depends.”** — not a factual answer.`,
    intermediate: `**Objective vs subjective**

1. **Where** is the river vs **how it feels** to **you**—different jobs.
2. **Index 0** = **map** / **continent** (verifiable).
3. **Index 1** = **atmosphere** judgment.

**Different example:** “The Amazon is mostly in Brazil” vs “The Amazon feels ancient”—first is **location fact-style** here.

**Takeaway:** **Place** claims vs **aesthetic** or **emotional** gloss.`,
    expert: `**Geo — cycle 1**

**Not to be confused with:** **Continent** placement is **geographic** **fact** here; **peaceful** is a **subjective** label.`,
  },

  1156: {
    beginner: `**Fact vs opinion — DNA (cycle 2)**

New ID, **same pairing** as **1151**: pick the **checkable** line (**index 0**).

**Correct (index 0):** **“DNA stores genetic info.”**

**Not the fact:** **“DNA is beautiful.”** — **evaluation**. Meta-options unchanged.`,
    intermediate: `**Objective vs subjective (second pass)**

Same **logic** as **1151**: **storage** = **fact** slot; **beauty** = **opinion** slot.

**Different example:** “Ribosomes synthesize proteins” vs “Ribosomes feel busy”—first = **fact-style** contrast.

**Takeaway:** Repeating the bank **sharpens** the **checkability** test, not new chemistry.`,
    expert: `**Bio — cycle 2**

**Not to be confused with:** Identical **roles** to **1151**; only the **question ID** rotates for practice.`,
  },

  1157: {
    beginner: `**Fact vs opinion — Jupiter (cycle 2)**

**Correct (index 0):** **“Jupiter is the largest planet.”**

Same **Jupiter / scary** pair as **1152**—**size** = **fact**, **scary** = **opinion**.`,
    intermediate: `**Second pass**

**Index 0** = comparative **size** (astronomy). **Index 1** = **fear** word.

**Different example:** “Mercury is the smallest planet” vs “Mercury gives bad vibes”—same **fact vs mood** split.

**Takeaway:** **Observation-shaped** vs **reaction-shaped** wording.`,
    expert: `**Space — cycle 2**

**Not to be confused with:** Same map as **1152**; **largest** is still the **factual** choice.`,
  },

  1158: {
    beginner: `**Fact vs opinion — gold (cycle 2)**

**Correct (index 0):** **“Gold does not rust.”**

Pairing repeats **1153**: **corrosion** vs **best metal**.`,
    intermediate: `**Second pass**

**Rust** behavior = **material** **fact**. **Best** = **preference** in **disguise**.

**Different example:** “Copper turns green as it corrodes” vs “Copper is the noblest metal”—first is **descriptive** here.

**Takeaway:** **Testable** property vs **ranking** by taste.`,
    expert: `**Chem — cycle 2**

**Not to be confused with:** Same contrast as **1153**; **does not rust** stays in the **fact** column.`,
  },

  1159: {
    beginner: `**Fact vs opinion — dozen (cycle 2)**

**Correct (index 0):** **“A dozen is twelve units.”**

Repeats **1154**: **definition** vs **lucky**.`,
    intermediate: `**Second pass**

**Twelve** = **conventional** **meaning**. **Lucky** = **attitude** toward a **symbol**.

**Different example:** “A gross is 144” vs “144 is spiritually complete”—first is **convention fact-style** here.

**Takeaway:** **Stipulation** vs **superstition** or **flair**.`,
    expert: `**Math — cycle 2**

**Not to be confused with:** Same as **1154**; **dozen = twelve** remains the **factual** option.`,
  },

  1160: {
    beginner: `**Fact vs opinion — Nile (cycle 2)**

**Correct (index 0):** **“The Nile is in Africa.”**

Repeats **1155**: **continent** vs **peaceful**.`,
    intermediate: `**Second pass**

**Africa** = **where** on Earth. **Peaceful** = **how it strikes you**.

**Different example:** “The Pacific is ocean water” vs “The Pacific is calming”—**location/type** vs **mood**.

**Takeaway:** **Atlas** facts vs **aesthetic** blurbs.`,
    expert: `**Geo — cycle 2**

**Not to be confused with:** Same as **1155**; **in Africa** is the **checkable** geographic line.`,
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
    beginner: `Plastiques à usage unique

1. Cherchez une option qui dit ce qu’il faut faire et pourquoi, de façon qu’on puisse en débattre — pas seulement un fait ou une humeur.

2. « Les plastiques sont partout » ou « l’emballage existe en magasin » décrit la situation ; ça ne défend aucune action.

3. Dire qu’on n’aime pas les sacs, c’est une réaction personnelle, pas une raison liée à un préjudice public.

4. La phrase qui interdit les plastiques parce qu’ils encombrent les océans donne une conséquence comme appui à une politique. C’est ce qu’on compte comme argument ici : un « il faut » plus quelque chose offert en sa faveur.`,
    intermediate: `Plastiques à usage unique

1. Un argument relie une prémisse à une conclusion qu’on peut contester.

2. Sur cette question, la ligne d’interdiction le fait : le tort fait aux océans soutient l’interdiction. Les autres s’arrêtent à la description ou au goût sans « il faut ».

3. Exemple : « Les déchets hospitaliers ont bondi ce trimestre, donc le service doit séparer les aiguilles avant la collecte. » On peut discuter du remède, mais c’est encore problème plus réponse. « Les déchets sont nombreux » n’est que des données tant que personne ne dit ce qui devrait changer.

La description et la préférence vont bien ; seules, ce n’est pas l’appui structuré que cette leçon nomme.`,
    expert: `Plastiques à usage unique

Les faits peuvent nourrir un argument, mais une liste de faits n’est pas automatiquement un argument. « Les plastiques sont partout » peut servir d’argument si quelqu’un ajoute ce qu’il faut faire ; seule, c’est en général du constat, pas un argument normatif.

Dans la bonne option, la conclusion est une politique forte sur les plastiques à usage unique ; la prémisse est un tort (par ex. pollution des océans). « Parce que » indique que le tort est une raison pour la politique, pas un simple décor.

Les distracteurs sautent l’étape des faits vers la politique (ubiquité, existence) ou n’offrent qu’un désagrément privé sans raison publique. La bonne option est celle qui donne vraiment des raisons pour une politique.`,
  },

  1002: {
    beginner: `Bus en retard et appli

1. Un argument ici, c’est quelque chose qui ne va pas et quelque chose qui devrait changer à cause de cela.

2. Le bus en retard chaque matin est le problème ; des horaires en temps réel dans l’appli sont le correctif proposé. Le « donc » lie une meilleure information à des horaires peu fiables.

3. Peindre les bus, aimer le trajet ou dire que l’appli existe ne relie pas les retards à un remède. Seule la ligne qui relie la panne à un changement concret compte.`,
    intermediate: `Bus en retard et appli

1. Cette carte associe une panne de service répétée à un changement concret (données en direct) : problème, puis intervention.

2. Exemple : « Les files aux urgences ont doublé, donc l’hôpital devrait ouvrir un second guichet d’accueil. » Même forme ; on peut discuter du coût, mais c’est encore un argument. « La clinique a une appli d’enregistrement » reste anecdotique tant que personne ne dit ce qui doit changer à cause des temps d’attente.

Relier une série d’échecs à un changement ciblé est ce que la leçon demande ; l’existence ou le goût ne suffit pas.`,
    expert: `Bus en retard et appli

Dire « le bus est toujours en retard » peut amorcer un argument, mais il faut une prescription défendue. La bonne option donne les deux : le retard soutient l’offre d’informations en temps réel.

Prémisse : les horaires sont peu fiables en pratique. Conclusion : l’appli doit afficher des données en temps réel pour que les voyageurs ne restent pas bloqués sur des horaires périmés.

Les distracteurs (peinture, appli qui existe, plaisir de rouler) ne se rattachent pas à la ponctualité. Le quiz demande seulement si la phrase est structurée comme un raisonnement à raisons, pas si la politique est la meilleure.`,
  },

  1003: {
    beginner: `Wi-Fi du campus

1. Trouvez la ligne où quelque chose ne va pas sur ce réseau et où quelqu’un avec autorité devrait agir.

2. Les coupures sont le défaut ; ajouter des points d’accès est le correctif. « Je déteste perdre le Wi-Fi » exprime de l’émotion sans argument. « Le Wi-Fi existe » n’est pas un correctif. « Le sans-fil bat le câblé » ignore les coupures sur ce campus.

3. Seule l’option qui va d’un mauvais service ici à plus de matériel correspond à la leçon.`,
    intermediate: `Wi-Fi du campus

1. Reliez un défaut local (coupures) à un remède institutionnel (plus de points d’accès).

2. Exemple : « Le vidéoprojecteur surchauffe à chaque cours, donc le service audiovisuel doit changer la lampe avant les partiels. » Symptôme, puis action responsable. « Je déteste les diapos floues » n’est pas un argument de maintenance.

Les slogans techniques généraux ne parlent pas du problème réel ; la bonne option oui.`,
    expert: `Wi-Fi du campus

Préférer le sans-fil en général n’est pas un argument sur ce campus tant qu’on ne cite pas la vraie panne (ici : coupures). La bonne option ancre le correctif dans des coupures observées.

Prémisse : le service est instable. Conclusion : l’université devrait ajouter de la capacité (par ex. plus de points d’accès). Les distracteurs offrent de l’affect, l’existence ou une comparaison abstraite sans ce lien.

En réalité la cause peut être ailleurs (fibre, configuration) ; la question demande seulement quelle ligne est un argument, pas la meilleure réponse d’ingénieur.`,
  },

  1004: {
    beginner: `Distributeurs

1. Les rayons vides signalent un problème ; réapprovisionner deux fois par jour est ce que la phrase défend comme réponse.

2. Préférer les snacks, les classer par rapport aux salades ou dire que les distributeurs existent n’explique pas pourquoi la fréquence de réassort devrait changer.

3. Choisissez la ligne qui part d’une rupture de stock et finit sur la fréquence de réassort.`,
    intermediate: `Distributeurs

1. Des ruptures récurrentes soutiennent une règle sur la fréquence de réassort.

2. Exemple : « Le bac à toner est vide chaque lundi, donc la logistique doit livrer le vendredi après-midi. » État vide qui se répète, puis changement de planning. « J’adore imprimer en couleur » ne fait pas la logistique.

Le goût ou « les machines existent » ne remplace pas le lien entre pénurie et correctif de processus.`,
    expert: `Distributeurs

Aimer certains snacks ou noter que des distributeurs existent ne constitue pas à lui seul une politique de stock. La bonne ligne est opérationnelle : une série de vide soutient une règle de réassort.

Prémisse : les machines sont vides. Conclusion : réassortir plus souvent (par ex. deux fois par jour). Les autres options sautent le lien entre les conditions sur le campus et un planning prescriptif.`,
  },

  1005: {
    beginner: `Bibliothèque pendant les examens

1. La ligne solide relie l’affluence pendant les examens à des horaires plus longs : des rayons pleins pendant les examens soutiennent une fermeture repoussée à minuit.

2. Aimer les bibliothèques, vanter les livres ou aimer minuit en général ne donne pas une raison propre aux examens pour prolonger les heures.

3. Choisissez l’option qui va de la pression pendant les examens à l’extension du service.`,
    intermediate: `Bibliothèque pendant les examens

1. Une pointe de demande sur une période définie soutient un accès plus long temporairement.

2. Exemple : « Les alertes météo sont levées, donc le gymnase reste ouvert au-delà de l’heure habituelle. » Même schéma. « J’aime les centres communautaires » n’est pas un argument de capacité.

Les sentiments chaleureux ne remplacent pas une surcharge observée comme raison de changer les heures.`,
    expert: `Bibliothèque pendant les examens

L’attachement aux bibliothèques ou aux livres n’est pas le même qu’un argument sur la capacité d’accueil. La bonne option utilise un pic de charge : pression inhabituelle pendant les examens, puis horaires plus longs.

Prémisse : fréquentation très forte pendant les examens. Conclusion : repousser la fermeture (par ex. à minuit). Les distracteurs manquent soit de la fenêtre « examens », soit d’une décision claire sur les horaires.`,
  },

  1006: {
    beginner: `Pistes cyclables aux intersections

1. L’argument nomme un danger (la piste disparaît et les cyclistes fusionnent avec la circulation) et un correctif au niveau de la ville (achever la piste dans l’intersection).

2. Le vélo pour le plaisir, la peinture au sol ou « les intersections existent » n’explique pas pourquoi l’aménagement devrait changer.

3. Choisissez la ligne qui relie une continuité rompue à l’achèvement de l’infrastructure.`,
    intermediate: `Pistes cyclables aux intersections

1. Une interruption d’aménagement (fin de piste) est la prémisse ; achever l’équipement est la conclusion.

2. Exemple : « Le trottoir s’arrête au fossé, donc le conseil doit ajouter un passage sécurisé. » Même idée de réduction du risque. « J’aime marcher » ne fait pas un dossier de travaux.

L’enthousiasme ou des faits vagues sur la peinture ne font pas un argument sécurité tant que risque et remède n’apparaissent pas.`,
    expert: `Pistes cyclables aux intersections

Aimer le vélo ou noter des bandes peintes n’établit pas le risque là où la piste s’arrête. La bonne ligne traite un conflit de fusion prévisible comme raison d’étendre ou de protéger la piste dans l’intersection.

Prémisse : les cyclistes sont exposés là où la piste finit. Conclusion : la ville devrait achever l’équipement. Les débats d’ingénierie (carrefour protégé, etc.) ne sont pas ce que teste cette question d’identification.`,
  },

  1007: {
    beginner: `Lampadaires LED

1. La ligne solide dit que les LED consomment moins d’énergie, donc la ville devrait rétrofitter l’éclairage public : une décision municipale appuyée sur l’efficacité.

2. Les poteaux hauts, le goût pour la luminosité ou « l’électricité existe » ne défendent pas un programme de remplacement.

3. Choisissez l’option qui enchaîne moindre consommation à une action municipale.`,
    intermediate: `Lampadaires LED

1. La performance énergétique soutient un investissement dans de nouveaux luminaires.

2. Exemple : « L’isolation réduit les déperditions, donc le district devrait remplacer les fenêtres dans les bâtiments les plus anciens. » Gain mesuré, puis politique. « J’aime les pièces douillettes » ne fait pas un cas énergie.

L’esthétique ou le fait que le courant existe ne remplace pas le raisonnement efficacité vers rétrofit.`,
    expert: `Lampadaires LED

Préférer une lumière vive ou dire que l’électricité compte ne suffit pas pour justifier des achats au nom de l’efficacité. La bonne ligne lie une consommation moindre à un rétrofit prescriptif.

L’attribut technologique (moins d’énergie) est offert comme raison pour des travaux publics. Pollution lumineuse ou retour sur investissement ne sont pas requis pour voir la phrase comme un argument.`,
  },

  1008: {
    beginner: `Gaspillage à la cafétéria

1. La bonne réponse relie de la nourriture intacte jetée à des portions plus petites : le gaspillage est la preuve ; la taille des portions est le levier proposé.

2. Vouloir du dessert, être triste du gaspillage ou dire que la cafétéria existe ne dit pas quoi changer ni pourquoi.

3. La bonne ligne fait les deux.`,
    intermediate: `Gaspillage à la cafétéria

1. Un motif de gaspillage soutient de changer les portions ou la carte.

2. Exemple : « Chaque rangée laisse des bouteilles à moitié pleines, donc proposer des fontaines au lieu de remplir les carafes à l’avance. » Déchet observé, puis changement opérationnel. « Le gaspillage me déprime » ne suffit pas pour la logistique.

L’indignation aide la motivation ; la leçon veut encore un problème lié à un levier concret (ici, la portion).`,
    expert: `Gaspillage à la cafétéria

Désapprouver le gaspillage n’est pas la même chose que de nommer un instrument. La bonne ligne relie de la nourriture non touchée à des portions adaptées comme réponse de conception.

Les distracteurs s’arrêtent au goût, à l’émotion sans remède ou à l’existence ; aucun ne soutient une politique de portions comme la bonne option.`,
  },

  1009: {
    beginner: `Hybrides et qualité de l’air

1. Trouvez la ligne qui relie moins d’émissions à un air local plus sain : ce qui sort du pot affecte ce qu’on respire à proximité.

2. Moteur silencieux, passion pour la conduite ou « la technologie existe » évitent le lien pollution vers air.

3. Seule l’option qui va des émissions réduites à une meilleure qualité de l’air convient.`,
    intermediate: `Hybrides et qualité de l’air

1. Il vous faut un mécanisme (émissions) et un effet (l’air que l’on respire).

2. Exemple : « Les filtres réduisent le soufre, donc les admissions pour asthme près de l’usine devraient baisser. » Réduction à la source, puis air respirable. « J’aime les usines » ne fait pas la chimie.

Le bruit ou le goût personnel ne remplace pas le pont émissions–air.`,
    expert: `Hybrides et qualité de l’air

Un moteur silencieux n’est pas la même chose qu’une baisse de pollution. La bonne ligne utilise les émissions pour soutenir une meilleure qualité de l’air locale.

Prémisse : les hybrides émettent moins (comparaison implicite). Conclusion : l’air local s’améliore, autres choses égales. Météo et parc automobile dépassent cet exercice d’identification.`,
  },

  1010: {
    beginner: `Télétravail et frais généraux

1. La bonne ligne dit qu’il faut moins de surface de bureaux, donc les frais généraux (loyer, charges, coûts fixes proches) devraient baisser : moins de bureaux loués, moins de factures récurrentes.

2. La visioconférence seule, le confort du télétravail ou « les bureaux existent » ne construisent pas le lien surface vers coût.

3. Choisissez l’option qui relie le travail distribué à une baisse des dépenses fixes.`,
    intermediate: `Télétravail et frais généraux

1. Un besoin immobilier réduit soutient des frais généraux plus bas.

2. Exemple : « L’entrepôt est à moitié vide, donc sous-louer et réduire les coûts d’installation. » Même logique d’allègement d’actif. « J’aime les arrière-plans Zoom » ne tient pas la comptabilité.

Les outils ou le confort ne remplacent pas le raisonnement empreinte immobilière vers frais généraux.`,
    expert: `Télétravail et frais généraux

Les outils de collaboration peuvent rendre le télétravail possible, mais un argument sur les frais généraux doit lier surface et coûts récurrents. La bonne ligne explicite loyer et charges.

Prémisse : le télétravail réduit le besoin de capacité bureaux. Conclusion : les frais généraux baissent, autres choses égales. Les distracteurs sautent le pont immobilier vers coûts fixes.`,
  },

  1011: {
    beginner: `Agriculture biologique et santé des sols

1. La consigne demande une phrase qui relie ce que l’agriculture bio évite ou fait à ce qui advient au sol dans la longue durée. La bonne option présente l’évitement des pesticides de synthèse comme raison pour laquelle le sol reste sain.

2. Belles pommes, préférence pour le lait ou le fait que le sol existe sous plusieurs types ne font jamais le lien pratique agricole vers effet sur le sol.

3. Seule la ligne pratique vers sol convient.`,
    intermediate: `Agriculture biologique et santé des sols

1. Le « donc » relie méthode (sans pesticides de synthèse) à résultat (santé du sol préservée).

2. Exemple : « Les cultures de couverture retiennent l’humidité, donc cette exploitation devrait ensemencer du seigle avant le maïs. » Autre pratique vers autre effet sur le sol. « J’aime me promener dans les champs » ne tient pas lieu de politique agricole.

L’apparence et les goûts ne sont des arguments sur le sol que s’ils citent un mécanisme lié au terrain.`,
    expert: `Agriculture biologique et santé des sols

Apprécier le label bio ou les pommes n’est pas un argument sur la santé des sols. La bonne option lie pratique agronomique et état du sol.

M = évitement des pesticides de synthèse ; S = préservation de la santé du sol à long terme. On ne note pas la vérité agronomique — seulement si M soutient S.

Distracteurs : esthétique, préférence alimentaire et géographie générale sans lien pratique vers effet sur le sol.`,
  },

  1012: {
    beginner: `Scène : Linguistique (banque FR)

1. En français, l’ID 1012 ne reprend pas le scénario anglais (transports) : suivez le texte français de la banque.

2. La ligne attendue dit que la pratique améliore l’aisance, donc tu devrais parler tous les jours : mécanisme d’apprentissage vers habitude recommandée.

3. « Je préfère Linguistique », « Linguistique est définitivement mieux » et « Linguistique existe » ne donnent aucune raison pour une conduite de parole.`,
    intermediate: `Scène : Linguistique

1. L’effet de la pratique sur l’aisance sert de prémisse ; la fréquence de parole est la conclusion prescriptive.

2. Exemple (hors carte) : « Répéter les gammes affine l’oreille, donc le musicien débutant devrait en jouer un peu chaque jour. » Autre domaine — pas la phrase « parler tous les jours » du QCM. « J’aime la musique » ne remplace pas l’argument.

Le mot « Linguistique » sur la carte est du décor ; le travail logique est dans la phrase à prémisse, donc, conduite.`,
    expert: `Scène : Linguistique

Préférence pour la matière ou existence du mot « Linguistique » ne constituent pas un argument pédagogique. La bonne option enchaîne pratique vers aisance et prescription (parler chaque jour).

Même profondeur que l’anglais (argument avec support), contenu calqué sur la banque FR pour cet ID — ne pas importer le texte sur les transports.

Structure : moyen (pratique régulière) présenté comme raison d’adopter une habitude ciblée.`,
  },

  1013: {
    beginner: `Scène : Technologie (banque FR)

1. L’ID 1013 en français n’est pas le panneau solaire de l’anglais : la bonne phrase est « Le routeur est éteint, donc le Wi-Fi ne fonctionnera pas » — état du matériel vers prédiction sur le service sans fil.

2. Préférence pour Technologie, jugement vide ou « Technologie existe » ne font pas le diagnostic routeur vers Wi-Fi.`,
    intermediate: `Scène : Technologie

1. Un état du routeur (éteint) soutient l’idée que le Wi-Fi ne sera pas utilisable comme d’habitude.

2. Exemple (hors carte) : « Le disjoncteur du tableau est tombé, donc les prises de cette pièce ne seront pas sous tension. » Même logique coupure source vers service absent — sans répéter le routeur. « J’aime l’électricité » ne dépanne pas.

Les distracteurs FR sans chaîne diagnostic matériel vers conséquence réseau.`,
    expert: `Scène : Technologie

Goût pour la matière ou existence du thème ne remplace pas un argument technique. La bonne option suppose un arrière-plan domestique usuel (routeur nécessaire au Wi-Fi local).

D’autres pannes sont possibles dans la vie réelle ; l’exercice ne demande qu’une structure « P, donc Q » sur le service sans fil.

Ne pas aligner le texte sur l’item anglais solaire — respecter la banque FR pour 1013.`,
  },

  1014: {
    beginner: `Scène : Histoire

1. Le mot « Histoire » habille la carte ; l’argument est : les artéfacts sont fragiles, donc il faut une manipulation prudente — un fait matériel offert comme raison d’une norme de soin.

2. Préférence, jugement sans critères ou « Histoire existe » ne donnent pas de parce que pour la manutention.`,
    intermediate: `Scène : Histoire

1. La vulnérabilité des objets soutient une consigne de manipulation.

2. Exemple : « Les négatifs sur verre gondent si l’air est trop sec, donc l’hygrométrie du réservoir doit rester stable. » Autre risque muséal — sans répéter « artéfacts fragiles » du QCM. « J’adore les archives » ne suffit pas.

Décor scénique n’est pas le travail sur prémisse vers prescription.`,
    expert: `Scène : Histoire

Préférence pour la matière ou existence d’« Histoire » ne défend pas un protocole ; la bonne option utilise la fragilité comme garant d’une norme de soin.

F = fragilité ; H = manipulation prudente requise. Les distracteurs manquent de soutien explicite.`,
  },

  1015: {
    beginner: `Scène : Art

1. La phrase retenue donne un fait sur les couleurs, puis une consigne de mélange : rouge et bleu font du violet, donc mélangez pour obtenir cette teinte.

2. Préférer Art, dire qu’Art est « mieux » sans preuve ou qu’« Art existe » ne structure pas raison vers action comme la ligne sur les pigments.`,
    intermediate: `Scène : Art

1. Une règle de palette soutient une procédure.

2. Exemple : « Deux volumes de résine pour un durcisseur, donc doser ainsi avant coulée. » Atelier, pas peinture murale — pas le rouge/bleu du QCM. « J’adore le bricolage » n’est pas l’argument.

Un conseil d’atelier peut être un vrai argument si une clause soutient l’autre.`,
    expert: `Scène : Art

Goût pour la matière ou existence d’« Art » ne font pas de travail inférentiel ; la bonne option est un lien moyen–fin (fait de mélange vers consigne).

Nuances violet/mauve — hors périmètre ; seule la structure compte.`,
  },

  1016: {
    beginner: `Scène : Circulation

1. L’argument est réglementaire : le feu est rouge, donc les conducteurs doivent s’arrêter — l’état du signal est la raison de l’obligation.

2. Préférence, « Circulation est mieux » ou « Circulation existe » ne vont pas du fait sur le feu au devoir d’arrêt.`,
    intermediate: `Scène : Circulation

1. Cet item relie est (feu rouge) à devoir (s’arrêter), sur fond de code de la route partagé.

2. Exemple : « Les feux de piste sont rouges sur ce secteur, donc l’avion doit s’arrêter avant la ligne d’attente. » Aviation, pas auto — sans recopier la phrase du feu routier. « J’aime les aéroports » ne remplace pas la sécurité.

Les normes de circulation sont pleines d’arguments signal plus règle.`,
    expert: `Scène : Circulation

Aimer le thème « Circulation » ne crée pas d’obligation d’arrêt ; la bonne phrase cite l’état du feu comme raison du comportement exigé.

Distracteurs : aucun lien prémisse (feu) vers conclusion (arrêt).`,
  },

  1017: {
    beginner: `Scène : Biologie

1. La bonne phrase dit que le manque de sommeil nuit à la concentration, donc les étudiants doivent se reposer — préjudice cognitif vers conduite recommandée.

2. Préférence pour la matière, « Biologie est mieux » ou « Biologie existe » ne construisent pas ce lien.`,
    intermediate: `Scène : Biologie

1. Une dette de sommeil sert de prémisse ; le repos est la prescription.

2. Exemple : « La déshydratation ralentit les réflexes, donc les équipes sur de longues gardes doivent alterner les pauses hydratation. » Santé au travail, pas la salle de classe — sans répéter sommeil/concentration du QCM. « J’adore le cours » ne suffit pas.

Arguments prudentiels : risque ou tort vers habitude recommandée.`,
    expert: `Scène : Biologie

Le plaisir pour la matière n’est pas un argument performance ou santé ; l’option attendue relie manque de sommeil vers concentration et repos.

Cadrage : inférence prudente, autres choses égales — pas de méta-analyse exigée.`,
  },

  1018: {
    beginner: `Scène : Économie

1. « L’offre est faible, donc les prix augmenteront » est une mini-histoire rareté vers pression sur les prix : la prémisse nomme une condition économique ; la conclusion est une prévision directionnelle.

2. Aimer Économie ou dire qu’« Économie existe » n’argumente pas le marché ; « Économie est mieux » n’ajoute aucun mécanisme.`,
    intermediate: `Scène : Économie

1. Une offre serrée soutient d’anticiper des prix plus hauts (la demande reste en arrière-plan).

2. Exemple : « Plus de places en entrepôt ce mois-ci, donc les tarifs spot d’expédition devraient flamber. » Logistique — sans recopier « offre faible » à l’identique. « J’aime les camions » n’est pas de la microéconomie.

On ne juge pas si la prévision se réalise toujours — seulement si la phrase donne une raison pour le prix.`,
    expert: `Scène : Économie

Préférence pour le cours n’est pas un mécanisme économique ; seule la bonne option relie rareté côté offre à pression haussière sur le prix.

Élasticité, anticipations, politique publique — hors exercice de repérage d’argument.`,
  },

  1019: {
    beginner: `Scène : Zoologie

1. « Les chiens sont sociaux, donc ils ont besoin de compagnie » part d’un trait d’espèce pour conclure à un besoin de soins (ne pas les isoler sans raison).

2. Préférer Zoologie ou affirmer qu’« Zoologie existe » n’argumente pas le bien-être animal ; « Zoologie est mieux » est un slogan vide.`,
    intermediate: `Scène : Zoologie

1. L’éthologie (sociabilité) soutient une implication pour les soins.

2. Exemple : « Les perroquets s’attachent fortement aux soigneurs, donc un oiseau seul a besoin d’interaction quotidienne. » Autre espèce — pas les chiens du QCM. « J’aime les perroquets » n’est pas l’argument de bien-être.

Les « il faut » biologiques exigent quand même prémisse vers conclusion.`,
    expert: `Scène : Zoologie

Affection pour le titre du cours n’est pas un raisonnement sur soins adaptés à l’espèce ; la bonne option va de la nature sociale du chien au besoin de compagnie.

Le contexte réel (chiens de travail, errance…) est riche ; le QCM ne demande que la forme de l’argument.`,
  },

  1020: {
    beginner: `Scène : Musique

1. « La guitare n’est pas accordée, donc elle sonnera mal » enchaîne état de l’instrument et résultat sonore attendu — diagnostic simple vers prédiction.

2. Préférer Musique ou dire qu’« Musique existe » ne relie pas accord et qualité de son ; « Musique est mieux » n’ajoute aucun mécanisme.`,
    intermediate: `Scène : Musique

1. Cette ligne relie réglage (accord) à qualité perçue du son.

2. Exemple : « L’anche est fendue, donc la clarinette va grincer à l’attaque. » Autre instrument — pas la guitare du QCM. « J’aime les concerts » ne remplace pas l’analyse du matériel.

L’artisanat et la scène regorgent de petits arguments causaux.`,
    expert: `Scène : Musique

Plaisir pour la matière n’est pas un argument acoustique ; la bonne option cite le désaccordage comme raison d’un jugement négatif sur le son.

Reconstruction : état de l’instrument vers qualité sonore attendue. Distracteurs sans structure prémisse–conclusion.`,
  },

  1021: {
    beginner: `Concours de pâtisserie (FR)

1. La banque FR parle de génoise : le four est trop chaud, donc le gâteau va s’assécher — chaleur excessive comme raison d’un résultat de cuisson défavorable.

2. Mode des cupcakes, vanille dans l’air ou promo sur le beurre ne relient pas l’état du four à ce qui arrive à la pâte.`,
    intermediate: `Concours de pâtisserie

1. Sur cette carte, surchauffe est la prémisse ; assèchement de la génoise est la conséquence attendue.

2. Exemple : « Le sirop a trop cuit, donc le caramel sera amer. » Sucre plutôt que four — sans répéter génoise/four. « J’adore le sucre » ne remplace pas la physique de la cuisson.

Condition matérielle vers effet sur le produit — même squelette qu’en anglais, avec le vocabulaire FR du libellé.`,
    expert: `Concours de pâtisserie

Tendance culinaire ou odeur ne prédisent pas la texture ; seule la bonne option lie température de cuisson à sécheresse de la génoise.

T = four trop chaud pour cette cuisson ; S = génoise qui s’assèche. On ne juge pas le concours réel — seulement le soutien prémisse–conclusion.`,
  },

  1022: {
    beginner: `Manche de sprint (FR)

1. « Tu t’es entraîné tout le mois, donc tu devrais battre ton temps de la manche précédente » — l’entraînement est offert comme raison d’attendre une meilleure performance qu’avant.

2. Le pistolet de départ, la forme de la piste ou la couleur des pointes ne font pas le lien préparation vers chrono.`,
    intermediate: `Manche de sprint

1. Ici un mois d’entraînement soutient une attente sur ton temps par rapport à la manche d’avant.

2. Exemple : « Tu as nagé cinq fois par semaine, donc tu devrais tenir le crawl plus longtemps qu’au test d’avril. » Natation, pas athlétisme — sans répéter le sprint. « J’aime la piscine » n’est pas une prédiction.

Prudence sportive : prémisse sur l’effort vers attente sur le résultat.`,
    expert: `Manche de sprint

Esthétique du matériel ou de la piste n’est pas une preuve sur ta forme ; l’option attendue utilise l’entraînement comme garant imparfait d’un meilleur temps.

Fatigue et hasard existent ; le QCM ne demande que la forme argumentative.`,
  },

  1023: {
    beginner: `Randonnée / météo (FR)

1. « Le baromètre chute vite, donc attendez-vous à de la pluie avant midi » — signe (pression qui s’effondre) vers prévision dans une fenêtre horaire.

2. Nuages aimés, applis météo ou « la pluie est mouillée » ne font pas le pont indicateur vers pluie dans ce créneau.`,
    intermediate: `Randonnée / météo

1. Cet item enchaîne tendance barométrique et pluie avant midi.

2. Exemple : « La jauge du fleuve a monté d’un mètre, donc le sentier bas sera inondé vers 15 h. » Crue plutôt que baromètre — pas le même signe que sur la carte. « J’aime l’eau » ne sauve pas la rando.

Heuristiques météo = arguments signe vers événement ; la justesse locale n’est pas notée.`,
    expert: `Randonnée / météo

Opinion sur le ciel ou vérités banales ne remplacent pas chute rapide de pression comme raison d’attendre la pluie avant midi.

Structure : indicateur vers prévision pluvieuse bornée dans le temps.`,
  },

  1024: {
    beginner: `Voiture qui ne démarre pas (FR)

1. « La batterie affiche zéro volt, donc le démarreur ne tournera pas » — pas de tension utile, donc pas de cranking attendu dans le modèle simplifié.

2. Poids des boosters, quatre roues ou attente de la dépanneuse ne construisent pas batterie vers démarreur.`,
    intermediate: `Voiture qui ne démarre pas

1. Sur cette carte, 0 V est la prémisse ; démarreur immobile est la conclusion électrique (scénario pédagogique).

2. Exemple : « Le disjoncteur a sauté, donc la pompe ne partira pas tant qu’on n’a pas réarmé. » Maison, pas auto — sans répéter batterie. « Je déteste le sous-sol » ne diagnostique rien.

Raisonnement mécaniste : état de la source vers comportement de la charge.`,
    expert: `Voiture qui ne démarre pas

Poids d’accessoires ou nombre de roues ne disent rien sur la tension disponible pour le démarreur ; la bonne phrase lie potentiel nul à absence de rotation utile.

Câbles, relais, etc. — hors exercice ; seule la structure d’appui compte.`,
  },

  1025: {
    beginner: `Bureau peu lumineux / plantes (FR)

1. « Ces feuilles sont étiolées, donc rapprochez le pot de la fenêtre » — symptôme de manque de lumière vers remède de placement.

2. « Jamais besoin d’eau » est une généralisation dangereuse ; terre brune et « fenêtres en verre » ne font pas étiolation vers lumière.`,
    intermediate: `Plantes de bureau

1. Ici étiolation est le diagnostic ; rapprocher du jour est l’intervention.

2. Exemple : « Les semis sont filandreux sous ce seul néon, donc baissez les lampes ou remontez les plateaux. » Semis, pas ton pot de bureau — sans répéter étiolation mot pour mot. « J’adore le LED » ne remplace pas la photobiologie.

Signe végétal vers consigne de culture — comme en anglais, avec le libellé FR.`,
    expert: `Plantes de bureau

Slogans sur l’arrosage ou faits sans lien ne défendent pas manque de lumière vers placement ; l’option attendue oui.

Pas d’examen de licence horticole — seulement prémisse–prescription.`,
  },

  1026: {
    beginner: `Salle de lecture (FR)

1. « Le silence est nécessaire pour se concentrer, donc parlez bas aux tables » — fonction de l’espace (concentration) vers règle de volume.

2. Mode du chuchotement, rayonnages ou tranches de livres ne fondent pas mission de la salle vers discrétion.`,
    intermediate: `Salle de lecture

1. Cet item relie finalité cognitive (se concentrer) à norme de comportement (parler bas).

2. Exemple : « Les blocs opératoires exigent l’asepsie, donc lavez-vous les mains au protocole avant d’entrer. » Hôpital, pas bibliothèque — sans répéter silence/concentration. « J’aime les blouses » n’est pas l’hygiène.

Mission vers conduite — équivalent pédagogique de l’anglais sur la politique de bruit.`,
    expert: `Salle de lecture

Mode ou mobilier ne justifient pas le volume ; la bonne phrase va de besoin de concentration à parler bas.

Proche des feux tricolores — but ou règle sous cadre partagé vers devoir — ici en lieu d’étude.`,
  },

  1027: {
    beginner: `Ami sédentaire (FR)

1. « Un mouvement régulier soutient la santé cardiovasculaire, donc planifiez une marche quotidienne » — bienfait attendu vers habitude concrète.

2. Ennui de la marche, baskets ou béton ne font pas santé vers marche planifiée.`,
    intermediate: `Marche quotidienne

1. Sur cette carte une prémisse sur le mouvement et le cœur soutient la prescription d’une marche chaque jour pour quelqu’un de sédentaire (selon l’énoncé).

2. Exemple : « Les fibres aident le transit, donc ajoutez une portion de légume à midi. » Alimentation, pas cardio — sans répéter la marche. « Je déteste les légumes » ne soigne pas.

Promotion de santé : mécanisme ou bénéfice vers comportement.`,
    expert: `Marche quotidienne

Humeur ou existence d’équipement n’argumente pas bénéfice cardiovasculaire vers habitude de marche ; l’option attendue oui.

Pas de méta-analyse ; seulement la forme soutien présumé vers recommandation.`,
  },

  1028: {
    beginner: `Interrogation d’algèbre (FR)

1. « Si x vaut 5, alors x plus 2 doit valoir 7 » — hypothèse sur x vers conséquence arithmétique en une micro-dérivation.

2. « Soit x un nombre », la primalité de 7 ou « les équations ont des lettres » ne réalisent pas cette chaîne conditionnelle.`,
    intermediate: `Algèbre

1. Cette ligne est une dérivation minimale : x = 5 implique x + 2 = 7 en arithmétique usuelle.

2. Exemple : « Si le polygone a six côtés égaux, alors chaque angle interne vaut 120° dans le cadre euclidien visé. » Géométrie — pas x + 2. « J’aime les hexagones » ne prouve rien.

Les maths restent hypothèses vers conclusion même en une phrase.`,
    expert: `Algèbre

Poser x ou citer des faits isolés n’est pas montrer qu’une proposition force une autre ; la bonne option présente Q comme nécessaire sous P dans l’arithmétique prévue.

Forme : conditionnel — soutien inférentiel en domaine formel.`,
  },

  1029: {
    beginner: `Marée montante (FR)

1. « L’eau monte sur la plage, donc la zone sèche va rétrécir » — mouvement de l’eau vers moins d’espace sec utilisable.

2. Sable amusant, goélands ou océan salé ne font pas avancée de l’eau vers réduction du sec.`,
    intermediate: `Marée montante

1. Ici eau qui gagne du terrain est la prémisse ; rétrécissement du sec est la prédiction spatiale.

2. Exemple : « Le barrage relâche plus d’eau, donc la plage en aval rétrécit cet après-midi. » Rivière — pas la ligne de marée du QCM. « J’aime les barrages » n’est pas la géométrie du risque.

Sécurité côtière : processus observé vers espace utilisable — aligné sur l’anglais.`,
    expert: `Marée montante

Ambiance de plage n’est pas un argument sur géométrie du rivage ; la bonne phrase relie montée d’eau à réduction de la zone sèche, autres choses égales.

Modèles côtiers complets — hors item ; seulement prémisse vers prédiction.`,
  },

  1030: {
    beginner: `Planétarium (FR)

1. « La lumière a une vitesse finie, donc nous voyons les étoiles lointaines telles qu’elles étaient autrefois » — finitude de c vers retard des images, donc passé des sources.

2. Étoiles jolies, miroirs de télescopes ou nuit après le jour ne font pas c fini vers regard vers le passé.`,
    intermediate: `Planétarium

1. Cet item est le classique temps de regard : vitesse finie vers nous observons l’état passé des objets lointains.

2. Exemple : « Le son est lent dans l’air, donc tu entends le tonnerre après l’éclair. » Acoustique — pas la vitesse de la lumière cosmique. « J’aime les orages » n’est pas l’optique.

Mécanisme vers conséquence observationnelle — même profondeur que l’anglais.`,
    expert: `Planétarium

Esthétique ou optique instrumentale ne remplacent pas finitude de c comme raison de voir le passé des sources lointaines.

Relativité, expansion — hors correction de base au niveau 0 ; seule la structure mécanisme vers thèse sur nos images historiques.`,
  },

  1031: {
    beginner: `Démo pomme (balcon)

1. « La Terre attire les masses vers son centre, donc la pomme accélère vers le bas. » — principe physique vers mouvement attendu.

2. Couleurs de pommes, garde-corps, étymologie de Newton : pas la chaîne attraction vers chute.`,
    intermediate: `Démo pomme

1. Prémisse : attraction terrestre vers le centre (gravité).

2. Conclusion : la pomme accélère vers le bas une fois lâchée.

3. « Donc » relie explication à prédiction cinématique.

Même logique que l’anglais ; vocabulaire adapté à la banque FR.`,
    expert: `Démo pomme

L’item porte sur la structure mécanisme vers comportement ; pas de calcul d’intensité de champ requis.`,
  },

  1032: {
    beginner: `Plan de pratique linguistique

1. « L’aisance suit une pratique réfléchie, donc parler un peu chaque jour vaut mieux qu’un bachotage mensuel. » — lien pratique et aisance vers choix d’emploi du temps.

2. Accents, dictionnaires, grammaire en général : pas l’argument sur la répartition dans le temps.`,
    intermediate: `Pratique espacée

1. Prémisse : l’aisance dépend d’une pratique réfléchie (régularité et qualité).

2. Conclusion : mieux vaut parler un peu chaque jour que de tout compresser en un mois.

3. Comparaison de deux régimes d’entraînement appuyée sur la prémisse.

Équivalent pédagogique de l’item anglais sur daily speaking versus cramming.`,
    expert: `Pédagogie des langues

Argument de type science de l’apprentissage simplifié : prémisse sur la courbe d’aisance vers recommandation de calendrier.`,
  },

  1033: {
    beginner: `Wi-Fi qui coupe

1. « Le routeur est hors ligne, donc cet ordinateur n’atteindra pas Internet. » — état du routeur vers absence de connectivité attendue.

2. Obligation de vidéo, couleur de câbles, voyants : pas diagnostic réseau.`,
    intermediate: `Bureau / appel vidéo

1. Prémisse : routeur hors ligne (pas de passerelle active).

2. Conclusion : la machine ne joindra pas Internet par ce chemin.

3. Schéma identique à l’anglais router offline.

Argument de dépannage : composant vers service.`,
    expert: `Topologie domestique

Chemins alternatifs (partage de connexion) hors texte ; l’exercice reste structurel.`,
  },

  1034: {
    beginner: `Pièces de musée fragiles

1. « Ces matériaux se fissurent sous un choc brutal, donc soutenez-les par le dessous en les déplaçant. » — risque mécanique vers consigne.

2. Âge des artefacts, prix d’entrée, vitrines : pas choc vers soutien par le dessous.`,
    intermediate: `Conservation

1. Prémisse : choc brutal vers fissuration possible.

2. Conclusion : soulever ou porter en soutenant par dessous.

3. « Donc » relie mécanique des matériaux à protocole de manutention.

Même profondeur que l’anglais sur les pièces fragiles.`,
    expert: `Manutention

Garant implicite : le soutien par le dessous réduit les contraintes qui mènent à la fissuration ; pas de cours de muséographie complet requis.`,
  },

  1035: {
    beginner: `Mélange pour fresque

1. « Le pigment rouge plus le pigment bleu donne ce violet-là, donc ces deux tubes produiront cette nuance. » — règle de mélange vers résultat sur l’échantillon.

2. Mode du violet, usure des pinceaux, grain de toile : pas pigments vers nuance.`,
    intermediate: `Peinture murale

1. Prémisse : composition des pigments pour ce violet précis.

2. Conclusion : ces deux tubes suffisent pour obtenir la nuance cible.

3. Structure composition vers échantillon, comme en anglais.

Raisonnement d’atelier : fait de palette vers prédiction de rendu.`,
    expert: `Pigments

Les vrais pigments dévient des primaires idéales ; l’énoncé fixe le monde de l’item.`,
  },

  1036: {
    beginner: `Feu rouge (jeune conducteur)

1. « Ce feu est rouge, donc la file qui le regarde doit s’arrêter avant la ligne d’arrêt. » — état du feu vers règle de circulation.

2. Luminosité, coins de carrefour, freins : pas feu rouge vers arrêt à la ligne.`,
    intermediate: `Code de la route

1. Prémisse : ce feu est rouge pour ta voie.

2. Conclusion : arrêt obligatoire avant la ligne d’arrêt.

3. Fond réglementaire implicite — aligné sur l’item anglais.

Argument normatif : signal vers devoir.`,
    expert: `Ligne d’arrêt

Même famille logique que les autres items feu rouge ; « file qui le regarde » = file de circulation concernée par ce feu.`,
  },

  1037: {
    beginner: `Pauses du groupe d’étude

1. Bonne réponse : première option (index 0 en banque FR, comme en anglais) : « La dette de sommeil nuit à l’attention, donc de courtes pauses aideront à rester concentré. » — sommeil et attention vers pauses.

2. Chaises, café, calendrier des examens : hors sujet.`,
    intermediate: `Pauses d’étude

1. Prémisse : dette de sommeil vers baisse d’attention.

2. Conclusion : des pauses courtes maintiennent la qualité de la séance.

3. « Donc » relie fatigue cognitive à design de session.

Même schéma que l’anglais sleep debt vers breaks.`,
    expert: `Dette de sommeil

Argument prudentiel ; pas d’exigence de données sur les micro-pauses.`,
  },

  1038: {
    beginner: `Concert complet / billets

1. « Il reste peu de places, donc la revente demandera plus que le prix d’origine. » — rareté vers prime sur le marché secondaire.

2. T-shirts, enceintes, goût des fans : pas rareté vers prix de revente.`,
    intermediate: `Billetterie

1. Prémisse : très peu de places disponibles (offre résiduelle faible).

2. Conclusion : prix de revente au-dessus du prix nominal.

3. Logique d’offre et de demande informalisée — comme l’anglais.

Prédiction économique argumentée.`,
    expert: `Prix de revente

Réglementation du marché secondaire hors périmètre ; l’item est structurel.`,
  },

  1039: {
    beginner: `Bruit en ville

1. Troisième option (index 2) : « Parce que la circulation nocturne empêche les habitants de dormir, la ville devrait instaurer des heures calmes. » — perte de sommeil vers règlement sur les heures calmes.

2. Règlement existant seul, haine du bruit sans politique, plaintes générales sans « il faut » : pas le même argument.`,
    intermediate: `Heures calmes

1. Sous-clause « parce que » : nuisance nocturne vers sommeil des habitants.

2. Conclusion : instaurer des heures calmes (mesure municipale).

3. Problème urbain vers réponse institutionnelle.

Même structure que l’anglais sur la politique d’heures calmes.`,
    expert: `Politique urbaine du bruit

Préjudice sur le sommeil comme justification d’une norme temporelle ; évaluation juridique hors portée.`,
  },

  1040: {
    beginner: `Big band scolaire

1. « La guitare solo est un quart de ton bas, donc l’accord sonnera faux tant qu’on ne l’accorde pas. » — défaut d’accord vers son discordant jusqu’à correction.

2. Origine du jazz, notes, chaises : pas intonation vers qualité de l’accord.`,
    intermediate: `Répétition jazz

1. Prémisse : guitare solo un quart de ton bas (erreur d’intonation).

2. Conclusion : l’accord restera faux tant que ce n’est pas corrigé.

3. Même logique que l’anglais lead guitar, quarter-step flat.

En FR la consigne dit « big band » ; l’argument porte sur la guitare solo et l’accord, comme dans la banque anglaise.

Diagnostic musical vers conséquence sonore et nécessité de correction.`,
    expert: `Quart de ton

L’écart d’intonation rend l’accord perçu comme faux dans un contexte harmonique typique ; l’item ne teste pas l’oreille absolue.`,
  },

  1041: {
    beginner: `Cupcakes sortis trop tôt

1. Première option (index 0) : « La mie paraît encore humide, donc donnez cinq minutes de plus sinon ils vont s’affaisser. » — cuisson insuffisante vers prolonger ou effondrement.

2. Glaçage sucré, caissettes, horaires des boulangeries : pas mie humide vers affaissement.`,
    intermediate: `Cuisson des cupcakes

1. Prémisse : mie encore humide (structure pas assez prise).

2. Conclusion : ajouter du temps de cuisson sous peine d’affaissement.

3. « Donc » lie diagnostic visuel à décision et risque.

Même schéma que l’anglais sur wet crumb et collapse.`,
    expert: `Affaissement

Conditionnel pratique ; pas d’examen de pâtisserie avancé.`,
  },

  1042: {
    beginner: `Relais à l’entraînement

1. Première option : « Leurs chronos se sont améliorés tout le printemps, donc ils devraient battre le record de l’an dernier. » — progression vers prédiction sur le record.

2. Témoins, couloirs, course aérobie : pas tendance vers record.`,
    intermediate: `Chronos

1. Prémisse : amélioration des chronos sur la saison.

2. Conclusion : devraient battre le record de l’an dernier (prévision).

3. Raisonnement inductif sportif — comme l’anglais.

Tendance comme preuve pour une attente de performance.`,
    expert: `Record

Même que l’anglais : hasard et conditions de course non évalués ; structure seulement.`,
  },

  1043: {
    beginner: `Pique-nique / météo

1. Deuxième option (index 1) : « Le radar montre une ligne d’orages qui approche, donc emportez la bâche pour le kiosque. » — orages vers abri.

2. Paniers en osier, herbe, fourmis : pas radar vers préparation.`,
    intermediate: `Ligne d’orages

1. Prémisse : ligne d’orages approchant (signal radar).

2. Conclusion : emporter la bâche pour le kiosque (abri).

3. Planification de plein air : risque vers matériel — aligné sur l’anglais rain fly.

Bâche et kiosque = équivalent local du rain fly ou pavilion en anglais.`,
    expert: `Orages

Argument de préparation météo ; détail radar hors clé.`,
  },

  1044: {
    beginner: `Outils du jardin partagé

1. Première option (index 0) : « Il faut construire un abri verrouillable parce que les outils disparaissent. » — vols récurrents vers abri fermé.

2. Adoration du jardinage, jardins sympas, outils brillants : pas vols vers abri.`,
    intermediate: `Sécurisation

1. Raison (parce que) : disparition des outils.

2. Conclusion : construire un abri verrouillable.

3. L’ordre des clauses diffère de l’anglais (we should… because) mais la structure logique est identique.

Perte répétée vers mesure d’accès contrôlé.`,
    expert: `Abri verrouillable

Argument moyens–fin : réduire les vols par stockage sécurisé.`,
  },

  1045: {
    beginner: `Ciel nocturne avant tempêtes

1. Première option : « Les météorologues observent le ciel nocturne pour que les ports pêchés puissent alerter tôt les marins. » — surveillance vers alerte précoce (contexte maritime FR).

2. Ciel magnifique, étoiles, prix des télescopes : pas observation vers alerte.`,
    intermediate: `Veille météo

1. Activité : observation du ciel de nuit par les météorologues.

2. But : permettre aux ports de pêche d’alerter tôt les marins.

3. Même squelette argumentatif que l’anglais coastal towns et fishers avec libellé FR.

Surveillance vers réduction du risque pour usagers exposés.`,
    expert: `Alerte aux marins

Le vocabulaire diffère de l’anglais mais la prémisse–conclusion observation vers alerte est la même.`,
  },

  1046: {
    beginner: `Fontaine à l’école

1. « Du plomb a été détecté dans la fontaine, donc l’école doit la remplacer immédiatement. » — danger vers remplacement urgent.

2. Brillance, eau en bouteille, couloirs : pas plomb vers remplacement.`,
    intermediate: `Eau potable

1. Prémisse : présence de plomb.

2. Conclusion : remplacement immédiat.

3. Schéma santé publique : détection vers remédiation — comme l’anglais.

Contamination vers action corrective pressante.`,
    expert: `Plomb

Même logique d’urgence que la version anglaise.`,
  },

  1047: {
    beginner: `File d’attente en soutien psy

1. « L’attente en consultation est de six semaines, donc l’université devrait embaucher un thérapeute supplémentaire. » — délai vers renfort d’effectif.

2. Chaises, formation des thérapeutes, salles calmes : pas délai vers embauche.`,
    intermediate: `Accès aux soins

1. Prémisse : file de six semaines.

2. Conclusion : embaucher un thérapeute de plus.

3. « Donc » relie engorgement à capacité — aligné sur l’anglais.

File d’attente comme justification de ressources humaines.`,
    expert: `Liste d’attente

Modèle simplifié ; pas d’analyse RH complète requise.`,
  },

  1048: {
    beginner: `Relecture de devoir

1. Deuxième option (index 1) : « Si k est pair, alors k au carré est pair — car k égale 2m pour un entier m. » — définition du pair vers support pour k² pair.

2. Preuves et logique générique, pairs entiers isolés : pas cette chaîne avec « car ».`,
    intermediate: `Parité

1. Conclusion annoncée : k pair implique k² pair.

2. Appui : existence de m entier tel que k = 2m.

3. Structure de preuve mathématique avec « car » explicite.

Même profondeur que l’anglais sur k = 2m.`,
    expert: `Entiers pairs

Argument définitionnel : la clause « car » fournit le pivot vers la suite du raisonnement (non développée dans l’item).`,
  },

  1049: {
    beginner: `Calendrier des marées

1. Première option (index 0) : « La basse mer découvre plus de flaques, donc planifiez le transect sur ce créneau. » — fenêtre de basse mer vers timing du relevé.

2. Livres imprimés, sable, vagues : pas basse mer vers transect.`,
    intermediate: `Littoral

1. Prémisse : basse mer expose plus de flaques (zone accessible).

2. Conclusion : placer le transect sur ce créneau.

3. Équivalent français de low tide exposes tide pools en anglais.

Nature du terrain observable vers planification de terrain.`,
    expert: `Transect

Sécurité marée montante possible en pratique ; hors exigence de l’item.`,
  },

  1050: {
    beginner: `Lumière des étoiles (visite)

1. Deuxième option (index 1) : « La lumière étoilée a voyagé des années, donc nous voyons l’étoile telle qu’elle était dans le passé. » — délai de propagation vers passé observé.

2. Prix des télescopes, noms de constellations, nuages : pas temps de trajet vers lookback.`,
    intermediate: `Temps de trajet lumineux

1. Prémisse : trajet lumineux long (années).

2. Conclusion : image historique de l’étoile.

3. Même idée que l’anglais starlight began its journey.

Lookback time vulgarisé pour visiteurs.`,
    expert: `Passé lumineux

Écart émission et réception ; cosmologie fine hors niveau 0.`,
  },

  1051: {
    beginner: `Repérer la prémisse — gravité / pomme

1. L’énoncé ressemble à : Comme [première idée], [deuxième idée]. La prémisse est la raison que l’on tient pour vraie — pas la prédiction que l’on infère.

2. Ici, « La gravité tire les objets vers le bas » est ce que Comme introduit : c’est la prémisse. « La pomme tombera » est la conclusion. Le mot Comme n’est qu’un signal, pas une prémisse de contenu.`,
    intermediate: `Prémisse vs conclusion (gravité)

1. Sur cette carte : P = attraction gravitationnelle vers le bas ; Q = cette pomme tombe.

2. Exemple : « Comme le pont est homologué pour dix tonnes, le camion devrait passer. » Prémisse = charge admissible ; conclusion = jugement de sécurité — pas « le camion devrait passer » comme prémisse.

Demandez ce qui est offert comme raison — c’est en général P, pas Q.`,
    expert: `Identification de la prémisse

La chute de la pomme est ce que l’on infère ; ce n’est pas la proposition d’appui. Dans « puisque P, Q », P est le contenu antécédent offert comme appui ; Q est la cible de l’inférence.

En examen : choisir le contenu après Comme (avant la virgule), pas la clause de résultat.`,
  },

  1052: {
    beginner: `Pratique / parler chaque jour — prémisse

1. « La pratique améliore l’aisance » est l’affirmation sur l’apprentissage invoquée comme raison. « Tu devrais parler tous les jours » est le conseil — la conclusion — qui repose sur cette affirmation.

2. Quand la question demande la prémisse, choisir l’énoncé d’appui, pas le devoir.`,
    intermediate: `Apprentissage des langues — fente prémisse

1. Ici : pratique vers aisance = P ; parler chaque jour = Q (prescription).

2. Exemple : « Comme le sommeil consolide la mémoire, tu devrais éviter les nuits blanches avant les examens. » Prémisse = consolidation de la mémoire — pas « éviter les nuits blanches ».

Les impératifs (« tu devrais… ») sont en général des conclusions dans cet exercice.`,
    expert: `Structure prudentialiste

L’impératif est la conclusion prudentialiste ; l’affirmation empirique ou générale sur la pratique est la prémisse. Choisir le devoir confond appui et appuyé.`,
  },

  1053: {
    beginner: `Routeur / Wi‑Fi — prémisse

1. « Le routeur est éteint » est le fait sur le réseau — la prémisse. « Le Wi‑Fi ne fonctionnera pas » est la prédiction — la conclusion.

2. Comme introduit le diagnostic, pas le pronostic de panne.`,
    intermediate: `Partage diagnostic

1. Sur cet item : routeur éteint = P ; Wi‑Fi ne fonctionnera pas = Q.

2. Exemple : « Comme le réservoir est vide, la tondeuse ne démarrera pas. » Prémisse = réservoir vide — pas « ne démarrera pas ».

Lignes de dépannage : état matériel vers issue de service ; l’état est en général P.`,
    expert: `Arrière-plan causal

L’affirmation fonctionnelle (pas de Wi‑Fi) est la conclusion inférée ; l’alimentation ou l’état est la prémisse. Comme n’est pas une prémisse — il marque seulement où commence P.`,
  },

  1054: {
    beginner: `Objets fragiles — prémisse

1. « Les artéfacts sont fragiles » est la prémisse descriptive (risque). « Ils nécessitent une manipulation prudente » est la conclusion prescriptive (que faire).

2. Si la tâche est « quelle est la prémisse ? », choisir la fragilité, pas la règle de manipulation.`,
    intermediate: `Conservation — du descriptif au prescriptif

1. Ici : fragile = P ; manipulation prudente = Q.

2. Exemple : « Comme la glace est glissante, les piétons devraient utiliser des crampons. » Prémisse = glissance — pas « utiliser des crampons ».

Les énoncés « est » vont souvent en P ; les « il faut » en Q.`,
    expert: `Rapport d’appui

« Nécessitent une manipulation prudente » est ce qui est soutenu ; la fragilité est ce qui soutient. Choisir la norme quand on demande la prémisse inverse les rôles.`,
  },

  1055: {
    beginner: `Mélange de couleurs — prémisse

1. « Le rouge et le bleu font du violet » est le fait compositionnel — la prémisse. « Mélangez-les pour du violet » est la consigne — la conclusion sur l’action.

2. La raison de mélanger est la façon dont les couleurs se combinent — pas parce que mélanger est amusant.`,
    intermediate: `Consigne artisanale

1. Sur cet énoncé : comportement des pigments = P ; consigne de mélange = Q.

2. Exemple : « Comme la levure fermente le sucre, laissez lever la pâte au chaud. » Prémisse = fait de fermentation — pas « laissez lever » comme prémisse.

Lignes « comment faire » : vérité sur les matériaux en P, action en Q.`,
    expert: `Raisonnement instrumental

L’impératif (« mélangez… ») est la conclusion ; l’affirmation compositionnelle est la prémisse. Ne pas étiqueter l’ordre d’agir comme la raison quand on demande la prémisse.`,
  },

  1056: {
    beginner: `Feu rouge / arrêt — prémisse

1. « Le feu est rouge » est la prémisse observable (vérité sur le signal). « Les conducteurs doivent s’arrêter » est la conclusion normative (ce qui s’ensuit selon les règles).

2. La fente prémisse porte sur les faits du monde ; « doit s’arrêter » est le devoir inféré, pas la raison d’appui.`,
    intermediate: `Règle de circulation

1. Ici : feu rouge = P ; doit s’arrêter = Q (selon loi ou usage).

2. Exemple : « Comme la sortie est bloquée, la circulation doit être déviée. » Prémisse = sortie bloquée — pas « doit être déviée » seule.

« Est » (état du signal) contre « il faut » (action requise) — P est en général le « est ».`,
    expert: `Fait vs norme

L’énoncé déontique (doit s’arrêter) est la conclusion ; l’état descriptif du signal est la prémisse. Les permuter est une erreur fréquente au début.`,
  },

  1057: {
    beginner: `Sommeil et concentration — prémisse

1. « Le manque de sommeil affecte la concentration » est l’affirmation d’effet — la prémisse. « Les étudiants doivent se reposer » est le correctif recommandé — la conclusion.

2. On vous demande quelle clause est la raison donnée, pas quelle ligne sonne le mieux.`,
    intermediate: `Conseil de bien-être

1. Sur cet énoncé : manque de sommeil nuit à la concentration = P ; se reposer = Q.

2. Exemple : « Comme la déshydratation ralentit les réactions, les pilotes devraient s’hydrater avant le vol. » Prémisse = effet de la déshydratation — pas « devraient s’hydrater » comme prémisse.

Mécanisme de tort vers remède ; le tort est P.`,
    expert: `Moyens et fins

L’impératif de repos est la conclusion ; le lien sommeil ou concentration est la prémisse d’appui. La prémisse n’est pas elle-même l’impératif.`,
  },

  1058: {
    beginner: `Offre et prix — prémisse

1. « L’offre est faible » est la condition de marché — la prémisse. « Les prix augmenteront » est la prévision — la conclusion.

2. On ne cite pas la hausse des prix comme raison de la hausse — cela confondrait prédiction et appui.`,
    intermediate: `Esquisse économique

1. Ici : offre faible = P ; hausse des prix = Q.

2. Exemple : « Comme les stocks sont bas, les prix au comptant devraient grimper. » Prémisse = stocks bas — pas « grimper » comme prémisse.

Les variables d’état (offre) vont en P ; les mouvements endogènes (prix) en Q.`,
    expert: `Statique comparative

Le mouvement de prix est ce que l’on infère ; la rareté est ce que l’on affirme comme raison. Ne pas traiter Q comme P.`,
  },

  1059: {
    beginner: `Chiens / compagnie — prémisse

1. « Les chiens sont sociaux » est l’affirmation sur le trait — la prémisse. « Ils ont besoin de compagnie » est l’implication pour les soins — la conclusion.

2. Le besoin est ce que l’on déduit de la sociabilité — pas ce que l’on cite comme raison brute.`,
    intermediate: `Éthologie vers soins

1. Ici : espèce sociale = P ; besoin de compagnie = Q.

2. Exemple : « Comme les corvidés mettent des réserves, ils ont besoin d’enrichissement cognitif en captivité. » Prémisse = mise en cache — pas « besoin d’enrichissement » comme prémisse.

Trait général vers devoir de bien-être ; le trait est P.`,
    expert: `Généralisation

La prescription de bien-être est soutenue par l’affirmation sur le trait ; le trait est prémisse, le besoin est conclusion dans cette étiquette.`,
  },

  1060: {
    beginner: `Guitare désaccordée — prémisse

1. « La guitare n’est pas accordée » est le fait de réglage — la prémisse. « Elle sonnera mal » est le jugement sonore — la conclusion.

2. Le mauvais son est ce que l’on prédit à partir de l’accord — pas la raison pour laquelle on fait la prédiction.`,
    intermediate: `Qualité de jeu

1. Ici : pas accordée = P ; sonnera mal = Q.

2. Exemple : « Comme l’anche est ébréchée, l’embouchure sera instable. » Prémisse = ébréchure — pas « instable » comme prémisse.

Défaut vers issue esthétique ou sonore ; le défaut est P.`,
    expert: `Évaluation conditionnelle

L’évaluation auditive est la conclusion ; l’état physique est la prémisse. Elles sont liées mais ne sont pas le même acte de parole quand on étiquette la prémisse.`,
  },

  1061: {
    beginner: `Four / gâteau — prémisse

1. « Le four est trop chaud » est la prémisse sur l’équipement — la condition invoquée comme raison. « Le gâteau va brûler » est la conclusion — ce qui s’ensuit de cette chaleur.

2. Ne choisis pas le mot Comme comme prémisse — il signale seulement où commence P.`,
    intermediate: `Contrôle de cuisson

1. Ici : trop chaud = P ; va brûler = Q.

2. Exemple : « Comme la poêle est encore froide, le beurre ne caramélisera pas encore. » Prémisse = poêle froide — pas « ne caramélisera pas ».

État du four ou de la poêle vers résultat de cuisson ; l’état est P.`,
    expert: `Mise en avant causale

Le brûlage est prédit à partir de la chaleur ; le niveau de chaleur est ce qui est donné comme appui. Q n’est pas P.`,
  },

  1062: {
    beginner: `Entraînement / vitesse — prémisse

1. « Tu t’es entraîné dur » est la prémisse d’effort. « Tu finiras plus vite » est la conclusion de performance.

2. L’affirmation sur la vitesse est ce que tu attends du récit d’entraînement — pas la raison offerte pour cette attente.`,
    intermediate: `Rendement de l’entraînement

1. Ici : entraîné dur = P ; finir plus vite = Q.

2. Exemple : « Comme tu as répété les gammes chaque jour, ta lecture à vue devrait s’assouplir. » Prémisse = répétition — pas « lecture assouplie » comme prémisse.

Faits d’entraînement vers performance ; les faits sont P.`,
    expert: `Inférence de performance

« Plus vite » est la conséquence annoncée ; la pratique est l’appui antécédent. Les inverser fausse l’étiquette prémisse.`,
  },

  1063: {
    beginner: `Nuages / pluie — prémisse

1. « Les nuages sont sombres » est la prémisse visible (signe). « Il va pleuvoir » est la conclusion (prévision).

2. La pluie est ce que tu infères — pas ce que tu listes comme raison donnée dans P.`,
    intermediate: `Lecture du ciel

1. Ici : nuages sombres = P ; va pleuvoir = Q.

2. Exemple : « Comme le vent a tourné vers la côte, le brouillard devrait arriver. » Prémisse = vent — pas « brouillard » comme prémisse.

Signe vers événement ; le signe est P (simplification niveau 0).`,
    expert: `Raccourci inductif

La météo réelle est plus riche ; dans cet exercice, observation = prémisse, prédiction = conclusion.`,
  },

  1064: {
    beginner: `Batterie / démarrage — prémisse

1. « La batterie est vide » est la prémisse électrique. « La voiture ne démarrera pas » est la conclusion fonctionnelle.

2. Le non-démarrage est le symptôme que tu infères à partir de l’état de charge — pas le fait d’appui.`,
    intermediate: `Diagnostic automobile

1. Ici : batterie vide = P ; ne démarrera pas = Q (même famille que routeur éteint).

2. Exemple : « Comme la jauge d’essence est à zéro, le moteur ne tournera pas. » Prémisse = réservoir vide — pas « ne tournera pas ».

Énergie ou stockage d’abord, comportement ensuite.`,
    expert: `Arrière-plan mécanique

L’échec au démarrage est Q ; l’état de batterie est P. Le symptôme n’est pas la prémisse.`,
  },

  1065: {
    beginner: `Plantes / fenêtre — prémisse

1. « Les plantes ont besoin de lumière » est la prémisse biologique. « Elles devraient être près de la fenêtre » est la conclusion de placement.

2. Le besoin de lumière est la raison ; la fenêtre est la réponse que tu déduis.`,
    intermediate: `Culture intérieure

1. Ici : besoin de lumière = P ; près de la fenêtre = Q.

2. Exemple : « Comme les succulentes pourrissent en terre trop humide, utilise un mélange drainant en pot. » Prémisse = risque de pourriture — pas « utilise un mélange » comme prémisse.

Besoin de l’organisme vers action de soin ; le besoin est P.`,
    expert: `Placement pour le bien-être

Le conseil « fenêtre » est soutenu par la phototropie ; le besoin est prémisse, le placement est conclusion.`,
  },

  1066: {
    beginner: `Silence / parler bas — prémisse

1. « Le silence est requis » est la règle de contexte — la prémisse. « Nous devons parler bas » est la conclusion de conduite.

2. Parler bas est ce qui suit l’exigence de calme — pas la raison elle-même.`,
    intermediate: `Normes de lieu

1. Ici : silence requis = P ; parler bas = Q.

2. Exemple : « Comme l’audience est en cours, les téléphones doivent être éteints. » Prémisse = session en cours — pas « téléphones éteints » comme prémisse.

Cadre ou règle vers manières ; la règle est P.`,
    expert: `Empilement déontique

L’impératif dérivé (parler bas) est Q ; l’exigence ambiante (silence) est P.`,
  },

  1067: {
    beginner: `Exercice / marche — prémisse

1. « L’exercice améliore la santé » est la prémisse de bénéfice général. « Nous devrions marcher quotidiennement » est la conclusion prescriptive spécifique.

2. La marche est le plan que tu infères — pas la proposition d’appui brute.`,
    intermediate: `Style santé publique

1. Ici : exercice améliore la santé = P ; marcher quotidiennement = Q.

2. Exemple : « Comme les fibres aident la digestion, ajoute des légumes à midi. » Prémisse = bienfait des fibres — pas « ajoute des légumes » comme prémisse.

Évidence large vers devoir étroit ; le large est P.`,
    expert: `Du général au particulier

L’habitude concrète est soutenue par l’affirmation générale ; ne traite pas l’habitude comme prémisse.`,
  },

  1068: {
    beginner: `X = 5 / X + 2 = 7 — prémisse

1. « X est égal à 5 » est le donné — la prémisse de départ. « X plus 2 est égal à 7 » est la ligne dérivée — la conclusion de l’étape.

2. En style « preuve », les donnés vont en P ; les lignes calculées en Q.`,
    intermediate: `Étape arithmétique

1. Ici : X = 5 = P ; X + 2 = 7 = Q (arithmétique ordinaire).

2. Exemple : « Comme n = 10, n/2 doit valoir 5. » Prémisse = n = 10 — pas « n/2 = 5 » comme prémisse.

Hypothèse vers conséquent ; l’hypothèse est P.`,
    expert: `Échafaudage de preuve

Le résultat de l’opération est Q ; l’affectation X = 5 est P. N’étiquette pas Q comme prémisse.`,
  },

  1069: {
    beginner: `Marée / plage — prémisse

1. « La marée monte » est la prémisse de processus. « La plage va rétrécir » est la conclusion spatiale (moins de sable sec).

2. Le rétrécissement est prédit à partir de l’eau qui monte — pas offert comme raison de l’eau.`,
    intermediate: `Dynamique du littoral

1. Ici : marée monte = P ; plage plus petite = Q.

2. Exemple : « Comme la neige fond vite en montagne, le sentier sera boueux. » Prémisse = fonte — pas « boueux » comme prémisse.

Forçage vers aménagement vécu ; le forçage est P.`,
    expert: `Conséquence spatiale

Le rétrécissement est Q ; la phase de marée est P. L’effet n’est pas la prémisse.`,
  },

  1070: {
    beginner: `Lumière / étoiles passées — prémisse

1. « La lumière prend du temps pour voyager » est la prémisse physique (vitesse finie ou délai). « Nous voyons les étoiles telles qu’elles étaient » est la conclusion de regard vers le passé.

2. L’apparence passée suit du temps de trajet — ce n’est pas le fait d’appui dans P.`,
    intermediate: `Vulgarisation astronomique

1. Ici : lumière met du temps = P ; voir les étoiles comme elles étaient = Q (même famille que planétarium et visite).

2. Exemple : « Comme le son traverse le stade lentement, les applaudissements arrivent décalés. » Prémisse = son lent — pas « décalés » comme prémisse.

Prémisse de propagation vers conclusion d’observation.`,
    expert: `Émission vs réception

Le regard vers le passé est Q ; la vitesse finie ou le délai est P. La nuance relativiste est optionnelle au niveau 0.`,
  },

  1071: {
    beginner: `Démo gravité — deuxième passage (prémisse)

1. Nouvel ID, mêmes rôles que la ligne gravité / pomme : « La gravité tire les objets vers le bas » = P (la raison que tu traites comme donnée). « La pomme tombera » = Q (l’issue que tu infères).

2. La vignette peut être formulée un peu différemment — prémisse vs conclusion ne bouge pas.`,
    intermediate: `Gravité — deuxième passage

1. P = récit de pesanteur universelle ; Q = chute de cette pomme.

2. Exemple : « Comme les acides cèdent des protons, ce papier rougira. » P = comportement acide — pas « papier rougit ».

Clause de type loi d’abord, cas ensuite ; la première = prémisse quand on demande.`,
    expert: `Cas vs loi

La chute est ce que tu déduis ; la gravité est ce que tu cites. Même étiquetage que les ID 1051 et 1061 — seule la vignette de surface tourne.`,
  },

  1072: {
    beginner: `Aisance / parole quotidienne — deuxième passage (prémisse)

1. « La pratique améliore l’aisance » = P. « Tu devrais parler tous les jours » = Q (devoir de rythme).

2. La répétition dans le banc reprend le même découpage P/Q avec une tige nouvelle — tu dois toujours étiqueter appui vs prescription.`,
    intermediate: `Pratique — deuxième passage

1. Mécanisme (pratique vers compétence) soutient le calendrier (quotidien).

2. Exemple : « Comme l’espacement des révisions bat le bachotage, tu devrais réviser chaque semaine. » P = effet d’espacement — pas « réviser chaque semaine ».

Affirmation descriptive sur l’apprentissage vers devoir d’habitude ; le « est » est P.`,
    expert: `Pile normative

L’impératif quotidien est Q ; le lien pratique–aisance est P — parallèle à 1052 et 1062.`,
  },

  1073: {
    beginner: `Réseau domestique — deuxième passage (prémisse)

1. « Le routeur est éteint » = P (état du matériel). « Le Wi‑Fi ne fonctionnera pas » = Q (prédiction de service).

2. Deuxième passage = même logique boîtier vers air que 1053 et 1063 avec un habillage neuf.`,
    intermediate: `Routeur — deuxième passage

1. P = CPE coupé ; Q = WLAN inutilisable.

2. Exemple : « Comme le résolveur DNS est injoignable, la résolution de noms échouera. » P = résolveur — pas « échec ».

Faute amont = prémisse ; symptôme = conclusion.`,
    expert: `Fautes en couches

La panne Wi‑Fi est inférée ; le routeur éteint est posé comme appui — même sens que les autres items routeur.`,
  },

  1074: {
    beginner: `Manipulation prudente — deuxième passage (prémisse)

1. Fragilité = P. Manipulation prudente = Q.

2. Autre passage sur risque vers protocole — les rôles restent : risque descriptif d’abord, soin prescriptif ensuite.`,
    intermediate: `Objets — deuxième passage

1. P = danger matériel ; Q = norme de manipulation.

2. Exemple : « Comme le nitrile se dégrade dans les cétones, change de gant pour ce solvant. » P = dégradation — pas « changer de gant » comme prémisse.

Registre de danger vers contrôle ; le danger est P.`,
    expert: `Cible normative

Les règles de soin sont justifiées par la fragilité ; on n’infère pas la fragilité à partir des règles — comme 1054 et 1064.`,
  },

  1075: {
    beginner: `Mélange de couleurs — deuxième passage (prémisse)

1. « Le rouge et le bleu font du violet » = P (recette). « Mélangez-les pour du violet » = Q (consigne).

2. Tu choisis encore la prémisse : la recette, pas l’ordre de mélanger.`,
    intermediate: `Palette — deuxième passage

1. Composition = P ; impératif = Q.

2. Exemple : « Comme la résine durcit en dix minutes, travaille par petites lots. » P = temps de prise — pas « petits lots » comme prémisse.

Fait sur les matériaux vers ordre ; le fait est P.`,
    expert: `Choix des moyens

La consigne de mélange est Q ; l’affirmation sur les couleurs est P — aligné sur 1055 et 1065.`,
  },

  1076: {
    beginner: `Carrefour — deuxième passage (prémisse)

1. Feu rouge = P (observation). Doit s’arrêter = Q (devoir).

2. Même découpage signal vers obligation que les autres cartes circulation — le deuxième passage ne change que le décor.`,
    intermediate: `Circulation — deuxième passage

1. P = aspect ; Q = conformité.

2. Exemple : « Comme la barrière piste affiche rouge, reste court du repère. » P = état de la barrière — pas « reste court » comme prémisse.

Voir vs devoir ; voir = P.`,
    expert: `Conséquence déontique

L’arrêt est Q ; le rouge est P — ne pas inverser empirique et déontique.`,
  },

  1077: {
    beginner: `Concentration / repos — deuxième passage (prémisse)

1. Manque de sommeil nuit à la concentration = P. Les étudiants doivent se reposer = Q.

2. Tort vers remède encore — la prémisse est le constat de déficit, pas le conseil de repos.`,
    intermediate: `Sommeil — deuxième passage

1. P = tort cognitif ; Q = devoir de récupération.

2. Exemple : « Comme la déshydratation ralentit les réactions, les athlètes devraient s’hydrater avant l’effort. » P = effet de la déshydratation — pas « s’hydrater » comme prémisse.

Preuve de problème vers correctif ; la preuve est P.`,
    expert: `Clôture du conseil

Le repos est en aval ; le lien sommeil / concentration est P — même pile que 1057 et 1067.`,
  },

  1078: {
    beginner: `Offre / prix — deuxième passage (prémisse)

1. Offre faible = P. Les prix augmenteront = Q.

2. Le mouvement de prix est ce que tu infères — pas ce que tu listes comme raison donnée.`,
    intermediate: `Économie — deuxième passage

1. P = marché tendu ; Q = prévision de prix.

2. Exemple : « Comme les postes à quai sont rares, les surcharges fret vont exploser. » P = rareté — pas « surcharges » comme prémisse.

Condition d’abord, prix ensuite ; la condition est P.`,
    expert: `Étiquette exogène

Le prix est endogène dans le récit jouet ; l’offre est la prémisse énoncée — comme 1058 et 1068.`,
  },

  1079: {
    beginner: `Chiens / compagnie — deuxième passage (prémisse)

1. Chiens sociaux = P. Besoin de compagnie = Q.

2. Le trait fonde la conclusion de bien-être — le trait reste dans la fente prémisse.`,
    intermediate: `Chiens — deuxième passage

1. P = éthologie ; Q = implication pour les soins.

2. Exemple : « Comme les corvidés mettent des réserves, ils ont besoin d’enrichissement en captivité. » P = mise en cache — pas « enrichissement » comme prémisse.

Trait vers besoin ; le trait est P.`,
    expert: `Cible d’inférence

Le besoin de compagnie est inféré ; la sociabilité est P — miroir de 1059 et 1069.`,
  },

  1080: {
    beginner: `Accord / son — deuxième passage (prémisse)

1. Pas accordée = P. Sonnera mal = Q.

2. Le défaut de réglage soutient le jugement sonore — le défaut n’est pas le jugement.`,
    intermediate: `Guitare — deuxième passage

1. P = accord ; Q = verdict sur le timbre.

2. Exemple : « Comme la peau de fût est bosselée, la caisse résonnera bizarrement. » P = bosse — pas « résonnera bizarrement » comme prémisse.

Mécanique vers esthétique ; la mécanique est P.`,
    expert: `Dépendance d’évaluation

Le mauvais son est conditionné par l’accord ; l’affirmation sur l’accord est P — comme 1060.`,
  },

  1081: {
    beginner: `Consigne thermique — troisième passage (prémisse)

1. Même ligne four / gâteau que pour d’autres ID — rôles fixes : « Le four est trop chaud » = P. « Le gâteau va brûler » = Q.

2. Troisième passage = nouvel ID, carte P/Q identique.`,
    intermediate: `Cuisson — troisième passage

1. P = surchauffe thermique ; Q = risque de brûlage.

2. Exemple : « Comme la poêle est à feu vif, la sauce va accrocher. » P = réglage de chaleur — pas « accrocher » comme prémisse.

État de l’équipement vers destin du plat ; l’état est P.`,
    expert: `Variable de contrôle

Le brûlage dépend de la chaleur dans le récit ; trop chaud est la prémisse citée — comme les autres cartes four.`,
  },

  1082: {
    beginner: `Charge d’entraînement — troisième passage (prémisse)

1. « Tu t’es entraîné dur » = P (effort passé). « Tu finiras plus vite » = Q (allure projetée).

2. Le troisième passage répète effort vers prévision avec une tige neuve.`,
    intermediate: `Entraînement — troisième passage

1. P = charge d’entraînement ; Q = affirmation sur la vitesse d’achèvement.

2. Exemple : « Comme tu as répété les gammes chaque jour, cette étude prendra moins de passages. » P = répétition — pas « moins de passages » comme prémisse.

Ancre dans ce qui s’est passé ; la projection = Q.`,
    expert: `Ancrage prospectif

« Plus vite » regarde vers l’avant ; la ligne sur la pratique est P.`,
  },

  1083: {
    beginner: `Indice céleste — troisième passage (prémisse)

1. Nuages sombres = P. Il va pleuvoir = Q.

2. Règle niveau 0 : signe vers événement ; le signe = prémisse.`,
    intermediate: `Météo — troisième passage

1. P = aspect ; Q = appel pluie.

2. Exemple : « Comme le baromètre chute vite, des grains sont probables. » P = tendance de pression — pas « grains » comme prémisse.

Observation d’abord, prévision ensuite.`,
    expert: `Limite d’heuristique

La météo réelle est plus riche ; ici nuages = P, pluie = Q seulement.`,
  },

  1084: {
    beginner: `Chaîne de démarrage — troisième passage (prémisse)

1. Batterie vide = P. Ne démarrera pas = Q (symptôme).

2. État cause vs défaillance — l’état est prémisse quand on demande.`,
    intermediate: `Automobile — troisième passage

1. P = énergie stockée ; Q = issue au démarreur.

2. Exemple : « Comme le fusible est grillé, la pompe ne tournera pas. » P = fusible — pas « ne tournera pas » comme prémisse.

Faute source vers symptôme ; la faute est P.`,
    expert: `Symptôme vs cause

Le non-démarrage est inféré ; batterie vide est posée comme appui.`,
  },

  1085: {
    beginner: `Budget lumineux — troisième passage (prémisse)

1. Les plantes ont besoin de lumière = P. Près de la fenêtre = Q (placement devoir).

2. Le besoin biologique soutient le placement — le besoin est P.`,
    intermediate: `Plantes d’intérieur — troisième passage

1. P = besoin autotrophe ; Q = conseil d’aménagement.

2. Exemple : « Comme les semis ont besoin de chaleur, mets une plaque chauffante sous le bac. » P = besoin de chaleur — pas « plaque chauffante » comme prémisse.

Besoin vers moyen ; le besoin est P.`,
    expert: `Moyen et fin

La fenêtre est justifiée par le besoin de lumière ; le besoin de lumière est P.`,
  },

  1086: {
    beginner: `Lieu calme — troisième passage (prémisse)

1. Silence requis = P (règle). Parler bas = Q (conduite).

2. Contexte régulateur d’abord ; manières ensuite — la règle = P.`,
    intermediate: `Normes de bruit — troisième passage

1. P = mandat ; Q = ajustement de volume.

2. Exemple : « Comme ce service est silencieux après neuf heures, baisse le ton dans le couloir. » P = plage de silence — pas « baisse le ton » comme prémisse.

Règle vers conformité ; la règle est P.`,
    expert: `Mise en correspondance

Parler bas est mappé sur la règle ; le texte sur le silence est P.`,
  },

  1087: {
    beginner: `Marche quotidienne — troisième passage (prémisse)

1. L’exercice améliore la santé = P. Marcher quotidiennement = Q (habitude précise).

2. Le bénéfice abstrait soutient le régime concret — l’abstrait = P.`,
    intermediate: `Régime — troisième passage

1. P = généralisation sur les bienfaits ; Q = habitude instanciée.

2. Exemple : « Comme la musculation préserve la densité osseuse, tu devrais soulever deux fois par semaine. » P = lien densité — pas « deux fois par semaine » comme prémisse.

Lien général vers application ; le lien est P.`,
    expert: `Instanciation

La marche quotidienne instancie l’idée d’exercice ; le lien santé est P.`,
  },

  1088: {
    beginner: `Ligne de substitution — troisième passage (prémisse)

1. X = 5 = P (donné). X + 2 = 7 = Q (dérivé).

2. Les donnés prémissent ; la ligne dérivée conclut — dans les drills formels.`,
    intermediate: `Algèbre — troisième passage

1. P = affectation ; Q = conséquence en une étape.

2. Exemple : « Comme n = 12, n − 4 = 8. » P = n = 12 — pas « 8 » comme prémisse.

N’appelle pas l’égalité calculée P.`,
    expert: `Dérivabilité

La seconde égalité est dérivable ; la première ligne est de type prémisse dans cette paire.`,
  },

  1089: {
    beginner: `Marée de flot — troisième passage (prémisse)

1. Marée monte = P. Plage plus petite = Q (sable sec).

2. Forçage vs disposition — le forçage = P.`,
    intermediate: `Intertidal — troisième passage

1. P = phase hydrodynamique ; Q = empreinte de sable sec.

2. Exemple : « Comme la rivière monte, le chemin de halage va être inondé. » P = niveau — pas « inondé » comme prémisse.

Prémisse de processus ; changement visible pour le promeneur = Q.`,
    expert: `Géométrie vécue

Le rétrécissement est vécu ; la marée montante est posée P.`,
  },

  1090: {
    beginner: `Lookback — troisième passage (prémisse)

1. La lumière met du temps = P (vitesse finie). Voir les étoiles comme elles étaient = Q (regard passé).

2. Le délai soutient la vision historique — l’affirmation physique = P.`,
    intermediate: `Lumière stellaire — troisième passage

1. P = délai de propagation ; Q = ce que « montre » l’image.

2. Exemple : « Comme le son est lent, tu entends le tonnerre après l’éclair. » P = vitesse finie du son — pas « tonnerre après » comme prémisse.

Affirmation sur le trajet du signal vers interprétation ; le trajet = P.`,
    expert: `Trajet du signal

Prémisse = timing de la lumière ; conclusion = ce que nous voyons — ne pas permuter.`,
  },

  1091: {
    beginner: `Poids et chute — quatrième passage (prémisse)

1. Quatrième passage sur gravité / pomme : « La gravité tire les objets vers le bas » = P. La pomme tombera = Q.

2. Même gabarit que 1071 et les gravité premier passage — première clause de contenu = appui.`,
    intermediate: `Gravité — quatrième passage

1. P = récit de champ ; Q = chute du cas.

2. Exemple (même carte) : « Comme les masses s’attirent, cette brique tombera si on la lâche. » P = attraction — pas « brique tombe » comme prémisse.

Loi-like d’abord ; cas ensuite ; la première = P.`,
    expert: `Sens de l’appui

La chute est la conclusion ; la ligne gravité est P — alignée sur 1071.`,
  },

  1092: {
    beginner: `Parole quotidienne — quatrième passage (prémisse)

1. Pratique vers aisance = P. Parler chaque jour = Q.

2. Quatrième passage = même découpage mécanisme / calendrier que 1072.`,
    intermediate: `Aisance — quatrième passage

1. P = mécanisme ; Q = prescription de rythme.

2. Exemple : « Comme la récupération active bat la relecture, fais-toi un quiz à chaque chapitre. » P = effet de récupération — pas « quiz » comme prémisse.

Pourquoi la pratique compte = P ; à quelle fréquence = Q.`,
    expert: `Conséquent normatif

Parler chaque jour = conséquent ; pratique–aisance = antécédent P.`,
  },

  1093: {
    beginner: `Routeur éteint — quatrième passage (prémisse)

1. Routeur éteint = P. Wi‑Fi ne fonctionnera pas = Q.

2. Quatrième passage sur boîtier vers air — l’état d’alimentation = P.`,
    intermediate: `Routeur — quatrième passage

1. P = CPE ; Q = attente WLAN.

2. Exemple : « Comme le modem amont est hors ligne, le LAN n’atteindra pas Internet. » P = modem — pas « pas d’Internet » comme prémisse.

État en bordure en prémisse ; service = Q.`,
    expert: `Sens de dépendance

Le service est en aval ; l’état du routeur est P amont.`,
  },

  1094: {
    beginner: `Risque conservation — quatrième passage (prémisse)

1. Fragile = P. Manipulation prudente = Q.

2. Quatrième passage sur risque vers protocole — registre de danger d’abord.`,
    intermediate: `Objets — quatrième passage

1. P = risque matériel ; Q = contrôle de manipulation.

2. Exemple : « Comme la pellicule nitrée est instable, stocke-la dans des boîtes froides ventilées. » P = instabilité — pas « boîtes ventilées » comme prémisse.

Descriptif d’abord ; prescriptif ensuite ; le descriptif = P.`,
    expert: `Obligation non prémisse

La manipulation prudente est soutenue par la fragilité ; on n’infère pas la fragilité à partir de l’obligation.`,
  },

  1095: {
    beginner: `Fait palette — quatrième passage (prémisse)

1. Rouge + bleu vers violet = P. Mélanger pour du violet = Q (impératif).

2. Recettes en prémisse ; gestes en conclusion.`,
    intermediate: `Pigment — quatrième passage

1. P = composition ; Q = ordre.

2. Exemple : « Comme l’huile de lin oxyde lentement, étale la peinture dans de petits pots. » P = oxydation — pas « petits pots » comme prémisse.

Ce que font les couleurs = P ; ce que tu fais = Q.`,
    expert: `Impératif comme cible

Mélanger est la cible justifiée par le fait ; le fait = P.`,
  },

  1096: {
    beginner: `Correspondance STOP — quatrième passage (prémisse)

1. Feu rouge = P. Doit s’arrêter = Q.

2. Quatrième passage sur signal vers devoir — l’aspect = P.`,
    intermediate: `Circulation — quatrième passage

1. P = phase ; Q = obligation.

2. Exemple : « Comme la barrière est baissée, n’entre pas sur le passage à niveau. » P = barrière — pas « n’entre pas » comme prémisse.

Observation = P ; norme = Q.`,
    expert: `Conséquent déontique

Arrêt = conséquent déontique ; rouge = antécédent empirique P.`,
  },

  1097: {
    beginner: `Dette de sommeil — quatrième passage (prémisse)

1. Manque de sommeil nuit à la concentration = P. Doivent se reposer = Q.

2. Quatrième passage sur déficit vers remède — le tort = P.`,
    intermediate: `Cognition — quatrième passage

1. P = constat de déficit ; Q = conseil de récupération.

2. Exemple : « Comme le bruit fragmente l’attention, les élèves devraient mettre des bouchons aux examens. » P = fragmentation — pas « bouchons » comme prémisse.

Preuve de problème = P ; correctif = Q.`,
    expert: `Structure du conseil

Le repos est en aval ; le déficit de concentration est P énoncé.`,
  },

  1098: {
    beginner: `Tension d’offre — quatrième passage (prémisse)

1. Offre faible = P. Prix augmenteront = Q.

2. Condition explicite en prémisse ; prix = prévision Q.`,
    intermediate: `Marché — quatrième passage

1. P = tension ; Q = mouvement de prix.

2. Exemple : « Comme les files d’attente aux postes à quai ont grossi, les frais de séjour vont grimper. » P = file — pas « séjour » comme prémisse.

État d’abord ; prix ensuite ; l’état = P.`,
    expert: `Prévision conditionnelle

Hausse conditionnée à l’offre ; le texte sur l’offre = P.`,
  },

  1099: {
    beginner: `Espèce sociale — quatrième passage (prémisse)

1. Chiens sociaux = P. Besoin de compagnie = Q.

2. Quatrième passage sur trait vers soins — garde les fentes droites.`,
    intermediate: `Bien-être — quatrième passage

1. P = trait ; Q = implication pratique.

2. Exemple : « Comme les perroquets s’attachent fort, ils ont besoin d’interaction quotidienne. » P = attachement — pas « interaction » comme prémisse.

Fait général = P ; besoin = Q.`,
    expert: `Besoin inféré

Besoin de compagnie inféré ; sociabilité = fondement P.`,
  },

  1100: {
    beginner: `Défaut de hauteur — quatrième passage (prémisse)

1. Pas accordée = P. Sonnera mal = Q.

2. Quatrième passage sur réglage vers jugement — le défaut = P.`,
    intermediate: `Guitare — quatrième passage

1. P = défaut d’accord ; Q = verdict sur le timbre.

2. Exemple : « Comme l’anche est fêlée, la clarinette va nasiller. » P = fêlure — pas « nasiller » comme prémisse.

Défaut = P ; verdict de qualité = Q.`,
    expert: `Esthétique conditionnelle

Mauvais son donné l’accord ; l’accord est P indépendant dans la paire.`,
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

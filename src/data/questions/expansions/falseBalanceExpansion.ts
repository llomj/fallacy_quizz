import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['A news show put a climate scientist and a random caller on the same level, even though only one had evidence, charts, and years of study.', "Une emission d'information a mis une climatologue et un appelant au hasard sur le meme plan, alors qu'une seule personne avait des preuves, des graphiques et des annees d'etude."],
  ['The debate club gave the same time to a doctor and a rumor thread about medicine, as if both were equally reliable after one person heard a story.', "Le club de debat a donne le meme temps de parole a une medecin et a un fil de rumeurs sur la medecine, comme si les deux etaient aussi fiables apres qu'une seule personne a entendu une histoire."],
  ['Mina treated a restaurant review from one customer as equal to a full inspection report.', "Mina a traite l'avis d'un seul client sur un restaurant comme l'equivalent d'un rapport d'inspection complet."],
  ['Theo said a broken watch and the atomic clock were both "just opinions" about the time.', "Theo a dit qu'une montre casse et l'horloge atomique n'etaient que des \"opinions\" sur l'heure."],
  ['A podcast host gave a vaccine expert and a conspiracy blogger the same credibility.', "L'animateur d'un podcast a donne la meme credibilite a une experte en vaccins et a un blogueur complotiste."],
  ['Rita thought a weather app error and a meteorologist forecast were equally reliable.', "Rita a pense qu'une erreur d'application meteo et la prevision d'une meteorologue etaient egalement fiables."],
  ['Sam said a librarian and a troll comment were equally strong sources for a history claim.', "Sam a dit qu'une bibliothecaire et un commentaire de troll etaient des sources aussi solides pour une affirmation historique."],
  ['Owen treated a lab result and a guess from the hallway as two sides of the same story.', "Owen a traite un resultat de laboratoire et une supposition de couloir comme deux cotes de la meme histoire."],
  ['Ava gave a traffic camera and a blurry phone clip the same weight in court.', "Ava a donne le meme poids a une camera de circulation et a une video de telephone floue au tribunal."],
  ["Ben said a mayor's budget chart and a random spreadsheet screenshot were equally trustworthy.", "Ben a dit qu'un graphique budgétaire du maire et une capture d'ecran de tableur au hasard etaient tout aussi dignes de confiance."],
  ['Lina said "both sides" should be heard, even when one side was a fact sheet and the other was a rumor.', "Lina a dit qu'il fallait entendre « les deux cotes », meme quand un cote etait une fiche d'information et l'autre une rumeur."],
  ['Kai treated a peer-reviewed study and a comment from a gym locker room as equally persuasive.', "Kai a traite une etude examinee par des pairs et un commentaire de vestiaire de salle de sport comme egalement convaincants."],
  ['Nina put a fire inspector and a confused neighbor on the same trust level.', "Nina a mis une inspectrice incendie et une voisine confuse sur le meme niveau de confiance."],
  ['Leo claimed a trained mechanic and a meme caption had equal authority about car brakes.', "Leo a affirme qu'un mecanicien forme et une legende de mème avaient la meme autorite sur les freins d'une voiture."],
  ['Priya said the city health report and a random "my cousin said" story deserved equal attention.', "Priya a dit que le rapport de sante de la ville et une histoire au hasard du type « mon cousin a dit » meritaient autant d'attention."],
  ['Milo gave a seat map from the airline and a passenger rumor the same credibility about delays.', "Milo a donne le meme credit au plan des sieges de la compagnie aerienne et a une rumeur de passager sur les retards."],
  ['Tara said a weather radar and a joke in the group chat were just two competing viewpoints.', "Tara a dit qu'un radar meteorologique et une blague dans le groupe de discussion etaient juste deux points de vue concurrents."],
  ['Eli treated a nutrition study and a celebrity selfie caption as equal evidence about diets.', "Eli a traite une etude de nutrition et une legende de selfie de celebrite comme des preuves equivalentes sur les regimes."],
  ['Maya said a police report and a gossip post were equally solid proof of what happened.', "Maya a dit qu'un rapport de police et un message de potins etaient des preuves tout aussi solides de ce qui s'etait passe."],
  ['Jasper said a museum plaque and a random tourist theory should count the same.', "Jasper a dit qu'une plaque de musee et une theorie de touriste au hasard devaient compter pareil."],
  ['Rina thought a school handbook and a hallway rumor were equally good sources for the rules.', "Rina a pense qu'un guide scolaire et une rumeur de couloir etaient des sources egalement bonnes pour les regles."],
  ['Finn said a trained pilot and a person guessing on a livestream were equally qualified to explain turbulence.', "Finn a dit qu'un pilote forme et une personne qui devinait en direct etaient egalement qualifies pour expliquer les turbulences."],
  ['Zoe gave a chemistry teacher and a comment about "chemicals" on social media the same authority.', "Zoe a donne a une professeure de chimie et a un commentaire sur les « produits chimiques » sur les reseaux sociaux la meme autorite."],
  ['Oli treated a hospital guideline and a wellness influencer post as equal medical advice.', "Oli a traite une directive hospitaliere et une publication d'influenceur bien-etre comme des conseils medicaux equivalents."],
  ['Clara said a census table and a bar argument from a friend were equally convincing about the population.', "Clara a dit qu'un tableau de recensement et une argumentation de bar d'un ami etaient aussi convaincants sur la population."],
  ['Grant put a fire marshal and a forum rumor on the same level for safety advice.', "Grant a mis un officier de prevention incendie et une rumeur de forum sur le meme niveau pour des conseils de securite."],
  ['Juno said an aviation warning and a TikTok "hack" deserved identical trust.', "Juno a dit qu'un avertissement d'aviation et un « hack » de TikTok meritaient une confiance identique."],
  ['Pia treated a court transcript and a screenshot of a comment thread as the same kind of proof.', "Pia a traite une transcription de tribunal et une capture d'ecran d'une discussion comme le meme type de preuve."],
  ["Mason said a teacher's rubric and a student rumor were equally objective grading tools.", "Mason a dit qu'une grille de notation d'enseignant et une rumeur d'etudiant etaient des outils de notation aussi objectifs."],
  ['Iris claimed a physics demo and a random hunch should share the same conclusion.', "Iris a affirme qu'une demonstration de physique et une intuition au hasard devaient partager la meme conclusion."],
  ['Dylan said a city budget audit and a viral post deserved equal confidence about spending.', "Dylan a dit qu'un audit du budget municipal et une publication virale meritaient la meme confiance sur les depenses."],
  ['Sofia treated a professional translator and an auto-generated subtitle as equal sources of meaning.', "Sofia a traite une traductrice professionnelle et un sous-titre genere automatiquement comme des sources de sens equivalentes."],
  ["Reed said a nutrition label and a neighbor's snack opinion were equally informative.", "Reed a dit qu'une etiquette nutritionnelle et l'avis d'un voisin sur un snack etaient egalement informatifs."],
  ['Hugo gave a road safety study and a "feels like" hunch the same voice in the conversation.', "Hugo a donne une etude sur la securite routiere et une intuition du type « j'ai l'impression » la meme place dans la conversation."],
  ['Layla said a crime statistic and a dramatic podcast guess were equally enough to judge the city.', "Layla a dit qu'une statistique sur la criminalite et une supposition dramatique de podcast suffisaient aussi bien pour juger la ville."],
  ['Noah treated a tax form and a napkin calculation as matching evidence.', "Noah a traite un formulaire fiscal et un calcul sur serviette comme des preuves correspondantes."],
  ['Emma said a professional chef and a random cooking thread were equally authoritative about salt.', "Emma a dit qu'un chef professionnel et un fil de cuisine au hasard etaient egalement autorises sur le sel."],
  ['Ari claimed a lab technician and a horoscope column were equally informative about health.', "Ari a affirme qu'un technicien de laboratoire et une colonne d'horoscope etaient egalement informatifs sur la sante."],
  ['Mina said a museum curator and a souvenir-shop guess should have equal say on history.', "Mina a dit qu'une conservatrice de musee et une supposition de boutique de souvenirs devaient avoir le meme poids sur l'histoire."],
  ['Cole gave a train timetable and a car-ride rumor equal confidence about arrival times.', "Cole a donne au tableau horaire d'un train et a une rumeur de trajet en voiture la meme confiance sur les heures d'arrivee."],
  ['Tessa said a coding error log and a "worked on my machine" comment were equally useful.', "Tessa a dit qu'un journal d'erreurs de code et un commentaire « chez moi ca marchait » etaient egalement utiles."],
  ["Jonah treated a flood map and a neighbor's backyard guess as equal disaster planning.", "Jonah a traite une carte d'inondation et une estimation de jardin du voisin comme une planification de catastrophe equivalente."],
  ["Kira said a teacher's answer key and a student rumor were equally strong on the quiz answers.", "Kira a dit qu'un corrigé d'enseignant et une rumeur d'etudiant etaient aussi forts sur les reponses du quiz."],
  ['Parker gave a recipe tested three times and a single diner complaint the same importance.', "Parker a donne a une recette testee trois fois et a une seule plainte de diner la meme importance."],
  ['Nora said an emergency alert and a "my uncle thinks" message were equally dependable.', "Nora a dit qu'une alerte d'urgence et un message du type « mon oncle pense » etaient egalement fiables."],
  ['Evan treated a court ruling and a comment from a coffee line as equal evidence of guilt.', "Evan a traite une decision de justice et un commentaire de file de cafe comme des preuves egales de culpabilite."],
  ['Stella said a food safety inspection and a social media snack ranking were equally valid.', "Stella a dit qu'une inspection de securite alimentaire et un classement de snack sur les reseaux sociaux etaient egalement valides."],
  ['Ray gave a bridge engineer and a passing cyclist the same weight on structural safety.', "Ray a donne a une ingenieure de pont et a un cycliste de passage le meme poids sur la securite structurelle."],
  ['Jade said a textbook and a joke thread were equally strong on grammar rules.', "Jade a dit qu'un manuel scolaire et un fil de blagues etaient egalement solides sur les regles de grammaire."],
  ['Drew said a documented measurement and a vibe check should both decide the answer.', "Drew a dit qu'une mesure documentee et un simple ressenti devaient tous les deux decider de la reponse."],
];

const OPTIONS_EN = ['False Balance', 'False Equivalence', 'Appeal to Authority', 'Cherry Picking'];
const OPTIONS_FR = ['Faux équilibre', 'Fausse équivalence', "Appel à l'autorité", 'Sélection biaisée'];

function rotate(a: string[], i: number) {
  const r = a.slice(1);
  r.splice(i, 0, a[0]);
  return r;
}

function sub(i: number) {
  return i < 17 ? SubLevel.BEGINNER : i < 34 ? SubLevel.INTERMEDIATE : SubLevel.EXPERT;
}

function make(fr = false): Question[] {
  return SCENARIOS.map((s, i) => {
    const c = i % 4;
    return {
      id: 34001 + i,
      level: 6,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Faux équilibre' : 'False Balance',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? OPTIONS_FR : OPTIONS_EN, c),
      correct_option_index: c,
      explanation: fr
        ? "Le raisonnement donne le même poids à des sources, des preuves ou des expertises qui n'ont pas la même solidité."
        : 'The reasoning gives equal weight to sources, evidence, or expertise that are not equally strong.',
      detailedExplanationBeginner: fr
        ? "On traite une preuve faible comme si elle valait une preuve forte."
        : 'A weak piece of evidence is treated like a strong one.',
      detailedExplanationIntermediate: fr
        ? "Ce sophisme apparaît quand on met sur un pied d'égalité des avis qui n'ont pas le même niveau de preuve."
        : 'This fallacy appears when opinions with very different evidence levels are treated as equal.',
      detailedExplanationExpert: fr
        ? "Le faux équilibre confond pluralité d'opinions et symétrie épistémique; il suppose qu'un débat est équilibré même quand les éléments probants ne le sont pas."
        : 'False balance confuses pluralism of opinion with epistemic symmetry; it assumes a debate is balanced even when the evidence is not.',
      questionFormat: 'standard',
    };
  });
}

export const FALSE_BALANCE_EXPANSION_EN: Question[] = make();
export const FALSE_BALANCE_EXPANSION_FR: Question[] = make(true);

import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya met one rude tourist at the station and decided the whole city is rude.', 'Maya a rencontre un touriste impoli a la gare et a decide que toute la ville etait impolie.'],
  ['Ben had one bad burger at lunch and declared every fast-food place terrible.', 'Ben a eu un mauvais burger au déjeuner et a declare que tous les fast-foods etaient terribles.'],
  ['Rina saw two messy desks and said the whole office is lazy.', 'Rina a vu deux bureaux en desordre et a dit que tout le bureau etait paresseux.'],
  ['Theo had one awkward date and concluded dating is hopeless.', 'Theo a eu un rendez-vous genant et a conclu que les rencontres etaient sans espoir.'],
  ['Ava heard one noisy train ride and said public transit is always awful.', 'Ava a entendu parler d un trajet en train bruyant et a dit que les transports publics etaient toujours horribles.'],
  ['Leo tried one hard puzzle and decided all puzzles are impossible.', 'Leo a essaye une enigme difficile et a decide que toutes les enigmes etaient impossibles.'],
  ['Nina saw one rude cashier and claimed every cashier is rude.', 'Nina a vu une caissiere impolie et a affirme que toutes les caissieres etaient impolies.'],
  ['Owen got one slow internet day and said the provider never works.', 'Owen a eu une journee d internet lente et a dit que le fournisseur ne marchait jamais.'],
  ['Priya met one forgetful neighbor and said all neighbors are unreliable.', 'Priya a rencontre un voisin tete en l air et a dit que tous les voisins etaient peu fiables.'],
  ['Milo had one burnt pancake and declared himself bad at cooking forever.', 'Milo a eu une crepe brulee et a declare qu il cuisinait mal pour toujours.'],
  ['Lina saw one loud classroom and said every school is chaotic.', 'Lina a vu une classe bruyante et a dit que toutes les ecoles etaient chaotiques.'],
  ['Kai met one impatient driver and assumed everyone on the road is aggressive.', 'Kai a rencontre un conducteur impatient et a suppose que tout le monde sur la route etait agressif.'],
  ['Zoe had one confusing app tutorial and concluded the app is unusable.', 'Zoe a eu un tutoriel d application confus et a conclu que l application etait inutilisable.'],
  ['Finn ate one over-salted soup and said restaurant soups are always bad.', 'Finn a mange une soupe trop salee et a dit que les soupes de restaurant etaient toujours mauvaises.'],
  ['Mina saw one grumpy barista and said all coffee shops are unfriendly.', 'Mina a vu une barista grincheuse et a dit que tous les cafes etaient peu accueillants.'],
  ['Eli had one late package and said online shopping is a scam.', 'Eli a eu un colis en retard et a dit que les achats en ligne etaient une arnaque.'],
  ['Tara met one quiet teen and decided all teens are rude.', 'Tara a rencontre une adolescente silencieuse et a decide que tous les ados etaient impolis.'],
  ['Noah saw one broken elevator and said every building is poorly maintained.', 'Noah a vu un ascenseur casse et a dit que tous les immeubles etaient mal entretenus.'],
  ['Rina got one bad haircut and said every salon is incompetent.', 'Rina a eu une mauvaise coupe de cheveux et a dit que tous les salons etaient incompetents.'],
  ['Jasper heard one bad joke and decided the whole comedian scene is lame.', 'Jasper a entendu une mauvaise blague et a decide que tout le milieu des comediens etait nul.'],
  ['Maya had one messy roommate and said all roommates are impossible.', 'Maya a eu une colocataire desordonnee et a dit que tous les colocataires etaient impossibles.'],
  ['Hugo saw one long checkout line and said all stores waste time.', 'Hugo a vu une longue file de caisse et a dit que tous les magasins faisaient perdre du temps.'],
  ['Layla met one distracted teacher and concluded teaching is a bad job.', "Layla a rencontre un professeur distrait et a conclu que l enseignement etait un mauvais metier."],
  ['Clara had one awkward interview and decided she is bad at every interview.', 'Clara a eu un entretien genant et a decide qu elle etait mauvaise a tous les entretiens.'],
  ['Dylan saw one noisy gym and concluded all gyms are unbearable.', 'Dylan a vu une salle de sport bruyante et a conclu que toutes les salles etaient insupportables.'],
  ['Sofia met one rude landlord and said every landlord is awful.', 'Sofia a rencontre un proprietaire impoli et a dit que tous les proprietaires etaient affreux.'],
  ['Reed tried one bland salad and said healthy food has no flavor.', 'Reed a essaye une salade fade et a dit que la nourriture saine n avait aucune saveur.'],
  ["Emma saw one late reply and claimed the whole friend group ignores her.", "Emma a vu une reponse tardive et a affirme que tout le groupe d amis l ignorait."],
  ['Ari got one bad update and said every software update breaks things.', 'Ari a eu une mauvaise mise a jour et a dit que toutes les mises a jour logicielles cassaient tout.'],
  ['Mina met one nervous speaker and decided public speaking is impossible for everyone.', 'Mina a rencontre un orateur nerveux et a decide que la parole en public etait impossible pour tout le monde.'],
  ['Cole had one spilled drink and said restaurants are messy places.', 'Cole a renverse une boisson et a dit que les restaurants etaient des endroits sales.'],
  ['Tessa saw one confusing chart and said data is always misleading.', 'Tessa a vu un graphique confus et a dit que les donnees etaient toujours trompeuses.'],
  ['Jonah met one impatient nurse and said all nurses are cold.', 'Jonah a rencontre une infirmiere impatiente et a dit que toutes les infirmieres etaient froides.'],
  ['Kira had one bad commute and said the whole city transport system fails.', 'Kira a eu un mauvais trajet et a dit que tout le systeme de transport de la ville echouait.'],
  ['Parker saw one noisy toddler and decided all children are chaotic.', 'Parker a vu un tout-petit bruyant et a decide que tous les enfants etaient chaotiques.'],
  ['Nora had one embarrassing email and said professional communication is too hard.', 'Nora a envoye un courriel genant et a dit que la communication professionnelle etait trop difficile.'],
  ['Evan saw one rude cashier and said shopping is always stressful.', 'Evan a vu une caissiere impolie et a dit que faire du shopping etait toujours stressant.'],
  ['Stella got one confusing recipe and said cooking from recipes never works.', 'Stella a eu une recette confuse et a dit que cuisiner a partir de recettes ne marchait jamais.'],
  ['Ray met one arrogant athlete and assumed all athletes are arrogant.', 'Ray a rencontre un sportif arrogant et a suppose que tous les sportifs etaient arrogants.'],
  ['Jade saw one broken chair and said the whole cafe is falling apart.', 'Jade a vu une chaise cassee et a dit que tout le cafe tombait en morceaux.'],
  ['Drew had one boring meeting and declared every meeting is pointless.', 'Drew a eu une reunion ennuyeuse et a declare que toutes les reunions etaient inutiles.'],
  ['Lara met one sarcastic clerk and said every clerk is sarcastic.', 'Lara a rencontre un employe sarcastique et a dit que tous les employes etaient sarcastiques.'],
  ['Oli tried one tough workout and decided exercise is not for people like him.', "Oli a essaye un entrainement difficile et a decide que l exercice n etait pas pour des gens comme lui."],
  ['Mia saw one messy park and concluded all parks are neglected.', 'Mia a vu un parc en desordre et a conclu que tous les parcs etaient delaissees.'],
  ['Felix had one bad exam and said school is useless.', 'Felix a eu un mauvais examen et a dit que l ecole etait inutile.'],
  ['Iris met one slow server and said every cafe has bad service.', 'Iris a rencontre un serveur lent et a dit que tous les cafes avaient un mauvais service.'],
  ['Grant had one awkward group project and claimed collaboration never works.', 'Grant a eu un projet de groupe genant et a affirme que la collaboration ne marchait jamais.'],
  ['Juno saw one tiny typo and said the entire article is unprofessional.', 'Juno a vu une minuscule faute de frappe et a dit que tout l article etait non professionnel.'],
  ['Pia met one impatient customer and said all customers are difficult.', 'Pia a rencontre un client impatient et a dit que tous les clients etaient difficiles.'],
  ['Noah saw one cheap charger fail and decided every phone accessory brand is unreliable.', 'Noah a vu un chargeur bon marche tomber en panne et a decide que toutes les marques d accessoires telephoniques etaient peu fiables.'],
];

const OPTIONS_EN = ['Hasty Generalization', 'Anecdotal Fallacy', 'Confirmation Bias', 'Appeal to Popularity'];
const OPTIONS_FR = ['Generalisation hative', 'Sophisme anecdotique', 'Biais de confirmation', 'Appel a la popularite'];

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
    const correctIndex = index % 4;
    const isFrench = language === 'fr';
    return {
      id: 38001 + index,
      level: 1,
      persona_stage: PersonaStage.PLANKTON,
      concept: isFrench ? 'Generalisation hative' : 'Hasty Generalization',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? "On tire une regle generale a partir de quelques cas trop petits ou trop particuliers."
        : 'A general rule is being drawn from a sample that is too small or too specific.',
      detailedExplanationBeginner: isFrench
        ? "Quelques exemples ne suffisent pas pour parler de tout le monde."
        : 'A few examples are not enough to say something about everyone.',
      detailedExplanationIntermediate: isFrench
        ? "Le raisonnement prend un petit echantillon pour une tendance generale, alors qu il pourrait seulement s agir de hasard ou d un cas atypique."
        : 'The reasoning treats a tiny sample as a general trend, when it may just be chance or an unusual case.',
      detailedExplanationExpert: isFrench
        ? "La generalisation hative transforme des observations limitees en conclusion universelle sans verifier la representativite, la frequence ni les contre-exemples."
        : 'Hasty generalization turns limited observations into a universal conclusion without checking representativeness, frequency, or counterexamples.',
      questionFormat: 'standard',
    };
  });
}

export const HASTY_GENERALIZATION_EXPANSION_EN: Question[] = createQuestions('en');
export const HASTY_GENERALIZATION_EXPANSION_FR: Question[] = createQuestions('fr');

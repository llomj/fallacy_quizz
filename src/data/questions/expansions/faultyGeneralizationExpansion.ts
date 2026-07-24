import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya met one rude tourist and decided the whole city is rude.', "Maya a rencontre un touriste impoli et a conclu que toute la ville etait impolie."],
  ['Ben had one bad burger and declared every fast-food place terrible.', "Ben a mange un seul mauvais burger et a declare que tous les fast-foods etaient terribles."],
  ['Rina saw two messy desks and said the whole office is lazy.', "Rina a vu deux bureaux en désordre et a dit que tout le bureau etait paresseux."],
  ['Theo had one awkward date and concluded dating is hopeless.', "Theo a eu un rendez-vous genant et a conclu que sortir ensemble etait sans espoir."],
  ['Ava heard one noisy train ride and said public transit is always awful.', "Ava a entendu parler d'un seul trajet de train bruyant et a dit que les transports publics etaient toujours horribles."],
  ['Leo tried one hard puzzle and decided all puzzles are impossible.', "Leo a essaye une seule enigme difficile et a decide que toutes les enigmes etaient impossibles."],
  ['Nina saw one rude cashier and claimed every cashier is rude.', "Nina a vu une caissiere impolie et a affirme que toutes les caissieres etaient impolies."],
  ['Owen got one slow internet day and said the provider never works.', "Owen a eu une seule journee d'internet lente et a dit que le fournisseur ne fonctionnait jamais."],
  ['Priya met one forgetful neighbor and said all neighbors are unreliable.', "Priya a rencontre un voisin tete en l'air et a dit que tous les voisins etaient peu fiables."],
  ['Milo had one burnt pancake and declared himself bad at cooking forever.', "Milo a eu une seule crepe brulee et a declare qu'il cuisinait mal pour toujours."],
  ['Lina saw one loud classroom and said every school is chaotic.', "Lina a vu une seule classe bruyante et a dit que toutes les ecoles etaient chaotiques."],
  ['Kai met one impatient driver and assumed everyone on the road is aggressive.', "Kai a rencontre un conducteur impatient et a suppose que tout le monde sur la route etait agressif."],
  ['Zoe had one confusing app tutorial and concluded the app is unusable.', "Zoe a eu un seul tutoriel d'application confus et a conclu que l'application etait inutilisable."],
  ['Finn ate one over-salted soup and said restaurant soups are always bad.', "Finn a mange une soupe trop salee et a dit que les soupes de restaurant etaient toujours mauvaises."],
  ['Mina saw one grumpy barista and said all coffee shops are unfriendly.', "Mina a vu une barista grincheuse et a dit que tous les cafes etaient peu accueillants."],
  ['Eli had one late package and said online shopping is a scam.', "Eli a eu un seul colis en retard et a dit que les achats en ligne etaient une arnaque."],
  ['Tara met one quiet teen and decided all teens are rude.', "Tara a rencontre une adolescente silencieuse et a decide que tous les ados etaient impolis."],
  ['Noah saw one broken elevator and said every building is poorly maintained.', "Noah a vu un ascenseur casse et a dit que tous les immeubles etaient mal entretenus."],
  ['Rina got one bad haircut and said every salon is incompetent.', "Rina a eu une mauvaise coupe de cheveux et a dit que tous les salons etaient incompetents."],
  ['Jasper heard one bad joke and decided the whole comedian scene is lame.', "Jasper a entendu une seule mauvaise blague et a decide que tout le milieu des comediens etait nul."],
  ['Maya had one messy roomate and said all roommates are impossible.', "Maya a eu une colocataire desordonnee et a dit que tous les colocataires etaient impossibles."],
  ['Hugo saw one long checkout line and said all stores waste time.', "Hugo a vu une longue file de caisse et a dit que tous les magasins faisaient perdre du temps."],
  ['Layla met one distracted teacher and concluded teaching is a bad job.', "Layla a rencontre un professeur distrait et a conclu que l'enseignement etait un mauvais metier."],
  ['Clara had one awkward interview and decided she is bad at every interview.', "Clara a eu un entretien genant et a decide qu'elle etait mauvaise a tous les entretiens."],
  ['Dylan saw one noisy gym and concluded all gyms are unbearable.', "Dylan a vu une salle de sport bruyante et a conclu que toutes les salles etaient insupportables."],
  ['Sofia met one rude landlord and said every landlord is awful.', "Sofia a rencontre un proprietaire impoli et a dit que tous les proprietaires etaient affreux."],
  ['Reed tried one bland salad and said healthy food has no flavor.', "Reed a essaye une salade fade et a dit que la nourriture saine n'avait aucune saveur."],
  ['Emma saw one late reply and claimed the whole friend group ignores her.', "Emma a vu une seule reponse tardive et a affirme que tout le groupe d'amis l'ignorait."],
  ['Ari got one bad update and said every software update breaks things.', "Ari a eu une seule mauvaise mise a jour et a dit que toutes les mises a jour logicielles cassaient tout."],
  ['Mina met one nervous speaker and decided public speaking is impossible for everyone.', "Mina a rencontre un orateur nerveux et a decide que prendre la parole en public etait impossible pour tout le monde."],
  ['Cole had one spilled drink and said restaurants are messy places.', "Cole a renverse une boisson et a dit que les restaurants etaient des endroits sales."],
  ['Tessa saw one confusing chart and said data is always misleading.', "Tessa a vu un graphique confus et a dit que les donnees etaient toujours trompeuses."],
  ['Jonah met one impatient nurse and said all nurses are cold.', "Jonah a rencontre une infirmiere impatiente et a dit que toutes les infirmieres etaient froides."],
  ['Kira had one bad commute and said the whole city transport system fails.', "Kira a eu un mauvais trajet et a dit que tout le systeme de transport de la ville echouait."],
  ['Parker saw one noisy toddler and decided all children are chaotic.', "Parker a vu un tout-petit bruyant et a decide que tous les enfants etaient chaotiques."],
  ['Nora had one embarrassing email and said professional communication is too hard.', "Nora a envoye un e-mail genant et a dit que la communication professionnelle etait trop difficile."],
  ['Evan saw one rude cashier and said shopping is always stressful.', "Evan a vu une caissiere impolie et a dit que faire du shopping etait toujours stressant."],
  ['Stella got one confusing recipe and said cooking from recipes never works.', "Stella a eu une recette confuse et a dit que cuisiner a partir de recettes ne marchait jamais."],
  ['Ray met one arrogant athlete and assumed all athletes are arrogant.', "Ray a rencontre un sportif arrogant et a suppose que tous les sportifs etaient arrogants."],
  ['Jade saw one broken chair and said the whole cafe is falling apart.', "Jade a vu une chaise cassée et a dit que tout le cafe tombait en morceaux."],
  ['Drew had one boring meeting and declared every meeting is pointless.', "Drew a eu une reunion ennuyeuse et a declare que toutes les reunions etaient inutiles."],
  ['Lara met one sarcastic clerk and said every clerk is sarcastic.', "Lara a rencontre un employe sarcastique et a dit que tous les employes etaient sarcastiques."],
  ['Oli tried one tough workout and decided exercise is not for people like him.', "Oli a essaye un entrainement difficile et a decide que l'exercice n'etait pas pour des gens comme lui."],
  ['Mia saw one messy park and concluded all parks are neglected.', "Mia a vu un parc en désordre et a conclu que tous les parcs etaient delaissés."],
  ['Felix had one bad exam and said school is useless.', "Felix a eu un mauvais examen et a dit que l'ecole etait inutile."],
  ['Iris met one slow server and said every cafe has bad service.', "Iris a rencontre un serveur lent et a dit que tous les cafes avaient un mauvais service."],
  ['Grant had one awkward group project and claimed collaboration never works.', "Grant a eu un projet de groupe genant et a affirme que la collaboration ne marchait jamais."],
  ['Juno saw one tiny typo and said the entire article is unprofessional.', "Juno a vu une minuscule faute de frappe et a dit que tout l'article etait non professionnel."],
  ['Pia met one impatient customer and said all customers are difficult.', "Pia a rencontre un client impatient et a dit que tous les clients etaient difficiles."],
  ['Maya saw two rude drivers and said every driver in town is rude.', "Maya a vu deux conducteurs impolis et a dit que tous les conducteurs de la ville etaient impolis."],
  ['Theo had one bad salad and decided all healthy food is awful.', "Theo a eu une mauvaise salade et a decide que toute la nourriture saine etait horrible."],
  ['Ava met one distracted student and concluded every student is careless.', "Ava a rencontre un etudiant distrait et a conclu que tous les etudiants etaient negligents."],
  ['Ben saw one slow cashier and said every store has terrible service.', "Ben a vu une caissiere lente et a dit que tous les magasins avaient un service terrible."],
  ['Nina tried one hard puzzle and declared all puzzles impossible.', "Nina a essaye un puzzle difficile et a declare que tous les puzzles etaient impossibles."],
  ['Omar heard one bad joke and said all comedians are unfunny.', "Omar a entendu une mauvaise blague et a dit que tous les humoristes n'etaient pas drôles."],
  ['Priya met one impatient customer and assumed every customer is difficult.', "Priya a rencontre un client impatient et a suppose que tous les clients etaient difficiles."],
  ['Leo had one noisy neighbor and concluded the whole apartment building is unbearable.', "Leo a eu un voisin bruyant et a conclu que tout l'immeuble etait insupportable."],
  ['Rina saw one messy desk and said every coworker is disorganized.', "Rina a vu un bureau en desordre et a dit que tous les collegues etaient desordonnes."],
  ['Jasper tried one overcooked pasta dish and decided all restaurant pasta is bad.', "Jasper a essaye un plat de pates trop cuites et a decide que toutes les pates au restaurant etaient mauvaises."],
  ['Maya met one rude tourist and decided the whole city is rude.', "Maya a rencontre un touriste impoli et a conclu que toute la ville etait impolie."],
  ['Ben had one bad burger and declared every fast-food place terrible.', "Ben a mange un seul mauvais burger et a declare que tous les fast-foods etaient terribles."],
  ['Rina saw two messy desks and said the whole office is lazy.', "Rina a vu deux bureaux en désordre et a dit que tout le bureau etait paresseux."],
  ['Theo had one awkward date and concluded dating is hopeless.', "Theo a eu un rendez-vous genant et a conclu que sortir ensemble etait sans espoir."],
  ['Ava heard one noisy train ride and said public transit is always awful.', "Ava a entendu parler d'un seul trajet de train bruyant et a dit que les transports publics etaient toujours horribles."],
  ['Leo tried one hard puzzle and decided all puzzles are impossible.', "Leo a essaye une seule enigme difficile et a decide que toutes les enigmes etaient impossibles."],
  ['Nina saw one rude cashier and claimed every cashier is rude.', "Nina a vu une caissiere impolie et a affirme que toutes les caissieres etaient impolies."],
  ['Owen got one slow internet day and said the provider never works.', "Owen a eu une seule journee d'internet lente et a dit que le fournisseur ne fonctionnait jamais."],
  ['Priya met one forgetful neighbor and said all neighbors are unreliable.', "Priya a rencontre un voisin tete en l'air et a dit que tous les voisins etaient peu fiables."],
  ['Milo had one burnt pancake and declared himself bad at cooking forever.', "Milo a eu une seule crepe brulee et a declare qu'il cuisinait mal pour toujours."],
  ['Lena saw one muddy playground and decided every park is filthy.', "Lena a vu une aire de jeux boueuse et a decide que tous les parcs etaient sales."],
  ['Noah had one awkward video call and said remote work is always awkward.', "Noah a eu un appel video genant et a dit que le teletravail etait toujours genant."],
  ['Maya met one impatient nurse and concluded all hospitals are cold.', "Maya a rencontre une infirmiere impatiente et a conclu que tous les hopitaux etaient froids."],
  ['Eli read one confusing manual and said all instructions are bad.', "Eli a lu un manuel confus et a dit que toutes les instructions etaient mauvaises."],
  ['Tara had one noisy neighbor party and claimed every apartment is loud.', "Tara a eu une fete de voisin bruyante et a affirme que tous les appartements etaient bruyants."],
  ['Hugo saw one broken scooter and said the whole rental fleet is junk.', "Hugo a vu une trottinette casse et a dit que toute la flotte de location etait de la camelote."],
  ['Sofia tried one bland smoothie and decided all healthy drinks taste bad.', "Sofia a essaye un smoothie fade et a decide que toutes les boissons saines avaient mauvais gout."],
  ['Cole met one distracted coach and said every coach is unhelpful.', "Cole a rencontre un coach distrait et a dit que tous les coachs etaient peu utiles."],
  ['Jade got one rude reply and decided every coworker is unfriendly.', "Jade a recu une reponse impolie et a decide que tous les collegues etaient peu aimables."],
  ['Ben saw one crowded bus and claimed public transit is never comfortable.', "Ben a vu un bus bondé et a affirme que les transports publics n'etaient jamais confortables."],
  ['Rina had one bad lab partner and said group work always fails.', "Rina a eu un mauvais partenaire de laboratoire et a dit que le travail de groupe echouait toujours."],
  ['Ari tried one awkward icebreaker and decided all social events are awful.', "Ari a essaye un brise-glace genant et a decide que tous les evenements sociaux etaient affreux."],
  ['Nora saw one dusty shelf and said the whole library is neglected.', "Nora a vu une etagere poussiereuse et a dit que toute la bibliotheque etait delaissee."],
  ['Dylan had one slow checkout and concluded every shop wastes time.', "Dylan a eu une caisse lente et a conclu que tous les magasins faisaient perdre du temps."],
  ['Pia met one rude driver and said every person who drives is aggressive.', "Pia a rencontre un conducteur impoli et a dit que toute personne qui conduit etait agressive."],
  ['Mia saw one broken chair at a cafe and decided the whole cafe is unsafe.', "Mia a vu une chaise cassée dans un cafe et a decide que tout le cafe etait dangereux."],
  ['Finn had one overcooked noodle bowl and said restaurant pasta is hopeless.', "Finn a eu un bol de nouilles trop cuites et a dit que les pates au restaurant etaient sans espoir."],
  ['Lara met one sarcastic receptionist and claimed every front desk worker is sarcastic.', "Lara a rencontre une receptionniste sarcastique et a affirme que tous les agents d'accueil etaient sarcastiques."],
  ['Oli got one wrong answer on a quiz and said he is bad at learning anything.', "Oli a eu une mauvaise reponse a un quiz et a dit qu'il etait mauvais pour apprendre quoi que ce soit."],
  ['Zoe heard one neighbor complain and concluded the whole building is miserable.', "Zoe a entendu un voisin se plaindre et a conclu que tout l'immeuble etait misérable."],
  ['Ray tried one sour apple and decided all fruit is disappointing.', "Ray a essaye une pomme acide et a decide que tous les fruits etaient decevants."],
  ['Clara saw one typo in a flyer and said the whole event is amateurish.', "Clara a vu une faute de frappe dans un prospectus et a dit que tout l'evenement etait amateur."],
  ['Mina had one late lunch delivery and said every delivery app is useless.', "Mina a eu une livraison de dejeuner en retard et a dit que toutes les applications de livraison etaient inutiles."],
  ['Jasper met one impatient barista and decided every cafe is hostile.', "Jasper a rencontre une barista impatiente et a decide que tous les cafes etaient hostiles."],
  ['Evan saw one messy classroom and said all schools are chaotic.', "Evan a vu une classe en désordre et a dit que toutes les ecoles etaient chaotiques."],
  ['Iris had one failed cake and declared baking is impossible for everyone.', "Iris a rate un gateau et a declare que la patisserie etait impossible pour tout le monde."],
  ['Grant got one confusing text and said messaging apps always create misunderstandings.', "Grant a recu un message confus et a dit que les applications de messagerie creaient toujours des malentendus."],
  ['Layla met one tired cashier and assumed every retail worker is exhausted and rude.', "Layla a rencontre une caissiere fatiguee et a suppose que tous les vendeurs etaient epuisés et impolis."],
  ['Theo had one awkward presentation and decided public speaking never gets easier.', "Theo a eu une presentation genante et a decide que parler en public ne devenait jamais plus facile."],
  ['Marta had one messy picnic and said every outdoor meal turns into chaos.', "Marta a eu un pique-nique en désordre et a dit que chaque repas en plein air tournait au chaos."],
  ['Owen saw one cranky customer and concluded the whole shop has attitude problems.', "Owen a vu un client grincheux et a conclu que tout le magasin avait des problemes d'attitude."]
];

const OPTIONS_EN = ['Faulty Generalization', 'False Equivalence', 'Appeal to Popularity', 'False Dilemma'];
const OPTIONS_FR = ['Généralisation fautive', 'Fausse équivalence', 'Appel à la popularité', 'Fausse dichotomie'];

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
      id: 34501 + i,
      level: 6,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Généralisation fautive' : 'Faulty Generalization',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? OPTIONS_FR : OPTIONS_EN, c),
      correct_option_index: c,
      explanation: fr
        ? "Le raisonnement tire une conclusion générale à partir d'un échantillon trop petit ou trop particulier."
        : 'The reasoning draws a general conclusion from too small or too specific a sample.',
      detailedExplanationBeginner: fr
        ? "On dit que tout est vrai à partir de quelques exemples seulement."
        : 'A few examples are treated like proof for everything.',
      detailedExplanationIntermediate: fr
        ? "Cette erreur ressemble à une généralisation hâtive mais garde l'idée d'une conclusion trop large à partir de cas insuffisants."
        : 'This error resembles hasty generalization and still involves a conclusion that is too broad for the evidence.',
      detailedExplanationExpert: fr
        ? "La généralisation fautive étend illicitement une propriété observée localement à une population ou à un contexte plus large sans justification statistique suffisante."
        : 'Faulty generalization illicitly extends a locally observed property to a larger population or context without sufficient statistical warrant.',
      questionFormat: 'standard',
    };
  });
}

export const FAULTY_GENERALIZATION_EXPANSION_EN: Question[] = make();
export const FAULTY_GENERALIZATION_EXPANSION_FR: Question[] = make(true);

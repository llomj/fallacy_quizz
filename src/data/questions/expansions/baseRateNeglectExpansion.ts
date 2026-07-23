import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["A doctor says the new disease is rare, but Sam panics because one friend tested positive in his office.", "Un medecin dit que la nouvelle maladie est rare, mais Sam panique parce qu'un ami de son bureau a ete teste positif."],
  ["Nora thinks she must have the rarest job in town because her neighbor asked about it once.", "Nora pense qu'elle doit avoir le metier le plus rare de la ville parce que son voisin lui en a parle une fois."],
  ["After hearing one fraud story, Eli assumes every online store is a scam.", "Apres avoir entendu une histoire d'arnaque, Eli suppose que chaque boutique en ligne est une escroquerie."],
  ["A weather warning makes Lina think rain is more likely than the actual forecast says.", "Un avertissement meteo fait penser a Lina que la pluie est plus probable que ne l'indique le vrai bulletin."],
  ["Kai sees one viral post about a shark and thinks shark attacks are common.", "Kai voit une publication virale sur un requin et pense que les attaques de requins sont courantes."],
  ["Mia hears a single story about a bad landlord and decides renting is always dangerous.", "Mia entend une seule histoire de mauvais proprietaire et decide que louer est toujours dangereux."],
  ["Omar assumes a test is useless because one person once got a weird result.", "Omar suppose qu'un test est inutile parce qu'une personne a eu un resultat bizarre une fois."],
  ["A parent avoids all buses after one headline about a crash, ignoring how many trips happen safely.", "Un parent evite tous les bus apres un seul titre sur un accident, en ignorant combien de trajets se passent sans probleme."],
  ["Jade thinks she will lose at cards because a cousin won once in a row.", "Jade pense qu'elle va perdre aux cartes parce qu'un cousin a gagne plusieurs fois d'affilee."],
  ["Theo believes every package will arrive damaged because one box was crushed.", "Theo croit que chaque colis arrivera abime parce qu'une boite a ete ecrasee."],
  ["Priya thinks the city is full of pickpockets after one scare at the market.", "Priya pense que la ville est pleine de pickpockets apres une seule peur au marche."],
  ["Ben says the lottery is basically a good plan because he knows one winner.", "Ben dit que la loterie est presque une bonne strategie parce qu'il connait un gagnant."],
  ["Ava says the school is unsafe because a single fight happened near the gate.", "Ava dit que l'ecole n'est pas sure parce qu'une seule bagarre a eu lieu pres du portail."],
  ["Leo thinks every cat is calm because he met one calm cat.", "Leo pense que tous les chats sont calmes parce qu'il en a rencontre un seul calme."],
  ["Rina believes a new medicine is risky because of one dramatic side-effect post.", "Rina croit qu'un nouveau medicament est risqué a cause d'une publication dramatique sur un effet secondaire."],
  ["Noah says the neighborhood is booming because he saw one renovated house.", "Noah dit que le quartier est en plein essor parce qu'il a vu une seule maison renovee."],
  ["Zoe thinks college is easy because her cousin got good grades.", "Zoe pense que l'universite est facile parce que sa cousine a eu de bonnes notes."],
  ["The teacher says the whole class is behind because two students looked confused.", "L'enseignant dit que toute la classe est en retard parce que deux eleves avaient l'air perdus."],
  ["Milo believes every dog is aggressive after one bark at the park.", "Milo croit que tous les chiens sont agressifs apres un seul aboiement au parc."],
  ["Tara assumes all travel is expensive because one friend booked first class.", "Tara suppose que tous les voyages sont chers parce qu'une amie a reserve la premiere classe."],
  ["Ethan says the app is dangerous because one user lost access to their account.", "Ethan dit que l'application est dangereuse parce qu'un utilisateur a perdu l'acces a son compte."],
  ["Nia thinks every exam question will be impossible because the first one was hard.", "Nia pense que toutes les questions de l'examen seront impossibles parce que la premiere etait difficile."],
  ["Luca assumes the restaurant is unhealthy because one meal looked greasy.", "Luca suppose que le restaurant n'est pas sain parce qu'un repas avait l'air gras."],
  ["Mina says the bridge is unsafe because one rumor mentioned a crack.", "Mina dit que le pont est dangereux parce qu'une rumeur parlait d'une fissure."],
  ["A shop owner fears all refunds are fake because one customer lied.", "Un proprietaire de magasin craint que tous les remboursements soient frauduleux parce qu'un client a menti."],
  ["Owen thinks every influencer is rich because one influencer posted a yacht photo.", "Owen pense que tous les influenceurs sont riches parce qu'un influenceur a poste une photo de yacht."],
  ["Sera believes the quiz app is perfect because one friend got a high score.", "Sera croit que l'application de quiz est parfaite parce qu'une amie a obtenu un score eleve."],
  ["The manager says remote work fails because one employee missed a deadline.", "Le manager dit que le teletravail echoue parce qu'un employe a manque une date limite."],
  ["Juno assumes every airplane is cramped because her last seat was tiny.", "Juno suppose que tous les avions sont exigus parce que son dernier siege etait minuscule."],
  ["Finn says all gyms are noisy because one loud class played music.", "Finn dit que toutes les salles de sport sont bruyantes parce qu'un cours a joue de la musique fort."],
  ["Iris thinks every discount is a trap because one coupon did not work.", "Iris pense que chaque reduction est un piege parce qu'un coupon n'a pas fonctionne."],
  ["Cole assumes the city has no parking because he found one full lot.", "Cole suppose qu'il n'y a pas de parking en ville parce qu'il a trouve un parking plein."],
  ["Aria thinks all teachers are strict because one teacher enforced homework.", "Aria pense que tous les professeurs sont severes parce qu'un professeur a fait respecter les devoirs."],
  ["Jay says the new road is awful because one drive was slow during rush hour.", "Jay dit que la nouvelle route est horrible parce qu'un trajet etait lent a l'heure de pointe."],
  ["Nora believes every houseplant dies because one plant on her shelf wilted.", "Nora croit que toutes les plantes d'interieur meurent parce qu'une plante sur son etagere a fane."],
  ["Theo assumes the festival is crowded because he saw one packed photo.", "Theo suppose que le festival est bondé parce qu'il a vu une photo remplie de monde."],
  ["Lena thinks every online class is boring because one lecture felt long.", "Lena pense que tous les cours en ligne sont ennuyeux parce qu'un cours a paru long."],
  ["Ben says all loan apps are predatory because one ad felt pushy.", "Ben dit que toutes les applications de pret sont predatrices parce qu'une pub lui a paru insistante."],
  ["Maya believes every camping trip is miserable because one night rained.", "Maya croit que chaque sortie camping est penible parce qu'une nuit il a plu."],
  ["Eli thinks all cats hate people because one cat hid under a bed.", "Eli pense que tous les chats detestent les gens parce qu'un chat s'est cache sous un lit."],
  ["Priya says the company is failing because one project was delayed.", "Priya dit que l'entreprise est en train de couler parce qu'un projet a ete retarde."],
  ["Omar assumes every movie sequel is bad because one sequel disappointed him.", "Omar suppose que toutes les suites de films sont mauvaises parce qu'une suite l'a decu."],
  ["Zoe thinks all trains are unreliable because one train was late.", "Zoe pense que tous les trains sont peu fiables parce qu'un train etait en retard."],
  ["Kai says the software has too many bugs because one screen froze.", "Kai dit que le logiciel a trop de bugs parce qu'un ecran s'est fige."],
  ["Mia believes every doctor is dismissive because one appointment felt rushed.", "Mia croit que tous les medecins sont expeditifs parce qu'un rendez-vous lui a paru presse."],
  ["Noah thinks every classroom is chaotic because he visited one noisy room.", "Noah pense que toutes les salles de classe sont chaotiques parce qu'il a visite une salle bruyante."],
  ["Ava says all markets are overpriced because one stall was expensive.", "Ava dit que tous les marches sont trop chers parce qu'un stand etait cher."],
  ["Luca believes every new gadget fails because his last one broke.", "Luca croit que chaque nouveau gadget tombe en panne parce que le dernier a casse."],
  ["Rina says the park is unsafe because she saw one broken bottle.", "Rina dit que le parc est dangereux parce qu'elle a vu une seule bouteille cassee."],
  ["Theo thinks all recipes are hard because one cake collapsed.", "Theo pense que toutes les recettes sont difficiles parce qu'un gateau s'est effondre."],
];

const EN = ['Base Rate Neglect', 'Availability Heuristic', 'Confirmation Bias', 'False Dilemma'];
const FR = ['Negligence du taux de base', 'Heuristique de disponibilité', 'Biais de confirmation', 'Fausse dichotomie'];

const rotate = (a: string[], i: number) => {
  const r = a.slice(1);
  r.splice(i, 0, a[0]);
  return r;
};

const sub = (i: number) => (i < 17 ? SubLevel.BEGINNER : i < 34 ? SubLevel.INTERMEDIATE : SubLevel.EXPERT);

function make(fr = false): Question[] {
  return SCENARIOS.map((s, i) => {
    const c = i % 4;
    return {
      id: 32201 + i,
      level: 7,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Negligence du taux de base' : 'Base Rate Neglect',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? FR : EN, c),
      correct_option_index: c,
      explanation: fr
        ? "Une histoire marquante ou un cas isolé prend plus de place mentale que les vraies frequences de fond."
        : 'A striking story or isolated case crowds out the actual background frequency.',
      detailedExplanationBeginner: fr
        ? "Un cas frappant ne remplace pas les chiffres globaux."
        : 'A vivid case does not replace the overall numbers.',
      detailedExplanationIntermediate: fr
        ? "Quand on juge une probabilite a partir d'un exemple frappant au lieu du taux habituel, on surestime facilement le risque ou la vraisemblance."
        : 'When you judge probability from a vivid example instead of the usual rate, it is easy to overestimate risk or likelihood.',
      detailedExplanationExpert: fr
        ? "La negligence du taux de base consiste a ignorer la frequence de fond d'un evenement au profit d'un indice saillant, ce qui fausse les jugements dans les tests, la medecine, la criminalite et le quotidien."
        : 'Base rate neglect is ignoring the background frequency of an event in favor of a salient cue, which distorts judgments in tests, medicine, crime, and everyday life.',
      questionFormat: 'standard',
    };
  });
}

export const BASE_RATE_NEGLECT_EXPANSION_EN: Question[] = make();
export const BASE_RATE_NEGLECT_EXPANSION_FR: Question[] = make(true);

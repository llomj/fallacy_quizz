import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["After saying she hates the app, Rina keeps picking examples that make her sound consistent.", "Apres avoir dit qu'elle deteste l'application, Rina choisit toujours des exemples qui la font paraitre coherente."],
  ["Ben promised to be neutral, but he only remembers facts that support his first opinion.", "Ben avait promis d'etre neutre, mais il ne se souvient que des faits qui soutiennent sa premiere opinion."],
  ["Mia insists the cafe is bad, so she ignores the days when service was actually fine.", "Mia insiste pour dire que le cafe est mauvais, donc elle ignore les jours ou le service etait en fait correct."],
  ["Omar wants to stay loyal to his team, so every loss becomes a fluke in his story.", "Omar veut rester fidele a son equipe, donc chaque defaite devient un accident dans son recit."],
  ["Jade already told friends the movie was boring, so she filters out the clever scenes.", "Jade a deja dit a ses amis que le film etait ennuyeux, donc elle filtre les scenes malines."],
  ["Theo claimed the course was easy, so now he highlights every simple exercise and ignores the hard ones.", "Theo a affirme que le cours etait facile, donc il souligne maintenant chaque exercice simple et ignore les difficiles."],
  ["Ava says the neighbor is rude, so one awkward hello confirms the story.", "Ava dit que le voisin est impoli, donc un seul bonjour maladroit confirme l'histoire."],
  ["Leo wants to look patient, so he treats every delay as proof that he is calm.", "Leo veut avoir l'air patient, donc il traite chaque retard comme une preuve qu'il est calme."],
  ["Nina told everyone the rule was unfair, so she keeps collecting moments that sound unfair.", "Nina a dit a tout le monde que la regle etait injuste, donc elle continue a collectionner les moments qui ont l'air injustes."],
  ["Finn wants to be seen as practical, so he remembers only the costs that made his choice look smart.", "Finn veut passer pour pratique, donc il se souvient seulement des couts qui rendent son choix intelligent."],
  ["Mina says she is not biased, yet she only notices cases that agree with her side.", "Mina dit qu'elle n'est pas biaisee, pourtant elle ne remarque que les cas qui vont dans son sens."],
  ["Kai keeps defending the car he bought by replaying every good detail.", "Kai continue de defendre la voiture qu'il a achetee en repassant chaque bon detail."],
  ["Aria said the teacher was strict, so she now finds strictness in every assignment.", "Aria a dit que le professeur etait severe, donc elle trouve maintenant de la severite dans chaque devoir."],
  ["Noah wants to stay consistent with his first review, so he skips evidence that would change it.", "Noah veut rester coherent avec sa premiere critique, donc il saute les preuves qui la changeraient."],
  ["Zoe insists the trip was a disaster, so even a good meal becomes part of the disaster story.", "Zoe insiste pour dire que le voyage etait une catastrophe, donc meme un bon repas devient partie de l'histoire de la catastrophe."],
  ["Milo chooses the new routine and then keeps explaining why every result proves it was right.", "Milo choisit la nouvelle routine puis explique sans cesse pourquoi chaque resultat prouve qu'elle etait juste."],
  ["Lina said the school was great, so she ignores the one bad day that does not fit.", "Lina a dit que l'ecole etait super, donc elle ignore la seule mauvaise journee qui ne colle pas."],
  ["Priya wants her first impression to survive, so she treats every follow-up as support.", "Priya veut que sa premiere impression survive, donc elle traite chaque suite comme un soutien."],
  ["Eli already decided the show was smart, so he skips any dumb joke.", "Eli a deja decide que l'emission etait intelligente, donc il saute toute blague stupide."],
  ["Tara promised herself the plan was good, so every hiccup becomes a minor exception.", "Tara s'est promis que le plan etait bon, donc chaque accroc devient une petite exception."],
  ["Owen keeps calling the gym worthwhile, so he only tells the stories that make it sound worthwhile.", "Owen continue d'appeler la salle de sport rentable, donc il raconte seulement les histoires qui la font paraitre rentable."],
  ["Rina wants her opinion to look stable, so she downplays anything that sounds like a change of mind.", "Rina veut que son opinion paraisse stable, donc elle minimise tout ce qui ressemble a un changement d'avis."],
  ["Ben says the restaurant is excellent, so he only remembers the dishes that fit excellent.", "Ben dit que le restaurant est excellent, donc il ne se souvient que des plats qui collent a excellent."],
  ["Mia wants to stay loyal to the coach, so she turns every criticism into jealousy.", "Mia veut rester fidele a l'entraineur, donc elle transforme chaque critique en jalousie."],
  ["Theo already told people the phone is flawless, so the tiny bugs disappear from memory.", "Theo a deja dit aux gens que le telephone est sans defaut, donc les petits bugs disparaissent de la memoire."],
  ["Ava wants to appear reasonable, so she picks the calmer examples and skips the messy ones.", "Ava veut paraitre raisonnable, donc elle choisit les exemples plus calmes et saute les plus chaotiques."],
  ["Leo insists the city is friendly, so he only talks about the helpful strangers.", "Leo insiste pour dire que la ville est accueillante, donc il ne parle que des inconnus serviables."],
  ["Nina wants her judgment to sound firm, so she edits out the counterexamples.", "Nina veut que son jugement paraisse ferme, donc elle supprime les contre-exemples."],
  ["Finn says the class is fun, so he retells the best moment as if it proved the whole class.", "Finn dit que le cours est amusant, donc il raconte le meilleur moment comme s'il prouvait tout le cours."],
  ["Mina keeps saying the bakery is worth it, so she treats each good pastry as the decisive fact.", "Mina continue de dire que la boulangerie vaut le coup, donc elle traite chaque bonne viennoiserie comme le fait decisif."],
  ["Kai wants to avoid admitting a mistake, so he only notices proof that he was right.", "Kai veut eviter d'admettre une erreur, donc il ne remarque que les preuves qu'il avait raison."],
  ["Aria wants her favorite brand to remain favorite, so she ignores the repair stories.", "Aria veut que sa marque preferee reste la preferee, donc elle ignore les histoires de reparation."],
  ["Noah defends the policy because backing away would feel inconsistent.", "Noah defend la politique parce que faire marche arriere lui semblerait incoherent."],
  ["Zoe keeps the story simple by collecting only examples that fit her first take.", "Zoe garde l'histoire simple en collectionnant seulement les exemples qui collent a sa premiere idee."],
  ["Milo says the trip went well, so he only remembers the parts that went well.", "Milo dit que le voyage s'est bien passe, donc il ne se souvient que des parties qui se sont bien passees."],
  ["Lina keeps her original complaint alive by noticing every small sign that supports it.", "Lina maintient sa plainte initiale en remarquant chaque petit signe qui la soutient."],
  ["Priya wants the meeting to have been useful, so she treats one good idea as proof.", "Priya veut que la reunion ait ete utile, donc elle traite une bonne idee comme une preuve."],
  ["Eli wants to remain consistent with his vote, so he edits out contrary arguments.", "Eli veut rester coherent avec son vote, donc il supprime les arguments contraires."],
  ["Tara says the new rule is bad, so every annoying moment becomes a reason to agree.", "Tara dit que la nouvelle regle est mauvaise, donc chaque moment agaçant devient une raison d'etre d'accord."],
  ["Owen wants to look decisive, so he keeps the facts that make his first answer look solid.", "Owen veut paraitre decisif, donc il garde les faits qui font paraitre sa premiere reponse solide."],
  ["Rina tells herself the class is boring, so she stops noticing the interesting parts.", "Rina se dit que le cours est ennuyeux, donc elle cesse de remarquer les parties interessantes."],
  ["Ben wants the story to stay true, so he keeps the version that felt true first.", "Ben veut que l'histoire reste vraie, donc il garde la version qui a d'abord paru vraie."],
  ["Mia says the cafe is overrated, so she only stores the disappointing visits.", "Mia dit que le cafe est surestime, donc elle ne retient que les visites decevantes."],
  ["Theo wants the app to be reliable, so he remembers the one smooth week.", "Theo veut que l'application soit fiable, donc il se souvient de la seule semaine sans probleme."],
  ["Ava wants to protect her original claim, so she turns every mixed case into a supporting case.", "Ava veut proteger sa claim initiale, donc elle transforme chaque cas melange en cas de soutien."],
  ["Leo says the neighborhood is loud, so he only notices the loud blocks.", "Leo dit que le quartier est bruyant, donc il ne remarque que les blocs bruyants."],
  ["Nina wants her first guess to stand, so she dismisses the evidence that would soften it.", "Nina veut que sa premiere supposition tienne, donc elle rejette les preuves qui l'adouciraient."],
  ["Finn wants the coach to be great, so he forgets the bad drills.", "Finn veut que l'entraineur soit genial, donc il oublie les mauvais exercices."],
  ["Mina keeps her opinion stable by selecting only the examples that match it.", "Mina garde son opinion stable en selectionnant seulement les exemples qui y correspondent."],
  ["Kai wants to stay committed to his first answer, so he hears the world through that answer.", "Kai veut rester engage envers sa premiere reponse, donc il entend le monde a travers cette reponse."],
  ["Maya wants her first take on the app to look right, so she keeps selecting only supportive examples.", "Maya veut que sa premiere opinion sur l'application paraisse juste, donc elle continue a selectionner seulement les exemples favorables."],
  ["Theo told his friends the trip was a disaster, so now he remembers every minor delay.", "Theo a dit a ses amis que le voyage etait une catastrophe, donc il se souvient maintenant de chaque petit retard."],
  ["Nina said the rule was unfair, so she keeps finding new ways to make it sound unfair.", "Nina a dit que la regle etait injuste, donc elle continue a trouver de nouvelles manieres de la faire paraitre injuste."],
  ["Ben promised to love his new bike route, so he highlights every smooth ride.", "Ben a promis d'aimer son nouvel itineraire a velo, donc il souligne chaque trajet fluide."],
  ["Omar wants to stay loyal to his choice of laptop, so he edits out the complaints.", "Omar veut rester fidele a son choix d'ordinateur portable, donc il efface les plaintes."],
  ["Priya said the cafe was great, so she keeps retelling the one perfect lunch.", "Priya a dit que le cafe etait genial, donc elle continue a raconter le seul dejeuner parfait."],
  ["Leo wants his vote to seem wise, so he only notices the reasons that agree with it.", "Leo veut que son vote paraisse sage, donc il ne remarque que les raisons qui y correspondent."],
  ["Rina already told everyone the movie was boring, so she filters out the clever scenes.", "Rina a deja dit a tout le monde que le film etait ennuyeux, donc elle filtre les scenes malines."],
  ["Jules said the coach was unfair, so now every strict whistle feels personal.", "Jules a dit que l'entraineur etait injuste, donc maintenant chaque coup de sifflet strict lui semble personnel."],
  ["Ava wants to keep her original impression, so she treats mixed feedback as support.", "Ava veut garder sa premiere impression, donc elle traite les avis partages comme un soutien."]
];

const EN = ['Consistency Bias', 'Confirmation Bias', 'Commitment Bias', 'Status Quo Bias'];
const FR = ['Biais de coherence', 'Biais de confirmation', 'Biais d\'engagement', 'Biais du statu quo'];

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
      id: 32901 + i,
      level: 4,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Biais de coherence' : 'Consistency Bias',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? FR : EN, c),
      correct_option_index: c,
      explanation: fr
        ? "La personne prefere les details qui gardent la meme ligne que sa premiere position."
        : 'The person prefers details that keep the same line as their first position.',
      detailedExplanationBeginner: fr
        ? "On garde sa premiere idee meme si les preuves changent."
        : 'You keep your first idea even when the evidence changes.',
      detailedExplanationIntermediate: fr
        ? "Le biais de coherence pousse a rester aligne sur une decision ou une opinion initiale, meme quand de nouvelles informations demandent une reevaluation."
        : 'Consistency bias pushes people to stay aligned with an initial decision or opinion, even when new information calls for a rethink.',
      detailedExplanationExpert: fr
        ? "Ce biais protege la coherence interne et l'image de soi, mais il peut faire ignorer les signaux utiles qui devraient conduire a corriger une premiere interpretation."
        : 'This bias protects internal coherence and self-image, but it can make people ignore useful signals that should correct an initial interpretation.',
      questionFormat: 'standard',
    };
  });
}

export const CONSISTENCY_BIAS_EXPANSION_EN: Question[] = make();
export const CONSISTENCY_BIAS_EXPANSION_FR: Question[] = make(true);

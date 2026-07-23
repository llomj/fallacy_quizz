import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["The bakery keeps the same frosting recipe because the founder used it in 1985 and wrote it on a napkin from the cafe.", "La boulangerie garde la même recette de glaçage parce que le fondateur l'utilisait en 1985 et l'a écrite sur une serviette du café."],
  ["Maya refuses the new filing app because her team always used paper folders and 'paper never crashed' during audits.", "Maya refuse la nouvelle application de classement parce que son équipe a toujours utilisé des dossiers papier et que « le papier ne plante jamais » pendant les audits."],
  ["Theo says the family always eats dinner at 7, so changing the time would be wrong.", "Theo dit que la famille dîne toujours à 19 h, donc changer l'heure serait mal."],
  ["A neighbor rejects the updated mailbox because the old one has been there since childhood.", "Un voisin rejette la boîte aux lettres modernisée parce que l'ancienne est là depuis son enfance."],
  ["Nina trusts the old rule about homework just because it is older.", "Nina fait confiance à l'ancienne règle sur les devoirs simplement parce qu'elle est ancienne."],
  ["Ben says the town parade route should not change because it never has.", "Ben dit que l'itinéraire du défilé ne devrait pas changer parce qu'il n'a jamais changé."],
  ["Omar buys the same brand of socks his grandfather wore, assuming that makes them better.", "Omar achète la même marque de chaussettes que portait son grand-père, en supposant que cela les rend meilleures."],
  ["A teacher rejects the new grading policy because the old one is traditional.", "Un enseignant rejette la nouvelle politique de notation parce que l'ancienne est traditionnelle."],
  ["Leah keeps the broken ritual for good luck because it is the way her family always did it.", "Leah garde le rituel cassé pour porter chance parce que c'est la façon dont sa famille l'a toujours fait."],
  ["The ad says the manual kettle is superior because people used it before electricity.", "La pub dit que la bouilloire manuelle est supérieure parce qu'on l'utilisait avant l'électricité."],
  ["Priya rejects the safer recipe change because 'we have never cooked that way'.", "Priya rejette le changement de recette plus sûr parce que « nous n'avons jamais cuisiné comme ça »."],
  ["A manager keeps the same meeting format because that is what the company has always done.", "Un manager garde le même format de réunion parce que c'est ce que l'entreprise a toujours fait."],
  ["The flyer says the old medicine must be right because generations used it.", "Le prospectus dit que l'ancien médicament doit être juste parce que des générations l'ont utilisé."],
  ["Mia says the shop should keep the dusty sign because it is part of the brand's history.", "Mia dit que la boutique devrait garder l'enseigne poussiéreuse parce qu'elle fait partie de l'histoire de la marque."],
  ["Theo believes the ancient seating chart is best because it has always been that way.", "Theo croit que l'ancien plan de placement est le meilleur parce que cela a toujours été ainsi."],
  ["A parent refuses the new bedtime routine because the old one is what their parents used.", "Un parent refuse la nouvelle routine du coucher parce que l'ancienne est celle que ses parents utilisaient."],
  ["The coach says the team must keep the outdated drill because it is a tradition.", "L'entraîneur dit que l'équipe doit garder l'exercice dépassé parce que c'est une tradition."],
  ["Ben chooses the old map over the updated one because the old map is familiar.", "Ben choisit l'ancienne carte plutôt que la mise à jour parce que l'ancienne lui est familière."],
  ["Nina says the town should keep the stone crosswalk even if it is inconvenient because it is historic.", "Nina dit que la ville devrait garder le passage piéton en pierre même s'il est gênant parce qu'il est historique."],
  ["Omar rejects the new garden layout because the old layout is what the previous owner used.", "Omar rejette la nouvelle disposition du jardin parce que l'ancienne est celle que l'ancien propriétaire utilisait."],
  ["The school says the dress code is correct because it was in place when the school opened.", "L'école dit que le code vestimentaire est correct parce qu'il était en place à l'ouverture de l'école."],
  ["Maya thinks the old calendar app is better because she has always used it.", "Maya pense que l'ancienne application de calendrier est meilleure parce qu'elle l'a toujours utilisée."],
  ["A bakery worker says the burnt crust is the best part because that's the traditional finish.", "Un employé de boulangerie dit que la croûte brûlée est la meilleure partie parce que c'est la finition traditionnelle."],
  ["Leah refuses the updated commute plan because her family always drove the same road.", "Leah refuse le nouveau plan de trajet parce que sa famille a toujours pris la même route."],
  ["The poster says the old slogan is stronger because it survived for decades.", "L'affiche dit que l'ancien slogan est plus fort parce qu'il a survécu pendant des décennies."],
  ["A student rejects the new calculator method because the old method is what the teacher used.", "Un élève rejette la nouvelle méthode de calcul parce que l'ancienne est celle que l'enseignant utilisait."],
  ["Priya says the classic menu is better because it has not changed in years.", "Priya dit que le menu classique est meilleur parce qu'il n'a pas changé depuis des années."],
  ["A neighbor keeps the shaky fence because it has always been there.", "Un voisin garde la clôture branlante parce qu'elle a toujours été là."],
  ["Theo trusts the old chart because it was the chart his parents saw at school.", "Theo fait confiance à l'ancien graphique parce que c'est celui que ses parents ont vu à l'école."],
  ["The company says the paper form is superior because employees have used it forever.", "L'entreprise dit que le formulaire papier est supérieur parce que les employés l'utilisent depuis toujours."],
  ["Mia believes the old way to boil water is best because that is how the grandparents did it.", "Mia croit que l'ancienne façon de faire bouillir l'eau est la meilleure parce que c'est ainsi que les grands-parents faisaient."],
  ["Ben rejects the new app icon because he prefers the one everyone has seen for years.", "Ben rejette la nouvelle icône de l'application parce qu'il préfère celle que tout le monde voit depuis des années."],
  ["The ad says the classic car is the best because it is from a 'golden era'.", "La pub dit que la voiture classique est la meilleure parce qu'elle vient d'un « âge d'or »."],
  ["Nina says the old spreadsheet formula should stay because it is the original.", "Nina dit que l'ancienne formule du tableur doit rester parce que c'est l'originale."],
  ["A teacher refuses the clearer lesson slides because the chalkboard has always worked.", "Un enseignant refuse les diapositives plus claires parce que le tableau noir a toujours fonctionné."],
  ["Omar says the family rule is right because his father followed it.", "Omar dit que la règle familiale est juste parce que son père la suivait."],
  ["Leah thinks the old bus route is best because that is what commuters are used to.", "Leah pense que l'ancien trajet de bus est le meilleur parce que les navetteurs y sont habitués."],
  ["The bakery keeps the long wait because customers are used to it.", "La boulangerie garde l'attente longue parce que les clients y sont habitués."],
  ["Priya says the old tax form is better because changing it would be unfamiliar.", "Priya dit que l'ancien formulaire fiscal est meilleur parce que le changer serait inhabituel."],
  ["A parent keeps the same bedtime story because it has always been the bedtime story.", "Un parent garde la même histoire du soir parce que c'est toujours l'histoire du soir."],
  ["Theo argues the old office software must be better because replacing it feels disrespectful to the past.", "Theo soutient que l'ancien logiciel de bureau doit être meilleur parce que le remplacer semble manquer de respect au passé."],
  ["Mia says the older recipe is healthier because it is the family recipe.", "Mia dit que la recette plus ancienne est plus saine parce que c'est la recette de famille."],
  ["The flyer says the traditional method is the safest because it is traditional.", "Le prospectus dit que la méthode traditionnelle est la plus sûre parce qu'elle est traditionnelle."],
  ["Ben rejects the updated bus shelter because the old one is what everyone expects.", "Ben rejette l'abri de bus rénové parce que l'ancien est celui auquel tout le monde s'attend."],
  ["Nina says the museum should keep the old caption even if it is inaccurate because it is part of the exhibit's history.", "Nina dit que le musée devrait garder l'ancienne légende même si elle est inexacte parce qu'elle fait partie de l'histoire de l'exposition."],
  ["Omar trusts the old rule for cleaning because the building's previous owner used it.", "Omar fait confiance à l'ancienne règle de nettoyage parce que l'ancien propriétaire du bâtiment l'utilisait."],
  ["Leah keeps the outdated password policy because it has always been the policy.", "Leah garde la politique de mot de passe dépassée parce que c'est toujours été la politique."],
  ["A student says the old classroom seating must be best because it is how school used to be.", "Un élève dit que l'ancien placement en classe doit être le meilleur parce que c'est ainsi que l'école était avant."],
  ["Priya refuses the easier checkout process because the old process is the 'real' one.", "Priya refuse le processus de paiement plus simple parce que l'ancien est le 'vrai'."],
  ["The sign says the old name for the street is correct because people have always called it that.", "L'enseigne dit que l'ancien nom de la rue est correct parce que les gens l'ont toujours appelée ainsi."],
  ["Mia says the ancient rule must be good because it survived until now.", "Mia dit que l'ancienne règle doit être bonne parce qu'elle a survécu jusqu'à maintenant."],
];

const EN = ['Appeal to Tradition', 'Appeal to Popularity', 'Appeal to Novelty', 'False Dilemma'];
const FR = ["Appel à la tradition", 'Appel à la popularité', 'Appel à la nouveauté', 'Fausse dichotomie'];

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
      id: 30751 + i,
      level: 1,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Appel à la tradition' : 'Appeal to Tradition',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? FR : EN, c),
      correct_option_index: c,
      explanation: fr
        ? "Quelque chose est jugé meilleur simplement parce qu'il est ancien, habituel ou transmis par le passé."
        : 'Something is treated as better simply because it is old, familiar, or handed down from the past.',
      detailedExplanationBeginner: fr
        ? "Ancien ne veut pas dire bon."
        : 'Old does not automatically mean good.',
      detailedExplanationIntermediate: fr
        ? "Le fait qu'une pratique soit ancienne montre seulement qu'elle a duré, pas qu'elle est la meilleure."
        : 'The fact that a practice is old only shows it has lasted, not that it is the best.',
      detailedExplanationExpert: fr
        ? "L'appel à la tradition confond stabilité historique et justesse actuelle, en traitant l'habitude ou l'héritage culturel comme une preuve suffisante."
        : 'Appeal to tradition confuses historical stability with present correctness and treats habit or inherited custom as enough proof.',
      questionFormat: 'standard',
    };
  });
}

export const APPEAL_TO_TRADITION_EXPANSION_EN: Question[] = make();
export const APPEAL_TO_TRADITION_EXPANSION_FR: Question[] = make(true);

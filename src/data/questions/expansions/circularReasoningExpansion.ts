import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["The app is the best because it says it is the best.", "L'application est la meilleure parce qu'elle dit qu'elle est la meilleure."],
  ["Marta trusts the rumor because everybody says the rumor is true.", "Marta fait confiance a la rumeur parce que tout le monde dit que la rumeur est vraie."],
  ["The coach is right because the coach always knows the right answer.", "L'entraineur a raison parce que l'entraineur connait toujours la bonne reponse."],
  ["Leo says the class is fair because fair classes are the ones Leo likes.", "Leo dit que le cours est juste parce que les cours justes sont ceux que Leo aime."],
  ["Ava insists the new policy works because working policies are the ones that work.", "Ava insiste pour dire que la nouvelle politique fonctionne parce que les politiques qui fonctionnent sont celles qui fonctionnent."],
  ["The candle is magical because it must be magical to glow that way.", "La bougie est magique parce qu'elle doit etre magique pour briller ainsi."],
  ["Nina argues the bakery is famous because famous bakeries are the ones everyone knows.", "Nina affirme que la boulangerie est celebre parce que les boulangeries celebres sont celles que tout le monde connait."],
  ["Ben believes the rule is useful because useful rules are the rules that are useful.", "Ben croit que la regle est utile parce que les regles utiles sont les regles utiles."],
  ["Omar says the movie is smart because smart movies are the movies smart people like.", "Omar dit que le film est intelligent parce que les films intelligents sont ceux que les gens intelligents aiment."],
  ["Jade says the plan is urgent because anything urgent is what needs to happen now.", "Jade dit que le plan est urgent parce que tout ce qui est urgent est ce qui doit arriver maintenant."],
  ["Finn says the team deserves praise because praise is what good teams deserve.", "Finn dit que l'equipe merite des eloges parce que les eloges sont ce que les bonnes equipes meritent."],
  ["Mina claims the teacher is inspiring because inspiring teachers inspire people.", "Mina affirme que le professeur est inspirant parce que les professeurs inspirants inspirent les gens."],
  ["Theo says the shortcut is safe because safe shortcuts are the shortcuts people trust.", "Theo dit que le raccourci est sur parce que les raccourcis surs sont ceux auxquels les gens font confiance."],
  ["Zoe says the cafe is stylish because stylish cafes are the cafes that look stylish.", "Zoe dit que le cafe est elegant parce que les cafes elegants sont ceux qui ont l'air elegants."],
  ["Kai argues the phone is durable because durable phones are phones that last.", "Kai soutient que le telephone est durable parce que les telephones durables sont ceux qui durent."],
  ["Priya says the guide is accurate because accurate guides are the ones that tell the truth.", "Priya dit que le guide est precis parce que les guides precis sont ceux qui disent la verite."],
  ["Aria claims the policy is fair because fair policies are the policies that feel fair.", "Aria affirme que la politique est juste parce que les politiques justes sont celles qui semblent justes."],
  ["Noah says the shortcut is correct because correct shortcuts are the shortcuts that are correct.", "Noah dit que le raccourci est correct parce que les raccourcis corrects sont ceux qui sont corrects."],
  ["Rina says the snack is healthy because healthy snacks are the snacks that make you healthy.", "Rina dit que le snack est sain parce que les snacks sains sont ceux qui te rendent sain."],
  ["Milo says the rule is wise because wise rules are rules that make wise choices.", "Milo dit que la regle est sage parce que les regles sages sont celles qui permettent des choix sages."],
  ["Lina says the class is advanced because advanced classes are the ones that feel advanced.", "Lina dit que le cours est avance parce que les cours avances sont ceux qui semblent avances."],
  ["Eli says the city is beautiful because beautiful cities are cities people admire.", "Eli dit que la ville est belle parce que les villes belles sont celles que les gens admirent."],
  ["Tara says the training is effective because effective training is training that works.", "Tara dit que la formation est efficace parce que la formation efficace est celle qui marche."],
  ["Maya says the bridge is strong because strong bridges are bridges that stand up.", "Maya dit que le pont est solide parce que les ponts solides sont ceux qui tiennent debout."],
  ["Owen says the dog is obedient because obedient dogs are dogs that obey.", "Owen dit que le chien est obeissant parce que les chiens obeissants sont ceux qui obeissent."],
  ["Nora says the map is reliable because reliable maps are maps you can rely on.", "Nora dit que la carte est fiable parce que les cartes fiables sont celles sur lesquelles on peut compter."],
  ["Jade says the conference is important because important conferences are the conferences that matter.", "Jade dit que la conference est importante parce que les conferences importantes sont celles qui comptent."],
  ["Ben says the shortcut is efficient because efficient shortcuts are shortcuts that save time.", "Ben dit que le raccourci est efficace parce que les raccourcis efficaces sont ceux qui font gagner du temps."],
  ["Ava says the new show is brilliant because brilliant shows are shows that shine.", "Ava dit que la nouvelle serie est brillante parce que les series brillantes sont celles qui brillent."],
  ["Theo says the chef is talented because talented chefs are chefs who cook well.", "Theo dit que le chef est talentueux parce que les chefs talentueux sont ceux qui cuisinent bien."],
  ["Mina says the locker is secure because secure lockers are lockers that stay secure.", "Mina dit que le casier est securise parce que les casiers securises sont ceux qui restent securises."],
  ["Finn says the street is safe because safe streets are the streets that feel safe.", "Finn dit que la rue est sure parce que les rues sures sont celles qui paraissent sures."],
  ["Omar says the rumor is believable because believable rumors are the rumors people believe.", "Omar dit que la rumeur est credible parce que les rumeurs credibles sont celles que les gens croient."],
  ["Priya says the coach is expert because expert coaches are coaches who know what they are doing.", "Priya dit que l'entraineur est expert parce que les entraineurs experts sont ceux qui savent ce qu'ils font."],
  ["Kai says the repair is worth it because worthwhile repairs are repairs worth paying for.", "Kai dit que la reparation vaut le coup parce que les reparations valables sont celles qui meritent qu'on les paie."],
  ["Zoe says the lesson is clear because clear lessons are lessons that leave no confusion.", "Zoe dit que la lecon est claire parce que les lecons claires sont celles qui ne laissent aucune confusion."],
  ["Leo says the decision is final because final decisions are decisions that end the debate.", "Leo dit que la decision est finale parce que les decisions finales sont celles qui mettent fin au debat."],
  ["Rina says the app is honest because honest apps are apps that tell the truth.", "Rina dit que l'application est honnete parce que les applications honnetes sont celles qui disent la verite."],
  ["Noah says the concert is amazing because amazing concerts are concerts that amaze.", "Noah dit que le concert est incroyable parce que les concerts incroyables sont ceux qui eblouissent."],
  ["Lina says the speaker is credible because credible speakers are people who sound credible.", "Lina dit que l'orateur est credible parce que les orateurs credibles sont ceux qui ont l'air credibles."],
  ["Maya says the shortcut is the safest path because the safest path is the one that feels safest.", "Maya dit que le raccourci est le chemin le plus sur parce que le chemin le plus sur est celui qui semble le plus sur."],
  ["Eli says the rulebook is complete because complete rulebooks are books that have everything.", "Eli dit que le reglement est complet parce que les reglements complets sont ceux qui ont tout."],
  ["Aria says the plan is smart because smart plans are plans that make smart sense.", "Aria dit que le plan est intelligent parce que les plans intelligents sont ceux qui ont du sens intelligent."],
  ["Tara says the boutique is classy because classy boutiques are the ones with class.", "Tara dit que la boutique est chic parce que les boutiques chic sont celles qui ont de la classe."],
  ["Milo says the idea is practical because practical ideas are ideas that work in practice.", "Milo dit que l'idee est pratique parce que les idees pratiques sont celles qui marchent en pratique."],
  ["Nina says the gadget is useful because useful gadgets are gadgets that are useful.", "Nina dit que le gadget est utile parce que les gadgets utiles sont des gadgets utiles."],
  ["Ben says the result is obvious because obvious results are the results everyone sees.", "Ben dit que le resultat est evident parce que les resultats evidents sont ceux que tout le monde voit."],
  ["Jade says the theory is true because true theories are theories that are true.", "Jade dit que la theorie est vraie parce que les theories vraies sont celles qui sont vraies."],
  ["Owen says the apartment is desirable because desirable apartments are apartments people want.", "Owen dit que l'appartement est desirable parce que les appartements desirables sont ceux que les gens veulent."],
  ["Nora says the recipe is reliable because reliable recipes are recipes that always work.", "Nora dit que la recette est fiable parce que les recettes fiables sont celles qui marchent toujours."],
];

const EN = ['Circular Reasoning', 'Begging the Question', 'False Dilemma', 'Appeal to Authority'];
const FR = ['Raisonnement circulaire', 'Petition de principe', 'Fausse dichotomie', 'Appel à l\'autorité'];

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
      id: 32701 + i,
      level: 3,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Raisonnement circulaire' : 'Circular Reasoning',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? FR : EN, c),
      correct_option_index: c,
      explanation: fr
        ? "La conclusion sert de preuve a elle-meme, donc le raisonnement tourne en rond."
        : 'The conclusion is used as its own proof, so the reasoning goes in a circle.',
      detailedExplanationBeginner: fr
        ? "On prouve une idee en utilisant deja cette idee."
        : 'It proves an idea by using that same idea already.',
      detailedExplanationIntermediate: fr
        ? "Le raisonnement circulaire recopie la conclusion dans la preuve au lieu d'apporter une raison independente."
        : 'Circular reasoning copies the conclusion into the proof instead of giving an independent reason.',
      detailedExplanationExpert: fr
        ? "Ce sophisme apparait quand la justification et la conclusion se renvoient mutuellement, ce qui donne l'impression d'une preuve sans ajouter de verification externe."
        : 'This fallacy appears when the justification and the conclusion point to each other, creating the illusion of proof without external verification.',
      questionFormat: 'standard',
    };
  });
}

export const CIRCULAR_REASONING_EXPANSION_EN: Question[] = make();
export const CIRCULAR_REASONING_EXPANSION_FR: Question[] = make(true);

import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["Mira says the app cannot be useful because she cannot picture using it on the bus while standing with a backpack.", "Mira dit que l'application ne peut pas etre utile parce qu'elle n'arrive pas a l'imaginer dans le bus debout avec un sac a dos."],
  ["Theo refuses the repair estimate because the price seems impossible to him for a broken toaster in the kitchen.", "Theo refuse le devis de reparation parce que le prix lui parait impossible pour un grille-pain casse dans la cuisine."],
  ["The class rejects the schedule because it feels too neat to be real.", "La classe rejette l'horaire parce qu'il paraît trop bien organisé pour être réel."],
  ["A shopper says the discount must be fake because it sounds unbelievable.", "Une cliente dit que la réduction doit être fausse parce qu'elle semble incroyable."],
  ["Nina dismisses the science article because the result does not make intuitive sense to her.", "Nina rejette l'article scientifique parce que le résultat ne lui paraît pas logique."],
  ["Omar thinks the router cannot be fixed because he cannot picture the steps.", "Omar pense que le routeur ne peut pas être réparé parce qu'il n'arrive pas à imaginer les étapes."],
  ["The teacher rejects the new math trick because it looks weird at first glance.", "L'enseignant rejette la nouvelle astuce de maths parce qu'elle a l'air bizarre au premier coup d'œil."],
  ["A friend says the schedule must be wrong because nobody would plan it that way.", "Un ami dit que l'horaire doit être faux parce que personne ne le planifierait ainsi."],
  ["Leah refuses to believe the story because she cannot see how it could happen.", "Leah refuse de croire l'histoire parce qu'elle ne voit pas comment cela pourrait arriver."],
  ["The team calls the result impossible because it is hard to wrap their heads around.", "L'équipe dit que le résultat est impossible parce qu'il est difficile à comprendre."],
  ["Ben ignores the map because the route looks too simple to be accurate.", "Ben ignore la carte parce que l'itinéraire a l'air trop simple pour être exact."],
  ["A parent says the new rule cannot work because it seems too different from the old one.", "Un parent dit que la nouvelle règle ne peut pas marcher parce qu'elle semble trop différente de l'ancienne."],
  ["A student rejects the answer because it is not the one he expected.", "Un élève rejette la réponse parce qu'elle n'est pas celle qu'il attendait."],
  ["Maya says the explanation must be wrong because she finds it hard to picture.", "Maya dit que l'explication doit être fausse parce qu'elle a du mal à se la représenter."],
  ["The customer doubts the refund policy because it sounds too generous.", "Le client doute de la politique de remboursement parce qu'elle paraît trop généreuse."],
  ["Ravi says the bird migration report is nonsense because he has never seen that many birds.", "Ravi dit que le rapport sur la migration des oiseaux est absurde parce qu'il n'a jamais vu autant d'oiseaux."],
  ["A neighbor rejects the gardening tip because it seems too odd to be true.", "Un voisin rejette le conseil de jardinage parce qu'il semble trop bizarre pour être vrai."],
  ["The manager dismisses the proposal because he cannot imagine his team using it.", "Le manager rejette la proposition parce qu'il n'arrive pas à imaginer son équipe l'utiliser."],
  ["Zoe calls the claim impossible because it does not match her gut feeling.", "Zoe dit que l'affirmation est impossible parce qu'elle ne correspond pas à son intuition."],
  ["A gamer refuses the update because he cannot see how it could improve anything.", "Un joueur refuse la mise à jour parce qu'il ne voit pas comment elle pourrait améliorer quoi que ce soit."],
  ["The speaker says the budget plan is unbelievable because it sounds boring.", "L'orateur dit que le plan budgétaire est incroyable au sens péjoratif parce qu'il semble ennuyeux."],
  ["Priya rejects the route change because the new path looks awkward on the map.", "Priya rejette le changement d'itinéraire parce que le nouveau trajet a l'air maladroit sur la carte."],
  ["A cousin says the legal advice cannot be right because it feels too technical.", "Un cousin dit que le conseil juridique ne peut pas être correct parce qu'il paraît trop technique."],
  ["Noah dismisses the weather forecast because he cannot imagine fog turning into rain.", "Noah rejette la météo parce qu'il n'arrive pas à imaginer que le brouillard devienne de la pluie."],
  ["The office rejects the new filing system because it seems unfamiliar and strange.", "Le bureau rejette le nouveau système de classement parce qu'il semble inhabituel et étrange."],
  ["A friend says the story is false because the ending is too surprising.", "Un ami dit que l'histoire est fausse parce que la fin est trop surprenante."],
  ["Eli refuses the nutrition advice because he cannot picture the meal looking tasty.", "Eli refuse le conseil nutritionnel parce qu'il n'arrive pas à imaginer que le repas soit bon."],
  ["A parent says the school report must be wrong because the score looks too high.", "Un parent dit que le bulletin doit être faux parce que la note paraît trop élevée."],
  ["The mechanic distrusts the diagnostic because the explanation feels too clean.", "Le mécanicien se méfie du diagnostic parce que l'explication semble trop nette."],
  ["Salma says the shortcut cannot save time because it does not seem like a shortcut.", "Salma dit que le raccourci ne peut pas faire gagner du temps parce qu'il ne ressemble pas à un raccourci."],
  ["The group rejects the plan because it sounds too calm for a real solution.", "Le groupe rejette le plan parce qu'il semble trop calme pour être une vraie solution."],
  ["A teen says the homework tip is fake because it does not match the way she usually studies.", "Une ado dit que l'astuce pour les devoirs est fausse parce qu'elle ne correspond pas à sa façon habituelle d'étudier."],
  ["Hugo denies the claim because he cannot picture the event happening in his town.", "Hugo nie l'affirmation parce qu'il n'arrive pas à imaginer l'événement dans sa ville."],
  ["A customer says the warranty cannot be real because the terms are easy to understand.", "Une cliente dit que la garantie ne peut pas être réelle parce que les conditions sont faciles à comprendre."],
  ["Mila rejects the cleaner recipe because it looks too plain.", "Mila rejette la recette plus simple parce qu'elle a l'air trop ordinaire."],
  ["A worker says the new software cannot help because it does not look impressive.", "Un employé dit que le nouveau logiciel ne peut pas aider parce qu'il ne paraît pas impressionnant."],
  ["The friend dismisses the route advice because it sounds unlike the advice she is used to.", "L'ami rejette le conseil d'itinéraire parce qu'il ne ressemble pas aux conseils auxquels elle est habituée."],
  ["A child says the science demo is fake because he cannot imagine balloons doing that.", "Un enfant dit que la démonstration scientifique est fausse parce qu'il n'arrive pas à imaginer des ballons faire ça."],
  ["The caller rejects the support guide because the steps sound too ordinary to work.", "L'appelant rejette le guide d'aide parce que les étapes semblent trop ordinaires pour fonctionner."],
  ["Zoe says the event cannot be popular because it is not exciting enough to her.", "Zoe dit que l'événement ne peut pas être populaire parce qu'il n'est pas assez excitant pour elle."],
  ["A neighbor dismisses the snow warning because the forecast feels exaggerated.", "Un voisin rejette l'avertissement de neige parce que la météo lui semble exagérée."],
  ["The coach rejects the pacing advice because it sounds slower than he would choose.", "L'entraîneur rejette le conseil sur le rythme parce qu'il semble plus lent que ce qu'il choisirait."],
  ["A student says the answer cannot be correct because the logic feels backwards.", "Un élève dit que la réponse ne peut pas être correcte parce que la logique lui semble inversée."],
  ["The parent doubts the menu because the healthy option looks too plain.", "Le parent doute du menu parce que l'option saine a l'air trop simple."],
  ["Kai says the new habit is impossible because he cannot imagine doing it after work.", "Kai dit que la nouvelle habitude est impossible parce qu'il n'arrive pas à s'imaginer la faire après le travail."],
  ["A shopper rejects the eco label because it sounds too good to be true.", "Une cliente rejette l'étiquette écologique parce qu'elle semble trop belle pour être vraie."],
  ["The committee dismisses the clean-up idea because it does not feel dramatic enough.", "Le comité rejette l'idée de nettoyage parce qu'elle ne paraît pas assez spectaculaire."],
  ["A renter says the landlord's promise cannot be honest because it seems too convenient.", "Un locataire dit que la promesse du propriétaire ne peut pas être honnête parce qu'elle paraît trop commode."],
  ["Lea says the solution is false because she cannot explain it in one sentence.", "Lea dit que la solution est fausse parce qu'elle ne peut pas l'expliquer en une phrase."],
  ["A passenger says the train delay update cannot be real because it sounds too neat.", "Un passager dit que la mise à jour du retard du train ne peut pas être réelle parce qu'elle semble trop bien formulée."],
  ["Maya says the clinic advice cannot be right because it feels too strange to follow.", "Maya dit que le conseil de la clinique ne peut pas être juste parce qu'il paraît trop étrange à suivre."],
  ["Theo rejects the repair guide because he cannot picture the steps working together.", "Theo rejette le guide de réparation parce qu'il n'arrive pas à imaginer les étapes fonctionner ensemble."],
  ["Nina says the weather update is false because the forecast sounds backwards to her.", "Nina dit que la mise à jour météo est fausse parce que la prévision lui paraît inversée."],
  ["Omar dismisses the travel tip because the route seems too odd to succeed.", "Omar rejette le conseil de voyage parce que l'itinéraire semble trop bizarre pour réussir."],
  ["Ben says the budget plan must be wrong because the numbers do not feel intuitive.", "Ben dit que le plan budgétaire doit être faux parce que les chiffres ne lui paraissent pas intuitifs."],
  ["Priya rejects the school rule because she cannot imagine it helping.", "Priya rejette la règle scolaire parce qu'elle n'arrive pas à l'imaginer utile."],
  ["Leo says the report is impossible because the conclusion feels too clean.", "Leo dit que le rapport est impossible parce que la conclusion semble trop nette."],
  ["Rina doubts the new map because she cannot see how it fits the streets she knows.", "Rina doute de la nouvelle carte parce qu'elle ne voit pas comment elle s'adapte aux rues qu'elle connaît."],
  ["Jules says the answer is false because it sounds like a trick.", "Jules dit que la réponse est fausse parce qu'elle ressemble à une astuce."],
  ["Ava rejects the schedule because it seems too neat for real life.", "Ava rejette l'horaire parce qu'il paraît trop bien rangé pour la vraie vie."],
  [`Maya says the plan is fake because she cannot imagine her boss agreeing to it.`, `Maya dit que le plan est faux parce qu elle n arrive pas a imaginer son patron y consentir.`],
  [`Leo rejects the tip because it sounds too simple to matter.`, `Leo rejette le conseil parce qu il semble trop simple pour compter.`],
  [`Nina says the report cannot be accurate because the conclusion feels backwards.`, `Nina dit que le rapport ne peut pas etre exact parce que la conclusion lui parait a l envers.`],
  [`Owen dismisses the repair guide because he cannot picture the steps working.`, `Owen rejette le guide de reparation parce qu il n arrive pas a imaginer les etapes fonctionner.`],
  [`Priya says the discount must be fake because it looks too generous.`, `Priya dit que la reduction doit etre fausse parce qu elle a l air trop genereuse.`],
  [`Ben thinks the route is impossible because it seems odd on the map.`, `Ben pense que l itineraire est impossible parce qu il a l air bizarre sur la carte.`],
  [`Tara says the weather alert is wrong because fog turning into rain feels weird to her.`, `Tara dit que l alerte meteo est fausse parce que le brouillard devenant pluie lui semble bizarre.`],
  [`Kai rejects the recipe because the healthy version looks too plain.`, `Kai rejette la recette parce que la version saine a l air trop simple.`],
  [`Jules says the refund policy cannot be real because it sounds too generous.`, `Jules dit que la politique de remboursement ne peut pas etre reelle parce qu elle semble trop genereuse.`],
  [`Ava calls the new schedule fake because it is too neat for her taste.`, `Ava appelle le nouvel horaire faux parce qu il est trop bien range a son gout.`],
  [`Noah says the science result is nonsense because he cannot wrap his head around it.`, `Noah dit que le resultat scientifique est absurde parce qu il n arrive pas a le comprendre.`],
  [`Mina rejects the updated map because it does not fit the streets she knows.`, `Mina rejette la carte mise a jour parce qu elle ne correspond pas aux rues qu elle connait.`],
  [`Eli says the story is false because the ending is too surprising.`, `Eli dit que l histoire est fausse parce que la fin est trop surprenante.`],
  [`Rina says the new software cannot help because it does not look impressive.`, `Rina dit que le nouveau logiciel ne peut pas aider parce qu il n a pas l air impressionnant.`],
  [`Hugo refuses the travel tip because he cannot picture the route working.`, `Hugo refuse le conseil de voyage parce qu il n arrive pas a imaginer l itineraire fonctionner.`],
  [`Lina says the schedule is wrong because nobody would plan it that way.`, `Lina dit que l horaire est faux parce que personne ne le planifierait ainsi.`],
  [`Grant says the claim is impossible because he has never seen anything like it.`, `Grant dit que l affirmation est impossible parce qu il n a jamais vu quelque chose de similaire.`],
  [`Zoe rejects the budget plan because the numbers do not feel intuitive.`, `Zoe rejette le plan budgetaire parce que les chiffres ne lui paraissent pas intuitifs.`],
  [`Milo says the app update is fake because it sounds too tidy.`, `Milo dit que la mise a jour de l application est fausse parce qu elle semble trop propre.`],
  [`Theo says the school rule cannot work because it feels too different from the old one.`, `Theo dit que la regle scolaire ne peut pas marcher parce qu elle semble trop differente de l ancienne.`],
  [`Pia dismisses the snack review because the praise sounds unbelievable.`, `Pia rejette l avis sur la collation parce que les eloges semblent incroyables.`],
  [`Finn says the route change is impossible because he cannot see how it saves time.`, `Finn dit que le changement d itineraire est impossible parce qu il ne voit pas comment il ferait gagner du temps.`],
  [`Maya says the clinic advice is wrong because it feels too strange to follow.`, `Maya dit que le conseil de la clinique est faux parce qu il parait trop etrange a suivre.`],
  [`Sam says the product must be fake because the ad is too polished.`, `Sam dit que le produit doit etre faux parce que la pub est trop bien faite.`],
  [`Juno says the answer is wrong because it sounds like a trick.`, `Juno dit que la reponse est fausse parce qu elle ressemble a une astuce.`],
  [`Iris rejects the new habit because she cannot imagine doing it after work.`, `Iris rejette la nouvelle habitude parce qu elle n arrive pas a s imaginer la faire apres le travail.`],
  [`Cole says the warranty cannot be real because the terms are easy to understand.`, `Cole dit que la garantie ne peut pas etre reelle parce que les conditions sont faciles a comprendre.`],
  [`Nora says the route advice is false because it does not match her gut feeling.`, `Nora dit que le conseil d itineraire est faux parce qu il ne correspond pas a son intuition.`],
  [`Ari dismisses the bird report because he has never seen that many birds.`, `Ari rejette le rapport sur les oiseaux parce qu il n a jamais vu autant d oiseaux.`],
  [`Rita says the update cannot help because it seems too calm for a real solution.`, `Rita dit que la mise a jour ne peut pas aider parce qu elle semble trop calme pour etre une vraie solution.`],
  [`Tia says the support guide is fake because the steps look ordinary.`, `Tia dit que le guide d aide est faux parce que les etapes ont l air ordinaires.`],
  [`Oli rejects the scholarship because it sounds too good to be true.`, `Oli rejette la bourse parce qu elle semble trop belle pour etre vraie.`],
  [`Lara says the cooking tip is nonsense because she cannot picture it working.`, `Lara dit que le conseil de cuisine est absurde parce qu elle n arrive pas a l imaginer fonctionner.`],
  [`Ben says the team plan is wrong because it looks too clean.`, `Ben dit que le plan de l equipe est faux parce qu il a l air trop net.`],
  [`Mina rejects the neighborhood alert because it feels exaggerated.`, `Mina rejette l alerte du quartier parce qu elle lui semble exageree.`],
  [`Drew says the new app cannot be useful because it is not flashy.`, `Drew dit que la nouvelle application ne peut pas etre utile parce qu elle n est pas tape-a-l oeil.`],
  [`Jade says the clinic recommendation is false because it sounds backwards.`, `Jade dit que la recommandation de la clinique est fausse parce qu elle semble a l envers.`],
  [`Owen dismisses the easy math trick because it seems too simple to work.`, `Owen rejette l astuce de maths parce qu elle semble trop simple pour marcher.`],
  [`Mila says the passenger update is fake because the wording sounds too neat.`, `Mila dit que la mise a jour pour les passagers est fausse parce que la formulation semble trop soignee.`],
  [`Evan says the map is wrong because he cannot see how the streets line up.`, `Evan dit que la carte est fausse parce qu il ne voit pas comment les rues s alignent.`],
];

const EN = ['Appeal to Incredulity', 'Appeal to Authority', 'False Dilemma', 'Appeal to Popularity'];
const FR = ["Appel à l'incrédulité", "Appel à l'autorité", 'Fausse dichotomie', 'Appel à la popularité'];

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
      id: 30551 + i,
      level: 1,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? "Appel à l'incrédulité" : 'Appeal to Incredulity',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? FR : EN, c),
      correct_option_index: c,
      explanation: fr
        ? "Quelque chose est rejeté seulement parce qu'il semble étrange, impossible ou difficile à imaginer."
        : 'Something is dismissed only because it seems strange, impossible, or hard to imagine.',
      detailedExplanationBeginner: fr
        ? "Le fait que cela paraît bizarre ne prouve rien."
        : 'Looking weird is not evidence that it is false.',
      detailedExplanationIntermediate: fr
        ? "Notre intuition peut être trompée; une idée peut sembler bizarre tout en étant correcte."
        : 'Intuition can be misleading; an idea can feel odd and still be correct.',
      detailedExplanationExpert: fr
        ? "L'appel à l'incrédulité confond la difficulté psychologique à imaginer une chose avec sa fausseté réelle, au lieu d'examiner les preuves."
        : 'Appeal to incredulity confuses psychological difficulty in imagining something with actual falsity, instead of checking evidence.',
      questionFormat: 'standard',
    };
  });
}

export const APPEAL_TO_INCREDULITY_EXPANSION_EN: Question[] = make();
export const APPEAL_TO_INCREDULITY_EXPANSION_FR: Question[] = make(true);

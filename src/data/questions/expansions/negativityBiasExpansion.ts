import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya gets ten kind comments on her art post, but the one rude reply is the only thing she can think about all afternoon.', 'Maya reçoit dix commentaires gentils sur sa publication d art, mais la seule réponse méchante est la seule chose à laquelle elle pense tout l après-midi.'],
  ['Leo has a good day at work, yet one sharp email makes him feel like the whole shift was awful.', 'Leo passe une bonne journée au travail, mais un seul e-mail sec lui donne l impression que tout le service était affreux.'],
  ['Priya enjoys the movie, but the slow ending is what she keeps replaying on the ride home.', 'Priya aime le film, mais la fin lente est ce qu elle rejoue sans cesse dans le bus du retour.'],
  ['Omar hears nine positive reactions to his presentation and still obsesses over the one confused face in the back row.', 'Omar entend neuf réactions positives à sa présentation et continue pourtant de s obséder pour le seul visage perplexe au fond de la salle.'],
  ['Rina likes the new apartment, but the neighbor’s noisy one-night party is what she remembers most.', 'Rina aime le nouvel appartement, mais la fête bruyante d une seule nuit chez le voisin est ce dont elle se souvient le plus.'],
  ['Ben has a smooth trip, yet the delayed train on the last leg ruins the whole memory for him.', 'Ben fait un voyage sans accroc, mais le train en retard sur le dernier trajet lui gâche tout le souvenir.'],
  ['Zoe gets praised by her teacher, but one correction on her essay makes her think the assignment was a disaster.', 'Zoé reçoit des compliments de son professeur, mais une seule correction sur sa dissertation lui fait croire que le devoir était une catastrophe.'],
  ['Kai likes the team meeting, but the one awkward joke is the only part he tells his friends about.', 'Kai aime la réunion d équipe, mais la seule blague gênante est la seule partie qu il raconte à ses amis.'],
  ['Nora enjoys dinner with her family, yet she spends the evening thinking about the one comment that sounded cold.', 'Nora apprécie le dîner en famille, mais elle passe la soirée à penser à la seule remarque qui lui a paru froide.'],
  ['Eli wins the game, but he can only talk about the mistake that almost cost the final round.', 'Eli gagne la partie, mais il ne peut parler que de l erreur qui a presque fait perdre la dernière manche.'],
  ['Lina has a fun birthday, but the missing dessert becomes the story she tells afterward.', 'Lina passe un anniversaire sympa, mais le dessert manquant devient l histoire qu elle raconte ensuite.'],
  ['Grant reads twenty helpful reviews of a product and still worries about the two bad ones.', 'Grant lit vingt avis utiles sur un produit et s inquiète quand même des deux mauvais.'],
  ['Tia feels good about her class project, but the one clumsy slide is all she notices.', 'Tia est contente de son projet de classe, mais la seule diapositive maladroite est tout ce qu elle remarque.'],
  ['Noah has a pleasant date, yet one awkward pause makes him replay the whole night as a failure.', 'Noah passe un bon rendez-vous, mais une seule pause gênante lui fait revoir toute la soirée comme un échec.'],
  ['Mia loves the neighborhood café, but she remembers the day it ran out of her favorite pastry.', 'Mia adore le café du quartier, mais elle se souvient surtout du jour où il n avait plus sa viennoiserie préférée.'],
  ['Jules gets mostly good feedback on his report, but one critical sentence feels like the verdict.', 'Jules reçoit surtout des retours positifs sur son rapport, mais une phrase critique lui paraît être le verdict final.'],
  ['Ava enjoys the weekend market, but the one stall with stale fruit is what she keeps mentioning.', 'Ava aime le marché du week-end, mais le seul stand avec des fruits pas frais est ce qu elle continue de mentionner.'],
  ['Finn has a calm flight, yet the bumpy landing dominates the whole memory.', 'Finn a un vol tranquille, mais l atterrissage cahoteux domine tout le souvenir.'],
  ['Mina likes the new app, but the single crash is the only thing she trusts her memory of.', 'Mina aime la nouvelle application, mais le seul plantage est la seule chose dont elle se fie en mémoire.'],
  ['Theo enjoys the concert, but the one off-key note is what he brings up afterward.', 'Théo aime le concert, mais la seule note fausse est ce qu il évoque ensuite.'],
  ['Juno has a productive workday, but one awkward meeting makes her call the whole day miserable.', 'Juno passe une journée de travail productive, mais une seule réunion gênante lui fait qualifier toute la journée de misérable.'],
  ['Iris gets an easy haircut, but the tiny snip she dislikes becomes the main thing she sees.', 'Iris a une coupe de cheveux réussie, mais la petite mèche qu elle n aime pas devient la principale chose qu elle voit.'],
  ['Cole enjoys the picnic, but the one ant that crawled onto the blanket ruins it in his mind.', 'Cole profite du pique-nique, mais la seule fourmi qui a grimpé sur la couverture le gâche dans son esprit.'],
  ['Riley has a good soccer practice, but the missed shot is what he remembers on the drive home.', 'Riley fait un bon entraînement de foot, mais le tir raté est ce dont il se souvient sur le chemin du retour.'],
  ['Pia gets strong grades all term, but one low quiz score feels like the real story.', 'Pia obtient de bonnes notes tout le trimestre, mais une seule mauvaise note de quiz lui semble être la vraie histoire.'],
  ['Hugo likes the neighborhood walk, but the barking dog is the detail he cannot let go.', 'Hugo aime la promenade dans le quartier, mais le chien qui aboie est le détail qu il n arrive pas à oublier.'],
  ['Sam has a nice lunch with coworkers, but the awkward silence at the end colors the whole meal.', 'Sam déjeune agréablement avec ses collègues, mais le silence gênant à la fin colore tout le repas.'],
  ['Jade watches a good show, but the weak finale is the only part she wants to review.', 'Jade regarde une bonne série, mais la fin faible est la seule partie qu elle veut commenter.'],
  ['Owen gets a helpful repair from the mechanic, but the greasy handprint on the door is what he focuses on.', 'Owen reçoit une réparation utile du mécanicien, mais l empreinte grasse sur la portière est ce sur quoi il se concentre.'],
  ['Lea has an upbeat phone call, but the one short reply keeps echoing in her head.', 'Léa a un appel téléphonique agréable, mais la seule réponse brève continue de résonner dans sa tête.'],
  ['Maya enjoys the bookstore, but the one missing title makes her think the whole place is lacking.', 'Maya aime la librairie, mais le seul titre manquant lui fait penser que l endroit entier est incomplet.'],
  ['Ben has a relaxing evening, yet the one news story about a robbery is what he remembers before bed.', 'Ben passe une soirée relaxante, mais la seule information sur un vol est ce dont il se souvient avant de dormir.'],
  ['Ava likes her new shoes, but the tiny scuff is all she can see when she looks down.', 'Ava aime ses nouvelles chaussures, mais la petite éraflure est tout ce qu elle voit quand elle regarde vers le bas.'],
  ['Omar enjoys the team lunch, but the overcooked rice is what he complains about most.', 'Omar apprécie le déjeuner d équipe, mais le riz trop cuit est ce dont il se plaint le plus.'],
  ['Nina has a smooth morning commute, but one traffic jam later turns the entire drive into a bad memory.', 'Nina a un trajet du matin sans accroc, mais un seul bouchon plus tard transforme tout le trajet en mauvais souvenir.'],
  ['Eli gets a solid performance review, but the one suggestion for improvement overshadows everything else.', 'Eli reçoit une bonne évaluation de performance, mais la seule suggestion d amélioration éclipse tout le reste.'],
  ['Lina likes the family vacation, but the one rainy afternoon is what she tells everyone about.', 'Lina aime les vacances en famille, mais le seul après-midi pluvieux est ce qu elle raconte à tout le monde.'],
  ['Grant has a cheerful chat with a neighbor, but the one awkward goodbye is what sticks.', 'Grant a une discussion sympathique avec un voisin, mais le seul au revoir gênant est ce qui reste.'],
  ['Tia enjoys the classroom debate, but the one rude interruption feels bigger than the rest of the discussion.', 'Tia aime le débat en classe, mais la seule interruption impolie lui paraît plus grande que tout le reste de la discussion.'],
  ['Finn has a pleasant shopping trip, but the one item out of stock becomes the whole story.', 'Finn fait un agréable tour de courses, mais le seul article en rupture de stock devient toute l histoire.'],
  ['Mina likes the new playlist, but the one song she hates is the one she keeps mentioning.', 'Mina aime la nouvelle playlist, mais la seule chanson qu elle déteste est celle qu elle continue de mentionner.'],
  ['Theo gets plenty of support on his idea, yet the single skeptical comment dominates his thinking.', 'Théo reçoit beaucoup de soutien pour son idée, mais le seul commentaire sceptique domine sa pensée.'],
  ['Juno has a good haircut day, but the one uneven strand makes her feel unhappy with the whole cut.', 'Juno passe une bonne journée de coupe de cheveux, mais la seule mèche inégale la rend mécontente de toute la coupe.'],
  ['Iris enjoys the cooking class, but the burnt toast from one step is what she remembers.', 'Iris aime le cours de cuisine, mais le pain grillé brûlé d une seule étape est ce dont elle se souvient.'],
  ['Cole has a successful speech, yet he fixates on the one line that landed flat.', 'Cole fait un discours réussi, mais il se focalise sur la seule phrase qui est tombée à plat.'],
  ['Riley likes the new schedule, but the one late bus is what makes him call it a mess.', 'Riley aime le nouvel emploi du temps, mais le seul bus en retard lui fait appeler cela un désastre.'],
  ['Pia gets helpful comments on her drawing, but the one smudged corner is what she zooms in on.', 'Pia reçoit des commentaires utiles sur son dessin, mais le seul coin bavé est ce qu elle grossit dans son esprit.'],
  ['Hugo has a fun game night, but the one lost round ruins the mood for him.', 'Hugo passe une soirée jeu amusante, mais la seule manche perdue lui gâche l humeur.'],
  ['Sam enjoys the museum visit, but the one crowded room is what he keeps describing.', 'Sam apprécie la visite au musée, mais la seule salle bondée est ce qu il continue de décrire.'],
  ['Jade has a decent dentist visit, but the one uncomfortable minute feels like the whole appointment.', 'Jade a un rendez-vous chez le dentiste correct, mais la seule minute inconfortable lui semble être tout le rendez-vous.'],
  ['Maya gets good news from school, but the one warning in the email is the only part she reads twice.', 'Maya reçoit de bonnes nouvelles de l école, mais le seul avertissement dans l e-mail est la seule partie qu elle relit deux fois.'],
  ['Ben has a nice run in the park, but the one steep hill is what he brings up later.', 'Ben fait un bon footing au parc, mais la seule côte raide est ce qu il évoque plus tard.'],
  ['Ava enjoys the birthday dinner, but the one cold fry is what she calls a disaster.', 'Ava aime le dîner d anniversaire, mais la seule frite froide lui fait parler de catastrophe.'],
  ['Theo likes the group project, but the one teammate who replied late is what he remembers most.', 'Théo aime le projet de groupe, mais le seul coéquipier qui a répondu en retard est ce dont il se souvient le plus.'],
];

const OPTIONS_EN = ['Negativity Bias', 'Pessimism Bias', 'Information Bias', 'Availability Heuristic'];
const OPTIONS_FR = ['Biais de négativité', 'Biais pessimiste', "Biais d'information", 'Heuristique de disponibilité'];

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
      id: 37251 + index,
      level: 5,
      persona_stage: PersonaStage.OCTOPUS,
      concept: isFrench ? 'Biais de négativité' : 'Negativity Bias',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais est illustré ici ?' : 'Which bias is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'Les détails négatifs prennent plus de place que les détails positifs.'
        : 'Negative details take up more mental space than positive ones.',
      detailedExplanationBeginner: isFrench
        ? 'Une remarque négative peut sembler plus lourde que dix remarques positives.'
        : 'One negative remark can feel heavier than ten positive ones.',
      detailedExplanationIntermediate: isFrench
        ? 'Le biais de négativité nous pousse à retenir, revisiter et surévaluer ce qui va mal, même quand la majorité de l expérience est correcte ou agréable.'
        : 'Negativity bias pushes us to remember, revisit, and overvalue what goes wrong, even when most of the experience is fine or pleasant.',
      detailedExplanationExpert: isFrench
        ? 'Ce biais vient d une sensibilité adaptative aux menaces: le cerveau traite souvent l information négative comme plus urgente, plus mémorable et plus diagnostique que l information positive. Dans la vie quotidienne, cela fausse les évaluations de relation, de travail, de santé ou de sécurité en donnant à un incident isolé le poids de toute la situation.'
        : 'This bias comes from an adaptive sensitivity to threats: the brain often treats negative information as more urgent, more memorable, and more diagnostic than positive information. In everyday life, it distorts judgments about relationships, work, health, or safety by giving one isolated incident the weight of the whole situation.',
      questionFormat: 'standard',
    };
  });
}

export const NEGATIVITY_BIAS_EXPANSION_EN: Question[] = createQuestions('en');
export const NEGATIVITY_BIAS_EXPANSION_FR: Question[] = createQuestions('fr');

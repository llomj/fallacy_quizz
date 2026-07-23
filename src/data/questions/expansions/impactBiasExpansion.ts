import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["Maya imagines how embarrassing one awkward lunch would feel and decides the whole week would be ruined.", "Maya imagine a quel point un dejeuner genant serait embarrassant et decide que toute la semaine serait gachee."],
  ["Leo skips the party because he thinks one bad conversation would haunt him for days.", "Leo saute la fete parce qu il pense qu une mauvaise conversation le hanterait pendant des jours."],
  ["Nina refuses to apply for the job because she believes one rejection would crush her mood for a month.", "Nina refuse de postuler au travail parce qu elle croit qu un refus briserait son moral pendant un mois."],
  ["Owen overreacts to a tiny schedule change and says it will destroy the entire trip.", "Owen reagit exagerement a un minuscule changement d horaire et dit que cela detruira tout le voyage."],
  ["Priya thinks one awkward text will ruin a friendship forever.", "Priya pense qu un seul message genant ruinera une amitie pour toujours."],
  ["Ben imagines a single awkward meeting and decides it would make the whole project unbearable.", "Ben imagine une seule reunion genante et decide que cela rendrait tout le projet insupportable."],
  ["Tara avoids trying a new hobby because she thinks being average at it once would feel awful.", "Tara evite d essayer un nouveau loisir parce qu elle pense qu y etre moyenne une fois serait terrible."],
  ["Kai says one bad haircut would make him miserable for weeks.", "Kai dit qu une mauvaise coupe de cheveux le rendrait miserable pendant des semaines."],
  ["Jules believes one small presentation mistake would wipe out all the hard work.", "Jules croit qu une petite erreur de presentation effacerait tout le travail accompli."],
  ["Ava assumes one missed bus would make the entire day feel like a disaster.", "Ava suppose qu un seul bus rate ferait sentir que toute la journee est une catastrophe."],
  ["Noah thinks a single rejection message would make dating impossible.", "Noah pense qu un seul message de refus rendrait les rencontres impossibles."],
  ["Mina expects one clumsy comment to dominate everyone s memory of the event.", "Mina s attend a ce qu un commentaire maladroit domine le souvenir de tout le monde sur l evenement."],
  ["Eli imagines that one awkward family dinner would feel unbearable for everyone.", "Eli imagine qu un seul diner de famille genant serait insupportable pour tout le monde."],
  ["Rina assumes one bad grade would poison the whole semester.", "Rina suppose qu une mauvaise note empoisonnerait tout le semestre."],
  ["Hugo says one awkward silence in a meeting would ruin his reputation.", "Hugo dit qu un seul silence gene en reunion ruinerait sa reputation."],
  ["Lina thinks one messy photo would make the whole vacation look awful.", "Lina pense qu une seule photo en desordre rendrait tout le voyage horrible."],
  ["Grant believes one slow reply from a friend would feel like a personal betrayal.", "Grant croit qu une reponse lente d un ami serait ressentie comme une trahison personnelle."],
  ["Zoe says one public mistake would be too painful to recover from.", "Zoe dit qu une seule erreur en public serait trop douloureuse pour s en remettre."],
  ["Milo avoids learning to cook because he thinks one burnt dinner would be humiliating.", "Milo evite d apprendre a cuisiner parce qu il pense qu un diner brule serait humiliant."],
  ["Theo imagines that one cold glance at a networking event would ruin the whole evening.", "Theo imagine qu un seul regard froid lors d un reseautage ruinerait toute la soiree."],
  ["Pia refuses to ask for help because one awkward question would feel unbearable.", "Pia refuse de demander de l aide parce qu une question genante serait insupportable."],
  ["Finn says one wrong answer in class would make him want to disappear.", "Finn dit qu une mauvaise reponse en classe lui donnerait envie de disparaitre."],
  ["Maya believes one awkward pause on stage would overshadow the rest of the talk.", "Maya croit qu une pause genante sur scene eclipsait tout le reste de l intervention."],
  ["Sam thinks one bad review would make the product feel worthless.", "Sam pense qu un mauvais avis rendrait le produit sans valeur."],
  ["Juno imagines that one tense email would ruin her whole morning.", "Juno imagine qu un seul courriel tendu ruinerait toute sa matinee."],
  ["Iris assumes one uncomfortable date moment would define the whole relationship.", "Iris suppose qu un seul moment inconfortable lors d un rendez-vous definirait toute la relation."],
  ["Cole says one awkward joke would make the whole group think he is strange.", "Cole dit qu une seule blague genante ferait penser au groupe entier qu il est bizarre."],
  ["Nora believes one wrong turn on a trip would spoil the whole vacation vibe.", "Nora croit qu un seul mauvais virage en voyage gacherait toute l ambiance des vacances."],
  ["Ari thinks one missed cue in a performance would destroy the audience s impression.", "Ari pense qu un seul signal manque dans une prestation detruirait l impression du public."],
  ["Rita assumes one clumsy introduction would make the whole room uncomfortable.", "Rita suppose qu une introduction maladroite rendrait toute la piece mal a l aise."],
  ["Tia imagines that one forgotten name at a reunion would ruin the evening.", "Tia imagine qu un nom oublie lors d une reunion gacherait la soiree."],
  ["Oli says one minor tech glitch would make the whole app feel broken.", "Oli dit qu un petit bug technique ferait paraitre toute l application cassée."],
  ["Lara believes one awkward compliment would make a conversation feel like a failure.", "Lara croit qu un compliment maladroit ferait sentir la conversation comme un echec."],
  ["Ben fears one small conflict would permanently sour the friendship.", "Ben craint qu un petit conflit ne gache definitivement l amitie."],
  ["Mina assumes one negative comment would outweigh all the positive ones.", "Mina suppose qu un commentaire negatif peserait plus lourd que tous les commentaires positifs."],
  ["Drew thinks one uncomfortable meeting would make the office unbearable all week.", "Drew pense qu une reunion inconfortable rendrait le bureau insupportable toute la semaine."],
  ["Jade imagines that one bad commute would ruin the whole day s mood.", "Jade imagine qu un mauvais trajet ruinerait l humeur de toute la journee."],
  ["Owen says one awkward handshake would haunt him long after the event.", "Owen dit qu une seule poignée de main maladroite le hanterait longtemps apres l evenement."],
  ["Mila believes one failed attempt at drawing would make art feel pointless.", "Mila croit qu une seule tentative ratee de dessin rendrait l art inutile."],
  ["Evan assumes one tense family text would create days of stress.", "Evan suppose qu un seul message familial tendu creerait des jours de stress."],
  ["Kira thinks one embarrassing moment at work would be impossible to shrug off.", "Kira pense qu un moment genant au travail serait impossible a oublier."],
  ["Grant says one uncertain answer in an interview would wreck the entire chance.", "Grant dit qu une reponse incertaine en entretien ruinerait toute la chance."],
  ["Zara imagines that one rough patch in a friendship would feel catastrophic.", "Zara imagine qu une mauvaise passe dans une amitie paraitrait catastrophique."],
  ["Parker assumes one awkward message thread would make the whole chat feel ruined.", "Parker suppose qu un fil de messages maladroit ferait paraitre tout l echange gache."],
  ["Hana thinks one bad customer interaction would color the entire shift.", "Hana pense qu une mauvaise interaction client colorerait tout le service."],
  ["Leo believes one missed opportunity would feel much bigger than it really is.", "Leo croit qu une occasion ratee semblerait beaucoup plus grande qu elle ne l est vraiment."],
  ["Maya says one small failure would sink her confidence for the rest of the month.", "Maya dit qu un petit echec ferait sombrer sa confiance pour le reste du mois."],
  ["Nina imagines one awkward silence would make the whole dinner feel like a flop.", "Nina imagine qu un silence genant ferait paraitre tout le diner comme un fiasco."],
  [`After one awkward comment at breakfast, Sam assumes the whole day will feel ruined.`, `Apres un commentaire genant au petit dejeuner, Sam suppose que toute la journee semblera ruinee.`],
  [`Mila imagines that one bad presentation slide would make the audience remember only the mistake.`, `Mila imagine qu une seule diapositive ratee ferait que le public ne retiendrait que l erreur.`],
  [`Owen thinks one tense email would make the whole week feel heavy.`, `Owen pense qu un seul courriel tendu rendrait toute la semaine lourde.`],
  [`Priya believes one missed handshake at a networking event would ruin the evening.`, `Priya croit qu une poignée de main ratee lors d un reseautage ruinerait la soiree.`],
  [`Leo says one burnt pancake would make brunch feel embarrassing for hours.`, `Leo dit qu une seule crepe brulee rendrait le brunch genant pendant des heures.`],
  [`Tara assumes one clumsy joke at work would haunt her all afternoon.`, `Tara suppose qu une blague maladroite au travail la hanterait tout l apres-midi.`],
  [`Ben imagines one wrong turn on a trip would spoil the entire vacation.`, `Ben imagine qu un mauvais virage en voyage gacherait toute la vacance.`],
  [`Jade thinks one awkward pause in a speech would overshadow everything else she said.`, `Jade pense qu une pause genante dans un discours eclipsait tout le reste de ce qu elle a dit.`],
  [`Nora believes one bad photo would ruin how she remembers the whole party.`, `Nora croit qu une mauvaise photo ruinerait la facon dont elle se souviendrait de toute la fete.`],
  [`Finn says one confusing comment would make the rest of the meeting feel pointless.`, `Finn dit qu un commentaire confus rendrait le reste de la reunion inutile.`],
];

const OPTIONS_EN = ['Impact Bias', 'Availability Heuristic', 'Catastrophizing', 'Overgeneralization'];
const OPTIONS_FR = ["Biais d'impact", 'Heuristique de disponibilité', 'Catastrophisation', 'Sur-généralisation'];

function rotate(a: string[], i: number) {
  const r = a.slice(1);
  r.splice(i, 0, a[0]);
  return r;
}

function sub(i: number) {
  return i < 43 ? SubLevel.BEGINNER : i < 50 ? SubLevel.INTERMEDIATE : SubLevel.EXPERT;
}

function make(fr = false): Question[] {
  return SCENARIOS.map((s, i) => {
    const c = i % 4;
    return {
      id: 36001 + i,
      level: 4,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? "Biais d'impact" : 'Impact Bias',
      difficulty: i < 43 ? 1 : i < 50 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? OPTIONS_FR : OPTIONS_EN, c),
      correct_option_index: c,
      explanation: fr
        ? "On surestime l impact emotionnel futur d un evenement et on croit qu il sera plus devastateur qu il ne le sera vraiment."
        : 'We overestimate the future emotional impact of an event and assume it will be more devastating than it really will be.',
      detailedExplanationBeginner: fr
        ? "Un moment desagreable semble souvent plus enorme avant de l avoir vecu."
        : 'An unpleasant moment often seems much bigger before we actually live through it.',
      detailedExplanationIntermediate: fr
        ? "Le biais d impact pousse a imaginer qu une erreur, un refus ou un instant genant va ruiner durablement notre humeur, alors que l intensite ressentie baisse souvent vite."
        : 'Impact bias makes us imagine that a mistake, rejection, or awkward moment will ruin our mood for a long time, even though the intensity usually drops quickly.',
      detailedExplanationExpert: fr
        ? "Ce biais de prediction affective vient de notre difficulte a anticiper l adaptation psychologique, la recupération emotionnelle et le fait que les evenements futurs prennent souvent moins de place qu on ne l imagine."
        : 'This affective forecasting bias comes from our difficulty anticipating psychological adaptation, emotional recovery, and the fact that future events often matter less than we predict.',
      questionFormat: 'standard',
    };
  });
}

export const IMPACT_BIAS_EXPANSION_EN: Question[] = make();
export const IMPACT_BIAS_EXPANSION_FR: Question[] = make(true);

import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya trusts a slogan that says "If it rhymes, it is right" and treats the rhyme as evidence the advice is true.', 'Maya fait confiance a un slogan qui dit « Si ca rime, c est legitime » et traite la rime comme une preuve que le conseil est vrai.'],
  ['Leo hears "fast and last" on a flyer and assumes the service must be reliable because the phrase sounds neat.', 'Leo entend « vite et solide » sur un prospectus et suppose que le service doit etre fiable parce que la phrase sonne bien.'],
  ['Priya likes a policy pitch because the line "safe and sound" is catchy, so she thinks the policy is solid.', 'Priya aime une proposition politique parce que la formule « sain et sauf » est accrocheuse, alors elle pense que la politique est solide.'],
  ['Omar trusts a product ad that says "clean and green" and takes the rhyme as proof the product is eco-friendly.', 'Omar fait confiance a une pub qui dit « propre et vert » et prend la rime pour une preuve que le produit est ecologique.'],
  ['Rina thinks a bedtime chant is medically wise because "rest is best" sounds memorable.', 'Rina pense qu un rituel du coucher est medicalement sage parce que « le repos, c est le top » est memorable.'],
  ['Ben believes a coach who says "train to gain" even though the line is just catchy wording.', 'Ben croit un coach qui dit « s entrainer pour gagner » alors que la formule n est qu une phrase accrocheuse.'],
  ['Zoe assumes a home remedy works because a neighbor repeats "sip and heal" with a smile.', 'Zoé suppose qu un remede maison marche parce qu une voisine repete « boire et guerir » avec le sourire.'],
  ['Kai says a budget tip must be smart because the poster says "save and behave".', 'Kai dit qu un conseil budget doit etre intelligent parce que l affiche dit « economise et sois sage ».'],
  ['Nora trusts a dating tip because the rhyme "slow and glow" sounds clever.', 'Nora fait confiance a un conseil de drague parce que la rime « lentement et brillamment » sonne clever.'],
  ['Eli thinks a school rule is fair because the phrase "late and rate" sounds polished.', 'Eli pense qu une regle scolaire est juste parce que la formule « en retard, mal note » sonne polie.'],
  ['Lina assumes a snack is healthy because the label says "light and bright".', 'Lina suppose qu un snack est sain parce que l etiquette dit « leger et lumineux ».'],
  ['Grant believes a savings app works because the ad says "click and stick" in a catchy rhythm.', 'Grant croit qu une appli d epargne marche parce que la pub dit « clique et tiens bon » sur un rythme accrocheur.'],
  ['Tia says a cleaning hack must be good because "spray and stay" sounds memorable.', 'Tia dit qu une astuce menage doit etre bonne parce que « vaporise et laisse agir » est memorable.'],
  ['Noah trusts a sleep supplement because "night and right" sounds tidy.', 'Noah fait confiance a un complement de sommeil parce que « la nuit, c est bon » sonne bien.'],
  ['Mia thinks a workout plan is excellent because the poster says "sweat and set".', 'Mia pense qu un programme d entrainement est excellent parce que l affiche dit « sueur et discipline ».'],
  ['Jules believes a city slogan about transit because "ride and glide" sounds smooth.', 'Jules croit a un slogan municipal sur le transport parce que « monte et glisse » sonne fluide.'],
  ['Ava says a teacher’s advice is correct because the handout ends with "learn and earn".', 'Ava dit que le conseil du professeur est correct parce que la fiche finit par « apprendre et gagner ».'],
  ['Finn thinks a charity pitch is honest because the phrase "give and live" rhymes.', 'Finn pense qu une collecte est honnete parce que la formule « donner et vivre » rime.'],
  ['Mina assumes a fashion trend is good because "wear and care" sounds balanced.', 'Mina suppose qu une tendance mode est bonne parce que « porter et prendre soin » sonne equilibre.'],
  ['Theo believes a finance tip because the line "spend less, stress less" is pleasing.', 'Theo croit a un conseil financier parce que la phrase « depense moins, stresse moins » est agreable.'],
  ['Juno trusts an anti-litter campaign because "bin it, win it" sounds smart.', 'Juno fait confiance a une campagne anti-dechets parce que « jette-le, gagne » sonne intelligent.'],
  ['Iris says a travel deal is genuine because "book and look" feels catchy.', 'Iris dit qu une offre de voyage est authentique parce que « reserve et regarde » est accrocheur.'],
  ['Cole believes a study trick works because "read and succeed" sounds like advice from a guru.', 'Cole croit qu une astuce d etude marche parce que « lire et reussir » sonne comme un conseil de gourou.'],
  ['Riley thinks a gym supplement is safe because the ad says "mix and fix".', 'Riley pense qu un complement de gym est sur parce que la pub dit « melange et reparer ».'],
  ['Pia trusts a kitchen hack because "stir and clear" sounds reassuring.', 'Pia fait confiance a une astuce cuisine parce que « remuer et clarifier » sonne rassurant.'],
  ['Hugo assumes a neighborhood watch idea is brilliant because the phrase "see and be free" is catchy.', 'Hugo suppose qu une idee de surveillance de quartier est brillante parce que la formule « voir et etre libre » est accrocheuse.'],
  ['Sam thinks a language app is better because the ad says "say it, play it".', 'Sam pense qu une appli de langue est meilleure parce que la pub dit « dis-le, joue-le ».'],
  ['Jade believes a pet food brand is trustworthy because "tail and trail" sounds neat.', 'Jade croit qu une marque d alimentation pour animaux est digne de confiance parce que « queue et piste » sonne bien.'],
  ['Owen says a road-safety rule must work because "slow and know" rhymes.', 'Owen dit qu une regle de securite routiere doit marcher parce que « ralentis et comprends » rime.'],
  ['Lea accepts a productivity tip because "plan and scan" sounds organized.', 'Léa accepte une astuce de productivite parce que « planifier et verifier » sonne organise.'],
  ['Maya trusts a skincare claim because "glow and show" feels polished.', 'Maya fait confiance a une promesse de soin de la peau parce que « brille et montre » semble poli.'],
  ['Ben thinks a repair shop is honest because the sign says "fix and mix".', 'Ben pense qu un atelier de reparation est honnete parce que l enseigne dit « reparer et melanger ».'],
  ['Ava believes a classroom rule is fair because "hear and cheer" sounds upbeat.', 'Ava croit qu une regle de classe est juste parce que « ecouter et applaudir » sonne joyeux.'],
  ['Omar trusts a diet post because "eat clean, feel keen" sounds clever.', 'Omar fait confiance a un post de regime parce que « manger sain, se sentir bien » sonne astucieux.'],
  ['Nina says a charity slogan is enough proof because "share and care" is memorable.', 'Nina dit qu un slogan caritatif suffit comme preuve parce que « partager et prendre soin » est memorable.'],
  ['Eli thinks a sales pitch is right because "buy and fly" sounds confident.', 'Eli pense qu une presentation commerciale est juste parce que « acheter et decoller » sonne confiant.'],
  ['Lina trusts a home organizing tip because "sort and short" sounds efficient.', 'Lina fait confiance a une astuce d organisation parce que « trier et raccourcir » sonne efficace.'],
  ['Grant believes a weather app is smarter because its slogan says "track and react".', 'Grant croit qu une appli meteo est plus intelligente parce que son slogan dit « suivre et reagir ».'],
  ['Tia assumes a classroom poster about kindness is true because "be nice, think twice" sounds good.', 'Tia suppose qu une affiche de classe sur la gentillesse est vraie parce que « sois gentil, reflechis » sonne bien.'],
  ['Finn trusts a money mantra because "save today, okay tomorrow" is catchy.', 'Finn fait confiance a un mantra financier parce que « economise aujourd hui, demain ira bien » est accrocheur.'],
  ['Mina thinks a music review is fair because the phrase "beat and complete" sounds polished.', 'Mina pense qu une critique musicale est juste parce que la formule « rythme et complet » sonne polie.'],
  ['Theo believes a health tip because "walk and talk" sounds like something a doctor would say.', 'Theo croit a un conseil de sante parce que « marche et parle » ressemble a ce qu un medecin dirait.'],
  ['Juno says a laundry tip is correct because "wash and dash" is catchy.', 'Juno dit qu une astuce de lessive est correcte parce que « laver et filer » est accrocheur.'],
  ['Iris trusts a shopping slogan because "cheap and neat" rhymes in a satisfying way.', 'Iris fait confiance a un slogan commercial parce que « pas cher et net » rime de façon satisfaisante.'],
  ['Cole thinks a meeting rule is wise because "short and neat" sounds efficient.', 'Cole pense qu une regle de reunion est sage parce que « court et net » sonne efficace.'],
  ['Riley believes a classroom reward system must work because "try and fly" sounds inspiring.', 'Riley croit qu un systeme de recompense en classe doit marcher parce que « essayer et s envoler » sonne inspirant.'],
  ['Pia trusts a recycling campaign because "reuse and choose" is easy to remember.', 'Pia fait confiance a une campagne de recyclage parce que « reutiliser et choisir » est facile a retenir.'],
  ['Hugo says a driving tip is right because "steady and ready" sounds reassuring.', 'Hugo dit qu un conseil de conduite est juste parce que « stable et pret » sonne rassurant.'],
  ['Sam believes a lunchbox ad because "pack and snack" sounds neat.', 'Sam croit a une pub de lunchbox parce que « emballer et grignoter » sonne net.'],
  ['Jade trusts a podcast host because the title "truth in tune" sounds authoritative.', 'Jade fait confiance a un animateur de podcast parce que le titre « verite en rythme » sonne autoritaire.'],
  ['Maya thinks a new habit guide is valid because "start and smart" sounds profound.', 'Maya pense qu un guide de nouvelle habitude est valide parce que « commencer et etre malin » sonne profond.'],
];

const OPTIONS_EN = ['Rhyme as Reason Effect', 'Fluency Heuristic', 'Confirmation Bias', 'Bandwagon'];
const OPTIONS_FR = ['Effet de la rime comme raison', 'Heuristique de fluidité', 'Biais de confirmation', 'Effet de mode'];

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
      id: 40001 + index,
      level: 5,
      persona_stage: PersonaStage.OCTOPUS,
      concept: isFrench ? 'Effet de la rime comme raison' : 'Rhyme as Reason Effect',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel biais est illustré ici ?' : 'Which bias is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'La phrase semble vraie surtout parce qu elle rime ou sonne bien, pas parce qu elle apporte une vraie preuve.'
        : 'The phrase feels true mostly because it rhymes or sounds polished, not because it provides real evidence.',
      detailedExplanationBeginner: isFrench
        ? 'Ca sonne bien, alors on y croit trop vite.'
        : 'It sounds good, so people believe it too quickly.',
      detailedExplanationIntermediate: isFrench
        ? 'L effet de la rime comme raison consiste a confondre une formule accrocheuse avec un argument solide. La musique des mots cree une impression de justesse.'
        : 'The rhyme-as-reason effect is the mistake of confusing a catchy phrase with a solid argument. The music of the words creates an impression of correctness.',
      detailedExplanationExpert: isFrench
        ? "Ce biais repose sur le traitement fluide: un message facile a lire, a retenir ou a prononcer parait plus credible. La rime, le rythme et les formules breves renforcent cette impression, meme si le contenu reste vide. Pour l eviter, il faut separer style et preuve, puis demander quelles donnees ou quels mecanismes soutiennent vraiment l affirmation."
        : 'This bias relies on processing fluency: a message that is easy to read, remember, or say feels more credible. Rhyme, rhythm, and short slogans strengthen that impression even when the content is empty. To avoid it, separate style from evidence and ask what data or mechanism actually supports the claim.',
      questionFormat: 'standard',
    };
  });
}

export const RHYME_AS_REASON_EFFECT_EXPANSION_EN: Question[] = createQuestions('en');
export const RHYME_AS_REASON_EFFECT_EXPANSION_FR: Question[] = createQuestions('fr');

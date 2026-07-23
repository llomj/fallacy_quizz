import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['After one helpful comment, Maya assumes the new coworker must be excellent at every part of the job.', "Apres un seul commentaire utile, Maya suppose que la nouvelle collegue doit etre excellente dans tous les aspects du travail."],
  ["Ben likes a teacher's style, so he decides the teacher must also be smart about every subject.", "Ben aime le style d un professeur, donc il decide que ce professeur doit aussi etre competent dans chaque sujet."],
  ['Priya thinks the receptionist is great at fixing problems because she greeted everyone warmly.', "Priya pense que la receptionniste est tres douee pour resoudre les problemes parce qu elle a salue tout le monde chaleureusement."],
  ['Noah assumes the coach is a genius because the coach gave one sharp pep talk.', "Noah suppose que l entraineur est un genie parce qu il a donne un seul discours motivant tres convaincant."],
  ['Lina trusts the new neighbor with her plants because his apartment looks tidy.', "Lina fait confiance au nouveau voisin pour ses plantes parce que son appartement a l air bien range."],
  ['Theo says the salesperson must be honest because they remembered his name.', "Theo dit que le vendeur doit etre honnete parce qu il a retenu son nom."],
  ['Ava believes the doctor is kinder than usual because the waiting room was calm.', "Ava croit que le medecin est plus gentil que la moyenne parce que la salle d attente etait calme."],
  ['Omar thinks the classmate is brilliant in math because he gave a clear answer in history.', "Omar pense que le camarade de classe est brillant en mathematiques parce qu il a donne une reponse claire en histoire."],
  ['Rosa assumes the chef can fix any recipe because the soup tasted good.', "Rosa suppose que le chef peut corriger n importe quelle recette parce que la soupe avait bon gout."],
  ['Jules says the librarian must know everything because she found one missing book quickly.', "Jules dit que la bibliothecaire doit tout savoir parce qu elle a retrouve rapidement un livre manquant."],
  ['Eli thinks the manager is good at leading the whole team because the meeting started on time.', "Eli pense que le responsable est bon pour diriger toute l equipe parce que la reunion a commence a l heure."],
  ['Mina believes the coach is wise about life because the coach gave one memorable quote.', "Mina croit que l entraineur est sage sur la vie parce qu il a donne une seule citation marquante."],
  ['Hugo assumes the barista is also a great planner because the coffee looked perfect.', "Hugo suppose que le barista est aussi tres bon organisateur parce que le cafe avait l air parfait."],
  ['Lea thinks the new student is top of the class because she answered one question fast.', "Lea pense que la nouvelle eleve est la meilleure de la classe parce qu elle a repondu vite a une question."],
  ['Max says the politician must be trustworthy because the speech sounded polished.', "Max dit que le politicien doit etre digne de confiance parce que le discours semblait soigne."],
  ['Tia assumes the mechanic is excellent at everything because the engine noise disappeared.', "Tia suppose que le mecanicien est excellent dans tout parce que le bruit du moteur a disparu."],
  ['Paul thinks the team captain is brilliant because the jersey design looked sharp.', "Paul pense que le capitaine de l equipe est brillant parce que le design du maillot etait elegant."],
  ['Yara says the customer is probably right about every complaint because one complaint was handled well.', "Yara dit que le client a probablement raison sur toutes ses plaintes parce qu une plainte a ete bien geree."],
  ['Dan believes the museum guide is a genius because the tour felt engaging.', "Dan croit que le guide du musee est un genie parce que la visite etait captivante."],
  ['Nina thinks the coach understands teenagers because the warm-up was fun.', "Nina pense que l entraineur comprend les adolescents parce que l echauffement etait amusant."],
  ['Kim assumes the designer is always reliable because one poster looked beautiful.', "Kim suppose que la designer est toujours fiable parce qu une affiche etait tres belle."],
  ['Salma trusts the substitute teacher on every topic because the class stayed quiet.', "Salma fait confiance au professeur remplaçant sur tous les sujets parce que la classe est restee silencieuse."],
  ['Grant says the volunteer coordinator must be organized because the sign-in sheet looked neat.', "Grant dit que la coordinatrice benevole doit etre organisee parce que la feuille d inscription etait nette."],
  ['Mila believes the neighbor is good with money because the garden is well kept.', "Mila croit que le voisin est bon avec l argent parce que le jardin est bien entretenu."],
  ['Owen thinks the editor knows literature deeply because the article was easy to read.', "Owen pense que le redacteur connait profondement la litterature parce que l article se lisait facilement."],
  ['Jin assumes the cashier is good at math because she gave the exact change quickly.', "Jin suppose que la caissiere est forte en calcul parce qu elle a rendu la monnaie exacte rapidement."],
  ['Pia says the event host must be talented in every area because the welcome speech was warm.', "Pia dit que l animatrice de l evenement doit etre talentueuse dans tous les domaines parce que le discours d accueil etait chaleureux."],
  ['Ben believes the tutor is excellent at motivating students because one student smiled.', "Ben croit que le tuteur est excellent pour motiver les eleves parce qu un eleve a souri."],
  ['Zoe thinks the shop owner is a great judge of character because the storefront looked inviting.', "Zoe pense que la proprietaire de la boutique a un excellent jugement des gens parce que la vitrine etait accueillante."],
  ['Ravi assumes the consultant is right about the whole project because the first slide looked professional.', "Ravi suppose que la consultante a raison sur tout le projet parce que la premiere diapositive avait l air professionnelle."],
  ['Sofia says the librarian must be brilliant because the reading list was helpful.', "Sofia dit que la bibliothecaire doit etre brillante parce que la liste de lecture etait utile."],
  ['Lara thinks the driver is kind and competent because they offered a seat to one passenger.', "Lara pense que le chauffeur est gentil et competent parce qu il a offert une place a un passager."],
  ['Cole assumes the presenter can explain anything because one example made sense.', "Cole suppose que le presentateur peut tout expliquer parce qu un exemple etait clair."],
  ['Maya says the chef must be a business expert because the meal sold out fast.', "Maya dit que le chef doit etre un expert en affaires parce que le repas s est vendu rapidement."],
  ['Ezra believes the class monitor is responsible about everything because the desk was tidy.', "Ezra croit que le delegue de classe est responsable dans tout parce que son bureau etait range."],
  ['Nora thinks the technician is good at communication because the update email was friendly.', "Nora pense que le technicien est bon en communication parce que le courriel de mise a jour etait sympathique."],
  ['Ari assumes the researcher is wise in general because the presentation had one strong slide.', "Ari suppose que le chercheur est sage de maniere generale parce que la presentation avait une diapositive forte."],
  ['Mina says the babysitter must be great at planning because the kids were happy.', "Mina dit que la baby-sitter doit etre tres douee pour planifier parce que les enfants etaient heureux."],
  ['Leo thinks the artist is also a skilled accountant because the gallery looked polished.', "Leo pense que l artiste est aussi un excellent comptable parce que la galerie avait l air bien presente."],
  ['Tara believes the neighbor can handle any conflict because they smiled during the meeting.', "Tara croit que le voisin peut gerer n importe quel conflit parce qu il a souri pendant la reunion."],
  ['Hana assumes the speaker is accurate on the facts because the delivery was confident.', "Hana suppose que l orateur est exact sur les faits parce que la presentation etait assuree."],
  ['Dylan says the new hire is dependable in every situation because they responded quickly once.', "Dylan dit que la nouvelle recrue est fiable dans toute situation parce qu elle a repondu vite une fois."],
  ['Penny believes the judge is fair about all issues because the ruling sounded balanced.', "Penny croit que le juge est juste sur tous les sujets parce que la decision semblait equilibree."],
  ['Grant assumes the driver is also a great teacher because the directions were clear.', "Grant suppose que le conducteur est aussi un excellent professeur parce que les indications etaient claires."],
  ['Bea says the volunteer is perfect for leadership because the event looked smooth.', "Bea dit que la benevole est parfaite pour le leadership parce que l evenement semblait fluide."],
  ['Kira thinks the professor is great at all advice because the office was neat.', "Kira pense que le professeur est bon pour tous les conseils parce que le bureau etait bien range."],
  ['Finn assumes the mechanic is a genius because the car started immediately.', "Finn suppose que le mecanicien est un genie parce que la voiture a demarre tout de suite."],
  ['Juno says the friend is wise about relationships because they gave one good compliment.', "Juno dit que l ami est sage en relations parce qu il a fait un seul compliment pertinent."],
  ['Olivia believes the principal is competent in every area because the announcement was smooth.', "Olivia croit que le directeur est competent dans tous les domaines parce que l annonce etait fluide."],
];

const OPTIONS_EN = ['Halo Effect', 'Egocentric Bias', 'False Consensus Effect', 'Bandwagon'];
const OPTIONS_FR = ['Effet de halo', 'Biais égocentrique', 'Effet de faux consensus', 'Effet de mode'];

function rotatedOptions(options: string[], correctIndex: number): string[] {
  const distractors = options.slice(1);
  const result = [...distractors];
  result.splice(correctIndex, 0, options[0]);
  return result;
}

function subLevelFor(index: number): SubLevel {
  if (index < 43) return SubLevel.BEGINNER;
  if (index < 50) return SubLevel.INTERMEDIATE;
  return SubLevel.EXPERT;
}

export const HALO_EFFECT_EXPANSION_EN: Question[] = SCENARIOS.map(([english], index) => {
  const correctIndex = index % 4;
  return {
    id: 37701 + index,
    level: 4,
    persona_stage: PersonaStage.CRAB,
    concept: 'Halo Effect',
    difficulty: index < 43 ? 1 : index < 50 ? 2 : 3,
    subLevel: subLevelFor(index),
    question: `Which bias is shown here?\n\n"${english}"`,
    options: rotatedOptions(OPTIONS_EN, correctIndex),
    correct_option_index: correctIndex,
    explanation: 'A strong impression in one area spills over and makes the person seem better in unrelated areas too.',
    detailedExplanationBeginner: 'One good impression makes everything else seem better too.',
    detailedExplanationIntermediate: 'A single positive trait or moment creates a glow effect, so unrelated qualities get judged more favorably than they should.',
    detailedExplanationExpert: 'This is the halo effect: a salient positive impression in one domain distorts judgment across other domains, even when there is no evidence for those extra conclusions.',
    questionFormat: 'standard',
  };
});

export const HALO_EFFECT_EXPANSION_FR: Question[] = SCENARIOS.map(([, french], index) => {
  const correctIndex = index % 4;
  return {
    id: 37701 + index,
    level: 4,
    persona_stage: PersonaStage.CRAB,
    concept: 'Effet de halo',
    difficulty: index < 43 ? 1 : index < 50 ? 2 : 3,
    subLevel: subLevelFor(index),
    question: `Quel biais est montré ici ?\n\n"${french}"`,
    options: rotatedOptions(OPTIONS_FR, correctIndex),
    correct_option_index: correctIndex,
    explanation: 'Une forte impression dans un domaine deborde et fait paraitre la personne meilleure dans d autres domaines aussi.',
    detailedExplanationBeginner: 'Une bonne impression fait paraitre tout le reste meilleur aussi.',
    detailedExplanationIntermediate: 'Un seul trait positif ou un seul moment positif cree un effet de halo, donc des qualites sans rapport sont jugees plus favorablement qu elles ne devraient l etre.',
    detailedExplanationExpert: 'C est l effet de halo : une impression positive saillante dans un domaine deforme le jugement dans d autres domaines, meme sans preuve pour ces conclusions additionnelles.',
    questionFormat: 'standard',
  };
});

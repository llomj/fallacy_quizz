import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["After asking Zoe to borrow a stapler, she ends up liking him more.", "Apres avoir demande a Zoe de lui preter une agrafeuse, il se retrouve a l'aimer davantage."],
  ["Mina does a small favor for the neighbor and then feels warmer toward them.", "Mina rend un petit service au voisin puis se sent plus bienveillante envers lui."],
  ["Leo asks a classmate for notes and suddenly thinks the classmate is nicer.", "Leo demande des notes a un camarade et pense soudain que ce camarade est plus sympa."],
  ["After helping at the fundraiser, Priya feels more attached to the organizer.", "Apres avoir aide a la collecte de fonds, Priya se sent plus attachee a l'organisateur."],
  ["A coworker loans Nora a pen, and Nora starts seeing her as more considerate.", "Une collegue prete un stylo a Nora, et Nora commence a la voir comme plus attentionnee."],
  ["Ben writes a recommendation for the new student and then likes the student more.", "Ben ecrit une recommandation pour le nouvel eleve puis finit par l'aimer davantage."],
  ["After carrying boxes for the team, Omar feels more loyal to the team lead.", "Apres avoir porte des cartons pour l'equipe, Omar se sent plus loyal envers le chef d'equipe."],
  ["Mia lends her charger to a neighbor and starts thinking the neighbor is sweet.", "Mia prete son chargeur a une voisine et commence a penser que la voisine est gentille."],
  ["Theo asks a friend to water the plants and then assumes the friend is extra trustworthy.", "Theo demande a un ami d'arroser les plantes puis suppose que cet ami est encore plus digne de confiance."],
  ["Jade signs a petition for the club and feels more positive about the club afterward.", "Jade signe une petition pour le club et se sent ensuite plus positive a son sujet."],
  ["After helping set up chairs, Eli thinks the event host is more likable.", "Apres avoir aide a installer les chaises, Eli pense que l'animateur de l'evenement est plus attachant."],
  ["Nina lends her bike pump to a stranger and then sees the stranger in a friendlier light.", "Nina prete sa pompe a velo a un inconnu et le voit ensuite d'un oeil plus amical."],
  ["Kai does a tiny favor for a neighbor and suddenly finds the neighbor less annoying.", "Kai rend un petit service a un voisin et trouve soudain ce voisin moins penible."],
  ["A student helps the teacher move books and then feels more respect for the teacher.", "Un eleve aide le professeur a deplacer des livres puis ressent plus de respect pour lui."],
  ["Maya asks a colleague to cover a minute of the desk, and the colleague starts seeming kinder.", "Maya demande a un collegue de surveiller le bureau une minute, et ce collegue parait ensuite plus gentil."],
  ["After helping with a community clean-up, Noah feels more proud of the group.", "Apres avoir aide au nettoyage du quartier, Noah se sent plus fier du groupe."],
  ["Zoe asks her brother to pass the remote, then decides he is more thoughtful.", "Zoe demande a son frere de lui passer la telecommande, puis decide qu'il est plus attentionne."],
  ["A parent asks the babysitter for an extra ten minutes and later trusts them more.", "Un parent demande a la baby-sitter dix minutes de plus et lui fait ensuite davantage confiance."],
  ["Rina lends a notebook to the class president and starts seeing the president as more competent.", "Rina prete un carnet au president de classe et commence a voir le president comme plus competent."],
  ["Owen asks a teammate for help carrying gear and then values the teammate more.", "Owen demande a un coequipier de l'aider a porter du materiel et finit par l'apprecier davantage."],
  ["After writing a short note for the receptionist, Talia feels more friendly toward them.", "Apres avoir ecrit une breve note pour la receptionniste, Talia se sent plus amicale envers elle."],
  ["Ethan does a small errand for his aunt and then thinks she is easier to like.", "Ethan rend une petite course pour sa tante et pense ensuite qu'elle est plus facile a aimer."],
  ["Lina helps her classmate remember homework and later assumes the classmate is more responsible.", "Lina aide son camarade a se rappeler ses devoirs et suppose ensuite qu'il est plus responsable."],
  ["After borrowing a cup of sugar, Cole feels more neighborly toward the neighbor.", "Apres avoir emprunte une tasse de sucre, Cole se sent plus voisin de son voisin."],
  ["A friend asks Juno to proofread one paragraph, and Juno starts liking the friend more.", "Une amie demande a Juno de relire un paragraphe, et Juno se met a l'aimer davantage."],
  ["Mina helps move a table and then thinks the host has better taste than before.", "Mina aide a deplacer une table et pense ensuite que l'hote a meilleur gout qu'avant."],
  ["After giving directions, Finn feels more positive about the tourist.", "Apres avoir donne son chemin, Finn se sent plus positif envers le touriste."],
  ["Priya lets a classmate borrow scissors and then sees them as more considerate.", "Priya prete des ciseaux a une camarade et la voit ensuite comme plus attentionnee."],
  ["Ben helps fix a stuck zipper and suddenly thinks the jacket owner is very likable.", "Ben aide a reparer une fermeture coincee et pense soudain que le proprietaire de la veste est tres sympathique."],
  ["A neighbor waters Aria's flowers, and Aria becomes more fond of the neighbor.", "Un voisin arrose les fleurs d'Aria, et Aria devient plus affectueuse envers le voisin."],
  ["After lending a spare phone cable, Sam feels more trusting toward the borrower.", "Apres avoir prete un cable de telephone de secours, Sam fait davantage confiance a l'emprunteur."],
  ["Mia asks a friend to hold her seat and then thinks the friend is unusually nice.", "Mia demande a une amie de lui garder sa place et pense ensuite que l'amie est particulierement gentille."],
  ["Omar helps a stranger load groceries and starts assuming the stranger is a good person.", "Omar aide un inconnu a charger des courses et commence a supposer que cet inconnu est quelqu'un de bien."],
  ["After filling in for five minutes, Zoe feels more loyal to the team.", "Apres avoir remplace quelqu'un pendant cinq minutes, Zoe se sent plus loyale envers l'equipe."],
  ["Kai lends a screwdriver and later thinks the borrower is more decent than average.", "Kai prete un tournevis puis pense que l'emprunteur est plus correct que la moyenne."],
  ["A student gets thanked for carrying folders and then feels more attached to the office staff.", "Un eleve est remercie d'avoir porte des dossiers et se sent ensuite plus attache au personnel du bureau."],
  ["Nora writes a quick reminder for a neighbor and then trusts the neighbor's judgment more.", "Nora ecrit un petit rappel pour une voisine et fait ensuite davantage confiance au jugement de la voisine."],
  ["After helping a friend choose a gift, Leo suddenly likes the friend more.", "Apres avoir aide un ami a choisir un cadeau, Leo l'aime soudain davantage."],
  ["Talia does a favor for the coach and then feels more positive about the coach's advice.", "Talia rend un service a l'entraineur et se sent ensuite plus positive envers ses conseils."],
  ["Mina waters a coworker's plant and starts thinking the coworker is kinder than she used to.", "Mina arrose la plante d'une collegue et commence a penser que cette collegue est plus gentille qu'avant."],
  ["Eli accepts a small request to print tickets and afterward rates the organizer more highly.", "Eli accepte une petite demande d'impression de billets et evalue ensuite l'organisateur plus favorablement."],
  ["After helping with cleanup, Priya feels more aligned with the group cause.", "Apres avoir aide au rangement, Priya se sent plus en accord avec la cause du groupe."],
  ["Theo lends a pen to a stranger and then assumes the stranger is respectful.", "Theo prete un stylo a un inconnu et suppose ensuite que cet inconnu est respectueux."],
  ["Jade passes on a message for a neighbor and starts believing the neighbor is dependable.", "Jade transmet un message pour une voisine et commence a croire que la voisine est fiable."],
  ["A friend asks Ben for a quick favor, and Ben's opinion of the friend improves.", "Un ami demande une petite faveur a Ben, et l'opinion de Ben sur l'ami s'ameliore."],
  ["Mia brings spare plates to a potluck and then thinks the host is more thoughtful.", "Mia apporte des assiettes de secours a un repas partage et pense ensuite que l'hote est plus attentionne."],
  ["After tutoring for ten minutes, Noah feels more kindness toward the student.", "Apres dix minutes de tutorat, Noah ressent plus de gentillesse envers l'eleve."],
  ["Zoe borrows a ladder and later describes the lender as unusually generous.", "Zoe emprunte une echelle et decrit ensuite le preteur comme particulierement genereux."],
  ["A teammate thanks Ava for a quick assist, and Ava feels more invested in the team.", "Une coequipiere remercie Ava pour une aide rapide, et Ava se sent plus investie dans l'equipe."],
  ["After helping move a couch, Luca sees the roommate as friendlier than before.", "Apres avoir aide a deplacer un canape, Luca voit le colocataire comme plus sympathique qu'avant."],
  ["Maya lends her spare umbrella to a coworker and afterward likes the coworker more.", "Maya prete son parapluie de secours a un collegue et l'aime davantage ensuite."],
  ["Theo helps carry a stack of books upstairs and starts feeling warmer toward the librarian.", "Theo aide a monter une pile de livres et commence a se sentir plus chaleureux envers la bibliothecaire."],
  ["Nina holds the elevator for a neighbor and then decides the neighbor seems nicer.", "Nina retient l'ascenseur pour une voisine et decide ensuite que la voisine a l'air plus gentille."],
  ["Ben lends his headphones for a bus ride and later sees the borrower as more considerate.", "Ben prete ses ecouteurs pour un trajet en bus et voit ensuite l'emprunteur comme plus attentionne."],
  ["Omar helps a teammate set up chairs and then trusts the teammate's judgment more.", "Omar aide un coequipier a installer les chaises et fait ensuite davantage confiance au jugement de ce coequipier."],
  ["Priya fills a water bottle for a classmate and afterward feels more positive about the classmate.", "Priya remplit une bouteille d'eau pour une camarade et se sent ensuite plus positive a propos de cette camarade."],
  ["Leo runs a quick errand for his aunt and later thinks she is easier to get along with.", "Leo fait une petite course pour sa tante et pense ensuite qu'il est plus facile de s'entendre avec elle."],
  ["Rina lets a neighbor borrow her bike lock and then judges the neighbor as more reliable.", "Rina laisse une voisine emprunter son antivol de velo et juge ensuite la voisine plus fiable."],
  ["Jules helps the club president move boxes and begins to admire the president more.", "Jules aide le president du club a deplacer des cartons et commence a admirer davantage le president."],
  ["Ava helps a friend carry lunch trays and later finds the friend much more likable.", "Ava aide une amie a porter des plateaux-repas et trouve ensuite cette amie beaucoup plus sympathique."]
];

const EN = ['Ben Franklin Effect', 'Halo Effect', 'Overgeneralization', 'False Dilemma'];
const FR = ['Effet Benjamin Franklin', 'Effet de halo', 'Generalisation abusive', 'Fausse dichotomie'];

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
      id: 32401 + i,
      level: 3,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Effet Benjamin Franklin' : 'Ben Franklin Effect',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel biais est illustré ici ?' : 'Which bias is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? FR : EN, c),
      correct_option_index: c,
      explanation: fr
        ? "Le fait d'aider quelqu'un peut rendre cette personne plus sympathique ou plus proche a nos yeux."
        : 'Doing a favor for someone can make that person feel more likable or closer to us.',
      detailedExplanationBeginner: fr
        ? "Aider peut augmenter l'affection."
        : 'Helping can increase affection.',
      detailedExplanationIntermediate: fr
        ? "Quand on rend service a quelqu'un, on peut reinterpretter nos propres sentiments et le voir plus positivement apres coup."
        : 'When we do someone a favor, we may reinterpret our own feelings and see them more positively afterward.',
      detailedExplanationExpert: fr
        ? "L'effet Benjamin Franklin montre que l'effort consenti pour aider peut reduire la dissonance cognitive et pousser a valoriser davantage la personne a qui l'on a rendu service."
        : 'The Ben Franklin effect shows that the effort spent helping can reduce cognitive dissonance and push us to value the person we helped more highly.',
      questionFormat: 'standard',
    };
  });
}

export const BEN_FRANKLIN_EFFECT_EXPANSION_EN: Question[] = make();
export const BEN_FRANKLIN_EFFECT_EXPANSION_FR: Question[] = make(true);

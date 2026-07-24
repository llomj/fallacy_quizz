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
  ,
  ["After Marta helps a classmate staple handouts, she starts thinking the classmate is genuinely nice.", "Apres que Marta aide un camarade a agrafer des feuilles, elle commence a penser que ce camarade est vraiment sympa."],
  ["Theo hands a coworker a spare marker and later feels surprisingly fond of the coworker.", "Theo tend un feutre de secours a un collegue et se sent ensuite etonnamment attaché a ce collegue."],
  ["Priya helps the neighbor carry recycling bags and then rates the neighbor as a better person than before.", "Priya aide la voisine a porter les sacs de recyclage puis considere cette voisine comme une meilleure personne qu'avant."],
  ["After helping organize the raffle table, Omar feels more respect for the event volunteer.", "Apres avoir aide a organiser la table de la tombola, Omar ressent plus de respect pour le benevole de l'evenement."],
  ["Mia lends her charger to a stranger on the train and decides the stranger seems unusually decent.", "Mia prete son chargeur a un inconnu dans le train et decide que cet inconnu a l'air particulierement correct."],
  ["Ben helps a teammate carry water bottles and later thinks the teammate is easier to trust.", "Ben aide un coequipier a porter des bouteilles d'eau et pense ensuite que ce coequipier est plus facile a croire."],
  ["After writing a quick reference note, Nina feels warmer toward the applicant.", "Apres avoir redige une breve note de recommandation, Nina se sent plus chaleureuse envers le candidat."],
  ["Zoe agrees to watch the desk for five minutes and then thinks the receptionist is very considerate.", "Zoe accepte de surveiller le bureau pendant cinq minutes et pense ensuite que la receptionniste est tres attentionnee."],
  ["A student helps move chairs for the school play and comes away liking the director more.", "Un eleve aide a deplacer des chaises pour la piece de l'ecole et en ressort avec plus d'affection pour le metteur en scene."],
  ["After lending a pencil to a classmate, Eli thinks the classmate is more respectful than he expected.", "Apres avoir prete un crayon a un camarade, Eli pense que le camarade est plus respectueux qu'il ne l'avait imagine."],
  ["A neighbor asks Jade to sign a parcel slip, and Jade ends up seeing the neighbor as friendlier.", "Une voisine demande a Jade de signer un bordereau de colis, et Jade finit par voir la voisine comme plus amicale."],
  ["After helping carry props backstage, Noah feels more loyal to the theater crew.", "Apres avoir aide a porter des accessoires en coulisses, Noah se sent plus loyal envers l'equipe du theatre."],
  ["Rina hands over a spare umbrella to a colleague and later likes the colleague more.", "Rina remet un parapluie de secours a une collegue et l'aime ensuite davantage."],
  ["Owen helps a friend fix a jammed zipper and suddenly feels more positive toward the friend.", "Owen aide un ami a reparer une fermeture bloqueee et ressent soudain quelque chose de plus positif envers lui."],
  ["After carrying a stack of menus, Talia thinks the cafe owner is more thoughtful.", "Apres avoir porte une pile de menus, Talia pense que le proprietaire du cafe est plus attentionne."],
  ["Mina lends a spare keycard to the front desk and then trusts the staff member more.", "Mina prete une carte d'acces de secours a la reception et fait ensuite davantage confiance a la personne du personnel."],
  ["After helping pack donation boxes, Cole feels more attached to the charity organizer.", "Apres avoir aide a emballer des boites de dons, Cole se sent plus attache a l'organisateur de la charite."],
  ["Finn helps a neighbor lift a bike up the stairs and then decides the neighbor is a solid person.", "Finn aide un voisin a monter un velo dans les escaliers et decide ensuite que ce voisin est quelqu'un de solide."],
  ["Juno passes along a message for the office manager and later feels less annoyed by the manager.", "Juno transmet un message pour la responsable du bureau et se sent ensuite moins agacee par la responsable."],
  ["After helping set up the foldout tables, Lily sees the event host as kinder.", "Apres avoir aide a installer les tables pliantes, Lily voit l'hote de l'evenement comme plus gentil."],
  ["Theo lends a spare notebook to a workshop attendee and then feels more admiration for the attendee.", "Theo prete un carnet de secours a un participant de l'atelier et ressent ensuite plus d'admiration pour lui."],
  ["Maya helps the librarian sort returns and later thinks the librarian is more likable.", "Maya aide la bibliothecaire a trier les retours et pense ensuite que la bibliothecaire est plus sympathique."],
  ["After delivering a forgotten lunch, Sam starts viewing the coworker as more appreciative.", "Apres avoir apporte un dejeuner oublie, Sam commence a voir le collegue comme plus reconnaissant."],
  ["Nora helps a classmate carry art supplies and then feels closer to the classmate.", "Nora aide un camarade a porter du materiel d'art et se sent ensuite plus proche de ce camarade."],
  ["Ava writes a quick thank-you note for the club president and ends up thinking better of the president.", "Ava ecrit une breve note de remerciement pour le president du club et finit par mieux penser au president."],
  ["After holding the door for the delivery driver, Lucas feels the driver is more decent than expected.", "Apres avoir tenu la porte au livreur, Lucas estime que le livreur est plus correct que prevu."],
  ["Priya helps a teammate reset the projector and later feels more invested in the team.", "Priya aide un coequipier a reinitialiser le projecteur et se sent ensuite plus impliquee dans l'equipe."],
  ["After loaning a stapler, Ethan thinks the borrower is easier to like.", "Apres avoir prete une agrafeuse, Ethan pense que l'emprunteur est plus facile a aimer."],
  ["Zara helps the class monitor gather worksheets and then feels more trust in the monitor.", "Zara aide le delegue de classe a ramasser les fiches et fait ensuite davantage confiance au delegue."],
  ["Omar helps carry the folding screen and then finds the organizer more pleasant.", "Omar aide a porter le paravent pliant et trouve ensuite l'organisateur plus agreable."],
  ["After giving a quick ride home, Mia thinks the neighbor has better intentions than she assumed.", "Apres avoir ramené rapidement un voisin chez lui, Mia pense que ce voisin a de meilleures intentions qu'elle ne le croyait."],
  ["Ben helps clean the whiteboard and later likes the teacher more.", "Ben aide a nettoyer le tableau blanc et aime ensuite davantage le professeur."],
  ["After fetching tape for the craft table, Nina feels more fond of the volunteer coordinator.", "Apres avoir apporte du ruban adhesif pour la table d'artisanat, Nina se sent plus affectueuse envers la coordinatrice des benevoles."],
  ["Jules helps carry boxes to the basement and then trusts the homeowner's judgment more.", "Jules aide a porter des cartons au sous-sol et fait ensuite plus confiance au jugement du proprietaire."],
  ["A neighbor borrows a broom from Elena, and Elena later sees the neighbor as friendlier.", "Une voisine emprunte un balai a Elena, et Elena voit ensuite la voisine comme plus sympathique."],
  ["After lending a phone cord, Noah ends up feeling more positive about the borrower.", "Apres avoir prete un cordon de telephone, Noah finit par ressentir plus de positivite envers l'emprunteur."],
  ["Rina helps stack programs for the concert and then admires the organizer more.", "Rina aide a empiler les programmes pour le concert et admire ensuite davantage l'organisatrice."],
  ["Theo carries the extra water cooler and starts thinking the team captain is more dependable.", "Theo porte le distributeur d'eau supplementaire et commence a penser que le capitaine de l'equipe est plus fiable."],
  ["After helping set up a booth, Priya feels more loyal to the festival crew.", "Apres avoir aide a monter un stand, Priya se sent plus loyale envers l'equipe du festival."],
  ["Luca helps a friend hold a ladder steady and later sees the friend as more caring.", "Luca aide un ami a tenir une echelle et voit ensuite cet ami comme plus attentionne."],
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

import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["Jade proudly shares a joke, not realizing she heard it on a podcast last week.", "Jade raconte fièrement une blague sans réaliser qu'elle l'a entendue dans un podcast la semaine dernière."],
  ["Sam thinks he invented the lunch idea, but it was actually his coworker's suggestion from yesterday.", "Sam pense avoir inventé l'idée du déjeuner, mais c'était en fait la suggestion de son collègue d'hier."],
  ["Mia writes a slogan and only later remembers seeing almost the same line on a poster.", "Mia écrit un slogan et ne se souvient que plus tard avoir vu presque la même phrase sur une affiche."],
  ["Omar is sure the melody is original until a friend points out it sounds familiar.", "Omar est sûr que la mélodie est originale jusqu'à ce qu'un ami remarque qu'elle sonne familièrement."],
  ["Priya thinks she came up with the tip herself, forgetting her sister said it first.", "Priya pense avoir trouvé l'astuce elle-même, en oubliant que sa sœur l'avait dite en premier."],
  ["Ben posts a clever line and later realizes it was the title of an article he read.", "Ben publie une phrase intelligente et se rend ensuite compte que c'était le titre d'un article lu auparavant."],
  ["Ava believes she made up the joke, but it was from a group chat she scrolled past.", "Ava croit avoir inventé la blague, mais elle venait d'un groupe de discussion qu'elle avait parcouru."],
  ["Leo says the sales idea was his, not remembering the workshop where he heard it.", "Leo dit que l'idée de vente était la sienne, sans se rappeler l'atelier où il l'avait entendue."],
  ["Nina thinks she discovered the phrase, then finds it in a book she read last month.", "Nina pense avoir découvert la phrase, puis la retrouve dans un livre lu le mois dernier."],
  ["Theo believes the shortcut trick is new, even though a coworker showed him the same trick earlier.", "Theo croit que l'astuce du raccourci est nouvelle, alors qu'un collègue lui a montré la même astuce plus tôt."],
  ["Mina shares a recipe tweak and forgets she learned it from a cooking video.", "Mina partage une modification de recette et oublie qu'elle l'a apprise dans une vidéo de cuisine."],
  ["Kai thinks the idea came to him in the shower, but it was a replay of a news segment.", "Kai pense que l'idée lui est venue sous la douche, mais c'était la répétition d'un reportage."],
  ["Aria is convinced she coined the word, then sees it in a comment she liked yesterday.", "Aria est convaincue d'avoir inventé le mot, puis le voit dans un commentaire aimé la veille."],
  ["Noah remembers the advice as his own, not the advice his dad gave him during dinner.", "Noah se souvient du conseil comme étant le sien, pas celui que son père lui a donné au dîner."],
  ["Zoe tells friends a new study hack, forgetting she copied it from a study group handout.", "Zoe raconte à ses amis une nouvelle astuce d'étude, oubliant qu'elle l'avait copiée sur une fiche de groupe."],
  ["Milo thinks the slogan is his original idea, but it came from a billboard on his commute.", "Milo pense que le slogan est son idée originale, mais il venait d'un panneau publicitaire sur son trajet."],
  ["Lina is sure she wrote the punchline, though she heard it in a comedy clip the day before.", "Lina est sûre d'avoir écrit la chute, alors qu'elle l'avait entendue dans un extrait comique la veille."],
  ["Eli forgets that the security tip was explained in the training video before he repeated it.", "Eli oublie que le conseil de sécurité a été expliqué dans la vidéo de formation avant qu'il ne le répète."],
  ["Tara thinks her cleaning trick is genius until she remembers reading it on a blog.", "Tara pense que son astuce de nettoyage est géniale jusqu'à ce qu'elle se rappelle l'avoir lue sur un blog."],
  ["Owen claims the playlist title came from him, not from the party invitation he saw.", "Owen affirme que le titre de la playlist vient de lui, et non de l'invitation à la fête qu'il a vue."],
  ["Rina believes she found a fresh way to phrase the policy, but it matches the memo almost exactly.", "Rina croit avoir trouvé une nouvelle manière de formuler la politique, mais cela correspond presque exactement au mémo."],
  ["Ben thinks he invented the shortcut, then remembers the old forum post where he learned it.", "Ben pense avoir inventé le raccourci, puis se souvient de l'ancien message du forum où il l'a appris."],
  ["Mia shares a productivity tip and later realizes it was a quote from a coach.", "Mia partage un conseil de productivité et se rend plus tard compte que c'était une citation d'un coach."],
  ["Theo is certain the design idea is original until he spots it in his saved images.", "Theo est certain que l'idée de design est originale jusqu'à ce qu'il la repère dans ses images enregistrées."],
  ["Ava thinks she made up the warning phrase, but it was on the packaging she skimmed.", "Ava pense avoir inventé la phrase d'avertissement, mais elle figurait sur l'emballage qu'elle avait survolé."],
  ["Leo believes the music review line is his, forgetting he copied it from a friend text.", "Leo croit que la phrase de critique musicale est la sienne, oubliant qu'il l'a copiée d'un message d'ami."],
  ["Nina says the new app slogan was her brainstorm, not the newsletter headline she saw.", "Nina dit que le nouveau slogan de l'application venait de son cerveau, pas du titre de newsletter qu'elle a vu."],
  ["Priya remembers a safety rule as if she made it up, but she had heard it in class.", "Priya se souvient d'une règle de sécurité comme si elle l'avait inventée, mais elle l'avait entendue en classe."],
  ["Finn thinks the phrase is his, then finds the same wording in a forum reply.", "Finn pense que la phrase est à lui, puis retrouve la même formulation dans une réponse de forum."],
  ["Mina believes she invented the joke, but it was in a meme she laughed at last night.", "Mina croit avoir inventé la blague, mais elle était dans un meme qui l'a fait rire la nuit précédente."],
  ["Kai says the idea for the team name came from him, though it was printed on a flyer.", "Kai dit que l'idée du nom d'équipe vient de lui, alors qu'elle était imprimée sur un prospectus."],
  ["Aria thinks she coined the phrase, not remembering the caption she read before dinner.", "Aria pense avoir inventé la phrase, sans se rappeler la légende qu'elle a lue avant le dîner."],
  ["Noah is sure the travel tip is his own, even though his sister said it first.", "Noah est sûr que le conseil de voyage est le sien, même si sa sœur l'avait dit en premier."],
  ["Zoe shares a quote and later realizes it was on a mug at the office.", "Zoe partage une citation et réalise plus tard qu'elle était sur une tasse au bureau."],
  ["Milo claims the joke is brand new, but it was already in the group thread.", "Milo affirme que la blague est toute nouvelle, mais elle figurait déjà dans le fil de groupe."],
  ["Lina thinks she invented the cooking tip until she sees it in a saved reel.", "Lina pense avoir inventé l'astuce de cuisine jusqu'à ce qu'elle la voie dans une vidéo enregistrée."],
  ["Eli says the work hack is his, forgetting the article he just skimmed.", "Eli dit que l'astuce de travail est la sienne, oubliant l'article qu'il vient de parcourir."],
  ["Tara believes the slogan is original, but the same wording was on a tote bag.", "Tara croit que le slogan est original, mais la même formulation figurait sur un sac en toile."],
  ["Owen is sure he invented the phrase, then notices it in a caption from yesterday.", "Owen est sûr d'avoir inventé la phrase, puis la remarque dans une légende d'hier."],
  ["Rina thinks the advice was hers, but it came from the meeting notes.", "Rina pense que le conseil venait d'elle, mais il provenait des notes de réunion."],
  ["Ben remembers the idea as brand new and forgets the newsletter that inspired it.", "Ben se souvient de l'idée comme étant totalement nouvelle et oublie la newsletter qui l'a inspirée."],
  ["Mia says the caption was her own joke, not the tweet she copied by accident.", "Mia dit que la légende était sa propre blague, et non le tweet qu'elle a copié par accident."],
  ["Theo thinks he made up the phrase, but it was on the back of the cereal box.", "Theo pense avoir inventé la phrase, mais elle était au dos de la boîte de céréales."],
  ["Ava is sure the solution is hers until she hears it in a podcast segment.", "Ava est sûre que la solution vient d'elle jusqu'à ce qu'elle l'entende dans un segment de podcast."],
  ["Leo claims the naming idea is his, not the one he heard at a meetup.", "Leo prétend que l'idée du nom est la sienne, pas celle qu'il a entendue lors d'une rencontre."],
  ["Nina says the fitness tip was her discovery, forgetting the trainer's class.", "Nina dit que le conseil fitness était sa découverte, oubliant le cours du coach."],
  ["Priya thinks the phrase is fresh, then realizes she saw it in a newsletter header.", "Priya pense que la phrase est nouvelle, puis réalise qu'elle l'a vue dans un titre de newsletter."],
  ["Finn believes the joke is original, but it was already in his saved bookmarks.", "Finn croit que la blague est originale, mais elle était déjà dans ses favoris enregistrés."],
  ["Mia is convinced she coined the phrase, then finds it in a note from last week.", "Mia est convaincue d'avoir inventé la phrase, puis la retrouve dans une note de la semaine dernière."],
  ["Theo thinks his slogan came from nowhere, forgetting the flyer he copied by memory.", "Theo pense que son slogan est sorti de nulle part, en oubliant le prospectus qu'il a recopié de mémoire."],
];

const EN = ['Cryptomnesia', 'False Memory', 'Confirmation Bias', 'Anecdotal Fallacy'];
const FR = ['Cryptomnésie', 'Faux souvenir', 'Biais de confirmation', 'Fausse anecdote'];

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
      id: 33101 + i,
      level: 4,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Cryptomnésie' : 'Cryptomnesia',
      difficulty: i < 17 ? 1 : i < 34 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? FR : EN, c),
      correct_option_index: c,
      explanation: fr
        ? "Un souvenir est repris comme une idee nouvelle alors qu'il a deja ete entendu ou lu."
        : 'A memory is mistaken for a new idea even though it was already heard or read before.',
      detailedExplanationBeginner: fr
        ? "On croit inventer quelque chose qu'on a seulement oublie."
        : 'You think you invented something you actually just forgot.',
      detailedExplanationIntermediate: fr
        ? "La cryptomnesie fait paraitre une idee originale alors qu'elle vient d'un souvenir oublie de sa source."
        : 'Cryptomnesia makes an idea seem original when it comes from a forgotten memory of its source.',
      detailedExplanationExpert: fr
        ? "Ce n'est pas un mensonge volontaire; c'est une confusion de source ou une perte de contexte, souvent renforcee par la familiarite et la repetition."
        : 'This is not a deliberate lie; it is a source confusion or loss of context, often reinforced by familiarity and repetition.',
      questionFormat: 'standard',
    };
  });
}

export const CRYPTOMNESIA_EXPANSION_EN: Question[] = make();
export const CRYPTOMNESIA_EXPANSION_FR: Question[] = make(true);

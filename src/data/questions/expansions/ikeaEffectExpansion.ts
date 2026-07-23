import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['After building her own bookshelf, Mina values it more than a nicer store-bought one.', "Apres avoir monte sa propre bibliotheque, Mina la valorise plus qu une version achetee en magasin plus jolie."],
  ['Leo feels proud of the coffee table he assembled and refuses to replace it, even though it wobbles.', "Leo est fier de la table basse qu il a assemblee et refuse de la remplacer, meme si elle branle."],
  ['Nina thinks the app she spent three hours customizing is better than the cleaner default version.', "Nina pense que l application qu elle a personnalisee pendant trois heures est meilleure que la version par defaut plus nette."],
  ['After making the cake from scratch, Owen says it tastes better than the bakery cake everyone likes.', "Apres avoir fait le gateau lui-meme, Owen dit qu il a meilleur gout que le gateau de la boulangerie que tout le monde aime."],
  ['Tara keeps the hand-painted mug she made in class and calls it her favorite mug.', "Tara garde la tasse peinte a la main qu elle a faite en cours et l appelle sa tasse preferee."],
  ['Ben believes the garden bed he built is more impressive than the professionally built one next to it.', "Ben croit que le bac de jardin qu il a construit est plus impressionnant que celui construit par un pro a cote."],
  ['After wiring the lamp himself, Kai is convinced it is worth more than the store model.', "Apres avoir branche la lampe lui-meme, Kai est convaincu qu elle vaut plus que le modele du magasin."],
  ['Maya rates the scrapbook she spent all weekend on higher than any bought album.', "Maya note le scrapbooking sur lequel elle a passe tout son week-end plus haut que n importe quel album achete."],
  ['Oli prefers the shelf he painted badly because he made it himself.', "Oli prefere l etagere qu il a mal peinte parce qu il l a faite lui-meme."],
  ['Jade says the sandwich she assembled tastes better than the café version, mostly because she made it.', "Jade dit que le sandwich qu elle a prepare a meilleur gout que la version du cafe, surtout parce qu elle l a faite elle-meme."],
  ['After sewing one pillow cover, Finn thinks it belongs in the living room more than the store-bought one.', "Apres avoir cousu une housse de coussin, Finn pense qu elle a plus sa place dans le salon que celle achetee en magasin."],
  ['Priya loves the chair she sanded and painted, even though the untouched chair is more comfortable.', "Priya adore la chaise qu elle a poncee et peinte, meme si la chaise intacte est plus confortable."],
  ['Grant argues that the playlist he ordered by hand is superior because it took effort to make.', "Grant soutient que la playlist qu il a classee a la main est meilleure parce qu elle a demande des efforts."],
  ['Zara feels the poster she designed in an afternoon is more meaningful than the polished print shop version.', "Zara pense que l affiche qu elle a dessinee en une apres-midi est plus significative que la version imprimee plus polie."],
  ['After assembling a bike rack, Theo keeps saying the rack is "his" in a special way.', "Apres avoir assemble un porte-velos, Theo continue de dire que le porte-velos est « a lui » d une facon speciale."],
  ['Milo is attached to the custom shelf he built, even though it is crooked.', "Milo tient a l etagere sur mesure qu il a construite, meme si elle est de traviole."],
  ['Nora rates her homemade costume higher than the rented one because she spent nights on it.', "Nora note son costume fait maison plus haut que celui loue parce qu elle y a passe des nuits."],
  ['Eli defends the garden sculpture he made from scrap wood as if effort alone proves quality.', "Eli defend la sculpture de jardin qu il a faite en bois de recuperation comme si l effort prouvait a lui seul la qualite."],
  ['Ava prefers the hand-bound notebook she made over the smoother notebook from the store.', "Ava prefere le carnet relie a la main qu elle a fabrique au carnet plus lisse du magasin."],
  ['Cole says the wall shelf he installed is great because he put it together himself.', "Cole dit que l etagere murale qu il a installee est excellente parce qu il l a montee lui-meme."],
  ['After building a birdhouse, Lena becomes emotionally attached and refuses to compare it fairly.', "Apres avoir construit un nichoir, Lena devient emotivement attachee et refuse de le comparer justement."],
  ['Sam believes the note cards he wrote by hand are better study tools than the printed ones.', "Sam croit que les fiches qu il a ecrites a la main sont de meilleurs outils d etude que les imprimees."],
  ['Mina likes the lamp she rewired because she "knows every screw."', "Mina aime la lampe qu elle a re-cablee parce qu elle « connait chaque vis »."],
  ['Hugo thinks the shelf he designed in a hurry deserves praise simply for being his.', "Hugo pense que l etagere qu il a imaginee a la va-vite merite des eloges simplement parce qu elle est de lui."],
  ['Rita feels the poster she made in class is more artistic than the professionally printed one.', "Rita pense que l affiche qu elle a faite en classe est plus artistique que celle imprimee par un pro."],
  ['After assembling the desk, Owen treats it like a family heirloom.', "Apres avoir assemble le bureau, Owen le traite comme un heritage familial."],
  ['Juno is attached to the custom game she coded, even though it still has bugs.', "Juno tient a son jeu personnalise qu elle a code, meme s il a encore des bugs."],
  ['Tia insists the clay bowl she molded is beautiful because she made it with care.', "Tia insiste pour dire que le bol en argile qu elle a modele est beau parce qu elle l a fait avec soin."],
  ['After painting the hallway, Ben thinks every viewer should admire the brush marks.', "Apres avoir peint le couloir, Ben pense que chaque visiteur devrait admirer les traces de pinceau."],
  ['Maya values the sticker book she built from scratch more than her sister does.', "Maya valorise le carnet d autocollants qu elle a cree de zero plus que sa soeur."],
  ['Theo thinks the rough chair he built out of pallets is worth keeping because it took work.', "Theo pense que la chaise brute qu il a fabriquee avec des palettes vaut la peine d etre gardee parce qu elle a demande du travail."],
  ['Lina likes the hand-carved spoon she made better than the smoother shop version.', "Lina prefere la cuillere taillee a la main qu elle a faite a la version plus lisse du magasin."],
  ['After fixing the shelf herself, Priya calls it "better than new."', "Apres avoir reparé l etagere elle-meme, Priya l appelle « meilleure que neuve »."],
  ['Grant is proud of the pizza he made and rates it higher than the pizzeria slice.', "Grant est fier de la pizza qu il a faite et la note plus haut que la part de pizzeria."],
  ['Zoe says the board game she redesigned is special because it came from her own ideas.', "Zoe dit que le jeu de societe qu elle a redesigné est special parce qu il vient de ses propres idees."],
  ['Oli values the desk organizer he 3D-printed more because he spent an evening on it.', "Oli valorise davantage l organiseur de bureau qu il a imprime en 3D parce qu il y a passe une soiree."],
  ['Finn refuses to swap out the crooked frame he made because it is "his work."', "Finn refuse de remplacer le cadre de travers qu il a fait parce que c est « son travail »."],
  ['Mina thinks the deck she stained herself looks better than the professionally finished one.', "Mina pense que le pont qu elle a teint elle-meme est plus beau que celui fini par un pro."],
  ['Ari likes the candle holder he carved, even though the store option is safer.', "Ari aime le porte-bougie qu il a taille, meme si l option du magasin est plus sure."],
  ['Nora says the sketchbook she personalized is priceless because she made every page choice.', "Nora dit que le carnet de croquis qu elle a personnalise est inestimable parce qu elle a choisi chaque page."],
  ['After building a tiny table, Leo treats it like a masterpiece.', "Apres avoir construit une petite table, Leo la traite comme un chef-d oeuvre."],
  ['Pia prefers the messy scarf she knitted because it came from her own effort.', "Pia prefere l echarpe maladroite qu elle a tricotee parce qu elle vient de son propre effort."],
  ['Milo insists the repaired bike is better than the new one because he fixed it.', "Milo insiste pour dire que le velo repare est meilleur que le neuf parce qu il l a reparé."],
  ['Tara is proud of the collage she made and downplays any flaws.', "Tara est fiere du collage qu elle a fait et minimise les defauts."],
  ['Jade values the desk she assembled at home more than the stronger one in the store.', "Jade valorise le bureau qu elle a monte chez elle plus que celui du magasin, pourtant plus solide."],
  ['Evan says the custom shelves are perfect because he spent all Saturday on them.', "Evan dit que les etageres sur mesure sont parfaites parce qu il y a passe tout son samedi."],
  ['Rina gets attached to the cake she decorated herself and refuses objective feedback.', "Rina s attache au gateau qu elle a decoore elle-meme et refuse un avis objectif."],
  ['Noah believes his homemade sign is more persuasive than a clearer printed one.', "Noah croit que son panneau fait maison est plus persuasif qu un panneau imprime plus clair."],
  ['Hana thinks the jacket she altered is worth more because she personally changed it.', "Hana pense que la veste qu elle a retouchee vaut plus parce qu elle l a modifiee elle-meme."],
];

const OPTIONS_EN = ['IKEA Effect', 'Effort Justification', 'Endowment Effect', 'Sunk Cost Fallacy'];
const OPTIONS_FR = ['Effet IKEA', 'Justification par l effort', 'Effet de dotation', 'Biais des couts irrécupérables'];

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
      id: 35301 + i,
      level: 3,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Effet IKEA' : 'IKEA Effect',
      difficulty: i < 43 ? 1 : i < 50 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? OPTIONS_FR : OPTIONS_EN, c),
      correct_option_index: c,
      explanation: fr
        ? "On valorise trop ce qu on a fabriqué soi-meme simplement parce qu on y a mis des efforts."
        : 'People overvalue what they built themselves simply because they put effort into it.',
      detailedExplanationBeginner: fr
        ? 'Faire soi-meme quelque chose le fait paraitre meilleur qu il ne l est.'
        : 'Making something yourself makes it feel better than it is.',
      detailedExplanationIntermediate: fr
        ? "L effet IKEA arrive quand l effort personnel gonfle artificiellement la valeur percue d un objet ou d une idee."
        : 'The IKEA effect happens when personal effort artificially inflates the perceived value of an object or idea.',
      detailedExplanationExpert: fr
        ? "Ce biais melange investissement d effort, sentiment d appartenance et evaluation; la valeur ressentie monte sans que la qualite objective augmente forcement."
        : 'This bias mixes effort investment, ownership, and evaluation; felt value rises without the objective quality necessarily improving.',
      questionFormat: 'standard',
    };
  });
}

export const IKEA_EFFECT_EXPANSION_EN: Question[] = make();
export const IKEA_EFFECT_EXPANSION_FR: Question[] = make(true);

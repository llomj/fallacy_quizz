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
  ['Maya rates the flower arrangement she made higher than the professional one next to it.', "Maya note la composition florale qu elle a faite plus haut que celle du professionnel a cote."],
  ['Ben refuses to replace the lopsided shelf because he built it with his own hands.', "Ben refuse de remplacer l etagere bancale parce qu il l a construite de ses propres mains."],
  ['Priya thinks the notebook she decorated is the best one on the desk because it took effort.', "Priya pense que le carnet qu elle a decoore est le meilleur sur le bureau parce qu il a demande des efforts."],
  ['Leo values the hand-painted sign more than the cleaner printed sign across the room.', "Leo valorise le panneau peint a la main plus que le panneau imprime plus net de l autre cote de la piece."],
  ['Nina keeps the homemade organizer even though the store version is sturdier.', "Nina garde l organiseur fait maison meme si la version du magasin est plus solide."],
  ['Owen says the pie he baked is better than the bakery pie because he made it himself.', "Owen dit que la tarte qu il a cuite est meilleure que celle de la boulangerie parce qu il l a faite lui-meme."],
  ['Ava loves the stitched pillow cover she made and ignores the straight seams on the store one.', "Ava adore la housse de coussin qu elle a cousue et ignore les coutures droites de celle du magasin."],
  ['Rita thinks the DIY lamp is worth keeping because she spent hours wiring it.', "Rita pense que la lampe bricolée vaut la peine d etre gardee parce qu elle a passe des heures a la cabler."],
  ['Jules rates the custom board game higher because he invented the rules.', "Jules note le jeu de societe personnalise plus haut parce qu il a invente les regles."],
  ['Mina insists the repaired drawer is nicer now because she fixed it herself.', "Mina insiste pour dire que le tiroir repare est maintenant plus beau parce qu elle l a repare elle-meme."],
  ['Eli prefers the handmade mug because it feels more valuable than the factory one.', "Eli prefere la tasse faite main parce qu elle lui semble plus precieuse que celle d usine."],
  ['Maya says the paper lantern she folded is prettier because she spent all evening on it.', "Maya dit que la lanterne en papier qu elle a pliee est plus jolie parce qu elle y a passe toute la soiree."],
  ['Leo insists the wobbly stool is special because he put it together himself.', "Leo insiste pour dire que le tabouret bancal est special parce qu il l a monte lui-meme."],
  ['Nina rates her hand-painted tote higher than a cleaner store bag just because it is hers.', "Nina note son sac peint a la main plus haut qu un sac de magasin plus propre simplement parce qu il est a elle."],
  ['Owen believes the shelf he built is more useful than the sturdier one because he made the first one.', "Owen croit que l etagere qu il a construite est plus utile que la plus solide parce qu il a fait la premiere."],
  ['Priya thinks the scrapbook page she arranged is precious because she chose every sticker.', "Priya pense que la page de scrapbooking qu elle a arrangee est precieuse parce qu elle a choisi chaque autocollant."],
  ['Ben says the custom lamp shade is better because he cut the fabric himself.', "Ben dit que l abat-jour personnalise est meilleur parce qu il a coupe le tissu lui-meme."],
  ['Tara keeps the crooked photo frame because it reminds her of the work she did.', "Tara garde le cadre de photo de travers parce qu il lui rappelle le travail qu elle a fait."],
  ['Kai values the handmade notebook divider more than the neat printed tabs from the store.', "Kai valorise le separateur de carnet fait main plus que les onglets imprimés bien nets du magasin."],
  ['Jules thinks the pizza he assembled at home tastes better since he made it from scratch.', "Jules pense que la pizza qu il a assemblee chez lui a meilleur gout puisqu il l a faite de zero."],
  ['Ava prefers the shelf she painted herself even though the store shelf is straighter.', "Ava prefere l etagere qu elle a peinte elle-meme meme si l etagere du magasin est plus droite."],
  ['Noah says the wall sign is more meaningful because he spent all afternoon lettering it.', "Noah dit que le panneau mural est plus significatif parce qu il a passe tout l apres-midi a le lettrer."],
  ['Mina treats the stitched cushion cover like a treasure because she sewed every seam.', "Mina traite la housse de coussin cousue comme un tresor parce qu elle a cousu chaque couture."],
  ['Eli rates the repaired chair higher than the new one because he fixed the broken leg.', "Eli note la chaise reparee plus haut que la neuve parce qu il a reparé la jambe cassée."],
  ['Rina says the desk organizer she 3D-printed is better because it came from her idea.', "Rina dit que l organiseur de bureau qu elle a imprime en 3D est meilleur parce qu il vient de son idee."],
  ['Hugo feels his hand-drawn menu is nicer than the design studio version because he made it.', "Hugo trouve que son menu dessine a la main est plus joli que la version du studio de design parce qu il l a fait."],
  ['Lina keeps the imperfect flower pot she glazed because she made it with care.', "Lina garde le pot de fleurs imparfait qu elle a emaille parce qu elle l a fait avec soin."],
  ['Grant argues that the hand-built stand is worth more since he spent the weekend on it.', "Grant soutient que le support construit a la main vaut plus parce qu il y a passe le week-end."],
  ['Zoe prefers the homemade planner because she filled in every page herself.', "Zoe prefere l agenda maison parce qu elle a rempli chaque page elle-meme."],
  ['Milo says the repaired radio sounds better because he spent time fixing it.', "Milo dit que la radio reparee sonne mieux parce qu il a passe du temps a la reparer."],
  ['Theo thinks the custom poster deserves praise because he arranged every piece.', "Theo pense que l affiche personnalisee merite des eloges parce qu il a arrange chaque morceau."],
  ['Pia rates the hand-bound journal above the factory notebook because she bound it.', "Pia note le journal relie a la main au-dessus du carnet d usine parce qu elle l a relie."],
  ['Finn says the tray he sanded is nicer because he transformed it himself.', "Finn dit que le plateau qu il a ponce est plus beau parce qu il l a transforme lui-meme."],
  ['Maya feels the drawer handle she installed is better than the original because she put it on.', "Maya pense que la poignee de tiroir qu elle a installee est meilleure que l originale parce qu elle l a posee."],
  ['Sam insists the art project is more special because he stayed up finishing it.', "Sam insiste pour dire que le projet d art est plus special parce qu il est reste eveille pour le finir."],
  ['Juno prefers the DIY coat rack because every hook is one she attached herself.', "Juno prefere le portemanteau bricolé parce que chaque crochet est celui qu elle a fixé elle-meme."],
  ['Iris says the home-made sign is more persuasive because she lettered each word.', "Iris dit que le panneau fait maison est plus persuasif parce qu elle a trace chaque mot."],
  ['Cole values the kitchen shelf more after drilling it himself, even though the store shelf is better.', "Cole valorise davantage l etagere de cuisine apres l avoir percee lui-meme, meme si l etagere du magasin est meilleure."],
  ['Nora thinks the hand-cut stencils are superior because she designed them on her own.', "Nora pense que les pochoirs decoupes a la main sont superieurs parce qu elle les a conçus seule."],
  ['Ari calls the repaired lamp his favorite because he learned how to fix it.', "Ari appelle la lampe reparee sa preferee parce qu il a appris a la reparer."],
  ['Rita says the handmade banner is better than the printed one because she spent hours on it.', "Rita dit que la banderole faite main est meilleure que l imprimee parce qu elle y a passe des heures."],
  ['Tia prefers the painted flower pot because she did the painting herself.', "Tia prefere le pot de fleurs peint parce qu elle a fait la peinture elle-meme."],
  ['Oli argues the custom desk mat is worth more because he picked the colors.', "Oli soutient que le tapis de bureau personnalise vaut plus parce qu il a choisi les couleurs."],
  ['Lara keeps the uneven mug because it reminds her of the class she took to make it.', "Lara garde la tasse inegale parce qu elle lui rappelle le cours qu elle a suivi pour la fabriquer."],
  ['Ben says the scrapbook cover is amazing because he glued every cutout himself.', "Ben dit que la couverture du scrapbooking est incroyable parce qu il a colle chaque decoupage lui-meme."],
  ['Mina prefers the rough bench because building it felt rewarding.', "Mina prefere le banc brut parce que le construire etait gratifiant."],
  ['Drew thinks the wall organizer is nicer because he assembled it from parts.', "Drew pense que l organiseur mural est plus joli parce qu il l a assemble a partir de pieces."],
  ['Jade says the custom coaster set is better because she made it for her room.', "Jade dit que le lot de sous-verres personnalise est meilleur parce qu elle l a fait pour sa chambre."],
  ['Owen values the carved spoon because he worked hard to finish it.', "Owen valorise la cuillere taillee parce qu il a travaille dur pour la finir."],
  ['Mila thinks the home-built shelf is superior because she measured every board.', "Mila pense que l etagere maison est superieure parce qu elle a mesure chaque planche."],
  ['Evan says the handmade calendar is more useful because he customized every month.', "Evan dit que le calendrier fait main est plus utile parce qu il a personnalise chaque mois."],
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

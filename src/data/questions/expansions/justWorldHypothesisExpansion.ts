import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya hears about a neighbor losing a job and says they must have done something to deserve it at work.', "Maya apprend qu un voisin a perdu son emploi et dit qu il a forcement fait quelque chose pour meriter cela au travail."],
  ['Leo sees a classmate fail a test and assumes the student was lazy or careless during the week.', "Leo voit un camarade echouer a un test et suppose que l eleve etait paresseux ou negligéant pendant la semaine."],
  ['Nina says the person who got sick probably did not take enough care of themselves.', "Nina dit que la personne malade n a probablement pas assez pris soin d elle-meme."],
  ['Owen hears about a family losing their home and says it must be because they made bad choices.', "Owen entend parler d une famille qui a perdu sa maison et dit que c est forcement parce qu elle a fait de mauvais choix."],
  ['Priya says anyone who gets scammed probably was not smart enough to avoid it.', "Priya dit que toute personne arnaquee n etait probablement pas assez intelligente pour eviter cela."],
  ['Ben assumes the student who was bullied must have somehow invited it.', "Ben suppose que l eleve victime de harcelement a forcement en quelque sorte provoque cela."],
  ['Tara thinks the worker injured on the job must have been reckless.', "Tara pense que le travailleur blesse au travail a forcement ete temeraire."],
  ['Kai says the person who got a bad review must have deserved it.', "Kai dit que la personne qui a recu un mauvais avis l a forcement merite."],
  ['Jules believes the person who missed the bus must have been disorganized and careless.', "Jules croit que la personne qui a rate le bus devait etre desordonnee et negligente."],
  ['Ava says the unlucky customer probably did something wrong to cause it.', "Ava dit que le client malchanceux a probablement fait quelque chose de travers pour provoquer cela."],
  ['Noah assumes the person who was excluded from the group deserved the rejection.', "Noah suppose que la personne exclue du groupe meritait ce rejet."],
  ['Mina says the tenant who was evicted must have caused all the trouble.', "Mina dit que le locataire expulse a forcement cause tous les problemes."],
  ['Eli thinks the student who struggled in class must not have tried hard enough.', "Eli pense que l eleve en difficulte en classe n a pas du essayer assez fort."],
  ['Rina says the person who got cheated must have been naive.', "Rina dit que la personne trompee devait etre naive."],
  ['Hugo assumes the family facing hardship must have made foolish decisions.', "Hugo suppose que la famille en difficulte a forcement pris des decisions stupides."],
  ['Lina says if someone is having a bad day, they probably brought it on themselves.', "Lina dit que si quelqu un passe une mauvaise journee, il l a probablement provoquee lui-meme."],
  ['Grant thinks the person who was ignored at the meeting must have said something wrong.', "Grant pense que la personne ignoree pendant la reunion a forcement dit quelque chose de travers."],
  ['Zoe says the person with the failed project probably did not deserve success.', "Zoe dit que la personne dont le projet a echoue ne meritait probablement pas le succes."],
  ['Milo assumes the person who was rejected by the club must not fit in.', "Milo suppose que la personne rejetee par le club ne devait pas s integrer."],
  ['Theo says the driver who got a ticket probably was not careful enough.', "Theo dit que le conducteur verbalise n etait probablement pas assez prudent."],
  ['Pia thinks the person who got bad news must have set themselves up for it.', "Pia pense que la personne qui a recu une mauvaise nouvelle l avait forcement preparee."],
  ['Finn says the student who was embarrassed must have done something embarrassing first.', "Finn dit que l eleve gene a forcement fait quelque chose de genant d abord."],
  ['Maya assumes the person whose plans fell apart probably lacked discipline.', "Maya suppose que la personne dont les plans ont echoue manquait probablement de discipline."],
  ['Sam says the child who got scolded probably caused the whole problem.', "Sam dit que l enfant gronde a probablement cause tout le probleme."],
  ['Juno thinks the customer who was disappointed must have expected too much.', "Juno pense que le client decu attendait forcement trop."],
  ['Iris says the team that lost must have worked badly.', "Iris dit que l equipe qui a perdu a forcement mal travaille."],
  ['Cole assumes the person who had an accident must have been careless.', "Cole suppose que la personne victime d un accident a forcement ete imprudente."],
  ['Nora says the friend who was left out probably did something to deserve it.', "Nora dit que l amie mise a l ecart a probablement fait quelque chose pour le meriter."],
  ['Ari thinks the person who was denied help must not have been worthy of it.', "Ari pense que la personne a qui on a refuse de l aide ne devait pas la meriter."],
  ['Rita says the student who failed probably learned the lesson the hard way.', "Rita dit que l eleve qui a echoue a probablement appris la lecon a ses depens."],
  ['Tia assumes the person who got hurt must have been reckless to begin with.', "Tia suppose que la personne blessee devait etre temeraire au depart."],
  ['Oli says the family that had a rough year probably caused their own problems.', "Oli dit que la famille qui a traverse une annee difficile a probablement cause ses propres problemes."],
  ['Lara thinks the person who was fired must have deserved it.', "Lara pense que la personne licenciee l a forcement merite."],
  ['Ben says the customer who got poor service must have been rude first.', "Ben dit que le client mal servi a forcement ete impoli d abord."],
  ['Mina assumes the person who missed the opportunity was not worthy of it.', "Mina suppose que la personne qui a rate l occasion n en etait pas digne."],
  ['Drew says the employee who was overlooked probably did not work hard enough.', "Drew dit que l employe ignore n a probablement pas assez travaille."],
  ['Jade thinks the person who got stuck in traffic must have done something wrong earlier.', "Jade pense que la personne prise dans les embouteillages a forcement fait quelque chose de travers avant."],
  ['Owen says the student who got a low mark probably was not a good person.', "Owen dit que l eleve qui a eu une mauvaise note n etait probablement pas une bonne personne."],
  ['Mila assumes the neighbor who had bad luck must have invited it somehow.', "Mila suppose que le voisin malchanceux l a forcement attiree d une facon ou d une autre."],
  ['Evan says the person who was laughed at probably asked for it.', "Evan dit que la personne qui a ete moquee l avait probablement cherche."],
  ['Kira thinks the person whose plan failed must have lacked character.', "Kira pense que la personne dont le plan a echoue manquait de caractere."],
  ['Grant says the child who was punished must have deserved the punishment.', "Grant dit que l enfant puni meritait forcement la punition."],
  ['Zara assumes the person who was rejected in dating probably had something wrong with them.', "Zara suppose que la personne rejetee en amour avait probablement quelque chose qui n allait pas chez elle."],
  ['Parker says the person who had a setback probably caused it by being foolish.', "Parker dit que la personne qui a subi un revers l a probablement provoque par betise."],
  ['Hana thinks the student who was teased must have somehow brought it on.', "Hana pense que l eleve moque a forcement en quelque sorte attire cela."],
  ['Leo says the person who got lost must not have been paying attention.', "Leo dit que la personne qui s est perdue ne devait pas faire attention."],
  ['Maya assumes the person who failed was morally lacking, not just unlucky.', "Maya suppose que la personne qui a echoue manquait moralement, pas seulement de chance."],
  ['Nina says the family that struggled probably caused their own suffering.', "Nina dit que la famille en difficulte a probablement cause sa propre souffrance."],
  [`After a stranger gets laid off, Maya says they must have done something to deserve it.`, `Apres qu un inconnu est licencie, Maya dit qu il a forcement fait quelque chose pour meriter cela.`],
  [`Leo sees a student fail a quiz and assumes the student must be lazy, not unlucky or unprepared.`, `Leo voit un eleve echouer a un quiz et suppose que l eleve doit etre paresseux, pas malchanceux ou mal prepare.`],
  [`Nina says the person who was robbed probably was not careful enough to avoid it.`, `Nina dit que la personne cambriolee n etait probablement pas assez prudente pour eviter cela.`],
  [`Owen thinks a family that lost their apartment must have made terrible choices.`, `Owen pense qu une famille qui a perdu son appartement a forcement fait de terribles choix.`],
  [`Priya says the worker who got passed over for promotion probably did not deserve it.`, `Priya dit que le travailleur oublie pour la promotion ne la meritait probablement pas.`],
  [`Ben assumes the kid who got bullied must have somehow invited it.`, `Ben suppose que l enfant harcele a forcement en quelque sorte provoque cela.`],
  [`Tara thinks the person who got sick probably brought it on themselves.`, `Tara pense que la personne malade l a probablement provoque elle-meme.`],
  [`Kai says the neighbor who had bad luck probably made bad life choices.`, `Kai dit que le voisin malchanceux a probablement fait de mauvais choix de vie.`],
  [`Jules believes the person who got a parking ticket must have deserved the hassle.`, `Jules croit que la personne qui a eu une contravention de stationnement meritait forcement cette galere.`],
  [`Ava says the person rejected from the club probably was not good enough to belong.`, `Ava dit que la personne rejetee du club n etait probablement pas assez bonne pour en faire partie.`],
  [`Maya says the worker who got laid off must have been bad at their job, not just unlucky.`, `Maya dit que le travailleur licencie devait etre mauvais dans son travail, pas seulement malchanceux.`],
  [`Leo assumes the student who failed the exam probably did not deserve to pass.`, `Leo suppose que l eleve qui a rate l examen ne meritait probablement pas de reussir.`],
  [`Nina thinks the person who got pickpocketed must have been careless to deserve it.`, `Nina pense que la personne victime d un vol a la tire devait etre negligente pour le meriter.`],
  [`Owen says the family that lost power in a storm must have done something wrong.`, `Owen dit que la famille privee d electricite pendant la tempete a forcement fait quelque chose de travers.`],
  [`Priya believes the student who was left out of the group project probably was not trying hard enough.`, `Priya croit que l eleve exclu du projet de groupe n essayait probablement pas assez fort.`],
  [`Ben says the person who got a flat tire probably forgot basic responsibility.`, `Ben dit que la personne qui a eu un pneu creve a probablement oublie la responsabilite de base.`],
  [`Tara assumes the worker who got yelled at must have earned it somehow.`, `Tara suppose que le travailleur qui s est fait crier dessus l a forcement merite d une facon ou d une autre.`],
  [`Kai thinks the child who was scolded at school probably caused the whole scene.`, `Kai pense que l enfant gronde a l ecole a probablement cause toute la scene.`],
  [`Jules says the person who had their bike stolen probably should have known better.`, `Jules dit que la personne a qui on a vole le velo aurait probablement du mieux se mefier.`],
  [`Ava assumes the family with a medical bill crisis must have made reckless choices.`, `Ava suppose que la famille en crise a cause d une facture medicale a forcement fait des choix temeraires.`],
  [`Noah says the neighbor whose package went missing probably did something to invite bad luck.`, `Noah dit que le voisin dont le colis a disparu a probablement fait quelque chose pour attirer la malchance.`],
  [`Mina thinks the person who was mocked online must have done something to deserve it.`, `Mina pense que la personne moquee en ligne a forcement fait quelque chose pour le meriter.`],
  [`Eli says the job applicant who was rejected probably lacked worth.`, `Eli dit que le candidat recale manquait probablement de valeur.`],
  [`Rina assumes the tenant who faced a sudden rent hike must not have been careful enough.`, `Rina suppose que le locataire touche par une hausse soudaine du loyer n a pas ete assez prudent.`],
  [`Hugo says the person who got sick during flu season must have been careless about health.`, `Hugo dit que la personne tombee malade pendant la grippe a forcement ete negligente avec sa sante.`],
  [`Lina thinks the student who got a low mark probably deserved the disappointment.`, `Lina pense que l eleve qui a eu une mauvaise note meritait probablement cette deception.`],
  [`Grant says the worker who had equipment fail on them probably caused it by being sloppy.`, `Grant dit que le travailleur chez qui l equipement a laché l a probablement provoque par negligence.`],
  [`Zoe assumes the person who was excluded from the trip must have been the problem.`, `Zoe suppose que la personne exclue du voyage devait etre le probleme.`],
  [`Milo says the child who got punished probably needed to be taught a lesson the hard way.`, `Milo dit que l enfant puni avait probablement besoin d apprendre la lecon a la dure.`],
  [`Theo thinks the person who got a bad delivery should have avoided ordering it at all.`, `Theo pense que la personne qui a recu une mauvaise livraison aurait du eviter de commander du tout.`],
  [`Pia says the employee who missed a promotion probably was not good enough to deserve it.`, `Pia dit que l employe passe a cote d une promotion n etait probablement pas assez bon pour la meriter.`],
  [`Finn assumes the person whose date went badly must have done something to cause it.`, `Finn suppose que la personne dont le rendez-vous s est mal passe a forcement fait quelque chose pour le provoquer.`],
  [`Maya says the student who was embarrassed in class probably invited the embarrassment.`, `Maya dit que l eleve gene en classe a probablement invite la gene.`],
  [`Sam thinks the person who got stuck with the bad seat must have deserved the inconvenience.`, `Sam pense que la personne qui a herite de la mauvaise place meritait probablement l inconvenient.`],
  [`Juno says the person whose phone was stolen probably was not careful enough to protect it.`, `Juno dit que la personne dont le telephone a ete vole n a probablement pas ete assez prudente pour le proteger.`],
  [`Iris assumes the family that had car trouble on a road trip probably caused their own misery.`, `Iris suppose que la famille qui a eu des ennuis de voiture en voyage a probablement cause sa propre misere.`],
  [`Cole says the person who was made fun of at work probably had it coming.`, `Cole dit que la personne moquee au travail l avait probablement cherche.`],
  [`Nora thinks the student who was cut from the team probably was not deserving anyway.`, `Nora pense que l eleve exclu de l equipe ne le meritait probablement pas de toute facon.`],
  [`Ari says the person who lost their wallet must have been irresponsible to begin with.`, `Ari dit que la personne qui a perdu son portefeuille devait etre irresponsable au depart.`],
  [`Rita assumes the shopper who got overcharged probably did not check hard enough.`, `Rita suppose que la cliente surfacturee n a probablement pas assez verifie.`],
  [`Tia says the person who was ignored in the group chat probably annoyed everyone first.`, `Tia dit que la personne ignoree dans le groupe a probablement agace tout le monde d abord.`],
  [`Oli thinks the driver who got rear-ended must have done something to deserve the stress.`, `Oli pense que le conducteur percute par l arriere a forcement fait quelque chose pour meriter le stress.`],
  [`Lara says the worker who missed a bonus probably just was not worthy of it.`, `Lara dit que le travailleur qui a manque une prime n en etait probablement tout simplement pas digne.`],
  [`Ben assumes the person who was blamed at the meeting must have actually caused the problem.`, `Ben suppose que la personne accusee en reunion a forcement cause le probleme.`],
  [`Mina says the friend who had a rough week probably created their own trouble.`, `Mina dit que l ami qui a vecu une semaine difficile a probablement cree ses propres ennuis.`],
  [`Drew thinks the person who got a bad review must have earned the criticism.`, `Drew pense que la personne qui a recu un mauvais avis a forcement merite la critique.`],
  [`Jade says the student who was sent out of class probably was asking for it.`, `Jade dit que l eleve renvoye de classe le cherchait probablement.`],
  [`Owen assumes the person who was denied help must have been undeserving.`, `Owen suppose que la personne a qui on a refuse de l aide etait probablement indigne.`],
  [`Mila says the family hit by a sudden accident probably brought it on themselves.`, `Mila dit que la famille touchee par un accident soudain l a probablement provoque elle-meme.`],
  [`Evan thinks the person who got stranded must have made poor enough choices to deserve it.`, `Evan pense que la personne restee bloquee a forcement fait des choix assez mauvais pour le meriter.`],
  [`Kira says the student who failed to win a prize probably did not deserve the prize anyway.`, `Kira dit que l eleve qui n a pas gagne le prix ne le meritait probablement pas de toute facon.`],
  [`Grant assumes the person who had bad luck on vacation must have done something wrong first.`, `Grant suppose que la personne qui a eu de la mauvaise chance en vacances a forcement fait quelque chose de travers d abord.`],
];

const OPTIONS_EN = ['Just-World Hypothesis', 'Fundamental Attribution Error', 'Survivorship Bias', 'Optimism Bias'];
const OPTIONS_FR = ['Hypothèse du monde juste', 'Erreur fondamentale d attribution', 'Biais de survivance', 'Biais d optimisme'];

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
      id: 36501 + i,
      level: 4,
      persona_stage: PersonaStage.CRAB,
      concept: fr ? 'Hypothèse du monde juste' : 'Just-World Hypothesis',
      difficulty: i < 43 ? 1 : i < 50 ? 2 : 3,
      subLevel: sub(i),
      question: `${fr ? 'Quel sophisme est illustre ici ?' : 'Which fallacy is illustrated here?'}\n\n"${s[fr ? 1 : 0]}"`,
      options: rotate(fr ? OPTIONS_FR : OPTIONS_EN, c),
      correct_option_index: c,
      explanation: fr
        ? "On suppose que les gens obtiennent ce qu ils meritent, meme quand la vie est injuste."
        : 'We assume people get what they deserve, even when life is unfair.',
      detailedExplanationBeginner: fr
        ? "Le monde n est pas toujours juste."
        : 'The world is not always fair.',
      detailedExplanationIntermediate: fr
        ? "L hypothèse du monde juste fait croire que la chance, la souffrance ou l echec sont automatiquement merites, ce qui transforme une injustice en jugement moral."
        : 'The just-world hypothesis makes us believe luck, suffering, or failure are automatically deserved, turning injustice into a moral judgment.',
      detailedExplanationExpert: fr
        ? "Ce biais sert souvent a proteger le sentiment de controle en reinterpretant la victime comme responsable, ce qui banalise l accidentel et alimente la culpabilisation."
        : 'This bias often protects our sense of control by recasting the victim as responsible, which normalizes randomness and fuels blame.',
      questionFormat: 'standard',
    };
  });
}

export const JUST_WORLD_HYPOTHESIS_EXPANSION_EN: Question[] = make();
export const JUST_WORLD_HYPOTHESIS_EXPANSION_FR: Question[] = make(true);

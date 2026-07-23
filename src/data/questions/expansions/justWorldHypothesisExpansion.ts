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

import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya drives faster after buying a car with extra safety features and says the new car makes reckless driving okay.', 'Maya conduit plus vite apres avoir achete une voiture avec des fonctions de securite supplementaires et dit que la nouvelle voiture rend la conduite temeraire acceptable.'],
  ['Leo walks on icy steps without holding the rail because he is wearing better shoes.', 'Leo marche sur des marches glissantes sans tenir la rampe parce qu il porte de meilleures chaussures.'],
  ['Priya skips a careful budget check after turning on spending alerts and says the alerts will protect her anyway.', 'Priya saute un controle attentif du budget apres avoir active des alertes de depenses et dit que les alertes la protegeront quand meme.'],
  ['Omar bikes through traffic more aggressively once he puts on a bright helmet and reflective jacket.', 'Omar fait du velo de façon plus agressive dans la circulation une fois qu il met un casque lumineux et une veste reflechissante.'],
  ['Rina leaves her front door unlocked because she installed a camera and thinks that is enough.', 'Rina laisse sa porte d entree deverrouillee parce qu elle a installe une camera et pense que cela suffit.'],
  ['Ben takes a bigger gamble in a game after the app adds a warning message about responsible play.', 'Ben prend un pari plus grand dans un jeu apres que l application a ajoute un message d avertissement sur le jeu responsable.'],
  ['Zoe texts while walking because her phone has a "safe mode" setting enabled.', 'Zoé envoie des messages en marchant parce que son telephone a un mode « securise » active.'],
  ['Kai pushes himself too hard in a workout because the gym has more spotters nearby.', 'Kai se surmene a l entrainement parce que la salle a plus de pareurs à proximité.'],
  ['Nora spends less time checking ingredients because the package now has a healthy label.', 'Nora passe moins de temps à verifier les ingredients parce que l emballage a maintenant une etiquette saine.'],
  ['Eli speeds through a neighborhood because his bike has brighter lights than before.', 'Eli traverse un quartier plus vite parce que son velo a des lumieres plus brillantes qu avant.'],
  ['Lina clicks suspicious links more casually after the browser adds a scam warning banner.', 'Lina clique plus legerement sur des liens suspects apres que le navigateur a ajoute une banniere d avertissement anti-arnaque.'],
  ['Grant trusts the ladder more after buying a higher-rated one and stops checking the footing.', 'Grant fait davantage confiance a l echelle apres en avoir achete une mieux notee et arrete de verifier l appui.'],
  ['Tia talks on speakerphone while crossing the street because her car has automatic braking.', 'Tia parle en haut-parleur en traversant la rue parce que sa voiture a un freinage automatique.'],
  ['Noah leaves his laptop out in a café because he uses a privacy screen now.', 'Noah laisse son ordinateur portable dans un cafe parce qu il utilise maintenant un filtre de confidentialite.'],
  ['Mia takes the stairs two at a time because she started wearing grippy sneakers.', 'Mia monte les escaliers deux par deux parce qu elle a commence à porter des baskets antiderapantes.'],
  ['Jules ignores the weather app and walks out in a storm because the app sends storm alerts.', 'Jules ignore l application meteo et sort sous l orage parce que l application envoie des alertes d orage.'],
  ['Ava drives through a yellow light more often after her car gets a collision warning system.', 'Ava franchit plus souvent un feu jaune apres que sa voiture a reçu un systeme d alerte de collision.'],
  ['Finn drinks and drives a little more cautiously because he thinks one warning sticker makes it fine.', 'Finn boit avant de conduire un peu plus tranquillement parce qu il pense qu un autocollant d avertissement suffit.'],
  ['Mina leaves her bag unattended at the gym because the locker room now has cameras.', 'Mina laisse son sac sans surveillance a la salle parce que le vestiaire a maintenant des caméras.'],
  ['Theo stops reading the allergy label carefully because the food brand says it is "extra transparent".', 'Theo arrete de lire attentivement l etiquette allergene parce que la marque dit etre « ultra transparente ».'],
  ['Juno takes a harder route home at night because her phone location is shared with friends.', 'Juno prend un trajet plus difficile en rentrant le soir parce que la localisation de son telephone est partagee avec des amis.'],
  ['Iris takes unnecessary risks in a game because the game offers a recovery shield after mistakes.', 'Iris prend des risques inutiles dans un jeu parce que le jeu offre un bouclier de recuperation apres les erreurs.'],
  ['Cole crosses the road without looking because the crosswalk now has flashing lights.', 'Cole traverse la route sans regarder parce que le passage pieton a maintenant des feux clignotants.'],
  ['Riley is less careful with online banking because the site added a padlock icon.', 'Riley est moins prudent avec les services bancaires en ligne parce que le site a ajoute une icone de cadenas.'],
  ['Pia overfills the kettle because it has an automatic shutoff.', 'Pia remplit trop la bouilloire parce qu elle a un arret automatique.'],
  ['Hugo leaves his bike unlocked because he put a tracker on it.', 'Hugo laisse son velo non verrouille parce qu il y a installe un traceur.'],
  ['Sam takes a shortcut through a sketchy street because he installed a new phone alarm.', 'Sam prend un raccourci dans une rue douteuse parce qu il a installe une nouvelle alarme sur son telephone.'],
  ['Jade posts personal details more freely because the app claims to protect privacy.', 'Jade publie plus librement des informations personnelles parce que l application pretend proteger la vie privee.'],
  ['Owen drives in fog without slowing down because the car has lane assist.', 'Owen conduit dans le brouillard sans ralentir parce que la voiture a une assistance au maintien de voie.'],
  ['Lea uses a heavy blender without checking the lid because the machine is labeled "safe".', 'Léa utilise un blender puissant sans verifier le couvercle parce que la machine est etiquetee « sure ».'],
  ['Maya takes more lax shortcuts at work because the office added monitoring software.', 'Maya prend des raccourcis plus laxistes au travail parce que le bureau a ajoute un logiciel de surveillance.'],
  ['Ben skips sunscreen more often because the app shows the UV index.', 'Ben met moins souvent de creme solaire parce que l application affiche l indice UV.'],
  ['Ava leaves her wallet in a visible pocket because she set up phone tracking.', 'Ava laisse son portefeuille dans une poche visible parce qu elle a active le suivi du telephone.'],
  ['Omar rides his scooter faster because it now has a bell and lights.', 'Omar roule plus vite en trottinette parce qu elle a maintenant une sonnette et des lumieres.'],
  ['Nina ignores the seatbelt reminder because the car beeps when it is not fastened.', 'Nina ignore le rappel de ceinture parce que la voiture bippe quand elle n est pas attachee.'],
  ['Eli opens a suspicious attachment because the mail app flagged it as "important".', 'Eli ouvre une piece jointe suspecte parce que l application mail l a signalee comme « importante ».'],
  ['Lina does not double-check the recipe because she bought a more expensive pan.', 'Lina ne verifie pas deux fois la recette parce qu elle a achete une poele plus chere.'],
  ['Grant talks during a lesson because the classroom has better microphones now.', 'Grant parle pendant un cours parce que la salle a maintenant de meilleurs micros.'],
  ['Tia takes larger risks at the arcade because the console has an age lock.', 'Tia prend plus de risques à l arcade parce que la console a un verrou d age.'],
  ['Finn ignores the rain warning because the app says it will send a follow-up alert.', 'Finn ignore l avertissement de pluie parce que l application dit qu elle enverra une alerte de suivi.'],
  ['Mina carries a hot drink without a lid because the cup has an insulated sleeve.', 'Mina transporte une boisson chaude sans couvercle parce que la tasse a une manche isotherme.'],
  ['Theo drives after dark more carelessly because the road now has new signs.', 'Theo conduit apres la nuit de façon plus imprudente parce que la route a maintenant de nouveaux panneaux.'],
  ['Juno leaves her password in a notes app because she enabled two-factor authentication.', 'Juno laisse son mot de passe dans une appli de notes parce qu elle a active la double authentification.'],
  ['Iris takes extra money to a fair because the venue has security guards.', 'Iris emporte plus d argent à une foire parce que le lieu a des agents de securite.'],
  ['Cole pays less attention to measurements because the ruler is brand new.', 'Cole fait moins attention aux mesures parce que la regle est toute neuve.'],
  ['Riley takes a more dangerous route in the rain because his jacket is waterproof.', 'Riley prend un trajet plus dangereux sous la pluie parce que sa veste est impermeable.'],
  ['Pia leaves the oven unattended because it has a timer.', 'Pia laisse le four sans surveillance parce qu il a une minuterie.'],
  ['Hugo is less careful with his bike lock because the frame is stronger.', 'Hugo est moins prudent avec l antivol de son velo parce que le cadre est plus solide.'],
  ['Sam trusts a restaurant more because it has a fire alarm system.', 'Sam fait davantage confiance a un restaurant parce qu il a un systeme d alarme incendie.'],
  ['Jade takes a harder exam question lightly because the test app shows progress bars.', 'Jade prend plus legerement une question difficile parce que l appli d examen montre des barres de progression.'],
  ['Maya ignores a seat warning because the car has side airbags.', 'Maya ignore un avertissement sur le siege parce que la voiture a des airbags lateraux.'],
];

const OPTIONS_EN = ['Risk Compensation', 'False Security', 'Reactance', 'Optimism Bias'];
const OPTIONS_FR = ['Compensation du risque', 'Fausse sécurité', 'Réactance', 'Biais d’optimisme'];

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
      id: 40101 + index,
      level: 5,
      persona_stage: PersonaStage.OCTOPUS,
      concept: isFrench ? 'Compensation du risque' : 'Risk Compensation',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel effet est illustré ici ?' : 'Which effect is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? 'La personne se comporte de façon plus risquee parce qu elle se sent davantage protegee.'
        : 'The person behaves more riskily because they feel more protected.',
      detailedExplanationBeginner: isFrench
        ? 'Plus de protection peut pousser à prendre plus de risques.'
        : 'More protection can lead to taking more risks.',
      detailedExplanationIntermediate: isFrench
        ? 'La compensation du risque se produit quand une mesure de securite rassure tellement quelqu un qu il compense en adoptant un comportement plus temeraire.'
        : 'Risk compensation happens when a safety measure reassures someone so much that they compensate by behaving more recklessly.',
      detailedExplanationExpert: isFrench
        ? "Cet effet ne dit pas que les dispositifs de securite sont inutiles; il montre que l adaptation humaine peut en reduire une partie du benefice si la personne se sent trop protegee. La solution n est pas d abandonner la securite, mais de comprendre le comportement pour concevoir des protections et des regles qui tiennent compte de cette reaction."
        : 'This effect does not mean safety devices are useless; it shows that human adaptation can blunt some of the benefit if people feel overprotected. The answer is not to abandon safety, but to understand the behavior so protections and rules account for that reaction.',
      questionFormat: 'standard',
    };
  });
}

export const RISK_COMPENSATION_EXPANSION_EN: Question[] = createQuestions('en');
export const RISK_COMPENSATION_EXPANSION_FR: Question[] = createQuestions('fr');

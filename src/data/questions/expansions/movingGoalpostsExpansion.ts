import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['Maya is told she passes the class if she gets 80 percent on the quiz. She gets 80, and the teacher says the new requirement is 90 percent because the class is "really more advanced."', 'On dit a Maya qu elle reussit le cours si elle obtient 80 pour cent au controle. Elle obtient 80, et le professeur dit que la nouvelle exigence est 90 pour cent parce que la classe est "en réalité plus avancée".'],
  ['Leo is promised a refund if the laptop arrives broken. When the screen is damaged, the store says the box must also have been smashed before they will refund him.', 'Leo se voit promettre un remboursement si l ordinateur portable arrive casse. Quand l ecran est abime, le magasin dit que la boite doit aussi avoir ete ecrasee avant de le rembourser.'],
  ['Priya is told she will earn a bonus after five completed shifts. After she works five, the manager says six shifts are now needed because "five was just a warm-up."', 'Priya est informee qu elle aura une prime apres cinq services termines. Apres les avoir faits, la responsable dit que six services sont maintenant necessaires parce que "cinq n etait qu un echauffement".'],
  ['Omar is asked to run one mile in under ten minutes to join the club. He does it, and then the coach says the rule is now under nine minutes.', 'Omar doit courir un mile en moins de dix minutes pour rejoindre le club. Il y parvient, puis l entraineur dit que la regle est maintenant de moins de neuf minutes.'],
  ['Rina is told she can borrow the car if she gets one parent signature. After she brings one signature, the other parent says both signatures are required now.', 'Rina se voit dire qu elle peut emprunter la voiture si elle obtient une signature parentale. Apres avoir apporte une signature, l autre parent dit que deux signatures sont maintenant necessaires.'],
  ['Ben is told his science fair poster is acceptable if it includes three sources. He adds three, and the judge says four sources are now required because the competition is "serious."', 'Ben est informé que son affiche de science est acceptable si elle contient trois sources. Il en ajoute trois, et le jury dit que quatre sources sont désormais nécessaires parce que le concours est "sérieux".'],
  ['Zoe is promised a spot on the team if she makes ten practice shots. She makes ten, and the captain says the bar has moved to twelve.', 'Zoé se voit promettre une place dans l equipe si elle réussit dix tirs a l entrainement. Elle en réussit dix, et le capitaine dit que le seuil est passe a douze.'],
  ['Kai is told he will get his game badge after finishing the tutorial. He finishes it, and the site says he must now also complete a hidden challenge.', 'Kai est informé qu il recevra son badge de jeu apres avoir terminé le tutoriel. Il le termine, et le site dit qu il doit maintenant faire aussi un defi caché.'],
  ['Nora is told the apartment is hers if her income is above the listed threshold. She meets it, and the landlord says the threshold has been revised upward.', 'Nora se voit dire que l appartement sera à elle si son revenu depasse le seuil indiqué. Elle le dépasse, et le propriétaire dit que le seuil a été relevé.'],
  ['Eli is promised a free meal if he buys one entree. At checkout, the cashier says the offer only counts if he buys a dessert too.', 'Eli se voit promettre un repas gratuit s il achete un plat. A la caisse, le caissier dit que l offre ne compte que s il achete aussi un dessert.'],
  ['Lina is told she can join the volunteer trip after attending two meetings. After she attends two, the organizer says three meetings are required.', 'Lina est informee qu elle peut rejoindre le voyage benevole apres deux reunions. Apres y avoir assisté, l organisateur dit que trois reunions sont requises.'],
  ['Grant is told the report is complete with one graph and a summary. When he submits both, the editor says a full appendix is now mandatory.', 'Grant est informé que le rapport est complet avec un graphique et un résumé. Lorsqu il les remet, la rédactrice dit qu une annexe complète est maintenant obligatoire.'],
  ['Tia is told she can enter the race if her bike passes inspection. It does, and the official says the helmet now needs a second certification.', 'Tia est informee qu elle peut participer a la course si son vélo passe l inspection. C est le cas, et l officier dit que le casque a maintenant besoin d une deuxieme certification.'],
  ['Noah is told he can keep the library book if he returns it within seven days. He returns it on day seven, and staff say six days is the new rule.', 'Noah est informé qu il peut garder le livre de la bibliotheque s il le rend sous sept jours. Il le rend au septième jour, et le personnel dit que six jours est maintenant la règle.'],
  ['Mia is told the club accepts anyone who can name three local restaurants. She names three, and then the host says they now need five.', 'Mia se voit dire que le club accepte toute personne capable de citer trois restaurants locaux. Elle en cite trois, et l animateur dit qu il en faut maintenant cinq.'],
  ['Jules is told the dog can stay if it stops barking for one hour. It does, and the owner says the dog must stay silent for two hours instead.', 'Jules est informé que le chien peut rester s il cesse d aboyer pendant une heure. Il le fait, et le propriétaire dit que le chien doit maintenant rester silencieux pendant deux heures.'],
  ['Ava is told the scholarship needs a B average. She gets a B, and the committee says only an A average will count now.', 'Ava est informee que la bourse demande une moyenne B. Elle obtient un B, et le comité dit qu il faut maintenant une moyenne A.'],
  ['Hugo is told the fundraiser needs 100 dollars to count as a success. It raises 100, and the organizer says the goal was really 150.', 'Hugo est informé que la collecte doit atteindre 100 dollars pour être un succès. Elle atteint 100, et l organisateur dit que le vrai objectif était 150.'],
  ['Sam is told the shop will waive the fee if he brings the receipt. He brings it, and the clerk says the fee is waived only with the receipt and the original box.', 'Sam est informé que la boutique annulera les frais s il apporte le reçu. Il l apporte, et le vendeur dit que les frais ne sont annulés qu avec le reçu et la boîte d origine.'],
  ['Juno is told the app review will be accepted if it is 100 words long. She writes 100 words, and then the platform says 150 are needed.', 'Juno est informée que l avis sur l application sera accepté s il fait 100 mots. Elle en écrit 100, puis la plateforme dit qu il en faut 150.'],
  ['Iris is told she can switch shifts if she asks three days ahead. She asks early, and the supervisor says five days are now required.', 'Iris est informée qu elle peut échanger ses horaires si elle demande trois jours à l avance. Elle le fait, et le responsable dit que cinq jours sont maintenant requis.'],
  ['Cole is told the cake contest judging is based on taste alone. His cake tastes best, and the judges add decoration and theme as new criteria.', 'Cole est informé que le concours de gâteaux est jugé sur le goût seulement. Son gâteau a le meilleur goût, et les juges ajoutent la décoration et le thème comme nouveaux critères.'],
  ['Riley is told the neighborhood entry form needs one photo. He submits one, and the board says two photos are now required for verification.', 'Riley est informé que le formulaire du quartier demande une photo. Il en remet une, et le conseil dit que deux photos sont maintenant nécessaires pour la vérification.'],
  ['Pia is told the gym challenge ends when she lifts 50 pounds. She does it, and the trainer says 60 pounds are the real standard.', 'Pia est informee que le defi de la salle se termine quand elle souleve 50 livres. Elle y parvient, et l entraineur dit que 60 livres sont la vraie norme.'],
  ['Theo is told the event dress code is "clean and tidy." He arrives that way, and the host says formal shoes are also necessary.', 'Theo est informé que le code vestimentaire de l évènement est "propre et soigné". Il arrive ainsi, et l hôte dit que des chaussures habillées sont aussi nécessaires.'],
  ['Hana is told her essay is enough with one paragraph for each question. She does that, and the teacher now wants two paragraphs per question.', 'Hana est informée que son essai suffit avec un paragraphe par question. Elle le fait, et l enseignante veut maintenant deux paragraphes par question.'],
  ['Max is told the return window is 30 days. He returns the item on day 30, and support says only 14 days count because the policy changed.', 'Max est informé que le délai de retour est de 30 jours. Il rapporte l article le 30e jour, et le support dit que seuls 14 jours comptent parce que la politique a changé.'],
  ['Zara is told the art contest needs one finished sketch. She submits it, and the judge says a color version is now expected too.', 'Zara est informée que le concours d art demande une esquisse terminée. Elle la remet, et le jury dit qu une version en couleurs est maintenant attendue aussi.'],
  ['Owen is told he can rent the scooter if he is over 18. He is, and then the app says a premium account is also required.', 'Owen est informé qu il peut louer la trottinette s il a plus de 18 ans. C est le cas, et l application dit qu un compte premium est aussi nécessaire.'],
  ['Lea is told the book club question is answered once she names the main character. She does, and the moderator now wants a full character analysis.', 'Lea est informée que la question du club de lecture est résolue lorsqu elle nomme le personnage principal. Elle le fait, et la modératrice veut maintenant une analyse complète du personnage.'],
  ['Finn is told the hiking permit only needs a map and ID. He brings both, and the ranger says an extra safety form is now required.', 'Finn est informé que le permis de randonnée demande seulement une carte et une pièce d identité. Il apporte les deux, et le garde dit qu un formulaire de sécurité supplémentaire est maintenant requis.'],
  ['Maya is told the class project is complete with a diagram and two citations. She provides both, and the professor adds a presentation requirement.', 'Maya est informée que le projet de classe est terminé avec un schéma et deux citations. Elle fournit les deux, et le professeur ajoute maintenant une présentation.'],
  ['Ben is told the phone plan is discounted if he keeps the same number. He does, and the agent says he must also buy accessories to qualify.', 'Ben est informé que le forfait telephonique est réduit s il garde le même numéro. Il le garde, et l agent dit qu il doit aussi acheter des accessoires pour en profiter.'],
  ['Lina is told the cleanup team needs five people. Five show up, and the coordinator says seven are now needed.', 'Lina est informée que l équipe de nettoyage a besoin de cinq personnes. Cinq se présentent, et la coordinatrice dit que sept sont maintenant nécessaires.'],
  ['Omar is told the driving lesson passes if he parks correctly once. He does, and the examiner says he must also reverse perfectly twice.', 'Omar est informé que la leçon de conduite est validée s il se gare correctement une fois. Il le fait, et l examinateur dit qu il doit aussi reculer parfaitement deux fois.'],
  ['Priya is told the donation goal is met at 200 dollars. She raises 200, and the organizer says they really need 300 because of "extra costs."', 'Priya est informée que l objectif de don est atteint à 200 dollars. Elle récolte 200, et l organisateur dit qu il en faut en réalité 300 à cause des "frais supplémentaires".'],
  ['Eli is told the cooking contest score depends on taste. He wins on taste, and the panel says plating now matters more.', 'Eli est informé que le concours de cuisine dépend du goût. Il gagne sur le goût, et le jury dit que le dressage compte maintenant plus.'],
  ['Nora is told the homework passes if it has all the answers. It does, and the teacher says neat handwriting is now part of the rule.', 'Nora est informée que le devoir est validé s il contient toutes les réponses. C est le cas, et l enseignante dit qu une écriture soignée fait maintenant partie de la règle.'],
  ['Ari is told the marathon qualifies him if he finishes under four hours. He does, and the race director says he needs under three-fifty now.', 'Ari est informé qu il se qualifie pour le marathon s il termine sous quatre heures. Il y parvient, et le directeur de course dit qu il faut maintenant faire moins de trois heures cinquante.'],
  ['Rita is told the scholarship interview needs one reference letter. She brings one, and the panel asks for three letters instead.', 'Rita est informée que l entretien de bourse demande une lettre de recommandation. Elle en apporte une, et le jury demande trois lettres à la place.'],
  ['Tia is told the coffee loyalty card is full after ten drinks. She reaches ten, and the barista says the new card now needs twelve.', 'Tia est informée que la carte fidélité du café est pleine après dix boissons. Elle atteint dix, et le barista dit que la nouvelle carte en demande douze.'],
  ['Grant is told the parking permit costs less if he registers before Friday. He registers, and the office says the discount only applies after an additional form.', 'Grant est informé que le permis de stationnement coûte moins cher s il s inscrit avant vendredi. Il s inscrit, et le bureau dit que la réduction ne vaut qu avec un formulaire supplémentaire.'],
  ['Hugo is told the tax help session is free for residents. He is a resident, and staff say he must also bring proof of utility payments.', 'Hugo est informé que la séance d aide fiscale est gratuite pour les résidents. Il est résident, et le personnel dit qu il doit aussi apporter une preuve de paiement des factures.'],
  ['Jules is told the bike repair voucher covers one broken part. He uses it, and the shop adds labor as a new condition.', 'Jules est informé que le bon de réparation de vélo couvre une pièce cassée. Il l utilise, et l atelier ajoute la main-d oeuvre comme nouvelle condition.'],
  ['Mia is told the volunteer board approves anyone with two recommendation emails. She gets two, and then the board wants in-person endorsements.', 'Mia est informée que le conseil des bénévoles approuve toute personne ayant deux emails de recommandation. Elle en obtient deux, et le conseil veut ensuite des soutiens en personne.'],
  ['Sam is told the band can audition with one song. He performs one, and the leader says three songs are now required.', 'Sam est informé que le groupe peut auditionner avec une chanson. Il en interprète une, et le leader dit que trois chansons sont maintenant requises.'],
  ['Zoe is told the rent application is complete with proof of income. She provides it, and the agent says a credit score is now mandatory.', 'Zoé est informée que la demande de location est complète avec une preuve de revenu. Elle la fournit, et l agent dit qu un score de crédit est maintenant obligatoire.'],
  ['Kai is told the moving checklist is done when the boxes are labeled. He labels them, and then the mover says each box must also be color-coded.', 'Kai est informé que la liste de déménagement est terminée lorsque les cartons sont étiquetés. Il le fait, et le déménageur dit que chaque carton doit aussi être code par couleur.'],
  ['Nina is told the fundraiser counts once ten people donate. Ten do, and the organizer says the target has moved to fifteen.', 'Nina est informée que la collecte compte une fois que dix personnes font un don. Dix le font, et l organisateur dit que l objectif est passé à quinze.'],
];

const OPTIONS_EN = ['Moving the Goalposts', 'No True Scotsman', 'Special Pleading', 'Straw Man'];
const OPTIONS_FR = ['Déplacer les buts', 'Aucun vrai Ecossais', 'Exception ad hoc', 'Homme de paille'];

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

function makeQuestions(language: 'en' | 'fr'): Question[] {
  return SCENARIOS.map(([english, french], index) => {
    const correctIndex = index % 4;
    const isFrench = language === 'fr';
    return {
      id: 37151 + index,
      level: 4,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Déplacer les buts' : 'Moving the Goalposts',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? "La personne change la règle après coup pour que le premier résultat ne compte plus."
        : 'The person changes the rule after the fact so the first result no longer counts.',
      detailedExplanationBeginner: isFrench
        ? 'Le critère est modifié après que la personne l a déjà respecté.'
        : 'The standard is changed after the person has already met it.',
      detailedExplanationIntermediate: isFrench
        ? 'Au lieu d accepter le résultat initial, l interlocuteur ajoute une nouvelle exigence et fait semblant que la cible a toujours été là.'
        : 'Instead of accepting the original result, the speaker adds a new requirement and pretends the target was always there.',
      detailedExplanationExpert: isFrench
        ? "Déplacer les buts consiste a changer les criteres en cours de route pour eviter de reconnaitre qu un argument, une preuve ou un effort a déjà repondu a l exigence initiale. Le probleme n est pas la nouvelle exigence elle-meme, mais le fait qu elle apparaisse seulement apres coup."
        : 'Moving the goalposts means changing the criteria midstream to avoid admitting that an argument, proof, or effort already met the original demand. The problem is not the new requirement itself, but that it appears only after the first standard was satisfied.',
      questionFormat: 'standard',
    };
  });
}

export const MOVING_GOALPOSTS_EXPANSION_EN: Question[] = makeQuestions('en');
export const MOVING_GOALPOSTS_EXPANSION_FR: Question[] = makeQuestions('fr');

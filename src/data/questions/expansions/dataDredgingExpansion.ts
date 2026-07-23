import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ['After trying twelve breakfast choices, Ava only mentions the one day her mood was best and says that cereal always improves mornings.', "Apres avoir essaye douze petits-dejeuners, Ava ne parle que du jour ou son humeur etait la meilleure et affirme que cette cereale ameliore toujours les matinees."],
  ['A coach tests five workout plans, keeps the one that matches a good week, and calls it proof that the plan works.', "Un coach teste cinq programmes sportifs, garde celui qui correspond a une bonne semaine et presente cela comme une preuve que le programme marche."],
  ['A student checks a dozen study playlists, finds one that lined up with a high quiz score, and says the playlist caused the score.', "Un eleve verifie une douzaine de playlists d'etude, en trouve une qui correspond a une bonne note et dit que la playlist a cause le resultat."],
  ['A store compares twenty ad slogans, keeps the one that got the most clicks, and claims the wording is magically persuasive.', "Un magasin compare vingt slogans publicitaires, garde celui qui a obtenu le plus de clics et affirme que la formulation est magiquement persuasive."],
  ['A friend watches eight sleep hacks, picks the one that followed a decent night, and announces it is the only real cure for bad sleep.', "Un ami regarde huit astuces pour dormir, choisit celle qui a suivi une nuit correcte et annonce que c'est le seul vrai remede au mauvais sommeil."],
  ['A manager reviews every possible chart until one tiny trend looks impressive and then says the new policy is a success.', "Un responsable examine tous les graphiques possibles jusqu'a ce qu'une petite tendance paraisse impressionnante, puis dit que la nouvelle politique est un succes."],
  ['A podcaster runs a dozen polls, highlights the one result that fits the intro he wanted, and calls it audience truth.', "Un podcasteur lance une douzaine de sondages, met en avant le seul resultat qui colle a l'introduction qu'il voulait et appelle cela la verite du public."],
  ['A gamer tries many settings, notices one win after a lucky round, and says the settings are the reason he won.', "Un joueur essaie plusieurs reglages, remarque une victoire apres un tour chanceux et affirme que ces reglages sont la raison de sa victoire."],
  ['A parent tests snacks, finds one that happened before an easy homework session, and concludes the snack makes homework easier.', "Un parent teste des collations, en trouve une qui precedait une session de devoirs facile et conclut que cette collation rend les devoirs plus faciles."],
  ['A teacher looks at fifteen classroom tricks, keeps the one that matched a calm Friday, and tells everyone the trick is proven.', "Un enseignant examine quinze astuces de classe, garde celle qui correspondait a un vendredi calme et dit a tout le monde que l'astuce est prouvee."],
  ['A runner logs music, weather, socks, and coffee, then notices one combo before a fast race and claims the combo explains speed.', "Un coureur note la musique, la meteo, les chaussettes et le cafe, puis remarque une combinaison avant une course rapide et affirme que cette combinaison explique la vitesse."],
  ['A baker samples many frosting colors, keeps the one used on the day sales were high, and says the color increased sales.', "Un patissier teste de nombreuses couleurs de glaçage, garde celle utilisee le jour ou les ventes etaient elevees et dit que la couleur a augmente les ventes."],
  ['A traveler checks ten hotel habits, finds one that happened before a smooth trip, and calls it the secret to better travel.', "Un voyageur verifie dix habitudes d'hotel, en trouve une qui a precede un voyage sans probleme et l'appelle le secret de meilleurs voyages."],
  ['A student compares note formats, keeps the one that matched a good exam, and tells classmates the format guarantees success.', "Un eleve compare les formats de notes, garde celui qui correspondait a un bon examen et dit a ses camarades que ce format garantit la reussite."],
  ['A streamer studies many thumbnails, chooses the one from a viral week, and claims the thumbnail style causes popularity.', "Un streamer etudie de nombreuses miniatures, choisit celle d'une semaine virale et affirme que le style de miniature cause la popularite."],
  ['A doctor notices one vitamin brand before a good day, ignores the rest, and says the brand is clearly helping energy.', "Un medecin remarque une marque de vitamines avant une bonne journee, ignore le reste et dit que la marque aide clairement a avoir de l'energie."],
  ['A friend tries a dozen phone wallpapers, keeps the one on the day a job offer arrived, and says the wallpaper brought the offer.', "Un ami essaie une douzaine de fonds d'ecran, garde celui du jour ou une offre d'emploi est arrivee et dit que le fond d'ecran a amene l'offre."],
  ['A cafe owner tracks every playlist, keeps the one used on a rainy day with strong sales, and claims the playlist drives revenue.', "Un proprietaire de cafe suit toutes les playlists, garde celle utilisee un jour de pluie avec de fortes ventes et affirme que la playlist stimule le chiffre d'affaires."],
  ['A student searches many class notes, finds one keyword before a good grade, and says the keyword is the winning formula.', "Un eleve cherche dans de nombreuses notes de cours, trouve un mot cle avant une bonne note et dit que ce mot cle est la formule gagnante."],
  ['A team leader tests six meeting lengths, picks the one that happened before a productive afternoon, and says the length boosts output.', "Un chef d'equipe teste six durees de reunion, choisit celle qui precedait un apres-midi productif et dit que cette duree augmente la productivite."],
  ['A pet owner compares treats, picks the one from the day the dog was calm, and says the treat makes dogs calm.', "Un proprietaire de chien compare les friandises, choisit celle du jour ou le chien etait calme et dit que la friandise rend les chiens calmes."],
  ['A shopper tries many checkout times, keeps the one that preceded a polite cashier, and claims the time slot causes kindness.', "Un client essaie plusieurs horaires de passage en caisse, garde celui qui precedait un caissier poli et affirme que ce creneau provoque la gentillesse."],
  ['A designer looks through dozens of palettes, keeps the one tied to a good presentation, and says the palette makes presentations better.', "Un designer parcourt des dizaines de palettes, garde celle associee a une bonne presentation et dit que la palette rend les presentations meilleures."],
  ['A club president examines every signup pattern, keeps the one from a busy week, and says that pattern predicts membership growth.', "Un president de club examine tous les motifs d'inscription, garde celui d'une semaine chargee et dit que ce motif predit la croissance des membres."],
  ['A teenager notices one lucky hoodie before a good test, ignores the other 29 hoodies, and says the hoodie is a genius exam tool.', "Un adolescent remarque un seul sweat porte avant un bon controle, ignore les 29 autres sweats et dit que ce sweat est un outil genial pour les examens."],
  ['A librarian tests several email subject lines, keeps the one from the day with a full inbox, and says the subject line increased attention.', "Une bibliothecaire teste plusieurs objets d'e-mail, garde celui du jour ou la boite de reception etait pleine et dit que l'objet a augmente l'attention."],
  ['A volunteer checks many shifts, finds one before a cheerful donation drive, and says that shift caused the donations.', "Un benevole verifie de nombreux services, en trouve un avant une collecte de dons joyeuse et dit que ce service a cause les dons."],
  ['A musician compares setlists, keeps the one before the loudest crowd, and calls it proof that the order creates applause.', "Un musicien compare des listes de morceaux, garde celle d'avant la foule la plus bruyante et presente cela comme une preuve que l'ordre cree les applaudissements."],
  ['A rider tests route apps, keeps the one that matched a sunny commute, and says the app makes traffic disappear.', "Un cycliste teste des applications de trajet, garde celle qui correspondait a un trajet ensoleille et dit que l'application fait disparaitre le trafic."],
  ['A baker reviews ten oven temperatures, keeps the one tied to a fluffy batch, and says the temperature guarantees perfect cakes.', "Un patissier examine dix temperatures de four, garde celle liee a une fournee moelleuse et dit que la temperature garantit des gateaux parfaits."],
  ['A parent checks chore charts, keeps the one used before a peaceful evening, and says the chart calms the whole house.', "Un parent verifie les tableaux de taches, garde celui utilise avant une soiree calme et dit que le tableau apaise toute la maison."],
  ['A hobbyist finds one lucky plant misting before good growth, skips the rest, and says misting creates giant plants.', "Un amateur trouve une seule vaporisation de plante avant une bonne croissance, ignore le reste et dit que vaporiser cree des plantes geantes."],
  ['A student compares highlight colors, keeps the one from a successful mock exam, and says the color improves memory.', "Un eleve compare les couleurs de surligneurs, garde celle d'un bon examen blanc et dit que la couleur ameliore la memoire."],
  ['A coach reviews many halftime speeches, keeps the one before a win, and says that speech caused the victory.', "Un coach examine de nombreux discours de mi-temps, garde celui d'avant une victoire et dit que ce discours a cause la victoire."],
  ['A shopper tests shopping lists, keeps the one from the day with a cheap receipt, and says the list saves money.', "Un client teste des listes de courses, garde celle du jour ou le ticket etait bon marche et dit que la liste economise de l'argent."],
  ['A student studies different desk setups, keeps the one from a focused afternoon, and says that setup creates concentration.', "Un eleve etudie differents amenagements de bureau, garde celui d'un apres-midi concentre et dit que cette installation cree la concentration."],
  ['A friend looks at many rainy-day routines, keeps the one before a nice dinner, and says the routine causes good food.', "Un ami regarde de nombreuses routines de jour de pluie, garde celle d'avant un bon diner et dit que cette routine cause la bonne nourriture."],
  ['A teacher tracks homework app usage, keeps the one tied to a good quiz, and tells students the app is the reason they learned.', "Un enseignant suit l'utilisation des applications de devoirs, garde celle liee a un bon quiz et dit aux eleves que l'application est la raison de leurs apprentissages."],
  ['A gamer studies three controller grips, keeps the one from a winning streak, and says the grip guarantees wins.', "Un joueur etudie trois prises de manette, garde celle d'une serie de victoires et dit que cette prise garantit les victoires."],
  ['A customer notices one lucky receipt before a good refund, overlooks the others, and says the payment method is magical.', "Un client remarque un seul ticket avant un bon remboursement, ignore les autres et dit que le moyen de paiement est magique."],
  ['A fitness influencer tries many morning routines, keeps the one from the week with fewer skips, and says the routine stops all procrastination.', "Une influenceuse fitness essaie de nombreuses routines du matin, garde celle de la semaine avec moins d'absences et dit que la routine arrete toute procrastination."],
  ['A student checks seat locations, keeps the one from a good lecture, and concludes the seat position makes teachers smarter.', "Un eleve verifie les places assises, garde celle d'un bon cours et conclut que la place rend les professeurs plus intelligents."],
  ['A cafe owner studies dozens of napkin designs, keeps the one from the day with a line out the door, and says the napkin design drove the crowd.', "Un proprietaire de cafe etudie des dizaines de motifs de serviettes, garde celui du jour ou la file etait longue et dit que le motif a attire la foule."],
  ['A parent tests many bedtime stories, keeps the one from the easiest bedtime, and says the story forces good behavior.', "Un parent teste de nombreux livres du soir, garde celui d'un coucher facile et dit que l'histoire force le bon comportement."],
  ['A student looks at every possible class schedule, keeps the one before a stress-free week, and says the schedule cures stress.', "Un eleve regarde tous les emplois du temps possibles, garde celui d'avant une semaine sans stress et dit que l'emploi du temps guerit le stress."],
  ['A manager compares thank-you email templates, keeps the one from a successful project, and says the template creates success.', "Un responsable compare des modeles d'e-mails de remerciement, garde celui d'un projet reussi et dit que le modele cree le succes."],
  ['A runner studies hydration bottles, keeps the one from the day with a good time, and says the bottle is the secret to speed.', "Un coureur etudie les gourdes, garde celle du jour ou son temps etait bon et dit que la gourde est le secret de la vitesse."],
  ['A student reviews all the search filters, keeps the one that matched a high score, and says the filter uncovers truth better than the others.', "Un eleve examine tous les filtres de recherche, garde celui qui correspondait a une bonne note et dit que le filtre decouvre mieux la verite que les autres."],
  ['A podcast host compares episode titles, keeps the one from the most shared episode, and says the title alone caused the sharing.', "Un animateur de podcast compare les titres des episodes, garde celui de l'episode le plus partage et dit que le titre a lui seul a cause le partage."],
  ['A student tests desk lamps, keeps the one from a focused night, and says the lamp makes perfect grades.', "Un eleve teste des lampes de bureau, garde celle d'une nuit concentree et dit que la lampe produit des notes parfaites."],
  ['A researcher tries thirty taglines, keeps the one that matched a single good sales week, and says the tagline drives revenue.', "Un chercheur essaie trente slogans, garde celui qui correspondait a une seule bonne semaine de ventes et dit que le slogan stimule les revenus."],
  ['A parent tests five snack rules, keeps the one before a calm afternoon, and calls it the only rule that works.', "Un parent teste cinq regles de collation, garde celle d'avant une apres-midi calme et l'appelle la seule regle qui marche."],
  ['A coach checks many warm-up songs, keeps the one before a fast run, and says the song causes speed.', "Un coach verifie de nombreuses chansons d'echauffement, garde celle d'avant une course rapide et dit que la chanson cause la vitesse."],
  ['A student scans dozens of tutoring apps, keeps the one before a good quiz, and says the app guarantees high scores.', "Un eleve examine des dizaines d'applications de soutien scolaire, garde celle d'avant un bon quiz et dit que l'application garantit de bonnes notes."],
  ['A team leader tests every snack in the break room, keeps the one from a good afternoon, and says the snack improves teamwork.', "Un chef d'equipe teste chaque collation de la salle de pause, garde celle d'un bon apres-midi et dit que la collation ameliore le travail d'equipe."],
  ['A blogger reviews countless photo filters, keeps the one used before a post that went viral, and says the filter creates popularity.', "Un blogueur examine d'innombrables filtres photo, garde celui utilise avant une publication devenue virale et dit que le filtre cree la popularite."],
  ['A manager compares ten meeting snacks, keeps the one from a productive week, and declares that snack a productivity tool.', "Un responsable compare dix collations de reunion, garde celle d'une semaine productive et declare que cette collation est un outil de productivite."],
  ['A gamer tests many controller grips, keeps the one from a lucky win, and says the grip causes victories.', "Un joueur teste de nombreuses prises de manette, garde celle d'une victoire chanceuse et dit que la prise cause les victoires."],
  ['A student checks every classroom light color, keeps the one from a good lesson, and says the color improves understanding.', "Un eleve verifie chaque couleur de lumiere de la classe, garde celle d'un bon cours et dit que la couleur ameliore la comprehension."],
  ['A shop owner samples every afternoon playlist, keeps the one from a busy day, and says the playlist brings customers.', "Un proprietaire de magasin teste toutes les playlists de l'apres-midi, garde celle d'un jour charge et dit que la playlist attire les clients."]
];

const OPTIONS_EN = ['Data Dredging', 'Base Rate Neglect', 'Confirmation Bias', 'Cherry Picking'];
const OPTIONS_FR = ['Exploration abusive des données', 'Négligence du taux de base', 'Biais de confirmation', 'Sélection biaisée'];

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
      id: 33301 + index,
      level: 3,
      persona_stage: PersonaStage.CRAB,
      concept: isFrench ? 'Exploration abusive des données' : 'Data Dredging',
      difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
      subLevel: subLevelFor(index),
      question: `${isFrench ? 'Quel sophisme est illustré ici ?' : 'Which fallacy is illustrated here?'}\n\n"${isFrench ? french : english}"`,
      options: rotatedOptions(isFrench ? OPTIONS_FR : OPTIONS_EN, correctIndex),
      correct_option_index: correctIndex,
      explanation: isFrench
        ? "On cherche assez longtemps dans les données pour trouver un resultat qui a l'air convaincant, puis on l'annonce comme une decouverte."
        : 'The speaker digs through enough data to find one convincing-looking result and then presents it as a discovery.',
      detailedExplanationBeginner: isFrench
        ? "On choisit le resultat qui arrange apres avoir teste beaucoup trop de choses."
        : 'You pick the result that looks good after testing far too many things.',
      detailedExplanationIntermediate: isFrench
        ? "L'exploration abusive des donnees apparait quand on essaie beaucoup de combinaisons, puis qu'on ne montre que celle qui semble marcher."
        : 'Data dredging happens when many combinations are tried and only the one that seems to work is shown.',
      detailedExplanationExpert: isFrench
        ? "Ce sophisme confond une trouvaille accidentelle avec une preuve. Plus on teste d'angles, plus on a de chances de tomber sur une correspondance qui n'a aucune valeur causale."
        : 'This fallacy confuses an accidental finding with proof. The more angles you test, the more likely you are to find a match that has no causal value.',
      questionFormat: 'standard',
    };
  });
}

export const DATA_DREDGING_EXPANSION_EN: Question[] = createQuestions('en');
export const DATA_DREDGING_EXPANSION_FR: Question[] = createQuestions('fr');

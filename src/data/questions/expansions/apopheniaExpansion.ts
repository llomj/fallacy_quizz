import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
['Mia sees 11:11 three days running and decides the universe approves her new job interview.','Mia voit 11 h 11 trois jours de suite et décide que l’univers approuve son nouvel entretien.'],
['Leo wins twice while wearing red socks and concludes the socks control his luck at cards.','Leo gagne deux fois avec des chaussettes rouges et conclut qu’elles contrôlent sa chance aux cartes.'],
['Three songs mention rain, so Ana thinks the radio is warning her about a storm.','Trois chansons parlent de pluie ; Ana pense donc que la radio annonce une tempête.'],
['Omar notices two delayed buses numbered 7 and calls seven the city’s unlucky number.','Omar remarque deux bus 7 retardés et déclare que sept porte malheur à la ville.'],
['Priya finds heart shapes in coffee foam and believes they predict a romance.','Priya voit des cœurs dans la mousse du café et croit qu’ils prédisent une histoire d’amour.'],
['Ben’s phone battery dies after two calls from Sam, so he thinks Sam’s calls drain it.','La batterie de Ben meurt après deux appels de Sam ; il croit que Sam la vide.'],
['Nina sees three blue cars before an interview and treats them as a success signal.','Nina voit trois voitures bleues avant un entretien et y lit un signe de réussite.'],
['Kai hears his name in random café chatter and thinks strangers are discussing him.','Kai croit entendre son prénom dans le brouhaha d’un café et pense que des inconnus parlent de lui.'],
['Clara’s toast resembles a cat, so she takes it as a message to adopt one.','La tartine de Clara ressemble à un chat ; elle y voit un message lui disant d’en adopter un.'],
['Theo connects unrelated price changes into a secret supermarket code.','Theo relie des changements de prix sans rapport et y voit un code secret du supermarché.'],
['Fatima gets two green lights after making wishes and calls traffic lights wish-granters.','Fatima obtient deux feux verts après des vœux et croit que les feux les exaucent.'],
['Jules sees the same stranger twice and invents a hidden surveillance plot.','Jules voit deux fois le même inconnu et invente un complot de surveillance.'],
['Mei finds faces in wall stains and says the house is sending warnings.','Mei voit des visages dans des taches murales et affirme que la maison l’avertit.'],
['Ravi links three celebrity birthdays to earthquakes and claims a cosmic cycle.','Ravi relie trois anniversaires de célébrités à des séismes et annonce un cycle cosmique.'],
['Zoe’s favorite song plays after good news twice, so she calls it a good-news detector.','La chanson préférée de Zoe passe deux fois après une bonne nouvelle ; elle la dit détectrice de bonheur.'],
['Malik sees repeating digits on receipts and thinks they reveal tomorrow’s lottery numbers.','Malik voit des chiffres répétés sur ses tickets et pense qu’ils révèlent la loterie de demain.'],
['Grace spots animal shapes in clouds and treats them as travel instructions.','Grace voit des animaux dans les nuages et les prend pour des instructions de voyage.'],
['Luis notices coworkers sneeze before meetings and predicts bad meetings from sneezes.','Luis remarque des éternuements avant des réunions et prédit leur échec grâce à eux.'],
['Emma receives spam after dreaming of money and calls the dream prophetic.','Emma reçoit un pourriel après avoir rêvé d’argent et qualifie son rêve de prophétique.'],
['Hugo maps random sidewalk cracks into a route he believes was designed for him.','Hugo transforme des fissures aléatoires du trottoir en itinéraire conçu pour lui.'],
['Yara sees three dogs bark at noon and announces a mysterious noon-dog rule.','Yara entend trois chiens aboyer à midi et annonce une mystérieuse règle canine de midi.'],
['Adam connects shirt colors with test scores from four classmates.','Adam relie la couleur des chemises aux notes de quatre camarades.'],
['Sofia thinks shuffled music titles form sentences addressed personally to her.','Sofia croit que les titres mélangés de sa musique composent des phrases pour elle.'],
['Dan sees a smiley face in random pebbles and calls it approval from nature.','Dan voit un sourire dans des cailloux et y lit l’approbation de la nature.'],
['Iris links two broken mugs on Mondays and declares Mondays hostile to mugs.','Iris relie deux tasses cassées un lundi et déclare le lundi ennemi des tasses.'],
['Tom treats accidental book-page numbers as advice about major decisions.','Tom prend des numéros de pages ouverts au hasard pour des conseils importants.'],
['Salma sees initials in license plates and thinks they predict whom she will meet.','Salma voit des initiales sur des plaques et croit qu’elles prédisent ses rencontres.'],
['Eric finds a triangle among stars and claims it points to hidden treasure.','Eric trouve un triangle parmi les étoiles et affirme qu’il indique un trésor.'],
['Nora links two headaches with emails from her boss and calls the emails cursed.','Nora relie deux maux de tête aux courriels de sa patronne et les dit maudits.'],
['Paul hears three clock chimes during arguments and treats them as verdicts.','Paul entend trois sonneries pendant des disputes et les prend pour des verdicts.'],
['Ava thinks random autocorrect errors contain secret predictions.','Ava pense que les erreurs aléatoires de correction automatique cachent des prédictions.'],
['Jon sees a face in the moon and concludes it watches his neighborhood.','Jon voit un visage dans la lune et conclut qu’elle surveille son quartier.'],
['Kim connects café order numbers with events later that day.','Kim relie les numéros de commande du café aux événements de la journée.'],
['Mateo sees the same word in two books and calls it a message about his destiny.','Mateo voit le même mot dans deux livres et y lit un message sur son destin.'],
['Lucie treats three dropped spoons as a pattern predicting visitors.','Lucie transforme trois cuillères tombées en présage de visiteurs.'],
['Amir notices birds land after his texts and thinks they confirm his messages.','Amir voit des oiseaux se poser après ses textos et croit qu’ils les confirment.'],
['Lea links random stock-chart wiggles to shapes from ancient symbols.','Lea relie les mouvements aléatoires d’un graphique boursier à des symboles anciens.'],
['Sam thinks consecutive rainy birthdays prove the weather remembers him.','Sam croit que plusieurs anniversaires pluvieux prouvent que la météo se souvient de lui.'],
['Mila sees arrows in wood grain and follows them as if someone placed them.','Mila voit des flèches dans les veines du bois et les suit comme si elles étaient placées exprès.'],
['Ken interprets random dog barks as coded answers to his questions.','Ken interprète des aboiements aléatoires comme des réponses codées.'],
['Rina sees two canceled plans after wearing a hat and calls the hat unlucky.','Rina subit deux annulations avec un chapeau et le déclare malchanceux.'],
['Max connects microwave beeps with incoming messages and claims they are synchronized.','Max relie les bips du micro-ondes à ses messages et affirme qu’ils sont synchronisés.'],
['Lina reads a meaningful word into random letter tiles spilled on the floor.','Lina lit un mot significatif dans des lettres tombées au hasard.'],
['Noah sees facial expressions in electrical outlets and assigns them moods.','Noah voit des expressions sur les prises électriques et leur attribue des humeurs.'],
['Maya links three orange sunsets to arguments the next day.','Maya relie trois couchers de soleil orange aux disputes du lendemain.'],
['Eli treats two matching fortune cookies as proof of a planned message.','Eli prend deux messages identiques de biscuits chinois pour une communication organisée.'],
['Nadia believes random elevator stops spell out a lucky number sequence.','Nadia croit que les arrêts aléatoires de l’ascenseur composent une suite porte-bonheur.'],
['Alex sees a map in spilled cereal and claims it marks a future destination.','Alex voit une carte dans des céréales renversées et croit qu’elle indique une destination future.'],
['Sara connects three Wi-Fi outages with full moons and declares a lunar effect.','Sara relie trois pannes Wi-Fi à la pleine lune et annonce un effet lunaire.'],
['Romain hears repeated words in unrelated podcasts and thinks they coordinate a warning.','Romain entend les mêmes mots dans des podcasts sans rapport et croit à un avertissement coordonné.']
];

const EN=['Apophenia','Confirmation Bias','Gambler’s Fallacy','Illusory Correlation'];
const FR=['Apophénie','Biais de confirmation','Sophisme du joueur','Corrélation illusoire'];
const rotate=(a:string[],i:number)=>{const r=a.slice(1);r.splice(i,0,a[0]);return r;};
const sub=(i:number)=>i<17?SubLevel.BEGINNER:i<34?SubLevel.INTERMEDIATE:SubLevel.EXPERT;

function make(fr=false):Question[]{return SCENARIOS.map((s,i)=>{const c=i%4;return{
id:30301+i,level:3,persona_stage:PersonaStage.CRAB,concept:fr?'Apophénie':'Apophenia',
difficulty:i<17?1:i<34?2:3,subLevel:sub(i),
question:`${fr?'Quel biais est illustré ici ?':'Which bias is illustrated here?'}\n\n"${s[fr?1:0]}"`,
options:rotate(fr?FR:EN,c),correct_option_index:c,
explanation:fr?'Un motif significatif est inventé à partir de coïncidences ou de données aléatoires.':'A meaningful pattern is invented from coincidences or random data.',
detailedExplanationBeginner:fr?'Le cerveau voit un message là où il n’y a qu’une coïncidence.':'The mind sees a message where there is only coincidence.',
detailedExplanationIntermediate:fr?'Quelques ressemblances frappantes sont reliées sans preuve qu’un mécanisme réel les unit.':'A few striking similarities are connected without evidence of a real mechanism.',
detailedExplanationExpert:fr?'L’apophénie est la perception injustifiée de liens ou de motifs significatifs dans des informations aléatoires ou indépendantes.':'Apophenia is the unjustified perception of meaningful connections or patterns in random or independent information.',
questionFormat:'standard'};});}
export const APOPHENIA_EXPANSION_EN=make();
export const APOPHENIA_EXPANSION_FR=make(true);

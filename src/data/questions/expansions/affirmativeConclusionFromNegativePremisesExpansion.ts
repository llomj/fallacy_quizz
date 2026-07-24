import { PersonaStage, type Question, SubLevel } from '../../../types';

const SCENARIOS: ReadonlyArray<readonly [string, string]> = [
  ["No bakers are airline pilots. No airline pilots are gardeners. Therefore, some bakers are gardeners.", "Aucun boulanger n'est pilote de ligne. Aucun pilote de ligne n'est jardinier. Donc, certains boulangers sont jardiniers."],
  ["No skateboards are kitchen tools. No kitchen tools are musical instruments. Therefore, some skateboards are musical instruments.", "Aucun skateboard n'est un ustensile de cuisine. Aucun ustensile de cuisine n'est un instrument de musique. Donc, certains skateboards sont des instruments de musique."],
  ["Nobody who hates mornings joins the sunrise club. No sunrise-club member is a night owl. Therefore, everyone who hates mornings is a night owl.", "Aucune personne qui déteste le matin ne rejoint le club du lever du soleil. Aucun membre de ce club n'est un couche-tard. Donc, toutes les personnes qui détestent le matin sont des couche-tard."],
  ["No cats are certified lifeguards. No certified lifeguards avoid water. Therefore, some cats do not avoid water.", "Aucun chat n'est sauveteur diplômé. Aucun sauveteur diplômé n'évite l'eau. Donc, certains chats n'évitent pas l'eau."],
  ["No frozen pizzas are gourmet salads. No gourmet salads are midnight snacks. Therefore, some frozen pizzas are midnight snacks.", "Aucune pizza surgelée n'est une salade gastronomique. Aucune salade gastronomique n'est un encas de minuit. Donc, certaines pizzas surgelées sont des encas de minuit."],
  ["No broken umbrellas are reliable rain gear. No reliable rain gear is decorative furniture. Therefore, every broken umbrella is decorative furniture.", "Aucun parapluie cassé n'est un équipement de pluie fiable. Aucun équipement de pluie fiable n'est un meuble décoratif. Donc, tous les parapluies cassés sont des meubles décoratifs."],
  ["No karaoke champions are silent singers. No silent singers wake the neighbors. Therefore, some karaoke champions wake the neighbors.", "Aucun champion de karaoké n'est un chanteur silencieux. Aucun chanteur silencieux ne réveille les voisins. Donc, certains champions de karaoké réveillent les voisins."],
  ["No bicycles are sofas. No sofas are racing vehicles. Therefore, every bicycle is a racing vehicle.", "Aucun vélo n'est un canapé. Aucun canapé n'est un véhicule de course. Donc, tous les vélos sont des véhicules de course."],
  ["No homework folders are snack boxes. No snack boxes are waterproof containers. Therefore, some homework folders are waterproof containers.", "Aucun classeur de devoirs n'est une boîte à goûter. Aucune boîte à goûter n'est un récipient étanche. Donc, certains classeurs de devoirs sont des récipients étanches."],
  ["No sleepy baristas make decaf coffee. Nobody who makes decaf coffee wins espresso contests. Therefore, all sleepy baristas win espresso contests.", "Aucun barista somnolent ne prépare de café décaféiné. Personne ne préparant du décaféiné ne gagne de concours d'espresso. Donc, tous les baristas somnolents gagnent des concours d'espresso."],
  ["No rubber ducks are serious detectives. No serious detectives miss clues. Therefore, some rubber ducks do not miss clues.", "Aucun canard en plastique n'est un détective sérieux. Aucun détective sérieux ne rate d'indice. Donc, certains canards en plastique ne ratent aucun indice."],
  ["No library books are noisy appliances. No noisy appliances belong in quiet rooms. Therefore, all library books belong in quiet rooms.", "Aucun livre de bibliothèque n'est un appareil bruyant. Aucun appareil bruyant n'a sa place dans une salle calme. Donc, tous les livres de bibliothèque ont leur place dans une salle calme."],
  ["No marathon runners are couch potatoes. No couch potatoes collect race medals. Therefore, some marathon runners collect race medals.", "Aucun marathonien n'est un accro du canapé. Aucun accro du canapé ne collectionne les médailles de course. Donc, certains marathoniens collectionnent les médailles de course."],
  ["No phone chargers are sandwiches. No sandwiches power devices. Therefore, every phone charger powers devices.", "Aucun chargeur de téléphone n'est un sandwich. Aucun sandwich n'alimente un appareil. Donc, tous les chargeurs de téléphone alimentent des appareils."],
  ["No messy desks are museum exhibits. No museum exhibits contain unpaid bills. Therefore, some messy desks contain unpaid bills.", "Aucun bureau en désordre n'est une pièce de musée. Aucune pièce de musée ne contient de factures impayées. Donc, certains bureaux en désordre contiennent des factures impayées."],
  ["No toddlers are driving instructors. No driving instructors use booster seats. Therefore, all toddlers use booster seats.", "Aucun tout-petit n'est moniteur d'auto-école. Aucun moniteur d'auto-école n'utilise de siège rehausseur. Donc, tous les tout-petits utilisent un siège rehausseur."],
  ["No rainy picnics are beach parties. No beach parties need indoor games. Therefore, some rainy picnics need indoor games.", "Aucun pique-nique pluvieux n'est une fête sur la plage. Aucune fête sur la plage n'a besoin de jeux d'intérieur. Donc, certains pique-niques pluvieux ont besoin de jeux d'intérieur."],
  ["No alarm clocks are bedtime stories. No bedtime stories ring at dawn. Therefore, every alarm clock rings at dawn.", "Aucun réveil n'est une histoire du soir. Aucune histoire du soir ne sonne à l'aube. Donc, tous les réveils sonnent à l'aube."],
  ["No cheap headphones are concert halls. No concert halls fit in pockets. Therefore, some cheap headphones fit in pockets.", "Aucun casque bon marché n'est une salle de concert. Aucune salle de concert ne tient dans une poche. Donc, certains casques bon marché tiennent dans une poche."],
  ["No family recipes are laboratory formulas. No laboratory formulas taste like childhood. Therefore, some family recipes taste like childhood.", "Aucune recette familiale n'est une formule de laboratoire. Aucune formule de laboratoire n'a le goût de l'enfance. Donc, certaines recettes familiales ont le goût de l'enfance."],
  ["No bus drivers are traffic lights. No traffic lights know shortcuts. Therefore, all bus drivers know shortcuts.", "Aucun conducteur de bus n'est un feu de circulation. Aucun feu de circulation ne connaît de raccourci. Donc, tous les conducteurs de bus connaissent des raccourcis."],
  ["No houseplants are weather apps. No weather apps need sunlight. Therefore, every houseplant needs sunlight.", "Aucune plante d'intérieur n'est une application météo. Aucune application météo n'a besoin de soleil. Donc, toutes les plantes d'intérieur ont besoin de soleil."],
  ["No birthday cakes are fitness trackers. No fitness trackers hold candles. Therefore, some birthday cakes hold candles.", "Aucun gâteau d'anniversaire n'est un bracelet d'activité. Aucun bracelet d'activité ne porte de bougies. Donc, certains gâteaux d'anniversaire portent des bougies."],
  ["No chess pieces are football fans. No football fans move diagonally. Therefore, some chess pieces move diagonally.", "Aucune pièce d'échecs n'est supportrice de football. Aucun supporter de football ne se déplace en diagonale. Donc, certaines pièces d'échecs se déplacent en diagonale."],
  ["No winter coats are tropical shirts. No tropical shirts keep hikers warm. Therefore, all winter coats keep hikers warm.", "Aucun manteau d'hiver n'est une chemise tropicale. Aucune chemise tropicale ne tient chaud aux randonneurs. Donc, tous les manteaux d'hiver tiennent chaud aux randonneurs."],
  ["No forgotten passwords are open doors. No open doors block account access. Therefore, all forgotten passwords block account access.", "Aucun mot de passe oublié n'est une porte ouverte. Aucune porte ouverte ne bloque l'accès à un compte. Donc, tous les mots de passe oubliés bloquent l'accès à un compte."],
  ["No comic books are tax forms. No tax forms feature superheroes. Therefore, some comic books feature superheroes.", "Aucune bande dessinée n'est une déclaration fiscale. Aucune déclaration fiscale ne met en scène des super-héros. Donc, certaines bandes dessinées mettent en scène des super-héros."],
  ["No camping tents are hotel rooms. No hotel rooms have fabric walls. Therefore, every camping tent has fabric walls.", "Aucune tente de camping n'est une chambre d'hôtel. Aucune chambre d'hôtel n'a de murs en tissu. Donc, toutes les tentes de camping ont des murs en tissu."],
  ["No spicy tacos are fire extinguishers. No fire extinguishers make your mouth burn. Therefore, some spicy tacos make your mouth burn.", "Aucun taco épicé n'est un extincteur. Aucun extincteur ne brûle la bouche. Donc, certains tacos épicés brûlent la bouche."],
  ["No school buses are roller skates. No roller skates carry thirty students. Therefore, some school buses carry thirty students.", "Aucun bus scolaire n'est une paire de rollers. Aucun roller ne transporte trente élèves. Donc, certains bus scolaires transportent trente élèves."],
  ["No goldfish are online influencers. No online influencers live in bowls. Therefore, some goldfish live in bowls.", "Aucun poisson rouge n'est influenceur en ligne. Aucun influenceur en ligne ne vit dans un bocal. Donc, certains poissons rouges vivent dans un bocal."],
  ["No reusable bottles are paper cups. No paper cups survive a year of hiking. Therefore, some reusable bottles survive a year of hiking.", "Aucune gourde réutilisable n'est un gobelet en papier. Aucun gobelet en papier ne résiste à un an de randonnée. Donc, certaines gourdes réutilisables résistent à un an de randonnée."],
  ["No dance teachers are statues. No statues count the beat. Therefore, all dance teachers count the beat.", "Aucun professeur de danse n'est une statue. Aucune statue ne compte le rythme. Donc, tous les professeurs de danse comptent le rythme."],
  ["No chocolate cookies are toothbrushes. No toothbrushes disappear from the snack jar. Therefore, some chocolate cookies disappear from the snack jar.", "Aucun cookie au chocolat n'est une brosse à dents. Aucune brosse à dents ne disparaît du bocal à goûter. Donc, certains cookies au chocolat disparaissent du bocal à goûter."],
  ["No neighborhood dogs are doorbells. No doorbells chase delivery vans. Therefore, some neighborhood dogs chase delivery vans.", "Aucun chien du quartier n'est une sonnette. Aucune sonnette ne poursuit les camionnettes de livraison. Donc, certains chiens du quartier poursuivent les camionnettes de livraison."],
  ["No movie spoilers are surprise parties. No surprise parties reveal the ending. Therefore, all movie spoilers reveal the ending.", "Aucun divulgâcheur de film n'est une fête surprise. Aucune fête surprise ne révèle la fin. Donc, tous les divulgâcheurs de film révèlent la fin."],
  ["No snowmen are summer tourists. No summer tourists melt at noon. Therefore, some snowmen melt at noon.", "Aucun bonhomme de neige n'est un touriste estival. Aucun touriste estival ne fond à midi. Donc, certains bonshommes de neige fondent à midi."],
  ["No grocery lists are treasure maps. No treasure maps mention milk. Therefore, some grocery lists mention milk.", "Aucune liste de courses n'est une carte au trésor. Aucune carte au trésor ne mentionne le lait. Donc, certaines listes de courses mentionnent le lait."],
  ["No office printers are magicians. No magicians jam before deadlines. Therefore, some office printers jam before deadlines.", "Aucune imprimante de bureau n'est magicienne. Aucun magicien ne se bloque avant une échéance. Donc, certaines imprimantes de bureau se bloquent avant une échéance."],
  ["No bedtime alarms are lullabies. No lullabies flash on phone screens. Therefore, all bedtime alarms flash on phone screens.", "Aucune alarme de coucher n'est une berceuse. Aucune berceuse ne clignote sur un écran de téléphone. Donc, toutes les alarmes de coucher clignotent sur un écran de téléphone."],
  ["No picnic ants are invited guests. No invited guests steal crumbs. Therefore, some picnic ants steal crumbs.", "Aucune fourmi de pique-nique n'est une invitée. Aucun invité ne vole de miettes. Donc, certaines fourmis de pique-nique volent des miettes."],
  ["No slow cookers are racing cars. No racing cars make stew. Therefore, every slow cooker makes stew.", "Aucune mijoteuse n'est une voiture de course. Aucune voiture de course ne prépare de ragoût. Donc, toutes les mijoteuses préparent du ragoût."],
  ["No squeaky doors are stealthy ninjas. No stealthy ninjas announce visitors. Therefore, some squeaky doors announce visitors.", "Aucune porte grinçante n'est un ninja furtif. Aucun ninja furtif n'annonce les visiteurs. Donc, certaines portes grinçantes annoncent les visiteurs."],
  ["No beach towels are business suits. No business suits absorb seawater. Therefore, some beach towels absorb seawater.", "Aucune serviette de plage n'est un costume d'affaires. Aucun costume d'affaires n'absorbe l'eau de mer. Donc, certaines serviettes de plage absorbent l'eau de mer."],
  ["No baby monitors are rock concerts. No rock concerts whisper at night. Therefore, all baby monitors whisper at night.", "Aucun babyphone n'est un concert de rock. Aucun concert de rock ne chuchote la nuit. Donc, tous les babyphones chuchotent la nuit."],
  ["No garden gnomes are postal workers. No postal workers stand beside flower beds all year. Therefore, some garden gnomes stand beside flower beds all year.", "Aucun nain de jardin n'est facteur. Aucun facteur ne reste près d'un parterre toute l'année. Donc, certains nains de jardin restent près d'un parterre toute l'année."],
  ["No socks lost in dryers are successful escape artists. No successful escape artists leave their partners behind. Therefore, some lost socks leave their partners behind.", "Aucune chaussette perdue dans un sèche-linge n'est une reine de l'évasion. Aucune reine de l'évasion n'abandonne sa partenaire. Donc, certaines chaussettes perdues abandonnent leur partenaire."],
  ["No cracked phone screens are stained-glass windows. No stained-glass windows make texting difficult. Therefore, some cracked phone screens make texting difficult.", "Aucun écran de téléphone fissuré n'est un vitrail. Aucun vitrail ne rend les SMS difficiles. Donc, certains écrans fissurés rendent les SMS difficiles."],
  ["No leftover noodles are charging cables. No charging cables taste better the next day. Therefore, some leftover noodles taste better the next day.", "Aucune nouille restante n'est un câble de recharge. Aucun câble de recharge n'est meilleur le lendemain. Donc, certaines nouilles restantes sont meilleures le lendemain."],
    ["No weekend naps are calendar meetings. No calendar meetings restore energy. Therefore, some weekend naps restore energy.", "Aucune sieste du week-end n'est une réunion inscrite au calendrier. Aucune réunion inscrite au calendrier ne redonne de l'énergie. Donc, certaines siestes du week-end redonnent de l'énergie."],
    ["No soccer balls are kitchen sinks. No kitchen sinks race down hills. Therefore, some soccer balls race down hills.", "Aucun ballon de foot n'est un évier de cuisine. Aucun évier de cuisine ne dévale les collines. Donc, certains ballons de foot dévalent les collines."],
    ["No paper clips are winter coats. No winter coats ring in the morning. Therefore, every paper clip rings in the morning.", "Aucun trombone n'est un manteau d'hiver. Aucun manteau d'hiver ne sonne le matin. Donc, tous les trombones sonnent le matin."],
    ["No lunchboxes are thunderclouds. No thunderclouds sit on shelves. Therefore, some lunchboxes sit on shelves.", "Aucune boîte à lunch n'est un nuage d'orage. Aucun nuage d'orage ne reste sur une étagère. Donc, certaines boîtes à lunch restent sur une étagère."],
    ["No rubber boots are poetry books. No poetry books fit in a mailbox. Therefore, some rubber boots fit in a mailbox.", "Aucune botte en caoutchouc n'est un livre de poésie. Aucun livre de poésie ne rentre dans une boîte aux lettres. Donc, certaines bottes en caoutchouc rentrent dans une boîte aux lettres."],
    ["No keyboards are sandwich wrappers. No sandwich wrappers wake up early. Therefore, all keyboards wake up early.", "Aucun clavier n'est un emballage de sandwich. Aucun emballage de sandwich ne se lève tôt. Donc, tous les claviers se lèvent tôt."],
    ["No library cards are basketball hoops. No basketball hoops are easy to pocket. Therefore, some library cards are easy to pocket.", "Aucune carte de bibliothèque n'est un panier de basket. Aucun panier de basket n'est facile à mettre dans une poche. Donc, certaines cartes de bibliothèque sont faciles à mettre dans une poche."],
    ["No muffins are traffic cones. No traffic cones taste sweet. Therefore, some muffins taste sweet.", "Aucun muffin n'est un cône de circulation. Aucun cône de circulation n'a un goût sucré. Donc, certains muffins ont un goût sucré."],
    ["No watering cans are tax forms. No tax forms float in bathtubs. Therefore, every watering can floats in bathtubs.", "Aucun arrosoir n'est une déclaration d'impôts. Aucune déclaration d'impôts ne flotte dans une baignoire. Donc, tous les arrosoirs flottent dans les baignoires."],
    ["No bookmarks are fire alarms. No fire alarms belong in backpacks. Therefore, some bookmarks belong in backpacks.", "Aucun marque-page n'est une alarme incendie. Aucune alarme incendie n'a sa place dans un sac à dos. Donc, certains marque-pages ont leur place dans un sac à dos."],
    ["No umbrellas are train stations. No train stations fold in half. Therefore, some umbrellas fold in half.", "Aucun parapluie n'est une gare. Aucune gare ne se plie en deux. Donc, certains parapluies se plient en deux."]
  ["No coffee mugs are traffic lights. No traffic lights taste spicy. Therefore, some coffee mugs taste spicy.", "Aucune tasse de café n'est un feu de circulation. Aucun feu de circulation n'a un goût épicé. Donc, certaines tasses de café ont un goût épicé."],
  ["No hallway rugs are moon rockets. No moon rockets fit in a pocket. Therefore, every hallway rug fits in a pocket.", "Aucun tapis de couloir n'est une fusée lunaire. Aucune fusée lunaire ne tient dans une poche. Donc, tous les tapis de couloir tiennent dans une poche."],
  ["No garden hoses are violin bows. No violin bows are breakfast cereal. Therefore, some garden hoses are breakfast cereal.", "Aucun tuyau d'arrosage n'est un archet de violon. Aucun archet de violon n'est un céréale du petit déjeuner. Donc, certains tuyaux d'arrosage sont des céréales du petit déjeuner."],
  ["No school lockers are snowflakes. No snowflakes hold lunchboxes. Therefore, some school lockers hold lunchboxes.", "Aucun casier scolaire n'est un flocon de neige. Aucun flocon de neige ne tient une boîte à lunch. Donc, certains casiers scolaires tiennent une boîte à lunch."],
  ["No bathroom mirrors are garden snakes. No garden snakes send emails. Therefore, all bathroom mirrors send emails.", "Aucun miroir de salle de bain n'est un serpent de jardin. Aucun serpent de jardin n'envoie de courriels. Donc, tous les miroirs de salle de bain envoient des courriels."],
  ["No beach balls are library fines. No library fines bounce. Therefore, some beach balls bounce.", "Aucun ballon de plage n'est une amende de bibliothèque. Aucune amende de bibliothèque ne rebondit. Donc, certains ballons de plage rebondissent."],
  ["No kitchen timers are sofa cushions. No sofa cushions beep. Therefore, every kitchen timer beeps.", "Aucun minuteur de cuisine n'est un coussin de canapé. Aucun coussin de canapé ne bippe. Donc, tous les minuteurs de cuisine bipent."],
  ["No school hallways are pizza boxes. No pizza boxes sing in the rain. Therefore, some school hallways sing in the rain.", "Aucun couloir d'école n'est une boîte à pizza. Aucune boîte à pizza ne chante sous la pluie. Donc, certains couloirs d'école chantent sous la pluie."],
  ["No bicycle helmets are thunderstorms. No thunderstorms fit on desks. Therefore, some bicycle helmets fit on desks.", "Aucun casque de vélo n'est un orage. Aucun orage ne tient sur un bureau. Donc, certains casques de vélo tiennent sur un bureau."],
  ["No laundry baskets are museum guides. No museum guides smell like oranges. Therefore, all laundry baskets smell like oranges.", "Aucun panier à linge n'est un guide de musée. Aucun guide de musée ne sent l'orange. Donc, tous les paniers à linge sentent l'orange."],
  ["No winter boots are paper airplanes. No paper airplanes keep feet warm. Therefore, some winter boots keep feet warm.", "Aucune botte d'hiver n'est un avion en papier. Aucun avion en papier ne garde les pieds au chaud. Donc, certaines bottes d'hiver gardent les pieds au chaud."]
  ,["No coffee makers are subway tickets. No subway tickets fit in a blender. Therefore, some coffee makers fit in a blender.", "Aucune cafetière n'est un billet de métro. Aucun billet de métro ne rentre dans un blender. Donc, certaines cafetières rentrent dans un blender."],
  ["No umbrellas are lunch menus. No lunch menus beep at midnight. Therefore, all umbrellas beep at midnight.", "Aucun parapluie n'est un menu de déjeuner. Aucun menu de déjeuner ne bippe à minuit. Donc, tous les parapluies bipent à minuit."],
  ["No backpacks are snow plows. No snow plows are pocket-sized. Therefore, some backpacks are pocket-sized.", "Aucun sac à dos n'est un chasse-neige. Aucun chasse-neige n'est de poche. Donc, certains sacs à dos sont de poche."],
  ["No keyboards are beach towels. No beach towels navigate traffic. Therefore, every keyboard navigates traffic.", "Aucun clavier n'est une serviette de plage. Aucune serviette de plage ne navigue dans la circulation. Donc, tous les claviers naviguent dans la circulation."],
  ["No coffee mugs are rockets. No rockets are dishwasher safe. Therefore, some coffee mugs are dishwasher safe.", "Aucune tasse à café n'est une fusée. Aucune fusée ne passe au lave-vaisselle. Donc, certaines tasses à café passent au lave-vaisselle."],
  ["No library cards are pizza slices. No pizza slices unlock doors. Therefore, all library cards unlock doors.", "Aucune carte de bibliothèque n'est une part de pizza. Aucune part de pizza n'ouvre les portes. Donc, toutes les cartes de bibliothèque ouvrent les portes."],
  ["No sneakers are filing cabinets. No filing cabinets fit under a chair. Therefore, some sneakers fit under a chair.", "Aucune paire de baskets n'est un classeur. Aucun classeur ne tient sous une chaise. Donc, certaines baskets tiennent sous une chaise."],
  ["No umbrellas are violin bows. No violin bows are breakfast cereal. Therefore, some umbrellas are breakfast cereal.", "Aucun parapluie n'est un archet de violon. Aucun archet de violon n'est un céréale du petit déjeuner. Donc, certains parapluies sont des céréales du petit déjeuner."],
  ["No school buses are teacups. No teacups carry twenty students. Therefore, all school buses carry twenty students.", "Aucun bus scolaire n'est une tasse à thé. Aucune tasse à thé ne transporte vingt élèves. Donc, tous les bus scolaires transportent vingt élèves."],
  ["No headphones are garden hoses. No garden hoses fit in a pocket. Therefore, some headphones fit in a pocket.", "Aucun casque audio n'est un tuyau d'arrosage. Aucun tuyau d'arrosage ne tient dans une poche. Donc, certains casques audio tiennent dans une poche."],
  ["No rain boots are chocolate bars. No chocolate bars last all winter. Therefore, every rain boot lasts all winter.", "Aucune botte de pluie n'est une tablette de chocolat. Aucune tablette de chocolat ne dure tout l'hiver. Donc, toutes les bottes de pluie durent tout l'hiver."],
  ["No alarm clocks are sandwiches. No sandwiches ring at dawn. Therefore, some alarm clocks ring at dawn.", "Aucun réveil n'est un sandwich. Aucun sandwich ne sonne à l'aube. Donc, certains réveils sonnent à l'aube."],
  ["No paper airplanes are washing machines. No washing machines fit in a backpack. Therefore, all paper airplanes fit in a backpack.", "Aucun avion en papier n'est une machine à laver. Aucune machine à laver ne tient dans un sac à dos. Donc, tous les avions en papier tiennent dans un sac à dos."],
  ["No garden gnomes are bus drivers. No bus drivers stand still all day. Therefore, some garden gnomes stand still all day.", "Aucun nain de jardin n'est chauffeur de bus. Aucun chauffeur de bus ne reste immobile toute la journée. Donc, certains nains de jardin restent immobiles toute la journée."],
  ["No movie tickets are toothbrushes. No toothbrushes spoil dinner. Therefore, every movie ticket spoils dinner.", "Aucun billet de cinéma n'est une brosse à dents. Aucune brosse à dents ne gâche le dîner. Donc, tous les billets de cinéma gâchent le dîner."],
  ["No ice cream cones are traffic lights. No traffic lights melt in July. Therefore, some ice cream cones melt in July.", "Aucun cornet de glace n'est un feu de circulation. Aucun feu de circulation ne fond en juillet. Donc, certains cornets de glace fondent en juillet."],
  ["No gardening gloves are moon landings. No moon landings fit in pockets. Therefore, all gardening gloves fit in pockets.", "Aucun gant de jardinage n'est un alunissage. Aucun alunissage ne tient dans une poche. Donc, tous les gants de jardinage tiennent dans une poche."],
  ["No classroom desks are popcorn buckets. No popcorn buckets hold homework. Therefore, some classroom desks hold homework.", "Aucun bureau de classe n'est un seau de popcorn. Aucun seau de popcorn ne contient des devoirs. Donc, certains bureaux de classe contiennent des devoirs."],
  ["No rain jackets are opera tickets. No opera tickets dry umbrellas. Therefore, all rain jackets dry umbrellas.", "Aucune veste de pluie n'est un billet d'opéra. Aucun billet d'opéra ne sèche les parapluies. Donc, toutes les vestes de pluie sèchent les parapluies."],
  ["No coffee spoons are bicycles. No bicycles stir soup. Therefore, some coffee spoons stir soup.", "Aucune cuillère à café n'est un vélo. Aucun vélo ne remue la soupe. Donc, certaines cuillères à café remuent la soupe."],
  ["No road maps are cupcakes. No cupcakes navigate detours. Therefore, every road map navigates detours.", "Aucune carte routière n'est un cupcake. Aucun cupcake ne négocie les détours. Donc, toutes les cartes routières négocient les détours."],
  ["No winter scarves are airplanes. No airplanes warm necks. Therefore, some winter scarves warm necks.", "Aucune écharpe d'hiver n'est un avion. Aucun avion ne réchauffe les cous. Donc, certaines écharpes d'hiver réchauffent les cous."],
  ["No trash cans are violins. No violins collect rainwater. Therefore, all trash cans collect rainwater.", "Aucune poubelle n'est un violon. Aucun violon ne collecte l'eau de pluie. Donc, toutes les poubelles collectent l'eau de pluie."],
  ["No picnic blankets are elevators. No elevators make sandwiches. Therefore, some picnic blankets make sandwiches.", "Aucune couverture de pique-nique n'est un ascenseur. Aucun ascenseur ne prépare de sandwichs. Donc, certaines couvertures de pique-nique préparent des sandwichs."],
  ["No hairbrushes are bus stops. No bus stops belong in a pocket. Therefore, every hairbrush belongs in a pocket.", "Aucune brosse à cheveux n'est un arrêt de bus. Aucun arrêt de bus n'appartient à une poche. Donc, toutes les brosses à cheveux appartiennent à une poche."],
  ["No sneakers are rainbows. No rainbows dry floors. Therefore, some sneakers dry floors.", "Aucune basket n'est un arc-en-ciel. Aucun arc-en-ciel ne sèche les sols. Donc, certaines baskets sèchent les sols."],
  ["No thermoses are school bell towers. No school bell towers fit in lunchboxes. Therefore, all thermoses fit in lunchboxes.", "Aucun thermos n'est un clocher d'école. Aucun clocher d'école ne tient dans une boîte à lunch. Donc, tous les thermos tiennent dans une boîte à lunch."],
  ["No blankets are compasses. No compasses sleep in beds. Therefore, some blankets sleep in beds.", "Aucune couverture n'est une boussole. Aucune boussole ne dort dans un lit. Donc, certaines couvertures dorment dans un lit."],
  ["No pencils are dolphins. No dolphins erase mistakes. Therefore, all pencils erase mistakes.", "Aucun crayon n'est un dauphin. Aucun dauphin n'efface les erreurs. Donc, tous les crayons effacent les erreurs."],
  ["No backpacks are moon pies. No moon pies hold laptops. Therefore, some backpacks hold laptops.", "Aucun sac à dos n'est une tarte à la lune. Aucune tarte à la lune ne contient d'ordinateur portable. Donc, certains sacs à dos contiennent un ordinateur portable."],
  ["No couches are rainstorms. No rainstorms fit in living rooms. Therefore, every couch fits in living rooms.", "Aucun canapé n'est un orage. Aucun orage ne tient dans un salon. Donc, tous les canapés tiennent dans un salon."],
  ["No spoons are traffic jams. No traffic jams taste sweet. Therefore, some spoons taste sweet.", "Aucune cuillère n'est un embouteillage. Aucun embouteillage n'a un goût sucré. Donc, certaines cuillères ont un goût sucré."],
  ["No notebooks are fireworks. No fireworks are quiet. Therefore, all notebooks are quiet.", "Aucun carnet n'est un feu d'artifice. Aucun feu d'artifice n'est silencieux. Donc, tous les carnets sont silencieux."],
  ["No raincoats are guitar picks. No guitar picks keep you dry. Therefore, some raincoats keep you dry.", "Aucun imperméable n'est un médiator. Aucun médiator ne vous garde au sec. Donc, certains imperméables vous gardent au sec."],
  ["No kitchen sinks are roller coasters. No roller coasters fit under counters. Therefore, every kitchen sink fits under counters.", "Aucun évier de cuisine n'est des montagnes russes. Aucune montagne russe ne tient sous un plan de travail. Donc, tous les éviers de cuisine tiennent sous un plan de travail."],
  ["No bookmarks are thunderstorms. No thunderstorms stay in books. Therefore, some bookmarks stay in books.", "Aucun marque-page n'est un orage. Aucun orage ne reste dans les livres. Donc, certains marque-pages restent dans les livres."],
  ["No lunch boxes are moonlit skies. No moonlit skies keep sandwiches cold. Therefore, all lunch boxes keep sandwiches cold.", "Aucune boîte à lunch n'est un ciel au clair de lune. Aucun ciel au clair de lune ne garde les sandwichs au frais. Donc, toutes les boîtes à lunch gardent les sandwichs au frais."],
  ["No flashlights are garden gates. No garden gates fit in backpacks. Therefore, some flashlights fit in backpacks.", "Aucune lampe de poche n'est un portail de jardin. Aucun portail de jardin ne tient dans un sac à dos. Donc, certaines lampes de poche tiennent dans un sac à dos."],
  ["No aprons are snowflakes. No snowflakes can be folded neatly. Therefore, every apron can be folded neatly.", "Aucun tablier n'est un flocon de neige. Aucun flocon de neige ne peut être plié proprement. Donc, tous les tabliers peuvent être pliés proprement."],
  ["No water bottles are train whistles. No train whistles fit in backpacks. Therefore, some water bottles fit in backpacks.", "Aucune bouteille d'eau n'est un sifflet de train. Aucun sifflet de train ne tient dans un sac à dos. Donc, certaines bouteilles d'eau tiennent dans un sac à dos."],
  ["No slippers are alarm systems. No alarm systems are soft. Therefore, all slippers are soft.", "Aucune pantoufle n'est un système d'alarme. Aucun système d'alarme n'est doux. Donc, toutes les pantoufles sont douces."],
];

const OPTIONS_EN = [
  'Affirmative Conclusion from Negative Premises',
  'Undistributed Middle',
  'Illicit Major',
  'Affirming the Consequent'
];
const OPTIONS_FR = [
  'Conclusion affirmative à partir de prémisses négatives',
  'Moyen terme non distribué',
  'Illicite majeure',
  'Affirmation du conséquent'
];

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

export const AFFIRMATIVE_FROM_NEGATIVE_EXPANSION_EN: Question[] = SCENARIOS.map(([english], index) => {
  const correctIndex = index % 4;
  return {
    id: 30061 + index,
    level: 6,
    persona_stage: PersonaStage.SEAL,
    concept: 'Affirmative Conclusion from Negative Premises',
    difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
    subLevel: subLevelFor(index),
    question: `Which fallacy is used here?\n\n"${english}"`,
    options: rotatedOptions(OPTIONS_EN, correctIndex),
    correct_option_index: correctIndex,
    explanation: 'Both premises say what groups are not, but the conclusion suddenly claims a positive connection that the premises never established.',
    detailedExplanationBeginner: 'Two negative premises cannot prove that the groups positively overlap or connect.',
    detailedExplanationIntermediate: 'The premises only separate each group from a middle category. They provide no evidence for the affirmative relationship asserted in the conclusion.',
    detailedExplanationExpert: 'In a valid categorical syllogism, two negative premises cannot yield a conclusion. Each negative premise excludes a relation, leaving no distributed link that can support an affirmative claim between the end terms.',
    questionFormat: 'standard'
  };
});

export const AFFIRMATIVE_FROM_NEGATIVE_EXPANSION_FR: Question[] = SCENARIOS.map(([, french], index) => {
  const correctIndex = index % 4;
  return {
    id: 30061 + index,
    level: 6,
    persona_stage: PersonaStage.SEAL,
    concept: 'Conclusion affirmative à partir de prémisses négatives',
    difficulty: index < 17 ? 1 : index < 34 ? 2 : 3,
    subLevel: subLevelFor(index),
    question: `Quel sophisme est utilisé ici ?\n\n"${french}"`,
    options: rotatedOptions(OPTIONS_FR, correctIndex),
    correct_option_index: correctIndex,
    explanation: "Les deux prémisses indiquent ce que les groupes ne sont pas, mais la conclusion invente soudain un lien positif qui n'a jamais été établi.",
    detailedExplanationBeginner: "Deux prémisses négatives ne peuvent pas prouver que des groupes se recoupent ou sont liés positivement.",
    detailedExplanationIntermediate: "Les prémisses séparent seulement chaque groupe d'une catégorie intermédiaire. Elles ne donnent aucune preuve de la relation affirmative annoncée dans la conclusion.",
    detailedExplanationExpert: "Dans un syllogisme catégorique valide, deux prémisses négatives ne permettent aucune conclusion. Chaque prémisse exclut une relation, sans créer de lien distribué capable de soutenir une affirmation entre les termes extrêmes.",
    questionFormat: 'standard'
  };
});

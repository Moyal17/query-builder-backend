DROP TABLE IF EXISTS movies.movie_cast;

CREATE TABLE movies.movie_cast (
       movie_id INT DEFAULT NULL,
       person_id INT DEFAULT NULL,
       character_name varchar(500) DEFAULT NULL,
       gender_id INT DEFAULT NULL,
       cast_order INT DEFAULT NULL,
       CONSTRAINT fk_mca_gender FOREIGN KEY (gender_id) REFERENCES movies.gender (gender_id),
       CONSTRAINT fk_mca_movie FOREIGN KEY (movie_id) REFERENCES movies.movie (movie_id),
       CONSTRAINT fk_mca_per FOREIGN KEY (person_id) REFERENCES movies.person (person_id)
);



INSERT INTO movies.movie_cast VALUES
                             (11,2,'Luke Skywalker',2,0),
                             (11,3,'Han Solo',2,1),
                             (11,4,'Princess Leia Organa',1,2),
                             (11,5,'Grand Moff Tarkin',2,3),
                             (11,6,'See Threepio (C-3PO)',2,5),
                             (11,130,'Artoo-Detoo (R2-D2)',2,6),

                             (11,663,'Red Six (Porkins)',2,23),


                             (12,13,'Marlin (voice)',2,0),
                             (12,14,'Dory (voice)',1,1),
                             (12,12,'Nemo (voice)',2,2),
                             (12,5293,'Gill (voice)',2,3),
                             (12,18,'Bloat (voice)',2,4),
                             (12,19,'Peach (voice)',1,5),
                             (12,6168,'Gurgle (voice)',2,6),
                             (12,7911,'Jacques (voice)',0,9),
                             (12,118,'Nigel (voice)',2,10),
                             (12,7,'Crush (voice)',2,11),
                             (12,20,'Coral (voice)',1,12),
                             (12,10,'Mr. Ray (voice)',2,14),
                             (12,22,'Bruce (voice)',2,15),
                             (12,8783,'Anchor (voice)',2,16),
                             (12,23,'Dentist (voice)',2,18),

                             (12,7907,'Fish School (voice)',2,33),
                             (13,31,'Forrest Gump',2,0),
                             (13,32,'Jenny Curran',1,1),
                             (13,33,'Lt. Dan Taylor',2,2),
                             (13,34,'Pvt. Benjamin Buford ''Bubba'' Blue',2,3),
                             (13,35,'Mrs. Gump',1,4),
                             (13,9640,'Forrest Gump Jr.',2,7),
                             (13,6751,'School Bus Driver',1,8),
                             (13,6310,'Newscaster',0,19),
                             (14,1979,'Lester Burnham',2,0),
                             (14,516,'Carolyn Burnham',1,1),
                             (14,2155,'Jane Burnham',1,2),
                             (14,8210,'Ricky Fitts',2,3),
                             (14,8211,'Angela Hayes',1,4),
                             (14,2955,'Colonel Frank Fitts',2,5),
                             (14,2154,'Jim Olmeyer',2,6),
                             (14,8212,'Buddy Kane',2,7),
                             (14,19,'Barbara Fitts',1,8),
                             (14,8213,'Jim Berkley',2,9),
                             (14,8214,'Brad Dupree',2,10),
                             (14,8215,'Bartender (uncredited)',2,41),


                             (85,3,'Indy',2,0),
                             (85,650,'Marion Ravenwood',1,1),
                             (85,652,'Dr. Renu00e9 Belloq',0,2),
                             (85,653,'Major Arnold Toht',2,3),
                             (85,655,'Sallah',2,4),
                             (85,656,'Dr. Marcus Brody',2,5),
                             (85,659,'Colonel Dietrich',2,6),
                             (85,660,'Gobler',2,7),
                             (85,661,'Barranca / Monkey Man',0,8),
                             (85,662,'Col. Musgrove',0,9),
                             (85,663,'Major Eaton',2,10),
                             (85,658,'Satipo',2,11),
                             (85,2247,'Katanga',2,13),
                             (85,5531,'Abu',2,25),
                             (85,664,'Pilot',2,29),
                             (85,8591,'Peruvian Porter',0,33),
                             (85,7024,'German Soldier (uncredited)',2,36),
                             (85,3993,'Nazi Spy on the Airplane (uncredited)',2,46),
                             (85,9974,'Flying Wing Mechanic (uncredited)',0,47),

                             (87,3,'Indiana Jones',2,0),
                             (87,689,'Willie Scott',1,1),
                             (87,690,'Short Round',0,2),
                             (87,691,'Mola Ram',0,3),
                             (87,693,'Chattar Lal',0,4),
                             (87,694,'Captain Blumburtt',2,5),
                             (87,695,'Lao Che',0,6),
                             (87,696,'Wu Han',0,7),
                             (87,699,'Chen',0,9),
                             (87,701,'Maitre d''',0,10),
                             (87,702,'Chief Henchman',2,11),
                             (87,707,'Weber',2,12),
                             (87,735,'Eel Eater',2,25),
                             (87,1,'Missionary (uncredited)',2,66),
                             (87,664,'Tourist at Airport (uncredited)',2,67),
                             (87,488,'Tourist at Airport (uncredited)',2,68),
                             (89,3,'Indiana Jones',2,0),
                             (89,738,'Professor Henry Jones',2,1),
                             (89,656,'Dr. Marcus Brody',2,2),
                             (89,739,'Dr. Elsa Schneider',1,3),
                             (89,655,'Sallah',2,4),
                             (89,740,'Walter Donovan',2,5),
                             (89,741,'Indiana Jones (young)',2,6),
                             (89,742,'Vogel',2,7),
                             (89,743,'Kazim',2,8),
                             (89,744,'Grail Knight',2,9),
                             (89,745,'Fedora',2,10),
                             (89,746,'Sultan',2,11),
                             (89,748,'Panama Hat',2,12),
                             (89,749,'Mrs. Donovan',1,13),
                             (89,649,'Butler',2,14),
                             (89,747,'Young Henry',0,15),
                             (89,3039,'Roscoe',2,17),
                             (89,8591,'Deputy Sheriff',0,21),
                             (90,776,'Det. Axel Foley',2,0),
                             (90,777,'Det. William ''Billy'' Rosewood',2,1),
                             (90,778,'Det. Sgt. John Taggart',2,2),
                             (90,780,'Lt. Andrew Bogomil',2,3),
                             (90,781,'Jeffrey',2,4),
                             (90,787,'Insp. Douglas Todd',2,5),
                             (90,779,'Jeannette ''Jenny'' Summers',1,6),
                             (90,782,'Victor Maitland',2,7),
                             (90,785,'Mikey Tandino',2,8),
                             (90,783,'Zack, Maitland''s Thug',2,9),
                             (90,786,'Police Chief Hubbard',2,10),
                             (90,4689,'Serge',2,11),
                             (90,790,'Casey',2,12),
                             (90,1539,'Bonded Warehouse Night Supervisor',2,14),
                             (90,788,'Det. Foster',0,16),
                             (90,789,'Det. McCabe',0,17),

                             (95,62,'Harry S. Stamper',2,0),
                             (95,879,'Dan Truman, NASA Administrator',2,1),
                             (95,880,'A.J. Frost',2,2),
                             (95,882,'Grace Stamper',1,3),
                             (95,883,'Charles ''Chick'' Chapple',2,4),
                             (95,884,'Rockhound',2,5),
                             (95,886,'Colonel William Sharp, Shuttle Freedom Pilot',2,6),
                             (95,53,'Lev Andropov, Russian Cosmonaut',2,8),
                             (95,887,'Oscar Choi',2,9),
                             (95,8191,'Flight Director Clark',2,12),

                             (96,776,'Det. Axel Foley',2,0),
                             (96,777,'Det. William ''Billy'' Rosewood',2,1),
                             (96,778,'Det. Sgt. John Taggart',2,2),
                             (96,780,'Capt./Chief Andrew Bogomil',2,3),
                             (96,781,'Det. Jeffrey Friedman',2,4),
                             (96,787,'Insp. Douglas Todd',2,5),
                             (96,921,'Karla Fry',1,6),
                             (96,923,'Charles ''Chip'' Cain',2,7),
                             (96,920,'Maxwell Dent',2,8),
                             (96,922,'Police Chief Harold Lutz',2,9),
                             (96,925,'Nikos Thomopolis',2,10),
                             (96,2632,'Playboy Mansion Valet',2,12),
                             (96,928,'Playboy Playmate',0,20),
                             (96,926,'Playboy Playmate',1,25),

                             (98,934,'Maximus',2,0),
                             (98,935,'Lucilla',1,2),
                             (98,936,'Proximo',2,3),
                             (98,194,'Marcus Aurelius',2,4),
                             (98,937,'Gracchus',2,5),
                             (98,938,'Juba',2,6),
                             (98,939,'Falco',0,7),
                             (98,940,'Gaius',2,8),
                             (98,941,'Quintus',2,9),
                             (98,942,'Hagen',2,10),
                             (98,2478,'Cicero',2,11),
                             (98,4012,'Lucius',2,12),
                             (98,1715,'Engineer',2,18),

                             (105,521,'Marty McFly',2,0),
                             (105,1062,'Dr. Emmett Brown',2,1),
                             (105,1063,'Lorraine Baines',1,2),
                             (105,1064,'George McFly',2,3),
                             (105,1065,'Biff Tannen',2,4),
                             (105,1066,'Jennifer Parker',1,5),
                             (105,1067,'Dave McFly',2,6),
                             (105,1068,'Linda McFly',1,7),
                             (105,1069,'Sam Baines',0,8),
                             (105,1070,'Stella Baines',1,9),
                             (105,1072,'Mr. Strickland',2,10),
                             (105,1074,'Marvin Berry',0,11),
                             (105,1954,'Match',2,12),
                             (105,1953,'3-D',2,14),

                             (106,1100,'Major Alan ''Dutch'' Schaeffer',2,0),
                             (106,1101,'Major George Dillon',0,1),
                             (106,1102,'Anna',1,2),
                             (106,1103,'Sergeant ''Mac'' Eliot',2,3),
                             (106,1104,'Blain',2,4),
                             (106,1105,'Billy',2,5),
                             (106,1106,'Poncho Ramirez',2,6),
                             (106,1107,'General Phillips',2,7),
                             (106,1108,'Hawkins',2,8),
                             (106,1109,'Helicopter Pilot / Predator',2,10),

                             (117,1269,'Eliot Ness',2,0),
                             (117,738,'Jim Malone',2,1),
                             (117,1270,'Agent Oscar Wallace',2,2),
                             (117,1271,'Agent George Stone/Giuseppe Petri',2,3),
                             (117,380,'Al Capone',2,4),
                             (117,1272,'Police Chief Mike Dorsett',2,5),
                             (117,1273,'Walter Payne',2,6),
                             (117,1274,'George',0,7),
                             (117,1275,'Frank Nitti',2,8),
                             (117,1276,'Catherine Ness',1,9),
                             (117,1277,'Bowtie Driver',2,10),
                             (117,1278,'Scoop',0,11),
                             (117,1279,'Lt. Anderson',0,12),
                             (117,1280,'Officer Preseuski',2,13),
                             (117,3217,'Mountie Captain',0,14),

                             (118,85,'Willy Wonka',2,0),
                             (118,1281,'Charlie Bucket',2,1),
                             (118,1282,'Grandpa Joe',2,2),
                             (118,1285,'Violet Beauregarde',1,3),
                             (118,1286,'Veruca Salt',1,4),
                             (118,1290,'Mike Teavee',2,5),
                             (118,1291,'Augustus Glupsch',2,6),
                             (118,1283,'Mrs. Bucket',1,7),
                             (118,1284,'Mr. Bucket',2,8),
                             (118,1294,'Mrs. Beauregard',1,9),
                             (118,1292,'Mr. Salt',2,10),
                             (118,113,'Dr. Wonka',2,11),
                             (118,1293,'Mrs. Gloop',1,13),
                             (118,1295,'Oompa Loompa',2,14),
                             (118,7320,'Grandma Georgina',1,15),

                             (120,109,'Frodo Baggins',2,0),
                             (120,1327,'Gandalf the Grey',2,1),
                             (120,112,'Galadriel',1,2),
                             (120,114,'Legolas',2,3),
                             (120,48,'Boromir',2,4),
                             (120,110,'Aragorn',2,5),
                             (120,1331,'Elrond',2,6),
                             (120,882,'Arwen Evenstar',1,7),
                             (120,655,'Gimli',2,8),
                             (120,113,'Saruman',2,9),
                             (120,1329,'Peregrin ''Pippin'' Took',2,10),
                             (120,1330,'Meriadoc ''Merry'' Brandybuck',2,11),
                             (120,1328,'Samwise ''Sam'' Gamgee',2,12),
                             (120,1333,'Gollum',2,13),
                             (120,65,'Bilbo Baggins',2,14),
                             (120,1332,'Haldir',2,15),
                             (120,1365,'Lurtz',0,16),
                             (120,1366,'Sauron',2,17),
                             (120,1367,'Voice of the Ring (voice)',2,20),

                             (122,109,'Frodo Baggins',2,0),
                             (122,1327,'Gandalf the White',2,1),
                             (122,110,'Aragorn',2,2),
                             (122,882,'Arwen Evenstar',1,3),
                             (122,114,'Legolas',2,4),
                             (122,655,'Gimli & Treebeard (Voice)',2,5),
                             (122,1328,'Sam Gamgee',2,6),
                             (122,1329,'Peregrin ''Pippin'' Took',2,7),
                             (122,1330,'Meriadoc ''Merry'' Brandybuck',2,8),
                             (122,1333,'Gollum',2,9),
                             (122,1331,'Elrond',2,10),
                             (122,65,'Bilbo Baggins',2,11),
                             (122,1369,'Thu00e9oden, King of Rohan',2,12),
                             (122,502,'u00c9owyn',1,13),
                             (122,1371,'Faramir',2,14),
                             (122,1372,'u00c9omer',2,15),
                             (122,1381,'Denethor',0,16),
                             (122,112,'Galadriel',1,17),
                             (122,1365,'Gothmog & Witchking of Angmar',0,18),
                             (122,1382,'King of the Dead',0,19),
                             (122,1383,'Deagol',0,20),
                             (122,48,'Boromir',2,22),
                             (122,113,'saruman',2,24),

                             (121,109,'Frodo Baggins',2,0),
                             (121,1327,'Gandalf the White',2,1),
                             (121,110,'Aragorn',2,2),
                             (121,882,'Arwen Evenstar',1,3),
                             (121,114,'Legolas',2,4),
                             (121,655,'Gimli / Voice of Treebeard',2,5),
                             (121,113,'Saruman',2,6),
                             (121,1328,'Sam Gamgee',2,7),
                             (121,1329,'Peregrin ''Pippin'' Took',2,8),
                             (121,1330,'Meriadoc ''Merry'' Brandybuck',2,9),
                             (121,1333,'Gollum',2,10),
                             (121,1331,'Elrond',2,11),
                             (121,1332,'Haldir',2,12),
                             (121,1369,'Thu00e9oden',2,13),
                             (121,1370,'Gru00edma Wormtongue',2,14),
                             (121,502,'u00c9owyn',1,15),
                             (121,1371,'Faramir',2,16),
                             (121,1372,'u00c9omer',2,17),
                             (121,112,'Galadriel',1,18),
                             (121,48,'Boromir',2,20),
                             (121,1381,'Denethor',0,25);
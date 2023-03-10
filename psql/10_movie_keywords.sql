DROP TABLE IF EXISTS movies.movie_keywords;

CREATE TABLE movies.movie_keywords (
                                       movie_id INT DEFAULT NULL,
                                       keyword_id INT DEFAULT NULL,
                                       CONSTRAINT fk_mk_keyword FOREIGN KEY (keyword_id) REFERENCES movies.keyword (keyword_id),
                                       CONSTRAINT fk_mk_movie FOREIGN KEY (movie_id) REFERENCES movies.movie (movie_id)
);


INSERT INTO movies.movie_keywords VALUES

                                      (11,803),
                                      (11,4270),
                                      (11,4271),
                                      (11,10013),
                                      (11,10016),
                                      (11,10527),
                                      (11,11107),
                                      (11,11195),
                                      (11,11196),
                                      (11,13194),
                                      (11,155336),
                                      (11,160134),
                                      (11,161176),
                                      (11,163295),
                                      (11,178710),
                                      (11,178712),
                                      (12,494),
                                      (12,10026),
                                      (12,14785),
                                      (12,33759),
                                      (12,33760),
                                      (12,156948),
                                      (12,179430),
                                      (12,179431),
                                      (12,180557),
                                      (12,180568),
                                      (12,180574),
                                      (12,181068),
                                      (13,422),
                                      (13,458),
                                      (13,791),
                                      (13,795),
                                      (13,818),
                                      (13,2956),
                                      (13,2957),
                                      (13,6054),
                                      (13,9673),
                                      (13,10235),
                                      (13,10624),
                                      (13,157499),
                                      (13,162365),
                                      (13,162934),
                                      (13,166980),
                                      (13,180204),
                                      (13,187844),
                                      (13,208143),
                                      (13,215492),
                                      (14,255),
                                      (14,293),
                                      (14,596),
                                      (14,1599),
                                      (14,1862),
                                      (14,2201),
                                      (14,2249),
                                      (14,2389),
                                      (14,2483),
                                      (14,2559),
                                      (14,2918),
                                      (14,8201),
                                      (14,9957),
                                      (14,10123),
                                      (14,10532),
                                      (14,10683),
                                      (14,10776),
                                      (14,33611),
                                      (14,166123),
                                      (14,224279),
                                      (14,229299),

                                      (85,83),
                                      (85,483),
                                      (85,485),
                                      (85,486),
                                      (85,487),
                                      (85,488),
                                      (85,1160),
                                      (85,1294),
                                      (85,1454),
                                      (85,1456),
                                      (85,2650),
                                      (85,2652),
                                      (85,2656),
                                      (85,2853),
                                      (85,2854),
                                      (85,2856),
                                      (85,6956),
                                      (85,9032),
                                      (85,11105),
                                      (85,41586),
                                      (85,176731),
                                      (85,184134),
                                      (87,483),
                                      (87,1454),
                                      (87,2860),
                                      (87,4062),
                                      (87,6956),
                                      (87,13006),
                                      (87,14819),
                                      (87,15149),
                                      (87,34117),
                                      (87,41586),
                                      (87,162767),
                                      (87,167106),
                                      (87,174465),
                                      (87,174468),
                                      (87,174469),
                                      (87,174472),
                                      (87,174476),
                                      (87,174480),
                                      (87,176731),
                                      (87,184134),
                                      (89,83),
                                      (89,110),
                                      (89,113),
                                      (89,295),
                                      (89,483),
                                      (89,494),
                                      (89,1294),
                                      (89,1454),
                                      (89,2652),
                                      (89,2847),
                                      (89,2901),
                                      (89,6956),
                                      (89,10685),
                                      (89,11102),
                                      (89,14656),
                                      (89,41586),
                                      (89,176731),
                                      (89,184134),
                                      (90,387),
                                      (90,797),
                                      (90,1568),
                                      (90,3688),
                                      (90,5340),
                                      (90,6110),
                                      (90,6149),
                                      (90,6212),
                                      (90,8181),
                                      (90,12371),
                                      (90,12545),
                                      (90,12670),
                                      (90,14967),
                                      (90,15478),
                                      (90,15483),
                                      (90,157892),
                                      (90,163047),
                                      (90,167541),
                                      (90,172466),
                                      (90,178539),
                                      (90,178929),
                                      (90,188294),
                                      (90,188933),
                                      (95,83),
                                      (95,90),
                                      (95,305),
                                      (95,843),
                                      (95,1423),
                                      (95,1430),
                                      (95,1432),
                                      (95,1826),
                                      (95,1872),
                                      (95,5600),
                                      (95,9882),
                                      (95,13027),
                                      (95,14626),
                                      (95,164889),
                                      (95,179431),
                                      (95,199076),
                                      (95,211487),
                                      (96,374),
                                      (96,703),
                                      (96,1567),
                                      (96,1568),
                                      (96,3688),
                                      (96,4898),
                                      (96,5340),
                                      (96,6149),
                                      (96,8181),
                                      (96,9663),
                                      (96,10950),
                                      (96,12371),
                                      (96,12670),
                                      (96,14601),
                                      (96,14819),
                                      (96,15483),
                                      (96,18021),
                                      (96,155544),
                                      (96,163047),
                                      (96,167316),
                                      (96,193507),
                                      (96,226427),
                                      (96,226428),
                                      (96,226429),
                                      (98,588),
                                      (98,1394),
                                      (98,1395),
                                      (98,1399),
                                      (98,1405),
                                      (98,2280),
                                      (98,2831),
                                      (98,10141),
                                      (98,11221),
                                      (98,14704),
                                      (98,15300),
                                      (98,18543),
                                      (98,157499),
                                      (98,160840),
                                      (98,179780),
                                      (98,192230),
                                      (98,235791),
                                      (98,235792),
                                      (98,235793),

                                      (105,389),
                                      (105,830),
                                      (105,949),
                                      (105,951),
                                      (105,952),
                                      (105,953),
                                      (105,955),
                                      (105,999),
                                      (105,1436),
                                      (105,1743),
                                      (105,4379),
                                      (105,4776),
                                      (105,9104),
                                      (105,9789),
                                      (105,10125),
                                      (105,11860),
                                      (105,18425),
                                      (105,40850),
                                      (105,186189),
                                      (105,187376),
                                      (105,187710),
                                      (105,189449),
                                      (105,206687),
                                      (105,206715),
                                      (105,206720),
                                      (105,206735),
                                      (105,206736),
                                      (105,206737),
                                      (105,206738),
                                      (106,1291),
                                      (106,1297),
                                      (106,9951),
                                      (106,10333),
                                      (106,14915),
                                      (106,15248),
                                      (106,209714),

                                      (117,14899),
                                      (117,155714),
                                      (117,168590),
                                      (117,177354),
                                      (117,177359),
                                      (117,177362),
                                      (117,177364),
                                      (117,177370),
                                      (117,177372),
                                      (117,177380),
                                      (117,214548),
                                      (118,212),
                                      (118,494),
                                      (118,715),
                                      (118,730),
                                      (118,818),
                                      (118,970),
                                      (118,985),
                                      (118,987),
                                      (118,1158),
                                      (118,10508),
                                      (120,603),
                                      (120,604),
                                      (120,606),
                                      (120,609),
                                      (120,611),
                                      (120,818),
                                      (120,1262),
                                      (120,2407),
                                      (120,3098),
                                      (120,3347),
                                      (120,4587),
                                      (120,4959),
                                      (120,6464),
                                      (120,46951),
                                      (120,177912),
                                      (120,234213),
                                      (121,603),
                                      (121,606),
                                      (121,609),
                                      (121,611),
                                      (121,818),
                                      (121,1653),
                                      (121,1964),
                                      (121,4268),
                                      (121,6092),
                                      (121,10364),
                                      (121,10563),
                                      (121,33788),
                                      (121,177912),
                                      (121,189093),
                                      (121,234213),
                                      (122,603),
                                      (122,606),
                                      (122,609),
                                      (122,818),
                                      (122,3301),
                                      (122,3930),
                                      (122,6091),
                                      (122,9812),
                                      (122,11173),
                                      (122,14707),
                                      (122,14819),
                                      (122,162846),
                                      (122,173700),
                                      (122,207372),
                                      (122,234213);

DROP TABLE IF EXISTS movies.movie_genres;

CREATE TABLE movies.movie_genres (
     movie_id INT DEFAULT NULL,
     genre_id INT DEFAULT NULL,
     CONSTRAINT fk_mg_genre FOREIGN KEY (genre_id) REFERENCES movies.genre (genre_id),
     CONSTRAINT fk_mg_movie FOREIGN KEY (movie_id) REFERENCES movies.movie (movie_id)
);


INSERT INTO movies.movie_genres VALUES

                             (11,12),
                             (11,28),
                             (11,878),
                             (12,16),
                             (12,10751),
                             (13,18),
                             (13,35),
                             (13,10749),
                             (14,18),

                             (85,12),
                             (85,28),
                             (87,12),
                             (87,28),
                             (89,12),
                             (89,28),
                             (90,28),
                             (90,35),
                             (90,80),
                             (95,12),
                             (95,28),
                             (95,53),
                             (95,878),
                             (96,28),
                             (96,35),
                             (96,80),
                             (98,12),
                             (98,18),
                             (98,28),

                             (105,12),
                             (105,35),
                             (105,878),
                             (105,10751),
                             (106,12),
                             (106,28),
                             (106,53),
                             (106,878),

                             (117,18),
                             (117,36),
                             (117,53),
                             (117,80),
                             (118,12),
                             (118,14),
                             (118,35),
                             (118,10751),
                             (120,12),
                             (120,14),
                             (120,28),
                             (121,12),
                             (121,14),
                             (121,28),
                             (122,12),
                             (122,14),
                             (122,28);

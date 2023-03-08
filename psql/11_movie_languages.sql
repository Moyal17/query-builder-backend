DROP TABLE IF EXISTS movies.movie_languages;

CREATE TABLE movies.movie_languages (
        movie_id INT DEFAULT NULL,
        language_id INT DEFAULT NULL,
        language_role_id INT DEFAULT NULL,
        CONSTRAINT fk_ml_lang FOREIGN KEY (language_id) REFERENCES movies.language (language_id),
        CONSTRAINT fk_ml_movie FOREIGN KEY (movie_id) REFERENCES movies.movie (movie_id),
        CONSTRAINT fk_ml_role FOREIGN KEY (language_role_id) REFERENCES movies.language_role (role_id)
);



INSERT INTO movies.movie_languages VALUES
                                       (11,24574,2),
                                       (12,24574,2),
                                       (13,24574,2),
                                       (14,24574,2),

                                       (85,24574,2),
                                       (87,24574,2),
                                       (89,24574,2),
                                       (90,24574,2),
                                       (95,24574,2),
                                       (96,24574,2),
                                       (98,24574,2),

                                       (105,24574,2),
                                       (106,24574,2),

                                       (117,24574,2),
                                       (118,24574,2),
                                       (120,24574,2),
                                       (121,24574,2),
                                       (122,24574,2);

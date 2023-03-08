DROP TABLE IF EXISTS movies.production_country;

CREATE TABLE movies.production_country (
       movie_id INT DEFAULT NULL,
       country_id INT DEFAULT NULL,
       CONSTRAINT fk_pc_country FOREIGN KEY (country_id) REFERENCES movies.country (country_id),
       CONSTRAINT fk_pc_movie FOREIGN KEY (movie_id) REFERENCES movies.movie (movie_id)
);


INSERT INTO movies.production_country VALUES
      (11,214),
      (12,214),
      (13,214),
      (14,214),

      (85,214),
      (87,214),
      (89,214),
      (90,214),
      (95,214),
      (96,214),
      (98,162),
      (98,214),

      (105,214),
      (106,214),

      (117,214),
      (118,133),
      (118,162),
      (118,214),
      (120,195),
      (120,214),
      (121,195),
      (121,214),
      (122,195),
      (122,214);


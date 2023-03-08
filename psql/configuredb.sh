#!/bin/bash

database="moviesdb"

echo "Configuring database: $database"

# for some reason psql does not save on my PATH and I need to re-enter the path every time i need to use terminal
# for now :/

export PATH=$PATH:/Applications/Postgres.app/Contents/Versions/12/bin:$PATH

dropdb -U postgres moviesdb
createdb -U postgres moviesdb

# psql -U postgres moviesdb < ./psql/01_reference_data.sql
# psql -U postgres moviesdb < ./psql/02_keyword.sql
# psql -U postgres moviesdb < ./psql/03_person.sql
# psql -U postgres moviesdb < ./psql/04_production_company.sql
# psql -U postgres moviesdb < ./psql/05_movie.sql
# psql -U postgres moviesdb < ./psql/06_movie_cast.sql
# psql -U postgres moviesdb < ./psql/07_movie_company.sql
# psql -U postgres moviesdb < ./psql/09_movie_genres.sql
# psql -U postgres moviesdb < ./psql/10_movie_keywords.sql
# psql -U postgres moviesdb < ./psql/11_movie_languages.sql
# psql -U postgres moviesdb < ./psql/12_production_country.sql

#psql moviesdb  // enter the DB
#CREATE USER node_user WITH SUPERUSER PASSWORD 'node_password'; // insert new super user with permissions

echo "$database configured"





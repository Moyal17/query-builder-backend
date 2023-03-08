// const {Pool} = require('pg');
const fs = require("fs");


/*
 // information for pg POOL
 const config = {
  host: 'moviesdb.postgres.database.azure.com',
  // Do not hard code your username and password.
  // Consider using Node environment variables.
  user: 'admin6@moviesdb',
  password: 'Admin123456!',
  database: 'postgres',
  dialect: 'postgres',
  port: 5432,
  ssl: true
};

const pool = new Pool(config)
 */


// HERE YOU CAN BUILD THE DB IF YOU PROVIDE localhost variables in 'postgresPool' file;

const SQLFilesArray = [
  './psql/01_reference_data.sql',
  './psql/02_keyword.sql',
  './psql/03_person.sql',
  './psql/04_production_company.sql',
  './psql/05_movie.sql',
  './psql/06_movie_cast.sql',
  './psql/07_movie_company.sql',
  './psql/09_movie_genres.sql',
  './psql/10_movie_keywords.sql',
  './psql/11_movie_languages.sql',
  './psql/12_production_country.sql'
]

const queryDatabase = (dataSql, filename) => new Promise(((resolve, reject) => {
  pool.query(dataSql).then((data) => {
    console.log(`\n pool.query: \n`, data);
    console.log( `\n Success ${filename} created successfully!`);
    resolve(` Success ${filename}`);
  })
  .catch(err => {
    console.log( `\n Error on ${filename}: \n`, err);
    reject(` Err ${filename}`)
  });
}));

const buildMoviesDatabase = async () => {
  for (let i = 0; i < SQLFilesArray.length; i++) {
    console.log(SQLFilesArray[i]);
    const dataSql = fs.readFileSync(SQLFilesArray[i]).toString();
    const res = await queryDatabase(dataSql, SQLFilesArray[i])
    console.log(res)
  }
  console.log('\nClosed client connection');
  pool.end();
}


buildMoviesDatabase()


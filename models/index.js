const config = require("../config/config.js");
const { Sequelize, DataTypes, Op } = require("sequelize");

const sequelize = new Sequelize('postgres', 'admin6@moviesdb', 'Admin123456!', {
  host: 'moviesdb.postgres.database.azure.com',
  dialect: 'postgres',
  port: 5432,
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  dialectOptions: {
    encrypt: true,
    ssl : {
      rejectUnauthorized: false
    }
  }
});


const db = {};

db.Sequelize = Sequelize;
db.Op = Op;
db.sequelize = sequelize;

const checkConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
checkConnection()
db.user = require("./user.js")(sequelize, Sequelize, DataTypes);
db.query = require("./query.js")(sequelize, Sequelize, DataTypes);
db.movie = require('./movie.js')(sequelize, Sequelize, DataTypes);

// sequelize.sync();

module.exports = db;

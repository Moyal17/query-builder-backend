const config = require("../config/config.js");
const { Sequelize, Op } = require("sequelize");

const sequelize = new Sequelize(
  config.db.DB_NAME,
  config.db.DB_USER,
  config.db.DB_PASS, {
  host: config.db.DB_HOST,
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
db.user = require("./user.js")(sequelize, Sequelize);
db.query = require("./query.js")(sequelize, Sequelize);
db.movie = require('./movie.js')(sequelize, Sequelize);
db.actor = require('./actors.js')(sequelize, Sequelize);
db.food = require('./food.js')(sequelize, Sequelize);

// sequelize.sync();
module.exports = db;

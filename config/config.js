require('dotenv').config()

module.exports = {
  PORT: process.env.PORT || 8082,
  /** DATABASE */
  db: {
    DB_HOST: process.env.HOST_NAME,
    DB_USER: process.env.USER_NAME,
    DB_PASS: process.env.USER_PASS,
    DB_NAME: process.env.DB_NAME,
    dialect: 'postgres',
    // pool is optional, it will be used for Sequelize connection pool configuration
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    },
    dialectOptions: {
      encrypt: true,
      ssl : {
        rejectUnauthorized: false
      }
    }
  },

  /** AUTH KEY */
  auth: {
    secret: "our-secret-key"
  }
};


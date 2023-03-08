const User = (sequelize, Sequelize) => sequelize.define("user", {
    // Attributes
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    username: {
      type: Sequelize.STRING,
      unique: true
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: Sequelize.STRING
    }
  }
);

module.exports = User;

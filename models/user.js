const User = (sequelize, Sequelize) => sequelize.define("user", {
    // Attributes
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull:false
    },
    email: {
      type: Sequelize.STRING,
      unique: true,
      allowNull:false,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: Sequelize.STRING,
      allowNull:false
    }
  }
);

module.exports = User;

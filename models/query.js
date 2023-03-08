
const Query = (sequelize, Sequelize, DataTypes) => sequelize.define("query", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description: {
      type: Sequelize.STRING,
      allowNull: true
    },
    model: {
      type: Sequelize.STRING,
      allowNull: false
    },
    jsonQuery: {
      type: Sequelize.TEXT,
      allowNull: true
    },
    userId: {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }
);

module.exports = Query;

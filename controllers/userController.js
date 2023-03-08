const db = require("../models");
const User = db.user;
const Op = db.Op;

const page = 'userController';

const registerUser = async (req, res) => {
  const func = 'registerUser';
  try {
    const data = await sequelize.query('SELECT title FROM movies.movie')
    console.log('data: ', data)
    res.status(200).json(data);
  } catch (e) {
    console.error(`${page} ${func} || ${JSON.stringify(e.message)}`);
    res.status(419).json();
  }
};

const loginUser = async (req, res) => {
  const func = 'loginUser';
  try {
    const data = await sequelize.query('SELECT title FROM movies.movie')
    console.log('data: ', data)
    res.status(200).json(data);
  } catch (e) {
    console.error(`${page} ${func} || ${JSON.stringify(e.message)}`);
    res.status(419).json();
  }
};


module.exports = {
  registerUser,
  loginUser
}

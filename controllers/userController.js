const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const config = require('../config/config');
const db = require("../models");
const User = db.user;
const page = 'userController';

const registerUser = async (req, res) => {
  const func = 'registerUser';
  try {
    const salt = bcrypt.genSaltSync(16);
    const hash = bcrypt.hashSync(req.body.password, salt);
    // Store hash in your password DB.
    const userData = await User.create({name: req.body.name, email: req.body.email, password: hash});
    console.log('userData: ', userData)
    let token = jwt.sign({id: userData.id}, config.auth.secret, {expiresIn: 86400}); // 24 hours
    res.status(200).json({name: userData.name, token});
  } catch (e) {
    console.error(`${page} ${func} || ${JSON.stringify(e.message)}`);
    res.status(419).send({message: e.message});
  }
};

const loginUser = async (req, res) => {
  const func = 'loginUser';
  try {
    const userData = await User.findOne({where: {email: req.body.email}})
    if (!userData) return res.status(404).send({message: "User Not found."});

    let passwordIsValid = bcrypt.compareSync(req.body.password, userData.password)
    if (!passwordIsValid) return res.status(404).send({message: "Invalid Password!"});

    let token = jwt.sign({id: userData.id}, config.auth.secret, {expiresIn: 86400}); // 24 hours
    console.log('userData: ', userData.dataValues, token)
    res.status(200).json({name: userData.name, token: token});
  } catch (e) {
    console.error(`${page} ${func} || ${JSON.stringify(e.message)}`);
    res.status(419).send({message: e.message});
  }
};

const checkIfUserExist = async (req, res, next) => {
  const func = 'checkIfUserExist';
  try {
    const userData = await User.findOne({where: {email: req.body.email}})
    if (userData) return res.status(403).send({message: "Email is already in use."});
    next();
  } catch (e) {
    console.error(`${page} ${func} || ${JSON.stringify(e.message)}`);
    res.status(419).send({message: e.message});
  }
};


const checkIfLoggedIn = async (req, res, next) => {
  const func = 'checkIfLoggedIn';
  try {
    if (req.user && req.user.email && req.user.name){
      res.status(200).json({name: req.user.name});
    }
    else return res.status(403).send({message: "Please Login."});
  } catch (e) {
    console.error(`${page} ${func} || ${JSON.stringify(e.message)}`);
    res.status(419).send({message: e.message});
  }
};

module.exports = {
  registerUser,
  loginUser,
  checkIfLoggedIn,
  checkIfUserExist
}

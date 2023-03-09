/* eslint-disable camelcase */
const jwt = require("jsonwebtoken");
const config = require('../config/config');
const db = require("../models");
const User = db.user;

const apiRouter = require('express').Router();
const fs = require('fs');

const authenticateUser = (req, res, next) => {
  try {
    // authenticate User logic
    let token = req.headers.authorization;
    if (!token) return res.status(403).send({message: "You are not logged in, please log in."});
    jwt.verify(token, config.auth.secret, async (err, decoded) => {
      if (err) return res.status(403).send({message: "unauthorized"});
      req.user = await User.findOne({where: {id: decoded.id}})
      next();
    });
  } catch (e) {
    res.status(403).send({message: 'Unauthorized Access: No user Found.'})
  }
};

apiRouter.use(authenticateUser);

const apiRoutesFiles = 'users queries';
// Load all user routers in this folder
fs.readdirSync(__dirname)
  .forEach((router) => {
    apiRoutesFiles.split(' ').forEach((routeName) => {
      apiRouter.use(`/${routeName}`, require(`./${routeName}`).apiRoutes);
    });
  });

module.exports = apiRouter;

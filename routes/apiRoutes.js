/* eslint-disable camelcase */
(function () {
  const apiRouter = require('express').Router();
  const fs = require('fs');

  const authenticateUser = (req, res, next) => {
    try {
      // authenticate User logic
      next();
    } catch (e) {
      res.status(403).end()
    }
  };

  apiRouter.use(authenticateUser);

  const apiRoutesFiles = 'movies users queries';
  // Load all non-admin routers in this folder
  fs.readdirSync(__dirname)
    .forEach((router) => {
      apiRoutesFiles.split(' ').forEach((routeName) => {
        apiRouter.use(`/${routeName}`, require(`./${routeName}`).apiRoutes);
      });
    });

  module.exports = apiRouter;
})();

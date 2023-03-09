const publicRouter = require('express').Router();

const publicRouterFiles = 'users queries';
publicRouterFiles.split(' ').forEach((routeName) => {
  publicRouter.use(`/${routeName}`, require(`./${routeName}`).publicRoutes);
});

module.exports = publicRouter;

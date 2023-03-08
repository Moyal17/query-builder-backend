const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const queryController = require('../controllers/queryController');

module.exports = {
  publicRoutes: (function () {
    router.get('/login', userController.loginUser);
    router.get('/getUserQueries', queryController.getUserQueries);
    return router;
  }()),
  // Secure routes
  apiRoutes: (function () {
    return router;
  }())
};

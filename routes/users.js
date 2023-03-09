const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const queryController = require('../controllers/queryController');

module.exports = {
  publicRoutes: (function () {
    router.post('/login', userController.loginUser);
    router.post('/register', userController.checkIfUserExist, userController.registerUser);
    router.get('/checkIfLoggedIn', userController.checkIfLoggedIn);
    return router;
  }()),
  // Secure routes
  apiRoutes: (function () {
    router.get('/getUserQueries', queryController.getUserQueries);
    return router;
  }())
};

const express = require('express');
const router = express.Router();
const movieController = require('../controllers/movieController');

module.exports = {
  publicRoutes: (function () {
    router.get('/getMovies', movieController.getMovies);
    return router;
  }()),
  // Secure routes
  apiRoutes: (function () {
    return router;
  }())
};

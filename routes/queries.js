const express = require('express');
const router = express.Router();
const utils = require('../config/utils');
const queryController = require('../controllers/queryController');

module.exports = {
  publicRoutes: (function () {
    return router;
  }()),
  // Secure routes
  apiRoutes: (function () {
    router.get('/executeQuery',
      utils.validateParamExists('id', 'query'),
      queryController.getQueryById,
      queryController.executeQuery);
    router.post('/createQuery',
      utils.validateParamExists('title jsonQuery model'.split(' '), 'body'),
      queryController.createQuery);
    router.put('/updateQuery',
      utils.validateParamExists('id title jsonQuery model'.split(' '), 'body'),
      queryController.updateQuery);
    router.delete('/removeQuery/:id',
      utils.validateParamExists('id'.split(' '), 'params'),
      queryController.removeQuery);
    return router;
  }())
};

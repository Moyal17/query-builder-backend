const express = require('express');
const path = require("path");
const router = express.Router();


// public routes - no authentication
router.use('/public', require('./publicRoutes'));
// api routes - secure with authentication
router.use('/api', require('./apiRoutes'));

router.get('/*', (req, res) => {
  res.sendFile('index.html', { root: path.resolve(__dirname, '../') });
});

module.exports = router;

const express = require('express');
const router = express.Router();


// public routes - no authentication
router.use('/public', require('./publicRoutes'));
// api routes - secure with authentication
router.use('/api', require('./apiRoutes'));

const getMonsters = async (req, res) => {
  const func = 'getMonsters';
  try {
    const data = await pool.query('SELECT title FROM movies.movie')
    console.log('data: ', data)
    // res.status(200).json(data);
  } catch (e) {
    console.error(`${func} || ${JSON.stringify(e.message)}`);
    // res.status(419).json();
  }
};


// getMonsters()
router.put('/getMonsters', getMonsters);

module.exports = router;

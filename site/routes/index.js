const express = require('express');
const router = express.Router();

// Home Page
router.get('/', (req, res, next) => {
	res.render('home.pug', { title: 'Express' });
});

// Planner
router.get('/planner', (req, res, next) => {
	res.render('planner/home.pug');
});

module.exports = router;

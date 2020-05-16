const express = require('express');
const router = express.Router();
const general = require('../data/general.json');
const company = require('../data/company.json');
const school = require('../data/school.json');
const work = require('../data/work.json');

// Home Page
router.get('/', (req, res, next) => {
	res.render('home.pug', { title: 'Express' });
});

// Planner
router.get('/planner', (req, res, next) => {
	res.render('planner/planner.pug', {
		calendarData: [ ...general, ...company, ...school, ...work ]
	});
});

module.exports = router;

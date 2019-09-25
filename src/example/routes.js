const router = require('express').Router();
const { initController } = require('./controller');
const { initStore } = require('./store');
const logger = require('../lib/logger');

const initRoutes = async (config, mongodb) => {
	logger.info('Creating examples routes...');

	const store = initStore(mongodb);
	const controller = initController(store);

	router.get('/', (req, res, next) => {
		controller.listAll()
			.then(data => {
				res.status(200).send(data);
			})
			.catch(next);
	});

	router.post('/', (req, res, next) => {
		controller.create()
			.then(() => {
				res.status(200).send('ok');
			})
			.catch(next);
	});

	logger.info('Examples routes started...');
	return router;
};

module.exports = {
	initRoutes,
};

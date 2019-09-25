const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const logger = require('./lib/logger');
const { createNotFoundError } = require('./lib/errors');
const { initMongodb } = require('./mongodb');
const { initRoutes: initExampleRoutes } = require('./example/routes');

const initApp = async config => {
	logger.info('Starting app component...');
	const app = express();
	app.use(cors());
	app.use(morgan('dev'));
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	app.use(cookieParser());
	app.use(cors());

	// my component and routes
	const mongodb = await initMongodb(config);
	const exampleRoutes = await initExampleRoutes(config, mongodb);

	app.use('/examples', exampleRoutes);

	// not found
	app.use((req, res, next) => {
		next(createNotFoundError(`${req.method} - ${req.path} not found`));
	});

	// generic error handler
	app.use((err, req, res, next) => {
		res.status(err.status || 500);
		res.send(err.message);
	});

	logger.info('App component started...');
	return app;
};

module.exports = {
	initApp,
};

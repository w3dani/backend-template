const http = require('http');
const config = require('./config');
const { initApp } = require('./src/app');
const logger = require('./src/lib/logger');

const { port } = config.server;

const start = async () => {
	logger.info('Starting server...');
	try {
		const app = await initApp(config);
		const server = http.createServer(app);
		await server.listen(port);
		logger.info(`Server listening on port ${port}`);
	} catch (err) {
		logger.error(`Error starting system: ${err.message}`);
		process.exit(1);
	}
};

start();

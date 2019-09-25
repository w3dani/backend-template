const mongodb = require('mongodb');
const logger = require('./lib/logger');

const initMongodb = async config => {
	logger.info('Starting mongo component...');
	const { host, port, database } = config.mongodb;
	const mongoUrl = `mongodb://${host}:${port}`;
	const client = await mongodb.MongoClient.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true });
	const connection = client.db(database);

	logger.info('Mongo component started...');
	return connection;
};

module.exports = {
	initMongodb,
};

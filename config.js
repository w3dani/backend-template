module.exports = ({
	server: {
		port: process.env.PORT || 3000,
	},
	mongodb: {
		host: process.env.MONGODB_HOST || 'localhost',
		port: process.env.MONGODB_PORT || 27017,
		database: process.env.MONGODB_DATABASE || 'test',
	},
});

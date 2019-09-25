const initStore = mongodb => {
	const collection = mongodb.collection('example');

	const listAll = () => collection.find({}).toArray();

	const create = () => collection.insertOne({ timestamp: new Date() });

	return {
		listAll,
		create,
	};
};

module.exports = {
	initStore,
};

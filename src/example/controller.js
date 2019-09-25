
const initController = store => {
	const listAll = () => store.listAll();

	const create = () => store.create();

	return {
		listAll,
		create,
	};
};

module.exports = {
	initController,
};

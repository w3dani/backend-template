const createNotFoundError = message => Object.assign(new Error(), { message, status: 404 });

module.exports = {
	createNotFoundError,
};

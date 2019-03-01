const path = require('path');

module.exports = {
	port: 8000,
	path: {
		controller: {
			api: path.resolve('./modules/controllers/api'),
			web: path.resolve('./modules/controllers')
		},
		model: path.resolve('./modules/models'),
	},
};
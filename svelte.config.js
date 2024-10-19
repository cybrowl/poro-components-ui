const preprocess = require('svelte-preprocess');

const config = {
	extensions: ['.svelte'],
	preprocess: [
		preprocess({
			postcss: true
		})
	]
};

module.exports = config;

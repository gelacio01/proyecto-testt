module.exports = {
	globDirectory: '.',
	globPatterns: [
		'**/*.{png,jpg,css,html,json,js}'
	],
	swDest: 'sw.js',
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};
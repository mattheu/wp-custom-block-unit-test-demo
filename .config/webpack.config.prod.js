const { helpers, externals, presets } = require( '@humanmade/webpack-helpers' );
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = presets.production( {
	name: 'plugin',
	externals,
	entry: {
		plugin: helpers.filePath( 'assets/js/index.js' ),
	},
	output: {
		path: helpers.filePath( 'assets/build' ),
	},
	plugins: [
		new CleanWebpackPlugin(),
	],
} );

const { helpers, externals, presets } = require( '@humanmade/webpack-helpers' );
const { choosePort, filePath } = helpers;

module.exports = choosePort( 8080 ).then( port => [
	presets.development( {
		name: 'plugin',
		externals,
		devServer: {
			port,
		},
		entry: {
			plugin: filePath( 'assets/js/index.js' ),
		},
		output: {
			path: filePath( 'assets/build' ),
			publicPath: `http://localhost:${ port }/hm-testing-gb-blocks-demo/`,
		},
	} ),
] );

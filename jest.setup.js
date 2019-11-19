const React = require( 'react' );

global.wp = global.wp || {};

global.wp.element = global.wp.element || {
	createElement: React.createElement,
};

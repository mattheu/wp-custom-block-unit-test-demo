<?php

namespace HM\GbBlockTestsDemo\Plugin;

use HM\GbBlockTestsDemo\Assets;

function bootstrap() : void {
	add_action( 'admin_enqueue_scripts', __NAMESPACE__ . '\\enqueue_admin_scripts' );
}

function enqueue_admin_scripts() : void {
	Assets\enqueue( [
		'outputDir'    => trailingslashit( plugin_dir_path( __DIR__ ) ) . 'assets/build',
		'outputSrc'    => trailingslashit( plugin_dir_url( __DIR__ ) ) . 'assets/build',
		'fileName'     => 'plugin.js',
		'dependencies' => [ 'wp-element', 'wp-editor' ],
		'handle'       => 'hm-gb-block-tests-demo',
	] );
}

<?php
/**
 * Super simple asset loading functions that can just be bundled as part of a plugin.
 *
 * Handles checking for an asset-manifest.json file in the build directory and
 * and then loads the scripts/styles from webpack-dev-server.
 */

namespace HM\GbBlockTestsDemo\Assets;

/**
 * Register and enqueue asset.
 *
 * @param array $args Array of args.
 * @return void
 */
function enqueue( array $args ) : void {
	$manifest = get_manifest( trailingslashit( $args['outputDir'] ) . 'asset-manifest.json' );
	$ver = null;

	if ( array_key_exists( $args['fileName'], $manifest ) ) {
		$src = $manifest[ $args['fileName'] ];
	} else {
		$src = trailingslashit( $args['outputSrc'] ) . $args['fileName'];
		$ver = filemtime( trailingslashit( $args['outputDir'] ) . $args['fileName'] );
	}

	wp_enqueue_script( $args['handle'], $src, $args['dependencies'], $ver, true );
}

/**
 * Read the manifest file and return content.
 *
 * @param string $file Asset manifest JSON file path.
 * @return array Asset manifest array.
 */
function get_manifest( string $file ) : array {
	if ( file_exists( $file ) ) {
		return (array) json_decode( file_get_contents( $file ) );
	}

	return [];
}

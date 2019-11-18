<?php
/**
 * Plugin Name:     Hm Testing Gb Blocks Demo
 * Plugin URI:      PLUGIN SITE HERE
 * Description:     PLUGIN DESCRIPTION HERE
 * Author:          YOUR NAME HERE
 * Author URI:      YOUR SITE HERE
 * Text Domain:     hm-testing-gb-blocks-demo
 * Domain Path:     /languages
 * Version:         0.1.0
 *
 * @package         Hm_Testing_Gb_Blocks_Demo
 */

require_once __DIR__ . '/vendor/autoload.php';
require_once __DIR__ . '/inc/asset-loader.php';
require_once __DIR__ . '/inc/plugin.php';

add_action( 'plugins_loaded', 'HM\\GbBlockTestsDemo\\Plugin\\bootstrap' );

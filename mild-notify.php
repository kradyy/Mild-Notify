<?php
/**
 * Plugin Name: Mild Notify
 * Version: 1.0.0
 * Plugin URI: https://www.mildmedia.se
 * Description: Visar en övre eller undre ruta (topbar) till din hemsida.
 * Author: Mild Media AB
 * Author URI: https://www.mildmedia.se
 * Requires at least: 4.0
 * Tested up to: 4.0
 *
 * Text Domain: mild-notify
 * Domain Path: /lang/
 *
 * @package WordPress
 * @author Chris Johansson
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

// Load plugin class files.
require_once 'includes/class-mild-notify.php';
require_once 'includes/class-mild-notify-settings.php';

// Load plugin libraries.
require_once 'includes/lib/class-mild-notify-admin-api.php';

/**
 * Returns the main instance of Mild_Notify to prevent the need to use globals.
 *
 * @since  1.0.0
 * @return object Mild_Notify
 */
function mild_notify() {
	$instance = Mild_Notify::instance( __FILE__, '1.0.0' );

	if ( is_null( $instance->settings ) ) {
		$instance->settings = Mild_Notify_Settings::instance( $instance );
	}

	return $instance;
}

mild_notify();

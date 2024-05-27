<?php
/*
Plugin Name: Consent Manager for dataLayer
Description: Adds a consent manager to the header for site-wide use.
Version: 1.02
Author: Kasper M. Sonne
*/

function add_consent_manager_scripts() {
    wp_enqueue_style('consent-styles', plugins_url('style.css', __FILE__));
    wp_enqueue_script('consent-popup', plugins_url('popup.js', __FILE__));
    wp_enqueue_script('consent-disclaimer', plugins_url('disclaimer.js', __FILE__));
    wp_enqueue_script('consent-functions', plugins_url('scripts.js', __FILE__));
}
add_action('wp_enqueue_scripts', 'add_consent_manager_scripts');
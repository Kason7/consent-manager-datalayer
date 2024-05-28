<?php
/*
Plugin Name: Consent Manager for dataLayer
Description: Consent manager based on localStorage and dataLayer events, to use with Consent Mode tags and Consent State in Google Tag Manager.
Version: 1.03 Elstyrken
Author: Kasper M. Sonne
*/

function add_consent_manager_scripts() {
    wp_enqueue_style('styles-custom', plugins_url('styles/custom.css', __FILE__));
    wp_enqueue_style('styles-general', plugins_url('styles/general.css', __FILE__));
    wp_enqueue_script('consent-popup', plugins_url('components/popup.js', __FILE__));
    wp_enqueue_script('consent-disclaimer', plugins_url('components/disclaimer.js', __FILE__));
    wp_enqueue_script('consent-functions', plugins_url('functions/scripts.js', __FILE__));
}
add_action('wp_enqueue_scripts', 'add_consent_manager_scripts');
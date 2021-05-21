<?php
/**
 * Functions and definitions Extended
 *
 */


function twenty_twenty_one_child_scripts() {

    wp_enqueue_script( 'analytics-test-script', '/wp-content/themes/twentytwentyone-child/js/main.js');

}

add_action( 'wp_enqueue_scripts', 'twenty_twenty_one_child_scripts' );

?>
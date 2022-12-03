<?php

// hide acf in admin when true
// define('ACF_LITE', false);

function app_includes() {
  $theme = wp_get_theme();

  wp_enqueue_script('main', get_template_directory_uri() . '/frontend/dist/frontend/main.03e2be0e50f9fa36.js', array(), false, true);
  wp_enqueue_script('polyfills', get_template_directory_uri() . '/frontend/dist/frontend/polyfills.a028c55f58455cf5.js', array(), false, true);
  wp_enqueue_script('runtime', get_template_directory_uri() . '/frontend/dist/frontend/runtime.89bfad0fe920d2c9.js', array(), false, true);
  wp_enqueue_style('styles', get_template_directory_uri() . '/frontend/dist/frontend/styles.ef46db3751d8e999.css', array(), false, true);
  // wp_enqueue_script('vendor', get_template_directory_uri() . '/frontend/dist/frontend/vendor.js', array(), false, true);
}

add_action('wp_enqueue_scripts', 'app_includes');
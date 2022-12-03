<?php

function yasser_app_includes() {
  wp_enqueue_script('main', get_template_directory_uri() . '/frontend/dist/frontend/main.js', array(), false, true);
  wp_enqueue_script('polyfills', get_template_directory_uri() . '/frontend/dist/frontend/polyfills.js', array(), false, true);
  wp_enqueue_script('runtime', get_template_directory_uri() . '/frontend/dist/frontend/runtime.js', array(), false, true);
  wp_enqueue_style('styles', get_template_directory_uri() . '/frontend/dist/frontend/styles.css', array(), false, true);
}
add_action('wp_enqueue_scripts', 'yasser_app_includes');

function yasser_setup() {
  add_theme_support('post-thumbnails');
  add_theme_support('title-tag');
  register_nav_menus(
    array(
      'primary-menu' => 'Primary',
    )
  );
}
add_action('after_setup_theme', 'yasser_setup');
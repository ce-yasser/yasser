<?php

function yasser_app_includes() {
  $base_path = '/frontend/dist/frontend/';
  wp_enqueue_script('main', get_template_directory_uri() . $base_path . 'main.js', array(), filemtime(get_theme_file_path($base_path . 'main.js')), true);
  wp_enqueue_script('polyfills', get_template_directory_uri() . $base_path . 'polyfills.js', array(), filemtime(get_theme_file_path($base_path . 'polyfills.js')), true);
  wp_enqueue_script('runtime', get_template_directory_uri() . $base_path . 'runtime.js', array(), filemtime(get_theme_file_path($base_path . 'runtime.js')), true);
  wp_enqueue_style('yasser-styles', get_template_directory_uri() . $base_path . 'styles.css', array(), filemtime(get_theme_file_path($base_path . 'styles.css')), 'all');
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

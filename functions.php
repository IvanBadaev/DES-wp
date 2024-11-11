<?php

add_action( 'after_setup_theme', 'crb_load' );
function crb_load() {
    require_once( 'vendor/autoload.php' );
    \Carbon_Fields\Carbon_Fields::boot();
}
add_action('carbon_fields_register_fields', 'register_carbon_fields');
function register_carbon_fields() {
    require_once( 'vendor/htmlburger/carbon-fields-options/theme-options.php' );
}


function crunchify_remove_version() {
    return '';
}
add_filter('the_generator', 'crunchify_remove_version');
remove_action('wp_head', 'rest_output_link_wp_head', 10);
remove_action('wp_head', 'wp_oembed_add_discovery_links', 10);
remove_action('template_redirect', 'rest_output_link_header', 11, 0);
remove_action ('wp_head', 'rsd_link');
remove_action( 'wp_head', 'wlwmanifest_link');
remove_action( 'wp_head', 'wp_shortlink_wp_head');
remove_action('wp_head', 'wp_generator');
function crunchify_cleanup_query_string( $src ){ 
    $parts = explode( '?', $src ); 
    return $parts[0]; 
} 
add_filter( 'script_loader_src', 'crunchify_cleanup_query_string', 15, 1 ); 
add_filter( 'style_loader_src', 'crunchify_cleanup_query_string', 15, 1 );

add_filter ('wp_image_editors', 'wpse303391_change_graphic_editor');
function wpse303391_change_graphic_editor ($array) {
    return array( 'WP_Image_Editor_GD', 'WP_Image_Editor_Imagick' );
    }
    
add_action('wp_enqueue_scripts', 'site_scripts');
function site_scripts() {
    $version = '0.0.0.0';
    $siteURL = get_template_directory_uri();
    wp_enqueue_style( 'style', get_stylesheet_uri());
    wp_enqueue_script('main', $siteURL . '/scripts/main.js', [], $version, true);
}

add_action('after_setup_theme', 'theme_supports');
function theme_supports() {
    add_theme_support('post-thumbnails');
}

// add_action('init', 'create_global_variable');
// function create_global_variable() {
//     global $sts;
//     $sts = [
//         'whatsapp_phone' => carbon_get_theme_option('whatsapp_phone'),
//         'footer_phone-1' => carbon_get_theme_option('footer_phone-1')
//     ];
// }

add_action('init', 'register_post_types');
function register_post_types() {
    register_post_type('project', [
        'labels' => [
            'name' => 'Проекты',
            'singular_name' => 'проект',
            'add_new' => 'добавить проект',
            'add_new_item' => 'добавление проекта',
            'new_item' => 'новая проект',
            'edit_item' => 'редактировать проект',
            'delete_item' => 'удалить проект',
            'description' => 'описание',
            'menu_name' => 'Проекты'
            
        ],
        'menu_icon' => 'dashicons-awards',
        'menu_position' => 5,
        'supports' => ['title', 'thumbnail'],
        'public' => true,
    ]);
    register_post_type('service', [
        'labels' => [
            'name' => 'Услуги',
            'singular_name' => 'услуга',
            'add_new' => 'добавить услугу',
            'add_new_item' => 'добавление услуги',
            'new_item' => 'новая услуга',
            'edit_item' => 'редактировать услугу',
            'delete_item' => 'удалить услугу',
            'description' => 'описание',
            'menu_name' => 'Услуги'
            
        ],
        'menu_icon' => 'dashicons-cart',
        'menu_position' => 5,
        'supports' => ['title'],
        'public' => true,
    ]);
}

function wpdocs_allow_pdf( $wp_get_mime_types ) {
	$wp_get_mime_types['pdf'] = 'application/pdf';
	return $wp_get_mime_types;
}

<?php
/**
 * Mischa Colley functions and definitions
 *
 * @package Mischa Colley
 */

/**
 * Set the content width based on the theme's design and stylesheet.
 */
if ( ! isset( $content_width ) ) {
	$content_width = 640; /* pixels */
}

if ( ! function_exists( 'mischa_colley_setup' ) ) :
/**
 * Sets up theme defaults and registers support for various WordPress features.
 *
 * Note that this function is hooked into the after_setup_theme hook, which
 * runs before the init hook. The init hook is too late for some features, such
 * as indicating support for post thumbnails.
 */
function mischa_colley_setup() {

	/*
	 * Make theme available for translation.
	 * Translations can be filed in the /languages/ directory.
	 * If you're building a theme based on Mischa Colley, use a find and replace
	 * to change 'mischacolley' to the name of your theme in all the template files
	 */
	load_theme_textdomain( 'mischacolley', get_template_directory() . '/languages' );

	// Add default posts and comments RSS feed links to head.
	//add_theme_support( 'automatic-feed-links' );

	/*
	 * Enable support for Post Thumbnails on posts and pages.
	 *
	 * @link http://codex.wordpress.org/Function_Reference/add_theme_support#Post_Thumbnails
	 */
	//add_theme_support( 'post-thumbnails' );

	// This theme uses wp_nav_menu() in one location.
	register_nav_menus( array(
		'primary' => __( 'Primary Menu', 'mischacolley' ),
	) );
	
	/*
	 * Switch default core markup for search form, comment form, and comments
	 * to output valid HTML5.
	 */
	add_theme_support( 'html5', array(
		'search-form', 'comment-form', 'comment-list', 'gallery', 'caption'
	) );

	/*
	 * Enable support for Post Formats.
	 * See http://codex.wordpress.org/Post_Formats
	 */
	add_theme_support( 'post-formats', array(
		'aside', 'image', 'video', 'quote', 'link'
	) );

	// Setup the WordPress core custom background feature.
	add_theme_support( 'custom-background', apply_filters( 'mischa_colley_custom_background_args', array(
		'default-color' => 'ffffff',
		'default-image' => '',
	) ) );
}
endif; // mischa_colley_setup
add_action( 'after_setup_theme', 'mischa_colley_setup' );

/**
 * Register widget area.
 *
 * @link http://codex.wordpress.org/Function_Reference/register_sidebar
 */
function mischa_colley_widgets_init() {
	register_sidebar( array(
		'name'          => __( 'Sidebar', 'mischacolley' ),
		'id'            => 'sidebar-1',
		'description'   => '',
		'before_widget' => '<aside id="%1$s" class="widget %2$s">',
		'after_widget'  => '</aside>',
		'before_title'  => '<h1 class="widget-title">',
		'after_title'   => '</h1>',
	) );
	register_sidebar( array(
		'name'          => __( 'Pocket Widget Area', 'mischacolley' ),
		'id'            => 'pocket-widget-area',
		'description'   => '',
		'before_widget' => '<div class="pocket-widget">',
		'after_widget'  => '</div>',
	) );
	register_sidebar( array(
		'name'          => __( 'Latest Posts Widget Area', 'mischacolley' ),
		'id'            => 'latest-posts-widget-area',
		'description'   => '',
		'before_widget' => '<div class="latest-posts-widget">',
		'after_widget'  => '</div>',
	) );
}
add_action( 'widgets_init', 'mischa_colley_widgets_init' );

// Add Options pages

if( function_exists('acf_add_options_page') ) {

	acf_add_options_page('Homepage');

}

/**
 * Enqueue scripts and styles.
 */
function mischa_colley_scripts() {

	wp_enqueue_style( 'mischacolley-style', get_stylesheet_uri() );

	wp_enqueue_script( 'jquery' );

	wp_enqueue_script( 'mischacolley-scrollto', get_template_directory_uri() . '/js/min/jquery-scrollto-min.js', array(), '20120206', true );

	wp_enqueue_script( 'mischacolley-waypoints', get_template_directory_uri() . '/js/min/waypoints-min.js', array(), '20120206', true );

	wp_enqueue_script( 'mischacolley-scripts', get_template_directory_uri() . '/js/min/scripts-min.js', array(), '20120206', true );

	//wp_enqueue_script( 'mischacolley-skip-link-focus-fix', get_template_directory_uri() . '/js/skip-link-focus-fix.js', array(), '20130115', true );

	// if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
	// 	wp_enqueue_script( 'comment-reply' );
	// }
}
add_action( 'wp_enqueue_scripts', 'mischa_colley_scripts' );


/**
 * Implement the Custom Header feature.
 */
//require get_template_directory() . '/inc/custom-header.php';

/**
 * Custom template tags for this theme.
 */
//require get_template_directory() . '/inc/template-tags.php';

/**
 * Custom functions that act independently of the theme templates.
 */
//require get_template_directory() . '/inc/extras.php';

/**
 * Customizer additions.
 */
//require get_template_directory() . '/inc/customizer.php';

/**
 * Load Jetpack compatibility file.
 */
//require get_template_directory() . '/inc/jetpack.php';

// Remove WordPress Generator Meta Tag (with version information)
remove_action('wp_head', 'wp_generator');

// Remove auto generated feed links
function my_remove_feeds() {
	remove_action( 'wp_head', 'feed_links_extra', 3 );
	remove_action( 'wp_head', 'feed_links', 2 );
}

add_action( 'after_setup_theme', 'my_remove_feeds' );

// Remove Weblog Client Link
remove_action ('wp_head', 'rsd_link');

// WordPress Page/Post Shortlinks
remove_action( 'wp_head', 'wp_shortlink_wp_head');

// Remove Windows Live Writer Manifest Link
remove_action( 'wp_head', 'wlwmanifest_link');

// Remove Recent Comments Widget Inline Styles
add_action('widgets_init', 'my_remove_recent_comments_style');
function my_remove_recent_comments_style() {
	global $wp_widget_factory;
	remove_action('wp_head', array($wp_widget_factory->widgets['WP_Widget_Recent_Comments'], 'recent_comments_style'));
}


// Disable support for comments and trackbacks in post types
function df_disable_comments_post_types_support() {
	$post_types = get_post_types();
	foreach ($post_types as $post_type) {
		if(post_type_supports($post_type, 'comments')) {
			remove_post_type_support($post_type, 'comments');
			remove_post_type_support($post_type, 'trackbacks');
		}
	}
}
add_action('admin_init', 'df_disable_comments_post_types_support');

// Close comments on the front-end
function df_disable_comments_status() {
	return false;
}
add_filter('comments_open', 'df_disable_comments_status', 20, 2);
add_filter('pings_open', 'df_disable_comments_status', 20, 2);

// Hide existing comments
function df_disable_comments_hide_existing_comments($comments) {
	$comments = array();
	return $comments;
}
add_filter('comments_array', 'df_disable_comments_hide_existing_comments', 10, 2);

// Remove comments page in menu
function df_disable_comments_admin_menu() {
	remove_menu_page('edit-comments.php');
}
add_action('admin_menu', 'df_disable_comments_admin_menu');

// Redirect any user trying to access comments page
function df_disable_comments_admin_menu_redirect() {
	global $pagenow;
	if ($pagenow === 'edit-comments.php') {
		wp_redirect(admin_url()); exit;
	}
}
add_action('admin_init', 'df_disable_comments_admin_menu_redirect');

// Remove comments metabox from dashboard
function df_disable_comments_dashboard() {
	remove_meta_box('dashboard_recent_comments', 'dashboard', 'normal');
}
add_action('admin_init', 'df_disable_comments_dashboard');

// Remove comments links from admin bar
function df_disable_comments_admin_bar() {
	if (is_admin_bar_showing()) {
		remove_action('admin_bar_menu', 'wp_admin_bar_comments_menu', 60);
	}
}
add_action('init', 'df_disable_comments_admin_bar');


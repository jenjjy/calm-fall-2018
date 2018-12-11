<?php
/**
 * POST TYPES
 *
 * @link  http://codex.wordpress.org/Function_Reference/register_post_type
 */

// Register Testimony Post Type
function calm_testimony() {

	$labels = array(
		'name'                  => 'Testimonials',
		'singular_name'         => 'Testimony',
		'menu_name'             => 'Testimonials',
		'name_admin_bar'        => 'Testimony',
		'archives'              => 'Testimony Archives',
		'attributes'            => 'Testimony Attributes',
		'parent_item_colon'     => 'Parent Testimony:',
		'all_items'             => 'All Testimonials',
		'add_new_item'          => 'Add New Testimony',
		'add_new'               => 'Add Testimony',
		'new_item'              => 'New Testimony',
		'edit_item'             => 'Edit Testimony',
		'update_item'           => 'Update Testimony',
		'view_item'             => 'View Testimony',
		'view_items'            => 'View Testimonials',
		'search_items'          => 'Search Testimony',
		'not_found'             => 'Testimony Not found',
		'not_found_in_trash'    => 'Not found in Trash',
		'featured_image'        => 'Featured Image',
		'set_featured_image'    => 'Set featured image',
		'remove_featured_image' => 'Remove featured image',
		'use_featured_image'    => 'Use as featured image',
		'insert_into_item'      => 'Insert into testimony',
		'uploaded_to_this_item' => 'Uploaded to this testimony',
		'items_list'            => 'Testimonials list',
		'items_list_navigation' => 'Testimonials list navigation',
		'filter_items_list'     => 'Filter testimonials list',
	);
	$args = array(
		'label'                 => 'Testimony',
		'description'           => 'Testimonials',
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor', 'thumbnail', 'revisions' ),
		'show_in_rest'          => true,
		'hierarchical'          => true,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'menu_icon'             => 'dashicons-format-quote',
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,
		'exclude_from_search'   => false,
		'publicly_queryable'    => false,
		'capability_type'       => 'page',
	);
	register_post_type( 'testimony', $args );

}
add_action( 'init', 'calm_testimony', 0 );

// Register Courses Custom Post Type
function Calm_course() {

	$labels = array(
		'name'                  => 'Courses',
		'singular_name'         => 'Course',
		'menu_name'             => 'Courses',
		'name_admin_bar'        => 'Course',
		'archives'              => 'Course Archives',
		'attributes'            => 'Course Attributes',
		'parent_item_colon'     => 'Parent Course:',
		'all_items'             => 'All Courses',
		'add_new_item'          => 'Add New Course',
		'add_new'               => 'Add New',
		'new_item'              => 'New Course',
		'edit_item'             => 'Edit Course',
		'update_item'           => 'Update Course',
		'view_item'             => 'View Course',
		'view_items'            => 'View Course',
		'search_items'          => 'Search Course',
		'not_found'             => 'Not found',
		'not_found_in_trash'    => 'Not found in Trash',
		'featured_image'        => 'Featured Image',
		'set_featured_image'    => 'Set featured image',
		'remove_featured_image' => 'Remove featured image',
		'use_featured_image'    => 'Use as featured image',
		'insert_into_item'      => 'Insert into Course',
		'uploaded_to_this_item' => 'Uploaded to this item',
		'items_list'            => 'Courses list',
		'items_list_navigation' => 'Courses list navigation',
		'filter_items_list'     => 'Filter Courses list',
	);
	$args = array(
		'label'                 => 'Course',
		'description'           => 'Calm Courses',
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor', 'thumbnail', 'revisions' ),
		'show_in_rest'          => true,
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'menu_icon'             => 'dashicons-welcome-learn-more',
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,
		'exclude_from_search'   => false,
		'publicly_queryable'    => true,
		'capability_type'       => 'page',
	);
	register_post_type( 'course', $args );

}
add_action( 'init', 'Calm_course', 0 );


// Register "Our Team" Custom Post Type
function team_member_post_type() {

	$labels = array(
		'name'                  => 'Team Members',
		'singular_name'         => 'Team Member',
		'menu_name'             => 'Team Member',
		'name_admin_bar'        => 'Team Member',
		'archives'              => 'Team Member Archives',
		'attributes'            => 'Team Member Attributes',
		'parent_item_colon'     => 'Parent Team Member:',
		'all_items'             => 'All Team Members',
		'add_new_item'          => 'Add New Team Member',
		'add_new'               => 'Add Team Member',
		'new_item'              => 'New Team Member',
		'edit_item'             => 'Edit Team Member',
		'update_item'           => 'Update Team Member',
		'view_item'             => 'View Team Member',
		'view_items'            => 'View Team Members',
		'search_items'          => 'Search Team Member',
		'not_found'             => 'Team Member Not found',
		'not_found_in_trash'    => 'Not found in Trash',
		'featured_image'        => 'Featured Image',
		'set_featured_image'    => 'Set featured image',
		'remove_featured_image' => 'Remove featured image',
		'use_featured_image'    => 'Use as featured image',
		'insert_into_item'      => 'Insert into team member',
		'uploaded_to_this_item' => 'Uploaded to this Team Member',
		'items_list'            => 'Team members list',
		'items_list_navigation' => 'Team members list navigation',
		'filter_items_list'     => 'Filter team members list',
	);
	$args = array(
		'label'                 => 'Team Member',
		'description'           => 'Team member\'s for \"Our Team Page\"',
		'labels'                => $labels,
		'supports'              => array( 'title', 'editor', 'thumbnail' ),
		'hierarchical'          => false,
		'public'                => true,
		'show_ui'               => true,
		'show_in_menu'          => true,
		'menu_position'         => 5,
		'menu_icon'             => 'dashicons-universal-access-alt',
		'show_in_admin_bar'     => true,
		'show_in_nav_menus'     => true,
		'can_export'            => true,
		'has_archive'           => true,
		'exclude_from_search'   => false,
		'publicly_queryable'    => false,
		'capability_type'       => 'page',
		
	);
	register_post_type( 'team_member', $args );

}
add_action( 'init', 'team_member_post_type', 0 );
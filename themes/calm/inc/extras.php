<?php
/**
 * Custom functions that act independently of the theme templates.
 *
 * @package Calmversation_Theme
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */
function calm_body_classes($classes)
{
    // Adds a class of group-blog to blogs with more than 1 published author.
    if (is_multi_author()) {
        $classes[] = 'group-blog';
    }

    return $classes;
}
add_filter( 'body_class', 'calm_body_classes' );


// Remove Edit-Comments from Admin Page
function remove_menus(){
  remove_menu_page( 'edit-comments.php' );   
}
add_action( 'admin_menu', 'remove_menus' );

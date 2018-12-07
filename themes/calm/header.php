<?php
/**
 * The header for our theme.
 *
 * @package Calmversation_Theme
 */

?><!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
  <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="hfeed site">
    <a class="skip-link screen-reader-text" href="#content"><?php echo esc_html('Skip to content'); ?></a>

    <header id="masthead" class="site-header" role="banner">
        <div class="site-branding">
            <h1 class="site-title screen-reader-text"><a href="<?php echo esc_url(home_url('/')); ?>"
                                                         rel="home"><?php bloginfo('name'); ?></a></h1>
            <a href="<?php echo home_url(); ?>">								
                <img src="<?php echo get_template_directory_uri() . '/images/calmversation-logo.png' ?>"
                    class="logo-main" alt="calmversation foundation" />
            </a>
       </div><!-- .site-branding -->

       <div class="login">
            <a href="http://calmversation.thinkific.com">login</a>
        </div><!-- .login -->

        <!-- navbar = main-navigation -->
        <nav id="site-navigation" class="main-navigation" role="navigation">

            <span class="open-slide">
                <a href="#" class="open-menu">
                    <svg width="35" height="30">
                        <path d="M0,5 30,5" stroke="#787878" stroke-width="3.5"/>
                        <path d="M0,14 30,14" stroke="#787878" stroke-width="3.5"/>
                        <path d="M0,23 30,23" stroke="#787878" stroke-width="3.5"/>
                    </svg>
                </a>
            </span>

            <!-- navbar-nav = menu -->
            <?php wp_nav_menu(array('theme_location' => 'primary', 'menu_id' => 'primary-menu')); ?>
       
        </nav><!-- #site-navigation -->
      
        <div id="side-menu" class="side-nav">
        testing
            <a href="#" class="btn-close">&#10006;</a>
            
            <?php wp_nav_menu(array('theme_location' => 'primary', 'menu_id' => 'primary-menu')); ?>
        </div>

        <div id="main">
            <h1>example</h1>
        </div>

    </header><!-- #masthead -->

    <div id="content" class="site-content">

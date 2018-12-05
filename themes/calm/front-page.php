<?php
/**
 * The main template file.
 *
 * @package Calmversation_Theme
 */

get_header(); ?>

<div id="primary" class="content-area">
    <main id="main" class="site-main" role="main">
        <div class="banner-header">
            <h1>innovation tools for teachers</h1>
            <div>
                <a href="https://calmversation.thinkific.com/" class="button">purchase now</a>

            </div>
        </div>
        <div class="hero-image hero-home">
            <img src= <?php echo (get_template_directory_uri()) . "/images/banner-image-mobile.png"; ?>
                 alt = "calmversation banner" />
            <div class="main-logo">
                <h1>hello hello hello</h1>
            </div>
        </div>

        <?php /* Start Testimony Loop */ ?>
        <?php while (have_posts()) : the_post(); ?>

            <?php get_template_part('template-parts/testimony'); ?>

        <?php endwhile; ?>


    </main><!-- #main -->
</div><!-- #primary -->


<?php get_footer(); ?>

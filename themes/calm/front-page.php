<?php
/**
 * The main template file.
 *
 * @package Calmversation_Theme
 */

get_header(); ?>

<div id="primary" class="content-area">
    <main id="main" class="site-main" role="main">
        <div class="hero-image hero-home">
            <img src= <?php echo (get_template_directory_uri()) . "/images/banner-image-mobile.png"; ?>
                 alt = "calmversation banner" />
            <div class="main-logo">
                <h1>hello hello hello</h1>
            </div>
        </div>


    </main><!-- #main -->
</div><!-- #primary -->


<?php get_footer(); ?>
<?php
/**
 * The template for displaying all pages.
 *
 * @package Calmversation_Theme
 */

get_header(); ?>

<div id="primary" class="content-area">
    <main id="main" class="site-main" role="main">
        <div class="site-container">
            <div class="contact-us-container">
                <?php while (have_posts()) : the_post(); ?>

                    <?php the_content(); ?>
                <?php endwhile; // End of the loop. ?>
            </div>
        </div>
    </main><!-- #main -->
</div><!-- #primary -->


<?php get_footer(); ?>

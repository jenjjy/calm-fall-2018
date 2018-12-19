<?php
/**
 * The template for displaying all single posts.
 *
 * @package Calmversation_Theme
 */

get_header(); ?>

<div id="primary" class="content-area">
    <main id="main" class="site-main" role="main">
        <div class="site-container">
            <?php while (have_posts()) : the_post(); ?>
                <?php the_post_navigation(array(
                    'prev_text' => __('← %title'),
                    'next_text' => __('%title →'),
                    'taxonomy' => __('post_tag'),
                    'screen_reader_text' => __('Continue Reading'),
                )); ?>

                <?php get_template_part('template-parts/content', 'themes'); ?>


                <?php
                // If comments are open or we have at least one comment, load up the comment template.
                if (comments_open() || get_comments_number()) :
                    comments_template();
                endif;
                ?>

            <?php endwhile; // End of the loop. ?>
        </div>
    </main><!-- #main -->
</div><!-- #primary -->


<?php get_footer(); ?>

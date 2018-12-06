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

        <?php /* Start the Loop */ ?>
        <?php while (have_posts()) : the_post(); ?>

            <?php get_template_part('template-parts/content'); ?>

        <?php endwhile; ?>


        <?php /* Start Testimony Loop */ ?>
        <?php while (have_posts()) : the_post(); ?>

            <?php get_template_part('testimony'); ?>

        <?php endwhile; ?>


    </main><!-- #main -->
</div><!-- #primary -->


<?php get_footer(); ?>

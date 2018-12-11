<?php
/**
 *Template Name: Free Resources
 *
 * @package Calmversation_Theme
 */

get_header(); ?>

<div id="primary" class="content-area">
    <main id="main" class="site-main" role="main">
        <div class="free-resource-banner">
            <h1>
                <?php
                echo CFS()->get('free_resources_header');
                ?>
            </h1>

            <img src=" <?php
            echo CFS()->get('free_resources_image');
            ?>" alt="">

            <?php
            echo CFS()->get('free_resources_button');
            ?>
        </div>
        <?php while (have_posts()) : the_post(); ?>

            <?php get_template_part('template-parts/content', 'page'); ?>

        <?php endwhile; // End of the loop. ?>

    </main><!-- #main -->
</div><!-- #primary -->


<?php get_footer(); ?>

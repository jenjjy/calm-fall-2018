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
            <h1 class="free-resource-header-desktop">
                <?php
                echo CFS()->get('free_resources_header_desktop');
                ?>
            </h1>

            <div>
                <h2>
                    <?php
                    echo CFS()->get('free_resources_text_header_desktop');
                    ?>
                </h2>
                <p>
                    <?php
                    echo CFS()->get('free_resources_text_desktop');
                    ?>
                </p>
                <img src=" <?php
                echo CFS()->get('free_resources_image');
                ?>" alt="">

                <?php
                echo CFS()->get('free_resources_button');
                ?>
            </div>


        </div>

        <div class="free-resource-info">
            <?php
            echo CFS()->get('space_thought_header');
            ?>

        </div>
        <?php while (have_posts()) : the_post(); ?>

            <?php get_template_part('template-parts/content', 'page'); ?>

        <?php endwhile; // End of the loop. ?>

    </main><!-- #main -->
</div><!-- #primary -->


<?php get_footer(); ?>

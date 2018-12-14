<?php
/**
 *Template Name: Free Resources
 *
 * @package Calmversation_Theme
 */

get_header(); ?>

<div id="primary" class="content-area">
    <main id="main" class="site-main" role="main">
        <div class="site-container">

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

                <div class="free-resource-text-desktop">
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
                    ?>" alt="" class="free-resource-image-mobile">

                    <?php
                    echo CFS()->get('free_resources_button');
                    ?>
                </div>

                <img src=" <?php
                echo CFS()->get('free_resources_image');
                ?>" alt="" class="free-resource-image-desktop">

            </div>


            <div class="free-resource-info">
                <h1 class="space-thought-header-desktop">
                    <?php
                    echo CFS()->get('space_thought_header_desktop');
                    ?>
                </h1>
                <h1>
                    <?php
                    echo CFS()->get('space_thought_header');
                    ?>
                </h1>
                <h2>
                    <?php
                    echo CFS()->get('space_thought_text_header_desktop');
                    ?>
                </h2>
                <p>
                    <?php
                    echo CFS()->get('space_thought_text');
                    ?>
                </p>
                <p>
                    <?php
                    echo CFS()->get('space_thought_text_desktop');
                    ?>

                </p>

            </div>

            <div class="free-resource-video-container">
                <?php
                $loop = CFS()->get('free_resources_video');
                foreach ($loop as $row) : ?>
                    <div class="free-resource-video">
                        <iframe src="<?php echo $row['free_resources_video_input']; ?>" frameborder="0"></iframe>
                        <div class="free-resource-video-description">
                            <h2><?php echo $row['free_resources_header']; ?></h2>
                            <p><?php echo $row['free_resources_text_desktop']; ?></p>
                        </div>
                    </div>
                <?php endforeach; ?>

            </div>
            <?php while (have_posts()) : the_post(); ?>

                <?php get_template_part('template-parts/content', 'page'); ?>

            <?php endwhile; // End of the loop. ?>
        </div>
    </main><!-- #main -->
</div><!-- #primary -->


<?php get_footer(); ?>

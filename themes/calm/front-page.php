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
            <h1>
                <?php
                echo CFS()->get('mobile_banner_header');
                ?>
            </h1>
            <div>
                <?php
                echo CFS()->get('mobile_banner_button');
                ?>
            </div>
        </div>

        <?php /* Start the Loop */ ?>
        <?php while (have_posts()) : the_post(); ?>

            <?php get_template_part('template-parts/content'); ?>


        <?php endwhile; ?>
        <div class="checkmark-container">
            <?php

            $loop = CFS()->get('goal');
            foreach ($loop as $row) : ?>
                <div class="front-page-check-mark">
                    <img src="<?php echo $row['goal_image']; ?>" alt="">
                    <h2><?php echo $row['goal_text']; ?></h2>
                </div>
            <?php endforeach; ?>

        </div>

        <div class="view-courses">
            <?php
            echo CFS()->get('view_courses');
            ?>
        </div>


        <div class="campaign-container">
            <h2>
                <?php
                echo CFS()->get('campaign_header');
                ?>
            </h2>


            <img src="<?php
            echo CFS()->get('campaign_logo');
            ?>" alt="" class="campaign-logo">


            <p>
                <?php
                echo CFS()->get('campaign_text');
                ?>
            </p>


            <?php
            echo CFS()->get('campaign_button');
            ?>

        </div>
        <?php /* Start Testimony Loop */ ?>
        <?php while (have_posts()) : the_post(); ?>


        <?php endwhile; ?>


    </main><!-- #main -->
</div><!-- #primary -->


<?php get_footer(); ?>

<?php
/**
 * The main template file.
 *
 * @package Calmversation_Theme
 */

get_header(); ?>

<div id="primary" class="content-area">
    <main id="main" class="site-main" role="main">

        <!--- BANNER -->
        <div class="banner-header">
            <h1>
                <?php
                echo CFS()->get('mobile_banner_header');
                ?>
            </h1>
            <div class="button-container">
                <?php
                echo CFS()->get('mobile_banner_button');
                ?>
            </div>
        </div>
        <!--- BANNER IMAGE -->
        <div class="banner-image-container">
            <img src="<?php
            echo CFS()->get('banner_image_mobile');
            ?>" alt="" class="banner-image-mobile">
            <div>
                <img src="<?php
                echo CFS()->get('banner_image_desktop');
                ?>" alt="" class="banner-image-desktop">
            </div>

        </div>

        <div class="site-container">

            <!--- CONTENT -->
            <?php /* Start the Loop */ ?>
            <?php while (have_posts()) :
                the_post(); ?>

                <?php get_template_part('template-parts/content'); ?>
                <!--- FOUNDER -->
                <div class="founder-container">
                    <iframe src=" <?php
                    echo CFS()->get('listen_to_founder_video');
                    ?>"></iframe>
                    <div class="founder-text-container">
                        <h1>
                            <?php
                            echo CFS()->get('listen_to_founder_header');
                            ?>
                        </h1>
                        <div class="founder-button-container">
                            <?php
                            echo CFS()->get('listen_to_founder_button');
                            ?>
                        </div>
                    </div>

                </div>
                <!--- SOLUTIONS -->
                <div class="solutions-container">
                    <h1>
                        <?php
                        echo CFS()->get('game_changing_solution_header');
                        ?>
                    </h1>
                    <div>
                        <img src=" <?php
                        echo CFS()->get('game_changing_solution_image');
                        ?>" alt="game changing solution">
                        <p class="solution-text-mobile">
                            <?php
                            echo CFS()->get('game_changing_solution_text');
                            ?>
                        </p>
                        <p class="solution-text-desktop">
                            <?php
                            echo CFS()->get('game_changing_solution_text_desktop');
                            ?>
                        </p>
                    </div>
                </div>

                <!--- GOALS  MOBILE -->
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

            <!--- GOALS DESKTOP -->
            <div class="goals-desktop">
                <?php
                $loop = CFS()->get('goals_desktop');
                foreach ($loop as $row) : ?>
                    <div class="goals-boxes">
                        <div class="goals-text">
                            <h2><?php echo $row['goals_header']; ?></h2>
                            <p><?php echo $row['goals_text_desktop']; ?></p>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>


            <?php get_template_part('template-parts/testimony'); ?>

            <!--- COURSES -->
            <div class="view-courses">
                <?php
                echo CFS()->get('view_courses');
                ?>
            </div>

            <!--- CAMPAIGN -->
            <div class="campaign-container">
                <h1>
                    <?php
                    echo CFS()->get('campaign_header');
                    ?>
                </h1>

                <div class="campaign-logo-container-mobile">
                    <img src="<?php
                    echo CFS()->get('campaign_logo');
                    ?>" alt="" class="campaign-logo">
                </div>

                <p class="campaign-text-mobile">
                    <?php
                    echo CFS()->get('campaign_text');
                    ?>
                </p>

                <p class="campaign-text-desktop">
                    <?php
                    echo CFS()->get('campaign_text_desktop');
                    ?>
                </p>

                <div class="campaign-button">
                    <?php
                    echo CFS()->get('campaign_button');
                    ?>
                </div>
            </div>

            <div class="campaign-logo-container-desktop">
                <img src="<?php
                echo CFS()->get('campaign_logo');
                ?>" alt="" class="campaign-logo">
            </div>

            

        </div>
    </main><!-- #main -->
</div><!-- #primary -->


<?php get_footer(); ?>

<?php
/**
 *
 * Template Name: Our Founder
 * @package Calmversation_Theme
 */

get_header(); ?>

<div id="primary" class="founder-content-area">
    <div class="site-container">
        <main id="main" class="founder-site-main" role="main">
            <div class="site-container">
                <?php while (have_posts()) : the_post(); ?>


                    <?php get_template_part('template-parts/content', 'page'); ?>

                    <div class="our-founder-container">
                        <img src=" <?php
                        echo esc_html(CFS()->get('our_image'));
                        ?>" alt="">
                        <div class="our-founder-info">
                            <h2>
                                <?php
                                echo esc_html(CFS()->get('our_header'));
                                ?>
                            </h2>
                            <p>
                                <?php
                                echo wp_kses_post(CFS()->get('our_text'));
                                ?>
                            </p>
                        </div>
                    </div>


                    <div class="main-carousel">
                        <?php
                        $loop = CFS()->get('our_goals');
                        foreach ($loop as $row) : ?>
                            <div class="carousel-cell">
                                <img src="<?php echo $row['our_goals_image']; ?>" alt="">
                                <h2><?php echo $row['our_goals_header']; ?></h2>
                                <p><?php echo $row['our_goals_text']; ?></p>
                            </div>
                        <?php endforeach; ?>


                    </div>

                <?php endwhile; // End of the loop. ?>
            </div>
        </main><!-- #main -->
    </div>
</div><!-- #primary -->


<?php get_footer(); ?>

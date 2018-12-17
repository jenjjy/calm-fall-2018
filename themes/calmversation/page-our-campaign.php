<?php
/**
 *Template Name: Our Campaign
 * @package Calmversation_Theme
 */

get_header(); ?>

<div id="primary" class="content-area">
    <main id="main" class="site-main" role="main">
        <div class="site-container">
            <?php while (have_posts()) : the_post(); ?>

                <?php get_template_part('template-parts/content', 'page'); ?>

            <?php endwhile; // End of the loop. ?>
            <div class="campaign-features-wraper">
                <?php
                $loop = CFS()->get('campaign');
                foreach ($loop as $row) : ?>
                    <div class="campaign-features">
                        <img src="<?php echo $row['campaign_feature_icon']; ?>">
                        <div class="campaign-text">
                            <h2><?php echo $row['campaign_feature_title']; ?></h2>
                            <p>
                                <?php echo $row['campaign_feature_text']; ?>
                            </p>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </main><!-- #main -->
</div><!-- #primary -->


<?php get_footer(); ?>

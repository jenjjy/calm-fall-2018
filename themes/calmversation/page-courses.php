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
            <?php while (have_posts()) : the_post(); ?>

                <?php get_template_part('template-parts/content', 'courses'); ?>

            <?php endwhile; // End of the loop. ?>

            <?php
            /*
            * Get the course theme entries
            * */
            $args = array(
                'order' => 'ASC',
                'posts_per_page' => 5,
                'post_type' => 'course'
            );
            $course_posts = get_posts($args); // returns an array of posts
            ?>
            <section class="course-themes">


                <div class="course-bubbles">
                    <?php foreach ($course_posts as $post) : setup_postdata($post); ?>
                    <?php
                            $post_id = $post->ID;
                            ?>
                    <div class="bubble bubble<?php echo $post_id; ?>" data-id='<?php echo $post_id; ?>'>
                          
                            <div class="course-title" >
                                <h2><?php echo CFS()->get('course_theme_title', $post_id); ?>
                                </h2>
                            </div>
                    </div>
                    <?php endforeach;
                    wp_reset_postdata(); ?>
                </div>

                <div class="course-theme-text">
                    <?php foreach ($course_posts as $post) : setup_postdata($post); ?>
                    <?php
                            $post_id = $post->ID;
                            $post_url = $post->guid;
                            ?>
    
                    <article class="themes" data-id='<?php echo $post_id; ?>'>

                        <h2 class="course-title" ><?php echo CFS()->get('course_theme_title', $post_id); ?>
                        </h2>                          
                        <p class="themes-text"><?php echo CFS()->get('course_theme_description', $post_id); ?> </p>
                        <a class="cfs-hyperlink learn-more" href="<?php echo $post_url; ?>">Learn More</a>
                    </article>
                    <?php endforeach;
                    wp_reset_postdata(); ?>
                </div>




            </section>
            <section class="course-features">
                <h2>
                    <?php echo CFS()->get('feature_title'); ?>
                </h2>

                <?php
                $loop = CFS()->get('features');
                foreach ($loop as $row) : ?>
                    <div class="feature-block">
                        <img src="<?php echo $row['feature_image']; ?>">
                        <h3>
                            <?php echo $row['feature_text_mobile']; ?>
                        </h3>
                        <p>
                        <?php echo $row['feature_text_desktop']; ?>
                        </p>
                        
                    </div>
                <?php endforeach; ?>
            </section>
            <section class="course-pack">
                <h2><?php echo CFS()->get('course_pack_title'); ?></h2>
                <p><?php echo CFS()->get('course_pack'); ?></p>
                <?php echo CFS()->get('course_pack_button'); ?>

            </section>
            <section class="course-banner">
                <div class="banner-info">
                <h2><?php echo CFS()->get('banner_title'); ?></h2>
                <p><?php echo CFS()->get('banner_text'); ?></p>
                </div>
                <img src="<?php echo CFS()->get('banner_image'); ?>" alt="banner image courses page">
            </section>
            <?php get_template_part('template-parts/testimony'); ?>
        </div><!--site container -->
    </main><!-- #main -->
</div><!-- #primary -->
<?php get_footer(); ?>

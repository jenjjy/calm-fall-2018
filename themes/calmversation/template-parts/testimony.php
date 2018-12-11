<?php
/**
 * Template part for displaying posts.
 *
 * @package Calmversation_Theme
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

    <header class="entry-header">
        <h1 class="page-title">Testimonials</h1>
    </header><!-- .entry-header -->

    <?php if (has_post_thumbnail()) : ?>
		<?php the_post_thumbnail('large'); ?>
    <?php endif; ?>
         
        <?php
        $args = array(
            'post_type' => 'testimony',
            'post_status' => 'publish',
        );

        $testimony = new WP_Query($args);
        if ($testimony->have_posts()) : ?>   

        <section class="testimony-carousel">
            <?php while ($testimony->have_posts()) : 
            $testimony->the_post() ; ?>

                <div class="testimony">

                    <div class="testimony-img"><?php echo the_post_thumbnail('medium') ; ?></div>
                    <div class="testimony-content"><?php echo get_the_content(); ?></div>

                </div>

            <?php endwhile; wp_reset_postdata(); ?>

        </section>

        <?php endif; ?>

    </main><!-- #main -->
</div><!-- #primary -->




    <div class="entry-content">
        <?php the_excerpt(); ?>
    </div><!-- .entry-content -->
</article><!-- #post-## -->

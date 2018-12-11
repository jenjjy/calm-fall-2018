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

        $testimonials = new WP_Query($args);
        if ($testimonials->have_posts()) : ?>   

            <?php while ($testimonials->have_posts()) : 
            $testimonials->the_post() ; ?>

             <div class="testimony">

                <div><?php echo the_post_thumbnail('medium') ; ?></div>
                <div class="testimony-content"><?php echo get_the_content(); ?></div>

            </div>

            <?php endwhile; wp_reset_postdata(); ?>

        <?php else : esc_html_e('No testimonials in the diving taxonomy!', 'text-domain'); endif ; ?>

    </main><!-- #main -->
</div><!-- #primary -->




    <div class="entry-content">
        <?php the_excerpt(); ?>
    </div><!-- .entry-content -->
</article><!-- #post-## -->

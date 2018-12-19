<?php
/**
 * Template part for displaying single posts.
 *
 * @package Calmversation_Theme
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>

	<div class="entry-content">
		<?php the_content(); ?>
		<?php
			wp_link_pages( array(
				'before' => '<div class="page-links">' . esc_html( 'Pages:' ),
				'after'  => '</div>',
			) );
		?>
	</div><!-- .entry-content -->

	<footer class="entry-footer">
		<?php calm_entry_footer(); ?>
	</footer><!-- .entry-footer -->
</article><!-- #post-## -->

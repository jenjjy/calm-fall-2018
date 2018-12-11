<?php
/**
 * 
 * Template Name: Our Founder
 * @package Calmversation_Theme
 */

get_header(); ?>

	<div id="primary" class="founder-content-area">
		<main id="main" class="founder-site-main" role="main">

		<?php the_title( '<h1 class="page-title">', '</h1>' ); ?>

		 <?php
			$args = array(
			'order' => 'ASC',
			'post_type'   => 'team_member',
			'post_status' => 'publish',
			);
			
			$testimonials = new WP_Query( $args );
			if( $testimonials->have_posts() ) :
			?>
			<ul>
				<?php
				while( $testimonials->have_posts() ) :
					$testimonials->the_post();
					?>

					<li><?php printf( '%1$s - %2$s', get_the_title(), get_the_content() );  ?></li>

				<?php endwhile; wp_reset_postdata(); ?>

			</ul>

		<?php else :
			esc_html_e( 'No testimonials in the diving taxonomy!', 'text-domain' );
			endif;
			?>






		</main><!-- #main -->
	</div><!-- #primary -->

 
<?php get_footer(); ?>

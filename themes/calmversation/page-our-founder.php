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

			 	<?php while ( have_posts() ) : the_post(); ?>

					<?php get_template_part( 'template-parts/content', 'page' ); ?>

				<?php endwhile; // End of the loop. ?>

			</main><!-- #main -->
		</div>
	</div><!-- #primary -->

 
<?php get_footer(); ?>

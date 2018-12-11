<?php
/**
 *Template Name: Our Company
 * @package Calmversation_Theme
 */

get_header(); ?>

	<div id="primary" class="company-content-area">
		<main id="main" class="company-site-main" role="main">

			<?php while ( have_posts() ) : the_post(); ?>

				<?php get_template_part( 'template-parts/content', 'page' ); ?>

			<?php endwhile; // End of the loop. ?>

		</main><!-- #main -->
	</div><!-- #primary -->

 
<?php get_footer(); ?>

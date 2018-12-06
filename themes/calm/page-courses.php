<?php
/**
 * The template for displaying all pages.
 *
 * @package Calmversation_Theme
 */

get_header(); ?>

	<div id="primary" class="content-area">
		<main id="main" class="site-main" role="main">

			<?php while ( have_posts() ) : the_post(); ?>

				<?php get_template_part( 'template-parts/content', 'courses' ); ?>

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
			$course_posts = get_posts( $args ); // returns an array of posts
			?>
			<section class="course-themes">
				<div class="course-theme-blocks">
				<?php foreach ( $course_posts as $post ) : setup_postdata( $post ); ?>
				<article class ="themes">
					<div class="img-container">
					<?php  /* Content from your array of post results goes here */ 
						if(has_post_thumbnail()){
						the_post_thumbnail('large');
						} 
					?>
					</div>
					<div class="adventure-info">
					
					<div class="permalink">
						<a href="<?php echo get_the_permalink(); ?>">
						<?php the_title();?>
						</a>
					</div>
					</div>
				</article>
				<?php endforeach; wp_reset_postdata(); ?>
				</div>
			</section>
			<section class="course-features">
				<h2>
					<?php echo CFS()->get( 'feature_title' ); ?>
				</h2>
				
				<?php
				$loop = CFS()->get( 'features' );
				foreach ( $loop as $row ) : ?>
					<div class="feature-block">
						<img src="<?php echo $row['feature_image']; ?>">
						<p> 
							<?php echo $row['feature_text']; ?>
						</p>
					</div>
				<?php endforeach; ?> 
			</section>
			<section class="course-pack">
				<h2><?php echo CFS()->get( 'course_pack_title' ); ?></h2>
				<p><?php echo CFS()->get( 'course_pack' ); ?></p>
				<button class="course_pack_button"> <?php echo CFS()->get( 'course_pack_button' ); ?></button>
			</section>
		</main><!-- #main -->
	</div><!-- #primary -->		
<?php get_footer(); ?>

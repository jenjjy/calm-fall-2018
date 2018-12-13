<?php
/**
 *
 * Template Name: Our Founder
 * @package Calmversation_Theme
 */

get_header(); ?>

<div id="primary" class="content-area">
    <main id="main" class="site-main" role="main">

        <?php the_title('<h1 class="page-title">', '</h1>'); ?>

	<?php if (has_post_thumbnail()) : ?>
				<?php the_post_thumbnail('large'); ?>
			<?php endif; ?>


        <?php
        $args = array(
            'order' => 'ASC',
            'post_type' => 'team_member',
            'post_status' => 'publish',
        );

        $testimonials = new WP_Query($args);
        if ($testimonials->have_posts()) :
            ?>

            <section class="team-page">

                <?php
                while ($testimonials->have_posts()) :
                    $testimonials->the_post();
                    ?>

					<div class="team-member">

						<div class="member-img"><?php echo the_post_thumbnail('medium') ; ?></div>
						<div class="member-name"><?php echo get_the_title() ; ?></div>
						<div class="member-role"><?php echo get_the_content(); ?></div>

					</div>

                <?php endwhile;
                wp_reset_postdata(); ?>

            </section>


            <section class="tedx-video">

                <iframe src="  <?php
					echo CFS()->get('our_team_video');
					?>" frameborder="0">
				</iframe>

				<div class="tedx-content">
					<h1>
						<?php echo CFS()->get('our_team_header'); ?>
					</h1>
					<p>
						<?php echo CFS()->get('our_team_text'); ?>
					</p>
				</div>

			</section>

        <?php else :
            esc_html_e('No testimonials in the diving taxonomy!', 'text-domain');
        endif;
        ?>


    </main><!-- #main -->
</div><!-- #primary -->


<?php get_footer(); ?>

<?php
/**
 * Template part for displaying posts.
 *
 * @package Calmversation_Theme
 */

?>

<article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
    <header class="entry-header">
        <?php if (has_post_thumbnail()) : ?>
            <?php the_post_thumbnail('large'); ?>
        <?php endif; ?>


        <?php if ('post' === get_post_type()) : ?>

        <?php endif; ?>
    </header><!-- .entry-header -->

    <div class="entry-content">
        <?php the_content(); ?>
    </div><!-- .entry-content -->


</article><!-- #post-## -->

<div id="stop" class="scrollTop">
    <span><a href="">toptoptop</a></span>
</div>

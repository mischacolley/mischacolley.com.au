<?php
/**
 * The template used for displaying page content in page.php
 *
 * @package Mischa Colley
 */
?>

<?php include("navigation.php"); ?>

<section class="panel intro">

	<a class="scroll-down icon-arrow-left" href="#about" data-offset="-45"><span class="hidden">Scroll Down</span></a>
	
</section>

<section id="about" class="panel about">

	<article>

		<?php the_field('about_copy_intro', 'option'); ?>

		<div class="call-to-action-container">

			<button class="call-to-action menu-contact">Work with me</button>

			<button class="call-to-action highlight find-out-more">Find out more</button>
			
		</div>

		<div class="about-copy-more" style="display:none;">
			<?php the_field('about_copy_more', 'option'); ?>
		</div>

	</article>

	<aside>

		<img src="<?php the_field('about_image', 'option'); ?>" alt="Mischa Colley & Sandra Colley" />

		<p>I'm <a target="_blank" href="https://twitter.com/mischacolley"><i class="fa fa-twitter"></i> @mischacolley</a> on Twitter, <br/>
		why not say hi</p>

		<?php display_latest_tweets('mischacolley'); ?>

	</aside>


	<!--  		

	<h1>Sometimes I Write / Sometimes I Read</h1>

	<article>

		<h2>Written</h2>

		<?php dynamic_sidebar( 'latest-posts-widget-area' ); ?>
		
	</article>
	
	<article>

		<h2>Read</h2>

		<?php dynamic_sidebar( 'pocket-widget-area' ); ?>
		
	</article>

	-->

</section>

<!-- 

<section class="panel blog">

	<h2>Blog</h2>

	<h3>Sometimes I Watch / Sometimes I Listen</h3>

	<article>

		<h4>Watched</h4>

		<ul>
			<li><a href="#">Lorem ipsum dolor</a></li>
			<li><a href="#">Lorem ipsum dolor</a></li>
			<li><a href="#">Lorem ipsum dolor</a></li>
		</ul>
		
	</article>
	
	<article>

		<h4>Heard</h4>

		<ul>
			<li><a href="#">Lorem ipsum dolor</a></li>
			<li><a href="#">Lorem ipsum dolor</a></li>
			<li><a href="#">Lorem ipsum dolor</a></li>
		</ul>
		
	</article>
	
</section>

<section class="panel work">

	<h2>Work</h2>
	
</section>

<section class="panel projects">

	<h2>Projects</h2>
	
</section>

<section class="panel resume">

	<h2>Resume</h2>
	
</section>

-->
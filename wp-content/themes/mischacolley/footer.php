<?php
/**
 * The template for displaying the footer.
 *
 * Contains the closing of the #content div and all content after
 *
 * @package Mischa Colley
 */
?>

	</div><!-- #content -->

	<section id="contact" class="panel contact">

		<div class="column">

			<h2>Get in Touch</h2>

			<?php the_field('contact_copy', 'option'); ?>

			<ul>
				<li class="location"><i class="fa fa-map-marker"></i> Byron Bay, Australia</li>
				<li><i class="fa fa-mobile"></i> <a href="tel:+61417906042">0417 906 042</a></li>
				<li><i class="fa fa-envelope-o"></i> <a href="mailto:me@mischacolley.com.au">me@mischacolley.com.au</a></li>
			</ul>
			

			

		</div>

		<div class="column">

		<?php gravity_form(1, $display_title=false, $display_description=false, $display_inactive=false, $field_values=null, $ajax=true, $tabindex); ?>

		</div>

	</section>

	<footer class="site-footer" role="contentinfo">
		
	</footer><!-- site-footer -->

</div><!-- #page -->

<?php wp_footer(); ?>

</body>
</html>

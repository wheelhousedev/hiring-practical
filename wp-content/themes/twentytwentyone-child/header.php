<?php

/**
 * The header.
 *
 * This is the template that displays all of the <head> section and everything up until main.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package WordPress
 * @subpackage Twenty_Twenty_One
 * @since Twenty Twenty-One 1.0
 */

?>
<!doctype html>
<html <?php language_attributes(); ?> <?php twentytwentyone_the_html_classes(); ?>>

<head>
	<meta charset="<?php bloginfo('charset'); ?>" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	 <!-- Google Tag Manager -->
	<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
	new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
	j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
	'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
	})(window,document,'script','dataLayer','UPDATE_ME_W_GTM_ID');</script>
	<!-- End Google Tag Manager -->
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>
	<div id="page" class="site">
		<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e('Skip to content', 'twentytwentyone'); ?></a>

		<?php get_template_part('template-parts/header/site-header'); ?>

		<div id="content" class="site-content">
			<div id="primary" class="content-area">
				<main id="main" class="site-main" role="main">

					<!-- Main jumbotron for a primary marketing message or call to action -->
					<div class="default-max-width">
						<div>
							<h1>Hello!</h1>
							<p>Welcome to our engineering practical. This intro is hard-coded into our child template and our Marketing team would like you to update the template so this intro can be edited from the Wordpress Admin.<br /><br /></p>
							<p>Please also add a little information to your page about your favorite hobby, we'd love to get to know you better.<br /><br /></p>
							
							<p>We also added some Analytics requirements to the page but didn't implement them. They should be easy to find, good luck!<br /><br /></p>
							<p></p>
							<p><button id="testButton" class="btn btn-success" style="display:none;" onclick="loadPopup();" title="Bind an event to me!">Subscription Popup!</button></p>
						</div>
					</div>

					<div id="mainContent" class="container">

					</div> <!-- /container -->
					<!-- <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script> -->
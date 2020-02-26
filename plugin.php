<?php
/**
 * Plugin Name: Layout Blocks
 * Description: Provides a set of reusable layout blocks for Gutenberg.
 * Version:     1.0.0
 * Author:      The Code Company
 * Author URI:  https://thecode.co
 *
 * @package tcc-layout-blocks
 */

namespace TheCodeCompany;

/**
 * Layout engine plugin driver class.
 * Here we register our blocks with WordPress and the rest is mostly React.
 */
class LayoutEngine {

	/**
	 * Boot the plugin, register blocks etc.
	 *
	 * @return void
	 */
	public function boot() {

		add_action( 'init', array( $this, 'hook_init' ) );

	}

	/**
	 * Called on the WP `init` hook.
	 *
	 * @return void
	 */
	public function hook_init() {

		$this->register_blocks();
		$this->register_assets();

	}

	/**
	 * Register plugin blocks in PHP.
	 * These are automatically registered in JS, we just need to do this so they can be filtered etc. in PHP.
	 *
	 * @return void
	 */
	protected function register_blocks() {

		\register_block_type(
			'tcc/column',
			array(
				'editor_script' => 'tcc-layout-engine',
				'editor_style'  => 'tcc-layout-engine',
			)
		);

		\register_block_type(
			'tcc/layout-1-column',
			array(
				'editor_script' => 'tcc-layout-engine',
				'editor_style'  => 'tcc-layout-engine',
			)
		);

		\register_block_type(
			'tcc/layout-2-column',
			array(
				'editor_script' => 'tcc-layout-engine',
				'editor_style'  => 'tcc-layout-engine',
			)
		);

		\register_block_type(
			'tcc/layout-3-column',
			array(
				'editor_script' => 'tcc-layout-engine',
				'editor_style'  => 'tcc-layout-engine',
			)
		);

		\register_block_type(
			'tcc/layout-4-column',
			array(
				'editor_script' => 'tcc-layout-engine',
				'editor_style'  => 'tcc-layout-engine',
			)
		);

	}

	/**
	 * Register the JS/CSS files to power our blocks in the wp-admin editor/Gutenberg.
	 *
	 * @return void
	 */
	protected function register_assets() {

		// Register block script for backend/editor.
		\wp_register_script(
			'tcc-layout-engine',
			plugins_url( '/dist/blocks.build.js', __FILE__ ),
			array( 'wp-blocks', 'wp-i18n', 'wp-element', 'wp-editor' ),
			filemtime( plugin_dir_path( __FILE__ ) . 'dist/blocks.build.js' ),
			true
		);

		// Register block editor styles for backend/editor.
		\wp_register_style(
			'tcc-layout-engine',
			plugins_url( 'dist/blocks.editor.build.css', __FILE__ ),
			array( 'wp-edit-blocks' ),
			filemtime( plugin_dir_path( __FILE__ ) . 'dist/blocks.editor.build.css' )
		);

	}

}

// Boot plugin.
$layout_engine = new LayoutEngine();
$layout_engine->boot();

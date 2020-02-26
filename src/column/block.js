/**
 * BLOCK: tcc/column
 *
 * Single column block, intended to be used as a sub component in layout blocks.
 * E.g. a 2 column layout would have 2 of these as InnerBlocks.
 */

import './editor.scss';

const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

registerBlockType( 'tcc/column', {

	title: 'Single Column',
	icon: 'layout',
	category: 'layout',

	keywords: [
		'column',
	],

	edit: ( props ) => {
		return (
			<div className={ props.className }>
				<InnerBlocks
					templateLock={ false }
					allowedBlocks={ '*' }
					disallowedBlocks={ // NOTE this isn't actually supported yet ...
						[
							'tcc/layout-1-column',
							'tcc/layout-2-column',
							'tcc/layout-3-column',
							'tcc/layout-4-column',
						]
					} />
			</div>
		);
	},

	save: ( props ) => {
		return (
			<div className={ props.className }>
				<InnerBlocks.Content />
			</div>
		);
	},
} );

/**
 * BLOCK: tcc/layout-3-column
 *
 * Three column layout block.
 */

import './editor.scss';

const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

registerBlockType( 'tcc/layout-3-column', {

	title: 'Layout - 3 Column',
	icon: 'layout',
	category: 'layout',

	keywords: [
		'3', 'three', '3 column', 'column', 'layout', 'tcc',
	],

	supports: {
		align: [ 'full' ],
	},

	edit: ( props ) => {
		return (
			<div className={ props.className }>
				<InnerBlocks
					allowedBlocks={ [ 'tcc/column' ] }
					templateLock="insert"
					template={
						[
							[ 'tcc/column' ],
							[ 'tcc/column' ],
							[ 'tcc/column' ],
						]
					}
				/>
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

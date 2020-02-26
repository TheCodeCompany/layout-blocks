/**
 * BLOCK: tcc/layout-2-column
 *
 * Two column layout block.
 */

import './editor.scss';

const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

registerBlockType( 'tcc/layout-2-column', {

	title: 'Layout - 2 Column',
	icon: 'layout',
	category: 'layout',

	keywords: [
		'2', 'two', '2 column', 'column', 'layout', 'tcc',
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

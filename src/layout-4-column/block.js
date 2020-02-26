/**
 * BLOCK: tcc/layout-4-column
 *
 * Four column layout block.
 */

import './editor.scss';

const { registerBlockType } = wp.blocks;
const { InnerBlocks } = wp.editor;

registerBlockType( 'tcc/layout-4-column', {

	title: 'Layout - 4 Column',
	icon: 'layout',
	category: 'layout',

	keywords: [
		'4', 'four', 'column', 'layout', 'tcc',
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

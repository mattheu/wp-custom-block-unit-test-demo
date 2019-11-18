import { registerBlockType } from '@wordpress/blocks';
import * as TeaserPostsGridBlock from './teaser-posts-grid';

/**
 * Setup Custom Blocks.
 */
export default function setup() {
	// Array of available blocks.
	const blocks = {
		TeaserPostsGridBlock,
	};

	// Loop through available blocks and register them.
	blocks.forEach( ( { blockName, blockOptions } ) => registerBlockType( blockName, blockOptions ) );
}

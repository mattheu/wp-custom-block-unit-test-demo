import { blockName, blockOptions } from './index';

test( 'Block entry point exports correct variables.', () => {
	// Test that the block name is exported and is a string.
	expect( typeof blockName ).toBe( 'string' );
	expect( blockName ).toBe( 'hm/teaser-posts-grid' );

	// Test that the block name is exported and is an obe prefixed with hm.
	expect( typeof blockOptions ).toBe( 'object' );

	expect( expect.objectContaining( {
		title: expect.any( String ),
		description: expect.any( String ),
		icon: expect.any( String ),
		category: expect.any( String ),
		attributes: expect.any( Object ),
		edit: expect.any( Object ),
		save: expect.any( Object ),
	} ) );
} );

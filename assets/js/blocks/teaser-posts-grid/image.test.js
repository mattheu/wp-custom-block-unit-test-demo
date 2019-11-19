import React from 'react';
import renderer from 'react-test-renderer';
import Image from './image';
import { useSelect as mockUseSelect } from '@wordpress/data';

const mockImage = {
	id: 456,
	alt_text: 'Test Alt Text',
	source_url: 'http://example.com/cat.jpg',
	media_details: {
		sizes: {
			thumbnail: {
				source_url: 'http://example.com/cat-thumbnail.jpg',
				width: 100,
				height: 100,
			},
			full: {
				source_url: 'http://example.com/cat.jpg',
				width: 400,
				height: 300,
			},
		},
	},
};

describe( 'Teaser Posts Grid Block Image Component', () => {
	test( 'renders loading when image is not found in store.', () => {
		const rendered = renderer.create( <Image id={ 123 } /> );
		expect( rendered.toJSON() ).toMatchSnapshot();
	} );

	test( 'renders image thumbnail.', () => {
		mockUseSelect.mockImplementationOnce( () => mockImage );

		const rendered = renderer.create( <Image id={ 456 } size="thumbnail"/> );
		expect( rendered.toJSON() ).toMatchSnapshot();
	} );

	test( 'renders full size image when requested size not found.', () => {
		mockUseSelect.mockImplementationOnce( () => mockImage );

		const rendered = renderer.create( <Image id={ 456 } size="bad-size"/> );
		expect( rendered.toJSON() ).toMatchSnapshot();
	} );
} );

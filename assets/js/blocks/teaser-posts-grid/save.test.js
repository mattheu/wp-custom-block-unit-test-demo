import React from 'react';
import renderer from 'react-test-renderer';
import Save from './save';

const mockSaveProps = {
	attributes: {
		items: [],
	},
};

describe( 'Teaser Posts Grid Block Save Component', () => {
	test( 'snapshot renders with defaults', () => {
		const component = renderer.create( <Save { ...mockSaveProps } /> );
		expect( component.toJSON() ).toMatchSnapshot();
	} );

	test( 'snapshot renders with multiple items', () => {
		const items = [
			{ id: 13 },
			{ id: 42 },
		];
		const component = renderer.create( <Save { ...mockSaveProps } items={ items }/> );
		expect( component.toJSON() ).toMatchSnapshot();
	} );
} );

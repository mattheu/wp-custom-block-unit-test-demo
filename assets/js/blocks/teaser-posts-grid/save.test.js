import React from 'react';
import renderer from 'react-test-renderer';
import Save from './save';

describe( 'Teaser Posts Grid Block Save Component', () => {
	test( 'renders with defaults', () => {
		const component = renderer.create( <Save attributes={ { items: [] } } /> );
		expect( component.toJSON() ).toMatchSnapshot();
	} );

	test( 'renders with multiple items', () => {
		const items = [
			{ id: 13 },
			{ id: 42 },
		];
		const component = renderer.create( <Save attributes={ { items } } /> );
		expect( component.toJSON() ).toMatchSnapshot();
	} );
} );

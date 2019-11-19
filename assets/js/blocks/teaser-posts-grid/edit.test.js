import React from 'react';
import renderer from 'react-test-renderer';
import Edit from './edit';

const mockEditProps = {
	attributes: {
		items: [],
	},
	setAttributes: jest.fn(),
};

beforeEach( () => {
	mockEditProps.setAttributes.mockClear();
} );

describe( 'Teaser Posts Grid Block Edit Component', () => {
	test( 'snapshot renders with defaults', () => {
		const component = renderer.create( <Edit { ...mockEditProps } /> );
		expect( component.toJSON() ).toMatchSnapshot();
	} );
} );

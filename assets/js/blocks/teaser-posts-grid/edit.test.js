import React from 'react';
import renderer from 'react-test-renderer';
import Edit from './edit';
import { Button } from '@wordpress/components';

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
	test( 'renders with defaults', () => {
		const testRenderer = renderer.create( <Edit { ...mockEditProps } /> );
		expect( testRenderer.toJSON() ).toMatchSnapshot();

		// Manually call the onClick event on the add new button.
		// Test that setAttributes was called with the correct data.
		testRenderer.root.findByProps( { className: 'btn-add-new' } ).props.onClick();
		expect( mockEditProps.setAttributes ).toHaveBeenCalledWith( { items: [ { id: null } ] } );
	} );

	test( 'renders with multiple items', () => {
		const items = [
			{ id: 13 },
			{ id: 42 },
		];
		const testRenderer = renderer.create( <Edit { ...mockEditProps } attributes={ { items } } /> );
		expect( testRenderer.toJSON() ).toMatchSnapshot();

		// Manually call the onChange event on the remove item button.
		// Test that setAttributes was called with the data that matches the expected format.
		// Verify the updated data.
		testRenderer.root.findAllByType( 'input' )[0].props.onChange( { target: { value: 56 } } );
		expect( mockEditProps.setAttributes ).toHaveBeenCalledTimes( 1 );
		expect( mockEditProps.setAttributes ).toHaveBeenCalledWith( {
			items: [ { id: 56 }, { id: 42 } ],
		} );

		// We can verify mock call args with snapshots if dealing with complex data.
		expect( mockEditProps.setAttributes.mock.calls[0] ).toMatchSnapshot()

		// Manually call the onClick event on the remove item button.
		// Test that setAttributes was called with the data that matches the expected format.
		// We don't always have to test precisce data, we can check it matches the expected structure instead.
		testRenderer.root.findAllByProps( { className: 'btn-remove-item' } )[0].props.onClick();
		expect( mockEditProps.setAttributes ).toHaveBeenCalledTimes( 2 );
		expect( mockEditProps.setAttributes ).toHaveBeenCalledWith( expect.objectContaining( {
			items: expect.any( Array ),
		} ) );
	} );
} );

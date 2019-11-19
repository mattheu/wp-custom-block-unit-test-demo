import { updateItem, deleteItem, appendItem } from './utils';

const testArray = [ { id: 2 }, { id: 3 }, { id: 4 } ];

describe( 'Teaser Posts Grid Block Utility Functions', () => {
	test( 'Update item.', () => {
		const newArray = updateItem( testArray, { id: 1 }, 1 );
		expect( newArray ).toMatchSnapshot()
	} );

	test( 'Update item but don\'t overwrite.', () => {
		const newArray = updateItem( testArray, { foo: 'bar' }, 1 );
		expect( newArray ).toMatchSnapshot()
	} );

	test( 'Append item.', () => {
		const newArray = appendItem( testArray, { id: 6 } );
		expect( newArray ).toMatchSnapshot()
	} );

	test( 'Delete item.', () => {
		const newArray = deleteItem( testArray, 2 );
		expect( newArray ).toMatchSnapshot()
	} );
} );

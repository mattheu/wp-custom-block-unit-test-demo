const mockSelectors = {
	'core': {
		getMedia: jest.fn(),
	},
};

export const select = jest.fn( storeName => mockSelectors[ storeName ] );
export const useSelect = jest.fn( fn => fn( select ) );

const mockDispatchers = {
	'core': {},
};

export const dispatch = jest.fn( storeName => mockDispatchers[ storeName ] );
export const useDispatch = jest.fn( fn => fn( dispatch ) );

beforeEach( () => {
	select.mockClear();
	useSelect.mockClear();
	dispatch.mockClear();
	useDispatch.mockClear();

	// Clear all the mock store selectors
	Object.values( mockSelectors ).forEach( store => Object.values( store ).forEach( mock => mock.mockClear() ) );

	// Clear all the mock store dispatchers
	Object.values( mockDispatchers ).forEach( store => Object.values( store ).forEach( mock => mock.mockClear() ) );
} );

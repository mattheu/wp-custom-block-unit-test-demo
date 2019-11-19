/**
 * Update an item in an array of items by index.
 *
 * @param {Array}  items   Original array.
 * @param {Object} newItem Updated item.
 * @param {Number} index   Index of item to update.
 */
export function updateItem( items, updatedItem, index ) {
	return [
		...items.slice( 0, index ),
		{
			...items[ index ],
			...updatedItem,
		},
		...items.slice( index + 1, items.length ),
	];
}

/**
 * Delete an item from an array of items.
 *
 * @param {Array}  items Original array.
 * @param {Number} index Index
 */
export function deleteItem( items, index ) {
	return [
		...items.slice( 0, index ),
		...items.slice( index + 1, items.length ),
	];
}

/**
 * Append a new item to the end of an array of items.
 *
 * @param {Array}  items   Original array.
 * @param {Object} newItem New item to append.
 */
export function appendItem( items, newItem ) {
	return [
		...items,
		newItem,
	]
}

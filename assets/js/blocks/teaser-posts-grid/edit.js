import React from 'react';
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';
import { updateItem, deleteItem, appendItem } from './utils';

function Edit( {
	attributes: {
		items,
	},
	setAttributes,
} ) {
	return (
		<div>
			<h2>Select some posts</h2>

			<ul>
				{ items.map( ( item, index ) => (
					<li key={ index }>
						<label>
							Post ID.
							<input
								type="number"
								value={ item.id }
								onChange={ e => {
									const newItem = { id: parseInt( e.target.value, 10 ) };
									setAttributes( { items: updateItem( items, newItem, index ) } );
								} }
							/>
							<Button
								isSmall
								isDefault
								className="btn-remove-item"
								onClick={ () => setAttributes( { items: deleteItem( items, index ) } ) }
							>
								{ __( 'Remove item', 'hm-gbtd' ) }
							</Button>
						</label>
					</li>
				) ) }
			</ul>

			<Button
				isDefault
				className="btn-add-new"
				onClick={ () => setAttributes( { items: appendItem( items, { id: null } ) } ) }
			>
				{ __( 'Add new', 'hm-gbtd' ) }
			</Button>
		</div>
	)
}

export default Edit;

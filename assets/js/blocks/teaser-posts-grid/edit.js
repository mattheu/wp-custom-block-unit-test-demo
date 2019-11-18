import React from 'react';
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';

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
					<li>
						<label>
							Post ID.
							<input
								type="number"
								value={ item.id }
								onChange={ e => {
									setAttributes( {
										items: [
											...items.slice( 0, index ),
											{
												id: parseInt( e.target.value, 10 ),
											},
											...items.slice( index + 1, items.length ),
										],
									} );
								} }
							/>
							<Button
								isSmall
								isDefault
								onClick={ () => {
									setAttributes( {
										items: [
											...items.slice( 0, index ),
											...items.slice( index + 1, items.length ),
										],
									} );
								} }
							>
								{ __( 'Remove item', 'hm-gbtd' ) }
							</Button>
						</label>
					</li>
				) ) }
			</ul>

			<Button
				isDefault
				onClick={ () => {
					setAttributes( {
						items: [
							...items,
							{ id: null },
						],
					} );
				} }
			>
				{ __( 'Add new', 'hm-gbtd' ) }
			</Button>
		</div>
	)
}

export default Edit;

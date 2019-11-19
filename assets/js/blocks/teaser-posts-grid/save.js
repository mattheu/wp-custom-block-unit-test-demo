import React from 'react';

function Save( {
	attributes: {
		items,
	},
} ) {
	return (
		<ul>
			{ items.map( ( item, index ) => (
				<li key={ index }>
					<h2>Post { item.id }</h2>
				</li>
			) ) }
		</ul>
	)
}

export default Save;

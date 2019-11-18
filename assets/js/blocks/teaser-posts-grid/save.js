import React from 'react';

function Save( {
	attributes: {
		items,
	},
} ) {
	return (
		<ul>
			{ items.map( item => (
				<li>
					<h2>Post { item.id }</h2>
				</li>
			) ) }
		</ul>
	)
}

export default Save;

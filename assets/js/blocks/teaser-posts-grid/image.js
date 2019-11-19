import React from 'react';
import { useSelect } from '@wordpress/data';
import { Loading } from '@wordpress/components';

function Image( { id, size } ) {
	const image = useSelect( select => select( 'core' ).getMedia( id ) );

	if ( ! image ) {
		return (
			<Loading />
		);
	}

	const imageSize = image.media_details.sizes[ size ] || image.media_details.sizes.full;

	return (
		<img
			src={ imageSize.source_url }
			width={ imageSize.width }
			height={ imageSize.height }
			alt={ image.alt_text || image.title.rendered }
		/>
	);
}

export default Image;

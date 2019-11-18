// Define this block type.
import { __ } from '@wordpress/i18n';
import Edit from './edit';
import Save from './save';

export const blockName = 'hm/teaser-posts-grid';

export const blockOptions = {
	title: __( 'Post Teaser Grid', 'hm-gbtd' ),
	description: __( 'Grid of post teasers', 'hm-gbtd' ),
	icon: '',
	category: 'layout',
	attributes: {
		items: {
			type: 'array',
			default: [],
		},
	},
	edit: Edit,
	save: Save,
};

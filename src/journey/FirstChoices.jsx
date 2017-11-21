import React from 'react';
import { Image } from 'semantic-ui-react';

// MEDIA AND STYLES
import logo from '../media/logo.svg';

const FirstChoices = function ( props ) {

	// `size` attribute not working, no class appears
	return (

		<div>
			<Image.Group className={'opening-choice'} centered size={'mini'}>
				<Image src={ logo } />
				<Image src={ logo } />
				<Image src={ logo } />
				<Image src={ logo } />
				<Image src={ logo } />
				<Image src={ logo } />
			</Image.Group>
		</div>

	);
};


export { FirstChoices };

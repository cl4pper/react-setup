// Link template
import React from 'react';
import { Text } from '@components';
import * as Types from './types';

// STYLE
import './style.scss';

const Link = (props: Types.Props): JSX.Element => {
	const { id, label, href } = props;
	function handleClick(): void {
		window.open(href, '_blank');
	}

	return (
		<span id={id} data-testid={id} className="Link" onClick={() => handleClick()}>
			<Text id={`${id}-link-label`} content={label} />
		</span>
	);
};

export default Link;

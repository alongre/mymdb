import React from 'react';
import { StyledCover } from '../styled/StyledCover';

const Cover = ({ image, title, description }) => {
	return (
		<StyledCover image={image}>
			<div className='cover-content'>
				<div className='cover-description'>
					<h1>{title}</h1>
					<p>{description}</p>
				</div>
			</div>
		</StyledCover>
	);
};

export default Cover;

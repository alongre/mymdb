import React from 'react';
import { Cover as StyledCover } from '../styled/Cover.styled';

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

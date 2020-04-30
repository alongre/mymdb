import styled from 'styled-components';

const StyledMovieLogo = styled.div`
	img {
		width: 100%;
		object-fit: cover;
		border-radius: 10px;
		z-index: 10;
		:hover {
			opacity: 0.8;
		}
	}
	padding-right: 5px;
`;

export default StyledMovieLogo;

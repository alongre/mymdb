import styled from 'styled-components';
import { media } from './mixin.styled';

export const StyledGrid = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 20px;
  h1 {
    font-family: 'Abel', sans-serif;
    font-size: 42px;

    ${media.tablet `
        font-size: 22px
    `}

  }
`;

export const StyledGridContent = styled.div`
  display: grid;
  grid-template-columns: repeat(5, minmax(100px, 1fr));
  grid-gap: 40px;
  position: relative;

  ${media.desktop`
     grid-template-columns: repeat(4, minmax(100px, 1fr)); 
  `}

  ${media.tablet`
     grid-template-columns: repeat(3, minmax(100px, 1fr));
  `}

  ${media.mobile`
    grid-template-columns: repeat(2, minmax(100px, 1fr));
  `}

  ${media.smallMobile`
    grid-template-columns: repeat(1, 1fr);
  `}

`;

import styled from 'styled-components';
import { media } from './mixin.styled';

export const StyledGrid = styled.div`
  max-width: 1280px;
  width: 100%;
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-gap: 40px;
  /* position: relative; */


`;

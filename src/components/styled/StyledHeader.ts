import styled from 'styled-components';
import {media} from './mixin.styled';

export const StyledHeader = styled.div`
  background: #1c1c1c;
  padding: 0 20px;

  .header-content {
    max-width: 1280px;
    min-height: 120px;
    padding: 20px 0;
    margin: auto;
    display: flex;
    justify-content: space-between;

    ${media.mobile`
            min-height: 0px;
        `}
  }
`;

export const StyledRMDBLogo = styled.img`
  width: 250px;
  height: 50px;
  margin-top: 20px;

  @media screen and (max-width: 500px) {
    width: 150px;
    height: 30px;
    margin-top: 5px;
  }
`;

export const StyledTMDBLogo = styled.img`
  width: 122px;
  margin-top: 25px;

  @media screen and (max-width: 500px) {
    width: 80px;
    margin-top: 0px;
  }
`;

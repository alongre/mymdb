import styled from 'styled-components';
import { media } from './mixin.styled';

export const StyledSearchBar = styled.div`
  width: 100%;
  height: 90px;
  background: #1c1c1c;
  padding: 20px;
  color: #fff;
`;

export const StyledSearchBarContent = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 55px;
  padding: 5px;
  background: #353535;
  margin: auto;
  /* border-radius: 40px; */
  z-index: 1000;
  color: #fff;
  display: flex;
  border-top-right-radius: 5px;
  border-top-left-radius: 5px;

  .fa-search {
    margin: auto 5px;
    color: #fff;
    /* z-index: 1000; */
  }
  .fa-times-circle {
    margin: auto 5px;
  }

  input {
    font-family: 'Abel', sans-serif;
    font-size: 28px;
    margin: auto 5px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: #fff;
    /* box-sizing: border-box; */

    :focus {
      outline: none;
    }
    ${media.tablet`
        font-size: 28px;
    `}
  }
`;

export const StyledDropdown = styled.ul`
  max-width: 1280px;
  width: 100%;
  z-index: 1000;
  font-family: 'Abel', sans-serif;
  font-size: 28px;
  color: #fff;
  background: #353535;
  margin: auto;
  max-height: 400px;
  padding-left: 10px;
  overflow-y: scroll;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
  /* border-radius: 50px; */
`;

export const StyledDropdownItem = styled.li`
  list-style: none;
  display: flex;
  padding: 5px;
  width: 100%;
  z-index: 1000;
`;

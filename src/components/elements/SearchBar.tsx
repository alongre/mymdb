import React from 'react';
import {
  StyledSearchBar,
  StyledSearchBarContent,
} from '../styled/StyledSearchBar';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SearchBar = () => {
  return (
    <StyledSearchBar>
      <StyledSearchBarContent>
        <FontAwesomeIcon
          icon={faSearch}
          size="2x"
          name="search"
          className="fa-search"
        />
        <input type="text" placeholder="Search Movies" />
      </StyledSearchBarContent>
    </StyledSearchBar>
  );
};

export default SearchBar;

import React from 'react';
import {Link} from '@reach/router';

import {
  StyledHeader,
  StyledRMDBLogo,
  StyledTMDBLogo,
} from '../styled/StyledHeader';
import RMDBLogo from '../images/reactMovie_logo.png';
import TMDBLogo from '../images/tmdb_logo.svg';

const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">
        <div className="header-content">
          <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo" />
          <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo" />
        </div>
      </Link>
    </StyledHeader>
  );
};

export default Header;

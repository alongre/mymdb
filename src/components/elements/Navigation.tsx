import React from 'react';
import {Link} from '@reach/router';
import {StyledNavigation} from '../styled/StyledNavigation';

export type NavigationItem = {
  name: string;
  linkTo: string;
};

const Navigation = (props: {navigationItems: NavigationItem[]}) => {
    const { navigationItems } = props;
    const navSize = navigationItems.length;
  return (
    <StyledNavigation>
      <div className="navigation-content">
        {props.navigationItems.map((nav, index) => (
          <span key={nav.name}>
            <Link to={nav.linkTo}>
              <p>{nav.name}</p>
            </Link>
            {index < (navSize-1) && <p>|</p>}
          </span>
        ))}
      </div>
    </StyledNavigation>
  );
};

export default Navigation;

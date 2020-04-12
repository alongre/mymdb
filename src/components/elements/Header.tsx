import React from 'react'
import { Header as StyledHeader, StyledRMDBLogo, StyledTMDBLogo } from '../styled/Header.styled'
import RMDBLogo from '../images/reactMovie_logo.png';
import TMDBLogo from '../images/tmdb_logo.svg';


const Header = () => {
    return (
        <StyledHeader>
            <div className='header-content'>
               <StyledRMDBLogo src={RMDBLogo} alt="rmdb-logo"/>
               <StyledTMDBLogo src={TMDBLogo} alt="tmdb-logo"/> 
            </div>
        </StyledHeader>
    )
}

export default Header

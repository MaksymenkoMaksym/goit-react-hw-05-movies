import { Outlet } from 'react-router-dom';

import StyledNavLink from 'components/StyledLink/StyledLink';
import { HeaderStyled, Nav } from './Header.styled';

const Header = () => {
  return (
    <>
      <HeaderStyled>
        <Nav>
          <StyledNavLink to="/" end>
            Home
          </StyledNavLink>
          <StyledNavLink to="/movies">Movies</StyledNavLink>
        </Nav>
      </HeaderStyled>
      <Outlet />
    </>
  );
};
export default Header;

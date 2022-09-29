import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
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

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};
export default Header;

import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
  color: #ffffff;
  display: block;
  width: max-content;
  padding: 10px;

  text-transform: uppercase;
  text-decoration: none;
  font-weight: 900;
  font-size: 18px;
  line-height: 1.22;
  text-align: center;

  &.active {
    color: orange;
  }
`;

export const StyledLink = styled(Link)`
  display: block;
  width: max-content;
  padding: 10px;
  color: orange;

  &.active {
    color: orange;
  }
`;

export default StyledNavLink;

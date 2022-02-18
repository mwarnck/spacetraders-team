import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export default function Navigation() {
  return (
    <NavBar>
      <LinkButton to="/">User status</LinkButton>
      <LinkButton to="/ships">Available ships</LinkButton>
      <LinkButton to="/market">Marketplace</LinkButton>
    </NavBar>
  );
}

const NavBar = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 5px;
  margin-bottom: 10px;
`;

const LinkButton = styled(NavLink)`
  padding: 4px 12px;
  border: 1px solid #bbb;
  border-radius: 5px;
  background-color: #333;
  text-decoration: none;
  color: #ddd;
  &.active {
    border-color: orange;
    transform: scale() (1.05);
  }
`;

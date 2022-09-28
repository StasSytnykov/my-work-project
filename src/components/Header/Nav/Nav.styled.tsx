import styled from "styled-components";

const NavStyled = styled.nav`
  display: flex;
`;

const NavList = styled.ul`
  display: flex;
  align-items: center;
`;

const NavItem = styled.li`
  font-size: 16px;
  line-height: 1.18;

  &:not(:last-child) {
    margin-right: 55px;
  }
`;

const NavLink = styled.a`
  color: #202731;
`;

export { NavStyled, NavList, NavItem, NavLink };

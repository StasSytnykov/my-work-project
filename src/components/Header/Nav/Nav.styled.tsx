import styled from "styled-components";

export const NavStyled = styled.nav`
  display: flex;
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.li`
  font-family: "Roboto", sans-serif;
  font-size: 16px;
  line-height: 1.18;

  &:not(:last-child) {
    margin-right: 55px;
  }
`;

export const NavLink = styled.a`
  color: #202731;
`;

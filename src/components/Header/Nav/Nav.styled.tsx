import styled from "styled-components";

const NavStyled = styled.nav`
  display: flex;
  @media screen and (min-width: 1200px) {
    margin-left: auto;
  }
`;

const NavList = styled.ul`
  display: flex;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }

  @media screen and (min-width: 1200px) {
    margin-right: 162px;
  }
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

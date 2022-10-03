import styled from "styled-components";

const NavStyled = styled.nav`
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1200px) {
    margin-left: auto;
  }
`;

const MobileButton = styled.button`
  border: none;
  background-color: #fff;
`;

const NavList = styled.ul`
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    display: flex;
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

export { NavStyled, MobileButton, NavList, NavItem, NavLink };

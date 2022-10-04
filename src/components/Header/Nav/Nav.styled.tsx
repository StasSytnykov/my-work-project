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
    margin-right: 30px;
  }

  @media screen and (min-width: 1200px) {
    margin-right: 162px;
  }
`;

const NavItem = styled.li`
  font-size: 16px;
  line-height: 1.18;

  &:not(:last-child) {
    margin-right: 25px;
  }

  @media screen and (min-width: 1200px) {
    &:not(:last-child) {
      margin-right: 55px;
    }
  }
`;

const NavLink = styled.a`
  color: #202731;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: #03a8b7;
  }
`;

export { NavStyled, MobileButton, NavList, NavItem, NavLink };

import { NavStyled, NavList, NavItem, NavLink } from "./Nav.styled";

export const Nav = () => (
  <NavStyled>
    <NavList>
      <NavItem>
        <NavLink href={"#features"}>Features</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href={"#price"}>Pricing</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href={""}>Blog</NavLink>
      </NavItem>
    </NavList>
  </NavStyled>
);

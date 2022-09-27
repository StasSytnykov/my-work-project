import { Button } from "../../Button";
import { NavStyled, NavList, NavItem, NavLink } from "./Nav.styled";

export const Nav = () => (
  <NavStyled>
    <NavList>
      <NavItem>
        <NavLink href={"#"}>Features</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href={"#"}>Pricing</NavLink>
      </NavItem>
      <NavItem>
        <NavLink href={"#"}>Blog</NavLink>
      </NavItem>
    </NavList>
    <Button text={"Register"} />
  </NavStyled>
);

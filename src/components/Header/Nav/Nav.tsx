import { ILinks } from "../../../Interfaces/linksInterface";
import { NavStyled, NavList, NavItem, NavLink } from "./Nav.styled";

const navItemContent = [
  {
    href: "#features",
    text: "Features",
  },
  {
    href: "#price",
    text: "Pricing",
  },
  {
    href: "",
    text: "Blog",
  },
];

export const Nav = () => (
  <NavStyled>
    <NavList>
      {navItemContent.map(({ href, text }: ILinks) => (
        <NavItem>
          <NavLink href={href}>{text}</NavLink>
        </NavItem>
      ))}
    </NavList>
  </NavStyled>
);

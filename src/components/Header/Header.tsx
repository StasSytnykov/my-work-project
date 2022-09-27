import { Logo } from "../Logo";
import { Nav } from "./Nav";
import { HeaderStyled } from "./Header.styled";

export const Header = () => (
  <HeaderStyled>
    <Logo />
    <Nav />
  </HeaderStyled>
);

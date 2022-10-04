import { Logo } from "../Logo";
import { Nav } from "./Nav";
import { HeaderStyled } from "./Header.styled";
import { HeaderContainer } from "../Container/Container.styled";

export const Header = () => (
  <HeaderStyled>
    <HeaderContainer>
      <Logo />
      <Nav />
    </HeaderContainer>
  </HeaderStyled>
);

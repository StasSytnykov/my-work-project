import { Logo } from "../Logo";
import { Nav } from "./Nav";
import { HeaderStyled } from "./Header.styled";
import { HeaderContainer } from "../Container/Container.styled";
import { HeaderButton } from "../Buttons";

export const Header = () => (
  <HeaderStyled>
    <HeaderContainer>
      <Logo />
      <Nav />
      <HeaderButton text={"Register"} />
    </HeaderContainer>
  </HeaderStyled>
);

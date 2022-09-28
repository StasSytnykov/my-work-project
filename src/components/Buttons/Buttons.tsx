import { ButtonStyled, HeroButtonStyled } from "./Buttons.styled";

type ButtonProps = {
  text: string;
};

const HeaderButton = ({ text }: ButtonProps) => (
  <ButtonStyled type="button">{text}</ButtonStyled>
);

const HeroButton = ({ text }: ButtonProps) => (
  <HeroButtonStyled type="button">{text}</HeroButtonStyled>
);

export { HeaderButton, HeroButton };

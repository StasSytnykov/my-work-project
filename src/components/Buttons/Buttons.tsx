import { ButtonStyled, HeroButtonStyled } from "./Buttons.styled";

type ButtonProps = {
  text: string;
};

export const HeaderButton = ({ text }: ButtonProps) => (
  <ButtonStyled type="button">{text}</ButtonStyled>
);

export const HeroButton = ({ text }: ButtonProps) => (
  <HeroButtonStyled type="button">{text}</HeroButtonStyled>
);

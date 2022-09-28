import {
  ButtonStyled,
  HeroButtonStyled,
  ExamplesButtonStyled,
} from "./Buttons.styled";

type ButtonProps = {
  text: string;
};

const HeaderButton = ({ text }: ButtonProps) => (
  <ButtonStyled type="button">{text}</ButtonStyled>
);

const HeroButton = ({ text }: ButtonProps) => (
  <HeroButtonStyled type="button">{text}</HeroButtonStyled>
);

const ExamplesButton = ({ text }: ButtonProps) => (
  <ExamplesButtonStyled>{text}</ExamplesButtonStyled>
);

export { HeaderButton, HeroButton, ExamplesButton };

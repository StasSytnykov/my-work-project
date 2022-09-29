import {
  HeaderButtonStyled,
  HeroButtonStyled,
  ExamplesButtonStyled,
  PricingCardButtonStyled,
} from "./Buttons.styled";

type ButtonProps = {
  text: string;
};

const HeaderButton = ({ text }: ButtonProps) => (
  <HeaderButtonStyled type="button">{text}</HeaderButtonStyled>
);

const HeroButton = ({ text }: ButtonProps) => (
  <HeroButtonStyled type="button">{text}</HeroButtonStyled>
);

const ExamplesButton = ({ text }: ButtonProps) => (
  <ExamplesButtonStyled>{text}</ExamplesButtonStyled>
);

const PricingCardButton = ({ text }: ButtonProps) => (
  <PricingCardButtonStyled>{text}</PricingCardButtonStyled>
);

export { HeaderButton, HeroButton, ExamplesButton, PricingCardButton };

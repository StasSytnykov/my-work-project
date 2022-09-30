import {
  HeaderButtonStyled,
  HeroButtonStyled,
  ExamplesButtonStyled,
  PricingCardButtonStyled,
  SignUpButtonStyled,
  SignUpButtonRequestStyled,
  FooterButtonStyled,
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
  <ExamplesButtonStyled type="button">{text}</ExamplesButtonStyled>
);

const PricingCardButton = ({ text }: ButtonProps) => (
  <PricingCardButtonStyled type="button">{text}</PricingCardButtonStyled>
);

const SignUpButton = ({ text }: ButtonProps) => (
  <SignUpButtonStyled type="button">{text}</SignUpButtonStyled>
);

const SignUpButtonRequest = ({ text }: ButtonProps) => (
  <SignUpButtonRequestStyled type="button">{text}</SignUpButtonRequestStyled>
);

const FooterButton = ({ text }: ButtonProps) => (
  <FooterButtonStyled type="button">{text}</FooterButtonStyled>
);

export {
  HeaderButton,
  HeroButton,
  ExamplesButton,
  PricingCardButton,
  SignUpButton,
  SignUpButtonRequest,
  FooterButton,
};

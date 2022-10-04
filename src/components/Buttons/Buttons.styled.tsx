import styled from "styled-components";
import {
  PALETTE,
  FONTS_SIZES,
  MEDIA_RULES,
} from "../../stylesVariables/variables";

const ButtonStyled = styled.button`
  background: linear-gradient(93.31deg, #006ad8 1.67%, #01acb4 98.59%),
    rgba(196, 196, 196, 0.05);
  backdrop-filter: blur(18.5px);

  border: transparent;
  border-radius: 5px;

  width: 185px;
  height: 40px;

  font-size: ${FONTS_SIZES.smallerTextFontSize};
  line-height: ${FONTS_SIZES.textLineHeight};

  text-align: center;

  color: ${PALETTE.buttonTextColor};

  &:hover,
  &:focus {
    cursor: pointer;
  }
`;

const HeaderButtonStyled = styled(ButtonStyled)`
  font-size: ${FONTS_SIZES.textFontSize};
  @media screen and (min-width: 1600px) {
    position: absolute;
    right: -140px;
  }
`;

const HeroButtonStyled = styled(ButtonStyled)`
  width: 142px;
  height: 50px;

  font-weight: ${FONTS_SIZES.titleFontWeight};
  text-transform: uppercase;
`;

const ExamplesButtonStyled = styled(HeroButtonStyled)`
  width: 154px;
  margin-top: 32px;
`;

const PricingCardButtonStyled = styled(ButtonStyled)`
  position: absolute;
  bottom: 20px;
  width: 276px;
  height: 60px;

  font-weight: ${FONTS_SIZES.titleFontWeight};

  @media screen and (min-width: ${MEDIA_RULES.desktopBreakPoint}) {
    bottom: 40px;
  }
`;

const SignUpButtonStyled = styled(HeroButtonStyled)`
  background: linear-gradient(93.31deg, #000000 1.67%, #000000 98.59%),
    rgba(196, 196, 196, 0.05);
  width: 133px;
`;

const SignUpButtonRequestStyled = styled(HeroButtonStyled)`
  width: 170px;
  margin-left: 15px;
  @media screen and (min-width: 768px) {
    width: 194px;
    margin-left: 30px;
  }
`;

const FooterButtonStyled = styled(SignUpButtonStyled)`
  width: 144px;
`;

export {
  HeaderButtonStyled,
  HeroButtonStyled,
  ExamplesButtonStyled,
  PricingCardButtonStyled,
  SignUpButtonStyled,
  SignUpButtonRequestStyled,
  FooterButtonStyled,
};

import styled from "styled-components";

const ButtonStyled = styled.button`
  background: linear-gradient(93.31deg, #006ad8 1.67%, #01acb4 98.59%),
    rgba(196, 196, 196, 0.05);
  backdrop-filter: blur(18.5px);

  border: transparent;
  border-radius: 5px;

  width: 185px;
  height: 40px;

  font-size: 14px;
  line-height: 1.4;

  text-align: center;

  color: #ffffff;

  &:hover,
  &:focus {
    cursor: pointer;
  }
`;

const HeaderButtonStyled = styled(ButtonStyled)`
  font-size: 16px;
  @media screen and (min-width: 1600px) {
    position: absolute;
    right: -140px;
  }
`;

const HeroButtonStyled = styled(ButtonStyled)`
  width: 142px;
  height: 50px;

  font-weight: 500;
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

  font-weight: 500;
  font-size: 14px;

  @media screen and (min-width: 1200px) {
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

export {
  HeaderButtonStyled,
  HeroButtonStyled,
  ExamplesButtonStyled,
  PricingCardButtonStyled,
  SignUpButtonStyled,
  SignUpButtonRequestStyled,
};

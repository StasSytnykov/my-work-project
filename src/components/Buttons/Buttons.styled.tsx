import styled from "styled-components";

export const ButtonStyled = styled.button`
  background: linear-gradient(93.31deg, #006ad8 1.67%, #01acb4 98.59%),
    rgba(196, 196, 196, 0.05);
  backdrop-filter: blur(18.5px);

  border: transparent;
  border-radius: 5px;

  width: 185px;
  height: 40px;

  font-weight: 400;
  font-size: 16px;
  line-height: 1.4;

  text-align: center;

  color: #ffffff;

  &:hover,
  &:focus {
    cursor: pointer;
  }
`;

export const HeroButtonStyled = styled(ButtonStyled)`
  width: 142px;
  height: 50px;

  font-weight: 500;
  font-size: 14px;
  line-height: 1.4;
  text-transform: uppercase;
`;

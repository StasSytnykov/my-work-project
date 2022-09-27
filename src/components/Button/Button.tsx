import { ButtonStyled } from "./Button.styled";

type ButtonProps = {
  text: string;
};

export const Button = ({ text }: ButtonProps) => (
  <ButtonStyled type="button">{text}</ButtonStyled>
);

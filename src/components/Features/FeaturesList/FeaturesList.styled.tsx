import styled from "styled-components";

export const FeaturesListStyled = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 60px;
`;

export const FeaturesItemStyled = styled.li`
  width: 360px;
  height: 318px;
  padding: 0 30px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
`;

export const FeaturesItemTitle = styled.h3`
  font-weight: 500;
  font-size: 26px;
  line-height: 1.19;
  color: #202731;
`;

export const FeaturesItemText = styled.p`
  font-family: "Gilroy", sans-serif;
  font-size: 16px;
  line-height: 1.4;
  color: rgba(0, 0, 0, 0.5);

  margin-top: 25px;

  &::before {
    display: block;
    content: "";
    border-top: 1px solid #03a8b7;
    width: 80px;
    margin-bottom: 25px;
  }
`;

import styled from "styled-components";

export const HeaderStyled = styled.header`
  margin-bottom: 50px;
  height: 150px;

  border-bottom: 1px solid rgba(32, 39, 49, 0.2);

  @media screen and (min-width: 768px) {
    display: flex;
    height: 100px;
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: 130px;
  }
`;

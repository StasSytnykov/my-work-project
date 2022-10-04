import styled from "styled-components";
import { PALETTE } from "../../../stylesVariables/variables";

const OurServiceListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const OurServiceItem = styled.li`
  @media screen and (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

const OurServiceItemTitle = styled.h3`
  font-size: 66px;
  line-height: 77px;
  color: ${PALETTE.primaryTextColor};
`;

export { OurServiceListStyled, OurServiceItem, OurServiceItemTitle };

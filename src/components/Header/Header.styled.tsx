import styled from "styled-components";
import { MEDIA_RULES } from "../../stylesVariables/variables";

export const HeaderStyled = styled.header`
  margin-bottom: 50px;

  border-bottom: 1px solid rgba(32, 39, 49, 0.2);

  @media screen and (min-width: ${MEDIA_RULES.tabletBreakPoint}) {
    display: flex;
    height: 100px;
  }

  @media screen and (min-width: ${MEDIA_RULES.desktopBreakPoint}) {
    margin-bottom: 130px;
  }
`;

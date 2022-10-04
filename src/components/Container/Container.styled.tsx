import styled from "styled-components";
import { MEDIA_RULES } from "../../stylesVariables/variables";

const Container = styled.div`
  padding: 0 10px;

  @media screen and (min-width: ${MEDIA_RULES.tabletBreakPoint}) {
    margin: 0 auto;
    width: 738px;
  }

  @media screen and (min-width: ${MEDIA_RULES.desktopBreakPoint}) {
    position: relative;
    width: 1170px;
    padding: 0 15px;
  }
`;

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: ${MEDIA_RULES.desktopBreakPoint}) {
    position: relative;
    justify-content: start;
  }
`;

export { Container, HeaderContainer };

import styled from "styled-components";
import { MEDIA_RULES } from "../../stylesVariables/variables";
import { SectionTitle, SectionText } from "../CommonTextStyle.styled";

const OurServiceSection = styled.section`
  padding: 50px 0 50px 0;

  background-color: #fcfcfc;
  @media screen and (min-width: ${MEDIA_RULES.desktopBreakPoint}) {
    padding: 129px 0 144px 0;
  }
`;

const OurServiceTextThumb = styled.div`
  margin-bottom: 20px;
  @media screen and (min-width: ${MEDIA_RULES.desktopBreakPoint}) {
    margin-left: 420px;
  }
`;

const OurServiceTitle = styled(SectionTitle)`
  margin-bottom: 10px;

  @media screen and (min-width: ${MEDIA_RULES.desktopBreakPoint}) {
    margin-bottom: 24px;
  }
`;

const OurServiceText = styled(SectionText)`
  margin-bottom: 20px;

  @media screen and (min-width: ${MEDIA_RULES.desktopBreakPoint}) {
    margin-bottom: 54px;
  }
`;

export {
  OurServiceSection,
  OurServiceTextThumb,
  OurServiceTitle,
  OurServiceText,
};

import styled from "styled-components";
import { PALETTE, MEDIA_RULES } from "../../stylesVariables/variables";
import { SectionTitle, SectionText } from "../CommonTextStyle.styled";

const PricingSection = styled.section`
  padding: 50px 0 50px 0;

  @media screen and (min-width: ${MEDIA_RULES.desktopBreakPoint}) {
    padding: 130px 0 150px 0;
  }
`;

const PricingDescThumb = styled.div`
  margin-bottom: 20px;
  @media screen and (min-width: ${MEDIA_RULES.desktopBreakPoint}) {
    margin-left: 420px;
    margin-bottom: 50px;
  }
`;

const PricingTitle = styled(SectionTitle)`
  margin-bottom: 14px;
`;

const PricingText = styled(SectionText)`
  color: ${PALETTE.accentTextColor};
`;

export { PricingSection, PricingDescThumb, PricingTitle, PricingText };

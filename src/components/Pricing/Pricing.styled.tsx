import styled from "styled-components";
import { SectionTitle, SectionText } from "../CommonTextStyle.styled";

const PricingSection = styled.section`
  padding: 50px 0 50px 0;

  @media screen and (min-width: 1200px) {
    padding: 130px 0 150px 0;
  }
`;

const PricingDescThumb = styled.div`
  margin-bottom: 20px;
  @media screen and (min-width: 1200px) {
    margin-left: 420px;
    margin-bottom: 50px;
  }
`;

const PricingTitle = styled(SectionTitle)`
  margin-bottom: 14px;
`;

const PricingText = styled(SectionText)`
  color: rgba(0, 0, 0, 0.75);
`;

export { PricingSection, PricingDescThumb, PricingTitle, PricingText };

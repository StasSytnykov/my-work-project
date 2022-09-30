import styled from "styled-components";

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

const PricingTitle = styled.h2`
  font-weight: 500;
  font-size: 30px;
  line-height: 1.17;
  color: #202731;

  margin-bottom: 14px;

  @media screen and (min-width: 1200px) {
    font-size: 46px;
  }
`;

const PricingText = styled.p`
  font-size: 16px;
  line-height: 1.4;

  color: rgba(0, 0, 0, 0.75);
`;

export { PricingSection, PricingDescThumb, PricingTitle, PricingText };

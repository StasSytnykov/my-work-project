import styled from "styled-components";
import { SectionTitle, SectionText } from "../CommonTextStyle.styled";

const FeaturesSection = styled.section`
  margin-bottom: 50px;

  @media screen and (min-width: 1200px) {
    margin-bottom: 150px;
  }
`;

const FeaturesThumb = styled.div`
  @media screen and (min-width: 1200px) {
    width: 570px;
    margin-left: 420px;
  }
`;

const FeaturesTitle = styled(SectionTitle)`
  font-weight: 600;
  line-height: 1.19;
  margin-bottom: 15px;

  @media screen and (min-width: 1200px) {
    margin-bottom: 24px;
  }
`;

const FeaturesDesc = styled(SectionText)`
  color: rgba(32, 39, 49, 0.75);
  margin-bottom: 25px;

  @media screen and (min-width: 768px) {
    margin-bottom: 49px;
  }
`;

export { FeaturesSection, FeaturesThumb, FeaturesTitle, FeaturesDesc };

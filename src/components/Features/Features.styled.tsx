import styled from "styled-components";

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

const FeaturesTitle = styled.h1`
  font-weight: 600;
  font-size: 32px;
  line-height: 1.19;
  color: #202731;
  margin-bottom: 15px;
  @media screen and (min-width: 1200px) {
    font-size: 46px;
    margin-bottom: 24px;
  }
`;

const FeaturesDesc = styled.p`
  font-size: 16px;
  line-height: 1.4;
  color: rgba(32, 39, 49, 0.75);
  margin-bottom: 25px;

  @media screen and (min-width: 768px) {
    margin-bottom: 49px;
  }
`;

export { FeaturesSection, FeaturesThumb, FeaturesTitle, FeaturesDesc };

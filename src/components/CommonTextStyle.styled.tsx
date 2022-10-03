import styled from "styled-components";

const SectionTitle = styled.h2`
  font-size: 30px;
  font-weight: 500;
  line-height: 1.17;
  color: #202731;

  @media screen and (min-width: 768px) {
    font-size: 35px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 46px;
  }
`;

const SectionText = styled.p`
  font-size: 14px;
  line-height: 1.4;
  color: #4c4f56;

  @media screen and (min-width: 1200px) {
    font-size: 16px;
  }
`;

const SectionSubtitle = styled(SectionText)`
  font-weight: 500;
  text-transform: uppercase;
  color: #03a8b7;

  @media screen and (min-width: 1200px) {
    position: absolute;
    top: 0;
    left: 15px;
  }
`;

export { SectionTitle, SectionText, SectionSubtitle };

import styled from "styled-components";

const OurServiceSection = styled.section`
  padding: 50px 0 50px 0;

  background-color: #fcfcfc;
  @media screen and (min-width: 1200px) {
    padding: 129px 0 144px 0;
  }
`;

const OurServiceTextThumb = styled.div`
  margin-bottom: 20px;
  @media screen and (min-width: 1200px) {
    margin-left: 420px;
  }
`;

const OurServiceTitle = styled.h2`
  font-weight: 500;
  font-size: 30px;
  line-height: 1.17;
  color: #202731;

  margin-bottom: 10px;

  @media screen and (min-width: 1200px) {
    font-size: 46px;
    margin-bottom: 24px;
  }
`;

const OurServiceText = styled.p`
  font-size: 16px;
  line-height: 1.4;
  color: #4c4f56;

  margin-bottom: 20px;

  @media screen and (min-width: 1200px) {
    margin-bottom: 54px;
  }
`;

export {
  OurServiceSection,
  OurServiceTextThumb,
  OurServiceTitle,
  OurServiceText,
};

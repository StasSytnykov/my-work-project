import styled from "styled-components";

const HeroSection = styled.section`
  margin-bottom: 50px;

  @media screen and (min-width: 768px) {
    position: relative;
    display: flex;
    justify-content: center;
  }
  @media screen and (min-width: 1200px) {
    margin-bottom: 150px;
  }
`;

const HeroThumb = styled.div`
  @media screen and (min-width: 768px) and (max-width: 1199px) {
    display: flex;
  }
`;

const HeroTextThumb = styled.div`
  @media screen and (min-width: 768px) {
    width: 350px;
  }
  @media screen and (min-width: 1200px) {
    width: 570px;
  }
`;

const HeroText = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.4;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

const HeroTitle = styled.h1`
  font-weight: 600;
  font-size: 30px;
  line-height: 1.1;
  color: #202731;
  margin-bottom: 15px;

  @media screen and (min-width: 768px) {
    font-size: 35px;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 66px;
  }
`;

const HeroDesc = styled.p`
  font-size: 20px;
  line-height: 1.4;
  color: rgba(24, 30, 37, 0.5);

  margin-bottom: 30px;

  @media screen and (min-width: 1200px) {
    font-size: 26px;
    margin-bottom: 55px;
  }
`;

const HeroImg = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;
    width: 400px;
  }

  @media screen and (min-width: 1200px) {
    position: absolute;
    top: -25px;
    right: 0;

    width: 600px;
  }

  @media screen and (min-width: 1600px) {
    position: absolute;
    top: -25px;
    right: -140px;

    width: 698px;
  }
`;

export {
  HeroSection,
  HeroThumb,
  HeroTextThumb,
  HeroText,
  HeroTitle,
  HeroDesc,
  HeroImg,
};

import styled from "styled-components";

const HeroSection = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 150px;
`;

const HeroThumb = styled.div`
  width: 570px;

  margin-right: 70px;
`;

const HeroText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  text-transform: uppercase;
`;

const HeroTitle = styled.h1`
  font-weight: 600;
  font-size: 66px;
  line-height: 1.1;
  color: #202731;

  margin-bottom: 30px;
`;

const HeroDesc = styled.p`
  font-size: 26px;
  line-height: 1.4;
  color: rgba(24, 30, 37, 0.5);

  margin-bottom: 55px;
`;

const HeroImg = styled.img`
  position: absolute;
  top: -25px;
  right: -140px;
`;

export { HeroSection, HeroThumb, HeroText, HeroTitle, HeroDesc, HeroImg };

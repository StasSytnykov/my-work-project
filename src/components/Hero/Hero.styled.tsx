import styled from "styled-components";

export const HeroSection = styled.section`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 150px;
`;

export const HeroThumb = styled.div`
  width: 570px;

  margin-right: 70px;
`;

export const HeroText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  text-transform: uppercase;
`;

export const HeroTitle = styled.h1`
  font-weight: 600;
  font-size: 66px;
  line-height: 1.1;
  color: #202731;

  margin-bottom: 30px;
`;

export const HeroDesc = styled.p`
  font-size: 26px;
  line-height: 1.4;
  color: rgba(24, 30, 37, 0.5);

  margin-bottom: 55px;
`;

export const HeroImg = styled.img`
  position: absolute;
  top: -25px;
  right: 60px;
`;

import styled from "styled-components";

const FooterStyled = styled.footer`
  background-color: #f8f8f8;
  padding-top: 50px;

  @media screen and (min-width: 1200px) {
    padding-top: 96px;
  }
`;

const FooterFlexThumb = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const FooterContentThumb = styled.div`
  margin: 0 0 20px 0;
  @media screen and (min-width: 1200px) {
    margin: 0 133px 0 0;
  }
`;

const FooterTitle = styled.h3`
  font-weight: 400;
  font-size: 26px;
  line-height: 1.4;
  color: #000000;

  margin: 0 0 20px 0;

  @media screen and (min-width: 768px) {
    margin: 18px 0 41px 0;
  }

  @media screen and (min-width: 1200px) {
    white-space: nowrap;
  }
`;

const FooterListsThumb = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: 768px) {
    margin-top: 73px;
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: 1200px) {
    margin-top: 73px;
  }
`;

const SecondFooter = styled.div`
  background: #202731;
  margin-top: 50px;

  @media screen and (min-width: 1200px) {
    margin-top: 101px;
  }
`;

const SecondFooterTextThumb = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const SecondFooterText = styled.p`
  display: flex;
  font-size: 14px;
  line-height: 1.4;
  color: #f8f8f8;
`;

export {
  FooterStyled,
  FooterContentThumb,
  FooterTitle,
  FooterFlexThumb,
  FooterListsThumb,
  SecondFooter,
  SecondFooterTextThumb,
  SecondFooterText,
};

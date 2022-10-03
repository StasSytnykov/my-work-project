import styled from "styled-components";
import { SectionTitle } from "../CommonTextStyle.styled";

const ClientsSection = styled.section`
  padding: 50px 0;
  background-color: #fcfcfc;

  @media screen and (min-width: 1200px) {
    padding: 129px 0 150px 0;
  }
`;

const ClientsTitle = styled(SectionTitle)`
  margin-bottom: 15px;

  @media screen and (min-width: 1200px) {
    margin: 0 0 62px 420px;
  }
`;

const ClientsImage = styled.img`
  width: 340px;
  border-radius: 15px;

  @media screen and (min-width: 768px) {
    width: 340px;
    height: 340px;
  }

  @media screen and (min-width: 1200px) {
    width: 360px;
    height: 360px;
  }
`;

const ClientsQuotesSvg = styled.svg`
  height: 34px;
  margin: 10px 0;

  @media screen and (min-width: 768px) {
    margin: 0 30px 0 30px;
  }

  @media screen and (min-width: 1200px) {
    margin: 0 54px 0 60px;
  }
`;

const ClientsContentThumb = styled.div`
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    display: flex;
  }
  @media screen and (min-width: 1200px) {
    margin-bottom: 151px;
  }
`;

const ClientsDesc = styled.p`
  font-weight: 300;
  font-size: 20px;
  line-height: 1.2;
  color: #202731;

  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 26px;
    margin-bottom: 81px;
  }
`;

const ClientsInfo = styled.p`
  font-weight: 600;
  font-size: 16px;
  color: #202731;

  margin-bottom: 11px;
`;

const ClientsCompany = styled(ClientsInfo)`
  color: rgba(32, 39, 49, 0.5);
`;

const ClientsButtonThumb = styled.div`
  margin-top: 30px;

  @media screen and (min-width: 768px) {
    margin-top: 67px;
  }
`;

const ClientsButtonLeft = styled.button`
  background: #f8f8f8;
  border: 1px solid #03a8b7;

  width: 50px;
  height: 50px;

  border-radius: 50%;
`;

const ClientsButtonRight = styled(ClientsButtonLeft)`
  background: #03a8b7;

  border: none;

  margin-left: 30px;
`;

export {
  ClientsSection,
  ClientsTitle,
  ClientsImage,
  ClientsQuotesSvg,
  ClientsContentThumb,
  ClientsDesc,
  ClientsInfo,
  ClientsCompany,
  ClientsButtonThumb,
  ClientsButtonLeft,
  ClientsButtonRight,
};

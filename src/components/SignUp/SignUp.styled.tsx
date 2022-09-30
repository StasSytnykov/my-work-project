import styled from "styled-components";
import signUpImg from "../../images/signUp.png";

const SignUpSection = styled.section`
  padding: 50px 0 50px 0;

  @media screen and (min-width: 1200px) {
    padding: 129px 0 300px 0;
  }
`;

const SignUpContentThumb = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

const SignUpImgBox = styled.div`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
    width: 300px;
    height: 300px;
    background-image: url(${signUpImg});
    background-size: 300px 300px;
  }
`;

const SignUpTextThumb = styled.div`
  @media screen and (min-width: 768px) {
    margin: 0 50px 0 0;
    width: 360px;
  }

  @media screen and (min-width: 1200px) {
    margin: 0 93px 0 420px;
  }
`;

const SignUpTitle = styled.h2`
  font-weight: 500;
  font-size: 30px;
  line-height: 1.17;
  color: #202731;

  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
    font-size: 46px;
  }
`;

const SignUpText = styled.p`
  font-size: 16px;
  line-height: 1.4;
  color: #4c4f56;

  margin-bottom: 20px;
  @media screen and (min-width: 1200px) {
    margin-bottom: 50px;
  }
`;

export {
  SignUpSection,
  SignUpContentThumb,
  SignUpImgBox,
  SignUpTextThumb,
  SignUpTitle,
  SignUpText,
};

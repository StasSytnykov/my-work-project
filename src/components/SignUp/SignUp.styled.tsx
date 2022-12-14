import styled from "styled-components";
import {
  PALETTE,
  FONTS_SIZES,
  MEDIA_RULES,
} from "../../stylesVariables/variables";
import signUpImg from "../../images/signUp.png";

const SignUpSection = styled.section`
  padding: 50px 0 50px 0;

  @media screen and (min-width: ${MEDIA_RULES.desktopBreakPoint}) {
    padding: 129px 0 300px 0;
  }
`;

const SignUpContentThumb = styled.div`
  @media screen and (min-width: ${MEDIA_RULES.tabletBreakPoint}) {
    display: flex;
  }
`;

const SignUpImgBox = styled.div`
  display: none;
  @media screen and (min-width: ${MEDIA_RULES.tabletBreakPoint}) {
    display: block;
    width: 300px;
    height: 300px;
    background-image: url(${signUpImg});
    background-size: 300px 300px;
  }
`;

const SignUpTextThumb = styled.div`
  @media screen and (min-width: ${MEDIA_RULES.tabletBreakPoint}) {
    margin: 0 50px 0 0;
    width: 360px;
  }

  @media screen and (min-width: ${MEDIA_RULES.desktopBreakPoint}) {
    margin: 0 93px 0 420px;
  }
`;

const SignUpTitle = styled.h2`
  font-weight: ${FONTS_SIZES.titleFontWeight};
  font-size: ${FONTS_SIZES.mobileTitleFontSize};
  line-height: 1.17;
  color: ${PALETTE.primaryTextColor};

  margin-bottom: 10px;

  @media screen and (min-width: ${MEDIA_RULES.tabletBreakPoint}) {
    margin-bottom: 24px;
    font-size: ${FONTS_SIZES.titleFontSize};
  }
`;

const SignUpText = styled.p`
  font-size: ${FONTS_SIZES.textFontSize};
  line-height: ${FONTS_SIZES.textLineHeight};
  color: ${PALETTE.secondaryTextColor};

  margin-bottom: 20px;
  @media screen and (min-width: ${MEDIA_RULES.desktopBreakPoint}) {
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

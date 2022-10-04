import styled from "styled-components";
import {
  PALETTE,
  FONTS_SIZES,
  MEDIA_RULES,
} from "../../stylesVariables/variables";
import { SectionText } from "../CommonTextStyle.styled";

const HeroSection = styled.section`
  margin-bottom: 50px;

  @media screen and (min-width: ${MEDIA_RULES.tabletBreakPoint}) {
    position: relative;
    display: flex;
    justify-content: center;
  }
  @media screen and (min-width: ${MEDIA_RULES.desktopBreakPoint}) {
    margin-bottom: 150px;
  }
`;

const HeroThumb = styled.div`
  @media screen and (min-width: ${MEDIA_RULES.tabletBreakPoint}) and (max-width: ${MEDIA_RULES.tabletBreakPointMaxWidth}) {
    display: flex;
  }
`;

const HeroTextThumb = styled.div`
  @media screen and (min-width: ${MEDIA_RULES.tabletBreakPoint}) {
    width: 350px;
  }
  @media screen and (min-width: ${MEDIA_RULES.desktopBreakPoint}) {
    width: 530px;
  }
`;

const HeroText = styled(SectionText)`
  font-weight: ${FONTS_SIZES.titleFontWeight};
  text-transform: uppercase;
  color: ${PALETTE.accentColor};
`;

const HeroTitle = styled.h1`
  font-weight: 600;
  font-size: ${FONTS_SIZES.mobileTitleFontSize};
  line-height: 1.1;
  color: ${PALETTE.primaryTextColor};
  margin-bottom: 15px;

  @media screen and (min-width: ${MEDIA_RULES.tabletBreakPoint}) {
    font-size: ${FONTS_SIZES.tabletTitleFontSize};
    margin-bottom: 30px;
  }

  @media screen and (min-width: ${MEDIA_RULES.desktopBreakPoint}) {
    font-size: 59px;
  }
`;

const HeroDesc = styled.p`
  font-size: ${FONTS_SIZES.blockTitleFontSize};
  line-height: ${FONTS_SIZES.textLineHeight};
  color: rgba(24, 30, 37, 0.5);

  margin-bottom: 30px;

  @media screen and (min-width: ${MEDIA_RULES.desktopBreakPoint}) {
    font-size: ${FONTS_SIZES.biggerTextFontSize};
    margin-bottom: 55px;
  }
`;

const HeroImg = styled.img`
  display: none;

  @media screen and (min-width: ${MEDIA_RULES.tabletBreakPoint}) {
    display: block;
    width: 400px;
  }

  @media screen and (min-width: ${MEDIA_RULES.desktopBreakPoint}) {
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

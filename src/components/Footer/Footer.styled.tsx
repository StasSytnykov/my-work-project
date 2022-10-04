import styled from "styled-components";
import {
  PALETTE,
  FONTS_SIZES,
  MEDIA_RULES,
} from "../../stylesVariables/variables";

const FooterStyled = styled.footer`
  background-color: #f8f8f8;
  padding-top: 50px;

  @media screen and (min-width: ${MEDIA_RULES.desktopBreakPoint}) {
    padding-top: 96px;
  }
`;

const FooterFlexThumb = styled.div`
  @media screen and (min-width: ${MEDIA_RULES.tabletBreakPoint}) {
    display: flex;
  }
`;

const FooterContentThumb = styled.div`
  margin: 0 0 20px 0;
  @media screen and (min-width: ${MEDIA_RULES.desktopBreakPoint}) {
    margin: 0 133px 0 0;
  }
`;

const FooterTitle = styled.h3`
  font-weight: 400;
  font-size: ${FONTS_SIZES.biggerTextFontSize};
  line-height: ${FONTS_SIZES.textLineHeight};
  color: ${PALETTE.footerTextColor};

  margin: 0 0 20px 0;

  @media screen and (min-width: ${MEDIA_RULES.tabletBreakPoint}) {
    margin: 18px 0 41px 0;
  }

  @media screen and (min-width: ${MEDIA_RULES.desktopBreakPoint}) {
    white-space: nowrap;
  }
`;

const FooterListsThumb = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media screen and (min-width: ${MEDIA_RULES.tabletBreakPoint}) {
    margin-top: 73px;
    flex-direction: row;
    justify-content: space-between;
  }

  @media screen and (min-width: ${MEDIA_RULES.desktopBreakPoint}) {
    margin-top: 73px;
  }
`;

const SecondFooter = styled.div`
  background: ${PALETTE.primaryTextColor};
  margin-top: 50px;

  @media screen and (min-width: ${MEDIA_RULES.desktopBreakPoint}) {
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
  font-size: ${FONTS_SIZES.smallerTextFontSize};
  line-height: ${FONTS_SIZES.textLineHeight};
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

import styled from "styled-components";
import {
  PALETTE,
  FONTS_SIZES,
  MEDIA_RULES,
} from "../../../stylesVariables/variables";

const AdvantagesListStyled = styled.ul`
  display: flex;
  @media screen and (max-width: ${MEDIA_RULES.mobileVersionMaxWidth}) {
    flex-direction: column;
    align-items: center;
  }
`;

const AdvantagesItem = styled.li`
  width: 340px;
  height: 370px;

  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  border-radius: 10px;

  &:not(:last-child) {
    margin: 0 0 30px 0;
  }

  @media screen and (min-width: ${MEDIA_RULES.tabletBreakPoint}) {
    &:not(:last-child) {
      margin: 0 20px 0 0;
    }
  }

  @media screen and (min-width: ${MEDIA_RULES.desktopBreakPoint}) {
    width: 360px;
    &:not(:last-child) {
      margin: 0 60px 0 0;
    }
  }
`;

const AdvantagesContentThumb = styled.div`
  padding: 50px 30px 0 30px;
`;

const AdvantagesSvgThumb = styled.div`
  position: relative;
  display: block;
  margin: 0 auto 35px auto;
  width: 90px;
  height: 90px;

  background: linear-gradient(
    134.83deg,
    #fcfcfc 4.17%,
    rgba(252, 252, 252, 0) 96.67%
  );
  border: 1px solid rgba(0, 0, 0, 0.05);
  filter: drop-shadow(0px 5px 12px rgba(0, 0, 0, 0.05));
  border-radius: 10px;
`;

const AdvantagesSvg = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const AdvantagesCardTitle = styled.h3`
  font-weight: ${FONTS_SIZES.titleFontWeight};
  font-size: 18px;
  line-height: ${FONTS_SIZES.textLineHeight};
  text-align: center;
  color: #181818;

  @media screen and (min-width: ${MEDIA_RULES.desktopBreakPoint}) {
    white-space: nowrap;
  }
`;

const AdvantagesCardSubtitle = styled.p`
  font-weight: ${FONTS_SIZES.titleFontWeight};
  font-size: ${FONTS_SIZES.textLineHeight};
  line-height: 1.5;
  text-align: center;
  color: ${PALETTE.accentColor};
  @media screen and (min-width: ${MEDIA_RULES.desktopBreakPoint}) {
    white-space: nowrap;
  }
`;

const AdvantagesCardText = styled.p`
  font-weight: ${FONTS_SIZES.titleFontWeight};
  font-size: ${FONTS_SIZES.textFontSize};
  line-height: ${FONTS_SIZES.textLineHeight};
  text-align: center;
  color: rgba(24, 24, 24, 0.5);
`;

export {
  AdvantagesListStyled,
  AdvantagesItem,
  AdvantagesContentThumb,
  AdvantagesSvgThumb,
  AdvantagesSvg,
  AdvantagesCardTitle,
  AdvantagesCardSubtitle,
  AdvantagesCardText,
};

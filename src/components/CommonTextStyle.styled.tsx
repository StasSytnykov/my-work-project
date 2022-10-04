import styled from "styled-components";
import {
  PALETTE,
  FONTS_SIZES,
  MEDIA_RULES,
} from "../stylesVariables/variables";

const SectionTitle = styled.h2`
  font-size: ${FONTS_SIZES.mobileTitleFontSize};
  font-weight: ${FONTS_SIZES.titleFontWeight};
  line-height: ${FONTS_SIZES.titleLineHeight};
  color: ${PALETTE.primaryTextColor};

  @media screen and (min-width: ${MEDIA_RULES.tabletBreakPoint}) {
    font-size: ${FONTS_SIZES.tabletTitleFontSize};
  }

  @media screen and (min-width: ${MEDIA_RULES.desktopBreakPoint}) {
    font-size: ${FONTS_SIZES.titleFontSize};
  }
`;

const SectionText = styled.p`
  font-size: ${FONTS_SIZES.smallerTextFontSize};
  line-height: ${FONTS_SIZES.textLineHeight};
  color: ${PALETTE.secondaryTextColor};

  @media screen and (min-width: ${MEDIA_RULES.desktopBreakPoint}) {
    font-size: ${FONTS_SIZES.textFontSize};
  }
`;

const SectionSubtitle = styled(SectionText)`
  font-weight: ${FONTS_SIZES.titleFontWeight};
  text-transform: uppercase;
  color: ${PALETTE.accentColor};

  @media screen and (min-width: ${MEDIA_RULES.desktopBreakPoint}) {
    position: absolute;
    top: 0;
    left: 15px;
  }
`;

export { SectionTitle, SectionText, SectionSubtitle };

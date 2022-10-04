import styled from "styled-components";
import {
  PALETTE,
  FONTS_SIZES,
  MEDIA_RULES,
} from "../../../stylesVariables/variables";

const ContactTitle = styled.h4`
  font-weight: ${FONTS_SIZES.titleFontWeight};
  font-size: ${FONTS_SIZES.blockTitleFontSize};
  line-height: ${FONTS_SIZES.textLineHeight};
  color: ${PALETTE.footerTextColor};

  margin-bottom: 10px;

  @media screen and (min-width: 1200px) {
    margin-bottom: 26px;
  }
`;

const ContactLink = styled.a`
  display: block;
  line-height: 1.18;
  color: ${PALETTE.footerTextColor};

  margin-bottom: 12px;

  transition: color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    color: ${PALETTE.accentColor};
  }
`;

const ContactSocialList = styled.ul`
  display: flex;
  margin-top: 30px;
`;

const ContactSocialItem = styled.li`
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

const ContactSvg = styled.svg`
  fill: rgba(32, 39, 49, 0.5);

  transition: fill 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    fill: ${PALETTE.accentColor};
  }
`;

export {
  ContactTitle,
  ContactLink,
  ContactSocialList,
  ContactSocialItem,
  ContactSvg,
};

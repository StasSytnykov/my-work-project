import styled from "styled-components";
import {
  PALETTE,
  FONTS_SIZES,
  MEDIA_RULES,
} from "../../../stylesVariables/variables";
import { IFeaturesText } from "../../../Interfaces/featuresInterface";
import { SectionText } from "../../CommonTextStyle.styled";

const FeaturesListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${MEDIA_RULES.tabletBreakPoint}) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    place-items: center;
  }

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px;
  }
`;

const FeaturesItemStyled = styled.li`
  position: relative;
  height: 318px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  border-radius: 15px;

  @media screen and (max-width: ${MEDIA_RULES.mobileVersionMaxWidth}) {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

const FeaturesListContentThumb = styled.div`
  padding: 96px 30px 0 30px;
`;

const FeaturesItemTitle = styled.h3`
  font-weight: ${FONTS_SIZES.titleFontWeight};
  font-size: ${FONTS_SIZES.biggerTextFontSize};
  line-height: 1.19;
  color: ${PALETTE.primaryTextColor};
`;

const FeaturesItemText = styled(SectionText)<IFeaturesText>`
  color: ${PALETTE.accentTextColorLighter};

  margin-top: ${(props) => (props.gap ? "23px" : "54px")};

  &::before {
    display: block;
    content: "";
    border-top: 1px solid #03a8b7;
    width: 80px;
    margin-bottom: 25px;
  }
`;

const FeaturesItemSvg = styled.svg`
  position: absolute;
  top: 30px;
  right: 30px;
`;

export {
  FeaturesListStyled,
  FeaturesItemStyled,
  FeaturesListContentThumb,
  FeaturesItemTitle,
  FeaturesItemText,
  FeaturesItemSvg,
};

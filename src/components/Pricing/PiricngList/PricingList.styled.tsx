import styled from "styled-components";
import {
  PALETTE,
  FONTS_SIZES,
  MEDIA_RULES,
} from "../../../stylesVariables/variables";

const PricingListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: ${MEDIA_RULES.desktopBreakPoint}) {
    flex-direction: row;
    justify-content: center;
  }
`;

const ListItem = styled.li`
  position: relative;
  width: 340px;
  height: 500px;

  border: 1px solid #c6e5fd;
  border-radius: 10px;

  @media screen and (max-width: ${MEDIA_RULES.tabletBreakPointMaxWidth}) {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }

  @media screen and (min-width: ${MEDIA_RULES.desktopBreakPoint}) {
    width: 358px;
    height: 569px;

    &:not(:last-child) {
      margin-right: 60px;
    }
  }
`;

const ItemThumb = styled.div`
  padding: 20px;

  @media screen and (min-width: ${MEDIA_RULES.desktopBreakPoint}) {
    padding: 40px;
  }
`;

const Plan = styled.p`
  display: inline;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.16;
  text-transform: uppercase;

  padding: 4px 12px;
  background: #e0f0fd;
  border-radius: 5px;

  color: #3174c4;
`;

const PriceThumb = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 27px;
  margin-bottom: 23px;
`;

const PricePerMonth = styled.h3`
  font-weight: 700;
  font-size: ${FONTS_SIZES.titleFontSize};
  line-height: 1.21;
  text-transform: uppercase;
  color: rgba(18, 18, 18, 0.8);
`;

const PricePerYear = styled.p`
  font-weight: ${FONTS_SIZES.titleFontWeight};
  font-size: ${FONTS_SIZES.textFontSize};
  line-height: 1.2;

  margin-bottom: 4px;
`;

const PriceDesc = styled(PricePerYear)`
  font-size: ${FONTS_SIZES.smallerTextFontSize};
  color: ${PALETTE.accentTextColorLighter};
`;

const PlanDesc = styled.p`
  font-size: ${FONTS_SIZES.textFontSize};
  line-height: 1.18;

  color: ${PALETTE.accentTextColorLighter};

  margin-bottom: 28px;
`;

const PlanAdvantagesItem = styled.li`
  display: flex;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const PlanAdvantagesItemDesc = styled.p`
  margin-left: 20px;
  font-size: ${FONTS_SIZES.textFontSize};
  line-height: 1.18;
  color: ${PALETTE.secondaryTextColor};
`;

export {
  PricingListStyled,
  ListItem,
  ItemThumb,
  Plan,
  PriceThumb,
  PricePerMonth,
  PricePerYear,
  PriceDesc,
  PlanDesc,
  PlanAdvantagesItem,
  PlanAdvantagesItemDesc,
};

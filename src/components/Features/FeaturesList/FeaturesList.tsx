import { IFeaturesListItemData } from "../../../Interfaces/featuresInterface";
import {
  FeaturesListStyled,
  FeaturesItemStyled,
  FeaturesItemTitle,
  FeaturesItemText,
  FeaturesItemSvg,
  FeaturesListContentThumb,
} from "./FeaturesList.styled";
import sprite from "../../../images/sprite.svg";

const featuresListItemData = [
  {
    width: 39,
    height: 39,
    svg: sprite + "#icon-pdf",
    title: "Export results",
    text: "With the one click, you can download all your survey results in PDF format",
    gap: false,
  },
  {
    width: 25,
    height: 27,
    svg: sprite + "#icon-git",
    title: "Easy share",
    text: "Insert the survey directly on your website or send the link to your friends",
    gap: false,
  },
  {
    width: 38,
    height: 38,
    svg: sprite + "#icon-label",
    title: "Export results",
    text: "Receive instant messages in the messenger when you mention your brand online or new reviews",
    gap: false,
  },
  {
    width: 39,
    height: 39,
    svg: sprite + "#icon-notebook",
    title: "Survey and questionnaire",
    text: "To collect responses from colleagues, clients or potential audience in just a couple of clicks",
    gap: true,
  },
  {
    width: 32,
    height: 32,
    svg: sprite + "#icon-r-code",
    title: "QR code generator",
    text: "Find out what your customers want and understand what you are doing right or wrong",
    gap: false,
  },
  {
    width: 32,
    height: 32,
    svg: sprite + "#icon-analytics",
    title: "Analyze surveys with built-in analytics",
    text: "Monitor visitor feedback with easy-to-use dashboards and reports",
    gap: true,
  },
];

export const FeaturesList = () => (
  <FeaturesListStyled>
    {featuresListItemData.map(
      ({ width, height, svg, title, text, gap }: IFeaturesListItemData) => (
        <FeaturesItemStyled>
          <FeaturesListContentThumb>
            <FeaturesItemSvg width={width} height={height}>
              <use href={svg} />
            </FeaturesItemSvg>
            <FeaturesItemTitle>{title} </FeaturesItemTitle>
            <FeaturesItemText gap={gap}>{text}</FeaturesItemText>
          </FeaturesListContentThumb>
        </FeaturesItemStyled>
      )
    )}
  </FeaturesListStyled>
);

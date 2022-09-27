import {
  FeaturesListStyled,
  FeaturesItemStyled,
  FeaturesItemTitle,
  FeaturesItemText,
  FeaturesItemSvg,
} from "./FeaturesList.styled";
import sprite from "../../../images/sprite.svg";

export const FeaturesList = () => (
  <FeaturesListStyled>
    <FeaturesItemStyled>
      <FeaturesItemSvg width={39} height={39}>
        <use href={sprite + "#icon-pdf"} />
      </FeaturesItemSvg>
      <FeaturesItemTitle>Export results</FeaturesItemTitle>
      <FeaturesItemText>
        With the one click, you can download all your survey results in PDF
        format
      </FeaturesItemText>
    </FeaturesItemStyled>
    <FeaturesItemStyled>
      <FeaturesItemSvg width={25} height={27}>
        <use href={sprite + "#icon-git"} />
      </FeaturesItemSvg>
      <FeaturesItemTitle>Easy share</FeaturesItemTitle>
      <FeaturesItemText>
        Insert the survey directly on your website or send the link to your
        friends
      </FeaturesItemText>
    </FeaturesItemStyled>
    <FeaturesItemStyled>
      <FeaturesItemSvg width={38} height={38}>
        <use href={sprite + "#icon-label"} />
      </FeaturesItemSvg>
      <FeaturesItemTitle>Audience loyalty</FeaturesItemTitle>
      <FeaturesItemText>
        Receive instant messages in the messenger when you mention your brand
        online or new reviews
      </FeaturesItemText>
    </FeaturesItemStyled>
    <FeaturesItemStyled>
      <FeaturesItemSvg width={39} height={39}>
        <use href={sprite + "#icon-notebook"} />
      </FeaturesItemSvg>
      <FeaturesItemTitle>Survey and questionnaire</FeaturesItemTitle>
      <FeaturesItemText>
        To collect responses from colleagues, clients or potential audience in
        just a couple of clicks
      </FeaturesItemText>
    </FeaturesItemStyled>
    <FeaturesItemStyled>
      <FeaturesItemSvg width={32} height={32}>
        <use href={sprite + "#icon-r-code"} />
      </FeaturesItemSvg>
      <FeaturesItemTitle>QR code generator</FeaturesItemTitle>
      <FeaturesItemText>
        Find out what your customers want and understand what you are doing
        right or wrong
      </FeaturesItemText>
    </FeaturesItemStyled>
    <FeaturesItemStyled>
      <FeaturesItemSvg width={32} height={32}>
        <use href={sprite + "#icon-analytics"} />
      </FeaturesItemSvg>
      <FeaturesItemTitle>
        Analyze surveys with built-in analytics
      </FeaturesItemTitle>
      <FeaturesItemText>
        Monitor visitor feedback with easy-to-use dashboards and reports
      </FeaturesItemText>
    </FeaturesItemStyled>
  </FeaturesListStyled>
);

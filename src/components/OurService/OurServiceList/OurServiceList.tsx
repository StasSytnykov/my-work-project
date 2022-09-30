import {
  OurServiceListStyled,
  OurServiceItem,
  OurServiceItemTitle,
  OurServiceItemText,
} from "./OurServiceList.styled";

export const OurServiceList = () => (
  <OurServiceListStyled>
    <OurServiceItem>
      <OurServiceItemTitle>1000+</OurServiceItemTitle>
      <OurServiceItemText>Reviews every day</OurServiceItemText>
    </OurServiceItem>
    <OurServiceItem>
      <OurServiceItemTitle>550+</OurServiceItemTitle>
      <OurServiceItemText>Trades connected</OurServiceItemText>
    </OurServiceItem>
    <OurServiceItem>
      <OurServiceItemTitle>240+</OurServiceItemTitle>
      <OurServiceItemText>Companies we serve</OurServiceItemText>
    </OurServiceItem>
  </OurServiceListStyled>
);

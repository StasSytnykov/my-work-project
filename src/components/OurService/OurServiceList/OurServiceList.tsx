import {
  OurServiceListStyled,
  OurServiceItem,
  OurServiceItemTitle,
  OurServiceItemText,
} from "./OurServiceList.styled";

interface IOurServiceContent {
  title: string;
  text: string;
}

const ourServiceContent = [
  { title: "1000+", text: "Reviews every day" },
  { title: "550+", text: "Trades connected" },
  { title: "240+", text: "Companies we serve" },
];

export const OurServiceList = () => (
  <OurServiceListStyled>
    {ourServiceContent.map(({ title, text }: IOurServiceContent) => (
      <OurServiceItem>
        <OurServiceItemTitle>{title}</OurServiceItemTitle>
        <OurServiceItemText>{text}</OurServiceItemText>
      </OurServiceItem>
    ))}
  </OurServiceListStyled>
);

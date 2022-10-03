import { SectionText } from "../../CommonTextStyle.styled";
import { IOurServiceContent } from "../../../Interfaces/ourServiceInterface";
import {
  OurServiceListStyled,
  OurServiceItem,
  OurServiceItemTitle,
} from "./OurServiceList.styled";

const ourServiceContent = [
  { title: "1000+", text: "Reviews every day" },
  { title: "550+", text: "Trades connected" },
  { title: "240+", text: "Companies we serve" },
];

export const OurServiceList = () => (
  <OurServiceListStyled>
    {ourServiceContent.map(({ title, text }: IOurServiceContent) => (
      <OurServiceItem key={title}>
        <OurServiceItemTitle>{title}</OurServiceItemTitle>
        <SectionText>{text}</SectionText>
      </OurServiceItem>
    ))}
  </OurServiceListStyled>
);

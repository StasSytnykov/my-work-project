import { Container } from "../Container/Container.styled";
import { SectionSubtitle } from "../CommonTextStyle.styled";
import {
  OurServiceSection,
  OurServiceTextThumb,
  OurServiceTitle,
  OurServiceText,
} from "./OurService.styled";
import { OurServiceList } from "./OurServiceList";

export const OurService = () => (
  <OurServiceSection>
    <Container>
      <SectionSubtitle>our service is</SectionSubtitle>
      <OurServiceTextThumb>
        <OurServiceTitle>FeedbackHero in Numbers </OurServiceTitle>
        <OurServiceText>
          The FeedbackHero is growing right now and getting more and more every
          day.
          <br />
          Join our service now!
        </OurServiceText>
        <OurServiceList />
      </OurServiceTextThumb>
    </Container>
  </OurServiceSection>
);

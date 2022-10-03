import { Container } from "../Container/Container.styled";
import { SectionSubtitle, SectionText } from "../CommonTextStyle.styled";
import { AdvantagesList } from "./AdvantagesList";
import {
  AdvantagesSection,
  AdvantagesDescThumb,
  AdvantagesTitle,
} from "./Advantages.styled";

export const Advantages = () => (
  <AdvantagesSection>
    <Container>
      <SectionSubtitle>Why Feedbackhero?</SectionSubtitle>
      <AdvantagesDescThumb>
        <AdvantagesTitle>
          Create. Collect. Analyze.&nbsp; Connect BerbackHero today.
        </AdvantagesTitle>
        <SectionText>
          The FeedbackHero system works for the reputation of your brand.
          <br />
          You’ll see your business the way your customers see it. <br />
          Our surveys have already helped solve hundreds of cases, only yours is
          missing
        </SectionText>
      </AdvantagesDescThumb>
      <AdvantagesList />
    </Container>
  </AdvantagesSection>
);

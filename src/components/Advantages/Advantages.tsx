import { Container } from "../Container/Container.styled";
import { AdvantagesList } from "./AdvantagesList";
import {
  AdvantagesSection,
  AdvantagesTextThumb,
  AdvantagesText,
  AdvantagesDescThumb,
  AdvantagesTitle,
  AdvantagesDesc,
} from "./Advantages.styled";

export const Advantages = () => (
  <AdvantagesSection>
    <Container>
      <AdvantagesTextThumb>
        <AdvantagesText>Why Feedbackhero?</AdvantagesText>
        <AdvantagesDescThumb>
          <AdvantagesTitle>
            Create. Collect. Analyze.&nbsp; Connect BerbackHero today.
          </AdvantagesTitle>
          <AdvantagesDesc>
            The FeedbackHero system works for the reputation of your brand.
            <br />
            You’ll see your business the way your customers see it. <br />
            Our surveys have already helped solve hundreds of cases, only yours
            is missing
          </AdvantagesDesc>
        </AdvantagesDescThumb>
      </AdvantagesTextThumb>
      <AdvantagesList />
    </Container>
  </AdvantagesSection>
);

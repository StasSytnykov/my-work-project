import { Container } from "../Container/Container.styled";
import { SectionSubtitle } from "../CommonTextStyle.styled";
import { FeaturesList } from "./FeaturesList";

import {
  FeaturesSection,
  FeaturesTitle,
  FeaturesDesc,
  FeaturesThumb,
} from "./Features.styled";

export const Features = () => (
  <FeaturesSection>
    <Container>
      <SectionSubtitle>Features</SectionSubtitle>
      <FeaturesThumb>
        <FeaturesTitle id={"features"}>Why FeedbackHero?</FeaturesTitle>
        <FeaturesDesc>
          Return customers with NPS service, feedback and FeedbackHero loyalty
          assessment.
        </FeaturesDesc>
      </FeaturesThumb>
      <FeaturesList />
    </Container>
  </FeaturesSection>
);

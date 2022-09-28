import { FeaturesList } from "./FeaturesList";
import { Container } from "../Container/Container.styled";
import {
  FeaturesSection,
  FeaturesTextThumb,
  FeaturesP,
  FeaturesTitle,
  FeaturesDesc,
  FeaturesThumb,
} from "./Features.styled";

export const Features = () => (
  <FeaturesSection>
    <Container>
      <FeaturesTextThumb>
        <FeaturesP>Features</FeaturesP>
        <FeaturesThumb>
          <FeaturesTitle>Why FeedbackHero?</FeaturesTitle>
          <FeaturesDesc>
            Return customers with NPS service, feedback and FeedbackHero loyalty
            assessment.
          </FeaturesDesc>
        </FeaturesThumb>
      </FeaturesTextThumb>
      <FeaturesList />
    </Container>
  </FeaturesSection>
);

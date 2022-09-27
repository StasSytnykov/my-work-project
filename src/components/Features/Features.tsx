import { FeaturesList } from "./FeaturesList";
import { Container } from "../Container/Container.styled";
import {
  FeaturesP,
  FeaturesTitle,
  FeaturesDesc,
  FeaturesThumb,
  FeaturesSectionStyled,
} from "./Features.styled";

export const Features = () => (
  <Container>
    <FeaturesSectionStyled>
      <FeaturesP>Features</FeaturesP>
      <FeaturesThumb>
        <FeaturesTitle>Why FeedbackHero?</FeaturesTitle>
        <FeaturesDesc>
          Return customers with NPS service, feedback and FeedbackHero loyalty
          assessment.
        </FeaturesDesc>
      </FeaturesThumb>
    </FeaturesSectionStyled>
    <FeaturesList />
  </Container>
);

import { Container } from "../Container/Container.styled";
import { SectionSubtitle } from "../SectionSubtitle.styled";
import { PricingList } from "./PiricngList";
import {
  PricingSection,
  PricingDescThumb,
  PricingTitle,
  PricingText,
} from "./Pricing.styled";

export const Pricing = () => (
  <PricingSection>
    <Container>
      <SectionSubtitle>Pricing</SectionSubtitle>
      <PricingDescThumb>
        <PricingTitle>
          We have prepared ideal solutions for your business
        </PricingTitle>
        <PricingText>
          Small or medium business, or even enterprise:
          <br />
          choose your format of work with feedback and NPS!
        </PricingText>
      </PricingDescThumb>
      <PricingList />
    </Container>
  </PricingSection>
);

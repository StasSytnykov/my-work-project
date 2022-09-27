import { Container } from "../Container/Container.styled";
import {
  HeroThumb,
  HeroTitle,
  HeroText,
  HeroDesc,
  HeroImg,
  HeroSection,
} from "./Hero.styled";
import { HeroButton } from "../Buttons/Buttons";
import heroImg from "../../images/hero-img.png";
export const Hero = () => (
  <HeroSection>
    <Container>
      <HeroThumb>
        <HeroText>Your Business Superhero</HeroText>
        <HeroTitle>Time is money, reviews is a growing business</HeroTitle>
        <HeroDesc>
          The best tool for user satisfaction research, feedback, market
          research and analytics.
        </HeroDesc>
        <HeroButton text={"try now"} />
      </HeroThumb>
    </Container>

    <HeroImg src={heroImg} alt={"Work example"} />
  </HeroSection>
);

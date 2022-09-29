import { Container } from "../Container/Container.styled";
import {
  HeroTextThumb,
  HeroThumb,
  HeroTitle,
  HeroText,
  HeroDesc,
  HeroImg,
  HeroSection,
} from "./Hero.styled";
import { HeroButton } from "../Buttons";
import heroImg from "../../images/heroImg.png";

export const Hero = () => (
  <HeroSection>
    <Container>
      <HeroThumb>
        <HeroTextThumb>
          <HeroText>Your Business Superhero</HeroText>
          <HeroTitle>Time is money, reviews is a growing business</HeroTitle>
          <HeroDesc>
            The best tool for user satisfaction research, feedback, market
            research and analytics.
          </HeroDesc>
          <HeroButton text={"try now"} />
        </HeroTextThumb>
        <div>
          <HeroImg src={heroImg} alt={"Work example"} />
        </div>
      </HeroThumb>
    </Container>
  </HeroSection>
);

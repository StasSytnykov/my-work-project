import { Container } from "../Container/Container.styled";
import { Logo } from "../Logo";
import { FooterButton } from "../Buttons/Buttons";
import {
  FooterStyled,
  FooterContentThumb,
  FooterTitle,
  FooterFlexThumb,
  FooterListsThumb,
  SecondFooter,
  SecondFooterTextThumb,
  SecondFooterText,
} from "./Footer.styled";
import { QuickLinksList, InformationLinksList } from "./FooterLists";
import { Contact } from "./Contact";

export const Footer = () => (
  <FooterStyled>
    <Container>
      <FooterFlexThumb>
        <FooterContentThumb>
          <Logo />
          <FooterTitle>Your Business Superhero</FooterTitle>
          <FooterButton text={"buy now"} />
        </FooterContentThumb>
        <FooterListsThumb>
          <QuickLinksList />
          <InformationLinksList />
          <Contact />
        </FooterListsThumb>
      </FooterFlexThumb>
    </Container>
    <SecondFooter>
      <Container>
        <SecondFooterTextThumb>
          <SecondFooterText>&#xa9; FeedbackHero, 2021</SecondFooterText>
          <SecondFooterText>All rights reserved</SecondFooterText>
        </SecondFooterTextThumb>
      </Container>
    </SecondFooter>
  </FooterStyled>
);

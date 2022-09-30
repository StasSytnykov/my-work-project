import { Container } from "../Container/Container.styled";
import { SectionSubtitle } from "../SectionSubtitle.styled";
import { SignUpButton, SignUpButtonRequest } from "../Buttons/Buttons";
import {
  SignUpSection,
  SignUpContentThumb,
  SignUpImgBox,
  SignUpTextThumb,
  SignUpTitle,
  SignUpText,
} from "./SignUp.styled";

export const SignUp = () => (
  <SignUpSection>
    <Container>
      <SectionSubtitle>SIGN UP</SectionSubtitle>
      <SignUpContentThumb>
        <SignUpTextThumb>
          <SignUpTitle>Connect your business to FeedbackHero</SignUpTitle>
          <SignUpText>
            Do you have any questions? Leave a request, our manager will contact
            you in a few minutes and tell you about all the possibilities of
            FeedbackHero for your business.
          </SignUpText>
          <SignUpButton text={"sign up"} />
          <SignUpButtonRequest text={"leave a request"} />
        </SignUpTextThumb>
        <SignUpImgBox />
      </SignUpContentThumb>
    </Container>
  </SignUpSection>
);

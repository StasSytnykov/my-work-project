import { Container } from "../Container/Container.styled";
import { ExamplesButton } from "../Buttons/Buttons";
import {
  ExapmlesSection,
  ExamplesText,
  ExamplesTitle,
  ExamplesDesc,
  ExamplesImg,
  ExamplesTextThumb,
  ExamplesContentThumb,
} from "./Examples.styled";
import examplesImgOne from "../../images/examplesImgOne.jpg";
import examplesImgTwo from "../../images/examplesImgTwo.jpg";

export const Examples = () => (
  <ExapmlesSection>
    <Container>
      <ExamplesContentThumb>
        <ExamplesTextThumb>
          <ExamplesText>Easy to use</ExamplesText>
          <ExamplesTitle>How it works?</ExamplesTitle>
          <ExamplesDesc>
            We generate a QR code and a short link. Then you offer it to
            visitors (leave stickers on the table, print on table awnings, send
            by e-mail) and get feedback.
            <br /> <br />
            Through a personal account you will be able to collect statistics of
            the received comments and to do mailing.
          </ExamplesDesc>
        </ExamplesTextThumb>
        <ExamplesImg src={examplesImgOne} alt={"How it works?"} />
      </ExamplesContentThumb>
      <ExamplesContentThumb reverse>
        <ExamplesTextThumb reverse>
          <ExamplesText position>Who’ll benefit?</ExamplesText>
          <ExamplesTitle>Fits to any business</ExamplesTitle>
          <ExamplesDesc>
            FeedbackHero is effective in diferrent areas of business:
            restaurants, hotels, E-commerce, Auto service, Auto salons & Lease,
            Beauty & Cosmetics and other business areas
          </ExamplesDesc>
          <ExamplesButton text={"Start using"} />
        </ExamplesTextThumb>
        <ExamplesImg src={examplesImgTwo} alt={"Fits to any business"} />
      </ExamplesContentThumb>
    </Container>
  </ExapmlesSection>
);

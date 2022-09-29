import { Container } from "../Container/Container.styled";
import { SectionSubtitle } from "../SectionSubtitle.styled";
import image from "../../images/clientsImg.jpg";
import sprite from "../../images/sprite.svg";
import {
  ClientsSection,
  ClientsTitle,
  ClientsImage,
  ClientsQuotesSvg,
  ClientsContentThumb,
  ClientsDescThumb,
  ClientsDesc,
  ClientsInfo,
  ClientsCompany,
  ClientsButtonThumb,
  ClientsButtonLeft,
  ClientsButtonRight,
} from "./Clients.styled";

export const Clients = () => (
  <ClientsSection>
    <Container>
      <SectionSubtitle>our clients</SectionSubtitle>
      <ClientsTitle>We are trusted</ClientsTitle>
      <ClientsContentThumb>
        <ClientsImage src={image} alt="Clients photo" />
        <ClientsQuotesSvg>
          <use href={sprite + "#icon-quotes"} />
        </ClientsQuotesSvg>
        <ClientsDescThumb>
          <ClientsDesc>
            Some text with rewiev from client Some text with rewiev from client.
            Some text with rewiev from client Some text with rewiev from client
            . Some text with rewiev from client Some text with rewiev from
            client/
          </ClientsDesc>
          <ClientsInfo>Alberto Coltraliano, CEO</ClientsInfo>
          <ClientsCompany>Hilton Corporation Ltd</ClientsCompany>
          <ClientsButtonThumb>
            <ClientsButtonLeft>
              <svg width={25} height={25}>
                <use href={sprite + "#icon-arrow-left"} />
              </svg>
            </ClientsButtonLeft>
            <ClientsButtonRight>
              <svg width={25} height={25}>
                <use href={sprite + "#icon-arrow-right"} />
              </svg>
            </ClientsButtonRight>
          </ClientsButtonThumb>
        </ClientsDescThumb>
      </ClientsContentThumb>
    </Container>
  </ClientsSection>
);

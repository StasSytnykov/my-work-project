import styled from "styled-components";
import {
  IExamplesText,
  IExamplesReverse,
} from "../../Interfaces/examplesInterface";
import { SectionTitle, SectionText } from "../CommonTextStyle.styled";

const ExapmlesSection = styled.section`
  background-color: #fcfcfc;
  padding: 50px 0 50px 0;

  @media screen and (min-width: 1200px) {
    padding: 150px 0 204px 0;
  }
`;

const ExamplesContentThumb = styled.div<IExamplesReverse>`
  &:not(:last-child) {
    margin-bottom: 50px;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  }

  @media screen and (min-width: 1200px) {
    &:not(:last-child) {
      margin-bottom: 134px;
    }
  }
`;

const ExamplesTextThumb = styled.div<IExamplesReverse>`
  @media screen and (min-width: 768px) {
    margin: ${(props) => (props.reverse ? "0 0 0 20px" : "0 20px 0 0")};
  }

  @media screen and (min-width: 1200px) {
    margin: ${(props) => (props.reverse ? "0 0 0 60px" : "0 60px 0 0")};
  }
`;

const ExamplesText = styled(SectionText)<IExamplesText>`
  font-weight: 500;
  text-transform: uppercase;
  color: #03a8b7;

  @media screen and (max-width: 767px) {
    text-align: ${(props) => (props.position ? "end" : "start")};
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 11px;
  }
`;

const ExamplesTitle = styled(SectionTitle)`
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

const ExamplesDesc = styled(SectionText)`
  color: rgba(0, 0, 0, 0.75);
`;

const ExamplesImg = styled.img`
  border-radius: 20px;

  @media screen and (max-width: 767px) {
    margin-top: 10px;
  }

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    width: 450px;
  }
`;

export {
  ExapmlesSection,
  ExamplesText,
  ExamplesTitle,
  ExamplesDesc,
  ExamplesImg,
  ExamplesTextThumb,
  ExamplesContentThumb,
};

import styled from "styled-components";

interface IExamplesReverse {
  reverse?: boolean;
}

interface IExamplesText {
  postion?: boolean;
}

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

const ExamplesText = styled.p<IExamplesText>`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  text-transform: uppercase;
  color: #03a8b7;

  @media screen and (max-width: 767px) {
    text-align: ${(props) => (props.postion ? "end" : "start")};
  }

  @media screen and (min-width: 768px) {
    margin-bottom: 11px;
  }
`;

const ExamplesTitle = styled.h3`
  font-weight: 500;
  font-size: 46px;
  line-height: 1.17;
  color: #202731;

  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    margin-bottom: 24px;
  }
`;

const ExamplesDesc = styled.p`
  font-size: 16px;
  line-height: 1.4;
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

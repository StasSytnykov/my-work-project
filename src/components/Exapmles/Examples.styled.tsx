import styled from "styled-components";

interface IExamplesReverse {
  reverse?: boolean;
}

const ExapmlesSection = styled.section`
  background-color: #fcfcfc;
  padding: 150px 0 204px 0;
`;

const ExamplesContentThumb = styled.div<IExamplesReverse>`
  display: flex;
  align-items: center;
  flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  &:not(:last-child) {
    margin-bottom: 134px;
  }
`;

const ExamplesTextThumb = styled.div<IExamplesReverse>`
  width: 360px;
  margin: ${(props) => (props.reverse ? "0 0 0 60px" : "0 60px 0 0")};
`;

const ExamplesText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  text-transform: uppercase;
  color: #03a8b7;

  margin-bottom: 11px;
`;

const ExamplesTitle = styled.h3`
  font-weight: 500;
  font-size: 46px;
  line-height: 1.17;
  color: #202731;

  margin-bottom: 24px;
`;

const ExamplesDesc = styled.p`
  font-size: 16px;
  line-height: 1.4;
  color: rgba(0, 0, 0, 0.75);
`;

const ExamplesImg = styled.img`
  border-radius: 20px;
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

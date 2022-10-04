import styled from "styled-components";
import {
  IExamplesText,
  IExamplesReverse,
} from "../../Interfaces/examplesInterface";
import {
  PALETTE,
  FONTS_SIZES,
  MEDIA_RULES,
} from "../../stylesVariables/variables";
import { SectionTitle, SectionText } from "../CommonTextStyle.styled";

const ExamplesSection = styled.section`
  background-color: #fcfcfc;
  padding: 50px 0 50px 0;

  @media screen and (min-width: ${MEDIA_RULES.desktopBreakPoint}) {
    padding: 150px 0 204px 0;
  }
`;

const ExamplesContentThumb = styled.div<IExamplesReverse>`
  &:not(:last-child) {
    margin-bottom: 50px;
  }
  @media screen and (min-width: ${MEDIA_RULES.tabletBreakPoint}) {
    display: flex;
    align-items: center;
    flex-direction: ${(props) => (props.reverse ? "row-reverse" : "row")};
  }

  @media screen and (min-width: ${MEDIA_RULES.desktopBreakPoint}) {
    &:not(:last-child) {
      margin-bottom: 134px;
    }
  }
`;

const ExamplesTextThumb = styled.div<IExamplesReverse>`
  @media screen and (min-width: ${MEDIA_RULES.tabletBreakPoint}) {
    margin: ${(props) => (props.reverse ? "0 0 0 20px" : "0 20px 0 0")};
  }

  @media screen and (min-width: ${MEDIA_RULES.desktopBreakPoint}) {
    margin: ${(props) => (props.reverse ? "0 0 0 60px" : "0 60px 0 0")};
  }
`;

const ExamplesText = styled(SectionText)<IExamplesText>`
  font-weight: 500;
  text-transform: uppercase;
  color: ${PALETTE.accentColor};

  @media screen and (max-width: ${MEDIA_RULES.mobileVersionMaxWidth}) {
    text-align: ${(props) => (props.position ? "end" : "start")};
  }

  @media screen and (min-width: ${MEDIA_RULES.tabletBreakPoint}) {
    margin-bottom: 11px;
  }
`;

const ExamplesTitle = styled(SectionTitle)`
  margin-bottom: 10px;

  @media screen and (min-width: ${MEDIA_RULES.tabletBreakPoint}) {
    margin-bottom: 24px;
  }
`;

const ExamplesDesc = styled(SectionText)`
  color: ${PALETTE.accentTextColor};
`;

const ExamplesImg = styled.img`
  border-radius: 20px;

  @media screen and (max-width: ${MEDIA_RULES.mobileVersionMaxWidth}) {
    margin-top: 10px;
  }

  @media screen and (min-width: ${MEDIA_RULES.tabletBreakPoint}) and (max-width: ${MEDIA_RULES.tabletBreakPointMaxWidth}) {
    width: 450px;
  }
`;

export {
  ExamplesSection,
  ExamplesText,
  ExamplesTitle,
  ExamplesDesc,
  ExamplesImg,
  ExamplesTextThumb,
  ExamplesContentThumb,
};

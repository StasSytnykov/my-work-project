import styled from "styled-components";

interface IFeaturesText {
  gap?: boolean;
}

const FeaturesListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    place-items: center;
  }

  @media screen and (min-width: 1200px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 60px;
  }
`;

const FeaturesItemStyled = styled.li`
  position: relative;
  height: 318px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.05);
  border-radius: 15px;

  @media screen and (max-width: 767px) {
    &:not(:last-child) {
      margin-bottom: 20px;
    }
  }
`;

const FeaturesListContentThumb = styled.div`
  padding: 96px 30px 0 30px;
`;

const FeaturesItemTitle = styled.h3`
  font-weight: 500;
  font-size: 26px;
  line-height: 1.19;
  color: #202731;
`;

const FeaturesItemText = styled.p<IFeaturesText>`
  font-size: 16px;
  line-height: 1.4;
  color: rgba(0, 0, 0, 0.5);

  margin-top: ${(props) => (props.gap ? "23px" : "54px")};

  &::before {
    display: block;
    content: "";
    border-top: 1px solid #03a8b7;
    width: 80px;
    margin-bottom: 25px;
  }
`;

const FeaturesItemSvg = styled.svg`
  position: absolute;
  top: 30px;
  right: 30px;
`;

export {
  FeaturesListStyled,
  FeaturesItemStyled,
  FeaturesListContentThumb,
  FeaturesItemTitle,
  FeaturesItemText,
  FeaturesItemSvg,
};

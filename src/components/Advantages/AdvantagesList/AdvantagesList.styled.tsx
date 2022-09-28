import styled from "styled-components";

const AdvantagesListStyled = styled.ul`
  display: flex;
`;

const AdvantagesItem = styled.li`
  width: 360px;
  height: 370px;

  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.05);
  border-radius: 10px;

  &:not(:last-child) {
    margin-right: 60px;
  }
`;

const AdvantagesContentThumb = styled.div`
  padding: 50px 30px 0 30px;
`;

const AdvantagesSvgThumb = styled.div`
  position: relative;
  display: block;
  margin: 0 auto;
  width: 90px;
  height: 90px;
  margin-bottom: 35px;

  background: linear-gradient(
    134.83deg,
    #fcfcfc 4.17%,
    rgba(252, 252, 252, 0) 96.67%
  );
  border: 1px solid rgba(0, 0, 0, 0.05);
  filter: drop-shadow(0px 5px 12px rgba(0, 0, 0, 0.05));
  border-radius: 10px;
`;

const AdvantagesSvg = styled.svg`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const AdvantagesCardTitle = styled.h3`
  font-weight: 500;
  font-size: 18px;
  line-height: 1.4;
  text-align: center;
  color: #181818;
`;

const AdvantagesCardSubtitle = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.5;
  text-align: center;
  color: #03a8b7;
`;

const AdvantagesCardText = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.4;
  text-align: center;
  color: rgba(24, 24, 24, 0.5);
`;

export {
  AdvantagesListStyled,
  AdvantagesItem,
  AdvantagesContentThumb,
  AdvantagesSvgThumb,
  AdvantagesSvg,
  AdvantagesCardTitle,
  AdvantagesCardSubtitle,
  AdvantagesCardText,
};

import styled from "styled-components";

const ClientsCompanyThumb = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }

  @media screen and (max-width: 1199px) {
    align-items: center;
  }
`;

const ClientsListTitle = styled.h3`
  font-weight: 500;
  font-size: 30px;
  line-height: 1.2;
  color: #000000;

  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    margin-right: 30px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 46px;
    margin-right: 60px;
  }
`;

const ClientsListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    place-items: center;
  }

  @media screen and (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
  }
`;

const ClientsListItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 240px;
  height: 160px;

  background: #ffffff;
  box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.05);
  border-radius: 15px;

  @media screen and (max-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

const ClientsListCompanySvg = styled.svg`
  fill: rgba(32, 39, 49, 0.5);
`;

export {
  ClientsCompanyThumb,
  ClientsListTitle,
  ClientsListStyled,
  ClientsListItem,
  ClientsListCompanySvg,
};

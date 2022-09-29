import styled from "styled-components";

const AdvantagesSection = styled.section`
  padding: 50px 0 50px 0;

  @media screen and (min-width: 1200px) {
    padding: 145px 0 150px 0;
  }
`;

const AdvantagesDescThumb = styled.div`
  margin-bottom: 25px;

  @media screen and (min-width: 1200px) {
    width: 780px;
    margin: 0 0 50px 420px;
  }
`;

const AdvantagesTitle = styled.h1`
  font-weight: 500;
  line-height: 1.17;
  font-size: 30px;
  color: #181e25;

  margin-bottom: 15px;

  @media screen and (min-width: 1200px) {
    font-size: 46px;

    margin-bottom: 24px;
  }
`;

const AdvantagesDesc = styled.p`
  font-size: 16px;
  line-height: 1.4;
  color: #4c4f56;
`;

export {
  AdvantagesSection,
  AdvantagesDescThumb,
  AdvantagesTitle,
  AdvantagesDesc,
};

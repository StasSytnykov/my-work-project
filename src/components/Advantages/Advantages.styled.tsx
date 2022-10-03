import styled from "styled-components";
import { SectionTitle } from "../CommonTextStyle.styled";

const AdvantagesSection = styled.section`
  padding: 50px 0 50px 0;

  @media screen and (min-width: 1200px) {
    padding: 145px 0 150px 0;
  }
`;

const AdvantagesDescThumb = styled.div`
  margin-bottom: 25px;

  @media screen and (min-width: 1200px) {
    margin: 0 0 50px 420px;
  }
`;

const AdvantagesTitle = styled(SectionTitle)`
  color: #181e25;

  margin-bottom: 15px;

  @media screen and (min-width: 1200px) {
    margin-bottom: 24px;
  }
`;

export { AdvantagesSection, AdvantagesDescThumb, AdvantagesTitle };

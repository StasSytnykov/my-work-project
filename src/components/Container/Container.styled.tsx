import styled from "styled-components";

const Container = styled.div`
  padding: 0 10px;

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    width: 738px;
  }

  @media screen and (min-width: 1200px) {
    position: relative;
    margin: 0 auto;
    width: 1230px;
    padding: 0 15px;
  }
`;

const HeaderContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) and (max-width: 1199px) {
    justify-content: space-between;
    flex-direction: row;
  }
  @media screen and (min-width: 1200px) {
    position: relative;
    flex-direction: row;
  }
`;

export { Container, HeaderContainer };

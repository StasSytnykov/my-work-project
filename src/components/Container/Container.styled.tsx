import styled from "styled-components";

const Container = styled.div`
  padding: 0 10px;

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    width: 738px;
  }

  @media screen and (min-width: 1200px) {
    position: relative;
    width: 1170px;
    padding: 0 15px;
  }
`;

const HeaderContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (min-width: 1200px) {
    position: relative;
    justify-content: start;
  }
`;

export { Container, HeaderContainer };

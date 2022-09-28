import styled from "styled-components";

const Container = styled.div`
  padding: 0 10px;

  @media screen and (min-width: 768px) {
    margin: 0 auto;
    width: 738px;
    padding: 0 15px;
  }

  @media screen and (min-width: 1200px) {
    position: relative;
    margin: 0 auto;
    width: 1200px;
    padding: 0 15px;
  }
`;

const HeaderContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
  }
  @media screen and (min-width: 1200px) {
    position: relative;
  }
`;

export { Container, HeaderContainer };

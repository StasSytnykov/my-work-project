import styled from "styled-components";

const MobileThumb = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  z-index: 2;

  background-color: aliceblue;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MobileQuiteButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;

  width: 50px;
  height: 50px;

  background-color: transparent;
  border: none;
  opacity: 80%;
`;

const MobileNavList = styled.ul`
  //display: none;
`;

const MobileNavItem = styled.li`
  font-size: 16px;
  line-height: 1.18;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export { MobileThumb, MobileQuiteButton, MobileNavList, MobileNavItem };

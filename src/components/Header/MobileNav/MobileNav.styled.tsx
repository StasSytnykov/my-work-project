import styled from "styled-components";
import { FONTS_SIZES } from "../../../stylesVariables/variables";

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
`;

const MobileNavList = styled.ul`
  margin: 20px 0 20px 0;
`;

const MobileNavItem = styled.li`
  font-size: ${FONTS_SIZES.textFontSize};
  line-height: 1.18;

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export { MobileThumb, MobileQuiteButton, MobileNavList, MobileNavItem };

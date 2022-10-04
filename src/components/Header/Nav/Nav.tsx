import { useEffect, useState } from "react";
import { ILinks } from "../../../Interfaces/linksInterface";
import { MobileNav } from "../MobileNav/MobileNav";
import { HeaderButton } from "../../Buttons";
import sprite from "../../../images/sprite.svg";
import {
  NavStyled,
  MobileButton,
  NavList,
  NavItem,
  NavLink,
} from "./Nav.styled";

import { useResize } from "../../../hooks/useResize";

export const navItemContent = [
  {
    href: "#features",
    text: "Features",
  },
  {
    href: "#price",
    text: "Pricing",
  },
  {
    href: "",
    text: "Blog",
  },
];

export const Nav = () => {
  const { isMobileMenuOpen, isShowMobileMenu, onSetIsMobileMenuOpen } =
    useResize();

  const onBurgerClick = () => {
    onSetIsMobileMenuOpen(true);
  };

  const handleClickMobileClose = (isOpen: boolean) => {
    onSetIsMobileMenuOpen(isOpen);
  };

  return (
    <NavStyled>
      {!isShowMobileMenu && (
        <>
          <NavList>
            {navItemContent.map(({ href, text }: ILinks) => (
              <NavItem key={text}>
                <NavLink href={href}>{text}</NavLink>
              </NavItem>
            ))}
          </NavList>
          <HeaderButton text={"Register"} />
        </>
      )}

      {isShowMobileMenu && (
        <MobileButton onClick={onBurgerClick} type={"button"}>
          <svg width={25} height={25}>
            <use href={sprite + "#icon-burger-menu"} />
          </svg>
        </MobileButton>
      )}

      {isMobileMenuOpen && (
        <MobileNav setIsMobileMenuOpen={handleClickMobileClose} />
      )}
    </NavStyled>
  );
};

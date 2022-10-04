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
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShowMobileMenu, setIsShowMobileMenu] = useState(false);

  useEffect(() => {
    {
      if (window.innerWidth > 767) {
        setIsMobileMenuOpen(false);
        setIsShowMobileMenu(false);
      }
      if (window.innerWidth < 767) {
        setIsShowMobileMenu(true);
      }
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 767) {
        setIsMobileMenuOpen(false);
        setIsShowMobileMenu(false);
      }
      if (window.innerWidth < 767) {
        setIsShowMobileMenu(true);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onBurgerClick = () => {
    setIsMobileMenuOpen(true);
  };

  const handleClickMobileClose = (isOpen: boolean) => {
    setIsMobileMenuOpen(isOpen);
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

import { Logo } from "../../Logo";
import { HeaderButton } from "../../Buttons";
import { ILinks } from "../../../Interfaces/linksInterface";
import { IMobileNavProps } from "../../../Interfaces/mobileNavInterface";
import { navItemContent } from "../Nav/Nav";
import sprite from "../../../images/sprite.svg";
import { NavLink } from "../Nav/Nav.styled";
import {
  MobileThumb,
  MobileQuiteButton,
  MobileNavList,
  MobileNavItem,
} from "./MobileNav.styled";
import { useEffect } from "react";

export const MobileNav = ({ setIsMobileMenuOpen }: IMobileNavProps) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "visible";
    };
  }, []);

  const onClickCloseMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <MobileThumb>
      <MobileQuiteButton onClick={onClickCloseMenu} type={"button"}>
        <svg width={25} height={25}>
          <use href={sprite + "#icon-mobile-close"} />
        </svg>
      </MobileQuiteButton>

      <Logo />
      <MobileNavList>
        {navItemContent.map(({ href, text }: ILinks) => (
          <MobileNavItem key={text}>
            <NavLink onClick={onClickCloseMenu} href={href}>
              {text}
            </NavLink>
          </MobileNavItem>
        ))}
      </MobileNavList>
      <HeaderButton text={"Register"} />
    </MobileThumb>
  );
};

import { HeaderButton } from "../../Buttons";
import { ILinks } from "../../../Interfaces/linksInterface";
import { IMobileNavProps } from "../../../Interfaces/mobileNav";
import { navItemContent } from "../Nav/Nav";
import sprite from "../../../images/sprite.svg";
import { NavLink } from "../Nav/Nav.styled";
import {
  MobileThumb,
  MobileQuiteButton,
  MobileNavList,
  MobileNavItem,
} from "./MobileNav.styled";

export const MobileNav = ({ setIsMobileMenuOpen }: IMobileNavProps) => {
  const onCloseButtonClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <MobileThumb>
      <MobileQuiteButton onClick={onCloseButtonClick} type={"button"}>
        <svg width={25} height={25}>
          <use href={sprite + "#icon-mobile-close"} />
        </svg>
      </MobileQuiteButton>
      <MobileNavList>
        {navItemContent.map(({ href, text }: ILinks) => (
          <MobileNavItem key={text}>
            <NavLink href={href}>{text}</NavLink>
          </MobileNavItem>
        ))}
      </MobileNavList>
      <HeaderButton text={"Register"} />
    </MobileThumb>
  );
};

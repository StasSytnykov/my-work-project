import sprite from "../../../images/sprite.svg";
import { IFooterSocialLinks } from "../../../Interfaces/linksInterface";
import {
  ContactTitle,
  ContactLink,
  ContactSocialList,
  ContactSocialItem,
  ContactSvg,
} from "./Contact.styled";

const footerSocialLinksData = [
  {
    linkHref: "https://twitter.com/",
    svgHref: sprite + "#icon-twitter",
  },
  {
    linkHref: "https://www.linkedin.com/",
    svgHref: sprite + "#icon-linkedin",
  },
  {
    linkHref: "https://www.facebook.com/",
    svgHref: sprite + "#icon-facebook",
  },
];

export const Contact = () => (
  <div>
    <ContactTitle>Contact</ContactTitle>
    <address>
      <ContactLink href="tel:+393333333333">+39 333 3333333</ContactLink>
      <ContactLink href="mailto:feedbackhero.info@gmail.com">
        feedbackhero.info@gmail.com
      </ContactLink>
    </address>
    <ContactSocialList>
      {footerSocialLinksData.map(
        ({ linkHref, svgHref }: IFooterSocialLinks) => (
          <ContactSocialItem key={linkHref}>
            <a href={linkHref}>
              <ContactSvg width={32} height={32}>
                <use href={svgHref} />
              </ContactSvg>
            </a>
          </ContactSocialItem>
        )
      )}
    </ContactSocialList>
  </div>
);

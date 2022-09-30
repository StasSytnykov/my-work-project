import sprite from "../../../images/sprite.svg";
import {
  ContactTitle,
  ContactLink,
  ContactSocialList,
  ContactSocialItem,
  ContactSvg,
} from "./Contact.styled";

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
      <ContactSocialItem>
        <a href={"https://twitter.com/"}>
          <ContactSvg width={32} height={32}>
            <use href={sprite + "#icon-twitter"} />
          </ContactSvg>
        </a>
      </ContactSocialItem>
      <ContactSocialItem>
        <a href={"https://www.linkedin.com/"}>
          <ContactSvg width={32} height={32}>
            <use href={sprite + "#icon-linkedin"} />
          </ContactSvg>
        </a>
      </ContactSocialItem>
      <ContactSocialItem>
        <a href={"https://www.facebook.com/"}>
          <ContactSvg width={32} height={32}>
            <use href={sprite + "#icon-facebook"} />
          </ContactSvg>
        </a>
      </ContactSocialItem>
    </ContactSocialList>
  </div>
);

import styled from "styled-components";

// const ContactThumb = styled.div``;

const ContactTitle = styled.h4`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.4;
  color: #000000;

  margin-bottom: 10px;

  @media screen and (min-width: 1200px) {
    margin-bottom: 26px;
  }
`;

const ContactLink = styled.a`
  display: block;
  line-height: 1.18;
  color: #000000;

  margin-bottom: 12px;
`;

const ContactSocialList = styled.ul`
  display: flex;
  margin-top: 30px;
`;

const ContactSocialItem = styled.li`
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

const ContactSvg = styled.svg`
  fill: rgba(32, 39, 49, 0.5);
`;

export {
  ContactTitle,
  ContactLink,
  ContactSocialList,
  ContactSocialItem,
  ContactSvg,
};

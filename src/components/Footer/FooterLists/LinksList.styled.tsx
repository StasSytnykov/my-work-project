import styled from "styled-components";

const ListsThumb = styled.div`
  @media screen and (max-width: 767px) {
    margin-bottom: 20px;
  }
`;

const LinksListTitle = styled.h4`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.4;
  color: #000000;

  margin-bottom: 10px;

  @media screen and (min-width: 1200px) {
    margin-bottom: 25px;
  }
`;

const LinksListItem = styled.li`
  @media screen and (min-width: 768px) {
    &:not(:last-child) {
      margin-bottom: 12px;
    }
  }
`;

const Link = styled.a`
  line-height: 1.4;
  color: rgba(0, 0, 0, 0.75);
`;

const InformationLink = styled(Link)`
  line-height: 1.18;
`;

export { ListsThumb, LinksListTitle, LinksListItem, Link, InformationLink };

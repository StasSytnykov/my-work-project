import {
  ListsThumb,
  LinksListTitle,
  LinksListItem,
  InformationLink,
} from "./LinksList.styled";

export const InformationLinksList = () => (
  <ListsThumb>
    <LinksListTitle>Legal information</LinksListTitle>
    <ul>
      <LinksListItem>
        <InformationLink href={""}>Privacy Policy</InformationLink>
      </LinksListItem>
      <LinksListItem>
        <InformationLink href={""}>Cookie</InformationLink>
      </LinksListItem>
      <LinksListItem>
        <InformationLink href={""}>Terms of use</InformationLink>
      </LinksListItem>
    </ul>
  </ListsThumb>
);

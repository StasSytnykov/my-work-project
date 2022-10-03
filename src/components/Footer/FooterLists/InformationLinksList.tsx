import {
  ListsThumb,
  LinksListTitle,
  LinksListItem,
  InformationLink,
} from "./LinksList.styled";

const informationItemContent = ["Privacy Policy", "Cookie", "Terms of use"];

export const InformationLinksList = () => (
  <ListsThumb>
    <LinksListTitle>Legal information</LinksListTitle>
    <ul>
      {informationItemContent.map((text: string) => (
        <LinksListItem key={text}>
          <InformationLink href={""}>{text}</InformationLink>
        </LinksListItem>
      ))}
    </ul>
  </ListsThumb>
);

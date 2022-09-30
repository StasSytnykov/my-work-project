import {
  ListsThumb,
  LinksListTitle,
  LinksListItem,
  Link,
} from "./LinksList.styled";

export const QuickLinksList = () => (
  <ListsThumb>
    <LinksListTitle>Quick links</LinksListTitle>
    <ul>
      <LinksListItem>
        <Link href={"#features"}>Features</Link>
      </LinksListItem>
      <LinksListItem>
        <Link href={""}>Blog</Link>
      </LinksListItem>
      <LinksListItem>
        <Link href={"#price"}>Price</Link>
      </LinksListItem>
    </ul>
  </ListsThumb>
);

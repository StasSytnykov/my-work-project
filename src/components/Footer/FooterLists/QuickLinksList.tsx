import { ILinks } from "../../../Interfaces/linksInterface";
import {
  ListsThumb,
  LinksListTitle,
  LinksListItem,
  Link,
} from "./LinksList.styled";

const quickItemContent = [
  {
    href: "#features",
    text: "Features",
  },
  {
    href: "",
    text: "Blog",
  },
  {
    href: "#price",
    text: "Price",
  },
];

export const QuickLinksList = () => (
  <ListsThumb>
    <LinksListTitle>Quick links</LinksListTitle>
    <ul>
      {quickItemContent.map(({ href, text }: ILinks) => (
        <LinksListItem key={text}>
          <Link href={href}>{text}</Link>
        </LinksListItem>
      ))}
    </ul>
  </ListsThumb>
);

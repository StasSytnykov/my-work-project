import sprite from "../../../images/sprite.svg";
import { IClientsItemData } from "../../../Interfaces/clientsIterface";
import {
  ClientsCompanyThumb,
  ClientsListTitle,
  ClientsListStyled,
  ClientsListItem,
  ClientsListCompanySvg,
} from "./ClientsList.styled";

const clientsItemData = [
  { width: 150, height: 19, svg: sprite + "#icon-company-2" },
  { width: 85, height: 109, svg: sprite + "#icon-company-1" },
  { width: 178, height: 23, svg: sprite + "#icon-company-4-2" },
  { width: 178, height: 23, svg: sprite + "#icon-company-4-2" },
  { width: 150, height: 19, svg: sprite + "#icon-company-3" },
  { width: 150, height: 19, svg: sprite + "#icon-company-2" },
];

export const ClientsList = () => (
  <ClientsCompanyThumb>
    <ClientsListTitle>Companies that have already joined us</ClientsListTitle>
    <ClientsListStyled>
      {clientsItemData.map(({ width, height, svg }: IClientsItemData) => (
        <ClientsListItem>
          <ClientsListCompanySvg width={width} height={height}>
            <use href={svg} />
          </ClientsListCompanySvg>
        </ClientsListItem>
      ))}
    </ClientsListStyled>
  </ClientsCompanyThumb>
);

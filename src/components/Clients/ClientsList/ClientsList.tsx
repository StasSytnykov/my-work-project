import sprite from "../../../images/sprite.svg";
import {
  ClientsCompanyThumb,
  ClientsListTitle,
  ClientsListStyled,
  ClientsListItem,
  ClientsListCompanySvg,
} from "./ClientsList.styled";

export const ClientsList = () => (
  <ClientsCompanyThumb>
    <ClientsListTitle>Companies that have already joined us</ClientsListTitle>
    <ClientsListStyled>
      <ClientsListItem>
        <ClientsListCompanySvg width={150} height={19}>
          <use href={sprite + "#icon-company-2"} />
        </ClientsListCompanySvg>
      </ClientsListItem>
      <ClientsListItem>
        <ClientsListCompanySvg width={85} height={109}>
          <use href={sprite + "#icon-company-1"} />
        </ClientsListCompanySvg>
      </ClientsListItem>
      <ClientsListItem>
        <ClientsListCompanySvg width={178} height={23}>
          <use href={sprite + "#icon-company-4-2"} />
        </ClientsListCompanySvg>
      </ClientsListItem>
      <ClientsListItem>
        <ClientsListCompanySvg width={178} height={23}>
          <use href={sprite + "#icon-company-4-2"} />
        </ClientsListCompanySvg>
      </ClientsListItem>
      <ClientsListItem>
        <ClientsListCompanySvg width={150} height={19}>
          <use href={sprite + "#icon-company-3"} />
        </ClientsListCompanySvg>
      </ClientsListItem>
      <ClientsListItem>
        <ClientsListCompanySvg width={150} height={19}>
          <use href={sprite + "#icon-company-2"} />
        </ClientsListCompanySvg>
      </ClientsListItem>
    </ClientsListStyled>
  </ClientsCompanyThumb>
);

import { PricingCardButton } from "../../Buttons/Buttons";
import {
  PricingListStyled,
  ListItem,
  ItemThumb,
  Plan,
  PriceThumb,
  PricePerMonth,
  PricePerYear,
  PriceDesc,
  PlanDesc,
  PlanAdvantagesList,
  PlanAdvantagesItem,
  PlanAdvantagesItemDesc,
} from "./PricingList.styled";

export const PricingList = () => (
  <PricingListStyled>
    <ListItem>
      <ItemThumb>
        <Plan>start</Plan>
        <PriceThumb>
          <PricePerMonth>€49</PricePerMonth>
          <div>
            <PricePerYear>€588</PricePerYear>
            <PriceDesc>per year</PriceDesc>
          </div>
        </PriceThumb>
        <PlanDesc>
          10% discount on early payment. The best soution for small business.{" "}
        </PlanDesc>
        <PlanAdvantagesList>
          <PlanAdvantagesItem>
            <PlanAdvantagesItemDesc>1 Business location</PlanAdvantagesItemDesc>
          </PlanAdvantagesItem>
          <PlanAdvantagesItem>
            <PlanAdvantagesItemDesc>1 QR Code</PlanAdvantagesItemDesc>
          </PlanAdvantagesItem>
          <PlanAdvantagesItem>
            <PlanAdvantagesItemDesc>Custom branding</PlanAdvantagesItemDesc>
          </PlanAdvantagesItem>
        </PlanAdvantagesList>
        <PricingCardButton text={"Choose this plan"} />
      </ItemThumb>
    </ListItem>
  </PricingListStyled>
);

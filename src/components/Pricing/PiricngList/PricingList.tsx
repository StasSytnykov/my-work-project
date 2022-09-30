import { PricingCardButton } from "../../Buttons/Buttons";
import sprite from "../../../images/sprite.svg";
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
          10% discount on early payment. The best soution for small business.
        </PlanDesc>
        <ul>
          <PlanAdvantagesItem>
            <svg width={12} height={9}>
              <use href={sprite + "#icon-mark"} />
            </svg>
            <PlanAdvantagesItemDesc>1 Business location</PlanAdvantagesItemDesc>
          </PlanAdvantagesItem>
          <PlanAdvantagesItem>
            <svg width={12} height={9}>
              <use href={sprite + "#icon-mark"} />
            </svg>
            <PlanAdvantagesItemDesc>1 QR Code</PlanAdvantagesItemDesc>
          </PlanAdvantagesItem>
          <PlanAdvantagesItem>
            <svg width={12} height={9}>
              <use href={sprite + "#icon-mark"} />
            </svg>
            <PlanAdvantagesItemDesc>Custom branding</PlanAdvantagesItemDesc>
          </PlanAdvantagesItem>
        </ul>
        <PricingCardButton text={"Choose this plan"} />
      </ItemThumb>
    </ListItem>
    <ListItem>
      <ItemThumb>
        <Plan>Standart</Plan>
        <PriceThumb>
          <PricePerMonth>€150</PricePerMonth>
          <div>
            <PricePerYear>€588</PricePerYear>
            <PriceDesc>per year</PriceDesc>
          </div>
        </PriceThumb>
        <PlanDesc>
          10% discount on early payment. The best for medium business.
        </PlanDesc>
        <ul>
          <PlanAdvantagesItem>
            <svg width={12} height={9}>
              <use href={sprite + "#icon-mark"} />
            </svg>
            <PlanAdvantagesItemDesc>
              3 Business locations
            </PlanAdvantagesItemDesc>
          </PlanAdvantagesItem>
          <PlanAdvantagesItem>
            <svg width={12} height={9}>
              <use href={sprite + "#icon-mark"} />
            </svg>
            <PlanAdvantagesItemDesc>18 QR Code</PlanAdvantagesItemDesc>
          </PlanAdvantagesItem>
          <PlanAdvantagesItem>
            <svg width={12} height={9}>
              <use href={sprite + "#icon-mark"} />
            </svg>
            <PlanAdvantagesItemDesc>
              Custom urls and branding
            </PlanAdvantagesItemDesc>
          </PlanAdvantagesItem>
          <PlanAdvantagesItem>
            <svg width={12} height={9}>
              <use href={sprite + "#icon-mark"} />
            </svg>
            <PlanAdvantagesItemDesc>Unlimited questions</PlanAdvantagesItemDesc>
          </PlanAdvantagesItem>
        </ul>
        <PricingCardButton text={"Choose this plan"} />
      </ItemThumb>
    </ListItem>
    <ListItem>
      <ItemThumb>
        <Plan>Premium</Plan>
        <PriceThumb>
          <PricePerMonth>€250</PricePerMonth>
          <div>
            <PricePerYear>€588</PricePerYear>
            <PriceDesc>per year</PriceDesc>
          </div>
        </PriceThumb>
        <PlanDesc>
          10% discount on early payment. All-in-one for interprises.
        </PlanDesc>
        <ul>
          <PlanAdvantagesItem>
            <svg width={12} height={9}>
              <use href={sprite + "#icon-mark"} />
            </svg>
            <PlanAdvantagesItemDesc>Unlimited QR areas</PlanAdvantagesItemDesc>
          </PlanAdvantagesItem>
          <PlanAdvantagesItem>
            <svg width={12} height={9}>
              <use href={sprite + "#icon-mark"} />
            </svg>
            <PlanAdvantagesItemDesc>Unlimited reviews</PlanAdvantagesItemDesc>
          </PlanAdvantagesItem>
          <PlanAdvantagesItem>
            <svg width={12} height={9}>
              <use href={sprite + "#icon-mark"} />
            </svg>
            <PlanAdvantagesItemDesc>Unlimited questions</PlanAdvantagesItemDesc>
          </PlanAdvantagesItem>
          <PlanAdvantagesItem>
            <svg width={12} height={9}>
              <use href={sprite + "#icon-mark"} />
            </svg>
            <PlanAdvantagesItemDesc>
              Custom urls and branding
            </PlanAdvantagesItemDesc>
          </PlanAdvantagesItem>
          <PlanAdvantagesItem>
            <svg width={12} height={9}>
              <use href={sprite + "#icon-mark"} />
            </svg>
            <PlanAdvantagesItemDesc>
              Custom questionaries
            </PlanAdvantagesItemDesc>
          </PlanAdvantagesItem>
        </ul>
        <PricingCardButton text={"Choose this plan"} />
      </ItemThumb>
    </ListItem>
  </PricingListStyled>
);
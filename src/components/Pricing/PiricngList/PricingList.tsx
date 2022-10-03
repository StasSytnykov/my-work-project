import { PricingCardButton } from "../../Buttons/Buttons";
import sprite from "../../../images/sprite.svg";
import { IPricingData } from "../../../Interfaces/pricingInterface";
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

const clientsItemData = [
  {
    plan: "start",
    pricePerMonth: "€49",
    pricePerYear: "€588",
    priceDesc: "per year",
    planDesc:
      "10% discount on early payment. The best soution for small business.",
    planAdvantagesItem: ["1 Business location", "1 QR Code", "Custom branding"],
    buttonText: "Choose this plan",
  },
  {
    plan: "Standart",
    pricePerMonth: "€150",
    pricePerYear: "€588",
    priceDesc: "per year",
    planDesc: "10% discount on early payment. The best for medium business.",
    planAdvantagesItem: [
      "3 Business location",
      "18 QR Code",
      "Custom urls and branding",
      "Unlimited questions",
    ],
    buttonText: "Choose this plan",
  },
  {
    plan: "Premium",
    pricePerMonth: "€250",
    pricePerYear: "€588",
    priceDesc: "per year",
    planDesc: "10% discount on early payment. All-in-one for interprises.",
    planAdvantagesItem: [
      "Unlimited QR areas",
      "Unlimited reviews",
      "Unlimited questions",
      "Custom urls and branding",
      "Custom questionaries",
    ],
    buttonText: "Contact Us",
  },
];

export const PricingList = () => (
  <PricingListStyled>
    {clientsItemData.map(
      ({
        plan,
        pricePerMonth,
        pricePerYear,
        priceDesc,
        planDesc,
        planAdvantagesItem,
        buttonText,
      }: IPricingData) => (
        <ListItem key={plan}>
          <ItemThumb>
            <Plan>{plan}</Plan>
            <PriceThumb>
              <PricePerMonth>{pricePerMonth}</PricePerMonth>
              <div>
                <PricePerYear>{pricePerYear}</PricePerYear>
                <PriceDesc>{priceDesc}</PriceDesc>
              </div>
            </PriceThumb>
            <PlanDesc>{planDesc}</PlanDesc>
            <ul>
              {planAdvantagesItem.map((text: string) => (
                <PlanAdvantagesItem key={text}>
                  <svg width={12} height={9}>
                    <use href={sprite + "#icon-mark"} />
                  </svg>
                  <PlanAdvantagesItemDesc>{text}</PlanAdvantagesItemDesc>
                </PlanAdvantagesItem>
              ))}
            </ul>
            <PricingCardButton text={buttonText} />
          </ItemThumb>
        </ListItem>
      )
    )}
  </PricingListStyled>
);

import styled from "styled-components";

const PricingListStyled = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListItem = styled.li`
  width: 358px;
  height: 569px;

  border: 1px solid #c6e5fd;
  border-radius: 10px;
`;

const ItemThumb = styled.div`
  padding: 40px;
`;

const Plan = styled.p`
  display: inline;
  font-weight: 600;
  font-size: 12px;
  line-height: 1.16;
  text-transform: uppercase;

  padding: 4px 12px;
  background: #e0f0fd;
  border-radius: 5px;

  color: #3174c4;
`;

const PriceThumb = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  margin-top: 27px;
  margin-bottom: 23px;
`;

const PricePerMonth = styled.h3`
  font-weight: 700;
  font-size: 46px;
  line-height: 1.21;
  text-transform: uppercase;
  color: rgba(18, 18, 18, 0.8);
`;

const PricePerYear = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 1.2;

  margin-bottom: 4px;
`;

const PriceDesc = styled(PricePerYear)`
  font-size: 14px;
  color: rgba(0, 0, 0, 0.5);
  margin-bottom: 0;
`;

const PlanDesc = styled.p`
  font-size: 16px;
  line-height: 1.18;

  color: rgba(0, 0, 0, 0.5);

  margin-bottom: 28px;
`;

const PlanAdvantagesList = styled.div``;

const PlanAdvantagesItem = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;

const PlanAdvantagesItemDesc = styled.p`
  font-size: 16px;
  line-height: 1.18;
  color: #4c4f56;
`;

export {
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
};

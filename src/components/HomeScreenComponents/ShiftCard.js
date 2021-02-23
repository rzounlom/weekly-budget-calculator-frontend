import React from "react";
import {
  HomeScreenMainContentGridCard,
  HomeScreenMainContentGridCardHeader,
  HomeScreenMainContentGridCardBody,
  HomeScreenMainContentGridCardBodyRow,
  HomeScreenMainContentGridCardBodyText,
  HomeScreenMainContentGridCardFooter,
  HomeScreenMainContentGridCardFooterRow,
  HomeScreenMainContentGridCardFooterBtn,
} from "./HomeScreenComponents";

const ShiftCard = ({ shift }) => {
  if (shift) {
    console.log(shift.employee);
    const { employeeId, firstName, lastName, position, rate } = shift.employee;
    const { hours } = shift;
    return (
      <HomeScreenMainContentGridCard>
        <HomeScreenMainContentGridCardHeader>
          #{employeeId} {firstName} {lastName}
        </HomeScreenMainContentGridCardHeader>
        <HomeScreenMainContentGridCardBody>
          <HomeScreenMainContentGridCardBodyRow>
            <HomeScreenMainContentGridCardBodyText>
              Position:
            </HomeScreenMainContentGridCardBodyText>
            <HomeScreenMainContentGridCardBodyText>
              {position}
            </HomeScreenMainContentGridCardBodyText>
          </HomeScreenMainContentGridCardBodyRow>
          <HomeScreenMainContentGridCardBodyRow>
            <HomeScreenMainContentGridCardBodyText>
              Hours:
            </HomeScreenMainContentGridCardBodyText>
            <HomeScreenMainContentGridCardBodyText>
              {hours}
            </HomeScreenMainContentGridCardBodyText>
          </HomeScreenMainContentGridCardBodyRow>
          <HomeScreenMainContentGridCardBodyRow>
            <HomeScreenMainContentGridCardBodyText>
              Payout:
            </HomeScreenMainContentGridCardBodyText>
            <HomeScreenMainContentGridCardBodyText>
              ${hours * rate}
            </HomeScreenMainContentGridCardBodyText>
          </HomeScreenMainContentGridCardBodyRow>
        </HomeScreenMainContentGridCardBody>
        <HomeScreenMainContentGridCardFooter>
          <HomeScreenMainContentGridCardFooterRow>
            <HomeScreenMainContentGridCardFooterBtn className="card-footer-btn edit">
              Edit
            </HomeScreenMainContentGridCardFooterBtn>
            <HomeScreenMainContentGridCardFooterBtn className="card-footer-btn delete">
              Delete
            </HomeScreenMainContentGridCardFooterBtn>
          </HomeScreenMainContentGridCardFooterRow>
        </HomeScreenMainContentGridCardFooter>
      </HomeScreenMainContentGridCard>
    );
  } else
    return (
      <HomeScreenMainContentGridCard>
        <HomeScreenMainContentGridCardHeader>
          #1 Romaric Shegun Zounlome
        </HomeScreenMainContentGridCardHeader>
        <HomeScreenMainContentGridCardBody>
          <HomeScreenMainContentGridCardBodyRow>
            <HomeScreenMainContentGridCardBodyText>
              Position:
            </HomeScreenMainContentGridCardBodyText>
            <HomeScreenMainContentGridCardBodyText>
              Software Engineer
            </HomeScreenMainContentGridCardBodyText>
          </HomeScreenMainContentGridCardBodyRow>
          <HomeScreenMainContentGridCardBodyRow>
            <HomeScreenMainContentGridCardBodyText>
              Hours:
            </HomeScreenMainContentGridCardBodyText>
            <HomeScreenMainContentGridCardBodyText>
              8
            </HomeScreenMainContentGridCardBodyText>
          </HomeScreenMainContentGridCardBodyRow>
          <HomeScreenMainContentGridCardBodyRow>
            <HomeScreenMainContentGridCardBodyText>
              Payout:
            </HomeScreenMainContentGridCardBodyText>
            <HomeScreenMainContentGridCardBodyText>
              $480
            </HomeScreenMainContentGridCardBodyText>
          </HomeScreenMainContentGridCardBodyRow>
        </HomeScreenMainContentGridCardBody>
        <HomeScreenMainContentGridCardFooter>
          <HomeScreenMainContentGridCardFooterRow>
            <HomeScreenMainContentGridCardFooterBtn className="card-footer-btn edit">
              Edit
            </HomeScreenMainContentGridCardFooterBtn>
            <HomeScreenMainContentGridCardFooterBtn className="card-footer-btn delete">
              Delete
            </HomeScreenMainContentGridCardFooterBtn>
          </HomeScreenMainContentGridCardFooterRow>
        </HomeScreenMainContentGridCardFooter>
      </HomeScreenMainContentGridCard>
    );
};

export default ShiftCard;

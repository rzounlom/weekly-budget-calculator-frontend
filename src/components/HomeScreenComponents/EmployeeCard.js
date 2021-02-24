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

const EmployeeCard = ({ employee }) => {
  const { employeeId, firstName, lastName, position, rate } = employee;
  return (
    <HomeScreenMainContentGridCard>
      <HomeScreenMainContentGridCardHeader>
        #{employeeId}
      </HomeScreenMainContentGridCardHeader>
      <HomeScreenMainContentGridCardBody>
        <HomeScreenMainContentGridCardBodyRow>
          <HomeScreenMainContentGridCardBodyText>
            Name:
          </HomeScreenMainContentGridCardBodyText>
          <HomeScreenMainContentGridCardBodyText>
            {firstName} {lastName}
          </HomeScreenMainContentGridCardBodyText>
        </HomeScreenMainContentGridCardBodyRow>
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
            Rate:
          </HomeScreenMainContentGridCardBodyText>
          <HomeScreenMainContentGridCardBodyText>
            ${rate}
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

export default EmployeeCard;

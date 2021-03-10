import React from "react";
import { useDispatch } from "react-redux";
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
import { setCurrentShift } from "../../redux/actions/shift/shiftActions";

const ShiftCard = ({ shift, openEditShiftsModal, openDeleteShiftsModal }) => {
  const dispatch = useDispatch();
  if (shift) {
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
              ${(hours * rate).toFixed(2)}
            </HomeScreenMainContentGridCardBodyText>
          </HomeScreenMainContentGridCardBodyRow>
        </HomeScreenMainContentGridCardBody>
        <HomeScreenMainContentGridCardFooter>
          <HomeScreenMainContentGridCardFooterRow>
            <HomeScreenMainContentGridCardFooterBtn
              className="card-footer-btn edit"
              onClick={() => {
                dispatch(setCurrentShift(shift));
                openEditShiftsModal();
              }}
            >
              Edit
            </HomeScreenMainContentGridCardFooterBtn>
            <HomeScreenMainContentGridCardFooterBtn
              className="card-footer-btn delete"
              onClick={() => {
                dispatch(setCurrentShift(shift));
                openDeleteShiftsModal();
              }}
            >
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

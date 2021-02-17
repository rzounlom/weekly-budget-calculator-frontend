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

const ShiftCard = () => {
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

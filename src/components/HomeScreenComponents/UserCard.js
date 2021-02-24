import React from "react";
import {
  UserCardContainer,
  UserCardHeader,
  UserCardBody,
  UserCardBodyRow,
  UserCardBodyText,
  UserCardFooter,
  HomeScreenMainContentGridCardFooterRow,
  HomeScreenMainContentGridCardFooterBtn,
} from "./HomeScreenComponents";

const UserCard = ({ user }) => {
  const { username, role } = user;
  return (
    <UserCardContainer>
      <UserCardHeader>{username}</UserCardHeader>
      <UserCardBody>
        <UserCardBodyRow>
          <UserCardBodyText>Role:</UserCardBodyText>
          <UserCardBodyText>{role}</UserCardBodyText>
        </UserCardBodyRow>
      </UserCardBody>
      <UserCardFooter>
        <HomeScreenMainContentGridCardFooterRow>
          <HomeScreenMainContentGridCardFooterBtn className="card-footer-btn edit">
            Edit
          </HomeScreenMainContentGridCardFooterBtn>
          <HomeScreenMainContentGridCardFooterBtn className="card-footer-btn delete">
            Delete
          </HomeScreenMainContentGridCardFooterBtn>
        </HomeScreenMainContentGridCardFooterRow>
      </UserCardFooter>
    </UserCardContainer>
  );
};

export default UserCard;

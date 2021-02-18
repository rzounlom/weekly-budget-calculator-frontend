import { gql } from "@apollo/client";

export const FIND_USER_BY_ID = gql`
  query user($id: ID!) {
    user: user(id: $id) {
      username
      role
    }
  }
`;

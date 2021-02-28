import { gql } from "@apollo/client";

export const CREATE_SHIFT = gql`
  mutation createShift($data: CreateShiftInput) {
    createdShift: createShift(data: $data) {
      day
      hours
      employee {
        firstName
        lastName
        position
        rate
      }
    }
  }
`;

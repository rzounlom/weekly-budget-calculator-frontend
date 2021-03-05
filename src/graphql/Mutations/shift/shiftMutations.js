import { gql } from "@apollo/client";

export const CREATE_SHIFT = gql`
  mutation createShift($data: CreateShiftInput) {
    message: createShift(data: $data) {
      message
    }
  }
`;

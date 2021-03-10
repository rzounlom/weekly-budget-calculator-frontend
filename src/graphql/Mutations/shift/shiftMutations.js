import { gql } from "@apollo/client";

export const CREATE_SHIFT = gql`
  mutation createShift($data: CreateShiftInput) {
    message: createShift(data: $data) {
      message
    }
  }
`;

export const UPDATE_SHIFT = gql`
  mutation createShift($data: UpdateShiftInput) {
    message: updateShift(data: $data) {
      message
    }
  }
`;

export const DELETE_SHIFT = gql`
  mutation createShift($data: DeleteShiftInput) {
    message: deleteSingleShift(data: $data) {
      message
    }
  }
`;

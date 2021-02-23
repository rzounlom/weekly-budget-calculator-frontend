import { gql } from "@apollo/client";

export const CREATE_SHIFT = gql`
  mutation createShift($employeeId: Number!, $hours: Number!, $day: String!) {
    shifts: findShiftsByDay(employeeId: $employeeId, hours: $hours, day: $day) {
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

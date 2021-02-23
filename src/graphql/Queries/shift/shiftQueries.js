import { gql } from "@apollo/client";

export const GET_ALL_SHIFTS = gql`
  query shifts {
    shifts: findShifts {
      day
      hours
      employee {
        employeeId
        firstName
        lastName
        position
        rate
      }
    }
  }
`;

export const GET_SHIFTS_BY_DAY = gql`
  query shift($day: String!) {
    shifts: findShiftsByDay(day: $day) {
      day
      hours
      employee {
        employeeId
        firstName
        lastName
        position
        rate
      }
    }
  }
`;

import { gql } from "@apollo/client";

export const GET_EMPLOYEES = gql`
  query findEmployees($query: String) {
    employees: findEmployees(query: $query) {
      employeeId
      firstName
      lastName
      position
      rate
    }
  }
`;

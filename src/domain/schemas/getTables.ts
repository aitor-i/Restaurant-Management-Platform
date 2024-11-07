import { gql } from "@apollo/client";

export const GET_TABLES_QUERY = gql`
  query GetTables {
    tables {
      id
      state
      request {
        id
        description
        price
      }
    }
  }
`;

export const TABLE_STATUS_SUBSCRIPTION = gql`
  subscription Subscription {
    newTableState {
      id
      state
      request {
        id
        description
        price
      }
    }
  }
`;

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

import { gql } from "@apollo/client";

export const GET_CATEGORIES_QUERY = gql`
  query Categories {
    menu {
      categories {
        id
        name
      }
    }
  }
`;

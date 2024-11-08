import { gql } from "@apollo/client";

export const GET_MENU_QUERY = gql`
  query Categories {
    menu {
      categories {
        id
        name
        items {
          id
          description
          price
        }
      }
    }
  }
`;

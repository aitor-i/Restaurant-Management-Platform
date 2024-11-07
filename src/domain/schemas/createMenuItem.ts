import { gql } from "@apollo/client";

export const CREATE_MENU_ITEM_MUTATION = gql`
  mutation CreateMenuItem(
    $description: String!
    $price: Int!
    $categoryId: String!
  ) {
    createMenuItem(
      description: $description
      price: $price
      categoryId: $categoryId
    ) {
      id
      description
      price
      category {
        id
        name
      }
    }
  }
`;

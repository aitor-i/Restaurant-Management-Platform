import { gql } from "@apollo/client";

export const UPDATE_MENU_ITEM_MUTATION = gql`
  mutation UpdateMenuItem(
    $description: String!
    $price: Int!
    $categoryId: String!
    $updateMenuItemId: String!
  ) {
    updateMenuItem(
      description: $description
      price: $price
      categoryId: $categoryId
      id: $updateMenuItemId
    ) {
      id
    }
  }
`;

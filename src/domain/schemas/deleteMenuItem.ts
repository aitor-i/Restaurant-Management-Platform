import { gql } from "@apollo/client";

export const DELETE_MENU_ITEM_MUTATION = gql`
  mutation DeleteMenuItem($deleteMenuItemId: String!) {
    deleteMenuItem(id: $deleteMenuItemId) {
      id
    }
  }
`;

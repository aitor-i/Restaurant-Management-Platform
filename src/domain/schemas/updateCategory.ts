import { gql } from "@apollo/client";

export const UPDATE_CATEGORY_MUTATION = gql`
  mutation UpdateCategory($name: String!, $updateCategoryId: String!) {
    updateCategory(name: $name, id: $updateCategoryId) {
      id
    }
  }
`;

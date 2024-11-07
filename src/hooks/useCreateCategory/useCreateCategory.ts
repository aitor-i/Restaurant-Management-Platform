import { useMutation } from "@apollo/client";
import {
  CreateCategoryData,
  CreateCategoryVariables,
} from "@/domain/interfaces/category";
import { CREATE_CATEGORY_MUTATION } from "@/domain/schemas/createCategory";

export const useCreateCategory = () => {
  const [createCategoryMutation, { data, loading, error }] = useMutation<
    CreateCategoryData,
    CreateCategoryVariables
  >(CREATE_CATEGORY_MUTATION);

  const createCategory = (name: string) => {
    return createCategoryMutation({
      variables: { name },
    });
  };

  return {
    createCategory,
    data,
    loading,
    error,
  };
};

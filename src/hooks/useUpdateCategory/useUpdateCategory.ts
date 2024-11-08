import { useMutation } from "@apollo/client";
import { UPDATE_CATEGORY_MUTATION } from "@/domain/schemas/updateCategory";
import {
  UpdateCategoryData,
  UpdateCategoryVariables,
} from "@/domain/interfaces/category";

const useUpdateCategory = () => {
  const [updateCategoryMutation, { data, loading, error }] = useMutation<
    UpdateCategoryData,
    UpdateCategoryVariables
  >(UPDATE_CATEGORY_MUTATION);

  const updateCategory = (name: string, id: string) => {
    return updateCategoryMutation({
      variables: { name, updateCategoryId: id },
    });
  };

  return {
    updateCategory,
    data,
    loading,
    error,
  };
};

export default useUpdateCategory;

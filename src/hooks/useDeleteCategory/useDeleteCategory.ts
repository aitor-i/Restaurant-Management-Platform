import { useMutation } from "@apollo/client";
import { DELETE_CATEGORY_MUTATION } from "@/domain/schemas/deleteCategory";
import {
  DeleteCategoryData,
  DeleteCategoryVariables,
} from "@/domain/interfaces/category";

const useDeleteCategory = () => {
  const [deleteCategoryMutation, { data, loading, error }] = useMutation<
    DeleteCategoryData,
    DeleteCategoryVariables
  >(DELETE_CATEGORY_MUTATION);

  const deleteCategory = (id: string) => {
    return deleteCategoryMutation({
      variables: { deleteCategoryId: id },
    });
  };

  return {
    deleteCategory,
    data,
    loading,
    error,
  };
};

export default useDeleteCategory;

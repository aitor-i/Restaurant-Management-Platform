import { useMutation } from "@apollo/client";
import { UPDATE_MENU_ITEM_MUTATION } from "@/domain/schemas/updateMenuItem";
import {
  UpdateMenuItemData,
  UpdateMenuItemVariables,
} from "@/domain/interfaces/menuItem";

const useUpdateMenuItem = () => {
  const [updateMenuItemMutation, { data, loading, error }] = useMutation<
    UpdateMenuItemData,
    UpdateMenuItemVariables
  >(UPDATE_MENU_ITEM_MUTATION);

  const updateMenuItem = (
    description: string,
    price: number,
    categoryId: string,
    id: string,
  ) => {
    return updateMenuItemMutation({
      variables: { description, price, categoryId, updateMenuItemId: id },
    });
  };

  return {
    updateMenuItem,
    data,
    loading,
    error,
  };
};

export default useUpdateMenuItem;

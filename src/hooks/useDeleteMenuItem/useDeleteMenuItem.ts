import { useMutation } from "@apollo/client";
import { DELETE_MENU_ITEM_MUTATION } from "@/domain/schemas/deleteMenuItem";
import {
  DeleteMenuItemData,
  DeleteMenuItemVariables,
} from "@/domain/interfaces/menuItem";

const useDeleteMenuItem = () => {
  const [deleteMenuItemMutation, { data, loading, error }] = useMutation<
    DeleteMenuItemData,
    DeleteMenuItemVariables
  >(DELETE_MENU_ITEM_MUTATION);

  const deleteMenuItem = (id: string) => {
    return deleteMenuItemMutation({
      variables: { deleteMenuItemId: id },
    });
  };

  return {
    deleteMenuItem,
    data,
    loading,
    error,
  };
};

export default useDeleteMenuItem;

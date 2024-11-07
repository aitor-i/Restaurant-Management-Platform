import { useMutation } from "@apollo/client";
import { CREATE_MENU_ITEM_MUTATION } from "@/domain/schemas/createMenuItem";
import {
  CreateMenuItemData,
  CreateMenuItemVariables,
} from "@/domain/interfaces/menuItem";

const useCreateMenuItem = () => {
  const [createMenuItemMutation, { data, loading, error }] = useMutation<
    CreateMenuItemData,
    CreateMenuItemVariables
  >(CREATE_MENU_ITEM_MUTATION);

  const createMenuItem = (
    description: string,
    price: number,
    categoryId: string,
  ) => {
    return createMenuItemMutation({
      variables: { description, price, categoryId },
    });
  };

  return {
    createMenuItem,
    data,
    loading,
    error,
  };
};

export default useCreateMenuItem;

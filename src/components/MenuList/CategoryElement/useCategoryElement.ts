import React, { useState } from "react";

import useUpdateCategory from "@/hooks/useUpdateCategory/useUpdateCategory";
import useGetCategories from "@/hooks/useGetCategories/useGetCategories";
import { useToast } from "@/hooks/use-toast";
import useDeleteCategory from "@/hooks/useDeleteCategory/useDeleteCategory";
import useGetMenu from "@/hooks/useGetMenu/useGetMenu";
import { Category } from "@/domain/interfaces/category";

interface CategoryProp {
  category: Category;
}

export const useCategoryElement = ({ category }: CategoryProp) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedCategoryName, setEditedCategoryName] = useState(category.name);
  const { deleteCategory } = useDeleteCategory();
  const { updateCategory } = useUpdateCategory();
  const { refetch: refetchCategories } = useGetCategories();
  const { refetch: refetchMenu } = useGetMenu();
  const { toast } = useToast();

  const onChangeCategoryName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedCategoryName(e.target.value);
  };

  const handleUpdateCategory = async () => {
    await updateCategory(editedCategoryName, category.id);
    refetchCategories();
    toast({
      title: "Category updated",
    });

    setIsEditing(false);
  };

  const onClickEditCategory = () => {
    setIsEditing(true);
  };

  const onCancelEditCategory = () => {
    setIsEditing(false);
  };

  const onDeleteCategory = async () => {
    await deleteCategory(category.id);
    refetchCategories();
    refetchMenu();
    toast({
      title: "Category deleted",
      variant: "destructive",
    });
  };

  return {
    onChangeCategoryName,
    handleUpdateCategory,
    onClickEditCategory,
    onCancelEditCategory,
    onDeleteCategory,
    isEditing,
    editedCategoryName,
  };
};

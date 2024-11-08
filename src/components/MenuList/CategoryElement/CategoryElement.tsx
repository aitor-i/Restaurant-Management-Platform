import React, { useState } from "react";

import { Category } from "@/domain/interfaces/category";
import useUpdateCategory from "@/hooks/useUpdateCategory/useUpdateCategory";
import { EditIcon, SaveIcon, Trash2Icon, XIcon } from "lucide-react";
import { Button } from "@/components/Button/Button";
import useGetCategories from "@/hooks/useGetCategories/useGetCategories";
import { useToast } from "@/hooks/use-toast";

interface CategoryProp {
  category: Category;
}

export function CategoryElement({ category }: CategoryProp) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedCategoryName, setEditedCategoryName] = useState(category.name);
  const { updateCategory } = useUpdateCategory();
  const { refetch: refetchCategories } = useGetCategories();
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

  return (
    <>
      {isEditing ? (
        <span className="flex gap-2 justify-between py-2">
          <input
            type="text"
            value={editedCategoryName}
            onChange={onChangeCategoryName}
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
          />
          <div className="flex gap-1">
            <Button onClick={handleUpdateCategory}>
              <SaveIcon />
            </Button>
            <Button variant="secondary" onClick={onCancelEditCategory}>
              <XIcon />
            </Button>
            <Button variant="destructive">
              <Trash2Icon />
            </Button>
          </div>
        </span>
      ) : (
        <h3 className="text-xl flex justify-between py-2 font-bold tracking-tight text-customPalette-sageGreen sm:text-2xl">
          {category.name}
          <EditIcon
            onClick={onClickEditCategory}
            className="cursor-pointer text-sm"
          />
        </h3>
      )}
    </>
  );
}

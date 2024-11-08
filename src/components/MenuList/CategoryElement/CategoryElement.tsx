import { Category } from "@/domain/interfaces/category";
import { EditIcon, SaveIcon, Trash2Icon, XIcon } from "lucide-react";
import { Button } from "@/components/Button/Button";
import { useCategoryElement } from "./useCategoryElement";

interface CategoryProp {
  category: Category;
}

export function CategoryElement({ category }: CategoryProp) {
  const {
    isEditing,
    editedCategoryName,
    onChangeCategoryName,
    onDeleteCategory,
    onClickEditCategory,
    handleUpdateCategory,
    onCancelEditCategory,
  } = useCategoryElement({ category: category });

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
            <Button variant="destructive" onClick={onDeleteCategory}>
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

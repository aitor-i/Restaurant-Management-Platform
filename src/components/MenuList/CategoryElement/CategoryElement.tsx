import { Category } from "@/domain/interfaces/category";
import { EditIcon, PlusIcon, SaveIcon, Trash2Icon, XIcon } from "lucide-react";
import { Button } from "@/components/Button/Button";
import { useCategoryElement } from "./useCategoryElement";

interface CategoryProp {
  category: Category;
  onAddMenuItem: (id: string) => void;
}

export function CategoryElement({ category, onAddMenuItem }: CategoryProp) {
  const {
    isEditing,
    editedCategoryName,
    onChangeCategoryName,
    onDeleteCategory,
    onClickEditCategory,
    handleUpdateCategory,
    onCancelEditCategory,
  } = useCategoryElement({ category: category });

  const onClickAddMenuItem = () => {
    onAddMenuItem(category.id);
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
            <Button variant="destructive" onClick={onDeleteCategory}>
              <Trash2Icon />
            </Button>
          </div>
        </span>
      ) : (
        <h3 className="text-xl flex justify-between py-2 font-bold tracking-tight text-customPalette-sageGreen sm:text-2xl">
          {category.name}
          <span className="flex gap-2 items-center">
            <EditIcon
              onClick={onClickEditCategory}
              className="cursor-pointer text-sm"
            />
            <PlusIcon
              onClick={onClickAddMenuItem}
              className="cursor-pointer  rounded-md border-customPalette-sageGreen text-customPalette-ivory bg-customPalette-sageGreen"
            />
          </span>
        </h3>
      )}
    </>
  );
}

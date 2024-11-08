import { CategoryForm } from "./CategoryForm/CategoryForm";
import { MenuItemForm } from "./MenuItemForm/MenuItemForm";

export default function MenuForm() {
  return (
    <div className="flex-col flex gap-6">
      <h2 className="text-3xl flex flex-col gap-6 font-bold tracking-tight py-12 text-customPalette-sand sm:text-4xl">
        Menu Managment
      </h2>
      <CategoryForm />
      <MenuItemForm />
    </div>
  );
}

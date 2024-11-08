import { CategoryForm } from "./CategoryForm/CategoryForm";

export default function MenuForm() {
  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight py-12 text-customPalette-sand sm:text-4xl">
        Menu Managment
      </h2>
      <CategoryForm />
    </div>
  );
}

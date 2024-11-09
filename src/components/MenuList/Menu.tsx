import useGetMenu from "@/hooks/useGetMenu/useGetMenu";
import { CategoryElement } from "./CategoryElement/CategoryElement";
import { MenuItem } from "./MenuItem/MenuItem";
import { AddCategory } from "./AddCategory/AddCategory";
import { useState } from "react";
import { AddMenuItem } from "./AddMenuItem/AddMenuItem";

export function MenuList() {
  const { menu } = useGetMenu();

  const [addingId, setAddingId] = useState("");

  const onClickAdd = (id: string) => {
    setAddingId(id);
  };

  const resetAddingId = () => {
    setAddingId("");
  };

  return (
    <div>
      <h2 className="text-3xl flex flex-col gap-6 font-bold tracking-tight py-12 text-customPalette-sand sm:text-4xl">
        Menu
      </h2>
      <div className="px-4 max-w-xl">
        {menu.map((category) => (
          <div key={category.id}>
            <CategoryElement
              onAddMenuItem={onClickAdd}
              category={category}
              key={category.id}
            />
            <ul className="list-disc list-inside text-slate-700">
              {addingId === category.id && (
                <AddMenuItem
                  categoryId={category.id}
                  onSuccess={resetAddingId}
                />
              )}
              {category.items.map((item) => (
                <MenuItem categoryId={category.id} key={item.id} item={item} />
              ))}
            </ul>
          </div>
        ))}
        <AddCategory />
      </div>
    </div>
  );
}

import useGetMenu from "@/hooks/useGetMenu/useGetMenu";
import React from "react";
import { CategoryElement } from "./CategoryElement/CategoryElement";
import { MenuItem } from "./MenuItem/MenuItem";

export function MenuList() {
  const { menu } = useGetMenu();

  return (
    <div>
      <h2 className="text-3xl flex flex-col gap-6 font-bold tracking-tight py-12 text-customPalette-sand sm:text-4xl">
        Menu
      </h2>
      <div className="px-4 max-w-xl">
        {menu.map((category) => (
          <div key={category.id}>
            <CategoryElement category={category} key={category.id} />
            <ul className="list-disc list-inside text-slate-700">
              {category.items.map((item) => (
                <MenuItem categoryId={category.id} key={item.id} item={item} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

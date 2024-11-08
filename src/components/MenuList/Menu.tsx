import useGetMenu from "@/hooks/useGetMenu/useGetMenu";
import useUpdateCategory from "@/hooks/useUpdateCategory/useUpdateCategory";
import { EditIcon, PencilIcon } from "lucide-react";
import React from "react";
import { CategoryElement } from "./CategoryElement/CategoryElement";

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
                <li className="flex justify-between px-6" key={item.id}>
                  <p>{item.description}</p>
                  <span className="flex gap-2 items-center ">
                    <p>{item.price}€</p>
                    <EditIcon className="cursor-pointer text-sm" />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

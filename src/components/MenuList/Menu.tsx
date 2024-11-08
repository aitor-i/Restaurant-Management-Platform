import useGetMenu from "@/hooks/useGetMenu/useGetMenu";
import { EditIcon } from "lucide-react";
import React from "react";

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
            <h3 className="text-xl flex justify-between py-2 font-bold tracking-tight text-customPalette-sageGreen sm:text-2xl">
              {category.name}
              <EditIcon className="cursor-pointer" />
            </h3>
            <ul className="list-disc list-inside ">
              {category.items.map((item) => (
                <li className="flex justify-between px-6" key={item.id}>
                  <p>{item.description}</p>
                  <p>{item.price}€</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

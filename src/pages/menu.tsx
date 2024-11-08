import MenuForm from "@/components/MenuForm/MenuForm";
import { MenuList } from "@/components/MenuList/Menu";
import React from "react";

export default function Menu() {
  return (
    <section className=" min-h-screen grid grid-cols-1 md:grid-cols-2 gap-6 py-12 px-4 sm:px-6 lg:px-8">
      <MenuList />
      <div>
        <MenuForm />
      </div>
    </section>
  );
}

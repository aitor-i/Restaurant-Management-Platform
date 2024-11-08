import MenuForm from "@/components/MenuForm/MenuForm";
import React from "react";

export default function Menu() {
  return (
    <section className=" min-h-screen grid grid-cols-1 md:grid-cols-2 gap-6 py-12 px-4 sm:px-6 lg:px-8">
      <div>Menu</div>
      <div>
        <MenuForm />
      </div>
    </section>
  );
}

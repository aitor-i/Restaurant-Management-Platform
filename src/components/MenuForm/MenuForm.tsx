import React from "react";

import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { Select } from "../Select/Select";

export default function MenuForm() {
  const onSubmitCategory = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const category = formData.get("category") as string;
    console.log("Category", category);
  };

  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight py-12 text-customPalette-sand sm:text-4xl">
        Menu Managment
      </h2>
      <form className="flex flex-col gap-4" onSubmit={onSubmitCategory}>
        <label htmlFor="category" className="text-2xl">
          Category
        </label>
        <Input
          id="category"
          name="category"
          type="text"
          placeholder="Category"
        />
        <Button className="text-customPalette-ivory font-bold" type="submit">
          Add Category
        </Button>
      </form>
    </div>
  );
}

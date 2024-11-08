import React, { useRef } from "react";

import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { Select } from "../Select/Select";
import { useCreateCategory } from "@/hooks/useCreateCategory/useCreateCategory";

export default function MenuForm() {
  const { error, data, createCategory, loading } = useCreateCategory();
  const categoryFormRef = useRef<HTMLFormElement>(null);
  const onSubmitCategory = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const category = formData.get("category") as string;
    const response = await createCategory(category);

    if (!response.errors) {
      formData.delete("category");
      categoryFormRef.current?.reset();
    }
  };

  return (
    <div>
      <h2 className="text-3xl font-bold tracking-tight py-12 text-customPalette-sand sm:text-4xl">
        Menu Managment
      </h2>
      <form
        ref={categoryFormRef}
        className="flex flex-col gap-4"
        onSubmit={onSubmitCategory}
      >
        <label htmlFor="category" className="text-2xl">
          Category
        </label>
        <Input
          id="category"
          name="category"
          type="text"
          placeholder="Category"
        />
        {error && (
          <p className="text-red-500 text-sm">Error: {error.message}</p>
        )}
        <Button
          disabled={loading}
          className="text-customPalette-ivory font-bold"
          type="submit"
        >
          {loading ? "Loading..." : "Add Category"}
        </Button>
      </form>
    </div>
  );
}

import React, { useRef } from "react";

import { Button } from "@/components/Button/Button";
import { Input } from "@/components/Input/Input";
import { useCreateCategory } from "@/hooks/useCreateCategory/useCreateCategory";
import { useToast } from "@/hooks/use-toast";
import useGetCategories from "@/hooks/useGetCategories/useGetCategories";
import useGetMenu from "@/hooks/useGetMenu/useGetMenu";

export function CategoryForm() {
  const { error, createCategory, loading } = useCreateCategory();
  const { refetch } = useGetCategories();
  const { refetch: refetchMenu } = useGetMenu();

  const categoryFormRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const onSubmitCategory = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const category = formData.get("category") as string;
    if (!category) return;
    const response = await createCategory(category);

    if (!response.errors) {
      formData.delete("category");
      categoryFormRef.current?.reset();
      refetch();
      refetchMenu();
      toast({
        title: "Category created",
      });
    }
  };

  return (
    <div>
      <h3 className="text-xl font-bold tracking-tight text-customPalette-sageGreen sm:text-2xl">
        Add Category
      </h3>

      <form
        ref={categoryFormRef}
        className="flex flex-col gap-4"
        onSubmit={onSubmitCategory}
      >
        <label htmlFor="category" className="text-xl">
          Category
        </label>
        <Input
          id="category"
          name="category"
          type="text"
          maxLength={30}
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

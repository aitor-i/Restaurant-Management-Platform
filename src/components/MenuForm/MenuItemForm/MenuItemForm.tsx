import { Button } from "@/components/Button/Button";
import { useToast } from "@/hooks/use-toast";
import useCreateMenuItem from "@/hooks/useCreateMenuItem/useCreateMenuItem";
import { Input } from "@/components/Input/Input";
import { Select } from "@/components/Select/Select";
import { useRef } from "react";
import useGetCategories from "@/hooks/useGetCategories/useGetCategories";
import useGetMenu from "@/hooks/useGetMenu/useGetMenu";

export function MenuItemForm() {
  const { data, error, loading, createMenuItem } = useCreateMenuItem();
  const { refetch } = useGetMenu();
  const { categories } = useGetCategories();
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const onSubmitCategory = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const category = formData.get("category") as string;
    const description = formData.get("description") as string;
    const price = formData.get("price") as string;

    if (!category || !description || !price) return;

    const response = await createMenuItem(description, +price, category);

    if (!response.errors) {
      formData.delete("category");
      formData.delete("description");
      formData.delete("price");
      formRef.current?.reset();

      refetch();
      toast({
        title: "Menu Item created",
      });
    }
  };

  return (
    <div>
      <h3 className="text-xl font-bold tracking-tight text-customPalette-sageGreen sm:text-2xl">
        Add Menu Item
      </h3>
      <form
        ref={formRef}
        className="flex flex-col gap-4"
        onSubmit={onSubmitCategory}
      >
        <label htmlFor="category" className="text-xl">
          Category
        </label>
        <Select
          id="category"
          name="category"
          options={categories.map((category) => ({
            label: category.name,
            value: category.id,
          }))}
        />

        <label htmlFor="description" className="text-xl">
          Description
        </label>
        <Input
          id="description"
          name="description"
          type="text"
          placeholder="Description"
          maxLength={30}
        />

        <label htmlFor="price" className="text-xl">
          Price
        </label>
        <Input
          id="price"
          min={0}
          max={1000}
          name="price"
          type="number"
          placeholder="Price"
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

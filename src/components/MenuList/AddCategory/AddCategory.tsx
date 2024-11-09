import React, { useRef, useState } from "react";
import { PlusIcon, SaveIcon, XIcon } from "lucide-react";
import { Button } from "@/components/Button/Button";
import { useCreateCategory } from "@/hooks/useCreateCategory/useCreateCategory";
import useGetCategories from "@/hooks/useGetCategories/useGetCategories";
import useGetMenu from "@/hooks/useGetMenu/useGetMenu";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/Input/Input";

export function AddCategory() {
  const [isAdding, setIsAdding] = useState(false);
  const { error, createCategory, loading } = useCreateCategory();
  const { refetch } = useGetCategories();
  const { refetch: refetchMenu } = useGetMenu();

  const { toast } = useToast();

  const categoryFormRef = useRef<HTMLFormElement>(null);

  const onClickAdd = () => {
    setIsAdding(true);
  };

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
      setIsAdding(false);

      toast({
        title: "Category created",
      });
    }
  };

  const onCancelEditCategory = () => {
    setIsAdding(false);
  };

  return (
    <>
      {isAdding ? (
        <form
          onSubmit={onSubmitCategory}
          className="flex my-2 gap-2 justify-between py-2"
        >
          <Input
            id="category"
            name="category"
            type="text"
            placeholder="Category"
            maxLength={30}
          />
          <div className="flex gap-1">
            <Button
              type="reset"
              variant="secondary"
              onClick={onCancelEditCategory}
            >
              <XIcon />
            </Button>

            <Button type="submit">
              <SaveIcon />
            </Button>
          </div>
        </form>
      ) : (
        <Button
          onClick={onClickAdd}
          className="w-full my-4 text-customPalette-ivory font-bold"
        >
          <PlusIcon />
        </Button>
      )}
    </>
  );
}

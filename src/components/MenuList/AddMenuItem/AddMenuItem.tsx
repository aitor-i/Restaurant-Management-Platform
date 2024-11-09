import { Button } from "@/components/Button/Button";
import { SaveIcon, XIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import useCreateMenuItem from "@/hooks/useCreateMenuItem/useCreateMenuItem";
import { Input } from "@/components/Input/Input";
import { useRef } from "react";
import useGetCategories from "@/hooks/useGetCategories/useGetCategories";
import useGetMenu from "@/hooks/useGetMenu/useGetMenu";

interface MenuItmsProps {
  categoryId: string;
  onSuccess: () => void;
}

export function AddMenuItem({ categoryId, onSuccess }: MenuItmsProps) {
  const { data, error, loading, createMenuItem } = useCreateMenuItem();
  const { refetch } = useGetMenu();
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const onSubmitItem = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const description = formData.get("description") as string;
    const price = formData.get("price") as string;

    if (!description || !price) return;

    const response = await createMenuItem(description, +price, categoryId);

    if (!response.errors) {
      formData.delete("category");
      formData.delete("description");
      formData.delete("price");
      formRef.current?.reset();

      refetch();
      toast({
        title: "Menu Item created",
      });
      onSuccess();
    }
  };

  return (
    <form onSubmit={onSubmitItem} className="flex gap-2 justify-between py-2">
      <Input
        id="description"
        name="description"
        type="text"
        placeholder="Description"
        className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
        maxLength={30}
      />
      <Input
        id="price"
        name="price"
        type="number"
        placeholder="Price"
        className="w-20"
        min={0}
        max={1000}
      />

      <div className="flex gap-1">
        <Button onClick={onSuccess} type="reset" variant="secondary">
          <XIcon />
        </Button>

        <Button type="submit">
          <SaveIcon />
        </Button>
      </div>
    </form>
  );
}

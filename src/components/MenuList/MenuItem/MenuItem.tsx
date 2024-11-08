import React from "react";
import { MenuItem as MenuItemInterface } from "@/domain/interfaces/menu";
import { Button } from "@/components/Button/Button";
import { EditIcon, SaveIcon, Trash2Icon, XIcon } from "lucide-react";
import { Input } from "@/components/Input/Input";
import useUpdateMenuItem from "@/hooks/useUpdateMenuItem/useUpdateMenuItem";
import { useToast } from "@/hooks/use-toast";
import useGetMenu from "@/hooks/useGetMenu/useGetMenu";

interface MenuItmsProps {
  item: MenuItemInterface;
  categoryId: string;
}

function formatPrice(price: string) {
  const priceNumber = parseFloat(price);
  return +priceNumber.toFixed(0);
}

export function MenuItem({ item, categoryId }: MenuItmsProps) {
  const [isEditing, setIsEditing] = React.useState(false);
  const [editedItem, setEditedItem] = React.useState(item.description);
  const [editedPrice, setEditedPrice] = React.useState(item.price);
  const { updateMenuItem } = useUpdateMenuItem();
  const { toast } = useToast();
  const { refetch: refetchMenu } = useGetMenu();

  const onClickEditCategory = () => {
    setIsEditing(true);
  };

  const onChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPrice = formatPrice(e.target.value);
    setEditedPrice(newPrice);
  };

  const handleUpdateCategory = async () => {
    await updateMenuItem(editedItem, editedPrice, categoryId, item.id);
    setIsEditing(false);
    refetchMenu();
    toast({
      title: "Item updated",
    });
  };

  const onChangeItemName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedItem(e.target.value);
  };

  const onCancelEditItem = () => {
    setIsEditing(false);
  };

  const onDeleteItem = () => {};

  return (
    <>
      {isEditing ? (
        <span className="flex gap-2 justify-between py-2">
          <Input
            type="text"
            value={editedItem}
            onChange={onChangeItemName}
            placeholder="Description"
            className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50"
          />
          <Input
            value={editedPrice}
            onChange={onChangePrice}
            id="price"
            name="price"
            type="number"
            placeholder="Price"
            className="w-20"
          />

          <div className="flex gap-1">
            <Button onClick={handleUpdateCategory}>
              <SaveIcon />
            </Button>
            <Button variant="secondary" onClick={onCancelEditItem}>
              <XIcon />
            </Button>
            <Button variant="destructive" onClick={onDeleteItem}>
              <Trash2Icon />
            </Button>
          </div>
        </span>
      ) : (
        <li className="flex justify-between px-6" key={item.id}>
          <p>{item.description}</p>
          <span className="flex gap-2 items-center ">
            <p>{item.price}€</p>
            <EditIcon
              className="cursor-pointer text-sm"
              onClick={onClickEditCategory}
            />
          </span>
        </li>
      )}
    </>
  );
}

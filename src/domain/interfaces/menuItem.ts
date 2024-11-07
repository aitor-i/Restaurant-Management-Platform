export interface Category {
  id: string;
  name: string;
}

export interface MenuItem {
  id: string;
  description: string;
  price: number;
  category: Category;
}

export interface CreateMenuItemData {
  createMenuItem: MenuItem;
}

export interface CreateMenuItemVariables {
  description: string;
  price: number;
  categoryId: string;
}

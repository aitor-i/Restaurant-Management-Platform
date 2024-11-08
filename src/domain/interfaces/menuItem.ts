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

export interface UpdateMenuItemData {
  updateMenuItem: {
    id: string;
  };
}

export interface UpdateMenuItemVariables {
  description: string;
  price: number;
  categoryId: string;
  updateMenuItemId: string;
}

export interface DeleteMenuItemData {
  deleteMenuItem: {
    id: string;
  };
}

export interface DeleteMenuItemVariables {
  deleteMenuItemId: string;
}

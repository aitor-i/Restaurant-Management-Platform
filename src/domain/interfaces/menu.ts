interface MenuItem {
  id: string;
  description: string;
  price: number;
}

interface Category {
  id: string;
  name: string;
  items: MenuItem[];
}

export interface GetMenuData {
  menu: {
    categories: Category[];
  };
}

export interface Category {
  id: string;
  name: string;
}

export interface CreateCategoryData {
  createCategory: Category;
}

export interface CreateCategoryVariables {
  name: string;
}

export interface GetCategoriesData {
  menu: {
    categories: Category[];
  };
}

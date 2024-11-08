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

export interface UpdateCategoryData {
  updateCategory: {
    id: string;
  };
}

export interface UpdateCategoryVariables {
  name: string;
  updateCategoryId: string;
}

export interface DeleteCategoryData {
  deleteCategory: {
    id: string;
  };
}

export interface DeleteCategoryVariables {
  deleteCategoryId: string;
}

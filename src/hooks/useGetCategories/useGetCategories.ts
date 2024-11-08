import { useQuery } from "@apollo/client";
import { GET_CATEGORIES_QUERY } from "@/domain/schemas/getCategories";
import { GetCategoriesData } from "@/domain/interfaces/category";

const useGetCategories = () => {
  const { data, loading, error, refetch, subscribeToMore } =
    useQuery<GetCategoriesData>(GET_CATEGORIES_QUERY);

  return {
    refetch,
    subscribeToMore,
    categories: data?.menu.categories || [],
    loading,
    error,
  };
};

export default useGetCategories;

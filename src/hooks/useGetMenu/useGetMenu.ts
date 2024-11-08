import { useQuery } from "@apollo/client";
import { GET_MENU_QUERY } from "@/domain/schemas/getMenu";
import { GetMenuData } from "@/domain/interfaces/menu";

const useGetMenu = () => {
  const { data, loading, error, refetch } =
    useQuery<GetMenuData>(GET_MENU_QUERY);

  return {
    refetch,
    menu: data?.menu.categories || [],
    loading,
    error,
  };
};

export default useGetMenu;

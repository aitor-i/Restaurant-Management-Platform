import { TablesData } from "@/domain/interfaces/tables";
import { GET_TABLES_QUERY } from "@/domain/schemas/getTables";
import { useQuery, gql } from "@apollo/client";

const useGetTables = () => {
  const { data, loading, error } = useQuery<TablesData>(GET_TABLES_QUERY);

  return {
    tables: data?.tables || [],
    loading,
    error,
  };
};

export default useGetTables;

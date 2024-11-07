import { TableSubscription } from "@/domain/interfaces/tables";
import { TABLE_STATUS_SUBSCRIPTION } from "@/domain/schemas/getTables";
import { useSubscription } from "@apollo/client";

export const useTableSubscription = () => {
  const { data, loading, error } = useSubscription<TableSubscription>(
    TABLE_STATUS_SUBSCRIPTION,
  );

  return {
    tableState: data?.newTableState,
    loading,
    error,
  };
};

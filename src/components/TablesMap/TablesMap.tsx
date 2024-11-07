import useGetTables from "@/hooks/useGetTables/useGetTables";
import React from "react";
import TableItem from "./TableItem/TableItem";
import { useTableSubscription } from "@/hooks/useTablesSubscription/useTablesSubscription";

export default function TablesMap() {
  const { error, loading, tables } = useGetTables();
  useTableSubscription();

  return (
    <div>
      {error && <p>Error: {error.message}</p>}
      {loading && <p>Loading...</p>}
      <div className="grid md:grid-cols-4 lg:grid-cols-6 grid-cols-3 gap-4 text-gray-950">
        {tables.map((table) => (
          <TableItem key={table.id} table={table} />
        ))}
      </div>
    </div>
  );
}

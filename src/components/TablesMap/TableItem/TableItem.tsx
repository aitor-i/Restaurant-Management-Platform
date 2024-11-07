import React from "react";

import EmptyTable from "../../../../public/empty_table.png";
import WaitingTable from "@/../public/waiting_table.png";
import AttenderTable from "@/../public/attended_table.png";

import { Table } from "@/domain/interfaces/tables";

interface TableItemProps {
  table: Table;
}

export default function TableItem({ table }: TableItemProps) {
  const { id, state } = table;

  const image =
    state === "Empty"
      ? EmptyTable
      : state === "Waiting"
        ? WaitingTable
        : AttenderTable;

  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <img src={image.src} alt={`table-${state}`} className="w-full h-full" />
      <p className="text-center text-customPalette-ivory">{id}</p>
    </div>
  );
}

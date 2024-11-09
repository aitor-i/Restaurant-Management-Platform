import React, { useState } from "react";

import EmptyTable from "../../../../public/empty_table.png";
import WaitingTable from "@/../public/waiting_table.png";
import AttenderTable from "@/../public/attended_table.png";

import { Table } from "@/domain/interfaces/tables";
import Tooltip from "./Tooltip/Tooltip";

interface TableItemProps {
  table: Table;
}

export default function TableItem({ table }: TableItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { id, state, request } = table;

  const image =
    state === "Empty"
      ? EmptyTable
      : state === "Waiting"
        ? WaitingTable
        : AttenderTable;

  const onMouseEnter = () => {
    if (state === "Waiting") {
      setIsHovered(true);
    }
  };

  const onMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative flex flex-col items-center justify-center w-full h-full"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img src={image.src} alt={`table-${state}`} className="w-full h-full" />
      <p className="text-center text-customPalette-ivory">{id}</p>

      {isHovered && <Tooltip requests={request} />}
    </div>
  );
}

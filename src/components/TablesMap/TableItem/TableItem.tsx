import React, { useState } from "react";

import EmptyTable from "../../../../public/empty_table.png";
import WaitingTable from "@/../public/waiting_table.png";
import AttenderTable from "@/../public/attended_table.png";

import { Table } from "@/domain/interfaces/tables";

interface TableItemProps {
  table: Table;
}

export default function TableItem({ table }: TableItemProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { id, state, requests } = table;

  const image =
    state === "Empty"
      ? EmptyTable
      : state === "Waiting"
        ? WaitingTable
        : AttenderTable;

  const onMouseEnter = () => {
    if (state === "Attended") {
      setIsHovered(true);
    }
  };

  const onMouseLeave = () => {
    setIsHovered(false);
  };

  // Calculate total price
  const totalPrice =
    requests?.reduce((sum, order) => sum + order.price, 0) ?? 0;

  return (
    <div
      className="relative flex flex-col items-center justify-center w-full h-full"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <img src={image.src} alt={`table-${state}`} className="w-full h-full" />
      <p className="text-center text-customPalette-ivory">{id}</p>

      {/* Tooltip */}
      {isHovered && (
        <div className="absolute top-0 left-full w-32 ml-2 p-2 bg-white text-black border rounded shadow-lg z-10">
          <h3 className="font-bold mb-2">Orders:</h3>
          {requests && requests.length > 0 ? (
            <ul>
              {requests.map((order, index) => (
                <li key={index}>
                  {order.description} - {order.price}€
                </li>
              ))}
            </ul>
          ) : (
            <p>No orders</p>
          )}
          <p className="mt-2 font-bold">Total: ${totalPrice}</p>
        </div>
      )}
    </div>
  );
}

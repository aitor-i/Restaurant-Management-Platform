import React from "react";

import { OrderRequest } from "@/domain/interfaces/tables";

interface TooltipProps {
  requests: OrderRequest[];
}

export default function Tooltip({ requests }: TooltipProps) {
  const totalPrice =
    requests?.reduce((sum, order) => sum + order.price, 0) ?? 0;

  return (
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
  );
}

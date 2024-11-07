export interface Table {
  id: string;
  state: "Empty" | "Waiting" | "Attended";
  requests: OrderRequest[];
}

export interface OrderRequest {
  id: string;
  description: string;
  price: number;
}

export interface TablesData {
  tables: Table[];
}

export interface TableSubscription {
  newTableState: Table[];
}

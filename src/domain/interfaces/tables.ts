export interface Table {
  id: string;
  state: "Empty" | "Waiting" | "Attended";
  requests: Request[];
}

export interface Request {
  id: string;
  description: string;
  price: number;
}

export interface TablesData {
  tables: Table[];
}

export interface Table {
  id: string;
  state: "Empty" | "Waiting" | "Attended";
}

export interface TablesData {
  tables: Table[];
}

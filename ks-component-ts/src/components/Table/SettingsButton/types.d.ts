import { Column } from "react-table";

export interface SettingsButtonProps {
  columns: Column[];
  setColumnOrder: (values: number[]) => void;
}

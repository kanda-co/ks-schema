import { TableHeaderColumn } from "~/components/Table/types";

export interface SettingsButtonProps {
  columns: TableHeaderColumn[];
  setColumnOrder: (values: number[]) => void;
}

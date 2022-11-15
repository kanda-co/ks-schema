import type { TableHeaderColumn } from "~/components/Table/types";
import type {
  DroppableProvided,
  DroppableStateSnapshot,
} from "react-beautiful-dnd";

export interface DragDropWrapperProps {
  columns: TableHeaderColumn[];
  provided: DroppableProvided;
  snapshot: DroppableStateSnapshot;
}

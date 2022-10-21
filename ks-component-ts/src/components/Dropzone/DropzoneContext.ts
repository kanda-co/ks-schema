import { createContext } from "react";

export interface DropzoneContextValue {
  droppedFiles: [File[]];
}

const DropzoneContext = createContext<DropzoneContextValue>({
  droppedFiles: [[]],
});

DropzoneContext.displayName = "DropzoneContext";

export default DropzoneContext;

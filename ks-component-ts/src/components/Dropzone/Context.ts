import { createContext } from "react";

interface ContextValue {
  droppedFiles: [File[]];
}

const Context = createContext<ContextValue>({
  droppedFiles: [[]],
});

Context.displayName = "DropzoneContext";

export default Context;

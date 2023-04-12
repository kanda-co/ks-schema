const handleResponseName = (entityName: string) =>
  `handle${entityName}Response`;

const serviceAction = (actionName: string, camelCaseEntityName: string) =>
  `export const ${actionName} = createAsyncThunkAction(services.${camelCaseEntityName}.${actionName})`;

const typeOfActions = (actionNames: string[]) =>
  actionNames.map((actionName) => `typeof ${actionName}`).join(' | ');

const reducerForAction = (
  entityName: string,
  actionName: string,
) => `[${actionName}.pending.type]: (state) => ({
      ...state,
      isLoading: true,
      isSubmitting: true,
    }),
    [${actionName}.fulfilled.type]: ${handleResponseName(entityName)},
    [${actionName}.rejected.type]: (args) => {
      // TODO
      console.log(args);
    },
`;

export const slice = (
  entityName: string,
  camelCaseEntityName: string,
  actionNames: string[],
) => `// Imports
import { AsyncThunkAction, createSlice } from "@reduxjs/toolkit";
import { type ${entityName}, services } from "../../";
import { GENERATED_INITIAL_STATE } from "../constants";
import { createAsyncThunkAction, createResponseHandler } from "../helpers";
import type { AsyncThunkReturnType, GeneratedState } from "../types";

// Service methods
${actionNames
  .map((actionName) => serviceAction(actionName, camelCaseEntityName))
  .join('\n')}

export type ${entityName}Return = AsyncThunkReturnType<${
  typeOfActions(actionNames) || 'never'
}>;
export type ${entityName}Entity = ${entityName}Return[0];
export type ${entityName}Params = ${entityName}Return[1];
export type ${entityName}Config = ${entityName}Return[2];

export type ${entityName}AsyncThunkAction = AsyncThunkAction<${entityName}Entity, ${entityName}Params, ${entityName}Config>;

// Reducer
export type ${entityName}State = GeneratedState<${entityName}>;
const initialState: ${entityName}State = GENERATED_INITIAL_STATE;

export const ${handleResponseName(
  entityName,
)} = createResponseHandler<${entityName}State, ${entityName}>();

export const ${camelCaseEntityName}Slice = createSlice({
  name: "${camelCaseEntityName}",
  initialState,
  reducers: {},
  extraReducers: {${actionNames
    .map((actionName) => reducerForAction(entityName, actionName))
    .join('')}},
});

export default ${camelCaseEntityName}Slice.reducer;
`;

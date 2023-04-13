import { getCamelCaseEntityName } from '../helpers';

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

const selector = (entityName: string) => {
  const camelCaseEntityName = getCamelCaseEntityName(entityName);
  return `const ${camelCaseEntityName} = generateSelectors<${entityName}, StringIndexedObject<GeneratedState<${entityName}>>>("${camelCaseEntityName}");`;
};

const selectorTypeImports = (entityNames: string[]) =>
  `import type {${entityNames.join(
    ', ',
  )}} from '../../generated/components/schemas';`;

export const selectors = (
  entityNames: string[],
) => `import {generateSelectors} from '../helpers';
import type { StringIndexedObject } from '../../types';
import type { GeneratedState } from '../types';
export * as app from './app';
${selectorTypeImports(entityNames)}

export const getSelectors = () => {
${entityNames.map(selector).join('\n')}

return {${entityNames.map(getCamelCaseEntityName).join(', ')}}
}`;

export function sliceIndex(entityName: string) {
  return `export { default as ${entityName} } from './${entityName}'`;
}

export const actions = (entityName: string, actionNames: string[]) =>
  `export { ${actionNames.join(', ')} } from './${entityName}';`;

export const slice = (
  entityName: string,
  camelCaseEntityName: string,
  actionNames: string[],
) => `// Imports
import * as toolkit from "@reduxjs/toolkit";
import { type ${entityName}, services } from "../../../";
import { GENERATED_INITIAL_STATE } from "../../constants";
import { createAsyncThunkAction, createResponseHandler } from "../../helpers";
import type { AsyncThunkReturnType, GeneratedState } from "../../types";

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

export type ${entityName}AsyncThunkAction = toolkit.AsyncThunkAction<${entityName}Entity, ${entityName}Params, ${entityName}Config>;

// Reducer
export type ${entityName}State = GeneratedState<${entityName}>;
const initialState: ${entityName}State = GENERATED_INITIAL_STATE;

export const ${handleResponseName(
  entityName,
)} = createResponseHandler<${entityName}State, ${entityName}>();

export const ${camelCaseEntityName}Slice = toolkit.createSlice({
  name: "${camelCaseEntityName}",
  initialState,
  reducers: {},
  extraReducers: {${actionNames
    .map((actionName) => reducerForAction(entityName, actionName))
    .join('')}},
});

export default ${camelCaseEntityName}Slice.reducer;
`;

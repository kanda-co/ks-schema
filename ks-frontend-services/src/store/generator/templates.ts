const getCamelCaseEntityName = (entityName: string) =>
  entityName.charAt(0).toLowerCase() + entityName.slice(1);

const handleResponseName = (entityName: string) =>
  `handle${entityName}Response`;

const serviceAction = (actionName: string, camelCaseEntityName: string) =>
  `export const ${actionName} = createAsyncThunkAction(services.${camelCaseEntityName}.${actionName})`;

const typeOfActions = (actionNames: string[]) =>
  actionNames.map((actionName) => `typeof ${actionName}`).join(' | ');

const reducerForAction = (entityName: string, actionName: string) => `
builder.addCase(${actionName}.pending, (state) => ({
	...state,
	isLoading: true,
	isSubmitting: true,
}));
builder.addCase(${actionName}.fulfilled, ${handleResponseName(entityName)});
builder.addCase(${actionName}.rejected, (state, action) => {
	console.log('Unknown error', action)
	return {
		...state,
		isLoading: false,
		isSubmitting: false,
	}
});
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

function sliceName(entityName: string) {
  return `${entityName}Slice`;
}

function sliceExport(entityName: string) {
  return `${entityName}: ${sliceName(entityName)}`;
}

export function sliceIndex(entityNames: string[]) {
  const camelCaseEntityNames = entityNames.map(getCamelCaseEntityName);

  const exports = camelCaseEntityNames
    .map(
      (entityName) =>
        `
      	import { default as ${entityName}, ${sliceName(
          entityName,
        )} } from './${entityName}'
        export { ${entityName} }
        `,
    )
    .join('\n');

  const defaultExport = `export const slices = { ${camelCaseEntityNames
    .map(sliceExport)
    .join(', ')} }`;

  return [exports, defaultExport].join('\n');
}

export const actions = (entityName: string, actionNames: string[]) =>
  `export { ${actionNames.join(', ')} } from './${entityName}';`;

export const slice = (
  entityName: string,
  camelCaseEntityName: string,
  actionNames: string[],
) => `// Imports
import { type PayloadAction, type AsyncThunkAction, createEntityAdapter } from "@reduxjs/toolkit";
import { createSlice } from "../../toolkit";
import { type ${entityName}, services } from "../../../";
import { GENERATED_INITIAL_STATE } from "../../constants";
import {
  createAsyncThunkAction,
  handleResponse,
} from '../../helpers';
import type { AsyncThunkReturnType, GeneratedState } from "../../types";

// Service methods
${actionNames
  .map((actionName) => serviceAction(actionName, camelCaseEntityName))
  .join('\n')}

// Entity Adapter
const ${camelCaseEntityName}Adapter = createEntityAdapter<${entityName}>()

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
)} = handleResponse<${entityName}State, ${entityName}>;

export const ${camelCaseEntityName}Slice = createSlice({
  name: "${camelCaseEntityName}",
  initialState,
  reducers: {
    fetched: (state: ${entityName}State, action: PayloadAction<${entityName}[]>) => ({
      ...state,
      ...handleResponse(state, action),
      // Don't set fetchedList when using this action, as it's used
      // by InfoEntity
      fetchedList: state.fetchedList,
    }),
  },
  extraReducers: (builder) => {${actionNames
    .map((actionName) => reducerForAction(entityName, actionName))
    .join('')}},
});

export default ${camelCaseEntityName}Slice.reducer;
`;

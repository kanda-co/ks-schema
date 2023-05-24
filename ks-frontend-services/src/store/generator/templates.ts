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
  return `const ${camelCaseEntityName} = generateSelectors<${entityName}, EntityState<${entityName}>>("${camelCaseEntityName}");`;
};

const selectorTypeImports = (entityNames: string[]) =>
  `import type {${entityNames.join(
    ', ',
  )}} from '../../generated/components/schemas';`;

export const selectors = (
  entityNames: string[],
) => `import {generateSelectors} from '../helpers';
import type { StringIndexedObject } from '../../types';
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
import {
  type PayloadAction,
  type AsyncThunkAction,
  type EntityState,
  createEntityAdapter,
} from "@reduxjs/toolkit";
import { createSlice } from "../../toolkit";
import { type ${entityName}, services } from "../../../";
import {
  createAsyncThunkAction,
  createResponseHandler,
} from '../../helpers';
import type { AsyncThunkReturnType } from "../../types";

export const ${camelCaseEntityName}Adapter = createEntityAdapter<${entityName}>({});

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
export type ${entityName}State = EntityState<${entityName}>;

export const ${handleResponseName(
  entityName,
)} = createResponseHandler<${entityName}State, ${entityName}>(${camelCaseEntityName}Adapter);

export const ${camelCaseEntityName}Slice = createSlice({
  name: "${camelCaseEntityName}",
  initialState: ${camelCaseEntityName}Adapter.getInitialState(),
  reducers: {
    fetching: (state: ${entityName}State, action: PayloadAction<undefined>) => ({
      ...state,
      isLoading: true,
    }),
    fetched: ${camelCaseEntityName}Adapter.addMany
  },
});

export default ${camelCaseEntityName}Slice.reducer;
`;

// TODO under fetched
// extraReducers: (builder) => {${actionNames
// .map((actionName) => reducerForAction(entityName, actionName))
// .join('')}},

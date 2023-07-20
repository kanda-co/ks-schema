import { StringIndexedObject } from '../../types';
import { ENTITY_NAME_OVERRIDES } from '../constants';

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

const selector = (entityName: string, entityNameOverride?: string) => {
  const camelCaseEntityName = getCamelCaseEntityName(entityName);
  const entityNameToUse =
    ENTITY_NAME_OVERRIDES[entityName] || entityNameOverride || entityName;

  return `const ${camelCaseEntityName} = generateSelectors<${entityNameToUse}, StringIndexedObject<GeneratedState<${entityNameToUse}>>>("${camelCaseEntityName}", ${camelCaseEntityName}Adapter);`;
};

// Take the entityNames, apply any needed overrides and then make sure the array
// only contains unique values
const typeImports = (entityNames: string[]) =>
  `import type {${entityNames
    .map((entityName) => ENTITY_NAME_OVERRIDES[entityName] || entityName)
    .filter((value, index, array) => array.indexOf(value) === index)
    .join(', ')}} from '../../generated/components/schemas';`;

const selectorAdapterImports = (camelCaseEntityNames: string[]): string =>
  `import { ${camelCaseEntityNames
    .map((entityName) => `${entityName}Adapter`)
    .join(',\n')} } from '../adapters';`;

const adapter = (camelCaseEntityName: string, entityName: string) =>
  `export const ${camelCaseEntityName}Adapter = createEntityAdapter<${
    ENTITY_NAME_OVERRIDES[entityName] || entityName
  }>();`;

export const adapters = (
  entityNames: string[],
  entityNameOverrides: StringIndexedObject<string> = {},
) => {
  const camelCaseEntityNames = entityNames.map(getCamelCaseEntityName);

  return `import { createEntityAdapter } from '@reduxjs/toolkit';
        ${typeImports(
          entityNames.map(
            (entityName) => entityNameOverrides[entityName] || entityName,
          ),
        )}
	${camelCaseEntityNames
    .map((entityName, key) =>
      adapter(
        entityName,
        entityNameOverrides[entityNames[key]] || entityNames[key],
      ),
    )
    .join('\n')}
`;
};

export const selectors = (
  entityNames: string[],
  entityNameOverrides: StringIndexedObject<string> = {},
) => {
  const camelCaseEntityNames = entityNames.map(getCamelCaseEntityName);
  return `import {generateSelectors} from '../helpers';
import type { StringIndexedObject } from '../../types';
import type { GeneratedState } from '../types';
export * as app from './app';
${typeImports(
  entityNames.map(
    (entityName) => entityNameOverrides[entityName] || entityName,
  ),
)}
${selectorAdapterImports(camelCaseEntityNames)}

export const getSelectors = () => {
${entityNames
  .map((entityName) => selector(entityName, entityNameOverrides[entityName]))
  .join('\n')}

return {${camelCaseEntityNames.join(', ')}}
}`;
};

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
  // This is used by action specific reducers
  // to override the service name
  serviceNameOverride?: string,
  // Used for when the entity name is different
  // from the action name. For instance, checkJob, returns JobCreditState
  entityNameOverride?: string,
) => {
  const formattedEntityName = entityNameOverride || entityName;
  return `// Imports
import {
  type PayloadAction,
  type AsyncThunkAction,
} from "@reduxjs/toolkit";
import { createSlice } from "../../toolkit";
import { type ${
    ENTITY_NAME_OVERRIDES[entityName] || entityName
  }, services } from "../../../";
import {
  createAsyncThunkAction,
  createResponseHandler,
} from '../../helpers';
import { GENERATED_STATE } from '../../constants'
import type { AsyncThunkReturnType, GeneratedState } from "../../types";
import { ${camelCaseEntityName}Adapter } from '../../adapters';

// Service methods
${actionNames
  .map((actionName) =>
    serviceAction(actionName, serviceNameOverride || camelCaseEntityName),
  )
  .join('\n')}

export type ${formattedEntityName}Return = AsyncThunkReturnType<${
    typeOfActions(actionNames) || 'never'
  }>;
export type ${formattedEntityName}Entity = ${formattedEntityName}Return[0];
export type ${formattedEntityName}Params = ${formattedEntityName}Return[1];
export type ${formattedEntityName}Config = ${formattedEntityName}Return[2];

export type ${formattedEntityName}AsyncThunkAction = AsyncThunkAction<${formattedEntityName}Entity, ${formattedEntityName}Params, ${formattedEntityName}Config>;

// Reducer
export type ${formattedEntityName}State = GeneratedState<${
    ENTITY_NAME_OVERRIDES[entityName] || formattedEntityName
  }>;

export const ${handleResponseName(
    entityName,
  )} = createResponseHandler<${formattedEntityName}State, ${
    ENTITY_NAME_OVERRIDES[entityName] || entityName
  }>(${camelCaseEntityName}Adapter);

export const ${camelCaseEntityName}Slice = createSlice({
  name: "${camelCaseEntityName}",
  initialState: {
	  ...GENERATED_STATE,
	  ...${camelCaseEntityName}Adapter.getInitialState()
  },
  reducers: {
    reset: (state: ${entityName}State, action: PayloadAction<undefined>) => ({
	    ...GENERATED_STATE,
	    ...${camelCaseEntityName}Adapter.getInitialState()
    }),
    fetching: (state: ${entityName}State, action: PayloadAction<undefined>) => ({
      ...state,
      isLoading: true,
    }),
    fetched: (state: ${entityName}State, action: PayloadAction<${
    ENTITY_NAME_OVERRIDES[entityName] || entityName
  }[]>) => ({
	    ...state,
	    ...${handleResponseName(entityName)}(state, action),
            // Don't set fetchedList when using this action, as it's used
            // by InfoEntity
            fetchedList: state.fetchedList,
    }),
  },
  extraReducers: (builder) => {${actionNames
    .map((actionName) => reducerForAction(entityName, actionName))
    .join('')}},
});

export const { reset, fetching, fetched } = ${camelCaseEntityName}Slice.actions;

export default ${camelCaseEntityName}Slice.reducer;
`;
};

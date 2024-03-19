import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import type { StringIndexedObject } from '../../types';
import * as operations from '../../generated/operations';
import services from '../../service';
import { getOperationKeys, getOperationName } from '../../helpers';
import { actions, adapters, selectors, slice, sliceIndex } from './templates';

const capitalise = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const getCamelCaseEntityName = (entityName: string) =>
  entityName.charAt(0).toLowerCase() + entityName.slice(1);

type EntityServiceResponseSchemas = {
  [service: string]: string;
};

function getEntityServiceResponses(
  entityName: string,
): EntityServiceResponseSchemas {
  // Get directory name
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  // Get entity actions
  const camelCaseEntityName = getCamelCaseEntityName(entityName);
  const entityActions = Object.keys(services[camelCaseEntityName]);

  // Map entity to response schemas
  return entityActions.reduce(
    (responseSchemas: EntityServiceResponseSchemas, actionName: string) => {
      const generatedFileName = __dirname.replace(
        'store/generator',
        `generated/operations/${actionName}.ts`,
      );
      const serviceFile = readFileSync(generatedFileName, 'utf-8');
      return {
        ...responseSchemas,
        [actionName]:
          serviceFile
            ?.split('\n')
            ?.join('')
            ?.split('RequestFunction')
            ?.slice(-1)?.[0]
            ?.split(',')
            ?.slice(-1)?.[0]
            ?.replace(/\s/g, '')
            ?.replace('>;', '') || 'void',
      };
    },
    {},
  );
}

function getUniqueServiceResponses(
  services: EntityServiceResponseSchemas,
): string[] {
  const responses = Object.values(services);
  return responses.filter(
    (schema: string, index: number, schemas: string[]) =>
      schemas.indexOf(schema) === index,
  );
}

export type SingleActionReducer = {
  entity: string;
  action: string;
  actionEntity: string;
  // If true, this reducer is automatically ignored
  onlyActionForEntity?: boolean;
};

function formatSchema(schema: string) {
  if (schema.includes('Array')) {
    return `${schema.replace('Array<schemas.', '').replace('>', '')}`;
  }
  return schema.replace('schemas.', '');
}

function getNonStandardNonVoidEntityServiceResponses(
  responses: EntityServiceResponseSchemas,
  entity: string,
): SingleActionReducer[] {
  const filtered = Object.entries(responses).filter(
    ([_, schema]) =>
      ![`schemas.${entity}`, `Array<schemas.${entity}>`, 'void'].includes(
        schema,
      ),
  );
  if (filtered.length === 0) return [];
  return filtered.map(([service, schema]) => ({
    entity: getCamelCaseEntityName(entity),
    action: capitalise(service),
    actionEntity: formatSchema(schema),
  }));
}

function getStandardOrVoidServiceResponses(
  entityName: string,
  servicesResponses: EntityServiceResponseSchemas,
): string[] {
  return Object.keys(servicesResponses).filter((service) => {
    const schema = servicesResponses[service];
    return [
      `schemas.${entityName}`,
      `Array<schemas.${entityName}>`,
      'void',
    ].includes(schema);
  });
}

function getVoidServiceResponses(
  servicesResponses: EntityServiceResponseSchemas,
): string[] {
  return Object.keys(servicesResponses).filter((service) => {
    const schema = servicesResponses[service];
    return ['void'].includes(schema);
  });
}

// Generate a slice file for a given entity
// that contains all the actions for that entity and the reducer
function generateSlices(entityName: string) {
  // Get directory path
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  // Get entity name in camel case
  const camelCaseEntityName = getCamelCaseEntityName(entityName);

  // Get action names
  const entityServiceResponses = getEntityServiceResponses(entityName);
  const actionNames = getStandardOrVoidServiceResponses(
    entityName,
    entityServiceResponses,
  );

  // Get void action names
  const voidActionNames = getVoidServiceResponses(entityServiceResponses);

  const template = slice(
    entityName,
    camelCaseEntityName,
    actionNames,
    voidActionNames,
  );

  // Determine the output file name
  const fileName = `${camelCaseEntityName}.ts`;

  const outputPath = join(__dirname, `../slices/generated/${fileName}`);

  writeFileSync(outputPath, template, {
    flag: 'w',
  });

  console.log(`Success: ${fileName} generated`);
}

// Generate a slice file for a given entity
// that contains all the actions for that entity and the reducer
function generateSingleReducerSlice(singleActionReducer: SingleActionReducer) {
  // Get directory path
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);

  const { entity, action, actionEntity } = singleActionReducer;

  // Get entity name in camel case
  const camelCaseActionName = getCamelCaseEntityName(action);

  const template = slice(
    actionEntity || action,
    camelCaseActionName,
    [camelCaseActionName],
    [],
    entity,
  );

  // Determine the output file name
  const fileName = `${camelCaseActionName}.ts`;

  const outputPath = join(__dirname, `../slices/generated/${fileName}`);

  writeFileSync(outputPath, template, {
    flag: 'w',
  });

  console.log(`Success: ${fileName} generated`);
}

function generateAdaptersIndex(
  entityNames: string[],
  singleActionReducers: SingleActionReducer[],
) {
  const exports = adapters(
    [...entityNames, ...singleActionReducers.map(({ action }) => action)],
    singleActionReducers.reduce(
      (final: StringIndexedObject, current: SingleActionReducer) => ({
        ...final,
        [current.action]: current.actionEntity,
      }),
      {},
    ),
  );

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const outputPath = join(__dirname, `../adapters/index.ts`);

  writeFileSync(outputPath, exports, {
    flag: 'w',
  });

  console.log(`Success: adapters generated`);
}

function generateSlicesIndex(
  entityNames: string[],
  singleActionReducers: SingleActionReducer[],
) {
  const exports = sliceIndex([
    ...entityNames,
    // Create adapters for the single action reducers
    ...singleActionReducers.map(({ action }) => action),
  ]);

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const outputPath = join(__dirname, `../slices/generated/index.ts`);

  writeFileSync(outputPath, exports, {
    flag: 'w',
  });

  console.log(`Success: index.ts generated`);
}

function generateSelectorsIndex(
  entityNames: string[],
  singleActionReducers: SingleActionReducer[],
) {
  const exports = selectors(
    [...entityNames, ...singleActionReducers.map(({ action }) => action)],
    singleActionReducers.reduce(
      (final: StringIndexedObject, current: SingleActionReducer) => ({
        ...final,
        [current.action]: current.actionEntity,
      }),
      {},
    ),
  );

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const outputPath = join(__dirname, `../selectors/index.ts`);

  writeFileSync(outputPath, exports, {
    flag: 'w',
  });

  console.log(`Success: selectors generated`);
}

function generateActions(
  entityNames: string[],
  singleActionReducers: SingleActionReducer[],
) {
  const standardActionExports = entityNames
    .map((entityName) => {
      const entityServiceResponses = getEntityServiceResponses(entityName);
      const actionNames = getStandardOrVoidServiceResponses(
        entityName,
        entityServiceResponses,
      );
      return actions(getCamelCaseEntityName(entityName), actionNames);
    })
    .join('');

  const exports = [
    ...standardActionExports,
    ...singleActionReducers.map(({ action }) => {
      const camelCaseActionName = getCamelCaseEntityName(action);
      return actions(camelCaseActionName, [camelCaseActionName]);
    }),
  ].join('');

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const outputPath = join(__dirname, `../slices/generated/actions.ts`);

  writeFileSync(outputPath, exports, {
    flag: 'w',
  });

  console.log(`Success: actions.ts generated`);
}

const allEntities = getOperationKeys(operations).map((key) =>
  getOperationName(key, true),
);

const voidOnlyEntities = allEntities.reduce(
  (final: string[], entity: string) => {
    const responses = getUniqueServiceResponses(
      getEntityServiceResponses(entity),
    );
    if (responses.length !== 1) return final;
    if (responses[0] !== 'void') return final;
    final.push(entity);
    return final;
  },
  [],
);

const nonMatchOnlyEntities = allEntities.reduce(
  (final: string[], entity: string) => {
    const responses = getUniqueServiceResponses(
      getEntityServiceResponses(entity),
    );
    if (responses.length === 1 && responses[0] === 'void') return final;
    const matchedResponses = responses.filter(
      (response: string) =>
        response === `schemas.${entity}` ||
        response === `Array<schemas.${entity}>`,
    );
    if (matchedResponses.length >= 1) return final;
    final.push(entity);
    return final;
  },
  [],
);

const standardEntities = allEntities.filter(
  (entity: string) =>
    !voidOnlyEntities.includes(entity) &&
    !nonMatchOnlyEntities.includes(entity),
);

const singleActionReducers = allEntities.reduce(
  (final: SingleActionReducer[], entityName: string) => {
    const entityResponses = getEntityServiceResponses(entityName);
    const uniqueResponses = getNonStandardNonVoidEntityServiceResponses(
      entityResponses,
      entityName,
    );
    if (uniqueResponses.length === 0) return final;
    return [...final, ...uniqueResponses];
  },
  [],
);

standardEntities.forEach(generateSlices);
singleActionReducers.forEach(generateSingleReducerSlice);
generateAdaptersIndex(standardEntities, singleActionReducers);
generateSlicesIndex(standardEntities, singleActionReducers);
generateActions(standardEntities, singleActionReducers);
generateSelectorsIndex(standardEntities, singleActionReducers);

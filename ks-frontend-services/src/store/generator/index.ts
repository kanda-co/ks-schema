import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import type { StringIndexedObject } from '../../types';
import * as operations from '../../generated/operations';
import services from '../../service';
import { getOperationKeys, getOperationName } from '../../helpers';
import { actions, adapters, selectors, slice, sliceIndex } from './templates';
import { filterActions } from './helpers';
import { SINGLE_ACTION_REDUCERS } from '../constants';

const getCamelCaseEntityName = (entityName: string) =>
  entityName.charAt(0).toLowerCase() + entityName.slice(1);

// Generate a slice file for a given entity
// that contains all the actions for that entity and the reducer
function generateSlices(entityName: string) {
  const camelCaseEntityName = getCamelCaseEntityName(entityName);

  const actionNames = filterActions(Object.keys(services[camelCaseEntityName]));

  const template = slice(entityName, camelCaseEntityName, actionNames);

  // Determine the output file name
  const fileName = `${camelCaseEntityName}.ts`;

  const __filename = fileURLToPath(import.meta.url);

  const __dirname = dirname(__filename);
  const outputPath = join(__dirname, `../slices/generated/${fileName}`);

  writeFileSync(outputPath, template, {
    flag: 'w',
  });

  console.log(`Success: ${fileName} generated`);
}

// Generate slices for single action reducers, such as jobCompanyInfo
// These reducers are created solely for the purpose of storing the result
// of these API calls where the entity does not match up to an entity that
// we generate slices for
function generateActionSpecificSlices() {
  SINGLE_ACTION_REDUCERS.forEach(({ entity, action, actionEntity }) => {
    const camelCaseActionName = getCamelCaseEntityName(action);
    const camelCaseActionEntityName = getCamelCaseEntityName(
      actionEntity || '',
    );

    const template = slice(
      actionEntity || action,
      camelCaseActionName,
      [camelCaseActionName],
      entity,
    );

    // Determine the output file name
    const fileName = `${camelCaseActionName}.ts`;

    const __filename = fileURLToPath(import.meta.url);

    const __dirname = dirname(__filename);
    const outputPath = join(__dirname, `../slices/generated/${fileName}`);

    writeFileSync(outputPath, template, {
      flag: 'w',
    });

    console.log(`Success: ${fileName} generated`);
  });
}

function generateSlicesIndex(entityNames: string[]) {
  const exports = sliceIndex([
    ...entityNames,
    // Create adapters for the single action reducers
    ...SINGLE_ACTION_REDUCERS.map(({ action }) => action),
  ]);

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const outputPath = join(__dirname, `../slices/generated/index.ts`);

  writeFileSync(outputPath, exports, {
    flag: 'w',
  });

  console.log(`Success: index.ts generated`);
}

function generateActions(entityNames: string[]) {
  const camelCaseEntityNames = entityNames.map(getCamelCaseEntityName);

  const serviceActionNames = camelCaseEntityNames.reduce(
    (final, entityName) => ({
      ...final,
      [entityName]: Object.keys(services[entityName]),
    }),
    {} as StringIndexedObject<string[]>,
  );

  const standardActionExports = Object.keys(serviceActionNames)
    .map((entityName) => {
      const actionNames = filterActions(serviceActionNames[entityName]);
      return actions(entityName, actionNames);
    })
    .join('');

  const exports = [
    ...standardActionExports,
    ...SINGLE_ACTION_REDUCERS.map(({ action }) => {
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

function generateSelectorsIndex(entityNames: string[]) {
  const exports = selectors([
    ...entityNames,
    // Create selectors for the single action reducers
    ...SINGLE_ACTION_REDUCERS.map(({ action }) => action),
  ]);

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const outputPath = join(__dirname, `../selectors/index.ts`);

  writeFileSync(outputPath, exports, {
    flag: 'w',
  });

  console.log(`Success: selectors generated`);
}

function generateAdaptersIndex(entityNames: string[]) {
  const exports = adapters([
    ...entityNames,
    // Create adapters for the single action reducers
    ...SINGLE_ACTION_REDUCERS.map(({ action }) => action),
  ]);

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const outputPath = join(__dirname, `../adapters/index.ts`);

  writeFileSync(outputPath, exports, {
    flag: 'w',
  });

  console.log(`Success: adapters generated`);
}

const entityNames = getOperationKeys(operations)
  .map((key) => getOperationName(key, true))
  .filter(
    (name) =>
      [
        'Webhook',
        'Task',
        'InfoCache',
        'InfoCustomer',
        'InfoDirector',
        'InfoHealth',
        'InfoPartner',
        'InfoRedirect',
        'InfoValidation',
      ].indexOf(name) === -1,
  );

entityNames.forEach(generateSlices);
generateActionSpecificSlices();
generateAdaptersIndex(entityNames);
generateSlicesIndex(entityNames);
generateActions(entityNames);
generateSelectorsIndex(entityNames);

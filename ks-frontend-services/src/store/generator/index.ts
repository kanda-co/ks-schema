import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import type { StringIndexedObject } from '../../types';
import * as operations from '../../generated/operations';
import services from '../../service';
import { getOperationKeys, getOperationName } from '../../helpers';
import { actions, selectors, slice, sliceIndex } from './templates';

const getCamelCaseEntityName = (entityName: string) =>
  entityName.charAt(0).toLowerCase() + entityName.slice(1);

function generateSlices(entityName: string) {
  const camelCaseEntityName = getCamelCaseEntityName(entityName);

  const actionNames = Object.keys(services[camelCaseEntityName]);

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

function generateSlicesIndex(entityNames: string[]) {
  const exports = sliceIndex(entityNames);

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

  const exports = Object.keys(serviceActionNames)
    .map((entityName) => {
      const actionNames = serviceActionNames[entityName];
      return actions(entityName, actionNames);
    })
    .join('');

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const outputPath = join(__dirname, `../slices/generated/actions.ts`);

  writeFileSync(outputPath, exports, {
    flag: 'w',
  });

  console.log(`Success: actions.ts generated`);
}

function generateSelectorsIndex(entityNames: string[]) {
  const exports = selectors(entityNames);

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const outputPath = join(__dirname, `../selectors/index.ts`);

  writeFileSync(outputPath, exports, {
    flag: 'w',
  });

  console.log(`Success: selectors generated`);
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
        'InfoHealth',
        'InfoRedirect',
        'InfoValidation',
      ].indexOf(name) === -1,
  );

entityNames.forEach(generateSlices);
generateSlicesIndex(entityNames);
generateActions(entityNames);
generateSelectorsIndex(entityNames);

import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import * as operations from '../../generated/operations';
import services from '../../service';
import { getOperationKeys, getOperationName } from '../../helpers';
import { slice, sliceIndex } from './templates';

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
  const outputPath = join(__dirname, `../slices/${fileName}`);

  writeFileSync(outputPath, template, {
    flag: 'w',
  });

  console.log(`Success: ${fileName} generated`);
}

function slicesIndex(entityNames: string[]) {
  const exports = entityNames
    .map(getCamelCaseEntityName)
    .map(sliceIndex)
    .join('\n');

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const outputPath = join(__dirname, `../slices/index.ts`);

  writeFileSync(outputPath, exports, {
    flag: 'w',
  });

  console.log(`Success: index.ts generated`);
}

const entityNames = getOperationKeys(operations).map((key) =>
  getOperationName(key, true),
) as unknown as string[];

entityNames.forEach(generateSlices);
slicesIndex(entityNames);

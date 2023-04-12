import { writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import * as operations from '../../generated/operations';
import services from '../../service';
import { getOperationKeys, getOperationName } from '../../helpers';
import { slice } from './templates';

function generateStore(entityName: keyof typeof services) {
  const camelCaseEntityName =
    entityName.charAt(0).toLowerCase() + entityName.slice(1);

  const actionNames = Object.keys(services[camelCaseEntityName]);

  // Template string for the output file
  const template = slice(entityName, camelCaseEntityName, actionNames);

  // Determine the output file name
  const fileName = `${camelCaseEntityName}.ts`;

  // Determine the output file path
  const __filename = fileURLToPath(import.meta.url);

  const __dirname = dirname(__filename);
  const outputPath = join(__dirname, `../slices/${fileName}`);

  // Write the generated content to the output file
  writeFileSync(outputPath, template, {
    flag: 'w',
  });

  console.log(`Success: ${fileName} generated`);
}

const operationNames = getOperationKeys(operations).map((key) =>
  getOperationName(key, true),
) as unknown as (keyof typeof services)[];

operationNames.forEach(generateStore);

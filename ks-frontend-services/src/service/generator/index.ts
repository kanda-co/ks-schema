import { readFileSync, writeFileSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import * as operations from '../../generated/operations';
import * as externalServices from '../external/index';
import {
  SERVICE_FILE_NAME,
  HEADER_FILE_NAME,
  SERVICE_COMMENT_FILE_NAME,
} from './constants';
import {
  formatAllServicesExport,
  formatExternalServicesDeclarations,
  formatExternalServicesExport,
  formatServiceDefinitionLine,
  getOperationKeys,
} from './helpers';

/**
 * This script will read the available services from ks-schema and generate a module
 * at SERVICE_FILE_NAME that will be bundled by the rest of the ks-frontend-services
 * module
 */

try {
  /**
   * Add the external services to the file
   */
  let fileContents = "import * as externalServices from './external';\n";
  /**
   * The header is stored in a template file to make changing imports etc easier
   * and more maintainable
   */
  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const header = readFileSync(join(__dirname, HEADER_FILE_NAME), 'utf-8');
  fileContents += `${header}\n`;

  /**
   * This handles the actual definition of each service as a const. Example output:
   *     const job = operations['jobServiceBuilder'](serverFunctions);
   */
  const operationKeys = getOperationKeys(operations);
  const operationLines = operationKeys.map(formatServiceDefinitionLine);

  /**
   * Add some spacing between the service definitions and the exports
   */
  fileContents += `${operationLines.join('\n')}\n\n`;

  /**
   * Adds a comment to the file to explain what's going on
   */
  const serviceComment = readFileSync(
    join(__dirname, SERVICE_COMMENT_FILE_NAME),
    'utf-8',
  );

  const externalServicesExport = formatExternalServicesExport(externalServices);

  fileContents += formatExternalServicesDeclarations(externalServices);

  fileContents += serviceComment;

  /**
   * This adds exports for each individual service and also a default object export
   * that includes each service mapped to its name. Both are provided so that an
   * individual service can be imported and a 'services' object.
   */
  fileContents += [
    formatAllServicesExport(
      operationKeys,
      'const services = ',
      externalServicesExport,
    ),
    formatAllServicesExport(operationKeys, 'export ', externalServicesExport),
  ].join('\n\n');

  fileContents += '\n\nexport default services;';

  /**
   * Write to the file now the file has been built
   */
  writeFileSync(join(__dirname, SERVICE_FILE_NAME), fileContents, {
    flag: 'w',
  });

  console.log('Success: Service module generated');
} catch (error) {
  console.error('Error: Something went wrong', error);
}

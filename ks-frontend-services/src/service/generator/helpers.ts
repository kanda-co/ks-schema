import { StringIndexedObject } from '../../types';
import { EXCLUDED_OPERATION_KEYS, SERVICE_BUILDER_TAG } from './constants';
import * as operations from '../../generated/operations';

/**
 * Returns a string array of operation keys that we want to define services for.
 * This excludes some generic operations that have no corresponding services
 * @param currentOperations
 */
export function getOperationKeys(
  currentOperations: StringIndexedObject,
): string[] {
  const keys = Object.keys(currentOperations);

  return keys.filter((key) => EXCLUDED_OPERATION_KEYS.indexOf(key) === -1);
}

/**
 * Gets the operation name from the key. For example: 'jobServiceBuilder'
 * becomes 'job'
 * @param operationKey
 */
export function getOperationName(operationKey: string): string {
  return operationKey.replace(SERVICE_BUILDER_TAG, '');
}

/**
 * Creates an object containing the method key alongside its method.
 * Example: {authUser: { me: { key: 'authUser.me', method: () => (...) } }  ...}
 * @param operationName
 * @param methods
 * @param methodKey
 */
function formatServiceMethod(
  operationName: string,
  methods: Record<string, Function>,
  methodKey: string,
): string {
  return Object.keys(methods)
    .map(
      (method) => `    ${method}: {
      key: '${operationName}.${method}',
      method: ${methodKey}.${method},
    },`,
    )
    .join('\n');
}

/**
 * Creates a line that defines an individual service with each method wrapped
 * using formatServiceMethod
 * @param operationKey
 */
export function formatServiceDefinitionLine(operationKey: string): string {
  const operationName = getOperationName(operationKey);
  const methods = operations[operationKey](() => {});

  const methodKey = `${operationName}Methods`;

  let formattedOperation = `const ${methodKey} = operations['${operationKey}'](serverFunctions);`;

  formattedOperation += '\n';

  formattedOperation += [
    `const ${operationName} = {`,
    formatServiceMethod(operationName, methods, methodKey),
    '};',
  ].join('\n');

  return formattedOperation;
}

/**
 * Formats the exports for the services. A prefix param is provided so that
 * both the individual services can be exported as well as an object containing
 * them all
 * @param operationKeys
 * @param prefix
 */
export function formatAllServicesExport(
  operationKeys: string[],
  prefix: string,
): string {
  const formattedOperations = operationKeys.map((key) => {
    const operationName = getOperationName(key);

    return `  ${operationName},`;
  });

  let formattedServicesObject = `${prefix}{\n`;

  formattedServicesObject += formattedOperations.join('\n');

  formattedServicesObject += '\n};';

  return formattedServicesObject;
}

import { StringIndexedObject } from '../../types';
import * as operations from '../../generated/operations';
import { getOperationName } from '../../helpers';

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
      method: (operationArgs?: OperationArgs) => ${methodKey}(serverFunctions(operationArgs)).${method},
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
  const methods = (operations as StringIndexedObject)[operationKey](() => {});

  const methodKey = `${operationName}Methods`;

  let formattedOperation = `const ${methodKey} = operations['${operationKey}'];`;

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
  extraImports = '',
): string {
  const formattedOperations = operationKeys.map((key) => {
    const operationName = getOperationName(key);

    return `  ${operationName},`;
  });

  let formattedServicesObject = `${prefix}{\n`;

  formattedServicesObject += formattedOperations.join('\n');

  if (extraImports) {
    formattedServicesObject += `\n${extraImports}\n`;
  }

  formattedServicesObject += '\n};';

  return formattedServicesObject;
}

/**
 * Formats the external services declarations
 */
export const formatExternalServicesDeclarations = (
  externalServices: StringIndexedObject,
): string =>
  Object.keys(externalServices)
    .map((key) => `const ${key} = externalServices['${key}'];`)
    .join('\n') + '\n\n';

/**
 * Formats the external services exports
 */
export const formatExternalServicesExport = (
  externalServices: StringIndexedObject,
): string =>
  Object.keys(externalServices)
    .map((key) => `  ${key},`)
    .join('\n');

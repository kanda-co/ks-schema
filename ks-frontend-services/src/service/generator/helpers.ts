import { readFileSync } from 'fs';
import { join, dirname } from 'path';
import { StringIndexedObject } from '../../types';
import {
  EXCLUDED_OPERATION_KEYS,
  GENERATED_FOLDER_NAME,
  SERVICE_BUILDER_TAG,
} from './constants';
import * as operations from '../../generated/operations';
import { capitalise } from '../../helpers';
import { fileURLToPath } from 'url';

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
  const methods = (operations as StringIndexedObject)[operationKey](() => {});

  const methodKey = `${operationName}Methods`;

  let formattedOperation = `const ${methodKey} = operations['${operationKey}'](serverFunctions);`;

  formattedOperation += '\n';

  formattedOperation += [
    `const ${operationName} = {`,
    formatServiceMethod(operationName, methods, methodKey),
    '};',
  ].join('\n');

  formatServiceHooks(operationKey);

  return formattedOperation;
}

export const formatServiceHook = (operationName: string, methodKey: string) => {
  let hook = '';
  const hookName = `use${capitalise(operationName)}${capitalise(methodKey)}`;
  const requestFunctionType = `${capitalise(methodKey)}RequestFunction`;
  const paramsType = `${capitalise(methodKey)}Params`;
  const requestFunctionImport = `import type { ${requestFunctionType} } from '../generated/operations/${methodKey}';`;

  const __filename = fileURLToPath(import.meta.url);
  const __dirname = dirname(__filename);
  const operationFile = `${GENERATED_FOLDER_NAME}/operations/${methodKey}.ts`;

  const operationFileContents = readFileSync(
    join(__dirname, operationFile),
    'utf-8',
  );

  const hasParams = operationFileContents.indexOf(paramsType) !== -1;

  console.log(operationFileContents);

  const imports = [
    "import services from '../service';",
    "import useSubmit from '../useSubmit';",
    requestFunctionImport,
  ];

  hook += `export default function ${hookName}() {\n`;
  hook += `return useSubmit<\n`;
  hook += `TODO, TODO, TODO, TODO\n`;
  hook += `>(services.${operationName}.${methodKey});\n`;
  hook += `}\n`;

  console.log(operationFile);
};

export const formatServiceHooks = (operationKey: string): string => {
  const operationName = getOperationName(operationKey);
  let originalMethods;
  let methods = (originalMethods = (operations as StringIndexedObject)[
    operationKey
  ](() => {}));

  // Start temp filtering
  if (operationName !== 'job') {
    return '';
  }
  methods = Object.keys(methods)
    .filter((key) => key === 'payoutJob')
    .reduce((acc, key) => {
      acc[key] = originalMethods[key];
      return acc;
    }, {} as StringIndexedObject);
  // End temp filtering

  Object.keys(methods).forEach((method) => {
    formatServiceHook(operationName, method);
  });

  console.log({ operationName, methods });

  return 'hello';
};

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

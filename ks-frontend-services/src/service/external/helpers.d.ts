import { TaskEither } from 'fp-ts/lib/TaskEither';
import type { StringIndexedObject } from '../../types';
export declare const createGetter: (baseUrl: string) => (url: string) => TaskEither<Error, Response>;
export declare const createPoster: (baseUrl: string, auth?: boolean) => (url: string, body?: StringIndexedObject) => TaskEither<Error, Response>;

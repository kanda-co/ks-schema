import type { StringIndexedObject } from '../../types';
import { type PathKey } from '../../';
export interface AppSelectors<State extends StringIndexedObject, Pages extends StringIndexedObject> {
    getRoot: (state: State) => State;
    getApp: (state: State) => State['app'];
    getPathKey: (state: State) => PathKey<Pages>;
    getIsLoading: (state: State) => boolean;
}
export declare const getAppSelectors: <State extends StringIndexedObject<any>, Pages extends StringIndexedObject<any>>() => AppSelectors<State, Pages>;

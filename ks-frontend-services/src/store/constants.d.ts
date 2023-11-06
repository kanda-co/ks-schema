import { GeneratedState } from './types';
export declare const GENERATED_STATE: Omit<GeneratedState<{}>, 'entities' | 'ids'>;
export declare const INFO_ENTITY_KEY = "infoEntity.getInfoEntity";
export declare const IGNORED_ACTIONS: string[];
export type SingleActionReducers = {
    entity: string;
    action: string;
    actionEntity?: string;
};
export declare const VOID_ACTIONS: string[];
export declare const SINGLE_ACTION_REDUCERS: SingleActionReducers[];
export declare const ENTITY_NAME_OVERRIDES: {
    InfoEnterprise: string;
};

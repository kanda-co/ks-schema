import { GeneratedState } from './types';
export declare const GENERATED_STATE: Omit<
  GeneratedState<{}>,
  'entities' | 'ids'
>;
export declare const INFO_ENTITY_KEY = 'infoEntity.getInfoEntity';
export declare const IGNORED_ACTIONS: string[];
export interface ActionSpecificReducer {
  entity: string;
  action: string;
}
export declare const ACTION_SPECIFIC_REDUCERS: ActionSpecificReducer[];

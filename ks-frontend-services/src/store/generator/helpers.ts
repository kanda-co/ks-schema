import { IGNORED_ACTIONS } from '../constants';

export const filterActions = (actionNames: string[]) =>
  actionNames.filter((action) => IGNORED_ACTIONS.indexOf(action) === -1);

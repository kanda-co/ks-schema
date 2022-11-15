import { ACTIONS } from "../../constants";
import {
  MOVE_LEFT_ITEM_PROPS,
  MOVE_RIGHT_ITEM_PROPS,
  HIDE_COLUMN_PROPS,
} from "./constants";

/**
 * Creates move right item
 */
export const moveRightItem = (id: number) => ({
  ...MOVE_RIGHT_ITEM_PROPS,
  action: { type: ACTIONS.MOVE_RIGHT, payload: [1, id] },
});

/**
 * Creates move left item
 */
export const moveLeftItem = (id: number) => ({
  ...MOVE_LEFT_ITEM_PROPS,
  action: { type: ACTIONS.MOVE_LEFT, payload: [-1, id] },
});

/**
 * Creates hide column item
 */
export const hideColumn = (id: number) => ({
  ...HIDE_COLUMN_PROPS,
  action: { type: ACTIONS.HIDE, payload: id },
});

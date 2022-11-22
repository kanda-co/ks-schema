import type { KeyboardEvent } from "react";

/**
 * Disables default behavior on enter key
 * @param {Event} e onKeyDown event
 * @returns {boolean}
 */
export const preventDefaultOnEnter = (e: KeyboardEvent) => {
  if (e.keyCode === 13 && !e.shiftKey) {
    // prevent default behavior
    e.preventDefault();
    return false;
  }

  return true;
};

import { useEffect, type MouseEvent as ReactMouseEvent } from "react";
import { useOuterClick } from "@kanda-libs/ks-design-library";

export type ClickEventListenerHook = void;

export default function useClickEventListener(
  handleClose: () => void,
  name: string,
  multiple: boolean
): ClickEventListenerHook {
  useEffect(() => {
    /**
     * Click listener to close modal on selection if the selection field is a
     * single selection field only
     * @param e - the click event
     */
    const clickListener = (e: ReactMouseEvent) => {
      const targetId = e.currentTarget.id;
      if (targetId.includes(`${name}-`)) {
        handleClose();
      }
    };
    // Attach event listener if not multiple selection
    if (!multiple) {
      window.addEventListener("click", (e: MouseEvent) => {
        clickListener(e as unknown as ReactMouseEvent);
      });
    }
    // Clean up - remove event listener if present
    return () => {
      if (!multiple) {
        window.removeEventListener("click", (e: MouseEvent) => {
          clickListener(e as unknown as ReactMouseEvent);
        });
      }
    };
  }, [multiple, name, handleClose]);
}

import type { StringIndexedObject } from '~/types';

export interface HelpCrunchHook {
  openChat: () => void;
  closeChat: () => void;
  showNewMessage: (message: string) => void;
  showProactiveMessage: (id: string | number) => void;
  update: (settings: StringIndexedObject) => void;
}

/**
 * Hook for using helpcrunch Javascript API Methods.
 *
 * Docs:
 * - Methods:
 *   https://docs.helpcrunch.com/developers/methods
 */
export default function useHelpcrunch(): HelpCrunchHook {
  const openChat = () => {
    // If helpcrunch isn't available, return
    if (!window.HelpCrunch) return;
    // show chat window
    window.HelpCrunch('openChat');
  };

  const closeChat = () => {
    // If helpcrunch isn't available, return
    if (!window.HelpCrunch) return;
    // hide chat window
    window.HelpCrunch('closeChat');
  };

  const showNewMessage = (message: string) => {
    // If helpcrunch isn't available, return
    if (!window.HelpCrunch) return;
    window.HelpCrunch('typeUserMessage', message);
  };

  const showProactiveMessage = (id: string | number): void => {
    // If helpcrunch isn't available, return
    if (!window.HelpCrunch) return;
    window.HelpCrunch('sendProactiveChatAutoMessage', id as string);
  };

  /**
   * Function calls the HelpCrunch update method
   * @param {Object} - Settings/Data (HelpCrunch setings) to update HelpCrunch with,
   * allowed attributes contained in Attributes & Objects docs link above
   */
  const update = (settings: StringIndexedObject) => {
    // If helpcrunch isn't available, return
    if (!window.HelpCrunch) return;
    // Check the settings passed is an object - if so, run the update method
    if (
      typeof settings === 'object' &&
      settings !== null &&
      !Array.isArray(settings)
    ) {
      window.HelpCrunch('updateUser', settings);
    }
  };

  return {
    openChat,
    closeChat,
    showNewMessage,
    showProactiveMessage,
    update,
  };
}

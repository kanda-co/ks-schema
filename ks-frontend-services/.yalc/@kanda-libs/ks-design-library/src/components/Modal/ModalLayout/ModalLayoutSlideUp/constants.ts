import type { StringIndexedObject } from '~/types';

export const CLASS_NAMES = {
  container: `flex flex-1 flex-col fixed right-0 bottom-0 w-full`,
  wrapper: 'flex flex-1 w-full flex-col relative p-6 pt-10',
  header: 'absolute top-0 right-0 px-3 py-4 z-10',
  space: 'w-full opacity-0',
  bgBase:
    'absolute top-0 -bottom-10 right-0 left-0 transform skew-y-slide-up origin-full bg-neutral-000',
};

export const VARIANTS: StringIndexedObject<string> = {
  MARKETING: 'marketing',
  DEFAULT: 'default',
};

export const SPACE =
  'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAaoAAAAcCAYAAAAwa/sqAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAIpSURBVHgB7dxdjoIwFIbh4k/inbgCu/9NeOmi1DA9DdUjqY5YgULfJ2FaxQgXE79pv4yVAQBgYKfTSYZ6t9vVMrler7ZpGpnXVVXt3XiQ+Wq1knkt59xh3bypDAAAH9Bhc7vddJgYFzZ+dEFzlLF9vm7D6H7+CwQVAJTkfD7LYOVHz7CRlU9txkdQAcDc6LDpsYVmzHRhk4KgAoCxJfQ1KVtoc0VQAcC3XOCM3deUiKACUDa3jWZlfBE2YVWTS19TIoIKwPyFsCmgrykRQQVgepEttKewCVtohr6mRAQVgN+gr8FACCoAD7EtNHlMX4MJEVTA0tDXYGEIKiA3b7bQ6GtQIoIKGAJ9DfAzBBXwCn0NkAWCCnmTr5pxKxP5Z0wJBH8IFwZ+dGFx/x2OnV+v11bGSF/j5/Q1QPaajQEG9mnYhOf1+cvlElYy4bDt24awufc1nfN+lGuG9wrX08K19P0AyAtBhY+039YsK5PYh3vlwsY/7hk2x85o1Wv84+12+zZs9L2o+wGwIARVQWJhoz7Yn8Imct6qUYfJsZ3vI+f9QdgASEFQzUhqX2PiYbN/Mdev7bWF1rkmACQhqEZGXwMA/RBUX5igr2ELDUCxigyqsKoR9DUAkLfZBlVKX6NWNcIa+hoAyNakQRW20Mbua/5b1ehr6fsBAIwvOahS+hrzCA/6GgBA1GbKviYETXg/wgYA0CUrqnd9zaEdh+hrGgMAy8Bf0QP6A9tBPu/advbCAAAAAElFTkSuQmCC';

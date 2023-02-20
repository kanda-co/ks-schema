import {
  PRIVACY_POLICY_URL,
  TERMS_AND_CONDITIONS_URL,
  COOKIE_POLICY_URL,
} from '~/config';

export const COPYRIGHT = '© 2021 Kanda';

export const LINK = [
  {
    label: 'Privacy policy',
    url: PRIVACY_POLICY_URL,
    target: '_blank',
  },
  {
    label: 'Terms & Conditions',
    url: TERMS_AND_CONDITIONS_URL,
    target: '_blank',
  },
  {
    label: 'Cookie policy',
    url: COOKIE_POLICY_URL,
    target: '_blank',
  },
];

export const CLASS_NAMES = {
  container: 'h-60 overflow-hidden',
  contentContainer:
    'absolute bottom-0 left-0 right-0 flex flex-1 px-8 2xl:px-52',
  wrapper:
    'flex flex-1 w-full flex-row max-w-screen-lg 2xl:max-w-screen-2xl mx-auto',
  content: 'flex flex-row items-center mb-16 px-3',
  shadow: 'w-full h-60 bg-neutral-50 transform skew-y-slide-up origin-full',
  copyright: 'text-style-g-em text-neutral-600',
  link: 'text-style-g-em text-neutral-500 ml-12',
};

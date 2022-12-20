import { MouseEvent } from 'react';

export type StringIndexedObject<T = any> = {
  [key: string]: T;
};

export type Variant = string | boolean | number;
export type Variants = StringIndexedObject<Variant>;

export type ClassNames = StringIndexedObject<
  StringIndexedObject<string | StringIndexedObject<string>>
>;

export interface WindowWithHelpCrunch extends Window {
  HelpCrunch?: (name: string, options?: StringIndexedObject | string) => void;
}

export type ButtonOnClick = (event: MouseEvent<HTMLButtonElement>) => void;

export type PostiveOrNegativeNumber = number | never;

declare global {
  interface Window {
    HelpCrunch: (name: string, options?: StringIndexedObject | string) => void;
  }
}

export type EventType =
  | 'page-view'
  | 'signup-attempted'
  | 'signup-succeeded'
  | 'signup-failed'
  | 'login-attempted'
  | 'login-succeeded'
  | 'login-failed'
  | 'button-interacted'
  | 'form-filled'
  | 'form-submitted'
  | 'api-attempted'
  | 'api-succeeded'
  | 'api-failed'
  | 'comms-sent'
  | 'onboarding-registered'
  | 'onboarding-legacy'
  | 'onboarding-billing-subscribed'
  | 'onboarding-billing-referred'
  | 'onboarding-billing-cancelled'
  | 'onboarding-director-info-provided'
  | 'onboarding-director-verified'
  | 'onboarding-director-pending'
  | 'onboarding-director-failed'
  | 'onboarding-onboarded'
  | 'onboarding-insurance-uploaded'
  | 'onboarding-contract-signed'
  | 'onboarding-completed'
  | 'onboarding-verified'
  | 'onboarding-rejected'
  | 'onboarding-declined';

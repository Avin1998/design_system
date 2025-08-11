// UI-related constants
export const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  SUCCESS: 'success',
  DANGER: 'danger',
  WARNING: 'warning',
  GHOST: 'ghost',
  BACK: 'back',
  INTEGRATION: 'integration',
} as const;

export const INPUT_TYPES = {
  TEXT: 'text',
  EMAIL: 'email',
  PASSWORD: 'password',
  SEARCH: 'search',
} as const;

export const MODAL_TYPES = {
  DEFAULT: 'default',
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
} as const;

export type ButtonVariant = typeof BUTTON_VARIANTS[keyof typeof BUTTON_VARIANTS];
export type InputType = typeof INPUT_TYPES[keyof typeof INPUT_TYPES];
export type ModalType = typeof MODAL_TYPES[keyof typeof MODAL_TYPES];
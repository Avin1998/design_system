// Pattern-related constants
export const PATTERN_STATUS = {
  INACTIVE: 'inactive',
  ACTIVE: 'active',
  DONE: 'done',
} as const;

export const DIFFICULTY_LEVELS = {
  EASY: 'easy',
  MEDIUM: 'medium',
  HARD: 'hard',
} as const;

export const COMPANIES = [
  'Google',
  'Microsoft',
  'Amazon',
  'Facebook',
  'Apple',
] as const;

export type PatternStatus = typeof PATTERN_STATUS[keyof typeof PATTERN_STATUS];
export type DifficultyLevel = typeof DIFFICULTY_LEVELS[keyof typeof DIFFICULTY_LEVELS];
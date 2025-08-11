// API endpoints and configuration
export const API_ENDPOINTS = {
  BASE_URL: 'http://localhost:3001',
  PATTERNS: '/api/patterns',
  TRACKS: '/api/tracks',
  PROGRESS: '/api/progress',
  USER: '/api/user',
} as const;

export const HTTP_METHODS = {
  GET: 'GET',
  POST: 'POST',
  PUT: 'PUT',
  DELETE: 'DELETE',
  PATCH: 'PATCH',
} as const;

export const API_TIMEOUT = 30000; // 30 seconds

export type HttpMethod = typeof HTTP_METHODS[keyof typeof HTTP_METHODS];
/**
 * Conifguration related to the app
 */

export const URLS = {
  HOME: '/',
  LOGIN: '/login',
  LOGOUT: '/logout',
  SIGNUP: '/signup',
  PDF_CREATE: '/pdf-create',
  SHEETS: '/sheets',
};

export const APP_ENV = process.env.REACT_APP_ENV || 'qa';

// Refresh token timer of 10 minutes
export const REFRESH_TOKEN_TIMER = 1 * 60 * 1000;

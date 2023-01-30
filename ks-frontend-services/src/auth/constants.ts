// TODO: Remove usages of process.env after moving to Vite
export const FIREBASE_API_KEY =
  process.env.REACT_APP_FIREBASE_API_KEY ||
  process.env.NEXT_PUBLIC_FIREBASE_API_KEY ||
  'AIzaSyACML42BEwmnEC3o2SWugihnewotufWdd8';

export const FIREBASE_AUTH_DOMAIN =
  process.env.REACT_APP_FIREBASE_AUTH_DOMAIN ||
  process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN ||
  'basic-garden-241310.firebaseapp.com';

export const FIREBASE_PROJECT_ID =
  process.env.REACT_APP_FIREBASE_PROJECT_ID ||
  process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID ||
  'basic-garden-241310';

export const FIREBASE_STORAGE_BUCKET =
  process.env.REACT_APP_FIREBASE_STORAGE_BUCKET ||
  process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET ||
  'basic-garden-241310.appspot.com';

export const FIREBASE_MESSAGING_SENDER_ID =
  process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID ||
  process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID ||
  '221750227179';

export const FIREBASE_APP_ID =
  process.env.REACT_APP_FIREBASE_APP_ID ||
  process.env.NEXT_PUBLIC_FIREBASE_APP_ID ||
  '1:221750227179:web:7e2db78dedbf503e870eae';

export const FIREBASE_MEASUREMENT_ID =
  process.env.REACT_APP_FIREBASE_MEASUREMENT_ID ||
  process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID ||
  'G-VTWGD7NKTV';

export const HOME_URL =
  process.env.REACT_APP_LOGIN_URL ||
  process.env.NEXT_PUBLIC_HOME_URL ||
  'http://localhost:3000/';

export const LOGIN_URL =
  process.env.REACT_APP_LOGIN_URL ||
  process.env.NEXT_PUBLIC_LOGIN_URL ||
  'http://localhost:3000/login';

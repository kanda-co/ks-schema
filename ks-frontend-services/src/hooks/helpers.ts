// import * as amplitude from '@amplitude/analytics-browser';

// import {
//   AMPLITUDE_API_KEY,
//   AMPLITUDE_SERVER_URL,
//   AMPLITUDE_STORAGE_KEY,
// } from '../config';

// export const init = (): void => {
//   if (amplitude.getSessionId()) return;
//   const storedIds = JSON.parse(
//     window.localStorage.getItem(AMPLITUDE_STORAGE_KEY),
//   );
//   if (!storedIds || !storedIds?.deviceId) return;
//   const ids = {
//     deviceId: undefined,
//     sessionId: undefined,
//     userId: undefined,
//     ...storedIds,
//   };
//   if (!ids.deviceId) return;
//   amplitude.init(AMPLITUDE_API_KEY, null, {
//     serverUrl: AMPLITUDE_SERVER_URL,
//     deviceId: ids.deviceId,
//   });
// };

export const init = (): void => {};

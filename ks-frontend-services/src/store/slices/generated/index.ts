import { default as authUser, authUserSlice } from './authUser';
export { authUser };

import { default as company, companySlice } from './company';
export { company };

import { default as credit, creditSlice } from './credit';
export { credit };

import { default as document, documentSlice } from './document';
export { document };

import { default as event, eventSlice } from './event';
export { event };

import { default as infoAuth, infoAuthSlice } from './infoAuth';
export { infoAuth };

import { default as infoCompany, infoCompanySlice } from './infoCompany';
export { infoCompany };

import { default as infoEntity, infoEntitySlice } from './infoEntity';
export { infoEntity };

import { default as infoGhost, infoGhostSlice } from './infoGhost';
export { infoGhost };

import { default as infoIP, infoIPSlice } from './infoIP';
export { infoIP };

import { default as infoQuery, infoQuerySlice } from './infoQuery';
export { infoQuery };

import { default as job, jobSlice } from './job';
export { job };

import { default as monitor, monitorSlice } from './monitor';
export { monitor };

import { default as payment, paymentSlice } from './payment';
export { payment };

import { default as rate, rateSlice } from './rate';
export { rate };

import { default as subscription, subscriptionSlice } from './subscription';
export { subscription };

export const slices = {
  authUser: authUserSlice,
  company: companySlice,
  credit: creditSlice,
  document: documentSlice,
  event: eventSlice,
  infoAuth: infoAuthSlice,
  infoCompany: infoCompanySlice,
  infoEntity: infoEntitySlice,
  infoGhost: infoGhostSlice,
  infoIP: infoIPSlice,
  infoQuery: infoQuerySlice,
  job: jobSlice,
  monitor: monitorSlice,
  payment: paymentSlice,
  rate: rateSlice,
  subscription: subscriptionSlice,
};

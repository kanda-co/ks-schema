import { loadStripe } from '@stripe/stripe-js';

import {
  SHOP_PAYMENT_PUBLISHABLE_KEY,
  PAYMENT_PUBLISHABLE_KEY,
  BACS_PAYMENT_PUBLISHABLE_KEY,
} from '../config';

export const stripePromise = loadStripe(PAYMENT_PUBLISHABLE_KEY);
export const shopStripePromise = loadStripe(SHOP_PAYMENT_PUBLISHABLE_KEY);
export const bacsStripePromise = loadStripe(BACS_PAYMENT_PUBLISHABLE_KEY);

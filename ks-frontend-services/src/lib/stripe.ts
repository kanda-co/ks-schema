import { loadStripe } from '@stripe/stripe-js';

import { EV_PAYMENT_PUBLISHABLE_KEY, PAYMENT_PUBLISHABLE_KEY } from '../config';

export const stripePromise = loadStripe(PAYMENT_PUBLISHABLE_KEY);

export const evStripePromise = loadStripe(EV_PAYMENT_PUBLISHABLE_KEY);

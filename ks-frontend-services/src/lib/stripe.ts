import { loadStripe } from '@stripe/stripe-js';

import { PAYMENT_PUBLISHABLE_KEY } from '../config';

export const stripePromise = loadStripe(PAYMENT_PUBLISHABLE_KEY);

import type { TagColor } from '~/components/Tag/types';

export const formatStatus = (status: string): string =>
  status.replace(/_/g, ' ');

export const extractColor = (status: string): TagColor => {
  if (status === 'not_applied') return null;
  if (status === 'under_review') return null;
  if (status === 'applied_for_finance') return 'blue';
  if (status === 'finance_deposit_paid') return 'blue';
  if (status === 'finance_not_approved') return 'violet';
  if (status === 'financed') return 'green';
  if (status === 'sat_note_sent') return 'blue';
  if (status === 'sat_note_viewed') return 'blue';
  if (status === 'sat_note_signed') return 'green';
  if (status === 'payout_pending') return 'green';
  if (status === 'paid') return 'green';
  return null;
};

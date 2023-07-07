import type { FinanceRate } from "~/generated/components/schemas";

/**
 * Calculates Loan from total and payment method
 */
export const getMonthlyPayment = (paymentMethod?: FinanceRate): number => {
  if (!paymentMethod) return 0;

  const total = paymentMethod.credit_line || 0;

  const { apr = 0, duration = 0 } = paymentMethod;

  const rate = apr / 100 / 12 / 100;

  if (rate === 0) return Math.ceil(total / duration);

  const compoundInterest = (1 + rate) ** duration;

  const monthlyLoan =
    (total * (rate * compoundInterest)) / (compoundInterest - 1);

  return Math.ceil(monthlyLoan);
};

export const getTotalInterestFee = (
  monthlyPayment: number,
  paymentMethod?: FinanceRate
): number => {
  if (paymentMethod?.apr === 0) return 0;

  const totalLoanCost = monthlyPayment * (paymentMethod?.duration || 0);
  const totalInterestFee = totalLoanCost - (paymentMethod?.credit_line || 0);

  return totalInterestFee;
};

export interface GroupedFinanceRate {
  apr: number;
  name: string;
  creditLine: number;
  minDuration: number;
  maxDuration: number;
  minMonthlyPayment: number;
  maxMonthlyPayment: number;
  minInterest: number;
  maxInterest: number;
}

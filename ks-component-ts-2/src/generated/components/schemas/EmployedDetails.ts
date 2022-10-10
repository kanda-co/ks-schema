import * as t from "io-ts";

export const EmployedDetails = t.type({
  employer_name: t.string,
  main_occupation: t.string,
  months_employed: t.number,
});

export interface EmployedDetails {
  employer_name: string;
  main_occupation: string;
  months_employed: number;
}

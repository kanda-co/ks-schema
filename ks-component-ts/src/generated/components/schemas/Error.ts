import * as t from "io-ts";

export const Error = t.intersection([
  t.type({
    message: t.string,
  }),
  t.partial({
    code: t.number,
  }),
]);

export interface Error {
  code?: number;
  message: string;
}

import * as t from "io-ts";

export const InfoAuth = t.intersection([
  t.type({
    email: t.string,
  }),
  t.partial({
    continue_url: t.string,
  }),
]);

export interface InfoAuth {
  email: string;
  continue_url?: string;
}

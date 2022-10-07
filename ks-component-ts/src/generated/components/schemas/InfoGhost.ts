import * as t from "io-ts";

export const InfoGhost = t.intersection([
  t.type({
    email: t.string,
  }),
  t.partial({
    custom_role: t.string,
    custom_token: t.string,
    bearer_token: t.string,
  }),
]);

export interface InfoGhost {
  email: string;
  custom_role?: string;
  custom_token?: string;
  bearer_token?: string;
}

import * as t from "io-ts";

export const AuthUser = t.intersection([
  t.type({
    id: t.string,
    token: t.string,
    name: t.string,
    email: t.string,
    provider: t.string,
    subject: t.string,
    audience: t.string,
    issuer: t.string,
    verified: t.boolean,
  }),
  t.partial({
    role: t.string,
    phone: t.string,
    photoURL: t.string,
    disabled: t.boolean,
  }),
]);

export interface AuthUser {
  id: string;
  token: string;
  name: string;
  email: string;
  role?: string;
  phone?: string;
  photoURL?: string;
  disabled?: boolean;
  provider: string;
  subject: string;
  audience: string;
  issuer: string;
  verified: boolean;
}

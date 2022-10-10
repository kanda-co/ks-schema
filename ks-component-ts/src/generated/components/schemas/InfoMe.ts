import * as t from "io-ts";

export const InfoMe = t.partial({
  email: t.string,
  name: t.string,
  phone: t.string,
  photoURL: t.string,
});

export interface InfoMe {
  email?: string;
  name?: string;
  phone?: string;
  photoURL?: string;
}

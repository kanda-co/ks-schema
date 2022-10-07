import * as t from "io-ts";
import { DateFromISOString } from "io-ts-types/DateFromISOString";

export const Metadata = t.type({
  liveness: t.boolean,
  created_at: DateFromISOString,
  updated_at: DateFromISOString,
});

export interface Metadata {
  liveness: boolean;
  created_at: Date;
  updated_at: Date;
}

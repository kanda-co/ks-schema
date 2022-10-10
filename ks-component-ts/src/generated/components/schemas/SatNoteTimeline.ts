import * as t from "io-ts";
import { DateFromISOString } from "io-ts-types/DateFromISOString";

export const SatNoteTimeline = t.partial({
  sent_at: DateFromISOString,
  viewed_at: DateFromISOString,
  signed_at: DateFromISOString,
});

export interface SatNoteTimeline {
  sent_at?: Date;
  viewed_at?: Date;
  signed_at?: Date;
}

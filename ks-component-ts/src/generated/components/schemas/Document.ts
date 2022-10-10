import * as t from "io-ts";
import { Metadata } from "./Metadata";

export const Document = t.intersection([
  t.type({
    name: t.string,
  }),
  t.partial({
    id: t.string,
    cid: t.string,
    oid: t.string,
    aid: t.string,
    content: t.string,
    mimetype: t.string,
    metadata: Metadata,
  }),
]);

export interface Document {
  id?: string;
  cid?: string;
  oid?: string;
  aid?: string;
  name: string;
  content?: string;
  mimetype?: string;
  metadata?: Metadata;
}

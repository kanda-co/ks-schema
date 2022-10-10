import * as t from "io-ts";
import { Entity } from "./Entity";
import { Error } from "./Error";
import { Metadata } from "./Metadata";

export const Event = t.intersection([
  t.type({
    id: t.string,
    rid: t.string,
    cid: t.string,
    oid: t.string,
    source: t.union([
      t.literal("api"),
      t.literal("kanda"),
      t.literal("webhook"),
    ]),
    action: t.string,
  }),
  t.partial({
    aid: t.string,
    success: t.boolean,
    entity: Entity,
    error: Error,
    metadata: Metadata,
  }),
]);

export interface Event {
  id: string;
  rid: string;
  cid: string;
  oid: string;
  aid?: string;
  source: "api" | "kanda" | "webhook";
  action: string;
  success?: boolean;
  entity?: Entity;
  error?: Error;
  metadata?: Metadata;
}

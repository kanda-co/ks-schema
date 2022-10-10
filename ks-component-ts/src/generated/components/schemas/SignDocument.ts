import * as t from "io-ts";
import { Document } from "./Document";
import { Signature } from "./Signature";

export const SignDocument = t.type({
  signature: Signature,
  quote: Document,
});

export interface SignDocument {
  signature: Signature;
  quote: Document;
}

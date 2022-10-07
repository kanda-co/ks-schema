import * as t from "io-ts";
import { Address } from "./Address";

export const ContactInfo = t.partial({
  contact_name: t.string,
  contact_email: t.string,
  contact_phone: t.string,
  contact_address: Address,
  trading_name: t.string,
});

export interface ContactInfo {
  contact_name?: string;
  contact_email?: string;
  contact_phone?: string;
  contact_address?: Address;
  trading_name?: string;
}

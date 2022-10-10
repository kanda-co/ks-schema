import * as t from "io-ts";

export const InfoIP = t.type({
  ipv4: t.string,
});

export interface InfoIP {
  ipv4: string;
}

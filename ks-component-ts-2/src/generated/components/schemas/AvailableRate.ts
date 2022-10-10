import * as t from "io-ts";

export const AvailableRate = t.type({
  name: t.string,
  fee: t.number,
  enabled: t.boolean,
});

export interface AvailableRate {
  name: string;
  fee: number;
  enabled: boolean;
}

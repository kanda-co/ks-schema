import * as t from "io-ts";
import { LimitedCompanyInfo } from "./LimitedCompanyInfo";
import { Metadata } from "./Metadata";
import { SoleTraderInfo } from "./SoleTraderInfo";
import { UserType } from "./UserType";

export const InfoCompany = t.partial({
  id: t.string,
  sole_trader: SoleTraderInfo,
  limited_company: LimitedCompanyInfo,
  directors: t.array(UserType),
  metadata: Metadata,
});

export interface InfoCompany {
  id?: string;
  sole_trader?: SoleTraderInfo;
  limited_company?: LimitedCompanyInfo;
  directors?: Array<UserType>;
  metadata?: Metadata;
}

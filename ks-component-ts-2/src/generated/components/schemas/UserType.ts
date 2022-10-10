import * as t from "io-ts";
import { DirectorInfo } from "./DirectorInfo";

export const UserType = t.intersection([
  t.type({
    role: t.union([
      t.literal("company-admin"),
      t.literal("company-manager"),
      t.literal("company-staff"),
    ]),
    first_name: t.string,
    email: t.string,
  }),
  t.partial({
    director_info: DirectorInfo,
    last_name: t.string,
    mobile: t.string,
  }),
]);

export interface UserType {
  director_info?: DirectorInfo;
  role: "company-admin" | "company-manager" | "company-staff";
  first_name: string;
  last_name?: string;
  email: string;
  mobile?: string;
}

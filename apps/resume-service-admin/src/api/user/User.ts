import { JsonValue } from "type-fest";
import { Like } from "../like/Like";
import { PurchaseHistory } from "../purchaseHistory/PurchaseHistory";

export type User = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  firstName: string | null;
  lastName: string | null;
  username: string;
  email: string | null;
  roles: JsonValue;
  name: string | null;
  mobileNumber: string | null;
  emailVerified: boolean | null;
  likes?: Array<Like>;
  purchaseHistories?: Array<PurchaseHistory>;
};

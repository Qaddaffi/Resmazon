import { InputJsonValue } from "../../types";
import { LikeUpdateManyWithoutUsersInput } from "./LikeUpdateManyWithoutUsersInput";
import { PurchaseHistoryUpdateManyWithoutUsersInput } from "./PurchaseHistoryUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username?: string;
  email?: string | null;
  password?: string;
  roles?: InputJsonValue;
  name?: string | null;
  mobileNumber?: string | null;
  emailVerified?: boolean | null;
  likes?: LikeUpdateManyWithoutUsersInput;
  purchaseHistories?: PurchaseHistoryUpdateManyWithoutUsersInput;
};

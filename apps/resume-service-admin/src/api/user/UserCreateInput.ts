import { InputJsonValue } from "../../types";
import { LikeCreateNestedManyWithoutUsersInput } from "./LikeCreateNestedManyWithoutUsersInput";
import { PurchaseHistoryCreateNestedManyWithoutUsersInput } from "./PurchaseHistoryCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  firstName?: string | null;
  lastName?: string | null;
  username: string;
  email?: string | null;
  password: string;
  roles: InputJsonValue;
  name?: string | null;
  mobileNumber?: string | null;
  emailVerified?: boolean | null;
  likes?: LikeCreateNestedManyWithoutUsersInput;
  purchaseHistories?: PurchaseHistoryCreateNestedManyWithoutUsersInput;
};

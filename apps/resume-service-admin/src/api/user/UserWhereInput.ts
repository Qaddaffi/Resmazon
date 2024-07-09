import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { PurchaseHistoryListRelationFilter } from "../purchaseHistory/PurchaseHistoryListRelationFilter";

export type UserWhereInput = {
  id?: StringFilter;
  firstName?: StringNullableFilter;
  lastName?: StringNullableFilter;
  username?: StringFilter;
  email?: StringNullableFilter;
  name?: StringNullableFilter;
  mobileNumber?: StringNullableFilter;
  emailVerified?: BooleanNullableFilter;
  likes?: LikeListRelationFilter;
  purchaseHistories?: PurchaseHistoryListRelationFilter;
};

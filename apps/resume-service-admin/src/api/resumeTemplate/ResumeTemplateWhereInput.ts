import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { BooleanNullableFilter } from "../../util/BooleanNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CommentListRelationFilter } from "../comment/CommentListRelationFilter";
import { LikeListRelationFilter } from "../like/LikeListRelationFilter";
import { PurchaseHistoryListRelationFilter } from "../purchaseHistory/PurchaseHistoryListRelationFilter";

export type ResumeTemplateWhereInput = {
  id?: StringFilter;
  title?: StringNullableFilter;
  description?: StringNullableFilter;
  fileWord?: JsonFilter;
  filePdf?: JsonFilter;
  freeDownload?: BooleanNullableFilter;
  price?: FloatNullableFilter;
  comments?: CommentListRelationFilter;
  likes?: LikeListRelationFilter;
  purchaseHistories?: PurchaseHistoryListRelationFilter;
  author?: StringNullableFilter;
};

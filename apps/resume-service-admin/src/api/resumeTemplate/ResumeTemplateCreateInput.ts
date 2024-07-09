import { InputJsonValue } from "../../types";
import { CommentCreateNestedManyWithoutResumeTemplatesInput } from "./CommentCreateNestedManyWithoutResumeTemplatesInput";
import { LikeCreateNestedManyWithoutResumeTemplatesInput } from "./LikeCreateNestedManyWithoutResumeTemplatesInput";
import { PurchaseHistoryCreateNestedManyWithoutResumeTemplatesInput } from "./PurchaseHistoryCreateNestedManyWithoutResumeTemplatesInput";

export type ResumeTemplateCreateInput = {
  title?: string | null;
  description?: string | null;
  industry?: Array<"Option1">;
  profession?: Array<"Option1">;
  fileWord?: InputJsonValue;
  filePdf?: InputJsonValue;
  freeDownload?: boolean | null;
  price?: number | null;
  comments?: CommentCreateNestedManyWithoutResumeTemplatesInput;
  likes?: LikeCreateNestedManyWithoutResumeTemplatesInput;
  purchaseHistories?: PurchaseHistoryCreateNestedManyWithoutResumeTemplatesInput;
  author?: string | null;
};

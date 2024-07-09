import { InputJsonValue } from "../../types";
import { CommentUpdateManyWithoutResumeTemplatesInput } from "./CommentUpdateManyWithoutResumeTemplatesInput";
import { LikeUpdateManyWithoutResumeTemplatesInput } from "./LikeUpdateManyWithoutResumeTemplatesInput";
import { PurchaseHistoryUpdateManyWithoutResumeTemplatesInput } from "./PurchaseHistoryUpdateManyWithoutResumeTemplatesInput";

export type ResumeTemplateUpdateInput = {
  title?: string | null;
  description?: string | null;
  industry?: Array<"Option1">;
  profession?: Array<"Option1">;
  fileWord?: InputJsonValue;
  filePdf?: InputJsonValue;
  freeDownload?: boolean | null;
  price?: number | null;
  comments?: CommentUpdateManyWithoutResumeTemplatesInput;
  likes?: LikeUpdateManyWithoutResumeTemplatesInput;
  purchaseHistories?: PurchaseHistoryUpdateManyWithoutResumeTemplatesInput;
  author?: string | null;
};

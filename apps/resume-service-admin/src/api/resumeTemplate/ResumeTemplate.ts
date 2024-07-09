import { JsonValue } from "type-fest";
import { Comment } from "../comment/Comment";
import { Like } from "../like/Like";
import { PurchaseHistory } from "../purchaseHistory/PurchaseHistory";

export type ResumeTemplate = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  title: string | null;
  description: string | null;
  industry?: Array<"Option1">;
  profession?: Array<"Option1">;
  fileWord: JsonValue;
  filePdf: JsonValue;
  freeDownload: boolean | null;
  price: number | null;
  comments?: Array<Comment>;
  likes?: Array<Like>;
  purchaseHistories?: Array<PurchaseHistory>;
  author: string | null;
};

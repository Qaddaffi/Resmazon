import { SortOrder } from "../../util/SortOrder";

export type ResumeTemplateOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  title?: SortOrder;
  description?: SortOrder;
  industry?: SortOrder;
  profession?: SortOrder;
  fileWord?: SortOrder;
  filePdf?: SortOrder;
  freeDownload?: SortOrder;
  price?: SortOrder;
  author?: SortOrder;
};

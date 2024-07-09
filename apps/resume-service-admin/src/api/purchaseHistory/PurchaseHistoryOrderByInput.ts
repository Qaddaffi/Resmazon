import { SortOrder } from "../../util/SortOrder";

export type PurchaseHistoryOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  pricePaid?: SortOrder;
  paymentMethod?: SortOrder;
  resumeTemplateId?: SortOrder;
  userId?: SortOrder;
};

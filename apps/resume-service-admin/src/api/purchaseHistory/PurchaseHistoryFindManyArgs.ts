import { PurchaseHistoryWhereInput } from "./PurchaseHistoryWhereInput";
import { PurchaseHistoryOrderByInput } from "./PurchaseHistoryOrderByInput";

export type PurchaseHistoryFindManyArgs = {
  where?: PurchaseHistoryWhereInput;
  orderBy?: Array<PurchaseHistoryOrderByInput>;
  skip?: number;
  take?: number;
};

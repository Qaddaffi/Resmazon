import { PurchaseHistory as TPurchaseHistory } from "../api/purchaseHistory/PurchaseHistory";

export const PURCHASEHISTORY_TITLE_FIELD = "paymentMethod";

export const PurchaseHistoryTitle = (record: TPurchaseHistory): string => {
  return record.paymentMethod?.toString() || String(record.id);
};

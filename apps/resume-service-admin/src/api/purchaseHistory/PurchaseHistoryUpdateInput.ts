import { ResumeTemplateWhereUniqueInput } from "../resumeTemplate/ResumeTemplateWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PurchaseHistoryUpdateInput = {
  pricePaid?: number | null;
  paymentMethod?: string | null;
  resumeTemplate?: ResumeTemplateWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};

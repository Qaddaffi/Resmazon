import { ResumeTemplateWhereUniqueInput } from "../resumeTemplate/ResumeTemplateWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PurchaseHistoryCreateInput = {
  pricePaid?: number | null;
  paymentMethod?: string | null;
  resumeTemplate?: ResumeTemplateWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};

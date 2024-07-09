import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { ResumeTemplateWhereUniqueInput } from "../resumeTemplate/ResumeTemplateWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type PurchaseHistoryWhereInput = {
  id?: StringFilter;
  pricePaid?: FloatNullableFilter;
  paymentMethod?: StringNullableFilter;
  resumeTemplate?: ResumeTemplateWhereUniqueInput;
  user?: UserWhereUniqueInput;
};

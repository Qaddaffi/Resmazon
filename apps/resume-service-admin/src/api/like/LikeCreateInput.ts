import { ResumeTemplateWhereUniqueInput } from "../resumeTemplate/ResumeTemplateWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeCreateInput = {
  resumeTemplate?: ResumeTemplateWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};

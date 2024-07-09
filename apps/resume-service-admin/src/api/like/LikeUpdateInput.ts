import { ResumeTemplateWhereUniqueInput } from "../resumeTemplate/ResumeTemplateWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeUpdateInput = {
  resumeTemplate?: ResumeTemplateWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};

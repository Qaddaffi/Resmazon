import { StringFilter } from "../../util/StringFilter";
import { ResumeTemplateWhereUniqueInput } from "../resumeTemplate/ResumeTemplateWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type LikeWhereInput = {
  id?: StringFilter;
  resumeTemplate?: ResumeTemplateWhereUniqueInput;
  user?: UserWhereUniqueInput;
};

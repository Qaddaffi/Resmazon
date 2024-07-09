import { ResumeTemplateWhereUniqueInput } from "../resumeTemplate/ResumeTemplateWhereUniqueInput";

export type CommentCreateInput = {
  content?: string | null;
  author?: string | null;
  resumeTemplate?: ResumeTemplateWhereUniqueInput | null;
};

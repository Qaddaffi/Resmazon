import { ResumeTemplateWhereUniqueInput } from "../resumeTemplate/ResumeTemplateWhereUniqueInput";

export type CommentUpdateInput = {
  content?: string | null;
  author?: string | null;
  resumeTemplate?: ResumeTemplateWhereUniqueInput | null;
};

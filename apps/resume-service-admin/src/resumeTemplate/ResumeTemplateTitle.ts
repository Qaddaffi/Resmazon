import { ResumeTemplate as TResumeTemplate } from "../api/resumeTemplate/ResumeTemplate";

export const RESUMETEMPLATE_TITLE_FIELD = "title";

export const ResumeTemplateTitle = (record: TResumeTemplate): string => {
  return record.title?.toString() || String(record.id);
};

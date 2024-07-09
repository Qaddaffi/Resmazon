import { ResumeTemplate } from "../resumeTemplate/ResumeTemplate";

export type Comment = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  content: string | null;
  author: string | null;
  resumeTemplate?: ResumeTemplate | null;
};

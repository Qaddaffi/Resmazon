import { ResumeTemplate } from "../resumeTemplate/ResumeTemplate";
import { User } from "../user/User";

export type Like = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  resumeTemplate?: ResumeTemplate | null;
  user?: User | null;
};

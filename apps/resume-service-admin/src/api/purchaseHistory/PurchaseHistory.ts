import { ResumeTemplate } from "../resumeTemplate/ResumeTemplate";
import { User } from "../user/User";

export type PurchaseHistory = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  pricePaid: number | null;
  paymentMethod: string | null;
  resumeTemplate?: ResumeTemplate | null;
  user?: User | null;
};

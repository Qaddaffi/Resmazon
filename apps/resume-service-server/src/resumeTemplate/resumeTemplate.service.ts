import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { ResumeTemplateServiceBase } from "./base/resumeTemplate.service.base";

@Injectable()
export class ResumeTemplateService extends ResumeTemplateServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

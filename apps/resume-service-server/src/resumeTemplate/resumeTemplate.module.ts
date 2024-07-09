import { Module } from "@nestjs/common";
import { ResumeTemplateModuleBase } from "./base/resumeTemplate.module.base";
import { ResumeTemplateService } from "./resumeTemplate.service";
import { ResumeTemplateController } from "./resumeTemplate.controller";
import { ResumeTemplateResolver } from "./resumeTemplate.resolver";

@Module({
  imports: [ResumeTemplateModuleBase],
  controllers: [ResumeTemplateController],
  providers: [ResumeTemplateService, ResumeTemplateResolver],
  exports: [ResumeTemplateService],
})
export class ResumeTemplateModule {}

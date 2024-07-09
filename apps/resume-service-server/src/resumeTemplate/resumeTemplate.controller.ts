import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { ResumeTemplateService } from "./resumeTemplate.service";
import { ResumeTemplateControllerBase } from "./base/resumeTemplate.controller.base";

@swagger.ApiTags("resumeTemplates")
@common.Controller("resumeTemplates")
export class ResumeTemplateController extends ResumeTemplateControllerBase {
  constructor(protected readonly service: ResumeTemplateService) {
    super(service);
  }
}

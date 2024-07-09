import * as graphql from "@nestjs/graphql";
import { ResumeTemplateResolverBase } from "./base/resumeTemplate.resolver.base";
import { ResumeTemplate } from "./base/ResumeTemplate";
import { ResumeTemplateService } from "./resumeTemplate.service";

@graphql.Resolver(() => ResumeTemplate)
export class ResumeTemplateResolver extends ResumeTemplateResolverBase {
  constructor(protected readonly service: ResumeTemplateService) {
    super(service);
  }
}

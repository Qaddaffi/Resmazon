/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { ResumeTemplateWhereUniqueInput } from "../../resumeTemplate/base/ResumeTemplateWhereUniqueInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { UserWhereUniqueInput } from "../../user/base/UserWhereUniqueInput";

@InputType()
class LikeUpdateInput {
  @ApiProperty({
    required: false,
    type: () => ResumeTemplateWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ResumeTemplateWhereUniqueInput)
  @IsOptional()
  @Field(() => ResumeTemplateWhereUniqueInput, {
    nullable: true,
  })
  resumeTemplate?: ResumeTemplateWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => UserWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => UserWhereUniqueInput)
  @IsOptional()
  @Field(() => UserWhereUniqueInput, {
    nullable: true,
  })
  user?: UserWhereUniqueInput | null;
}

export { LikeUpdateInput as LikeUpdateInput };

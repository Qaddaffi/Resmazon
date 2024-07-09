/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { PurchaseHistoryWhereInput } from "./PurchaseHistoryWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { PurchaseHistoryOrderByInput } from "./PurchaseHistoryOrderByInput";

@ArgsType()
class PurchaseHistoryFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => PurchaseHistoryWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => PurchaseHistoryWhereInput, { nullable: true })
  @Type(() => PurchaseHistoryWhereInput)
  where?: PurchaseHistoryWhereInput;

  @ApiProperty({
    required: false,
    type: [PurchaseHistoryOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [PurchaseHistoryOrderByInput], { nullable: true })
  @Type(() => PurchaseHistoryOrderByInput)
  orderBy?: Array<PurchaseHistoryOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { PurchaseHistoryFindManyArgs as PurchaseHistoryFindManyArgs };

/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { PurchaseHistoryWhereUniqueInput } from "../../purchaseHistory/base/PurchaseHistoryWhereUniqueInput";
import { ApiProperty } from "@nestjs/swagger";

@InputType()
class PurchaseHistoryUpdateManyWithoutUsersInput {
  @Field(() => [PurchaseHistoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PurchaseHistoryWhereUniqueInput],
  })
  connect?: Array<PurchaseHistoryWhereUniqueInput>;

  @Field(() => [PurchaseHistoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PurchaseHistoryWhereUniqueInput],
  })
  disconnect?: Array<PurchaseHistoryWhereUniqueInput>;

  @Field(() => [PurchaseHistoryWhereUniqueInput], {
    nullable: true,
  })
  @ApiProperty({
    required: false,
    type: () => [PurchaseHistoryWhereUniqueInput],
  })
  set?: Array<PurchaseHistoryWhereUniqueInput>;
}

export { PurchaseHistoryUpdateManyWithoutUsersInput as PurchaseHistoryUpdateManyWithoutUsersInput };

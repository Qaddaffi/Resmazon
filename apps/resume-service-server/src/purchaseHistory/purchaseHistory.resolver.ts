import * as graphql from "@nestjs/graphql";
import { PurchaseHistoryResolverBase } from "./base/purchaseHistory.resolver.base";
import { PurchaseHistory } from "./base/PurchaseHistory";
import { PurchaseHistoryService } from "./purchaseHistory.service";

@graphql.Resolver(() => PurchaseHistory)
export class PurchaseHistoryResolver extends PurchaseHistoryResolverBase {
  constructor(protected readonly service: PurchaseHistoryService) {
    super(service);
  }
}

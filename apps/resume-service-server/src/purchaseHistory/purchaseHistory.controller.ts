import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { PurchaseHistoryService } from "./purchaseHistory.service";
import { PurchaseHistoryControllerBase } from "./base/purchaseHistory.controller.base";

@swagger.ApiTags("purchaseHistories")
@common.Controller("purchaseHistories")
export class PurchaseHistoryController extends PurchaseHistoryControllerBase {
  constructor(protected readonly service: PurchaseHistoryService) {
    super(service);
  }
}

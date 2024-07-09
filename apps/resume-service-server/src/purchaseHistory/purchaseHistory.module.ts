import { Module } from "@nestjs/common";
import { PurchaseHistoryModuleBase } from "./base/purchaseHistory.module.base";
import { PurchaseHistoryService } from "./purchaseHistory.service";
import { PurchaseHistoryController } from "./purchaseHistory.controller";
import { PurchaseHistoryResolver } from "./purchaseHistory.resolver";

@Module({
  imports: [PurchaseHistoryModuleBase],
  controllers: [PurchaseHistoryController],
  providers: [PurchaseHistoryService, PurchaseHistoryResolver],
  exports: [PurchaseHistoryService],
})
export class PurchaseHistoryModule {}

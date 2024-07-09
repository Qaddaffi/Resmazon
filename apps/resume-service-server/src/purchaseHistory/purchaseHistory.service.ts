import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { PurchaseHistoryServiceBase } from "./base/purchaseHistory.service.base";

@Injectable()
export class PurchaseHistoryService extends PurchaseHistoryServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}

import { BlockHeader } from "./blockHeader";
import { IModel } from "./model";
import { Transaction } from "./transaction";

/**
 * Default block in the chain
 */
export class Block implements IModel {
  public blockHeader: BlockHeader;
  public transactions: Set<Transaction>;

  constructor(blockHeader: BlockHeader, transactions: Set<Transaction>) {
    this.blockHeader = blockHeader;
    this.transactions = transactions;
  }
}

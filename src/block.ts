import {BlockHeader} from "./blockHeader";
import {Transaction} from "./transaction";
import { IModel } from "./model";

/**
 * Default block in the chain
 */
export class Block implements IModel {
  public blockHeader: BlockHeader;
  public transactions: Transaction[];

  constructor(blockHeader: BlockHeader, transactions: Transaction[]) {
    this.blockHeader = blockHeader;
    this.transactions = transactions;
  }
}

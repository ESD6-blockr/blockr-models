import {BlockHeader} from "./blockHeader";
import { IModel } from "./model";
import {Transaction} from "./transaction";

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

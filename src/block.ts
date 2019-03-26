import {BlockHeader} from "./blockHeader";
import {Transaction} from "./transaction";

/**
 * Default block in the chain
 */
export class Block {
  public blockHeader: BlockHeader;
  public transactions: Transaction[];

  constructor(blockHeader: BlockHeader, transactions: Transaction[]) {
    this.blockHeader = blockHeader;
    this.transactions = transactions;
  }
}

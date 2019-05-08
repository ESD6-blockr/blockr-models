import {BlockHeader} from "./blockHeader";
import { BlockType } from "./blockType";
import { IModel } from "./model";
import { Transaction } from "./transaction";

/**
 * Default block in the chain
 */
export class Block implements IModel {
  public blockType: BlockType;
  public blockHeader: BlockHeader;
  public transactions: Set<Transaction>;

  constructor(blockHeader: BlockHeader, transactions: Set<Transaction>, blockType?: BlockType) {
    this.blockType = blockType || BlockType.REGUALAR;
    this.blockHeader = blockHeader;
    this.transactions = transactions;
  }
}

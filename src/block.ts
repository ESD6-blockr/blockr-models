import { BlockHeader } from "./blockHeader";
import { BlockType } from "./blockType";
import { IModel } from "./model";
import { Transaction } from "./transaction";

/**
 * Default block in the chain
 */
export class Block implements IModel {
  public blockType: BlockType;
  public blockHeader: BlockHeader;
  public transactions: Transaction[];

  constructor(blockHeader: BlockHeader, transactions: Transaction[], blockType: BlockType = BlockType.REGULAR) {
    this.blockType = blockType;
    this.blockHeader = blockHeader;
    this.transactions = transactions;
  }
}

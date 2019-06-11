import { Type } from "class-transformer";
import { BlockHeader } from "./blockHeader";
import { BlockType } from "./blockType";
import { IModel } from "./model";
import { Transaction } from "./transaction";


/**
 * Default block in the chain
 */
export class Block implements IModel {
  public blockType: BlockType;
  @Type(() => BlockHeader)
  public blockHeader: BlockHeader;
  @Type(() => Transaction)
  public transactions: Transaction[];

  constructor(blockType: BlockType = BlockType.REGULAR, blockHeader: BlockHeader, transactions: Transaction[]) {
    this.blockType = blockType;
    this.blockHeader = blockHeader;
    this.transactions = transactions;
  }
}

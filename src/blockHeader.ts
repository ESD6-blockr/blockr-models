import { IModel } from "./model";

/**
 * Blockheader
 */
export class BlockHeader implements IModel {
  public validatorVersion: string;
  public blockNumber: number;
  public validator: string;
  public date: Date;
  public blockReward: number;
  public blockHash: string; // TODO: WHAT IS THIS
  public parentHash: string;

  constructor(validatorVersion: string, blockNumber: number, date: Date,
              blockReward: number, blockHash: string) {
      this.validatorVersion = validatorVersion;
      this.blockNumber = blockNumber;
      this.date = date;
      this.blockReward = blockReward;
      this.blockHash = blockHash;
    }
}

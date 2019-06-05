import { IModel } from "./model";

/**
 * Blockheader
 */
export class BlockHeader implements IModel {
  public validatorVersion: string;
  public blockNumber: number;
  /**
   * Name of the validator
   */
  public validator: string;
  public date: Date;
  public blockReward: number;
  public parentHash: string;

  constructor(validatorVersion: string, blockNumber: number, date: Date,
              blockReward: number) {
      this.validatorVersion = validatorVersion;
      this.blockNumber = blockNumber;
      this.date = date;
      this.blockReward = blockReward;
    }
}

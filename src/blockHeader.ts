/**
 * Blockheader
 */
export class BlockHeader {
  public version: string;
  public blockNumber: number;
  public validator: string;
  public timestamp: number;
  public blockReward: number;
  public blockHash: string;
  public parentHash: string;

  constructor(version: string, blockNumber: number, validator: string,
              timestamp: number, blockReward: number, blockHash: string, parentHash: string) {
      this.version = version;
      this.blockNumber = blockNumber;
      this.validator = validator;
      this.timestamp = timestamp;
      this.blockReward = blockReward;
      this.blockHash = blockHash;
      this.parentHash = parentHash;
    }
}

import { IModel } from "./model";

/**
 * Transactions
 */
export class Transaction implements IModel  {
  public recipient: string;
  public amount: number;
  public timestamp: number;
  public type: string;
  public sender: string;
  public signature: string;
  public blockHash: string;

  constructor(recipient: string, amount: number, timestamp: number,
              type: string, sender: string, signature: string, blockHash: string) {
    this.recipient = recipient;
    this.amount = amount;
    this.timestamp = timestamp;
    this.type = type;
    this.sender = sender;
    this.signature = signature;
    this.blockHash = blockHash;
  }
}

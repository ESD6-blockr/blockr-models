import { IModel } from "./model";
import { TransactionType } from "./transactionType";

/**
 * Transactions
 */
export class Transaction implements IModel  {
  public recipientKey: string;
  public amount: number;
  public timestamp: number;
  public type: TransactionType;
  public senderKey: string;
  public signature: string;
  public blockHash: string; // TODO: WHAT IS THIS

  constructor(recipientKey: string, amount: number, timestamp: number,
              type: TransactionType, senderKey: string) {
    this.recipientKey = recipientKey;
    this.amount = amount;
    this.timestamp = timestamp;
    this.type = type;
    this.senderKey = senderKey;
  }
}

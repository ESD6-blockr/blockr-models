/**
 * Transactions
 */
export default class Transaction {
  public recipient: string;
  public amount: number;
  public timestamp: number;
  public type: string;
  public sender: string;
  public signagture: string;
  public blockHash: string;

  constructor(recipient: string, amount: number, timestamp: number,
              type: string, sender: string, signagture: string, blockHash: string) {
    this.recipient = recipient;
    this.amount = amount;
    this.timestamp = timestamp;
    this.type = type;
    this.sender = sender;
    this.signagture = signagture;
    this.blockHash = blockHash;
  }
}

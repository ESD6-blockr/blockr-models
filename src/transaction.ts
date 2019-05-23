import { IModel } from "./model";
import { TransactionType } from "./transactionType";

/**
 * Transactions
 */
export class Transaction implements IModel  {
  public type: TransactionType;
  public recipientKey: string;
  public senderKey: string;
  public amount: number;
  public date: Date;
  public signature: string;
  public smartContractId?: string;
  public smartContractData?: string;

  constructor(type: TransactionType, recipientKey: string, senderKey: string, 
              amount: number, date: Date, smartContractId?: string, smartContractData?: string) {
    this.recipientKey = recipientKey;
    this.amount = amount;
    this.date = date;
    this.type = type;
    this.senderKey = senderKey;
    this.smartContractId = smartContractId;
    this.smartContractData = smartContractData;
  }
}

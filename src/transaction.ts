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
  public smartContractId: number;
  public contractData: string;

  constructor(type: TransactionType, recipientKey: string, senderKey: string, 
              amount: number, date: Date, smartContractId?: number, contractData?: string) {
    this.recipientKey = recipientKey;
    this.amount = amount;
    this.date = date;
    this.type = type;
    this.senderKey = senderKey;
    
    if (smartContractId != undefined) {
        this.smartContractId = smartContractId;
    }
    if (contractData != undefined) { 
        this.contractData = contractData;
    }
  }
}

import { IModel } from "./model";

/**
 * TransactionHeader
 * holds all transaction properties
 */
export class TransactionHeader implements IModel {
  public recipientKey: string;
  public senderKey: string;
  public amount: number;
  public date: Date;
  public smartContractId?: string;
  public smartContractData?: string;

  constructor(recipientKey: string, senderKey: string,
              amount: number, date: Date, smartContractId?: string, smartContractData?: string) {
    this.recipientKey = recipientKey;
    this.senderKey = senderKey;
    this.amount = amount;
    this.date = date;
    this.smartContractId = smartContractId;
    this.smartContractData = smartContractData;
  }
}

import { IModel } from "./model";
import { TransactionHeader } from "./transactionHeader";
import { TransactionType } from "./transactionType";

/**
 * Transaction holds the transaction data 
 * and the signature made with an EC key pair.
 */
export class Transaction implements IModel {
    public type: TransactionType;
    /**
     * Holds the data of the transaction
     */
    public transactionHeader: TransactionHeader;
    /**
     * Signature of the transaction header
     */
    public signature: string;

    constructor(type: TransactionType, transactionHeader: TransactionHeader, signature: string) {
        this.type = type;
        this.transactionHeader = transactionHeader;
        this.signature = signature;
    }
}

import { Transaction } from "./transaction";

/**
 * Transaction wrapper stores the transaction object 
 * and the signature made with an EC key pair.
 */
export class TransactionWrapper {
    public transaction: Transaction;
    public signature: string;

    constructor(transaction: Transaction, signature: string) {
        this.transaction = transaction;
        this.signature = signature;
    }
}

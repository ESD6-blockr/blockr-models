import { Transaction } from "./transaction";

export class TransactionWrapper {
    public transaction: Transaction;
    public signature: string;

    constructor(transaction: Transaction, signature: string) {
        this.transaction = transaction;
        this.signature = signature;
    }
}

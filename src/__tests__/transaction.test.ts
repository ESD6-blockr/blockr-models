import { Transaction } from "../transaction";
import { TransactionHeader } from "../transactionHeader";
import { TransactionType } from "../transactionType";
import { TransactionWrapper } from "../transactionWrapper";

describe("Transaction object", () => {
    it("Should instantiate with valid parameters", () => {
        const transaction = new Transaction(
            TransactionType.STAKE,
            new TransactionHeader("TEST_RECIPIENT_KEY", "TEST_SENDER_KEY", 1, new Date()),
            "FAKE_SIGNATURE",
        );

        expect(transaction).toBeDefined();
        expect(transaction).toBeInstanceOf(Transaction);

        expect(transaction.type).toBeDefined();
        expect(transaction.type).toBe(TransactionType.STAKE);

        expect(transaction.transactionHeader).toBeDefined();
        expect(transaction.transactionHeader).toBeInstanceOf(TransactionHeader);

        expect(transaction.signature).toBeDefined();
    });
});

describe("Transaction wrapper object", () => {
    it("Should instantiate with valid parameters", () => {
        const transactionWrapper = new TransactionWrapper(
            new Transaction(TransactionType.COIN, "RECIPIENT_KEY", "SENDER_KEY", 1, new Date()),
            "SIGNATURE",
        );
        
        expect(transactionWrapper).toBeDefined();
        expect(transactionWrapper).toBeInstanceOf(TransactionWrapper);
    });
});

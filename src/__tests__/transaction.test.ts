import { Transaction } from "../transaction";
import { TransactionType } from "../transactionType";
import { TransactionWrapper } from "../transactionWrapper";

describe("Transaction object", () => {
    it("Should instantiate with valid parameters", () => {
        const transaction = new Transaction(TransactionType.STAKE, "TEST_RECIPIENT_KEY",
            "TEST_SENDER_KEY", 1, new Date());

        expect(transaction).toBeDefined();
        expect(transaction).toBeInstanceOf(Transaction);
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

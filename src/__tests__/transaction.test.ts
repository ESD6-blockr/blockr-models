import { Transaction } from "../transaction";
import { TransactionType } from "../transactionType";

describe("Transaction object", () => {
    it("Should instantiate with valid parameters", () => {
        const transaction = new Transaction(TransactionType.STAKE, "TEST_RECIPIENT_KEY",
            "TEST_SENDER_KEY", 1, new Date());

        expect(transaction).toBeDefined();
        expect(transaction).toBeInstanceOf(Transaction);
    });
});

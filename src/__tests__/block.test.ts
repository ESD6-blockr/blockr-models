import { Block } from "../block";
import { BlockHeader } from "../blockHeader";
import { BlockType } from "../blockType";
import { Transaction } from "../transaction";
import { TransactionType } from "../transactionType";

describe("Block object", () => {
    it("Should instantiate with valid parameters", () => {
        const block = new Block(
            new BlockHeader(
                "1.0.0", 1, new Date(), 10,
            ),
            new Set().add(
                new Transaction(
                    TransactionType.COIN, "TEST_RECIPIENT_KEY", "TEST_SENDER_KEY",
                    10, new Date(),
                ),
            ),
            BlockType.REGULAR,
        );

        expect(block).toBeDefined();
        expect(block).toBeInstanceOf(Block);
    });
});

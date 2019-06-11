import "reflect-metadata";

import { Block } from "../block";
import { BlockHeader } from "../blockHeader";
import { BlockType } from "../blockType";
import { Transaction } from "../transaction";
import { TransactionHeader } from "../transactionHeader";
import { TransactionType } from "../transactionType";

describe("Block object", () => {
    it("Should instantiate with valid parameters", () => {
        const block = new Block(
            BlockType.REGULAR,
            new BlockHeader(
                "1.0.0", 1, new Date(), 1,
            ),
            [
                new Transaction(
                    TransactionType.COIN,
                    new TransactionHeader("TEST_RECIPIENT_KEY", "TEST_SENDER_KEY", 1, new Date()),
                    "FAKE_SIGNATURE",
                ),
            ],
        );

        expect(block).toBeDefined();
        expect(block).toBeInstanceOf(Block);
    });
});

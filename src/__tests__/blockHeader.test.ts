import "reflect-metadata";

import { BlockHeader } from "../blockHeader";

describe("BlockHeader object", () => {
    it("Should instantiate with valid parameters", () => {
        const blockHeader = new BlockHeader("1.0.0", 1, new Date(), 1);

        expect(blockHeader).toBeDefined();
        expect(blockHeader).toBeInstanceOf(BlockHeader);
    });
});

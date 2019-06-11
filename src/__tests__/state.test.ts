import "reflect-metadata";

import { State } from "../state";

describe("State object", () => {
    it("Should instantiate with valid parameters", () => {
        const state = new State("TEST_PUBLIC_KEY", 10, 10);

        expect(state).toBeDefined();
        expect(state).toBeInstanceOf(State);
    });
});

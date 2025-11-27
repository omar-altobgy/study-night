import { expect } from "chai";
import { shuffle } from "../src/shuffle.js";

describe("shuffle function", () => {
    it("should contain the same elements", () => {
        const cards = [1, 2, 3, 4];
        const shuffledCards = shuffle(cards);
        expect(shuffledCards.sort()).to.deep.eq(cards.sort());
    });

    it("should return an empty array when given an empty array", () => {
        const shuffledEmptyCards = shuffle([]);
        expect(shuffledEmptyCards).to.deep.eq([]);
    });
});

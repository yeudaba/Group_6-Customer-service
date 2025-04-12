import { expect } from "chai";

describe("Array", () => {
  describe("sorting array works", () => {
    it("Should sort array", () => {
      const name = ["Dani", "Moshe", "Adam"];
      expect(name.sort()).to.be.eql(["Adam", "Dani", "Moshe"]);
    });
  });
});

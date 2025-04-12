const { expect } = require("chai");



describe("Array", () => {
  describe("sorting array works", () => {
    it("Should sort array", () => {
      var name = ["Dani", "Moshe", "Adam"];
      expect(name.sort()).to.be.eql(["Adam", "Dani", "Moshe"]);
    });
  });
});

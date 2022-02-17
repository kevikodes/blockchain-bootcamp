const Token = artifacts.require("./Token");
require("chai").use(require("chai-as-promised")).should();
contract("Token", (accounts) => {
  let token;
  const name = "Clever Coin";
  const symbol = "CLV";
  const totalSupply = "1000000000000000000000000";
  const decimals = "18";
  beforeEach(async () => {
    token = await Token.new();
  });
  describe("deployment", () => {
    it("Tracks the name", async () => {
      //read token name here...
      //The token name is "My Name"

      const result = await token.name();
      result.should.equal(name);
    });
    it("Tracks the symbol", async () => {
      const result = await token.symbol();
      result.should.equal(symbol);
    });
    it("Tracks the decimals", async () => {
      const result = await token.decimals();
      result.toString().should.equal(decimals);
    });
    it("Tracks the supply", async () => {
      const result = await token.totalSupply();
      result.toString().should.equal(totalSupply);
    });
  });
});

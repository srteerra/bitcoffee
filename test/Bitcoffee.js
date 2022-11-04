const Bitcoffee = artifacts.require("Bitcoffee");

contract("Bitcoffee", (accounts) => {
  it("should return token name", async () => {
    // Instance
    const BitcoffeeInstance = await Bitcoffee.deployed();
    // Get token name
    const tokenName = await BitcoffeeInstance.name.call();
    assert.equal(tokenName, "Bitcoffee", "Token has another name");
  });

  it("should return token symbol", async () => {
    // Instance
    const BitcoffeeInstance = await Bitcoffee.deployed();
    // Get token symbol
    const tokenSymbol = await BitcoffeeInstance.symbol.call();
    assert.equal(tokenSymbol, "BITC", "Token has another symbol");
  });

  it("should return token decimals", async () => {
    // Instance
    const BitcoffeeInstance = await Bitcoffee.deployed();
    // Get token decimals
    const tokenDecimals = await BitcoffeeInstance.decimals.call();
    assert.equal(tokenDecimals, 3, "Token has more than 3 decimals");
  });

  it("should return token supply", async () => {
    // Instance
    const BitcoffeeInstance = await Bitcoffee.deployed();
    // Get token supply
    const tokenSupply = await BitcoffeeInstance.totalSupply.call();
    assert.equal(tokenSupply, 1000000000, "Token has another decimals");
  });

  it("should return token balanceOf", async () => {
    // Instance
    const BitcoffeeInstance = await Bitcoffee.deployed();
    // Get token balanceOf on the account
    const tokenBalanceOf = await BitcoffeeInstance.balanceOf.call(accounts[0]);
    assert.equal(tokenBalanceOf, 1000000000, "Account hasn't minted tokens!");
  });
});

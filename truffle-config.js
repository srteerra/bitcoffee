const HDWalletProvider = require("@truffle/hdwallet-provider");
// const infuraKey = "fj4jll3k.....";
//
const fs = require("fs");
const mnemonic = fs.readFileSync(".secret").toString().trim();
if (!mnemonic || mnemonic.split(" ").length !== 12) {
  throw new Error("unable to retrieve mnemonic from .secret");
}

const gasPriceTestnetRaw = fs
  .readFileSync(".gas-price-testnet.json")
  .toString()
  .trim();
const gasPriceTestnet = parseInt(JSON.parse(gasPriceTestnetRaw).result, 16);
if (typeof gasPriceTestnet !== "number" || isNaN(gasPriceTestnet)) {
  throw new Error(
    "unable to retrieve network gas price from .gas-price-testnet.json"
  );
}
console.log("Gas price Testnet: " + gasPriceTestnet);

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1", // Localhost (default: none)
      port: 4444, // Standard Ethereum port (default: none)
      network_id: "*", // Any network (default: none)
    },
    testnet: {
      provider: () =>
        new HDWalletProvider(mnemonic, "https://public-node.testnet.rsk.co"),
      network_id: 31,
      gasPrice: Math.floor(gasPriceTestnet * 1.1),
      networkCheckTimeout: 1e9,
    },
    develop: {
      port: 8545,
      network_id: 31,
      accounts: 5,
      defaultEtherBalance: 500,
      blockTime: 3,
    },
  },
  compilers: {
    solc: {
      version: "0.8.13",
      settings: {
        optimizer: {
          enabled: true, // Default: false
          runs: 200, // Default: 200
        },
      },
    },
  },
};

const CrowdFund = artifacts.require("CrowdFund");
const CrowdFundERC677 = artifacts.require("CrowdFundERC677");

module.exports = function (deployer) {
  deployer.deploy(CrowdFund, "0x2f395a03820af458ae3e39fca40c9dc80223492d");
  deployer.deploy(
    CrowdFundERC677,
    "0x19f64674d8a5b4e652319f5e239efd3bc969a1fe"
  );
};

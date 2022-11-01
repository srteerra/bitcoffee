const CrowdFund = artifacts.require("CrowdFund");
const CrowdFundERC677 = artifacts.require("CrowdFundERC677");

module.exports = function (deployer) {
  deployer.deploy(CrowdFund, "0x2f395a03820af458ae3e39fca40c9dc80223492d");
  deployer.deploy(
    CrowdFundERC677,
    "0x19F64674D8A5B4E652319F5e239eFd3bc969A1fE"
  );
};

var CrowdFund = artifacts.require("CrowdFund");

contract("CrowdFund", function (accounts) {
  it("should return campaign not claimed"),
    function () {
      return CrowdFund.deployed()
        .then(function (instance) {
          return instance.campaigns("1").call();
        })
        .then(function (camp) {
          assert.equal(camp.claimed, false, "campaign claimed");
        });
    };
});

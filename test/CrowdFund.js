var CrowdFund = artifacts.require("CrowdFund");

contract("CrowdFund", function (accounts) {
  it("should return campaign not claimed", function () {
    return CrowdFund.deployed()
      .then(function (instance) {
        return instance.campaigns("1").call();
      })
      .then(function (camp) {
        assert.equal(camp.claimed, false, "campaign claimed");
      });
  });

  it("should return campaign claimed", function () {
    return CrowdFund.deployed()
      .then(function (instance) {
        return instance.campaigns("1").call();
      })
      .then(function (camp) {
        assert.equal(camp.claimed, true, "campaign not claimed");
      });
  });

  it("should return user no campaigns", function () {
    return CrowdFund.deployed()
      .then(function (instance) {
        return instance.creatorCamps(accounts[0]).call();
      })
      .then(function (camps) {
        assert.equal(camps, 0, "user has campaigns");
      });
  });

  it("should return campaign contributors", function () {
    return CrowdFund.deployed()
      .then(function (instance) {
        return instance.totalContributors("1").call();
      })
      .then(function (contributors) {
        assert.equal(contributors, 0, "campaign has contributors");
      });
  });
});

const CrowdFundERC677 = artifacts.require("CrowdFundERC677");

contract("CrowdFundERC677", (accounts) => {
  it("should return campaign count", async () => {
    // Instance
    const CrowdFundERC677Instance = await CrowdFundERC677.deployed();
    // Get campaign counter
    const storedData = await CrowdFundERC677Instance.count.call();
    assert.equal(storedData, 0, "Theres more than 1 Campagin");
  });

  it("should return campaign status", async () => {
    // Instance
    const CrowdFundERC677Instance = await CrowdFundERC677.deployed();
    // Get campaign
    const campaign = await CrowdFundERC677Instance.campaigns.call("1");
    assert.equal(campaign.claimed, false, "Campaign claimed");
  });

  it("should return campaign goal", async () => {
    // Instance
    const CrowdFundERC677Instance = await CrowdFundERC677.deployed();
    // Get campaign
    const campaign = await CrowdFundERC677Instance.campaigns.call("1");
    assert.equal(campaign.goal, 0, "Goal more than 0 tokens");
  });

  it("should return campaign pledged tokens", async () => {
    // Instance
    const CrowdFundERC677Instance = await CrowdFundERC677.deployed();
    // Get campaign
    const campaign = await CrowdFundERC677Instance.campaigns.call("1");
    assert.equal(campaign.pledged, 0, "Campaign has tokens!");
  });

  it("should return campaign start date", async () => {
    // Instance
    const CrowdFundERC677Instance = await CrowdFundERC677.deployed();
    // Get campaign
    const campaign = await CrowdFundERC677Instance.campaigns.call("1");
    assert.equal(campaign.startAt, 0, "Campaign has start date");
  });

  it("should return campaign end date", async () => {
    // Instance
    const CrowdFundERC677Instance = await CrowdFundERC677.deployed();
    // Get campaign
    const campaign = await CrowdFundERC677Instance.campaigns.call("1");
    assert.equal(campaign.endAt, 0, "Campaign has end date");
  });

  it("should return campaign category", async () => {
    // Instance
    const CrowdFundERC677Instance = await CrowdFundERC677.deployed();
    // Get campaign
    const campaign = await CrowdFundERC677Instance.campaigns.call("1");
    assert.equal(campaign.category, "", "Campaign has a category");
  });

  it("should return campaign title", async () => {
    // Instance
    const CrowdFundERC677Instance = await CrowdFundERC677.deployed();
    // Get campaign
    const campaign = await CrowdFundERC677Instance.campaigns.call("1");
    assert.equal(campaign.title, "", "Campaign has a title");
  });

  it("should return campaign description", async () => {
    // Instance
    const CrowdFundERC677Instance = await CrowdFundERC677.deployed();
    // Get campaign
    const campaign = await CrowdFundERC677Instance.campaigns.call("1");
    assert.equal(campaign.description, "", "Campaign has a description");
  });

  it("should return creators campaigns", async () => {
    // Instance
    const CrowdFundERC677Instance = await CrowdFundERC677.deployed();
    // Get campaigns
    const campaigns = await CrowdFundERC677Instance.creatorCamps.call(
      accounts[0]
    );
    assert.equal(campaigns, 0, "More than 1 campaigns");
  });

  it("should return campaign contributors", async () => {
    // Instance
    const CrowdFundERC677Instance = await CrowdFundERC677.deployed();
    // Get campaigns
    const contributors = await CrowdFundERC677Instance.totalContributors.call(
      "1"
    );
    assert.equal(contributors, 0, "More than 1 contributors");
  });

  it("should return campaign contributors", async () => {
    // Instance
    const CrowdFundERC677Instance = await CrowdFundERC677.deployed();
    // Get campaigns
    const contributors = await CrowdFundERC677Instance.totalContributors.call(
      "1"
    );
    assert.equal(contributors, 0, "More than 1 contributors");
  });
});

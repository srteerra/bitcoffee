const Migrations = artifacts.require("Migrations");
const Bitcoffee = artifacts.require("Bitcoffee");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
  deployer.deploy(Bitcoffee, "Bitcoffee", "BITC", 3, 10000000000);
};

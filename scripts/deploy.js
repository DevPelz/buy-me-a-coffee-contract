const hre = require("hardhat");
const ethers = require("ethers");

async function main() {
  const Coffee = await hre.ethers.deployContract("BuyMeACoffee", []);

  await Coffee.waitForDeployment();

  console.log(`Coffee contract deployed to ${Coffee.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

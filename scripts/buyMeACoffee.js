const hre = require("hardhat");

async function main() {
  const CoffeeAddr = "0x642C038e94F1d75d79bd08D3cf73D1ff82b464B6";
  const ICoffeeContract = await hre.ethers.getContractAt(
    "IBuyCoffee",
    CoffeeAddr
  );

  console.log("==========Buying Coffee==========");
  console.log(
    `Bought Coffe: ${await ICoffeeContract.buyCoffee(
      "Latte",
      "Enjoy the coffee",
      { value: hre.ethers.parseEther("0.00002") }
    )}`
  );
  console.log("================================");

  console.log("==========Getting Memos=========");
  console.log(await ICoffeeContract.getMemos());
  console.log("================================");

  console.log("==========Withdrawing Tips==========");
  console.log(`Tips: ${await ICoffeeContract.withdrawTips()}`);
  console.log("================================");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

import { expect } from "chai";
import { ethers } from "hardhat";

// import { Bridge } from "../../typechain";

describe("Bridge Unit Test", function () {
  let bridge: any;
  beforeEach(async function () {
    const Timer = await ethers.getContractFactory("Timer");
    const timer = await Timer.deploy();
    await timer.deployed();
    const Finder = await ethers.getContractFactory("Finder");
    const finder = await Finder.deploy();
    await finder.deployed();

    const Bridge = await ethers.getContractFactory("Bridge");
    bridge = await Bridge.deploy(finder.address, timer.address);
    await bridge.deployed();
  });

  it.skip("deposit", async function () {
    await expect(bridge.deposit()).to.emit(bridge, "Deposit");
  });

  it.skip("propose", async function () {
    await expect(bridge.propose()).to.emit(bridge, "Propose");
  });

  it.skip("dispute", async function () {
    await expect(bridge.dispute()).to.emit(bridge, "Dispute");
  });

  it.skip("withdraw", async function () {
    await expect(bridge.withdraw()).to.emit(bridge, "Withdraw");
  });
});

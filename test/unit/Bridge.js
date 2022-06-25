const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Bridge Unit Test", function () {
  let mockUMA;
  let bridge;
  beforeEach(async function () {
    const MockUMA = await ethers.getContractFactory("MockUMA");
    mockUMA = await MockUMA.deploy();
    await mockUMA.deployed();
    const Bridge = await ethers.getContractFactory("Bridge");
    bridge = await Bridge.deploy(mockUMA.address);
    await bridge.deployed();
  });

  it("xSend", async function () {
    await expect(bridge.xSend()).to.emit(bridge, "Send");
  });

  it("xReceive", async function () {
    await expect(mockUMA.call(bridge.address)).to.emit(bridge, "Receive");
  });
});

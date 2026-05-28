import assert from "node:assert/strict";
import { describe, it } from "node:test";

import { network } from "hardhat";

describe("Counter", async function () {
  const { viem } = await network.create();

  it("starts at zero", async function () {
    const counter = await viem.deployContract("Counter");

    assert.equal(await counter.read.number(), 0n);
  });

  it("setNumber updates the stored value", async function () {
    const counter = await viem.deployContract("Counter");
    const value = 42n;

    await counter.write.setNumber([value]);

    assert.equal(await counter.read.number(), value);
  });

  it("increment increases the stored value by one", async function () {
    const counter = await viem.deployContract("Counter");

    await counter.write.setNumber([10n]);
    await counter.write.increment();

    assert.equal(await counter.read.number(), 11n);
  });

  it("addToNumber updates the stored value", async function () {
    const counter = await viem.deployContract("Counter");

    await counter.write.setNumber([10n]);
    await counter.write.addToNumber([7n]);

    assert.equal(await counter.read.number(), 17n);
  });

  it("add returns the sum of two values", async function () {
    const counter = await viem.deployContract("Counter");

    const result = await counter.read.add([3n, 5n]);

    assert.equal(result, 8n);
  });
});

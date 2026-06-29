import assert from "node:assert/strict";
import test from "node:test";
import {
  calculateAddressCongestionIndex,
  classifyCongestion,
  congestionMetrics,
  congestionSurfaces,
  validateAddressCongestionTheory
} from "../src/addressCongestionTheory.js";

test("address congestion theory defines ten congestion surfaces and six metrics", () => {
  assert.equal(validateAddressCongestionTheory().length, 0);
  assert.equal(congestionSurfaces.length, 10);
  assert.equal(congestionMetrics.length, 6);
});

test("address congestion index classifies low and high pressure states", () => {
  const clear = calculateAddressCongestionIndex({
    responseTimeMs: 120,
    targetResponseTimeMs: 500,
    queueLength: 2,
    queueCapacity: 100,
    utilization: 0.2,
    cacheMissRate: 0.1
  });
  assert.equal(classifyCongestion(clear), "clear");

  const critical = calculateAddressCongestionIndex({
    responseTimeMs: 1500,
    targetResponseTimeMs: 500,
    queueLength: 95,
    queueCapacity: 100,
    utilization: 0.97,
    cacheMissRate: 0.9
  });
  assert.equal(classifyCongestion(critical), "critical");
});

test("morphism, cache, permission, and AI congestion are explicit research surfaces", () => {
  const ids = new Set(congestionSurfaces.map((surface) => surface.id));
  for (const required of [
    "address-morphism-congestion",
    "address-cache-congestion",
    "address-permission-congestion",
    "address-ai-inference-congestion"
  ]) {
    assert.ok(ids.has(required), `${required} should exist`);
  }
});


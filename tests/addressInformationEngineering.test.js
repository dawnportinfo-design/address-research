import assert from "node:assert/strict";
import test from "node:test";
import {
  addressInformationEngineeringLayers,
  allAddressInformationFields,
  validateAddressInformationEngineering
} from "../src/addressInformationEngineering.js";

test("address information engineering has coherent layers", () => {
  assert.equal(validateAddressInformationEngineering().length, 0);
  assert.deepEqual(
    addressInformationEngineeringLayers.map((layer) => layer.id),
    [
      "mathematics-information-theory",
      "data-models",
      "spatial-theory",
      "temporal-theory",
      "quality-theory",
      "computation-theory",
      "distributed-infrastructure",
      "congestion-performance-theory"
    ]
  );
});

test("address information engineering covers at least forty theory fields", () => {
  const fields = allAddressInformationFields();
  assert.ok(fields.length >= 40);
  assert.equal(new Set(fields.map((item) => item.field)).size, fields.length);
});

test("core AMT dependencies are represented in the engineering map", () => {
  const fields = new Set(allAddressInformationFields().map((item) => item.field));
  for (const required of [
    "address-equivalence-theory",
    "address-category-theory",
    "address-information-theory",
    "address-reference-model",
    "address-boundary-theory",
    "address-history-theory",
    "address-ambiguity-theory",
    "address-matching-theory",
    "address-synchronization-theory"
  ]) {
    assert.ok(fields.has(required), `${required} should exist`);
  }
});
